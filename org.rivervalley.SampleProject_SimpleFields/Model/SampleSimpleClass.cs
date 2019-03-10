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

namespace org.rivervalley.SampleProject_SimpleFields.Model
{
    [Table("_org_rivervalley_SampleProject_DBOne")]
    [DataContract]
    public class SampleSimpleClass : Model<SampleSimpleClass>, IRockEntity
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

        [NotMapped]
        [DataMember]
        public virtual decimal? calcValue
        {
            get
            {
                decimal value = Quantity * Amount;
                return value;
            }
            private set { }
        }

        #endregion

        public partial class SampleSimpleClassConfiguration : EntityTypeConfiguration<SampleSimpleClass>
        {
            public SampleSimpleClassConfiguration()
            {
                this.HasEntitySetName("SampleSimpleClass");
            }
        }

    }
}
