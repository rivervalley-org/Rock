using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Rock.Plugin;

namespace org.rivervalley.GlobalTripChecklists.Migrations
{
    [MigrationNumber(2, "1.0.8")]
    public class CreateDB02 : Migration
    {
        public override void Up()
        {
            Sql(@"
            CREATE TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus](
                [Id] [int] IDENTITY(1,1) NOT NULL,
                [TripGroupId] [int] NULL,
                [TripItemId] [int] NULL,
                [PersonId] [int] NULL,
                [ItemStatus] [bit] NULL,
                [Guid] [uniqueidentifier] NOT NULL,
	            [CreatedDateTime] [datetime] NULL,
	            [ModifiedDateTime] [datetime] NULL,
	            [CreatedByPersonAliasId] [int] NULL,
	            [ModifiedByPersonAliasId] [int] NULL,
	            [ForeignId] [int] NULL,                
	            [ForeignKey] [nvarchar](50) NULL,
                [ForeignGuid] [uniqueidentifier] NULL,
            CONSTRAINT [PK_dbo._org_rivervalley_GlobalTripItemStatus] PRIMARY KEY CLUSTERED 
            (
	            [Id] ASC
            )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
            )
            
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_CreatedByPersonAliasId] FOREIGN KEY([CreatedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_CreatedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_ModifiedByPersonAliasId] FOREIGN KEY([ModifiedByPersonAliasId])
            REFERENCES [dbo].[PersonAlias] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_ModifiedByPersonAliasId]

            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus]  WITH CHECK ADD  CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.Person_PersonId] FOREIGN KEY([PersonId])
            REFERENCES [dbo].[Person] ([Id])
            ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] CHECK CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.Person_PersonId]            
            
            ");
        }

        public override void Down()
        {
            Sql(@"                
                ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] DROP CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_CreatedByPersonAliasId]
				ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] DROP CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.PersonAlias_ModifiedByPersonAliasId]
                ALTER TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus] DROP CONSTRAINT [FK_dbo._org_rivervalley_GlobalTripItemStatus_dbo.Person_PersonId]
                DROP TABLE [dbo].[_org_rivervalley_GlobalTripItemStatus]
            ");


        }
    }
}
