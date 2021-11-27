//
// Copyright (C) Scottsdale Bible Church - All Rights Reserved
//
using Rock.Plugin;

namespace org.rivervalley.Engagement.Migrations
{
	/// <summary>
	/// 
	/// </summary>
	[MigrationNumber( 1, "1.11.0" )]
	public class CreateTables : Rock.Plugin.Migration
	{
		/// <summary>
		/// Ups this instance.
		/// </summary>
		public override void Up()
		{
			Sql( @"
			CREATE TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory](
				[Id] [int] IDENTITY(1,1) NOT NULL,
				[Name] [varchar](100) NOT NULL,
				[Description] [varchar](max) NULL,
				[Weight] [int] NOT NULL,
				[HtmlColor] [varchar](100) NULL,
				[Order] [int] NOT NULL,
				[CreatedDateTime] [datetime],
				[ModifiedDateTime] [datetime],
				[CreatedByPersonAliasId] [int],
				[ModifiedByPersonAliasId] [int],
				[Guid] uniqueidentifier not null DEFAULT NEWID(),
				[ForeignKey] nvarchar(100) null,
				[ForeignGuid] uniqueidentifier null,
				[ForeignId] uniqueidentifier null,
			 CONSTRAINT [PK__org_rivervalley_Engagement_EngagementIndexCategory] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
			) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

			CREATE UNIQUE INDEX [IX_Guid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory]([Guid])
			CREATE INDEX [IX_CreatedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory]([CreatedByPersonAliasId])
			CREATE INDEX [IX_ModifiedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory]([ModifiedByPersonAliasId])
			CREATE INDEX [IX_ForeignKey] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory] (ForeignKey)
			CREATE INDEX [IX_ForeignId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory] (ForeignId)
			CREATE INDEX [IX_ForeignGuid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory] (ForeignGuid)

			CREATE TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndex](
				[Id] [int] IDENTITY(1,1) NOT NULL,
				[Name] [varchar](100) NOT NULL,
				[Description] [varchar](max) NULL,
				[CategoryId] [int] NOT NULL,
				[Order] [int] NOT NULL,
				[DataViewId] [int] NULL,
				[SqlQuery] [varchar](max) NULL,
				[ScoreWeight] [int] NOT NULL,
				[AllowMultipleCompletions] [bit] NOT NULL,
				[CreatedDateTime] [datetime],
				[ModifiedDateTime] [datetime],
				[CreatedByPersonAliasId] [int],
				[ModifiedByPersonAliasId] [int],
				[Guid] uniqueidentifier not null DEFAULT NEWID(),
				[ForeignKey] nvarchar(100) null,
				[ForeignGuid] uniqueidentifier null,
				[ForeignId] uniqueidentifier null,
			 CONSTRAINT [PK__org_rivervalley_Engagement_EngagementIndex] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
			) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

			CREATE UNIQUE INDEX [IX_Guid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex]([Guid])
			CREATE INDEX [IX_CreatedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex]([CreatedByPersonAliasId])
			CREATE INDEX [IX_ModifiedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex]([ModifiedByPersonAliasId])
			CREATE INDEX [IX_ForeignKey] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex] (ForeignKey)
			CREATE INDEX [IX_ForeignId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex] (ForeignId)
			CREATE INDEX [IX_ForeignGuid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndex] (ForeignGuid)

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndex]  WITH CHECK ADD  CONSTRAINT [FK_dbo.EngagementIndex_dbo.EngagementIndexCategory_CategoryId] FOREIGN KEY([CategoryId])
			REFERENCES [dbo].[_org_rivervalley_Engagement_EngagementIndexCategory] ([Id])
			ON DELETE CASCADE

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndex] CHECK CONSTRAINT [FK_dbo.EngagementIndex_dbo.EngagementIndexCategory_CategoryId]

			CREATE TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexResult](
				[Id] [int] IDENTITY(1,1) NOT NULL,
				[RunDate] [date] NOT NULL,
				[PersonAliasId] [int] NOT NULL,
				[EngagementIndexId] [int] NOT NULL,
				[Completions] [int] NOT NULL,
				[CreatedDateTime] [datetime],
				[ModifiedDateTime] [datetime],
				[CreatedByPersonAliasId] [int],
				[ModifiedByPersonAliasId] [int],
				[Guid] uniqueidentifier not null DEFAULT NEWID(),
				[ForeignKey] nvarchar(100) null,
				[ForeignGuid] uniqueidentifier null,
				[ForeignId] uniqueidentifier null,
			 CONSTRAINT [PK__org_rivervalley_Engagement_EngagementIndexResult] PRIMARY KEY CLUSTERED 
			(
				[Id] ASC
			)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
			) ON [PRIMARY]

			CREATE UNIQUE INDEX [IX_Guid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult]([Guid])
			CREATE INDEX [IX_CreatedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult]([CreatedByPersonAliasId])
			CREATE INDEX [IX_ModifiedByPersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult]([ModifiedByPersonAliasId])
			CREATE INDEX [IX_ForeignKey] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] (ForeignKey)
			CREATE INDEX [IX_ForeignId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] (ForeignId)
			CREATE INDEX [IX_ForeignGuid] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] (ForeignGuid)
			CREATE INDEX [IX_RunDate] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] (RunDate)
			CREATE INDEX [IX_PersonAliasId] ON [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] (PersonAliasId)

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexResult]  WITH CHECK ADD  CONSTRAINT [FK_dbo.EngagementIndexResult_dbo.EngagementIndex_EngagementIndexId] FOREIGN KEY([EngagementIndexId])
			REFERENCES [dbo].[_org_rivervalley_Engagement_EngagementIndex] ([Id])
			ON DELETE CASCADE

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] CHECK CONSTRAINT [FK_dbo.EngagementIndexResult_dbo.EngagementIndex_EngagementIndexId]

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexResult]  WITH CHECK ADD  CONSTRAINT [FK_dbo.PersonAlias_dbo.EngagementIndex_PersonAliasId] FOREIGN KEY([PersonAliasId])
			REFERENCES [dbo].[PersonAlias] ([Id])
			ON DELETE CASCADE

			ALTER TABLE [dbo].[_org_rivervalley_Engagement_EngagementIndexResult] CHECK CONSTRAINT [FK_dbo.PersonAlias_dbo.EngagementIndex_PersonAliasId]
			" );
		}

		/// <summary>
		/// Downs this instance.
		/// </summary>
		public override void Down()
		{

		}
	}
}
