using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.JobOffers.Migrations
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
            CREATE TABLE [dbo].[_org_rivervalley_JobOffer_Details](
	            [Id] [int] IDENTITY(1,1) NOT NULL,
                [PersonId] [int] NULL,
                [AliasPersonId] [int] NULL,
	            [Title] [nvarchar](100) NULL,
                [JobTitleValueId] [int] NULL,                
                [CampusId] [int] NULL,
                [EmploymentStatusValueId] [int] NULL,
                [OfferDate] [datetime] NULL,
                [EffectiveDate] [datetime] NULL,
                [IsPastor] [bit] NULL,
                [DepartmentValueId] [int] NULL,
                [WeeklyHours] [decimal](18,2) NULL,
                [HourlyRate] [decimal](18,2) NULL,
                [BaseSalary] [decimal](18,2) NULL,
                [HousingAllowance] [decimal](18,2) NULL,
                [SocialSecurityGrossUp] [decimal](18,2) NULL,
                [TenureDate] [datetime] NULL,
                [MedicalPlanValueId] [int] NULL,
                [DentalPlanValueId] [int] NULL,
                [MedicalEmployerPremium] [decimal](18,2) NULL,
                [MedicalEmployeePremium] [decimal](18,2) NULL,
                [DentalEmployerPremium] [decimal](18,2) NULL,
                [DentalEmployeePremium] [decimal](18,2) NULL,
                [LifeInsuranceEmployerPremium] [decimal](18,2) NULL,
                [DisabilityEmployerPremium] [decimal](18,2) NULL,
                [MedicalReimbursement] [decimal](18,2) NULL,
                [HSAContribution] [decimal](18,2) NULL,
                [WorkersCompRate] [decimal](18,2) NULL,
                [WorkersCompPremium] [decimal](18,2) NULL,
                [RetirementEmployerPercentage] [decimal](18,2) NULL,
                [RetirementEmployerAmount] [decimal](18,2) NULL,
                [MileageReimbursement] [decimal](18,2) NULL,
                [CellPhoneReimbursement] [decimal](18,2) NULL,
                [Wellness] [decimal](18,2) NULL,
                [ContinuingEducation] [decimal](18,2) NULL,
                [OtherBenefits] [decimal](18,2) NULL,
                [EmployerPayrollTax] [decimal](18,2) NULL,
                [VacationDaysRate] [decimal](18,2) NULL,
                [VacationDaysAnnual] [decimal](18,2) NULL,
                [SickDays] [decimal](18,2) NULL,
                [JobOfferStatusValueId] [int] NULL,
                [Active] [bit] NULL,
                [Comments] [nvarchar](max) NULL,
                [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_JobOffer_Details] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
    
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.Campus_CampusId] FOREIGN KEY([CampusId])
            REFERENCES [dbo].[Campus] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.Campus_CampusId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobTitleValueId] FOREIGN KEY([JobTitleValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobTitleValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_EmploymentStatusValueId] FOREIGN KEY([EmploymentStatusValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_EmploymentStatusValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DepartmentValueId] FOREIGN KEY([DepartmentValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DepartmentValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_MedicalPlanValueId] FOREIGN KEY([MedicalPlanValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_MedicalPlanValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DentalPlanValueId] FOREIGN KEY([DentalPlanValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DentalPlanValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobOfferStatusValueId] FOREIGN KEY([JobOfferStatusValueId])
            REFERENCES [dbo].[DefinedValue] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobOfferStatusValueId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] CHECK CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_ModifiedByPersonAliasId]

            -- Foreign Key added after the fact for RetireEmplPercentageValue

        ");

        }

        /// <summary>
        /// The commands to undo a migration from a specific version
        /// </summary>
        public override void Down()
        {
            Sql(@"                
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.Campus_CampusId]
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobTitleValueId]
				ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_EmploymentStatusValueId]
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DepartmentValueId]
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_MedicalPlanValueId]
				ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_DentalPlanValueId]
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.DefinedValue_JobOfferStatusValueId]				
                ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_CreatedByPersonAliasId]
				ALTER TABLE [dbo].[_org_rivervalley_JobOffer_Details] DROP CONSTRAINT [FK_dbo._org_rivervalley_JobOffer_Details_dbo.PersonAlias_ModifiedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_JobOffer_Details]
            ");
        }
    }
}

