﻿// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Lava;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.org_rivervalley.CustomCore
{
    [DisplayName( "Fundraising Progress" )]
    [Category( "River Valley Church > Fundraising" )]
    [Description( "Progress for all people in a fundraising opportunity" )]
    public partial class FundraisingProgress : RockBlock
    {

        #region Fields

        public decimal PercentComplete = 0;
        public decimal GroupIndividualFundraisingGoal;
        public decimal GroupContributionTotal;
        public string ProgressCssClass;

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
            this.BlockUpdated += Block_BlockUpdated;
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
                int? groupId = this.PageParameter( "GroupId" ).AsIntegerOrNull();
                int? groupMemberId = this.PageParameter( "GroupMemberId" ).AsIntegerOrNull();

                if ( groupId.HasValue || groupMemberId.HasValue )
                {
                    ShowView( groupId, groupMemberId );
                }
                else
                {
                    pnlView.Visible = false;
                }
            }
        }

        #endregion

        #region Methods

        /// <summary>
        /// Shows the view.
        /// </summary>
        /// <param name = "groupId" > The group identifier.</param>
        protected void ShowView( int? groupId, int? groupMemberId )
        {
            var rockContext = new RockContext();
            Group group = null;
            GroupMember groupMember = null;
            int fundraisingOpportunityTypeId = GroupTypeCache.Get( Rock.SystemGuid.GroupType.GROUPTYPE_FUNDRAISINGOPPORTUNITY ).Id;

            pnlView.Visible = true;
            hfGroupId.Value = groupId.ToStringSafe();
            hfGroupMemberId.Value = groupMemberId.ToStringSafe();

            if ( groupId.HasValue )
            {
                group = new GroupService( rockContext ).Get( groupId.Value );
            }
            else
            {
                groupMember = new GroupMemberService( rockContext ).Get( groupMemberId ?? 0 );
                group = groupMember.Group;
            }

            if ( group == null || !IsGroupOfType( group, fundraisingOpportunityTypeId ) )
            {
                pnlView.Visible = false;
                return;
            }
            lTitle.Text = group.Name.FormatAsHtmlTitle();

            BindGroupMembersProgressGrid( group, groupMember, rockContext );
        }

        /// <summary>
        /// Determines whether the group inherits from the specified group type identifier.
        /// </summary>
        /// <param name="group">The group.</param>
        /// <param name="targetGroupTypeId">The target group type identifier.</param>
        /// <returns>
        ///   <c>true</c> if group inherits from the group type; otherwise, <c>false</c>.
        /// </returns>
        bool IsGroupOfType( Group group, int targetGroupTypeId )
        {
            var groupType = GroupTypeCache.Get( group.GroupTypeId );

            while ( groupType != null )
            {
                if ( groupType.Id == targetGroupTypeId )
                {
                    return true;
                }

                groupType = groupType.InheritedGroupType;
            }

            return false;
        }

        /// <summary>
        /// Binds the group members progress repeater.
        /// </summary>
        protected void BindGroupMembersProgressGrid( Group group, GroupMember gMember, RockContext rockContext )
        {
            IQueryable<GroupMember> groupMembersQuery;

            if ( gMember != null )
            {
                groupMembersQuery = new GroupMemberService( rockContext ).Queryable().Where( a => a.Id == gMember.Id );

                pnlHeader.Visible = false;
            }
            else
            {
                groupMembersQuery = new GroupMemberService( rockContext ).Queryable().Where( a => a.GroupId == group.Id );
            }

            group.LoadAttributes( rockContext );
            var defaultIndividualFundRaisingGoal = group.GetAttributeValue( "IndividualFundraisingGoal" ).AsDecimalOrNull();

            groupMembersQuery = groupMembersQuery.Sort( new SortProperty { Property = "Person.LastName, Person.NickName" } );

            var entityTypeIdGroupMember = EntityTypeCache.GetId<Rock.Model.GroupMember>();

            var groupMemberList = groupMembersQuery.ToList().Select( a =>
            {
                var groupMember = a;
                groupMember.LoadAttributes( rockContext );

                var contributionTotal = new FinancialTransactionDetailService( rockContext ).Queryable()
                            .Where( d => d.EntityTypeId == entityTypeIdGroupMember
                                    && d.EntityId == groupMember.Id )
                            .Sum( d => (decimal?)d.Amount ) ?? 0;

                var individualFundraisingGoal = groupMember.GetAttributeValue( "IndividualFundraisingGoal" ).AsDecimalOrNull();
                bool disablePublicContributionRequests = groupMember.GetAttributeValue( "DisablePublicContributionRequests" ).AsBoolean();
                if ( !individualFundraisingGoal.HasValue )
                {
                    individualFundraisingGoal = group.GetAttributeValue( "IndividualFundraisingGoal" ).AsDecimalOrNull();
                }

                decimal percentageAchieved = 0;
                if ( individualFundraisingGoal != null )
                {
                    percentageAchieved = individualFundraisingGoal == 0 ? 0 : contributionTotal / ( 0.01M * individualFundraisingGoal.Value );
                }

                var progressBarWidth = percentageAchieved;

                if ( percentageAchieved >= 100 )
                {
                    progressBarWidth = 100;
                }


                if ( !individualFundraisingGoal.HasValue )
                {
                    individualFundraisingGoal = 0;
                }

                return new
                {
                    FullName = groupMember.Person.FullName,
                    IndividualFundraisingGoal = ( individualFundraisingGoal ?? 0.00M ).ToString( "0.##" ),
                    ContributionTotal = contributionTotal.ToString( "0.##" ),
                    Percentage = percentageAchieved.ToString( "0.##" ),
                    CssClass = GetProgressCssClass( percentageAchieved ),
                    ProgressBarWidth = progressBarWidth
                };
            } ).ToList();

            this.GroupIndividualFundraisingGoal = groupMemberList.Sum( a => decimal.Parse( a.IndividualFundraisingGoal ) );
            this.GroupContributionTotal = groupMemberList.Sum( a => decimal.Parse( a.ContributionTotal ) );
            this.PercentComplete = decimal.Round( this.GroupContributionTotal == 0 ? 0 : this.GroupContributionTotal / ( this.GroupIndividualFundraisingGoal * 0.01M ), 2 );
            this.ProgressCssClass = GetProgressCssClass( this.PercentComplete );

            rptFundingProgress.DataSource = groupMemberList;
            rptFundingProgress.DataBind();
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the Block control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_BlockUpdated( object sender, EventArgs e )
        {
            ShowView( hfGroupId.Value.AsIntegerOrNull(), hfGroupMemberId.Value.AsIntegerOrNull() );
        }

        #endregion

        #region Methods

        private string GetProgressCssClass( decimal percentage )
        {
            var cssClass = "warning";

            if ( percentage >= 100 )
            {
                cssClass = "success";
            }
            else if ( percentage > 40 && percentage < 100 )
            {
                cssClass = "info";
            }

            return cssClass;
        }

        #endregion
    }
}