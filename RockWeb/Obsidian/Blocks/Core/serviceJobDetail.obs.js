System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/guid', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, toDisplayString, createCommentVNode, withCtx, computed, createBlock, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, NumberBox, AttributeValuesContainer, CheckBox, TextBox, RockLabel, DropDownList, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, areEqual, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
      computed = module.computed;
      createBlock = module.createBlock;
      Fragment = module.Fragment;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      areEqual = module.areEqual;
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
        class: "col-md-6"
      };
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = {
        key: 0,
        class: "form-group static-control"
      };
      var _hoisted_8 = createElementVNode("label", {
        class: "control-label"
      }, "Cron Description", -1);
      var _hoisted_9 = {
        class: "control-wrapper"
      };
      var _hoisted_10 = {
        class: "form-control-static"
      };
      var _hoisted_11 = {
        key: 1
      };
      var _hoisted_12 = createTextVNode("Last Status Message");
      var _hoisted_13 = ["innerHTML"];
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
          },
          isEditable: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$not, _props$modelValue$cro, _props$modelValue$not2, _props$options$jobTyp, _props$options$notifi, _props$modelValue$cla;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var notificationStatus = propertyRef((_props$modelValue$not = props.modelValue.notificationStatus) !== null && _props$modelValue$not !== void 0 ? _props$modelValue$not : "", "JobNotificationStatus");
          var cronExpression = propertyRef((_props$modelValue$cro = props.modelValue.cronExpression) !== null && _props$modelValue$cro !== void 0 ? _props$modelValue$cro : "", "CronExpression");
          var historyCount = propertyRef(props.modelValue.historyCount, "HistoryCount");
          var notificationEmails = propertyRef((_props$modelValue$not2 = props.modelValue.notificationEmails) !== null && _props$modelValue$not2 !== void 0 ? _props$modelValue$not2 : "", "NotificationEmails");
          var lastStatusMessage = ref(props.modelValue.lastStatusMessage);
          var cronDescription = ref(props.modelValue.cronDescription);
          var invokeBlockAction = useInvokeBlockAction();
          var jobTypeOptions = (_props$options$jobTyp = props.options.jobTypeOptions) !== null && _props$options$jobTyp !== void 0 ? _props$options$jobTyp : [];
          var notificationStatusOptions = (_props$options$notifi = props.options.notificationStatusOptions) !== null && _props$options$notifi !== void 0 ? _props$options$notifi : [];
          var jobTypeClass = propertyRef((_props$modelValue$cla = props.modelValue.class) !== null && _props$modelValue$cla !== void 0 ? _props$modelValue$cla : "", "Class");
          var idkey = ref(props.modelValue.idKey);
          var isSystem = ref(props.modelValue.isSystem);
          var propRefs = [description, isActive, name, cronExpression, historyCount, notificationEmails, jobTypeClass, notificationStatus];
          function getCronDescription(_x) {
            return _getCronDescription.apply(this, arguments);
          }
          function _getCronDescription() {
            _getCronDescription = _asyncToGenerator(function* (cronExpression) {
              var response = yield invokeBlockAction("GetCronDescription", {
                cronExpression: cronExpression
              });
              if (response.isSuccess && response.data) {
                cronDescription.value = response.data.cronDescription;
              } else {
                cronDescription.value = "";
              }
            });
            return _getCronDescription.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$cro2, _props$modelValue$cro3, _props$modelValue$not3, _props$modelValue$cla2, _props$modelValue$not4;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(cronDescription, (_props$modelValue$cro2 = props.modelValue.cronDescription) !== null && _props$modelValue$cro2 !== void 0 ? _props$modelValue$cro2 : "");
            updateRefValue(cronExpression, (_props$modelValue$cro3 = props.modelValue.cronExpression) !== null && _props$modelValue$cro3 !== void 0 ? _props$modelValue$cro3 : "");
            updateRefValue(historyCount, props.modelValue.historyCount);
            updateRefValue(notificationEmails, (_props$modelValue$not3 = props.modelValue.notificationEmails) !== null && _props$modelValue$not3 !== void 0 ? _props$modelValue$not3 : "");
            updateRefValue(jobTypeClass, (_props$modelValue$cla2 = props.modelValue.class) !== null && _props$modelValue$cla2 !== void 0 ? _props$modelValue$cla2 : "");
            updateRefValue(notificationStatus, (_props$modelValue$not4 = props.modelValue.notificationStatus) !== null && _props$modelValue$not4 !== void 0 ? _props$modelValue$not4 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              cronExpression: cronExpression.value,
              historyCount: historyCount.value,
              notificationEmails: notificationEmails.value,
              class: jobTypeClass.value,
              notificationStatus: notificationStatus.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required",
              disabled: !__props.isEditable || isSystem.value
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active",
              disabled: !__props.isEditable || isSystem.value
            }, null, 8, ["modelValue", "disabled"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline",
              disabled: !__props.isEditable || isSystem.value
            }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(DropDownList), {
              label: "Notification Status",
              modelValue: unref(notificationStatus),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(notificationStatus) ? notificationStatus.value = $event : null),
              items: unref(notificationStatusOptions),
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "items", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(notificationEmails),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(notificationEmails) ? notificationEmails.value = $event : null),
              label: "Notification Emails",
              disabled: !__props.isEditable,
              help: "Additional email addresses that the notification email should be sent to for this job. Emails are sent using the 'Job Notification' system email template. If there are recipients defined in the template, it will send a job notification to those, too. <span class='tip tip-lava'></span>"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(DropDownList), {
              label: "Job Type",
              modelValue: unref(jobTypeClass),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(jobTypeClass) ? jobTypeClass.value = $event : null),
              items: unref(jobTypeOptions),
              rules: "required",
              disabled: !__props.isEditable || isSystem.value
            }, null, 8, ["modelValue", "items", "disabled"]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: __props.isEditable,
              numberOfColumns: 1
            }, null, 8, ["modelValue", "attributes", "isEditMode"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(TextBox), {
              label: "Cron Expression",
              modelValue: unref(cronExpression),
              "onUpdate:modelValue": [_cache[7] || (_cache[7] = $event => isRef(cronExpression) ? cronExpression.value = $event : null), getCronDescription],
              rules: "required",
              disabled: !__props.isEditable || isSystem.value,
              help: "Add a valid cron expression. Need help? Try <a href='http://www.cronmaker.com' target='_blank'>CronMaker</a>.<br>Examples:<br>Daily at 2:15am: <em>0 15 2 1/1 * ? *</em><br>Every Monday and Friday at 4:30pm: <em>0 30 16 ? * MON,FRI *</em>"
            }, null, 8, ["modelValue", "disabled"]), idkey.value ? (openBlock(), createElementBlock("div", _hoisted_7, [_hoisted_8, createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, toDisplayString(cronDescription.value), 1)])])) : createCommentVNode("v-if", true), createVNode(unref(NumberBox), {
              modelValue: unref(historyCount),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(historyCount) ? historyCount.value = $event : null),
              class: "input-width-lg",
              rules: "gte:0",
              label: "Job History Count",
              help: "The number of job history records to keep for this job instance."
            }, null, 8, ["modelValue"]), idkey.value ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_12]),
              _: 1
            }), createElementVNode("p", {
              innerHTML: lastStatusMessage.value
            }, null, 8, _hoisted_13)])) : createCommentVNode("v-if", true)])])]);
          };
        }
      });

      script$2.__file = "src/Core/ServiceJobDetail/editPanel.partial.obs";

      var _hoisted_1 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_2 = createTextVNode(" Because this service job is used by Rock, editing is not enabled. ");
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$options$jobTyp;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var jobTypeOptions = (_props$options$jobTyp = props.options.jobTypeOptions) !== null && _props$options$jobTyp !== void 0 ? _props$options$jobTyp : [];
          var isSystem = computed(() => {
            var _props$modelValue$isS, _props$modelValue3;
            return (_props$modelValue$isS = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.class) {
              valueBuilder.addTextValue("Job Type", props.modelValue.class);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.cronDescription) {
              valueBuilder.addTextValue("Cron Description", props.modelValue.cronDescription);
            }
            return valueBuilder.build();
          });
          var jobTypeErrorMessage = computed(() => {
            var _props$modelValue4;
            var errorMessage = ref("");
            if ((_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && _props$modelValue4.class && !jobTypeOptions.some(l => {
              var _props$modelValue5;
              return areEqual(l.value, (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.class);
            })) {
              errorMessage.value = "Unable to find Job Type: " + props.modelValue.class;
            }
            return errorMessage.value;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [unref(isSystem) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1, _hoisted_2]),
              _: 1
            })) : createCommentVNode("v-if", true), unref(jobTypeErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(jobTypeErrorMessage)), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/ServiceJobDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'serviceJobDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var serviceJobViewBag = ref(config.entity);
          var serviceJobEditBag = ref({});
          var entityTypeGuid = EntityType.ServiceJob;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "assembly", "class", "cronExpression", "description", "enableHistory", "historyCount", "isActive", "lastStatusMessage", "name", "notificationEmails", "notificationStatus"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(serviceJobEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _serviceJobViewBag$va, _serviceJobViewBag$va2;
            return (_serviceJobViewBag$va = (_serviceJobViewBag$va2 = serviceJobViewBag.value) === null || _serviceJobViewBag$va2 === void 0 ? void 0 : _serviceJobViewBag$va2.name) !== null && _serviceJobViewBag$va !== void 0 ? _serviceJobViewBag$va : "";
          });
          var entityKey = computed(() => {
            var _serviceJobViewBag$va3, _serviceJobViewBag$va4;
            return (_serviceJobViewBag$va3 = (_serviceJobViewBag$va4 = serviceJobViewBag.value) === null || _serviceJobViewBag$va4 === void 0 ? void 0 : _serviceJobViewBag$va4.idKey) !== null && _serviceJobViewBag$va3 !== void 0 ? _serviceJobViewBag$va3 : "";
          });
          var blockLabels = computed(() => {
            var _serviceJobViewBag$va5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_serviceJobViewBag$va5 = serviceJobViewBag.value) === null || _serviceJobViewBag$va5 === void 0 ? void 0 : _serviceJobViewBag$va5.isActive) === true) {
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
            var _serviceJobViewBag$va6;
            return config.isEditable === true && ((_serviceJobViewBag$va6 = serviceJobViewBag.value) === null || _serviceJobViewBag$va6 === void 0 ? void 0 : _serviceJobViewBag$va6.isSystem) !== true;
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
              var _serviceJobEditBag$va;
              if (!((_serviceJobEditBag$va = serviceJobEditBag.value) !== null && _serviceJobEditBag$va !== void 0 && _serviceJobEditBag$va.idKey)) {
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
              var _serviceJobViewBag$va7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_serviceJobViewBag$va7 = serviceJobViewBag.value) === null || _serviceJobViewBag$va7 === void 0 ? void 0 : _serviceJobViewBag$va7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete service job.";
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
              var _serviceJobViewBag$va8;
              var result = yield invokeBlockAction("Edit", {
                key: (_serviceJobViewBag$va8 = serviceJobViewBag.value) === null || _serviceJobViewBag$va8 === void 0 ? void 0 : _serviceJobViewBag$va8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                serviceJobEditBag.value = result.data.entity;
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
                entity: serviceJobEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  serviceJobViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save service job.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified service job could not be viewed.";
          } else if (!config.entity.idKey) {
            serviceJobEditBag.value = config.entity;
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
              entityTypeName: "ServiceJob",
              isAuditHidden: true,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: serviceJobViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: serviceJobEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => serviceJobEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged,
                isEditable: unref(isEditable)
              }, null, 8, ["modelValue", "options", "isEditable"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/serviceJobDetail.obs";

    })
  };
}));
//# sourceMappingURL=serviceJobDetail.obs.js.map
