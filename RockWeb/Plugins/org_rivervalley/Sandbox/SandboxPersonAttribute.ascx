<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxPersonAttribute.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxPersonAttribute" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="false">

            <asp:HiddenField ID="hfPersonId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    Edit Attribute Test
                </h1>
                <br><asp:Literal ID="lDebugString" runat="server" />
            </div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockTextBox ID="tbPreviousChurch" runat="server" Label="Previous Church:" PropertyName="Previous Church" />
                        <Rock:RockTextBox ID="tbAllergy" runat="server" Label="Allegies:" PropertyName="Allergy" />                        
                    </div>
                </div>
                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" CausesValidation="false" ToolTip="Tool Tip for this button" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
                </div>
            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>

