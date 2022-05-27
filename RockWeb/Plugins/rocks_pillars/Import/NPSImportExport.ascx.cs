//
// Copyright (C) Pillars Inc. - All Rights Reserved
//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Linq.Dynamic;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;

namespace RockWeb.Plugins.rocks_pillars.Import
{
    [DisplayName("NPS Import/Export")]
    [Category("Pillars > Import")]
    [Description("Block for importing Survey Monkey results and exporting contacts to create in Survey Monkey")]

    public partial class NPSImportExport : Rock.Web.UI.RockBlock
    {
        #region Fields
        private IEnumerable<string[]> importResult;
        private int valueCol;
        private int attributeId;
        protected string ActiveTab { get; set; }
        #endregion

        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);

            // this event gets fired after block settings are updated. it's nice to repaint the screen if these settings would alter it
            this.BlockUpdated += Block_Updated;
            this.AddConfigurationUpdateTrigger(upnlContent);
        }

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad(EventArgs e)
        {
            base.OnLoad(e);

            if (!Page.IsPostBack)
            {
                DisplayContent();
            }

            Bind();
        }

        protected void Bind()
        {
            BindPersonAttributes();
        }

        protected void BindPersonAttributes()
        {
            var rockContext = new RockContext();
            var attrService = new AttributeService(rockContext);

            var perId = EntityTypeCache.GetId<Person>();

            if (perId != null)
            {

                var listItems = attrService.AsNoFilter().AsQueryable()
                            .Where(a => a.EntityTypeId == perId)
                            .ToList()
                            .Where(a => a.IsAuthorized(Rock.Security.Authorization.EDIT, CurrentPerson))
                            .Select(a => new ListItem() { Text = a.Name, Value = a.Id.ToString() }).ToList();

                listItems.ForEach(item => ddlPersonAttribute.Items.Add(item));
            }
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the BlockUpdated event of the ContentDynamic control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void Block_Updated(object sender, EventArgs e)
        {
            DisplayContent();
        }

        protected void fuImport_ImportNPS(object sender, EventArgs e)
        {
            var importRes = GetUploadFileResults();

            if (importRes != null && importRes.Count() > 0)
            {
                BindColHeaders(importRes.First());
            }
        }

        /// <summary>
        /// Handles the Click event of the lbTab control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbTab_Click(object sender, EventArgs e)
        {
            LinkButton lb = sender as LinkButton;
            if (lb != null)
            {
                ActiveTab = lb.ID;
                ShowTab();
            }
        }

        protected void btnImport_Click(object sender, EventArgs e)
        {
            int records = -1;
            if(ReadyToImport())
            {
                records = ImportExportUtility.Import(importResult, 8, valueCol, attributeId);
            }

            pnlImpWarning.Visible = false;
            pnlImpSuccess.Visible = false;

            if(records == -1)
            {
                pnlImpWarning.Visible = true;
                lblImpWarning.Text = "No records were updated.";
            }
            else
            {
                pnlImpSuccess.Visible = true;
                lblImpSuccess.Text = string.Format("{0} records have been updated or inserted.", records);
            }
        }

        protected void btnExport_Click(object sender, EventArgs e)
        {
            var dv = dvpDataViewPicker.SelectedValue;

            if (dv != string.Empty)
            {
                var csvFiles = ImportExportUtility.Export(dv);

                int count = 1;
                List<int> files = new List<int>();
                foreach (var csv in csvFiles)
                {
                    files.Add(WriteFiles(csv, count));
                    count++;
                }

                //
                // Present download link.
                //
                pnlExpSuccess.Visible = true;
                if (files.Count > 1)
                {
                    hlDownload.NavigateUrl = ResolveUrl(string.Format("~/Pillars/GetFiles.ashx?Ids={0}&attachment=True", files.AsDelimited(",")));
                }
                else
                {
                    hlDownload.NavigateUrl = ResolveUrl(string.Format("~/GetFile.ashx?Id={0}&attachment=True", files.First()));
                }
            }
        }

        #endregion

        #region Methods

        private void DisplayContent()
        {

        }

        private void BindColHeaders(string[] colHeaders)
        {
            int counter = 0;
            foreach (var col in colHeaders)
            {
                if (col != string.Empty)
                {
                    var item = new ListItem()
                    {
                        Text = col,
                        Value = counter.ToString()
                    };

                    ddlValueCol.Items.Add(item);
                }
                counter++;
            }
        }

        /// <summary>
        /// Shows the tab.
        /// </summary>
        private void ShowTab()
        {
            liExport.RemoveCssClass("active");
            pnlExport.Visible = false;

            liImport.RemoveCssClass("active");
            pnlImport.Visible = false;

            switch(ActiveTab ?? string.Empty)
            {
                case "lbExportTab":
                    liExport.AddCssClass("active");
                    pnlExport.Visible = true;
                    break;

                case "lbImportTab":
                    liImport.AddCssClass("active");
                    pnlImport.Visible = true;
                    break;
            }
        }

        private int WriteFiles(string content, int num)
        {
            var stream = new MemoryStream(Encoding.UTF8.GetBytes(content));
            var rockContext = new RockContext();

            var binaryFileService = new BinaryFileService(rockContext);
            var binaryFileTypeService = new BinaryFileTypeService(rockContext);
            var binaryFile = new BinaryFile
            {
                BinaryFileTypeId = binaryFileTypeService.Get(Rock.SystemGuid.BinaryFiletype.DEFAULT.AsGuid()).Id,
                IsTemporary = true,
                FileName = string.Format("{0}-ContactsExport{1}.csv", RockDateTime.Today.ToString("yyyyMMdd"), num),
                MimeType = "text/plain",
                ContentStream = stream
            };

            binaryFileService.Add(binaryFile);
            rockContext.SaveChanges();

            return binaryFile.Id;
        }

        private bool ReadyToImport()
        {
            importResult = GetUploadFileResults();
            if (importResult != null && importResult.Count() > 2)
            {
                valueCol = Convert.ToInt32(ddlValueCol.SelectedValue);
                attributeId = Convert.ToInt32(ddlPersonAttribute.SelectedValue);
                return true;
            }

            return false;
        }

        private IEnumerable<string[]> GetUploadFileResults()
        {
            IEnumerable<string[]> res = null;
            var rockContext = new RockContext();

            var binaryFileService = new BinaryFileService(rockContext);
            var binaryFile = binaryFileService.Get(fileuploader.BinaryFileId ?? 0);

            if (binaryFile != null)
            {
                res = binaryFile.ContentsToString()
                            .Split(new[] { "\n", "\r\n" }, StringSplitOptions.None)
                            .Select(line => line.Split(','));
            }

            return res;
        }


        #endregion

        #region Helper Class

        internal static class ImportExportUtility
        {
            public static int Import(IEnumerable<string[]> importing, int perAliasCol, int valCol, int attId)
            {
                int records = 0;
                var perAliasValueDict = importing.Skip(2)
                    .Where(l => l.Length >= perAliasCol
                            && l.Length >= valCol
                            && l[perAliasCol] != string.Empty
                            && l[valCol] != string.Empty)
                    .GroupBy(l => l[perAliasCol], l => l[valCol])
                    .ToDictionary(g => Convert.ToInt32(g.Key), g => g.ToList().First());

                var rockContext = new RockContext();
                var attrService = new AttributeValueService(rockContext);

                var perAliasIdToPerIdDict = FindPersonAliasToPersonId(perAliasValueDict.Keys.ToList(), rockContext);
                var perExistValDict = FindPeopleWithExistingValue(perAliasIdToPerIdDict.Values.ToList(), attId, rockContext); //Get attribute id

                foreach (var perVal in perAliasIdToPerIdDict)
                {
                    string val = string.Empty;
                    int attrValId = 0;
                    if(perExistValDict.TryGetValue(perVal.Value, out attrValId)) //Person already has attribute value so update
                    {
                        
                        var updAttr = attrService.Get(attrValId);
                        if (perAliasValueDict.TryGetValue(perVal.Key, out val))
                        {
                            updAttr.Value = val;
                            rockContext.SaveChanges();
                            records++;
                        }
                    }
                    else
                    {
                        if (perAliasValueDict.TryGetValue(perVal.Key, out val))
                        {
                            var newAttr = new AttributeValue
                            {
                                Value = perAliasValueDict[perVal.Key],
                                EntityId = perVal.Value,
                                AttributeId = attId,
                                IsSystem = false,
                                Guid = Guid.NewGuid()
                            };

                            attrService.Add(newAttr);
                            rockContext.SaveChanges();
                            records++;
                        }
                    }
                }

                return records;
            }

            private static Dictionary<int/*PerId*/, int/*AttrValId*/> FindPeopleWithExistingValue(List<int> personIds, int attrId, RockContext rockContext)
            {
                Dictionary<int, int> peopleWithValue = new Dictionary<int, int>();

                var attVal = new AttributeValueService(rockContext);

                peopleWithValue = attVal.AsNoFilter().AsQueryable()
                                .Where(a => a.AttributeId == attrId
                                            && personIds.Contains(a.EntityId ?? -1))
                                .ToDictionary(a => a.EntityId ?? -1, a => a.Id);

                return peopleWithValue;
            }

            private static Dictionary<int/*PersonAliasId*/, int/*PersonId*/> FindPersonAliasToPersonId(List<int> personIds, RockContext rockContext)
            {
                Dictionary<int, int> test = new Dictionary<int, int>();

                var persAlias = new PersonAliasService(rockContext);

                test = persAlias.AsNoFilter().AsQueryable()
                            .Where(p => personIds.Contains(p.Id))
                            .ToDictionary(p => p.Id, p => p.PersonId);

                return test;
            }

            public static IEnumerable<string> Export(string dv)
            {
                var people = GetPeople(Convert.ToInt32(dv));


                var chunks = people.ToList().Select((x, i) => new { Index = i, Value = x })
                                .GroupBy(x => x.Index / 10000)
                                .Select(x => x.Select(v => v.Value).ToList());

                var csvFiles = chunks.Select(l => l.Select(p => string.Format("{0},{1},{2},{3}", p.Email, p.FirstName, p.LastName, p.PrimaryAlias.Id)));

                return csvFiles.Select(csv => string.Join("\r\n", csv));
            }

            private static IQueryable<Person> GetPeople(int id)
            {
                var rockContext = new RockContext();
                var dataviewService = new DataViewService(rockContext);
                var personService = new PersonService(rockContext);

                var dataView = dataviewService.Get(id);

                var errorMessages = new List<string>();
                var paramExpression = personService.ParameterExpression;
                var whereExpression = dataView.GetExpression(personService, paramExpression, out errorMessages);

                return personService.AsNoFilter().AsQueryable()
                                    .Where(paramExpression, whereExpression, null);
            }
        }
                
        #endregion
    }
}