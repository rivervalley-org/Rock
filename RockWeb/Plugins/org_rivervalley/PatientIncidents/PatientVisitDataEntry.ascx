<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PatientVisitDataEntry.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PatientIncidents.PatientVisitDataEntry" %>
<asp:HiddenField ID="hfCurrentVisitId" runat="server" />
<asp:HiddenField ID="hfPatientIncidentId" runat="server" />

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>       
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
        <asp:Panel ID="pnlVisit" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Patient Visit
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="vsVisit" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockLiteral ID="lPatientName" runat="server" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:PersonPicker runat="server" ID="ppPerson" Label="Visitor" Required="true"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DateTimePicker ID="dpDateVisited" runat="server" Label="Date/Time Visited" DatePickerType="Date" Required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbNote" runat="server" Label="Note" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Rock:RockTextBox ID="tbLength" runat="server" Label="Visit Length ( in minutes)" Required="true" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
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



