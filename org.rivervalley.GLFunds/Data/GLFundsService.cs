using Rock.Data;

namespace org.rivervalley.GLFunds.Data
{
    public class GLFundsService<T> : Rock.Data.Service<T> where T : Rock.Data.Entity<T>, new()
    {
        public GLFundsService( GLFundsContext context )
            : base( context )
        {

        }

        public virtual bool CanDelete( T item, out string errorMessage )
        {
            errorMessage = string.Empty;
            return true;
        }
    }
}
