using Rock.Data;
using System.Data.Entity;
using System.Linq;

namespace org.rivervalley.Engagement.Model
{
    public class EngagementCategoryService : Service<EngagementCategory>
    {
        public EngagementCategoryService( RockContext context ) : base( context ) { }

        public bool CanDelete( EngagementCategory item, out string errorMessage )
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}