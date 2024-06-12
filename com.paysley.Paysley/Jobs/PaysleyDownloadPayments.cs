using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Quartz;
using Quartz.Util;
using RestSharp;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;

using com.paysley.Paysley;
using Rock.Search.Person;
using Rock.Utility.EntityCoding;
using System.Data.Entity.Migrations.Model;
using Rock.Communication;
using System.Runtime.Remoting.Messaging;
using Rock.Jobs;

namespace com.paysley.Paysley.Jobs
{
    [DisplayName( "Download Paysley Payments" )]
    [Category( "Paysley" )]
    [Description( "Job to download any payments from the Paysley platform." )]
    [DisallowConcurrentExecution]

    #region Job Attributes
    [TextField(
        "Api Url",
        Key = AttributeKey.ApiUrl,
        Description = "The Paysley API url to use.",
        IsRequired = true,
        DefaultValue = "https://live.paysley.io/v2/payments",
        Order = 0)]

    [TextField(
        "Authorization Token",
        Key = AttributeKey.AuthorizationToken,
        Description = "The Paysley authotization token to use.",
        IsRequired = true,
        DefaultValue = "",
        Order = 1 )]

    [IntegerField(
        "Days Back",
        Key = AttributeKey.DaysBack,
        Description = "The number of days prior to the current date to use as the start date when querying for scheduled payments that were processed.",
        IsRequired = true,
        DefaultValue = "7",
        Order = 2 )]

    [TextField(
        "Batch Name Prefix",
        Key = AttributeKey.BatchNamePrefix,
        Description = "The batch prefix name to use when creating a new batch i.e. 'P T2G 010120'.",
        IsRequired = false,
        DefaultValue = "P T2G",
        Order = 3 )]

    [DefinedValueField(       
        definedTypeGuid: Rock.SystemGuid.DefinedType.FINANCIAL_SOURCE_TYPE,
        "Transaction Source Type",
        Key = AttributeKey.TransactionSourceType,
        Description = "The source type to use for imported transactions",
        IsRequired = true,
        DefaultValue = Rock.SystemGuid.DefinedValue.FINANCIAL_SOURCE_TYPE_WEBSITE,
        Order = 4
        )]

    [DefinedValueField(
        definedTypeGuid: Rock.SystemGuid.DefinedType.FINANCIAL_CURRENCY_TYPE,
        "Currency Type",
        Key = AttributeKey.CurrencyType,
        Description = "The currency type to use for imported transactions",
        IsRequired = true,
        DefaultValue = Rock.SystemGuid.DefinedValue.CURRENCY_TYPE_CREDIT_CARD,
        Order = 5
        )]

    [AccountField(
        "Default Financial Account",
        Key = AttributeKey.DefaultFinancialAccount,
        Description = "The default account.",
        IsRequired = true,
        Order = 6
        )]

    [BooleanField(
        "Verbose Logging",
        Key = AttributeKey.VerboseLogging,
        Description = "Enable this setting to see additional logging.",
        IsRequired = true,
        DefaultBooleanValue = false,
        Order = 7
        )]
    #endregion
    public class PaysleyDownloadPayments : RockJob
    {
        #region Attribute Keys

        /// <summary>
        /// Keys to use for Block Attributes
        /// </summary>
        private static class AttributeKey
        {
            public const string ApiUrl = "ApiUrl";

            public const string AuthorizationToken = "AuthorizationToken";

            public const string DaysBack = "DaysBack";

            public const string BatchNamePrefix = "BatchNamePrefix";

            public const string TransactionSourceType = "TransactionSourceType";

            public const string CurrencyType = "CurrencyType";

            public const string DefaultFinancialAccount = "DefaultFinancialAccount";

            public const string VerboseLogging = "VerboseLogging";
        }

        #endregion Attribute Keys

        #region Private Variables

        List<string> _messages;

        private const int BATCH_SIZE = 20;
        private const string DEFINEDTYPE_PAYSLEYMAPPINGS = "8CCFCA3F-E307-4A4D-931E-5A6D81579B5D";

        #endregion

        /// <summary> 
        /// Empty constructor for job initialization
        /// <para>
        /// Jobs require a public empty constructor so that the
        /// scheduler can instantiate the class whenever it needs.
        /// </para>
        /// </summary>
        public PaysleyDownloadPayments()
        {
            _messages = new List<string>();
        }

        /// <summary>
        /// Executes the specified context.
        /// </summary>
        /// <param name="context">The context.</param>
        public override void Execute()
        {
            var exceptionMsgs = new List<string>();
            int transactionCount = 0;

            bool verboseLoggingEnabled = GetAttributeValue( AttributeKey.VerboseLogging ).AsBoolean();
            string url = GetAttributeValue( AttributeKey.ApiUrl );
            string authToken = GetAttributeValue( AttributeKey.AuthorizationToken );
            int daysBack = GetAttributeValue( AttributeKey.DaysBack ).AsIntegerOrNull() ?? 1;
            
            Guid sourceTypeValueGuid = GetAttributeValue( AttributeKey.TransactionSourceType ).AsGuid();
            int sourceTypeValueId = DefinedValueCache.Get( sourceTypeValueGuid ).Id;

            Guid defaultFinancialAccount = GetAttributeValue( AttributeKey.DefaultFinancialAccount ).AsGuid();
            int defaultAccountId = new FinancialAccountService( new RockContext() ).Get( defaultFinancialAccount ).Id;

            var rockContext = new RockContext();

            DateTime today = RockDateTime.Today;
            TimeSpan daysBackTimeSpan = new TimeSpan( daysBack, 0, 0, 0 );

            string batchNamePrefix = GetAttributeValue( AttributeKey.BatchNamePrefix );

            DateTime endDateTime = today;
            DateTime startDateTime = endDateTime.Subtract( daysBackTimeSpan );

            int numOfDays = ( endDateTime - startDateTime ).Days;

            string errorMessage = string.Empty;

            for ( int x = 0; x < numOfDays; x++ )
            {
                var startDate = endDateTime.AddDays( -x - 1 );
                var endDate = endDateTime.AddDays( -x );

                // fetch payments
                int page = 1;
                var response = PaysleyGetPayments( url, authToken, page, BATCH_SIZE, startDate, endDate, out errorMessage );

                if ( errorMessage.IsNotNullOrWhiteSpace() )
                {
                    exceptionMsgs.Add( errorMessage );
                }

                while ( response != null && page <= response.page_count )
                {
                    response = PaysleyGetPayments( url, authToken, page, BATCH_SIZE, startDate, endDate, out errorMessage );

                    if ( errorMessage.IsNotNullOrWhiteSpace() )
                    {
                        exceptionMsgs.Add( errorMessage );
                    }

                    foreach ( var payment in response.payments )
                    {
                        rockContext = new RockContext();

                        // we only want successful transactions
                        if ( payment.status != "success" )
                        {
                            continue;
                        }

                        // if this is not a debit or a refund, then we should skip this
                        if ( payment.payment_type != PaymentType.PAYMENT_TYPE_CCDB && 
                             payment.payment_type != PaymentType.PAYMENT_TYPE_CCRV &&
                             payment.payment_type != PaymentType.PAYMENT_TYPE_CCRF )
                        {
                            continue;
                        }

                        if ( payment.amount <= 0 )
                        {
                            continue;
                        }

                        var financialTransactionService = new FinancialTransactionService( rockContext );

                        // check to see if transaction already exists
                        var txn = financialTransactionService.Queryable().AsNoTracking()
                            .Where( ft => ft.TransactionCode == payment.payment_id )
                            .FirstOrDefault();

                        // first, check to see if the payment is a refund
                        if ( payment.payment_type == PaymentType.PAYMENT_TYPE_CCRF || payment.payment_type == PaymentType.PAYMENT_TYPE_CCRV )
                        {
                            // find the original transaction
                            var orgTxn = financialTransactionService.Queryable().AsNoTracking()
                                .Where( ft => ft.TransactionCode == payment.reference_payment_id )
                                .FirstOrDefault();

                            // and that we didn't already process the refund
                            if ( orgTxn != null && !orgTxn.Refunds.Any() )
                            {
                                var refundTxn = financialTransactionService.ProcessRefund( orgTxn, payment.amount, null, "Transaction was refunded through Paysley.", false, "", out errorMessage );

                                if ( refundTxn != null )
                                {
                                    refundTxn.TransactionCode = payment.payment_id;
                                    refundTxn.Summary = BuildSummary( payment );
                                    rockContext.SaveChanges();
                                }

                                if ( errorMessage.IsNotNullOrWhiteSpace() )
                                {
                                    exceptionMsgs.Add( errorMessage );
                                }
                            }
                        }
                        // next, check if the transaction is new and then add it
                        else if ( txn == null )
                        {
                            var transaction = new FinancialTransaction();
                            transaction.Guid = Guid.NewGuid();
                            transaction.TransactionCode = payment.payment_id;
                            transaction.TransactionDateTime = payment.payment_date;
                            transaction.Status = payment.status;
                            transaction.IsSettled = true;
                            transaction.SettledDate = payment.payment_date;
                            transaction.StatusMessage = payment.result_description;
                            transaction.FinancialPaymentDetail = new FinancialPaymentDetail();

                            transaction.AuthorizedPersonAliasId = FindPersonMatch( payment, rockContext );
                            transaction.SourceTypeValueId = sourceTypeValueId;
                            transaction.FinancialGatewayId = null;
                            transaction.TransactionTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.TRANSACTION_TYPE_CONTRIBUTION.AsGuid() ).Id;

                            var transactionDetail = new FinancialTransactionDetail();
                            transactionDetail.Amount = payment.amount;

                            int? accountId = MapPaymentToAccount( payment, defaultAccountId, rockContext );
                            if ( !accountId.HasValue )
                            {
                                continue;
                            }

                            transaction.FinancialPaymentDetail = new FinancialPaymentDetail();
                            transaction.FinancialPaymentDetail.CurrencyTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.CURRENCY_TYPE_CREDIT_CARD.AsGuid() ).Id;

                            transactionDetail.AccountId = accountId.Value;
                            transaction.TransactionDetails.Add( transactionDetail );

                            transaction.Summary = BuildSummary( payment );

                            // Get the batch
                            var batchService = new FinancialBatchService( rockContext );
                            var batch = batchService.GetForNewTransaction( transaction, $"{batchNamePrefix} {transaction.TransactionDateTime.Value.ToString( "MMddy" )}");

                            if ( batch.Id == 0 )
                            {
                                // get a batch Id
                                rockContext.SaveChanges();
                            }

                            transaction.BatchId = batch.Id;
                            financialTransactionService.Add( transaction );

                            batch.ControlAmount += transaction.TotalAmount;

                            transactionCount++;
                        }

                        rockContext.SaveChanges();
                    }

                    page++;
                } 
            }

            if ( exceptionMsgs.Any() )
            {
                throw new Exception( "One or more exceptions occurred while downloading transactions..." + Environment.NewLine + exceptionMsgs.AsDelimited( Environment.NewLine ) );
            }

            if ( verboseLoggingEnabled )
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine( string.Format( "{0} transactions were imported.", transactionCount.ToString() ) );
                sb.AppendLine();
                foreach ( var message in _messages )
                {
                    sb.AppendLine( message.ToString() );
                }

                this.Result = sb.ToString();
            }
            else
            {
                this.Result = string.Format( "{0} transactions were imported.", transactionCount.ToString() ); 
            }
        }

        /// <summary>
        /// Gets the payments.
        /// </summary>
        /// <param name="url">The URL.</param>
        /// <param name="authToken">The authentication token.</param>
        /// <param name="page">The page.</param>
        /// <param name="batchAmount">The batch amount.</param>
        /// <param name="startDate">The start date.</param>
        /// <param name="endDate">The end date.</param>
        /// <param name="errorMessage">The error message.</param>
        /// <returns></returns>
        private PaysleyResponse PaysleyGetPayments( string url, string authToken, int page, int batchAmount, DateTime startDate, DateTime endDate, out string errorMessage )
        {
            errorMessage = string.Empty;

            var restClient = new RestClient( url );
            var restRequest = new RestRequest( Method.GET );
            restRequest.AddHeader( "Authorization", authToken );
            restRequest.AddParameter( "page", page.ToString() );
            restRequest.AddParameter( "limit", batchAmount.ToString() );
            restRequest.AddParameter( "start_date", startDate.ToString( "yyyy-MM-dd" ) );
            restRequest.AddParameter( "end_date", endDate.ToString( "yyyy-MM-dd" ) );
            restRequest.Timeout = 120000;

            var restResponse = restClient.Execute( restRequest );
            if ( ( int ) restResponse.StatusCode == 200 )
            {
                return JsonConvert.DeserializeObject<PaysleyResponse>( restResponse.Content );
            }
            else
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine( "Response: " + restResponse.StatusCode.ToString() );
                sb.AppendLine( "Message: " +  restResponse.Content );

                errorMessage = sb.ToString();
            }

            return null;
        }

        /// <summary>
        /// Finds the person match.
        /// </summary>
        /// <param name="email">The email.</param>
        /// <param name="phoneNumber">The phone number.</param>
        /// <param name="rockContext">The rock context.</param>
        /// <returns></returns>
        private int? FindPersonMatch( PaysleyPayment payment, RockContext rockContext )
        {
            // check for first name, last name, phone number and email fields
            string firstName = string.Empty;
            string lastName = string.Empty;
            string phoneNumber = string.Empty;
            string email = string.Empty;

            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info_text != null &&
                 payment.request_detail.additional_info_text.Any() )
            {
                foreach ( var textField in payment.request_detail.additional_info_text )
                {
                    if ( textField.Key == "First Name" )
                    {
                        firstName = textField.Value;
                    }

                    if ( textField.Key == "Last Name" )
                    {
                        lastName = textField.Value;
                    }

                    if ( textField.Key == "Phone Number" )
                    {
                        phoneNumber = textField.Value;
                    }

                    if ( textField.Key == "Email Address" )
                    {
                        // It's possible that the email address is not valid because Paysley
                        // is not enforcing valid email addresses.
                        email = textField.Value.RemoveSpaces();

                        var result = EmailAddressFieldValidator.Validate( email, allowMultipleAddresses: false, allowLava: false );

                        if ( result != EmailFieldValidationResultSpecifier.Valid )
                        {
                            _messages.Add( string.Format( "Email is invalid: {0}", email) );
                            email = "";
                        }

                        // Using the EmailAddressFieldValidator instead of the string extension because the
                        // string extension is not using the same regex expression as the Person -> Email field.

                        /* email = textField.Value.RemoveSpaces();
                        if ( !email.IsValidEmail() )
                        {
                            email = "";
                        }
                        */
                    }
                }
            }

            // All transactions after 2/19/2021 should have at least full name and email but we do have older transactions that
            // do not.  In those cases, we will fallback to the old logic.
            if ( firstName.IsNotNullOrWhiteSpace() && lastName.IsNotNullOrWhiteSpace() && email.IsNotNullOrWhiteSpace() )
            {
                PersonService.PersonMatchQuery matchQuery = new PersonService.PersonMatchQuery( firstName, lastName, email, phoneNumber );
                var person = new PersonService( rockContext ).FindPerson( matchQuery, true, true );

                if ( person != null )
                {
                    return person.PrimaryAliasId;
                }
                else
                {
                    // Add New Person
                    person = new Person();
                    person.FirstName = firstName.FixCase();
                    person.LastName = lastName.FixCase();
                    person.IsEmailActive = true;
                    person.Email = email;
                    person.EmailPreference = EmailPreference.EmailAllowed;
                    person.RecordTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_TYPE_PERSON.AsGuid() ).Id;

                    // add phone number
                    PhoneNumber number = new PhoneNumber();
                    number.Number = PhoneNumber.CleanNumber( phoneNumber );
                    number.PersonId = person.Id;
                    number.NumberTypeValueId = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_PHONE_TYPE_MOBILE.AsGuid() ).Id;

                    if ( number.Number.Any() )
                    {
                        person.PhoneNumbers.Add( number ); 
                    }

                    var defaultConnectionStatus = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_CONNECTION_STATUS_PROSPECT.AsGuid() );
                    if ( defaultConnectionStatus != null )
                    {
                        person.ConnectionStatusValueId = defaultConnectionStatus.Id;
                    }

                    var defaultRecordStatus = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_STATUS_ACTIVE.AsGuid() );
                    if ( defaultRecordStatus != null )
                    {
                        person.RecordStatusValueId = defaultRecordStatus.Id;
                    }

                    var defaultCampus = CampusCache.All().Where( c => c.IsActive == true ).OrderBy( c => c.Id ).FirstOrDefault();
                    var defaultCampusId = defaultCampus?.Id;

                    var familyGroup = PersonService.SaveNewPerson( person, rockContext, defaultCampusId, false );
                    if ( familyGroup != null && familyGroup.Members.Any() )
                    {
                        person = familyGroup.Members.Select( m => m.Person ).First();
                    }

                    var changes = new History.HistoryChangeList();
                    changes.Add( new History.HistoryChange( History.HistoryVerb.Add, History.HistoryChangeType.Record, "Person created via Paysley Import Job" ) );
                    HistoryService.SaveChanges(
                            rockContext,
                            typeof( Person ),
                            Rock.SystemGuid.Category.HISTORY_PERSON_DEMOGRAPHIC_CHANGES.AsGuid(),
                            person.Id,
                            changes );

                    return person.PrimaryAliasId;
                } 
            }

            // fallback logic for older transactions that do not have first and last name
            if ( email.IsNotNullOrWhiteSpace() )
            {
                // look for matches by email
                var personMatches = new PersonService( rockContext ).GetByEmail( email.Trim(), true, true ).ToList();

                // if we find one exact match, then use that person
                if ( personMatches.Count == 1 )
                {
                    return personMatches.FirstOrDefault().PrimaryAliasId;
                }
                // If there is more than one match, get the head of household for each and then pick the first one.
                else if ( personMatches.Count > 1 )
                {
                    var headOfHouseholds = new List<Person>();

                    personMatches.ForEach( pm => headOfHouseholds.Add( pm.GetHeadOfHousehold( rockContext ) ) );

                    return headOfHouseholds.OrderByDescending( hh => hh.Age ?? 0 ).FirstOrDefault().PrimaryAliasId;
                }
            }

            // fallback logic for older transactions that do not have first and last name
            if ( phoneNumber.IsNotNullOrWhiteSpace() )
            {
                // clean the number so we get a proper match
                var cleanNumber = PhoneNumber.CleanNumber( phoneNumber );
                if ( cleanNumber.StartsWith( "1" ) )
                {
                    cleanNumber = cleanNumber.TrimStart( new[] { '1' } );
                }

                // look for matching phone numbers
                var personMatches = new PhoneNumberService( rockContext ).Queryable().AsNoTracking()
                    .Where( pn => pn.Number == cleanNumber )
                    .Select( pn => pn.Person )
                    .ToList();

                // if we find one exact match, then use that person
                if ( personMatches.Count == 1 )
                {
                    return personMatches.FirstOrDefault().PrimaryAliasId;
                }
                // If there is more than one match, get the head of household for each and then pick the first one.
                else if ( personMatches.Count > 1 )
                {
                    var headOfHouseholds = new List<Person>();

                    personMatches.ForEach( pm => headOfHouseholds.Add( pm.GetHeadOfHousehold( rockContext ) ) );

                    return headOfHouseholds.OrderByDescending( hh => hh.Age ?? 0 ).FirstOrDefault().PrimaryAliasId;
                }
            }

            return null;
        }

        /// <summary>
        /// Builds the summary.
        /// </summary>
        /// <param name="payment">The payment.</param>
        /// <returns></returns>
        private string BuildSummary( PaysleyPayment payment )
        {
            StringBuilder sb = new StringBuilder();

            // get reference number
            if ( payment.reference_number.IsNotNullOrWhiteSpace() )
            {
                sb.AppendLine( string.Format( "Reference Number: {0}", payment.reference_number ) );
            }

            // get fields
            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info != null &&
                 payment.request_detail.additional_info.Any() )
            {
                foreach ( var field in payment.request_detail.additional_info )
                {
                    sb.AppendLine( string.Format( "{0}: {1}", field.Key, field.Value ) );
                }
            }

            // get text fields
            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info_text != null &&
                 payment.request_detail.additional_info_text.Any() )
            {
                foreach ( var field in payment.request_detail.additional_info_text )
                {
                    sb.AppendLine( string.Format( "{0}: {1}", field.Key, field.Value ) );
                }
            }

            // get dropdown fields
            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info_dropdown != null &&
                 payment.request_detail.additional_info_dropdown.Any() )
            {
                foreach ( var field in payment.request_detail.additional_info_dropdown )
                {
                    sb.AppendLine( string.Format( "{0}: {1}", field.Key, field.Value ) );
                }
            }

            return sb.ToString();
        }

        /// <summary>
        /// Maps the payment to account.
        /// </summary>
        /// <param name="payment">The payment.</param>
        /// <param name="defaultAccountId">The default account identifier.</param>
        /// <param name="rockContext">The rock context.</param>
        /// <returns></returns>
        private int? MapPaymentToAccount( PaysleyPayment payment, int defaultAccountId, RockContext rockContext )
        {
            var definedTypeService = new DefinedTypeService( rockContext );
            var definedValueService = new DefinedValueService( rockContext );
            var attributeService = new AttributeService( rockContext );
            var attributeValueService = new AttributeValueService( rockContext );
            var accountMappingDefinedType = DefinedTypeCache.Get( DEFINEDTYPE_PAYSLEYMAPPINGS.AsGuid() );

            // before we do any mappings, lets see if there is a fund id tied to the payment
            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info != null &&
                 payment.request_detail.additional_info.Any() )
            {
                foreach ( var info in payment.request_detail.additional_info )
                {
                    int? accountId = null;
                    switch ( info.Key.ToLower().RemoveSpaces() )
                    {
                        case "fundid":
                            accountId = info.Value.AsIntegerOrNull();
                            break;
                        case "accountid":
                            accountId = info.Value.AsIntegerOrNull();
                            break;
                        case "missionaryid":
                            accountId = info.Value.AsIntegerOrNull();
                            break;
                    }

                    if ( accountId.HasValue )
                    {
                        var account = new FinancialAccountService( rockContext ).Get( accountId.Value );
                        if ( account != null )
                        {
                            return accountId;
                        }
                    }
                }
            }

            // if the mapping does not exist, create it.
            if ( accountMappingDefinedType == null )
            {
                var definedType = new DefinedType();
                definedType.Name = "Paysley Mappings";
                definedType.Description = "Maps paysley transactions to the correct financial account based on the options selected.";
                definedType.Guid = DEFINEDTYPE_PAYSLEYMAPPINGS.AsGuid();
                //definedType.IsSystem = 1;

                definedTypeService.Add( definedType );
                rockContext.SaveChanges();

                accountMappingDefinedType = DefinedTypeCache.Get( DEFINEDTYPE_PAYSLEYMAPPINGS.AsGuid() );
            }

            // if the payment has custom dropdowns then we want to ensure those dropdowns exist in the mapping as an attribute.
            if ( payment.request_detail != null &&
                 payment.request_detail.additional_info_dropdown != null &&
                 payment.request_detail.additional_info_dropdown.Any() )
            {
                var definedType = definedTypeService.Get( accountMappingDefinedType.Id );

                foreach ( var dropdown in payment.request_detail.additional_info_dropdown )
                {
                    var entityTypeId = EntityTypeCache.Get( "Rock.Model.DefinedValue" ).Id;
                    var entityTypeQualifierColumn = "DefinedTypeId";
                    var entityTypeQualifierValue = definedType.Id.ToString();
                    string key = dropdown.Key.RemoveSpaces();

                    var attribute = attributeService.Get( entityTypeId, entityTypeQualifierColumn, entityTypeQualifierValue, key );

                    // if the attribute does not exist, create it.
                    if ( attribute == null )
                    {
                        var newAttribute = new Rock.Model.Attribute();
                        newAttribute.Name = dropdown.Key;
                        newAttribute.Key = key;
                        newAttribute.FieldTypeId = FieldTypeCache.Get( Rock.SystemGuid.FieldType.SINGLE_SELECT.AsGuid() ).Id;
                        newAttribute.EntityTypeId = entityTypeId;
                        newAttribute.EntityTypeQualifierColumn = entityTypeQualifierColumn;
                        newAttribute.EntityTypeQualifierValue = entityTypeQualifierValue;
                        newAttribute.IsGridColumn = true;

                        // add the current value as a single select option
                        var qualiferValue = new AttributeQualifier();
                        qualiferValue.Key = "values";
                        qualiferValue.Value = dropdown.Value.Replace( ",", "" );
                        newAttribute.AttributeQualifiers.Add( qualiferValue );

                        attributeService.Add( newAttribute );
                        rockContext.SaveChanges();
                    }
                }

                var dvQuery = definedValueService.Queryable().AsNoTracking();
                List<int> attributeIds = new List<int>();
                List<DefinedValue> matchedValues = new List<DefinedValue>();

                // try and find the correct mapping by looking at each defined value
                var definedValues = dvQuery.Where( dv => dv.DefinedTypeId == definedType.Id ).ToList();               
                foreach ( var definedValue in definedValues )
                {
                    definedValue.LoadAttributes();
                    bool foundMapping = true;

                    foreach ( var dropdown in payment.request_detail.additional_info_dropdown )
                    {
                        var key = dropdown.Key.RemoveSpaces();
                        var values = definedValue.AttributeValues.Where( av => av.Key == key && av.Value != null && av.Value.Value == dropdown.Value ).ToList();

                        if ( !values.Any() )
                        {
                            // could not find a matching attribute value so we don't need to do any more comparisons
                            foundMapping = false;
                            break;
                        }
                    }

                    // could not find a match, move on to the next defined value
                    if ( !foundMapping )
                    {
                        continue;
                    }
                    else
                    {
                        matchedValues.Add( definedValue );
                    }
                }

                // if we found a match, retrieve the account (the account id is stored in the "value" property)
                if ( matchedValues.Any() )
                {
                    // there should only be one match but just in case we will get the first one
                    int? accountId = matchedValues.FirstOrDefault().Value.AsIntegerOrNull();
                    if ( accountId.HasValue )
                    {
                        return accountId;
                    }
                }
                // If we did not find a match, then we should create a new mapping and assign a default accountid
                else
                {
                    var definedValue = new DefinedValue();
                    definedValue.DefinedTypeId = definedType.Id;
                    definedValue.Value = defaultAccountId.ToString();
                    definedValueService.Add( definedValue );
                    rockContext.SaveChanges();

                    definedValue.LoadAttributes();

                    // save the attribute values for those mappings
                    foreach ( var dropdown in payment.request_detail.additional_info_dropdown )
                    {
                        // make the new value exists in the values list
                        var entityTypeId = EntityTypeCache.Get( "Rock.Model.DefinedValue" ).Id;
                        var entityTypeQualifierColumn = "DefinedTypeId";
                        var entityTypeQualifierValue = definedType.Id.ToString();
                        string key = dropdown.Key.RemoveSpaces();

                        var attribute = attributeService.Get( entityTypeId, entityTypeQualifierColumn, entityTypeQualifierValue, key );
                        var qualifier = attribute.AttributeQualifiers.Where( aq => aq.Key == "values" ).FirstOrDefault();
                        
                        if ( !qualifier.Value.Contains( dropdown.Value ) )
                        {
                            qualifier.Value = qualifier.Value + "," + dropdown.Value;
                            rockContext.SaveChanges();
                        }

                        definedValue.SetAttributeValue( key, dropdown.Value );
                        definedValue.SaveAttributeValues( rockContext );
                    }

                    return defaultAccountId;
                }
            }

            return defaultAccountId;
        }

        #region Helper Classes

        private static class PaymentType
        {
            /// <summary>
            /// Debit (cc.db): Debit transaction( payment)
            /// </summary>
            public const string PAYMENT_TYPE_CCDB = "CC.DB";

            /// <summary>
            /// Pre-Authorization (cc.pa): Funds are put on hold to be captured at a later date within Paysley.
            /// </summary>
            public const string PAYMENT_TYPE_CCPA = "CC.PA";

            /// <summary>
            /// Capture (cc.cp): Funds that have previously been put on hold are debited.
            /// </summary>
            public const string PAYMENT_TYPE_CCCP = "CC.CP";

            /// <summary>
            /// Schedule (cc.sd): The recurring payment schedule is saved in the gateway and will start debiting on the start date.
            /// </summary>
            public const string PAYMENT_TYPE_CCSD = "CC.SD"; 

            /// <summary>
            /// Recurring Ended (cc.ds): AKA “Deschedule”. A recurring payment schedule is ended and no further debits will occur.
            /// </summary>
            public const string PAYMENT_TYPE_CCDS = "CC.DS";

            /// <summary>
            /// Registration (cc.rg): The card details are securely stored in the gateway (new recurring payment or card saved for later use).
            /// </summary>
            public const string PAYMENT_TYPE_CCRG = "CC.RG";

            /// <summary>
            /// Refund (cc.rf): Refund transaction will debit the merchant and credit the cardholder.
            /// </summary>
            public const string PAYMENT_TYPE_CCRF = "CC.RF";

            /// <summary>
            /// Reversal (cc.rv): Reversal transaction which will void a payment that is still in pre-authorization status( first ~2 business days after debit).
            /// </summary>
            public const string PAYMENT_TYPE_CCRV = "CC.RV";

            /// <summary>
            /// Chargeback (cc.cb): Cardholder initiated chargeback transaction.
            /// </summary>
            public const string PAYMENT_TYPE_CCCB = "CC.CB";
        }

        #endregion
    }
}
