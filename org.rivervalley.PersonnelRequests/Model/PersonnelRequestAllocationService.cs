using Rock.Data;

namespace org.rivervalley.PersonnelRequests.Model
{
    public class PersonnelRequestAllocationService : Service<PersonnelRequestAllocation>
    {
        public PersonnelRequestAllocationService(RockContext context) : base(context) { }

        public bool CanDelete(PersonnelRequestAllocation item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}