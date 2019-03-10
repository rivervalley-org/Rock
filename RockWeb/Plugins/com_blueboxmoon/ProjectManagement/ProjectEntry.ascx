<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectEntry.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectEntry" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbUnauthorized" runat="server" NotificationBoxType="Warning"></Rock:NotificationBox>
        <Rock:NotificationBox ID="nbMissingCategory" runat="server" NotificationBoxType="Danger" Visible="false">
            The project type you are creating requires a Category, but one was not provided.
            Please inform your Administator so they can fix the issue.
        </Rock:NotificationBox>

        <asp:Panel ID="pnlEdit" CssClass="panel panel-block" runat="server" Visible="false">
            <asp:HiddenField ID="hfProjectTypeId" runat="server" />
            <asp:HiddenField ID="hfCategoryId" runat="server" />
            <asp:HiddenField ID="hfAssigneePersonAlias" runat="server" />
            <asp:HiddenField ID="hfAssigneeGroup" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-list-ul"></i>
                    <asp:Literal ID="lEditTitle" runat="server" />
                </h1>
            </div>

            <div class="panel-body">

                <asp:ValidationSummary ID="vSummary" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />

                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddlProjectType" runat="server" Label="Project Type" Required="true" OnSelectedIndexChanged="ddlProjectType_SelectedIndexChanged" AutoPostBack="true" CausesValidation="false" Visible="false" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.Project, com.blueboxmoon.ProjectManagement" PropertyName="Name" Label="Project Name" />
                    </div>

                    <div class="col-md-6">
                        <Rock:DatePicker ID="dpDueDate" runat="server" Label="Due Date" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label" for="<%= meDescription.ClientID %>">Details</label>
                            <PM:MarkdownEditor ID="meDescription" runat="server" CssClass="margin-b-md" IsMentionEnabled="true" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <asp:PlaceHolder ID="phEditAttributes" runat="server"></asp:PlaceHolder>
                    </div>
                </div>

                <div class="actions">
                    <asp:LinkButton ID="lbSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="lbSave_Click" />
                    <asp:LinkButton ID="lbCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="lbCancel_Click" />
                </div>

            </div>

        </asp:Panel>

    </ContentTemplate>
</asp:UpdatePanel>