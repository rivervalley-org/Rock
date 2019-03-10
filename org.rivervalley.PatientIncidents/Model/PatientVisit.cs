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
    [Table("_org_rivervalley_PatientVisit")]
    [DataContract]

    public class PatientVisit : Model<PatientVisit>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int PatientIncidentId { get; set; }

        [DataMember]
        public int VisitingPersonAliasId { get; set; }

        [DataMember]
        public DateTime DateVisited { get; set; }

        [DataMember]
        public string Note { get; set; }

        [DataMember]
        public int Length { get; set; }

        #endregion

        public partial class PatientVisitConfiguration : EntityTypeConfiguration<PatientVisit>
        {
            public PatientVisitConfiguration()
            {
                this.HasEntitySetName("PatientVisit");
            }
        }
    }

}
