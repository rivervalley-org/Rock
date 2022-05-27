<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectBoardDetail.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectBoardDetail" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>

        <asp:Panel ID="pnlDetails" CssClass="panel panel-block" runat="server" >
            <asp:HiddenField ID="hfId" runat="server" />

            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-columns"></i>
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
                        <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectBoard, com.blueboxmoon.ProjectManagement" PropertyName="Name" />
                    </div>
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbIconCssClass" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectBoard, com.blueboxmoon.ProjectManagement" PropertyName="IconCssClass"
                            Help="The Font Awesome icon class to use when displaying this project board." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <Rock:DataTextBox ID="tbRemoveInactiveDays" runat="server"
                            SourceTypeName="com.blueboxmoon.ProjectManagement.Model.ProjectBoard, com.blueboxmoon.ProjectManagement"
                            PropertyName="RemoveInactiveCardsAfterDays"
                            Help="The number of days after which completed or cancelled cards are automatically removed from the board." />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <Rock:CodeEditor ID="ceTemplate" runat="server" Label="Template" Help="The Lava template to use when rendering the contents of each card." EditorMode="Lava" EditorTheme="Rock" />
                    </div>
                </div>

                <Rock:RockControlWrapper ID="rcColumns" runat="server" Label="Columns" Help="The columns for this board that can each contain various cards.">
                    <div class="grid">
                        <Rock:Grid ID="gColumns" runat="server" AllowPaging="false" DisplayType="Light" RowItemText="Column" ShowConfirmDeleteDialog="false">
                            <Columns>
                                <Rock:ReorderField />
                                <Rock:RockBoundField DataField="Name" HeaderText="Name" />
                                <Rock:EditField OnClick="gColumns_Edit" />
                                <Rock:DeleteField OnClick="gColumns_Delete" />
                            </Columns>
                        </Rock:Grid>
                    </div>
                </Rock:RockControlWrapper>

                <div class="actions">
                    <asp:LinkButton ID="lbSave" runat="server" Text="Save" CssClass="btn btn-primary" OnClick="lbSave_Click" />
                    <asp:LinkButton ID="lbCancel" runat="server" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="lbCancel_Click" />
                </div>
            </div>
        </asp:Panel>

        <Rock:ModalAlert ID="modalAlert" runat="server" />
        <asp:HiddenField ID="hfColumnId" runat="server" />

        <Rock:ModalDialog ID="dlgColumn" runat="server" Title="Column" OnSaveClick="dlgColumn_SaveClick" ValidationGroup="BoardColumn">
            <Content>
                <asp:ValidationSummary ID="vsColumn" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" ValidationGroup="BoardColumn" />

                <Rock:RockTextBox ID="tbColumnName" runat="server" Label="Name" Required="true" ValidationGroup="BoardColumn" />
            </Content>
        </Rock:ModalDialog>

    </ContentTemplate>
</asp:UpdatePanel>
