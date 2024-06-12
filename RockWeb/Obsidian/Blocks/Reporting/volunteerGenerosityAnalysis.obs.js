System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Controls/grid', '@Obsidian/Controls/standardFilterDaysBack.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/panel.obs'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, watch, unref, openBlock, createElementBlock, toDisplayString, createVNode, withCtx, withModifiers, createTextVNode, createBlock, createCommentVNode, Fragment, renderList, normalizeStyle, normalizeClass, reactive, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, Grid, Column, textValueFilter, TextColumn, DateColumn, dateValueFilter, StandardFilterDaysBack, DropDownList, Panel;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      unref = module.unref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      withModifiers = module.withModifiers;
      createTextVNode = module.createTextVNode;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeStyle = module.normalizeStyle;
      normalizeClass = module.normalizeClass;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      Grid = module["default"];
      Column = module.Column;
      textValueFilter = module.textValueFilter;
      TextColumn = module.TextColumn;
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
    }, function (module) {
      StandardFilterDaysBack = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Panel = module["default"];
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["DateRange"] = "filter-date-range";
        PreferenceKey["Campus"] = "filter-campus";
        PreferenceKey["Team"] = "filter-team";
        return PreferenceKey;
      }({});

      var _withScopeId = n => (pushScopeId("data-v-4ff5cb83"), n = n(), popScopeId(), n);
      var _hoisted_1 = {
        key: 0,
        class: "no-data-message"
      };
      var _hoisted_2 = _withScopeId(() => createElementVNode("p", null, "No data available. Please refresh the dataset to load the block.", -1));
      var _hoisted_3 = ["disabled"];
      var _hoisted_4 = {
        key: 1,
        class: "volunteer-generosity-analysis"
      };
      var _hoisted_5 = {
        class: "refresh-tooltip"
      };
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = _withScopeId(() => createElementVNode("i", {
        class: "fas fa-sync-alt"
      }, null, -1));
      var _hoisted_8 = {
        class: "tooltip-text"
      };
      var _hoisted_9 = _withScopeId(() => createElementVNode("br", null, null, -1));
      var _hoisted_10 = {
        class: "filter-row"
      };
      var _hoisted_11 = {
        class: "volunteer-monthly-giving-chart-container"
      };
      var _hoisted_12 = _withScopeId(() => createElementVNode("h3", {
        class: "w-100 flex"
      }, "Volunteer Monthly Giving Rate", -1));
      var _hoisted_13 = {
        class: "volunteer-monthly-giving-chart"
      };
      var _hoisted_14 = {
        class: "volunteer-monthly-giving-bar"
      };
      var _hoisted_15 = {
        key: 0
      };
      var _hoisted_16 = {
        key: 0
      };
      var _hoisted_17 = {
        class: "month-label"
      };
      var _hoisted_18 = {
        class: "d-flex flex-fill align-items-center"
      };
      var _hoisted_19 = {
        class: "flex-grow-1"
      };
      var _hoisted_20 = _withScopeId(() => createElementVNode("div", {
        class: "d-flex flex-fill align-items-center"
      }, [createElementVNode("div", {
        class: "mr-2 flex-shrink-0 skeleton skeleton-xs",
        style: {
          "width": "24px",
          "height": "24px",
          "border-radius": "12px"
        }
      }), createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-sm skeleton-rounded flex-grow-1"
      })], -1));
      var _hoisted_21 = {
        class: "bar-chart"
      };
      var _hoisted_22 = {
        class: "tooltip"
      };
      var script = exports('default', defineComponent({
        name: 'volunteerGenerosityAnalysis',
        setup(__props) {
          var config = useConfigurationValues();
          var bag = useConfigurationValues();
          var gridDataSource = ref();
          var invokeBlockAction = useInvokeBlockAction();
          var gridData;
          var _usePersonPreferences = usePersonPreferences(),
            blockPreferences = _usePersonPreferences.blockPreferences;
          var selectedDateRange = ref(parseInt(blockPreferences.getValue(PreferenceKey.DateRange)) || 90);
          var campusValue = ref("");
          var teamValue = ref("");
          var teamDonationStats = ref([]);
          var lastUpdated = ref(bag.lastUpdated || "N/A");
          var estimatedRefreshTime = ref(bag.estimatedRefreshTime || 0);
          var dataRefreshed = ref(false);
          var isRefreshing = ref(false);
          var uniqueGroups = ref([{
            text: "All",
            value: ""
          }]);
          var uniqueCampuses = ref([{
            text: "All",
            value: ""
          }]);
          var fetchBlockPreferences = function () {
            var _ref = _asyncToGenerator(function* () {
              var defaultCampus = blockPreferences.getValue(PreferenceKey.Campus) || "";
              var defaultTeam = blockPreferences.getValue(PreferenceKey.Team) || "";
              campusValue.value = defaultCampus || "All";
              teamValue.value = defaultTeam || "All";
            });
            return function fetchBlockPreferences() {
              return _ref.apply(this, arguments);
            };
          }();
          var calculateTimeDifference = lastUpdatedString => {
            var lastUpdatedDate = new Date(lastUpdatedString);
            var now = new Date();
            var diffInSeconds = Math.floor((now.getTime() - lastUpdatedDate.getTime()) / 1000);
            var timeDiffStr = "Data Updated: ";
            if (diffInSeconds < 60) {
              timeDiffStr += "".concat(diffInSeconds, " seconds ago");
            } else if (diffInSeconds < 3600) {
              var minutes = Math.floor(diffInSeconds / 60);
              timeDiffStr += "".concat(minutes, " minute").concat(minutes > 1 ? "s" : "", " ago");
            } else if (diffInSeconds < 86400) {
              var hours = Math.floor(diffInSeconds / 3600);
              timeDiffStr += "".concat(hours, " hour").concat(hours > 1 ? "s" : "", " ago");
            } else {
              var days = Math.floor(diffInSeconds / 86400);
              timeDiffStr += "".concat(days, " day").concat(days > 1 ? "s" : "", " ago");
            }
            return timeDiffStr;
          };
          var calculateDonationPercentages = () => {
            var _gridData, _gridData$rows;
            var donationData = last13Months.reduce((acc, month) => {
              acc[month] = {
                donated: new Set(),
                total: new Set()
              };
              return acc;
            }, {});
            (_gridData = gridData) === null || _gridData === void 0 ? void 0 : (_gridData$rows = _gridData.rows) === null || _gridData$rows === void 0 ? void 0 : _gridData$rows.forEach(person => {
              var givingId = person.givingId;
              if (typeof person.givingMonths === "string") {
                person.givingMonths.toString().split(", ").forEach(monthYear => {
                  if (last13Months.includes(monthYear)) {
                    donationData[monthYear].donated.add(givingId);
                  }
                });
              }
              Object.values(donationData).forEach(monthData => {
                monthData.total.add(givingId);
              });
            });
            var donationPercentages = last13Months.map(month => {
              var _donationData$month = donationData[month],
                donated = _donationData$month.donated,
                total = _donationData$month.total;
              var donatedCount = donated.size;
              var totalCount = total.size;
              var notDonatedCount = totalCount - donatedCount;
              return {
                month,
                donatedPercentage: donatedCount / totalCount * 100,
                notDonatedPercentage: notDonatedCount / totalCount * 100
              };
            });
            return teamDonationStats.value = donationPercentages;
          };
          var decodeHtml = html => {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
          };
          var formatLastUpdated = lastUpdated => {
            var lastUpdatedDate = new Date(lastUpdated);
            var datePart = lastUpdatedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            });
            var hours = lastUpdatedDate.getHours();
            var minutes = lastUpdatedDate.getMinutes();
            var ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            var minutesStr = minutes < 10 ? "0" + minutes : minutes;
            var timePart = "".concat(hours, ":").concat(minutesStr, " ").concat(ampm);
            return "Data last updated ".concat(datePart, " at ").concat(timePart);
          };
          var onDateRangeSelected = value => {
            selectedDateRange.value = value;
          };
          var onCampusSelected = value => {
            if (!value || Array.isArray(value)) {
              console.error("Unexpected value received for campus selection");
              return;
            }
            campusValue.value = value ? value : "All";
          };
          var onTeamSelected = value => {
            if (!value || Array.isArray(value)) {
              console.error("Unexpected value received for team selection");
              return;
            }
            teamValue.value = value ? value : "All";
          };
          var generateLast13Months = () => {
            var months = [];
            var date = new Date();
            for (var i = 12; i >= 0; i--) {
              var d = new Date(date.getFullYear(), date.getMonth() - i, 1);
              months.push(d.toLocaleString("default", {
                month: "short",
                year: "numeric"
              }));
            }
            return months;
          };
          var getBarChart = givenMonthsStr => {
            var givenMonths = givenMonthsStr ? givenMonthsStr.split(",").map(monthYear => monthYear.trim()) : [];
            var allEmpty = givenMonths.length === 0;
            return last13Months.map(displayedMonth => {
              var isFull = givenMonths.includes(displayedMonth);
              var barClass = isFull ? "full" : "empty";
              if (allEmpty) barClass = "fullEmpty";
              return {
                month: displayedMonth,
                full: isFull,
                class: barClass
              };
            });
          };
          var refreshData = function () {
            var _ref2 = _asyncToGenerator(function* () {
              isRefreshing.value = true;
              var result = yield invokeBlockAction("RefreshData");
              if (result.isSuccess && result.data) {
                dataRefreshed.value = true;
                lastUpdated.value = result.data.lastUpdated;
                estimatedRefreshTime.value = result.data.estimatedRefreshTime;
              }
              location.reload();
              isRefreshing.value = false;
              gridDataSource.value = loadGridData();
            });
            return function refreshData() {
              return _ref2.apply(this, arguments);
            };
          }();
          var hardRefreshData = function () {
            var _ref3 = _asyncToGenerator(function* () {
              yield refreshData();
              location.reload();
            });
            return function hardRefreshData() {
              return _ref3.apply(this, arguments);
            };
          }();
          var loadGridData = function () {
            var _ref4 = _asyncToGenerator(function* () {
              try {
                var result = yield invokeBlockAction("GetGridData", {
                  dateRange: selectedDateRange.value,
                  campus: campusValue.value,
                  team: teamValue.value
                });
                if (result.isSuccess && result.data && result.data.rows) {
                  dataRefreshed.value = false;
                  gridData = reactive(result.data);
                  if (bag.uniqueCampuses) {
                    uniqueCampuses.value = [{
                      text: "All",
                      value: ""
                    }, ...bag.uniqueCampuses.map(campus => ({
                      text: decodeHtml(campus),
                      value: campus
                    }))];
                  }
                  if (bag.uniqueGroups) {
                    uniqueGroups.value = [{
                      text: "All",
                      value: ""
                    }, ...bag.uniqueGroups.map(group => ({
                      text: decodeHtml(group),
                      value: group
                    }))];
                  }
                  yield fetchBlockPreferences();
                  calculateDonationPercentages();
                  return gridData;
                } else {
                  gridData = undefined;
                  return gridData;
                }
              } catch (error) {
                console.error("Error loading grid data:", error);
                gridData = undefined;
                return gridData;
              }
            });
            return function loadGridData() {
              return _ref4.apply(this, arguments);
            };
          }();
          watch([selectedDateRange, campusValue, teamValue, dataRefreshed], _asyncToGenerator(function* () {
            blockPreferences.setValue(PreferenceKey.DateRange, selectedDateRange.value.toString());
            blockPreferences.setValue(PreferenceKey.Campus, campusValue.value);
            blockPreferences.setValue(PreferenceKey.Team, teamValue.value);
            yield blockPreferences.save();
            gridDataSource.value = loadGridData();
          }));
          var last13Months = generateLast13Months();
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            return unref(config) === null ? (openBlock(), createElementBlock("div", _hoisted_1, [_hoisted_2, createElementVNode("button", {
              class: "btn btn-primary",
              onClick: hardRefreshData,
              disabled: isRefreshing.value
            }, toDisplayString(isRefreshing.value ? 'Refreshing...' : 'Refresh Dataset'), 9, _hoisted_3)])) : (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              itemTerm: "Volunteer Generosity Analysis",
              showExport: false,
              isCountMessageVisible: false,
              isSearchVisible: false
            }, {
              gridHeaderPrepend: withCtx(() => [createVNode(unref(Panel), {
                hasTitle: false
              }, {
                default: withCtx(() => [createElementVNode("div", _hoisted_5, [createElementVNode("button", {
                  class: "btn btn-xs btn-default",
                  onClick: withModifiers(refreshData, ["prevent"])
                }, [createTextVNode(toDisplayString(calculateTimeDifference(lastUpdated.value)) + " ", 1), _hoisted_7], 8, _hoisted_6), createElementVNode("span", _hoisted_8, [createTextVNode(toDisplayString(formatLastUpdated(lastUpdated.value)) + " ", 1), _hoisted_9, createTextVNode(" Estimated Refresh Time: " + toDisplayString(estimatedRefreshTime.value) + " seconds ", 1)])]), createElementVNode("div", _hoisted_10, [createVNode(unref(StandardFilterDaysBack), {
                  style: 'width: 26vw',
                  "onUpdate:modelValue": [onDateRangeSelected, _cache[0] || (_cache[0] = $event => selectedDateRange.value = $event)],
                  modelValue: selectedDateRange.value,
                  label: "Attendance Date Range"
                }, null, 8, ["modelValue"]), unref(bag).showCampusFilter ? (openBlock(), createBlock(unref(DropDownList), {
                  key: 0,
                  style: 'width: 26vw',
                  modelValue: campusValue.value,
                  "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => campusValue.value = $event), onCampusSelected],
                  items: uniqueCampuses.value,
                  label: "Campus"
                }, null, 8, ["modelValue", "items"])) : createCommentVNode("v-if", true), createVNode(unref(DropDownList), {
                  style: 'width: 26vw',
                  modelValue: teamValue.value,
                  "onUpdate:modelValue": [_cache[2] || (_cache[2] = $event => teamValue.value = $event), onTeamSelected],
                  items: uniqueGroups.value,
                  label: "Team"
                }, null, 8, ["modelValue", "items"])]), createCommentVNode(" Chart Section "), createElementVNode("div", _hoisted_11, [_hoisted_12, createElementVNode("div", _hoisted_13, [(openBlock(true), createElementBlock(Fragment, null, renderList(teamDonationStats.value, stat => {
                  return openBlock(), createElementBlock("div", {
                    key: stat.month,
                    class: "volunteer-monthly-giving-bar-container"
                  }, [createElementVNode("div", _hoisted_14, [stat.donatedPercentage > 0 ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "donated percent",
                    style: normalizeStyle({
                      height: "".concat(stat.donatedPercentage, "%")
                    })
                  }, [stat.donatedPercentage >= 20 ? (openBlock(), createElementBlock("span", _hoisted_15, toDisplayString(stat.donatedPercentage.toFixed(1)) + "% ", 1)) : createCommentVNode("v-if", true)], 4)) : createCommentVNode("v-if", true), stat.notDonatedPercentage > 0 ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: "not-donated percent",
                    style: normalizeStyle({
                      height: "".concat(stat.notDonatedPercentage, "%")
                    })
                  }, [stat.notDonatedPercentage >= 20 ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(stat.notDonatedPercentage.toFixed(1)) + "% ", 1)) : createCommentVNode("v-if", true)], 4)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_17, toDisplayString(stat.month), 1)]);
                }), 128))])])]),
                _: 1
              })]),
              default: withCtx(() => [createVNode(unref(Column), {
                name: "name",
                title: "Name",
                sortValue: "{{ row.person.lastName }} {{ row.person.nickName }}",
                filter: unref(textValueFilter),
                filterValue: "{{ row.person.nickName }} {{ row.person.lastName }}",
                quickFilterValue: "{{ row.person.nickName }} {{ row.person.lastName }}"
              }, {
                format: withCtx(_ref6 => {
                  var row = _ref6.row;
                  return [createElementVNode("div", _hoisted_18, [createElementVNode("div", {
                    class: "mr-2 flex-shrink-0",
                    style: normalizeStyle({
                      'width': '24px',
                      'height': '24px',
                      'border-radius': '12px',
                      'background-image': "url('".concat(row.person.photoUrl, "')"),
                      'background-size': 'cover'
                    })
                  }, null, 4), createElementVNode("div", _hoisted_19, toDisplayString(row.person.nickName) + " " + toDisplayString(row.person.lastName), 1)])];
                }),
                skeleton: withCtx(() => [_hoisted_20]),
                export: withCtx(_ref7 => {
                  var row = _ref7.row;
                  return [createTextVNode(toDisplayString(row.person.nickName) + " " + toDisplayString(row.person.lastName), 1)];
                }),
                _: 1
              }, 8, ["filter"]), unref(bag).showCampusFilter ? (openBlock(), createBlock(unref(TextColumn), {
                key: 0,
                name: "campus",
                title: "Campus",
                field: "campus",
                visiblePriority: "xs",
                width: "10%"
              }, {
                format: withCtx(_ref8 => {
                  var row = _ref8.row;
                  return [createTextVNode(toDisplayString(decodeHtml(row.campus)), 1)];
                }),
                _: 1
              })) : createCommentVNode("v-if", true), createVNode(unref(TextColumn), {
                name: "team",
                title: "Team",
                field: "team",
                visiblePriority: "xs",
                width: "10%"
              }, {
                format: withCtx(_ref9 => {
                  var row = _ref9.row;
                  return [createTextVNode(toDisplayString(decodeHtml(row.team)), 1)];
                }),
                _: 1
              }), createVNode(unref(DateColumn), {
                name: "lastAttendance",
                title: "Last Attendance",
                field: "lastAttendanceDate",
                filter: unref(dateValueFilter),
                visiblePriority: "xs",
                width: "10%"
              }, null, 8, ["filter"]), createVNode(unref(Column), {
                name: "givingMonths",
                title: "Giving Months",
                field: "givingMonths",
                sortField: 'false',
                width: "30%"
              }, {
                format: withCtx(_ref10 => {
                  var row = _ref10.row;
                  return [createElementVNode("div", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(getBarChart(row.givingMonths), (bar, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: normalizeClass(["bar", bar.class])
                    }, [createElementVNode("div", _hoisted_22, toDisplayString(bar.month), 1)], 2);
                  }), 128))])];
                }),
                _: 1
              })]),
              _: 1
            }, 8, ["definition", "data"])]));
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".volunteer-generosity-analysis .top-row[data-v-4ff5cb83]{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.volunteer-generosity-analysis .filter-row[data-v-4ff5cb83]{align-items:center;display:flex;gap:20px;margin-bottom:20px}.grid-row[data-v-4ff5cb83],.volunteer-generosity-analysis .chart-row[data-v-4ff5cb83]{margin-bottom:20px}.bar-chart[data-v-4ff5cb83]{align-items:end;display:flex;position:relative;top:14px}.bar[data-v-4ff5cb83]{margin:0 2px;position:relative;width:20px}.empty[data-v-4ff5cb83],.fullEmpty[data-v-4ff5cb83],.full[data-v-4ff5cb83]{align-items:flex-end;display:flex;height:30px;justify-content:center;transition:height .3s ease-out}.empty[data-v-4ff5cb83],.fullEmpty[data-v-4ff5cb83]{background-color:transparent;border-bottom:3px solid var(--color-info)}.full[data-v-4ff5cb83]{background-color:var(--color-info)}.tooltip[data-v-4ff5cb83]{background-color:#000;border-radius:6px;bottom:35px;color:#fff;font-size:smaller;left:50%;margin-left:-35px;opacity:0;padding:5px 0;position:absolute;text-align:center;transition:opacity .3s;visibility:hidden;width:70px;z-index:1}.bar:hover .tooltip[data-v-4ff5cb83]{opacity:.8;visibility:visible}.volunteer-monthly-giving-chart-container[data-v-4ff5cb83]{align-items:center;display:flex;flex-direction:column}.volunteer-monthly-giving-chart[data-v-4ff5cb83]{display:flex;justify-content:space-around;padding:10px 0;width:100%}.volunteer-monthly-giving-bar-container[data-v-4ff5cb83]{align-items:center;display:flex;flex-direction:column;width:52px}.volunteer-monthly-giving-bar[data-v-4ff5cb83]{align-items:center;display:flex;flex-direction:column-reverse;height:108px;margin:0 4px;position:relative;width:52px}.donated[data-v-4ff5cb83],.not-donated[data-v-4ff5cb83]{align-items:flex-end;color:#fff;display:flex;justify-content:center;transition:height .3s ease-out;width:100%}.not-donated[data-v-4ff5cb83]{background-color:#e8e8e8;color:#000}.donated[data-v-4ff5cb83]{background-color:var(--color-success);border-top:1px solid #098f62}.month-label[data-v-4ff5cb83]{align-items:baseline;display:flex;font-size:.7em;margin-top:5px;text-align:center}.volunteer-monthly-giving-month-labels[data-v-4ff5cb83]{margin-bottom:20px;width:100%}.donated[data-v-4ff5cb83],.not-donated[data-v-4ff5cb83],.volunteer-monthly-giving-bar[data-v-4ff5cb83]{height:108px}.filter-row[data-v-4ff5cb83]{display:grid;gap:20px;grid-template-columns:repeat(3,1fr);margin-bottom:20px}.filter-row.no-campus[data-v-4ff5cb83]{grid-template-columns:1fr 2fr}.filter-row>[data-v-4ff5cb83]{flex:1;padding:10px}.tooltip[data-v-4ff5cb83]:after{border:5px solid transparent;border-top-color:#000;content:\"\";left:50%;margin-left:-5px;position:absolute;top:100%}.refresh-tooltip[data-v-4ff5cb83]{display:flex;justify-content:end;position:relative}.refresh-tooltip .tooltip-text[data-v-4ff5cb83]{background-color:#000;border-radius:6px;bottom:125%;color:#fff;font-size:small;margin-left:-110px;opacity:.7;padding:10px;position:absolute;text-align:center;transition:opacity .3s;visibility:hidden;width:270px;z-index:1}.refresh-tooltip .tooltip-text[data-v-4ff5cb83]:after{border:5px solid transparent;border-top-color:#000;bottom:-10px;content:\"\";left:69%;position:absolute;transform:translateX(-50%)}.refresh-tooltip:hover .tooltip-text[data-v-4ff5cb83]{opacity:o.7;visibility:visible}.tooltip[data-v-4ff5cb83]:before{border:5px solid transparent;border-top-color:#000;bottom:-10px;content:\"\";left:50%;position:absolute;transform:translateX(-50%)}.grid-row[data-v-4ff5cb83],.volunteer-monthly-giving-chart-container[data-v-4ff5cb83]{width:100%}.volunteer-monthly-giving-month-labels[data-v-4ff5cb83]{display:flex;justify-content:space-between;padding:0 10px}.no-data-message[data-v-4ff5cb83],.percent[data-v-4ff5cb83]{align-items:center;display:flex;justify-content:center}.no-data-message[data-v-4ff5cb83]{flex-direction:column;height:200px;text-align:center}";
      styleInject(css_248z);

      script.__scopeId = "data-v-4ff5cb83";
      script.__file = "src/Reporting/volunteerGenerosityAnalysis.obs";

    })
  };
}));
//# sourceMappingURL=volunteerGenerosityAnalysis.obs.js.map
