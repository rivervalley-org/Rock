
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;

using CsvHelper;
using CsvHelper.Configuration;
using Newtonsoft.Json;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.org_riverValley.Reporting
{
    /// <summary>
    /// Template block for developers to use to start a new block.
    /// </summary>
    [DisplayName( "Clearstream Phone Matching" )]
    [Category( "River Valley > Reporting" )]
    [Description( "Block for uploading a CSV of phone numbers and matching people." )]
    public partial class ClearstreamPhoneMatching : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int? _binaryFileId = null;
        private List<CSVRow> _rows = new List<CSVRow>();

        #endregion

        #region SQL Query

        const string SQL_QUERY = @"
WITH CTE AS (
SELECT Number, NumberFormatted
FROM PhoneNumber
WHERE '1' + Number in (
{0}
)
)

SELECT DISTINCT
	 C.NumberFormatted AS [Phone Number]
	,PP.Id
	,PP.LastName + ', ' + PP.NickName AS [Name]
	,PP.Email
	,Campus.[Name] AS [Campus]
	,OTHERMATCHES.Matches AS [Other Possible Matches]
FROM CTE C
OUTER APPLY (
	SELECT TOP 1 P.*
	FROM Person P
	INNER JOIN PhoneNumber PN
		ON PN.PersonId = P.Id
	INNER JOIN [Group] G
		ON G.Id = P.PrimaryFamilyId
	INNER JOIN GroupMember GM
		ON GM.PersonId = P.Id
		AND GM.GroupId = G.Id
	WHERE PN.Number = C.Number
	ORDER BY GM.GroupRoleId, P.Gender
) PP
OUTER APPLY (
	SELECT TOP 1 C.[Name]
	FROM Campus C
	INNER JOIN [Group] G
		ON G.CampusId = C.Id
	WHERE G.Id = PP.PrimaryFamilyId
) CAMPUS
OUTER APPLY (
	SELECT STUFF ((SELECT DISTINCT '<br/> ' + '<a target=""_blank"" href=""/Person/' + CAST(P.Id AS VARCHAR) + '"">' + P.LastName + ', ' + P.NickName + '</a>'

    FROM Person P
    INNER JOIN PhoneNumber PN
        ON PN.PersonId = P.Id
        WHERE PN.Number = C.Number
            AND P.Id<> PP.Id

    FOR XML PATH, TYPE).value( N'.[1]', N'nvarchar(max)'),1, 6, N'') AS[Matches]
) OTHERMATCHES
ORDER BY PP.LastName + ', ' + PP.NickName";
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

            string json = ViewState["Rows"] as string;
            if ( string.IsNullOrWhiteSpace( json ) )
            {
                _rows = new List<CSVRow>();
            }
            else
            {
                _rows = JsonConvert.DeserializeObject <List<CSVRow>>( json );
                _rows = _rows
                    .OrderBy( t => t.First )
                    .ThenBy( t => t.Last )
                    .ThenBy( t => t.Mobile )
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

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_BlockUpdated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            gRows.GridRebind += gRows_GridRebind;

            gRows.EntityTypeId = EntityTypeCache.Get( Rock.SystemGuid.EntityType.PERSON ).Id;
            gRows.PersonIdField = "Id";
            gRows.DataKeyNames = new string[] { "Id" };
            gRows.ExportFilename = "Clear Stream Export";
            gRows.ExportSource = ExcelExportSource.DataSource;
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
                ShowEntry();
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
            ViewState["Rows"] = JsonConvert.SerializeObject( _rows, Formatting.None, jsonSetting );
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
        protected void fuTxnFile_FileUploaded( object sender, EventArgs e )
        {
            _binaryFileId = fuTxnFile.BinaryFileId;

            // Validate the CSV (method will display error message if not valid
            IsFileValid();
        }

        /// <summary>
        /// Handles the Click event of the btnImport control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnMatch_Click( object sender, EventArgs e )
        {
            // If the CSV is valid, ask for a confirmation
            if ( IsFileValid() )
            {
                _rows = GetFile();
                ShowConfirmation();
            }
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
            fuTxnFile.BinaryFileId = null;

            ShowEntry();
        }

        /// <summary>
        /// Handles the GridRebind event of the gGroupMembers control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="GridRebindEventArgs" /> instance containing the event data.</param>
        protected void gRows_GridRebind( object sender, GridRebindEventArgs e )
        {
            BindGrid();
        }

        /// <summary>
        /// Binds the grid.
        /// </summary>
        private void BindGrid()
        {
            var importPhoneNumbers = _rows.Select( r => r.Mobile ).ToList();
            string numbers = _rows.Select( r => "'" + r.Mobile + "'" ).ToList().AsDelimited( "," );
            string query = string.Format( SQL_QUERY, numbers );

            // setup SQL parameters
            Dictionary<string, object> parameters = new Dictionary<string, object>();

            DataTable dataTable = new DataTable();
            DataTable totalsDataTable = new DataTable();
            DataSet dataSet = DbService.GetDataSet( query, System.Data.CommandType.Text, parameters, 120 );

            if ( dataSet.Tables.Count > 0 )
            {
                dataTable = dataSet.Tables[0];
            }

            var peopleRows = new List<PersonRow>();
            foreach ( DataRow row in dataTable.Rows )
            {
                var personRow = new PersonRow
                {
                    Id = row.Field<int>( "Id" ),
                    PhoneNumber = row.Field<string>( "Phone Number" ),
                    Name = row.Field<string>( "Name" ),
                    Email = row.Field<string>( "Email" ),
                    Campus = row.Field<string>( "Campus" ),
                    OtherPossibleMatches = row.Field<string>( "Other Possible Matches" )
                };

                peopleRows.Add( personRow );
            }

            gRows.DataSource = peopleRows;
            gRows.DataBind();
        }

        #endregion

        #region Methods

        /// <summary>
        /// Shows the entry.
        /// </summary>
        private void ShowEntry()
        {
            fuTxnFile.Visible = true;
            btnMatch.Visible = true;

            pnlEntry.Visible = true;
            pnlConfirm.Visible = false;
        }

        /// <summary>
        /// Shows the confirmation.
        /// </summary>
        private void ShowConfirmation()
        {
            BindGrid();

            // Show the confirm/status/result dialog 
            pnlEntry.Visible = false;
            pnlConfirm.Visible = true;
        }

        /// <summary>
        /// Shows the results.
        /// </summary>
        private void ShowResults()
        {
            pnlEntry.Visible = false;
            pnlConfirm.Visible = false;
        }

        /// <summary>
        /// Determines whether the binary file has valid CSV.
        /// </summary>
        /// <returns></returns>
        private bool IsFileValid()
        {
            try
            {
                var file = GetFile();
                if ( file == null )
                {
                    ShowError( "Invalid Import File", "Could not read CSV file." );
                    return false;
                }

                if ( !file.Any() )
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
        private List<CSVRow> GetFile()
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
                                csvReader.Configuration.RegisterClassMap<CSVRowClassMap>();
                                return csvReader.GetRecords<CSVRow>().ToList();
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
    }

    #region Helper Classes

    public class CSVRow
    {
        public int Id { get; set; }
        public string Mobile { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
        public string List { get; set; }
    }

    public class PersonRow
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Campus { get; set; }
        public string OtherPossibleMatches { get; set; }
    }

    public class CSVRowClassMap : CsvClassMap<CSVRow>
    {
        public CSVRowClassMap()
        {
            Map( m => m.Mobile ).Name( "Mobile" );
            Map( m => m.First ).Name( "First" );
            Map( m => m.Last ).Name( "Last" );
            Map( m => m.Email ).Name( "Email" );
            Map( m => m.Status ).Name( "Status" );
            Map( m => m.List ).Name( "List(s)" );
        }
    }

    #endregion

}

