using Rock.Data;
using System.Data.Entity;
using System.Linq;

namespace org.rivervalley.Engagement.Model
{
    public class EngagementCategoryService : Service<EngagementCategory>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EngagementCategoryService"/> class.
        /// </summary>
        /// <param name="context">The context.</param>
        public EngagementCategoryService( RockContext context ) : base( context ) { }

        /// <summary>
        /// Determines whether this instance can delete the specified item.
        /// </summary>
        /// <param name="item">The item.</param>
        /// <param name="errorMessage">The error message.</param>
        /// <returns>
        ///   <c>true</c> if this instance can delete the specified item; otherwise, <c>false</c>.
        /// </returns>
        public bool CanDelete( EngagementCategory item, out string errorMessage )
        {
            errorMessage = string.Empty;

            if ( new Service<EngagementIndex>( Context ).Queryable().Any( a => a.CategoryId == item.Id ) )
            {
                errorMessage = string.Format( "Cannot delete {0} because it contains indices.", EngagementCategory.FriendlyTypeName );
                return false;
            }

            return true;
        }
    }
}