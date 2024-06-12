System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/lavaCommandPicker.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/keyValueList.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, unref, createVNode, isRef, toDisplayString, withCtx, Fragment, renderList, createBlock, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, CategoryPicker, CodeEditor, LavaCommandPicker, RadioButtonList, KeyValueList, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      createVNode = module.createVNode;
      isRef = module.isRef;
      toDisplayString = module.toDisplayString;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
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
      TextBox = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      LavaCommandPicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
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
        key: 0
      };
      var _hoisted_2$1 = {
        class: "row"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "row"
      };
      var _hoisted_6 = {
        class: "col-md-2"
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
        key: 1
      };
      var _hoisted_11 = ["textContent"];
      var _hoisted_12 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_13 = createTextVNode(" This is a system lava shortcode so editing is limited. ");
      var _hoisted_14 = {
        class: "row"
      };
      var _hoisted_15 = {
        class: "col-md-12"
      };
      var _hoisted_16 = {
        class: "col-md-2"
      };
      var _hoisted_17 = createElementVNode("strong", null, "Parameters", -1);
      var _hoisted_18 = createTextVNode("                ");
      var _hoisted_19 = createTextVNode("\r\n            ");
      var _hoisted_20 = createElementVNode("strong", null, "Enabled Commands", -1);
      var _hoisted_21 = ["textContent"];
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$tag, _props$modelValue$tag2, _props$options$tagTyp, _props$modelValue$cat, _props$modelValue$doc, _props$modelValue$mar, _props$modelValue$ena, _props$modelValue$par, _enabledCommands$valu;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var tagName = propertyRef((_props$modelValue$tag = props.modelValue.tagName) !== null && _props$modelValue$tag !== void 0 ? _props$modelValue$tag : "", "TagName");
          var tagType = propertyRef((_props$modelValue$tag2 = props.modelValue.tagType) !== null && _props$modelValue$tag2 !== void 0 ? _props$modelValue$tag2 : "", "TagType");
          var tagTypes = ref((_props$options$tagTyp = props.options.tagTypes) !== null && _props$options$tagTyp !== void 0 ? _props$options$tagTyp : []);
          var categories = propertyRef((_props$modelValue$cat = props.modelValue.categories) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : [], "Categories");
          var documentation = propertyRef((_props$modelValue$doc = props.modelValue.documentation) !== null && _props$modelValue$doc !== void 0 ? _props$modelValue$doc : "", "Documentation");
          var markup = propertyRef((_props$modelValue$mar = props.modelValue.markup) !== null && _props$modelValue$mar !== void 0 ? _props$modelValue$mar : "", "Markup");
          var enabledCommands = propertyRef((_props$modelValue$ena = props.modelValue.enabledCommands) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : [], "EnabledCommands");
          var parameters = propertyRef(((_props$modelValue$par = props.modelValue.parameters) !== null && _props$modelValue$par !== void 0 ? _props$modelValue$par : []).map(s => ({
            key: s.text,
            value: s.value
          })), "Parameters");
          var enabledCommandsText = ref((_enabledCommands$valu = enabledCommands.value.map(c => {
            var _c$value;
            return (_c$value = c.value) !== null && _c$value !== void 0 ? _c$value : "";
          }).join(", ")) !== null && _enabledCommands$valu !== void 0 ? _enabledCommands$valu : "");
          var propRefs = [description, isActive, name, tagName, tagType, documentation, markup, enabledCommands, parameters, categories];
          var isSystem = computed(() => {
            var _props$modelValue$isS, _props$modelValue;
            return (_props$modelValue$isS = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
          var propertyValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.isSystem) {
              valueBuilder.addTextValue("System", props.modelValue.isSystem ? "Yes" : "No");
            }
            if (props.modelValue.tagName) {
              valueBuilder.addTextValue("Tag Name", props.modelValue.tagName);
            }
            if (props.modelValue.tagType) {
              valueBuilder.addTextValue("Tag Type", props.modelValue.tagType);
            }
            return valueBuilder.build();
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$tag3, _props$modelValue$tag4, _props$modelValue$doc2, _props$modelValue$mar2, _props$modelValue$ena2, _props$modelValue$par2, _props$modelValue$cat2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(tagName, (_props$modelValue$tag3 = props.modelValue.tagName) !== null && _props$modelValue$tag3 !== void 0 ? _props$modelValue$tag3 : "");
            updateRefValue(tagType, (_props$modelValue$tag4 = props.modelValue.tagType) !== null && _props$modelValue$tag4 !== void 0 ? _props$modelValue$tag4 : "");
            updateRefValue(documentation, (_props$modelValue$doc2 = props.modelValue.documentation) !== null && _props$modelValue$doc2 !== void 0 ? _props$modelValue$doc2 : "");
            updateRefValue(markup, (_props$modelValue$mar2 = props.modelValue.markup) !== null && _props$modelValue$mar2 !== void 0 ? _props$modelValue$mar2 : "");
            updateRefValue(enabledCommands, (_props$modelValue$ena2 = props.modelValue.enabledCommands) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : []);
            updateRefValue(parameters, ((_props$modelValue$par2 = props.modelValue.parameters) !== null && _props$modelValue$par2 !== void 0 ? _props$modelValue$par2 : []).map(s => ({
              key: s.text,
              value: s.value
            })));
            updateRefValue(categories, (_props$modelValue$cat2 = props.modelValue.categories) !== null && _props$modelValue$cat2 !== void 0 ? _props$modelValue$cat2 : []);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              tagName: tagName.value,
              tagType: tagType.value,
              documentation: documentation.value,
              markup: markup.value,
              enabledCommands: enabledCommands.value,
              parameters: parameters.value.map(s => {
                var _s$value, _s$key;
                return {
                  value: (_s$value = s.value) !== null && _s$value !== void 0 ? _s$value : "",
                  text: (_s$key = s.key) !== null && _s$key !== void 0 ? _s$key : ""
                };
              }),
              categories: categories.value
            });
            emit("update:modelValue", newValue);
          }, {
            deep: true
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [!unref(isSystem) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(tagName),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(tagName) ? tagName.value = $event : null),
              help: "This will be the name of the shortcode when used in Lava.",
              label: "Tag Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"]), createVNode(unref(RadioButtonList), {
              modelValue: unref(tagType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(tagType) ? tagType.value = $event : null),
              items: tagTypes.value,
              repeatColumns: 0,
              label: "Tag Type",
              rules: "required",
              help: "Block tags require an end tag while inline do not.",
              horizontal: ""
            }, null, 8, ["modelValue", "items"])])]), createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createVNode(unref(CategoryPicker), {
              modelValue: unref(categories),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(categories) ? categories.value = $event : null),
              label: "Categories",
              multiple: "",
              entityTypeGuid: unref(EntityType).LavaShortcode
            }, null, 8, ["modelValue", "entityTypeGuid"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              modelValue: unref(documentation),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(documentation) ? documentation.value = $event : null),
              label: "Documentation",
              help: "Technical description of the internals of the shortcode.",
              theme: "rock",
              mode: "text",
              editorHeight: 250
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              modelValue: unref(markup),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(markup) ? markup.value = $event : null),
              label: "Short Code Markup",
              theme: "rock",
              mode: "text",
              editorHeight: 350,
              rules: "required"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(KeyValueList), {
              label: "Parameters",
              help: "List the parameters for your shortcode. If you provide a value here it will become the default value if none is provided.",
              keyPlaceholder: "Key",
              valuePlaceholder: "Value",
              modelValue: unref(parameters),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(parameters) ? parameters.value = $event : null)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(LavaCommandPicker), {
              modelValue: unref(enabledCommands),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(enabledCommands) ? enabledCommands.value = $event : null),
              label: "Enabled Lava Commands",
              multiple: true
            }, null, 8, ["modelValue"])])])])) : (openBlock(), createElementBlock("div", _hoisted_10, [createElementVNode("p", {
              textContent: toDisplayString(unref(description))
            }, null, 8, _hoisted_11), createVNode(unref(NotificationBox), {
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_12, _hoisted_13]),
              _: 1
            }), createElementVNode("div", _hoisted_14, [createElementVNode("div", _hoisted_15, [createVNode(unref(ValueDetailList), {
              modelValue: unref(propertyValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_16, [createVNode(unref(CategoryPicker), {
              modelValue: unref(categories),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(categories) ? categories.value = $event : null),
              label: "Categories",
              multiple: "",
              entityTypeGuid: unref(EntityType).LavaShortcode
            }, null, 8, ["modelValue", "entityTypeGuid"])])]), createVNode(unref(CodeEditor), {
              modelValue: unref(markup),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(markup) ? markup.value = $event : null),
              label: "Short Code Markup",
              theme: "rock",
              mode: "text",
              editorHeight: 850,
              rules: "required"
            }, null, 8, ["modelValue"]), _hoisted_17, createElementVNode("pre", null, [_hoisted_18, (openBlock(true), createElementBlock(Fragment, null, renderList(unref(parameters), parameter => {
              return openBlock(), createElementBlock("p", null, [createElementVNode("strong", null, toDisplayString(parameter.key) + " : ", 1), createTextVNode(toDisplayString(parameter.value), 1)]);
            }), 256)), _hoisted_19]), _hoisted_20, createElementVNode("p", {
              textContent: toDisplayString(enabledCommandsText.value)
            }, null, 8, _hoisted_21)])), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Cms/LavaShortcodeDetail/editPanel.partial.obs";

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
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Name", props.modelValue.name);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if (props.modelValue.isSystem) {
              valueBuilder.addTextValue("System", props.modelValue.isSystem ? "Yes" : "No");
            }
            if (props.modelValue.tagName) {
              valueBuilder.addTextValue("Tag Name", props.modelValue.tagName);
            }
            if (props.modelValue.tagType) {
              valueBuilder.addTextValue("Tag Type", props.modelValue.tagType);
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

      script$1.__file = "src/Cms/LavaShortcodeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'lavaShortcodeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var lavaShortcodeViewBag = ref(config.entity);
          var lavaShortcodeEditBag = ref({});
          var entityTypeGuid = EntityType.LavaShortcode;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "categories", "description", "documentation", "isActive", "markup", "name", "tagName", "tagType", "enabledCommands", "parameters"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(lavaShortcodeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _lavaShortcodeViewBag, _lavaShortcodeViewBag2;
            return (_lavaShortcodeViewBag = (_lavaShortcodeViewBag2 = lavaShortcodeViewBag.value) === null || _lavaShortcodeViewBag2 === void 0 ? void 0 : _lavaShortcodeViewBag2.name) !== null && _lavaShortcodeViewBag !== void 0 ? _lavaShortcodeViewBag : "";
          });
          var entityKey = computed(() => {
            var _lavaShortcodeEditBag, _lavaShortcodeEditBag2;
            return (_lavaShortcodeEditBag = (_lavaShortcodeEditBag2 = lavaShortcodeEditBag.value) === null || _lavaShortcodeEditBag2 === void 0 ? void 0 : _lavaShortcodeEditBag2.idKey) !== null && _lavaShortcodeEditBag !== void 0 ? _lavaShortcodeEditBag : "";
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var isDeletable = computed(() => {
            var _lavaShortcodeViewBag3;
            return ((_lavaShortcodeViewBag3 = lavaShortcodeViewBag.value) === null || _lavaShortcodeViewBag3 === void 0 ? void 0 : _lavaShortcodeViewBag3.isSystem) !== true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var blockLabels = computed(() => {
            var _lavaShortcodeViewBag4;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_lavaShortcodeViewBag4 = lavaShortcodeViewBag.value) === null || _lavaShortcodeViewBag4 === void 0 ? void 0 : _lavaShortcodeViewBag4.isActive) === true) {
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _lavaShortcodeEditBag3;
              if (!((_lavaShortcodeEditBag3 = lavaShortcodeEditBag.value) !== null && _lavaShortcodeEditBag3 !== void 0 && _lavaShortcodeEditBag3.idKey)) {
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
              var _lavaShortcodeEditBag4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_lavaShortcodeEditBag4 = lavaShortcodeEditBag.value) === null || _lavaShortcodeEditBag4 === void 0 ? void 0 : _lavaShortcodeEditBag4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete lava shortcode.";
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
              var _lavaShortcodeViewBag5;
              var result = yield invokeBlockAction("Edit", {
                key: (_lavaShortcodeViewBag5 = lavaShortcodeViewBag.value) === null || _lavaShortcodeViewBag5 === void 0 ? void 0 : _lavaShortcodeViewBag5.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                lavaShortcodeEditBag.value = result.data.entity;
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
                entity: lavaShortcodeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  lavaShortcodeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save lava shortcode.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified lava shortcode could not be viewed.";
          } else if (!config.entity.idKey) {
            lavaShortcodeEditBag.value = config.entity;
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
              entityTypeName: "LavaShortcode",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isDeletable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: lavaShortcodeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: lavaShortcodeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => lavaShortcodeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/lavaShortcodeDetail.obs";

    })
  };
}));
//# sourceMappingURL=lavaShortcodeDetail.obs.js.map
