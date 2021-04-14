using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using Rock.Data;
using Rock.Model;

namespace org.rivervalley.EngagementScores.Model
{
    [Table( "_org_rivervalley_EngagementScores" )]
    [DataContract]
    public class EngagementScore : Model<EngagementScore>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public DateTime SundayDate { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public int Committing_NextCompletion { get; set; }

        [DataMember]
        public int Growing_WaterBaptism { get; set; }

        #endregion

        #region Virtual Properties

        public virtual PersonAlias PersonAlias { get; set; }

        #endregion  
    }

    public partial class EngagementScoreConfiguration : EntityTypeConfiguration<EngagementScore>
    {
        public EngagementScoreConfiguration()
        {
            this.HasRequired( r => r.PersonAlias ).WithMany().HasForeignKey( r => r.PersonAliasId ).WillCascadeOnDelete( false );

            // IMPORTANT!!
            this.HasEntitySetName( "EngagementScore" );
        }
    }
}
