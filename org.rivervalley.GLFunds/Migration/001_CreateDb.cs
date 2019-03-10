using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.GLFunds.Migrations
{
    [MigrationNumber( 1, "1.0.8" )]
    public class CreateDb : Migration
    {
        public override void Up()
        {
            Sql( @"
                CREATE TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds](
	            [Id] [int] IDENTITY(1,1) NOT NULL,
	            [Company] [varchar](4) NULL,
                [Fund] [varchar](5) NULL,
                [BankAccount] [varchar](9) NULL,
                [RevenueAccount] [varchar](9) NULL,
                [RevenueDepartment] [varchar](3) NULL,
                [ProjectCode] [varchar](3) NULL,
                [FinancialAccountId] [int] NULL,
	            [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
	            [ForeignKey] [int] NULL,
                CONSTRAINT [PK_dbo._org_rivervalley_GLFunds_ExtendedFunds] PRIMARY KEY CLUSTERED 
                ([Id] ASC )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON))

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.FinancialAccount_FinancialAccountId] FOREIGN KEY([FinancialAccountId])
                REFERENCES [dbo].[FinancialAccount] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.FinancialAccount_FinancialAccountId]

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_ModifiedByPersonAliasId]
            " );

        }

        public override void Down()
        {
            Sql( @"
                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds] DROP CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds] DROP CONSTRAINT [FK_dbo._org_rivervalley_GLFunds_ExtendedFunds_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_GLFunds_ExtendedFunds]
            " );
        }
    }
}
