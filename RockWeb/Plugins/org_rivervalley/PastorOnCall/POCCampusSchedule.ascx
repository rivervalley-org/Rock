<%@ Control Language="C#" AutoEventWireup="true" CodeFile="POCCampusSchedule.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.PastorOnCall.POCCampusSchedule" %>
<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate> 
    <asp:Panel ID="pnlJobOffer" runat="server" CssClass="panel panel-block" Visible="true">
        <div class="panel-body">
        <asp:Literal ID="lOutputString" runat="server" /> 
        </div>
    </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>


