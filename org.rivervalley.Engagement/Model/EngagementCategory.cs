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
    [Table( "_org_rivervalley_Engagement_EngagementIndexCategory" )]
    [DataContract]
    public class EngagementCategory : Model<EngagementCategory>, IRockEntity, IOrdered
    {
		#region Entity Properties

        [DataMember]
        public bool IsActive { get; set; }

		[DataMember]
		public string Name { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public int Weight { get; set; }

        [DataMember]
        public string HtmlColor { get; set; }

        [DataMember]
        public int Order { get; set; }

        #endregion

        #region Virtual Properties

        #endregion

        #region Methods

        public override string ToString()
        {
            return Name;
        }

        #endregion
    }

    public partial class EngagementCategoryConfiguration : EntityTypeConfiguration<EngagementCategory>
    {
        public EngagementCategoryConfiguration()
        {

            // IMPORTANT!!
            this.HasEntitySetName( "EngagementCategory" );
        }
    }
}
