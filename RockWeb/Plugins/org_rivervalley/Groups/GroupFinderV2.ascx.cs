using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.org_riverValley.Groups
{
    [DisplayName( "Group Finder V2" )]
    [Category( "River Valley > Groups" )]
    [Description( "Block for people to find a group that matches their search parameters." )]

    // Configuration Settings
    [GroupTypesField( "Group Types", "", true, "", "", 0 )]
    [CodeEditorField( "Lava Template", "", CodeEditorMode.Lava, CodeEditorTheme.Rock, 200, true, @"
<style>
    /* beginning of RVC overrides */
    
    p {
        font-size: 14px;
        line-height: 1.428571429;
        margin: 0 0 10px;
    }
    
    h4 {
        font-size: 18px;
        margin-top: 10px;
        line-height: 1.1;
    }
    
    .btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.428571429;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .btn-sm, .btn-group-sm>.btn {
        padding: 5px 10px;
        font-size: 12px !important;
        line-height: 1.5;
        border-radius: 3px;
        height: 33px;
        min-width: 30px;
    }
    
    .btn-default {
        background-color: white;
    }
    
    /* end of RVC overrides */
    
    .group-card {
        position: relative;
        margin: 0 auto 16px;
        height: 265px;
        max-width: 352px;
        background: #fff;
        border: 1px solid #f8f8f8;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.24);
        box-shadow: 0 1px 4px rgba(0,0,0,.24);
    }
    
    .group-card-side-bar {
        background-color: #eee;
        position: absolute;
        text-align: center;
        top: -1px;
        left: -1px;
        display: inline-block;
        width: 88px;
        height: calc(100% + 2px);
    }
    
    .group-card-side-bar-top {
        background-color: #76c24e;
        height: 88px;
    }
    
    .group-card-separator {
        border-color: #76c24e #eee;
        width: 10px;
        border-style: solid;
        border-width: 13px 10px 0;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        margin-left: 50%;
    }
    
    .group-card-content {
        display: inline-block;
        height: 100%;
        margin-left: 100px;
        padding-right: 16px;
        width: calc(100% - 100px);
        position: relative;
        overflow-y: hidden;
        overflow-wrap: break-word;
    }
    
    .group-type, .group-day, .group-time, .group-separator  {
        margin: 0px;
    }
    
    .group-type  {
        color: white;
        font-weight: 700;
        color: #76c24e;
        height: 60px;
        overflow: hidden;
    }
    
    .group-actions {
        position: absolute;
        bottom: 10px;
    }
    
    .group-actions > .btn {
        width: 117px;
    }
    
    .group-image {
        margin: 8px;
        border: white;
        border-style: solid;
        border-width: 2px;
        width: 70px;
        height: 70px;
    }
    
    .group-name {
        font-weight: 900;
        margin-bottom: 0px;
    }
    
    .description-fade {
        background: linear-gradient(1turn,#fff 36.2%,hsla(0,0%,100%,0) 114.1%);
        height: 215px;
        width: 100%;
        position: absolute;
    }
    
    .group-count {
        margin-bottom: 20px;
    }
    
    .group-icon {
        padding: 5px;
    }
    
    .group-card {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: .50s;
    }
    
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    }
</style>


<div class=""row"">
    <div class=""col-md-12"">
        <hr/>
    </div>
</div>
<div class=""row"">
    <div class=""col-md-12"">
        <h4 class=""group-count text-center"">{{ Groups | Size }} Lifegroups Found</h4>
    </div>
    {% for group in Groups %}
    
    {% assign color = '#000' %}
    {% assign types = group.Group | Attribute:'Type','Object' %}
    {% for type in types %}
        {% assign color = type | Attribute:'Color' %}
        {% break %}
    {% endfor %}

    <div class=""col-md-4"">
        <div class=""group-card"">
            <div class=""group-card-side-bar"">
                <div class=""group-card-side-bar-top"" style=""background-color: {{ color }};"">
                    {% if group.Leader and group.Leader.PhotoUrl != '' %}
                    <img class=""group-image img-circle"" src=""{{ group.Leader.PhotoUrl }}&width=70&height=70&mode=crop"" />
                    {% else %}
                    <img class=""group-image img-circle"" src=""/Assets/Images/person-no-photo-unknown.svg?width=70&height=70&mode=crop"" />
                    {% endif %}
                </div>
                <div class=""group-card-separator"" style=""border-color: {{ color }} #eee;""></div>
                <p class=""group-type"" style=""color: {{ color }};"">{{ group.Group | Attribute:'Type' | Replace:',',',<br/>' }}</p>
                <p class=""group-separator""><i class=""fa fa-ellipsis-h""></i></p>
                <p class=""group-day"">{{ group.DayOfWeek }}</p>
                <p class=""group-time"">{{ group.TimeOfDay | Date:'h:mm tt' }}</p>
                <p class=""group-separator""><i class=""fa fa-ellipsis-h""></i></p>
                <p class=""group-icons"" style=""color: {{ color }};"">
                    {% if group.KidsWelcome %}<i class=""group-icon fa fa-child""></i>{% endif %}
                    {% assign meetingType = group.Group | Attribute:'MeetingType' %}
                    {% if meetingType contains 'Virtual' %}<i class=""group-icon fa fa-globe""></i>{% endif %}
                </p>
            </div>
            <div class=""group-card-content"">
                <h4 class=""group-name"">{{ group.Name }}</h4>
                <p>{{ group.CampusName }}</p>
                <div class=""description-fade""></div>
                <p class=""group-description"">
                    {{ group.Description  | TruncateWords:35 }}
                </p>
                <div class=""group-actions"">
                    <a class=""btn btn-default btn-sm"" href=""{{ LinkedPages.ContactLeaderPage }}?GroupId={{ group.Id }}"">Contact Leader</a>
                    <a class=""btn btn-primary btn-sm"" href=""{{ LinkedPages.RegisterPage }}?GroupId={{ group.Id }}"">Join Group</a>
                </div>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
", "", Order = 1, Key = "LavaTemplate" )]

    // Linked Pages
    [LinkedPage( "Contact Leader Page", "The page to navigate to when contacting the leader.", false, "", "", Order = 2 )]
    [LinkedPage( "Register Page", "The page to navigate to when registering for a group.", false, "", "", Order = 3 )]

    [DefinedTypeField( "Group Type Defined Type", "The defined type used for the group type.", true, "", "", 4 )]
    [DefinedTypeField( "Demographic Defined Type", "The defined type used for the demographic.", true, "", "", 5 )]
    [DefinedTypeField( "Meeting Type Defined Type", "The defined type used for meeting type.", true, "", "", 6 )]

    public partial class GroupFinderV2 : RockBlock
    {
        #region Private Variables

        private int? _campusId = null;

        #endregion

        #region Properties



        #endregion

        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit( EventArgs e )
        {
            base.OnInit( e );

            this.BlockUpdated += Block_Updated;
            this.AddConfigurationUpdateTrigger( upnlContent );
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
                BuildControls();

                _campusId = PageParameter( "CampusId" ).AsIntegerOrNull();
                if ( _campusId.HasValue )
                {
                    ddlCampuses.SelectedValue = _campusId.Value.ToString();
                }

                List<Day> days = new List<Day>();
                days.Add(new Day("Sunday", "Sun"));
                days.Add(new Day("Monday", "Mon"));
                days.Add(new Day("Tuesday", "Tue"));
                days.Add(new Day("Wednesday", "Wed"));
                days.Add(new Day("Thursday", "Thu"));
                days.Add(new Day("Friday", "Fri"));
                days.Add(new Day("Saturday", "Sat"));

                rptDays.DataSource = days.ToList();
                rptDays.DataBind();

                BindGroups();
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
            // todo
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the ddlCampuses control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void ddlCampuses_SelectedIndexChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the dvpGroupTypes control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dvpGroupTypes_SelectedIndexChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the dvpDemographic control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dvpDemographic_SelectedIndexChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        /// <summary>
        /// Handles the SelectedIndexChanged event of the dvpMeetingType control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void dvpMeetingType_SelectedIndexChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        protected void btnDay_ItemCommand(object sender, RepeaterCommandEventArgs e)
        {
            foreach(RepeaterItem item in rptDays.Items)
            {
                LinkButton btnDay = item.FindControl("btnDay") as LinkButton;
                if(btnDay == e.CommandSource)
                {
                    if( btnDay.CssClass.Contains("active") )
                    {
                        btnDay.RemoveCssClass("active");
                    }
                    else
                    {
                        btnDay.AddCssClass("active");
                    }
                }
            }
            BindGroups();
        }

        /// <summary>
        /// Handles the TextChanged event of the tbKeyword control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void tbKeyword_TextChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        /// <summary>
        /// Handles the CheckedChanged event of the swKidsWelcome control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void swKidsWelcome_CheckedChanged( object sender, EventArgs e )
        {
            BindGroups();
        }

        #endregion

        #region Internal Methods

        /// <summary>
        /// Builds the controls.
        /// </summary>
        private void BuildControls()
        {
            // campus filter
            ddlCampuses.Items.Clear();
            ddlCampuses.Items.Add( new ListItem( "All Campuses", null ) );

            foreach ( var campus in CampusCache.All( false ) )
            {
                ddlCampuses.Items.Add( new ListItem( campus.Name, campus.Id.ToString() ) );
            }

            // group type filter
            Guid? groupTypeDefinedType = GetAttributeValue( "GroupTypeDefinedType" ).AsGuidOrNull();
            if ( groupTypeDefinedType.HasValue )
            {
                var definedType = DefinedTypeCache.Get( groupTypeDefinedType.Value );
                dvpGroupTypes.DefinedTypeId = definedType.Id;
            }

            // demographic filter
            Guid? demographicDefinedTypeGuid = GetAttributeValue( "DemographicDefinedType" ).AsGuidOrNull();
            if ( demographicDefinedTypeGuid.HasValue )
            {
                var definedType = DefinedTypeCache.Get( demographicDefinedTypeGuid.Value );
                dvpDemographic.DefinedTypeId = definedType.Id;
            }

            // meeting type filter
            Guid? meetingTypeDefinedTypeGuid = GetAttributeValue( "MeetingTypeDefinedType" ).AsGuidOrNull();
            if ( meetingTypeDefinedTypeGuid.HasValue )
            {
                var definedType = DefinedTypeCache.Get( meetingTypeDefinedTypeGuid.Value );
                dvpMeetingType.DefinedTypeId = definedType.Id;
            }
        }

        /// <summary>
        /// Binds the groups.
        /// </summary>
        private void BindGroups()
        {
            _campusId = ddlCampuses.SelectedValue.AsIntegerOrNull();

            var rockContext = new RockContext();
            var groupService = new GroupService( rockContext );
            var attributeService = new AttributeService( rockContext ).Queryable().AsNoTracking();
            var avService = new AttributeValueService( rockContext ).Queryable().AsNoTracking();
            var groupTypesGuids = GetAttributeValue( "GroupTypes" ).SplitDelimitedValues().AsGuidList();

            int groupEntityTypeId = EntityTypeCache.Get( "Rock.Model.Group" ).Id;

            var kidsWelcomeGroupIds = avService.Where( av => av.Attribute.EntityTypeId == groupEntityTypeId &&
                                                           av.Attribute.Key == "KidsWelcome" &&
                                                           av.EntityId.HasValue &&
                                                           av.ValueAsBoolean == true )
                                             .Select( av => av.EntityId.Value )
                                             .ToList();

            var groupQry = groupService.Queryable()
                .Where( g => groupTypesGuids.Contains( g.GroupType.Guid ) &&
                             g.IsActive && g.IsPublic && !g.IsArchived &&
                             ( !g.GroupCapacity.HasValue || g.GroupCapacity.Value > g.Members.Where( m => !m.IsArchived && m.GroupMemberStatus == GroupMemberStatus.Active ).Count() ) &&
                             ( _campusId == null || g.Campus.Id == _campusId.Value ) );

            // life group type
            var lifeGroupTypeLookup = avService.Where( av => av.Attribute.EntityTypeId == groupEntityTypeId &&
                                                           av.Attribute.Key == "Type" &&
                                                           av.EntityId.HasValue )
                                             .ToDictionary( d => d.EntityId.Value, d => d.Value );

            // demographic
            var demographicLookup = avService.Where( av => av.Attribute.EntityTypeId == groupEntityTypeId &&
                                                           av.Attribute.Key == "Demographic" &&
                                                           av.EntityId.HasValue )
                                             .ToDictionary( d => d.EntityId.Value, d => d.Value );

            // meeting type
            var meetingTypeLookup = avService.Where( av => av.Attribute.EntityTypeId == groupEntityTypeId &&
                                                           av.Attribute.Key == "MeetingType" &&
                                                           av.EntityId.HasValue )
                                             .ToDictionary( d => d.EntityId.Value, d => d.Value );

            // Get list of groups
            List<GroupItem> groupItems = groupQry.ToList()
                .Select( g => new GroupItem
                {
                    Id = g.Id,
                    Name = g.Name,
                    Description = g.Description,
                    GroupType = g.GroupType.Name,
                    CampusId = g.Campus != null ? g.Campus.Id : 0,
                    CampusName = g.Campus != null ? g.Campus.Name : string.Empty,
                    DayOfWeek = g.Schedule != null ? (g.Schedule.WeeklyDayOfWeek.ToString() != null ? g.Schedule.WeeklyDayOfWeek.ToString() : g.Schedule.GetNextStartDateTime(DateTime.Now).ToString()) : string.Empty,
                    TimeOfDay = g.Schedule != null ? g.Schedule.WeeklyTimeOfDay.ToString() : string.Empty,
                    Leader = g.Members.Where( m =>
                                        !m.IsArchived &&
                                         m.GroupMemberStatus == GroupMemberStatus.Active &&
                                         m.GroupRole.IsLeader &&
                                          m.GroupRole.Name != "Admin" )
                                    .OrderBy( m => m.GroupRole.Order )
                                    .Select( m => m.Person ).FirstOrDefault(),
                    Capacity = g.GroupCapacity,
                    SpotsFilled = g.Members.Where( m => !m.IsArchived && m.GroupMemberStatus == GroupMemberStatus.Active ).Count(),
                    KidsWelcome = kidsWelcomeGroupIds.Contains( g.Id ),
                    Group = g,
                    LifeGroupTypeValue =
                        lifeGroupTypeLookup.Where( l => l.Key == g.Id ).Any() ?
                        lifeGroupTypeLookup.Where( l => l.Key == g.Id ).Select( l => l.Value ).First() :
                        attributeService.Where( a => a.EntityTypeId == groupEntityTypeId && a.Key == "Type" && a.EntityTypeQualifierValue == g.GroupType.Id.ToString() ).Select( a => a.DefaultValue ).FirstOrDefault(),
                    DemographicValue =
                        demographicLookup.Where( l => l.Key == g.Id ).Any() ?
                        demographicLookup.Where( l => l.Key == g.Id ).Select( l => l.Value ).First() :
                        attributeService.Where( a => a.EntityTypeId == groupEntityTypeId && a.Key == "Demographic" && a.EntityTypeQualifierValue == g.GroupType.Id.ToString() ).Select( a => a.DefaultValue ).FirstOrDefault(),
                    MeetingTypeValue =
                        meetingTypeLookup.Where( l => l.Key == g.Id ).Any() ?
                        meetingTypeLookup.Where( l => l.Key == g.Id ).Select( l => l.Value ).First() :
                        attributeService.Where( a => a.EntityTypeId == groupEntityTypeId && a.Key == "MeetingType" && a.EntityTypeQualifierValue == g.GroupType.Id.ToString() ).Select( a => a.DefaultValue ).FirstOrDefault()
                } )
                .OrderBy( g => g.Name )
                .ToList();

            // keyword search
            if ( tbKeyword.Text.IsNotNullOrWhiteSpace() )
            {
                groupItems = groupItems.Where( g => g.Name.ToLower().Contains( tbKeyword.Text.ToLower() ) ||
                                        g.Description.ToLower().Contains( tbKeyword.Text.ToLower() ) ||
                                        g.CampusName.ToLower().Contains( tbKeyword.Text.ToLower() ) ||
                                        g.GroupType.ToLower().Contains( tbKeyword.Text.ToLower() ) ||
                                        g.DayOfWeek.ToLower().Contains( tbKeyword.Text.ToLower() ) ||
                                        ( g.Leader != null && g.Leader.FullName.ToLower().Contains( tbKeyword.Text.ToLower() ) ) )
                    .ToList();
            }

            // filter Kids Welcome
            if ( swKidsWelcome.Checked )
            {
                groupItems = groupItems.Where( g => g.KidsWelcome ).ToList();
            }

            // filter Life Group Type
            if ( dvpGroupTypes.SelectedDefinedValueId.HasValue )
            {
                var definedValue = DefinedValueCache.Get( dvpGroupTypes.SelectedDefinedValueId.Value );
                if ( definedValue != null )
                {
                    groupItems = groupItems.Where( g => g.LifeGroupTypeValue != null && g.LifeGroupTypeValue.Contains( definedValue.Guid.ToString() ) ).ToList();
                }
            }

            // filter Demographic
            if ( dvpDemographic.SelectedDefinedValueId.HasValue )
            {
                var definedValue = DefinedValueCache.Get( dvpDemographic.SelectedDefinedValueId.Value );
                if ( definedValue != null )
                {
                    groupItems = groupItems.Where( g => g.DemographicValue != null && g.DemographicValue.Contains( definedValue.Guid.ToString() ) ).ToList();
                }
            }

            // filter Meeting Day(s)
            List<string> selectedDays = new List<string>();
            foreach (RepeaterItem item in rptDays.Items) //iterate through the repeater buttons and figure out which ones are selected
            {
                var btnDay = item.FindControl("btnDay") as LinkButton;
                if (btnDay != null)
                {
                    if(btnDay.CssClass.Contains("active"))
                    {
                        selectedDays.Add(btnDay.CommandArgument); //adds the full day string to the list
                    }
                }
            }
            if ( selectedDays.Any() )
            {
                groupItems = groupItems.Where(g => selectedDays.Contains(g.DayOfWeek)).ToList();
            }
            
            // filter Meeting Type
            if ( dvpMeetingType.SelectedDefinedValueId.HasValue )
            {
                var definedValue = DefinedValueCache.Get( dvpMeetingType.SelectedDefinedValueId.Value );
                if ( definedValue != null )
                {
                    groupItems = groupItems.Where( g => g.MeetingTypeValue != null && g.MeetingTypeValue.Contains( definedValue.Guid.ToString() ) ).ToList();
                }
            }

            var mergeObjects = Rock.Lava.LavaHelper.GetCommonMergeFields( this.RockPage, null, new Rock.Lava.CommonMergeFieldsOptions { GetLegacyGlobalMergeFields = false } );
            mergeObjects.Add( "Groups", groupItems );

            Dictionary<string, object> linkedPages = new Dictionary<string, object>();
            linkedPages.Add( "ContactLeaderPage", LinkedPageRoute( "ContactLeaderPage" ) );
            linkedPages.Add( "RegisterPage", LinkedPageRoute( "RegisterPage" ) );
            mergeObjects.Add( "LinkedPages", linkedPages );

            lLavaTemplate.Text = GetAttributeValue( "LavaTemplate" ).ResolveMergeFields( mergeObjects );
        }



        #endregion
    }

    #region Helper Classes

    [DotLiquid.LiquidType( "Id", "Name", "Description", "GroupType", "CampusId", "CampusName", "DayOfWeek", "TimeOfDay", "Leader", "Capacity", "SpotsFilled", "Demographic", "KidsWelcome", "Group", "LifeGroupTypeValue", "DemographicValue", "MeetingTypeValue" )]
    public class GroupItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string GroupType { get; set; }

        public int? CampusId { get; set; }

        public string CampusName { get; set; }

        public string DayOfWeek { get; set; }

        public string TimeOfDay { get; set; }

        public Person Leader { get; set; }

        public int? Capacity { get; set; }

        public int SpotsFilled { get; set; }

        public bool KidsWelcome { get; set; }

        public Group Group { get; set; }

        public string LifeGroupTypeValue { get; set; }

        public string DemographicValue { get; set; }

        public string MeetingTypeValue { get; set; }
    }

    public class Day
    {
        public string FullName { get; set; }
        public string AbbreviatedName { get; set; }

        public Day(string fn, string an)
        {
            FullName = fn;
            AbbreviatedName = an;
        }
    }

    #endregion
}
