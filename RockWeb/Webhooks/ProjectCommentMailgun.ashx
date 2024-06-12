<%@ WebHandler Language="C#" Class="com.blueboxmoon.ProjectManagement.ProjectCommentMailgun" %>
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
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
    public class ProjectCommentMailgun : IHttpHandler
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
                int timestamp = request.Form["timestamp"].AsInteger();
                string token = request.Form["token"];
                string signature = request.Form["signature"];
                string apiKey = GetApiKey( rockContext );

                if ( !IsValidSignature( apiKey, timestamp, token, signature ) )
                {
                    response.Write( "Invalid request signature." );
                    response.StatusCode = 406;
                    return;
                }

                int? projectId = null;
                int? personAliasId = null;
                var recipient = request.Form["recipient"];
                var strippedText = request.Form["stripped-text"];
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
                var attachmentCount = request.Form["attachment-count"].AsInteger();
                for (int i = 1; i <= attachmentCount; i++ )
                {
                    var file = request.Files[string.Format( "attachment-{0}", i )];

                    if ( file.ContentLength <= 0 )
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

        private static string GetApiKey( RockContext rockContext )
        {
            // Transport used in Rock v14 and later.
            var mailgunEntity = EntityTypeCache.Get( "Rock.Communication.Transport.MailgunHttp", false );
            if ( mailgunEntity != null )
            {
                int mailgunEntityTypeId = mailgunEntity.Id;
                var key = new AttributeValueService( rockContext )
                    .Queryable().AsNoTracking()
                    .Where( v =>
                        v.Attribute.EntityTypeId == mailgunEntityTypeId &&
                        v.Attribute.Key == "HTTPWebhookSigningKey" )
                    .Select( v => v.Value )
                    .FirstOrDefault();

                if ( key.IsNullOrWhiteSpace() )
                {
                    key = new AttributeValueService( rockContext )
                        .Queryable().AsNoTracking()
                        .Where( v =>
                            v.Attribute.EntityTypeId == mailgunEntityTypeId &&
                            v.Attribute.Key == "APIKey" )
                        .Select( v => v.Value )
                        .FirstOrDefault();
                }

                if ( key.IsNotNullOrWhiteSpace() )
                {
                    return key;
                }
            }

            // Transport used prior to Rock v14.
            mailgunEntity = EntityTypeCache.Get( "Rock.Communication.Transport.MailgunSmtp", false );
            if ( mailgunEntity != null )
            {
                int mailgunEntityTypeId = mailgunEntity.Id;
                var key = new AttributeValueService( rockContext )
                    .Queryable().AsNoTracking()
                    .Where( v =>
                        v.Attribute.EntityTypeId == mailgunEntityTypeId &&
                        v.Attribute.Key == "APIKey" )
                    .Select( v => v.Value )
                    .FirstOrDefault();

                if ( key.IsNotNullOrWhiteSpace() )
                {
                    return key;
                }
            }

            return string.Empty;
        }

        private static bool IsValidSignature( string key, int timestamp, string token, string signature )
        {
            var encoding = System.Text.Encoding.ASCII;
            var hmacSha256 = new System.Security.Cryptography.HMACSHA256( encoding.GetBytes( key ) );
            var cleartext = encoding.GetBytes( timestamp + token );
            var hash = hmacSha256.ComputeHash( cleartext );
            var computedSignature = BitConverter.ToString( hash ).Replace( "-", "" ).ToLower();

            return computedSignature == signature;
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
