using System;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;

using Rock;
using Rock.Data;
using Rock.Model;

using org.rivervalley.JobOffers.Model;

namespace RockWeb.Plugins.org_rivervalley.JobOffers
{
    [DisplayName( "Job Offers Data Entry" )]
    [Category( "org_rivervalley > JobOffers" )]
    [Description( "Job Offer Detail Data Entry" )]

    public partial class JobOfferDataEntry : Rock.Web.UI.RockBlock
    {
        #region Fields

        private string connString = ConfigurationManager.ConnectionStrings["RockContext"].ConnectionString;
        private JobOfferDetail currentOffer = null;
        private JobOfferDetail copyOffer = null;
        private int jobOfferId;
        private DateTime today = DateTime.Now;
        private bool isFullTime;
        private bool isHourly;
        private bool isSalary;
        private bool isPastor;
        private int annualWeeks = 52;
        private Person offerEmployee = null;
        private int newJobOfferId = 0;
        private int ssTierOneCap = 0;
        private decimal ssTierOneRate = 0;
        private decimal ssTierTwoRate = 0;
        private decimal payrollTaxRate = 0;
        decimal totalSalary = 0;
        decimal taxableSalary = 0;
        decimal annualHours = 0;
        decimal hourlySalary = 0;
        decimal baseSalary = 0;
        decimal currentBaseSalary = 0;
        decimal socialSecurity = 0;
        decimal socialSecurityGrossUp = 0;
        decimal weeklyHours = 0;
        decimal hourlyRate = 0;
        decimal currentHourlyRate = 0;
        decimal housing = 0;
        string vacationDays = "";
        string vacationRate = "";
        bool formError = false;
        string calculateVacation;
        private Guid campusGuid;
        private string employeeNumber;

        #endregion

        #region Base Control Methods


        /// <summary>
        /// Raises the <see cref="E:System.Web.UI.Control.Load" /> event.
        /// </summary>
        /// <param name="e">The <see cref="T:System.EventArgs" /> object that contains the event data.</param>
        protected override void OnLoad( EventArgs e )
        {
            base.OnLoad( e );

            if ( !Page.IsPostBack )
            {
                GetId();

                if ( jobOfferId >= 0 )
                {
                    if ( jobOfferId == 0 )
                    {
                        NewJobOffer();
                    }
                    else
                    {
                        LoadJobOfferDetails();
                    }
                }
                else
                {
                    pnlError.Visible = true;
                    pnlJobOffer.Visible = false;
                    pnlJobDetails.Visible = false;
                    pnlCompensation.Visible = false;
                    pnlBenefits.Visible = false;
                    pnlCopyRecord.Visible = false;
                    pnlEmployeeNumber.Visible = false;
                }
            }
        }

        #endregion

        #region Events

        /// <summary>
        /// Handles the Click event of the btnCancel control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnCancel_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );
            string link = string.Empty;

            if ( jobOfferId > 0 )
            {
                link = "~/JobOfferDataDisplay?id=" + jobOfferId;
            }
            else
            {
                link = "~/JobOffersListing";
            }
            
            Response.Redirect( link );
        }

        /// <summary>
        /// Handles the Click event of the btnEmployeeNumber control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnEmployeeNumber_Click( object sender, EventArgs e )
        {
            string link = "~/JobOffersListing";
            Response.Redirect( link );
        }

        /// <summary>
        /// Handles the Click event of the btnPrint control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnPrint_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );
            string link = "~/JobOfferPrint?id=" + jobOfferId + "&ViewDocument=true";
            Response.Redirect( link );
        }

        /// <summary>
        /// Handles the Click event of the btnEmployeeNumberSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnEmployeeNumberSave_Click( object sender, EventArgs e )
        {
            pnlError.Visible = false;
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            int employeeId = int.Parse( hfEmployeeRockId.Value );
            var dataContext = new RockContext();
            var service = new JobOfferDetailService( dataContext );
            currentOffer = service.Get( jobOfferId );
            currentOffer.JobOfferStatusValueId = 2761;
            dataContext.SaveChanges();

            offerEmployee = new PersonService( dataContext ).Get( employeeId );
            offerEmployee.LoadAttributes( dataContext );
            offerEmployee.SetAttributeValue( "EmployeeNumber", tbEmployeeNo.Text );
            offerEmployee.SetAttributeValue( "Arena-67-289", tbEmployeeNo.Text );

            offerEmployee.SaveAttributeValues();

            string link = "~/JobOfferDataDisplay?id=" + jobOfferId.ToString();
            Response.Redirect( link );
        }

        /// <summary>
        /// Handles the Click event of the btnJOUpdate control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJOUpdate_Click( object sender, EventArgs e )
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            hfJobOfferId.Value = jobOfferId.ToString();

            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );

            var rockContext = new RockContext();
            var personAliasService = new PersonAliasService( rockContext );
            var personAlias = personAliasService.Get( currentOffer.PersonAliasId );
            int employeeId = personAlias.PersonId;

            offerEmployee = new PersonService( rockContext ).Get( employeeId );
            offerEmployee.LoadAttributes( rockContext );

            int employmentStatusId = currentOffer.EmploymentStatusValueId ?? default( int );
            var definedValueService = new DefinedValueService( rockContext );
            var employmentStatus = definedValueService.Get( employmentStatusId );
            offerEmployee.SetAttributeValue( "EmploymentStatus", employmentStatus.Guid );
            offerEmployee.SetAttributeValue( "TenureDate", currentOffer.TenureDate );
            offerEmployee.SetAttributeValue( "TerminationDate", "" );
            offerEmployee.SetAttributeValue( "Arena-67-270", "" );

            offerEmployee.SetAttributeValue( "IsPastor", currentOffer.IsPastor.ToString() );
            if ( currentOffer.IsPastor.ToString() == "True" )
            {
                offerEmployee.SetAttributeValue( "Arena-67-311", "True" );
            }

            employmentStatus.LoadAttributes( rockContext );

            string esCode = employmentStatus.GetAttributeValue( "FTorPTCode" );

            if ( esCode == "F" )
            {
                offerEmployee.SetAttributeValue( "FullTimeHireDate", currentOffer.EffectiveDate );
            }
            if ( esCode == "P" )
            {
                offerEmployee.SetAttributeValue( "PartTimeHireDate", currentOffer.EffectiveDate );
            }

            offerEmployee.SetAttributeValue( "Arena-67-269", currentOffer.EffectiveDate );

            int deptId = currentOffer.DepartmentValueId ?? default( int );
            definedValueService = new DefinedValueService( rockContext );
            var workDepartment = definedValueService.Get( deptId );
            offerEmployee.SetAttributeValue( "WorkDepartment", workDepartment.Guid );
            offerEmployee.SetAttributeValue( "AccountingDepartment", workDepartment.Guid );

            int positionId = currentOffer.JobTitleValueId ?? default( int );
            definedValueService = new DefinedValueService( rockContext );
            var position = definedValueService.Get( positionId );
            offerEmployee.SetAttributeValue( "Arena-68-286", position.Value );
            offerEmployee.SetAttributeValue( "JobTitle", position.Guid );

            offerEmployee.SetAttributeValue( "Arena-67-289", employeeId );

            int campusId = currentOffer.CampusId ?? default( int );
            ConvertCampusData( campusId );
            offerEmployee.SetAttributeValue( "Arena-68-293", campusGuid );
            offerEmployee.SetAttributeValue( "WorkCampus", campusGuid );

            offerEmployee.SaveAttributeValues();

            string link = "~/JobOffersListing";
            Response.Redirect( link );
        }

        /// <summary>
        /// Handles the Click event of the btnJOEdit control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJOEdit_Click( object sender, EventArgs e )
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = true;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            hfJobOfferId.Value = jobOfferId.ToString();

            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
            LoadEditDetail();
        }

        /// <summary>
        /// Handles the Click event of the btnJOCompensation control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJOCompensation_Click( object sender, EventArgs e )
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = true;
            pnlBenefits.Visible = false;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            hfJobOfferId.Value = jobOfferId.ToString();

            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
            GetPayrollStatus( currentOffer.IsPastor, currentOffer.EmploymentStatusValue.Value );
            LoadCompensationDetail();
        }

        /// <summary>
        /// Handles the Click event of the btnJOBenefits control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJOBenefits_Click( object sender, EventArgs e )
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = true;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            hfJobOfferId.Value = jobOfferId.ToString();

            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
            GetPayrollStatus( currentOffer.IsPastor, currentOffer.EmploymentStatusValue.Value );
            LoadBenefitsDetail();
        }

        /// <summary>
        /// Handles the Click event of the btnJOCopy control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJOCopy_Click( object sender, EventArgs e )
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlCopyRecord.Visible = true;
            pnlError.Visible = false;
            pnlEmployeeNumber.Visible = false;

            jobOfferId = int.Parse( hfJobOfferId.Value );
            hfJobOfferId.Value = jobOfferId.ToString();

            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
            tbNewTitle.Text = currentOffer.Title;
            dpNewOfferDate.Text = today.ToShortDateString();
        }

        /// <summary>
        /// Handles the Click event of the btnJobDetailsSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnJobDetailsSave_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );

            var dataContext = new RockContext();
            var service = new JobOfferDetailService( dataContext );

            if ( jobOfferId == 0 )
            {
                currentOffer = new JobOfferDetail();
                service.Add( currentOffer );
            }
            else
            {
                currentOffer = service.Get( jobOfferId );
                // set IsPastor so if value changed we can refigure the Social Security amounts
                socialSecurity = currentOffer.EmployerPayrollTax;
                socialSecurityGrossUp = currentOffer.SocialSecurityGrossUp;
                if ( currentOffer.IsPastor )
                {
                    isPastor = true;
                }
            }

            SetJobDetail();

            if ( formError )
            {
                pnlJobOffer.Visible = false;
                pnlJobDetails.Visible = true;
                pnlCompensation.Visible = false;
                pnlBenefits.Visible = false;
                pnlError.Visible = false;
                pnlCopyRecord.Visible = false;
                pnlEmployeeNumber.Visible = false;
            }
            else
            {
                // ************************************************
                // setting the offer status here to consider the active status and diverting to the employee number form before accepting the value

                var offerStatus = Int32.Parse( ddOfferStatus.Text );

                if ( offerStatus != 2761 )
                {
                    currentOffer.JobOfferStatusValueId = offerStatus;
                }

                // ************************************************

                dataContext.SaveChanges();
                // Get newly created record id
                if ( jobOfferId == 0 )
                {
                    GetNewJobOffer();
                    jobOfferId = newJobOfferId;
                    hfJobOfferId.Value = jobOfferId.ToString();
                    // reload new record
                    currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
                }

                hfJobOfferId.Value = jobOfferId.ToString();
                if ( offerStatus == 2761 )
                {
                    // status of accepted requires an employee number
                    pnlJobOffer.Visible = false;
                    pnlJobDetails.Visible = false;
                    pnlCompensation.Visible = false;
                    pnlBenefits.Visible = false;
                    pnlError.Visible = false;
                    pnlCopyRecord.Visible = false;
                    pnlEmployeeNumber.Visible = true;

                    // reload record
                    currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );
                    var rockContext = new RockContext();
                    var personAliasService = new PersonAliasService( rockContext );
                    var personAlias = personAliasService.Get( currentOffer.PersonAliasId );
                    int employeeId = personAlias.PersonId;
                    offerEmployee = new PersonService( rockContext ).Get( employeeId );
                    offerEmployee.LoadAttributes( rockContext );
                    employeeNumber = offerEmployee.GetAttributeValue( "EmployeeNumber" );

                    tbEmployeeNo.Text = employeeNumber;
                    hfEmployeeNumber.Value = employeeNumber;
                    hfEmployeeRockId.Value = employeeId.ToString();
                }
                else
                {
                    string link = "~/JobOfferDataDisplay?id=" + jobOfferId.ToString();
                    Response.Redirect( link );
                }
            }
        }

        /// <summary>
        /// Handles the Click event of the btnCompensationSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnCompensationSave_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );

            var dataContext = new RockContext();
            var service = new JobOfferDetailService( dataContext );

            currentOffer = service.Get( jobOfferId );
            GetPayrollStatus( currentOffer.IsPastor, currentOffer.EmploymentStatusValue.Value );
            SetCompensationData();
            dataContext.SaveChanges();

            hfJobOfferId.Value = jobOfferId.ToString();
            LoadJobOfferDetails();

        }

        /// <summary>
        /// Handles the Click event of the btnBenefitsSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnBenefitsSave_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );

            var dataContext = new RockContext();
            var service = new JobOfferDetailService( dataContext );

            currentOffer = service.Get( jobOfferId );
            GetPayrollStatus( currentOffer.IsPastor, currentOffer.EmploymentStatusValue.Value );
            SetBenefitsData();
            dataContext.SaveChanges();

            hfJobOfferId.Value = jobOfferId.ToString();
            LoadJobOfferDetails();
        }

        /// <summary>
        /// Handles the Click event of the btnCopyRecordSave control.
        /// </summary>
        /// <param name="sender">The source of the event.</param>
        /// <param name="e">The <see cref="EventArgs"/> instance containing the event data.</param>
        protected void btnCopyRecordSave_Click( object sender, EventArgs e )
        {
            jobOfferId = int.Parse( hfJobOfferId.Value );

            // load current job details
            currentOffer = new JobOfferDetailService( new RockContext() ).Get( jobOfferId );

            pnlDebug.Visible = true;
            SaveCopyDetails();

            string link = "~/JobOffersListing";
            Response.Redirect( link );
        }

        #endregion

        #region Methods

        /// <summary>
        /// Gets the identifier.
        /// </summary>
        protected void GetId()
        {
            int? id = PageParameter( "id" ).AsIntegerOrNull();
            if ( id.HasValue )
            {
                if ( id.Value == 0 )
                {
                    jobOfferId = 0;
                }
                else
                {
                    currentOffer = currentOffer ?? new JobOfferDetailService( new RockContext() ).Get( id.Value );
                    if ( currentOffer != null )
                    {
                        jobOfferId = id ?? default( int );
                        hfJobOfferId.Value = jobOfferId.ToString();
                    }
                    else
                    {
                        jobOfferId = -1;
                    }
                }
            }
            else
            {
                jobOfferId = -1;
            }
        }

        /// <summary>
        /// Creates new joboffer.
        /// </summary>
        private void NewJobOffer()
        {
            pnlJobOffer.Visible = false;
            pnlJobDetails.Visible = true;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            hfJobOfferId.Value = 0.ToString();
            LoadJobDetailDropDownValues();
        }

        /// <summary>
        /// Loads the job offer details.
        /// </summary>
        private void LoadJobOfferDetails()
        {
            // Load all variables for display

            pnlJobOffer.Visible = true;
            pnlJobDetails.Visible = false;
            pnlCompensation.Visible = false;
            pnlBenefits.Visible = false;
            pnlError.Visible = false;
            pnlCopyRecord.Visible = false;
            pnlEmployeeNumber.Visible = false;

            lOfferTitle.Text = currentOffer.Title;
            lOfferDate.Text = currentOffer.OfferDate.ToShortDateString();
            lStartDate.Text = currentOffer.EffectiveDate.ToShortDateString();
            lTenureDate.Text = currentOffer.TenureDate.ToShortDateString();
            lComments.Text = currentOffer.Comments;
            lOfferStatus.Text = currentOffer.JobOfferStatusValue.Value;
            lStatus.Text = currentOffer.EmploymentStatusValue.Value;

            if ( currentOffer.JobTitleValue.Value != null )
            {
                lPosition.Text = currentOffer.JobTitleValue.Value;
            }

            lDepartment.Text = currentOffer.DepartmentValue.Value;
            lCampus.Text = currentOffer.Campus.Name;

            if ( currentOffer.MedicalPlanValueId != null )
            {
                lMedicalPlan.Text = currentOffer.MedicalPlanValue.Value;
            }

            if ( currentOffer.DentalPlanValueId != null )
            {
                lDentalPlan.Text = currentOffer.DentalPlanValue.Value;
            }

            lVacationDays.Text = currentOffer.VacationDaysAnnual.ToString( "0.00" );
            lVacationRate.Text = currentOffer.VacationDaysRate.ToString( "0.000" );
            lWeeklyHours.Text = currentOffer.WeeklyHours.ToString( "0.00" );
            lBaseSalary.Text = currentOffer.BaseSalary.ToString( "#,##0.00" );
            lCurrentBaseSalary.Text = currentOffer.CurrentBaseSalary.ToString( "#,##0.00" );
            lHourlyRate.Text = currentOffer.HourlyRate.ToString( "#0.00" );
            lCurrentHourlyRate.Text = currentOffer.CurrentHourlyRate.ToString( "#0.00" );
            lHousing.Text = currentOffer.HousingAllowance.ToString( "#,##0.00" );
            lSSGrossUp.Text = currentOffer.SocialSecurityGrossUp.ToString( "#,##0.00" );
            lMedicalPremium.Text = currentOffer.MedicalEmployerPremium.ToString( "#,##0.00" );
            lDentalPremium.Text = currentOffer.DentalEmployerPremium.ToString( "#,##0.00" );
            lLifeInsurance.Text = currentOffer.LifeInsuranceEmployerPremium.ToString( "#,##0.00" );
            lDisability.Text = currentOffer.DisabilityEmployerPremium.ToString( "#,##0.00" );
            lMedicalReimbursement.Text = currentOffer.MedicalReimbursement.ToString( "#,##0.00" );
            lHSAContribution.Text = currentOffer.HSAContribution.ToString( "#,##0.00" );

            if ( currentOffer.RetireEmplPercentageValueId != null )
            {
                if ( currentOffer.RetireEmplPercentageValueId == 5803 )
                {
                    lRetirementPercentage.Text = "Flat Amount";
                }
                else
                {
                    lRetirementPercentage.Text = currentOffer.RetirementEmployerPercentage.ToString( "0% " );
                }

            }

            lRetirementAmount.Text = currentOffer.RetirementEmployerAmount.ToString( "#,##0.00" );
            lMileageReimbursement.Text = currentOffer.MileageReimbursement.ToString( "#,##0.00" );
            lWellness.Text = currentOffer.Wellness.ToString( "#,##0.00" );
            lSickDays.Text = currentOffer.SickDays.ToString( "#,##0.00" );
            lCellPhone.Text = currentOffer.CellPhoneReimbursement.ToString( "#,##0.00" );
            lEducation.Text = currentOffer.ContinuingEducation.ToString( "#,##0.00" );

            // other 1
            if ( currentOffer.OtherDescription != null )
            {
                lOtherDescription.Text = "Other (" + currentOffer.OtherDescription + ")";
            }
            else
            {
                lOtherDescription.Text = "Other";
            }

            lOther.Text = currentOffer.OtherBenefits.ToString( "#,##0.00" );

            // other 2
            if ( currentOffer.OtherDescription2 != null )
            {
                lOtherDescription2.Text = "Other 2 (" + currentOffer.OtherDescription2 + ")";
            }
            else
            {
                lOtherDescription2.Text = "Other 2";
            }

            lOther2.Text = currentOffer.OtherBenefits2.ToString( "#,##0.00" );

            lWorkersComp.Text = currentOffer.WorkersCompPremium.ToString( "#,##0.00" );
            lPayrollTax.Text = currentOffer.EmployerPayrollTax.ToString( "#,##0.00" );

            GetPayrollStatus( currentOffer.IsPastor, currentOffer.EmploymentStatusValue.Value );

            if ( isPastor )
            {
                lIsPastor.Text = "Yes";
            }
            else
            {
                lIsPastor.Text = "No";
            }

            annualHours = currentOffer.WeeklyHours * annualWeeks;

            if ( isHourly )
            {
                hourlySalary = annualHours * currentOffer.HourlyRate;
            }

            if ( isSalary )
            {
                totalSalary = currentOffer.BaseSalary + currentOffer.SocialSecurityGrossUp;
                taxableSalary = totalSalary - currentOffer.HousingAllowance;
            }
            else
            {
                totalSalary = hourlySalary + currentOffer.SocialSecurityGrossUp;
                taxableSalary = totalSalary - currentOffer.HousingAllowance;
            }

            lAnnualHours.Text = annualHours.ToString( "#,##0.00" );
            lTotalSalary.Text = totalSalary.ToString( "#,##0.00" );
            lTaxableSalary.Text = taxableSalary.ToString( "#,##0.00" );

            if ( currentOffer.PersonAliasId > 0 )
            {
                // PersonAliasId is used
                var rockContext = new RockContext();
                var personAliasService = new PersonAliasService( rockContext );
                var personAlias = personAliasService.Get( currentOffer.PersonAliasId );
                lName.Text = personAlias.Person.FullName;
                lEmail.Text = personAlias.Person.Email;

                if ( personAlias.Person.PhoneNumbers.FirstOrDefault( n => n.NumberTypeValueId == 13 ) != null )
                {
                    lPhone.Text = personAlias.Person.PhoneNumbers.FirstOrDefault( n => n.NumberTypeValueId == 13 ).ToString();
                }
                if ( personAlias.Person.GetHomeLocation() != null )
                {
                    lAddress.Text = personAlias.Person.GetHomeLocation().ToString();
                }
            }
            else
            {
                lName.Text = " &nbsp;";
                lEmail.Text = " &nbsp;";
                lPhone.Text = " &nbsp;";
                lAddress.Text = " &nbsp;";
            }
        }

        /// <summary>
        /// Loads the edit detail.
        /// </summary>
        private void LoadEditDetail()
        {
            LoadJobDetailDropDownValues();

            DateTime offerDate = new DateTime();
            DateTime effectiveDate = new DateTime();
            DateTime tenureDate = new DateTime();

            offerDate = currentOffer.OfferDate;
            effectiveDate = currentOffer.EffectiveDate;
            tenureDate = currentOffer.TenureDate;
            tbTitle.Text = currentOffer.Title;
            tbComment.Text = currentOffer.Comments;
            dpOfferDate.Text = offerDate.ToShortDateString();
            dpEffectiveDate.Text = effectiveDate.ToShortDateString();
            dpTenureDate.Text = tenureDate.ToShortDateString();
            ddOfferStatus.Text = currentOffer.JobOfferStatusValueId.ToString();
            ddDepartment.Text = currentOffer.DepartmentValueId.ToString();
            ddCampus.Text = currentOffer.CampusId.ToString();
            ddStatus.Text = currentOffer.EmploymentStatusValueId.ToString();
            ddDepartment.Text = currentOffer.DepartmentValueId.ToString();
            ddPosition.Text = currentOffer.JobTitleValueId.ToString();
            if ( currentOffer.IsPastor )
            {
                cbIsPastor.Checked = true;
            }
            if ( currentOffer.PersonAliasId > 0 )
            {
                // PersonAliasId is used
                var rockContext = new RockContext();
                var personAliasService = new PersonAliasService( rockContext );
                var personAlias = personAliasService.Get( currentOffer.PersonAliasId );

                ppPerson.SetValue( personAlias.Person );
            }
        }

        /// <summary>
        /// Loads the compensation detail.
        /// </summary>
        private void LoadCompensationDetail()
        {
            tbWeeklyHours.Text = currentOffer.WeeklyHours.ToString();
            if ( isHourly )
            {
                tbHourlyRate.Visible = true;
                tbCurrentHourlyRate.Visible = true;
                tbBaseSalary.Visible = false;
                tbCurrentBaseSalary.Visible = false;
                tbHourlyRate.Text = currentOffer.HourlyRate.ToString();
                tbCurrentHourlyRate.Text = currentOffer.CurrentHourlyRate.ToString();
            }
            else
            {
                tbHourlyRate.Visible = false;
                tbCurrentHourlyRate.Visible = false;
                tbBaseSalary.Visible = true;
                tbCurrentBaseSalary.Visible = true;
                tbBaseSalary.Text = currentOffer.BaseSalary.ToString();
                tbCurrentBaseSalary.Text = currentOffer.CurrentBaseSalary.ToString();
            }
            tbHousing.Text = currentOffer.HousingAllowance.ToString();
        }

        /// <summary>
        /// Loads the benefits detail.
        /// </summary>
        private void LoadBenefitsDetail()
        {
            string medical = "Med";
            string dental = "Den";
            var mpQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            mpQry = mpQry.Where( row => row.DefinedTypeId == 142 );
            var mpQrySorted = mpQry.OrderBy( a => a.Value );
            foreach ( var qRow in mpQrySorted )
            {
                if ( qRow.Value.Contains( medical ) )
                {
                    ddMedicalPlan.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
                }
                if ( qRow.Value.Contains( dental ) )
                {
                    ddDentalPlan.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
                }
            }
            var rpQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            rpQry = rpQry.Where( row => row.DefinedTypeId == 124 );
            var rpQrySorted = rpQry.OrderBy( a => a.Order );
            ddRetirementPercent.Items.Add( new ListItem( "", 0.ToString() ) ); // add a blank value at the top
            foreach ( var qRow in rpQrySorted )
            {
                ddRetirementPercent.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
            }

            if ( currentOffer.MedicalPlanValueId != null )
            {
                ddMedicalPlan.Text = currentOffer.MedicalPlanValueId.ToString();
            }
            if ( currentOffer.DentalPlanValueId != null )
            {
                ddDentalPlan.Text = currentOffer.DentalPlanValueId.ToString();
            }
            tbMedicalReimbursement.Text = currentOffer.MedicalReimbursement.ToString();
            tbHSAContribution.Text = currentOffer.HSAContribution.ToString();
            if ( currentOffer.RetireEmplPercentageValueId != null )
            {
                ddRetirementPercent.Text = currentOffer.RetireEmplPercentageValueId.ToString();
            }

            tbCellPhone.Text = currentOffer.CellPhoneReimbursement.ToString();
            tbMileage.Text = currentOffer.MileageReimbursement.ToString();
            tbWellness.Text = currentOffer.Wellness.ToString();
            tbEducation.Text = currentOffer.ContinuingEducation.ToString();
            tbOther.Text = currentOffer.OtherBenefits.ToString();
            tbOtherDescription.Text = currentOffer.OtherDescription;
            tbOther2.Text = currentOffer.OtherBenefits2.ToString();
            tbOtherDescription2.Text = currentOffer.OtherDescription2;

            tbSickDays.Text = currentOffer.SickDays.ToString();
            tbRetirementAmount.Text = currentOffer.RetirementEmployerAmount.ToString();

            GetVacationStatus();
            if ( calculateVacation == "True" )
            {
                lVacationDisplayed.Visible = true;
                tbVacationDays.Visible = false;
                lVacationDisplayed.Text = currentOffer.VacationDaysAnnual.ToString() + " ( calculated value )";
            }
            else
            {
                tbVacationDays.Visible = true;
                lVacationDisplayed.Visible = false;
                tbVacationDays.Text = currentOffer.VacationDaysAnnual.ToString();
            }
        }

        /// <summary>
        /// Gets the payroll status.
        /// </summary>
        /// <param name="pastor">if set to <c>true</c> [pastor].</param>
        /// <param name="status">The status.</param>
        private void GetPayrollStatus( bool pastor, string status )
        {
            if ( pastor )
            {
                isPastor = true;
            }
            else
            {
                isPastor = false;
            }

            isFullTime = status.Contains( "Full" );
            isHourly = status.Contains( "Hourly" );
            isSalary = status.Contains( "Salary" );
        }

        /// <summary>
        /// Sets the job detail.
        /// </summary>
        private void SetJobDetail()
        {
            nbWarningMessage.Text = "Please Correct the Following";
            nbWarningMessage.Visible = true;
            DateTime oDate = new DateTime( 1900, 1, 1 );
            DateTime eDate = new DateTime( 1900, 1, 1 );
            DateTime tDate = new DateTime( 1900, 1, 1 );
            if ( dpOfferDate.Text != "" )
            {
                oDate = DateTime.Parse( dpOfferDate.Text );
            }
            if ( dpEffectiveDate.Text != "" )
            {
                eDate = DateTime.Parse( dpEffectiveDate.Text );
            }
            if ( dpTenureDate.Text != "" )
            {
                tDate = DateTime.Parse( dpTenureDate.Text );
            }

            var position = Int32.Parse( ddPosition.Text );
            if ( position == 0 )
            {
                formError = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "<br>&nbsp-&nbsp;Postion is Required.";
            }
            else
            {
                currentOffer.JobTitleValueId = position;
            }

            var status = Int32.Parse( ddStatus.Text );
            if ( status == 0 )
            {
                formError = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "<br>&nbsp-&nbsp;Status is Required.";
            }
            else
            {
                currentOffer.EmploymentStatusValueId = status;
            }

            var department = Int32.Parse( ddDepartment.Text );
            if ( department == 0 )
            {
                formError = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "<br>&nbsp-&nbsp;Department is Required.";
            }
            else
            {
                currentOffer.DepartmentValueId = department;
            }

            var campus = Int32.Parse( ddCampus.Text );
            if ( campus == 0 )
            {
                formError = true;
                nbWarningMessage.Visible = true;
                nbWarningMessage.Text += "<br>&nbsp-&nbsp;Assigned Campus is Required.";
            }
            else
            {
                currentOffer.CampusId = campus;
            }

            string selectedPerson = ppPerson.SelectedValue.ToString();
            if ( selectedPerson != "" )
            {
                int personId = Int32.Parse( selectedPerson );
                Person currentPerson;
                var rockContext = new RockContext();
                currentPerson = new PersonService( rockContext ).Get( personId );
                int aliasId = currentPerson.PrimaryAliasId ?? default( int );
                //currentOffer.PersonId = personId;
                currentOffer.PersonAliasId = aliasId;
            }

            // compare new IsPastor with previous IsPastor
            if ( cbIsPastor.Checked == true )
            {
                if ( !isPastor )
                {
                    currentOffer.IsPastor = true;
                    // was changed and need to flip flop SSGrossUp and Payroll Tax
                    currentOffer.EmployerPayrollTax = socialSecurityGrossUp;
                    currentOffer.SocialSecurityGrossUp = socialSecurity;
                }
            }
            else
            {
                if ( isPastor )
                {
                    currentOffer.IsPastor = false;
                    // was changed and need to flip flop SSGrossUp and Payroll Tax
                    currentOffer.EmployerPayrollTax = socialSecurityGrossUp;
                    currentOffer.SocialSecurityGrossUp = socialSecurity;
                }
            }

            currentOffer.Title = tbTitle.Text;
            currentOffer.OfferDate = oDate;
            currentOffer.EffectiveDate = eDate;
            currentOffer.TenureDate = tDate;
            currentOffer.Comments = tbComment.Text;
            currentOffer.PersonnelRequestId = 0;
            currentOffer.CurrentBaseSalary = 0;
            currentOffer.CurrentHourlyRate = 0;
        }

        /// <summary>
        /// Sets the compensation data.
        /// </summary>
        private void SetCompensationData()
        {
            decimal.TryParse( tbWeeklyHours.Text.Trim(), out weeklyHours );
            decimal.TryParse( tbHourlyRate.Text.Trim(), out hourlyRate );
            decimal.TryParse( tbCurrentHourlyRate.Text.Trim(), out currentHourlyRate );
            decimal.TryParse( tbHousing.Text.Trim(), out housing );
            decimal.TryParse( tbBaseSalary.Text.Trim(), out baseSalary );
            decimal.TryParse( tbCurrentBaseSalary.Text.Trim(), out currentBaseSalary );

            annualHours = weeklyHours * annualWeeks;

            if ( isHourly )
            {
                hourlySalary = annualHours * hourlyRate;
            }

            CalculateSocialSecurityGrossUp();

            if ( isSalary )
            {
                totalSalary = baseSalary + socialSecurityGrossUp;
                taxableSalary = totalSalary - housing;
            }
            else
            {
                totalSalary = hourlySalary + socialSecurityGrossUp;
                taxableSalary = totalSalary - housing;
            }

            CalculatePayrollTax();
            CalculateWorkersComp();

            currentOffer.SocialSecurityGrossUp = socialSecurityGrossUp;
            currentOffer.WeeklyHours = weeklyHours;
            currentOffer.HourlyRate = hourlyRate;
            currentOffer.CurrentHourlyRate = currentHourlyRate;
            currentOffer.HousingAllowance = housing;
            currentOffer.BaseSalary = baseSalary;
            currentOffer.CurrentBaseSalary = currentBaseSalary;
        }

        /// <summary>
        /// Sets the benefits data.
        /// </summary>
        private void SetBenefitsData()
        {
            decimal medicalReimbursement = 0;
            decimal.TryParse( tbMedicalReimbursement.Text.Trim(), out medicalReimbursement );
            decimal hsa = 0;
            decimal.TryParse( tbHSAContribution.Text.Trim(), out hsa );
            decimal cell = 0;
            decimal.TryParse( tbCellPhone.Text.Trim(), out cell );
            decimal mileage = 0;
            decimal.TryParse( tbMileage.Text.Trim(), out mileage );
            decimal wellness = 0;
            decimal.TryParse( tbWellness.Text.Trim(), out wellness );
            decimal education = 0;
            decimal.TryParse( tbEducation.Text.Trim(), out education );
            decimal sickDays = 0;
            decimal.TryParse( tbSickDays.Text.Trim(), out sickDays );
            decimal other = 0;
            decimal.TryParse( tbOther.Text.Trim(), out other );
            decimal other2 = 0;
            decimal.TryParse( tbOther2.Text.Trim(), out other2 );
            decimal retirementAmount = 0;
            decimal.TryParse( tbRetirementAmount.Text.Trim(), out retirementAmount );

            var medicalPlan = Int32.Parse( ddMedicalPlan.Text );
            var dentalPlan = Int32.Parse( ddDentalPlan.Text );
            var retirementPercent = Int32.Parse( ddRetirementPercent.Text );

            annualHours = currentOffer.WeeklyHours * annualWeeks;
            hourlySalary = annualHours * currentOffer.HourlyRate;
            baseSalary = currentOffer.BaseSalary;

            CalculateLifeInsurance();
            CalculateDisabilityInsurance();
            CalculateMedicalPremiums( medicalPlan );
            CalculateDentalPremiums( dentalPlan );

            if ( retirementPercent == 5803 )
            {
                // Flat Rate
                currentOffer.RetirementEmployerAmount = retirementAmount;
            }
            else
            {
                if ( retirementPercent != 0 )
                {
                    CalculateRetirement( retirementPercent );
                }
            }

            GetVacationStatus();

            if ( calculateVacation == "True" )
            {
                CalculateVacationDays();
                decimal daysEarned;
                decimal.TryParse( vacationDays, out daysEarned );
                decimal rateEarned;
                decimal.TryParse( vacationRate, out rateEarned );

                currentOffer.VacationDaysAnnual = daysEarned;
                currentOffer.VacationDaysRate = rateEarned;
            }
            else
            {
                decimal vDays = 0;
                decimal.TryParse( tbVacationDays.Text.Trim(), out vDays );
                currentOffer.VacationDaysAnnual = vDays;
                currentOffer.VacationDaysRate = vDays / 12;
            }

            currentOffer.MedicalPlanValueId = medicalPlan;
            currentOffer.DentalPlanValueId = dentalPlan;
            currentOffer.MedicalReimbursement = medicalReimbursement;
            currentOffer.HSAContribution = hsa;
            currentOffer.CellPhoneReimbursement = cell;
            currentOffer.MileageReimbursement = mileage;
            currentOffer.Wellness = wellness;
            currentOffer.ContinuingEducation = education;
            currentOffer.OtherBenefits = other;
            currentOffer.OtherBenefits2 = other2;
            currentOffer.SickDays = sickDays;
            if ( isFullTime == true )
            {

            }
            if ( retirementPercent != 0 )
            {
                currentOffer.RetireEmplPercentageValueId = retirementPercent;
            }
            else
            {
                currentOffer.RetireEmplPercentageValueId = null;
                currentOffer.RetirementEmployerAmount = 0;
                currentOffer.RetirementEmployerPercentage = 0;
            }

            currentOffer.OtherDescription = tbOtherDescription.Text;
            currentOffer.OtherDescription2 = tbOtherDescription2.Text;
        }

        /// <summary>
        /// Gets the new job offer.
        /// </summary>
        private void GetNewJobOffer()
        {
            int counter = 0;
            var qry = new JobOfferDetailService( new RockContext() ).Queryable().AsNoTracking();
            qry = qry.Where( row => row.Id > 0 );
            var qrySorted = qry.OrderByDescending( a => a.Id );
            foreach ( var qRow in qrySorted )
            {
                counter++;
                if ( counter == 1 )
                {
                    newJobOfferId = qRow.Id;
                }
            }
        }

        /// <summary>
        /// Loads the job detail drop down values.
        /// </summary>
        private void LoadJobDetailDropDownValues()
        {
            var osQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            osQry = osQry.Where( row => row.DefinedTypeId == 138 );
            var osQrySorted = osQry.OrderBy( a => a.Value );

            foreach ( var qRow in osQrySorted )
            {
                ddOfferStatus.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
            }
            ddOfferStatus.SelectedValue = 2759.ToString();

            var cQry = new CampusService( new RockContext() ).Queryable().AsNoTracking();
            cQry = cQry.Where( row => row.Id != 7 && row.Id != 8 && row.Id != 10 );
            var cQrySorted = cQry.OrderBy( a => a.Name );
            ddCampus.Items.Add( new ListItem( "", "0" ) );
            foreach ( var qRow in cQrySorted )
            {
                ddCampus.Items.Add( new ListItem( qRow.Name, qRow.Id.ToString() ) );
            }

            var sQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            sQry = sQry.Where( row => row.DefinedTypeId == 132 );
            var sQrySorted = sQry.OrderBy( a => a.Value );
            ddStatus.Items.Add( new ListItem( "", "0" ) );
            foreach ( var qRow in sQrySorted )
            {
                ddStatus.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
            }

            var pQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            pQry = pQry.Where( row => row.DefinedTypeId == 139 );
            var pQrySorted = pQry.OrderBy( a => a.Value );
            ddPosition.Items.Add( new ListItem( "", "0" ) );
            foreach ( var qRow in pQrySorted )
            {
                ddPosition.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
            }

            var dQry = new DefinedValueService( new RockContext() ).Queryable().AsNoTracking();
            dQry = dQry.Where( row => row.DefinedTypeId == 127 );
            var dQrySorted = dQry.OrderBy( a => a.Value );
            ddDepartment.Items.Add( new ListItem( "", "0" ) );
            foreach ( var qRow in dQrySorted )
            {
                ddDepartment.Items.Add( new ListItem( qRow.Value, qRow.Id.ToString() ) );
            }
        }

        /// <summary>
        /// Gets the social security rates.
        /// </summary>
        private void GetSocialSecurityRates()
        {
            var ss1Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            ss1Qry = ss1Qry.Where( row => row.Id == 7715 );
            foreach ( var qRow in ss1Qry )
            {
                Int32.TryParse( qRow.DefaultValue, out ssTierOneCap );
            }

            var ss2Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            ss2Qry = ss2Qry.Where( row => row.Id == 7716 );
            foreach ( var qRow in ss2Qry )
            {
                Decimal.TryParse( qRow.DefaultValue, out ssTierOneRate );
            }

            var ss3Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            ss3Qry = ss3Qry.Where( row => row.Id == 7717 );
            foreach ( var qRow in ss3Qry )
            {
                Decimal.TryParse( qRow.DefaultValue, out ssTierTwoRate );
            }
        }

        /// <summary>
        /// Calculates the social security gross up.
        /// </summary>
        private void CalculateSocialSecurityGrossUp()
        {
            GetSocialSecurityRates();

            if ( isPastor )
            {
                currentOffer.EmployerPayrollTax = 0;
                if ( isSalary )
                {
                    if ( baseSalary > ssTierOneCap )
                    {
                        decimal tierTwoValue = ( baseSalary - ssTierOneCap ) * ssTierTwoRate;
                        socialSecurityGrossUp = ( ssTierOneCap * ssTierOneRate ) + tierTwoValue;
                    }
                    else
                    {
                        socialSecurityGrossUp = ( baseSalary * ssTierOneRate );
                    }
                }
                else
                {

                    if ( hourlySalary > ssTierOneCap )
                    {
                        decimal tierTwoValue = ( hourlySalary - ssTierOneCap ) * ssTierTwoRate;
                        socialSecurityGrossUp = ( ssTierOneCap * ssTierOneRate ) + tierTwoValue;
                    }
                    else
                    {
                        socialSecurityGrossUp = ( hourlySalary * ssTierOneRate );
                    }
                }

            }
            else
            {
                socialSecurityGrossUp = 0;
            }
        }

        /// <summary>
        /// Calculates the payroll tax.
        /// </summary>
        private void CalculatePayrollTax()
        {
            var pt1Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            pt1Qry = pt1Qry.Where( row => row.Id == 7710 );
            foreach ( var qRow in pt1Qry )
            {
                Decimal.TryParse( qRow.DefaultValue, out payrollTaxRate );
            }

            if ( isPastor )
            {
                currentOffer.EmployerPayrollTax = 0;
            }
            else
            {
                currentOffer.EmployerPayrollTax = totalSalary * payrollTaxRate;
            }
        }

        /// <summary>
        /// Calculates the workers comp.
        /// </summary>
        private void CalculateWorkersComp()
        {
            decimal premiumRate = 0;
            decimal regularRate = 0;

            var wc1Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            wc1Qry = wc1Qry.Where( row => row.Id == 7713 );
            foreach ( var qRow in wc1Qry )
            {
                Decimal.TryParse( qRow.DefaultValue, out premiumRate );
            }

            var wc2Qry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            wc2Qry = wc2Qry.Where( row => row.Id == 7714 );
            foreach ( var qRow in wc2Qry )
            {
                Decimal.TryParse( qRow.DefaultValue, out regularRate );
            }

            int counter = 0;

            var wc3Qry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            wc3Qry = wc3Qry.Where( row => row.AttributeId == 7841 && row.Value == "True" );
            foreach ( var qRow in wc3Qry )
            {
                if ( currentOffer.DepartmentValueId == qRow.EntityId )
                {
                    counter++;
                }

            }

            if ( counter > 0 )
            {
                currentOffer.WorkersCompRate = premiumRate;
                if ( isHourly )
                {
                    currentOffer.WorkersCompPremium = ( hourlySalary / 100 ) * premiumRate;
                }
                else
                {
                    currentOffer.WorkersCompPremium = ( baseSalary / 100 ) * premiumRate;
                }
            }
            else
            {
                currentOffer.WorkersCompRate = regularRate;
                if ( isHourly )
                {
                    currentOffer.WorkersCompPremium = ( hourlySalary / 100 ) * regularRate;
                }
                else
                {
                    currentOffer.WorkersCompPremium = ( baseSalary / 100 ) * regularRate;
                }
            }
        }

        /// <summary>
        /// Gets the vacation status.
        /// </summary>
        private void GetVacationStatus()
        {
            var statusId = currentOffer.EmploymentStatusValueId;

            var rQry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            rQry = rQry.Where( row => row.AttributeId == 7905 && row.EntityId == statusId );
            foreach ( var qRow in rQry )
            {
                calculateVacation = qRow.Value;
            }
        }

        /// <summary>
        /// Calculates the vacation days.
        /// </summary>
        private void CalculateVacationDays()
        {
            double days = 0;
            double years = 0;
            decimal tenure = 0;

            DateTime tenureDate = currentOffer.TenureDate;
            DateTime effectiveDate = currentOffer.EffectiveDate;
            days = ( effectiveDate - tenureDate ).TotalDays;
            years = ( days / 365 );
            tenure = System.Convert.ToDecimal( years );

            //ldebugString.Text += "<br> Tenure " + tenure;

            string qryString = "";
            qryString = qryString + "SELECT dv.Id, dv.Value, CAST(av1.Value AS Decimal), CAST(av2.ValueAsNumeric AS Decimal), av3.Value ";
            qryString = qryString + "FROM DefinedValue dv ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av1 ON dv.Id = av1.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av2 ON dv.Id = av2.EntityId ";
            qryString = qryString + "LEFT OUTER JOIN AttributeValue av3 ON dv.Id = av3.EntityId ";
            qryString = qryString + "WHERE dv.DefinedTypeId = 148 ";
            qryString = qryString + "AND av1.AttributeId = 2151 "; // Min Years
            qryString = qryString + "AND av2.AttributeId = 2152 "; // Max Years
            qryString = qryString + "AND av3.AttributeId = 2153 "; // Days Per Month
            qryString = qryString + "ORDER BY dv.[Order]";

            SqlConnection conn = new SqlConnection( connString );
            conn.Open();
            SqlCommand cmd = new SqlCommand( qryString, conn );
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while ( rdr.Read() )
            {
                if ( ( tenure > rdr.GetDecimal( 2 ) ) && ( tenure < rdr.GetDecimal( 3 ) ) )
                {
                    vacationDays = rdr.GetString( 1 );
                    vacationRate = rdr.GetString( 4 );
                }
            }
            conn.Close();
        }

        /// <summary>
        /// Calculates the retirement.
        /// </summary>
        /// <param name="valueId">The value identifier.</param>
        private void CalculateRetirement( int valueId )
        {
            if ( isFullTime == true )
            {

            }

            decimal rate = 0;

            var rQry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            rQry = rQry.Where( row => row.AttributeId == 7719 && row.EntityId == valueId );
            foreach ( var qRow in rQry )
            {
                Decimal.TryParse( qRow.Value, out rate );
            }
            if ( isSalary )
            {
                currentOffer.RetirementEmployerAmount = baseSalary * rate;
            }
            else
            {
                currentOffer.RetirementEmployerAmount = hourlySalary * rate;
            }

            currentOffer.RetirementEmployerPercentage = rate;
        }

        /// <summary>
        /// Calculates the disability insurance.
        /// </summary>
        private void CalculateDisabilityInsurance()
        {
            decimal rate = 0;

            var diQry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            diQry = diQry.Where( row => row.Id == 7712 );
            foreach ( var qRow in diQry )
            {
                Decimal.TryParse( qRow.DefaultValue, out rate );
            }

            if ( isFullTime )
            {
                if ( isHourly )
                {
                    currentOffer.DisabilityEmployerPremium = ( hourlySalary / 12 ) * rate;
                }
                else
                {
                    currentOffer.DisabilityEmployerPremium = ( baseSalary / 12 ) * rate;
                }
            }
            else
            {
                currentOffer.DisabilityEmployerPremium = 0;
            }
        }

        /// <summary>
        /// Calculates the life insurance.
        /// </summary>
        private void CalculateLifeInsurance()
        {
            decimal rate = 0;

            var liQry = new AttributeService( new RockContext() ).Queryable().AsNoTracking();
            liQry = liQry.Where( row => row.Id == 7711 );
            foreach ( var qRow in liQry )
            {
                Decimal.TryParse( qRow.DefaultValue, out rate );
            }

            if ( isFullTime )
            {
                if ( isHourly )
                {
                    currentOffer.LifeInsuranceEmployerPremium = ( hourlySalary * 2 ) * rate;
                }
                else
                {
                    currentOffer.LifeInsuranceEmployerPremium = ( baseSalary * 2 ) * rate;
                }
            }
            else
            {
                currentOffer.LifeInsuranceEmployerPremium = 0;
            }
        }

        /// <summary>
        /// Calculates the medical premiums.
        /// </summary>
        /// <param name="valueId">The value identifier.</param>
        private void CalculateMedicalPremiums( int valueId )
        {
            decimal rate = 0;

            var mpQry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            mpQry = mpQry.Where( row => row.AttributeId == 2145 && row.EntityId == valueId );
            foreach ( var qRow in mpQry )
            {
                Decimal.TryParse( qRow.Value, out rate );
            }

            currentOffer.MedicalEmployerPremium = rate;

            var mp2Qry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            mp2Qry = mp2Qry.Where( row => row.AttributeId == 2146 && row.EntityId == valueId );
            foreach ( var qRow in mp2Qry )
            {
                Decimal.TryParse( qRow.Value, out rate );
            }

            currentOffer.MedicalEmployeePremium = rate;
        }

        /// <summary>
        /// Calculates the dental premiums.
        /// </summary>
        /// <param name="valueId">The value identifier.</param>
        private void CalculateDentalPremiums( int valueId )
        {
            decimal rate = 0;

            var dpQry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            dpQry = dpQry.Where( row => row.AttributeId == 2145 && row.EntityId == valueId );
            foreach ( var qRow in dpQry )
            {
                Decimal.TryParse( qRow.Value, out rate );
            }

            currentOffer.DentalEmployerPremium = rate;

            var dp2Qry = new AttributeValueService( new RockContext() ).Queryable().AsNoTracking();
            dp2Qry = dp2Qry.Where( row => row.AttributeId == 2146 && row.EntityId == valueId );
            foreach ( var qRow in dp2Qry )
            {
                Decimal.TryParse( qRow.Value, out rate );
            }

            currentOffer.DentalEmployeePremium = rate;
        }

        /// <summary>
        /// Converts the campus data.
        /// </summary>
        /// <param name="id">The identifier.</param>
        private void ConvertCampusData( int id )
        {
            string qryString = "";
            qryString = qryString + "SELECT dv.Guid ";
            qryString = qryString + "FROM AttributeValue av, DefinedValue dv ";
            qryString = qryString + "WHERE av.AttributeId = 11073 ";
            qryString = qryString + "AND av.EntityId = dv.Id ";
            qryString = qryString + "AND av.Value = " + id;


            SqlConnection conn = new SqlConnection( connString );
            conn.Open();
            SqlCommand cmd = new SqlCommand( qryString, conn );
            cmd.CommandType = System.Data.CommandType.Text;
            SqlDataReader rdr = cmd.ExecuteReader();

            while ( rdr.Read() )
            {
                campusGuid = rdr.GetGuid( 0 );
            }
            conn.Close();
        }

        /// <summary>
        /// Saves the copy details.
        /// </summary>
        private void SaveCopyDetails()
        {
            var dataContext = new RockContext();
            var newService = new JobOfferDetailService( dataContext );
            copyOffer = new JobOfferDetail();
            newService.Add( copyOffer );

            DateTime oDate = new DateTime( 1900, 1, 1 );
            DateTime eDate = new DateTime( 1900, 1, 1 );
            DateTime tDate = new DateTime( 1900, 1, 1 );

            oDate = DateTime.Parse( dpNewOfferDate.Text );

            if ( dpNewStartDate.Text != "" )
            {
                eDate = DateTime.Parse( dpNewStartDate.Text );
            }

            tDate = currentOffer.TenureDate;
            copyOffer.Title = tbNewTitle.Text;
            copyOffer.JobTitleValueId = currentOffer.JobTitleValueId;
            copyOffer.EmploymentStatusValueId = currentOffer.EmploymentStatusValueId;
            copyOffer.DepartmentValueId = currentOffer.DepartmentValueId;
            copyOffer.CampusId = currentOffer.CampusId;
            copyOffer.PersonAliasId = currentOffer.PersonAliasId;
            copyOffer.IsPastor = currentOffer.IsPastor;
            copyOffer.JobOfferStatusValueId = currentOffer.JobOfferStatusValueId;
            copyOffer.OfferDate = oDate;
            copyOffer.EffectiveDate = eDate;
            copyOffer.TenureDate = tDate;
            copyOffer.Comments = currentOffer.Comments;
            copyOffer.PersonnelRequestId = 0;
            copyOffer.CurrentBaseSalary = currentOffer.BaseSalary;
            copyOffer.CurrentHourlyRate = currentOffer.HourlyRate;
            copyOffer.WeeklyHours = currentOffer.WeeklyHours;
            copyOffer.HourlyRate = 0;
            copyOffer.BaseSalary = 0;
            copyOffer.HousingAllowance = currentOffer.HousingAllowance;
            copyOffer.SocialSecurityGrossUp = 0;
            copyOffer.TenureDate = currentOffer.TenureDate;
            copyOffer.MedicalPlanValueId = currentOffer.MedicalPlanValueId;
            copyOffer.DentalPlanValueId = currentOffer.DentalPlanValueId;
            copyOffer.MedicalEmployerPremium = currentOffer.MedicalEmployerPremium;
            copyOffer.MedicalEmployeePremium = currentOffer.MedicalEmployeePremium;
            copyOffer.DentalEmployerPremium = currentOffer.DentalEmployerPremium;
            copyOffer.DentalEmployeePremium = currentOffer.DentalEmployeePremium;
            copyOffer.LifeInsuranceEmployerPremium = currentOffer.LifeInsuranceEmployerPremium;
            copyOffer.DisabilityEmployerPremium = currentOffer.DisabilityEmployerPremium;
            copyOffer.MedicalReimbursement = currentOffer.MedicalReimbursement;
            copyOffer.HSAContribution = currentOffer.HSAContribution;
            copyOffer.WorkersCompRate = currentOffer.WorkersCompRate;
            copyOffer.WorkersCompPremium = currentOffer.WorkersCompPremium;
            copyOffer.RetirementEmployerPercentage = currentOffer.RetirementEmployerPercentage;
            copyOffer.RetirementEmployerAmount = currentOffer.RetirementEmployerAmount;
            copyOffer.RetireEmplPercentageValueId = currentOffer.RetireEmplPercentageValueId;
            copyOffer.MileageReimbursement = currentOffer.MileageReimbursement;
            copyOffer.CellPhoneReimbursement = currentOffer.CellPhoneReimbursement;
            copyOffer.Wellness = currentOffer.Wellness;
            copyOffer.ContinuingEducation = currentOffer.ContinuingEducation;
            copyOffer.OtherBenefits = currentOffer.OtherBenefits;
            copyOffer.OtherDescription = currentOffer.OtherDescription;
            copyOffer.OtherBenefits2 = currentOffer.OtherBenefits2;
            copyOffer.OtherDescription2 = currentOffer.OtherDescription2;
            copyOffer.EmployerPayrollTax = 0;
            copyOffer.VacationDaysRate = currentOffer.VacationDaysRate;
            copyOffer.VacationDaysAnnual = currentOffer.VacationDaysAnnual;
            copyOffer.SickDays = currentOffer.SickDays;
            copyOffer.Active = currentOffer.Active;
            copyOffer.Comments = currentOffer.Comments;

            dataContext.SaveChanges();

        }

        #endregion
    }
}