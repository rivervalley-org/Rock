<%@ Control Language="C#" AutoEventWireup="true" CodeFile="MyTasks.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.MyTasks" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfDisplayCount" runat="server" Value="0" />

        <asp:Panel ID="pnlTaskList" runat="server" CssClass="panel panel-block">
            <div class="panel-heading pm-nav-tabs">
                <h1 class="panel-title">
                    <i class="fa fa-check"></i> My Tasks
                </h1>
            </div>

            <div class="pm-second-heading pm-nav-tabs">
                <ul class="nav nav-tabs pm-nav-tabs-sm margin-t-sm">
                    <li id="liAssigned" runat="server" role="presentation"><asp:LinkButton ID="lbAssigned" runat="server" OnClick="lbAssigned_Click">Assigned</asp:LinkButton></li>
                    <li id="liFollowing" runat="server" role="presentation"><asp:LinkButton ID="lbFollowing" runat="server" OnClick="lbFollowing_Click"><i class="fa fa-star-o"></i></asp:LinkButton></li>
                </ul>
            </div>

            <ul class="list-group pm-list-group pm-min-height-md" data-anchor="assigned">
                <asp:Repeater ID="rpTasks" runat="server" OnItemDataBound="rpTask_ItemDataBound" OnItemCommand="rpTask_ItemCommand">
                    <ItemTemplate>
                        <li id="liTask" runat="server" class="list-group-item pm-group-item">
                            <div class="pm-group-item-heading clearfix">
                                <span class="pull-right">
                                    <asp:Label ID="lFollow" runat="server" CssClass="pm-task-follow-status"></asp:Label>
                                </span>

                                <div class="pm-group-item-name-container">
                                    <asp:LinkButton ID="lbTaskToggle" runat="server" CommandName="ToggleTask" CommandArgument='<%# Eval( "Id" ) %>'>
                                        <i id="iTaskState" runat="server" class="fa"></i>
                                    </asp:LinkButton>
                                    <span class="pm-group-item-name"><asp:Literal ID="lTaskName" runat="server" /></span>
                                </div>
                            </div>

                            <div class="pm-group-item-details">
                                <asp:LinkButton ID="lbShowTask" runat="server" CommandName="ShowTask" CommandArgument='<%# Eval( "Id" ) %>'><i class="fa fa-tasks" title="<%# Eval( "Project.Name" ) %>" data-toggle="tooltip" data-delay="200"></i></asp:LinkButton>
                                <asp:Literal ID="lDescription" runat="server"></asp:Literal>
                                <asp:Literal ID="lBlockedBy" runat="server"></asp:Literal>
                                <asp:Literal ID="lDueDate" runat="server"></asp:Literal>
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