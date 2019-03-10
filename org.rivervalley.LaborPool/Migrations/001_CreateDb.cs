using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.LaborPool.Migrations
{
    [MigrationNumber(1, "1.0.08")]
    public class CreateDb : Migration
    {
        public override void Up()
        {
            Sql(@"
                CREATE TABLE [dbo].[_org_rivervalley_LaborPool_Transactions](
	            [Id] [int] IDENTITY(1,1) NOT NULL,
	            [PersonId] [int] NULL,
                [AliasPersonId] [int] NULL,
                [Debit] [decimal](18,2) NULL,
                [Credit] [decimal](18,2) NULL,
                [Description] [nvarchar](max) NULL,
                [TransactionDate] [datetime] NULL,
                [Glinfo] [int] NULL,
                [Projcode] [int] NULL,                
                [FundId] [int] NULL,
                [Guid] [uniqueidentifier] NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,                
                CONSTRAINT [PK_dbo._org_rivervalley_LaborPool_Transactions] PRIMARY KEY CLUSTERED 
                ([Id] ASC )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON))

                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions] CHECK CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_CreatedByPersonAliasId]

                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
                REFERENCES [dbo].[PersonAlias] ([Id])

                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions] CHECK CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_ModifiedByPersonAliasId]
            ");

        }

        public override void Down()
        {
            Sql(@"
                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions] DROP CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_LaborPool_Transactions] DROP CONSTRAINT [FK_dbo._org_rivervalley_LaborPool_Transactions_dbo.PersonAlias_CreatedByPersonAliasId]
                DROP TABLE [dbo].[_org_rivervalley_LaborPool_Transactions]
            ");
        }
    }
}
