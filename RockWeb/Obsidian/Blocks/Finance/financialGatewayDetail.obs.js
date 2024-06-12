System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Utility/block', '@Obsidian/Controls/timePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/dayOfWeekPicker.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Enums/Controls/dayOfWeek', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, Fragment, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, ComponentPicker, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, TimePicker, DropDownList, DayOfWeekPicker, propertyRef, updateRefValue, toNumber, ValueDetailList, ValueDetailListItemBuilder, DayOfWeekDescription, padLeft, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
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
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      TimePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      DayOfWeekPicker = module["default"];
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      DayOfWeekDescription = module.DayOfWeekDescription;
    }, function (module) {
      padLeft = module.padLeft;
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

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-1"
      };
      var _hoisted_4 = {
        class: "col-md-5"
      };
      var _hoisted_5 = {
        class: "row"
      };
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = {
        class: "col-md-6"
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$ent, _props$modelValue$bat, _props$modelValue$bat2;
          var emit = _ref.emit;
          var props = __props;
          var weeklySchedule = "Weekly";
          var dailySchedule = "Daily";
          var defaultInactiveMessage = "An 'Inactive' status will prevent the gateway from being shown in the gateway picker for Registration templates if it is not already selected. An 'Inactive' status DOES NOT prevent charges from being processed for a registration where the gateway is already assigned.";
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var batchTimeOffsetTicks = propertyRef(getTimePickerValue(props.modelValue.batchTimeOffsetTicks), "BatchTimeOffsetTicks");
          var gatewayType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var batchSchedule = ref((_props$modelValue$bat = props.modelValue.batchSchedule) !== null && _props$modelValue$bat !== void 0 ? _props$modelValue$bat : "");
          var dayOfWeek = ref((_props$modelValue$bat2 = props.modelValue.batchStartDay) !== null && _props$modelValue$bat2 !== void 0 ? _props$modelValue$bat2 : "");
          var inactiveGatewayMessage = ref("");
          var scheduleOptions = ref([{
            text: dailySchedule,
            value: dailySchedule
          }, {
            text: weeklySchedule,
            value: weeklySchedule
          }]);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, isActive, name, gatewayType, batchTimeOffsetTicks];
          var showDayOfWeekPicker = computed(() => {
            return batchSchedule.value == weeklySchedule;
          });
          function getTimePickerValue(timeSpan) {
            var values = /^(\d+):(\d+)/.exec(timeSpan !== null && timeSpan !== void 0 ? timeSpan : "");
            if (values !== null) {
              return {
                hour: toNumber(values[1]),
                minute: toNumber(values[2])
              };
            } else {
              return {};
            }
          }
          function getTimePickerValueString(timePickerValue) {
            return "".concat(timePickerValue.hour, ":").concat(timePickerValue.minute);
          }
          watch(() => isActive.value, _asyncToGenerator(function* () {
            var _props$modelValue;
            if (isActive.value) {
              return;
            }
            if ((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 && _props$modelValue.idKey) {
              if (!isActive.value && !inactiveGatewayMessage.value) {
                var _props$modelValue2;
                inactiveGatewayMessage.value = defaultInactiveMessage;
                var result = yield invokeBlockAction("GetInactiveGatewayMessage", {
                  key: (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.idKey
                });
                if (result.isSuccess && result.data) {
                  inactiveGatewayMessage.value = result.data.inactiveGatewayMessage;
                }
              }
            } else {
              inactiveGatewayMessage.value = defaultInactiveMessage;
            }
          }));
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$ent2, _props$modelValue$bat3, _props$modelValue$bat4;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(gatewayType, (_props$modelValue$ent2 = props.modelValue.entityType) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : {});
            updateRefValue(batchTimeOffsetTicks, getTimePickerValue(props.modelValue.batchTimeOffsetTicks));
            updateRefValue(dayOfWeek, (_props$modelValue$bat3 = props.modelValue.batchStartDay) !== null && _props$modelValue$bat3 !== void 0 ? _props$modelValue$bat3 : "");
            updateRefValue(batchSchedule, (_props$modelValue$bat4 = props.modelValue.batchSchedule) !== null && _props$modelValue$bat4 !== void 0 ? _props$modelValue$bat4 : "");
          });
          watch([attributeValues, dayOfWeek, batchSchedule, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              entityType: gatewayType.value,
              batchTimeOffsetTicks: getTimePickerValueString(batchTimeOffsetTicks.value),
              batchStartDay: dayOfWeek.value,
              batchSchedule: batchSchedule.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [!unref(isActive) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              innerHTML: inactiveGatewayMessage.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true)])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createVNode(unref(ComponentPicker), {
              label: "Gateway Type",
              modelValue: unref(gatewayType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(gatewayType) ? gatewayType.value = $event : null),
              containerType: "Rock.Financial.GatewayContainer",
              showBlankItem: "",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
              label: "Batch Schedule",
              modelValue: batchSchedule.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => batchSchedule.value = $event),
              items: scheduleOptions.value,
              help: "By default Rock creates batches for transactions on a daily basis. If you choose, you can make the batches weekly (rather than daily) such that a new batch is started at the designated day of the week and time every week."
            }, null, 8, ["modelValue", "items"]), createVNode(unref(TimePicker), {
              label: "Batch Time Offset",
              modelValue: unref(batchTimeOffsetTicks),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(batchTimeOffsetTicks) ? batchTimeOffsetTicks.value = $event : null),
              help: "By default online payments will be grouped into batches with a start time 12:00:00 AM. However if the payment gateway groups transactions into batches based on a different time, this offset can specified so that Rock will use the same time when creating batches for online transactions"
            }, null, 8, ["modelValue"]), unref(showDayOfWeekPicker) ? (openBlock(), createBlock(unref(DayOfWeekPicker), {
              key: 0,
              label: "Batch Start Day",
              modelValue: dayOfWeek.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => dayOfWeek.value = $event),
              showBlankItem: true,
              rules: "required",
              help: "The day of the week that Rock will create new batches.",
              multiple: false
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_7, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => attributeValues.value = $event),
              showCategoryLabel: false,
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 1
            }, null, 8, ["modelValue", "attributes"])])])]);
          };
        }
      });

      script$2.__file = "src/Finance/FinancialGatewayDetail/editPanel.partial.obs";

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
          var props = __props;
          var topValues = computed(() => {
            var _props$modelValue$ent;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("", props.modelValue.description);
            }
            if ((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 && _props$modelValue$ent.text) {
              valueBuilder.addTextValue("Gateway Type", props.modelValue.entityType.text);
            }
            if (props.modelValue.batchStartDay) {
              valueBuilder.addTextValue("Batched Weekly", DayOfWeekDescription[props.modelValue.batchStartDay]);
            }
            if (props.modelValue.batchTimeOffsetTicks) {
              var _props$modelValue$bat;
              var values = /^(\d+):(\d+)/.exec((_props$modelValue$bat = props.modelValue.batchTimeOffsetTicks) !== null && _props$modelValue$bat !== void 0 ? _props$modelValue$bat : "");
              if (values !== null) {
                var hour = toNumber(values[1]);
                var minute = toNumber(values[2]);
                var meridiem = hour >= 12 ? "PM" : "AM";
                if (hour > 12) {
                  hour -= 12;
                }
                var timeSpan = "".concat(hour, ":").concat(padLeft(minute.toString(), 2, "0"), " ").concat(meridiem);
                valueBuilder.addTextValue("Batch Time Offset", timeSpan);
              } else {
                valueBuilder.addTextValue("Batch Time Offset", props.modelValue.batchTimeOffsetTicks);
              }
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
            }, null, 8, ["modelValue"])])])]);
          };
        }
      });

      script$1.__file = "src/Finance/FinancialGatewayDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'financialGatewayDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var financialGatewayViewBag = ref(config.entity);
          var financialGatewayEditBag = ref({});
          var entityTypeGuid = EntityType.FinancialGateway;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "batchTimeOffsetTicks", "description", "entityType", "isActive", "name"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(financialGatewayEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _financialGatewayView, _financialGatewayView2;
            return (_financialGatewayView = (_financialGatewayView2 = financialGatewayViewBag.value) === null || _financialGatewayView2 === void 0 ? void 0 : _financialGatewayView2.name) !== null && _financialGatewayView !== void 0 ? _financialGatewayView : "";
          });
          var entityKey = computed(() => {
            var _financialGatewayView3, _financialGatewayView4;
            return (_financialGatewayView3 = (_financialGatewayView4 = financialGatewayViewBag.value) === null || _financialGatewayView4 === void 0 ? void 0 : _financialGatewayView4.idKey) !== null && _financialGatewayView3 !== void 0 ? _financialGatewayView3 : "";
          });
          var blockLabels = computed(() => {
            var _financialGatewayView5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_financialGatewayView5 = financialGatewayViewBag.value) === null || _financialGatewayView5 === void 0 ? void 0 : _financialGatewayView5.isActive) === true) {
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _financialGatewayEdit;
              if (!((_financialGatewayEdit = financialGatewayEditBag.value) !== null && _financialGatewayEdit !== void 0 && _financialGatewayEdit.idKey)) {
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
              var _financialGatewayView6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_financialGatewayView6 = financialGatewayViewBag.value) === null || _financialGatewayView6 === void 0 ? void 0 : _financialGatewayView6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete financial gateway.";
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
              var _financialGatewayView7;
              var result = yield invokeBlockAction("Edit", {
                key: (_financialGatewayView7 = financialGatewayViewBag.value) === null || _financialGatewayView7 === void 0 ? void 0 : _financialGatewayView7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                financialGatewayEditBag.value = result.data.entity;
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
                entity: financialGatewayEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save financial gateway.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified financial gateway could not be viewed.";
          } else if (!config.entity.idKey) {
            financialGatewayEditBag.value = config.entity;
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
              entityTypeName: "FinancialGateway",
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
                modelValue: financialGatewayViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: financialGatewayEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => financialGatewayEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Finance/financialGatewayDetail.obs";

    })
  };
}));
//# sourceMappingURL=financialGatewayDetail.obs.js.map
