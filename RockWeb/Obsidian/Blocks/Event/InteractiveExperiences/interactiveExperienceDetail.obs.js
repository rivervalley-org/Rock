System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/modal', '@Obsidian/Controls/panel', '@Obsidian/Controls/sectionHeader', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/component', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/colorPicker', '@Obsidian/Controls/dataViewPicker', '@Obsidian/Controls/imageUploader', '@Obsidian/Controls/groupPicker', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/scheduleBuilder.obs', '@Obsidian/Controls/sectionContainer', '@Obsidian/Controls/textBox', '@Obsidian/Controls/transitionVerticalCollapse', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Event/interactiveExperiencePushNotificationType', '@Obsidian/Utility/internetCalendar', '@Obsidian/Enums/Event/interactiveExperienceCampusBehavior', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, withModifiers, withDirectives, renderList, toDisplayString, normalizeClass, createBlock, createTextVNode, createCommentVNode, shallowRef, isRef, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, DropDownList, Modal, Panel, SectionHeader, useDragReorder, DragSource, DragTarget, useVModelPassthrough, propertyRef, updateRefValue, useInvokeBlockAction, setPropertiesBoxValue, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, areEqual, newGuid, confirmDelete, alert, CampusPicker, CodeEditor, ColorPicker, DataViewPicker, ImageUploader, GroupPicker, RadioButtonList, ScheduleBuilder, SectionContainer, TextBox, TransitionVerticalCollapse, BinaryFiletype, toNumber, InteractiveExperiencePushNotificationType, Calendar, InteractiveExperienceCampusBehavior, ValueDetailList, ValueDetailListItemBuilder, escapeHtml, debounce;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      withModifiers = module.withModifiers;
      withDirectives = module.withDirectives;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      normalizeClass = module.normalizeClass;
      createBlock = module.createBlock;
      createTextVNode = module.createTextVNode;
      createCommentVNode = module.createCommentVNode;
      shallowRef = module.shallowRef;
      isRef = module.isRef;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      useDragReorder = module.useDragReorder;
      DragSource = module.DragSource;
      DragTarget = module.DragTarget;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      setPropertiesBoxValue = module.setPropertiesBoxValue;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      areEqual = module.areEqual;
      newGuid = module.newGuid;
    }, function (module) {
      confirmDelete = module.confirmDelete;
      alert = module.alert;
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      DataViewPicker = module["default"];
    }, function (module) {
      ImageUploader = module["default"];
    }, function (module) {
      GroupPicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      ScheduleBuilder = module["default"];
    }, function (module) {
      SectionContainer = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      InteractiveExperiencePushNotificationType = module.InteractiveExperiencePushNotificationType;
    }, function (module) {
      Calendar = module.Calendar;
    }, function (module) {
      InteractiveExperienceCampusBehavior = module.InteractiveExperienceCampusBehavior;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      escapeHtml = module.escapeHtml;
    }, function (module) {
      debounce = module.debounce;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _withScopeId = n => (pushScopeId("data-v-fcffbb20"), n = n(), popScopeId(), n);
      var _hoisted_1$2 = ["onClick"];
      var _hoisted_2$2 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1));
      var _hoisted_3$2 = [_hoisted_2$2];
      var _hoisted_4$1 = {
        class: "actions-list"
      };
      var _hoisted_5$1 = {
        class: "action-item-count"
      };
      var _hoisted_6$1 = {
        class: "action-item-body"
      };
      var _hoisted_7$1 = _withScopeId(() => createElementVNode("span", {
        class: "reorder-handle"
      }, [createElementVNode("i", {
        class: "fa fa-bars"
      })], -1));
      var _hoisted_8$1 = {
        class: "action-item-icon"
      };
      var _hoisted_9$1 = {
        class: "action-item-content"
      };
      var _hoisted_10$1 = {
        class: "title text-lg"
      };
      var _hoisted_11$1 = {
        class: "subtitle text-sm text-muted"
      };
      var _hoisted_12$1 = {
        class: "action-columncommand"
      };
      var _hoisted_13$1 = ["onClick"];
      var _hoisted_14$1 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1));
      var _hoisted_15$1 = [_hoisted_14$1];
      var _hoisted_16$1 = ["onClick"];
      var _hoisted_17$1 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_18$1 = [_hoisted_17$1];
      var _hoisted_19$1 = {
        class: "row"
      };
      var _hoisted_20$1 = {
        key: 0,
        class: "col-md-4"
      };
      var _hoisted_21$1 = {
        key: 1,
        class: "col-md-4"
      };
      var _hoisted_22$1 = {
        class: "col-md-4"
      };
      var script$3 = defineComponent({
        name: 'actionsPanel.partial',
        props: {
          modelValue: {
            type: Array,
            required: true
          },
          name: {
            type: String,
            required: true
          },
          interactiveExperienceIdKey: {
            type: String,
            required: true
          },
          actionTypes: {
            type: Array,
            default: []
          },
          visualizerTypes: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var isModalVisible = ref(false);
          var modalTitle = ref("");
          var modalErrorMessage = ref("");
          var existingActionGuid = ref(null);
          var actionType = ref("");
          var requiresModeration = ref(false);
          var allowMultipleSubmissions = ref(false);
          var anonymousResponses = ref(false);
          var responseVisual = ref("");
          var attributeValues = ref({});
          var actionHeaderTitle = computed(() => {
            return "Actions for ".concat(props.name);
          });
          var actionHeaderDescription = computed(() => {
            return "The actions below are configured for the ".concat(props.name, " experience.");
          });
          var actionTypeItems = computed(() => {
            return props.actionTypes.map(at => ({
              value: at.value,
              text: at.text
            }));
          });
          var responseVisualItems = computed(() => {
            return props.visualizerTypes;
          });
          var selectedActionType = computed(() => {
            var _props$actionTypes$fi;
            return (_props$actionTypes$fi = props.actionTypes.find(at => areEqual(at.value, actionType.value))) !== null && _props$actionTypes$fi !== void 0 ? _props$actionTypes$fi : null;
          });
          var actionAttributes = computed(() => {
            var _selectedActionType$v, _selectedActionType$v2;
            return (_selectedActionType$v = (_selectedActionType$v2 = selectedActionType.value) === null || _selectedActionType$v2 === void 0 ? void 0 : _selectedActionType$v2.attributes) !== null && _selectedActionType$v !== void 0 ? _selectedActionType$v : {};
          });
          var selectedVisualizerType = computed(() => {
            var _props$visualizerType;
            return (_props$visualizerType = props.visualizerTypes.find(at => areEqual(at.value, responseVisual.value))) !== null && _props$visualizerType !== void 0 ? _props$visualizerType : null;
          });
          var visualizerAttributes = computed(() => {
            var _selectedVisualizerTy, _selectedVisualizerTy2;
            return (_selectedVisualizerTy = (_selectedVisualizerTy2 = selectedVisualizerType.value) === null || _selectedVisualizerTy2 === void 0 ? void 0 : _selectedVisualizerTy2.attributes) !== null && _selectedVisualizerTy !== void 0 ? _selectedVisualizerTy : {};
          });
          var isRequiresModerationVisible = computed(() => {
            var _selectedActionType$v3;
            return ((_selectedActionType$v3 = selectedActionType.value) === null || _selectedActionType$v3 === void 0 ? void 0 : _selectedActionType$v3.isModerationSupported) === true;
          });
          var isMultipleSubmissionsVisible = computed(() => {
            var _selectedActionType$v4;
            return ((_selectedActionType$v4 = selectedActionType.value) === null || _selectedActionType$v4 === void 0 ? void 0 : _selectedActionType$v4.isMultipleSubmissionSupported) === true;
          });
          function getActionTypeName(action) {
            var _props$actionTypes$fi2, _props$actionTypes$fi3;
            return (_props$actionTypes$fi2 = (_props$actionTypes$fi3 = props.actionTypes.find(at => {
              var _action$actionType;
              return areEqual(at.value, (_action$actionType = action.actionType) === null || _action$actionType === void 0 ? void 0 : _action$actionType.value);
            })) === null || _props$actionTypes$fi3 === void 0 ? void 0 : _props$actionTypes$fi3.text) !== null && _props$actionTypes$fi2 !== void 0 ? _props$actionTypes$fi2 : "";
          }
          function getActionTypeIconClass(action) {
            var _props$actionTypes$fi4, _props$actionTypes$fi5;
            return (_props$actionTypes$fi4 = (_props$actionTypes$fi5 = props.actionTypes.find(at => {
              var _action$actionType2;
              return areEqual(at.value, (_action$actionType2 = action.actionType) === null || _action$actionType2 === void 0 ? void 0 : _action$actionType2.value);
            })) === null || _props$actionTypes$fi5 === void 0 ? void 0 : _props$actionTypes$fi5.iconCssClass) !== null && _props$actionTypes$fi4 !== void 0 ? _props$actionTypes$fi4 : "";
          }
          function updateDefaultAttributeValues() {
            var newValues = _objectSpread2({}, attributeValues.value);
            var isChanged = false;
            if (selectedActionType.value && selectedActionType.value.defaultAttributeValues) {
              for (var key in selectedActionType.value.defaultAttributeValues) {
                if (!newValues[key]) {
                  newValues[key] = selectedActionType.value.defaultAttributeValues[key];
                  isChanged = true;
                }
              }
            }
            if (selectedVisualizerType.value && selectedVisualizerType.value.defaultAttributeValues) {
              for (var _key in selectedVisualizerType.value.defaultAttributeValues) {
                if (!newValues[_key]) {
                  newValues[_key] = selectedVisualizerType.value.defaultAttributeValues[_key];
                  isChanged = true;
                }
              }
            }
            if (isChanged) {
              attributeValues.value = newValues;
            }
          }
          function onAddActionClick() {
            actionType.value = "";
            requiresModeration.value = false;
            allowMultipleSubmissions.value = false;
            anonymousResponses.value = false;
            responseVisual.value = "";
            attributeValues.value = {};
            existingActionGuid.value = null;
            modalTitle.value = "Add Action";
            isModalVisible.value = true;
          }
          function onEditActionClick(action) {
            var _action$actionType$va, _action$actionType3, _action$responseVisua, _action$responseVisua2, _action$attributeValu, _action$guid;
            actionType.value = (_action$actionType$va = (_action$actionType3 = action.actionType) === null || _action$actionType3 === void 0 ? void 0 : _action$actionType3.value) !== null && _action$actionType$va !== void 0 ? _action$actionType$va : "";
            requiresModeration.value = action.isModerationRequired;
            allowMultipleSubmissions.value = action.isMultipleSubmissionsAllowed;
            anonymousResponses.value = action.isResponseAnonymous;
            responseVisual.value = (_action$responseVisua = (_action$responseVisua2 = action.responseVisualizer) === null || _action$responseVisua2 === void 0 ? void 0 : _action$responseVisua2.value) !== null && _action$responseVisua !== void 0 ? _action$responseVisua : "";
            attributeValues.value = (_action$attributeValu = action.attributeValues) !== null && _action$attributeValu !== void 0 ? _action$attributeValu : {};
            existingActionGuid.value = (_action$guid = action.guid) !== null && _action$guid !== void 0 ? _action$guid : null;
            modalTitle.value = "Edit Action";
            isModalVisible.value = true;
          }
          function onActionSave() {
            return _onActionSave.apply(this, arguments);
          }
          function _onActionSave() {
            _onActionSave = _asyncToGenerator(function* () {
              var _existingActionGuid$v;
              modalErrorMessage.value = "";
              var box = {};
              setPropertiesBoxValue(box, "guid", (_existingActionGuid$v = existingActionGuid.value) !== null && _existingActionGuid$v !== void 0 ? _existingActionGuid$v : newGuid());
              setPropertiesBoxValue(box, "actionType", {
                value: actionType.value
              });
              setPropertiesBoxValue(box, "isModerationRequired", requiresModeration.value);
              setPropertiesBoxValue(box, "isMultipleSubmissionsAllowed", allowMultipleSubmissions.value);
              setPropertiesBoxValue(box, "isResponseAnonymous", anonymousResponses.value);
              setPropertiesBoxValue(box, "attributeValues", attributeValues.value);
              setPropertiesBoxValue(box, "responseVisualizer", responseVisual.value ? {
                value: responseVisual.value
              } : null);
              var result = yield invokeBlockAction("SaveAction", {
                idKey: props.interactiveExperienceIdKey,
                box: box
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage;
                modalErrorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save action.";
                return;
              }
              var action = result.data;
              var existingActionIndex = internalValue.value.findIndex(a => areEqual(a.guid, action.guid));
              if (existingActionIndex !== -1) {
                var newValue = [...internalValue.value];
                newValue.splice(existingActionIndex, 1, action);
                internalValue.value = newValue;
              } else {
                internalValue.value = [...internalValue.value, action];
              }
              isModalVisible.value = false;
            });
            return _onActionSave.apply(this, arguments);
          }
          function onActionRemoveClick(_x) {
            return _onActionRemoveClick.apply(this, arguments);
          }
          function _onActionRemoveClick() {
            _onActionRemoveClick = _asyncToGenerator(function* (action) {
              if (!(yield confirmDelete("Action"))) {
                return;
              }
              var result = yield invokeBlockAction("DeleteAction", {
                idKey: props.interactiveExperienceIdKey,
                actionGuid: action.guid
              });
              if (!result.isSuccess) {
                alert(result.errorMessage || "Unable to delete the action.");
              } else {
                var index = internalValue.value.findIndex(a => areEqual(a.guid, action.guid));
                if (index !== -1) {
                  var newValue = [...internalValue.value];
                  newValue.splice(index, 1);
                  internalValue.value = newValue;
                }
              }
            });
            return _onActionRemoveClick.apply(this, arguments);
          }
          function onActionReorder(_x2, _x3) {
            return _onActionReorder.apply(this, arguments);
          }
          function _onActionReorder() {
            _onActionReorder = _asyncToGenerator(function* (action, beforeAction) {
              var _beforeAction$guid;
              internalValue.value = [...internalValue.value];
              var result = yield invokeBlockAction("ReorderAction", {
                idKey: props.interactiveExperienceIdKey,
                actionGuid: action.guid,
                beforeActionGuid: (_beforeAction$guid = beforeAction === null || beforeAction === void 0 ? void 0 : beforeAction.guid) !== null && _beforeAction$guid !== void 0 ? _beforeAction$guid : null
              });
              if (!result.isSuccess) {
                alert(result.errorMessage || "Unable to re-order actions, you might need to reload the page.");
                return;
              }
            });
            return _onActionReorder.apply(this, arguments);
          }
          watch([actionType, responseVisual], () => {
            updateDefaultAttributeValues();
          });
          var dragOptions = useDragReorder(internalValue, onActionReorder);
          updateDefaultAttributeValues();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Panel), {
              title: "Actions"
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: unref(actionHeaderTitle),
                description: unref(actionHeaderDescription)
              }, {
                actions: withCtx(() => [createElementVNode("a", {
                  class: "btn btn-default btn-sm btn-square",
                  href: "#",
                  onClick: withModifiers(onAddActionClick, ["prevent"])
                }, _hoisted_3$2, 8, _hoisted_1$2)]),
                _: 1
              }, 8, ["title", "description"]), withDirectives((openBlock(), createElementBlock("div", _hoisted_4$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(internalValue), (action, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "action-item",
                  key: action.guid
                }, [createElementVNode("div", _hoisted_5$1, toDisplayString(index + 1), 1), createElementVNode("div", _hoisted_6$1, [_hoisted_7$1, createElementVNode("div", _hoisted_8$1, [createElementVNode("i", {
                  class: normalizeClass(getActionTypeIconClass(action))
                }, null, 2)]), createElementVNode("div", _hoisted_9$1, [createElementVNode("div", _hoisted_10$1, toDisplayString(action.title), 1), createElementVNode("div", _hoisted_11$1, toDisplayString(getActionTypeName(action)), 1)]), createElementVNode("div", _hoisted_12$1, [createElementVNode("a", {
                  href: "#",
                  class: "btn btn-default btn-sm btn-square mr-2",
                  onClick: withModifiers($event => onEditActionClick(action), ["prevent"])
                }, _hoisted_15$1, 8, _hoisted_13$1), createElementVNode("a", {
                  href: "#",
                  class: "btn btn-danger btn-sm btn-square",
                  onClick: withModifiers($event => onActionRemoveClick(action), ["prevent"])
                }, _hoisted_18$1, 8, _hoisted_16$1)])])]);
              }), 128))])), [[unref(DragSource), unref(dragOptions)], [unref(DragTarget), unref(dragOptions)]])]),
              _: 1
            }), createVNode(unref(Modal), {
              modelValue: isModalVisible.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isModalVisible.value = $event),
              title: modalTitle.value,
              saveText: "Save",
              onSave: onActionSave
            }, {
              default: withCtx(() => [modalErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "warning"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(modalErrorMessage.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), createVNode(unref(DropDownList), {
                modelValue: actionType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => actionType.value = $event),
                label: "Action Type",
                rules: "required",
                items: unref(actionTypeItems)
              }, null, 8, ["modelValue", "items"]), createVNode(unref(AttributeValuesContainer), {
                modelValue: attributeValues.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => attributeValues.value = $event),
                attributes: unref(actionAttributes),
                isEditMode: "",
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"]), createElementVNode("div", _hoisted_19$1, [unref(isRequiresModerationVisible) ? (openBlock(), createElementBlock("div", _hoisted_20$1, [createVNode(unref(CheckBox), {
                modelValue: requiresModeration.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => requiresModeration.value = $event),
                label: "Requires Moderation"
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true), unref(isMultipleSubmissionsVisible) ? (openBlock(), createElementBlock("div", _hoisted_21$1, [createVNode(unref(CheckBox), {
                modelValue: allowMultipleSubmissions.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => allowMultipleSubmissions.value = $event),
                label: "Allow Multiple Submissions"
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_22$1, [createVNode(unref(CheckBox), {
                modelValue: anonymousResponses.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => anonymousResponses.value = $event),
                label: "Anonymous Responses"
              }, null, 8, ["modelValue"])])]), createVNode(unref(DropDownList), {
                modelValue: responseVisual.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => responseVisual.value = $event),
                label: "Response Visual",
                items: unref(responseVisualItems)
              }, null, 8, ["modelValue", "items"]), createVNode(unref(AttributeValuesContainer), {
                modelValue: attributeValues.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
                attributes: unref(visualizerAttributes),
                isEditMode: "",
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"])]),
              _: 1
            }, 8, ["modelValue", "title"])], 64);
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

      var css_248z = ".action-item[data-v-fcffbb20]{align-items:stretch;border:1px solid #c4c4c4;border-radius:8px;display:flex;margin-bottom:12px;overflow:hidden}.action-item-count[data-v-fcffbb20]{align-items:center;background-color:var(--brand-info);color:#fff;display:flex;justify-content:center;min-width:35px;padding:8px 0}.action-item-body[data-v-fcffbb20]{align-items:center;display:flex;flex:1 0 0;padding:8px 0}.action-item-body>[data-v-fcffbb20]{align-items:center;display:flex;padding:0 12px}.action-item-body>[data-v-fcffbb20]:last-child{display:block;padding-right:16px}.action-item .action-item-icon[data-v-fcffbb20]{align-items:center;background-color:var(--brand-info);border-radius:50%;color:#fff;display:flex;height:36px;justify-content:center;padding:0;width:36px}.action-item .action-item-content[data-v-fcffbb20]{align-items:flex-start;flex:1 0;flex-direction:column;justify-content:center}.action-item .reorder-handle[data-v-fcffbb20]{cursor:grab}.action-item .action-columncommand[data-v-fcffbb20]{opacity:0;transition:opacity .2s ease-in-out;visibility:hidden}.action-item .title[data-v-fcffbb20]{font-weight:600}.action-item:hover .action-columncommand[data-v-fcffbb20]{opacity:1;visibility:visible}";
      styleInject(css_248z);

      script$3.__scopeId = "data-v-fcffbb20";
      script$3.__file = "src/Event/InteractiveExperiences/InteractiveExperienceDetail/actionsPanel.partial.obs";

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = {
        class: "mb-5"
      };
      var _hoisted_8 = {
        key: 0,
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "col-md-6"
      };
      var _hoisted_11 = {
        key: 0,
        class: "row"
      };
      var _hoisted_12 = {
        class: "col-md-6"
      };
      var _hoisted_13 = {
        class: "grid-table table table-condensed table-light"
      };
      var _hoisted_14 = createElementVNode("thead", null, [createElementVNode("tr", null, [createElementVNode("th", null, "Schedule"), createElementVNode("th", null, "Campus"), createElementVNode("th", null, "Data View"), createElementVNode("th", null, "Group"), createElementVNode("th", {
        class: "grid-columncommand"
      }), createElementVNode("th", {
        class: "grid-columncommand"
      })])], -1);
      var _hoisted_15 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_16 = ["onClick"];
      var _hoisted_17 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_18 = [_hoisted_17];
      var _hoisted_19 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_20 = ["onClick"];
      var _hoisted_21 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_22 = [_hoisted_21];
      var _hoisted_23 = {
        key: 0
      };
      var _hoisted_24 = createElementVNode("td", {
        colspan: "6"
      }, "No schedules defined.", -1);
      var _hoisted_25 = [_hoisted_24];
      var _hoisted_26 = {
        class: "grid-actions",
        colspan: "6"
      };
      var _hoisted_27 = ["onClick"];
      var _hoisted_28 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_29 = [_hoisted_28];
      var _hoisted_30 = {
        class: "row"
      };
      var _hoisted_31 = {
        class: "col-md-6"
      };
      var _hoisted_32 = {
        class: "col-md-6"
      };
      var _hoisted_33 = {
        class: "row"
      };
      var _hoisted_34 = {
        class: "col-md-6"
      };
      var _hoisted_35 = {
        class: "col-md-6"
      };
      var _hoisted_36 = {
        class: "row"
      };
      var _hoisted_37 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_38 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_39 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_40 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_41 = {
        class: "row"
      };
      var _hoisted_42 = createElementVNode("div", {
        class: "col-sm-6"
      }, null, -1);
      var _hoisted_43 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_44 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_45 = {
        class: "mt-2 text-right"
      };
      var _hoisted_46 = ["onClick"];
      var _hoisted_47 = createTextVNode(" Advanced Options ");
      var _hoisted_48 = {
        key: 0,
        class: "fa fa-angle-up"
      };
      var _hoisted_49 = {
        key: 1,
        class: "fa fa-angle-down"
      };
      var _hoisted_50 = {
        key: 0
      };
      var _hoisted_51 = {
        class: "row"
      };
      var _hoisted_52 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_53 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_54 = {
        class: "row"
      };
      var _hoisted_55 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_56 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_57 = {
        class: "col-lg-3 col-sm-6"
      };
      var _hoisted_58 = {
        class: "mt-2 text-right"
      };
      var _hoisted_59 = ["onClick"];
      var _hoisted_60 = createTextVNode(" Advanced Options ");
      var _hoisted_61 = {
        key: 0,
        class: "fa fa-angle-up"
      };
      var _hoisted_62 = {
        key: 1,
        class: "fa fa-angle-down"
      };
      var _hoisted_63 = {
        key: 0
      };
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$exp, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$pub, _props$modelValue$pho, _props$modelValue$pus, _props$modelValue$pus2, _props$modelValue$sch, _props$modelValue$wel, _props$modelValue$wel2, _props$modelValue$wel3, _props$modelValue$noA, _props$modelValue$noA2, _props$modelValue$noA3, _props$modelValue$act, _props$modelValue$act2, _props$modelValue$act3, _props$modelValue$act4, _props$modelValue$act5, _props$modelValue$act6, _props$modelValue$act7, _props$modelValue$act8, _props$modelValue$aud, _props$modelValue$aud2, _props$modelValue$aud3, _props$modelValue$aud4, _props$modelValue$aud5, _props$modelValue$aud6, _props$modelValue$aud7;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var campusBehavior = ref(props.modelValue.campusBehavior.toString());
          var defaultCampus = ref(props.modelValue.defaultCampus);
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var experienceEndedTemplate = ref((_props$modelValue$exp = props.modelValue.experienceEndedTemplate) !== null && _props$modelValue$exp !== void 0 ? _props$modelValue$exp : "");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var publicLabel = propertyRef((_props$modelValue$pub = props.modelValue.publicLabel) !== null && _props$modelValue$pub !== void 0 ? _props$modelValue$pub : "", "PublicLabel");
          var experiencePhoto = propertyRef((_props$modelValue$pho = props.modelValue.photoBinaryFile) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : null, "PhotoBinaryFileId");
          var pushNotificationConfiguration = propertyRef(props.modelValue.pushNotificationType.toString(), "PushNotificationType");
          var pushNotificationTitle = propertyRef((_props$modelValue$pus = props.modelValue.pushNotificationTitle) !== null && _props$modelValue$pus !== void 0 ? _props$modelValue$pus : "", "PushNotificationTitle");
          var pushNotificationDetail = propertyRef((_props$modelValue$pus2 = props.modelValue.pushNotificationDetail) !== null && _props$modelValue$pus2 !== void 0 ? _props$modelValue$pus2 : "", "PushNotificationDetail");
          var schedules = ref((_props$modelValue$sch = props.modelValue.schedules) !== null && _props$modelValue$sch !== void 0 ? _props$modelValue$sch : []);
          var welcomeTitle = propertyRef((_props$modelValue$wel = props.modelValue.welcomeTitle) !== null && _props$modelValue$wel !== void 0 ? _props$modelValue$wel : "", "WelcomeTitle");
          var welcomeMessage = propertyRef((_props$modelValue$wel2 = props.modelValue.welcomeMessage) !== null && _props$modelValue$wel2 !== void 0 ? _props$modelValue$wel2 : "", "WelcomeMessage");
          var welcomeHeaderImage = propertyRef((_props$modelValue$wel3 = props.modelValue.welcomeHeaderImageBinaryFile) !== null && _props$modelValue$wel3 !== void 0 ? _props$modelValue$wel3 : null, "WelcomeHeaderImageBinaryFileId");
          var noActionsTitle = propertyRef((_props$modelValue$noA = props.modelValue.noActionTitle) !== null && _props$modelValue$noA !== void 0 ? _props$modelValue$noA : "", "NoActionTitle");
          var noActionsMessage = propertyRef((_props$modelValue$noA2 = props.modelValue.noActionMessage) !== null && _props$modelValue$noA2 !== void 0 ? _props$modelValue$noA2 : "", "NoActionMessage");
          var noActionsHeaderImage = propertyRef((_props$modelValue$noA3 = props.modelValue.noActionHeaderImageBinaryFile) !== null && _props$modelValue$noA3 !== void 0 ? _props$modelValue$noA3 : null, "NoActionHeaderImageBinaryFileId");
          var actionBackgroundColor = propertyRef((_props$modelValue$act = props.modelValue.actionBackgroundColor) !== null && _props$modelValue$act !== void 0 ? _props$modelValue$act : "", "ActionBackgroundColor");
          var actionTextColor = propertyRef((_props$modelValue$act2 = props.modelValue.actionTextColor) !== null && _props$modelValue$act2 !== void 0 ? _props$modelValue$act2 : "", "ActionTextColor");
          var actionPrimaryButtonColor = propertyRef((_props$modelValue$act3 = props.modelValue.actionPrimaryButtonColor) !== null && _props$modelValue$act3 !== void 0 ? _props$modelValue$act3 : "", "ActionPrimaryButtonColor");
          var actionPrimaryButtonTextColor = propertyRef((_props$modelValue$act4 = props.modelValue.actionPrimaryButtonTextColor) !== null && _props$modelValue$act4 !== void 0 ? _props$modelValue$act4 : "", "ActionPrimaryButtonTextColor");
          var actionSecondaryButtonColor = propertyRef((_props$modelValue$act5 = props.modelValue.actionSecondaryButtonColor) !== null && _props$modelValue$act5 !== void 0 ? _props$modelValue$act5 : "", "ActionSecondaryButtonColor");
          var actionSecondaryButtonTextColor = propertyRef((_props$modelValue$act6 = props.modelValue.actionSecondaryButtonTextColor) !== null && _props$modelValue$act6 !== void 0 ? _props$modelValue$act6 : "", "ActionSecondaryButtonTextColor");
          var actionBackgroundImage = propertyRef((_props$modelValue$act7 = props.modelValue.actionBackgroundImageBinaryFile) !== null && _props$modelValue$act7 !== void 0 ? _props$modelValue$act7 : null, "ActionBackgroundImageBinaryFileId");
          var actionCustomCss = propertyRef((_props$modelValue$act8 = props.modelValue.actionCustomCss) !== null && _props$modelValue$act8 !== void 0 ? _props$modelValue$act8 : "", "ActionCustomCss");
          var audienceBackgroundColor = propertyRef((_props$modelValue$aud = props.modelValue.audienceBackgroundColor) !== null && _props$modelValue$aud !== void 0 ? _props$modelValue$aud : "", "ActionBackgroundColor");
          var audienceTextColor = propertyRef((_props$modelValue$aud2 = props.modelValue.audienceTextColor) !== null && _props$modelValue$aud2 !== void 0 ? _props$modelValue$aud2 : "", "ActionTextColor");
          var audiencePrimaryColor = propertyRef((_props$modelValue$aud3 = props.modelValue.audiencePrimaryColor) !== null && _props$modelValue$aud3 !== void 0 ? _props$modelValue$aud3 : "", "AudiencePrimaryColor");
          var audienceSecondaryColor = propertyRef((_props$modelValue$aud4 = props.modelValue.audienceSecondaryColor) !== null && _props$modelValue$aud4 !== void 0 ? _props$modelValue$aud4 : "", "AudienceSecondaryColor");
          var audienceAccentColor = propertyRef((_props$modelValue$aud5 = props.modelValue.audienceAccentColor) !== null && _props$modelValue$aud5 !== void 0 ? _props$modelValue$aud5 : "", "AudienceAccentColor");
          var audienceBackgroundImage = propertyRef((_props$modelValue$aud6 = props.modelValue.audienceBackgroundImageBinaryFile) !== null && _props$modelValue$aud6 !== void 0 ? _props$modelValue$aud6 : null, "AudienceBackgroundImageBinaryFileId");
          var audienceCustomCss = propertyRef((_props$modelValue$aud7 = props.modelValue.audienceCustomCss) !== null && _props$modelValue$aud7 !== void 0 ? _props$modelValue$aud7 : "", "AudienceCustomCss");
          var isScheduleModalVisible = ref(false);
          var editingSchedule = null;
          var scheduleModalTitle = ref("");
          var scheduleContent = ref("");
          var scheduleCampuses = shallowRef([]);
          var scheduleDataView = shallowRef(null);
          var scheduleGroup = shallowRef(null);
          var propRefs = [description, isActive, name, publicLabel, experiencePhoto, pushNotificationConfiguration, pushNotificationTitle, pushNotificationDetail, welcomeTitle, welcomeMessage, welcomeHeaderImage, noActionsTitle, noActionsMessage, noActionsHeaderImage, actionBackgroundColor, actionTextColor, actionPrimaryButtonColor, actionPrimaryButtonTextColor, actionSecondaryButtonColor, actionSecondaryButtonTextColor, actionBackgroundImage, actionCustomCss, audienceBackgroundColor, audienceTextColor, audiencePrimaryColor, audienceSecondaryColor, audienceAccentColor, audienceBackgroundImage, audienceCustomCss];
          var binaryFileTypeGuid = BinaryFiletype.Default;
          var isActionAdvancedOptionsVisible = ref(false);
          var isAudienceAdvancedOptionsVisible = ref(false);
          var pushNotificationConfigurationItems = [{
            value: InteractiveExperiencePushNotificationType.Never.toString(),
            text: "Never"
          }, {
            value: InteractiveExperiencePushNotificationType.EveryAction.toString(),
            text: "Every Action"
          }, {
            value: InteractiveExperiencePushNotificationType.SpecificActions.toString(),
            text: "Specific Actions"
          }];
          var campusBehaviorItems = [{
            value: InteractiveExperienceCampusBehavior.FilterSchedulesByCampusGeofences.toString(),
            text: "Filter Schedules by Campus Geofences"
          }, {
            value: InteractiveExperienceCampusBehavior.DetermineCampusFromGeofence.toString(),
            text: "Determine Campus from Geofence"
          }, {
            value: InteractiveExperienceCampusBehavior.UseIndividualsCampus.toString(),
            text: "Use Individual's Campus"
          }];
          var isPushActive = computed(() => {
            return pushNotificationConfiguration.value === InteractiveExperiencePushNotificationType.EveryAction.toString() || pushNotificationConfiguration.value === InteractiveExperiencePushNotificationType.SpecificActions.toString();
          });
          var isDefaultCampusVisible = computed(() => {
            return campusBehavior.value === InteractiveExperienceCampusBehavior.DetermineCampusFromGeofence.toString() || campusBehavior.value === InteractiveExperienceCampusBehavior.UseIndividualsCampus.toString();
          });
          function getScheduleCampusNames(schedule) {
            if (schedule.campuses && schedule.campuses.length) {
              return schedule.campuses.map(c => {
                var _c$text;
                return (_c$text = c.text) !== null && _c$text !== void 0 ? _c$text : "";
              }).join(", ");
            } else {
              return "";
            }
          }
          function onAddScheduleClick() {
            scheduleModalTitle.value = "Add Schedule";
            editingSchedule = null;
            scheduleContent.value = "";
            scheduleCampuses.value = [];
            scheduleDataView.value = null;
            scheduleGroup.value = null;
            isScheduleModalVisible.value = true;
          }
          function onEditScheduleClick(schedule) {
            var _schedule$schedule$va, _schedule$schedule, _schedule$campuses, _schedule$dataView, _schedule$group;
            scheduleModalTitle.value = "Edit Schedule";
            editingSchedule = schedule;
            scheduleContent.value = (_schedule$schedule$va = (_schedule$schedule = schedule.schedule) === null || _schedule$schedule === void 0 ? void 0 : _schedule$schedule.value) !== null && _schedule$schedule$va !== void 0 ? _schedule$schedule$va : "";
            scheduleCampuses.value = (_schedule$campuses = schedule.campuses) !== null && _schedule$campuses !== void 0 ? _schedule$campuses : [];
            scheduleDataView.value = (_schedule$dataView = schedule.dataView) !== null && _schedule$dataView !== void 0 ? _schedule$dataView : null;
            scheduleGroup.value = (_schedule$group = schedule.group) !== null && _schedule$group !== void 0 ? _schedule$group : null;
            isScheduleModalVisible.value = true;
          }
          function onDeleteScheduleClick(_x) {
            return _onDeleteScheduleClick.apply(this, arguments);
          }
          function _onDeleteScheduleClick() {
            _onDeleteScheduleClick = _asyncToGenerator(function* (schedule) {
              if (!(yield confirmDelete("Schedule"))) {
                return;
              }
              var index = schedules.value.findIndex(s => areEqual(s.guid, schedule.guid));
              if (index >= 0) {
                schedules.value.splice(index, 1);
              }
            });
            return _onDeleteScheduleClick.apply(this, arguments);
          }
          function onSaveSchedule() {
            var _editingSchedule;
            var calendar = new Calendar(scheduleContent.value);
            var schedule = (_editingSchedule = editingSchedule) !== null && _editingSchedule !== void 0 ? _editingSchedule : {
              guid: newGuid()
            };
            schedule.schedule = {
              value: scheduleContent.value,
              text: calendar.events[0].toFriendlyText()
            };
            schedule.campuses = scheduleCampuses.value;
            schedule.dataView = scheduleDataView.value;
            schedule.group = scheduleGroup.value;
            if (!editingSchedule) {
              schedules.value.push(schedule);
            }
            isScheduleModalVisible.value = false;
          }
          function onActionAdvancedOptionsClick() {
            isActionAdvancedOptionsVisible.value = !isActionAdvancedOptionsVisible.value;
          }
          function onAudienceAdvancedOptionsClick() {
            isAudienceAdvancedOptionsVisible.value = !isAudienceAdvancedOptionsVisible.value;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$exp2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$pub2, _props$modelValue$pho2, _props$modelValue$pus3, _props$modelValue$pus4, _props$modelValue$wel4, _props$modelValue$wel5, _props$modelValue$wel6, _props$modelValue$noA4, _props$modelValue$noA5, _props$modelValue$noA6, _props$modelValue$act9, _props$modelValue$act10, _props$modelValue$act11, _props$modelValue$act12, _props$modelValue$act13, _props$modelValue$act14, _props$modelValue$act15, _props$modelValue$act16, _props$modelValue$aud8, _props$modelValue$aud9, _props$modelValue$aud10, _props$modelValue$aud11, _props$modelValue$aud12, _props$modelValue$aud13, _props$modelValue$aud14;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(campusBehavior, props.modelValue.campusBehavior.toString());
            updateRefValue(defaultCampus, props.modelValue.defaultCampus);
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(experienceEndedTemplate, (_props$modelValue$exp2 = props.modelValue.experienceEndedTemplate) !== null && _props$modelValue$exp2 !== void 0 ? _props$modelValue$exp2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(publicLabel, (_props$modelValue$pub2 = props.modelValue.publicLabel) !== null && _props$modelValue$pub2 !== void 0 ? _props$modelValue$pub2 : "");
            updateRefValue(experiencePhoto, (_props$modelValue$pho2 = props.modelValue.photoBinaryFile) !== null && _props$modelValue$pho2 !== void 0 ? _props$modelValue$pho2 : null);
            updateRefValue(pushNotificationConfiguration, props.modelValue.pushNotificationType.toString());
            updateRefValue(pushNotificationTitle, (_props$modelValue$pus3 = props.modelValue.pushNotificationTitle) !== null && _props$modelValue$pus3 !== void 0 ? _props$modelValue$pus3 : "");
            updateRefValue(pushNotificationDetail, (_props$modelValue$pus4 = props.modelValue.pushNotificationDetail) !== null && _props$modelValue$pus4 !== void 0 ? _props$modelValue$pus4 : "");
            updateRefValue(welcomeTitle, (_props$modelValue$wel4 = props.modelValue.welcomeTitle) !== null && _props$modelValue$wel4 !== void 0 ? _props$modelValue$wel4 : "");
            updateRefValue(welcomeMessage, (_props$modelValue$wel5 = props.modelValue.welcomeMessage) !== null && _props$modelValue$wel5 !== void 0 ? _props$modelValue$wel5 : "");
            updateRefValue(welcomeHeaderImage, (_props$modelValue$wel6 = props.modelValue.welcomeHeaderImageBinaryFile) !== null && _props$modelValue$wel6 !== void 0 ? _props$modelValue$wel6 : null);
            updateRefValue(noActionsTitle, (_props$modelValue$noA4 = props.modelValue.noActionTitle) !== null && _props$modelValue$noA4 !== void 0 ? _props$modelValue$noA4 : "");
            updateRefValue(noActionsMessage, (_props$modelValue$noA5 = props.modelValue.noActionMessage) !== null && _props$modelValue$noA5 !== void 0 ? _props$modelValue$noA5 : "");
            updateRefValue(noActionsHeaderImage, (_props$modelValue$noA6 = props.modelValue.noActionHeaderImageBinaryFile) !== null && _props$modelValue$noA6 !== void 0 ? _props$modelValue$noA6 : null);
            updateRefValue(actionBackgroundColor, (_props$modelValue$act9 = props.modelValue.actionBackgroundColor) !== null && _props$modelValue$act9 !== void 0 ? _props$modelValue$act9 : "");
            updateRefValue(actionTextColor, (_props$modelValue$act10 = props.modelValue.actionTextColor) !== null && _props$modelValue$act10 !== void 0 ? _props$modelValue$act10 : "");
            updateRefValue(actionPrimaryButtonColor, (_props$modelValue$act11 = props.modelValue.actionPrimaryButtonColor) !== null && _props$modelValue$act11 !== void 0 ? _props$modelValue$act11 : "");
            updateRefValue(actionPrimaryButtonTextColor, (_props$modelValue$act12 = props.modelValue.actionPrimaryButtonTextColor) !== null && _props$modelValue$act12 !== void 0 ? _props$modelValue$act12 : "");
            updateRefValue(actionSecondaryButtonColor, (_props$modelValue$act13 = props.modelValue.actionSecondaryButtonColor) !== null && _props$modelValue$act13 !== void 0 ? _props$modelValue$act13 : "");
            updateRefValue(actionSecondaryButtonTextColor, (_props$modelValue$act14 = props.modelValue.actionSecondaryButtonTextColor) !== null && _props$modelValue$act14 !== void 0 ? _props$modelValue$act14 : "");
            updateRefValue(actionBackgroundImage, (_props$modelValue$act15 = props.modelValue.actionBackgroundImageBinaryFile) !== null && _props$modelValue$act15 !== void 0 ? _props$modelValue$act15 : null);
            updateRefValue(actionCustomCss, (_props$modelValue$act16 = props.modelValue.actionCustomCss) !== null && _props$modelValue$act16 !== void 0 ? _props$modelValue$act16 : "");
            updateRefValue(audienceBackgroundColor, (_props$modelValue$aud8 = props.modelValue.audienceBackgroundColor) !== null && _props$modelValue$aud8 !== void 0 ? _props$modelValue$aud8 : "");
            updateRefValue(audienceTextColor, (_props$modelValue$aud9 = props.modelValue.audienceTextColor) !== null && _props$modelValue$aud9 !== void 0 ? _props$modelValue$aud9 : "");
            updateRefValue(audiencePrimaryColor, (_props$modelValue$aud10 = props.modelValue.audiencePrimaryColor) !== null && _props$modelValue$aud10 !== void 0 ? _props$modelValue$aud10 : "");
            updateRefValue(audienceSecondaryColor, (_props$modelValue$aud11 = props.modelValue.audienceSecondaryColor) !== null && _props$modelValue$aud11 !== void 0 ? _props$modelValue$aud11 : "");
            updateRefValue(audienceAccentColor, (_props$modelValue$aud12 = props.modelValue.audienceAccentColor) !== null && _props$modelValue$aud12 !== void 0 ? _props$modelValue$aud12 : "");
            updateRefValue(audienceBackgroundImage, (_props$modelValue$aud13 = props.modelValue.audienceBackgroundImageBinaryFile) !== null && _props$modelValue$aud13 !== void 0 ? _props$modelValue$aud13 : null);
            updateRefValue(audienceCustomCss, (_props$modelValue$aud14 = props.modelValue.audienceCustomCss) !== null && _props$modelValue$aud14 !== void 0 ? _props$modelValue$aud14 : "");
          });
          watch([attributeValues, campusBehavior, defaultCampus, experienceEndedTemplate, schedules, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              campusBehavior: toNumber(campusBehavior.value),
              defaultCampus: defaultCampus.value,
              description: description.value,
              experienceEndedTemplate: experienceEndedTemplate.value,
              isActive: isActive.value,
              name: name.value,
              publicLabel: publicLabel.value,
              photoBinaryFile: experiencePhoto.value,
              pushNotificationType: toNumber(pushNotificationConfiguration.value),
              pushNotificationTitle: pushNotificationTitle.value,
              pushNotificationDetail: pushNotificationDetail.value,
              welcomeTitle: welcomeTitle.value,
              welcomeMessage: welcomeMessage.value,
              welcomeHeaderImageBinaryFile: welcomeHeaderImage.value,
              noActionTitle: noActionsTitle.value,
              noActionMessage: noActionsMessage.value,
              noActionHeaderImageBinaryFile: noActionsHeaderImage.value,
              actionBackgroundColor: actionBackgroundColor.value,
              actionTextColor: actionTextColor.value,
              actionPrimaryButtonColor: actionPrimaryButtonColor.value,
              actionPrimaryButtonTextColor: actionPrimaryButtonTextColor.value,
              actionSecondaryButtonColor: actionSecondaryButtonColor.value,
              actionSecondaryButtonTextColor: actionSecondaryButtonTextColor.value,
              actionBackgroundImageBinaryFile: actionBackgroundImage.value,
              actionCustomCss: actionCustomCss.value,
              audienceBackgroundColor: audienceBackgroundColor.value,
              audienceTextColor: audienceTextColor.value,
              audiencePrimaryColor: audiencePrimaryColor.value,
              audienceSecondaryColor: audienceSecondaryColor.value,
              audienceAccentColor: audienceAccentColor.value,
              audienceBackgroundImageBinaryFile: audienceBackgroundImage.value,
              audienceCustomCss: audienceCustomCss.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          watch(name, (newValue, oldValue) => {
            if (oldValue === publicLabel.value) {
              publicLabel.value = newValue;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createElementVNode("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: unref(publicLabel),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(publicLabel) ? publicLabel.value = $event : null),
              label: "Public Label",
              rules: "required",
              help: "The experience name that will be shown publicly."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(ImageUploader), {
              modelValue: unref(experiencePhoto),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(experiencePhoto) ? experiencePhoto.value = $event : null),
              label: "Experience Photo",
              help: "An optional photo to be used when displaying information about the experience.",
              binaryFileTypeGuid: unref(binaryFileTypeGuid)
            }, null, 8, ["modelValue", "binaryFileTypeGuid"])])]), createElementVNode("div", _hoisted_7, [createVNode(unref(RadioButtonList), {
              modelValue: unref(pushNotificationConfiguration),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(pushNotificationConfiguration) ? pushNotificationConfiguration.value = $event : null),
              label: "Push Notification Configuration",
              help: "Detemines when push notifications should be sent when launching actions.",
              items: pushNotificationConfigurationItems,
              horizontal: ""
            }, null, 8, ["modelValue"]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [unref(isPushActive) ? (openBlock(), createElementBlock("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(TextBox), {
                modelValue: unref(pushNotificationTitle),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(pushNotificationTitle) ? pushNotificationTitle.value = $event : null),
                label: "Push Notification Title",
                help: "The title to use on any push notifications when actions are posted.",
                rules: "required",
                maxLength: 200
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(TextBox), {
                modelValue: unref(pushNotificationDetail),
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(pushNotificationDetail) ? pushNotificationDetail.value = $event : null),
                label: "Push Notification Detail",
                help: "The detail message to use on any push notifications when actions are posted.",
                rules: "required",
                maxLength: 1000
              }, null, 8, ["modelValue"])])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]), createVNode(unref(SectionContainer), {
              title: "Schedules",
              description: "Schedules determine when and where the experience occurs. You can also configure filters to determine who should be allowed to view an experience. These filters require that the individual is logged in."
            }, {
              default: withCtx(() => [createVNode(unref(RadioButtonList), {
                modelValue: campusBehavior.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => campusBehavior.value = $event),
                label: "Campus Behavior",
                items: campusBehaviorItems,
                rules: "required",
                horizontal: "",
                help: "<p>Determines the role of campus with the experience.</p><p>Filter Schedules will only show the schedules that match the individual's location using the geofence of the campuses. It will also use the geofence to determine which campus to use for the individual's interactions.</p><p>Dermine Campus will use the campus geofence to determine which campus to use for the individual's interactions.</p><p>Use Individual's Campus will not consider campus geofences and simply use the campus set on the individual.</p>"
              }, null, 8, ["modelValue"]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [unref(isDefaultCampusVisible) ? (openBlock(), createElementBlock("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createVNode(unref(CampusPicker), {
                  modelValue: defaultCampus.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => defaultCampus.value = $event),
                  label: "Default Campus",
                  forceVisible: "",
                  showBlankItem: "",
                  help: "The campus to use if no campus can be determined."
                }, null, 8, ["modelValue"])])])) : createCommentVNode("v-if", true)]),
                _: 1
              }), createElementVNode("table", _hoisted_13, [_hoisted_14, createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(schedules.value, row => {
                var _row$schedule, _row$dataView, _row$group;
                return openBlock(), createElementBlock("tr", null, [createElementVNode("td", null, toDisplayString((_row$schedule = row.schedule) === null || _row$schedule === void 0 ? void 0 : _row$schedule.text), 1), createElementVNode("td", null, toDisplayString(getScheduleCampusNames(row)), 1), createElementVNode("td", null, toDisplayString((_row$dataView = row.dataView) === null || _row$dataView === void 0 ? void 0 : _row$dataView.text), 1), createElementVNode("td", null, toDisplayString((_row$group = row.group) === null || _row$group === void 0 ? void 0 : _row$group.text), 1), createElementVNode("td", _hoisted_15, [createElementVNode("a", {
                  class: "btn btn-sm grid-edit-button",
                  onClick: withModifiers($event => onEditScheduleClick(row), ["prevent"])
                }, _hoisted_18, 8, _hoisted_16)]), createElementVNode("td", _hoisted_19, [createElementVNode("a", {
                  class: "btn btn-danger btn-sm grid-delete-button",
                  onClick: withModifiers($event => onDeleteScheduleClick(row), ["prevent"])
                }, _hoisted_22, 8, _hoisted_20)])]);
              }), 256)), !schedules.value.length ? (openBlock(), createElementBlock("tr", _hoisted_23, _hoisted_25)) : createCommentVNode("v-if", true)]), createElementVNode("tfoot", null, [createElementVNode("tr", null, [createElementVNode("td", _hoisted_26, [createElementVNode("a", {
                class: "btn btn-grid-action btn-add btn-default btn-sm",
                accesskey: "n",
                title: "Alt+N",
                href: "#",
                onClick: withModifiers(onAddScheduleClick, ["prevent"])
              }, _hoisted_29, 8, _hoisted_27)])])])])]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              title: "Welcome Content",
              description: "This optional content will be shown before the first action is displayed. It allows you to welcome your guest to the environment and let them know what to expect."
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_30, [createElementVNode("div", _hoisted_31, [createVNode(unref(TextBox), {
                modelValue: unref(welcomeTitle),
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(welcomeTitle) ? welcomeTitle.value = $event : null),
                label: "Title"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: unref(welcomeMessage),
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(welcomeMessage) ? welcomeMessage.value = $event : null),
                label: "Message",
                textMode: "multiline"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_32, [createVNode(unref(ImageUploader), {
                modelValue: unref(welcomeHeaderImage),
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isRef(welcomeHeaderImage) ? welcomeHeaderImage.value = $event : null),
                label: "Header Image",
                binaryFileTypeGuid: unref(binaryFileTypeGuid)
              }, null, 8, ["modelValue", "binaryFileTypeGuid"])])])]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              title: "No Actions Content",
              description: "This optional content will be shown when there are no active actions being displayed."
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_33, [createElementVNode("div", _hoisted_34, [createVNode(unref(TextBox), {
                modelValue: unref(noActionsTitle),
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isRef(noActionsTitle) ? noActionsTitle.value = $event : null),
                label: "Title"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: unref(noActionsMessage),
                "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isRef(noActionsMessage) ? noActionsMessage.value = $event : null),
                label: "Message",
                textMode: "multiline"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_35, [createVNode(unref(ImageUploader), {
                modelValue: unref(noActionsHeaderImage),
                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => isRef(noActionsHeaderImage) ? noActionsHeaderImage.value = $event : null),
                label: "Header Image",
                binaryFileTypeGuid: unref(binaryFileTypeGuid)
              }, null, 8, ["modelValue", "binaryFileTypeGuid"])])])]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              title: "Action Appearance",
              description: "The settings below can help override the default appearance on the individual devices to provide a custom theme for the experience."
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_36, [createElementVNode("div", _hoisted_37, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionBackgroundColor),
                "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => isRef(actionBackgroundColor) ? actionBackgroundColor.value = $event : null),
                label: "Background Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_38, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionTextColor),
                "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => isRef(actionTextColor) ? actionTextColor.value = $event : null),
                label: "Text Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_39, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionPrimaryButtonColor),
                "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => isRef(actionPrimaryButtonColor) ? actionPrimaryButtonColor.value = $event : null),
                label: "Primary Button Background Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_40, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionPrimaryButtonTextColor),
                "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => isRef(actionPrimaryButtonTextColor) ? actionPrimaryButtonTextColor.value = $event : null),
                label: "Primary Button Text Color"
              }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_41, [_hoisted_42, createElementVNode("div", _hoisted_43, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionSecondaryButtonColor),
                "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => isRef(actionSecondaryButtonColor) ? actionSecondaryButtonColor.value = $event : null),
                label: "Secondary Button Background Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_44, [createVNode(unref(ColorPicker), {
                modelValue: unref(actionSecondaryButtonTextColor),
                "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => isRef(actionSecondaryButtonTextColor) ? actionSecondaryButtonTextColor.value = $event : null),
                label: "Secondary Button Text Color"
              }, null, 8, ["modelValue"])])]), createVNode(unref(ImageUploader), {
                modelValue: unref(actionBackgroundImage),
                "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => isRef(actionBackgroundImage) ? actionBackgroundImage.value = $event : null),
                label: "Background Image",
                binaryFileTypeGuid: unref(binaryFileTypeGuid)
              }, null, 8, ["modelValue", "binaryFileTypeGuid"]), createElementVNode("div", _hoisted_45, [createElementVNode("a", {
                href: "#",
                class: "text-xs",
                onClick: withModifiers(onActionAdvancedOptionsClick, ["prevent"])
              }, [_hoisted_47, isActionAdvancedOptionsVisible.value ? (openBlock(), createElementBlock("i", _hoisted_48)) : (openBlock(), createElementBlock("i", _hoisted_49))], 8, _hoisted_46)]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [isActionAdvancedOptionsVisible.value ? (openBlock(), createElementBlock("div", _hoisted_50, [createVNode(unref(CodeEditor), {
                  modelValue: unref(actionCustomCss),
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => isRef(actionCustomCss) ? actionCustomCss.value = $event : null),
                  label: "Custom CSS",
                  mode: "css"
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              title: "Experience Ended",
              description: "This optional lava template will be shown after the experience has ended. The additional lava variables \"Occurrence\" and \"Experience\" are available."
            }, {
              default: withCtx(() => [createVNode(unref(CodeEditor), {
                modelValue: experienceEndedTemplate.value,
                "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => experienceEndedTemplate.value = $event),
                label: "Template",
                mode: "lava"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              title: "Audience Appearance",
              description: "The settings below can help override the default appearance on the audience visuals to provide a custom theme for the experience."
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_51, [createElementVNode("div", _hoisted_52, [createVNode(unref(ColorPicker), {
                modelValue: unref(audienceBackgroundColor),
                "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => isRef(audienceBackgroundColor) ? audienceBackgroundColor.value = $event : null),
                label: "Background Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_53, [createVNode(unref(ColorPicker), {
                modelValue: unref(audienceTextColor),
                "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => isRef(audienceTextColor) ? audienceTextColor.value = $event : null),
                label: "Text Color"
              }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_54, [createElementVNode("div", _hoisted_55, [createVNode(unref(ColorPicker), {
                modelValue: unref(audiencePrimaryColor),
                "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => isRef(audiencePrimaryColor) ? audiencePrimaryColor.value = $event : null),
                label: "Primary Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_56, [createVNode(unref(ColorPicker), {
                modelValue: unref(audienceSecondaryColor),
                "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => isRef(audienceSecondaryColor) ? audienceSecondaryColor.value = $event : null),
                label: "Secondary Color"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_57, [createVNode(unref(ColorPicker), {
                modelValue: unref(audienceAccentColor),
                "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => isRef(audienceAccentColor) ? audienceAccentColor.value = $event : null),
                label: "Accent Color"
              }, null, 8, ["modelValue"])])]), createVNode(unref(ImageUploader), {
                modelValue: unref(audienceBackgroundImage),
                "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => isRef(audienceBackgroundImage) ? audienceBackgroundImage.value = $event : null),
                label: "Background Image",
                binaryFileTypeGuid: unref(binaryFileTypeGuid)
              }, null, 8, ["modelValue", "binaryFileTypeGuid"]), createElementVNode("div", _hoisted_58, [createElementVNode("a", {
                href: "#",
                class: "text-xs",
                onClick: withModifiers(onAudienceAdvancedOptionsClick, ["prevent"])
              }, [_hoisted_60, isAudienceAdvancedOptionsVisible.value ? (openBlock(), createElementBlock("i", _hoisted_61)) : (openBlock(), createElementBlock("i", _hoisted_62))], 8, _hoisted_59)]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [isAudienceAdvancedOptionsVisible.value ? (openBlock(), createElementBlock("div", _hoisted_63, [createVNode(unref(CodeEditor), {
                  modelValue: unref(audienceCustomCss),
                  "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => isRef(audienceCustomCss) ? audienceCustomCss.value = $event : null),
                  label: "Custom CSS",
                  mode: "css"
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
                _: 1
              })]),
              _: 1
            })]), createVNode(unref(Modal), {
              modelValue: isScheduleModalVisible.value,
              "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => isScheduleModalVisible.value = $event),
              title: scheduleModalTitle.value,
              saveText: "OK",
              onSave: onSaveSchedule
            }, {
              default: withCtx(() => [createVNode(unref(ScheduleBuilder), {
                modelValue: scheduleContent.value,
                "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => scheduleContent.value = $event),
                label: "Schedule",
                help: "The schedule of when the experience is active.",
                rules: "required"
              }, null, 8, ["modelValue"]), createVNode(unref(SectionHeader), {
                title: "Filters",
                description: "Filters help to limit who will see experiences on the list those that are available."
              }), createVNode(unref(CampusPicker), {
                modelValue: unref(scheduleCampuses),
                "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => isRef(scheduleCampuses) ? scheduleCampuses.value = $event : null),
                label: "Campus",
                help: "Which campuses the experience is for. Leave blank to show for all campuses.",
                forceVisible: "",
                multiple: ""
              }, null, 8, ["modelValue"]), createVNode(unref(DataViewPicker), {
                modelValue: unref(scheduleDataView),
                "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => isRef(scheduleDataView) ? scheduleDataView.value = $event : null),
                label: "Data View",
                help: "A data view that the individual must be in to see the environment. It is highly encouraged that this data view be persisted for performance."
              }, null, 8, ["modelValue"]), createVNode(unref(GroupPicker), {
                modelValue: unref(scheduleGroup),
                "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => isRef(scheduleGroup) ? scheduleGroup.value = $event : null),
                label: "Group",
                help: "A group that the individual must be in to see the environment."
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["modelValue", "title"])], 64);
          };
        }
      });

      script$2.__file = "src/Event/InteractiveExperiences/InteractiveExperienceDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
        name: 'viewPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$sch;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addHtmlValue("Schedules", getSchedulesHtml((_props$modelValue$sch = props.modelValue.schedules) !== null && _props$modelValue$sch !== void 0 ? _props$modelValue$sch : []));
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          function getSchedulesHtml(schedules) {
            if (schedules.length === 0) {
              return "";
            }
            return "<ul>".concat(schedules.map(s => getScheduleHtml(s)).join(""), "</ul>");
          }
          function getScheduleHtml(schedule) {
            var _schedule$schedule;
            var html = ((_schedule$schedule = schedule.schedule) === null || _schedule$schedule === void 0 ? void 0 : _schedule$schedule.text) || "No Schedule";
            if (schedule.campuses && schedule.campuses.length > 0) {
              var campusNames = schedule.campuses.map(c => {
                var _c$text;
                return escapeHtml((_c$text = c.text) !== null && _c$text !== void 0 ? _c$text : "");
              }).join(", ");
              html += "<br /><span class=\"text-muted\">".concat(campusNames, "</span>");
            }
            if (schedule.dataView && schedule.dataView.text) {
              html += "<br /><span class=\"text-muted\">Data View: ".concat(escapeHtml(schedule.dataView.text), "</span>");
            }
            if (schedule.group && schedule.group.text) {
              html += "<br /><span class=\"text-muted\">Group: ".concat(escapeHtml(schedule.group.text), "</span>");
            }
            return "<li>".concat(html, "</li>");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Event/InteractiveExperiences/InteractiveExperienceDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'interactiveExperienceDetail',
        setup(__props) {
          var _interactiveExperienc, _interactiveExperienc2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var interactiveExperienceViewBag = ref(config.entity);
          var interactiveExperienceEditBag = ref({});
          var interactiveExperienceActions = ref((_interactiveExperienc = (_interactiveExperienc2 = interactiveExperienceViewBag.value) === null || _interactiveExperienc2 === void 0 ? void 0 : _interactiveExperienc2.actions) !== null && _interactiveExperienc !== void 0 ? _interactiveExperienc : []);
          var entityTypeGuid = EntityType.InteractiveExperience;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "campusBehavior", "defaultCampus", "actionBackgroundColor", "actionBackgroundImageBinaryFile", "actionCustomCss", "actionPrimaryButtonColor", "actionPrimaryButtonTextColor", "actionSecondaryButtonColor", "actionSecondaryButtonTextColor", "actionTextColor", "audienceAccentColor", "audienceBackgroundColor", "audienceBackgroundImageBinaryFile", "audienceCustomCss", "audiencePrimaryColor", "audienceSecondaryColor", "audienceTextColor", "description", "experienceEndedTemplate", "isActive", "name", "noActionHeaderImageBinaryFile", "noActionMessage", "noActionTitle", "photoBinaryFile", "publicLabel", "pushNotificationType", "pushNotificationTitle", "pushNotificationDetail", "schedules", "welcomeHeaderImageBinaryFile", "welcomeMessage", "welcomeTitle"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(interactiveExperienceEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _interactiveExperienc3, _interactiveExperienc4;
            return (_interactiveExperienc3 = (_interactiveExperienc4 = interactiveExperienceViewBag.value) === null || _interactiveExperienc4 === void 0 ? void 0 : _interactiveExperienc4.name) !== null && _interactiveExperienc3 !== void 0 ? _interactiveExperienc3 : "";
          });
          var entityKey = computed(() => {
            var _interactiveExperienc5, _interactiveExperienc6;
            return (_interactiveExperienc5 = (_interactiveExperienc6 = interactiveExperienceViewBag.value) === null || _interactiveExperienc6 === void 0 ? void 0 : _interactiveExperienc6.idKey) !== null && _interactiveExperienc5 !== void 0 ? _interactiveExperienc5 : "";
          });
          var blockLabels = computed(() => {
            var _interactiveExperienc7;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_interactiveExperienc7 = interactiveExperienceViewBag.value) === null || _interactiveExperienc7 === void 0 ? void 0 : _interactiveExperienc7.isActive) === true) {
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Active",
                type: "success"
              });
            } else {
              labels.push({
                iconCssClass: "far fa-lightbulb",
                title: "Inactive",
                type: "danger"
              });
            }
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var isActionListVisible = computed(() => {
            return !blockError.value && panelMode.value === DetailPanelMode.View && !!interactiveExperienceViewBag.value;
          });
          var actionTypes = computed(() => {
            var _config$options$actio, _config$options2;
            return (_config$options$actio = (_config$options2 = config.options) === null || _config$options2 === void 0 ? void 0 : _config$options2.actionTypes) !== null && _config$options$actio !== void 0 ? _config$options$actio : [];
          });
          var visualizerTypes = computed(() => {
            var _config$options$visua, _config$options3;
            return (_config$options$visua = (_config$options3 = config.options) === null || _config$options3 === void 0 ? void 0 : _config$options3.visualizerTypes) !== null && _config$options$visua !== void 0 ? _config$options$visua : [];
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _interactiveExperienc8;
              if (!((_interactiveExperienc8 = interactiveExperienceEditBag.value) !== null && _interactiveExperienc8 !== void 0 && _interactiveExperienc8.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  return config.navigationUrls[NavigationUrlKey.ParentPage];
                }
                return false;
              }
              return true;
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _interactiveExperienc9;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_interactiveExperienc9 = interactiveExperienceViewBag.value) === null || _interactiveExperienc9 === void 0 ? void 0 : _interactiveExperienc9.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete interactive experience.";
                return false;
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _interactiveExperienc10;
              var result = yield invokeBlockAction("Edit", {
                key: (_interactiveExperienc10 = interactiveExperienceViewBag.value) === null || _interactiveExperienc10 === void 0 ? void 0 : _interactiveExperienc10.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                interactiveExperienceEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return _onEdit.apply(this, arguments);
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: interactiveExperienceEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  var _interactiveExperienc11;
                  interactiveExperienceViewBag.value = result.data;
                  interactiveExperienceActions.value = (_interactiveExperienc11 = interactiveExperienceViewBag.value.actions) !== null && _interactiveExperienc11 !== void 0 ? _interactiveExperienc11 : [];
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save interactive experience.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified interactive experience could not be viewed.";
          } else if (!config.entity.idKey) {
            interactiveExperienceEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "InteractiveExperience",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: interactiveExperienceViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: interactiveExperienceEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => interactiveExperienceEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true), unref(isActionListVisible) ? (openBlock(), createBlock(unref(script$3), {
              key: 3,
              modelValue: interactiveExperienceActions.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => interactiveExperienceActions.value = $event),
              name: interactiveExperienceViewBag.value.name,
              interactiveExperienceIdKey: interactiveExperienceViewBag.value.idKey,
              actionTypes: unref(actionTypes),
              visualizerTypes: unref(visualizerTypes)
            }, null, 8, ["modelValue", "name", "interactiveExperienceIdKey", "actionTypes", "visualizerTypes"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Event/InteractiveExperiences/interactiveExperienceDetail.obs";

    })
  };
}));
//# sourceMappingURL=interactiveExperienceDetail.obs.js.map
