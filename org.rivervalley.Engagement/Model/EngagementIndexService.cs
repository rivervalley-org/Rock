using Rock;
using Rock.Data;
using Rock.Lava;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace org.rivervalley.Engagement.Model
{
    public class EngagementIndexService : Service<EngagementIndex>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EngagementIndexService"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public EngagementIndexService( RockContext context ) : base( context ) { }

        public static List<EngagementResult> GetEngagementResults( int personId, int howMany = 12 )
        {
            var results = new List<EngagementResult>();
            var currentDate = RockDateTime.Now;
            var runDate = new DateTime( currentDate.Year, currentDate.Month, 1 );

            for ( int i = 0; i < howMany; i++ )
            {
                results.Add( GetEngagementResult( personId, runDate ) );
                runDate = runDate.AddMonths( -1 );
            }

            return results;
        }

        public static EngagementResult GetCurrentEngagementResult( int PersonId )
        {
            var currentDate = RockDateTime.Now;
            var runDate = new DateTime( currentDate.Year, currentDate.Month, 1 );

            return GetEngagementResult( PersonId, runDate );
        }

        /// <summary>
        /// Gets the current engagement result.
        /// </summary>
        /// <param name="personId">The person identifier.</param>
        /// <returns></returns>
        public static EngagementResult GetEngagementResult( int personId, DateTime runDate )
        {
            var rockContext = new RockContext();
            var engagementIndexService = new EngagementIndexService( rockContext );
            var engagementCategories = new EngagementCategoryService( rockContext ).Queryable().Where( e => e.IsActive ).OrderBy( e => e.Order ).ToList();
            var engagementIndices = new EngagementIndexService( rockContext ).Queryable().Where( i => i.IsActive ).OrderBy( i => i.Order ).ToList();

            // get results for person and run date
            var results = engagementIndexService.Queryable().AsNoTracking()
                .Where( e => e.IsActive )
                .SelectMany( e => e.Results )
                .Where( r => r.PersonAlias.Person.Id == personId && r.RunDate == runDate )
                .ToList();

            // build categories
            EngagementResult engagementResult = new EngagementResult( runDate );
            foreach ( var category in engagementCategories )
            {
                engagementResult.CategoryResults.Add( new CategoryResult { Id = category.Id, Name = category.Name, Description = category.Description, Weight = category.Weight, HtmlColor = category.HtmlColor } );
            }

            foreach ( var categoryResult in engagementResult.CategoryResults )
            {
                // build indices
                foreach ( var index in engagementIndices.Where( i => i.CategoryId == categoryResult.Id ) )
                {
                    // add result if one exists
                    EngagementIndexResult result = results.Where( r => r.EngagementIndex.CategoryId == categoryResult.Id && r.EngagementIndexId == index.Id ).FirstOrDefault();
                    categoryResult.Results.Add( 
                        new ResultDetail { 
                            Name = index.Name, 
                            Description = index.Description, 
                            Score = result != null ? result.Score : 0, 
                            ScoreWeight = index.ScoreWeight, 
                            Completions = result != null ? result.Completions : 0
                        } );
                }
            }

            // TODO: Need to fix the potential of someone getting skewed results because of a duplicate record (maybe it doesn't matter)
            // If a person was merged, they could end up with two scores for the same time period.
            //  This makes sure we get the highest score.

            return engagementResult;
        }

        /// <summary>
        /// Determines whether this instance can delete the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <param name="errorMessage">The error message.</param>
        /// <returns>
        ///   <c>true</c> if this instance can delete the specified item; otherwise, <c>false</c>.
        /// </returns>
        public bool CanDelete( EngagementIndex item, out string errorMessage )
        {
            errorMessage = string.Empty;

            if ( new Service<EngagementIndexResult>( Context ).Queryable().Any( a => a.EngagementIndexId == item.Id ) )
            {
                errorMessage = string.Format( "Cannot delete {0} because it contains results.", EngagementIndex.FriendlyTypeName );
                return false;
            }

            return true;
        }

        #region Helper Classes

        public class EngagementResult : Rock.Lava.LavaDataObject
        {
            public DateTime RunDate { get; set; }

            public decimal TotalEngagementIndex
            {
                get
                {
                    return CategoryResults.Sum( cr => cr.Total ) > 0 ? CategoryResults.Sum( cr => cr.Total ) / CategoryResults.Count : 0;
                }
            }

            public List<CategoryResult> CategoryResults { get; set; }

            public EngagementResult( DateTime runDate )
            {
                RunDate = runDate;
                CategoryResults = new List<CategoryResult>();
            }
        }

        public class CategoryResult : Rock.Lava.LavaDataObject
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public string Description { get; set; }

            public int Weight { get; set; }

            public string HtmlColor { get; set; }

            public decimal Total 
            { 
                get
                {
                    return Results.Sum( r => r.Score ) > 0 ? ( Results.Sum( r => r.Score ) / Weight) * 100 : 0;
                }
            }

            public List<ResultDetail> Results { get; set; }

            public CategoryResult()
            {
                Results = new List<ResultDetail>();
            }
        }

        public class ResultDetail : Rock.Lava.LavaDataObject
        {
            public string Name { get; set; }

            public string Description { get; set; }

            public decimal Score { get; set; }

            public int ScoreWeight { get; set; }

            public int Completions { get; set; }
        }

        #endregion
    }
}