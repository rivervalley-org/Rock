using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using Rock.Data;
using Rock.Lava;
using Rock.Model;

namespace org.rivervalley.SampleProject_DefinedValue.Model
{
    [Table("_org_rivervalley_SampleProject_DBThree")]
    [DataContract]
    public class SampleDefinedValueClass : Model<SampleDefinedValueClass>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public int? HRCodeValueId { get; set; }

        #endregion

        #region Virtual Properties

        [LavaVisible]
        public virtual DefinedValue HRCodeValue { get; set; }

        #endregion

        public partial class SampleDefinedValueClassConfiguration : EntityTypeConfiguration<SampleDefinedValueClass>
        {
            public SampleDefinedValueClassConfiguration()
            {
                this.HasOptional(r => r.HRCodeValue).WithMany().HasForeignKey(p => p.HRCodeValueId).WillCascadeOnDelete(false);
                this.HasEntitySetName("SampleDefinedValueClass");
            }
        }
    }
}
