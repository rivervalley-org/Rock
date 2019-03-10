<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectList" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbUnauthorizedMessage" runat="server" NotificationBoxType="Warning" />
        <Rock:NotificationBox ID="nbDangerMessage" runat="server" NotificationBoxType="Danger" Visible="true" />

        <asp:Panel ID="pnlProjectList" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-list-ul"></i> Project List</h1>
            </div>

            <div class="panel-body">
                <div class="grid grid-panel">
                    <PM:ProjectGridList ID="plProjects" runat="server" OnProjectSelected="plProjects_ProjectSelected" OnAddProject="plProjects_AddProject" HideCategoryFilter="true" />
                </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>