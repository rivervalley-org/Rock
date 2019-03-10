<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxLambdaSample.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxLambdaSample" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate> 
    <asp:Panel ID="pnlOutput" runat="server" Visible="true">
        <div class="panel-body">
        <asp:Literal ID="lOutputString" runat="server" /> 
        </div>
    </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>


