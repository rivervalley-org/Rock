using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Runtime.Serialization;

using Rock.Data;
using Rock.Lava;
using Rock.Model;

namespace org.rivervalley.JobOffers.Model
{
    [Table("_org_rivervalley_JobOffer_Details")]
    [DataContract]
    public class JobOfferDetail : Model<JobOfferDetail>, IRockEntity
    {
        #region Entity Properties

        [DataMember]
        public int PersonAliasId { get; set; }

        [DataMember]
        public string Title { get; set; }

        [DataMember]
        public int? JobTitleValueId { get; set; }

        [DataMember]
        public int? CampusId { get; set; }

        [DataMember]
        public int? EmploymentStatusValueId { get; set; }

        [DataMember]
        public DateTime OfferDate { get; set; }

        [DataMember]
        public DateTime EffectiveDate { get; set; }

        [DataMember]
        public bool IsPastor { get; set; }

        [DataMember]
        public int? DepartmentValueId { get; set; }

        [DataMember]
        public decimal WeeklyHours { get; set; }

        [DataMember]
        public decimal HourlyRate { get; set; }

        [DataMember]
        public decimal BaseSalary { get; set; }

        [DataMember]
        public decimal HousingAllowance { get; set; }

        [DataMember]
        public decimal SocialSecurityGrossUp { get; set; }

        [DataMember]
        public DateTime TenureDate { get; set; }

        [DataMember]
        public int? MedicalPlanValueId { get; set; }

        [DataMember]
        public int? DentalPlanValueId { get; set; }

        [DataMember]
        public decimal MedicalEmployerPremium { get; set; }

        [DataMember]
        public decimal MedicalEmployeePremium { get; set; }

        [DataMember]
        public decimal DentalEmployerPremium { get; set; }

        [DataMember]
        public decimal DentalEmployeePremium { get; set; }

        [DataMember]
        public decimal LifeInsuranceEmployerPremium { get; set; }

        [DataMember]
        public decimal DisabilityEmployerPremium { get; set; }

        [DataMember]
        public decimal MedicalReimbursement { get; set; }

        [DataMember]
        public decimal HSAContribution { get; set; }

        [DataMember]
        public decimal WorkersCompRate { get; set; }

        [DataMember]
        public decimal WorkersCompPremium { get; set; }

        [DataMember]
        public decimal RetirementEmployerPercentage { get; set; }

        [DataMember]
        public int? RetireEmplPercentageValueId { get; set; }

        [DataMember]
        public decimal RetirementEmployerAmount { get; set; }

        [DataMember]
        public decimal MileageReimbursement { get; set; }

        [DataMember]
        public decimal CellPhoneReimbursement { get; set; }

        [DataMember]
        public decimal Wellness { get; set; }

        [DataMember]
        public decimal ContinuingEducation { get; set; }

        [DataMember]
        public decimal OtherBenefits { get; set; }

        [DataMember]
        public decimal EmployerPayrollTax { get; set; }

        [DataMember]
        public decimal VacationDaysRate { get; set; }

        [DataMember]
        public decimal VacationDaysAnnual { get; set; }

        [DataMember]
        public decimal SickDays { get; set; }

        [DataMember]
        public int? JobOfferStatusValueId { get; set; }

        [DataMember]
        public bool Active { get; set; }

        [DataMember]
        public string Comments { get; set; }

        [DataMember]
        public int PersonnelRequestId { get; set; }

        [DataMember]
        public string OtherDescription { get; set; }

        [DataMember]
        public decimal CurrentHourlyRate { get; set; }

        [DataMember]
        public decimal CurrentBaseSalary { get; set; }

        [DataMember]
        public decimal OtherBenefits2 { get; set; }

        [DataMember]
        public string OtherDescription2 { get; set; }

        #endregion

        #region Virtual Properties

        public virtual Campus Campus { get; set; }

        [LavaVisible]
        public virtual DefinedValue JobTitleValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue EmploymentStatusValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue DepartmentValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue MedicalPlanValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue DentalPlanValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue JobOfferStatusValue { get; set; }

        [LavaVisible]
        public virtual DefinedValue RetireEmplPercentageValue { get; set; }

        #endregion

        #region Entity Configuration

        public partial class JobOfferDetailConfiguration : EntityTypeConfiguration<JobOfferDetail>
        {
            public JobOfferDetailConfiguration()
            {
                this.HasOptional(r => r.Campus).WithMany().HasForeignKey(r => r.CampusId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.JobTitleValue).WithMany().HasForeignKey(p => p.JobTitleValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.EmploymentStatusValue).WithMany().HasForeignKey(p => p.EmploymentStatusValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.DepartmentValue).WithMany().HasForeignKey(p => p.DepartmentValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.MedicalPlanValue).WithMany().HasForeignKey(p => p.MedicalPlanValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.DentalPlanValue).WithMany().HasForeignKey(p => p.DentalPlanValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.RetireEmplPercentageValue).WithMany().HasForeignKey(p => p.RetireEmplPercentageValueId).WillCascadeOnDelete(false);
                this.HasOptional(r => r.DepartmentValue).WithMany().HasForeignKey(p => p.DepartmentValueId).WillCascadeOnDelete(false);
                this.HasEntitySetName("JobOfferDetail");
            }
        }

        #endregion
    }
}