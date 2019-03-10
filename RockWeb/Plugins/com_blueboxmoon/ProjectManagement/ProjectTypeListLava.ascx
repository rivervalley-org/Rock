<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectTypeListLava.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectTypeListLava" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbWarning" runat="server" NotificationBoxType="Warning" />

        <asp:Literal ID="ltContent" runat="server" />
    </ContentTemplate>
</asp:UpdatePanel>