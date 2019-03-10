using Rock.Data;

namespace org.rivervalley.SampleProject_DefinedValue.Model
{
    public class SampleDefinedValueClassService : Service<SampleDefinedValueClass>
    {
        public SampleDefinedValueClassService(RockContext context) : base(context) { }

        public bool CanDelete(SampleDefinedValueClass item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
