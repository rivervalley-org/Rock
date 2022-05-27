
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;

using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;
using ListItem = System.Web.UI.WebControls.ListItem;

namespace RockWeb.Plugins.org_riverValley.Finance
{
    /// <summary>
    /// Template block for developers to use to start a new block.
    /// </summary>
    [DisplayName( "Managed Missions Import" )]
    [Category( "River Valley > Finance" )]
    [Description( "Block for importing transactions from Managed Missions and linking them to a mission trip group." )]
    [TextField( "Foreign Key", "The Foreign Key that was used when importing people and groups from MM. This is used to match the Managed Mission Donor Key to a Person Alias Foreign Id.", false, "MM", "", 1 )]   
    [AccountField( "Root Account", "The account to use as the root of the account picker.", true, "", "", 2 )]
    [LinkedPage( "Batch Detail Page", "The batch detail page.", true, "", "", 3 )]
    [DefinedValueField( Rock.SystemGuid.DefinedType.FINANCIAL_CURRENCY_TYPE, "Currency Type", "The currency type to use for each transaction.", true, false, "", "", 4 )]
    [DefinedValueField( Rock.SystemGuid.DefinedType.FINANCIAL_SOURCE_TYPE, "Source", "The source to use for each transaction.", true, false, Rock.SystemGuid.DefinedValue.FINANCIAL_SOURCE_TYPE_WEBSITE, "", 5)]
    [DefinedValueField( Rock.SystemGuid.DefinedType.PERSON_CONNECTION_STATUS, "Default Connection Status", "The connection status to use when creating a new person", true, false, Rock.SystemGuid.DefinedValue.PERSON_CONNECTION_STATUS_WEB_PROSPECT, "", 6 )]
    [CampusesField( "Default Campus", "The attribute value to use as the default campus when creating a new person.", true, "", "", 7 )]
    public partial class ManagedMissionsImport : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int? _binaryFileId = null;
        private List<MMTransaction> _transactions = new List<MMTransaction>();
        private string _foreignKey = "MM";
        private int? _rootAccountId;
        private List<Account> _accounts;

        private IHubContext _hubContext = GlobalHost.ConnectionManager.GetHubContext<RockMessageHub>();
        private static int _transactionTypeContributionId = Rock.Web.Cache.DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.TRANSACTION_TYPE_CONTRIBUTION.AsGuid() ).Id;
        private static int _currencyTypeAch = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.CURRENCY_TYPE_ACH.AsGuid() ).Id;
        private decimal _totalAmount = 0.0M;

        protected string signalREventName = "achTransactionImport";

        #endregion

        #region Base Control Methods

        /// <summary>
        /// Restores the view-state information from a previous user control request that was saved by the <see cref="M:System.Web.UI.UserControl.SaveViewState" /> method.
        /// </summary>
        /// <param name="savedState">An <see cref="T:System.Object" /> that represents the user control state to be restored.</param>
        protected override void LoadViewState( object savedState )
        {
            base.LoadViewState( savedState );
            _binaryFileId = ViewState["BinaryFileId"] as int?;

            string json = ViewState["Transactions"] as string;
            if ( string.IsNullOrWhiteSpace( json ) )
            {
                _transactions = new List<MMTransaction>();
            }
            else
            {
                _transactions = JsonConvert.DeserializeObject <List<MMTransaction>>( json );
                _transactions = _transactions.
                    OrderBy( t => t.MissionTrip )
                    .ThenBy( t => t.DonorFullName )
                    .ThenBy( t => t.DonorImportExportKey )
                    .ToList();
            }
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            signalREventName = string.Format( "achTransactionImport_{0}_{1}", this.BlockId, Session.SessionID );

            RockPage.AddScriptLink( "~/Scripts/jquery.signalR-2.2.0.min.js", fingerprint: false );

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            gTransactions.RowDataBound += gTransactions_RowDataBound;

            _foreignKey = GetAttributeValue( "ForeignKey" );

            //
            Guid? rootAccountGuid = GetAttributeValue( "RootAccount" ).AsGuidOrNull();
            if ( rootAccountGuid.HasValue )
            {
                var accountService = new FinancialAccountService( new RockContext() );

                var account = accountService.Get( rootAccountGuid.Value );
                if ( account != null )
                {
                    _rootAccountId = account.Id;

                    _accounts = accountService.Queryable().AsNoTracking()
                        .Where( ac => ac.ParentAccount.Id == _rootAccountId )
                        .OrderBy( ac => ac.Order )
                        .Select( ac => new Account
                        {
                            AccountId = ac.Id,
                            AccountName = ac.Name
                        } )
                        .ToList();
                }
            }
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            nbMessage.Visible = false;

            if ( !Page.IsPostBack )
            {
                dpBatchDate.SelectedDate = RockDateTime.Today;

                if ( !GetAttributeValue( "CurrencyType" ).AsGuidOrNull().HasValue || !GetAttributeValue( "RootAccount"  ).AsGuidOrNull().HasValue )
                {
                    ShowWarning( "Missing Settings", "Please configure the block settings." );
                }
                else
                {
                    ShowEntry();
                }
            }
        }

        /// <summary>
        /// Saves any user control view-state changes that have occurred since the last page postback.
        /// </summary>
        /// <returns>
        /// Returns the user control's current view state. If there is no view state associated with the control, it returns null.
        /// </returns>
        protected override object SaveViewState()
        {
            var jsonSetting = new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                ContractResolver = new Rock.Utility.IgnoreUrlEncodedKeyContractResolver()
            };

            ViewState["BinaryFileId"] = _binaryFileId;
            ViewState["Transactions"] = JsonConvert.SerializeObject( _transactions, Formatting.None, jsonSetting );
            ;
            return base.SaveViewState();
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            ShowEntry();
        }

        /// <summary>
        /// Handles the FileUploaded event of the fuMMTxnFile control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void fuMMTxnFile_FileUploaded( object sender, EventArgs e )
        {
            _binaryFileId = fuMMTxnFile.BinaryFileId;

            // Validate the CSV (method will display error message if not valid
            IsFileValid();
        }

        /// <summary>
        /// Handles the Click event of the btnImport control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnImport_Click( object sender, EventArgs e )
        {
            // If the CSV is valid, ask for a confirmation
            if ( IsFileValid() )
            {
                _transactions = GetMMFile();
                ShowConfirmation();
            }
        }

        /// <summary>
        /// Handles the Click event of the btnConfirm control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnConfirm_Click( object sender, EventArgs e )
        {
            // send signalR message to start progress indicator
            int progress = 0;
            _hubContext.Clients.All.receiveNotification( signalREventName, "0" );

            List<MMTransaction> MMGifts = null;
            int? total = null;
            int? batchId = null;
            string batchName = string.Empty;

            int currencyTypeId = DefinedValueCache.Get( GetAttributeValue( "CurrencyType" ).AsGuid() ).Id;
            int sourceTypeId = DefinedValueCache.Get( GetAttributeValue( "Source" ).AsGuid() ).Id;

            using ( var rockContext = new RockContext() )
            {
                MMGifts = _transactions;

                // Get the number of transactions
                if ( MMGifts != null )
                {
                    total = MMGifts.Count();
                }

                if ( MMGifts != null && total.HasValue && total.Value > 0 )
                {
                    var batchService = new FinancialBatchService( rockContext );
                    FinancialBatch batch = null;

                    // Load (or create) the batch
                    if ( batch == null )
                    {
                        batchName = tbBatchName.Text.IsNotNullOrWhiteSpace() ? tbBatchName.Text : "Managed Missions Batch";

                        batch = new FinancialBatch();
                        batch.Guid = Guid.NewGuid();
                        batch.Name = batchName;
                        batch.Status = BatchStatus.Open;
                        batch.BatchStartDateTime = dpBatchDate.SelectedDate ?? RockDateTime.Today;
                        batch.BatchEndDateTime = batch.BatchStartDateTime.Value.AddDays( 1 );
                        batch.ControlAmount = 0;
                        batchService.Add( batch );

                        rockContext.SaveChanges();

                        batchId = batch.Id;
                    }
                    else
                    {
                        batchName = batch.Name;
                    }
                }
            }

            // Initialize the status variables
            int existingPersonCount = 0;
            int newPersonCount = 0;
            int errorCount = 0;

            var allErrorMessages = new List<string>();

            // Process each transaction
            foreach ( var gift in MMGifts )
            {
                var errorMessages = new List<string>();

                var status = ProcessTransaction( gift, batchId, currencyTypeId, sourceTypeId, out errorMessages );

                switch ( status )
                {
                    case ProcessStatus.ExistingPerson: existingPersonCount++; break;
                    case ProcessStatus.NewPerson: newPersonCount++; break;
                    case ProcessStatus.Error: errorCount++; break;
                }

                allErrorMessages.AddRange( errorMessages );

                // Update progress using signalR
                progress++;
                int percentage = ( progress * 100 ) / total.Value;
                _hubContext.Clients.All.receiveNotification( signalREventName, percentage.ToString( "N0" ) );
            }

            // update success message to indicate the txns that were updated
            StringBuilder sb = new StringBuilder();
            sb.AppendFormat( "<li>{0:N0} {1} processed.</li>", total.Value, "transaction".PluralizeIf( total.Value > 1 ) );
            sb.AppendFormat( "<li>{0:N0} {1} matched to an existing person.</li>", existingPersonCount,
                ( existingPersonCount == 1 ? "transaction was" : "transactions were" ) );
            sb.AppendFormat( "<li>{0:N0} {1} matched to a new person.</li>", newPersonCount,
                ( newPersonCount == 1 ? "transaction was" : "transactions were" ) );
            if ( errorCount > 0 )
            {
                sb.AppendFormat( "<li>{0:N0} {1} NOT imported due to error during import (see errors below).</li>", errorCount,
                    ( errorCount == 1 ? "transaction was" : "transactions were" ) );
            }

            using ( var rockContext = new RockContext() )
            {
                var batch = new FinancialBatchService( rockContext ).Get( batchId.Value );
                if ( batch != null )
                {
                    // update batch control amount
                    batch.ControlAmount += _totalAmount;
                    rockContext.SaveChanges();

                    // Add link to batch
                    var qryParam = new Dictionary<string, string>();
                    qryParam.Add( "batchId", batchId.ToString() );
                    string batchUrl = LinkedPageUrl( "BatchDetailPage", qryParam );
                    string batchLink = string.Format( "<a href='{0}'>{1}</a>", batchUrl, batch.Name );

                    int totalTransactions = existingPersonCount + newPersonCount;
                    string summaryformat = totalTransactions == 1 ?
                        "<li>{0} transaction of {1} was added to the {2} batch.</li>" :
                        "<li>{0} transactions totaling {1} were added to the {2} batch</li>";
                    sb.AppendFormat( summaryformat, totalTransactions.ToString( "N0" ), _totalAmount.FormatAsCurrency(), batchLink );
                }
            }

            nbSuccess.Text = string.Format( "<ul>{0}</ul>", sb.ToString() );

            // Display any errors that occurred
            if ( allErrorMessages.Any() )
            {
                StringBuilder sbErrors = new StringBuilder();
                foreach ( var errorMsg in allErrorMessages )
                {
                    sbErrors.AppendFormat( "<li>{0}</li>", errorMsg );
                }

                nbErrors.Text = string.Format( "<ul>{0}</ul>", sbErrors.ToString() );
                nbErrors.Visible = true;
            }
            else
            {
                nbErrors.Visible = false;
            }

            ShowResults();

        }

        /// <summary>
        /// Handles the Click event of the btnCancelConfirm control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnCancelConfirm_Click( object sender, EventArgs e )
        {
            ShowEntry();
        }

        /// <summary>
        /// Handles the Click event of the btnImportAnother control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnImportAnother_Click( object sender, EventArgs e )
        {
            fuMMTxnFile.BinaryFileId = null;

            ShowEntry();
        }

        /// <summary>
        /// Handles the RowDataBound event of the gRegistrants control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridViewRowEventArgs"/> instance containing the event data.</param>
        private void gTransactions_RowDataBound( object sender, GridViewRowEventArgs e )
        {
            var transaction = e.Row.DataItem as MMTransaction;
            if ( transaction != null )
            {
                // donor
                var lDonor = e.Row.FindControl( "lDonor" ) as Literal;
                if ( lDonor != null )
                {
                    if ( transaction.DonorImportExportKey.IsNotNullOrWhiteSpace() )
                    {
                        lDonor.Text = transaction.DonorFullName + " (" + transaction.DonorImportExportKey + ")";
                    }
                    else
                    {
                        lDonor.Text = transaction.DonorFullName;
                    }
                }

                // mission trip
                var lMissionTrip = e.Row.FindControl( "lMissionTrip" ) as Literal;
                if ( lMissionTrip != null )
                {
                    lMissionTrip.Text = transaction.MissionTrip + " (" + transaction.MissionTripImportExportKey.ToString() + ")";
                }

                // date
                var lDate = e.Row.FindControl( "lDate" ) as Literal;
                if ( lDate != null )
                {
                    lDate.Text = transaction.DateProcessed.ToString( "MM/dd/yyyy" );
                }

                // amount
                var lAmount = e.Row.FindControl( "lAmount" ) as Literal;
                if ( lAmount != null )
                {
                    lAmount.Text = transaction.DonationAmount;
                }

                var ddlAccount = e.Row.FindControl( "ddlAccount" ) as RockDropDownList;
                if ( ddlAccount != null )
                {
                    ddlAccount.Items.Add( new ListItem() );
                    foreach( var account in _accounts )
                    {
                        ddlAccount.Items.Add( new ListItem( account.AccountName, account.AccountId.ToString() ));
                    }

                    ddlAccount.SetValue( transaction.RockFinancialAccountId );
                }

                if ( !transaction.RockFinancialAccountId.HasValue)
                {
                    e.Row.CssClass = "danger";
                }
            }
        }

        /// <summary>
        /// Handles the SelectItem event of the gpGroup control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ddlAccount_SelectedIndexChanged( object sender, EventArgs e )
        {
            var control = ( System.Web.UI.Control ) sender;
            if ( control != null )
            {
                var accountPicker = ( RockDropDownList ) control;
                if ( accountPicker != null )
                {
                    var parent = accountPicker.Parent;
                    if ( parent != null )
                    {
                        var row = ( GridViewRow ) parent.Parent;
                        if ( row != null )
                        {
                            var transaction = _transactions.ElementAt( row.RowIndex );
                            transaction.RockFinancialAccountId = accountPicker.SelectedValueAsId();

                            // update all of the other account pickers that match the same mission trip
                            foreach ( var txn in _transactions
                                .Where( t => t.MissionTripImportExportKey == transaction.MissionTripImportExportKey ) )
                            {
                                txn.RockFinancialAccountId = accountPicker.SelectedValueAsId();
                            }
                        }
                    }
                }

                ShowConfirmation();
            }
        }

        /// <summary>
        /// Binds the grid.
        /// </summary>
        private void BindGrid()
        {
            gTransactions.DataSource = _transactions.
                OrderBy( t => t.MissionTrip )
                .ThenBy( t => t.DonorFullName )
                .ThenBy( t => t.DonorImportExportKey )
                .ToList();
            gTransactions.DataBind();
        }

        #endregion

        #region Methods

        /// <summary>
        /// Shows the entry.
        /// </summary>
        private void ShowEntry()
        {
            fuMMTxnFile.Visible = true;
            tbBatchName.Visible = true;
            dpBatchDate.Visible = true;
            btnImport.Visible = true;

            pnlEntry.Visible = true;
            pnlConfirm.Visible = false;
            pnlResults.Visible = false;
        }

        /// <summary>
        /// Shows the confirmation.
        /// </summary>
        private void ShowConfirmation()
        {
            // Get the number of transactions in the CSV file
            int? importCount = null;
            int missingAccounts = 0;

            BindGrid();

            if ( _transactions != null )
            {
                importCount = _transactions.Count();
                missingAccounts = _transactions.Where( t => !t.RockFinancialAccountId.HasValue ).Count();

                importCount = importCount - missingAccounts;
            }

            if ( importCount.HasValue )
            {
                string batchName = "a new batch";
                var binaryFile = new BinaryFileService( new RockContext() ).Get( _binaryFileId.Value );
                if ( binaryFile != null )
                {
                    batchName = string.Format( "a new batch (<strong><em>{0}</em></strong>)", Path.GetFileNameWithoutExtension( binaryFile.FileName ) );
                }

                if ( tbBatchName.Text.IsNotNullOrWhiteSpace() )
                {
                    batchName = string.Format( "a new batch (<strong><em>{0}</em></strong>)", tbBatchName.Text );
                }

                if ( missingAccounts > 0 )
                {
                    nbConfirm.Text = string.Format( "<strong>{0:N0}</strong> transactions need a Rock account assigned to continue.", missingAccounts );
                    nbConfirm.NotificationBoxType = NotificationBoxType.Danger;
                }
                else
                {
                    nbConfirm.Text = string.Format( "This will import <strong>{0:N0}</strong> transactions to {1}. Click <em>Confirm</em> to continue.", importCount.Value, batchName );
                    nbConfirm.NotificationBoxType = NotificationBoxType.Info;
                }

                // Show the confirm/status/result dialog 
                pnlEntry.Visible = false;
                pnlConfirm.Visible = true;
                pnlResults.Visible = false;
                btnConfirm.Visible = missingAccounts == 0;
            }
        }

        /// <summary>
        /// Shows the results.
        /// </summary>
        private void ShowResults()
        {
            pnlEntry.Visible = false;
            pnlConfirm.Visible = false;
            pnlResults.Visible = true;
        }

        /// <summary>
        /// Processes a transaction.
        /// </summary>
        /// <param name="giftElement">The gift element.</param>
        /// <param name="batch">The batch.</param>
        /// <param name="rockContext">The rock context.</param>
        /// <param name="envelopeAttributeId">The envelope attribute identifier.</param>
        /// <param name="errorMessages">The error messages.</param>
        /// <returns></returns>
        private ProcessStatus ProcessTransaction( MMTransaction gift, int? batchId, int currencyTypeId, int sourceTypeId, out List<string> errorMessages )
        {
            errorMessages = new List<string>();
            ProcessStatus processStatus = ProcessStatus.NewPerson;

            try
            {
                using ( var rockContext = new RockContext() )
                {
                    // Start to create the transaction
                    var txn = new FinancialTransaction();
                    txn.BatchId = batchId;
                    txn.TransactionTypeValueId = _transactionTypeContributionId;
                    txn.TransactionDateTime = gift.DateProcessed;
                    txn.SourceTypeValueId = sourceTypeId;
                    txn.Summary = string.Format( "Donor: {0}; Mission Trip: {1}; Team Member: {2}; Date: {3}; Amount: {4}", 
                        gift.DonorFullName,
                        gift.MissionTrip,
                        gift.TeamMember,
                        gift.DateProcessed.ToShortDateString(), 
                        gift.DonationAmount );

                    txn.FinancialPaymentDetail = new FinancialPaymentDetail();
                    txn.FinancialPaymentDetail.CurrencyTypeValueId = currencyTypeId;

					PersonAlias personAlias = null;
					
                    // Try to find a person to associate with this account
                    if ( gift.DonorImportExportKey.IsNotNullOrWhiteSpace() )
                    {
                        personAlias = new PersonAliasService( rockContext )
                                        .Queryable()
                                        .Where( a =>
                                            a.ForeignKey == _foreignKey + "_" + gift.DonorImportExportKey )
                                        .FirstOrDefault(); 
                    }

                    // Next try to match by name and email
                    if ( personAlias == null )
                    {
                        var person = new PersonService( rockContext ).FindPerson( gift.DonorFirstName, gift.DonorLastName, gift.EmailAddress, false, true, true );
                        personAlias = person != null && person.PrimaryAlias != null ? person.PrimaryAlias : null;
                    }

                    // If we couldn't find a match, create the person
                    if ( personAlias == null && gift.DonorFirstName.IsNotNullOrWhiteSpace() && gift.DonorLastName.IsNotNullOrWhiteSpace() )
                    {
                        // Add New Person
                        var person = new Person();
                        person.FirstName = gift.DonorFirstName.FixCase();
                        person.LastName = gift.DonorLastName.FixCase();
                        person.IsEmailActive = true;
                        person.Email = gift.EmailAddress;
                        person.EmailPreference = EmailPreference.EmailAllowed;
                        person.RecordTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_TYPE_PERSON.AsGuid() ).Id;

                        if ( gift.PhoneNumber.IsNotNullOrWhiteSpace() )
                        {
                            var number = new PhoneNumber();
                            number.Number = PhoneNumber.CleanNumber( gift.PhoneNumber );
                            number.NumberTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_PHONE_TYPE_MOBILE.AsGuid() ).Id;
                            number.IsMessagingEnabled = true;

                            person.PhoneNumbers.Add( number ); 
                        }

                        var defaultConnectionStatus = DefinedValueCache.Get( GetAttributeValue( "DefaultConnectionStatus" ).AsGuid() );
                        if ( defaultConnectionStatus != null )
                        {
                            person.ConnectionStatusValueId = defaultConnectionStatus.Id;
                        }

                        var defaultRecordStatus = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_STATUS_ACTIVE.AsGuid() );
                        if ( defaultRecordStatus != null )
                        {
                            person.RecordStatusValueId = defaultRecordStatus.Id;
                        }

                        var defaultCampusGuid = GetAttributeValue( "DefaultCampus" ).AsGuidOrNull();
                        var defaultCampus = defaultCampusGuid.HasValue ? CampusCache.Get( defaultCampusGuid.Value ) : null;
                        var defaultCampusId = defaultCampus.Id;

                        var familyGroup = PersonService.SaveNewPerson( person, rockContext, defaultCampusId, false );
                        if ( familyGroup != null && familyGroup.Members.Any() )
                        {
                            person = familyGroup.Members.Select( m => m.Person ).First();
                            personAlias = person.PrimaryAlias;
                        }

                        //todo address
                        if (
                            gift.Address1.IsNotNullOrWhiteSpace() &&
                            gift.City.IsNotNullOrWhiteSpace() &&
                            gift.State.IsNotNullOrWhiteSpace() &&
                            gift.Zip.IsNotNullOrWhiteSpace()
                            )
                        {
                            GroupService.AddNewGroupAddress( rockContext, familyGroup, Rock.SystemGuid.DefinedValue.GROUP_LOCATION_TYPE_HOME, gift.Address1, gift.Address2, gift.City, gift.State, gift.Zip, "US" ); 
                        }
                    }
                    else
                    {
                        processStatus = ProcessStatus.ExistingPerson;
                    }

                    // set foreign key to make matching faster for next time 
                    if ( gift.DonorImportExportKey.IsNotNullOrWhiteSpace() )
                    {
                        personAlias.ForeignKey = _foreignKey + "_" + gift.DonorImportExportKey; 
                    }
					
                    txn.AuthorizedPersonAliasId = personAlias != null ? personAlias.Id : ( int? ) null;

                    // get account
                    FinancialAccount account = null;
                    account = new FinancialAccountService( rockContext ).Get( gift.RockFinancialAccountId.Value );

                    decimal? amount = gift.DonationAmount.Replace( "$", "" ).AsDecimalOrNull();

                    if ( account != null && amount.HasValue )
                    {
                        var txnDetail = new FinancialTransactionDetail();
                        txnDetail.AccountId = account.Id;
                        txnDetail.Amount = amount.Value;
                        txn.TransactionDetails.Add( txnDetail );

                        _totalAmount += amount.Value;
                    }
                    else
                    {
                        errorMessages.Add( string.Format( "Donor: {0}; Mission Trip: {1}; Team Member: {2}; Date: {3}; Amount: {4}; Error: Invalid Account or Amount",
                            gift.DonorFullName,
                            gift.MissionTrip,
                            gift.TeamMember,
                            gift.DateProcessed.ToShortDateString(),
                            gift.DonationAmount ) );
                    }

                    if ( errorMessages.Any() )
                    {
                        return ProcessStatus.Error;
                    }

                    // Save the transaction and update the batch control amount
                    new FinancialTransactionService( rockContext ).Add( txn );
                    rockContext.SaveChanges();

                    return processStatus;
                }

            }

            catch ( Exception ex )
            {
                errorMessages.Add( string.Format( "Donor: {0}; Mission Trip: {1}; Team Member: {2}; Date: {3}; Amount: {4}; Error: {5}",
                            gift.DonorFullName,
                            gift.MissionTrip,
                            gift.TeamMember,
                            gift.DateProcessed.ToShortDateString(),
                            gift.DonationAmount,
                            ex.Message ) );
                return ProcessStatus.Error;
            }
        }

        /// <summary>
        /// Determines whether the binary file has valid CSV.
        /// </summary>
        /// <returns></returns>
        private bool IsFileValid()
        {
            try
            {
                var mmFile = GetMMFile();
                if ( mmFile == null )
                {
                    ShowError( "Invalid Import File", "Could not read CSV file." );
                    return false;
                }

                if ( !mmFile.Any() )
                {
                    ShowError( "Warning", "The import file does not appear to contain any transactions." );
                    return false;
                }
                
                return true;
            }
            catch ( Exception ex )
            {
                ShowError( "Invalid Import File", ex.Message );
                return false;
            }
        }

        /// <summary>
        /// Gets the CSV.
        /// </summary>
        /// <returns></returns>
        private List<MMTransaction> GetMMFile()
        {
            if ( _binaryFileId.HasValue )
            {
                using ( var rockContext = new RockContext() )
                {
                    var binaryFile = new BinaryFileService( rockContext ).Get( _binaryFileId.Value );
                    if ( binaryFile != null )
                    {
                        using ( var stream = binaryFile.ContentStream )
                        {
                            using ( var tr = new StreamReader( stream ) )
                            {
                                CsvReader csvReader = new CsvReader( tr );
                                csvReader.Configuration.HasHeaderRecord = true;
								csvReader.Configuration.RegisterClassMap<MMTransactionClassMap>();
                                return csvReader.GetRecords<MMTransaction>().ToList();
                            }
                        }
                    }
                }
            }
            return null;
        }

        #region Show Notifications

        /// <summary>
        /// Shows a warning.
        /// </summary>
        /// <param name="title">The title.</param>
        /// <param name="message">The message.</param>
        private void ShowWarning( string title, string message )
        {
            nbMessage.NotificationBoxType = NotificationBoxType.Warning;
            ShowMessage( title, message );
        }

        /// <summary>
        /// Shows a error.
        /// </summary>
        /// <param name="title">The title.</param>
        /// <param name="message">The message.</param>
        private void ShowError( string title, string message )
        {
            nbMessage.NotificationBoxType = NotificationBoxType.Danger;
            ShowMessage( title, message );
        }

        /// <summary>
        /// Shows a message.
        /// </summary>
        /// <param name="title">The title.</param>
        /// <param name="message">The message.</param>
        private void ShowMessage( string title, string message )
        {
            nbMessage.Title = title;
            nbMessage.Text = message;
            nbMessage.Visible = true;
        }

        #endregion

        #endregion

        /// <summary>
        /// Enumeration for tracking transction status
        /// </summary>
        private enum ProcessStatus
        {
            ExistingPerson = 0,
            NewPerson = 1,
            Error = 2
        }
    }

    #region Helper Classes

    public class MMTransaction
    {
        public int MissionTripImportExportKey { get; set; }
        public string MissionTrip { get; set; }
        public int? TeamMemberImportExportKey { get; set; }
        public string TeamMember { get; set; }
        public DateTime DateProcessed { get; set; }
        public string DonorImportExportKey { get; set; }
        public string DonorFirstName { get; set; }
        public string DonorLastName { get; set; }
        public string ReferenceNumber { get; set; }
        public string DonationAmount { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
        public string TaxDeductible { get; set; }
        public string RegularAttender { get; set; }
        public string ConfirmationCode { get; set; }
        public string Note { get; set; }
        public string IncomeAccountNumber { get; set; }
        public string PurposeCode { get; set; }
        public string Recurring { get; set; }

        public int? RockFinancialAccountId { get; set; }

        public string DonorFullName
        {
            get { return DonorFirstName + " " + DonorLastName; }
        }
    }

    public class MMTransactionClassMap : CsvClassMap<MMTransaction>
    {
        public MMTransactionClassMap()
        {
            Map( m => m.MissionTripImportExportKey ).Name( "Mission Trip Import/Export Key" );
            Map( m => m.MissionTrip ).Name( "Mission Trip" );
            Map( m => m.TeamMemberImportExportKey ).Name( "Team Member Import/Export Key" );
            Map( m => m.TeamMember ).Name( "Team Member" );
            Map( m => m.DateProcessed ).Name( "Date Processed" );
            Map( m => m.DonorImportExportKey ).Name( "Donor Import/Export Key" );
            Map( m => m.DonorFirstName ).Name( "Donor First Name" );
            Map( m => m.DonorLastName ).Name( "Donor Last Name" );
            Map( m => m.ReferenceNumber ).Name( "Reference Number" );
            Map( m => m.DonationAmount ).Name( "Donation Amount" );
            Map( m => m.Address1 ).Name( "Address 1" );
            Map( m => m.Address2 ).Name( "Address 2" );
            Map( m => m.City ).Name( "City" );
            Map( m => m.State ).Name( "State" );
            Map( m => m.Zip ).Name( "Zip" );
            Map( m => m.PhoneNumber ).Name( "Phone Number" );
            Map( m => m.EmailAddress ).Name( "Email Address" );
            Map( m => m.TaxDeductible ).Name( "Tax Deductible?" );
            Map( m => m.RegularAttender ).Name( "Regular Attender" );
            Map( m => m.ConfirmationCode ).Name( "Confirmation Code" );
            Map( m => m.Note ).Name( "Note" );
            Map( m => m.IncomeAccountNumber ).Name( "Income Account Number" );
            Map( m => m.PurposeCode ).Name( "Purpose Code" );
            Map( m => m.Recurring ).Name( "Recurring" );
        }
    }

    public class Account
    {
        public int AccountId { get; set; }
        public string AccountName { get; set; }
    }

    #endregion

}

