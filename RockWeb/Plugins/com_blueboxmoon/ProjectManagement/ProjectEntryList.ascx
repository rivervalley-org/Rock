<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectEntryList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectEntryList" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbNotConfigured" runat="server" NotificationBoxType="Warning">
            This block has not been configured yet.
        </Rock:NotificationBox>

        <Rock:NotificationBox ID="nbNothingAvailable" runat="server" NotificationBoxType="Info">
            There are no projects that you can create.
        </Rock:NotificationBox>

        <asp:Literal ID="ltContent" runat="server" />

        <Rock:ModalDialog ID="mdlSettings" runat="server" Title="Settings" OnSaveClick="mdlSettings_SaveClick" ValidationGroup="Settings">
            <Content>
                <asp:Panel ID="pnlSettingsBasic" runat="server" Visible="true">
                    <asp:ValidationSummary ID="vsSettings" runat="server" CssClass="alert alert-danger" ValidationGroup="Settings" />

                    <Rock:PagePicker ID="ppSettingsProjectEntryPage" runat="server" Label="Project Entry Page" Help="The page that will display the entry form." Required="true" ValidationGroup="Settings" />

                    <Rock:RockControlWrapper ID="cwAvailableProjects" runat="server" Label="Available Project Types">
                        <Rock:Grid ID="gSettingsAvailableProjects" runat="server" RowItemText="Entry Item" OnGridRebind="gSettingsAvailableProjects_GridRebind" OnGridReorder="gSettingsAvailableProjects_GridReorder" OnRowSelected="gSettingsAvailableProjects_RowSelected" AllowPaging="false">
                            <Columns>
                                <Rock:ReorderField />
                                <asp:BoundField DataField="Title" HeaderText="Title" />
                                <asp:BoundField DataField="ProjectType.Name" HeaderText="Project Type" />
                                <asp:BoundField DataField="Category.Name" HeaderText="Category" />
                                
                                <Rock:DeleteField OnClick="gSettingsDelete_Click" />
                            </Columns>
                        </Rock:Grid>
                    </Rock:RockControlWrapper>

                    <Rock:CodeEditor ID="ceSettingsLavaTemplate" runat="server" Label="Lava Template" Help="The Lava to use when rendering the list of available entry items." Required="true" ValidationGroup="Settings" />
                </asp:Panel>

                <asp:Panel ID="pnlSettingsEntry" runat="server" Visible="false">
                    <asp:HiddenField ID="hfSettingsEntryRow" runat="server" />
                    <asp:ValidationSummary ID="vsSettingsEntry" runat="server" CssClass="alert alert-danger" ValidationGroup="Settings" />

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:RockTextBox ID="tbSettingsTitle" runat="server" Required="true" Label="Title" Help="The title to display in the button for this project entry item." ValidationGroup="Settings" />
                        </div>
                        <div class="col-md-6">
                            <Rock:RockTextBox ID="tbSettingsIconCssClass" runat="server" Label="Icon CSS Class" Help="The CSS Icon to use. If blank then the icon from the project type is used." ValidationGroup="Settings" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <PM:ProjectTypePicker ID="ptpSettingsProjectType" runat="server" Required="true" Label="Project Type" Help="The Project Type to be created when selecting this entry item." ValidationGroup="Settings" />
                        </div>
                        <div class="col-md-6">
                            <Rock:CategoryPicker ID="cpSettingsCategory" runat="server" Required="false" Label="Category" Help="The Category to place the project in." EntityTypeName="com.blueboxmoon.ProjectManagement.Model.Project" ValidationGroup="Settings" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:PersonPicker ID="ppSettingsAssignToPerson" runat="server" Label="Assign to Person" Help="Project will be assigned to this person." ValidationGroup="Settings" />
                        </div>
                        <div class="col-md-6">
                            <Rock:GroupPicker ID="gpSettingsAssignToGroup" runat="server" Label="Assign to Group" Help="Project will be assigned to active members of this group." ValidationGroup="Settings" />
                        </div>
                    </div>

                    <asp:LinkButton ID="lbSettingsEntryCancel" runat="server" OnClick="lbSettingsEntryCancel_Click" CssClass="hidden" ValidationGroup="Settings" CausesValidation="false" />
                </asp:Panel>
            </Content>
        </Rock:ModalDialog>
    </ContentTemplate>
</asp:UpdatePanel>
