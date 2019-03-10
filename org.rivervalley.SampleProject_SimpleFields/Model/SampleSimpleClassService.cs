using Rock.Data;

namespace org.rivervalley.SampleProject_SimpleFields.Model
{
    public class SampleSimpleClassService : Service<SampleSimpleClass>
    {
        public SampleSimpleClassService(RockContext context) : base(context) { }

        public bool CanDelete(SampleSimpleClass item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
