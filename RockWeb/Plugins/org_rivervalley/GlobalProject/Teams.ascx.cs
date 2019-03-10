using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using Rock.Lava;

namespace RockWeb.Plugins.org_rivervalley.GlobalProject
{
    [DisplayName( "Global Project Teams" )]
    [Category( "org_rivervalley > Global Project Teams" )]
    [Description( "Global Project Teams" )]
    public partial class TeamsBlock : Rock.Web.UI.RockBlock
    {
		private static readonly string TeamsApiBase = "http://apidev.rivervalley.org/globalproject/teams/";
		
		protected string UserJSON
		{
			get
			{
				if(CurrentPerson != null)
				{
					return "{ id: " + CurrentPerson.Id + ", fullName: '" + CurrentPerson.FullName + "' }";
				}
				return "null";
			}
		}

		private string ParseTeamIdFromUrl(string url)
		{
			var teamMatch = new Regex("/teams/(\\d+)", RegexOptions.IgnoreCase).Match(url);
			
			return teamMatch.Success ? teamMatch.Groups[1].ToString() : null;
		}
		
		private void AddMetaTagsForTeam(string teamId)
		{
			var team = DownloadJson(TeamsApiBase + teamId);
			if (team == null)
			{
				return;
			}

			RockFilters.AddMetaTagToHead(team["FullName"], "property", "og:title");
			RockFilters.AddMetaTagToHead(team["Description"], "property", "og:description");
			RockFilters.AddMetaTagToHead(team["Picture"], "property", "og:image");
			
			// necessary due to our images being too small (<200px) for Facebook sharing. This tricks it...
			RockFilters.AddMetaTagToHead("200", "property", "og:image:width");
			RockFilters.AddMetaTagToHead("200", "property", "og:image:height");
		}
		
		// the following methods will probably eventually be moved into a shared class
		protected override void OnInit(EventArgs e)
		{
			var escapedFragment = Request.QueryString["_escaped_fragment_"];
			if (!string.IsNullOrEmpty(escapedFragment))
			{
				escapedFragment = HttpUtility.UrlDecode(escapedFragment);
				
				var teamId = ParseTeamIdFromUrl(escapedFragment);
				if (teamId != null)
				{
					AddMetaTagsForTeam(teamId);
				}
			}
			else
			{
				var teamId = ParseTeamIdFromUrl(Request.Path);
				if (teamId != null)
				{
					AddMetaTagsForTeam(teamId);
				}
			}

			if (!Request.Path.StartsWith("/page/"))
			{
				AddBaseTagToHead("/ministries/globalproject/");
			}
		}
		
		private dynamic DownloadJson(string url)
		{
			var jsonString = new System.Net.WebClient().DownloadString(url);

			return new System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<dynamic>(jsonString);
		}

		private void AddBaseTagToHead(string url)
        {
            if (RockPage != null)
            {
                RockPage.Header.Controls.Add( new BaseTag(url) );
            }
        }

		public class BaseTag : HtmlControl
		{
			public BaseTag(string href): base("base")
			{
				base.Attributes.Add("href", href);
			}
		}
    }
}