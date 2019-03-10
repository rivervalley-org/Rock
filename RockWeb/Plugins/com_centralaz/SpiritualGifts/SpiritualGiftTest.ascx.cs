// <copyright>
// Copyright by Central Christian Church
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
using System.Web.UI.WebControls;
using com.centralaz.SpiritualGifts.Model;
using Newtonsoft.Json;
using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;
using Rock.Security;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;

namespace Rockweb.Plugins.com_centralaz.SpiritualGifts
{
    /// <summary>
    /// Calculates a person's DISC score based on a series of question answers.
    /// This is used with permission from Greg Wiens: http://www.gregwiens.com/scid/
    /// </summary>
    [DisplayName("Spiritual Gifts Test")]
    [Category("com_centralaz > Spiritual Gifts")]
    [Description("Allows you to take a spiritual gift test and saves your spiritual gift score.")]
    [LinkedPage("Spiritual Gift Result Detail", "Page to show the details of the spiritual assessment results. If blank no link is created.", false)]
    [IntegerField("Minimum Days To Retake", "The number of days that must pass before the test can be taken again.", false, 30)]
    [IntegerField("Number of Questions per Page", "The number of questions displayed on each page of the test", true, 6, key: "NumberOfQuestions")]
    [CodeEditorField("Instructions", "The text (HTML) to display at the top of the instructions section.  <span class='tip tip-lava'></span> <span class='tip tip-html'></span>", CodeEditorMode.Html, CodeEditorTheme.Rock, 400, true, @"
            <h2>Welcome!</h2>
            <p>
                {{ Person.NickName }}, in this assessment you are given a series of questions, each containing four phrases.
                Select one phrase that MOST describes you and one phrase that LEAST describes you.
            </p>
            <p>
                One thought as you give your responses. On these kinds of assessments, it
                is often best and easiest if you respond quickly and do not deliberate too long
                on each question. Your response on one question will not unduly influence your scores,
                so simply answer as quickly as possible and enjoy the process. Don't get too hung
                up, if none of the phrases describe you or if there are some phrases that seem too
                similar, just go with your instinct.
            </p>
            <p>
                When you are ready, click the 'Start' button to proceed.
            </p>
")]
    public partial class SpiritualGiftTest : Rock.Web.UI.RockBlock
    {
        #region Fields

        // used for private variables
        Person _targetPerson = null;
        int _numberOfQuestions;

        #endregion

        #region Properties

        private List<SpiritualGiftService.QuestionItem> QuestionList { get; set; }
        public decimal PercentComplete { get; set; }

        #endregion

        #region Base Control Methods

        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Init" /> event.
        /// </summary>
        /// <param name="e">An <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnInit(EventArgs e)
        {
            base.OnInit(e);

            string personKey = PageParameter("rckipid");
            if (!string.IsNullOrEmpty(personKey))
            {
                try
                {
                    _targetPerson = new PersonService(new RockContext()).GetByUrlEncodedKey(personKey);
                }
                catch
                {
                    nbError.Visible = true;
                    pnlInstructions.Visible = false;
                    pnlQuestions.Visible = false;
                }
            }
            else
            {
                // otherwise use the currently logged in person
                if (CurrentPerson != null)
                {
                    _targetPerson = CurrentPerson;
                }
                else
                {
                    nbError.Visible = true;
                    pnlInstructions.Visible = false;
                    pnlQuestions.Visible = false;
                }
            }

            _numberOfQuestions = GetAttributeValue("NumberOfQuestions").AsIntegerOrNull() ?? 6;
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
                if (_targetPerson != null)
                {
                    SpiritualGiftService.SpiritualGiftTestResults savedScores = SpiritualGiftService.LoadSavedTestResults(_targetPerson);

                    if (savedScores.LastSaveDate.Date <= DateTime.Now.AddDays(-GetAttributeValue("MinimumDaysToRetake").AsInteger()).Date)
                    {
                        ShowInstructions();
                    }
                    else
                    {
                        if (IsUserAuthorized(Authorization.ADMINISTRATE))
                        {
                            nbError.Text = "If you did not have Administrate permissions on this block, you would have been redirected to your test results.";
                            nbError.Visible = true;
                        }
                        else
                        {
                            NavigateToResultsPage();
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Restores the view-state information from a previous user control request that was saved by the <see cref="M:System.Web.UI.UserControl.SaveViewState" /> method.
        /// </summary>
        /// <param name="savedState">An <see cref="T:System.Object" /> that represents the user control state to be restored.</param>
        protected override void LoadViewState(object savedState)
        {
            base.LoadViewState(savedState);

            string json = ViewState["QuestionList"] as string;
            if (string.IsNullOrWhiteSpace(json) || json == "null")
            {
                QuestionList = SpiritualGiftService.GetQuestions();
            }
            else
            {
                QuestionList = JsonConvert.DeserializeObject<List<SpiritualGiftService.QuestionItem>>(json);
            }

            json = ViewState["PercentComplete"] as string;
            if (string.IsNullOrWhiteSpace(json) || json == "null")
            {
                PercentComplete = 0;
            }
            else
            {
                PercentComplete = JsonConvert.DeserializeObject<decimal>(json);
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

            ViewState["QuestionList"] = JsonConvert.SerializeObject(QuestionList, Formatting.None, jsonSetting);
            ViewState["PercentComplete"] = JsonConvert.SerializeObject(PercentComplete, Formatting.None, jsonSetting);

            return base.SaveViewState();
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the Click event of the btnStart control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnStart_Click(object sender, EventArgs e)
        {
            pnlInstructions.Visible = false;
            pnlQuestions.Visible = true;
            BindRepeater(0, _numberOfQuestions);
        }

        /// <summary>
        /// Handles the Click event of the lbFinish control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbFinish_Click(object sender, EventArgs e)
        {
            bool isFilledIn = SaveAnswers(true);
            if (isFilledIn)
            {
                int? currentEndIndex = hfEndIndex.Value.AsIntegerOrNull();
                if (currentEndIndex.HasValue)
                {
                    try
                    {
                        int administration = 0;
                        int craftsmanship = 0;
                        int creativecommunication = 0;
                        int encouragementexhortation = 0;
                        int evangelism = 0;
                        int helpsservice = 0;
                        int hospitality = 0;
                        int intercession = 0;
                        int leadership = 0;
                        int mercy = 0;
                        int pastoring = 0;
                        int teaching = 0;

                        foreach (var questionItem in QuestionList)
                        {
                            switch (questionItem.QuestionGifting)
                            {
                                case "A":
                                    administration += questionItem.QuestionScore ?? 0;
                                    break;
                                case "B":
                                    craftsmanship += questionItem.QuestionScore ?? 0;
                                    break;
                                case "C":
                                    creativecommunication += questionItem.QuestionScore ?? 0;
                                    break;
                                case "D":
                                    encouragementexhortation += questionItem.QuestionScore ?? 0;
                                    break;
                                case "E":
                                    evangelism += questionItem.QuestionScore ?? 0;
                                    break;
                                case "F":
                                    helpsservice += questionItem.QuestionScore ?? 0;
                                    break;
                                case "G":
                                    hospitality += questionItem.QuestionScore ?? 0;
                                    break;
                                case "H":
                                    intercession += questionItem.QuestionScore ?? 0;
                                    break;
                                case "I":
                                    leadership += questionItem.QuestionScore ?? 0;
                                    break;
                                case "J":
                                    mercy += questionItem.QuestionScore ?? 0;
                                    break;
                                case "K":
                                    pastoring += questionItem.QuestionScore ?? 0;
                                    break;
                                case "L":
                                    teaching += questionItem.QuestionScore ?? 0;
                                    break;                                
                                default:
                                    break;
                            }
                        }

                        // Score the responses and return the results
                        SpiritualGiftService.SpiritualGiftTestResults results = SpiritualGiftService.Score(administration, craftsmanship, creativecommunication,encouragementexhortation, evangelism, helpsservice, hospitality, intercession, leadership, mercy, pastoring, teaching);

                        // Now save the results for this person
                        SpiritualGiftService.SaveTestResults(
                            _targetPerson,
                            results.Administration.ToString(),
                            results.Craftsmanship.ToString(),
                            results.CreativeCommunication.ToString(),
                            results.EncouragementExhortation.ToString(),
                            results.Evangelism.ToString(),
                            results.HelpsService.ToString(),
                            results.Hospitality.ToString(),
                            results.Intercession.ToString(),
                            results.Leadership.ToString(),
                            results.Mercy.ToString(),
                            results.Pastoring.ToString(),
                            results.Teaching.ToString(),
                            results.Gifting.ToString()
                        );

                        NavigateToResultsPage();
                    }
                    catch (Exception ex)
                    {
                        nbError.Visible = true;
                        nbError.Title = "We're Sorry...";
                        nbError.Text = "Something went wrong while trying to save your test results.";
                        LogException(ex);
                    }
                }
            }
            else
            {
                nbWarning.Visible = true;
            }
        }

        /// <summary>
        /// Handles the ItemDataBound event of the rQuestions repeater control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="RepeaterItemEventArgs"/> instance containing the event data.</param>
        protected void rQuestions_ItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            var questionItem = e.Item.DataItem as SpiritualGiftService.QuestionItem;
            if (questionItem != null)
            {
                Literal lQuestion = e.Item.FindControl("lQuestion") as Literal;
                HiddenField hfQuestionIndex = e.Item.FindControl("hfQuestionIndex") as HiddenField;
                HiddenField hfQuestionGifting = e.Item.FindControl("hfQuestionGifting") as HiddenField;
                RockRadioButtonList rblAnswer = e.Item.FindControl("rblAnswer") as RockRadioButtonList;
                hfQuestionIndex.Value = questionItem.QuestionIndex.ToString();
                lQuestion.Text = String.Format("<b>Question {0}:</b></br>{1}", questionItem.QuestionIndex + 1, questionItem.QuestionText);
                hfQuestionGifting.Value = questionItem.QuestionGifting;
                if (questionItem.QuestionScore != null)
                {
                    rblAnswer.SelectedValue = questionItem.QuestionScore.ToString();
                }
                else
                {
                    rblAnswer.SelectedValue = null;
                }
            }
        }

        /// <summary>
        /// Handles the Click event of the lbPrev control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbPrev_Click(object sender, EventArgs e)
        {
            bool isFilledIn = SaveAnswers(false);
            if (isFilledIn)
            {
                int? currentStartIndex = hfStartIndex.Value.AsIntegerOrNull();
                if (currentStartIndex.HasValue)
                {
                    int newStartIndex = currentStartIndex.Value - _numberOfQuestions;
                    if (newStartIndex < 0)
                    {
                        newStartIndex = 0;
                    }
                    BindRepeater(newStartIndex, newStartIndex + _numberOfQuestions);
                }
            }
        }

        /// <summary>
        /// Handles the Click event of the lbNext control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void lbNext_Click(object sender, EventArgs e)
        {
            bool isFilledIn = SaveAnswers(true);
            if (isFilledIn)
            {
                int? currentEndIndex = hfEndIndex.Value.AsIntegerOrNull();
                if (currentEndIndex.HasValue)
                {
                    BindRepeater(currentEndIndex.Value, currentEndIndex.Value + _numberOfQuestions);
                }
            }
            else
            {
                nbWarning.Visible = true;
            }
        }

        #endregion

        #region Methods

        /// <summary>
        /// Shows the instructions.
        /// </summary>
        private void ShowInstructions()
        {
            pnlInstructions.Visible = true;
            pnlQuestions.Visible = false;

            // Resolve the text field merge fields
            var mergeFields = Rock.Lava.LavaHelper.GetCommonMergeFields(this.RockPage, _targetPerson);
            if (_targetPerson != null)
            {
                mergeFields.Add("Person", _targetPerson);
            }

            lInstructions.Text = GetAttributeValue("Instructions").ResolveMergeFields(mergeFields);
        }

        /// <summary>
        /// Binds the repeater.
        /// </summary>
        /// <param name="startIndex">The start index.</param>
        /// <param name="endIndex">The end index.</param>
        private void BindRepeater(int startIndex, int endIndex)
        {
            hfStartIndex.Value = startIndex.ToString();
            hfEndIndex.Value = endIndex.ToString();
            UpdatePaginationButtons(startIndex, endIndex);
            UpdateProgressBar(startIndex, endIndex);
            nbWarning.Visible = false;

            rQuestions.DataSource = QuestionList.Where(q => q.QuestionIndex >= startIndex && q.QuestionIndex < endIndex);
            rQuestions.DataBind();
        }

        /// <summary>
        /// Updates the progress bar.
        /// </summary>
        /// <param name="startIndex">The start index.</param>
        private void UpdateProgressBar(int startIndex, int endIndex)
        {
            decimal completedQuestions = startIndex + 1;
            decimal totalQuestions = QuestionList.Count;
            PercentComplete = ((completedQuestions + 1) / totalQuestions) * 100.0m;
            lProgress.Text = String.Format("Questions {0} - {1} of {2}", startIndex + 1, endIndex, QuestionList.Count);
        }

        /// <summary>
        /// Updates the pagination buttons.
        /// </summary>
        /// <param name="startIndex">The start index.</param>
        /// <param name="endIndex">The end index.</param>
        private void UpdatePaginationButtons(int startIndex, int endIndex)
        {
            if (startIndex <= 0)
            {
                lbPrev.Visible = false;
            }
            else
            {
                lbPrev.Visible = true;
            }
            if (endIndex >= QuestionList.Count - 1)
            {
                lbNext.Visible = false;
                lbFinish.Visible = true;
            }
            else
            {
                lbNext.Visible = true;
                lbFinish.Visible = false;
            }
        }

        /// <summary>
        /// Saves the answers.
        /// </summary>
        /// <param name="isValidated">if set to <c>true</c> [is validated].</param>
        /// <returns></returns>
        private bool SaveAnswers(bool isValidated)
        {
            bool isMissingAnswer = false;

            foreach (RepeaterItem rItem in rQuestions.Items)
            {
                RockRadioButtonList rblAnswer = rItem.FindControl("rblAnswer") as RockRadioButtonList;
                HiddenField hfQuestionIndex = rItem.FindControl("hfQuestionIndex") as HiddenField;
                HiddenField hfQuestionGifting = rItem.FindControl("hfQuestionGifting") as HiddenField;

                int? selectedValue = rblAnswer.SelectedValueAsInt();
                if (selectedValue.HasValue)
                {
                    int? index = hfQuestionIndex.Value.AsIntegerOrNull();
                    if (index.HasValue)
                    {
                        try
                        {
                            QuestionList[index.Value].QuestionScore = selectedValue;
                        }
                        catch
                        {

                        }
                    }
                }
                else
                {
                    isMissingAnswer = true;
                }
            }

            if (isValidated && isMissingAnswer)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        /// <summary>
        /// Navigates to the results page.
        /// </summary>
        private void NavigateToResultsPage()
        {
            string personKey = PageParameter("rckipid");
            if (!string.IsNullOrEmpty(personKey))
            {
                Dictionary<string, string> qryParams = new Dictionary<string, string>();
                qryParams.Add("rckipid", personKey);
                NavigateToLinkedPage("SpiritualGiftResultDetail", qryParams);
            }
            else
            {
                NavigateToLinkedPage("SpiritualGiftResultDetail");
            }
        }

        #endregion

    }
}