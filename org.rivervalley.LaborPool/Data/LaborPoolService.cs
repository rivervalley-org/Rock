using Rock.Data;

namespace org.rivervalley.LaborPool.Data
{
    public class LaborPoolService<T> : Rock.Data.Service<T> where T : Rock.Data.Entity<T>, new()
    {
        public LaborPoolService(LaborPoolContext context)
            : base(context)
        {

        }

        public virtual bool CanDelete(T item, out string errorMessage)
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
