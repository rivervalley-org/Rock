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
namespace org.rivervalley.SampleProject_TwoDefinedValues.Model
{
    [Table("_org_rivervalley_SampleProject_DBFour")]
    [DataContract]
    public class SampleTwoDefinedValuesClass : Model<SampleTwoDefinedValuesClass>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public int? HRJobTitleValueId { get; set; }

        [DataMember]
        public int? HRMedicalPlanValueId { get; set; }

        [DataMember]
        public int? HRDentalPlanValueId { get; set; }

        #endregion

        #region Virtual Properties

        [LavaInclude]
        public virtual DefinedValue HRJobTitleValue { get; set; }

        [LavaInclude]
        public virtual DefinedValue HRMedicalPlanValue { get; set; }

        [LavaInclude]
        public virtual DefinedValue HRDentalPlanValue { get; set; }
        #endregion

        public partial class SampleDefinedValueClassConfiguration : EntityTypeConfiguration<SampleTwoDefinedValuesClass>
        {
            public SampleDefinedValueClassConfiguration()
            {
                this.HasOptional(r => r.HRJobTitleValue).WithMany().HasForeignKey(p => p.HRJobTitleValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.HRMedicalPlanValue).WithMany().HasForeignKey(p => p.HRMedicalPlanValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.HRDentalPlanValue).WithMany().HasForeignKey(p => p.HRDentalPlanValueId).WillCascadeOnDelete(false);
                this.HasEntitySetName("SampleTwoDefinedValuesClass");
            }
        }
    }
}
