using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using org.rivervalley.Engagement.Model;
using Rock.Data;
using Rock.Rest.Filters;

namespace org.rivervalley.Engagement.Rest
{
    public partial class EngagementIndexController : Rock.Rest.ApiControllerBase
    {
        [Authenticate, Secured]
        [HttpGet]
        [System.Web.Http.Route( "api/RiverValley/Badges/EngagementScore/{personGuid}" )]
        public Model.EngagementIndex GetEngagementScore( Guid personGuid )
        {
            var rockContext = new RockContext();
            var engagementScoreService = new Service<Model.EngagementIndex>( rockContext );

            Model.EngagementIndex score = engagementScoreService.Queryable().AsNoTracking()
                //.Where( e => e.PersonAlias.Person.Guid == personGuid )
                //.OrderByDescending( e => e.RunDate )
                .FirstOrDefault();

            return score;
        }
    }
}
