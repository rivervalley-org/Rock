using Rock.Data;

namespace org.rivervalley.PersonnelRequests.Model
{
    public class PersonnelRequestService : Service<PersonnelRequest>
    {
        public PersonnelRequestService(RockContext context) : base(context) { }

        public bool CanDelete(PersonnelRequest item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}