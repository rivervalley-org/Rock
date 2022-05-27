//
// Copyright (C) Pillars Inc. - All Rights Reserved
//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Linq.Dynamic;
using System.Web.UI;
using System.Web.UI.WebControls;
using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.rocks_pillars.Reporting
{
    [DisplayName( "Data View Attribute Summary" )]
    [Category( " Pillars > Reporting" )]
    [Description( "Block for displaying the average or total value of an attribute for a selected list of dataviews." )]

    [CategoryField( "Activites Data View Category", "The data view category that the attribute...", false, "Rock.Model.DataView", "", "", true, "", "", 6, "ActivitesCategories" )]
    [CategoryField( "Filter Data View Category", "The data view category that the filter...", false, "Rock.Model.DataView", "", "", true, "", "", 6, "FilterCategories" )]
    [AttributeField( Rock.SystemGuid.EntityType.PERSON, "Attribute", "The attribute to summarize for each data view.", true, false, "", "", 1 )]
    [AttributeField( Rock.SystemGuid.EntityType.PERSON, "Historical Attributes", "Multiple attributes can be selected and their historical values will be inlcuded with the current year.", false, true, "", "", 2 )]
    [CustomDropdownListField( "Summary Type", "The type of summary to calculate.", "NPS,Average,Total", true, "NPS", "", 3 )]
    [GroupTypesField( "Attendance Group Types", "The types of groups to pull attendance stats from.", false, "", "", 4 )]
    [CodeEditorField( "Lava Template", "The text (or html) to display", CodeEditorMode.Lava, CodeEditorTheme.Rock, 200, Order = 6, DefaultValue =
    @"
<style>
.metric {
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 12px;
}

.metric h5 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.metric .value {
    font-size: 48px;
    font-weight: 800;
    line-height: 1em;
}

.metric .value small{
    display: block;
    font-weight: 300;
    font-size: 14px;
    line-height: 1em;
}

.metric .icon {
    float: right;
    opacity: .3;
    font-size: 65px;
    border-radius: 0;
    width: 85px;
    height: 65px;
}

hr {
    margin-top: 10px;
    margin-bottom: 5px;
}

.progress {
    margin-bottom: 14px;
}

.progress {
    position: relative;
}

.progress span {
    position: absolute;
    display: block;
    width: 100%;
    color: #8a8989;
 }
</style>

<div class='row'>
    {% if Result.Title %}
    <div class='col-md-4'>
		<div class='metric alert-success'>
        {% if Result.IconCss != '' %}
            <i class='icon fa fa-poll'></i>
        {% endif %}
        <h5>{{ Result.Title }}</h5>
        <p>
            <small>{{ Result.Total }} Total ({{ Result.Inactive }} Inactive)</small><br/>
            <small>{{ Result.AttendedLastTwoYears }} Have Attended Last Two Years</small><br/>
        </p>
        <div class='value'>
            {{ Result.Value }}
            <small>Net Promotor Score</small>
        </div>
        
		{% assign histCount = Result.HistoricalItems | Size %}
		{% if histCount > 0 %}
			<hr />
			<small>Historical Scores</small>
			{% for histItem in Result.HistoricalItems %}
			<div class='progress'>
				<div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='{{ histItem.Value }}' aria-valuemin='0' aria-valuemax='100' style='width: {{ histItem.Value }}%'>
					<span>{{ histItem.Value }} ({{ histItem.Name }})</span>
				</div>
			</div>
			{% endfor %}
		{% endif %}
        </div>
    </div>
    {% endif %}
</div>
{% assign campusCount = CampusItems | Size %}
{% if campusCount > 0 %} 
<h1>By Campus<small> (With Demographics and Campus filters)</small></h1>
<div class='row'>
    {% for item in CampusItems %}
        <div class='col-md-4'>
            <div class='metric'>
                {% if item.IconCss != '' %}
					<i class='icon fa fa-poll'></i>
				{% endif %}
				<h5>{{ item.Title }}</h5>
				<p>
					<small>{{ item.Total }} Total ({{ item.Inactive }} Inactive)</small><br/>
					<small>{{ item.AttendedLastTwoYears }} Have Attended Last Two Years</small><br/>
				</p>
				<div class='value'>
					{{ item.Value }}
					<small>Net Promotor Score</small>
				</div>
				
				{% assign histCount = item.HistoricalItems | Size %}
				{% if histCount > 0 %}
					<hr />
					<small>Historical Scores</small>
					{% for histItem in item.HistoricalItems %}
					<div class='progress'>
						<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='{{ histItem.Value }}' aria-valuemin='0' aria-valuemax='100' style='width: {{ histItem.Value }}%'>
							<span>{{ histItem.Value }} ({{ histItem.Name }})</span>
						</div>
					</div>
					{% endfor %}
				{% endif %}
            </div>
        </div>
    {% endfor %}
</div>
{% endif %}

{% assign activityCount = Items | Size %}
{% if activityCount > 0 %} 
<h1>By Activity<small> (With Demographics and Campus filters)</small></h1>
<div class='row'>
    {% for item in Items %}
        <div class='col-md-4'>
            <div class='metric'>
                {% if item.IconCss != '' %}
					<i class='icon fa fa-poll'></i>
				{% endif %}
				<h5>{{ item.Title }}</h5>
				<p>
					<small>{{ item.Total }} Total ({{ item.Inactive }} Inactive)</small><br/>
					<small>{{ item.AttendedLastTwoYears }} Have Attended Last Two Years</small><br/>
				</p>
				<div class='value'>
					{{ item.Value }}
					<small>Net Promotor Score</small>
				</div>
				
				{% assign histCount = item.HistoricalItems | Size %}
				{% if histCount > 0 %}
					<hr />
					<small>Historical Scores</small>
					{% for histItem in item.HistoricalItems %}
					<div class='progress'>
						<div class='progress-bar progress-bar-info' role='progressbar' aria-valuenow='{{ histItem.Value }}' aria-valuemin='0' aria-valuemax='100' style='width: {{ histItem.Value }}%'>
							<span>{{ histItem.Value }} ({{ histItem.Name }})</span>
						</div>
					</div>
					{% endfor %}
				{% endif %}
            </div>
        </div>
    {% endfor %}
</div>
{% endif %}
" )]

    public partial class DataViewAttributeSummary : Rock.Web.UI.RockBlock
    {
        #region Fields

        private int _dataViewId;
        private int _categoryId;
        private bool _canEdit = false;

        #endregion

        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_Updated;
            this.AddConfigurationUpdateTrigger( upnlContent );

            BindControls();
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            if ( !Page.IsPostBack )
            {
                DisplayContent();
            }
        }

        /// <summary>
        /// Binds the controls.
        /// </summary>
        private void BindControls()
        {
            BindActivitiesCategory();
            BindFilterCategory();
            BindCampuses();
        }

        /// <summary>
        /// Binds the activities category.
        /// </summary>
        private void BindActivitiesCategory()
        {
            var attrCategoryGuid = GetAttributeValue( "ActivitesCategories" ).AsGuid();

            cblActivities.Items.Clear();

            var rockContext = new RockContext();
            var dataViewService = new DataViewService( rockContext );

            if ( attrCategoryGuid != null )
            {
                var dataViews = dataViewService.Queryable().Where( dv => dv.Category.Guid == attrCategoryGuid );

                foreach ( var dv in dataViews )
                {
                    var item = new ListItem()
                    {
                        Value = dv.Guid.ToString(),
                        Text = dv.Name
                    };

                    cblActivities.Items.Add( item );
                }
            }
        }

        /// <summary>
        /// Binds the filter category.
        /// </summary>
        private void BindFilterCategory()
        {
            var attrCategoryGuid = GetAttributeValue( "FilterCategories" ).AsGuid();

            cblFilter.Items.Clear();

            var rockContext = new RockContext();
            var dataViewService = new DataViewService( rockContext );

            if ( attrCategoryGuid != null )
            {
                var dataViews = dataViewService.Queryable().Where( dv => dv.Category.Guid == attrCategoryGuid );

                foreach ( var dv in dataViews )
                {
                    var item = new ListItem()
                    {
                        Value = dv.Guid.ToString(),
                        Text = dv.Name
                    };

                    cblFilter.Items.Add( item );
                }
            }
        }

        /// <summary>
        /// Binds the campuses.
        /// </summary>
        private void BindCampuses()
        {
            cblCampuses.Items.Clear();

            var campuses = CampusCache.All( false ).OrderBy( c => c.Name );

            foreach ( var campus in campuses )
            {
                var item = new ListItem()
                {
                    Text = campus.Name,
                    Value = campus.Id.ToString()
                };

                cblCampuses.Items.Add( item );
            }
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the ContentDynamic control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_Updated( object sender, EventArgs e )
        {
            DisplayContent();
        }

        /// <summary>
        /// Handles the Click event of the btnApply control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnApply_Click( object sender, EventArgs e )
        {
            DisplayContent();
        }
        #endregion

        #region Methods

        /// <summary>
        /// Displays the content.
        /// </summary>
        private void DisplayContent()
        {
            var attribute = AttributeCache.Get( GetAttributeValue( "Attribute" ).AsGuid() );
            var summaryType = GetAttributeValue( "SummaryType" );

            var dVActivities = cblActivities.SelectedValues.Select( sv => sv.AsGuid() ).ToList();
            var dVFilters = cblFilter.SelectedValues.Select( sv => sv.AsGuid() ).ToList();
            var campuses = cblCampuses.SelectedValuesAsInt;
            string lava = GetAttributeValue( "LavaTemplate" );

            List<Guid> attendGroupTypeGuids = GetAttributeValues( "AttendanceGroupTypes" ).AsGuidList();

            var histAttribGuids = GetAttributeValues( "HistoricalAttributes" ).AsGuidOrNullList();
            List<AttributeCache> histAttributes = new List<AttributeCache>();

            foreach ( var guid in histAttribGuids )
            {
                if ( guid.HasValue )
                {
                    histAttributes.Add( AttributeCache.Get( guid.Value ) );
                }
            }

            var items = new List<SummaryItem>();
            var campusItems = new List<SummaryItem>();
            var overallRes = new SummaryItem();

            if ( attribute != null && dVActivities.Count > 0 )
            {
                var utility = new BlockDataUtility();
                utility.RunAttendanceQuery( attendGroupTypeGuids );
                utility.RunDataViewQuery( dVActivities, dVFilters, campuses );
                utility.RunAttrValueQuery( attribute );
                utility.RunHistoricalAttrQuery( histAttributes );
                items = utility.GetDataViewSummary( summaryType, attribute );
                campusItems = utility.GetCampusSummary( summaryType, attribute );
                overallRes = utility.GetOverallSummary( summaryType, attribute );


            }

            var mergeFields = Rock.Lava.LavaHelper.GetCommonMergeFields( this.RockPage, this.CurrentPerson );
            mergeFields.Add( "Items", items );
            mergeFields.Add( "CampusItems", campusItems );
            mergeFields.Add( "Result", overallRes );

            phHtml.Controls.Add( new LiteralControl( lava.ResolveMergeFields( mergeFields ) ) );
        }

        #endregion

        #region Helper Class

        /// <summary>
        /// Helper class to store metric values.
        /// </summary>
        public class SummaryItem : DotLiquid.Drop, Rock.Lava.ILiquidizable
        {
            public string Title { get; set; }
            public string Name { get; set; }
            public string IconCssClass { get; set; }
            public string Value { get; set; }
            public string Total { get; set; }
            public string Active { get; set; }
            public string Inactive { get; set; }
            public string AttendedLastTwoYears { get; set; }
            public List<HistoricalItem> HistoricalItems { get; set; }

            public List<string> AvailableKeys
            {
                get
                {
                    return new List<string> { "Title", "Name", "IconCssClass", "Value" };
                }
            }
        }

        /// <summary>
        /// Helper class to store historical values.
        /// </summary>
        public class HistoricalItem : DotLiquid.Drop, Rock.Lava.ILiquidizable
        {
            public string Name { get; set; }
            public string Value { get; set; }

            public List<string> AvailableKeys
            {
                get
                {
                    return new List<string> { "Title", "Value" };
                }
            }
        }


        /// <summary>
        /// The BlockDataUtlity class.
        /// </summary>
        internal class BlockDataUtility
        {
            private HashSet<int/*personId*/> People;
            private Dictionary<Guid/*DataViewGuid*/, List<int/*personId*/>> PeopleInDataView;
            private Dictionary<int/*CampusId*/, List<int/*personId*/>> PeopleInCampus;
            private Dictionary<Guid/*DataViewGuid*/, string/*DataViewName*/> DataViewNames;
            private Dictionary<int/*personId*/, decimal/*AttrValue*/> AttrValues;
            private Dictionary<int/*attributeId*/, Dictionary<int/*personId*/, decimal/*attrValue*/>> HistoricalAttributeValues;
            private List<int> PeopleWithAttendance;

            private RockContext rockContext;
            private DataViewService dataViewService;
            private PersonService personService;
            private AttributeValueService attributeValueService;
            private AttendanceService attendanceService;

            private int personRecordStatusActive;
            private int personRecordStatusInactive;

            /// <summary>
            /// Initializes a new instance of the <see cref="BlockDataUtility"/> class.
            /// </summary>
            public BlockDataUtility()
            {
                rockContext = new RockContext();
                dataViewService = new DataViewService( rockContext );
                personService = new PersonService( rockContext );
                attributeValueService = new AttributeValueService( rockContext );
                attendanceService = new AttendanceService( rockContext );

                personRecordStatusActive = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_STATUS_ACTIVE.AsGuid() ).Id;
                personRecordStatusInactive = DefinedValueCache.Get( Rock.SystemGuid.DefinedValue.PERSON_RECORD_STATUS_INACTIVE.AsGuid() ).Id;

                PeopleWithAttendance = new List<int>();
                HistoricalAttributeValues = new Dictionary<int, Dictionary<int, decimal>>();
            }

            /// <summary>
            /// Runs the data view query.
            /// </summary>
            /// <param name="listActivites">The list activites.</param>
            /// <param name="listFilter">The list filter.</param>
            /// <param name="campuses">The campuses.</param>
            public void RunDataViewQuery( List<Guid> listActivites, List<Guid> listFilter, List<int> campuses )
            {
                People = new HashSet<int>();
                PeopleInDataView = new Dictionary<Guid, List<int>>();
                PeopleInCampus = new Dictionary<int, List<int>>();
                DataViewNames = new Dictionary<Guid, string>();

                var peopleInFilter = FilterQuery( listFilter );
                ActivDVWithFilterQuery( peopleInFilter, listActivites, campuses );
            }

            /// <summary>
            /// Runs the attribute value query.
            /// </summary>
            /// <param name="attribute">The attribute.</param>
            public void RunAttrValueQuery( AttributeCache attribute )
            {
                var tmpDict = attributeValueService.Queryable().AsNoTracking()
                    .Where( v =>
                         v.AttributeId == attribute.Id &&
                         v.Value != null &&
                         v.Value != "" &&
                         v.EntityId.HasValue )
                    .ToDictionary( v => v.EntityId.Value, v => v.Value );

                AttrValues = tmpDict.Where( kvp => People.Contains( kvp.Key ) ).ToDictionary( kvp => kvp.Key, kvp => Convert.ToDecimal( kvp.Value ) );
            }

            /// <summary>
            /// Runs the historical attribute query.
            /// </summary>
            /// <param name="attributes">The attributes.</param>
            public void RunHistoricalAttrQuery( List<AttributeCache> attributes )
            {
                foreach ( var attribute in attributes )
                {
                    Dictionary<int, decimal> values = attributeValueService.Queryable().AsNoTracking()
                    .Where( v =>
                         v.AttributeId == attribute.Id &&
                         v.Value != null &&
                         v.Value != "" &&
                         v.EntityId.HasValue )
                    .ToDictionary( v => v.EntityId.Value, v => Convert.ToDecimal( v.Value ) );

                    HistoricalAttributeValues.Add( attribute.Id, values );
                }
            }

            /// <summary>
            /// Runs the attendance query.
            /// </summary>
            /// <param name="attendanceGroupTypeGuids">The attendance group type guids.</param>
            public void RunAttendanceQuery( List<Guid> attendanceGroupTypeGuids )
            {
                if ( attendanceGroupTypeGuids.Any() )
                {
                    PeopleWithAttendance = attendanceService.Queryable( "PersonAlias.Person" )
                                .AsNoTracking()
                                .Where( a => a.DidAttend == true &&
                                             attendanceGroupTypeGuids.Contains( a.Occurrence.Group.GroupType.Guid ) &&
                                             a.StartDateTime >= DbFunctions.AddYears( Rock.RockDateTime.Now, -2 ) &&
                                             a.StartDateTime <= Rock.RockDateTime.Now &&
                                             a.PersonAlias.PersonId > 0
                                      )
                                .Select( a => a.PersonAlias.PersonId )
                                .Distinct()
                                .ToList();
                }
            }

            /// <summary>
            /// Gets the data view summary.
            /// </summary>
            /// <param name="summaryType">Type of the summary.</param>
            /// <param name="attribute">The attribute.</param>
            /// <returns></returns>
            public List<SummaryItem> GetDataViewSummary( string summaryType, AttributeCache attribute )
            {
                return PeopleInDataView.Keys.Select( dv => GetSummaryDetails( dv, summaryType, attribute ) ).ToList();
            }

            /// <summary>
            /// Gets the campus summary.
            /// </summary>
            /// <param name="summaryType">Type of the summary.</param>
            /// <param name="attribute">The attribute.</param>
            /// <returns></returns>
            public List<SummaryItem> GetCampusSummary( string summaryType, AttributeCache attribute )
            {
                return PeopleInCampus.Keys.Select( cp => GetCampusSummaryDetails( cp, summaryType, attribute ) ).ToList();
            }

            /// <summary>
            /// Gets the overall summary.
            /// </summary>
            /// <param name="summaryType">Type of the summary.</param>
            /// <param name="attribute">The attribute.</param>
            /// <returns></returns>
            public SummaryItem GetOverallSummary( string summaryType, AttributeCache attribute )
            {
                var overall = new SummaryItem()
                {
                    Title = "Overall Summary",
                    Name = attribute.Name,
                    IconCssClass = attribute.IconCssClass,
                    HistoricalItems = new List<HistoricalItem>()
                };

                var attrValuesOverall = People.Where( perId => AttrValues.ContainsKey( perId ) ).Select( perId => AttrValues[perId] );
                var peoplewithAttribute = People.Where( perId => AttrValues.ContainsKey( perId ) ).ToList();

                overall.Value = CalculateValue( attrValuesOverall, summaryType );
                overall.Total = attrValuesOverall.Count().ToString( "N0" );

                overall.Active = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusActive ).Count().ToString( "N0" );

                overall.Inactive = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusInactive ).Count().ToString( "N0" );

                overall.AttendedLastTwoYears = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && PeopleWithAttendance.Contains( p.Id ) ).Count().ToString( "N0" );

                foreach ( var histAttribute in HistoricalAttributeValues )
                {
                    var histItem = new HistoricalItem
                    {
                        Name = AttributeCache.Get( histAttribute.Key ).Name,
                        Value = CalculateValue( histAttribute.Value.Values, summaryType )
                    };

                    overall.HistoricalItems.Add( histItem );
                }

                return overall;
            }

            /// <summary>
            /// Filters the query.
            /// </summary>
            /// <param name="listFilter">The list filter.</param>
            /// <returns></returns>
            private IQueryable<int> FilterQuery( List<Guid> listFilter )
            {
                IQueryable<int> res = null;
                if ( listFilter.Count > 0 )
                {
                    var personService = new PersonService( rockContext );
                    var personQry = personService.Queryable( false, false );
                    var personIds = new List<int>();

                    foreach ( var dv in listFilter )
                    {
                        var dataView = dataViewService.Get( dv );
                        if ( dataView == null )
                            continue;

                        var errorMessages = new List<string>();
                        var paramExpression = personService.ParameterExpression;
                        var whereExpression = dataView.GetExpression( personService, paramExpression, out errorMessages );

                        personQry = personQry.Where( paramExpression, whereExpression, null );
                    }

                    res = personQry.Select( p => p.Id );
                }

                return res;
            }

            /// <summary>
            /// Processes the active dataviews based on filter criteria.
            /// </summary>
            /// <param name="peopleInFilter">The people in filter.</param>
            /// <param name="listActivities">The list activities.</param>
            /// <param name="campuses">The campuses.</param>
            private void ActivDVWithFilterQuery( IQueryable<int> peopleInFilter, List<Guid> listActivities, List<int> campuses )
            {
                // populate campuses based on filter criteria
                foreach ( var campusId in campuses )
                {
                    PeopleInCampus.Add( campusId, new List<int>() );
                }

                // process each data view and people to Activity and Campus lists.
                foreach ( var dv in listActivities )
                {
                    var dataView = dataViewService.Get( dv );
                    if ( dataView == null )
                        continue;

                    var personService = new PersonService( rockContext );

                    DataViewNames.Add( dv, dataView.Name );

                    var errorMessages = new List<string>();
                    var paramExpression = personService.ParameterExpression;
                    var whereExpression = dataView.GetExpression( personService, paramExpression, out errorMessages );

                    var pQuery = personService.Queryable( false, false ).Where( paramExpression, whereExpression, null );
                    if ( peopleInFilter != null )
                    {
                        pQuery = pQuery.Where( p => peopleInFilter.Contains( p.Id ) );
                    }
                    if ( campuses.Count > 0 )
                    {
                        var gmCampus = CreateQueryForCampus( campuses );
                        pQuery = pQuery.Where( p => gmCampus.Contains( p.Id ) );
                    }

                    PeopleInDataView.Add( dv, new List<int>() );

                    foreach ( var per in pQuery )
                    {
                        if ( People.Contains( per.Id ) == false )
                        {
                            People.Add( per.Id );
                        }
                        PeopleInDataView[dv].Add( per.Id );
                    }

                    if ( campuses.Any() )
                    {
                        foreach ( var per in pQuery )
                        {
                            if ( People.Contains( per.Id ) == false )
                            {
                                People.Add( per.Id );
                            }

                            var campusId = per.PrimaryFamily != null ? per.PrimaryFamily.CampusId : null;
                            if ( campusId.HasValue )
                            {
                                PeopleInCampus[campusId.Value].Add( per.Id );
                            }
                        }
                    }
                }
            }

            /// <summary>
            /// Creates the query for campus.
            /// </summary>
            /// <param name="campuses">The campuses.</param>
            /// <returns></returns>
            public IQueryable<int> CreateQueryForCampus( List<int> campuses )
            {
                var gmService = new GroupMemberService( rockContext );
                var famGroupType = GroupTypeCache.Get( Rock.SystemGuid.GroupType.GROUPTYPE_FAMILY.AsGuid() );

                return gmService.Queryable().AsNoTracking()
                    .Where( gm => gm.Group.GroupTypeId == famGroupType.Id &&
                             campuses.Contains( gm.Group.Campus.Id ) )
                    .Select( gm => gm.PersonId );
            }

            /// <summary>
            /// Gets the summary details.
            /// </summary>
            /// <param name="dataViewGuid">The data view unique identifier.</param>
            /// <param name="summaryType">Type of the summary.</param>
            /// <param name="attribute">The attribute.</param>
            /// <returns></returns>
            private SummaryItem GetSummaryDetails( Guid dataViewGuid, string summaryType, AttributeCache attribute )
            {
                SummaryItem item = new SummaryItem()
                {
                    Title = DataViewNames[dataViewGuid],
                    Name = attribute.Name,
                    IconCssClass = attribute.IconCssClass,
                    HistoricalItems = new List<HistoricalItem>()
                };

                var attrValuesInDV = PeopleInDataView[dataViewGuid].Where( perId => AttrValues.ContainsKey( perId ) ).Select( perId => AttrValues[perId] );
                var peoplewithAttribute = PeopleInDataView[dataViewGuid].Where( perId => AttrValues.ContainsKey( perId ) ).ToList();

                item.Value = CalculateValue( attrValuesInDV, summaryType );
                item.Total = attrValuesInDV.Count().ToString( "N0" );

                item.Active = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusActive ).Count().ToString( "N0" );

                item.Inactive = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusInactive ).Count().ToString( "N0" );

                item.AttendedLastTwoYears = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && PeopleWithAttendance.Contains( p.Id ) ).Count().ToString( "N0" );

                foreach ( var histAttribute in HistoricalAttributeValues )
                {
                    var histItem = new HistoricalItem
                    {
                        Name = AttributeCache.Get( histAttribute.Key ).Name,
                        Value = CalculateValue( histAttribute.Value.Where( v => PeopleInDataView[dataViewGuid].Contains( v.Key ) ).Select( v => v.Value ), summaryType )
                    };

                    item.HistoricalItems.Add( histItem );
                }

                return item;
            }

            /// <summary>Gets the campus summary details.</summary>
            /// <param name="campusId">The campus identifier.</param>
            /// <param name="summaryType">Type of the summary.</param>
            /// <param name="attribute">The attribute.</param>
            /// <returns></returns>
            private SummaryItem GetCampusSummaryDetails( int campusId, string summaryType, AttributeCache attribute )
            {
                var campusName = CampusCache.Get( campusId ).Name;

                SummaryItem item = new SummaryItem()
                {
                    Title = campusName,
                    Name = attribute.Name,
                    IconCssClass = attribute.IconCssClass,
                    HistoricalItems = new List<HistoricalItem>()
                };

                var attrValuesInDV = PeopleInCampus[campusId].Where( perId => AttrValues.ContainsKey( perId ) ).Select( perId => AttrValues[perId] );
                var peoplewithAttribute = PeopleInCampus[campusId].Where( perId => AttrValues.ContainsKey( perId ) ).ToList();

                item.Value = CalculateValue( attrValuesInDV, summaryType );
                item.Total = attrValuesInDV.Count().ToString( "N0" );

                item.Active = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusActive ).Count().ToString( "N0" );

                item.Inactive = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && p.RecordStatusValueId == personRecordStatusInactive ).Count().ToString( "N0" );

                item.AttendedLastTwoYears = personService
                    .Queryable()
                    .AsNoTracking()
                    .Where( p => peoplewithAttribute.Contains( p.Id ) && PeopleWithAttendance.Contains( p.Id ) ).Count().ToString( "N0" );

                foreach ( var histAttribute in HistoricalAttributeValues )
                {
                    var histItem = new HistoricalItem
                    {
                        Name = AttributeCache.Get( histAttribute.Key ).Name,
                        Value = CalculateValue( histAttribute.Value.Where( v => PeopleInCampus[campusId].Contains( v.Key ) ).Select( v => v.Value ), summaryType )
                    };

                    item.HistoricalItems.Add( histItem );
                }

                return item;
            }

            /// <summary>
            /// Calculates the values based on a summary type.
            /// </summary>
            /// <param name="values">The decimal values to be calculated.</param>
            /// <param name="summaryType">The type of calculation to be performed.</param>
            /// <returns></returns>
            private string CalculateValue( IEnumerable<decimal> values, string summaryType )
            {
                string res = "0";

                switch ( summaryType )
                {
                    case "Average":
                        if ( values != null && values.Count() > 0 )
                            res = values.Average().ToString( "N2" );
                        break;

                    case "Total":
                        if ( values != null )
                            res = values.Count().ToString( "N0" );
                        break;

                    default:
                    case "NPS":
                        res = "No Score";
                        if ( values != null )
                        {
                            var total = Convert.ToDecimal( values.Count() );
                            if ( total > 0 )
                            {
                                var numProm = Convert.ToDecimal( values.Count( val => val > 8m ) );
                                var numDet = Convert.ToDecimal( values.Count( val => val < 7m ) );
                                res = ( ( ( numProm - numDet ) / total ) * 100 ).ToString( "N0" );
                            }
                        }
                        break;
                }

                return res;
            }
        }

        #endregion
    }

}