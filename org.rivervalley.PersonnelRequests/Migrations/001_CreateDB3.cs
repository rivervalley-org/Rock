using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PersonnelRequests.Migrations
{
    [MigrationNumber(3, "1.0.8")]
    public class CreateEntity3Db : Migration
    {
        public override void Up()
        {
            Sql(@"
                CREATE TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes](
                    [Id] [int] IDENTITY(1,1) NOT NULL,
                    [PersonnelRequestId] [int] NOT NULL,
                    [PersonId] [int] NULL,
                    [Note] [nvarchar](max) NULL,
                    [Guid] [uniqueidentifier] NOT NULL,
                    [CreatedDateTime] [datetime] NULL,
                    [ModifiedDateTime] [datetime] NULL,
                    [CreatedByPersonAliasId] [int] NULL,
                    [ModifiedByPersonAliasId] [int] NULL,
	                [ForeignKey] [nvarchar](50) NULL,
	                [ForeignGuid] [uniqueidentifier] NULL,
                    [ForeignId] [nvarchar](50) NULL,
                 CONSTRAINT [PK_dbo._org_rivervalley_PersonnelRequestNotes] PRIMARY KEY CLUSTERED 
                (
                    [Id] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
                )
                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_ModifiedByPersonAliasId]
                
            ");
        }

        public override void Down()
        {
            Sql(@"
                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes] DROP CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes] DROP CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequestNotes_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_PersonnelRequestNotes]
            ");
        }
    }
}