using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;
using System;

using org.rivervalley.PrayerDates.Data;

using Rock.Data;
using Rock.Model;


namespace org.rivervalley.PrayerDates.Model
{
    [Table("_org_rivervalley_PrayerDates_Detail")]
    [DataContract]
    public class PrayerDatesDetail : Rock.Data.Model<PrayerDatesDetail>, Rock.Security.ISecured
    {
        #region Entity Properties

        [DataMember]
        public int PersonId { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public string Type { get; set; }

        [DataMember]
        public string Names { get; set; }

        [DataMember]
        public DateTime DatePrayedFor { get; set; }

        [DataMember]
        public int? CampusId { get; set; }

        #endregion

        #region Virtual Properties

        public virtual Campus Campus { get; set; }

        #endregion
    }

    #region Entity Configuration

    public partial class PrayerDatesDetailConfiguration : EntityTypeConfiguration<PrayerDatesDetail>
    {
        public PrayerDatesDetailConfiguration()
        {
            this.HasOptional(r => r.Campus).WithMany().HasForeignKey(r => r.CampusId).WillCascadeOnDelete(false);
        }
    }

#endregion
}
