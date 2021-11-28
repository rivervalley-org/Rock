//
// Copyright (C) Scottsdale Bible Church - All Rights Reserved
//
using org.rivervalley.Engagement.SystemGuids;
using Rock.Plugin;

namespace org.rivervalley.Engagement.Migrations
{
	/// <summary>
	/// 
	/// </summary>
	[MigrationNumber( 2, "1.11.0" )]
	public class Pages : Rock.Plugin.Migration
	{
		/// <summary>
		/// Ups this instance.
		/// </summary>
		public override void Up()
		{
			// Setup Blocks
			RockMigrationHelper.AddBlockType( "Engagement Category List", "A list of engagement categories.", "~/Plugins/org_rivervalley/Engagement/EngagementCategoryList.ascx", "", BlockType.BLOCKTYPE_ENGAGEMENT_CATEGORY_LIST );
			RockMigrationHelper.AddBlockType( "Engagement Category Detail", "Shows the engagement category detail.", "~/Plugins/org_rivervalley/Engagement/EngagementCategoryDetail.ascx", "", BlockType.BLOCKTYPE_ENGAGEMENT_CATEGORY_DETAIL );		
			RockMigrationHelper.AddBlockType( "Engagement Index List", "A list of engagement indices.", "~/Plugins/org_rivervalley/Engagement/EngagementIndexList.ascx", "", BlockType.BLOCKTYPE_ENGAGEMENT_INDEX_LIST );
			RockMigrationHelper.AddBlockType( "Engagement Index Detail", "Shows the engagement index detail.", "~/Plugins/org_rivervalley/Engagement/EngagementIndexDetail.ascx", "", BlockType.BLOCKTYPE_ENGAGEMENT_INDEX_DETAIL );

			// Setup Pages
			RockMigrationHelper.AddPage( "5B6DBC42-8B03-4D15-8D92-AAFA28FD8616", Rock.SystemGuid.Layout.FULL_WIDTH_INTERNAL_SITE, "Engagement", "", Page.PAGE_ENGAGEMENT, "fa fa-list-ul", "" );
			RockMigrationHelper.AddPage( Page.PAGE_ENGAGEMENT, Rock.SystemGuid.Layout.FULL_WIDTH_INTERNAL_SITE, "Engagement Category Detail", "", Page.PAGE_ENGAGEMENT_CATEGORY_DETAIL, "", "" );
			RockMigrationHelper.AddPage( Page.PAGE_ENGAGEMENT_CATEGORY_DETAIL, Rock.SystemGuid.Layout.FULL_WIDTH_INTERNAL_SITE, "Engagement Index Detail", "", Page.PAGE_ENGAGEMENT_INDEX_DETAIL, "", "" );

			// Setup Blocks
			RockMigrationHelper.AddBlock( Page.PAGE_ENGAGEMENT, "", BlockType.BLOCKTYPE_ENGAGEMENT_CATEGORY_LIST, "Engagement Category List", "Main", "", "", 0, Block.BLOCK_CATEGORY_LIST );
			RockMigrationHelper.UpdateBlockTypeAttribute( BlockType.BLOCKTYPE_ENGAGEMENT_CATEGORY_LIST, Rock.SystemGuid.FieldType.PAGE_REFERENCE, "Detail Page", "DetailPage", "", "", 0, "", BlockTypeAttribute.BLOCKTYPEATTRIBUTE_LINKEDPAGE_CATEGORY );
			RockMigrationHelper.AddBlockAttributeValue( Block.BLOCK_CATEGORY_LIST, BlockTypeAttribute.BLOCKTYPEATTRIBUTE_LINKEDPAGE_CATEGORY, Page.PAGE_ENGAGEMENT_CATEGORY_DETAIL );
			
			RockMigrationHelper.AddBlock( Page.PAGE_ENGAGEMENT_CATEGORY_DETAIL, "", BlockType.BLOCKTYPE_ENGAGEMENT_CATEGORY_DETAIL, "Engagement Category Detail", "Main", "", "", 0, Block.BLOCK_CATEGORY_DETAIL );
						
			RockMigrationHelper.AddBlock( Page.PAGE_ENGAGEMENT_CATEGORY_DETAIL, "", BlockType.BLOCKTYPE_ENGAGEMENT_INDEX_LIST, "Engagement Index List", "Main", "", "", 1, Block.BLOCK_INDEX_LIST );
			RockMigrationHelper.UpdateBlockTypeAttribute( BlockType.BLOCKTYPE_ENGAGEMENT_INDEX_LIST, Rock.SystemGuid.FieldType.PAGE_REFERENCE, "Detail Page", "DetailPage", "", "", 0, "", BlockTypeAttribute.BLOCKTYPEATTRIBUTE_LINKEDPAGE_INDEX );
			RockMigrationHelper.AddBlockAttributeValue( Block.BLOCK_INDEX_LIST, BlockTypeAttribute.BLOCKTYPEATTRIBUTE_LINKEDPAGE_INDEX, Page.PAGE_ENGAGEMENT_INDEX_DETAIL );

			RockMigrationHelper.AddBlock( Page.PAGE_ENGAGEMENT_INDEX_DETAIL, "", BlockType.BLOCKTYPE_ENGAGEMENT_INDEX_DETAIL, "Engagement Index Detail", "Main", "", "", 0, Block.BLOCK_INDEX_DETAIL );

			// Setup Job
			Sql( $@"
                INSERT INTO [ServiceJob] (
                     [IsSystem]
                    ,[IsActive]
                    ,[Name]
                    ,[Description]
                    ,[Class]
                    ,[CronExpression]
                    ,[NotificationStatus]
                    ,[Guid]
                ) VALUES (
                     0
                    ,0
                    ,'Calculate Engagement'
                    ,'This job calculates engagement indices.'
                    ,'org.rivervalley.Engagement.Jobs.CalculateEngagement'
                    ,'0 0 12 1 1/1 ? *'
                    ,1
                    ,NEWID()
                );" );
		}

		/// <summary>
		/// Downs this instance.
		/// </summary>
		public override void Down()
		{

		}
	}
}
