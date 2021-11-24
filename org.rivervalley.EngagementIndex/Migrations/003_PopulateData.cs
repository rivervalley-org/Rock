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
	[MigrationNumber( 3, "1.11.0" )]
	public class PopulateData : Rock.Plugin.Migration
	{
		/// <summary>
		/// Ups this instance.
		/// </summary>
		public override void Up()
		{
			Sql( @"
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory] ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Commmitting', '', 20, '#000000', 0 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Growing', '', 50, '#000000', 1 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Serving', '', 30, '#000000', 2 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Investing', '', 0, '#000000', 3 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Multiplying', '', 35, '#000000', 4 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [Weight], [HtmlColor], [Order])
			VALUES ( 'Going', '', 40, '#000000', 5 )
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
