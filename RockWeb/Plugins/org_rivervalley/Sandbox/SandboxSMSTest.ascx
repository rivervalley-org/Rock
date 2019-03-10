<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxSMSTest.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxSMSTest" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="true">

            <div class="panel-heading">
                <h1 class="panel-title">
                    SMS Test
                </h1>
                
                <br><asp:Literal ID="lDebugString" runat="server" />
            </div>
        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>

