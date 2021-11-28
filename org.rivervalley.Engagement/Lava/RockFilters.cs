using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock;
using Rock.Model;

using org.rivervalley.Engagement.Model;

namespace org.rivervalley.Engagement.Lava
{
    public static class RockFilters
    {
        public static List<EngagementIndexService.EngagementResult> GetEngagementResults( object input, int howMany = 12 )
        {
            Person person = null;

            if ( input == null )
            {
                return new List<EngagementIndexService.EngagementResult>();
            }

            if ( input is Person )
            {
                person = ( Person ) input;
                return EngagementIndexService.GetEngagementResults( person.Id, howMany );
            }

            return new List<EngagementIndexService.EngagementResult>();
        }

        public static EngagementIndexService.EngagementResult GetCurrentEngagementResult( object input )
        {
            Person person = null;

            if ( input == null )
            {
                return null;
            }

            if ( input is Person )
            {
                person = ( Person ) input;
                return EngagementIndexService.GetCurrentEngagementResult( person.Id );
            }

            return null;
        }
    }
}
