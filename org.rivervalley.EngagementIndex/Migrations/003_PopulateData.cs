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
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory] ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Commmitting', '', '#000000', 0 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Growing', '', '#000000', 1 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Serving', '', '#000000', 2 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Investing', '', '#000000', 3 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Multiplying', '', '#000000', 4 )
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory]  ([Name], [Description], [HtmlColor], [Order])
			VALUES ( 'Going', '', '#000000', 5 )
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
