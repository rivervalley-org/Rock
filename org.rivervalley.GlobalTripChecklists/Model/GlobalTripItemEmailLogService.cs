using Rock.Data;

namespace org.rivervalley.GlobalTripChecklists.Model
{
    public class GlobalTripItemEmailLogService : Service<GlobalTripItemEmailLog>
    {
        public GlobalTripItemEmailLogService(RockContext context) : base(context) { }

        public bool CanDelete(GlobalTripItemEmailLog item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}