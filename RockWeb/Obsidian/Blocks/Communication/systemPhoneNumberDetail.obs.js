System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/groupPicker.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/workflowTypePicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, computed, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, DropDownList, GroupPicker, PersonPicker, TextBox, WorkflowTypePicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
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
      GroupPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      WorkflowTypePicker = module["default"];
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
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
        class: "row"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "row"
      };
      var _hoisted_11 = {
        class: "col-md-6"
      };
      var _hoisted_12 = {
        class: "col-md-6"
      };
      var _hoisted_13 = {
        class: "row"
      };
      var _hoisted_14 = {
        class: "col-md-6"
      };
      var _hoisted_15 = createElementVNode("div", {
        class: "col-md-6"
      }, null, -1);
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$num, _props$modelValue$ass, _props$modelValue$isS, _props$modelValue$isS2, _props$modelValue$sms, _props$modelValue$sms2, _props$modelValue$mob, _props$modelValue$mob2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var phoneNumber = propertyRef((_props$modelValue$num = props.modelValue.number) !== null && _props$modelValue$num !== void 0 ? _props$modelValue$num : "", "Number");
          var assignedToPersonAlias = propertyRef((_props$modelValue$ass = props.modelValue.assignedToPersonAlias) !== null && _props$modelValue$ass !== void 0 ? _props$modelValue$ass : undefined, "AssignedToPersonAliasId");
          var isSmsEnabled = propertyRef((_props$modelValue$isS = props.modelValue.isSmsEnabled) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false, "IsSmsEnabled");
          var isSmsForwardingEnabled = propertyRef((_props$modelValue$isS2 = props.modelValue.isSmsForwardingEnabled) !== null && _props$modelValue$isS2 !== void 0 ? _props$modelValue$isS2 : false, "IsSmsForwardingEnabled");
          var smsReceivedWorkflowType = propertyRef((_props$modelValue$sms = props.modelValue.smsReceivedWorkflowType) !== null && _props$modelValue$sms !== void 0 ? _props$modelValue$sms : undefined, "SmsReceivedWorkflowTypeId");
          var smsNotificationGroup = propertyRef((_props$modelValue$sms2 = props.modelValue.smsNotificationGroup) !== null && _props$modelValue$sms2 !== void 0 ? _props$modelValue$sms2 : undefined, "SmsNotificationGroupId");
          var mobileApplication = propertyRef((_props$modelValue$mob = (_props$modelValue$mob2 = props.modelValue.mobileApplicationSite) === null || _props$modelValue$mob2 === void 0 ? void 0 : _props$modelValue$mob2.value) !== null && _props$modelValue$mob !== void 0 ? _props$modelValue$mob : "", "MobileApplicationSiteId");
          var propRefs = [description, isActive, name, phoneNumber, assignedToPersonAlias, isSmsEnabled, isSmsForwardingEnabled, smsReceivedWorkflowType, smsNotificationGroup, mobileApplication];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$num2, _props$modelValue$ass2, _props$modelValue$isS3, _props$modelValue$isS4, _props$modelValue$sms3, _props$modelValue$sms4, _props$modelValue$mob3, _props$modelValue$mob4;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(phoneNumber, (_props$modelValue$num2 = props.modelValue.number) !== null && _props$modelValue$num2 !== void 0 ? _props$modelValue$num2 : "");
            updateRefValue(assignedToPersonAlias, (_props$modelValue$ass2 = props.modelValue.assignedToPersonAlias) !== null && _props$modelValue$ass2 !== void 0 ? _props$modelValue$ass2 : undefined);
            updateRefValue(isSmsEnabled, (_props$modelValue$isS3 = props.modelValue.isSmsEnabled) !== null && _props$modelValue$isS3 !== void 0 ? _props$modelValue$isS3 : false);
            updateRefValue(isSmsForwardingEnabled, (_props$modelValue$isS4 = props.modelValue.isSmsForwardingEnabled) !== null && _props$modelValue$isS4 !== void 0 ? _props$modelValue$isS4 : false);
            updateRefValue(smsReceivedWorkflowType, (_props$modelValue$sms3 = props.modelValue.smsReceivedWorkflowType) !== null && _props$modelValue$sms3 !== void 0 ? _props$modelValue$sms3 : undefined);
            updateRefValue(smsNotificationGroup, (_props$modelValue$sms4 = props.modelValue.smsNotificationGroup) !== null && _props$modelValue$sms4 !== void 0 ? _props$modelValue$sms4 : undefined);
            updateRefValue(mobileApplication, (_props$modelValue$mob3 = (_props$modelValue$mob4 = props.modelValue.mobileApplicationSite) === null || _props$modelValue$mob4 === void 0 ? void 0 : _props$modelValue$mob4.value) !== null && _props$modelValue$mob3 !== void 0 ? _props$modelValue$mob3 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              number: phoneNumber.value,
              assignedToPersonAlias: assignedToPersonAlias.value,
              isSmsEnabled: isSmsEnabled.value,
              isSmsForwardingEnabled: isSmsForwardingEnabled.value,
              smsReceivedWorkflowType: smsReceivedWorkflowType.value,
              smsNotificationGroup: smsNotificationGroup.value,
              mobileApplicationSite: mobileApplication.value ? {
                value: mobileApplication.value
              } : null
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _props$options$mobil;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
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
              modelValue: unref(phoneNumber),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(phoneNumber) ? phoneNumber.value = $event : null),
              label: "Phone Number",
              rules: "required",
              help: "The phone number in the format of +16235553324."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(PersonPicker), {
              modelValue: unref(assignedToPersonAlias),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(assignedToPersonAlias) ? assignedToPersonAlias.value = $event : null),
              label: "Assigned to Person",
              help: "The person who should receive responses to the SMS number. This person must have a phone number with SMS enabled or no response will be sent."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(CheckBox), {
              modelValue: unref(isSmsEnabled),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(isSmsEnabled) ? isSmsEnabled.value = $event : null),
              label: "SMS Enabled",
              help: "Determines if SMS features should be enabled for this phone number."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(CheckBox), {
              modelValue: unref(isSmsForwardingEnabled),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(isSmsForwardingEnabled) ? isSmsForwardingEnabled.value = $event : null),
              label: "SMS Forwarding",
              help: "Determines if messages received on this number should be forwarded to the assigned person."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createVNode(unref(WorkflowTypePicker), {
              modelValue: unref(smsReceivedWorkflowType),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(smsReceivedWorkflowType) ? smsReceivedWorkflowType.value = $event : null),
              label: "SMS Received Workflow",
              help: "The workflow type to launch when a response is received. Additionally if the workflow type has any of the following attribute keys defined, those attribute values will also be set: FromPhone, Message, SMSFromDefinedValue, FromPerson, ToPerson."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_12, [createVNode(unref(GroupPicker), {
              modelValue: unref(smsNotificationGroup),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(smsNotificationGroup) ? smsNotificationGroup.value = $event : null),
              label: "SMS Notification Group",
              help: "Active members of this group will recieve notifications when new SMS messages are received."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_13, [createElementVNode("div", _hoisted_14, [createVNode(unref(DropDownList), {
              modelValue: unref(mobileApplication),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(mobileApplication) ? mobileApplication.value = $event : null),
              label: "Mobile Application",
              help: "Determines which mobile application to use when sending notifications.",
              items: (_props$options$mobil = __props.options.mobileSites) !== null && _props$options$mobil !== void 0 ? _props$options$mobil : []
            }, null, 8, ["modelValue", "items"])]), _hoisted_15]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Communication/SystemPhoneNumberDetail/editPanel.partial.obs";

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
            var _props$modelValue$num, _props$modelValue$sms, _props$modelValue$mob;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addTextValue("Number", (_props$modelValue$num = props.modelValue.number) !== null && _props$modelValue$num !== void 0 ? _props$modelValue$num : "");
            if (props.modelValue.isSmsEnabled) {
              valueBuilder.addHtmlValue("SMS Enabled", "<i class=\"fa fa-check\"></i>");
            }
            if ((_props$modelValue$sms = props.modelValue.smsReceivedWorkflowType) !== null && _props$modelValue$sms !== void 0 && _props$modelValue$sms.text) {
              valueBuilder.addTextValue("SMS Received Workflow", props.modelValue.smsReceivedWorkflowType.text);
            }
            if ((_props$modelValue$mob = props.modelValue.mobileApplicationSite) !== null && _props$modelValue$mob !== void 0 && _props$modelValue$mob.text) {
              valueBuilder.addTextValue("Mobile Application", props.modelValue.mobileApplicationSite.text);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$ass, _props$modelValue$sms2;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$ass = props.modelValue.assignedToPersonAlias) !== null && _props$modelValue$ass !== void 0 && _props$modelValue$ass.text) {
              valueBuilder.addTextValue("Assigned To", props.modelValue.assignedToPersonAlias.text);
            }
            if (props.modelValue.isSmsForwardingEnabled) {
              valueBuilder.addHtmlValue("SMS Forwarding", "<i class=\"fa fa-check\"></i>");
            }
            if ((_props$modelValue$sms2 = props.modelValue.smsNotificationGroup) !== null && _props$modelValue$sms2 !== void 0 && _props$modelValue$sms2.text) {
              var _props$modelValue3;
              valueBuilder.addTextValue("SMS Notification Group", (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.smsNotificationGroup.text);
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

      script$1.__file = "src/Communication/SystemPhoneNumberDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'systemPhoneNumberDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var systemPhoneNumberViewBag = ref(config.entity);
          var systemPhoneNumberEditBag = ref({});
          var entityTypeGuid = EntityType.SystemPhoneNumber;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "assignedToPersonAlias", "description", "isActive", "isSmsEnabled", "isSmsForwardingEnabled", "name", "number", "mobileApplicationSite", "smsNotificationGroup", "smsReceivedWorkflowType"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(systemPhoneNumberEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _systemPhoneNumberVie, _systemPhoneNumberVie2;
            return (_systemPhoneNumberVie = (_systemPhoneNumberVie2 = systemPhoneNumberViewBag.value) === null || _systemPhoneNumberVie2 === void 0 ? void 0 : _systemPhoneNumberVie2.name) !== null && _systemPhoneNumberVie !== void 0 ? _systemPhoneNumberVie : "";
          });
          var entityKey = computed(() => {
            var _systemPhoneNumberVie3, _systemPhoneNumberVie4;
            return (_systemPhoneNumberVie3 = (_systemPhoneNumberVie4 = systemPhoneNumberViewBag.value) === null || _systemPhoneNumberVie4 === void 0 ? void 0 : _systemPhoneNumberVie4.idKey) !== null && _systemPhoneNumberVie3 !== void 0 ? _systemPhoneNumberVie3 : "";
          });
          var blockLabels = computed(() => {
            var _systemPhoneNumberVie5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_systemPhoneNumberVie5 = systemPhoneNumberViewBag.value) === null || _systemPhoneNumberVie5 === void 0 ? void 0 : _systemPhoneNumberVie5.isActive) === true) {
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
              var _systemPhoneNumberEdi;
              if (!((_systemPhoneNumberEdi = systemPhoneNumberEditBag.value) !== null && _systemPhoneNumberEdi !== void 0 && _systemPhoneNumberEdi.idKey)) {
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
              var _systemPhoneNumberVie6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_systemPhoneNumberVie6 = systemPhoneNumberViewBag.value) === null || _systemPhoneNumberVie6 === void 0 ? void 0 : _systemPhoneNumberVie6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete system phone number.";
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
              var _systemPhoneNumberVie7;
              var result = yield invokeBlockAction("Edit", {
                key: (_systemPhoneNumberVie7 = systemPhoneNumberViewBag.value) === null || _systemPhoneNumberVie7 === void 0 ? void 0 : _systemPhoneNumberVie7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                systemPhoneNumberEditBag.value = result.data.entity;
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
                entity: systemPhoneNumberEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  systemPhoneNumberViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save system phone number.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified system phone number could not be viewed.";
          } else if (!config.entity.idKey) {
            systemPhoneNumberEditBag.value = config.entity;
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
              entityTypeName: "SystemPhoneNumber",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: systemPhoneNumberViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: systemPhoneNumberEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => systemPhoneNumberEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Communication/systemPhoneNumberDetail.obs";

    })
  };
}));
//# sourceMappingURL=systemPhoneNumberDetail.obs.js.map
