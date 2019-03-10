<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectView.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectView" %>
<%@ Register Namespace="com.blueboxmoon.ProjectManagement.UI" Assembly="com.blueboxmoon.ProjectManagement" TagPrefix="PM" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <div class="panel panel-block list-as-blocks">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-list-ul"></i> Project Types</h1>

                <div class="pull-right">
                    <PM:ButtonGroup ID="lbProjectFilter" runat="server" ButtonSizeCssClass="btn-group-xs" ActiveButtonCssClass="btn-info" OnSelectionChanged="lbProjectFilter_SelectionChanged">
                        <asp:ListItem Text="Requested By Me" />
                        <asp:ListItem Text="Assigned To Me" />
                        <asp:ListItem Text="All" Value="" />
                    </PM:ButtonGroup>

                    <PM:ButtonGroup ID="lbTaskFilter" runat="server" ButtonSizeCssClass="btn-group-xs" ActiveButtonCssClass="btn-info" OnSelectionChanged="lbTaskFilter_SelectionChanged">
                        <asp:ListItem Text="Assigned To Me" />
                        <asp:ListItem Text="All" Value="" />
                    </PM:ButtonGroup>

                    <PM:ButtonGroup ID="lbViewType" runat="server" ButtonSizeCssClass="btn-group-xs" ActiveButtonCssClass="btn-success" OnSelectionChanged="lbViewType_SelectionChanged">
                        <asp:ListItem Text="Projects" />
                        <asp:ListItem Text="Tasks" />
                    </PM:ButtonGroup>

                    <asp:HiddenField ID="hfConfigureVisible" runat="server" Value="false" />
                    <a href="#" class="btn btn-link btn-xs js-configure">
                        <i class="fa fa-gear pm-fa-rotate"></i>
                    </a>
                </div>
            </div>

            <asp:Panel ID="pnlConfigureHeader" runat="server" CssClass="panel-heading">
                <div class="row">
                    <div class="col-md-6">
                        <asp:CheckBox ID="cbHideEmptyTypes" runat="server" Text="Hide Empty Project Types" OnCheckedChanged="cbHideEmptyTypes_CheckedChanged" CausesValidation="false" AutoPostBack="true" />
                    </div>
                </div>
            </asp:Panel>

            <div class="panel-body">
                <ul>
                    <asp:Repeater ID="rptProjectTypes" runat="server" OnItemCommand="rptProjectTypes_ItemCommand">
                        <ItemTemplate>
                            <li class='<%# Eval("Class") %>'>
                                <asp:LinkButton ID="lbProjectType" runat="server" CommandArgument='<%# Eval("ProjectType.Id") %>' CommandName="Select">
                                    <i class='<%# Eval("ProjectType.IconCssClass") %>'></i>
                                    <h3><%# Eval("ProjectType.Name") %></h3>
                                    <div class="notification">
                                        <span class="label label-danger" title="Overdue"><%# Eval("DangerCount") %></span>
                                        <span class="label label-warning"><%# Eval("WarningCount") %></span>
                                        <span class="label label-info" title="Active"><%# Eval("ActiveCount") %></span>
                                    </div>
                                </asp:LinkButton>
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>
                </ul>
            </div>
        </div>

        <asp:Panel ID="pnlProjects" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-tasks"></i> Projects</h1>
            </div>

            <div class="panel-body">
                <div class="grid grid-panel">
                    <PM:ProjectGridList ID="plProjects" runat="server" OnProjectSelected="plProjects_ProjectSelected" OnAddProject="plProjects_AddProject" />
                </div>
            </div>
        </asp:Panel>

        <asp:Panel ID="pnlTasks" runat="server" CssClass="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title"><i class="fa fa-check"></i> Tasks</h1>
            </div>

            <div class="panel-body">
                <div class="grid grid-panel">
                    <PM:TaskGridList ID="tlTasks" runat="server" OnTaskSelected="tlTasks_TaskSelected" />
                </div>
            </div>
        </asp:Panel>

        <script>
            Sys.Application.add_load(function () {
                $('#<%= upnlContent.ClientID %> .label').tooltip();

                $('#<%= upnlContent.ClientID %> .js-configure').on('click', function (e) {
                    e.preventDefault();

                    var $header = $('#<%= pnlConfigureHeader.ClientID %>');
                    if ($header.is(':visible')) {
                        $(this).find('i').removeClass('down');
                        $('#<%= hfConfigureVisible.ClientID %>').val('false');
                    }
                    else {
                        $(this).find('i').addClass('down');
                        $('#<%= hfConfigureVisible.ClientID %>').val('true');
                    }
                    $header.slideToggle(500);
                });
            })
        </script>
    </ContentTemplate>
</asp:UpdatePanel>
