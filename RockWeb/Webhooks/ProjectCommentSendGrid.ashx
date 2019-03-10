<%@ WebHandler Language="C#" Class="com.blueboxmoon.ProjectManagement.ProjectCommentSendGrid" %>
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;

using Rock;
using Rock.Data;
using Rock.Model;
using Rock.Web.Cache;

using com.blueboxmoon.ProjectManagement.Model;

namespace com.blueboxmoon.ProjectManagement
{
    public class ProjectCommentSendGrid : IHttpHandler
    {
        public void ProcessRequest( HttpContext context )
        {
            var request = context.Request;
            var response = context.Response;

            response.ContentType = "text/plain";

            if ( request.HttpMethod != "POST" )
            {
                response.Write( "Invalid request type." );
                response.StatusCode = 406;
                return;
            }

            using ( var rockContext = new RockContext() )
            {
                int? projectId = null;
                int? personAliasId = null;
                var envelope = request.Form["envelope"].FromJsonOrNull<Dictionary<string, object>>();
                var recipient = ( ( ICollection<Newtonsoft.Json.Linq.JToken> ) envelope["to"] ).First().ToString();
                var strippedText = CleanMessageText( request.Form["text"] );
                var subject = request.Form["subject"];

                //
                // Check for a special recipient address that contains the project Id and
                // person alias Id. If not found check the subject.
                //
                var match = Regex.Match( recipient, @"[^\d]*(\d+)[^\d]*(\d+)[^\d]*@" );
                if ( match != null && match.Success )
                {
                    projectId = match.Groups[1].Value.AsInteger();
                    personAliasId = match.Groups[2].Value.AsInteger();
                }
                else
                {
                    match = Regex.Match( subject, @"[\(\[]#(\d+)\/(\d+)[\)\]]" );
                    if ( match != null && match.Success )
                    {
                        projectId = match.Groups[1].Value.AsInteger();
                        personAliasId = match.Groups[2].Value.AsInteger();
                    }
                }

                //
                // Prepare any attachments.
                //
                var attachedFiles = new List<Utility.EmailAttachedFile>();
                var attachmentCount = request.Form["attachments"].AsInteger();
                var attachmentInfo = request.Form["attachment-info"].FromJsonOrNull<Dictionary<string, Dictionary<string, object>>>();
                for (int i = 1; i <= attachmentCount; i++ )
                {
                    var info = attachmentInfo[string.Format( "attachment{0}", i )];
                    var file = request.Files[string.Format( "attachment{0}", i )];

                    if ( !info.ContainsKey( "filename" ) || file.ContentLength <= 0 )
                    {
                        continue;
                    }

                    var attachedFile = new Utility.EmailAttachedFile
                    {
                        FileName = file.FileName,
                        ContentType = file.ContentType,
                        ContentLength = file.ContentLength,
                        Stream = file.InputStream
                    };

                    attachedFiles.Add( attachedFile );
                }

                var project = new ProjectService( rockContext ).Get( projectId ?? 0 );
                var personAlias = new PersonAliasService( rockContext ).Get( personAliasId ?? 0 );
                if ( project != null && personAlias != null && !string.IsNullOrWhiteSpace( strippedText ) )
                {
                    Utility.AddEmailProjectComment( rockContext, project, personAlias, strippedText, attachedFiles );
                }
            }

            response.Write( "Successfully processed message" );
            response.StatusCode = 200;
        }

        private static string CleanMessageText( string message )
        {
            List<string> lines = message.Split( '\n' ).ToList();

            for ( int i = lines.Count - 1; i >= 0; i-- )
            {
                if ( string.IsNullOrWhiteSpace( lines[i] ) || lines[i].StartsWith( ">" ) )
                {
                    lines.RemoveAt( i );
                }
                else
                {
                    break;
                }
            }

            return string.Join( "\n", lines );
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
