System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, computed, Fragment, createBlock, createCommentVNode, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, NumberBox, CodeEditor, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, debounce;
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
      withCtx = module.withCtx;
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
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
      NumberBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
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
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = createElementVNode("span", {
        class: "input-group-addon"
      }, "days", -1);
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = createElementVNode("span", {
        class: "input-group-addon"
      }, "minutes", -1);
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "col-md-6"
      };
      var _hoisted_11 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$int, _props$modelValue$int2, _props$modelValue$int3, _props$modelValue$cha, _props$modelValue$cha2, _props$modelValue$com, _props$modelValue$com2, _props$modelValue$ses, _props$modelValue$int4, _props$modelValue$int5;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var engagementStrength = propertyRef(props.modelValue.engagementStrength, "EngagementStrength");
          var retentionDuration = propertyRef(props.modelValue.retentionDuration, "RetentionDuration");
          var componentCacheDuration = propertyRef(props.modelValue.componentCacheDuration, "ComponentCacheDuration");
          var interactionCustom1Label = propertyRef((_props$modelValue$int = props.modelValue.interactionCustom1Label) !== null && _props$modelValue$int !== void 0 ? _props$modelValue$int : "", "InteractionCustom1Label");
          var interactionCustom2Label = propertyRef((_props$modelValue$int2 = props.modelValue.interactionCustom2Label) !== null && _props$modelValue$int2 !== void 0 ? _props$modelValue$int2 : "", "InteractionCustom2Label");
          var interactionCustomIndexed1Label = propertyRef((_props$modelValue$int3 = props.modelValue.interactionCustomIndexed1Label) !== null && _props$modelValue$int3 !== void 0 ? _props$modelValue$int3 : "", "InteractionCustomIndexed1Label");
          var channelListTemplate = propertyRef((_props$modelValue$cha = props.modelValue.channelListTemplate) !== null && _props$modelValue$cha !== void 0 ? _props$modelValue$cha : "", "ChannelListTemplate");
          var channelDetailTemplate = propertyRef((_props$modelValue$cha2 = props.modelValue.channelDetailTemplate) !== null && _props$modelValue$cha2 !== void 0 ? _props$modelValue$cha2 : "", "ChannelDetailTemplate");
          var componentListTemplate = propertyRef((_props$modelValue$com = props.modelValue.componentListTemplate) !== null && _props$modelValue$com !== void 0 ? _props$modelValue$com : "", "ComponentListTemplate");
          var componentDetailTemplate = propertyRef((_props$modelValue$com2 = props.modelValue.componentDetailTemplate) !== null && _props$modelValue$com2 !== void 0 ? _props$modelValue$com2 : "", "ComponentDetailTemplate");
          var sessionListTemplate = propertyRef((_props$modelValue$ses = props.modelValue.sessionListTemplate) !== null && _props$modelValue$ses !== void 0 ? _props$modelValue$ses : "", "SessionListTemplate");
          var interactionListTemplate = propertyRef((_props$modelValue$int4 = props.modelValue.interactionListTemplate) !== null && _props$modelValue$int4 !== void 0 ? _props$modelValue$int4 : "", "InteractionListTemplate");
          var interactionDetailTemplate = propertyRef((_props$modelValue$int5 = props.modelValue.interactionDetailTemplate) !== null && _props$modelValue$int5 !== void 0 ? _props$modelValue$int5 : "", "InteractionDetailTemplate");
          var propRefs = [isActive, name, engagementStrength, retentionDuration, componentCacheDuration, interactionCustom1Label, interactionCustom2Label, interactionCustomIndexed1Label, channelListTemplate, channelDetailTemplate, componentListTemplate, componentDetailTemplate, sessionListTemplate, interactionListTemplate, interactionDetailTemplate];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$int6, _props$modelValue$int7, _props$modelValue$int8, _props$modelValue$cha3, _props$modelValue$cha4, _props$modelValue$com3, _props$modelValue$com4, _props$modelValue$ses2, _props$modelValue$int9, _props$modelValue$int10;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(engagementStrength, props.modelValue.engagementStrength);
            updateRefValue(retentionDuration, props.modelValue.retentionDuration);
            updateRefValue(componentCacheDuration, props.modelValue.componentCacheDuration);
            updateRefValue(interactionCustom1Label, (_props$modelValue$int6 = props.modelValue.interactionCustom1Label) !== null && _props$modelValue$int6 !== void 0 ? _props$modelValue$int6 : "");
            updateRefValue(interactionCustom2Label, (_props$modelValue$int7 = props.modelValue.interactionCustom2Label) !== null && _props$modelValue$int7 !== void 0 ? _props$modelValue$int7 : "");
            updateRefValue(interactionCustomIndexed1Label, (_props$modelValue$int8 = props.modelValue.interactionCustomIndexed1Label) !== null && _props$modelValue$int8 !== void 0 ? _props$modelValue$int8 : "");
            updateRefValue(channelListTemplate, (_props$modelValue$cha3 = props.modelValue.channelListTemplate) !== null && _props$modelValue$cha3 !== void 0 ? _props$modelValue$cha3 : "");
            updateRefValue(channelDetailTemplate, (_props$modelValue$cha4 = props.modelValue.channelDetailTemplate) !== null && _props$modelValue$cha4 !== void 0 ? _props$modelValue$cha4 : "");
            updateRefValue(componentListTemplate, (_props$modelValue$com3 = props.modelValue.componentListTemplate) !== null && _props$modelValue$com3 !== void 0 ? _props$modelValue$com3 : "");
            updateRefValue(componentDetailTemplate, (_props$modelValue$com4 = props.modelValue.componentDetailTemplate) !== null && _props$modelValue$com4 !== void 0 ? _props$modelValue$com4 : "");
            updateRefValue(sessionListTemplate, (_props$modelValue$ses2 = props.modelValue.sessionListTemplate) !== null && _props$modelValue$ses2 !== void 0 ? _props$modelValue$ses2 : "");
            updateRefValue(interactionListTemplate, (_props$modelValue$int9 = props.modelValue.interactionListTemplate) !== null && _props$modelValue$int9 !== void 0 ? _props$modelValue$int9 : "");
            updateRefValue(interactionDetailTemplate, (_props$modelValue$int10 = props.modelValue.interactionDetailTemplate) !== null && _props$modelValue$int10 !== void 0 ? _props$modelValue$int10 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              isActive: isActive.value,
              name: name.value,
              engagementStrength: engagementStrength.value,
              retentionDuration: retentionDuration.value,
              componentCacheDuration: componentCacheDuration.value,
              interactionCustom1Label: interactionCustom1Label.value,
              interactionCustom2Label: interactionCustom2Label.value,
              interactionCustomIndexed1Label: interactionCustomIndexed1Label.value,
              channelListTemplate: channelListTemplate.value,
              channelDetailTemplate: channelDetailTemplate.value,
              componentListTemplate: componentListTemplate.value,
              componentDetailTemplate: componentDetailTemplate.value,
              sessionListTemplate: sessionListTemplate.value,
              interactionListTemplate: interactionListTemplate.value,
              interactionDetailTemplate: interactionDetailTemplate.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(NumberBox), {
              label: "Engagement Strength",
              modelValue: unref(engagementStrength),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(engagementStrength) ? engagementStrength.value = $event : null)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(NumberBox), {
              label: "Retention Duration",
              modelValue: unref(retentionDuration),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(retentionDuration) ? retentionDuration.value = $event : null)
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_6]),
              _: 1
            }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_7, [createVNode(unref(NumberBox), {
              label: "Component Cache Duration",
              modelValue: unref(componentCacheDuration),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(componentCacheDuration) ? componentCacheDuration.value = $event : null)
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(TextBox), {
              label: "Interaction Custom 1 Label",
              modelValue: unref(interactionCustom1Label),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(interactionCustom1Label) ? interactionCustom1Label.value = $event : null)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(TextBox), {
              label: "Interaction Custom 2 Label",
              modelValue: unref(interactionCustom2Label),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(interactionCustom2Label) ? interactionCustom2Label.value = $event : null)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(TextBox), {
              label: "Interaction Custom Indexed 1 Label",
              modelValue: unref(interactionCustomIndexed1Label),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(interactionCustomIndexed1Label) ? interactionCustomIndexed1Label.value = $event : null)
            }, null, 8, ["modelValue"])])]), createVNode(unref(CodeEditor), {
              label: "Channel List Lava Template",
              modelValue: unref(channelListTemplate),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(channelListTemplate) ? channelListTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the Interactions block when viewing channel list."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Channel Detail Lava Template",
              modelValue: unref(channelDetailTemplate),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(channelDetailTemplate) ? channelDetailTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the Interaction Channel Details block when viewing a interaction channel. This allows you to customize the layout of a channel."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Component List Lava Template",
              modelValue: unref(componentListTemplate),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(componentListTemplate) ? componentListTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the block when viewing component list."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Component Detail Lava Template",
              modelValue: unref(componentDetailTemplate),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(componentDetailTemplate) ? componentDetailTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the Interaction Component Details block when viewing a interaction component. This allows you to customize the layout of a component."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Session List Lava Template",
              modelValue: unref(sessionListTemplate),
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(sessionListTemplate) ? sessionListTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the block when viewing session list."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Interaction List Lava Template",
              modelValue: unref(interactionListTemplate),
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isRef(interactionListTemplate) ? interactionListTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the block when viewing interaction list."
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              label: "Interaction Detail Lava Template",
              modelValue: unref(interactionDetailTemplate),
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isRef(interactionDetailTemplate) ? interactionDetailTemplate.value = $event : null),
              mode: "lava",
              editorHeight: 200,
              help: "This Lava template will be used by the Interaction Details block when viewing a interaction. This allows you to customize the layout of a interaction."
            }, null, 8, ["modelValue"]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/InteractionChannelDetail/editPanel.partial.obs";

      var _hoisted_1 = ["innerHTML"];
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue$con, _props$modelValue3;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var content = ref((_props$modelValue$con = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.content) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "");
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", {
              innerHTML: content.value
            }, null, 8, _hoisted_1), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/InteractionChannelDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'interactionChannelDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var interactionChannelViewBag = ref(config.entity);
          var interactionChannelEditBag = ref({});
          var entityTypeGuid = EntityType.InteractionChannel;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "channelDetailTemplate", "channelListTemplate", "componentCacheDuration", "componentDetailTemplate", "componentListTemplate", "engagementStrength", "interactionCustom1Label", "interactionCustom2Label", "interactionCustomIndexed1Label", "interactionDetailTemplate", "interactionListTemplate", "isActive", "name", "retentionDuration", "sessionListTemplate"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(interactionChannelEditBag, validProperties, invokeBlockAction), undefined, true);
          var isSecurityHidden = computed(() => {
            var _interactionChannelVi;
            return ((_interactionChannelVi = interactionChannelViewBag.value) === null || _interactionChannelVi === void 0 ? void 0 : _interactionChannelVi.canAdministrate) === false;
          });
          var panelName = computed(() => {
            var _interactionChannelVi2, _interactionChannelVi3;
            return (_interactionChannelVi2 = (_interactionChannelVi3 = interactionChannelViewBag.value) === null || _interactionChannelVi3 === void 0 ? void 0 : _interactionChannelVi3.name) !== null && _interactionChannelVi2 !== void 0 ? _interactionChannelVi2 : "";
          });
          var entityKey = computed(() => {
            var _interactionChannelVi4, _interactionChannelVi5;
            return (_interactionChannelVi4 = (_interactionChannelVi5 = interactionChannelViewBag.value) === null || _interactionChannelVi5 === void 0 ? void 0 : _interactionChannelVi5.idKey) !== null && _interactionChannelVi4 !== void 0 ? _interactionChannelVi4 : "";
          });
          var blockLabels = computed(() => {
            var _interactionChannelVi6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_interactionChannelVi6 = interactionChannelViewBag.value) === null || _interactionChannelVi6 === void 0 ? void 0 : _interactionChannelVi6.isActive) === true) {
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
              var _interactionChannelEd;
              if (!((_interactionChannelEd = interactionChannelEditBag.value) !== null && _interactionChannelEd !== void 0 && _interactionChannelEd.idKey)) {
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
              var _interactionChannelVi7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_interactionChannelVi7 = interactionChannelViewBag.value) === null || _interactionChannelVi7 === void 0 ? void 0 : _interactionChannelVi7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete interaction channel.";
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
              var _interactionChannelVi8;
              var result = yield invokeBlockAction("Edit", {
                key: (_interactionChannelVi8 = interactionChannelViewBag.value) === null || _interactionChannelVi8 === void 0 ? void 0 : _interactionChannelVi8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                interactionChannelEditBag.value = result.data.entity;
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
                entity: interactionChannelEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  interactionChannelViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save interaction channel.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified interaction channel could not be viewed.";
          } else if (!config.entity.idKey) {
            interactionChannelEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              innerHTML: blockError.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
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
              entityTypeName: "InteractionChannel",
              isAuditHidden: true,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: unref(isSecurityHidden),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: interactionChannelViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: interactionChannelEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => interactionChannelEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "isSecurityHidden"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/interactionChannelDetail.obs";

    })
  };
}));
//# sourceMappingURL=interactionChannelDetail.obs.js.map
