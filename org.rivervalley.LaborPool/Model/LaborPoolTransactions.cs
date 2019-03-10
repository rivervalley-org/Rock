using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;
using System;


using org.rivervalley.LaborPool.Data;

using Rock.Data;
using Rock.Model;

namespace org.rivervalley.LaborPool.Model
{
    [Table("_org_rivervalley_LaborPool_Transactions")]
    [DataContract]
    public class LaborPoolTransactions : Rock.Data.Model<LaborPoolTransactions>, Rock.Security.ISecured
    {
        #region Entity Properties

        //[DataMember]
        //public int PersonId { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public decimal Debit { get; set; }

        [DataMember]
        public decimal Credit { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public DateTime TransactionDate { get; set; }

        [DataMember]
        public int Glinfo { get; set; }

        [DataMember]
        public int Projcode { get; set; }

        [DataMember]
        public int FundId { get; set; }

        #endregion

        #region Virtual Properties

       #endregion

        #region Entity Configuration

        public partial class LaborPoolTransactionsConfiguration : EntityTypeConfiguration<LaborPoolTransactions>
        {
            public LaborPoolTransactionsConfiguration()
            {
                this.HasEntitySetName("LaborPoolTransactions");
            }
        }

        #endregion
    }

}