System.register(['vue', '@Obsidian/Controls/panel', '@Obsidian/Controls/modal', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Utility/promiseUtils', '@Obsidian/Controls/auditDetail', '@Obsidian/Controls/badgeList', '@Obsidian/Controls/entityTagList', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/rockSuspense', '@Obsidian/Utility/component', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/http', '@Obsidian/Utility/url', '@Obsidian/Utility/booleanUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, Panel, Modal, DetailPanelMode, isPromise, PromiseCompletionSource, AuditDetail, BadgeList, EntityTagList, RockButton, RockForm, RockSuspense, useVModelPassthrough, alert, confirmDelete, useHttp, makeUrlRedirectSafe, asBooleanOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      isPromise = module.isPromise;
      PromiseCompletionSource = module.PromiseCompletionSource;
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      BadgeList = module["default"];
    }, function (module) {
      EntityTagList = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      RockSuspense = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      alert = module.alert;
      confirmDelete = module.confirmDelete;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
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

      var detailBlock = exports('default', defineComponent({
        name: "DetailBlock",
        components: {
          AuditDetail,
          EntityTagList,
          Modal,
          Panel,
          RockButton,
          RockForm,
          RockSuspense,
          BadgeList
        },
        props: {
          name: {
            type: String,
            required: false
          },
          title: {
            type: String,
            required: false
          },
          entityTypeGuid: {
            type: String,
            required: true
          },
          entityTypeName: {
            type: String,
            required: true
          },
          entityKey: {
            type: String,
            required: false
          },
          isTagsVisible: {
            type: Boolean,
            default: false
          },
          isFollowVisible: {
            type: Boolean,
            default: false
          },
          isBadgesVisible: {
            type: Boolean,
            default: false
          },
          isAuditHidden: {
            type: Boolean,
            default: false
          },
          isSecurityHidden: {
            type: Boolean,
            default: false
          },
          isEditVisible: {
            type: Boolean,
            default: false
          },
          isDeleteVisible: {
            type: Boolean,
            default: false
          },
          mode: {
            type: Number,
            default: DetailPanelMode.View
          },
          headerActions: {
            type: Array,
            required: false
          },
          headerSecondaryActions: {
            type: Array,
            required: false
          },
          labels: {
            type: Array,
            required: false
          },
          footerActions: {
            type: Array,
            required: false
          },
          footerSecondaryActions: {
            type: Array,
            required: false
          },
          onCancelEdit: {
            type: Function,
            required: false
          },
          onEdit: {
            type: Function,
            required: false
          },
          onSave: {
            type: Function,
            required: false
          },
          onDelete: {
            type: Function,
            required: false
          }
        },
        emits: {
          "update:mode": _value => true
        },
        setup(props, _ref) {
          var _asBooleanOrNull;
          var emit = _ref.emit;
          var http = useHttp();
          var internalMode = useVModelPassthrough(props, "mode", emit);
          var isFormSubmitting = ref(false);
          var isEditModeLoading = ref(false);
          var isEntityFollowed = ref(null);
          var showAuditDetailsModal = ref(false);
          var isPanelVisible = ref(true);
          var formSubmissionSource = null;
          var editModeReadyCompletionSource = null;
          var params = new URLSearchParams(window.location.search);
          var isAutoEditMode = ref((_asBooleanOrNull = asBooleanOrNull(params.get("autoEdit"))) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false);
          var autoEditReturnUrl = params.get("returnUrl");
          var panelTitle = computed(() => {
            var _props$name;
            if (props.title) {
              return props.title;
            }
            switch (internalMode.value) {
              case DetailPanelMode.View:
                return (_props$name = props.name) !== null && _props$name !== void 0 ? _props$name : props.entityTypeName;
              case DetailPanelMode.Edit:
              case DetailPanelMode.Add:
              default:
                return props.entityTypeName;
            }
          });
          var panelTitleIconCssClass = computed(() => {
            switch (internalMode.value) {
              case DetailPanelMode.Edit:
                return "fa fa-pencil";
              case DetailPanelMode.Add:
                return "fa fa-plus";
              case DetailPanelMode.View:
              default:
                return "";
            }
          });
          var internalHeaderSecondaryActions = computed(() => {
            var actions = [];
            if (!props.isAuditHidden) {
              actions.push({
                type: "default",
                title: "Audit Details",
                handler: onAuditClick
              });
            }
            if (props.headerSecondaryActions) {
              var _iterator = _createForOfIteratorHelper(props.headerSecondaryActions),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var action = _step.value;
                  actions.push(action);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            return actions;
          });
          var internalFooterSecondaryActions = computed(() => {
            var actions = [];
            if (!props.isSecurityHidden && isViewMode.value && props.entityKey) {
              actions.push({
                iconCssClass: "fa fa-lock",
                title: "Edit Security",
                type: "default",
                handler: onSecurityClick
              });
            }
            if (props.footerSecondaryActions) {
              var _iterator2 = _createForOfIteratorHelper(props.footerSecondaryActions),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var action = _step2.value;
                  actions.push(action);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            return actions;
          });
          var isViewMode = computed(() => {
            return internalMode.value === DetailPanelMode.View && !isAutoEditMode.value;
          });
          var isEditMode = computed(() => {
            return internalMode.value === DetailPanelMode.Edit || internalMode.value === DetailPanelMode.Add;
          });
          var isEditModeVisible = computed(() => {
            return isEditMode.value || isEditModeLoading.value;
          });
          var isPanelShown = computed(() => {
            return !isAutoEditMode.value || isEditMode.value;
          });
          var hasLabels = computed(() => {
            return !!props.labels && props.labels.length > 0;
          });
          var headerActions = computed(() => {
            var _props$headerActions;
            var actions = [...((_props$headerActions = props.headerActions) !== null && _props$headerActions !== void 0 ? _props$headerActions : [])];
            if (props.isFollowVisible && isViewMode.value) {
              actions.push({
                type: isEntityFollowed.value ? "primary" : "default",
                iconCssClass: isEntityFollowed.value ? "fa fa-star" : "fa fa-star-o",
                handler: onFollowClick,
                title: isEntityFollowed.value ? "You are currently following ".concat(props.name, ".") : "Click to follow ".concat(props.name, ".")
              });
            }
            return actions;
          });
          var getClassForIconAction = action => {
            var cssClass = action.handler ? "action clickable" : "action";
            if (action.type !== "default" && action.type !== "link") {
              cssClass += " text-".concat(action.type);
            }
            return cssClass;
          };
          var getClassForLabelAction = action => {
            var cssClass = action.handler ? "label clickable" : "label";
            if (action.type === "link") {
              cssClass += " label-default";
            } else {
              cssClass += " label-".concat(action.type);
            }
            return cssClass;
          };
          var getActionIconCssClass = action => {
            return action.iconCssClass || "fa fa-square";
          };
          var getEntityFollowedState = function () {
            var _ref2 = _asyncToGenerator(function* () {
              if (!props.entityTypeGuid || !props.entityKey) {
                isEntityFollowed.value = null;
                return;
              }
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey
              };
              var response = yield http.post("/api/v2/Controls/FollowingGetFollowing", undefined, data);
              isEntityFollowed.value = response.isSuccess && response.data && response.data.isFollowing;
            });
            return function getEntityFollowedState() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onSecurityClick = event => {
            Rock.controls.modal.show($(event.target), "/Secure/".concat(props.entityTypeGuid, "/").concat(props.entityKey, "?t=Secure ").concat(props.entityTypeName, "&pb=&sb=Done"));
          };
          var onEditCancelClick = function () {
            var _ref3 = _asyncToGenerator(function* () {
              if (props.onCancelEdit) {
                var result = props.onCancelEdit();
                if (isPromise(result)) {
                  result = yield result;
                }
                if (result === false) {
                  return;
                }
                if (isAutoEditMode.value) {
                  isAutoEditMode.value = false;
                  if (autoEditReturnUrl) {
                    window.location.href = makeUrlRedirectSafe(autoEditReturnUrl);
                    return;
                  }
                }
                if (typeof result === "string") {
                  window.location.href = makeUrlRedirectSafe(result);
                  return;
                }
              }
              internalMode.value = DetailPanelMode.View;
            });
            return function onEditCancelClick() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onEditClick = function () {
            var _ref4 = _asyncToGenerator(function* () {
              if (props.onEdit) {
                var result = props.onEdit();
                if (isPromise(result)) {
                  result = yield result;
                }
                if (result !== true) {
                  return false;
                }
              }
              if (isAutoEditMode.value) {
                isPanelVisible.value = true;
              }
              isEditModeLoading.value = true;
              editModeReadyCompletionSource = new PromiseCompletionSource();
              yield editModeReadyCompletionSource.promise;
              internalMode.value = props.entityKey ? DetailPanelMode.Edit : DetailPanelMode.Add;
              isEditModeLoading.value = false;
              editModeReadyCompletionSource = null;
              return true;
            });
            return function onEditClick() {
              return _ref4.apply(this, arguments);
            };
          }();
          var onEditSuspenseReady = () => {
            var _editModeReadyComplet;
            (_editModeReadyComplet = editModeReadyCompletionSource) === null || _editModeReadyComplet === void 0 ? void 0 : _editModeReadyComplet.resolve();
          };
          var onSaveClick = function () {
            var _ref5 = _asyncToGenerator(function* () {
              formSubmissionSource = new PromiseCompletionSource();
              isFormSubmitting.value = true;
              yield formSubmissionSource.promise;
            });
            return function onSaveClick() {
              return _ref5.apply(this, arguments);
            };
          }();
          var onSaveSubmit = function () {
            var _ref6 = _asyncToGenerator(function* () {
              try {
                if (props.onSave) {
                  var result = props.onSave();
                  if (isPromise(result)) {
                    result = yield result;
                  }
                  if (result === false) {
                    return;
                  }
                  if (isAutoEditMode.value) {
                    isAutoEditMode.value = false;
                    if (autoEditReturnUrl) {
                      window.location.href = makeUrlRedirectSafe(autoEditReturnUrl);
                      return;
                    }
                  }
                  if (typeof result === "string") {
                    window.location.href = makeUrlRedirectSafe(result);
                    return;
                  }
                }
                internalMode.value = DetailPanelMode.View;
              } finally {
                if (formSubmissionSource !== null) {
                  formSubmissionSource.resolve();
                }
              }
            });
            return function onSaveSubmit() {
              return _ref6.apply(this, arguments);
            };
          }();
          var onDeleteClick = function () {
            var _ref7 = _asyncToGenerator(function* () {
              if (props.onDelete) {
                if (!(yield confirmDelete(props.entityTypeName))) {
                  return;
                }
                var result = props.onDelete();
                if (isPromise(result)) {
                  result = yield result;
                }
                if (result === false) {
                  return;
                }
                if (typeof result === "string") {
                  window.location.href = makeUrlRedirectSafe(result);
                }
              }
            });
            return function onDeleteClick() {
              return _ref7.apply(this, arguments);
            };
          }();
          var onActionClick = (action, event) => {
            if (action.handler && !action.disabled) {
              action.handler(event);
            }
          };
          var onFollowClick = function () {
            var _ref8 = _asyncToGenerator(function* () {
              if (isEntityFollowed.value === null || !props.entityTypeGuid || !props.entityKey) {
                return;
              }
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                isFollowing: !isEntityFollowed.value
              };
              var response = yield http.post("/api/v2/Controls/FollowingSetFollowing", undefined, data);
              if (response.isSuccess) {
                isEntityFollowed.value = !isEntityFollowed.value;
              } else {
                yield alert("Unable to update followed state.");
              }
            });
            return function onFollowClick() {
              return _ref8.apply(this, arguments);
            };
          }();
          var onAuditClick = function () {
            var _ref9 = _asyncToGenerator(function* () {
              showAuditDetailsModal.value = true;
            });
            return function onAuditClick() {
              return _ref9.apply(this, arguments);
            };
          }();
          watch(isFormSubmitting, () => {
            if (isFormSubmitting.value === false && formSubmissionSource !== null) {
              formSubmissionSource.resolve();
            }
          });
          watch(() => props.isFollowVisible, () => {
            if (props.isFollowVisible && isEntityFollowed.value === null) {
              getEntityFollowedState();
            }
          });
          if (props.isFollowVisible) {
            getEntityFollowedState();
          }
          if (isAutoEditMode.value) {
            isPanelVisible.value = false;
            onEditClick();
          }
          return {
            hasLabels,
            internalFooterSecondaryActions,
            internalHeaderSecondaryActions,
            panelTitle,
            panelTitleIconCssClass,
            getActionIconCssClass,
            getClassForIconAction,
            getClassForLabelAction,
            headerActions,
            isEditMode,
            isEditModeVisible,
            isFormSubmitting,
            isPanelShown,
            isPanelVisible,
            isViewMode,
            onActionClick,
            onDeleteClick,
            onEditCancelClick,
            onEditClick,
            onEditSuspenseReady,
            onSaveClick,
            onSaveSubmit,
            showAuditDetailsModal
          };
        },
        template: "\n<Panel v-if=\"isPanelVisible\"\n    v-show=\"isPanelShown\"\n    type=\"block\"\n    :title=\"panelTitle\"\n    :titleIconCssClass=\"panelTitleIconCssClass\"\n    :hasFullscreen=\"true\"\n    :headerSecondaryActions=\"internalHeaderSecondaryActions\">\n\n    <template #headerActions>\n        <span v-for=\"action in headerActions\" :class=\"getClassForIconAction(action)\" :title=\"action.title\" @click=\"onActionClick(action, $event)\">\n            <i :class=\"getActionIconCssClass(action)\"></i>\n        </span>\n    </template>\n\n    <template v-if=\"!isEditMode && (hasLabels || isTagsVisible)\" #subheaderLeft>\n        <div class=\"d-flex\">\n            <div v-if=\"hasLabels\" class=\"label-group\">\n                <span v-for=\"action in labels\" :class=\"getClassForLabelAction(action)\" @click=\"onActionClick(action, $event)\">\n                    <template v-if=\"action.title\">{{ action.title }}</template>\n                    <i v-else :class=\"action.iconCssClass\"></i>\n                </span>\n            </div>\n\n            <div v-if=\"isTagsVisible && hasLabels\" style=\"width: 2px; background-color: #eaedf0; margin: 0px 12px;\"></div>\n\n            <div v-if=\"isTagsVisible\" class=\"flex-grow-1\">\n                <EntityTagList :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />\n            </div>\n        </div>\n    </template>\n\n    <template v-if=\"!isEditMode && isBadgesVisible\" #subheaderRight>\n        <BadgeList :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />\n    </template>\n\n    <template v-if=\"$slots.helpContent\" #helpContent>\n        <slot name=\"helpContent\" />\n    </template>\n\n    <template #footerActions>\n        <template v-if=\"isEditMode\">\n            <RockButton btnType=\"primary\" autoDisable @click=\"onSaveClick\">Save</RockButton>\n            <RockButton btnType=\"link\" @click=\"onEditCancelClick\">Cancel</RockButton>\n        </template>\n\n        <template v-else>\n            <RockButton v-if=\"isEditVisible\" btnType=\"primary\" @click=\"onEditClick\" autoDisable>Edit</RockButton>\n            <RockButton v-if=\"isDeleteVisible\" btnType=\"link\" @click=\"onDeleteClick\" autoDisable>Delete</RockButton>\n        </template>\n\n        <RockButton v-for=\"action in footerActions\" :btnType=\"action.type\" @click=\"onActionClick(action, $event)\">\n            <template v-if=\"action.title\">{{ action.title }}</template>\n            <i v-else :class=\"action.iconCssClass\"></i>\n        </RockButton>\n    </template>\n\n    <template #footerSecondaryActions>\n        <RockButton v-for=\"action in internalFooterSecondaryActions\" :btnType=\"action.type\" btnSize=\"sm\" :title=\"action.title\" @click=\"onActionClick(action, $event)\" :disabled=\"action.disabled\">\n            <i :class=\"getActionIconCssClass(action)\"></i>\n        </RockButton>\n    </template>\n\n    <template #default>\n        <v-style>\n            .panel-flex .label-group > .label + * {\n                margin-left: 8px;\n            }\n        </v-style>\n\n        <RockForm v-if=\"isEditModeVisible\" v-show=\"isEditMode\" @submit=\"onSaveSubmit\" v-model:submit=\"isFormSubmitting\">\n            <RockSuspense @ready=\"onEditSuspenseReady\">\n                <slot name=\"edit\" />\n            </RockSuspense>\n        </RockForm>\n\n        <slot v-if=\"isViewMode\" name=\"view\" />\n    </template>\n</Panel>\n\n<Modal v-model=\"showAuditDetailsModal\" title=\"Audit Details\">\n    <AuditDetail :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />\n</Modal>\n"
      }));

    })
  };
}));
//# sourceMappingURL=detailBlock.js.map
