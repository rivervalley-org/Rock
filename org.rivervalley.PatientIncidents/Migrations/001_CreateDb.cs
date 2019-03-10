using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PatientIncidents.Migrations
{
    [MigrationNumber(1, "1.0.8")]
    public class CreateEntity1Db : Migration
    {
        // Active field added after database created - not in this migration
        public override void Up()
        {
            Sql(@"
                CREATE TABLE [dbo].[_org_rivervalley_PatientIncident](
                    [Id] [int] IDENTITY(1,1) NOT NULL,
                    [PersonId] [int] NULL,
                    [AliasPersonId] [int] NULL,   
                    [PatientCampusId] [int] NULL,
                    [AttendingCampusId] [int] NULL,     
                    [Location] [nvarchar](100) NOT NULL,                 
                    [Room] [nvarchar](50) NULL,
                    [Phone] [nvarchar](50) NULL,
                    [Reason] [nvarchar](max) NULL,
                    [DateAdmitted] [datetime] NULL,
                    [Note] [nvarchar](max) NULL,
                    [ReleaseNote] [nvarchar](max) NULL,
                    [DateReleased] [datetime] NULL,                                        
                    [Guid] [uniqueidentifier] NOT NULL,
                    [CreatedDateTime] [datetime] NULL,
                    [ModifiedDateTime] [datetime] NULL,
                    [CreatedByPersonAliasId] [int] NULL,
                    [ModifiedByPersonAliasId] [int] NULL,
	                [ForeignKey] [nvarchar](50) NULL,
	                [ForeignGuid] [uniqueidentifier] NULL,
                    [ForeignId] [nvarchar](50) NULL,
                 CONSTRAINT [PK_dbo._org_rivervalley_PatientIncident] PRIMARY KEY CLUSTERED 
                (
                    [Id] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
                )
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_ModifiedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_PatientCampusId] FOREIGN KEY([PatientCampusId])
                REFERENCES [dbo].[Campus] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_PatientCampusId]

                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_AttendingCampusId] FOREIGN KEY([AttendingCampusId])
                REFERENCES [dbo].[Campus] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_AttendingCampusId]


            ");
        }

        public override void Down()
        {
            Sql(@"
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_PatientCampusId]
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.Campus_AttendingCampusId]
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_PatientIncident] DROP CONSTRAINT [FK_dbo._org_rivervalley_PatientIncident_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_PatientIncident]
            ");
        }
    }
}