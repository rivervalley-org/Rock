<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MyProjects.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.MyProjects" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfDisplayCount" runat="server" Value="0" />

        <asp:Panel ID="pnlProjectList" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <i class="fa fa-tasks"></i> My Projects
                </h1>
            </div>

            <div class="pm-second-heading pm-nav-tabs">
                <ul class="nav nav-tabs pm-nav-tabs-sm margin-t-sm">
                    <li id="liAssigned" runat="server" role="presentation"><asp:LinkButton ID="lbAssigned" runat="server" OnClick="lbAssigned_Click">Assigned</asp:LinkButton></li>
                    <li id="liRequested" runat="server" role="presentation"><asp:LinkButton ID="lbRequested" runat="server" OnClick="lbRequested_Click">Requested</asp:LinkButton></li>
                    <li id="liFollowing" runat="server" role="presentation"><asp:LinkButton ID="lbFollowing" runat="server" OnClick="lbFollowing_Click"><i class="fa fa-star-o"></i></asp:LinkButton></li>
                </ul>
            </div>

            <ul class="list-group pm-list-group pm-min-height-md" data-anchor="assigned">
                <asp:Repeater ID="rpProjects" runat="server" OnItemDataBound="rpProject_ItemDataBound" OnItemCommand="rpProject_ItemCommand">
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
                                <asp:Literal ID="lTags" runat="server"></asp:Literal>
                            </div>
                        </li>
                    </ItemTemplate>
                    <FooterTemplate>
                        <li class="list-group-item pm-group-item-xs text-center"><asp:LinkButton ID="lbShowMore" runat="server" CssClass="btn btn-sm btn-link" CommandName="ShowMore">Show More</asp:LinkButton> </li>
                    </FooterTemplate>
                </asp:Repeater>
            </ul>
        </asp:Panel>

        <script>
            (function ($)
            {
                Sys.Application.add_load(function ()
                {
                    $('[data-toggle="tooltip"]').tooltip();
                })
            })(jQuery);
        </script>
    </ContentTemplate>
</asp:UpdatePanel>