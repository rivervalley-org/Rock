using Rock.Data;

namespace org.rivervalley.PastorOnCall.Model
{
    public class PastorOnCallScheduleService : Service<PastorOnCallSchedule>
    {
        public PastorOnCallScheduleService(RockContext context) : base(context) { }

        public bool CanDelete(PastorOnCallSchedule item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}