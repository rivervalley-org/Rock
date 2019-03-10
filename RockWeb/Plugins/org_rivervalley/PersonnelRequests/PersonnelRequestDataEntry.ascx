<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PersonnelRequestDataEntry.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PersonnelRequests.PersonnelRequestDataEntry" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>   
        <asp:Panel ID="pnlError" runat="server" CssClass="panel panel-block" Visible ="false">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger ">
                            <Rock:RockLiteral ID="lErrorString" runat="server" />
                        </div>  
                    </div>                   
                </div> 
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlReview" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfRequestIdReview" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list"></i>
                    Personnel Request Review
                </h1>                
            </div>
            <div class="panel-body">
                <asp:Literal ID="lReviewDisplayString" runat="server" />                    
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDataPartOne" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Personnel Request Data Entry
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="vsDataPartOne" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddRequester" runat="server" Label="Requesting Employee" Required="false" Visible=" true" />
                    </div>
                    <div class="col-md-6">                        
                        <br><i>Note: Change to appropriate employee if you are filling this in, or on someone elses behalf.</i><br>&nbsp;<br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:DatePicker ID="dpRequestDate" runat="server" Label="Request Date"  Required="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCampus" runat="server" Label="Requesting Campus" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
						<Rock:RockRadioButtonList ID="rbType" runat="server" Required="true" Label="Request Type" RepeatDirection="Horizontal">
							<asp:ListItem Text="New Hire" Value="1" ></asp:ListItem>
							<asp:ListItem Text="Replacement" Value="2"></asp:ListItem>
						</Rock:RockRadioButtonList>
                    </div>
                    <div class="col-md-3">
						<Rock:RockRadioButtonList ID="rbState" runat="server" Required="true" Label="Position Type" RepeatDirection="Horizontal">
							<asp:ListItem Text="Permanent" Value="1" ></asp:ListItem>
							<asp:ListItem Text="Temporary" Value="2"></asp:ListItem>
						</Rock:RockRadioButtonList>
                    </div>
                    <div class="col-md-3">
						<Rock:RockRadioButtonList ID="rbStatus" runat="server" Required="true" Label="Position Status" RepeatDirection="Horizontal">
							<asp:ListItem Text="Full Time" Value="1" ></asp:ListItem>
							<asp:ListItem Text="Part Time" Value="2"></asp:ListItem>
						</Rock:RockRadioButtonList>
                    </div>                                                        
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:PersonPicker runat="server" ID="ppCandidate" Label="Candidate" Required="false"/>
                    </div>
                    <div class="col-md-6">                        
                        <br><i>Note: Leave candidate blank if the person is not currently in the Rock database. You will be able to manually add a name later.</i><br>&nbsp;<br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddJobTitle" runat="server" Label="Proposed Job Title" Required="false" />                        
                    </div>
                    <div class="col-md-6">                        
                        <br><i>Note: Leave job title blank if the title is not currently in the Rock pull down list. You will be able to manually add a title later.</i><br>&nbsp;<br>
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddProposedSupervisor" runat="server" Label="Proposed Supervisor" Required="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddDepartment" runat="server" Label="Proposed Department" Required="false" />
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:DatePicker ID="dpStartDate" runat="server" Label="Start Date"  Required="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:DatePicker ID="dpTenureDate" runat="server" Label="Tenure Date"  Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnDataPartOne" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnDataPartOne_Click" />
                    <asp:LinkButton ID="btnDataPartOneCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDataPartTwo" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfRequestIdDataPartTwo" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Personnel Request Data Entry
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockTextBox ID="tbCandidate" runat="server" Label="Candidate Name (manual entry)" Required="false" Visible="false" />
                        <Rock:RockLiteral ID="lCandidate" runat="server" Label="Candidate"  Visible="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockTextBox ID="tbJobTitle" runat="server" Label="Proposed Job Title (manual entry)" Required="false" Visible="false" />
                        <Rock:RockLiteral ID="lJobTitle" runat="server" Label="Proposed Job Title"  Visible="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpEndDate" runat="server" Label="End Date"  Required="true" Visible="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddReplacement" runat="server" Label="Replacement For" Required="false" Visible="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCurrentSupervisor" runat="server" Label="Current Supervisor" Required="false" Visible="false" />
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <Rock:RockTextBox ID="tbHours" runat="server" Label="Hours per Week" Required="false" Visible="true"  />
                    </div>
                    <div class="col-md-2">
                        <Rock:RockTextBox ID="tbSalaryRange" runat="server" Label="Salary Range" Required="false" Visible="true"  />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <Rock:RockTextBox ID="tbJobDescription" runat="server" Label="Main Responsibilities/Duties" Required="false" Visible="false" TextMode="MultiLine" Rows="2"  />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <Rock:RockTextBox ID="tbSpecialNotes" runat="server" Label="Special Notes" Required="false" Visible="true" TextMode="MultiLine" Rows="2"  />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">                                               
                        <Rock:FileUploader ID="fuJobDescription" runat="server" Label="Job Description" IsBinaryFile="false" FileName="fuTest" RootFolder="~/Content/InternalSite/HR/PRF_Job_Descriptions" OnFileUploaded="fuJobDescription_UpLoad" Visible="false" />                        
                    </div>                    
                    <div class="col-md-6">                                               
                        <b><asp:Literal ID="lUploadStatus" runat="server" Visible="false" /></b>
                    </div> 
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnDataPartTwo" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnDataPartTwo_Click" />
                    <asp:LinkButton ID="btnDataPartTwoCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlSchedule" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfRequestIdSchedule" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Personnel Request Data Entry
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-2">
                        <b>Schedule:</b>                
                    </div>
                    <div class="col-md-6">                        
                        <br><i>Note: Enter the anticipated total hours for each day .</i><br>&nbsp;<br>
                    </div>
                </div>                 
                <div class="row">
                    <div class="col-md-2">
					    <Rock:RockTextBox ID="tbSundayHours" runat="server" Label="Sunday" Required="false" Visible="true"  />	
                    </div>
                    <div class="col-md-2">
					    <Rock:RockTextBox ID="tbMondayHours" runat="server" Label="Monday" Required="false" Visible="true"  />	
                    </div>
                    <div class="col-md-2">
				        <Rock:RockTextBox ID="tbTuesdayHours" runat="server" Label="Tuesday" Required="false" Visible="true"  />	
                    </div>                                                        
                    <div class="col-md-2">
					    <Rock:RockTextBox ID="tbWednesdayHours" runat="server" Label="Wednesday" Required="false" Visible="true"  />		
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
					    <Rock:RockTextBox ID="tbThursdayHours" runat="server" Label="Thursday" Required="false" Visible="true"  />	
                    </div>
                    <div class="col-md-2">
				        <Rock:RockTextBox ID="tbFridayHours" runat="server" Label="Friday" Required="false" Visible="true"  />	
                    </div>                                                        
                    <div class="col-md-2">
					    <Rock:RockTextBox ID="tbSaturdayHours" runat="server" Label="Saturday" Required="false" Visible="true"  />		
                    </div>  
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnSchedule" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSchedule_Click" />
                    <asp:LinkButton ID="btnScheduleCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>

        <asp:Panel ID="pnlApprovalRQ" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfRequestIdApprovalRQ" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Needed
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-9">                        
                        <br><i><font color = 'blue'>BY TYPING YOUR FULL NAME HERE YOU ARE SIGNING THIS DOCUMENT</font></i><br>&nbsp;<br>
                    </div>                    
                </div>
                <div class="row">                
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbApprovalRQ" runat="server" Label="Requester's Signature" Required="true" Visible="true"  />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalRQ" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalRQ_Click" />
                    <asp:LinkButton ID="btnAppovalRQCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <b>Debug Output:</b>
                        <Rock:RockLiteral ID="lDebugString" runat="server" />
                    </div>                   
                </div>                 
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>