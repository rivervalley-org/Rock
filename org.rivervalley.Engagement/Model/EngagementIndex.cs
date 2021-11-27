using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using Rock;
using Rock.Data;
using Rock.Model;

namespace org.rivervalley.Engagement.Model
{
    [Table( "_org_rivervalley_Engagement_EngagementIndex" )]
    [DataContract]
    public class EngagementIndex : Model<EngagementIndex>, IRockEntity, IOrdered
    {
		#region Entity Properties

		[DataMember]
		public bool IsActive { get; set; }

		[DataMember]
		public string Name { get; set; }

        [DataMember]
        public string Description { get; set; }

        [DataMember]
        public int CategoryId { get; set; }

        [DataMember]
        public int Order { get; set; }

        [DataMember]
        public int? DataViewId { get; set; }

        [DataMember]
        public string SqlQuery { get; set; }

        [DataMember]
        public int ScoreWeight { get; set; }

        [DataMember]
        public bool AllowMultipleCompletions { get; set; }

		#endregion

		#region Virtual Properties

        public virtual string Type
        {
            get { return IsSQL() ? "Sql" : "Data View"; }
        }

		public virtual EngagementCategory Category { get; set; }

        public virtual DataView DataView { get; set; }

        public virtual List<EngagementIndexResult> Results { get; set; }

        #endregion

        #region Methods
        public bool IsSQL()
        {
            // In a perfect world only RockSQL or DataViewId should be populated. NOT both! If both are populated,
            //  then we will always take the SQL query first.
            return SqlQuery.IsNotNullOrWhiteSpace();
        }

        public List<IndexResult> CalculateResults( out string errorMessage )
        {
            RockContext rockContext = new RockContext();
            errorMessage = string.Empty;

            List<IndexResult> results = new List<IndexResult>();

            try
            {
                // execute the sql defining that persona
                if ( IsSQL() )
                {
                    if ( SqlQuery.Contains( "UPDATE" ))
                    {
                        errorMessage = "Invalid SQL: Keyword UPDATE is not allowed.";
                        return null;
                    }
                    else if ( SqlQuery.Contains( "DELETE" ) )
                    {
                        errorMessage = "Invalid SQL: Keyword DELETE is not allowed.";
                        return null;
                    }
                    else if ( !SqlQuery.Contains( "PersonId" ) )
                    {
                        errorMessage = "Invalid SQL: SQL must contain a single select column name of 'PersonId'.";
                        return null;
                    }

                    var sqlResults = rockContext.Database.SqlQuery<int>
                    (
                        SqlQuery
                    ).ToList();

                    // group by person id so that we can get the total number of completions.
                    results = sqlResults.GroupBy( s => s )
                        .Select( g => new IndexResult
                        {
                            PersonId = g.Key,
                            Completions = AllowMultipleCompletions ? g.Count() : 1
                        } )
                        .ToList();

                    return results;
                }
            }
            catch ( Exception )
            {
                errorMessage = "SQL threw exception";
                return null;
            }

            try
            {
                // execute the dataview defining that persona
                if ( DataView != null )
                {
                    try
                    {
                        var errorMessages = new List<string>();
                        var dataViewResults = DataView .GetQuery( null, 120, out errorMessages ).Select( d => d.Id ).ToList();

                        if ( errorMessage.Any() )
                        {
                            errorMessage = errorMessages.AsDelimited( ";" );
                            return null;
                        }

                        results = dataViewResults
                            .Select( d => new IndexResult
                            {
                                PersonId = d,
                                Completions = 1 // data view completions will always be one
                            } )
                            .ToList();

                        return results;
                    }
                    catch ( Exception )
                    {
                        errorMessage = "DataView Error";
                        return null;
                    }
                }
            }
            catch ( Exception )
            {
                errorMessage = "Warning: Dataview threw exception";
                return null;
            }

            errorMessage = "Index is not valid";
            return new List<IndexResult>();
        }

        #endregion

        public class IndexResult
        {
            public int PersonId { get; set; }

            public int Completions { get; set; }
        }
    }

    public partial class EngagementIndexConfiguration : EntityTypeConfiguration<EngagementIndex>
    {
        public EngagementIndexConfiguration()
        {
            this.HasRequired( r => r.Category ).WithMany().HasForeignKey( r => r.CategoryId ).WillCascadeOnDelete( true );

            // IMPORTANT!!
            this.HasEntitySetName( "EngagementScore" );
        }
    }
}
