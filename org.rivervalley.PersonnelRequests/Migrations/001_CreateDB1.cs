using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.PersonnelRequests.Migrations
{
    [MigrationNumber(1, "1.0.8")]

    public class CreateDB1 : Migration
    {
           // Fields added after migration
        public override void Up()
        {
            Sql(@"
            CREATE TABLE [dbo].[_org_rivervalley_PersonnelRequest](
                [Id] [int] IDENTITY(1,1) NOT NULL,
                [RequestDate] [datetime] NULL,            
                [RequestType] [int] NULL,
                [RequestingPersonId] [int] NULL,
                [EmploymentType] [int] NULL,
                [EmploymentStatus] [int] NULL,
                [CandidatePersonId] [int] NULL,
                [CandidateName] [nvarchar](100) NULL,
                [JobTitleValueId] [int] NULL,
                [JobTitleName] [nvarchar](100) NULL,
                [RequestingCampusId] [int] NULL,
                [AttendingCampusId] [int] NULL,
                [ReplacementForPersonId] [int] NULL,
                [CurrentSupervisorPersonId] [int] NULL,
                [ProposedSupervisorPersonId] [int] NULL,
                [DepartmentId] [int] NULL,
                [Hours] [decimal](18,2) NULL,
                [SalaryRange] [nvarchar](100) NULL,
                [Responsibilities] [nvarchar](100) NULL,
                [JobTitleFile] [nvarchar](100) NULL,
                [EndDate] [datetime] NULL,
                [ApprovalStatus] [int] NULL,
                [RequestorSignature] [nvarchar](100) NULL,
                [RequestorSignedDate] [datetime] NULL,
                [ApproverOnePersonId] [int] NULL,
                [ApproverOneSignature] [nvarchar](100) NULL,
                [ApproverOneSignedDate] [datetime] NULL,
                [ApproverTwoPersonId] [int] NULL,
                [ApproverTwoSignature] [nvarchar](100) NULL,
                [ApproverTwoSignedDate] [datetime] NULL,
                [ApproverThreePersonId] [int] NULL,
                [ApproverThreeSignature] [nvarchar](100) NULL,
                [ApproverThreeSignedDate] [datetime] NULL,
                [SundayHours] [decimal](18,2) NULL,
                [MondayHours] [decimal](18,2) NULL,
                [TuesdayHours] [decimal](18,2) NULL,
                [WednesdayHours] [decimal](18,2) NULL,
                [ThursdayHours] [decimal](18,2) NULL,
                [FridayHours] [decimal](18,2) NULL,
                [SaturdayHours] [decimal](18,2) NULL,
                [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_PersonnelRequest] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
            
            ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest] CHECK CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_ModifiedByPersonAliasId]
            
            ");
        }

        public override void Down()
        {
            Sql(@"                
                ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest] DROP CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_CreatedByPersonAliasId]
				ALTER TABLE [dbo].[_org_rivervalley_PersonnelRequest] DROP CONSTRAINT [FK_dbo._org_rivervalley_PersonnelRequest_dbo.PersonAlias_ModifiedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_PersonnelRequest]
            ");


        }
    }
}
