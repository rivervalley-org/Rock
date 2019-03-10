<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SandboxGeneric.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Sandbox.SandboxGeneric" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:Panel ID="pnlDetails" runat="server" CssClass="panel panel-block" Visible="true">
            <div class="panel-heading">
                <h1 class="panel-title">
                    Sandbox Generic Block
                </h1>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lOutputString" runat="server" />
                    </div>                   
                </div>                 
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>

