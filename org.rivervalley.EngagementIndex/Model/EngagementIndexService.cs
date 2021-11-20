using Rock.Data;
using System.Data.Entity;
using System.Linq;

namespace org.rivervalley.Engagement.Model
{
    public class EngagementIndexService : Service<EngagementIndex>
    {
        public EngagementIndexService( RockContext context ) : base( context ) { }

        //public EngagementIndex GetCurrentEngagementIndex( int personId )
        //{
        //    var rockContext = new RockContext();
        //    var engagementScoreService = new Service<Model.EngagementIndex>(rockContext);

        //    return engagementScoreService.Queryable().AsNoTracking()
        //        .Where(e => e.PersonAlias.Person.Id == personId)
        //        .OrderByDescending(e => e.RunDate)

        //        // If a person was merged, they could end up with two scores for the same time period.
        //        //  This makes sure we get the highest score.
        //        .OrderByDescending( e => e.TotalEngagementIndex ) 
        //        .FirstOrDefault();
        //}

        public bool CanDelete( EngagementIndex item, out string errorMessage )
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}