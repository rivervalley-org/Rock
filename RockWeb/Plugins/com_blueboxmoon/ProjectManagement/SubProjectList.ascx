<%@ Control Language="C#" AutoEventWireup="true" CodeFile="SubProjectList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.SubProjectList" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfOptionsVisible" runat="server" Value="0" />

        <asp:Panel ID="pnlProjectList" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <div class="clearfix">
                    <h1 class="panel-title pull-left">
                        <asp:Literal ID="ltHtmlIcon" runat="server" />
                        <span>Sub Projects</span>
                    </h1>

                    <span class="pull-right">
                        <asp:LinkButton ID="lbAdd" runat="server" CssClass="btn btn-xs pm-btn-xs btn-link" OnClick="lbAdd_Click"><i class="fa fa-plus"></i></asp:LinkButton>
                        <a class="btn btn-xs pm-btn-xs btn-link" data-toggle="collapse" data-target=".js-subproject-list-options"><i class="fa fa-gear"></i></a>
                    </span>
                </div>

                <asp:Panel ID="pnlOptions" runat="server" CssClass="collapse margin-t-sm js-subproject-list-options">
                    <asp:CheckBox ID="cbShowInactive" runat="server" Text="Show Inactive" OnCheckedChanged="cbShowInactive_CheckedChanged" AutoPostBack="true" CausesValidation="false" />
                </asp:Panel>
            </div>

            <ul class="list-group pm-list-group">
                <asp:Repeater ID="rpProject" runat="server" OnItemDataBound="rpProject_ItemDataBound" OnItemCommand="rpProject_ItemCommand">
                    <ItemTemplate>
                        <li id="liProject" runat="server" class="list-group-item pm-group-item" data-toggle="tooltip" data-delay="600" data-placement="auto left">
                            <div class="pm-group-item-heading clearfix">
                                <asp:LinkButton ID="lbProjectName" runat="server" CssClass="pm-group-item-name" CommandName="ShowProject" CommandArgument='<%# Eval( "Id" ) %>'></asp:LinkButton>
                            </div>

                            <div class="pm-group-item-details">
                                <asp:Literal ID="lDueDate" runat="server"></asp:Literal>
                                <asp:Literal ID="lBlockedBy" runat="server"></asp:Literal>
                                <asp:Literal ID="lDescription" runat="server"></asp:Literal>
                                <asp:Literal ID="lAssignedTo" runat="server"></asp:Literal>
                            </div>
                        </li>
                    </ItemTemplate>
                </asp:Repeater>
            </ul>
        </asp:Panel>

        <script>
            (function ($)
            {
                Sys.Application.add_load(function ()
                {
                    $('[data-toggle="tooltip"]').tooltip();

                    $('.js-subproject-list-options').on('hidden.bs.collapse', function ()
                    {
                        $('#<%= hfOptionsVisible.ClientID %>').val('0');
                    });
                    $('.js-subproject-list-options').on('shown.bs.collapse', function ()
                    {
                        $('#<%= hfOptionsVisible.ClientID %>').val('1');
                    });
                })
            })(jQuery);
        </script>
    </ContentTemplate>
</asp:UpdatePanel>