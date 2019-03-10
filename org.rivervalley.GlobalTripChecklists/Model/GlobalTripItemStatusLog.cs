﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using Rock.Data;
using Rock.Model;
namespace org.rivervalley.GlobalTripChecklists.Model
{
    [Table("_org_rivervalley_GlobalTripItemStatusLog")]
    [DataContract]

    public class GlobalTripItemStatusLog : Model<GlobalTripItemStatusLog>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int TripGroupId { get; set; }

        [DataMember]
        public int TripItemId { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public string ItemStatus { get; set; }

        [DataMember]
        public string ItemDescription { get; set; }

        [DataMember]
        public string ItemValue { get; set; }

        #endregion

        #region Entity Configuration

        public partial class GlobalTripItemStatusLogConfiguration : EntityTypeConfiguration<GlobalTripItemStatusLog>
        {
            public GlobalTripItemStatusLogConfiguration()
            {
                this.HasEntitySetName("GlobalTripItemStatusLog");
            }
        }

        #endregion
    }

}
