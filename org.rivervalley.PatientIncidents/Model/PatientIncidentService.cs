using Rock.Data;

namespace org.rivervalley.PatientIncidents.Model
{
    public class PatientIncidentService : Service<PatientIncident>
    {
        public PatientIncidentService(RockContext context) : base(context) { }

        public bool CanDelete(PatientIncident item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}