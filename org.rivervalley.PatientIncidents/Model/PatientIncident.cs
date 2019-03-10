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

namespace org.rivervalley.PatientIncidents.Model
{
    [Table("_org_rivervalley_PatientIncident")]
    [DataContract]

    public class PatientIncident : Model<PatientIncident>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public int? PatientCampusId { get; set; }

        [DataMember]
        public int? AttendingCampusId { get; set; }

        [DataMember]
        public string Location { get; set; }

        [DataMember]
        public string Room { get; set; }

        [DataMember]
        public string Phone { get; set; }

        [DataMember]
        public DateTime DateAdmitted { get; set; }

        [DataMember]
        public string Reason { get; set; }

        [DataMember]
        public string Note { get; set; }

        [DataMember]
        public string ReleaseNote { get; set; }

        [DataMember]
        public DateTime DateReleased { get; set; }

        [DataMember]
        public bool Active { get; set; }

        #endregion

        #region Virtual Properties

        public virtual Campus PatientCampus { get; set; }

        public virtual Campus AttendingCampus { get; set; }

        #endregion

        public partial class PatientIncidentConfiguration : EntityTypeConfiguration<PatientIncident>
        {
            public PatientIncidentConfiguration()
            {
                this.HasOptional(r => r.PatientCampus).WithMany().HasForeignKey(r => r.PatientCampusId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.AttendingCampus).WithMany().HasForeignKey(r => r.AttendingCampusId).WillCascadeOnDelete(false);
                this.HasEntitySetName("PatientIncident");
            }
        }
    }

}
