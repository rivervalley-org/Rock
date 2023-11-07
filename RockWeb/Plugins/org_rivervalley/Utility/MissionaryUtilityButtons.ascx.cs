using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.Composition;
using System.Linq;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Entity;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.Utility
{
    [DisplayName("Missionary Utility Buttons")]
    [Category("org_rivervalley > Utility")]
    [Description("Will update missionary data")]
    [IntegerField("Group Id", "Group Id for the missionary or missionary organization to be added to.", false, 0)]
    [IntegerField("Group Id 2", "Group Id for the missionary to the Online Contribution Receipt for Missionary Group.", false, 0)]

    public partial class MissionaryUtilityButtons : Rock.Web.UI.RockBlock
    {
        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:Init" /> event.
        /// </summary>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);            
        }

        /// <summary>
        /// Raises the <see cref="E:Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            nbNotification.Text = "";
            nbNotification.Visible = false;
            nbNotification.NotificationBoxType = NotificationBoxType.Info;
            nbNotificationFeatured.NotificationBoxType = NotificationBoxType.Info;
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the Click event of the btnDoNotMail control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnDoNotMail_Click(object sender, EventArgs e)
        {
            // make sure person exists
            int? personId = PageParameter( "PersonId" ).AsIntegerOrNull();
            if ( !personId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request";
                nbNotification.Visible = true;
            }

            var rockContext = new RockContext();
            var person = new PersonService( rockContext ).Get( personId.Value );
            person.LoadAttributes( rockContext );
            person.SetAttributeValue( "Arena-35-504", "true" );
            person.SaveAttributeValues();

            nbNotification.Text = "Do Not Mail Attributes Updated";
            nbNotification.Visible = true;
        }

        /// <summary>
        /// Handles the Click event of the btnAddMissionary control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnAddMissionary_Click(object sender, EventArgs e)
        {
            var rockContext = new RockContext();

            // make sure person exists
            int? personId = PageParameter( "PersonId" ).AsIntegerOrNull();
            if ( !personId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request";
                nbNotification.Visible = true;
            }
            var person = new PersonService( rockContext ).Get( personId.Value );

            // make sure group exists
            int? groupId = GetAttributeValue( "GroupId" ).AsIntegerOrNull();
            if ( !groupId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request. Add a block 'Group Id' attribute.";
                nbNotification.Visible = true;
                return;
            }
            var group = new GroupService( rockContext ).Get( groupId.Value );


            if ( IsGroupMember( group.Id, person.Id ) )
            {
                nbNotification.Text = person.FullName + " already part of group " + group.Name;
                nbNotification.Visible = true;
            }
            else
            {
                var groupMemberService = new GroupMemberService( rockContext );
                var groupMember = groupMemberService.AddOrRestoreGroupMember( group, personId.Value, group.GroupType.DefaultGroupRoleId.Value );
                groupMember.GroupMemberStatus = GroupMemberStatus.Active;

                rockContext.SaveChanges();

                nbNotification.Text = person.FullName + " was added to group " + group.Name;
                nbNotification.Visible = true;

                // update missionary state to Approved status
                person.LoadAttributes( rockContext );
                person.SetAttributeValue( "MissionaryState", "Approved" );
                person.SaveAttributeValues();
            }

        }

        /// <summary>
        /// Handles the Click event of the btnAddContribution control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnAddContribution_Click(object sender, EventArgs e)
        {
            var rockContext = new RockContext();

            // make sure person exists
            int? personId = PageParameter( "PersonId" ).AsIntegerOrNull();
            if ( !personId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request";
                nbNotification.Visible = true;
            }
            var person = new PersonService( rockContext ).Get( personId.Value );

            // make sure group exists
            int? groupId = GetAttributeValue( "GroupId2" ).AsIntegerOrNull();
            if ( !groupId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request. Add a block 'Group Id' attribute.";
                nbNotification.Visible = true;
                return;
            }
            var group = new GroupService( rockContext ).Get( groupId.Value );

            // make sure configued group has a default role we can use.
            if ( !group.GroupType.DefaultGroupRoleId.HasValue )
            {
                nbNotification.Text = "The configured group's group type does not have a default group role assigned.";
                nbNotification.Visible = true;
                return;
            }

            // add person to group
            if ( IsGroupMember( groupId.Value, personId.Value ) )
            {
                nbNotification.Text = person.FullName + " already part of group " + group.Name;
                nbNotification.Visible = true;
            }
            else
            {
                var groupMemberService = new GroupMemberService( rockContext );
                var groupMember = groupMemberService.AddOrRestoreGroupMember( group, personId.Value, group.GroupType.DefaultGroupRoleId.Value );
                groupMember.GroupMemberStatus = GroupMemberStatus.Active;
                
                rockContext.SaveChanges();

                nbNotification.Text = person.FullName + " was added to group " + group.Name;
                nbNotification.Visible = true;      
            }
        }

        /// <summary>
        /// Handles the Click event of the btnFeatured control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnFeatured_Click( object sender, EventArgs e )
        {
            var rockContext = new RockContext();

            // make sure person exists
            int? personId = PageParameter( "PersonId" ).AsIntegerOrNull();
            if ( !personId.HasValue )
            {
                nbNotification.Text = "An error has occurred in processing your request";
                nbNotification.Visible = true;
            }
            var person = new PersonService( rockContext ).Get( personId.Value );

            int? accountId = new AttributeValueService( rockContext )
                .Queryable().AsNoTracking()
                .Where( av => av.EntityId.HasValue && av.AttributeId == 3671 && av.ValueAsPersonId == personId )
                .Select( av => av.EntityId.Value )
                .FirstOrDefault();
                    
            if ( accountId.HasValue && accountId > 0 )
            {
                hfFinancialAccountId.Value = accountId.ToString();
                var account = new FinancialAccountService( rockContext ).Get( accountId.Value );
                account.LoadAttributes( rockContext );

                if ( account.GetAttributeValue( "FeatureStartDate" ).IsNotNullOrWhiteSpace() )
                {
                    var startDate = Convert.ToDateTime( account.GetAttributeValue( "FeatureStartDate" ) );
                    dpStartDate.Text = startDate.ToShortDateString();
                }
                if ( account.GetAttributeValue( "FeatureStopDate" ).IsNotNullOrWhiteSpace() )
                {
                    var endDate = Convert.ToDateTime( account.GetAttributeValue( "FeatureStopDate" ) );
                    dpEndDate.Text = endDate.ToShortDateString();
                }

                nbNotificationFeatured.Text = "Prefilled dates reflect previously entered data.";
                nbNotificationFeatured.Visible = true;

                pnlButtons.Visible = false;
                pnlFeatured.Visible = true;
            }
            else
            {
                pnlButtons.Visible = true;
                pnlFeatured.Visible = false;
                nbNotification.Text = "This person does not have an account set up. Contact administrator.";
                nbNotification.Visible = true;
            }

        }

        /// <summary>
        /// Handles the Click event of the btnFeaturedSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnFeaturedSave_Click( object sender, EventArgs e )
        {
            int accountId = int.Parse( hfFinancialAccountId.Value );

            if ( !dpStartDate.SelectedDate.HasValue && !dpEndDate.SelectedDate.HasValue )
            {
                nbNotificationFeatured.Text = "Start or End date is blank";

                pnlFeatured.Visible = true;
                pnlButtons.Visible = false;
                nbNotificationFeatured.Visible = true;
                return;
            }

            int? personId = PageParameter( "PersonId" ).AsIntegerOrNull();
            if ( personId.HasValue )
            {
                var rockContext = new RockContext();
                var account = new FinancialAccountService( rockContext ).Get( accountId );
                account.LoadAttributes( rockContext );

                account.SetAttributeValue( "FeatureStartDate", dpStartDate.SelectedDate.Value );
                account.SetAttributeValue( "FeatureStopDate", dpStartDate.SelectedDate.Value );
                account.SaveAttributeValues();

                pnlButtons.Visible = true;
                pnlFeatured.Visible = false;

                nbNotification.Text = "Dates Saved";
                nbNotification.Visible = true;
            }
            else
            {
                nbNotificationFeatured.Text = "An error has occurred in processing your request";
                nbNotificationFeatured.Visible = true;
            }
        }

        /// <summary>
        /// Handles the Click event of the btnCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            pnlButtons.Visible = true;
            pnlFeatured.Visible = false;
        }

        #endregion

        #region Methods

        /// <summary>
        /// Determines whether [is group member] [the specified group identifier].
        /// </summary>
        /// <param name="groupId">The group identifier.</param>
        /// <param name="personId">The person identifier.</param>
        /// <returns>
        ///   <c>true</c> if [is group member] [the specified group identifier]; otherwise, <c>false</c>.
        /// </returns>
        protected bool IsGroupMember( int groupId, int personId )
        {
            return new GroupMemberService( new RockContext() ).Queryable().AsNoTracking()
                .Any( g => g.GroupId == groupId && 
                           g.PersonId == personId );
        }

        #endregion
    }
}