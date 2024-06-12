System.register(['vue', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/noteTextEditor.obs', '@Obsidian/SystemGuids/definedType', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Blocks/Group/Scheduling/toolboxScheduleRowActionType', '@Obsidian/Enums/Blocks/Group/Scheduling/toolboxScheduleRowConfirmationStatus', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/dateRangePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/tooltip', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/stringUtils', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/tabbedBar.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/grid', '@Obsidian/Controls/panel.obs', '@Obsidian/Enums/Blocks/Group/Scheduling/toolboxActionType'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, inject, ref, computed, openBlock, createBlock, unref, isRef, withCtx, createVNode, createCommentVNode, createTextVNode, pushScopeId, popScopeId, createElementBlock, Fragment, toDisplayString, normalizeClass, withModifiers, watch, renderList, createSlots, nextTick, provide, DefinedValuePicker, Modal, NoteTextEditor, DefinedType, useInvokeBlockAction, useConfigurationValues, getSecurityGrant, useReloadBlock, provideSecurityGrant, onConfigurationValuesChanged, useVModelPassthrough, toGuidOrNull, emptyGuid, toOrdinalSuffix, RockDateTime, NotificationBox, RockButton, AlertType, BtnType, ToolboxScheduleRowActionType, ToolboxScheduleRowConfirmationStatusDescription, ToolboxScheduleRowConfirmationStatus, CheckBoxList, DateRangePicker, DropDownList, TextBox, BtnSize, tooltip, showTooltip, CheckBox, pluralize, RockLabel, TabbedBar, DatePicker, Grid, TextColumn, EditColumn, DeleteColumn, Panel, ToolboxActionType;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
      createTextVNode = module.createTextVNode;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
      normalizeClass = module.normalizeClass;
      withModifiers = module.withModifiers;
      watch = module.watch;
      renderList = module.renderList;
      createSlots = module.createSlots;
      nextTick = module.nextTick;
      provide = module.provide;
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NoteTextEditor = module["default"];
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      toOrdinalSuffix = module.toOrdinalSuffix;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      ToolboxScheduleRowActionType = module.ToolboxScheduleRowActionType;
    }, function (module) {
      ToolboxScheduleRowConfirmationStatusDescription = module.ToolboxScheduleRowConfirmationStatusDescription;
      ToolboxScheduleRowConfirmationStatus = module.ToolboxScheduleRowConfirmationStatus;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      tooltip = module.tooltip;
      showTooltip = module.showTooltip;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      pluralize = module.pluralize;
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      TabbedBar = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      EditColumn = module.EditColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      ToolboxActionType = module.ToolboxActionType;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      var PageParameterKey = function (PageParameterKey) {
        PageParameterKey["ToolboxActionType"] = "ToolboxActionType";
        PageParameterKey["ToolboxGroupId"] = "ToolboxGroupId";
        return PageParameterKey;
      }({});
      var SelectedPersonGuid = Symbol("selected-person-guid");
      var SelectedGroup = Symbol("selected-group");
      var SaveSignUpErrorMessage = Symbol("save-sign-up-error-message");

      var _hoisted_1$8 = createElementVNode("p", {
        class: "decline-reason-instructions"
      }, " Your feedback on declining this schedule would be valuable to us. ", -1);
      var script$9 = defineComponent({
        name: 'declineReason.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          attendanceGuid: {
            type: String,
            required: true
          },
          wasSchedulePreviouslyConfirmed: {
            type: Boolean,
            required: true
          },
          isDeclineNoteVisible: {
            type: Boolean,
            required: true
          },
          isDeclineNoteRequired: {
            type: Boolean,
            required: true
          }
        },
        emits: ["update:isVisible"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var isSavingDeclineReason = ref(false);
          var declineReason = ref(null);
          var declineReasonNote = ref("");
          var declineNoteRules = computed(() => {
            return props.isDeclineNoteRequired ? "required" : "";
          });
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _toGuidOrNull, _toGuidOrNull2;
              if (isSavingDeclineReason.value) {
                return;
              }
              isSavingDeclineReason.value = true;
              var bag = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                attendanceGuid: (_toGuidOrNull2 = toGuidOrNull(props.attendanceGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                wasSchedulePreviouslyConfirmed: props.wasSchedulePreviouslyConfirmed,
                declineReason: declineReason.value,
                declineReasonNote: declineReasonNote.value
              };
              try {
                yield invokeBlockAction("SaveDeclineReason", {
                  bag
                });
              } finally {
                isSavingDeclineReason.value = false;
                isVisible.value = false;
              }
            });
            return _onSave.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Decline Reason",
              modalWrapperClasses: "schedule-toolbox-decline-reason",
              saveText: "Save",
              cancelText: "",
              isSaveButtonDisabled: isSavingDeclineReason.value,
              isCloseButtonHidden: true,
              onSave: onSave
            }, {
              default: withCtx(() => [_hoisted_1$8, createVNode(unref(DefinedValuePicker), {
                modelValue: declineReason.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => declineReason.value = $event),
                label: "Reason for Decline",
                formGroupClasses: "decline-reason-defined-value",
                rules: "required",
                definedTypeGuid: unref(DefinedType).GroupScheduleDeclineReason,
                disabled: isSavingDeclineReason.value
              }, null, 8, ["modelValue", "definedTypeGuid", "disabled"]), __props.isDeclineNoteVisible ? (openBlock(), createBlock(unref(NoteTextEditor), {
                key: 0,
                modelValue: declineReasonNote.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => declineReasonNote.value = $event),
                label: "Elaborate on Your Decline Reason",
                formGroupClasses: "decline-reason-note",
                rules: unref(declineNoteRules),
                disabled: isSavingDeclineReason.value
              }, null, 8, ["modelValue", "rules", "disabled"])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue", "isSaveButtonDisabled"]);
          };
        }
      });

      script$9.__file = "src/Group/Scheduling/GroupScheduleToolbox/declineReason.partial.obs";

      function formatToolboxDate(dateString) {
        var formattedDate;
        var rockDateTime = RockDateTime.parseISO(dateString);
        if (rockDateTime) {
          formattedDate = rockDateTime.toASPString("ddd, MMM d");
          if (formattedDate) {
            var dateParts = formattedDate.split(" ");
            if (dateParts.length === 3) {
              var ordinalDate = toOrdinalSuffix(+dateParts[2]);
              formattedDate = [dateParts[0], dateParts[1], ordinalDate !== null && ordinalDate !== void 0 ? ordinalDate : dateParts[2]].join(" ");
            }
          }
        }
        return formattedDate || "No Date Provided";
      }

      var _withScopeId$3 = n => (pushScopeId("data-v-d0ec6c52"), n = n(), popScopeId(), n);
      var _hoisted_1$7 = {
        class: "card-body schedule-toolbox-card"
      };
      var _hoisted_2$5 = {
        class: "schedule-toolbox-card-description"
      };
      var _hoisted_3$5 = {
        key: 0,
        class: "card-title"
      };
      var _hoisted_4$5 = {
        class: "schedule-date"
      };
      var _hoisted_5$3 = ["innerHTML"];
      var _hoisted_6$3 = {
        class: "schedule-occurrence-schedule"
      };
      var _hoisted_7$2 = {
        key: 0,
        class: "schedule-confirm schedule-toolbox-card-pending"
      };
      var _hoisted_8$2 = createTextVNode(" Decline ");
      var _hoisted_9$1 = createTextVNode(" Accept ");
      var _hoisted_10 = {
        key: 1,
        class: "schedule-toolbox-card-not-pending"
      };
      var _hoisted_11 = {
        class: "btn-group dropdown-right schedule-toolbox-card-context-menu"
      };
      var _hoisted_12 = ["disabled"];
      var _hoisted_13 = _withScopeId$3(() => createElementVNode("i", {
        class: "fa fa-ellipsis-v"
      }, null, -1));
      var _hoisted_14 = [_hoisted_13];
      var _hoisted_15 = {
        class: "dropdown-menu"
      };
      var script$8 = defineComponent({
        name: 'currentScheduleRow.partial',
        props: {
          row: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["removeScheduleRow", "personGroupScheduleFeedUrlUpdated"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var selectedPersonGuid = inject(SelectedPersonGuid);
          var isPerformingAction = ref(false);
          var errorMessage = ref("");
          var isDeclineReasonModalVisible = ref(false);
          var wasSchedulePreviouslyConfirmed = ref(false);
          var isDeclineNoteVisible = ref(false);
          var isDeclineNoteRequired = ref(false);
          var cardCssClass = computed(() => {
            var statusDescription = ToolboxScheduleRowConfirmationStatusDescription[props.row.confirmationStatus];
            return "card card-sm card-schedule".concat(statusDescription ? " schedule-".concat(statusDescription.toLowerCase()) : "");
          });
          var scheduleDate = computed(() => {
            if (!props.row.occurrenceStartDate) {
              return "";
            }
            var startDate = formatToolboxDate(props.row.occurrenceStartDate);
            var endDate = "";
            if (props.row.occurrenceEndDate) {
              endDate = formatToolboxDate(props.row.occurrenceEndDate);
            }
            if (!endDate) {
              return startDate;
            }
            return "".concat(startDate, " - ").concat(endDate);
          });
          var cardDetails = computed(() => {
            var detailParts = [];
            if (props.row.familyMemberName) {
              detailParts.push(["family-member-name", props.row.familyMemberName]);
            }
            if (props.row.groupName) {
              detailParts.push(["group", props.row.groupName]);
            }
            if (props.row.locationName) {
              detailParts.push(["location", props.row.locationName]);
            }
            var detail = "";
            for (var i = 0; i < detailParts.length; i++) {
              var cssClass = detailParts[i][0];
              var delimiter = i > 0 ? " - " : "";
              var value = detailParts[i][1];
              detail += "".concat(delimiter, "<span class=\"schedule-occurrence-").concat(cssClass, "\">").concat(value, "</span>");
            }
            return detail;
          });
          var labelCssClass = computed(() => {
            var statusColor = "muted";
            switch (props.row.confirmationStatus) {
              case ToolboxScheduleRowConfirmationStatus.Confirmed:
                statusColor = "success";
                break;
              case ToolboxScheduleRowConfirmationStatus.Declined:
                statusColor = "danger";
                break;
            }
            return "text-".concat(statusColor);
          });
          var isRowDisabled = computed(() => {
            return !!(props.disabled || !props.row.entityGuid || isPerformingAction.value);
          });
          function onPerformAction(_x) {
            return _onPerformAction.apply(this, arguments);
          }
          function _onPerformAction() {
            _onPerformAction = _asyncToGenerator(function* (actionType) {
              var _toGuidOrNull, _toGuidOrNull2, _result$data, _result$data2, _result$data3;
              if (isRowDisabled.value) {
                return;
              }
              isPerformingAction.value = true;
              errorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull(selectedPersonGuid === null || selectedPersonGuid === void 0 ? void 0 : selectedPersonGuid.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                entityGuid: (_toGuidOrNull2 = toGuidOrNull(props.row.entityGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                actionType
              };
              var result = yield invokeBlockAction("PerformScheduleRowAction", {
                bag
              });
              isPerformingAction.value = false;
              if (!result.isSuccess) {
                errorMessage.value = result.errorMessage || "Unknown error while trying to perform schedule row action.";
                return;
              }
              var newStatus = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.newStatus;
              if (newStatus !== null && newStatus !== undefined) {
                props.row.confirmationStatus = newStatus;
              } else {
                var _props$row$entityGuid;
                emit("removeScheduleRow", (_props$row$entityGuid = props.row.entityGuid) !== null && _props$row$entityGuid !== void 0 ? _props$row$entityGuid : "");
              }
              emit("personGroupScheduleFeedUrlUpdated", (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.personGroupScheduleFeedUrl);
              if ((_result$data3 = result.data) !== null && _result$data3 !== void 0 && _result$data3.isDeclineReasonRequired) {
                wasSchedulePreviouslyConfirmed.value = result.data.wasSchedulePreviouslyConfirmed;
                isDeclineNoteVisible.value = result.data.isDeclineNoteVisible;
                isDeclineNoteRequired.value = result.data.isDeclineNoteRequired;
                isDeclineReasonModalVisible.value = true;
              }
            });
            return _onPerformAction.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), createElementVNode("div", {
              class: normalizeClass(unref(cardCssClass))
            }, [createElementVNode("div", _hoisted_1$7, [createElementVNode("div", _hoisted_2$5, [unref(scheduleDate) ? (openBlock(), createElementBlock("span", _hoisted_3$5, [createElementVNode("span", _hoisted_4$5, toDisplayString(unref(scheduleDate)), 1)])) : createCommentVNode("v-if", true), createElementVNode("span", {
              class: "schedule-occurrence",
              innerHTML: unref(cardDetails)
            }, null, 8, _hoisted_5$3), createElementVNode("span", _hoisted_6$3, toDisplayString(__props.row.scheduleName), 1)]), __props.row.confirmationStatus === unref(ToolboxScheduleRowConfirmationStatus).Pending ? (openBlock(), createElementBlock("div", _hoisted_7$2, [createVNode(unref(RockButton), {
              type: "button",
              btnType: unref(BtnType).Danger,
              disabled: unref(isRowDisabled),
              onClick: _cache[0] || (_cache[0] = $event => onPerformAction(unref(ToolboxScheduleRowActionType).Decline))
            }, {
              default: withCtx(() => [_hoisted_8$2]),
              _: 1
            }, 8, ["btnType", "disabled"]), createVNode(unref(RockButton), {
              type: "button",
              btnType: unref(BtnType).Success,
              disabled: unref(isRowDisabled),
              onClick: _cache[1] || (_cache[1] = $event => onPerformAction(unref(ToolboxScheduleRowActionType).Accept))
            }, {
              default: withCtx(() => [_hoisted_9$1]),
              _: 1
            }, 8, ["btnType", "disabled"])])) : (openBlock(), createElementBlock("div", _hoisted_10, [createElementVNode("span", {
              class: normalizeClass(unref(labelCssClass))
            }, toDisplayString(unref(ToolboxScheduleRowConfirmationStatusDescription)[__props.row.confirmationStatus]), 3), createElementVNode("div", _hoisted_11, [createElementVNode("button", {
              type: "button",
              class: "btn btn-link btn-overflow dropdown-toggle",
              "data-toggle": "dropdown",
              disabled: unref(isRowDisabled)
            }, _hoisted_14, 8, _hoisted_12), createElementVNode("ul", _hoisted_15, [createElementVNode("li", null, [__props.row.confirmationStatus === unref(ToolboxScheduleRowConfirmationStatus).Confirmed ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "text-danger",
              href: "#",
              onClick: _cache[2] || (_cache[2] = withModifiers($event => onPerformAction(unref(ToolboxScheduleRowActionType).Cancel), ["prevent"]))
            }, " Cancel Confirmation ")) : __props.row.confirmationStatus === unref(ToolboxScheduleRowConfirmationStatus).Declined ? (openBlock(), createElementBlock("a", {
              key: 1,
              href: "#",
              onClick: _cache[3] || (_cache[3] = withModifiers($event => onPerformAction(unref(ToolboxScheduleRowActionType).Accept), ["prevent"]))
            }, " Accept Schedule ")) : (openBlock(), createElementBlock("a", {
              key: 2,
              class: "text-danger",
              href: "#",
              onClick: _cache[4] || (_cache[4] = withModifiers($event => onPerformAction(unref(ToolboxScheduleRowActionType).Delete), ["prevent"]))
            }, " Delete "))])])])]))])], 2), createVNode(unref(script$9), {
              isVisible: isDeclineReasonModalVisible.value,
              "onUpdate:isVisible": _cache[5] || (_cache[5] = $event => isDeclineReasonModalVisible.value = $event),
              attendanceGuid: __props.row.entityGuid,
              wasSchedulePreviouslyConfirmed: wasSchedulePreviouslyConfirmed.value,
              isDeclineNoteVisible: isDeclineNoteVisible.value,
              isDeclineNoteRequired: isDeclineNoteRequired.value
            }, null, 8, ["isVisible", "attendanceGuid", "wasSchedulePreviouslyConfirmed", "isDeclineNoteVisible", "isDeclineNoteRequired"])], 64);
          };
        }
      });

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

      var css_248z$5 = ".schedule-toolbox-card[data-v-d0ec6c52]{display:flex}.schedule-toolbox-card-description[data-v-d0ec6c52]{flex:1 1 auto}.schedule-toolbox-card-not-pending[data-v-d0ec6c52]{align-items:center;display:flex;flex-wrap:nowrap;justify-content:flex-end}.schedule-toolbox-card-context-menu[data-v-d0ec6c52]{margin-left:4px}";
      styleInject(css_248z$5);

      script$8.__scopeId = "data-v-d0ec6c52";
      script$8.__file = "src/Group/Scheduling/GroupScheduleToolbox/currentScheduleRow.partial.obs";

      var _hoisted_1$6 = ["innerHTML"];
      var script$7 = defineComponent({
        name: 'scheduleUnavailability.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          familyMembers: {
            type: Array,
            required: true
          },
          schedulableGroups: {
            type: Array,
            required: true
          },
          headerText: {
            type: String,
            required: false
          }
        },
        emits: ["update:isVisible", "scheduleUnavailabilityAdded"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var dateRangeParts = ref({});
          var notes = ref("");
          var groupGuidOrEmptyString = ref("");
          var personGuids = ref(selectedPersonGuidOrEmptyString.value ? [selectedPersonGuidOrEmptyString.value] : []);
          var isSavingUnavailability = ref(false);
          var blockActionErrorMessage = ref("");
          var groups = computed(() => {
            var _props$schedulableGro;
            var groupList = [{
              text: "All Groups",
              value: ""
            }];
            (_props$schedulableGro = props.schedulableGroups) === null || _props$schedulableGro === void 0 ? void 0 : _props$schedulableGro.forEach(group => {
              groupList.push({
                text: group.name,
                value: group.guid
              });
            });
            return groupList;
          });
          var isFamilyMemberListVisible = computed(() => {
            var _props$familyMembers$, _props$familyMembers;
            return ((_props$familyMembers$ = (_props$familyMembers = props.familyMembers) === null || _props$familyMembers === void 0 ? void 0 : _props$familyMembers.length) !== null && _props$familyMembers$ !== void 0 ? _props$familyMembers$ : 0) > 1;
          });
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _toGuidOrNull, _dateRangeParts$value, _dateRangeParts$value2;
              if (isSavingUnavailability.value) {
                return;
              }
              isSavingUnavailability.value = true;
              blockActionErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                startDate: (_dateRangeParts$value = dateRangeParts.value) === null || _dateRangeParts$value === void 0 ? void 0 : _dateRangeParts$value.lowerValue,
                endDate: (_dateRangeParts$value2 = dateRangeParts.value) === null || _dateRangeParts$value2 === void 0 ? void 0 : _dateRangeParts$value2.upperValue,
                notes: notes.value,
                groupGuid: toGuidOrNull(groupGuidOrEmptyString.value),
                personGuids: personGuids.value
              };
              var result = yield invokeBlockAction("SaveUnavailability", {
                bag
              });
              isSavingUnavailability.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to save unavailability.";
                return;
              }
              emit("scheduleUnavailabilityAdded");
              isVisible.value = false;
              dateRangeParts.value = {};
              notes.value = "";
              groupGuidOrEmptyString.value = "";
              personGuids.value = selectedPersonGuidOrEmptyString.value ? [selectedPersonGuidOrEmptyString.value] : [];
            });
            return _onSave.apply(this, arguments);
          }
          watch(selectedPersonGuidOrEmptyString, () => {
            personGuids.value = selectedPersonGuidOrEmptyString.value ? [selectedPersonGuidOrEmptyString.value] : [];
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Schedule Unavailability",
              modalWrapperClasses: "schedule-toolbox-unavailability",
              saveText: "Save",
              isSaveButtonDisabled: isSavingUnavailability.value,
              onSave: onSave
            }, {
              default: withCtx(() => [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), __props.headerText ? (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: __props.headerText
              }, null, 8, _hoisted_1$6)) : createCommentVNode("v-if", true), createVNode(unref(DateRangePicker), {
                modelValue: dateRangeParts.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => dateRangeParts.value = $event),
                label: "Date Range",
                formGroupClasses: "unavailability-date-range",
                rules: "required",
                disabled: isSavingUnavailability.value
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
                modelValue: notes.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => notes.value = $event),
                label: "Unavailability Notes",
                formGroupClasses: "unavailability-notes",
                disabled: isSavingUnavailability.value
              }, null, 8, ["modelValue", "disabled"]), createVNode(unref(DropDownList), {
                modelValue: groupGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => groupGuidOrEmptyString.value = $event),
                label: "Group",
                formGroupClasses: "unavailability-group",
                items: unref(groups),
                showBlankItem: false,
                disabled: isSavingUnavailability.value
              }, null, 8, ["modelValue", "items", "disabled"]), unref(isFamilyMemberListVisible) ? (openBlock(), createBlock(unref(CheckBoxList), {
                key: 2,
                modelValue: personGuids.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => personGuids.value = $event),
                label: "Individual",
                formGroupClasses: "unavailability-people",
                rules: "required",
                items: __props.familyMembers,
                disabled: isSavingUnavailability.value
              }, null, 8, ["modelValue", "items", "disabled"])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue", "isSaveButtonDisabled"]);
          };
        }
      });

      script$7.__file = "src/Group/Scheduling/GroupScheduleToolbox/scheduleUnavailability.partial.obs";

      var _withScopeId$2 = n => (pushScopeId("data-v-00341fa6"), n = n(), popScopeId(), n);
      var _hoisted_1$5 = {
        class: "schedule-toolbox-content-header-buttons"
      };
      var _hoisted_2$4 = {
        class: "schedule-toolbox-calendar-buttons"
      };
      var _hoisted_3$4 = _withScopeId$2(() => createElementVNode("i", {
        class: "fa fa-calendar-plus-o"
      }, null, -1));
      var _hoisted_4$4 = createTextVNode(" Add to Calendar ");
      var _hoisted_5$2 = _withScopeId$2(() => createElementVNode("i", {
        class: "fa fa-calendar-alt"
      }, null, -1));
      var _hoisted_6$2 = createTextVNode(" Copy Calendar Link ");
      var _hoisted_7$1 = _withScopeId$2(() => createElementVNode("i", {
        class: "fa fa-calendar-times-o"
      }, null, -1));
      var _hoisted_8$1 = {
        class: "schedule-toolbox-cards"
      };
      var _hoisted_9 = createTextVNode(" No upcoming schedules. ");
      var script$6 = defineComponent({
        name: 'currentSchedule.partial',
        props: {
          isLoadingCurrentSchedule: {
            type: Boolean,
            required: true
          },
          isScheduleUnavailabilityEnabled: {
            type: Boolean,
            required: true
          },
          scheduleUnavailabilitybuttonText: {
            type: String,
            required: true
          },
          scheduleUnavailabilityHeaderHtml: {
            type: String,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:isLoadingCurrentSchedule"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var tooltipTitleAttribute = "data-original-title";
          var copyCalendarLinkTooltip = "Copies the link to synchronize your schedule with a calendar such as Microsoft Outlook or Google Calendar";
          var addToCalendarButton = ref(null);
          var copyCalendarLinkButton = ref(null);
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var isLoadingCurrentSchedule = useVModelPassthrough(props, "isLoadingCurrentSchedule", emit);
          var blockActionErrorMessage = ref("");
          var scheduleRows = ref([]);
          var personGroupScheduleFeedUrl = ref();
          var familyMembers = ref([]);
          var schedulableGroups = ref([]);
          var isScheduleUnavailabilityModalVisible = ref(false);
          var isNoSchedulesNotificationVisible = computed(() => {
            var _scheduleRows$value;
            return !!(!isLoadingCurrentSchedule.value && !((_scheduleRows$value = scheduleRows.value) !== null && _scheduleRows$value !== void 0 && _scheduleRows$value.length));
          });
          function getCurrentSchedule() {
            return _getCurrentSchedule.apply(this, arguments);
          }
          function _getCurrentSchedule() {
            _getCurrentSchedule = _asyncToGenerator(function* () {
              var _toGuidOrNull;
              if (isLoadingCurrentSchedule.value) {
                return;
              }
              isLoadingCurrentSchedule.value = true;
              blockActionErrorMessage.value = "";
              var request = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var result = yield invokeBlockAction("GetCurrentSchedule", request);
              isLoadingCurrentSchedule.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to get current schedule.";
                setCurrentSchedule(null);
                return;
              }
              setCurrentSchedule(result.data);
            });
            return _getCurrentSchedule.apply(this, arguments);
          }
          function setCurrentSchedule(currentSchedule) {
            var _currentSchedule$sche, _currentSchedule$fami, _currentSchedule$sche2;
            scheduleRows.value = (_currentSchedule$sche = currentSchedule === null || currentSchedule === void 0 ? void 0 : currentSchedule.scheduleRows) !== null && _currentSchedule$sche !== void 0 ? _currentSchedule$sche : [];
            personGroupScheduleFeedUrl.value = currentSchedule === null || currentSchedule === void 0 ? void 0 : currentSchedule.personGroupScheduleFeedUrl;
            familyMembers.value = (_currentSchedule$fami = currentSchedule === null || currentSchedule === void 0 ? void 0 : currentSchedule.familyMembers) !== null && _currentSchedule$fami !== void 0 ? _currentSchedule$fami : [];
            schedulableGroups.value = (_currentSchedule$sche2 = currentSchedule === null || currentSchedule === void 0 ? void 0 : currentSchedule.schedulableGroups) !== null && _currentSchedule$sche2 !== void 0 ? _currentSchedule$sche2 : [];
          }
          function configureTooltips() {
            if (addToCalendarButton.value) {
              tooltip(addToCalendarButton.value);
            }
            if (copyCalendarLinkButton.value) {
              tooltip(copyCalendarLinkButton.value);
            }
          }
          function onAddToCalendarClick(_x) {
            return _onAddToCalendarClick.apply(this, arguments);
          }
          function _onAddToCalendarClick() {
            _onAddToCalendarClick = _asyncToGenerator(function* (event) {
              var _event$target2;
              (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.blur();
              if (!personGroupScheduleFeedUrl.value) {
                return;
              }
              var link = document.createElement("a");
              link.href = personGroupScheduleFeedUrl.value;
              link.setAttribute("download", "download");
              link.click();
            });
            return _onAddToCalendarClick.apply(this, arguments);
          }
          function onCopyCalendarLinkClick(_x2) {
            return _onCopyCalendarLinkClick.apply(this, arguments);
          }
          function _onCopyCalendarLinkClick() {
            _onCopyCalendarLinkClick = _asyncToGenerator(function* (event) {
              var _event$target3, _personGroupScheduleF;
              (_event$target3 = event.target) === null || _event$target3 === void 0 ? void 0 : _event$target3.blur();
              if (!personGroupScheduleFeedUrl.value) {
                return;
              }
              yield navigator.clipboard.writeText((_personGroupScheduleF = personGroupScheduleFeedUrl.value) !== null && _personGroupScheduleF !== void 0 ? _personGroupScheduleF : "");
              if (!copyCalendarLinkButton.value) {
                return;
              }
              copyCalendarLinkButton.value.blur();
              copyCalendarLinkButton.value.setAttribute(tooltipTitleAttribute, "Copied");
              showTooltip(copyCalendarLinkButton.value);
              copyCalendarLinkButton.value.setAttribute(tooltipTitleAttribute, copyCalendarLinkTooltip);
            });
            return _onCopyCalendarLinkClick.apply(this, arguments);
          }
          function onScheduleUnavailabilityClick(event) {
            var _event$target;
            (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.blur();
            isScheduleUnavailabilityModalVisible.value = true;
          }
          function onRemoveScheduleRow(entityGuid) {
            var _scheduleRows$value2;
            var rowToRemove = (_scheduleRows$value2 = scheduleRows.value) === null || _scheduleRows$value2 === void 0 ? void 0 : _scheduleRows$value2.find(r => (r === null || r === void 0 ? void 0 : r.entityGuid) === entityGuid);
            if (!rowToRemove) {
              return;
            }
            scheduleRows.value = scheduleRows.value.filter(r => r !== rowToRemove);
          }
          function onPersonGroupScheduleFeedUrlUpdated(updatedUrl) {
            personGroupScheduleFeedUrl.value = updatedUrl;
          }
          watch(selectedPersonGuidOrEmptyString, () => {
            if (selectedPersonGuidOrEmptyString.value) {
              getCurrentSchedule();
            }
          });
          watch([addToCalendarButton, copyCalendarLinkButton], () => {
            configureTooltips();
          });
          getCurrentSchedule();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$4, [createElementVNode("span", {
              ref_key: "addToCalendarButton",
              ref: addToCalendarButton,
              title: "Downloads your schedule to be added directly to your calendar."
            }, [createVNode(unref(RockButton), {
              type: "button",
              class: "btn-add-to-calendar",
              btnType: unref(BtnType).Default,
              btnSize: unref(BtnSize).ExtraSmall,
              disabled: __props.disabled || unref(isLoadingCurrentSchedule) || !personGroupScheduleFeedUrl.value,
              onClick: onAddToCalendarClick
            }, {
              default: withCtx(() => [_hoisted_3$4, _hoisted_4$4]),
              _: 1
            }, 8, ["btnType", "btnSize", "disabled"])], 512), createElementVNode("span", {
              ref_key: "copyCalendarLinkButton",
              ref: copyCalendarLinkButton,
              title: copyCalendarLinkTooltip
            }, [createVNode(unref(RockButton), {
              type: "button",
              class: "btn-copy-calendar-link",
              btnType: unref(BtnType).Default,
              btnSize: unref(BtnSize).ExtraSmall,
              disabled: __props.disabled || unref(isLoadingCurrentSchedule) || !personGroupScheduleFeedUrl.value,
              onClick: onCopyCalendarLinkClick
            }, {
              default: withCtx(() => [_hoisted_5$2, _hoisted_6$2]),
              _: 1
            }, 8, ["btnType", "btnSize", "disabled"])], 512)]), __props.isScheduleUnavailabilityEnabled ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              type: "button",
              class: "btn-schedule-unavailability",
              btnType: unref(BtnType).Default,
              btnSize: unref(BtnSize).ExtraSmall,
              disabled: __props.disabled || unref(isLoadingCurrentSchedule),
              onClick: onScheduleUnavailabilityClick
            }, {
              default: withCtx(() => [_hoisted_7$1, createTextVNode(" " + toDisplayString(__props.scheduleUnavailabilitybuttonText), 1)]),
              _: 1
            }, 8, ["btnType", "btnSize", "disabled"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_8$1, [unref(isNoSchedulesNotificationVisible) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_9]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(true), createElementBlock(Fragment, {
              key: 1
            }, renderList(scheduleRows.value, row => {
              var _row$entityGuid;
              return openBlock(), createBlock(unref(script$8), {
                key: (_row$entityGuid = row.entityGuid) !== null && _row$entityGuid !== void 0 ? _row$entityGuid : '',
                row: row,
                disabled: __props.disabled || unref(isLoadingCurrentSchedule),
                onRemoveScheduleRow: onRemoveScheduleRow,
                onPersonGroupScheduleFeedUrlUpdated: onPersonGroupScheduleFeedUrlUpdated
              }, null, 8, ["row", "disabled"]);
            }), 128))]), createVNode(unref(script$7), {
              isVisible: isScheduleUnavailabilityModalVisible.value,
              "onUpdate:isVisible": _cache[0] || (_cache[0] = $event => isScheduleUnavailabilityModalVisible.value = $event),
              familyMembers: familyMembers.value,
              schedulableGroups: schedulableGroups.value,
              headerText: __props.scheduleUnavailabilityHeaderHtml,
              onScheduleUnavailabilityAdded: getCurrentSchedule
            }, null, 8, ["isVisible", "familyMembers", "schedulableGroups", "headerText"])], 64);
          };
        }
      });

      var css_248z$4 = ".schedule-toolbox-content-header-buttons[data-v-00341fa6]{display:flex;flex-wrap:wrap;justify-content:space-between}.schedule-toolbox-calendar-buttons[data-v-00341fa6]{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}.btn-schedule-unavailability[data-v-00341fa6]{margin-bottom:24px}";
      styleInject(css_248z$4);

      script$6.__scopeId = "data-v-00341fa6";
      script$6.__file = "src/Group/Scheduling/GroupScheduleToolbox/currentSchedule.partial.obs";

      var _withScopeId$1 = n => (pushScopeId("data-v-91057c14"), n = n(), popScopeId(), n);
      var _hoisted_1$4 = {
        class: "flex-fill d-flex flex-column flex-sm-row flex-wrap justify-content-sm-between align-items-sm-center"
      };
      var _hoisted_2$3 = {
        class: "text-muted small schedule-signup-people-needed"
      };
      var _hoisted_3$3 = _withScopeId$1(() => createElementVNode("i", {
        class: "fa fa-check"
      }, null, -1));
      var _hoisted_4$3 = [_hoisted_3$3];
      var script$5 = defineComponent({
        name: 'signUpOccurrence.partial',
        props: {
          occurrence: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["updatedSignUps"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var selectedGroup = inject(SelectedGroup);
          var signUpOccurrence = ref(props.occurrence);
          var isChecked = ref(false);
          var oldIsChecked = isChecked.value;
          var selectedLocationGuid = ref(getFirstLocationOrEmptyGuid(props.occurrence));
          var oldSelectedLocationGuid = selectedLocationGuid.value;
          var isSavingSignUp = ref(false);
          var saveSignUpErrorMessage = inject(SaveSignUpErrorMessage, ref(""));
          var postSaveLocationItemCount = ref(0);
          var areSuccessStylesVisible = ref(false);
          var successStylesTimeoutID;
          var occurrenceCssClass = computed(() => {
            return "d-flex align-items-center schedule-toolbox-sign-up-occurrence".concat(areSuccessStylesVisible.value ? " sign-up-save-success" : "");
          });
          var text = computed(() => {
            var _signUpOccurrence$val, _signUpOccurrence$val2;
            return (_signUpOccurrence$val = (_signUpOccurrence$val2 = signUpOccurrence.value) === null || _signUpOccurrence$val2 === void 0 ? void 0 : _signUpOccurrence$val2.formattedScheduleName) !== null && _signUpOccurrence$val !== void 0 ? _signUpOccurrence$val : "";
          });
          var peopleNeededText = computed(() => {
            var _signUpOccurrence$val3, _signUpOccurrence$val4;
            var peopleNeededCount = (_signUpOccurrence$val3 = (_signUpOccurrence$val4 = signUpOccurrence.value) === null || _signUpOccurrence$val4 === void 0 ? void 0 : _signUpOccurrence$val4.peopleNeededCount) !== null && _signUpOccurrence$val3 !== void 0 ? _signUpOccurrence$val3 : 0;
            if (peopleNeededCount > 0 && isChecked.value) {
              peopleNeededCount--;
            }
            return peopleNeededCount > 0 ? "(".concat(peopleNeededCount, " ").concat(pluralize("people", peopleNeededCount), " needed)") : "";
          });
          var title = computed(() => {
            var _signUpOccurrence$val5, _signUpOccurrence$val6;
            return (_signUpOccurrence$val5 = (_signUpOccurrence$val6 = signUpOccurrence.value) === null || _signUpOccurrence$val6 === void 0 ? void 0 : _signUpOccurrence$val6.scheduleName) !== null && _signUpOccurrence$val5 !== void 0 ? _signUpOccurrence$val5 : "";
          });
          var locationItems = computed(() => {
            var _signUpOccurrence$val7, _signUpOccurrence$val8, _signUpOccurrence$val9;
            return (_signUpOccurrence$val7 = (_signUpOccurrence$val8 = signUpOccurrence.value) === null || _signUpOccurrence$val8 === void 0 ? void 0 : (_signUpOccurrence$val9 = _signUpOccurrence$val8.locations) === null || _signUpOccurrence$val9 === void 0 ? void 0 : _signUpOccurrence$val9.filter(location => (location === null || location === void 0 ? void 0 : location.locationName) && (location === null || location === void 0 ? void 0 : location.locationGuid)).map(location => ({
              text: location.locationName,
              value: location.locationGuid
            }))) !== null && _signUpOccurrence$val7 !== void 0 ? _signUpOccurrence$val7 : [];
          });
          var isLocationListVisible = computed(() => {
            return postSaveLocationItemCount.value > 1 && isChecked.value;
          });
          var checkCssClass = computed(() => {
            return "text-success schedule-toolbox-sign-up-occurrence-check".concat(!areSuccessStylesVisible.value ? " not-signed-up" : "");
          });
          function getFirstLocationOrEmptyGuid(occurrence) {
            var _occurrence$locations, _toGuidOrNull;
            return occurrence !== null && occurrence !== void 0 && (_occurrence$locations = occurrence.locations) !== null && _occurrence$locations !== void 0 && _occurrence$locations.length ? (_toGuidOrNull = toGuidOrNull(occurrence.locations[0].locationGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid : emptyGuid;
          }
          function restoreOldValues() {
            isChecked.value = oldIsChecked;
            selectedLocationGuid.value = oldSelectedLocationGuid;
            nextTick(() => {
              isSavingSignUp.value = false;
            });
          }
          function onSignUpChanged() {
            return _onSignUpChanged.apply(this, arguments);
          }
          function _onSignUpChanged() {
            _onSignUpChanged = _asyncToGenerator(function* () {
              var _toGuidOrNull2, _toGuidOrNull3, _selectedGroup$value, _toGuidOrNull4, _signUpOccurrence$val10, _toGuidOrNull5, _signUpOccurrence$val11, _result$data;
              if (isSavingSignUp.value) {
                return;
              }
              clearTimeout(successStylesTimeoutID);
              isSavingSignUp.value = true;
              saveSignUpErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull2 = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                selectedGroupGuid: (_toGuidOrNull3 = toGuidOrNull(selectedGroup === null || selectedGroup === void 0 ? void 0 : (_selectedGroup$value = selectedGroup.value) === null || _selectedGroup$value === void 0 ? void 0 : _selectedGroup$value.guid)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid,
                selectedScheduleGuid: (_toGuidOrNull4 = toGuidOrNull((_signUpOccurrence$val10 = signUpOccurrence.value) === null || _signUpOccurrence$val10 === void 0 ? void 0 : _signUpOccurrence$val10.scheduleGuid)) !== null && _toGuidOrNull4 !== void 0 ? _toGuidOrNull4 : emptyGuid,
                selectedLocationGuid: (_toGuidOrNull5 = toGuidOrNull(selectedLocationGuid.value)) !== null && _toGuidOrNull5 !== void 0 ? _toGuidOrNull5 : emptyGuid,
                occurrenceDateTime: (_signUpOccurrence$val11 = signUpOccurrence.value) === null || _signUpOccurrence$val11 === void 0 ? void 0 : _signUpOccurrence$val11.occurrenceDateTime,
                isSigningUp: isChecked.value
              };
              var result = yield invokeBlockAction("SaveSignUp", {
                bag
              });
              if (!result.isSuccess) {
                saveSignUpErrorMessage.value = result.errorMessage || "Unknown error while trying to ".concat(isChecked.value ? "save" : "delete", " sign-up.");
                restoreOldValues();
                return;
              }
              if ((_result$data = result.data) !== null && _result$data !== void 0 && _result$data.saveError) {
                saveSignUpErrorMessage.value = result.data.saveError;
                emit("updatedSignUps", result.data.signUps);
                restoreOldValues();
                return;
              }
              if (isChecked.value) {
                var _result$data2, _result$data$selected, _result$data3;
                signUpOccurrence.value = (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.signUpOccurrence;
                selectedLocationGuid.value = (_result$data$selected = (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.selectedLocationGuid) !== null && _result$data$selected !== void 0 ? _result$data$selected : emptyGuid;
                postSaveLocationItemCount.value = locationItems.value.length;
              } else {
                postSaveLocationItemCount.value = 0;
              }
              oldIsChecked = isChecked.value;
              oldSelectedLocationGuid = isChecked.value ? selectedLocationGuid.value : getFirstLocationOrEmptyGuid(signUpOccurrence.value);
              areSuccessStylesVisible.value = true;
              successStylesTimeoutID = setTimeout(() => areSuccessStylesVisible.value = false, 1000);
              isSavingSignUp.value = false;
            });
            return _onSignUpChanged.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return signUpOccurrence.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(occurrenceCssClass))
            }, [createElementVNode("div", _hoisted_1$4, [createVNode(unref(CheckBox), {
              modelValue: isChecked.value,
              "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => isChecked.value = $event), onSignUpChanged],
              label: "",
              text: unref(text),
              title: unref(title),
              disabled: __props.disabled || isSavingSignUp.value
            }, createSlots({
              _: 2
            }, [unref(peopleNeededText) ? {
              name: "textAppend",
              fn: withCtx(() => [createElementVNode("span", _hoisted_2$3, toDisplayString(unref(peopleNeededText)), 1)])
            } : undefined]), 1032, ["modelValue", "text", "title", "disabled"]), unref(isLocationListVisible) ? (openBlock(), createBlock(unref(DropDownList), {
              key: 0,
              modelValue: selectedLocationGuid.value,
              "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => selectedLocationGuid.value = $event), onSignUpChanged],
              label: "",
              inputClasses: "input-sm",
              items: unref(locationItems),
              showBlankItem: false,
              disabled: __props.disabled || isSavingSignUp.value
            }, null, 8, ["modelValue", "items", "disabled"])) : createCommentVNode("v-if", true)]), createElementVNode("div", {
              class: normalizeClass(unref(checkCssClass))
            }, _hoisted_4$3, 2)], 2)) : createCommentVNode("v-if", true);
          };
        }
      });

      var css_248z$3 = ".schedule-toolbox-sign-up-occurrence[data-v-91057c14]{background-color:transparent;border-radius:6px;margin-left:12px;padding:0 12px;transition:background-color 1s linear;&.sign-up-save-success[data-v-91057c14]{background-color:#eefdf8;transition:background-color 0s linear}}.schedule-toolbox-sign-up-occurrence-check[data-v-91057c14]{margin-left:12px;transition:color 0s linear;&.not-signed-up[data-v-91057c14]{color:transparent!important;transition:color 1s linear}}";
      styleInject(css_248z$3);

      script$5.__scopeId = "data-v-91057c14";
      script$5.__file = "src/Group/Scheduling/GroupScheduleToolbox/signUpOccurrence.partial.obs";

      var _hoisted_1$3 = {
        class: "schedule-toolbox-signup-occurrence-date"
      };
      var script$4 = defineComponent({
        name: 'signUpOccurrenceDate.partial',
        props: {
          occurrences: {
            type: Array,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["updatedSignUps"],
        setup(__props) {
          function getOccurrenceKey(occurrence) {
            var _occurrence$locations, _occurrence$locations2, _occurrence$locations3;
            var locationGuids = (_occurrence$locations = (_occurrence$locations2 = occurrence.locations) === null || _occurrence$locations2 === void 0 ? void 0 : (_occurrence$locations3 = _occurrence$locations2.map(location => location === null || location === void 0 ? void 0 : location.locationGuid)) === null || _occurrence$locations3 === void 0 ? void 0 : _occurrence$locations3.join(";")) !== null && _occurrence$locations !== void 0 ? _occurrence$locations : "no-locations";
            return "".concat(occurrence.occurrenceDateTime, "|").concat(occurrence.scheduleGuid, "|").concat(locationGuids);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
              _: 1
            }), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.occurrences, occurrence => {
              return openBlock(), createBlock(unref(script$5), {
                key: getOccurrenceKey(occurrence),
                occurrence: occurrence,
                disabled: __props.disabled,
                onUpdatedSignUps: _cache[0] || (_cache[0] = $event => _ctx.$emit('updatedSignUps', $event))
              }, null, 8, ["occurrence", "disabled"]);
            }), 128))]);
          };
        }
      });

      var css_248z$2 = ".schedule-toolbox-signup-occurrence-date[data-v-9d1fdf78]{margin-top:24px}";
      styleInject(css_248z$2);

      script$4.__scopeId = "data-v-9d1fdf78";
      script$4.__file = "src/Group/Scheduling/GroupScheduleToolbox/signUpOccurrenceDate.partial.obs";

      var _hoisted_1$2 = createTextVNode(" You are currently not in any scheduled groups. ");
      var _hoisted_2$2 = createTextVNode(" No sign-ups available. ");
      var _hoisted_3$2 = {
        key: 0,
        class: "schedule-toolbox-immediate-needs-introduction"
      };
      var _hoisted_4$2 = {
        key: 2,
        class: "schedule-toolbox-signup-non-immediate-needs"
      };
      var script$3 = defineComponent({
        name: 'signUp.partial',
        props: {
          isLoadingSignUps: {
            type: Boolean,
            required: true
          },
          immediateNeedsTitle: {
            type: String,
            default: ""
          },
          immediateNeedsIntroduction: {
            type: String,
            default: ""
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:isLoadingSignUps"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var selectedGroup = inject(SelectedGroup);
          var blockActionErrorMessage = ref("");
          var isLoadingSignUps = useVModelPassthrough(props, "isLoadingSignUps", emit);
          var hasCompletedInitialLoad = ref(false);
          var schedulableGroups = ref([]);
          var signUpOccurrences = ref([]);
          var saveSignUpErrorMessage = ref("");
          var isNoGroupsNotificationVisible = computed(() => {
            var _schedulableGroups$va;
            return !!(!isLoadingSignUps.value && (!((_schedulableGroups$va = schedulableGroups.value) !== null && _schedulableGroups$va !== void 0 && _schedulableGroups$va.length) || !(selectedGroup !== null && selectedGroup !== void 0 && selectedGroup.value)));
          });
          var groupList = computed(() => {
            return schedulableGroups.value.filter(group => (group === null || group === void 0 ? void 0 : group.guid) && (group === null || group === void 0 ? void 0 : group.name)).map(group => ({
              text: "".concat(group.name).concat(group.campusName ? " (".concat(group.campusName, ")") : ""),
              value: group.guid
            }));
          });
          var selectedGroupGuidOrEmptyString = computed({
            get() {
              var _selectedGroup$value$, _selectedGroup$value;
              return (_selectedGroup$value$ = selectedGroup === null || selectedGroup === void 0 ? void 0 : (_selectedGroup$value = selectedGroup.value) === null || _selectedGroup$value === void 0 ? void 0 : _selectedGroup$value.guid) !== null && _selectedGroup$value$ !== void 0 ? _selectedGroup$value$ : "";
            },
            set(newValue) {
              getSignUps(newValue);
            }
          });
          var isContentVisible = computed(() => {
            return !isNoGroupsNotificationVisible.value && hasCompletedInitialLoad.value;
          });
          var immediateOccurrencesByDate = computed(() => {
            var _signUpOccurrences$va, _signUpOccurrences$va2;
            var immediateOccurrences = (_signUpOccurrences$va = (_signUpOccurrences$va2 = signUpOccurrences.value) === null || _signUpOccurrences$va2 === void 0 ? void 0 : _signUpOccurrences$va2.filter(o => (o === null || o === void 0 ? void 0 : o.occurrenceDateTime) && o.isImmediateNeed)) !== null && _signUpOccurrences$va !== void 0 ? _signUpOccurrences$va : [];
            return groupOccurrencesByDate(immediateOccurrences);
          });
          var anyImmediateSignUps = computed(() => {
            return !!immediateOccurrencesByDate.value.size;
          });
          var nonImmediateOccurrencesByDate = computed(() => {
            var _signUpOccurrences$va3, _signUpOccurrences$va4;
            var nonImmediateOccurrences = (_signUpOccurrences$va3 = (_signUpOccurrences$va4 = signUpOccurrences.value) === null || _signUpOccurrences$va4 === void 0 ? void 0 : _signUpOccurrences$va4.filter(o => (o === null || o === void 0 ? void 0 : o.occurrenceDateTime) && !o.isImmediateNeed)) !== null && _signUpOccurrences$va3 !== void 0 ? _signUpOccurrences$va3 : [];
            return groupOccurrencesByDate(nonImmediateOccurrences);
          });
          var anyNonImmediateSignups = computed(() => {
            return !!nonImmediateOccurrencesByDate.value.size;
          });
          var anySignUps = computed(() => {
            return anyImmediateSignUps.value || anyNonImmediateSignups.value;
          });
          function getSignUps(_x) {
            return _getSignUps.apply(this, arguments);
          }
          function _getSignUps() {
            _getSignUps = _asyncToGenerator(function* (groupGuidOrEmptyString) {
              var _toGuidOrNull;
              if (isLoadingSignUps.value) {
                return;
              }
              isLoadingSignUps.value = true;
              blockActionErrorMessage.value = "";
              saveSignUpErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                selectedGroupGuid: toGuidOrNull(groupGuidOrEmptyString)
              };
              var result = yield invokeBlockAction("GetSignUps", {
                bag
              });
              isLoadingSignUps.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to get additional time sign-ups.";
                setSignUps(null);
              }
              setSignUps(result.data);
              hasCompletedInitialLoad.value = true;
            });
            return _getSignUps.apply(this, arguments);
          }
          function setSignUps(signUps) {
            var _signUps$schedulableG, _signUps$occurrences;
            if (selectedGroup) {
              selectedGroup.value = signUps === null || signUps === void 0 ? void 0 : signUps.selectedGroup;
            }
            schedulableGroups.value = (_signUps$schedulableG = signUps === null || signUps === void 0 ? void 0 : signUps.schedulableGroups) !== null && _signUps$schedulableG !== void 0 ? _signUps$schedulableG : [];
            signUpOccurrences.value = (_signUps$occurrences = signUps === null || signUps === void 0 ? void 0 : signUps.occurrences) !== null && _signUps$occurrences !== void 0 ? _signUps$occurrences : [];
          }
          function groupOccurrencesByDate(occurrences) {
            var groupedOccurrences = new Map();
            occurrences.forEach(o => {
              var _RockDateTime$parseIS, _RockDateTime$parseIS2;
              if (!o.occurrenceDateTime) {
                return;
              }
              var date = (_RockDateTime$parseIS = RockDateTime.parseISO(o.occurrenceDateTime)) === null || _RockDateTime$parseIS === void 0 ? void 0 : (_RockDateTime$parseIS2 = _RockDateTime$parseIS.date) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toISOString();
              if (!date) {
                return;
              }
              var dateOccurrences = groupedOccurrences.get(date);
              if (!dateOccurrences) {
                dateOccurrences = [];
                groupedOccurrences.set(date, dateOccurrences);
              }
              dateOccurrences.push(o);
            });
            return groupedOccurrences;
          }
          watch(selectedPersonGuidOrEmptyString, () => {
            if (selectedPersonGuidOrEmptyString.value) {
              hasCompletedInitialLoad.value = false;
              getSignUps(selectedGroupGuidOrEmptyString.value);
            }
          });
          provide(SaveSignUpErrorMessage, saveSignUpErrorMessage);
          getSignUps(selectedGroupGuidOrEmptyString.value);
          return (_ctx, _cache) => {
            var _props$immediateNeed;
            return openBlock(), createElementBlock(Fragment, null, [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : unref(isNoGroupsNotificationVisible) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_1$2]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(isContentVisible) ? (openBlock(), createElementBlock(Fragment, {
              key: 2
            }, [createVNode(unref(TabbedBar), {
              modelValue: unref(selectedGroupGuidOrEmptyString),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(selectedGroupGuidOrEmptyString) ? selectedGroupGuidOrEmptyString.value = $event : null),
              class: "schedule-toolbox-group-tabs",
              tabs: unref(groupList),
              disabled: __props.disabled || unref(isLoadingSignUps)
            }, null, 8, ["modelValue", "tabs", "disabled"]), !unref(anySignUps) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              class: "schedule-toolbox-no-sign-ups-available",
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_2$2]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [saveSignUpErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              class: "schedule-toolbox-signup-save-error-message",
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(saveSignUpErrorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(anyImmediateSignUps) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              class: "schedule-toolbox-signup-immediate-needs",
              alertType: unref(AlertType).Info,
              heading: (_props$immediateNeed = __props.immediateNeedsTitle) !== null && _props$immediateNeed !== void 0 ? _props$immediateNeed : ''
            }, {
              default: withCtx(() => [__props.immediateNeedsIntroduction ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString(__props.immediateNeedsIntroduction), 1)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(immediateOccurrencesByDate), _ref2 => {
                var _ref3 = _slicedToArray(_ref2, 2),
                  date = _ref3[0],
                  occurrences = _ref3[1];
                return openBlock(), createBlock(unref(script$4), {
                  key: "".concat(unref(selectedGroupGuidOrEmptyString), "-").concat(date),
                  title: unref(formatToolboxDate)(date),
                  occurrences: occurrences,
                  disabled: __props.disabled || unref(isLoadingSignUps),
                  onUpdatedSignUps: _cache[1] || (_cache[1] = $event => setSignUps($event))
                }, null, 8, ["title", "occurrences", "disabled"]);
              }), 128))]),
              _: 1
            }, 8, ["alertType", "heading"])) : createCommentVNode("v-if", true), unref(anyNonImmediateSignups) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(nonImmediateOccurrencesByDate), _ref4 => {
              var _ref5 = _slicedToArray(_ref4, 2),
                date = _ref5[0],
                occurrences = _ref5[1];
              return openBlock(), createBlock(unref(script$4), {
                key: "".concat(unref(selectedGroupGuidOrEmptyString), "-").concat(date),
                title: unref(formatToolboxDate)(date),
                occurrences: occurrences,
                disabled: __props.disabled || unref(isLoadingSignUps),
                onUpdatedSignUps: _cache[2] || (_cache[2] = $event => setSignUps($event))
              }, null, 8, ["title", "occurrences", "disabled"]);
            }), 128))])) : createCommentVNode("v-if", true)], 64))], 64)) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      var css_248z$1 = ".schedule-toolbox-no-sign-ups-available[data-v-aa8ed4f6],.schedule-toolbox-signup-immediate-needs[data-v-aa8ed4f6],.schedule-toolbox-signup-save-error-message[data-v-aa8ed4f6]{margin-top:20px}";
      styleInject(css_248z$1);

      script$3.__scopeId = "data-v-aa8ed4f6";
      script$3.__file = "src/Group/Scheduling/GroupScheduleToolbox/signUp.partial.obs";

      var script$2 = defineComponent({
        name: 'editAssignment.partial',
        props: {
          isVisible: {
            type: Boolean,
            required: true
          },
          optionsRequest: {
            type: Object,
            required: true
          }
        },
        emits: ["update:isVisible", "updatedAssignments"],
        setup(__props, _ref) {
          var _props$optionsRequest;
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var blockActionErrorMessage = ref("");
          var isLoadingAssignmentOptions = ref(false);
          var isSavingAssignment = ref(false);
          var schedules = ref([]);
          var locationsBySchedule = ref({});
          var editAssignmentGuid = ref(toGuidOrNull((_props$optionsRequest = props.optionsRequest) === null || _props$optionsRequest === void 0 ? void 0 : _props$optionsRequest.editAssignmentGuid));
          var selectedScheduleGuidOrEmptyString = ref("");
          var selectedLocationGuidOrEmptyString = ref("");
          var title = computed(() => {
            return "".concat(editAssignmentGuid.value ? "Edit" : "Add", " Assignment");
          });
          var locations = computed(() => {
            var _locationsBySchedule$, _locationsBySchedule$2;
            return (_locationsBySchedule$ = (_locationsBySchedule$2 = locationsBySchedule.value) === null || _locationsBySchedule$2 === void 0 ? void 0 : _locationsBySchedule$2[selectedScheduleGuidOrEmptyString.value]) !== null && _locationsBySchedule$ !== void 0 ? _locationsBySchedule$ : [];
          });
          var isBusy = computed(() => {
            return isLoadingAssignmentOptions.value || isSavingAssignment.value;
          });
          var isSaveButtonDisabled = computed(() => {
            return isBusy.value || !selectedScheduleGuidOrEmptyString.value;
          });
          function getAssignmentOptions() {
            return _getAssignmentOptions.apply(this, arguments);
          }
          function _getAssignmentOptions() {
            _getAssignmentOptions = _asyncToGenerator(function* () {
              var _result$data$assignme, _result$data;
              if (isBusy.value || !props.optionsRequest) {
                return;
              }
              isLoadingAssignmentOptions.value = true;
              blockActionErrorMessage.value = "";
              var result = yield invokeBlockAction("GetAssignmentOptions", {
                bag: props.optionsRequest
              });
              isLoadingAssignmentOptions.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to load assignment options.";
                return;
              }
              setInternalValues(result.data);
              emit("updatedAssignments", (_result$data$assignme = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.assignments) !== null && _result$data$assignme !== void 0 ? _result$data$assignme : []);
            });
            return _getAssignmentOptions.apply(this, arguments);
          }
          function setInternalValues(options) {
            var _options$schedules, _options$locationsByS, _options$selectedSche, _options$selectedLoca;
            schedules.value = (_options$schedules = options === null || options === void 0 ? void 0 : options.schedules) !== null && _options$schedules !== void 0 ? _options$schedules : [];
            locationsBySchedule.value = (_options$locationsByS = options === null || options === void 0 ? void 0 : options.locationsBySchedule) !== null && _options$locationsByS !== void 0 ? _options$locationsByS : {};
            editAssignmentGuid.value = options === null || options === void 0 ? void 0 : options.editAssignmentGuid;
            selectedScheduleGuidOrEmptyString.value = (_options$selectedSche = options === null || options === void 0 ? void 0 : options.selectedScheduleGuid) !== null && _options$selectedSche !== void 0 ? _options$selectedSche : "";
            selectedLocationGuidOrEmptyString.value = (_options$selectedLoca = options === null || options === void 0 ? void 0 : options.selectedLocationGuid) !== null && _options$selectedLoca !== void 0 ? _options$selectedLoca : "";
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _toGuidOrNull, _props$optionsRequest2, _toGuidOrNull2, _props$optionsRequest3, _toGuidOrNull3, _result$data$assignme2, _result$data2, _result$data2$assignm, _result$data3;
              if (isBusy.value) {
                return;
              }
              isSavingAssignment.value = true;
              blockActionErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull = toGuidOrNull((_props$optionsRequest2 = props.optionsRequest) === null || _props$optionsRequest2 === void 0 ? void 0 : _props$optionsRequest2.selectedPersonGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                selectedGroupGuid: (_toGuidOrNull2 = toGuidOrNull((_props$optionsRequest3 = props.optionsRequest) === null || _props$optionsRequest3 === void 0 ? void 0 : _props$optionsRequest3.selectedGroupGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                editAssignmentGuid: toGuidOrNull(editAssignmentGuid.value),
                selectedScheduleGuid: (_toGuidOrNull3 = toGuidOrNull(selectedScheduleGuidOrEmptyString.value)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid,
                selectedLocationGuid: toGuidOrNull(selectedLocationGuidOrEmptyString.value)
              };
              var result = yield invokeBlockAction("SaveAssignment", {
                bag
              });
              isSavingAssignment.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to save assignment.";
                return;
              }
              emit("updatedAssignments", (_result$data$assignme2 = (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : (_result$data2$assignm = _result$data2.assignmentOptions) === null || _result$data2$assignm === void 0 ? void 0 : _result$data2$assignm.assignments) !== null && _result$data$assignme2 !== void 0 ? _result$data$assignme2 : []);
              if ((_result$data3 = result.data) !== null && _result$data3 !== void 0 && _result$data3.saveError) {
                blockActionErrorMessage.value = result.data.saveError;
                setInternalValues(result.data.assignmentOptions);
                return;
              }
              isVisible.value = false;
            });
            return _onSave.apply(this, arguments);
          }
          getAssignmentOptions();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              modalWrapperClasses: "schedule-toolbox-add-edit-assignment",
              saveText: "Save",
              title: unref(title),
              isSaveButtonDisabled: unref(isSaveButtonDisabled),
              onSave: onSave
            }, {
              default: withCtx(() => [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), createVNode(unref(DropDownList), {
                modelValue: selectedScheduleGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedScheduleGuidOrEmptyString.value = $event),
                label: "Schedule",
                formGroupClasses: "assignment-schedules",
                rules: "required",
                items: schedules.value,
                disabled: unref(isBusy) || !schedules.value.length
              }, null, 8, ["modelValue", "items", "disabled"]), createVNode(unref(DropDownList), {
                modelValue: selectedLocationGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedLocationGuidOrEmptyString.value = $event),
                label: "Location",
                formGroupClasses: "assignment-location",
                items: unref(locations),
                disabled: unref(isBusy) || !unref(locations).length
              }, null, 8, ["modelValue", "items", "disabled"])]),
              _: 1
            }, 8, ["modelValue", "title", "isSaveButtonDisabled"]);
          };
        }
      });

      script$2.__file = "src/Group/Scheduling/GroupScheduleToolbox/editAssignment.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-7f4baeec"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = createTextVNode(" You are currently not in any scheduled groups. ");
      var _hoisted_2$1 = {
        class: "row schedule-toolbox-preference-offset-days"
      };
      var _hoisted_3$1 = {
        class: "col-md-8"
      };
      var _hoisted_4$1 = {
        class: "row schedule-toolbox-preference-current-schedule"
      };
      var _hoisted_5$1 = {
        class: "col-md-8"
      };
      var _hoisted_6$1 = {
        key: 0,
        class: "col-md-4"
      };
      var _hoisted_7 = createTextVNode("Assignment");
      var _hoisted_8 = _withScopeId(() => createElementVNode("p", {
        class: "schedule-toolbox-preference-assignment-instructions"
      }, " Please select a time and optional location that you would like to be scheduled for. ", -1));
      var script$1 = defineComponent({
        name: 'updatePreferences.partial',
        props: {
          isLoadingSchedulePreferences: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:isLoadingSchedulePreferences"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var selectedPersonGuidOrEmptyString = inject(SelectedPersonGuid, ref(""));
          var selectedGroup = inject(SelectedGroup);
          var blockActionErrorMessage = ref("");
          var isLoadingSchedulePreferences = useVModelPassthrough(props, "isLoadingSchedulePreferences", emit);
          var hasCompletedInitialLoad = ref(false);
          var isSavingSchedulePreference = ref(false);
          var schedulableGroups = ref([]);
          var schedulePreference = ref(null);
          var scheduleReminderEmailOffsetDays = ref("");
          var selectedScheduleTemplateGuidOrEmptyString = ref("");
          var scheduleStartDate = ref("");
          var assignments = ref([]);
          var isEditAssignmentModalVisible = ref(false);
          var getAssignmentOptionsRequest = ref(null);
          var deletingAssignmentGuids = [];
          var isNoGroupsNotificationVisible = computed(() => {
            var _schedulableGroups$va;
            return !!(!isLoadingSchedulePreferences.value && (!((_schedulableGroups$va = schedulableGroups.value) !== null && _schedulableGroups$va !== void 0 && _schedulableGroups$va.length) || !(selectedGroup !== null && selectedGroup !== void 0 && selectedGroup.value)));
          });
          var groupList = computed(() => {
            return schedulableGroups.value.filter(group => (group === null || group === void 0 ? void 0 : group.guid) && (group === null || group === void 0 ? void 0 : group.name)).map(group => ({
              text: "".concat(group.name).concat(group.campusName ? " (".concat(group.campusName, ")") : ""),
              value: group.guid
            }));
          });
          var selectedGroupGuidOrEmptyString = computed({
            get() {
              var _toGuidOrNull, _selectedGroup$value;
              return (_toGuidOrNull = toGuidOrNull(selectedGroup === null || selectedGroup === void 0 ? void 0 : (_selectedGroup$value = selectedGroup.value) === null || _selectedGroup$value === void 0 ? void 0 : _selectedGroup$value.guid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "";
            },
            set(newValue) {
              var _toGuidOrNull2;
              getSchedulePreferences((_toGuidOrNull2 = toGuidOrNull(newValue)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid);
            }
          });
          var isContentVisible = computed(() => {
            return !isNoGroupsNotificationVisible.value && hasCompletedInitialLoad.value;
          });
          var offsetDaysItems = computed(() => {
            var items = [{
              text: "Do not send a reminder",
              value: ""
            }];
            for (var i = 1; i < 15; i++) {
              var text = "".concat(i, " day").concat(i > 1 ? "s" : "", " before");
              items.push({
                text,
                value: i.toString()
              });
            }
            return items;
          });
          var scheduleTemplateItems = computed(() => {
            var _schedulePreference$v, _schedulePreference$v2;
            return (_schedulePreference$v = (_schedulePreference$v2 = schedulePreference.value) === null || _schedulePreference$v2 === void 0 ? void 0 : _schedulePreference$v2.scheduleTemplates) !== null && _schedulePreference$v !== void 0 ? _schedulePreference$v : [];
          });
          var assignmentGridData = computed(() => ({
            rows: assignments.value.map(assignment => ({
              key: assignment.groupMemberAssignmentGuid,
              schedule: assignment.scheduleName,
              location: assignment.locationName
            }))
          }));
          var isBusy = computed(() => {
            return isLoadingSchedulePreferences.value || isSavingSchedulePreference.value || isEditAssignmentModalVisible.value;
          });
          function getSchedulePreferences(_x) {
            return _getSchedulePreferences.apply(this, arguments);
          }
          function _getSchedulePreferences() {
            _getSchedulePreferences = _asyncToGenerator(function* (groupGuidOrEmptyString) {
              var _toGuidOrNull6, _toGuidOrNull7;
              if (isBusy.value) {
                return;
              }
              isLoadingSchedulePreferences.value = true;
              blockActionErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull6 = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull6 !== void 0 ? _toGuidOrNull6 : emptyGuid,
                selectedGroupGuid: (_toGuidOrNull7 = toGuidOrNull(groupGuidOrEmptyString)) !== null && _toGuidOrNull7 !== void 0 ? _toGuidOrNull7 : emptyGuid
              };
              var result = yield invokeBlockAction("GetSchedulePreferences", {
                bag
              });
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to get schedule preferences.";
                setSchedulePreferences(null);
                setIsLoadingSchedulePreferencesFalse();
                return;
              }
              setSchedulePreferences(result.data);
              hasCompletedInitialLoad.value = true;
              setIsLoadingSchedulePreferencesFalse();
            });
            return _getSchedulePreferences.apply(this, arguments);
          }
          function setSchedulePreferences(schedulePreferences) {
            var _schedulePreferences$, _schedulePreference$v3, _schedulePreference$v4, _toGuidOrNull3, _schedulePreference$v5, _schedulePreference$v6, _schedulePreference$v7, _schedulePreference$v8, _schedulePreference$v9;
            if (selectedGroup) {
              selectedGroup.value = schedulePreferences === null || schedulePreferences === void 0 ? void 0 : schedulePreferences.selectedGroup;
            }
            schedulableGroups.value = (_schedulePreferences$ = schedulePreferences === null || schedulePreferences === void 0 ? void 0 : schedulePreferences.schedulableGroups) !== null && _schedulePreferences$ !== void 0 ? _schedulePreferences$ : [];
            schedulePreference.value = schedulePreferences === null || schedulePreferences === void 0 ? void 0 : schedulePreferences.schedulePreference;
            scheduleReminderEmailOffsetDays.value = (_schedulePreference$v3 = (_schedulePreference$v4 = schedulePreference.value) === null || _schedulePreference$v4 === void 0 ? void 0 : _schedulePreference$v4.scheduleReminderEmailOffsetDays) !== null && _schedulePreference$v3 !== void 0 ? _schedulePreference$v3 : "";
            selectedScheduleTemplateGuidOrEmptyString.value = (_toGuidOrNull3 = toGuidOrNull((_schedulePreference$v5 = schedulePreference.value) === null || _schedulePreference$v5 === void 0 ? void 0 : _schedulePreference$v5.selectedScheduleTemplateGuid)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : "";
            scheduleStartDate.value = (_schedulePreference$v6 = (_schedulePreference$v7 = schedulePreference.value) === null || _schedulePreference$v7 === void 0 ? void 0 : _schedulePreference$v7.scheduleStartDate) !== null && _schedulePreference$v6 !== void 0 ? _schedulePreference$v6 : "";
            assignments.value = (_schedulePreference$v8 = (_schedulePreference$v9 = schedulePreference.value) === null || _schedulePreference$v9 === void 0 ? void 0 : _schedulePreference$v9.assignments) !== null && _schedulePreference$v8 !== void 0 ? _schedulePreference$v8 : [];
            deletingAssignmentGuids = [];
          }
          function setIsLoadingSchedulePreferencesFalse() {
            nextTick(() => {
              isLoadingSchedulePreferences.value = false;
            });
          }
          function onPreferencesChanged() {
            return _onPreferencesChanged.apply(this, arguments);
          }
          function _onPreferencesChanged() {
            _onPreferencesChanged = _asyncToGenerator(function* () {
              var _toGuidOrNull8, _toGuidOrNull9;
              if (isBusy.value) {
                return;
              }
              isSavingSchedulePreference.value = true;
              blockActionErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull8 = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull8 !== void 0 ? _toGuidOrNull8 : emptyGuid,
                selectedGroupGuid: (_toGuidOrNull9 = toGuidOrNull(selectedGroupGuidOrEmptyString.value)) !== null && _toGuidOrNull9 !== void 0 ? _toGuidOrNull9 : emptyGuid,
                scheduleReminderEmailOffsetDays: scheduleReminderEmailOffsetDays.value,
                selectedScheduleTemplateGuid: toGuidOrNull(selectedScheduleTemplateGuidOrEmptyString.value),
                scheduleStartDate: scheduleStartDate.value
              };
              var result = yield invokeBlockAction("SaveSchedulePreference", {
                bag
              });
              isSavingSchedulePreference.value = false;
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown error while trying to save schedule preferences.";
              }
            });
            return _onPreferencesChanged.apply(this, arguments);
          }
          function onAddEditAssignment(editAssignmentGuid) {
            var _toGuidOrNull4, _toGuidOrNull5;
            if (isBusy.value) {
              return;
            }
            getAssignmentOptionsRequest.value = {
              selectedPersonGuid: (_toGuidOrNull4 = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull4 !== void 0 ? _toGuidOrNull4 : emptyGuid,
              selectedGroupGuid: (_toGuidOrNull5 = toGuidOrNull(selectedGroupGuidOrEmptyString.value)) !== null && _toGuidOrNull5 !== void 0 ? _toGuidOrNull5 : emptyGuid
            };
            if (typeof editAssignmentGuid === "string") {
              getAssignmentOptionsRequest.value.editAssignmentGuid = toGuidOrNull(editAssignmentGuid);
            }
            isEditAssignmentModalVisible.value = true;
          }
          function onUpdatedAssignments(updatedAssignments) {
            assignments.value = updatedAssignments;
          }
          function onDeleteAssignment(_x2) {
            return _onDeleteAssignment.apply(this, arguments);
          }
          function _onDeleteAssignment() {
            _onDeleteAssignment = _asyncToGenerator(function* (deleteAssignmentGuid) {
              var _toGuidOrNull10, _toGuidOrNull11;
              if (deletingAssignmentGuids.indexOf(deleteAssignmentGuid) > -1) {
                return;
              }
              deletingAssignmentGuids.push(deleteAssignmentGuid);
              blockActionErrorMessage.value = "";
              var bag = {
                selectedPersonGuid: (_toGuidOrNull10 = toGuidOrNull(selectedPersonGuidOrEmptyString.value)) !== null && _toGuidOrNull10 !== void 0 ? _toGuidOrNull10 : emptyGuid,
                deleteAssignmentGuid: (_toGuidOrNull11 = toGuidOrNull(deleteAssignmentGuid)) !== null && _toGuidOrNull11 !== void 0 ? _toGuidOrNull11 : emptyGuid
              };
              var result = yield invokeBlockAction("DeleteAssignment", {
                bag
              });
              deletingAssignmentGuids = deletingAssignmentGuids.filter(guid => guid !== deleteAssignmentGuid);
              if (!result.isSuccess) {
                blockActionErrorMessage.value = result.errorMessage || "Unknown errow while trying to delete assignment";
              }
              assignments.value = assignments.value.filter(assignment => assignment.groupMemberAssignmentGuid !== deleteAssignmentGuid);
            });
            return _onDeleteAssignment.apply(this, arguments);
          }
          watch(selectedPersonGuidOrEmptyString, () => {
            if (selectedPersonGuidOrEmptyString.value) {
              hasCompletedInitialLoad.value = false;
              getSchedulePreferences(selectedGroupGuidOrEmptyString.value);
            }
          });
          getSchedulePreferences(selectedGroupGuidOrEmptyString.value);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : unref(isNoGroupsNotificationVisible) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Info
            }, {
              default: withCtx(() => [_hoisted_1$1]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(isContentVisible) ? (openBlock(), createElementBlock(Fragment, {
              key: 2
            }, [createVNode(unref(TabbedBar), {
              modelValue: unref(selectedGroupGuidOrEmptyString),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(selectedGroupGuidOrEmptyString) ? selectedGroupGuidOrEmptyString.value = $event : null),
              class: "schedule-toolbox-group-tabs",
              tabs: unref(groupList),
              disabled: __props.disabled || unref(isBusy)
            }, null, 8, ["modelValue", "tabs", "disabled"]), createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, [createVNode(unref(DropDownList), {
              modelValue: scheduleReminderEmailOffsetDays.value,
              "onUpdate:modelValue": [_cache[1] || (_cache[1] = $event => scheduleReminderEmailOffsetDays.value = $event), onPreferencesChanged],
              label: "Send Reminders",
              items: unref(offsetDaysItems),
              disabled: __props.disabled || unref(isBusy)
            }, null, 8, ["modelValue", "items", "disabled"])])]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(DropDownList), {
              modelValue: selectedScheduleTemplateGuidOrEmptyString.value,
              "onUpdate:modelValue": [_cache[2] || (_cache[2] = $event => selectedScheduleTemplateGuidOrEmptyString.value = $event), onPreferencesChanged],
              label: "Current Schedule",
              items: unref(scheduleTemplateItems),
              disabled: __props.disabled || unref(isBusy)
            }, null, 8, ["modelValue", "items", "disabled"])]), selectedScheduleTemplateGuidOrEmptyString.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createVNode(unref(DatePicker), {
              modelValue: scheduleStartDate.value,
              "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => scheduleStartDate.value = $event), onPreferencesChanged],
              label: "Starting On",
              disabled: __props.disabled || unref(isBusy)
            }, null, 8, ["modelValue", "disabled"])])) : createCommentVNode("v-if", true)]), selectedScheduleTemplateGuidOrEmptyString.value ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [createVNode(unref(RockLabel), {
              class: "schedule-toolbox-preference-assignment-label"
            }, {
              default: withCtx(() => [_hoisted_7]),
              _: 1
            }), _hoisted_8, createVNode(unref(Grid), {
              light: "",
              keyField: "key",
              itemTerm: "Group Preference Assignment",
              data: unref(assignmentGridData),
              disabled: __props.disabled || unref(isBusy),
              onAddItem: onAddEditAssignment
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "schedule",
                field: "schedule",
                title: "Schedule",
                visiblePriority: "xs"
              }), createVNode(unref(TextColumn), {
                name: "location",
                field: "location",
                title: "Location",
                visiblePriority: "xs"
              }), createVNode(unref(EditColumn), {
                onClick: onAddEditAssignment
              }), createVNode(unref(DeleteColumn), {
                onClick: onDeleteAssignment
              })]),
              _: 1
            }, 8, ["data", "disabled"])], 64)) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), createCommentVNode(" See note on `isEditAssignmentModalVisible` usage below. "), isEditAssignmentModalVisible.value ? (openBlock(), createBlock(unref(script$2), {
              key: 3,
              isVisible: isEditAssignmentModalVisible.value,
              "onUpdate:isVisible": _cache[4] || (_cache[4] = $event => isEditAssignmentModalVisible.value = $event),
              optionsRequest: getAssignmentOptionsRequest.value,
              onUpdatedAssignments: onUpdatedAssignments
            }, null, 8, ["isVisible", "optionsRequest"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      var css_248z = ".schedule-toolbox-group-tabs[data-v-7f4baeec]{margin-bottom:24px}";
      styleInject(css_248z);

      script$1.__scopeId = "data-v-7f4baeec";
      script$1.__file = "src/Group/Scheduling/GroupScheduleToolbox/updatePreferences.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = {
        key: 0,
        class: "col-md-4 mt-3 mt-sm-0 schedule-toolbox-actions-column"
      };
      var _hoisted_4 = {
        key: 1,
        class: "schedule-actions schedule-toolbox-actions"
      };
      var _hoisted_5 = ["innerHTML"];
      var _hoisted_6 = {
        class: "schedule-toolbox-action-buttons"
      };
      var script = exports('default', defineComponent({
        name: 'groupScheduleToolbox',
        setup(__props) {
          var _config$schedulableFa, _toGuidOrNull;
          var config = useConfigurationValues();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var reloadBlock = useReloadBlock();
          var blockErrorMessage = ref(config.errorMessage);
          var blockActionErrorMessage = ref("");
          var scrollContainer = ref(null);
          var schedulableFamilyMembers = ref((_config$schedulableFa = config.schedulableFamilyMembers) !== null && _config$schedulableFa !== void 0 ? _config$schedulableFa : []);
          var selectedPersonGuidOrEmptyString = ref(schedulableFamilyMembers.value.length ? (_toGuidOrNull = toGuidOrNull(schedulableFamilyMembers.value[0].value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "" : "");
          var selectedGroup = ref();
          var toolboxActionType = ref(config.toolboxActionType);
          var actionHeaderHtml = ref(config.actionHeaderHtml);
          var currentScheduleButtonText = ref(config.currentScheduleButtonText);
          var currentScheduleHeaderHtml = ref(config.currentScheduleHeaderHtml);
          var isScheduleUnavailabilityEnabled = ref(config.isScheduleUnavailabilityEnabled);
          var scheduleUnavailabilityButtonText = ref(config.scheduleUnavailabilityButtonText);
          var scheduleUnavailabilityHeaderHtml = ref(config.scheduleUnavailabilityHeaderHtml);
          var isLoadingCurrentSchedule = ref(false);
          var isSchedulePreferencesEnabled = ref(config.isSchedulePreferencesEnabled);
          var schedulePreferencesButtonText = ref(config.schedulePreferencesButtonText);
          var schedulePreferencesHeaderHtml = ref(config.schedulePreferencesHeaderHtml);
          var isLoadingSchedulePreferences = ref(false);
          var isAdditionalTimeSignUpsEnabled = ref(config.isAdditionalTimeSignUpsEnabled);
          var additionalTimeSignUpsButtonText = ref(config.additionalTimeSignUpsButtonText);
          var additionalTimeSignUpsHeaderHtml = ref(config.additionalTimeSignUpsHeaderHtml);
          var immediateNeedsTitle = ref(config.immediateNeedsTitle);
          var immediateNeedsIntroduction = ref(config.immediateNeedsIntroduction);
          var isLoadingSignUps = ref(false);
          var contentColumnCssClass = computed(() => {
            return "col-md-".concat(isActionsColumnVisible.value ? "8" : "12", " schedule-toolbox-content-column");
          });
          var actionCssClass = computed(() => {
            var action = "";
            switch (toolboxActionType.value) {
              case ToolboxActionType.ViewCurrent:
                action = "current";
                break;
              case ToolboxActionType.UpdatePreferences:
                action = "preferences";
                break;
              case ToolboxActionType.SignUp:
                action = "signup";
                break;
            }
            return "schedule-toolbox-".concat(action);
          });
          var contentHeaderHtml = computed(() => {
            switch (toolboxActionType.value) {
              case ToolboxActionType.ViewCurrent:
                return currentScheduleHeaderHtml.value;
              case ToolboxActionType.UpdatePreferences:
                return schedulePreferencesHeaderHtml.value;
              case ToolboxActionType.SignUp:
                return additionalTimeSignUpsHeaderHtml.value;
            }
          });
          var isFamilyMemberSelectorVisible = computed(() => {
            return schedulableFamilyMembers.value.length > 1;
          });
          var areActionButtonsVisible = computed(() => {
            return isSchedulePreferencesEnabled.value || isAdditionalTimeSignUpsEnabled.value;
          });
          var isActionsColumnVisible = computed(() => {
            return isFamilyMemberSelectorVisible.value || areActionButtonsVisible.value;
          });
          var isActionTypeViewCurrent = computed(() => {
            return toolboxActionType.value === ToolboxActionType.ViewCurrent;
          });
          var isActionTypeUpdatePreferences = computed(() => {
            return toolboxActionType.value === ToolboxActionType.UpdatePreferences;
          });
          var isActionTypeSignUp = computed(() => {
            return toolboxActionType.value === ToolboxActionType.SignUp;
          });
          var isBusy = computed(() => {
            return isLoadingCurrentSchedule.value || isLoadingSchedulePreferences.value || isLoadingSignUps.value;
          });
          function updateUrl() {
            var _selectedGroup$value;
            var qs = [[PageParameterKey.ToolboxActionType, toolboxActionType.value.toString()]];
            if (toolboxActionType.value !== ToolboxActionType.ViewCurrent && (_selectedGroup$value = selectedGroup.value) !== null && _selectedGroup$value !== void 0 && _selectedGroup$value.idKey) {
              qs.push([PageParameterKey.ToolboxGroupId, selectedGroup.value.idKey.toString()]);
            }
            var _iterator = _createForOfIteratorHelper(new URLSearchParams(window.location.search).entries()),
              _step;
            try {
              var _loop = function _loop() {
                var entry = _step.value;
                if (![PageParameterKey.ToolboxActionType, PageParameterKey.ToolboxGroupId].some(key => key.toLowerCase() === entry[0].toLowerCase())) {
                  qs.push([entry[0], entry[1]]);
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (qs.length) {
              var queryString = qs.map(q => "".concat(q[0], "=").concat(q[1])).join("&");
              window.history.replaceState(null, "", "".concat(window.location.pathname, "?").concat(queryString));
            } else {
              window.history.replaceState(null, "", window.location.pathname);
            }
          }
          function scrollToContentTopLeft() {
            if (!scrollContainer.value) {
              return;
            }
            var rect = scrollContainer.value.getBoundingClientRect();
            if (rect.top < 0 || rect.left < 0 || rect.top >= window.innerHeight || rect.left >= window.innerWidth) {
              scrollContainer.value.scrollIntoView({
                behavior: "smooth"
              });
            }
          }
          function onActionClick(_x, _x2) {
            return _onActionClick.apply(this, arguments);
          }
          function _onActionClick() {
            _onActionClick = _asyncToGenerator(function* (actionType, event) {
              var _event$target;
              (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.blur();
              toolboxActionType.value = actionType;
              scrollToContentTopLeft();
            });
            return _onActionClick.apply(this, arguments);
          }
          watch([toolboxActionType, selectedGroup], () => {
            updateUrl();
          });
          provide(SelectedPersonGuid, selectedPersonGuidOrEmptyString);
          provide(SelectedGroup, selectedGroup);
          provideSecurityGrant(securityGrant);
          onConfigurationValuesChanged(reloadBlock);
          updateUrl();
          return (_ctx, _cache) => {
            return blockErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockErrorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createBlock(unref(Panel), {
              key: 1,
              type: "block",
              title: "Schedule Toolbox",
              class: "schedule-toolbox"
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
                class: normalizeClass(unref(contentColumnCssClass))
              }, [createElementVNode("div", {
                ref_key: "scrollContainer",
                ref: scrollContainer,
                class: normalizeClass(unref(actionCssClass))
              }, [blockActionErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(blockActionErrorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(contentHeaderHtml) ? (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: unref(contentHeaderHtml),
                class: "schedule-toolbox-content-header"
              }, null, 8, _hoisted_2)) : createCommentVNode("v-if", true), unref(isActionTypeViewCurrent) ? (openBlock(), createBlock(unref(script$6), {
                key: 2,
                isLoadingCurrentSchedule: isLoadingCurrentSchedule.value,
                "onUpdate:isLoadingCurrentSchedule": _cache[0] || (_cache[0] = $event => isLoadingCurrentSchedule.value = $event),
                isScheduleUnavailabilityEnabled: isScheduleUnavailabilityEnabled.value,
                scheduleUnavailabilitybuttonText: scheduleUnavailabilityButtonText.value,
                scheduleUnavailabilityHeaderHtml: scheduleUnavailabilityHeaderHtml.value,
                disabled: unref(isBusy)
              }, null, 8, ["isLoadingCurrentSchedule", "isScheduleUnavailabilityEnabled", "scheduleUnavailabilitybuttonText", "scheduleUnavailabilityHeaderHtml", "disabled"])) : createCommentVNode("v-if", true), unref(isActionTypeUpdatePreferences) ? (openBlock(), createBlock(unref(script$1), {
                key: 3,
                isLoadingSchedulePreferences: isLoadingSchedulePreferences.value,
                "onUpdate:isLoadingSchedulePreferences": _cache[1] || (_cache[1] = $event => isLoadingSchedulePreferences.value = $event),
                disabled: unref(isBusy)
              }, null, 8, ["isLoadingSchedulePreferences", "disabled"])) : createCommentVNode("v-if", true), unref(isActionTypeSignUp) ? (openBlock(), createBlock(unref(script$3), {
                key: 4,
                isLoadingSignUps: isLoadingSignUps.value,
                "onUpdate:isLoadingSignUps": _cache[2] || (_cache[2] = $event => isLoadingSignUps.value = $event),
                immediateNeedsTitle: immediateNeedsTitle.value,
                immediateNeedsIntroduction: immediateNeedsIntroduction.value,
                disabled: unref(isBusy)
              }, null, 8, ["isLoadingSignUps", "immediateNeedsTitle", "immediateNeedsIntroduction", "disabled"])) : createCommentVNode("v-if", true)], 2)], 2), unref(isActionsColumnVisible) ? (openBlock(), createElementBlock("div", _hoisted_3, [unref(isFamilyMemberSelectorVisible) ? (openBlock(), createBlock(unref(DropDownList), {
                key: 0,
                modelValue: selectedPersonGuidOrEmptyString.value,
                "onUpdate:modelValue": [_cache[3] || (_cache[3] = $event => selectedPersonGuidOrEmptyString.value = $event), scrollToContentTopLeft],
                label: "Family Members",
                formGroupClasses: "schedule-toolbox-select-family-member",
                items: schedulableFamilyMembers.value,
                showBlankItem: false,
                disabled: unref(isBusy)
              }, null, 8, ["modelValue", "items", "disabled"])) : createCommentVNode("v-if", true), unref(areActionButtonsVisible) ? (openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", {
                innerHTML: actionHeaderHtml.value,
                class: "schedule-toolbox-action-header"
              }, null, 8, _hoisted_5), createElementVNode("div", _hoisted_6, [createVNode(unref(RockButton), {
                type: "button",
                class: "btn-block",
                btnType: unref(isActionTypeViewCurrent) ? unref(BtnType).Primary : unref(BtnType).Default,
                disabled: unref(isBusy),
                onClick: _cache[4] || (_cache[4] = $event => onActionClick(unref(ToolboxActionType).ViewCurrent, $event))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(currentScheduleButtonText.value), 1)]),
                _: 1
              }, 8, ["btnType", "disabled"]), isSchedulePreferencesEnabled.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                type: "button",
                class: "btn-block",
                btnType: unref(isActionTypeUpdatePreferences) ? unref(BtnType).Primary : unref(BtnType).Default,
                disabled: unref(isBusy),
                onClick: _cache[5] || (_cache[5] = $event => onActionClick(unref(ToolboxActionType).UpdatePreferences, $event))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(schedulePreferencesButtonText.value), 1)]),
                _: 1
              }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true), isAdditionalTimeSignUpsEnabled.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 1,
                type: "button",
                class: "btn-block",
                btnType: unref(isActionTypeSignUp) ? unref(BtnType).Primary : unref(BtnType).Default,
                disabled: unref(isBusy),
                onClick: _cache[6] || (_cache[6] = $event => onActionClick(unref(ToolboxActionType).SignUp, $event))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(additionalTimeSignUpsButtonText.value), 1)]),
                _: 1
              }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)])]),
              _: 1
            }));
          };
        }
      }));

      script.__file = "src/Group/Scheduling/groupScheduleToolbox.obs";

    })
  };
}));
//# sourceMappingURL=groupScheduleToolbox.obs.js.map
