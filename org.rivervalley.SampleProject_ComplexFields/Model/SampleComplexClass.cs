using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using Rock.Data;
using Rock.Model;

namespace org.rivervalley.SampleProject_ComplexFields.Model
{
    [Table("_org_rivervalley_SampleProject_DBTwo")]
    [DataContract]
    public class SampleComplexClass : Model<SampleComplexClass>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public int Quantity { get; set; }

        [DataMember]
        public decimal Amount { get; set; }

        [DataMember]
        public DateTime OfferDate { get; set; }

        [DataMember]
        public bool IsPastor { get; set; }

        [DataMember]
        public int? CampusId { get; set; }

        #endregion

        #region Virtual Properties

        public virtual Campus Campus { get; set; }
        
        #endregion

        public partial class SampleComplexClassConfiguration : EntityTypeConfiguration<SampleComplexClass>
        {
            public SampleComplexClassConfiguration()
            {
                this.HasOptional(r => r.Campus).WithMany().HasForeignKey(r => r.CampusId).WillCascadeOnDelete(false);
                this.HasEntitySetName("SampleComplexClass");
            }
        }

    }
}
