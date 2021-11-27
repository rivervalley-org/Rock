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
			INSERT INTO [_org_rivervalley_Engagement_EngagementIndexCategory] ([Name], [Description], [Weight], [HtmlColor], [Order], [IsActive])
			VALUES 
				 ( 'Commmitting', '', 20, '#000000', 0, 1)
				,( 'Growing', '', 50, '#000000', 1, 1)
				,( 'Serving', '', 30, '#000000', 2, 1)
				,( 'Investing', '', 0, '#000000', 3, 0)
				,( 'Multiplying', '', 35, '#000000', 4, 1)
				,( 'Going', '', 40, '#000000', 5, 1)

			INSERT INTO [_org_rivervalley_Engagement_EngagementIndex] ([CategoryId], [Name], [ScoreWeight], [Description], [Order],[AllowMultipleCompletions], [IsActive])
			VALUES
				 ( 1, 'NEXT Completion', 10, '', 0, 0, 1)
				,( 1, 'Membership', 10, '', 1, 0, 1)

				,( 2, 'Water Baptism', 10, '', 0, 0, 1)
				,( 2, 'Freedom Group', 5, '', 1, 0, 1)
				,( 2, 'Alpha Group', 5, '', 2, 0, 1)
				,( 2, 'Explore Group', 5, '', 3, 0, 1)
				,( 2, 'Overall Life Group Attendance', 1, '', 4, 0, 0)
				,( 2, 'Holy Spirit Retreat AT', 3, '', 5, 0, 1)
				,( 2, 'Holy Spirit Retreat LY', 1, '', 6, 1, 1)
				,( 2, 'Freedom Encounter AT', 3, '', 7, 0, 1)
				,( 2, 'Freedom Encounter LY', 1, '', 8, 1, 1)
				,( 2, 'Gives Life To Christ', 1, '', 9, 0, 1)
				,( 2, 'Child Dedication', 1, '', 10, 0, 1)
				,( 2, 'Milestone Class Child Dedication', 1, '', 10, 0, 1)
				,( 2, 'Milestone Class Water Baptism', 1, '', 12, 0, 1)
				,( 2, 'Milestone Class Commitments To Christ', 1, '', 13, 0, 1)
				,( 2, 'Milestone Class Communion', 1, '', 14, 0, 1)
				,( 2, 'Sparkle Conference', 1, '', 15, 0, 1)
				,( 2, 'Kingdom Builders Banquet', 1, '', 16, 0, 1)
				,( 2, 'Team Leadership Night', 1, '', 17, 0, 1)
				,( 2, 'Sisterhood Night', 1, '', 18, 1, 1)
				,( 2, 'Mens Events', 1, '', 19, 1, 1)
				,( 2, 'Marriage Night', 1, '', 20, 1, 1)
				,( 2, 'Worship Night', 1, '', 21, 1, 1)

				,( 3, 'Serve Team CheckIns', 1, '', 0, 1, 1)
				,( 3, 'Event Serve Teams', 1, '', 1, 1, 1)
				,( 3, 'Serve Day', 2, '', 2, 1, 1)
				,( 3, 'Local Projects', 1, '', 3, 1, 1)
				,( 3, 'Serving In Offices', 1, '', 4, 0, 0)

				,( 5, 'Leading Small Group', 5, '', 0, 1, 1)
				,( 5, 'Leading Serve Team', 10, '', 1, 1, 1)
				,( 5, 'Care Partner', 5, '', 2, 0, 1)
				,( 5, 'Marriage Mentor', 5, '', 3, 0, 1)
				,( 5, 'Coaching Serve Team', 15, '', 4, 0, 1)
				,( 5, 'Small Group Coach', 15, '', 5, 0, 0)
				,( 5, 'Deacon', 5, '', 6, 0, 1)

				,( 6, 'Global Team Member Travelling', 10, '', 0, 1, 1)
				,( 6, 'Global Team Leader Travelling', 20, '', 1, 1, 1)
				,( 6, 'Global Team Member Travelling NR', 2, '', 2, 1, 1)
				,( 6, 'Global Team Member Virtual', 5, '', 3, 1, 1)
				,( 6, 'Global Team Leader Virtual', 7, '', 4, 1, 1)
				,( 6, 'Global Team Member Virtual NR', 1, '', 5, 1, 1)
				,( 6, 'MAP Participant', 5, '', 6, 0, 1)
				,( 6, 'MAP Phase Completion', 5, '', 7, 1, 1)
				,( 6, 'MAP Advocate Initial Registration Approval', 5, '', 8, 0, 1)
				,( 6, 'MAP Coach Assigned', 5, '', 9, 1, 1)
				,( 6, 'MAP Advocate Assigned', 5, '', 10, 0, 1)
				,( 6, 'Interest In GlobalTeams', 1, '', 11, 1, 1)
				,( 6, 'Monthly Missionary Support', 5, '', 12, 0, 0)
				,( 6, 'Individual Support Gift', 1, '', 13, 0, 0)
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
