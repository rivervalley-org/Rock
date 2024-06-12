<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProjectCalendar.ascx.cs" Inherits="RockWeb.Plugins.com_blueboxmoon.ProjectManagement.ProjectCalendar" %>

<asp:UpdatePanel ID="upnlContent" runat="server">
    <ContentTemplate>
        <asp:HiddenField ID="hfBlockGuid" runat="server" />
        <asp:HiddenField ID="hfUrlTemplate" runat="server" />
        <asp:HiddenField ID="hfProjectTypes" runat="server" />
        <asp:HiddenField ID="hfFilter" runat="server" />

        <asp:Panel ID="pnlCalendar" runat="server" />

        <script>
            $(document).ready(function () {
                function getFilterOptions() {
                    var options = {
                        includeProjects: null,
                        includeTasks: null,
                        includeAssignedToMe: null,
                        includeRequestedByMe: null,
                        includeActiveOnly: null,
                        includeProjectTypeIds: []
                    };

                    var $filters = $('#<%= pnlCalendar.ClientID %>').find('.project-filters .fa-check,.project-type-filters .fa-check').closest('li');

                    $filters.each(function () {
                        var $filter = $(this);
                        if ($filter.data('include-projects') === true) {
                            options.includeProjects = true;
                        }
                        else if ($filter.data('include-tasks') === true) {
                            options.includeTasks = true;
                        }
                        else if ($filter.data('include-assigned-to-me') === true) {
                            options.includeAssignedToMe = true;
                        }
                        else if ($filter.data('include-requested-by-me') === true) {
                            options.includeRequestedByMe = true;
                        }
                        else if ($filter.data('include-active-only') === true) {
                            options.includeActiveOnly = true;
                        }
                        else if ($filter.data('include-project-type-id') !== undefined) {
                            options.includeProjectTypeIds.push(parseInt($filter.data('include-project-type-id')));
                        }
                    });

                    if (options.includeProjects === true || options.includeTasks === true) {
                        options.includeProjects = options.includeProjects || false;
                        options.includeTasks = options.includeTasks || false;
                    }

                    if (options.includeAssignedToMe === true || options.includeRequestedByMe === true) {
                        options.includeAssignedToMe = options.includeAssignedToMe || false;
                        options.includeRequestedByMe = options.includeRequestedByMe || false;
                    }

                    if (options.includeProjects === null) {
                        delete options.includeProjects;
                    }

                    if (options.includeTasks === null) {
                        delete options.includeTasks;
                    }

                    if (options.includeAssignedToMe === null) {
                        delete options.includeAssignedToMe;
                    }

                    if (options.includeRequestedByMe === null) {
                        delete options.includeRequestedByMe;
                    }

                    if (options.includeActiveOnly === null) {
                        delete options.includeActiveOnly;
                    }

                    if (options.includeProjectTypeIds.length > 0) {
                        options.includeProjectTypeIds = options.includeProjectTypeIds.join(',');
                    }
                    else {
                        delete options.includeProjectTypeIds;
                    }

                    return options;
                }

                function saveFilterOptions() {
                    var options = {
                        includeProjects: false,
                        includeTasks: false,
                        includeAssignedToMe: false,
                        includeRequestedByMe: false,
                        includeActiveOnly: false,
                        excludeProjectTypeIds: []
                    };

                    var $filters = $('#<%= pnlCalendar.ClientID %>').find('.project-filters .fa,.project-type-filters .project-type-indicator').closest('li');

                    $filters.each(function () {
                        var $filter = $(this);
                        if ($filter.data('include-projects') === true && $filter.find('.fa-check').length !== 0) {
                            options.includeProjects = true;
                        }
                        else if ($filter.data('include-tasks') === true && $filter.find('.fa-check').length !== 0) {
                            options.includeTasks = true;
                        }
                        else if ($filter.data('include-assigned-to-me') === true && $filter.find('.fa-check').length !== 0) {
                            options.includeAssignedToMe = true;
                        }
                        else if ($filter.data('include-requested-by-me') === true && $filter.find('.fa-check').length !== 0) {
                            options.includeRequestedByMe = true;
                        }
                        else if ($filter.data('include-active-only') === true && $filter.find('.fa-check').length !== 0) {
                            options.includeActiveOnly = true;
                        }
                        else if ($filter.data('include-project-type-id') !== undefined && $filter.find('.fa-check').length === 0) {
                            options.excludeProjectTypeIds.push(parseInt($filter.data('include-project-type-id')));
                        }
                    });

                    $.ajax({
                        method: 'POST',
                        url: '/api/BBM_ProjectManagement_Utility/BlockPreference',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            BlockGuid: $('#<%= hfBlockGuid.ClientID %>').val(),
                            Key: 'filter',
                            Value: JSON.stringify(options)
                        })
                    });
                }

                function getInitialFilterOptions() {
                    var settings;
                    try {
                        settings = JSON.parse($('#<%= hfFilter.ClientID %>').val());
                    }
                    catch {
                        settings = {};
                    }

                    return $.extend({
                        includeProjects: false,
                        includeTasks: false,
                        includeAssignedToMe: false,
                        includeRequestedByMe: false,
                        includeActiveOnly: true,
                        excludeProjectTypeIds: []
                    }, settings);
                }

                function getEvents(startDate, endDate, finished) {
                    var urlTemplate = $('#<%= hfUrlTemplate.ClientID %>').val();

                    var filterOptions = getFilterOptions();

                    filterOptions.startDate = startDate.format();
                    filterOptions.endDate = endDate.format();

                    $.ajax({
                        url: '/api/BBM_ProjectManagement_Utility/GetCalendarContent',
                        data: filterOptions,
                        success: function (data) {
                            var events = [];

                            data.forEach(function (a) {
                                var colorIndex = ((a.ProjectTypeId - 1) % 32) + 1;

                                var event = {
                                    id: a.Id,
                                    relatedId: a.ProjectId,
                                    start: a.DueDate,
                                    name: a.Name,
                                    url: urlTemplate.replace('PROJECT_ID', a.ProjectId),
                                    state: a.State,
                                    class: 'project-type-' + a.ProjectTypeId + ' event-color-' + colorIndex
                                };
                                events.push(event);
                            });

                            finished(events);
                        },
                        error: function (_error) {
                            finished([]);
                            alert('An error occurred trying to retrieve the calendar contents.');
                        }
                    });
                }

                function getEventName(_calendar, event, _options) {
                    var eventName = event.name;

                    return $('<span class="name"></span>')
                        .addClass('pm-event-' + event.state.toLowerCase())
                        .text(eventName);
                }

                function customActions() {
                    var $limits = $('<div class="btn-group"><button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-default btn-sm dropdown-toggle">Filter <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right project-filters"></ul>');
                    var $limitsMenu = $limits.find('.dropdown-menu');
                    var filterOptions = getInitialFilterOptions();

                    //
                    // Setup the filter for including projects.
                    //
                    var $includeProjects = $('<a href="#"><i class="fa fa-fw"></i> Projects</a>');
                    if (filterOptions.includeProjects === true) {
                        $includeProjects.find('.fa').addClass('fa-check');
                    }
                    $('<li></li>')
                        .append($includeProjects)
                        .data('include-projects', true)
                        .appendTo($limitsMenu);

                    //
                    // Setup the filter for including tasks.
                    //
                    var $includeTasks = $('<a href="#"><i class="fa fa-fw"></i> Tasks</a>');
                    if (filterOptions.includeTasks === true) {
                        $includeTasks.find('.fa').addClass('fa-check');
                    }
                    $('<li></li>')
                        .append($includeTasks)
                        .data('include-tasks', true)
                        .appendTo($limitsMenu);

                    $limitsMenu.append('<li><hr /></li>');

                    //
                    // Setup the filter for including assigned to me projects/tasks.
                    //
                    var $includeAssignedToMe = $('<a href="#"><i class="fa fa-fw"></i> Assigned To Me</a>');
                    if (filterOptions.includeAssignedToMe === true) {
                        $includeAssignedToMe.find('.fa').addClass('fa-check');
                    }
                    $('<li></li>')
                        .append($includeAssignedToMe)
                        .data('include-assigned-to-me', true)
                        .appendTo($limitsMenu);

                    //
                    // Setup the filter for including assigned to me projects/tasks.
                    //
                    var $includeRequestedByMe = $('<a href="#"><i class="fa fa-fw"></i> Requested By Me</a>');
                    if (filterOptions.includeRequestedByMe === true) {
                        $includeRequestedByMe.find('.fa').addClass('fa-check');
                    }
                    $('<li></li>')
                        .append($includeRequestedByMe)
                        .data('include-requested-by-me', true)
                        .appendTo($limitsMenu);

                    //
                    // Setup the filter for including only active projects/tasks.
                    //
                    var $includeActiveOnly = $('<a href="#"><i class="fa fa-fw"></i> Active Only</a>');
                    if (filterOptions.includeActiveOnly === true) {
                        $includeActiveOnly.find('.fa').addClass('fa-check');
                    }
                    $('<li></li>')
                        .append($includeActiveOnly)
                        .data('include-active-only', true)
                        .appendTo($limitsMenu);

                    //
                    // Install click handlers.
                    //
                    $limitsMenu.find('a').on('click', function (e) {
                        e.preventDefault();
                        $(this).blur();

                        $(this).find('.fa').toggleClass('fa-check');

                        saveFilterOptions();
                        calendar.update();

                        return false;
                    });

                    //
                    // Setup the per-project type filters.
                    //
                    var $projectTypes = $('<div class="btn-group"><button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-default btn-sm dropdown-toggle">Project Types <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right project-type-filters"></ul>');
                    var $projectTypesMenu = $projectTypes.find('.dropdown-menu');
                    var projectTypes = JSON.parse($('#<%= hfProjectTypes.ClientID %>').val());

                    for (var i in projectTypes) {
                        var projectType = projectTypes[i];
                        var colorIndex = ((projectType.Id - 1) % 32) + 1;

                        $('<li></li>')
                            .append($('<a href="#"></a>')
                                .append($('<i class="fa fa-fw"></i>')
                                    .addClass(filterOptions.excludeProjectTypeIds.indexOf(projectType.Id) === -1 ? 'fa-check' : ''))
                                .append(' ')
                                .append($('<span class="project-type-indicator"></span>')
                                    .addClass('project-type-' + projectType.Id)
                                    .addClass('event-color-' + colorIndex))
                                .append(' ')
                                .append($('<span></span>').text(projectType.Name)))
                            .data('include-project-type-id', projectType.Id)
                            .appendTo($projectTypesMenu);
                    }

                    $projectTypesMenu.find('a').on('click', function (e) {
                        e.preventDefault();
                        $(this).blur();

                        $(this).find('.fa').toggleClass('fa-check');

                        saveFilterOptions();
                        calendar.update();

                        return false;
                    });

                    return [$limits, $projectTypes];
                }

                var options = {
                    events: getEvents,
                    customActions: customActions,
                    eventNameTemplate: getEventName,
                    weekLayout: EventCalendar.Constants.WeekLayout.Compact,
                    dayLayout: EventCalendar.Constants.DayLayout.None
                };

                var calendar = new EventCalendar($('#<%= pnlCalendar.ClientID %>'), options);
                calendar.update();
            });
        </script>
    </ContentTemplate>
</asp:UpdatePanel>