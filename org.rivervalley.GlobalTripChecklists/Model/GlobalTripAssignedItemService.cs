using Rock.Data;

namespace org.rivervalley.GlobalTripChecklists.Model
{
    public class GlobalTripAssignedItemService : Service<GlobalTripAssignedItem>
    {
        public GlobalTripAssignedItemService(RockContext context) : base(context) { }

        public bool CanDelete(GlobalTripAssignedItem item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
