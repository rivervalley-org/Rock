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

namespace org.rivervalley.PersonnelRequests.Model
{
    [Table("_org_rivervalley_PersonnelRequestAllocations")]
    [DataContract]

    public class PersonnelRequestAllocation : Model<PersonnelRequestAllocation>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int PersonnelRequestId { get; set; }

        [DataMember]
        public int CampusId { get; set; }

        [DataMember]
        public decimal Allocation { get; set; }

        #endregion


        #region Entity Configuration

        public partial class PersonnelRequestAllocationConfiguration : EntityTypeConfiguration<PersonnelRequestAllocation>
        {
            public PersonnelRequestAllocationConfiguration()
            {
                this.HasEntitySetName("PersonnelRequestAllocation");
            }
        }

        #endregion
    }
}
