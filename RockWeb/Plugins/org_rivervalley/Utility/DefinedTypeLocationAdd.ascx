<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DefinedTypeLocationAdd.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Utility.DefinedTypeLocationAdd" %>

<asp:Panel ID="pnlJobTitle" runat="server" CssClass="panel panel-block" Visible="true">
    <div class="panel-heading">
        <h1 class="panel-title">
            <i class="fa fa-edit"></i>
            Patient Incident Location Add
        </h1>
    </div>
    <div class="panel-body">
        <asp:ValidationSummary ID="vsLocation" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
        <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" />
        <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
        <div class="row">
            <div class="col-md-6">
                <Rock:RockTextBox ID="tbLocation" runat="server" Label="Location" Required="true" />
            </div>
        </div>
        <div class="actions">
            <asp:LinkButton ID="btnSave" runat="server" Text="Add" CssClass="btn btn-primary" OnClick="btnSave_Click" />
            <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
        </div>  
    </div>
</asp:Panel>
