System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/colorPicker.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, Fragment, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, CategoryPicker, PersonPicker, ColorPicker, EntityTypePicker, RadioButtonList, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      CategoryPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$cat, _props$modelValue$own, _props$modelValue$ico, _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$ent3, _props$modelValue$bac;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var category = propertyRef((_props$modelValue$cat = props.modelValue.category) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : undefined, "CategoryId");
          var scope = ref(props.modelValue.ownerPersonAlias ? "personal" : "organizational");
          var owner = propertyRef((_props$modelValue$own = props.modelValue.ownerPersonAlias) !== null && _props$modelValue$own !== void 0 ? _props$modelValue$own : undefined, "OwnerPersonAliasId");
          var iconCssClass = propertyRef((_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "", "IconCssClass");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : null, "EntityTypeId");
          var entityTypeQualifierColumn = propertyRef((_props$modelValue$ent2 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "", "EntityTypeQualifierColumn");
          var entityTypeQualifierValue = propertyRef((_props$modelValue$ent3 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "", "EntityTypeQualifierValue");
          var backgroundColor = propertyRef((_props$modelValue$bac = props.modelValue.backgroundColor) !== null && _props$modelValue$bac !== void 0 ? _props$modelValue$bac : "", "BackgroundColor");
          var personal = "personal";
          var organizational = "organizational";
          var scopeItems = [{
            value: organizational,
            text: "Organizational"
          }, {
            value: personal,
            text: "Personal"
          }];
          var tagEntityTypeGuid = EntityType.Tag;
          var propRefs = [description, isActive, name, category, iconCssClass, entityType, entityTypeQualifierColumn, entityTypeQualifierValue, backgroundColor, owner];
          var isPersonalScope = computed(() => {
            var isPersonal = scope.value === personal;
            return isPersonal;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$cat2, _props$modelValue$own2, _props$modelValue$ico2, _props$modelValue$ent4, _props$modelValue$ent5, _props$modelValue$ent6, _props$modelValue$bac2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(category, (_props$modelValue$cat2 = props.modelValue.category) !== null && _props$modelValue$cat2 !== void 0 ? _props$modelValue$cat2 : undefined);
            updateRefValue(owner, (_props$modelValue$own2 = props.modelValue.ownerPersonAlias) !== null && _props$modelValue$own2 !== void 0 ? _props$modelValue$own2 : undefined);
            updateRefValue(iconCssClass, (_props$modelValue$ico2 = props.modelValue.iconCssClass) !== null && _props$modelValue$ico2 !== void 0 ? _props$modelValue$ico2 : "");
            updateRefValue(entityType, (_props$modelValue$ent4 = props.modelValue.entityType) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : {});
            updateRefValue(entityTypeQualifierColumn, (_props$modelValue$ent5 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent5 !== void 0 ? _props$modelValue$ent5 : "");
            updateRefValue(entityTypeQualifierValue, (_props$modelValue$ent6 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent6 !== void 0 ? _props$modelValue$ent6 : "");
            updateRefValue(backgroundColor, (_props$modelValue$bac2 = props.modelValue.backgroundColor) !== null && _props$modelValue$bac2 !== void 0 ? _props$modelValue$bac2 : "");
          });
          watch([attributeValues, scope, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              category: category.value,
              ownerPersonAlias: scope.value === organizational ? null : owner.value,
              iconCssClass: iconCssClass.value,
              entityType: entityType.value,
              entityTypeQualifierColumn: entityTypeQualifierColumn.value,
              entityTypeQualifierValue: entityTypeQualifierValue.value,
              backgroundColor: backgroundColor.value
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
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(CategoryPicker), {
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(category) ? category.value = $event : null),
              label: "Category",
              multiple: false,
              entityTypeGuid: unref(tagEntityTypeGuid)
            }, null, 8, ["modelValue", "entityTypeGuid"]), createVNode(unref(RadioButtonList), {
              modelValue: scope.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => scope.value = $event),
              label: "Scope",
              horizontal: "",
              items: scopeItems
            }, null, 8, ["modelValue"]), unref(isPersonalScope) ? (openBlock(), createBlock(unref(PersonPicker), {
              key: 0,
              modelValue: unref(owner),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(owner) ? owner.value = $event : null),
              label: "Owner"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
              modelValue: unref(iconCssClass),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(iconCssClass) ? iconCssClass.value = $event : null),
              label: "Icon Css Class"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(EntityTypePicker), {
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(entityType) ? entityType.value = $event : null),
              multiple: false,
              enhanceForLongLists: true,
              label: "Entity Type"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(entityTypeQualifierColumn),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(entityTypeQualifierColumn) ? entityTypeQualifierColumn.value = $event : null),
              label: "Entity Type Qualifier Column"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(entityTypeQualifierValue),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(entityTypeQualifierValue) ? entityTypeQualifierValue.value = $event : null),
              label: "Entity Type Qualifier Value"
            }, null, 8, ["modelValue"]), createVNode(unref(ColorPicker), {
              modelValue: unref(backgroundColor),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(backgroundColor) ? backgroundColor.value = $event : null),
              label: "Background Color",
              help: "The background color to use when displaying tag."
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/TagDetail/editPanel.partial.obs";

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
              valueBuilder.addTextValue("", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$cat;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (!props.modelValue.ownerPersonAlias) {
              valueBuilder.addTextValue("Scope", "Organizational");
            } else {
              valueBuilder.addTextValue("Scope", "Personal");
            }
            if ((_props$modelValue$cat = props.modelValue.category) !== null && _props$modelValue$cat !== void 0 && _props$modelValue$cat.text) {
              valueBuilder.addTextValue("Category", props.modelValue.category.text);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$own;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$own = props.modelValue.ownerPersonAlias) !== null && _props$modelValue$own !== void 0 && _props$modelValue$own.text) {
              valueBuilder.addTextValue("Owner", props.modelValue.ownerPersonAlias.text);
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

      script$1.__file = "src/Core/TagDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'tagDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var tagViewBag = ref(config.entity);
          var tagEditBag = ref({});
          var entityTypeGuid = EntityType.Tag;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "backgroundColor", "category", "description", "entityType", "entityTypeQualifierColumn", "entityTypeQualifierValue", "iconCssClass", "isActive", "name", "ownerPersonAlias"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(tagEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _tagViewBag$value$nam, _tagViewBag$value;
            return (_tagViewBag$value$nam = (_tagViewBag$value = tagViewBag.value) === null || _tagViewBag$value === void 0 ? void 0 : _tagViewBag$value.name) !== null && _tagViewBag$value$nam !== void 0 ? _tagViewBag$value$nam : "";
          });
          var entityKey = computed(() => {
            var _tagViewBag$value$idK, _tagViewBag$value2;
            return (_tagViewBag$value$idK = (_tagViewBag$value2 = tagViewBag.value) === null || _tagViewBag$value2 === void 0 ? void 0 : _tagViewBag$value2.idKey) !== null && _tagViewBag$value$idK !== void 0 ? _tagViewBag$value$idK : "";
          });
          var isSecurityVisible = computed(() => {
            var _tagViewBag$value3, _tagViewBag$value3$ow, _tagViewBag$value4;
            return !((_tagViewBag$value3 = tagViewBag.value) !== null && _tagViewBag$value3 !== void 0 && (_tagViewBag$value3$ow = _tagViewBag$value3.ownerPersonAlias) !== null && _tagViewBag$value3$ow !== void 0 && _tagViewBag$value3$ow.value) && ((_tagViewBag$value4 = tagViewBag.value) === null || _tagViewBag$value4 === void 0 ? void 0 : _tagViewBag$value4.canAdministrate) === true;
          });
          var blockLabels = computed(() => {
            var _tagViewBag$value5, _tagViewBag$value6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_tagViewBag$value5 = tagViewBag.value) === null || _tagViewBag$value5 === void 0 ? void 0 : _tagViewBag$value5.isActive) === true) {
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
            if ((_tagViewBag$value6 = tagViewBag.value) !== null && _tagViewBag$value6 !== void 0 && _tagViewBag$value6.entityType) {
              var _tagViewBag$value$ent;
              labels.push({
                title: (_tagViewBag$value$ent = tagViewBag.value.entityType.text) !== null && _tagViewBag$value$ent !== void 0 ? _tagViewBag$value$ent : "",
                type: "default"
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
              var _tagEditBag$value;
              if (!((_tagEditBag$value = tagEditBag.value) !== null && _tagEditBag$value !== void 0 && _tagEditBag$value.idKey)) {
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
              var _tagViewBag$value7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_tagViewBag$value7 = tagViewBag.value) === null || _tagViewBag$value7 === void 0 ? void 0 : _tagViewBag$value7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete tag.";
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
              var _tagViewBag$value8;
              var result = yield invokeBlockAction("Edit", {
                key: (_tagViewBag$value8 = tagViewBag.value) === null || _tagViewBag$value8 === void 0 ? void 0 : _tagViewBag$value8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                tagEditBag.value = result.data.entity;
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
                entity: tagEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  tagViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save tag.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified tag could not be viewed.";
          } else if (!config.entity.idKey) {
            tagEditBag.value = config.entity;
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
              entityTypeName: "Tag",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: !unref(isSecurityVisible),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: tagViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: tagEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => tagEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "isSecurityHidden"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/tagDetail.obs";

    })
  };
}));
//# sourceMappingURL=tagDetail.obs.js.map
