
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;

using Quartz;
using Rock;
using Rock.Attribute;
using Rock.Communication;
using Rock.Data;
using Rock.Model;
using Rock.Transactions;
using Rock.Web.Cache;

namespace org.rivervalley.Jobs
{
    [DisplayName( "Send KB Giving Threshold Report" )]
    [Category( "River Valley > Workflows" )]
    [Description( "Sends notifications to leaders when people cross the KB Giving Thresholds. (Note: This job will only process on the last day of the month, regardless of when the job is ran.)" )]
    [DisallowConcurrentExecution]

    #region Job Attributes

    [DataViewField( "$5,000 Threshold Data View", "", entityTypeName: "Rock.Model.Person", required: true, key: AttributeKey.DataView5000, Order = 0 )]
    [DataViewField( "$10,000 Threshold Data View", "", entityTypeName: "Rock.Model.Person", required: true, key: AttributeKey.DataView10000, Order = 1 )]
    [AttributeField( Rock.SystemGuid.EntityType.PERSON, "$5,000 Threshold Attribute","", true, false, "", "", key: AttributeKey.Attribute5000, Order = 2 )]
    [AttributeField( Rock.SystemGuid.EntityType.PERSON, "$10,000 Threshold Attribute", "", true, false, "", "", key: AttributeKey.Attribute10000, Order = 3 )]
    [SystemCommunicationField( "System Email", "", true, "", "", key: AttributeKey.SystemCommunication, Order = 4)]
    [TextField( "$5,000 Threshold Recipients", "A comma seperated list of email addresses who will receive the $5,000 threshold notification.  Each campus pastor will also receive a campus specific notification.", false, "", "", 5, key: AttributeKey.Recipient5000 )]
    [TextField( "$10,000 Threshold Recipients", "A comma seperated list of email addresses that will receive the $10,000 threshold notification", false, "", "", 6, key: AttributeKey.Recipient10000 )]

    #endregion

    public class SendKBGivingThresholdReport : IJob
    {
        #region Attribute Keys

        /// <summary>
        /// Keys to use for Block Attributes
        /// </summary>
        private static class AttributeKey
        {
            public const string DataView5000 = "DataView5000";

            public const string DataView10000 = "DataView10000";

            public const string Attribute5000 = "Attribute5000";

            public const string Attribute10000 = "Attribute10000";

            public const string SystemCommunication = "SystemCommunication";

            public const string Recipient5000 = "Recipient5000";

            public const string Recipient10000 = "Recipient10000";
        }

        #endregion

        /// <summary>
        /// Perform the job using the parameters supplied in the execution context.
        /// </summary>
        /// <param name="context"></param>
        public void Execute( IJobExecutionContext context )
        {
            // check to see if it's the last day of the month
            DateTime today = RockDateTime.Today;
            bool isLastDayOfMonth = ( today.Day == DateTime.DaysInMonth( today.Year, today.Month ) );

            // Only run the job if it's the last day of the month.  We do this since it's not possible
            // to create a CRON that runs at the end of each month. 
            if ( isLastDayOfMonth )
            {
                // Get the date and time of when the job started.  This is needed because
                // the job starts running a few minutes before midnight at the end of the month
                // and we want to make sure we have the right date in case the job takes a long
                // time to run.
                DateTime runDateTime = RockDateTime.Now;

                int emailsSent = 0;

                // Get the configuration settings for this job instance.
                var dataMap = context.JobDetail.JobDataMap;

                Guid? dataView5000Guid = dataMap.GetString( AttributeKey.DataView5000 ).AsGuidOrNull();
                Guid? dataView10000Guid = dataMap.GetString( AttributeKey.DataView10000 ).AsGuidOrNull();
                Guid? av5000Guid = dataMap.GetString( AttributeKey.Attribute5000 ).AsGuidOrNull();
                Guid? av10000Guid = dataMap.GetString( AttributeKey.Attribute10000 ).AsGuidOrNull();
                Guid? systemCommunicationGuid = dataMap.GetString( AttributeKey.SystemCommunication ).AsGuidOrNull();
                string recipent5000EmailAddress = dataMap.GetString( AttributeKey.Recipient5000 );
                string recipient10000EmailAddress = dataMap.GetString( AttributeKey.Recipient10000 );

                if ( dataView5000Guid == null )
                {
                    throw new Exception( "$5,000 Threshold Data View is not configured." );
                }

                if ( dataView10000Guid == null )
                {
                    throw new Exception( "$10,000 Threshold Data View is not configured." );
                }

                if ( av5000Guid == null )
                {
                    throw new Exception( "$5,000 Threshold Attribute is not configured." );
                }

                if ( av10000Guid == null )
                {
                    throw new Exception( "$10,000 Threshold Attribute is not configured." );
                }

                if ( systemCommunicationGuid == null )
                {
                    throw new Exception( "System Communication is not configured." );
                }

                DataViewGetQueryArgs args = new DataViewGetQueryArgs();

                var rockContext = new RockContext();
                var personService = new PersonService( rockContext );
                var dataViewService = new DataViewService( rockContext );
                var systemCommunicationService = new SystemCommunicationService( rockContext );
                var attributeValueService = new AttributeValueService( rockContext );

                var dataView5000 = dataViewService.Get( dataView5000Guid.Value );
                var dataView10000 = dataViewService.Get( dataView10000Guid.Value );
                var attribute5000 = AttributeCache.Get( av5000Guid.Value );
                var attribute10000 = AttributeCache.Get( av10000Guid.Value );
                var systemCommunication = systemCommunicationService.Get( systemCommunicationGuid.Value );

                if ( dataView5000 == null )
                {
                    throw new Exception( "$5,000 Threshold Data View not found." );
                }

                if ( dataView10000 == null )
                {
                    throw new Exception( "$10,000 Threshold Data View not found." );
                }

                if ( attribute5000 == null )
                {
                    throw new Exception( "$5,000 Threshold Attribute not found." );
                }

                if ( attribute10000 == null )
                {
                    throw new Exception( "$10,000 Threshold Attribute not found." );
                }

                if ( systemCommunication == null )
                {
                    throw new Exception( "System communication not found." );
                }

                // $5,000 Threshold Met
                var qry = dataView5000.GetQuery( args );
                var personIds = qry.Select( e => e.Id ).ToList();

                var alreadyMet5000ThresholdPersonIds = attributeValueService.Queryable().AsNoTracking()
                    .Where( av => av.Attribute.Guid == av5000Guid &&
                                  av.EntityId.HasValue &&
                                  av.ValueAsDateTime.HasValue &&
                                  av.ValueAsDateTime.Value.Year == RockDateTime.Now.Year )
                    .Select( av => av.EntityId.Value ).ToList();

                var personList = personService.Queryable()
                    .Where( p => personIds.Contains( p.Id ) &&
                                 !alreadyMet5000ThresholdPersonIds.Contains( p.Id ) )
                    .ToList();

                // update each person so we know they met the threshold
                foreach ( var person in personList )
                {
                    person.LoadAttributes();
                    person.SetAttributeValue( attribute5000.Key, RockDateTime.Now.ToString( "o" ) );
                    person.SaveAttributeValue( attribute5000.Key, rockContext );
                }

                // for the $5,000 threshold we want to send each campus leader their own list of people to contact
                foreach ( var campus in CampusCache.All() )
                {
                    if ( campus.LeaderPersonAliasId.HasValue )
                    {
                        var leader = new PersonAliasService( rockContext ).Get( campus.LeaderPersonAliasId.Value );

                        // send the email 
                        if ( leader != null )
                        {
                            var notificationList = personList.Where( pl => pl.PrimaryCampusId == campus.Id ).ToList();
                            if ( notificationList.Any() )
                            {
                                var mergeObjects = Rock.Lava.LavaHelper.GetCommonMergeFields( null );
                                mergeObjects.Add( "RunDateTime", runDateTime );
                                mergeObjects.Add( "People", notificationList );
                                mergeObjects.Add( "ThresholdAmount", "$5,000" );

                                var recipients = new List<RockEmailMessageRecipient>();

                                recipients.Add( new RockEmailMessageRecipient( leader.Person, mergeObjects ) );

                                var emailMessage = new RockEmailMessage( systemCommunication.Guid );
                                emailMessage.SetRecipients( recipients );
                                var errors = new List<string>();

                                emailMessage.Send( out errors );
                                emailsSent++;
                            }
                        }
                    }
                }

                // we also want to sent a notification to anyone in the $5,000 recipient list
                if ( recipent5000EmailAddress.IsNotNullOrWhiteSpace() )
                {
                    List<string> emailList = recipent5000EmailAddress.Split( ',' ).ToList();

                    var notificationList = personList.ToList();
                    if ( notificationList.Any() )
                    {
                        var mergeObjects = Rock.Lava.LavaHelper.GetCommonMergeFields( null );
                        mergeObjects.Add( "RunDateTime", runDateTime );
                        mergeObjects.Add( "People", notificationList );
                        mergeObjects.Add( "ThresholdAmount", "$5,000" );

                        var recipients = new List<RockEmailMessageRecipient>();
                        foreach ( string email in emailList )
                        {
                            if ( email.IsNotNullOrWhiteSpace() )
                            {
                                recipients.Add( RockEmailMessageRecipient.CreateAnonymous( email, mergeObjects ) );
                            }
                        }

                        if ( recipients.Any() )
                        {
                            var emailMessage = new RockEmailMessage( systemCommunication.Guid );
                            emailMessage.SetRecipients( recipients );
                            var errors = new List<string>();

                            emailMessage.Send( out errors );
                            emailsSent += recipients.Count();
                        }
                    }
                }

                // $10,000 Threshold Met
                qry = dataView10000.GetQuery( args );
                personIds = qry.Select( e => e.Id ).ToList();

                var alreadyMet10000ThresholdPersonIds = attributeValueService.Queryable().AsNoTracking()
                    .Where( av => av.Attribute.Guid == av10000Guid &&
                                  av.EntityId.HasValue &&
                                  av.ValueAsDateTime.HasValue &&
                                  av.ValueAsDateTime.Value.Year == RockDateTime.Now.Year )
                    .Select( av => av.EntityId.Value ).ToList();

                personList = personService.Queryable()
                    .Where( p => personIds.Contains( p.Id ) &&
                                 !alreadyMet10000ThresholdPersonIds.Contains( p.Id ) )
                    .ToList();

                // update each person so we know they met the threshold
                foreach ( var person in personList )
                {
                    person.LoadAttributes();
                    person.SetAttributeValue( attribute10000.Key, RockDateTime.Now.ToString( "o" ) );
                    person.SaveAttributeValue( attribute10000.Key, rockContext );
                }

                // send the email 
                if ( recipient10000EmailAddress.IsNotNullOrWhiteSpace() )
                {
                    List<string> emailList = recipient10000EmailAddress.Split( ',' ).ToList();

                    var notificationList = personList.ToList();
                    if ( notificationList.Any() )
                    {
                        var mergeObjects = Rock.Lava.LavaHelper.GetCommonMergeFields( null );
                        mergeObjects.Add( "RunDateTime", runDateTime );
                        mergeObjects.Add( "People", notificationList );
                        mergeObjects.Add( "ThresholdAmount", "$10,000" );

                        var recipients = new List<RockEmailMessageRecipient>();
                        foreach ( string email in emailList )
                        {
                            if ( email.IsNotNullOrWhiteSpace() )
                            {
                                recipients.Add( RockEmailMessageRecipient.CreateAnonymous( email, mergeObjects ) );
                            }
                        }

                        if ( recipients.Any() )
                        {
                            var emailMessage = new RockEmailMessage( systemCommunication.Guid );
                            emailMessage.SetRecipients( recipients );
                            var errors = new List<string>();

                            emailMessage.Send( out errors );
                            emailsSent += recipients.Count();
                        }
                    }
                }

                context.Result = string.Format( "{0} emails sent", emailsSent ); 
            }
            else
            {
                context.Result = "Did not run. This job only processes on the last day of the month.";
            }
        }
    }
}

