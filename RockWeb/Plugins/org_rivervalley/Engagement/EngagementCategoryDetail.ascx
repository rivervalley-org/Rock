<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EngagementCategoryDetail.ascx.cs" Inherits="RockWeb.Plugins.org_rivervalley.Engagement.EngagementCategoryDetail" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfCategoryId" runat="server" />

        <asp:Panel ID="pnlDetails" CssClass="panel panel-block" runat="server" Visible="false">

            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-file-text"></i>
                    <asp:Literal ID="lTitle" runat="server" /></h1>
            </div>
            <Rock:PanelDrawer ID="pdAuditDetails" runat="server"></Rock:PanelDrawer>
            <div class="panel-body">

                <div id="pnlEditDetails" runat="server">

                    <asp:ValidationSummary ID="vsDetails" runat="server" HeaderText="Please correct the following:" CssClass="alert alert-validation" />

                    <fieldset>
                        <div class="row">
                            <div class="col-md-6">
                                <Rock:RockTextBox ID="tbName" Label="Name" runat="server" PropertyName="Name" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <Rock:RockTextBox ID="tbDescription" Label="Description" runat="server" PropertyName="Description" TextMode="MultiLine" Rows="3" ValidateRequestMode="Disabled" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <Rock:NumberBox ID="nbWeight" Label="Weight" runat="server" PropertyName="Weight" ValidateRequestMode="Disabled" />
                            </div>
                            <div class="col-md-6">
                                <Rock:ColorPicker ID="cpHtmlColor" Label="Color" runat="server" PropertyName="Html Color" ValidateRequestMode="Disabled" />
                            </div>
                        </div>



                    </fieldset>

                    <div class="actions">
                        <asp:LinkButton ID="btnSaveType" runat="server" AccessKey="s" ToolTip="Alt+s" Text="Save" CssClass="btn btn-primary" OnClick="btnSaveType_Click" />
                        <asp:LinkButton ID="btnCancelType" runat="server" AccessKey="c" ToolTip="Alt+c" Text="Cancel" CssClass="btn btn-link" CausesValidation="false" OnClick="btnCancelType_Click" />
                    </div>
                </div>

                <fieldset id="fieldsetViewDetails" runat="server">

                    <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />

                    <div class="row margin-b-md">
                        <div class="col-md-12">
                            <asp:Literal ID="lDescription" runat="server" />
                        </div>
                    </div>

                    <div class="actions">
                        <asp:LinkButton ID="btnEdit" runat="server" AccessKey="m" ToolTip="Alt+m" Text="Edit" CssClass="btn btn-primary" CausesValidation="false" OnClick="btnEdit_Click" />
                        <Rock:ModalAlert ID="mdDeleteWarning" runat="server" />
                        <asp:LinkButton ID="btnDelete" runat="server" Text="Delete" CssClass="btn btn-link" OnClick="btnDelete_Click" CausesValidation="false" />
                    </div>

                </fieldset>

            </div>

        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>
