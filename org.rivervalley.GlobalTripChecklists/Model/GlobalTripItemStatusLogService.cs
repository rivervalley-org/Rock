using Rock.Data;

namespace org.rivervalley.GlobalTripChecklists.Model
{
    public class GlobalTripItemStatusLogService : Service<GlobalTripItemStatusLog>
    {
        public GlobalTripItemStatusLogService(RockContext context) : base(context) { }

        public bool CanDelete(GlobalTripItemStatusLog item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}