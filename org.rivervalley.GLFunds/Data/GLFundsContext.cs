using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Web;

using org.rivervalley.GLFunds.Model;

namespace org.rivervalley.GLFunds.Data
{
    public partial class GLFundsContext : Rock.Data.DbContext
    {

        #region Models

        public DbSet<ExtendedFunds> ExtendedFund { get; set; }

        #endregion
        
        public GLFundsContext()
            : base( "RockContext" )
        {
            //intentionally left blank
        }

        protected override void OnModelCreating( DbModelBuilder modelBuilder )
        {
            // we don't want this context to create a database or look for EF Migrations, do set the Initializer to null
            Database.SetInitializer<GLFundsContext>( new NullDatabaseInitializer<GLFundsContext>() );

            Rock.Data.ContextHelper.AddConfigurations( modelBuilder );
            modelBuilder.Configurations.AddFromAssembly( System.Reflection.Assembly.GetExecutingAssembly() );
        }
    }
}