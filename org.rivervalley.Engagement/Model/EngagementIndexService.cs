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

        public class EngagementResult : Rock.Lava.ILiquidizable
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

            #region ILiquidizable Implementation

            public object ToLiquid()
            {
                return this;
            }

            /// <summary>
            /// Gets the available keys (for debugging info).
            /// </summary>
            /// <value>
            /// The available keys.
            /// </value>
            [LavaHidden]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "RunDate", "TotalEngagementIndex", "CategoryResults" };
                    return availableKeys;
                }
            }

            /// <summary>
            /// Gets the <see cref="System.Object"/> with the specified key.
            /// </summary>
            /// <value>
            /// The <see cref="System.Object"/>.
            /// </value>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            [LavaHidden]
            public object this[object key]
            {
                get
                {
                    switch ( key.ToStringSafe() )
                    {
                        case "RunDate":
                            return RunDate;
                        case "TotalEngagementIndex":
                            return TotalEngagementIndex;
                        case "CategoryResults":
                            return CategoryResults;
                        default:
                            return null;
                    }
                }
            }

            /// <summary>
            /// Determines whether the specified key contains key.
            /// </summary>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            public bool ContainsKey( object key )
            {
                var additionalKeys = new List<string> { "RunDate", "TotalEngagementIndex", "CategoryResults" };
                if ( additionalKeys.Contains( key.ToStringSafe() ) )
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            #endregion
        }

        public class CategoryResult : Rock.Lava.ILiquidizable
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

            #region ILiquidizable Implementation

            public object ToLiquid()
            {
                return this;
            }

            /// <summary>
            /// Gets the available keys (for debugging info).
            /// </summary>
            /// <value>
            /// The available keys.
            /// </value>
            [LavaHidden]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "Id", "Name", "Description", "Weight", "HtmlColor", "Total", "Results" };
                    return availableKeys;
                }
            }

            /// <summary>
            /// Gets the <see cref="System.Object"/> with the specified key.
            /// </summary>
            /// <value>
            /// The <see cref="System.Object"/>.
            /// </value>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            [LavaHidden]
            public object this[object key]
            {
                get
                {
                    switch ( key.ToStringSafe() )
                    {
                        case "Id":
                            return Id;
                        case "Name":
                            return Name;
                        case "Description":
                            return Description;
                        case "Weight":
                            return Weight;
                        case "HtmlColor":
                            return HtmlColor;
                        case "Total":
                            return Total;
                        case "Results":
                            return Results;
                        default:
                            return null;
                    }
                }
            }

            /// <summary>
            /// Determines whether the specified key contains key.
            /// </summary>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            public bool ContainsKey( object key )
            {
                var additionalKeys = new List<string> { "Id", "Name", "Description", "Weight", "HtmlColor", "Total", "Results" };
                if ( additionalKeys.Contains( key.ToStringSafe() ) )
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            #endregion
        }

        public class ResultDetail : Rock.Lava.ILiquidizable
        {
            public string Name { get; set; }

            public string Description { get; set; }

            public decimal Score { get; set; }

            public int ScoreWeight { get; set; }

            public int Completions { get; set; }

            #region ILiquidizable Implementation

            public object ToLiquid()
            {
                return this;
            }

            /// <summary>
            /// Gets the available keys (for debugging info).
            /// </summary>
            /// <value>
            /// The available keys.
            /// </value>
            [LavaHidden]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "Name", "Description", "Score", "ScoreWeight", "Completions" };
                    return availableKeys;
                }
            }

            /// <summary>
            /// Gets the <see cref="System.Object"/> with the specified key.
            /// </summary>
            /// <value>
            /// The <see cref="System.Object"/>.
            /// </value>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            [LavaHidden]
            public object this[object key]
            {
                get
                {
                    switch ( key.ToStringSafe() )
                    {
                        case "Name":
                            return Name;
                        case "Description":
                            return Description;
                        case "Score":
                            return Score;
                        case "ScoreWeight":
                            return ScoreWeight;
                        case "Completions":
                            return Completions;
                        default:
                            return null;
                    }
                }
            }

            /// <summary>
            /// Determines whether the specified key contains key.
            /// </summary>
            /// <param name="key">The key.</param>
            /// <returns></returns>
            public bool ContainsKey( object key )
            {
                var additionalKeys = new List<string> { "Name", "Description", "Score", "ScoreWeight", "Completions" };
                if ( additionalKeys.Contains( key.ToStringSafe() ) )
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            #endregion
        }

        #endregion
    }
}