using Rock.Data;

namespace org.rivervalley.PatientIncidents.Model
{
    public class PatientVisitService : Service<PatientVisit>
    {
        public PatientVisitService(RockContext context) : base(context) { }

        public bool CanDelete(PatientVisit item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}