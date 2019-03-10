using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PastorOnCall.Migrations
{
    [MigrationNumber(1, "1.0.8")]
    public class CreateDB01 : Migration
    {
        public override void Up()
        {
            Sql(@"
            CREATE TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule](
                [Id] [int] IDENTITY(1,1) NOT NULL,
                [GroupId] [int] NULL,
                [PersonId] [int] NULL,
                [PersonAliasId] [int] NULL,
                [SMSNumber] [nvarchar](100) NULL,
				[DateScheduled] [datetime] NULL,
				[CampusId] [int] NULL,
                [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_PastorOnCallSchedule] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
            
            ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_ModifiedByPersonAliasId]
			
			ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.Campus_CampusId] FOREIGN KEY([CampusId])
            REFERENCES [dbo].[Campus] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.Campus_CampusId]

            ");
        }

        public override void Down()
        {
            Sql(@"                
                ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule] DROP CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_CreatedByPersonAliasId]
				ALTER TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule] DROP CONSTRAINT [FK_dbo._org_rivervalley_PastorOnCallSchedule_dbo.PersonAlias_ModifiedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_PastorOnCallSchedule]
            ");


        }
    }
}
