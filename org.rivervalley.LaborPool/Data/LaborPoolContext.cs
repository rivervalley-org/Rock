using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Web;

using org.rivervalley.LaborPool.Model;

namespace org.rivervalley.LaborPool.Data
{
    public partial class LaborPoolContext : Rock.Data.DbContext
    {

        #region Models

        public DbSet<LaborPoolTransactions> LaborPoolTransaction { get; set; }

        #endregion

        public LaborPoolContext()
            : base("RockContext")
        {
            //intentionally left blank
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // we don't want this context to create a database or look for EF Migrations, do set the Initializer to null
            Database.SetInitializer<LaborPoolContext>(new NullDatabaseInitializer<LaborPoolContext>());

            Rock.Data.ContextHelper.AddConfigurations(modelBuilder);
            modelBuilder.Configurations.AddFromAssembly(System.Reflection.Assembly.GetExecutingAssembly());
        }
    }
}