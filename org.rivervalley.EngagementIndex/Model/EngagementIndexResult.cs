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

namespace org.rivervalley.Engagement.Model
{
    [Table( "_org_rivervalley_Engagement_EngagementIndexResult" )]
    [DataContract]
    public class EngagementIndexResult : Model<EngagementIndexResult>, IRockEntity
    {
		#region Entity Properties

		[DataMember]
		public int Id { get; set; }

		[DataMember]
		public DateTime RunDate { get; set; }

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public int EngagementIndexId { get; set; }

        [DataMember]
        public int Completions { get; set; }

		#endregion

		#region Virtual Properties

		public virtual PersonAlias PersonAlias { get; set; }

        public virtual EngagementIndex EngagementIndex { get; set; }

        public int Score { get
            {
                return Completions * EngagementIndex.ScoreWeight;
            }
        }

        #endregion  
    }

    public partial class EngagementIndexResultConfiguration : EntityTypeConfiguration<EngagementIndexResult>
    {
        public EngagementIndexResultConfiguration()
        {
            this.HasRequired( r => r.PersonAlias ).WithMany().HasForeignKey( r => r.PersonAliasId ).WillCascadeOnDelete( false );

            // IMPORTANT!!
            this.HasEntitySetName( "EngagementIndexResult" );
        }
    }
}
