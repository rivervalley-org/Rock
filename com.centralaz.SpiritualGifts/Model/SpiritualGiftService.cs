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
using System.Linq;
using System.Web.UI.HtmlControls;

using Rock;
using Rock.Model;
namespace com.centralaz.SpiritualGifts.Model
{

    public class SpiritualGiftService
    {
        /// <summary>
        /// Raw question data.
        /// </summary>
        private static String[,] questionData = {
            {"I like to organize people, tasks, and events.","A"},
            {"I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials.","B"},
            {"I enjoy developing and using my artistic skills (art, drama, music, photography, etc.)","C"},
            {"I tend to see the potential in people.","D"},
            {"I communicate the gospel to others with clarity and effectiveness.","E"},
            {"I enjoy working behind the scenes to support the work of others.","F"},
            {"I view my home as a place to minister to people in need.","G"},
            {"I take prayer requests from others and consistently pray for them.","H"},
            {"I am able to motivate others to accomplish a goal.","I"},
            {"I empathize with hurting people and desire to help in their healing process.","J"},
            {"I enjoy spending time nurturing and caring for others.","K"},
            {"I am able to communicate God’s word effectively.","L"},
            {"I am careful, thorough, and skilled at managing details.","A"},
            {"I am skilled in working with different kinds of tools.","B"},
            {"I help people understand themselves, their relationships, and God better through artistic expression.","C"},
            {"I enjoy reassuring and strengthening those who are discouraged.","D"},
            {"I consistently look for opportunities to build relationships with non-Christians.","E"},
            {"I enjoy doing routine tasks that support the ministry.","F"},
            {"I enjoy meeting new people and helping them to feel welcomed.","G"},
            {"I enjoy praying for long periods of time and often know what God wants me to pray for.","H"},
            {"I can adjust my leadership style to bring out the best in others.","I"},
            {"I can patiently support those going through painful experiences as they try to stabilize their lives.","J"},
            {"I have compassion for wandering believers and want to protect them.","K"},
            {"I can spend time in study knowing that presenting truth will make a difference in the lives of people.","L"},
            {"I can clarify goals and develop strategies or plans to accomplish them.","A"},
            {"I can visualize how something should be constructed before I build it.","B"},
            {"I apply various artistic expressions to communicate God’s truth.","C"},
            {"I give hope to others by directing them to the promises of God.","D"},
            {"I invite unbelievers to accept Christ as their Savior.","E"},
            {"I like to find small things that need to be done and often do them without being asked.","F"},
            {"I genuinely believe the Lord directs strangers to me who need to get connected to others.","G"},
            {"I pray with confidence because I know that God works in response to prayer.","H"},
            {"I set goals and manage people and resources effectively to accomplish them.","I"},
            {"I enjoy helping people sometimes regarded as undeserving or beyond help.","J"},
            {"I like to provide guidance for the whole person – relationally, emotionally, spiritually, etc.","K"},
            {"I pay close attention to the words, phrases, and meaning of those who teach.","L"},
            {"I enjoy learning about how organizations function.","A"},
            {"I am good at and enjoy working with my hands.","B"},
            {"I am creative and imaginative.","C"},
            {"I reassure those who need to take courageous action in their faith, family, or life.","D"},
            {"I openly tell people that I am a Christian and want them to ask me about my faith.","E"},
            {"I feel comfortable being a helper, assisting others to do their job more effectively.","F"},
            {"I enjoy entertaining people and opening my home to others.","G"},
            {"When I hear about needy situations, I believe I must pray for them.","H"},
            {"I influence others to perform to the best of their capability.","I"},
            {"I enjoy bringing hope and joy to people living in difficult circumstances.","J"},
            {"I can faithfully provide long-term support and concern for others.","K"},
            {"I can communicate scripture in ways that motivate others to study and want to learn more.","L"},
            {"I can visualize a coming event, anticipate potential problems, and develop backup plans.","A"},
            {"I am able to design and construct things that help the church.","B"},
            {"I regularly need to get alone to reflect and develop my imagination.","C"},
            {"I strengthen those who are wavering in their faith.","D"},
            {"I seek opportunities to talk about spiritual matters with unbelievers.","E"},
            {"I readily and happily use my natural or learned skills to help wherever needed.","F"},
            {"I do whatever I can to make people feel that they belong.","G"},
            {"I often see specific results in direct response to my prayers.","H"},
            {"I am able to cast a vision that others want to be a part of.","I"},
            {"I enjoy doing practical things for others who are in need.","J"},
            {"I enjoy giving guidance and practical support to a small group of people.","K"},
            {"I can present information and skills to others at a level that makes it easy for them to grasp and apply to their lives.","L"}
        };

#pragma warning disable 1591

        /// <summary>
        /// The TestResults struct used to return the final assessment scores
        /// </summary>
        public class SpiritualGiftTestResults
        {
            public int Administration;
            public int Craftsmanship;
            public int CreativeCommunication;
            public int EncouragementExhortation;
            public int Evangelism;
            public int HelpsService;
            public int Hospitality;
            public int Intercession;
            public int Leadership;
            public int Mercy;
            public int Pastoring;
            public int Teaching;
            public string Gifting;
            public DateTime LastSaveDate;
        }

        public class QuestionItem
        {
            public int QuestionIndex;
            public string QuestionText;
            public string QuestionGifting;
            public int? QuestionScore;
        }

        public class UiItem
        {
            public string Key { get; set; }
            public HtmlGenericControl Bar { get; set; }
            public int Score { get; set; }
        }

        /// <summary>
        /// The key names for the person's spiritual gifting attributes.
        /// </summary>
        public static class AttributeKeys
        {
            public const string Administration = "Administration";
            public const string Craftsmanship = "Craftsmanship";
            public const string CreativeCommunication = "CreativeCommunication";
            public const string EncouragementExhortation = "EncouragementExhortation";
            public const string Evangelism = "Evangelism";
            public const string HelpsService = "HelpsService";
            public const string Hospitality = "Hospitality";
            public const string Intercession = "Intercession";
            public const string Leadership = "Leadership";
            public const string Mercy = "Mercy";
            public const string Pastoring = "Pastoring";
            public const string Teaching = "Teaching";
            public const string Gifting = "Gifting";
            public const string LastSaveDate = "LastSaveDate";
        }

#pragma warning restore 1591
        /// <summary>
        /// Fetch a List of <see cref="QuestionItem"/> for display/processing.
        /// </summary>
        /// <returns>a List of <see cref="QuestionItem"/>.</returns>
        static public List<QuestionItem> GetQuestions()
        {
            List<QuestionItem> questionList = new List<QuestionItem>();
            QuestionItem question = new QuestionItem();

            for (int questionIndex = 0; questionIndex < questionData.GetLength(0); questionIndex++)
            {
                question = new QuestionItem();
                question.QuestionIndex = questionIndex;
                question.QuestionText = questionData[questionIndex, 0];
                question.QuestionGifting = questionData[questionIndex, 1];
                question.QuestionScore = null;
                questionList.Add(question);
            }
            return questionList;
        }

        static public SpiritualGiftTestResults Score(int administration, int craftsmanship, int creativecommunication, int encouragementexhortation, int evangelism, int helpsservice, int hospitality, int intercession, int leadership, int mercy, int pastoring, int teaching)
        {
            SpiritualGiftTestResults testResults = new SpiritualGiftTestResults();

            testResults.Administration = administration;
            testResults.Craftsmanship = craftsmanship;
            testResults.CreativeCommunication = creativecommunication;
            testResults.EncouragementExhortation = encouragementexhortation;
            testResults.Evangelism = evangelism;
            testResults.HelpsService = helpsservice;
            testResults.Hospitality = hospitality;
            testResults.Intercession = intercession;
            testResults.Leadership = leadership;
            testResults.Mercy = mercy;
            testResults.Pastoring = pastoring;
            testResults.Teaching = teaching;
            testResults.LastSaveDate = RockDateTime.Now;

            // Determine the Natural gifting
            testResults.Gifting = DetermineGifting(testResults);

            return testResults;
        }

        /// <summary>
        /// Determines the natural gifting. This is the highest score and the next highest 
        /// if the score is over the midline (we're definining midline as over 24).
        /// </summary>
        /// <param name="results">The TestResults</param>
        /// <returns></returns>
        public static string DetermineGifting(SpiritualGiftTestResults results)
        {
            var gifting = string.Empty;
            List<KeyValuePair<string, int>> list = new List<KeyValuePair<string, int>>();
            list.Add(new KeyValuePair<string, int>("Administration", results.Administration));
            list.Add(new KeyValuePair<string, int>("Craftsmanship", results.Craftsmanship));
            list.Add(new KeyValuePair<string, int>("CreativeCommunication", results.CreativeCommunication));
            list.Add(new KeyValuePair<string, int>("EncouragementExhortation", results.EncouragementExhortation));
            list.Add(new KeyValuePair<string, int>("Evangelism", results.Evangelism));
            list.Add(new KeyValuePair<string, int>("HelpsService", results.HelpsService));
            list.Add(new KeyValuePair<string, int>("Hospitality", results.Hospitality));
            list.Add(new KeyValuePair<string, int>("Intercession", results.Intercession));
            list.Add(new KeyValuePair<string, int>("Leadership", results.Leadership));
            list.Add(new KeyValuePair<string, int>("Mercy", results.Mercy));
            list.Add(new KeyValuePair<string, int>("Pastoring", results.Pastoring));
            list.Add(new KeyValuePair<string, int>("Teaching", results.Teaching));

            list.Sort((x, y) => y.Value.CompareTo(x.Value));
            return list[0].Key;
        }

        /// <summary>
        /// Fetches DISC scores.
        /// </summary>
        /// <param name="person"></param>
        /// <param name="attrib"></param>
        /// <returns>The DISC score, if one is saved. Otherwise, returns 0.</returns>
        private static int GetSpiritualGiftingValue(Person person, string attrib)
        {
            int giftingLevel = 0;
            bool bCatch = int.TryParse(person.AttributeValues[attrib].Value, out giftingLevel);
            return giftingLevel;
        }

        /// <summary>
        /// Loads and returns saved Test scores for the Person.
        /// </summary>
        /// <param name="person">The Person to get the scores for.</param>
        /// <returns>TestResults</returns>
        static public SpiritualGiftTestResults LoadSavedTestResults(Person person)
        {
            SpiritualGiftTestResults savedScores = new SpiritualGiftTestResults();

            person.LoadAttributes();

            var discAttributes = person.Attributes.Values.Where(a => a.Categories.Any(c => c.Guid == new Guid("12d8e61f-ed07-41d9-be0b-43c73907896d"))).Select(a => a.Key);

            foreach (string attrib in discAttributes)
            {
                switch (attrib)
                {
                    case AttributeKeys.Administration:
                        savedScores.Administration = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Craftsmanship:
                        savedScores.Craftsmanship = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.CreativeCommunication:
                        savedScores.CreativeCommunication = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.EncouragementExhortation:
                        savedScores.EncouragementExhortation = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Evangelism:
                        savedScores.Evangelism = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.HelpsService:
                        savedScores.HelpsService= GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Hospitality:
                        savedScores.Hospitality = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Intercession:
                        savedScores.Intercession = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Leadership:
                        savedScores.Leadership = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Mercy:
                        savedScores.Mercy = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Pastoring:
                        savedScores.Pastoring = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Teaching:
                        savedScores.Teaching = GetSpiritualGiftingValue(person, attrib);
                        break;
                    case AttributeKeys.Gifting:
                        savedScores.Gifting = person.AttributeValues[attrib].Value;
                        break;
                    case AttributeKeys.LastSaveDate:
                        DateTime lastTestDate = DateTime.MinValue;
                        bool bCatch = DateTime.TryParse(person.AttributeValues[attrib].Value, out lastTestDate);
                        savedScores.LastSaveDate = lastTestDate;
                        break;
                }
            }
            return savedScores;
        }

        static public void SaveTestResults(Person person, string administration, string craftsmanship, string creativecommunication, string encouragementexhortation, string evangelism, string helpsservice, string hospitality, string intercession, string leadership, string mercy, string pastoring, string teaching, string gifting)
        {
            person.LoadAttributes();

            var discAttributes = person.Attributes.Values.Where(a => a.Categories.Any(c => c.Guid == new Guid("12d8e61f-ed07-41d9-be0b-43c73907896d"))).Select(a => a.Key);

            foreach (string attrib in discAttributes)
            {
                switch (attrib)
                {
                    case AttributeKeys.Administration:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], administration);
                        break;
                    case AttributeKeys.Craftsmanship:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], craftsmanship);
                        break;
                    case AttributeKeys.CreativeCommunication:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], creativecommunication);
                        break;
                    case AttributeKeys.EncouragementExhortation:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], encouragementexhortation);
                        break;
                    case AttributeKeys.Evangelism:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], evangelism);
                        break;
                    case AttributeKeys.HelpsService:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], helpsservice);
                        break;
                    case AttributeKeys.Hospitality:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], hospitality);
                        break;
                    case AttributeKeys.Intercession:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], intercession);
                        break;
                    case AttributeKeys.Leadership:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], leadership);
                        break;
                    case AttributeKeys.Mercy:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], mercy);
                        break;
                    case AttributeKeys.Pastoring:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], pastoring);
                        break;
                    case AttributeKeys.Teaching:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], teaching);
                        break;
                    case AttributeKeys.Gifting:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], gifting);
                        break;
                    case AttributeKeys.LastSaveDate:
                        Rock.Attribute.Helper.SaveAttributeValue(person, person.Attributes[attrib], RockDateTime.Now.ToString("o"));
                        break;
                }
            }

            person.SaveAttributeValues();
        }

        #region Spiritual Gifts shared  UI stuff

        public static void PlotOneGraph(HtmlGenericControl barAdministration, HtmlGenericControl barCraftsmanship, HtmlGenericControl barCreativeCommunication, HtmlGenericControl barEncouragementExhortation, HtmlGenericControl barEvangelism, HtmlGenericControl barHelpsService, HtmlGenericControl barHospitality, HtmlGenericControl barIntercession, HtmlGenericControl barLeadership, HtmlGenericControl barMercy, HtmlGenericControl barPastoring, HtmlGenericControl barTeaching,
            int scoreAdministration, int scoreCraftsmanship, int scoreCreativeCommunication, int scoreEncouragementExhortation, int scoreEvangelism, int scoreHelpsService, int scoreHospitality, int scoreIntercession, int scoreLeadership, int scoreMercy, int scorePastoring, int scoreTeaching, int maxScale)
        {
            List<UiItem> uiList = new List<UiItem>();
            uiList.Add(new UiItem() { Key = "Administration", Bar = barAdministration, Score = scoreAdministration });
            uiList.Add(new UiItem() { Key = "Craftsmanship", Bar = barCraftsmanship, Score = scoreCraftsmanship });
            uiList.Add(new UiItem() { Key = "CreativeCommunication", Bar = barCreativeCommunication, Score = scoreCreativeCommunication });
            uiList.Add(new UiItem() { Key = "EncouragementExhortation", Bar = barEncouragementExhortation, Score = scoreEncouragementExhortation });
            uiList.Add(new UiItem() { Key = "Evangelism", Bar = barEvangelism, Score = scoreEvangelism });
            uiList.Add(new UiItem() { Key = "HelpsService", Bar = barHelpsService, Score = scoreHelpsService });
            uiList.Add(new UiItem() { Key = "Hospitality", Bar = barHospitality, Score = scoreHospitality });
            uiList.Add(new UiItem() { Key = "Intercession", Bar = barIntercession, Score = scoreIntercession });
            uiList.Add(new UiItem() { Key = "Leadership", Bar = barLeadership, Score = scoreLeadership });
            uiList.Add(new UiItem() { Key = "Mercy", Bar = barMercy, Score = scoreMercy });
            uiList.Add(new UiItem() { Key = "Pastoring", Bar = barPastoring, Score = scorePastoring });
            uiList.Add(new UiItem() { Key = "Teaching", Bar = barTeaching, Score = scoreTeaching });

            foreach (var ui in uiList)
            {
                ui.Bar.RemoveCssClass("discbar-primary");
                var score = Math.Floor((double)((double)ui.Score / (double)maxScale) * 100).ToString();
                ui.Bar.Style.Add("height", score + "%");
                ui.Bar.Attributes["title"] = ui.Score.ToString();
            }

            uiList = uiList
                .OrderByDescending(ui => ui.Score)
                .ThenBy(ui => ui.Key)
                .ToList();
            var maxScore = uiList.FirstOrDefault().Bar;
            maxScore.AddCssClass("discbar-primary");

            for (int i = 3; i < uiList.Count; i++)
            {
                uiList.ElementAt(i).Bar.Visible = false;
            }
        }

        #endregion
    }
}