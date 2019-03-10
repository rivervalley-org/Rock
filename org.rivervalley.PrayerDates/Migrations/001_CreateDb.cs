using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PrayerDates.Migrations
{
    [MigrationNumber(1, "1.0.8")]
    public class CreateDb : Migration
    {
        /// <summary>
        /// The commands to run to migrate plugin to the specific version
        /// </summary>
        public override void Up()
        {
            Sql(@"
            CREATE TABLE [dbo].[_org_rivervalley_PrayerDates_Detail](
	            [Id] [int] IDENTITY(1,1) NOT NULL,
                [PersonId] [int] NULL,
                [AliasPersonId] [int] NULL,
	            [Type] [varchar](100) NULL,
	            [Names] [varchar](max) NULL,
                [DatePrayedFor] [datetime] NULL,
                [CampusId] [int] NULL,
	            [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_PrayerDates_Detail] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
    
            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.Campus_CampusId] FOREIGN KEY([CampusId])
            REFERENCES [dbo].[Campus] ([Id])

            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.Campus_CampusId]

            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])

            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])

            ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_ModifiedByPersonAliasId]
        ");

        }

        /// <summary>
        /// The commands to undo a migration from a specific version
        /// </summary>
        public override void Down()
        {
            Sql(@"
    ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] DROP CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_ModifiedByPersonAliasId]
    ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] DROP CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.PersonAlias_CreatedByPersonAliasId]
    ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] DROP CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.Campus_CampusId]
    ALTER TABLE [dbo].[_org_rivervalley_PrayerDates_Detail] DROP CONSTRAINT [FK_dbo._org_rivervalley_PrayerDates_Detail_dbo.DefinedValue_DetailTypeValueId]
    DROP TABLE [dbo].[_org_rivervalley_PrayerDates_Detail]
");
        }
    }
}
