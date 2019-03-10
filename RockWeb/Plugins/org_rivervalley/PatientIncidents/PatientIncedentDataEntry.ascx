<%@ Control Language="C#" AutoEventWireup="true" CodeFile="PatientIncedentDataEntry.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PatientIncidents.PatientIncedentDataEntry" %>
<asp:HiddenField ID="hfCurrentIncidentId" runat="server" />
<asp:HiddenField ID="hfCurrentIncidentGuid" runat="server" />

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
        <asp:Panel ID="pnlIncident" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Patient Incident
                </h1>
            </div>
            <div class="panel-body">
                <asp:ValidationSummary ID="vsIncident" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <div class="row">
                    <div class="col-md-6">
                        <Rock:PersonPicker runat="server" ID="ppPerson" Label="Patient" Required="false"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Rock:RockDropDownList ID="ddCampus" runat="server" Label="Campus" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddLocation" runat="server" Label="Location" Required="false" />
                        <asp:LinkButton ID="btnLocation" runat="server" Text="Add New Location" CssClass="btn btn btn-link" OnClick="btnLocation_Click" />
                    </div>
                    
                    
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Rock:RockTextBox ID="tbRoom" runat="server" Label="Room" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <Rock:RockTextBox ID="tbPhone" runat="server" Label="Phone (on location)" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbReason" runat="server" Label="Reason" TextMode="MultiLine" Rows="2" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DateTimePicker ID="dpDateAdmitted" runat="server" Label="Date/Time Admitted" DatePickerType="Date" Required="false" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbNote" runat="server" Label="Note" TextMode="MultiLine" Rows="2" Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" />                    
                    <asp:LinkButton ID="btnReleaseUpdate" runat="server" Text="Released Update" CssClass="btn btn-primary" CausesValidation="false" OnClick="btnReleaseUpdate_Click" Visible="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlVisits" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Patient Visits
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <table class="grid-table table table-bordered table-striped table-hover">
                            <tr>
                                <th style="text-align: left;">Date</th>
                                <th style="text-align: left;">Visitor</th>
                                <th style="text-align: left;">Length</th>
                                <th style="text-align: left;">Notes</th>
                                <th style="text-align: left;"></th>
                            </tr>
                            <asp:Literal ID="lVisitsString" runat="server" />
                        </table>
                    </div>                   
                </div> 
                <div class="row">
                    <div class="col-md-12">
                        &nbsp;
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnNewVisit" runat="server" Text="Add Visit" CssClass="btn btn-primary" OnClick="btnNewVisit_Click" />                    
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlReleased" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Patient Incident Release
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:DateTimePicker ID="dpDateReleased" runat="server" Label="Date/Time Released" DatePickerType="Date" Required="true" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbReleasedNote" runat="server" Label="Note" TextMode="MultiLine" Rows="2" Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnReleasedSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnReleasedSave_Click" />                    
                    <asp:LinkButton ID="btnReleaseCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlLocation" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-edit"></i>
                    Patient Incident New Location
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbLocation" runat="server" Label="New Location" Required="False" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnLocationSave" runat="server" Text="Add" CssClass="btn btn-primary" OnClick="btnLocationSave_Click" />                    
                    <asp:LinkButton ID="btnLocationCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>                            
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>