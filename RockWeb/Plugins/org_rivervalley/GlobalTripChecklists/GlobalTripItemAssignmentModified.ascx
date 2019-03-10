<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GlobalTripItemAssignmentModified.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.GlobalTripChecklists.GlobalTripItemAssignmentModified" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlTripSelection" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Item Status
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddGlobalTrips" runat="server" Label="Global Team" Required="false" />                        
                    </div>                    
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnTripSelection" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnTripSelection_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnTripSelectionCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlParticipantSelection" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfGlobalTripId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Person Selection
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-4">
                        <Rock:RockDropDownList ID="ddParticipants" runat="server" Label="Global Team Participants" Required="false" />                        
                    </div>                    
                </div>

                <div class="actions">
                    <asp:LinkButton ID="btnParticipantSelection" runat="server" Text="Continue" CssClass="btn btn-primary" OnClick="btnParticipantSelection_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnParticipantSelectionCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlAssignment" runat="server" CssClass="panel panel-block" Visible="false">
            <asp:HiddenField ID="hfParticipantId" runat="server" />
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Item Status
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockLiteral ID="lTripHeader" runat="server" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockCheckBoxList ID="cbList" runat="server" Label="Global Team Required Items" />                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbNotes" runat="server" Label="Notes" Required="false" />
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnAssignmentSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnAssignmentSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnAssignmentCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>        
        <asp:Panel ID="pnlComplete" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Global Team Item Status
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        Assignment complete.<p>&nbsp;</p>
                    </div>                   
                </div>                 
                <div class="actions">
                    <asp:LinkButton ID="btnAssignAnother" runat="server" Text="Assign Another Participant" CssClass="btn btn-info" OnClick="btnAssignAnother_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnAssignAnotherCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlItemLog" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Item Assignment Log
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <asp:Literal ID="lOutputString" runat="server" />                  
                    </div>                                                           
                </div>
            </div>
        </asp:Panel>
        <asp:Panel ID="pnlDebug" runat="server" CssClass="panel panel-block" Visible="false">
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

