<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxLINQSample.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxLINQSample" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate> 
    <asp:Panel ID="pnlOutput" runat="server" Visible="true">
        <div class="panel-body">
        <asp:Literal ID="lOutputString" runat="server" /> 
        </div>
    </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>


