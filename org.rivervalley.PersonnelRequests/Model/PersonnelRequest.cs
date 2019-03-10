using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using Rock.Data;
using Rock.Model;

namespace org.rivervalley.PersonnelRequests.Model
{
    [Table("_org_rivervalley_PersonnelRequest")]
    [DataContract]

    public class PersonnelRequest : Model<PersonnelRequest>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public DateTime RequestDate { get; set; }

        [DataMember]
        public int RequestType { get; set; }

        [DataMember]
        public int RequestingPersonAliasId { get; set; }

        [DataMember]
        public int EmploymentType { get; set; }

        [DataMember]
        public int EmploymentStatus  { get; set; }

        [DataMember]
        public int CandidatePersonAliasId { get; set; }

        [DataMember]
        public string CandidateName { get; set; }

        [DataMember]
        public int JobTitleValueId { get; set; }

        [DataMember]
        public string JobTitleName  { get; set; }

        [DataMember]
        public int RequestingCampusId { get; set; }

        [DataMember]
        public int AttendingCampusId { get; set; }

        [DataMember]
        public int ReplacementForPersonAliasId { get; set; }

        [DataMember]
        public int CurrentSupervisorPersonAliasId { get; set; }

        [DataMember]
        public int ProposedSupervisorPersonAliasId { get; set; }

        [DataMember]
        public int DepartmentId { get; set; }

        [DataMember]
        public decimal Hours { get; set; }

        [DataMember]
        public string SalaryRange  { get; set; }

        [DataMember]
        public string Responsibilities { get; set; }

        [DataMember]
        public string JobTitleFile { get; set; }

        [DataMember]
        public DateTime EndDate { get; set; }

        [DataMember]
        public int ApprovalStatus { get; set; }

        [DataMember]
        public string RequestorSignature { get; set; }

        [DataMember]
        public DateTime RequestorSignedDate { get; set; }

        [DataMember]
        public int ApproverOnePersonAliasId { get; set; }

        [DataMember]
        public string ApproverOneSignature { get; set; }

        [DataMember]
        public DateTime ApproverOneSignedDate { get; set; }

        [DataMember]
        public int ApproverTwoPersonAliasId { get; set; }

        [DataMember]
        public string ApproverTwoSignature { get; set; }

        [DataMember]
        public DateTime ApproverTwoSignedDate { get; set; }

        [DataMember]
        public int ApproverThreePersonAliasId { get; set; }

        [DataMember]
        public string ApproverThreeSignature { get; set; }

        [DataMember]
        public DateTime ApproverThreeSignedDate { get; set; }

        [DataMember]
        public decimal SundayHours { get; set; }

        [DataMember]
        public decimal MondayHours { get; set; }

        [DataMember]
        public decimal TuesdayHours { get; set; }

        [DataMember]
        public decimal WednesdayHours { get; set; }

        [DataMember]
        public decimal ThursdayHours { get; set; }

        [DataMember]
        public decimal FridayHours { get; set; }

        [DataMember]
        public decimal SaturdayHours { get; set; }

        [DataMember]
        public DateTime StartDate { get; set; }

        [DataMember]
        public DateTime TenureDate { get; set; }

        [DataMember]
        public string SpecialNotes { get; set; }

        [DataMember]
        public int RequestVersion { get; set; }

        [DataMember]
        public bool ConvertedToJobOffer { get; set; }
        #endregion


        #region Entity Configuration

        public partial class PersonnelRequestConfiguration : EntityTypeConfiguration<PersonnelRequest>
        {
            public PersonnelRequestConfiguration()
            {
                this.HasEntitySetName("PersonnelRequest");
            }
        }

        #endregion
    }
}
