<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectTaskList.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectTaskList" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfOptionsVisible" runat="server" Value="0" />

        <asp:Panel ID="pnlTaskList" runat="server" CssClass="panel panel-block" Visible="false">
            <div class="panel-heading">
                <div class="clearfix">
                    <h1 class="panel-title pull-left">
                        <i class="fa fa-check"></i>
                        <span>Task List</span>
                    </h1>

                    <span class="pull-right">
                        <asp:LinkButton ID="lbPaste" runat="server" CssClass="btn btn-xs pm-btn-xs btn-link" OnClick="lbPaste_Click"><i class="fa fa-paste"></i></asp:LinkButton>
                        <asp:LinkButton ID="lbAdd" runat="server" CssClass="btn btn-xs pm-btn-xs btn-link" OnClick="lbAdd_Click"><i class="fa fa-plus"></i></asp:LinkButton>
                        <a class="btn btn-xs pm-btn-xs btn-link" data-toggle="collapse" data-target=".js-project-task-options"><i class="fa fa-gear"></i></a>
                    </span>
                </div>

                <asp:Panel ID="pnlOptions" runat="server" CssClass="collapse margin-t-sm js-project-task-options">
                    <asp:CheckBox ID="cbShowInactive" runat="server" Text="Show Inactive" OnCheckedChanged="cbShowInactive_CheckedChanged" AutoPostBack="true" CausesValidation="false" />

                    <Rock:RockRadioButtonList ID="rbOrdering" runat="server" Label="Sort By" RepeatDirection="Horizontal" OnSelectedIndexChanged="rbOrdering_SelectedIndexChanged" AutoPostBack="true" CausesValidation="false">
                        <asp:ListItem Text="Manual" Value="0" />
                        <asp:ListItem Text="Due Date" Value="1" />
                    </Rock:RockRadioButtonList>
                </asp:Panel>
            </div>

            <ul class="list-group pm-list-group js-project-task-list">
                <asp:Repeater ID="rpTask" runat="server" OnItemDataBound="rpTask_ItemDataBound" OnItemCommand="rpTask_ItemCommand">
                    <ItemTemplate>
                        <li id="liTask" runat="server" class="list-group-item pm-group-item">
                            <div class="pm-group-item-heading clearfix">
                                <span class="pull-right">
                                    <asp:Label ID="lFollow" runat="server" CssClass="pm-task-follow-status"></asp:Label>
                                    <asp:LinkButton ID="lbEditTask" runat="server" CssClass="btn btn-xs pm-btn-xs btn-link" CommandName="EditTask" CommandArgument='<%# Eval( "Id" ) %>'><i class="fa fa-pencil"></i></asp:LinkButton>
                                    <a id="aReorder" runat="server" class="btn btn-xs pm-btn-xs btn-link js-project-task-reorder"><i class="fa fa-bars movable"></i></a>
                                </span>

                                <div class="pm-group-item-name-container">
                                    <asp:LinkButton ID="lbTaskToggle" runat="server" CommandName="ToggleTask" CommandArgument='<%# Eval( "Id" ) %>'>
                                        <i id="iTaskState" runat="server" class="fa"></i>
                                    </asp:LinkButton>
                                    <asp:Label ID="lTaskName" runat="server" CssClass="pm-group-item-name"><%# Eval( "Name" ) %></asp:Label>
                                </div>
                            </div>

                            <div class="pm-group-item-details">
                                <asp:Literal ID="lDescription" runat="server"></asp:Literal>
                                <asp:Literal ID="lBlockedBy" runat="server"></asp:Literal>
                                <asp:Literal ID="lDueDate" runat="server"></asp:Literal>
                                <asp:Literal ID="lRecurringTask" runat="server"></asp:Literal>
                                <asp:Literal ID="lAssignedTo" runat="server"></asp:Literal>
                                <asp:Literal ID="lTags" runat="server"></asp:Literal>
                            </div>
                        </li>
                    </ItemTemplate>
                </asp:Repeater>
            </ul>

            <Rock:ModalDialog ID="mdlTaskPaste" runat="server" Title="Paste Tasks" ValidationGroup="TaskPaste" OnSaveClick="mdlTaskPaste_SaveClick">
                <Content>
                    <asp:ValidationSummary ID="vsTaskPasteSummary" runat="server" HeaderText="Please correct the followin" CssClass="alert alert-danger" ValidationGroup="TaskPaste" />

                    <fieldset>
                        <Rock:RockTextBox ID="tbTaskPasteContent" runat="server" Label="Tasks" Required="true" Help="Enter or paste one task per line." TextMode="MultiLine" Height="200px" ValidationGroup="TaskPaste" />
                    </fieldset>
                </Content>
            </Rock:ModalDialog>

            <Rock:ModalDialog ID="mdlTaskView" runat="server" Title="View Task" ValidationGroup="ViewTask">
                <Content>
                    <fieldset>
                        <div class="text-right">
                            <asp:Literal ID="ltViewTaskTags" runat="server" />
                        </div>
                        <asp:Literal ID="ltViewTaskDetails" runat="server" />
                    </fieldset>
                </Content>
            </Rock:ModalDialog>

            <Rock:ModalDialog ID="mdlTaskDetail" runat="server" Title="Task Detail" ValidationGroup="TaskDetail" OnSaveClick="mdlTaskDetail_SaveClick">
                <Content>
                    <asp:HiddenField ID="hfTaskId" runat="server" />
                    <asp:ValidationSummary ID="valSummary" runat="server" HeaderText="Please correct the following" CssClass="alert alert-danger" ValidationGroup="TaskDetail" />

                    <fieldset>
                        <Rock:DataTextBox ID="tbName" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.Task, com.blueboxmoon.ProjectManagement" PropertyName="Name" ValidationGroup="TaskDetail" MaxLength="100" />
                        <Rock:DataTextBox ID="tbDescription" runat="server" SourceTypeName="com.blueboxmoon.ProjectManagement.Model.Task, com.blueboxmoon.ProjectManagement" PropertyName="Description" TextMode="MultiLine" Rows="3" ValidationGroup="TaskDetail" />

                        <div class="row">
                            <div class="col-md-6">
                                <Rock:DatePicker ID="dpDueDate" runat="server" Label="Due Date" ValidationGroup="TaskDetail" />
                            </div>

                            <div class="col-md-6">
                                <Rock:RockDropDownList ID="ddlState" runat="server" Label="State" Required="true" ValidationGroup="TaskDetail" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <Rock:PersonPicker ID="ppAssignedTo" runat="server" Label="Assigned To" EnableSelfSelection="true" ValidationGroup="TaskDetail" />
                            </div>

                            <div class="col-md-6">
                                <Rock:RockCheckBoxList ID="cblBlockedBy" runat="server" Label="Blocked By" ValidationGroup="TaskDetail" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <Rock:RockCheckBox ID="cbRecurring" runat="server" Label="Recurring Task" ValidationGroup="TaskDetail" OnCheckedChanged="cbRecurring_CheckedChanged" CausesValidation="false" AutoPostBack="true" />
                                <asp:LinkButton ID="lbRecurringScheduleCancel" runat="server" CssClass="hidden" Text="Cancel" OnClick="lbRecurringScheduleCancel_Click" CausesValidation="false" />
                            </div>

                            <div class="col-md-4">
                                <Rock:ScheduleBuilder ID="sbRecurringSchedule" runat="server" Label="Recurring Due Date" Help="The scheduled due dates that this task will recur on." Required="true" ValidationGroup="TaskDetail" OnPreRender="sbRecurringSchedule_PreRender" OnSaveSchedule="sbRecurringSchedule_SaveSchedule" />
                            </div>

                            <div class="col-md-4">
                                <Rock:NumberBox ID="nbRecurDaysBefore" runat="server" Label="Recur Days Before Due Date" Help="When recurring a task, the task will be marked incomplete this many days before it's next scheduled due date." Required="true" ValidationGroup="TaskDetail" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <asp:Panel ID="pnlEditTags" runat="server" CssClass="margin-b-sm">
                                    <label>Tags</label>
                                    <div class="control-wrapper">
                                        <Rock:TagList ID="tlTaskEdit" runat="server" CssClass="clearfix pm-taglist" DelaySave="false" />
                                    </div>
                                </asp:Panel>
                            </div>
                        </div>

                        <asp:LinkButton ID="lbConvertTask" runat="server" CssClass="btn btn-default" OnClick="lbConvertTask_Click"><i class="fa fa-code-fork"></i> Make Sub-Project</asp:LinkButton>
                        <asp:LinkButton ID="lbDeleteTask" runat="server" CssClass="btn btn-link" OnClientClick="Rock.dialogs.confirmDelete(event, 'task');" OnClick="lbDeleteTask_Click">Delete</asp:LinkButton>
                    </fieldset>
                </Content>
            </Rock:ModalDialog>
        </asp:Panel>

        <script>
            (function ($)
            {
                Sys.Application.add_load(function ()
                {
                    $('[data-toggle="tooltip"]').tooltip();

                    $('.js-project-task-options').on('hidden.bs.collapse', function ()
                    {
                        $('#<%= hfOptionsVisible.ClientID %>').val('0');
                    });
                    $('.js-project-task-options').on('shown.bs.collapse', function ()
                    {
                        $('#<%= hfOptionsVisible.ClientID %>').val('1');
                    });

                    $('.js-project-task-reorder').on('click', function (event) { event.preventDefault(); });

                    $('.js-project-task-list').sortable({
                        handle: '.js-project-task-reorder',
                        containment: 'parent',
                        tolerance: 'pointer',
                        start: function (event, ui)
                        {
                            ui.item.data('start_pos', ui.item.index());
                        },
                        update: function (event, ui)
                        {
                            __doPostBack('<%= upnlContent.ClientID %>', 're-order:' + ui.item.attr('data-key') + ';' + $(ui.item).parent().children('li').index($(ui.item)));
                        }
                    });

                    $('#<%= tbTaskPasteContent.ClientID %>').on('input', function () {
                        var val = $(this).val().replace(/[^ -}\r\n]/g, '');
                        $(this).val(val);
                    });
                })
            })(jQuery);
        </script>
    </ContentTemplate>
</asp:UpdatePanel>