using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.GlobalTripChecklists.Migrations
{
    [MigrationNumber(4, "1.0.8")]
    public class CreateDB04 : Migration
    {
        public override void Up()
        {
            Sql(@"
            CREATE TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog](
                [Id] [int] IDENTITY(1,1) NOT NULL,
                [TripGroupId] [int] NULL,
                [TripItemId] [int] NULL,
                [PersonAliasId] [int] NULL,
                [EmailSent] [nvarchar](100) NULL,
                [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_GlobalTripItemEmailLog] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
            
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_ModifiedByPersonAliasId]

            ");
        }

        public override void Down()
        {
            Sql(@"                
                ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog] DROP CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_CreatedByPersonAliasId]
				ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog] DROP CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemEmailLog_dbo.PersonAlias_ModifiedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_GlobalTripItemEmailLog]
            ");


        }
    }
}
