<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectTypeList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectTypeList" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <Rock:NotificationBox ID="nbWarningMessage" runat="server" NotificationBoxType="Danger" Visible="true" />

        <asp:Panel ID="pnlProjectTypeList" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-list-ul"></i> Project Type List</h1>
            </div>

            <div class="panel-body">
                <div class="grid grid-panel">
                    <Rock:ModalAlert ID="mdGridWarning" runat="server" />
                    <Rock:Grid ID="gProjectType" runat="server" AllowSorting="true" OnRowSelected="gProjectType_RowSelected">
                        <Columns>
                            <Rock:RockBoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
                            <Rock:BadgeField InfoMin="1" DataField="Projects" HeaderText="Projects" SortExpression="Projects" />
                            <Rock:SecurityField TitleField="Name" />
                            <Rock:RockTemplateFieldUnselected ItemStyle-CssClass="grid-columncommand" ItemStyle-HorizontalAlign="Center">
                                <ItemTemplate>
                                    <asp:LinkButton ID="lbViewTasks" runat="server" CssClass="btn btn-default btn-sm" OnClick="gProjectType_ViewProjects" ToolTip="View Projects">
                                        <i class="fa fa-tasks"></i>
                                    </asp:LinkButton>
                                </ItemTemplate>
                            </Rock:RockTemplateFieldUnselected>
                            <Rock:DeleteField OnClick="gProjectType_Delete" />
                        </Columns>
                    </Rock:Grid>
                </div>
            </div>
        </asp:Panel>
    </ContentTemplate>
</asp:UpdatePanel>