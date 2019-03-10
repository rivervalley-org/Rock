using Rock.Data;

namespace org.rivervalley.GlobalTripChecklists.Model
{
    public class GlobalTripItemStatusService : Service<GlobalTripItemStatus>
    {
        public GlobalTripItemStatusService(RockContext context) : base(context) { }

        public bool CanDelete(GlobalTripItemStatus item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
