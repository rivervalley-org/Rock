using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using org.rivervalley.EngagementScores.Model;
using Rock.Data;
using Rock.Rest.Filters;

namespace org.rivervalley.EngagementScores.Rest
{
    public partial class EngagementScoreController : Rock.Rest.ApiControllerBase
    {
        [Authenticate, Secured]
        [HttpGet]
        [System.Web.Http.Route( "api/RiverValley/Badges/EngagementScore/{personGuid}" )]
        public EngagementScore GetEngagementScore( Guid personGuid )
        {
            var rockContext = new RockContext();
            var engagementScoreService = new Service<EngagementScore>( rockContext );

            EngagementScore score = engagementScoreService.Queryable().AsNoTracking()
                .Where( e => e.PersonAlias.Person.Guid == personGuid )
                .OrderByDescending( e => e.SundayDate )
                .FirstOrDefault();

            return score;
        }
    }
}
