<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectBoardView.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectBoardView" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server" UpdateMode="Conditional">
    <ContentTemplate>
        <asp:HiddenField ID="hfBoardId" runat="server" />
        <Rock:NotificationBox ID="nbNotFound" runat="server" Text="Project Board was not found." NotificationBoxType="Warning" Visible="false" />
        <Rock:NotificationBox ID="nbNotAuthorized" runat="server" Text="You are not authorized to view this project board." NotificationBoxType="Warning" Visible="false" />

        <asp:Panel ID="pnlBoard" runat="server" />
    </ContentTemplate>
</asp:UpdatePanel>

<asp:UpdatePanel ID="upnlActions" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfAddProjectToColumn" runat="server" />
        <asp:HiddenField ID="hfAddTaskToColumn" runat="server" />

        <asp:LinkButton ID="lbAddProject" runat="server" CssClass="hidden" OnClick="AddProject_Click" />
        <asp:LinkButton ID="lbAddTask" runat="server" CssClass="hidden" OnClick="AddTask_Click" />

        <Rock:ModalDialog ID="mdAddProject" runat="server" Title="Add Project" OnSaveClick="AddProjectSave_Click" ValidationGroup="vgAddProject">
            <Content>
                <asp:ValidationSummary ID="vsAddProject" runat="server" ValidationGroup="vgAddProject" CssClass="alert alert-warning" />
                <Rock:NotificationBox ID="nbAddProjectError" runat="server" NotificationBoxType="Danger" />

                <PM:ProjectPicker ID="pProject" runat="server" Label="Project" Required="true" ValidationGroup="vgAddProject" />
            </Content>
        </Rock:ModalDialog>

        <Rock:ModalDialog ID="mdAddTask" runat="server" Title="Add Task" OnSaveClick="AddTaskSave_Click" ValidationGroup="vgAddTask">
            <Content>
                <asp:ValidationSummary ID="vsAddTask" runat="server" ValidationGroup="vgAddTask" CssClass="alert alert-warning" />
                <Rock:NotificationBox ID="nbAddTaskError" runat="server" NotificationBoxType="Danger" />

                <PM:ProjectTaskPicker ID="pTask" runat="server" Required="true" ValidationGroup="vgAddTask" />
            </Content>
        </Rock:ModalDialog>
    </ContentTemplate>
</asp:UpdatePanel>
