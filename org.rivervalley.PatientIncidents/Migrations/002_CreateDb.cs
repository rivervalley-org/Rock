using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PatientIncidents.Migrations
{
    [MigrationNumber(2, "1.0.8")]
    public class CreateEntity2Db : Migration
    {
        public override void Up()
        {
            Sql(@"
                CREATE TABLE [dbo].[_org_rivervalley_PatientVisit](
                    [Id] [int] IDENTITY(1,1) NOT NULL,
                    [PatientIncidentId] [int] NOT NULL,
                    [VisitingPersonId] [int] NULL,   
                    [DateVisited] [datetime] NULL,
                    [Note] [nvarchar](max) NULL,
                    [Length] [nvarchar](50) NULL,                    
                    [Guid] [uniqueidentifier] NOT NULL,
                    [CreatedDateTime] [datetime] NULL,
                    [ModifiedDateTime] [datetime] NULL,
                    [CreatedByPersonAliasId] [int] NULL,
                    [ModifiedByPersonAliasId] [int] NULL,
	                [ForeignKey] [nvarchar](50) NULL,
	                [ForeignGuid] [uniqueidentifier] NULL,
                    [ForeignId] [nvarchar](50) NULL,
                 CONSTRAINT [PK_dbo._org_rivervalley_PatientVisit] PRIMARY KEY CLUSTERED 
                (
                    [Id] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
                )
                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_ModifiedByPersonAliasId]
                
            ");
        }

        public override void Down()
        {
            Sql(@"
                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_PatientVisit] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientVisit_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_PatientVisit]
            ");
        }
    }
}