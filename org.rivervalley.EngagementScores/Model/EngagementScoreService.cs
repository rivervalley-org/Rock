using Rock.Data;

namespace org.rivervalley.EngagementScores.Model
{
    public class EngagementScoreService : Service<EngagementScore>
    {
        public EngagementScoreService( RockContext context ) : base( context ) { }

        public bool CanDelete( EngagementScore item, out string errorMessage )
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}