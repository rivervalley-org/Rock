<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectTypeDetail.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectTypeDetail" %>

<script type="text/javascript">
    function clearActiveDialog() {
        $('#<%= hfActiveDialog.ClientID %>').val('');
    }
</script>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" CssClass="panel panel-block" runat="server" >
            <asp:HiddenField ID="hfId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-tasks"></i>
                    <asp:Literal ID="lTitle" runat="server" />
                </h1>
            </div>
            <Rock:PanelDrawer ID="pdAuditDetails" runat="server"></Rock:PanelDrawer>
            <div class="panel-body">

                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Warning" />
                <asp:ValidationSummary ID="vSummary" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />

                <div class="row">
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectType, com.blueboxmoon.ProjectManagement" PropertyName="Name" />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockCheckBox ID="cbActive" runat="server" Label="Active" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbIconCssClass" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectType, com.blueboxmoon.ProjectManagement" PropertyName="IconCssClass"
                            Help="The Font Awesome icon class to use when displaying groups of thie group type." />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockCheckBox ID="cbIsCategoryRequired" runat="server" Label="Category Required" Help="Specifies if a category is required on projects of this type." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <Rock:DataTextBox ID="tbDescription" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectType, com.blueboxmoon.ProjectManagement" PropertyName="Description" TextMode="MultiLine" Rows="3" ValidateRequestMode="Disabled" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockControlWrapper ID="rcProjectTypes" runat="server" Label="Child Project Types" Help="The types of projects that can be added as sub-projects to projects of this type. This is used to define a project hierarchy.">
                            <div class="grid">
                                <Rock:Grid ID="gChildProjectTypes" runat="server" DisplayType="Light" ShowHeader="false" RowItemText="Project Type">
                                    <Columns>
                                        <Rock:RockBoundField DataField="Name" />
                                        <Rock:DeleteField OnClick="gChildProjectTypes_Delete" />
                                    </Columns>
                                </Rock:Grid>
                            </div>
                        </Rock:RockControlWrapper>
                    </div>
                    <div class="col-md-6">
                        <Rock:BinaryFileTypePicker ID="pAttachmentFileType" runat="server" Label="Attachment File Type" Help="The file type to use when users upload attachments to a project." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddlTaskAssignedEmail" runat="server" Label="Task Assigned E-mail" Help="The system e-mail that will be sent to the person newly assigned to a task." />
                        <Rock:RockDropDownList ID="ddlProjectAssignedEmail" runat="server" Label="Project Assigned E-mail" Help="The system e-mail that will be sent to the person newly assigned to a project." />
                    </div>
                    <div class="col-md-6">
                        <Rock:RockDropDownList ID="ddlProjectCommentEmail" runat="server" Label="Project Comment E-mail" Help="The system e-mail that will be sent to all persons watching the project when a comment is left." />
                        <Rock:RockDropDownList ID="ddlProjectCompletedEmail" runat="server" Label="Project Completed E-mail" Help="The system e-mail that will be sent to the requester, project assignees and all persons watching the project." />
                    </div>
                </div>

                <Rock:PanelWidget ID="wpProjectAttributes" runat="server" Title="Project Attributes">
                    <div class="grid">
                        <Rock:Grid ID="gProjectAttributes" runat="server" AllowPaging="false" DisplayType="Light" RowItemText="Project Attribute" ShowConfirmDeleteDialog="false">
                            <Columns>
                                <Rock:ReorderField />
                                <Rock:RockBoundField DataField="Name" HeaderText="Attribute" />
                                <Rock:RockBoundField DataField="Description" HeaderText="Description" />
                                <Rock:CheckBoxEditableField DataField="IsFormField" HeaderText="Entry Form" HeaderStyle-HorizontalAlign="Center" />
                                <Rock:BoolField DataField="IsRequired" HeaderText="Required" />
                                <Rock:EditField OnClick="gProjectAttributes_Edit" />
                                <Rock:DeleteField OnClick="gProjectAttributes_Delete" />
                            </Columns>
                        </Rock:Grid>
                    </div>
                </Rock:PanelWidget>

                <div class="actions">
                    <asp:LinkButton ID="lbSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="lbSave_Click" />
                    <asp:LinkButton ID="lbCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="lbCancel_Click" />
                </div>

            </div>

        </asp:Panel>

        <Rock:ModalAlert ID="modalAlert" runat="server" />
        <asp:HiddenField ID="hfActiveDialog" runat="server" />

        <Rock:ModalDialog ID="dlgProjectAttributes" runat="server" Title="Project Attributes" OnSaveClick="dlgProjectAttributes_SaveClick"  OnCancelScript="clearActiveDialog();" ValidationGroup="ProjectAttributes">
            <Content>
                <Rock:AttributeEditor ID="edtProjectAttributes" runat="server" ShowActions="false" ValidationGroup="ProjectAttributes" />
            </Content>
        </Rock:ModalDialog>

        <Rock:ModalDialog ID="dlgChildProjectType" runat="server" OnSaveClick="dlgChildProjectType_SaveClick" OnCancelScript="clearActiveDialog();" ValidationGroup="ChildProjectTypes">
            <Content>
                <Rock:RockDropDownList ID="ddlChildProjectType" runat="server" DataTextField="Name" DataValueField="Id" Label="Child Project Type" ValidationGroup="ChildProjectTypes" />
            </Content>
        </Rock:ModalDialog>

    </ContentTemplate>
</asp:UpdatePanel>