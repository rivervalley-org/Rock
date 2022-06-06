<%@ Control Language="C#" AutoEventWireup="true" CodeFile="JobOfferDataEntry.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.JobOffers.JobOfferDataEntry" %>
<asp:HiddenField ID="hfJobOfferId" runat="server" />
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        
        <asp:Panel ID="pnlJobOffer" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-edit"></i> Job Offer Details</h1>
            </div>
            <div class="panel-body">
	        <div class="container-fluid" >     
                <div class="row">
                    <div class="col-sm-12">
                        <h4>Personal Information</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Offer Title</strong><br>
                        <asp:Literal ID="lOfferTitle" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Offer Date</strong><br>
                        <asp:Literal ID="lOfferDate" runat="server" /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Planned Start Date</strong><br>
                        <asp:Literal ID="lStartDate" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Offer Status</strong><br>
                        <asp:Literal ID="lOfferStatus" runat="server" /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Name</strong><br>
                        <asp:Literal ID="lName" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Email</strong><br>
				        <asp:Literal ID="lEmail" runat="server" /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Address</strong><br>
                        <asp:Literal ID="lAddress" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Phone</strong><br>
				        <asp:Literal ID="lPhone" runat="server" /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Department</strong><br>
                        <asp:Literal ID="lDepartment" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Position</strong>   <br>
                        <asp:Literal ID="lPosition" runat="server" /><br />
                    </div>
                </div>        
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Status</strong><br>
                        <asp:Literal ID="lStatus" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Assigned Campus</strong><br>
                        <asp:Literal ID="lCampus" runat="server" /><br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <strong>Tenure Date</strong><br>
                        <asp:Literal ID="lTenureDate" runat="server" /><br />
                    </div>
                    <div class="col-sm-6">
                        <strong>Is Pastor</strong><br>
                        <asp:Literal ID="lIsPastor" runat="server" /><br />
                    </div>
                </div>		
                <div class="row">
			        <div class="col-sm-12">
				        <strong>Comments</strong><br>
				        <asp:Literal ID="lComments" runat="server" /><br />
			        </div>
		        </div>		
		        <div class="row">
			        <div class="col-sm-12">
                    <hr>
                    <h4>Compensation</h4>
			        </div>
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Weekly Hours</strong><br>
				        <asp:Literal ID="lWeeklyHours" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Annual Hours</strong><br>
				        <asp:Literal ID="lAnnualHours" runat="server" /><br />
			        </div>        
		        </div>
                <div class="row">
			        <div class="col-sm-6">
				        <strong>Current Base Salary</strong><br>
				        $<asp:Literal ID="lCurrentBaseSalary" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Current Hourly Rate</strong><br>
				        $<asp:Literal ID="lCurrentHourlyRate" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>New Base Salary</strong><br>
				        $<asp:Literal ID="lBaseSalary" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Hourly Rate</strong><br>
				        $<asp:Literal ID="lHourlyRate" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Housing Allowance</strong><br>
				        $<asp:Literal ID="lHousing" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Social Security Gross Up</strong><br>
				        $<asp:Literal ID="lSSGrossUp" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Taxable Salary</strong><br>
				        $<asp:Literal ID="lTaxableSalary" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Total Salary</strong><br>
				        $<asp:Literal ID="lTotalSalary" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-12">
				        <hr>
				        <h4>Benefits</h4>
			        </div>
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Vacation Days</strong><br>                    
				        <asp:Literal ID="lVacationDays" runat="server" /> (Accrues <asp:Literal ID="lVacationRate" runat="server" /> days per month)<br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Sick Days</strong><br>
				        <asp:Literal ID="lSickDays" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Medical Insurance</strong><br>
				        <asp:Literal ID="lMedicalPlan" runat="server" /> - $<asp:Literal ID="lMedicalPremium" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Dental Insurance</strong><br>
				        <asp:Literal ID="lDentalPlan" runat="server" /> - $<asp:Literal ID="lDentalPremium" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Life Insurance</strong><br>
				        $<asp:Literal ID="lLifeInsurance" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Long Term Disability</strong><br>
				        $<asp:Literal ID="lDisability" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Medical Reimbursement</strong><br>
				        $<asp:Literal ID="lMedicalReimbursement" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>HSA Contribution</strong><br>
				        $<asp:Literal ID="lHSAContribution" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>403b Contribution Percentage</strong><br>
				        <asp:Literal ID="lRetirementPercentage" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>403b Contribution Amount</strong><br>
				        $<asp:Literal ID="lRetirementAmount" runat="server" /><br />
			        </div>        
		        </div> 
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Mileage Reimbursement</strong><br>
				        $<asp:Literal ID="lMileageReimbursement" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Wellness</strong><br>
				        $<asp:Literal ID="lWellness" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong>Cell Phone Reimbursement</strong><br>
				        $<asp:Literal ID="lCellPhone" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Continuing Education</strong><br>
				        $<asp:Literal ID="lEducation" runat="server" /><br />
			        </div>        
		        </div>
		        <div class="row">
			        <div class="col-sm-6">
				        <strong><asp:Literal ID="lOtherDescription" runat="server" /></strong><br>
				        $<asp:Literal ID="lOther" runat="server" /><br />
			        </div>
                    <div class="col-sm-6">
				        <strong><asp:Literal ID="lOtherDescription2" runat="server" /></strong><br>
				        $<asp:Literal ID="lOther2" runat="server" /><br />
			        </div>
                </div>
		        <div class="row">
                    <div class="col-sm-6">
				        <strong>Workers Compensation</strong><br>
				        $<asp:Literal ID="lWorkersComp" runat="server" /><br />
			        </div>
			        <div class="col-sm-6">
				        <strong>Employer Payroll Tax</strong><br>
				        $<asp:Literal ID="lPayrollTax" runat="server" /><br />
			        </div>      
		        </div>
                <div class="row">
                    <div class="col-sm-12">
                        &nbsp;
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnJOEdit" runat="server" Text="Edit" CssClass="btn btn-primary" OnClick="btnJOEdit_Click" />
				    <asp:LinkButton ID="btnJOCompensation" runat="server" Text="Compensation" CssClass="btn btn-primary" OnClick="btnJOCompensation_Click" />
				    <asp:LinkButton ID="btnJOBenefits" runat="server" Text="Benefits" CssClass="btn btn-primary" OnClick="btnJOBenefits_Click" />
                    <asp:LinkButton ID="btnPrint" runat="server" Text="Print" CssClass="btn btn-primary" OnClick="btnPrint_Click" />
                    <asp:LinkButton ID="btnCopy" runat="server" Text="Copy" CssClass="btn btn-primary" OnClick="btnJOCopy_Click" />
                    <asp:LinkButton ID="btnUpdate" runat="server" Text="Update" CssClass="btn btn-primary" OnClick="btnJOUpdate_Click" />
                    <asp:LinkButton ID="btnCancelReview" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>    						
            </div>
        </asp:Panel>
        
        <asp:Panel ID="pnlJobDetails" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Job Offer Details
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="valSummaryTop" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbTitle" runat="server" Label="Offer Title" Required="true" />
                    </div>
                    <div class="col-md-6">
                        <Rock:PersonPicker runat="server" ID="ppPerson" Label="Name" Required="false"/>	
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddOfferStatus" runat="server" Label="Offer Status" Required="true"  />
                    </div>                    
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpOfferDate" runat="server" Label="Offer Date" DatePickerType="Date" Required="false" />
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddDepartment" runat="server" Label="Department" Required="true" />
                    </div>
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpEffectiveDate" runat="server" Label="Planned Start Date" DatePickerType="Date" Required="false" />
                    </div>
                </div>
                <div class="row">                    
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddCampus" runat="server" Label="Assigned Campus" Required="true" />
                    </div>
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpTenureDate" runat="server" Label="Tenure Date" DatePickerType="Date" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddStatus" runat="server" Label="Status" Required="true" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddPosition" runat="server" Label="Position" Required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        
                    </div>
                    <div class="col-md-6">
                       <font color="#EE7624"> <span style="font-size: 12px;">Note: If the position isn't listed, select the 1st Title, SAVE and Click the "Add New Position" link at left. Then edit the Job Offer.</span></font> <br>&nbsp;
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbComment" runat="server" Label="Comments" Required="false" />                     
                    </div>
                    <div class="col-md-6">
                        <Rock:RockCheckBox ID="cbIsPastor" runat="server" Label="Is Pastor" Text="Yes" />
                    </div>
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnJobDetailsSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnJobDetailsSave_Click" />
                    <asp:LinkButton ID="btnCancelEdit" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlCompensation" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Job Offers Compensation
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbWeeklyHours" runat="server" Label="Weekly Hours" Required="false" />
                    </div>
                </div>                
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbCurrentBaseSalary" runat="server" Label="Current Base Salary" Required="false" Visible="false" />
                        <Rock:RockTextBox ID="tbCurrentHourlyRate" runat="server" Label="Current Hourly Rate" Required="false" Visible="false" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbBaseSalary" runat="server" Label="New Base Salary" Required="false" Visible="false" />
                        <Rock:RockTextBox ID="tbHourlyRate" runat="server" Label="New Hourly Rate" Required="false" Visible="false" />
                    </div>
				</div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbHousing" runat="server" Label="Housing" Required="false" />
                    </div>
                </div>                
                <div class="actions">
                    <asp:LinkButton ID="btnCompensationSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnCompensationSave_Click" />
                    <asp:LinkButton ID="btnCancelHourly" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlBenefits" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Job Offers Benefits
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddMedicalPlan" runat="server" Label="Medical Insurance" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddDentalPlan" runat="server" Label="Dental Insurance" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbMedicalReimbursement" runat="server" Label="Medical Reimbursement" Required="false" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbHSAContribution" runat="server" Label="HSA Contribution" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddRetirementPercent" runat="server" Label="403b Contribution Rate" />
                    </div>
                    <div class="col-md-6">
						<Rock:RockTextBox ID="tbRetirementAmount" runat="server" Label="403b Contribution Amount (*Flat Rate Only)" Required="false" />

                    </div>
                </div>                                
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbCellPhone" runat="server" Label="Cell Phone Reimbursement" Required="false" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbMileage" runat="server" Label="Mileage Reimbursement" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbWellness" runat="server" Label="Wellness Contribution" Required="false" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbEducation" runat="server" Label="Continuing Education" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockLiteral ID="lVacationDisplayed" runat="server" Label="Vacation Days" Visible="false" />
                        <Rock:RockTextBox ID="tbVacationDays" runat="server" Label="Vacation Days" Required="false" Visible="false" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbSickDays" runat="server" Label="Sick Days" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbOtherDescription" runat="server" Label="Other Description" Required="false" />
                        
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbOther" runat="server" Label="Other Amount" Required="false" />
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbOtherDescription2" runat="server" Label="Other Description 2" Required="false" />
                        
                    </div>
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbOther2" runat="server" Label="Other Amount 2" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnBenefitsSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnBenefitsSave_Click" />
                    <asp:LinkButton ID="btnCancelBenefits" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlEmployeeNumber" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfEmployeeNumber" runat="server" />
            <asp:HiddenField ID="hfEmployeeRockId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Employee Number
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbEmployeeNo" runat="server" Label="Employee Number" Required="false" />
                    </div>
                </div>                               
              
                <div class="actions">
                    <asp:LinkButton ID="btnEmployeeNumberSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnEmployeeNumberSave_Click" />
                    <asp:LinkButton ID="employeeNumberCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlCopyRecord" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Job Offers Copy
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbNewTitle" runat="server" Label="New Title" Required="false" />
                    </div>
                </div>                
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpNewOfferDate" runat="server" Label="New  Offer Date" DatePickerType="Date" Required="false" />
                    </div>
				</div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpNewStartDate" runat="server" Label="New Start Date" DatePickerType="Date" Required="false" />
                    </div>
				</div>
              
                <div class="actions">
                    <asp:LinkButton ID="btnCopyRecordSave" runat="server" Text="Copy" CssClass="btn btn-primary" OnClick="btnCopyRecordSave_Click" />
                    <asp:LinkButton ID="lnkCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            An error has occurred in processing your request.
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <b>Debug Output:</b>
                        <Rock:RockLiteral ID="ldebugString" runat="server" />
                    </div>                   
                </div>
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>