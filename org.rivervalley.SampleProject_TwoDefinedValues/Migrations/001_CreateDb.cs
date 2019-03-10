using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.SampleProject_TwoDefinedValues.Migrations
{
    [MigrationNumber(1, "1.0.8")]
    public class CreateDb : Migration
    {
        public override void Up()
        {
            Sql(@"
                CREATE TABLE [dbo].[_org_rivervalley_SampleProject_DBFour](
                    [Id] [int] IDENTITY(1,1) NOT NULL,
                    [Name] [nvarchar](100) NOT NULL,
                    [HRJobTitleValueId] [int] NULL,
                    [HRMedicalPlanValueId] [int] NULL,
                    [HRDentalPlanValueId] [int] NULL,
                    [Guid] [uniqueidentifier] NOT NULL,
                    [CreatedDateTime] [datetime] NULL,
                    [ModifiedDateTime] [datetime] NULL,
                    [CreatedByPersonAliasId] [int] NULL,
                    [ModifiedByPersonAliasId] [int] NULL,
	                [ForeignKey] [nvarchar](50) NULL,
	                [ForeignGuid] [uniqueidentifier] NULL,
                    [ForeignId] [nvarchar](50) NULL,
                 CONSTRAINT [PK_dbo._org_rivervalley_SampleProject_DBFour] PRIMARY KEY CLUSTERED 
                (
                    [Id] ASC
                )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
                )
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] CHECK CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] CHECK CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_ModifiedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRJobTitleValueId] FOREIGN KEY([HRJobTitleValueId])
                REFERENCES [dbo].[DefinedValue] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] CHECK CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRJobTitleValueId]

                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRMedicalPlanValueId] FOREIGN KEY([HRMedicalPlanValueId])
                REFERENCES [dbo].[DefinedValue] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] CHECK CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRMedicalPlanValueId]

                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRDentalPlanValueId] FOREIGN KEY([HRDentalPlanValueId])
                REFERENCES [dbo].[DefinedValue] ([Id])
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] CHECK CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRDentalPlanValueId]

            ");
        }

        public override void Down()
        {
            Sql(@"
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] DROP CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRJobTitleValueId]
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] DROP CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRMedicalPlanValueId]
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] DROP CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.DefinedValue_HRDentalPlanValueId]
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] DROP CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_SampleProject_DBFour] DROP CONSTRAINT [FK_dbo._org_rivervalley_SampleProject_DBFour_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_SampleProject_DBFour]
            ");
        }
    }
}