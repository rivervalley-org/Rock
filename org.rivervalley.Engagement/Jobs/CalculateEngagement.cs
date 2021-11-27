using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using org.rivervalley.Engagement.Model;
using Quartz;
using Rock;
using Rock.Attribute;
using Rock.Data;
using Rock.Model;

namespace org.rivervalley.Engagement.Jobs
{
    [DisplayName( "Calculate Engagement" )]
    [Category( "River Valley > Engagement" )]
    [Description( "This job calculates engagement indices." )]
    [DisallowConcurrentExecution]

    [DataViewField( "Data View", "The dataview of people that will be processed.", required: true )]
    [BooleanField( "Only Run at Start of Month", "Should this job only be ran at the start of the month?", true, "", 1, Key = "OnlyRunAtStartOfMonth", IsRequired = true )]

    public class CalculateEngagement : IJob
    {
        public CalculateEngagement()
        {
        }

        /// <summary>
        /// Executes the specified context.
        /// </summary>
        /// <param name="context">The context.</param>
        public void Execute( IJobExecutionContext context )
        {
            var dataMap = context.JobDetail.JobDataMap;

            RockContext rockContext = new RockContext();
            EngagementIndexService engagementIndexService = new EngagementIndexService( rockContext );

            // get run date - run date should be the first of every month.
            bool onlyRunAtStartOfMonth = dataMap.GetString( "OnlyRunAtStartOfMonth" ).AsBoolean();
            var runDate = RockDateTime.Now;
            
            if ( runDate.Day != 1 && onlyRunAtStartOfMonth )
            {
                context.Result = "Indices should only be calculated at the first of the month.";
                return;
            }
            else
            {
                // ensure that the runDate is set to the start of the month to prevent data integrity issues
                runDate = new DateTime( runDate.Year, runDate.Month, 1 );
            }

            // get data view
            Guid? dataviewGuid = dataMap.GetString( "DataView" ).AsGuidOrNull();
            Rock.Model.DataView dataView = null;
            List<int> personIds = new List<int>();

            if ( !dataviewGuid.HasValue )
            {
                context.Result = "No data view found.";
                return;
            }
            else
            {
                dataView = new DataViewService( rockContext ).Get( dataviewGuid.Value );
                if ( dataView == null )
                {
                    context.Result = "No data view found.";
                    return;
                }

                List<string> errorMessages = new List<string>();
                personIds = dataView.GetQuery( null, 120, out errorMessages ).Select( d => d.Id ).ToList();

                if ( errorMessages.Any() )
                {
                    context.Result = "Error processing data view.";
                    return;
                }
            }

            List<string> jobResults = new List<string>();
            List<EngagementIndex> indices = engagementIndexService.Queryable().AsNoTracking().ToList();
            foreach ( var index in indices )
            {
                rockContext = new RockContext();

                int newRows = 0;
                int existingRows = 0;
                string errorMessage = string.Empty;

                // calculate results
                List<EngagementIndex.IndexResult> indexResults = index.CalculateResults( out errorMessage );

                if ( !errorMessage.IsNotNullOrWhiteSpace() )
                {
                    // only include people that are in our base data view
                    var results = indexResults.Where( r => personIds.Contains( r.PersonId ) ).ToList();
                    var personAliasService = new PersonAliasService( rockContext ).Queryable().AsNoTracking();

                    // get a list of current results so that we make sure we don't add them twice
                    var currentResults = engagementIndexService.Queryable().AsNoTracking().SelectMany( e => e.Results ).Where( r => r.RunDate == runDate ).ToList();

                    // add results
                    List<EngagementIndexResult> newEngagementIndexResults = new List<EngagementIndexResult>();
                    foreach ( var result in results )
                    {
                        var personAliasId = personAliasService.Where( pa => pa.PersonId == result.PersonId ).FirstOrDefault().Id;

                        bool exists = currentResults.Where( r => r.EngagementIndexId == index.Id && r.PersonAliasId == personAliasId && r.RunDate == runDate ).Any();
                        if ( !exists )
                        {
                            EngagementIndexResult engagementIndexResult = new EngagementIndexResult();
                            engagementIndexResult.PersonAliasId = personAliasId;
                            engagementIndexResult.Completions = result.Completions;
                            engagementIndexResult.EngagementIndexId = index.Id;
                            engagementIndexResult.RunDate = runDate;

                            newEngagementIndexResults.Add( engagementIndexResult );

                            newRows++;
                        }
                        else
                        {
                            existingRows++;
                        }
                    }

                    // save results
                    rockContext.BulkInsert<EngagementIndexResult>( newEngagementIndexResults );
                    rockContext.SaveChanges();

                    jobResults.Add( string.Format( "<span class='badge badge-success'>&nbsp;</span> Calculated {0}: {1} new results - {2} existing results", index.Name, newRows.ToString(), existingRows.ToString() ) );
                }
                else
                {
                    jobResults.Add( string.Format( "<span class='badge badge-danger'>&nbsp;</span> Calculated {0}: {1}", index.Name, errorMessage ) );
                }    
                
            }

            StringBuilder jobSummaryBuilder = new StringBuilder();
            jobSummaryBuilder.AppendLine( "Summary:" );
            foreach( string result in jobResults )
            {
                jobSummaryBuilder.AppendLine( result );
            }

            context.Result = jobSummaryBuilder.ToString();
        }
    }
}
