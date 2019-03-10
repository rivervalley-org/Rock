using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using org.rivervalley.GLFunds.Data;

using Rock.Data;
using Rock.Model;

namespace org.rivervalley.GLFunds.Model
{
    [Table( "_org_rivervalley_GLFunds_ExtendedFunds" )]
    [DataContract]

    public class ExtendedFunds : Rock.Data.Model<ExtendedFunds>, Rock.Security.ISecured
    {

        #region Entity Properties

        [DataMember]
        [MaxLength( 4 )]
        public string Company { get; set; }

        [DataMember]
        [MaxLength( 5 )]
        public string Fund { get; set; }

        [DataMember]
        [MaxLength( 9 )]
        public string BankAccount { get; set; }

        [DataMember]
        [MaxLength( 9 )]
        public string RevenueAccount { get; set; }

        [DataMember]
        [MaxLength( 3 )]
        public string RevenueDepartment { get; set; }
        
        [DataMember]
        [MaxLength( 3 )]
        public string ProjectCode { get; set; }

        [DataMember]
        public int FinancialAccountId { get; set; }

        #endregion

        #region Virtual Properties

        [DataMember]
        public virtual FinancialAccount FinancialAccount { get; set; }

        #endregion
    }

    #region Entity Configuration

    public partial class ExtendedFundsConfiguration : EntityTypeConfiguration<ExtendedFunds>
    {
        public ExtendedFundsConfiguration()
        {
            this.HasRequired(r => r.FinancialAccount).WithMany().HasForeignKey(r => r.FinancialAccountId).WillCascadeOnDelete(false);
        }
    }

    #endregion
    
}
