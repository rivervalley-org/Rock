System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/panel.obs', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/workflowTypePicker.obs', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/colorPicker.obs', '@Obsidian/Controls/grid', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Controls/chart.obs', '@Obsidian/Controls/auditDetail.obs', '@Obsidian/Utility/util', '@Obsidian/Utility/url', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, reactive, computed, watch, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, withDirectives, Fragment, renderList, toDisplayString, vShow, createCommentVNode, createBlock, createSlots, NotificationBox, EntityType, Panel, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, CategoryPicker, RadioButtonList, Modal, DropDownList, WorkflowTypePicker, AttributeEditor, RockButton, RockForm, ColorPicker, Grid, TextColumn, BooleanColumn, EditColumn, DeleteColumn, watchPropertyChanges, useInvokeBlockAction, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, onConfigurationValuesChanged, useReloadBlock, propertyRef, updateRefValue, BtnType, BtnSize, toNumber, SlidingDateRangePicker, RangeType, TimeUnit, slidingDateRangeToString, Chart, AuditDetail, debounce, makeUrlRedirectSafe, showSecurity, confirmDelete;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      reactive = module.reactive;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      vShow = module.vShow;
      createCommentVNode = module.createCommentVNode;
      createBlock = module.createBlock;
      createSlots = module.createSlots;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      WorkflowTypePicker = module["default"];
    }, function (module) {
      AttributeEditor = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      BooleanColumn = module.BooleanColumn;
      EditColumn = module.EditColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      RangeType = module.RangeType;
      TimeUnit = module.TimeUnit;
      slidingDateRangeToString = module.slidingDateRangeToString;
    }, function (module) {
      Chart = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      showSecurity = module.showSecurity;
      confirmDelete = module.confirmDelete;
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

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "col-md-6"
      };
      var _hoisted_3$2 = {
        class: "col-md-6"
      };
      var _hoisted_4$2 = {
        class: "row"
      };
      var _hoisted_5$2 = {
        class: "col-md-6"
      };
      var _hoisted_6$2 = {
        class: "col-md-6"
      };
      var _hoisted_7$2 = {
        class: "panel-body"
      };
      var _hoisted_8$1 = {
        class: "grid grid-panel"
      };
      var _hoisted_9$1 = createTextVNode(" Please correct the following: ");
      var _hoisted_10$1 = createTextVNode("Save");
      var _hoisted_11 = {
        class: "panel-body"
      };
      var _hoisted_12 = {
        class: "grid grid-panel"
      };
      var _hoisted_13 = {
        class: "row"
      };
      var _hoisted_14 = {
        class: "col-md-6"
      };
      var _hoisted_15 = {
        class: "col-md-6"
      };
      var _hoisted_16 = createTextVNode("Add");
      var _hoisted_17 = {
        class: "panel-body"
      };
      var _hoisted_18 = {
        class: "grid grid-panel"
      };
      var _hoisted_19 = {
        class: "row"
      };
      var _hoisted_20 = {
        class: "col-md-6"
      };
      var _hoisted_21 = {
        class: "col-md-6"
      };
      var _hoisted_22 = {
        key: 0,
        class: "row"
      };
      var _hoisted_23 = {
        class: "col-md-6"
      };
      var _hoisted_24 = createElementVNode("div", {
        class: "col-md-6"
      }, null, -1);
      var _hoisted_25 = createTextVNode("Save");
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$ico, _props$modelValue$def, _props$modelValue$def2, _props$options$viewMo, _props$modelValue$sta, _props$options$trigge, _props$modelValue$sta2, _props$modelValue$wor, _props$modelValue$ste;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var iconCssClass = propertyRef((_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "", "iconCssClass");
          var category = propertyRef(props.modelValue.category, "Category");
          var defaultListView = propertyRef((_props$modelValue$def = (_props$modelValue$def2 = props.modelValue.defaultListView) === null || _props$modelValue$def2 === void 0 ? void 0 : _props$modelValue$def2.toString()) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : {}, "DefaultListView");
          var viewModes = ref((_props$options$viewMo = props.options.viewModes) !== null && _props$options$viewMo !== void 0 ? _props$options$viewMo : []);
          var stepStatuses = ref((_props$modelValue$sta = props.modelValue.statuses) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : []);
          var isStatusModalOpen = ref(false);
          var saveStatus = ref(false);
          var stepStatusId = ref(0);
          var stepStatusName = ref("");
          var stepStatusDisplayColor = ref("");
          var isActiveStepStatus = ref(true);
          var isCompleteStepStatus = ref(false);
          var isWorkflowModalOpen = ref(false);
          var triggerType = ref("");
          var triggerTypes = ref((_props$options$trigge = props.options.triggerTypes) !== null && _props$options$trigge !== void 0 ? _props$options$trigge : []);
          var stepStatusOptions = ref((_props$modelValue$sta2 = props.modelValue.statusOptions) !== null && _props$modelValue$sta2 !== void 0 ? _props$modelValue$sta2 : []);
          var primaryQualifier = ref("");
          var secondaryQualifier = ref("");
          var workflow = ref({});
          var workflows = ref((_props$modelValue$wor = props.modelValue.workflowTriggers) !== null && _props$modelValue$wor !== void 0 ? _props$modelValue$wor : []);
          var saveWorkflow = ref(false);
          var stepProgramAttributes = ref((_props$modelValue$ste = props.modelValue.stepProgramAttributes) !== null && _props$modelValue$ste !== void 0 ? _props$modelValue$ste : []);
          var isAttributeModalOpen = ref(false);
          var saveAttribute = ref(false);
          var stepAttribute = ref(null);
          var reservedKeyNames = ref([]);
          var attributeErrors = ref([]);
          var propRefs = [description, isActive, name, iconCssClass, category, defaultListView];
          var attributesGridData = reactive({
            rows: stepProgramAttributes.value.map(x => convertToAttributeGridRowItem(x))
          });
          var workflowGridData = reactive({
            rows: workflows.value.map(x => convertToWorkflowGridRowItem(x))
          });
          var statusesGridData = reactive({
            rows: stepStatuses.value.map(x => convertToStatusGridRowItem(x))
          });
          var showQualifiers = computed(() => {
            return triggerType.value === "StatusChanged";
          });
          function convertToAttributeGridRowItem(attribute) {
            if (attribute.key && !reservedKeyNames.value.includes(attribute.key)) {
              reservedKeyNames.value.push(attribute.key);
            }
            return {
              key: attribute.key,
              name: attribute.name,
              description: attribute.description,
              isRequired: attribute.isRequired
            };
          }
          function convertToWorkflowGridRowItem(workflow) {
            var _workflow$workflowTyp, _workflow$workflowTri;
            return {
              key: workflow.idKey,
              workflowType: (_workflow$workflowTyp = workflow.workflowType) === null || _workflow$workflowTyp === void 0 ? void 0 : _workflow$workflowTyp.text,
              workflowTrigger: (_workflow$workflowTri = workflow.workflowTrigger) === null || _workflow$workflowTri === void 0 ? void 0 : _workflow$workflowTri.text
            };
          }
          function convertToStatusGridRowItem(stepStatus) {
            return {
              key: stepStatus.id,
              name: stepStatus.name,
              isCompleteStatus: stepStatus.isCompleteStatus
            };
          }
          function resetWorkflowForm() {
            workflow.value = {};
            triggerType.value = "";
            primaryQualifier.value = "";
            secondaryQualifier.value = "";
          }
          function resetStepStatusForm() {
            stepStatusId.value = 0;
            stepStatusName.value = "";
            isActiveStepStatus.value = true;
            isCompleteStepStatus.value = false;
            stepStatusDisplayColor.value = "";
          }
          function getTriggerDescription(triggerType, primaryQualifier, secondaryQualifier) {
            if (triggerType == "StatusChanged") {
              var _status, _status2;
              var status = stepStatusOptions.value.find(x => x.value == primaryQualifier);
              var fromStatus = !((_status = status) !== null && _status !== void 0 && _status.text) ? "[Any]" : status.text;
              status = stepStatusOptions.value.find(x => x.value == secondaryQualifier);
              var toStatus = !((_status2 = status) !== null && _status2 !== void 0 && _status2.text) ? "[Any]" : status.text;
              var _description = "Status Change: ".concat(fromStatus, " to ").concat(toStatus);
              return _description;
            } else if (triggerType == "IsComplete") {
              return "Step Completed";
            } else {
              return triggerType;
            }
          }
          function onAddAttribute() {
            return _onAddAttribute.apply(this, arguments);
          }
          function _onAddAttribute() {
            _onAddAttribute = _asyncToGenerator(function* () {
              stepAttribute.value = {};
              isAttributeModalOpen.value = true;
              attributeErrors.value = [];
            });
            return _onAddAttribute.apply(this, arguments);
          }
          var onEditAttribute = function () {
            var _ref2 = _asyncToGenerator(function* (key) {
              attributeErrors.value = [];
              var selectedSiteAttribute = stepProgramAttributes.value.find(x => x.key === key);
              if (selectedSiteAttribute) {
                stepAttribute.value = selectedSiteAttribute;
                isAttributeModalOpen.value = true;
                reservedKeyNames.value = reservedKeyNames.value.filter(x => x !== selectedSiteAttribute.key);
              } else {
                onAddAttribute();
              }
            });
            return function onEditAttribute(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var onDeleteAttribute = function () {
            var _ref3 = _asyncToGenerator(function* (key) {
              isAttributeModalOpen.value = false;
              var deletedAttribute = stepProgramAttributes.value.find(s => s.key == key);
              stepProgramAttributes.value = stepProgramAttributes.value.filter(s => s.key !== key);
              workflows.value = workflows.value.filter(s => s.idKey !== key);
              if (deletedAttribute && !deletedAttribute.guid) {
                reservedKeyNames.value = reservedKeyNames.value.filter(k => k !== deletedAttribute.key);
              }
              if (attributesGridData.rows) {
                var index = attributesGridData.rows.findIndex(r => r.key === key);
                if (index !== -1) {
                  var _attributesGridData$r;
                  (_attributesGridData$r = attributesGridData.rows) === null || _attributesGridData$r === void 0 ? void 0 : _attributesGridData$r.splice(index, 1);
                }
              }
            });
            return function onDeleteAttribute(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          function onSaveAttribute() {
            if (stepAttribute.value) {
              var index = stepProgramAttributes.value.findIndex(a => {
                var _stepAttribute$value;
                return a.key === ((_stepAttribute$value = stepAttribute.value) === null || _stepAttribute$value === void 0 ? void 0 : _stepAttribute$value.key);
              });
              if (index !== -1) {
                var _attributesGridData$r2;
                var editedAttribute = stepProgramAttributes.value.find(a => {
                  var _stepAttribute$value2;
                  return a.key == ((_stepAttribute$value2 = stepAttribute.value) === null || _stepAttribute$value2 === void 0 ? void 0 : _stepAttribute$value2.key);
                });
                var rowItem = (_attributesGridData$r2 = attributesGridData.rows) === null || _attributesGridData$r2 === void 0 ? void 0 : _attributesGridData$r2.find(x => {
                  var _stepAttribute$value3;
                  return x.key == ((_stepAttribute$value3 = stepAttribute.value) === null || _stepAttribute$value3 === void 0 ? void 0 : _stepAttribute$value3.key);
                });
                if (editedAttribute) {
                  editedAttribute = stepAttribute.value;
                  stepProgramAttributes.value.splice(index, 1, editedAttribute);
                }
                if (rowItem && attributesGridData.rows && editedAttribute) {
                  var _attributesGridData$r3;
                  var rowIndex = attributesGridData.rows.findIndex(r => {
                    var _stepAttribute$value4;
                    return r.key === ((_stepAttribute$value4 = stepAttribute.value) === null || _stepAttribute$value4 === void 0 ? void 0 : _stepAttribute$value4.key);
                  });
                  rowItem = convertToAttributeGridRowItem(editedAttribute);
                  (_attributesGridData$r3 = attributesGridData.rows) === null || _attributesGridData$r3 === void 0 ? void 0 : _attributesGridData$r3.splice(rowIndex, 1, rowItem);
                }
              } else {
                var _attributesGridData$r4;
                stepProgramAttributes.value.push(stepAttribute.value);
                var newRowItem = convertToAttributeGridRowItem(stepAttribute.value);
                (_attributesGridData$r4 = attributesGridData.rows) === null || _attributesGridData$r4 === void 0 ? void 0 : _attributesGridData$r4.push(newRowItem);
              }
              isAttributeModalOpen.value = false;
            }
          }
          var onStartSaveAttribute = () => {
            var _stepAttribute$value$, _stepAttribute$value5, _stepAttribute$value6;
            attributeErrors.value = [];
            var isExistingKey = reservedKeyNames.value.includes((_stepAttribute$value$ = (_stepAttribute$value5 = stepAttribute.value) === null || _stepAttribute$value5 === void 0 ? void 0 : _stepAttribute$value5.key) !== null && _stepAttribute$value$ !== void 0 ? _stepAttribute$value$ : "") && !((_stepAttribute$value6 = stepAttribute.value) !== null && _stepAttribute$value6 !== void 0 && _stepAttribute$value6.guid);
            saveAttribute.value = !isExistingKey;
            if (isExistingKey) {
              attributeErrors.value.push("There is already an existing property with the key value you entered or the key has illegal characters. Please select a different key value and use only letters, numbers and underscores.");
            }
          };
          var onAddWorkflow = () => {
            resetWorkflowForm();
            isWorkflowModalOpen.value = true;
          };
          var onEditWorkflow = key => {
            var selectedWorkflow = workflows.value.find(x => x.idKey == key);
            if (selectedWorkflow) {
              var _selectedWorkflow$wor, _selectedWorkflow$wor2, _selectedWorkflow$pri, _selectedWorkflow$sec;
              workflow.value = selectedWorkflow;
              triggerType.value = (_selectedWorkflow$wor = (_selectedWorkflow$wor2 = selectedWorkflow.workflowTrigger) === null || _selectedWorkflow$wor2 === void 0 ? void 0 : _selectedWorkflow$wor2.value) !== null && _selectedWorkflow$wor !== void 0 ? _selectedWorkflow$wor : "";
              primaryQualifier.value = (_selectedWorkflow$pri = selectedWorkflow.primaryQualifier) !== null && _selectedWorkflow$pri !== void 0 ? _selectedWorkflow$pri : "";
              secondaryQualifier.value = (_selectedWorkflow$sec = selectedWorkflow.secondaryQualifier) !== null && _selectedWorkflow$sec !== void 0 ? _selectedWorkflow$sec : "";
            }
            isWorkflowModalOpen.value = true;
          };
          var onDeleteWorkflow = function () {
            var _ref4 = _asyncToGenerator(function* (key) {
              isWorkflowModalOpen.value = false;
              workflows.value = workflows.value.filter(s => s.idKey !== key);
              if (workflowGridData.rows) {
                var index = workflowGridData.rows.findIndex(r => r.key === key);
                if (index !== -1) {
                  var _workflowGridData$row;
                  (_workflowGridData$row = workflowGridData.rows) === null || _workflowGridData$row === void 0 ? void 0 : _workflowGridData$row.splice(index, 1);
                }
              }
            });
            return function onDeleteWorkflow(_x3) {
              return _ref4.apply(this, arguments);
            };
          }();
          var onSaveWorkflow = () => {
            var _workflow$value$workf;
            isWorkflowModalOpen.value = false;
            var selectedTriggerType = triggerTypes.value.find(t => t.value == triggerType.value);
            if (triggerType.value && (_workflow$value$workf = workflow.value.workflowType) !== null && _workflow$value$workf !== void 0 && _workflow$value$workf.value && workflowGridData.rows && selectedTriggerType !== null && selectedTriggerType !== void 0 && selectedTriggerType.value) {
              var index = workflows.value.findIndex(a => a.idKey === workflow.value.idKey);
              var workflowTrigger = {
                text: getTriggerDescription(triggerType.value, primaryQualifier.value, secondaryQualifier.value),
                value: selectedTriggerType.value
              };
              if (index !== -1) {
                var editedWorkflowTrigger = workflows.value.find(a => a.idKey == workflow.value.idKey);
                var rowItem = workflowGridData.rows.find(x => x.key == workflow.value.idKey);
                if (editedWorkflowTrigger && rowItem) {
                  var _workflowGridData$row2;
                  editedWorkflowTrigger.workflowTrigger = workflowTrigger;
                  editedWorkflowTrigger.primaryQualifier = primaryQualifier.value;
                  editedWorkflowTrigger.secondaryQualifier = secondaryQualifier.value;
                  workflows.value.splice(index, 1, editedWorkflowTrigger);
                  var rowIndex = workflowGridData.rows.findIndex(r => r.key === workflow.value.idKey);
                  rowItem = convertToWorkflowGridRowItem(editedWorkflowTrigger);
                  (_workflowGridData$row2 = workflowGridData.rows) === null || _workflowGridData$row2 === void 0 ? void 0 : _workflowGridData$row2.splice(rowIndex, 1, rowItem);
                }
              } else {
                var currentLength = workflows.value.length + 1;
                var newWorkflow = {
                  workflowTrigger: workflowTrigger,
                  workflowType: workflow.value.workflowType,
                  primaryQualifier: primaryQualifier.value,
                  secondaryQualifier: secondaryQualifier.value,
                  idKey: currentLength.toString()
                };
                workflows.value.push(newWorkflow);
                var newRowItem = convertToWorkflowGridRowItem(newWorkflow);
                workflowGridData.rows.push(newRowItem);
              }
            }
            resetWorkflowForm();
          };
          var onStartSaveWorkflow = () => {
            saveWorkflow.value = true;
          };
          var onAddStatus = () => {
            resetStepStatusForm();
            isStatusModalOpen.value = true;
          };
          var onEditStatus = key => {
            var selectedStepStatus = stepStatuses.value.find(x => x.id == toNumber(key));
            if (selectedStepStatus) {
              var _selectedStepStatus$n, _selectedStepStatus$i, _selectedStepStatus$i2, _selectedStepStatus$s;
              stepStatusId.value = selectedStepStatus.id;
              stepStatusName.value = (_selectedStepStatus$n = selectedStepStatus.name) !== null && _selectedStepStatus$n !== void 0 ? _selectedStepStatus$n : "";
              isActiveStepStatus.value = (_selectedStepStatus$i = selectedStepStatus.isActive) !== null && _selectedStepStatus$i !== void 0 ? _selectedStepStatus$i : true;
              isCompleteStepStatus.value = (_selectedStepStatus$i2 = selectedStepStatus.isCompleteStatus) !== null && _selectedStepStatus$i2 !== void 0 ? _selectedStepStatus$i2 : false;
              stepStatusDisplayColor.value = (_selectedStepStatus$s = selectedStepStatus.statusColor) !== null && _selectedStepStatus$s !== void 0 ? _selectedStepStatus$s : "";
            }
            isStatusModalOpen.value = true;
          };
          var onDeleteStatus = function () {
            var _ref5 = _asyncToGenerator(function* (key) {
              isStatusModalOpen.value = false;
              stepStatuses.value = stepStatuses.value.filter(s => s.id !== toNumber(key));
              if (statusesGridData.rows) {
                var index = statusesGridData.rows.findIndex(r => r.key == key);
                if (index !== -1) {
                  var _statusesGridData$row;
                  (_statusesGridData$row = statusesGridData.rows) === null || _statusesGridData$row === void 0 ? void 0 : _statusesGridData$row.splice(index, 1);
                }
              }
            });
            return function onDeleteStatus(_x4) {
              return _ref5.apply(this, arguments);
            };
          }();
          var onSaveStatus = () => {
            isStatusModalOpen.value = false;
            if (stepStatusName.value && statusesGridData.rows) {
              var index = stepStatuses.value.findIndex(a => a.id === stepStatusId.value);
              if (index !== -1) {
                var editedStatus = stepStatuses.value.find(a => a.id == stepStatusId.value);
                var rowItem = statusesGridData.rows.find(x => x.key == stepStatusId.value);
                if (editedStatus && rowItem) {
                  var _statusesGridData$row2;
                  editedStatus.name = stepStatusName.value;
                  editedStatus.isActive = isActiveStepStatus.value;
                  editedStatus.isCompleteStatus = isCompleteStepStatus.value;
                  editedStatus.statusColor = stepStatusDisplayColor.value;
                  stepStatuses.value.splice(index, 1, editedStatus);
                  var rowIndex = statusesGridData.rows.findIndex(r => r.key === stepStatusId.value);
                  rowItem = convertToStatusGridRowItem(editedStatus);
                  (_statusesGridData$row2 = statusesGridData.rows) === null || _statusesGridData$row2 === void 0 ? void 0 : _statusesGridData$row2.splice(rowIndex, 1, rowItem);
                }
              } else {
                var currentLength = stepStatuses.value.length + 1;
                var stepStatus = {
                  name: stepStatusName.value,
                  isActive: isActiveStepStatus.value,
                  isCompleteStatus: isCompleteStepStatus.value,
                  statusColor: stepStatusDisplayColor.value,
                  id: currentLength
                };
                stepStatuses.value.push(stepStatus);
                var newRowItem = convertToStatusGridRowItem(stepStatus);
                statusesGridData.rows.push(newRowItem);
              }
            }
            resetStepStatusForm();
          };
          var onStartSaveStatus = () => {
            saveStatus.value = true;
          };
          watch(() => isAttributeModalOpen.value, () => {
            var _stepAttribute$value7;
            if (!isAttributeModalOpen.value && (_stepAttribute$value7 = stepAttribute.value) !== null && _stepAttribute$value7 !== void 0 && _stepAttribute$value7.key) {
              var _stepAttribute$value$2, _stepAttribute$value8;
              var key = (_stepAttribute$value$2 = (_stepAttribute$value8 = stepAttribute.value) === null || _stepAttribute$value8 === void 0 ? void 0 : _stepAttribute$value8.key) !== null && _stepAttribute$value$2 !== void 0 ? _stepAttribute$value$2 : "";
              if (!reservedKeyNames.value.includes(key) && stepProgramAttributes.value.find(x => x.key == key)) {
                reservedKeyNames.value.push(key);
              }
              stepAttribute.value = null;
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$ico2, _props$modelValue$def3;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(iconCssClass, (_props$modelValue$ico2 = props.modelValue.iconCssClass) !== null && _props$modelValue$ico2 !== void 0 ? _props$modelValue$ico2 : "");
            updateRefValue(defaultListView, (_props$modelValue$def3 = props.modelValue.defaultListView.toString()) !== null && _props$modelValue$def3 !== void 0 ? _props$modelValue$def3 : "");
            updateRefValue(category, props.modelValue.category);
          });
          watch([attributeValues, workflows, stepStatuses, stepProgramAttributes, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              iconCssClass: iconCssClass.value,
              category: category.value,
              stepProgramAttributes: stepProgramAttributes.value,
              statuses: stepStatuses.value,
              workflowTriggers: workflows.value,
              defaultListView: toNumber(defaultListView.value)
            });
            emit("update:modelValue", newValue);
          }, {
            deep: true
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$2, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4$2, [createElementVNode("div", _hoisted_5$2, [createVNode(unref(TextBox), {
              modelValue: unref(iconCssClass),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(iconCssClass) ? iconCssClass.value = $event : null),
              label: "Icon CSS Class"
            }, null, 8, ["modelValue"]), createVNode(unref(CategoryPicker), {
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(category) ? category.value = $event : null),
              label: "Category",
              entityTypeGuid: unref(EntityType).StepProgram
            }, null, 8, ["modelValue", "entityTypeGuid"])]), createElementVNode("div", _hoisted_6$2, [createVNode(unref(RadioButtonList), {
              label: "Default List View",
              modelValue: unref(defaultListView),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(defaultListView) ? defaultListView.value = $event : null),
              items: viewModes.value,
              horizontal: ""
            }, null, 8, ["modelValue", "items"])])]), createVNode(unref(Panel), {
              title: "Step Type Attributes",
              hasCollapse: true,
              isDrawerOpen: true
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_7$2, [createElementVNode("div", _hoisted_8$1, [createVNode(unref(Grid), {
                data: attributesGridData,
                keyField: "key",
                itemTerm: "Step Type Attribute",
                liveUpdates: "",
                light: "",
                onAddItem: onAddAttribute
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "name",
                  field: "name",
                  title: "Attribute"
                }), createVNode(unref(TextColumn), {
                  name: "description",
                  field: "description",
                  title: "Description"
                }), createVNode(unref(BooleanColumn), {
                  name: "isRequired",
                  field: "isRequired",
                  title: "Required"
                }), createVNode(unref(EditColumn), {
                  onClick: onEditAttribute
                }), createVNode(unref(DeleteColumn), {
                  onClick: onDeleteAttribute,
                  disableConfirmation: ""
                })]),
                _: 1
              }, 8, ["data"])])]), createVNode(unref(Modal), {
                modelValue: isAttributeModalOpen.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isAttributeModalOpen.value = $event),
                title: "Step Participant Attributes"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSaveAttribute
                }, {
                  default: withCtx(() => [_hoisted_10$1]),
                  _: 1
                }, 8, ["btnSize", "btnType"])]),
                default: withCtx(() => [createVNode(unref(RockForm), {
                  submit: saveAttribute.value,
                  "onUpdate:submit": _cache[7] || (_cache[7] = $event => saveAttribute.value = $event),
                  onSubmit: onSaveAttribute
                }, {
                  default: withCtx(() => [withDirectives(createVNode(unref(NotificationBox), {
                    alertType: "validation"
                  }, {
                    default: withCtx(() => [_hoisted_9$1, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(attributeErrors.value, error => {
                      return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
                    }), 256))])]),
                    _: 1
                  }, 512), [[vShow, attributeErrors.value.length > 0]]), createVNode(unref(AttributeEditor), {
                    modelValue: stepAttribute.value,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => stepAttribute.value = $event),
                    reservedKeyNames: reservedKeyNames.value
                  }, null, 8, ["modelValue", "reservedKeyNames"])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(Panel), {
              title: "Statuses",
              hasCollapse: true,
              isDrawerOpen: true
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createVNode(unref(Grid), {
                data: statusesGridData,
                keyField: "key",
                itemTerm: "Page Attribute",
                liveUpdates: "",
                light: "",
                onAddItem: onAddStatus
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "name",
                  field: "name",
                  title: "Name"
                }), createVNode(unref(BooleanColumn), {
                  name: "isCompleteStatus",
                  field: "isCompleteStatus",
                  title: "Completion"
                }), createVNode(unref(EditColumn), {
                  onClick: onEditStatus
                }), createVNode(unref(DeleteColumn), {
                  onClick: onDeleteStatus,
                  disableConfirmation: ""
                })]),
                _: 1
              }, 8, ["data"])])]), createVNode(unref(Modal), {
                modelValue: isStatusModalOpen.value,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isStatusModalOpen.value = $event),
                title: "Create Status"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSaveStatus
                }, {
                  default: withCtx(() => [_hoisted_16]),
                  _: 1
                }, 8, ["btnSize", "btnType"])]),
                default: withCtx(() => [createVNode(unref(RockForm), {
                  submit: saveStatus.value,
                  "onUpdate:submit": _cache[13] || (_cache[13] = $event => saveStatus.value = $event),
                  onSubmit: onSaveStatus
                }, {
                  default: withCtx(() => [createElementVNode("fieldset", null, [createElementVNode("div", _hoisted_13, [createElementVNode("div", _hoisted_14, [createVNode(unref(TextBox), {
                    modelValue: stepStatusName.value,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => stepStatusName.value = $event),
                    items: triggerTypes.value,
                    label: "Name",
                    rules: "required"
                  }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_15, [createVNode(unref(CheckBox), {
                    modelValue: isActiveStepStatus.value,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isActiveStepStatus.value = $event),
                    label: "Active"
                  }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                    modelValue: isCompleteStepStatus.value,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isCompleteStepStatus.value = $event),
                    label: "Is Complete",
                    help: "Does this status indicate that the step has been completed?"
                  }, null, 8, ["modelValue"]), createVNode(unref(ColorPicker), {
                    modelValue: stepStatusDisplayColor.value,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => stepStatusDisplayColor.value = $event),
                    label: "Display Color",
                    help: "The color used to display a step having this status."
                  }, null, 8, ["modelValue"])])])])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(Panel), {
              title: "Workflows",
              hasCollapse: true,
              isDrawerOpen: true
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_17, [createElementVNode("div", _hoisted_18, [createVNode(unref(Grid), {
                data: workflowGridData,
                keyField: "key",
                itemTerm: "Workflow",
                liveUpdates: "",
                light: "",
                onAddItem: onAddWorkflow
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "workflowType",
                  field: "workflowType",
                  title: "Workflow Type"
                }), createVNode(unref(TextColumn), {
                  name: "workflowTrigger",
                  field: "workflowTrigger",
                  title: "Trigger"
                }), createVNode(unref(EditColumn), {
                  onClick: onEditWorkflow
                }), createVNode(unref(DeleteColumn), {
                  onClick: onDeleteWorkflow,
                  disableConfirmation: ""
                })]),
                _: 1
              }, 8, ["data"])])]), createVNode(unref(Modal), {
                modelValue: isWorkflowModalOpen.value,
                "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => isWorkflowModalOpen.value = $event),
                title: "Select Workflow"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSaveWorkflow
                }, {
                  default: withCtx(() => [_hoisted_25]),
                  _: 1
                }, 8, ["btnSize", "btnType"])]),
                default: withCtx(() => [createVNode(unref(RockForm), {
                  submit: saveWorkflow.value,
                  "onUpdate:submit": _cache[19] || (_cache[19] = $event => saveWorkflow.value = $event),
                  onSubmit: onSaveWorkflow
                }, {
                  default: withCtx(() => [createElementVNode("fieldset", null, [createElementVNode("div", _hoisted_19, [createElementVNode("div", _hoisted_20, [createVNode(unref(DropDownList), {
                    modelValue: triggerType.value,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => triggerType.value = $event),
                    items: triggerTypes.value,
                    showBlankItem: false,
                    label: "Launch Workflow When",
                    rules: "required"
                  }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_21, [createVNode(unref(WorkflowTypePicker), {
                    modelValue: workflow.value.workflowType,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => workflow.value.workflowType = $event),
                    label: "Workflow Type",
                    rules: "required"
                  }, null, 8, ["modelValue"])])]), unref(showQualifiers) ? (openBlock(), createElementBlock("div", _hoisted_22, [createElementVNode("div", _hoisted_23, [createVNode(unref(DropDownList), {
                    modelValue: primaryQualifier.value,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => primaryQualifier.value = $event),
                    items: stepStatusOptions.value,
                    label: "From",
                    showBlankItem: ""
                  }, null, 8, ["modelValue", "items"]), createVNode(unref(DropDownList), {
                    modelValue: secondaryQualifier.value,
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => secondaryQualifier.value = $event),
                    items: stepStatusOptions.value,
                    label: "To",
                    showBlankItem: ""
                  }, null, 8, ["modelValue", "items"])]), _hoisted_24])) : createCommentVNode("v-if", true)])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Engagement/StepProgramDetail/editPanel.partial.obs";

      var _hoisted_1$1 = {
        class: "mt-1"
      };
      var _hoisted_2$1 = {
        class: "row"
      };
      var _hoisted_3$1 = {
        class: "col-md-6 description"
      };
      var _hoisted_4$1 = {
        class: "col-md-offset-3 col-md-3"
      };
      var _hoisted_5$1 = createElementVNode("i", {
        class: "fa fa-refresh"
      }, null, -1);
      var _hoisted_6$1 = ["innerHTML"];
      var _hoisted_7$1 = {
        key: 1,
        style: {
          "height": "350px"
        },
        class: "col-md-12"
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue$nam, _props$modelValue3, _props$modelValue$des, _props$modelValue4, _props$modelValue$cha, _props$modelValue5, _props$modelValue$kpi, _props$modelValue6, _props$modelValue7, _props$modelValue8;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = ref((_props$modelValue$nam = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var description = ref((_props$modelValue$des = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var chartData = ref(JSON.parse((_props$modelValue$cha = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.chartData) !== null && _props$modelValue$cha !== void 0 ? _props$modelValue$cha : "{}"));
          var kpi = ref((_props$modelValue$kpi = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.kpi) !== null && _props$modelValue$kpi !== void 0 ? _props$modelValue$kpi : "");
          var showChart = ref((_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.showChart);
          var notificationMessage = ref("");
          var filterDate = ref((_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.defaultDateRange);
          var isRefreshLoading = ref(false);
          var options = ref({
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1000
            },
            plugins: {
              legend: {
                position: "bottom",
                align: "center",
                display: true
              },
              tooltip: {
                enabled: true
              }
            },
            scales: {
              y: {
                ticks: {
                  callback: function callback(label, _index, _labels) {
                    var date = Number(label);
                    if (date) {
                      return Intl.NumberFormat().format(date);
                    } else {
                      return label;
                    }
                  },
                  stepSize: 1
                },
                stacked: true,
                beginAtZero: true,
                suggestedMax: 2
              }
            }
          });
          var invokeBlockAction = useInvokeBlockAction();
          function onRefresh() {
            return _onRefresh.apply(this, arguments);
          }
          function _onRefresh() {
            _onRefresh = _asyncToGenerator(function* () {
              isRefreshLoading.value = true;
              notificationMessage.value = "";
              var result = yield invokeBlockAction("RefreshChart", {
                dateRange: filterDate.value ? slidingDateRangeToString(filterDate.value) : "DateRange||||"
              });
              isRefreshLoading.value = false;
              if (result.isSuccess && result.data) {
                var _result$data$kpi;
                kpi.value = (_result$data$kpi = result.data.kpi) !== null && _result$data$kpi !== void 0 ? _result$data$kpi : "";
                if (result.data.chartData) {
                  var _result$data$chartDat;
                  chartData.value = JSON.parse((_result$data$chartDat = result.data.chartData) !== null && _result$data$chartDat !== void 0 ? _result$data$chartDat : "{}");
                  showChart.value = result.data.showChart;
                } else {
                  notificationMessage.value = "There are no Steps matching the current filter.";
                  showChart.value = result.data.showChart;
                }
              } else {
                var _result$errorMessage;
                chartData.value = {};
                notificationMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to refresh chart.";
              }
            });
            return _onRefresh.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", null, [createElementVNode("h3", _hoisted_1$1, toDisplayString(name.value) + " Step Program ", 1), createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, toDisplayString(description.value), 1), createElementVNode("div", _hoisted_4$1, [createVNode(unref(RockButton), {
              btnSize: unref(BtnSize).Default,
              btnType: unref(BtnType).Default,
              class: "btn btn-default btn-square pull-right",
              onClick: onRefresh,
              loadingText: "...",
              isLoading: isRefreshLoading.value
            }, {
              default: withCtx(() => [_hoisted_5$1]),
              _: 1
            }, 8, ["btnSize", "btnType", "isLoading"]), createVNode(unref(SlidingDateRangePicker), {
              modelValue: filterDate.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => filterDate.value = $event),
              enabledSlidingDateRangeUnits: [unref(RangeType).Previous, unref(RangeType).Last, unref(RangeType).Current, unref(RangeType).DateRange],
              enabledTimeUnits: [unref(TimeUnit).Hour, unref(TimeUnit).Day, unref(TimeUnit).Week, unref(TimeUnit).Month, unref(TimeUnit).Year],
              class: "pull-right",
              previewLocation: "None"
            }, null, 8, ["modelValue", "enabledSlidingDateRangeUnits", "enabledTimeUnits"])])]), createElementVNode("div", {
              innerHTML: kpi.value
            }, null, 8, _hoisted_6$1), createElementVNode("div", null, [notificationMessage.value && showChart.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(notificationMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), showChart.value && !notificationMessage.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [createVNode(unref(Chart), {
              type: "line",
              data: chartData.value,
              options: options.value
            }, null, 8, ["data", "options"])])) : createCommentVNode("v-if", true)])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Engagement/StepProgramDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        class: "label label-info"
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = createTextVNode(" Save ");
      var _hoisted_4 = createTextVNode(" Cancel ");
      var _hoisted_5 = {
        key: 1
      };
      var _hoisted_6 = createTextVNode(" Edit ");
      var _hoisted_7 = createTextVNode(" Delete ");
      var _hoisted_8 = createElementVNode("i", {
        class: "fas fa-project-diagram"
      }, null, -1);
      var _hoisted_9 = createTextVNode(" Step Flow ");
      var _hoisted_10 = createElementVNode("i", {
        class: "fa fa-lock"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'stepProgramDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var stepProgramViewBag = ref(config.entity);
          var stepProgramEditBag = ref({});
          var submitForm = ref(false);
          var resetKey = ref("");
          var showAuditDetailsModal = ref(false);
          var entityTypeGuid = EntityType.StepProgram;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "category", "description", "iconCssClass", "isActive", "name", "defaultListView", "statuses", "workflowTriggers"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(stepProgramEditBag, validProperties, invokeBlockAction), undefined, true);
          var categoryName = computed(() => {
            var _stepProgramViewBag$v, _stepProgramViewBag$v2, _stepProgramViewBag$v3;
            return (_stepProgramViewBag$v = (_stepProgramViewBag$v2 = stepProgramViewBag.value) === null || _stepProgramViewBag$v2 === void 0 ? void 0 : (_stepProgramViewBag$v3 = _stepProgramViewBag$v2.category) === null || _stepProgramViewBag$v3 === void 0 ? void 0 : _stepProgramViewBag$v3.text) !== null && _stepProgramViewBag$v !== void 0 ? _stepProgramViewBag$v : "";
          });
          var panelName = computed(() => {
            var _stepProgramViewBag$v4, _stepProgramViewBag$v5;
            return panelMode.value === DetailPanelMode.Add ? "Add Step Program" : (_stepProgramViewBag$v4 = (_stepProgramViewBag$v5 = stepProgramViewBag.value) === null || _stepProgramViewBag$v5 === void 0 ? void 0 : _stepProgramViewBag$v5.name) !== null && _stepProgramViewBag$v4 !== void 0 ? _stepProgramViewBag$v4 : "";
          });
          var entityKey = computed(() => {
            var _stepProgramViewBag$v6, _stepProgramViewBag$v7;
            return (_stepProgramViewBag$v6 = (_stepProgramViewBag$v7 = stepProgramViewBag.value) === null || _stepProgramViewBag$v7 === void 0 ? void 0 : _stepProgramViewBag$v7.idKey) !== null && _stepProgramViewBag$v6 !== void 0 ? _stepProgramViewBag$v6 : "";
          });
          var blockLabels = computed(() => {
            var _stepProgramViewBag$v8;
            var actions = [];
            if (stepProgramViewBag !== null && stepProgramViewBag !== void 0 && (_stepProgramViewBag$v8 = stepProgramViewBag.value) !== null && _stepProgramViewBag$v8 !== void 0 && _stepProgramViewBag$v8.idKey) {
              actions.push({
                type: "default",
                title: "Audit Details",
                handler: onAuditClick
              });
            }
            return actions;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var onAuditClick = () => {
            showAuditDetailsModal.value = true;
          };
          var onSecurityClick = () => {
            var _stepProgramViewBag$v9;
            if ((_stepProgramViewBag$v9 = stepProgramViewBag.value) !== null && _stepProgramViewBag$v9 !== void 0 && _stepProgramViewBag$v9.idKey) {
              showSecurity(entityTypeGuid, stepProgramViewBag.value.idKey, "Step Program");
            }
          };
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _stepProgramEditBag$v;
              if (!((_stepProgramEditBag$v = stepProgramEditBag.value) !== null && _stepProgramEditBag$v !== void 0 && _stepProgramEditBag$v.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  window.location.href = makeUrlRedirectSafe(config.navigationUrls[NavigationUrlKey.ParentPage]);
                }
              } else {
                panelMode.value = DetailPanelMode.View;
              }
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _stepProgramViewBag$v13;
              errorMessage.value = "";
              if (!(yield confirmDelete("Step Program", "All associated Step Types and Step Participants will also be deleted!"))) {
                return;
              }
              var result = yield invokeBlockAction("Delete", {
                key: (_stepProgramViewBag$v13 = stepProgramViewBag.value) === null || _stepProgramViewBag$v13 === void 0 ? void 0 : _stepProgramViewBag$v13.idKey
              });
              if (result.isSuccess && result.data) {
                window.location.href = makeUrlRedirectSafe(result.data);
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete step program.";
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _stepProgramViewBag$v14;
              var result = yield invokeBlockAction("Edit", {
                key: (_stepProgramViewBag$v14 = stepProgramViewBag.value) === null || _stepProgramViewBag$v14 === void 0 ? void 0 : _stepProgramViewBag$v14.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                stepProgramEditBag.value = result.data.entity;
                panelMode.value = DetailPanelMode.Edit;
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
              errorMessage.value = "";
              var data = {
                entity: stepProgramEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  stepProgramViewBag.value = result.data;
                  panelMode.value = DetailPanelMode.View;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  window.location.href = makeUrlRedirectSafe(result.data);
                }
              } else {
                var _result$errorMessage2;
                errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save step program.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          var onStartSubmitForm = () => {
            submitForm.value = true;
          };
          var onStepFlowClick = () => {
            var _stepProgramViewBag$v10;
            if ((_stepProgramViewBag$v10 = stepProgramViewBag.value) !== null && _stepProgramViewBag$v10 !== void 0 && _stepProgramViewBag$v10.stepFlowPageUrl) {
              var _stepProgramViewBag$v11;
              window.location.href = makeUrlRedirectSafe((_stepProgramViewBag$v11 = stepProgramViewBag.value) === null || _stepProgramViewBag$v11 === void 0 ? void 0 : _stepProgramViewBag$v11.stepFlowPageUrl);
            }
          };
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified step program could not be viewed.";
          } else if (!config.entity.idKey) {
            stepProgramEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          onConfigurationValuesChanged(useReloadBlock());
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
            })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(RockForm), {
              key: 2,
              submit: submitForm.value,
              "onUpdate:submit": _cache[2] || (_cache[2] = $event => submitForm.value = $event),
              onSubmit: onSave,
              formResetKey: resetKey.value
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                type: "block",
                title: unref(panelName),
                headerSecondaryActions: unref(blockLabels)
              }, createSlots({
                default: withCtx(() => [panelMode.value == unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(script$1), {
                  key: 0,
                  modelValue: stepProgramViewBag.value,
                  options: unref(options)
                }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).Add || panelMode.value === unref(DetailPanelMode).Edit ? (openBlock(), createBlock(unref(script$2), {
                  key: 1,
                  modelValue: stepProgramEditBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => stepProgramEditBag.value = $event),
                  isEditable: unref(isEditable),
                  options: unref(options),
                  onPropertyChanged: onPropertyChanged
                }, null, 8, ["modelValue", "isEditable", "options"])) : createCommentVNode("v-if", true), createVNode(unref(Modal), {
                  modelValue: showAuditDetailsModal.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showAuditDetailsModal.value = $event),
                  title: "Audit Details"
                }, {
                  default: withCtx(() => [createVNode(unref(AuditDetail), {
                    entityTypeGuid: unref(entityTypeGuid),
                    entityKey: unref(entityKey)
                  }, null, 8, ["entityTypeGuid", "entityKey"])]),
                  _: 1
                }, 8, ["modelValue"])]),
                footerActions: withCtx(() => [panelMode.value === unref(DetailPanelMode).Edit || panelMode.value === unref(DetailPanelMode).Add ? (openBlock(), createElementBlock("div", _hoisted_2, [unref(isEditable) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSubmitForm
                }, {
                  default: withCtx(() => [_hoisted_3]),
                  _: 1
                }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true), unref(isEditable) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 1,
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onCancelEdit
                }, {
                  default: withCtx(() => [_hoisted_4]),
                  _: 1
                }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).View && unref(isEditable) ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onEdit
                }, {
                  default: withCtx(() => [_hoisted_6]),
                  _: 1
                }, 8, ["btnSize", "btnType"]), createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onDelete
                }, {
                  default: withCtx(() => [_hoisted_7]),
                  _: 1
                }, 8, ["btnSize", "btnType"])])) : createCommentVNode("v-if", true)]),
                footerSecondaryActions: withCtx(() => {
                  var _stepProgramViewBag$v12;
                  return [panelMode.value === unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(RockButton), {
                    key: 0,
                    btnSize: unref(BtnSize).Default,
                    btnType: unref(BtnType).Default,
                    onClick: onStepFlowClick
                  }, {
                    default: withCtx(() => [_hoisted_8, _hoisted_9]),
                    _: 1
                  }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).View && (_stepProgramViewBag$v12 = stepProgramViewBag.value) !== null && _stepProgramViewBag$v12 !== void 0 && _stepProgramViewBag$v12.canAdministrate ? (openBlock(), createBlock(unref(RockButton), {
                    key: 1,
                    btnSize: unref(BtnSize).Default,
                    btnType: unref(BtnType).Default,
                    onClick: onSecurityClick
                  }, {
                    default: withCtx(() => [_hoisted_10]),
                    _: 1
                  }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true)];
                }),
                _: 2
              }, [unref(categoryName) ? {
                name: "headerActions",
                fn: withCtx(() => [createElementVNode("span", _hoisted_1, toDisplayString(unref(categoryName)), 1)])
              } : undefined]), 1032, ["title", "headerSecondaryActions"])]),
              _: 1
            }, 8, ["submit", "formResetKey"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/stepProgramDetail.obs";

    })
  };
}));
//# sourceMappingURL=stepProgramDetail.obs.js.map
