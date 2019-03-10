using Rock.Data;

namespace org.rivervalley.PersonnelRequests.Model
{
    public class PersonnelRequestNoteService : Service<PersonnelRequestNote>
    {
        public PersonnelRequestNoteService(RockContext context) : base(context) { }

        public bool CanDelete(PersonnelRequestNote item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}