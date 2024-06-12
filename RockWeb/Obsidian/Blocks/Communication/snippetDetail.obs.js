System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/toggle.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, withCtx, createCommentVNode, createBlock, Fragment, NotificationBox, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, Toggle, PersonPicker, CategoryPicker, CodeEditor, TransitionVerticalCollapse, RockLabel, setPropertiesBoxValue, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, useEntityDetailBlock, propertyRef, updateRefValue, EntityType, ValueDetailList, ValueDetailListItemBuilder;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
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
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createBlock = module.createBlock;
      Fragment = module.Fragment;
    }, function (module) {
      NotificationBox = module["default"];
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
      Toggle = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      setPropertiesBoxValue = module.setPropertiesBoxValue;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useEntityDetailBlock = module.useEntityDetailBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      EntityType = module.EntityType;
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
        key: 0,
        class: "col-md-6"
      };
      var _hoisted_6 = {
        key: 0,
        class: "col-md-6 mt-4"
      };
      var _hoisted_7 = createTextVNode(" Shared ");
      var _hoisted_8 = createTextVNode(" Personal ");
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "col-md-3"
      };
      var _hoisted_11 = {
        class: "pull-right"
      };
      var _hoisted_12 = createTextVNode(" Lava ");
      var _hoisted_13 = createTextVNode(" Text ");
      var _hoisted_14 = {
        class: "mt-5"
      };
      var _hoisted_15 = createTextVNode("Snippet");
      var _hoisted_16 = {
        key: 0
      };
      var _hoisted_17 = {
        key: 1
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
          var _props$modelValue$bag, _props$modelValue$bag2, _props$modelValue$bag3, _props$modelValue$bag4, _props$modelValue$bag5, _props$modelValue$bag6, _props$modelValue$bag7, _props$modelValue$bag8, _props$modelValue$bag9, _props$modelValue$bag10, _props$modelValue$bag11, _props$modelValue$bag12, _props$modelValue$bag13, _props$modelValue$bag14, _props$modelValue$bag15, _props$modelValue$bag16, _props$modelValue$bag17, _props$modelValue$bag18, _props$modelValue$bag19, _props$modelValue$bag20;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$bag = (_props$modelValue$bag2 = props.modelValue.bag) === null || _props$modelValue$bag2 === void 0 ? void 0 : _props$modelValue$bag2.attributes) !== null && _props$modelValue$bag !== void 0 ? _props$modelValue$bag : {});
          var attributeValues = ref((_props$modelValue$bag3 = (_props$modelValue$bag4 = props.modelValue.bag) === null || _props$modelValue$bag4 === void 0 ? void 0 : _props$modelValue$bag4.attributeValues) !== null && _props$modelValue$bag3 !== void 0 ? _props$modelValue$bag3 : {});
          var description = propertyRef((_props$modelValue$bag5 = (_props$modelValue$bag6 = props.modelValue.bag) === null || _props$modelValue$bag6 === void 0 ? void 0 : _props$modelValue$bag6.description) !== null && _props$modelValue$bag5 !== void 0 ? _props$modelValue$bag5 : "", "Description");
          var isActive = propertyRef((_props$modelValue$bag7 = (_props$modelValue$bag8 = props.modelValue.bag) === null || _props$modelValue$bag8 === void 0 ? void 0 : _props$modelValue$bag8.isActive) !== null && _props$modelValue$bag7 !== void 0 ? _props$modelValue$bag7 : false, "IsActive");
          var content = propertyRef((_props$modelValue$bag9 = (_props$modelValue$bag10 = props.modelValue.bag) === null || _props$modelValue$bag10 === void 0 ? void 0 : _props$modelValue$bag10.content) !== null && _props$modelValue$bag9 !== void 0 ? _props$modelValue$bag9 : "", "Content");
          var name = propertyRef((_props$modelValue$bag11 = (_props$modelValue$bag12 = props.modelValue.bag) === null || _props$modelValue$bag12 === void 0 ? void 0 : _props$modelValue$bag12.name) !== null && _props$modelValue$bag11 !== void 0 ? _props$modelValue$bag11 : "", "Name");
          var isShared = ref(((_props$modelValue$bag13 = props.modelValue.bag) === null || _props$modelValue$bag13 === void 0 ? void 0 : _props$modelValue$bag13.ownerPersonAlias) == null);
          var isLava = ref((_props$modelValue$bag14 = (_props$modelValue$bag15 = props.modelValue.bag) === null || _props$modelValue$bag15 === void 0 ? void 0 : (_props$modelValue$bag16 = _props$modelValue$bag15.content) === null || _props$modelValue$bag16 === void 0 ? void 0 : _props$modelValue$bag16.includes("{")) !== null && _props$modelValue$bag14 !== void 0 ? _props$modelValue$bag14 : false);
          var isAuthorizedToEdit = ref(props.options.isAuthorizedToEdit);
          var isPersonalAllowed = ref(props.options.isPersonalAllowed);
          var ownerPersonAlias = propertyRef((_props$modelValue$bag17 = (_props$modelValue$bag18 = props.modelValue.bag) === null || _props$modelValue$bag18 === void 0 ? void 0 : _props$modelValue$bag18.ownerPersonAlias) !== null && _props$modelValue$bag17 !== void 0 ? _props$modelValue$bag17 : undefined, "OwnerPersonAlias");
          var category = propertyRef((_props$modelValue$bag19 = (_props$modelValue$bag20 = props.modelValue.bag) === null || _props$modelValue$bag20 === void 0 ? void 0 : _props$modelValue$bag20.category) !== null && _props$modelValue$bag19 !== void 0 ? _props$modelValue$bag19 : null, "Category");
          var entityTypeGuid = EntityType.Snippet;
          var propRefs = [description, isActive, content, name, ownerPersonAlias, category];
          var ownerHelpText = computed(() => {
            var helpText = "When an owner is provided only this person will be able to see the snippet.";
            return isAuthorizedToEdit ? helpText : helpText + "To make the snippet public you will need edit access to the SMS snippet type.";
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$bag21, _props$modelValue$bag22, _props$modelValue$bag23, _props$modelValue$bag24, _props$modelValue$bag25, _props$modelValue$bag26, _props$modelValue$bag27, _props$modelValue$bag28, _props$modelValue$bag29, _props$modelValue$bag30, _props$modelValue$bag31, _props$modelValue$bag32, _props$modelValue$bag33, _props$modelValue$bag34, _props$modelValue$bag35, _props$modelValue$bag36;
            updateRefValue(attributes, (_props$modelValue$bag21 = (_props$modelValue$bag22 = props.modelValue.bag) === null || _props$modelValue$bag22 === void 0 ? void 0 : _props$modelValue$bag22.attributes) !== null && _props$modelValue$bag21 !== void 0 ? _props$modelValue$bag21 : {});
            updateRefValue(attributeValues, (_props$modelValue$bag23 = (_props$modelValue$bag24 = props.modelValue.bag) === null || _props$modelValue$bag24 === void 0 ? void 0 : _props$modelValue$bag24.attributeValues) !== null && _props$modelValue$bag23 !== void 0 ? _props$modelValue$bag23 : {});
            updateRefValue(description, (_props$modelValue$bag25 = (_props$modelValue$bag26 = props.modelValue.bag) === null || _props$modelValue$bag26 === void 0 ? void 0 : _props$modelValue$bag26.description) !== null && _props$modelValue$bag25 !== void 0 ? _props$modelValue$bag25 : "");
            updateRefValue(isActive, (_props$modelValue$bag27 = (_props$modelValue$bag28 = props.modelValue.bag) === null || _props$modelValue$bag28 === void 0 ? void 0 : _props$modelValue$bag28.isActive) !== null && _props$modelValue$bag27 !== void 0 ? _props$modelValue$bag27 : false);
            updateRefValue(content, (_props$modelValue$bag29 = (_props$modelValue$bag30 = props.modelValue.bag) === null || _props$modelValue$bag30 === void 0 ? void 0 : _props$modelValue$bag30.content) !== null && _props$modelValue$bag29 !== void 0 ? _props$modelValue$bag29 : "");
            updateRefValue(name, (_props$modelValue$bag31 = (_props$modelValue$bag32 = props.modelValue.bag) === null || _props$modelValue$bag32 === void 0 ? void 0 : _props$modelValue$bag32.name) !== null && _props$modelValue$bag31 !== void 0 ? _props$modelValue$bag31 : "");
            updateRefValue(ownerPersonAlias, (_props$modelValue$bag33 = (_props$modelValue$bag34 = props.modelValue.bag) === null || _props$modelValue$bag34 === void 0 ? void 0 : _props$modelValue$bag34.ownerPersonAlias) !== null && _props$modelValue$bag33 !== void 0 ? _props$modelValue$bag33 : undefined);
            updateRefValue(category, (_props$modelValue$bag35 = (_props$modelValue$bag36 = props.modelValue.bag) === null || _props$modelValue$bag36 === void 0 ? void 0 : _props$modelValue$bag36.category) !== null && _props$modelValue$bag35 !== void 0 ? _props$modelValue$bag35 : null);
          });
          watch([attributeValues, isShared, ...propRefs], () => {
            var newValue = {
              bag: _objectSpread2({}, props.modelValue.bag)
            };
            setPropertiesBoxValue(newValue, "attributeValues", attributeValues.value);
            setPropertiesBoxValue(newValue, "description", description.value);
            setPropertiesBoxValue(newValue, "isActive", isActive.value);
            setPropertiesBoxValue(newValue, "content", content.value);
            setPropertiesBoxValue(newValue, "name", name.value);
            setPropertiesBoxValue(newValue, "ownerPersonAlias", isShared.value ? null : ownerPersonAlias.value);
            setPropertiesBoxValue(newValue, "category", category.value);
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
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [isPersonalAllowed.value ? (openBlock(), createElementBlock("div", _hoisted_5, [isAuthorizedToEdit.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(Toggle), {
              modelValue: isShared.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isShared.value = $event),
              trueText: "On",
              falseText: "Off"
            }, {
              on: withCtx(() => [_hoisted_7]),
              off: withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["modelValue"])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_9, [!isShared.value ? (openBlock(), createBlock(unref(PersonPicker), {
              key: 0,
              modelValue: unref(ownerPersonAlias),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(ownerPersonAlias) ? ownerPersonAlias.value = $event : null),
              label: "Owner",
              help: unref(ownerHelpText),
              rules: "required"
            }, null, 8, ["modelValue", "help"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_10, [createVNode(unref(CategoryPicker), {
              label: "Category",
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(category) ? category.value = $event : null),
              multiple: false,
              entityTypeGuid: unref(entityTypeGuid)
            }, null, 8, ["modelValue", "entityTypeGuid"])])]), createElementVNode("div", _hoisted_11, [createVNode(unref(Toggle), {
              label: "",
              modelValue: isLava.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isLava.value = $event),
              trueText: "On",
              btnSize: "xs"
            }, {
              on: withCtx(() => [_hoisted_12]),
              off: withCtx(() => [_hoisted_13]),
              _: 1
            }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_14, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_15]),
              _: 1
            }), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [!isLava.value ? (openBlock(), createElementBlock("div", _hoisted_16, [createVNode(unref(TextBox), {
                modelValue: unref(content),
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(content) ? content.value = $event : null),
                textMode: "multiline",
                rows: 10
              }, null, 8, ["modelValue"])])) : (openBlock(), createElementBlock("div", _hoisted_17, [createVNode(unref(CodeEditor), {
                modelValue: unref(content),
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(content) ? content.value = $event : null),
                theme: "rock",
                mode: "text",
                editorHeight: 200
              }, null, 8, ["modelValue"])]))]),
              _: 1
            })]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Communication/SnippetDetail/editPanel.partial.obs";

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
            if (props.modelValue.content) {
              valueBuilder.addTextValue("Content", props.modelValue.content);
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

      script$1.__file = "src/Communication/SnippetDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'snippetDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var blockError = ref("");
          var errorMessage = ref("");
          var snippetViewBag = ref(config.entity);
          var snippetEditBag = ref({
            bag: {}
          });
          var panelMode = ref(DetailPanelMode.View);
          var baseBlock = useEntityDetailBlock({
            blockConfig: config,
            entity: snippetEditBag
          });
          var panelName = computed(() => {
            var _snippetViewBag$value, _snippetViewBag$value2;
            return (_snippetViewBag$value = (_snippetViewBag$value2 = snippetViewBag.value) === null || _snippetViewBag$value2 === void 0 ? void 0 : _snippetViewBag$value2.name) !== null && _snippetViewBag$value !== void 0 ? _snippetViewBag$value : "";
          });
          var entityKey = computed(() => {
            var _snippetViewBag$value3, _snippetViewBag$value4;
            return (_snippetViewBag$value3 = (_snippetViewBag$value4 = snippetViewBag.value) === null || _snippetViewBag$value4 === void 0 ? void 0 : _snippetViewBag$value4.idKey) !== null && _snippetViewBag$value3 !== void 0 ? _snippetViewBag$value3 : "";
          });
          var blockLabels = computed(() => {
            var _snippetViewBag$value5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_snippetViewBag$value5 = snippetViewBag.value) === null || _snippetViewBag$value5 === void 0 ? void 0 : _snippetViewBag$value5.isActive) === true) {
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
          var isSecurityVisible = computed(() => {
            var _config$entity;
            return ((_config$entity = config.entity) === null || _config$entity === void 0 ? void 0 : _config$entity.canAdministrate) === true;
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _snippetEditBag$value;
              if (!((_snippetEditBag$value = snippetEditBag.value.bag) !== null && _snippetEditBag$value !== void 0 && _snippetEditBag$value.idKey)) {
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
              var _snippetViewBag$value6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_snippetViewBag$value6 = snippetViewBag.value) === null || _snippetViewBag$value6 === void 0 ? void 0 : _snippetViewBag$value6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete snippet.";
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
              var _snippetViewBag$value7;
              var result = yield invokeBlockAction("Edit", {
                key: (_snippetViewBag$value7 = snippetViewBag.value) === null || _snippetViewBag$value7 === void 0 ? void 0 : _snippetViewBag$value7.idKey
              });
              if (result.isSuccess && result.data && result.data.bag) {
                var _result$data$validPro;
                snippetEditBag.value = {
                  bag: result.data.bag,
                  validProperties: (_result$data$validPro = result.data.validProperties) !== null && _result$data$validPro !== void 0 ? _result$data$validPro : Object.keys(result.data.bag)
                };
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
              var result = yield invokeBlockAction("Save", {
                box: snippetEditBag.value
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  snippetViewBag.value = result.data.bag;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save snippet.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified snippet could not be viewed.";
          } else if (!config.entity.idKey) {
            snippetEditBag.value = {
              bag: config.entity
            };
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              innerHTML: blockError.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              innerHTML: errorMessage.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: !unref(isSecurityVisible),
              isFullScreenVisible: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: snippetViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: snippetEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => snippetEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: unref(baseBlock).onPropertyChanged
              }, null, 8, ["modelValue", "options", "onPropertyChanged"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "isDeleteVisible", "isEditVisible", "isSecurityHidden"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Communication/snippetDetail.obs";

    })
  };
}));
//# sourceMappingURL=snippetDetail.obs.js.map
