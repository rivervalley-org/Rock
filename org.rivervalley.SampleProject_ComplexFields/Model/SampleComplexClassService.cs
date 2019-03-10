using Rock.Data;

namespace org.rivervalley.SampleProject_ComplexFields.Model
{
    public class SampleComplexClassService : Service<SampleComplexClass>
    {
        public SampleComplexClassService(RockContext context) : base(context) { }

        public bool CanDelete(SampleComplexClass item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
