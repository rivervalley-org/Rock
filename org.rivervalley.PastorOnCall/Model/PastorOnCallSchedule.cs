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
namespace org.rivervalley.PastorOnCall.Model
{
    [Table("_org_rivervalley_PastorOnCallSchedule")]
    [DataContract]

    public class PastorOnCallSchedule : Model<PastorOnCallSchedule>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int GroupId { get; set; }

        [DataMember]
        public int PersonId { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public string SMSNumber { get; set; }

        [DataMember]
        public DateTime DateScheduled { get; set; }

        [DataMember]
        public int? CampusId { get; set; }

        #endregion

        #region Virtual Properties

        public virtual Campus Campus { get; set; }

        #endregion

        #region Entity Configuration

        public partial class PastorOnCallScheduleConfiguration : EntityTypeConfiguration<PastorOnCallSchedule>
        {
            public PastorOnCallScheduleConfiguration()
            {
                this.HasEntitySetName("PastorOnCallSchedule");
                this.HasOptional(r => r.Campus).WithMany().HasForeignKey(r => r.CampusId).WillCascadeOnDelete(false);
            }
        }

        #endregion
    }

}
