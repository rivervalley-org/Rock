using Rock;
using Rock.Data;
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

        /// <summary>
        /// Gets the current engagement result.
        /// </summary>
        /// <param name="personId">The person identifier.</param>
        /// <returns></returns>
        public static EngagementResult GetCurrentEngagementResult( int personId )
        {
            var rockContext = new RockContext();
            var engagementIndexService = new EngagementIndexService( rockContext );
            var engagementCategories = new EngagementCategoryService( rockContext ).Queryable().ToList();

            var currentDate = RockDateTime.Now;
            var runDate = new DateTime( currentDate.Year, currentDate.Month, 1 );

            // get results for person and run date
            var results = engagementIndexService.Queryable().AsNoTracking()
                .SelectMany( e => e.Results )
                .Where( r => r.PersonAlias.Person.Id == personId && r.RunDate == runDate )
                .ToList();

            // pre-populate categories
            EngagementResult engagementResult = new EngagementResult();
            foreach ( var category in engagementCategories )
            {
                engagementResult.CategoryResults.Add( new CategoryResult { Id = category.Id, Name = category.Name, Weight = category.Weight, HtmlColor = category.HtmlColor } );
            }

            // fill in category results
            foreach ( var categoryResult in engagementResult.CategoryResults )
            {
                foreach ( var result in results.Where( r => r.EngagementIndex.CategoryId == categoryResult.Id ) )
                {
                    categoryResult.Results.Add( new ResultDetail { Name = result.EngagementIndex.Name, Score = result.Score } );
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
            return true;
        }

        #region Helper Classes

        public class EngagementResult : Rock.Lava.ILiquidizable
        {
            public decimal TotalEngagementIndex
            {
                get
                {
                    return CategoryResults.Sum( cr => cr.Total ) > 0 ? CategoryResults.Sum( cr => cr.Total ) / CategoryResults.Count : 0;
                }
            }

            public List<CategoryResult> CategoryResults { get; set; }

            public EngagementResult()
            {
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
            [Rock.Data.LavaIgnore]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "TotalEngagementIndex", "CategoryResults" };
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
            [Rock.Data.LavaIgnore]
            public object this[object key]
            {
                get
                {
                    switch ( key.ToStringSafe() )
                    {
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
                var additionalKeys = new List<string> { "TotalEngagementIndex", "CategoryResults" };
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
            [Rock.Data.LavaIgnore]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "Id", "Name", "Weight", "HtmlColor", "Total", "Results" };
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
            [Rock.Data.LavaIgnore]
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
                var additionalKeys = new List<string> { "Id", "Name", "Weight", "HtmlColor", "Total", "Results" };
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

            public decimal Score { get; set; }

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
            [Rock.Data.LavaIgnore]
            public List<string> AvailableKeys
            {
                get
                {
                    var availableKeys = new List<string> { "Name", "Score" };
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
            [Rock.Data.LavaIgnore]
            public object this[object key]
            {
                get
                {
                    switch ( key.ToStringSafe() )
                    {
                        case "Name":
                            return Name;
                        case "Score":
                            return Score;
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
                var additionalKeys = new List<string> { "Name", "Score" };
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