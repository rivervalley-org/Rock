using Rock.Data;

namespace org.rivervalley.SampleProject_TwoDefinedValues.Model
{
    public class SampleTwoDefinedValuesClassService : Service<SampleTwoDefinedValuesClass>
    {
        public SampleTwoDefinedValuesClassService(RockContext context) : base(context) { }

        public bool CanDelete(SampleTwoDefinedValuesClass item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}