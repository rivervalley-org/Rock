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
    [Table("_org_rivervalley_PersonnelRequestNotes")]
    [DataContract]

    public class PersonnelRequestNote : Model<PersonnelRequestNote>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int PersonnelRequestId { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public string Note { get; set; }

        #endregion


        #region Entity Configuration

        public partial class PersonnelRequestNoteConfiguration : EntityTypeConfiguration<PersonnelRequestNote>
        {
            public PersonnelRequestNoteConfiguration()
            {
                this.HasEntitySetName("PersonnelRequestNote");
            }
        }

        #endregion
    }
}
