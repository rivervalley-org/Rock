System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/workflowTypePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/guid', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createCommentVNode, computed, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, CheckBox, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, provideSecurityGrant, propertyRef, updateRefValue, RadioButtonList, EntityTypePicker, TextBox, WorkflowTypePicker, DropDownList, toGuidOrNull, areEqual, emptyGuid, AttributeValuesContainer, ValueDetailList, ValueDetailListItemBuilder;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      WorkflowTypePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
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
        class: "well"
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
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          isEditable: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$isA, _props$modelValue$wor, _props$modelValue$ent, _props$modelValue$wor2, _props$modelValue$wor3, _props$modelValue$ent2, _props$modelValue$ent3, _props$modelValue$ent4, _props$modelValue$ent5, _props$modelValue$wor4, _props$modelValue$ent6, _props$modelValue$sho, _props$modelValue$qua;
          var emit = _ref.emit;
          var props = __props;
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var workflowTriggerType = propertyRef((_props$modelValue$wor = props.modelValue.workflowTriggerType) !== null && _props$modelValue$wor !== void 0 ? _props$modelValue$wor : "", "WorkflowTriggerType");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var workflowType = propertyRef((_props$modelValue$wor2 = props.modelValue.workflowType) !== null && _props$modelValue$wor2 !== void 0 ? _props$modelValue$wor2 : null, "WorkflowTypeId");
          var workflowName = propertyRef((_props$modelValue$wor3 = props.modelValue.workflowName) !== null && _props$modelValue$wor3 !== void 0 ? _props$modelValue$wor3 : "", "WorkflowName");
          var entityTypeQualifierColumn = propertyRef((_props$modelValue$ent2 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "", "EntityTypeQualifierColumn");
          var entityTypeQualifierValue = propertyRef((_props$modelValue$ent3 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "", "EntityTypeQualifierValue");
          var entityTypeQualifierValuePrevious = propertyRef((_props$modelValue$ent4 = props.modelValue.entityTypeQualifierValuePrevious) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : "", "EntityTypeQualifierValuePrevious");
          var entityTypeQualifierValueAlt = ref((_props$modelValue$ent5 = props.modelValue.entityTypeQualifierValueAlt) !== null && _props$modelValue$ent5 !== void 0 ? _props$modelValue$ent5 : "");
          var workflowTriggerTypes = ref((_props$modelValue$wor4 = props.modelValue.workflowTriggerTypes) !== null && _props$modelValue$wor4 !== void 0 ? _props$modelValue$wor4 : []);
          var qualifierValueLabel = ref((_props$modelValue$ent6 = props.modelValue.entityTypeQualifierValueLabel) !== null && _props$modelValue$ent6 !== void 0 ? _props$modelValue$ent6 : "Or value is");
          var showPreviousAndAltQualifierValueTextBoxes = ref((_props$modelValue$sho = props.modelValue.showPreviousAndAltQualifierValueTextBoxes) !== null && _props$modelValue$sho !== void 0 ? _props$modelValue$sho : true);
          var qualifierColumns = ref((_props$modelValue$qua = props.modelValue.qualifierColumns) !== null && _props$modelValue$qua !== void 0 ? _props$modelValue$qua : []);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [isActive, workflowTriggerType, entityType, workflowType, workflowName, entityTypeQualifierColumn, entityTypeQualifierValue, entityTypeQualifierValuePrevious];
          watch(() => entityTypeQualifierValue.value, () => {
            entityTypeQualifierValuePrevious.value = "";
            entityTypeQualifierValueAlt.value = "";
          });
          watch(() => [entityTypeQualifierValuePrevious.value, entityTypeQualifierValueAlt.value], () => {
            entityTypeQualifierValue.value = "";
          });
          watch(() => entityType.value, _asyncToGenerator(function* () {
            var entityTypeGuid = toGuidOrNull(entityType.value.value);
            if (!entityTypeGuid || areEqual(entityTypeGuid, emptyGuid)) {
              return;
            }
            var request = {
              entityTypeGuid
            };
            var result = yield invokeBlockAction("GetQualifierColumns", request);
            if (result.isSuccess && result.data) {
              var _result$data;
              qualifierColumns.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
            }
          }), {
            immediate: true
          });
          watch(() => workflowTriggerType.value, () => {
            if (!workflowTriggerType.value) {
              return;
            }
            var showPreviousField = false;
            if (workflowTriggerType.value == "PreSave" || workflowTriggerType.value == "PostSave" || workflowTriggerType.value == "ImmediatePostSave") {
              showPreviousField = true;
            }
            if (showPreviousField) {
              qualifierValueLabel.value = "Or value is";
              showPreviousAndAltQualifierValueTextBoxes.value = true;
            } else {
              qualifierValueLabel.value = "Value is";
              showPreviousAndAltQualifierValueTextBoxes.value = false;
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$isA2, _props$modelValue$wor5, _props$modelValue$ent7, _props$modelValue$wor6, _props$modelValue$wor7, _props$modelValue$ent8, _props$modelValue$ent9, _props$modelValue$ent10;
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(workflowTriggerType, (_props$modelValue$wor5 = props.modelValue.workflowTriggerType) !== null && _props$modelValue$wor5 !== void 0 ? _props$modelValue$wor5 : "");
            updateRefValue(entityType, (_props$modelValue$ent7 = props.modelValue.entityType) !== null && _props$modelValue$ent7 !== void 0 ? _props$modelValue$ent7 : {});
            updateRefValue(workflowType, (_props$modelValue$wor6 = props.modelValue.workflowType) !== null && _props$modelValue$wor6 !== void 0 ? _props$modelValue$wor6 : {});
            updateRefValue(workflowName, (_props$modelValue$wor7 = props.modelValue.workflowName) !== null && _props$modelValue$wor7 !== void 0 ? _props$modelValue$wor7 : "");
            updateRefValue(entityTypeQualifierColumn, (_props$modelValue$ent8 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent8 !== void 0 ? _props$modelValue$ent8 : "");
            updateRefValue(entityTypeQualifierValue, (_props$modelValue$ent9 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent9 !== void 0 ? _props$modelValue$ent9 : "");
            updateRefValue(entityTypeQualifierValuePrevious, (_props$modelValue$ent10 = props.modelValue.entityTypeQualifierValuePrevious) !== null && _props$modelValue$ent10 !== void 0 ? _props$modelValue$ent10 : "");
          });
          watch([...propRefs, entityTypeQualifierValueAlt], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              isActive: isActive.value,
              workflowTriggerType: workflowTriggerType.value,
              entityType: entityType.value,
              workflowType: workflowType.value,
              workflowName: workflowName.value,
              entityTypeQualifierColumn: entityTypeQualifierColumn.value,
              entityTypeQualifierValue: entityTypeQualifierValue.value,
              entityTypeQualifierValuePrevious: entityTypeQualifierValuePrevious.value,
              entityTypeQualifierValueAlt: entityTypeQualifierValueAlt.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(RadioButtonList), {
              label: "Trigger Type",
              help: "Determines when the trigger should be fired. 'Pre' events allow the workflow to cancel the action and notify the user. They should be used when the entity's original and new values need to be compared. 'Post' events are more efficient because they prevent the user interface from being blocked. 'Immediate Post Save' events are used when the workflow should run immediately and the entity ID is required.",
              modelValue: unref(workflowTriggerType),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(workflowTriggerType) ? workflowTriggerType.value = $event : null),
              items: workflowTriggerTypes.value,
              disabled: !__props.isEditable,
              horizontal: "",
              repeatColumns: 0
            }, null, 8, ["modelValue", "items", "disabled"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              disabled: !__props.isEditable,
              label: "Active"
            }, null, 8, ["modelValue", "disabled"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(EntityTypePicker), {
              label: "Entity Type",
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(entityType) ? entityType.value = $event : null),
              rules: "required",
              disabled: !__props.isEditable,
              multiple: false,
              includeGlobalOption: false
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(WorkflowTypePicker), {
              label: "Workflow Type",
              modelValue: unref(workflowType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(workflowType) ? workflowType.value = $event : null),
              disabled: !__props.isEditable,
              rules: "required",
              help: "The workflow type to run when a change occurs."
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              label: "Workflow Name",
              modelValue: unref(workflowName),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(workflowName) ? workflowName.value = $event : null),
              disabled: !__props.isEditable,
              help: "The name to use for each workflow created."
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(DropDownList), {
              label: "Entity Type Qualifier Column",
              modelValue: unref(entityTypeQualifierColumn),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(entityTypeQualifierColumn) ? entityTypeQualifierColumn.value = $event : null),
              help: "Optional: Provide a specific column that you want to use as a filter for the trigger. You must also provide a qualifier value for this filter to work.",
              items: qualifierColumns.value,
              showBlankItem: "",
              enhanceForLongLists: "",
              disabled: !__props.isEditable,
              multiple: false
            }, null, 8, ["modelValue", "items", "disabled"]), createElementVNode("div", _hoisted_7, [showPreviousAndAltQualifierValueTextBoxes.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(TextBox), {
              label: "Changing From",
              modelValue: unref(entityTypeQualifierValuePrevious),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(entityTypeQualifierValuePrevious) ? entityTypeQualifierValuePrevious.value = $event : null),
              disabled: !__props.isEditable,
              help: "Optional: Provide a specific previous value for the property to filter on. If left blank it means the new value must be different than its previous value (i.e. changed)."
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(TextBox), {
              label: "To",
              modelValue: entityTypeQualifierValueAlt.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => entityTypeQualifierValueAlt.value = $event),
              disabled: !__props.isEditable,
              help: "Optional: Provide a specific value for the property to filter on.  If left blank it means the previous value must be different than its new value (i.e. changed)."
            }, null, 8, ["modelValue", "disabled"])])])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
              label: qualifierValueLabel.value,
              modelValue: unref(entityTypeQualifierValue),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(entityTypeQualifierValue) ? entityTypeQualifierValue.value = $event : null),
              disabled: !__props.isEditable,
              help: "Optional: Provide a specific value for the property to filter on."
            }, null, 8, ["label", "modelValue", "disabled"])])])])]);
          };
        }
      });

      script$2.__file = "src/WorkFlow/WorkflowTriggerDetail/editPanel.partial.obs";

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
          }
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var _props$modelValue$wor;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.workflowName) {
              valueBuilder.addTextValue("Workflow Name", props.modelValue.workflowName);
            }
            if ((_props$modelValue$wor = props.modelValue.workflowType) !== null && _props$modelValue$wor !== void 0 && _props$modelValue$wor.text) {
              var _props$modelValue$wor2;
              valueBuilder.addTextValue("Workflow Type", (_props$modelValue$wor2 = props.modelValue.workflowType) === null || _props$modelValue$wor2 === void 0 ? void 0 : _props$modelValue$wor2.text);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
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

      script$1.__file = "src/WorkFlow/WorkflowTriggerDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'workflowTriggerDetail',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var workflowTriggerBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var readOnlyMessage = ref(config.readonlyNotificationMessage);
          var entityTypeGuid = EntityType.WorkflowTrigger;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["entityType", "entityTypeId", "entityTypeQualifierColumn", "entityTypeQualifierValue", "entityTypeQualifierValuePrevious", "isActive", "workflowName", "workflowTriggerType", "workflowType", "workflowTypeId"];
          var panelName = computed(() => {
            var _config$entity$workfl, _config$entity2;
            return (_config$entity$workfl = (_config$entity2 = config.entity) === null || _config$entity2 === void 0 ? void 0 : _config$entity2.workflowName) !== null && _config$entity$workfl !== void 0 ? _config$entity$workfl : "";
          });
          var entityKey = computed(() => {
            var _workflowTriggerBag$v, _workflowTriggerBag$v2;
            return (_workflowTriggerBag$v = (_workflowTriggerBag$v2 = workflowTriggerBag.value) === null || _workflowTriggerBag$v2 === void 0 ? void 0 : _workflowTriggerBag$v2.idKey) !== null && _workflowTriggerBag$v !== void 0 ? _workflowTriggerBag$v : "";
          });
          var blockLabels = computed(() => {
            var _workflowTriggerBag$v3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_workflowTriggerBag$v3 = workflowTriggerBag.value) === null || _workflowTriggerBag$v3 === void 0 ? void 0 : _workflowTriggerBag$v3.isActive) === true) {
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
            var _workflowTriggerBag$v4;
            return config.isEditable === true && ((_workflowTriggerBag$v4 = workflowTriggerBag.value) === null || _workflowTriggerBag$v4 === void 0 ? void 0 : _workflowTriggerBag$v4.isSystem) !== true;
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _workflowTriggerBag$v5;
              if (!((_workflowTriggerBag$v5 = workflowTriggerBag.value) !== null && _workflowTriggerBag$v5 !== void 0 && _workflowTriggerBag$v5.idKey)) {
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
              var _workflowTriggerBag$v6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_workflowTriggerBag$v6 = workflowTriggerBag.value) === null || _workflowTriggerBag$v6 === void 0 ? void 0 : _workflowTriggerBag$v6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete workflow trigger.";
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
              var _workflowTriggerBag$v7;
              var result = yield invokeBlockAction("Edit", {
                key: (_workflowTriggerBag$v7 = workflowTriggerBag.value) === null || _workflowTriggerBag$v7 === void 0 ? void 0 : _workflowTriggerBag$v7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                workflowTriggerBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return _onEdit.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              if (!isEditable.value) {
                return false;
              }
              var data = {
                entity: workflowTriggerBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  workflowTriggerBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save workflow trigger.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified workflow trigger could not be viewed.";
          } else if (!config.entity.idKey) {
            workflowTriggerBag.value = config.entity;
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
            })) : createCommentVNode("v-if", true), readOnlyMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: "info",
              innerHTML: readOnlyMessage.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 3,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "WorkflowTrigger",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: workflowTriggerBag.value
              }, null, 8, ["modelValue"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: workflowTriggerBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => workflowTriggerBag.value = $event),
                isEditable: unref(isEditable)
              }, null, 8, ["modelValue", "isEditable"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/WorkFlow/workflowTriggerDetail.obs";

    })
  };
}));
//# sourceMappingURL=workflowTriggerDetail.obs.js.map
