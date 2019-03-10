<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PersonnelRequestDataEdit.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PersonnelRequests.PersonnelRequestDataEdit" %>
<asp:HiddenField ID="hfPersonnelRequestId" runat="server" />
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
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list"></i>
                    Personnel Request Review
                </h1>                
            </div>
            <div class="panel-body">
                <asp:Literal ID="lReviewDisplayString" runat="server" /> <br>&nbsp;<br>                   
                <div class="actions">
                    <asp:LinkButton ID="btnReviewEdit" runat="server" Text="Edit" CssClass="btn btn-primary" OnClick="btnReviewEdit_Click" Visible="false" />                    
                    <asp:LinkButton ID="btnReviewREQApproval" runat="server" Text="Requester Approval" CssClass="btn btn-primary" OnClick="btnReviewREQApproval_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewDSApproval" runat="server" Text="DS Approval" CssClass="btn btn-primary" OnClick="btnReviewDSApproval_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewDLSApproval" runat="server" Text="DLS Approval" CssClass="btn btn-primary" OnClick="btnReviewDLSApproval_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewSLTApproval" runat="server" Text="SLT Approval" CssClass="btn btn-primary" OnClick="btnReviewSLTApproval_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewAllocations" runat="server" Text="Allocations" CssClass="btn btn-primary" OnClick="btnReviewAllocations_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewHRTasks" runat="server" Text="HR Tasks" CssClass="btn btn-primary" OnClick="btnReviewHRTasks_Click" Visible="false" />
                    <asp:LinkButton ID="btnReviewCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDataEdit" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Personnel Request Data Edit
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="vsDataEdit" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <div class="row">
                    <div class="col-md-4">
                        <b>Requester</b><br><asp:Literal ID="lReqester" runat="server" /> 
                    </div>
                    <div class="col-md-4">                        
                        <b>Request Date</b><br><asp:Literal ID="lRequestDate" runat="server" />
                    </div>
                    <div class="col-md-3">
                        <b>Campus</b><br><asp:Literal ID="lCampus" runat="server" /><br>&nbsp;<br>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
						<Rock:RockRadioButtonList ID="rbType" runat="server" Required="true" Label="Request Type" RepeatDirection="Horizontal">
							<asp:ListItem Text="New Hire" Value="1" ></asp:ListItem>
							<asp:ListItem Text="Replacement" Value="2"></asp:ListItem>
						</Rock:RockRadioButtonList>
                    </div>
                    <div class="col-md-4">
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
                        <Rock:DatePicker ID="dpStartDate" runat="server" Label="Start Date"  Required="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:DatePicker ID="dpTenureDate" runat="server" Label="Tenure Date"  Required="false" />
                    </div>
                    <div class="col-md-3">
                        <Rock:DatePicker ID="dpEndDate" runat="server" Label="End Date"  Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:PersonPicker runat="server" ID="ppCandidate" Label="Candidate" Required="false"/>
                    </div>
                    <div class="col-md-6">                        
                        <Rock:RockTextBox ID="tbCandidate" runat="server" Label="Candidate Name (manual entry)" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddJobTitle" runat="server" Label="Proposed Job Title" Required="false" />                        
                    </div>
                    <div class="col-md-6">                        
                        <Rock:RockTextBox ID="tbJobTitle" runat="server" Label="Proposed Job Title (manual entry)" Required="false"  />
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
                        <Rock:RockDropDownList ID="ddReplacement" runat="server" Label="Replacement For" Required="false" />
                    </div>
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCurrentSupervisor" runat="server" Label="Current Supervisor" Required="false" />
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
                <div class="row">
                    <div class="col-md-2">                                               
                        <Rock:FileUploader ID="fuJobDescription" runat="server" Label="Job Description" IsBinaryFile="false" FileName="fuTest" RootFolder="~/Content/InternalSite/HR/PRF_Job_Descriptions" OnFileUploaded="fuJobDescription_UpLoad" Visible="false" />                        
                    </div>                    
                    <div class="col-md-6">                                               
                        <b><asp:Literal ID="lUploadStatus" runat="server" Visible="false" /></b> 
                        <asp:LinkButton ID="btnFileDelete" runat="server" Text="Delete uploaded file" CssClass="btn btn-link" OnClick="btnFileDelete_Click" CausesValidation="false" Visible="false"/>
                    </div> 
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnDataEdit" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnDataEdit_Click" />
                    <asp:LinkButton ID="btnDataEditCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlAllocations" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfAllocationsStatus" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Request Allocations
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="vsAllocations" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbAllocationsWarning" runat="server" NotificationBoxType="Danger" />
                <div class="row">                
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCampusAllocOne" runat="server" Label="Campus Name" Required="false" />
                    </div>
                    <div class="col-md-2">
                        <Rock:RockTextBox ID="tbAllocOneValue" runat="server" Label="Allocation" Required="false"  />
                    </div>
                </div>
                <div class="row">                
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCampusAllocTwo" runat="server" Label="Campus Name" Required="false" />
                    </div>
                    <div class="col-md-2">
                        <Rock:RockTextBox ID="tbAllocTwoValue" runat="server" Label="Allocation" Required="false"   />
                    </div>
                </div>
                <div class="row">                
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddCampusAllocThree" runat="server" Label="Campus Name" Required="false" />
                    </div>
                    <div class="col-md-2">
                        <Rock:RockTextBox ID="tbAllocThreeValue" runat="server" Label="Allocation" Required="false"  />
                    </div>
                </div>
				
                <div class="actions">
                    <asp:LinkButton ID="btnAllocations" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnAllocations_Click" />
                    <asp:LinkButton ID="btnAllocationsCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlApprovalRQ" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Needed
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleRQ" runat="server" /> 
                    </div>
                </div>
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
        <asp:Panel ID="pnlApprovalDS" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Needed
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleDS" runat="server" /> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">                        
                        <br><i><font color = 'blue'>BY TYPING YOUR FULL NAME HERE YOU ARE SIGNING THIS DOCUMENT</font></i><br>&nbsp;<br>
                    </div>                    
                </div>
                <div class="row">                
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbApprovalDS" runat="server" Label="Direct Supervisor's Signature" Required="false" Visible="true"  />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalDS" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalDS_Click" />
                    <asp:LinkButton ID="btnAppovalDSCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlApprovalDLS" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Needed
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleDLS" runat="server" /> 
                    </div>
                </div>
                <div class="col-md-">
					<Rock:RockRadioButtonList ID="rbDLSApproval" runat="server" Required="true" Label="Request Type" RepeatDirection="Horizontal">
						<asp:ListItem Text="Approve" Value="approve" ></asp:ListItem>
						<asp:ListItem Text="Do not Approve" Value="deny"></asp:ListItem>
					</Rock:RockRadioButtonList>
                </div>                
                <div class="row">
                    <div class="col-md-9">                        
                        <br><i><font color = 'blue'>BY TYPING YOUR FULL NAME HERE YOU ARE SIGNING THIS DOCUMENT</font></i><br>&nbsp;<br>
                    </div>                    
                </div>
                <div class="row">                
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbApprovalDLS" runat="server" Label="Dotted Line Supervisor/SLT's  Signature" Required="false" Visible="true"  />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalDLS" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalDLS_Click" />
                    <asp:LinkButton ID="btnAppovalDLSCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlApprovalSLT" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Needed
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleSLT" runat="server" /><br>&nbsp;<br> 
                    </div>
                </div>
                <div class="col-md-">
					<Rock:RockRadioButtonList ID="rbSLTApproval" runat="server" Required="true" Label="Request Type" RepeatDirection="Horizontal">
						<asp:ListItem Text="Approve" Value="approve" ></asp:ListItem>
						<asp:ListItem Text="Do not Approve" Value="deny"></asp:ListItem>
					</Rock:RockRadioButtonList>
                </div>
                <div class="row">
                    <div class="col-md-9">                        
                        <br><i><font color = 'blue'>BY TYPING YOUR FULL NAME HERE YOU ARE SIGNING THIS DOCUMENT</font></i><br>&nbsp;<br>
                    </div>                    
                </div>
                <div class="row">                
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbApprovalSLT" runat="server" Label="SLT's Signature" Required="false" Visible="true"  />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalSLT" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalSLT_Click" />
                    <asp:LinkButton ID="btnAppovalSLTCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlApprovalSelectionDLS" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Selection
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleSelectionDLS" runat="server" /> <br>&nbsp;<br />
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddApproverDLS" runat="server" Label="Dotted Line Supervisor Approval Needed" Required="true" Visible="true" />
                    </div>                  
                </div>                
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalSelectionDLS" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalSelectionDLS_Click" />
                    <asp:LinkButton ID="btnApprovalSelectionDLSCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlApprovalSelectionSLT" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Approval Selection
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleSelectionSLT" runat="server" /> <br>&nbsp;<br>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddApproverSLT" runat="server" Label="SLT Approval Needed" Required="false" Visible="true" />
                    </div>                  
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnApprovalSelectionSLT" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnApprovalSelectionSLT_Click" />
                    <asp:LinkButton ID="btnApprovalSelectionSLTCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlHRTasks" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    HR Tasks
                </h1>
            </div>
            <div class="panel-body">
                 <div class="row">
                    <div class="col-md-4">
                        <b>Job Title</b><br><asp:Literal ID="lJobTitleHR" runat="server" />  <br>&nbsp;<br>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockRadioButtonList ID="rbHRActions" runat="server" Required="false" Label="HR Actions" >
						    <asp:ListItem Text="Completed" Value="complete" ></asp:ListItem>
						    <asp:ListItem Text="Complete and Create Job Offer Record" Value="convert"></asp:ListItem>
                            <asp:ListItem Text="Denied" Value="deny"></asp:ListItem>
						    <asp:ListItem Text="Inactive" Value="inactive"></asp:ListItem>
                            <asp:ListItem Text="In Process" Value="active"></asp:ListItem>
					    </Rock:RockRadioButtonList>
                    </div>
                    <div class="col-md-8">
                    The following Radio Button Choices take these actions
                        <ul>
                            <li>None = No changes made</li>
                            <li>Completed = The PRF is complete</li>
                            <li>Completed and Create Job Offer = The PRF is complete and a NEW Job Offer is created</li>
                            <li>Denied = Voids all signatures and the PRF marked Denied</li>
                            <li>Inactive = Voids all signatures and the PRF marked INACTIVE</li>
                            <li>In Process = Voids all signatures and the PRF marked In Process (allows the requestor to make edits)</li>
                        </ul>
                        
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-12">
                        * The Assign DLS and Assign SLT buttons are used by HR to assign the Direct Supervisor and the Senior Leadership Person
                        <br>* Remember that Notes can be inserted at any of the levels as referenece points to discussions
                    </div>                    
                </div>
                <div class="row">
                    <div class="col-md-12">
                      &nbsp;
                    </div>                    
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnHRTasksSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnHRTasksSave_Click" />
                    <asp:LinkButton ID="btnHRAssignDLS" runat="server" Text="Assign DLS" CssClass="btn btn-primary" OnClick="btnHRAssignDLS_Click" Visible="false"  /> 
                    <asp:LinkButton ID="btnHRAssignSLT" runat="server" Text="Assign SLT" CssClass="btn btn-primary" OnClick="btnHRAssignSLT_Click" Visible ="false" />
                    <asp:LinkButton ID="btnHRTasksCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>                        
        </asp:Panel>
        <asp:Panel ID="pnlNotes" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list"></i>
                    Notes
                </h1>                
            </div>
            <div class="panel-body">
                <asp:Literal ID="lNotesString" runat="server" /> <br>&nbsp;<br>                   
                <div class="actions">
                    <asp:LinkButton ID="btnNoteAdd" runat="server" Text="Add" CssClass="btn btn-primary" OnClick="btnNoteAdd_Click" Visible="true" />                    
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