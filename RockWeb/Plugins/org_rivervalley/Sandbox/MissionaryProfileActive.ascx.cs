using System.ComponentModel;
using System.ComponentModel.Composition;
using System.IO;
using System.Linq;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Collections.Generic;
using System.Data;
using System;
using System.Diagnostics;
using Rock.Web.Cache;


namespace RockWeb.Plugins.org_rivervalley.Sandbox
{
    [DisplayName("Missionary Profile Activate")]
    [Category("org_rivervalley > Sandbox")]
    [Description("Mark missionaries as active")]

    public partial class MissionaryProfileActive : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person gmPerson = null;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            lDebugString.Text = "Missionary Profile Active Update<br>";

            var rockContext = new RockContext();
            string gmStatus;
            string gmState;
            int counter = 0;

            var gmQry = new GroupMemberService(new RockContext()).Queryable();
            gmQry = gmQry.Where(row => row.GroupId == 70480 );
            foreach (var qRow in gmQry)
            {
                gmPerson = new PersonService(rockContext).Get(qRow.PersonId);

                gmPerson.LoadAttributes(rockContext);
                if (qRow.GroupMemberStatus == 0)
                {
                    gmStatus = "Inactive";
                    gmState = "";
                }
                else
                {
                    gmStatus = "Active";
                    gmState = "Approved";
                }
                //gmPerson.SetAttributeValue("MissionaryStatus", gmStatus);
                //gmPerson.SetAttributeValue("MissionaryState", gmState);
                //gmPerson.SaveAttributeValues();

                lDebugString.Text += "<br>" + gmPerson.FullName + " | " + qRow.GroupMemberStatus + " | " + gmStatus + " | " + gmState;

                counter++;
            }

            lDebugString.Text += "<br>Count: " + counter;


        }

        #endregion

        #region Events

        #endregion

        #region Methods
               
        #endregion
    }
}