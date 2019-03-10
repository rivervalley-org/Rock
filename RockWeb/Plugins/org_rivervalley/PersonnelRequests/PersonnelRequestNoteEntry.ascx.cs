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

using org.rivervalley.PersonnelRequests.Model;

using Rock;
using Rock.Attribute;
using Rock.Model;
using Rock.Web.UI.Controls;
using Rock.Data;
using System.Data;
using Rock.Web.Cache;
using Rock.Communication;

namespace RockWeb.Plugins.org_rivervalley.PersonnelRequests
{
    [DisplayName("Personnel Request Notes Entry")]
    [Category("org_rivervalley > PersonnelRequests")]
    [Description("Data Entry for Notes in Personnel Request")]

    public partial class PersonnelRequestNoteEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        private Person currentPerson = null;
        private PersonnelRequest currentRequest = null;
        private PersonnelRequestNote currentNote = null;
        private int personnelRequestId;

        #endregion

        #region Base Control Methods

        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            currentPerson = CurrentPerson;

            if (!Page.IsPostBack)
            {
                GetGuidId();
                if (personnelRequestId > 0)
                {
                    hfPersonnelRequestId.Value = personnelRequestId.ToString();
                    pnlNote.Visible = true;
                    GetJobTitle(currentRequest.JobTitleValueId);                    
                }
                else
                {
                    pnlError.Visible = true;
                    lErrorString.Text = "An error occurred in processing your request.";
                }
            }
        }

        #endregion

        #region Events

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            NavigateToParentPage();
        }

        protected void btnSave_Click(object sender, EventArgs e)
        {
            personnelRequestId = int.Parse(hfPersonnelRequestId.Value);

            var dataContext = new RockContext();
            var service = new PersonnelRequestNoteService(dataContext);

            currentNote = new PersonnelRequestNote();
            service.Add(currentNote);

            currentNote.PersonnelRequestId = personnelRequestId;
            int aliasId = currentPerson.PrimaryAliasId ?? default(int);
            currentNote.PersonAliasId = aliasId;
            currentNote.Note = tbNote.Text;

            dataContext.SaveChanges();

            NavigateToParentPage();
        }

        #endregion

        #region Methods

        protected void GetGuidId()
        {
            string id = PageParameter("id");

            Guid? qsGuid = PageParameter("id").AsGuidOrNull();
            if (qsGuid.HasValue)
            {
                // check to see if Guid is valid request
                var prQry = new PersonnelRequestService(new RockContext()).Queryable();
                prQry = prQry.Where(row => row.Guid == qsGuid);
                foreach (var qRow in prQry)
                {
                    currentRequest = new PersonnelRequestService(new RockContext()).Get(qRow.Id);
                    personnelRequestId = currentRequest.Id;
                }
                if (currentRequest == null)
                {
                    personnelRequestId = -1;
                }
            }
            else
            {
                personnelRequestId = -1;
            }
        }

        private void GetJobTitle(int id)
        {
            var jtQry = new DefinedValueService(new RockContext()).Queryable();
            jtQry = jtQry.Where(row => row.Id == id);
            foreach (var qRow in jtQry)
            {
                lJobTitle.Text = qRow.Value;
            }
        }

        #endregion
    }
}