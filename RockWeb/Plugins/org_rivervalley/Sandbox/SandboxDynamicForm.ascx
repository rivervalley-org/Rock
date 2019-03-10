<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxDynamicForm.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxDynamicForm" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="true">

            <asp:HiddenField ID="hfPersonId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    Dynamic Forms Test
                </h1>
            </div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockCheckBoxList ID="cbList" runat="server" Label="Global Trip Required Items" />                       
                    </div>
                </div>




                <div class="actions">
                    <asp:LinkButton ID="btnSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click" CausesValidation="false" />
                    <asp:LinkButton ID="btnCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancel_Click" />
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

