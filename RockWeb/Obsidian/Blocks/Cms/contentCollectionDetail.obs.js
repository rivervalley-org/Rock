System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/component', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/inlineSwitch.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Enums/Cms/contentCollectionFilterControl', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, toDisplayString, createVNode, unref, normalizeClass, normalizeStyle, createCommentVNode, withCtx, createTextVNode, onBeforeUnmount, Fragment, withModifiers, withDirectives, renderList, createBlock, isRef, NotificationBox, EntityType, DetailBlock, DetailPanelMode, CheckBoxList, CheckBox, CodeEditor, TextBox, useFormState, newGuid, areEqual, emptyGuid, toGuidOrNull, DropDownList, Modal, NumberBox, Panel, SectionHeader, useDragReorder, DragReorder, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, alert, confirmDelete, updateRefValue, propertyRef, RockButton, AttributeValuesContainer, InlineSwitch, RadioButtonList, ContentCollectionFilterControl, FieldType, toNumberOrNull, ValueDetailList, ValueDetailListItemBuilder, pluralConditional, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      unref = module.unref;
      normalizeClass = module.normalizeClass;
      normalizeStyle = module.normalizeStyle;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      onBeforeUnmount = module.onBeforeUnmount;
      Fragment = module.Fragment;
      withModifiers = module.withModifiers;
      withDirectives = module.withDirectives;
      renderList = module.renderList;
      createBlock = module.createBlock;
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
      CheckBoxList = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useFormState = module.useFormState;
    }, function (module) {
      newGuid = module.newGuid;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      useDragReorder = module.useDragReorder;
      DragReorder = module.DragReorder;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      alert = module.alert;
      confirmDelete = module.confirmDelete;
    }, function (module) {
      updateRefValue = module.updateRefValue;
      propertyRef = module.propertyRef;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      ContentCollectionFilterControl = module.ContentCollectionFilterControl;
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      pluralConditional = module.pluralConditional;
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

      var _hoisted_1$7 = {
        key: 0
      };
      var _hoisted_2$7 = createElementVNode("td", null, [createElementVNode("i", {
        class: "fa fa-check"
      })], -1);
      var _hoisted_3$7 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_4$6 = [_hoisted_3$7];
      var _hoisted_5$6 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_6$4 = [_hoisted_5$6];
      var _hoisted_7$4 = {
        key: 1
      };
      var _hoisted_8$4 = {
        colspan: "3"
      };
      var _hoisted_9$4 = {
        class: "row"
      };
      var _hoisted_10$3 = {
        class: "col-md-4"
      };
      var _hoisted_11$3 = {
        class: "col-md-4"
      };
      var _hoisted_12$3 = {
        class: "col-md-4"
      };
      var _hoisted_13$3 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_14$3 = createElementVNode("i", {
        class: "fa fa-check"
      }, null, -1);
      var _hoisted_15$1 = [_hoisted_14$3];
      var _hoisted_16$1 = createElementVNode("i", {
        class: "fa fa-minus"
      }, null, -1);
      var _hoisted_17$1 = [_hoisted_16$1];
      var script$9 = defineComponent({
        name: 'customKeySource.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          editMode: {
            type: Boolean,
            required: true
          }
        },
        emits: ["update:modelValue", "update:editMode", "remove"],
        setup(__props, _ref) {
          var _props$modelValue$key, _props$modelValue, _props$modelValue$tit, _props$modelValue2, _props$modelValue$isM, _props$modelValue3, _props$modelValue$tem, _props$modelValue4;
          var emit = _ref.emit;
          var props = __props;
          var validationId = newGuid();
          var formState = useFormState();
          var key = ref((_props$modelValue$key = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.key) !== null && _props$modelValue$key !== void 0 ? _props$modelValue$key : "");
          var title = ref((_props$modelValue$tit = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.title) !== null && _props$modelValue$tit !== void 0 ? _props$modelValue$tit : "");
          var isMultiple = ref((_props$modelValue$isM = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isMultiple) !== null && _props$modelValue$isM !== void 0 ? _props$modelValue$isM : false);
          var template = ref((_props$modelValue$tem = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.template) !== null && _props$modelValue$tem !== void 0 ? _props$modelValue$tem : "");
          var isEditMode = ref(props.editMode);
          var isSaveDisabled = computed(() => {
            return !key.value || !title.value || !template.value;
          });
          function updateValidation() {
            if (isEditMode.value) {
              formState === null || formState === void 0 ? void 0 : formState.setError(validationId, "Custom Value", "must not be in edit mode.");
            } else {
              formState === null || formState === void 0 ? void 0 : formState.setError(validationId, "Custom Value", "");
            }
          }
          function onEditClick() {
            isEditMode.value = true;
            emit("update:editMode", isEditMode.value);
          }
          function onRemoveClick() {
            emit("remove");
          }
          function onAcceptClick() {
            emit("update:modelValue", {
              key: key.value.replace(/ /g, ""),
              title: title.value,
              isMultiple: isMultiple.value,
              template: template.value
            });
            isEditMode.value = false;
            emit("update:editMode", isEditMode.value);
          }
          function onCancelClick() {
            var _props$modelValue$key2, _props$modelValue5, _props$modelValue$tit2, _props$modelValue6, _props$modelValue$isM2, _props$modelValue7, _props$modelValue$tem2, _props$modelValue8;
            key.value = (_props$modelValue$key2 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.key) !== null && _props$modelValue$key2 !== void 0 ? _props$modelValue$key2 : "";
            title.value = (_props$modelValue$tit2 = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.title) !== null && _props$modelValue$tit2 !== void 0 ? _props$modelValue$tit2 : "";
            isMultiple.value = (_props$modelValue$isM2 = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.isMultiple) !== null && _props$modelValue$isM2 !== void 0 ? _props$modelValue$isM2 : false;
            template.value = (_props$modelValue$tem2 = (_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.template) !== null && _props$modelValue$tem2 !== void 0 ? _props$modelValue$tem2 : "";
            isEditMode.value = false;
            emit("update:editMode", isEditMode.value);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$key3, _props$modelValue9, _props$modelValue$tit3, _props$modelValue10, _props$modelValue$isM3, _props$modelValue11, _props$modelValue$tem3, _props$modelValue12;
            key.value = (_props$modelValue$key3 = (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : _props$modelValue9.key) !== null && _props$modelValue$key3 !== void 0 ? _props$modelValue$key3 : "";
            title.value = (_props$modelValue$tit3 = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : _props$modelValue10.title) !== null && _props$modelValue$tit3 !== void 0 ? _props$modelValue$tit3 : "";
            isMultiple.value = (_props$modelValue$isM3 = (_props$modelValue11 = props.modelValue) === null || _props$modelValue11 === void 0 ? void 0 : _props$modelValue11.isMultiple) !== null && _props$modelValue$isM3 !== void 0 ? _props$modelValue$isM3 : false;
            template.value = (_props$modelValue$tem3 = (_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.template) !== null && _props$modelValue$tem3 !== void 0 ? _props$modelValue$tem3 : "";
          });
          watch(() => props.editMode, () => {
            isEditMode.value = props.editMode;
          });
          watch(isEditMode, () => {
            updateValidation();
          });
          updateValidation();
          return (_ctx, _cache) => {
            return !isEditMode.value ? (openBlock(), createElementBlock("tr", _hoisted_1$7, [createElementVNode("td", null, toDisplayString(key.value), 1), createElementVNode("td", null, toDisplayString(title.value), 1), _hoisted_2$7, createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-default btn-sm",
              onClick: onEditClick
            }, _hoisted_4$6)]), createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-danger btn-sm",
              onClick: onRemoveClick
            }, _hoisted_6$4)])])) : (openBlock(), createElementBlock("tr", _hoisted_7$4, [createElementVNode("td", _hoisted_8$4, [createElementVNode("div", _hoisted_9$4, [createElementVNode("div", _hoisted_10$3, [createVNode(unref(TextBox), {
              modelValue: key.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => key.value = $event),
              label: "Key",
              rules: "required",
              help: "The key in the index to use for this custom value."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11$3, [createVNode(unref(TextBox), {
              modelValue: title.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => title.value = $event),
              label: "Title",
              rules: "required",
              help: "The title of the custom value, this is used if filtering is enabled."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_12$3, [createVNode(unref(CheckBox), {
              modelValue: isMultiple.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isMultiple.value = $event),
              label: "Multiple Values",
              help: "If enabled, then the content will be split by a comma as a multi-value field."
            }, null, 8, ["modelValue"])])]), createVNode(unref(CodeEditor), {
              modelValue: template.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => template.value = $event),
              mode: "lava",
              rules: "required",
              label: "Template"
            }, null, 8, ["modelValue"])]), createElementVNode("td", _hoisted_13$3, [createElementVNode("a", {
              class: normalizeClass(["btn btn-success btn-sm", {
                disabled: unref(isSaveDisabled)
              }]),
              onClick: onAcceptClick
            }, _hoisted_15$1, 2)]), createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-default btn-sm",
              onClick: onCancelClick
            }, _hoisted_17$1)])]));
          };
        }
      });

      script$9.__file = "src/Cms/ContentCollectionDetail/customKeySource.partial.obs";

      var _hoisted_1$6 = {
        class: "collection-source"
      };
      var _hoisted_2$6 = {
        class: "title"
      };
      var _hoisted_3$6 = {
        class: "text"
      };
      var _hoisted_4$5 = {
        key: 0,
        class: "secondary-text"
      };
      var _hoisted_5$5 = {
        class: "actions"
      };
      var _hoisted_6$3 = {
        class: "item-count badge badge-default"
      };
      var _hoisted_7$3 = createElementVNode("span", {
        class: "reorder-handle btn btn-default btn-sm"
      }, [createElementVNode("i", {
        class: "fa fa-bars"
      })], -1);
      var _hoisted_8$3 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_9$3 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var script$8 = defineComponent({
        name: 'source.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["edit", "delete"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var barStyle = computed(() => {
            return {
              backgroundColor: props.modelValue.color || "#eeeeee"
            };
          });
          var iconStyle = computed(() => {
            var _calculateColorBright;
            return {
              backgroundColor: props.modelValue.color || "#eeeeee",
              color: ((_calculateColorBright = calculateColorBrightness(props.modelValue.color || "#eeeeee")) !== null && _calculateColorBright !== void 0 ? _calculateColorBright : 0) > 0.5 ? "black" : "white"
            };
          });
          var iconCssClass = computed(() => {
            var _props$modelValue$ico;
            return (_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "";
          });
          var name = computed(() => {
            var _props$modelValue$nam;
            return (_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "";
          });
          var includes = computed(() => {
            if (!props.modelValue.attributes || props.modelValue.attributes.length === 0) {
              return "";
            }
            var attributeNames = props.modelValue.attributes.map(a => {
              var _a$text;
              return (_a$text = a.text) !== null && _a$text !== void 0 ? _a$text : "";
            });
            return "Includes: ".concat(attributeNames.join(", "));
          });
          var itemCount = computed(() => {
            return props.modelValue.itemCount;
          });
          function calculateColorBrightness(color) {
            if (!color) {
              return undefined;
            }
            var node = document.createElement("div");
            try {
              node.setAttribute("style", "color: ".concat(color, " !important; display: none !important;"));
              document.body.appendChild(node);
              var computedColor = window.getComputedStyle(node).color;
              var rgbaMatch = computedColor.match(/rgba?\((.*)\)/);
              if (!rgbaMatch) {
                return undefined;
              }
              var rgba = rgbaMatch[1].split(",").map(Number);
              var brightness = Math.round((rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000);
              return Math.min(255, brightness) / 255;
            } finally {
              node.remove();
            }
          }
          function onEditClick() {
            emit("edit", props.modelValue);
          }
          function onDeleteClick() {
            emit("delete", props.modelValue);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$6, [createElementVNode("div", {
              class: "bar",
              style: normalizeStyle(unref(barStyle))
            }, null, 4), createElementVNode("div", {
              class: "icon",
              style: normalizeStyle(unref(iconStyle))
            }, [unref(iconCssClass) ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(unref(iconCssClass))
            }, null, 2)) : createCommentVNode("v-if", true)], 4), createElementVNode("div", _hoisted_2$6, [createElementVNode("div", _hoisted_3$6, toDisplayString(unref(name)), 1), unref(includes) ? (openBlock(), createElementBlock("div", _hoisted_4$5, toDisplayString(unref(includes)), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_5$5, [createElementVNode("span", _hoisted_6$3, toDisplayString(unref(itemCount)), 1), _hoisted_7$3, createVNode(unref(RockButton), {
              btnSize: "sm",
              onClick: onEditClick
            }, {
              default: withCtx(() => [_hoisted_8$3]),
              _: 1
            }), createVNode(unref(RockButton), {
              btnSize: "sm",
              onClick: onDeleteClick
            }, {
              default: withCtx(() => [_hoisted_9$3]),
              _: 1
            })])]);
          };
        }
      });

      script$8.__file = "src/Cms/ContentCollectionDetail/source.partial.obs";

      var _hoisted_1$5 = ["onClick"];
      var _hoisted_2$5 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_3$5 = createTextVNode();
      var _hoisted_4$4 = createElementVNode("span", {
        class: "caret"
      }, null, -1);
      var _hoisted_5$4 = [_hoisted_2$5, _hoisted_3$5, _hoisted_4$4];
      var _hoisted_6$2 = ["onClick"];
      var _hoisted_7$2 = ["onClick"];
      var _hoisted_8$2 = {
        class: "collection-content-sources"
      };
      var _hoisted_9$2 = {
        key: 0
      };
      var _hoisted_10$2 = {
        key: 1,
        class: "row"
      };
      var _hoisted_11$2 = {
        class: "col-md-6"
      };
      var _hoisted_12$2 = {
        key: 2,
        class: "row"
      };
      var _hoisted_13$2 = {
        class: "col-md-6"
      };
      var _hoisted_14$2 = {
        class: "col-md-6"
      };
      var _hoisted_15 = {
        class: "grid-table table table-condensed table-light"
      };
      var _hoisted_16 = createElementVNode("thead", null, [createElementVNode("tr", null, [createElementVNode("th", null, "Key"), createElementVNode("th", null, "Title"), createElementVNode("th", null, "Multiple"), createElementVNode("th", {
        class: "grid-columncommand"
      }), createElementVNode("th", {
        class: "grid-columncommand"
      })])], -1);
      var _hoisted_17 = {
        key: 1
      };
      var _hoisted_18 = createElementVNode("td", {
        colspan: "5"
      }, "No custom fields defined.", -1);
      var _hoisted_19 = [_hoisted_18];
      var _hoisted_20 = {
        class: "grid-actions",
        colspan: "6"
      };
      var _hoisted_21 = ["onClick"];
      var _hoisted_22 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_23 = [_hoisted_22];
      var _hoisted_24 = createElementVNode("div", {
        style: {
          "margin-bottom": "40px"
        }
      }, null, -1);
      var script$7 = defineComponent({
        name: 'contentSources.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$sou, _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var collectionSources = ref((_props$modelValue$sou = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.sources) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : []);
          var isAddSourceOpen = ref(false);
          var addSourceMenuRef = ref(null);
          var sourceEditBag = ref(null);
          var isSourceModalOpen = ref(false);
          var sourceSelectedEntityGuidOrEmptyString = ref("");
          var sourceSelectedEntityAttributes = ref([]);
          var sourceEntityItems = ref([]);
          var sourceEntityAttributeTable = ref({});
          var sourceSelectedEntityOccurrences = ref(null);
          var sourceCustomFields = ref([]);
          var sourceNewCustomField = ref(null);
          var sourceCustomFieldEditMode = ref(false);
          var addSourceDropdownClass = computed(() => {
            return isAddSourceOpen.value ? "dropdown clearfix open" : "dropdown clearfix";
          });
          var sourceModalTitle = computed(() => {
            return isAddingSource.value ? "Add Content Source" : "Edit Content Source";
          });
          var isAddingSource = computed(() => {
            var _sourceEditBag$value;
            return areEqual((_sourceEditBag$value = sourceEditBag.value) === null || _sourceEditBag$value === void 0 ? void 0 : _sourceEditBag$value.guid, emptyGuid);
          });
          var isSourceModalCalendar = computed(() => {
            var _sourceEditBag$value2;
            return areEqual((_sourceEditBag$value2 = sourceEditBag.value) === null || _sourceEditBag$value2 === void 0 ? void 0 : _sourceEditBag$value2.entityTypeGuid, EntityType.EventCalendar);
          });
          var sourceModalEntityTitle = computed(() => {
            var _sourceEditBag$value3;
            if (areEqual((_sourceEditBag$value3 = sourceEditBag.value) === null || _sourceEditBag$value3 === void 0 ? void 0 : _sourceEditBag$value3.entityTypeGuid, EntityType.ContentChannel)) {
              return "Content Channel";
            } else {
              return "Event Calendar";
            }
          });
          var sourceModalEntityName = computed(() => {
            var _sourceEditBag$value$, _sourceEditBag$value4;
            return (_sourceEditBag$value$ = (_sourceEditBag$value4 = sourceEditBag.value) === null || _sourceEditBag$value4 === void 0 ? void 0 : _sourceEditBag$value4.name) !== null && _sourceEditBag$value$ !== void 0 ? _sourceEditBag$value$ : "";
          });
          var sourceEntityAttributeItems = computed(() => {
            var _sourceEntityAttribut;
            return ((_sourceEntityAttribut = sourceEntityAttributeTable.value[sourceSelectedEntityGuidOrEmptyString.value]) !== null && _sourceEntityAttribut !== void 0 ? _sourceEntityAttribut : []).map(li => {
              return {
                value: li.value,
                text: li.category ? "".concat(li.text, " (").concat(li.category, ")") : li.text
              };
            });
          });
          function onAddSourceWindowClick(event) {
            var _event$target;
            if (!(event.target instanceof HTMLElement) || !isAddSourceOpen.value) {
              return;
            }
            var menu = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.closest(".dropdown-menu");
            if (menu !== addSourceMenuRef.value) {
              isAddSourceOpen.value = false;
            }
          }
          function onAddSourceClick() {
            isAddSourceOpen.value = !isAddSourceOpen.value;
          }
          function onAddCalendarSource() {
            return _onAddCalendarSource.apply(this, arguments);
          }
          function _onAddCalendarSource() {
            _onAddCalendarSource = _asyncToGenerator(function* () {
              isAddSourceOpen.value = false;
              var result = yield invokeBlockAction("GetAvailableEventCalendars");
              if (!result || !result.data) {
                alert(result.errorMessage || "Unable to get list of event calendars.");
                return;
              }
              sourceSelectedEntityGuidOrEmptyString.value = "";
              sourceSelectedEntityAttributes.value = [];
              sourceSelectedEntityOccurrences.value = null;
              sourceEntityItems.value = result.data.filter(e => !collectionSources.value.some(s => areEqual(s.entityGuid, e.guid))).map(e => ({
                value: e.guid,
                text: e.name
              }));
              sourceEntityAttributeTable.value = result.data.reduce((table, c) => {
                var _c$attributes;
                table[c.guid] = (_c$attributes = c.attributes) !== null && _c$attributes !== void 0 ? _c$attributes : [];
                return table;
              }, {});
              sourceEditBag.value = {
                entityTypeGuid: EntityType.EventCalendar,
                occurrencesToShow: 0,
                itemCount: 0,
                guid: emptyGuid,
                entityGuid: emptyGuid
              };
              sourceCustomFields.value = [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return _onAddCalendarSource.apply(this, arguments);
          }
          function onAddContentChannelSource() {
            return _onAddContentChannelSource.apply(this, arguments);
          }
          function _onAddContentChannelSource() {
            _onAddContentChannelSource = _asyncToGenerator(function* () {
              isAddSourceOpen.value = false;
              var result = yield invokeBlockAction("GetAvailableContentChannels");
              if (!result || !result.data) {
                alert(result.errorMessage || "Unable to get list of content channels.");
                return;
              }
              sourceSelectedEntityGuidOrEmptyString.value = "";
              sourceSelectedEntityAttributes.value = [];
              sourceSelectedEntityOccurrences.value = null;
              sourceEntityItems.value = result.data.map(c => ({
                value: c.guid,
                text: c.name
              }));
              sourceEntityItems.value = result.data.filter(e => !collectionSources.value.some(s => areEqual(s.entityGuid, e.guid))).map(e => ({
                value: e.guid,
                text: e.name
              }));
              sourceEntityAttributeTable.value = result.data.reduce((table, c) => {
                var _c$attributes2;
                table[c.guid] = (_c$attributes2 = c.attributes) !== null && _c$attributes2 !== void 0 ? _c$attributes2 : [];
                return table;
              }, {});
              sourceEditBag.value = {
                entityTypeGuid: EntityType.ContentChannel,
                occurrencesToShow: 0,
                itemCount: 0,
                guid: emptyGuid,
                entityGuid: emptyGuid
              };
              sourceCustomFields.value = [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return _onAddContentChannelSource.apply(this, arguments);
          }
          function onSourceSave() {
            return _onSourceSave.apply(this, arguments);
          }
          function _onSourceSave() {
            _onSourceSave = _asyncToGenerator(function* () {
              var _toGuidOrNull, _toGuidOrNull2, _toGuidOrNull3, _sourceSelectedEntity, _props$modelValue3, _result$data;
              if (!sourceEditBag.value) {
                return;
              }
              var bag = {
                guid: (_toGuidOrNull = toGuidOrNull(sourceEditBag.value.guid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                entityTypeGuid: (_toGuidOrNull2 = toGuidOrNull(sourceEditBag.value.entityTypeGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                entityGuid: (_toGuidOrNull3 = toGuidOrNull(sourceSelectedEntityGuidOrEmptyString.value)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid,
                attributes: sourceSelectedEntityAttributes.value.map(a => ({
                  value: a
                })),
                occurrencesToShow: (_sourceSelectedEntity = sourceSelectedEntityOccurrences.value) !== null && _sourceSelectedEntity !== void 0 ? _sourceSelectedEntity : 0,
                customFields: sourceCustomFields.value,
                itemCount: 0
              };
              var data = {
                key: (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.idKey,
                bag
              };
              var result = yield invokeBlockAction("SaveCollectionSource", data);
              if (!result || !result.isSuccess || !((_result$data = result.data) !== null && _result$data !== void 0 && _result$data.entity)) {
                alert(result.errorMessage || "Unable to save source.");
                return;
              }
              emit("update:modelValue", result.data.entity);
              isSourceModalOpen.value = false;
            });
            return _onSourceSave.apply(this, arguments);
          }
          function onDeleteSource(_x) {
            return _onDeleteSource.apply(this, arguments);
          }
          function _onDeleteSource() {
            _onDeleteSource = _asyncToGenerator(function* (source) {
              var _props$modelValue4, _toGuidOrNull4, _result$data2;
              if (!(yield confirmDelete("Collection Source"))) {
                return;
              }
              var data = {
                key: (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.idKey,
                sourceGuid: (_toGuidOrNull4 = toGuidOrNull(source.guid)) !== null && _toGuidOrNull4 !== void 0 ? _toGuidOrNull4 : emptyGuid
              };
              var result = yield invokeBlockAction("DeleteCollectionSource", data);
              if (!result || !result.isSuccess || !((_result$data2 = result.data) !== null && _result$data2 !== void 0 && _result$data2.entity)) {
                alert(result.errorMessage || "Unable to delete the collection source.");
                return;
              }
              emit("update:modelValue", result.data.entity);
            });
            return _onDeleteSource.apply(this, arguments);
          }
          function onEditSource(_x2) {
            return _onEditSource.apply(this, arguments);
          }
          function _onEditSource() {
            _onEditSource = _asyncToGenerator(function* (source) {
              var _source$attributes$ma, _source$attributes;
              var availableContent;
              if (areEqual(source.entityTypeGuid, EntityType.ContentChannel)) {
                var result = yield invokeBlockAction("GetAvailableContentChannels");
                if (!result || !result.data) {
                  alert(result.errorMessage || "Unable to get list of content channels.");
                  return;
                }
                availableContent = result.data;
              } else if (areEqual(source.entityTypeGuid, EntityType.EventCalendar)) {
                var _result = yield invokeBlockAction("GetAvailableEventCalendars");
                if (!_result || !_result.data) {
                  alert(_result.errorMessage || "Unable to get list of event calendars.");
                  return;
                }
                availableContent = _result.data;
              } else {
                return;
              }
              sourceSelectedEntityGuidOrEmptyString.value = source.entityGuid;
              sourceSelectedEntityAttributes.value = (_source$attributes$ma = (_source$attributes = source.attributes) === null || _source$attributes === void 0 ? void 0 : _source$attributes.map(v => {
                var _v$value;
                return (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "";
              })) !== null && _source$attributes$ma !== void 0 ? _source$attributes$ma : [];
              sourceSelectedEntityOccurrences.value = source.occurrencesToShow > 0 ? source.occurrencesToShow : null;
              sourceEntityAttributeTable.value = availableContent.reduce((table, c) => {
                var _c$attributes3;
                table[c.guid] = (_c$attributes3 = c.attributes) !== null && _c$attributes3 !== void 0 ? _c$attributes3 : [];
                return table;
              }, {});
              sourceEditBag.value = source;
              sourceCustomFields.value = source.customFields ? [...source.customFields] : [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return _onEditSource.apply(this, arguments);
          }
          function onSourceReorder(_x3, _x4) {
            return _onSourceReorder.apply(this, arguments);
          }
          function _onSourceReorder() {
            _onSourceReorder = _asyncToGenerator(function* (value, beforeValue) {
              var _props$modelValue5, _toGuidOrNull5;
              var data = {
                key: (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.idKey,
                guid: (_toGuidOrNull5 = toGuidOrNull(value === null || value === void 0 ? void 0 : value.guid)) !== null && _toGuidOrNull5 !== void 0 ? _toGuidOrNull5 : emptyGuid,
                beforeGuid: toGuidOrNull(beforeValue === null || beforeValue === void 0 ? void 0 : beforeValue.guid)
              };
              var result = yield invokeBlockAction("ReorderSource", data);
              if (!result.isSuccess) {
                alert(result.errorMessage || "Unable to re-order sources, you might need to reload the page.");
                return;
              }
            });
            return _onSourceReorder.apply(this, arguments);
          }
          function onAddCustomFieldClick() {
            if (sourceNewCustomField.value === null) {
              sourceNewCustomField.value = {
                isMultiple: false
              };
            }
          }
          function onNewCustomFieldSave(field) {
            sourceCustomFields.value.push(field);
            sourceNewCustomField.value = null;
          }
          function onNewCustomFieldEditModeChanged(value) {
            if (!value) {
              sourceNewCustomField.value = null;
            }
          }
          function onCustomFieldRemove(index) {
            sourceCustomFields.value.splice(index, 1);
          }
          var reorderDragOptions = useDragReorder(collectionSources, onSourceReorder);
          watch(() => props.modelValue, () => {
            var _props$modelValue$sou2, _props$modelValue2;
            updateRefValue(collectionSources, (_props$modelValue$sou2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.sources) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : []);
          });
          watch(isAddSourceOpen, () => {
            if (isAddSourceOpen.value) {
              window.addEventListener("click", onAddSourceWindowClick);
            } else {
              window.removeEventListener("click", onAddSourceWindowClick);
            }
          });
          onBeforeUnmount(() => {
            window.removeEventListener("click", onAddSourceWindowClick);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Panel), {
              title: "Sources"
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Content Sources",
                description: "Content for this collection will be pulled from the following sources within Rock."
              }, {
                actions: withCtx(() => [createElementVNode("div", {
                  class: normalizeClass(unref(addSourceDropdownClass))
                }, [createElementVNode("button", {
                  type: "button",
                  class: "btn btn-default btn-sm dropdown-toggle",
                  onClick: withModifiers(onAddSourceClick, ["prevent", "stop"])
                }, _hoisted_5$4, 8, _hoisted_1$5), createElementVNode("ul", {
                  ref_key: "addSourceMenuRef",
                  ref: addSourceMenuRef,
                  class: "dropdown-menu dropdown-menu-right"
                }, [createElementVNode("li", null, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(onAddContentChannelSource, ["prevent"])
                }, "Add Content Channel", 8, _hoisted_6$2)]), createElementVNode("li", null, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(onAddCalendarSource, ["prevent"])
                }, "Add Calendar", 8, _hoisted_7$2)])], 512)], 2)]),
                _: 1
              }), withDirectives((openBlock(), createElementBlock("div", _hoisted_8$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(collectionSources.value, source => {
                return openBlock(), createBlock(unref(script$8), {
                  key: source.guid,
                  modelValue: source,
                  onDelete: onDeleteSource,
                  onEdit: onEditSource
                }, null, 8, ["modelValue"]);
              }), 128))])), [[unref(DragReorder), unref(reorderDragOptions)]])]),
              _: 1
            }), createVNode(unref(Modal), {
              modelValue: isSourceModalOpen.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isSourceModalOpen.value = $event),
              title: unref(sourceModalTitle),
              class: "content-source-modal",
              saveText: "Save",
              onSave: onSourceSave
            }, {
              default: withCtx(() => [!unref(isAddingSource) ? (openBlock(), createElementBlock("h1", _hoisted_9$2, toDisplayString(unref(sourceModalEntityName)), 1)) : (openBlock(), createElementBlock("div", _hoisted_10$2, [createElementVNode("div", _hoisted_11$2, [unref(isAddingSource) ? (openBlock(), createBlock(unref(DropDownList), {
                key: 0,
                modelValue: sourceSelectedEntityGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => sourceSelectedEntityGuidOrEmptyString.value = $event),
                label: unref(sourceModalEntityTitle),
                items: sourceEntityItems.value,
                rules: "required"
              }, null, 8, ["modelValue", "label", "items"])) : createCommentVNode("v-if", true)])])), sourceSelectedEntityGuidOrEmptyString.value ? (openBlock(), createElementBlock("div", _hoisted_12$2, [createElementVNode("div", _hoisted_13$2, [createVNode(unref(CheckBoxList), {
                modelValue: sourceSelectedEntityAttributes.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => sourceSelectedEntityAttributes.value = $event),
                label: "Attributes to Include",
                help: "Determines which attributes should be added to the collection index for search and retrieval.",
                items: unref(sourceEntityAttributeItems)
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_14$2, [unref(isSourceModalCalendar) ? (openBlock(), createBlock(unref(NumberBox), {
                key: 0,
                modelValue: sourceSelectedEntityOccurrences.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => sourceSelectedEntityOccurrences.value = $event),
                label: "Number of Future Occurrences to Show",
                rules: "gte:1"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), createVNode(unref(SectionHeader), {
                title: "Custom Values",
                description: "Most of the content you provide for the collection will be based on the attributes mentioned above. Additionally, you can provide properties below that can be used for filtering or to provide more information."
              }), createElementVNode("table", _hoisted_15, [_hoisted_16, createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sourceCustomFields.value, (customField, index) => {
                return openBlock(), createBlock(unref(script$9), {
                  modelValue: sourceCustomFields.value[index],
                  "onUpdate:modelValue": $event => sourceCustomFields.value[index] = $event,
                  editMode: sourceCustomFieldEditMode.value,
                  "onUpdate:editMode": _cache[3] || (_cache[3] = $event => sourceCustomFieldEditMode.value = $event),
                  onRemove: $event => onCustomFieldRemove(index)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "editMode", "onRemove"]);
              }), 256)), sourceNewCustomField.value ? (openBlock(), createBlock(unref(script$9), {
                key: 0,
                modelValue: sourceNewCustomField.value,
                editMode: "",
                "onUpdate:modelValue": onNewCustomFieldSave,
                "onUpdate:editMode": onNewCustomFieldEditModeChanged
              }, null, 8, ["modelValue"])) : !sourceCustomFields.value.length ? (openBlock(), createElementBlock("tr", _hoisted_17, _hoisted_19)) : createCommentVNode("v-if", true)]), createElementVNode("tfoot", null, [createElementVNode("tr", null, [createElementVNode("td", _hoisted_20, [createElementVNode("a", {
                class: "btn btn-grid-action btn-add btn-default btn-sm",
                accesskey: "n",
                title: "Alt+N",
                href: "#",
                onClick: withModifiers(onAddCustomFieldClick, ["prevent"])
              }, _hoisted_23, 8, _hoisted_21)])])])]), _hoisted_24]),
              _: 1
            }, 8, ["modelValue", "title"])], 64);
          };
        }
      });

      script$7.__file = "src/Cms/ContentCollectionDetail/contentSources.partial.obs";

      var _hoisted_1$4 = {
        class: "row"
      };
      var _hoisted_2$4 = {
        class: "col-md-6"
      };
      var _hoisted_3$4 = {
        class: "row"
      };
      var _hoisted_4$3 = {
        class: "col-md-6"
      };
      var _hoisted_5$3 = {
        class: "row"
      };
      var _hoisted_6$1 = {
        class: "col-md-6"
      };
      var _hoisted_7$1 = {
        key: 0
      };
      var _hoisted_8$1 = {
        class: "row"
      };
      var _hoisted_9$1 = {
        class: "col-md-6"
      };
      var _hoisted_10$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Days", -1);
      var _hoisted_11$1 = {
        class: "col-md-6"
      };
      var _hoisted_12$1 = {
        class: "row"
      };
      var _hoisted_13$1 = {
        class: "col-md-6"
      };
      var _hoisted_14$1 = {
        class: "col-md-6"
      };
      var script$6 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$nam, _props$modelValue$col;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var collectionKey = propertyRef((_props$modelValue$col = props.modelValue.collectionKey) !== null && _props$modelValue$col !== void 0 ? _props$modelValue$col : "", "CollectionKey");
          var trendingEnabled = propertyRef(props.modelValue.trendingEnabled, "TrendingEnabled");
          var trendingWindowDay = propertyRef(props.modelValue.trendingWindowDay, "TrendingWindowDay");
          var trendingMaxItems = propertyRef(props.modelValue.trendingMaxItems, "TrendingMaxItems");
          var trendingGravity = propertyRef(props.modelValue.trendingGravity, "TrendingGravity");
          var enableSegments = propertyRef(props.modelValue.enableSegments, "EnableSegments");
          var enableRequestFilters = propertyRef(props.modelValue.enableRequestFilters, "EnableRequestFilters");
          var enablePersonalizationItems = [{
            value: "segments",
            text: "Segments"
          }, {
            value: "requestFilters",
            text: "Request Filters"
          }];
          if (!props.modelValue.idKey) {
            trendingWindowDay.value = 30;
            trendingMaxItems.value = 10;
            trendingGravity.value = 1.1;
          }
          var propRefs = [description, name, collectionKey, trendingEnabled, trendingWindowDay, trendingMaxItems, trendingGravity, enableSegments, enableRequestFilters];
          var enablePersonalization = computed({
            get() {
              var values = [];
              if (enableSegments.value) {
                values.push("segments");
              }
              if (enableRequestFilters.value) {
                values.push("requestFilters");
              }
              return values;
            },
            set(values) {
              enableSegments.value = values.includes("segments");
              enableRequestFilters.value = values.includes("requestFilters");
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$nam2, _props$modelValue$col2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(collectionKey, (_props$modelValue$col2 = props.modelValue.collectionKey) !== null && _props$modelValue$col2 !== void 0 ? _props$modelValue$col2 : "");
            updateRefValue(trendingEnabled, props.modelValue.trendingEnabled);
            updateRefValue(trendingWindowDay, props.modelValue.trendingWindowDay);
            updateRefValue(trendingMaxItems, props.modelValue.trendingMaxItems);
            updateRefValue(trendingGravity, props.modelValue.trendingGravity);
            updateRefValue(enableSegments, props.modelValue.enableSegments);
            updateRefValue(enableRequestFilters, props.modelValue.enableRequestFilters);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              name: name.value,
              collectionKey: collectionKey.value,
              trendingEnabled: trendingEnabled.value,
              trendingWindowDay: trendingWindowDay.value,
              trendingMaxItems: trendingMaxItems.value,
              trendingGravity: trendingGravity.value,
              enableSegments: enableSegments.value,
              enableRequestFilters: enableRequestFilters.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$4, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_3$4, [createElementVNode("div", _hoisted_4$3, [createVNode(unref(TextBox), {
              modelValue: unref(collectionKey),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(collectionKey) ? collectionKey.value = $event : null),
              label: "Key",
              help: "The unique key that will identify this collection.",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_5$3, [createElementVNode("div", _hoisted_6$1, [createVNode(unref(CheckBox), {
              modelValue: unref(trendingEnabled),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(trendingEnabled) ? trendingEnabled.value = $event : null),
              label: "Enable Trending",
              help: "Determines if trending metrics should be calculated on each run of the collection update job."
            }, null, 8, ["modelValue"]), unref(trendingEnabled) ? (openBlock(), createElementBlock("div", _hoisted_7$1, [createElementVNode("div", _hoisted_8$1, [createElementVNode("div", _hoisted_9$1, [createVNode(unref(NumberBox), {
              modelValue: unref(trendingWindowDay),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(trendingWindowDay) ? trendingWindowDay.value = $event : null),
              label: "Trending Window",
              help: "Determines how many days of interactions to look at to determine trending items.",
              decimalCount: 0,
              rules: "required|gte:0"
            }, {
              append: withCtx(() => [_hoisted_10$1]),
              _: 1
            }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11$1, [createVNode(unref(NumberBox), {
              modelValue: unref(trendingMaxItems),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(trendingMaxItems) ? trendingMaxItems.value = $event : null),
              label: "Trending Item Count",
              help: "The number of items to mark as trending.",
              decimalCount: 0,
              rules: "required|gte:0"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_12$1, [createElementVNode("div", _hoisted_13$1, [createVNode(unref(NumberBox), {
              modelValue: unref(trendingGravity),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(trendingGravity) ? trendingGravity.value = $event : null),
              label: "Trending Gravity",
              help: "Gravity helps apply more weight to items that are newer. Selecting the correct gravity value can be a bit of trial and error, but we recommend that you start with the default value.",
              rules: "required|gte:0"
            }, null, 8, ["modelValue"])])])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_14$1, [createVNode(unref(CheckBoxList), {
              modelValue: unref(enablePersonalization),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(enablePersonalization) ? enablePersonalization.value = $event : null),
              label: "Enable Personalization",
              help: "Determines which personalization features are enabled.",
              items: enablePersonalizationItems
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$6.__file = "src/Cms/ContentCollectionDetail/editPanel.partial.obs";

      var _hoisted_1$3 = {
        class: "search-filter-row"
      };
      var _hoisted_2$3 = {
        class: "search-filter-icon"
      };
      var _hoisted_3$3 = {
        key: 0,
        class: "fa fa-check-square",
        style: {
          "color": "var(--color-primary)"
        }
      };
      var _hoisted_4$2 = {
        key: 1,
        class: "fa fa-check-square-o",
        style: {
          "color": "#c3c2c2"
        }
      };
      var _hoisted_5$2 = {
        class: "search-filter-content"
      };
      var _hoisted_6 = {
        class: "search-filter-title"
      };
      var _hoisted_7 = {
        class: "title"
      };
      var _hoisted_8 = createTextVNode(" ");
      var _hoisted_9 = {
        class: "subtitle text-sm text-muted"
      };
      var _hoisted_10 = {
        key: 0,
        class: "search-filter-description"
      };
      var _hoisted_11 = {
        key: 1
      };
      var _hoisted_12 = {
        key: 2,
        class: "text-danger margin-t-md margin-b-md"
      };
      var _hoisted_13 = {
        class: "search-filter-actions"
      };
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var script$5 = defineComponent({
        name: 'searchFilter.partial',
        props: {
          isEnabled: {
            type: Boolean,
            default: false
          },
          isInconsistent: {
            type: Boolean,
            default: false
          },
          title: {
            type: String,
            required: true
          },
          subtitle: {
            type: String,
            required: false
          },
          description: {
            type: String,
            required: false
          },
          values: {
            type: Array,
            required: false
          }
        },
        emits: ["edit"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function onEditClick() {
            emit("edit");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [props.isEnabled ? (openBlock(), createElementBlock("i", _hoisted_3$3)) : (openBlock(), createElementBlock("i", _hoisted_4$2))]), createElementVNode("div", _hoisted_5$2, [createElementVNode("div", _hoisted_6, [createElementVNode("span", _hoisted_7, toDisplayString(__props.title), 1), __props.subtitle ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [_hoisted_8, createElementVNode("span", _hoisted_9, toDisplayString(__props.subtitle), 1)], 64)) : createCommentVNode("v-if", true)]), __props.description ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(__props.description), 1)) : createCommentVNode("v-if", true), !__props.isInconsistent ? (openBlock(), createElementBlock("fieldset", _hoisted_11, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.values, value => {
              return openBlock(), createElementBlock("dl", null, [createElementVNode("dt", null, toDisplayString(value.text), 1), createElementVNode("dd", null, toDisplayString(value.value), 1)]);
            }), 256))])) : (openBlock(), createElementBlock("div", _hoisted_12, " The field type configuration of the attribute is not consistent for all sources. Please resolve the inconsistency or rename the attribute key to be unique. "))]), createElementVNode("div", _hoisted_13, [!__props.isInconsistent ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnSize: "sm",
              onClick: onEditClick
            }, {
              default: withCtx(() => [_hoisted_14]),
              _: 1
            })) : createCommentVNode("v-if", true)])]);
          };
        }
      });

      script$5.__file = "src/Cms/ContentCollectionDetail/searchFilter.partial.obs";

      var script$4 = defineComponent({
        name: 'attributeSearchFilter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["edit"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isEnabled = computed(() => {
            return props.modelValue.isEnabled;
          });
          var isInconsistent = computed(() => {
            return props.modelValue.isInconsistent;
          });
          var title = computed(() => {
            var _props$modelValue$att;
            return (_props$modelValue$att = props.modelValue.attributeName) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : "";
          });
          var subtitle = computed(() => {
            return "(".concat(props.modelValue.fieldTypeName, ")");
          });
          var description = computed(() => {
            var _props$modelValue$sou;
            return "Sources Using: ".concat((_props$modelValue$sou = props.modelValue.sourceNames) === null || _props$modelValue$sou === void 0 ? void 0 : _props$modelValue$sou.join(", "));
          });
          var values = computed(() => {
            var values = [{
              text: "Filter Label",
              value: props.modelValue.filterLabel
            }];
            if (areEqual(props.modelValue.fieldTypeGuid, FieldType.Boolean)) {
              values.push({
                text: "Filter Control",
                value: "Boolean"
              });
            } else {
              values.push({
                text: "Filter Control",
                value: props.modelValue.filterControl === ContentCollectionFilterControl.Dropdown ? "Dropdown" : "Pills"
              });
              values.push({
                text: "Filter Mode",
                value: props.modelValue.isMultipleSelection ? "Multi-Select" : "Single-Select"
              });
            }
            return values;
          });
          function onEdit() {
            emit("edit", props.modelValue);
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$5), {
              isEnabled: unref(isEnabled),
              isInconsistent: unref(isInconsistent),
              title: unref(title),
              subtitle: unref(subtitle),
              description: unref(description),
              values: unref(values),
              onEdit: onEdit
            }, null, 8, ["isEnabled", "isInconsistent", "title", "subtitle", "description", "values"]);
          };
        }
      });

      script$4.__file = "src/Cms/ContentCollectionDetail/attributeSearchFilter.partial.obs";

      var script$3 = defineComponent({
        name: 'customFieldSearchFilter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["edit"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isEnabled = computed(() => {
            return props.modelValue.isEnabled;
          });
          var title = computed(() => {
            var _props$modelValue$tit;
            return (_props$modelValue$tit = props.modelValue.title) !== null && _props$modelValue$tit !== void 0 ? _props$modelValue$tit : "";
          });
          var description = computed(() => {
            var _props$modelValue$sou;
            return "Sources Using: ".concat((_props$modelValue$sou = props.modelValue.sourceNames) === null || _props$modelValue$sou === void 0 ? void 0 : _props$modelValue$sou.join(", "));
          });
          var values = computed(() => {
            var values = [{
              text: "Filter Label",
              value: props.modelValue.filterLabel
            }];
            values.push({
              text: "Filter Control",
              value: props.modelValue.filterControl === ContentCollectionFilterControl.Dropdown ? "Dropdown" : "Pills"
            });
            values.push({
              text: "Filter Mode",
              value: props.modelValue.isMultipleSelection ? "Multi-Select" : "Single-Select"
            });
            return values;
          });
          function onEdit() {
            emit("edit", props.modelValue);
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$5), {
              isEnabled: unref(isEnabled),
              title: unref(title),
              description: unref(description),
              values: unref(values),
              onEdit: onEdit
            }, null, 8, ["isEnabled", "title", "description", "values"]);
          };
        }
      });

      script$3.__file = "src/Cms/ContentCollectionDetail/customFieldSearchFilter.partial.obs";

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "col-md-6"
      };
      var _hoisted_3$2 = {
        key: 0,
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-6"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var script$2 = defineComponent({
        name: 'searchFilters.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var editFilterKey = ref("");
          var editFilterName = ref("");
          var editFilterControl = ref("");
          var editFilterControlItems = ref([]);
          var editFilterEnabled = ref(false);
          var editFilterLabel = ref("");
          var editFilterType = ref("");
          var editShowFilterType = ref(false);
          var isEditModalOpen = ref(false);
          var isEditFullTextSearch = ref(false);
          var isEditAttributeFilter = ref(false);
          var editFilterTypeItems = [{
            "value": "0",
            "text": "Single-Select"
          }, {
            "value": "1",
            "text": "Multi-Select"
          }];
          var editFilterControlStandardItems = [{
            "value": ContentCollectionFilterControl.Pills.toString(),
            "text": "Pills"
          }, {
            "value": ContentCollectionFilterControl.Dropdown.toString(),
            "text": "Dropdown"
          }];
          var editFilterControlBooleanItems = [{
            "value": ContentCollectionFilterControl.Boolean.toString(),
            "text": "Boolean"
          }];
          var fullTextSearchEnabled = computed(() => {
            var _props$modelValue$fil, _props$modelValue, _props$modelValue$fil2;
            return (_props$modelValue$fil = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : (_props$modelValue$fil2 = _props$modelValue.filterSettings) === null || _props$modelValue$fil2 === void 0 ? void 0 : _props$modelValue$fil2.fullTextSearchEnabled) !== null && _props$modelValue$fil !== void 0 ? _props$modelValue$fil : false;
          });
          var yearSearchEnabled = computed(() => {
            var _props$modelValue$fil3, _props$modelValue2, _props$modelValue2$fi;
            return (_props$modelValue$fil3 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : (_props$modelValue2$fi = _props$modelValue2.filterSettings) === null || _props$modelValue2$fi === void 0 ? void 0 : _props$modelValue2$fi.yearSearchEnabled) !== null && _props$modelValue$fil3 !== void 0 ? _props$modelValue$fil3 : false;
          });
          var yearSearchLabel = computed(() => {
            var _props$modelValue3, _props$modelValue3$fi;
            return ((_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : (_props$modelValue3$fi = _props$modelValue3.filterSettings) === null || _props$modelValue3$fi === void 0 ? void 0 : _props$modelValue3$fi.yearSearchLabel) || "Year";
          });
          var yearSearchFilterControl = computed(() => {
            var _props$modelValue$fil4, _props$modelValue4, _props$modelValue4$fi;
            return (_props$modelValue$fil4 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : (_props$modelValue4$fi = _props$modelValue4.filterSettings) === null || _props$modelValue4$fi === void 0 ? void 0 : _props$modelValue4$fi.yearSearchFilterControl) !== null && _props$modelValue$fil4 !== void 0 ? _props$modelValue$fil4 : ContentCollectionFilterControl.Pills;
          });
          var yearSearchFilterIsMultipleSelection = computed(() => {
            var _props$modelValue$fil5, _props$modelValue5, _props$modelValue5$fi;
            return (_props$modelValue$fil5 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : (_props$modelValue5$fi = _props$modelValue5.filterSettings) === null || _props$modelValue5$fi === void 0 ? void 0 : _props$modelValue5$fi.yearSearchFilterIsMultipleSelection) !== null && _props$modelValue$fil5 !== void 0 ? _props$modelValue$fil5 : false;
          });
          var yearSearchValues = computed(() => {
            return [{
              text: "Filter Label",
              value: yearSearchLabel.value
            }, {
              text: "Filter Control",
              value: yearSearchFilterControl.value === ContentCollectionFilterControl.Dropdown ? "Dropdown" : "Pills"
            }, {
              text: "Filter Mode",
              value: yearSearchFilterIsMultipleSelection.value ? "Multi-Select" : "Single-Select"
            }];
          });
          var attributeFilters = computed(() => {
            var _props$modelValue$fil6, _props$modelValue6, _props$modelValue6$fi;
            return (_props$modelValue$fil6 = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : (_props$modelValue6$fi = _props$modelValue6.filterSettings) === null || _props$modelValue6$fi === void 0 ? void 0 : _props$modelValue6$fi.attributeFilters) !== null && _props$modelValue$fil6 !== void 0 ? _props$modelValue$fil6 : [];
          });
          var customFieldFilters = computed(() => {
            var _props$modelValue$fil7, _props$modelValue7, _props$modelValue7$fi;
            return (_props$modelValue$fil7 = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : (_props$modelValue7$fi = _props$modelValue7.filterSettings) === null || _props$modelValue7$fi === void 0 ? void 0 : _props$modelValue7$fi.customFieldFilters) !== null && _props$modelValue$fil7 !== void 0 ? _props$modelValue$fil7 : [];
          });
          function onEditAttributeFilter(filter) {
            var _filter$attributeName, _ref2, _filter$filterLabel;
            if (!filter.attributeKey) {
              return;
            }
            editFilterKey.value = filter.attributeKey;
            editFilterName.value = (_filter$attributeName = filter.attributeName) !== null && _filter$attributeName !== void 0 ? _filter$attributeName : "";
            editFilterEnabled.value = filter.isEnabled;
            editFilterLabel.value = (_ref2 = (_filter$filterLabel = filter.filterLabel) !== null && _filter$filterLabel !== void 0 ? _filter$filterLabel : filter.attributeName) !== null && _ref2 !== void 0 ? _ref2 : "";
            if (areEqual(filter.fieldTypeGuid, FieldType.Boolean)) {
              editFilterControl.value = ContentCollectionFilterControl.Boolean.toString();
              editFilterControlItems.value = editFilterControlBooleanItems;
              editFilterType.value = "0";
              editShowFilterType.value = false;
            } else {
              editFilterControl.value = filter.filterControl.toString();
              editFilterControlItems.value = editFilterControlStandardItems;
              editFilterType.value = filter.isMultipleSelection ? "1" : "0";
              editShowFilterType.value = true;
            }
            isEditFullTextSearch.value = false;
            isEditAttributeFilter.value = true;
            isEditModalOpen.value = true;
          }
          function onEditCustomFieldFilter(filter) {
            var _filter$title, _ref3, _filter$filterLabel2;
            if (!filter.key) {
              return;
            }
            editFilterKey.value = filter.key;
            editFilterName.value = (_filter$title = filter.title) !== null && _filter$title !== void 0 ? _filter$title : "";
            editFilterEnabled.value = filter.isEnabled;
            editFilterLabel.value = (_ref3 = (_filter$filterLabel2 = filter.filterLabel) !== null && _filter$filterLabel2 !== void 0 ? _filter$filterLabel2 : filter.title) !== null && _ref3 !== void 0 ? _ref3 : "";
            editFilterControl.value = filter.filterControl.toString();
            editFilterControlItems.value = editFilterControlStandardItems;
            editFilterType.value = filter.isMultipleSelection ? "1" : "0";
            editShowFilterType.value = true;
            isEditFullTextSearch.value = false;
            isEditAttributeFilter.value = false;
            isEditModalOpen.value = true;
          }
          function onEditFullTextSearch() {
            editFilterKey.value = "";
            editFilterName.value = "Full Text Search";
            editFilterEnabled.value = fullTextSearchEnabled.value;
            editShowFilterType.value = false;
            isEditFullTextSearch.value = true;
            isEditModalOpen.value = true;
          }
          function onEditYearFilter() {
            editFilterKey.value = "";
            editFilterName.value = "Year";
            editFilterEnabled.value = yearSearchEnabled.value;
            editFilterLabel.value = yearSearchLabel.value;
            editFilterControl.value = yearSearchFilterControl.value.toString();
            editFilterControlItems.value = editFilterControlStandardItems;
            editFilterType.value = yearSearchFilterIsMultipleSelection.value ? "1" : "0";
            editShowFilterType.value = true;
            isEditFullTextSearch.value = false;
            isEditModalOpen.value = true;
          }
          function onModalSave() {
            return _onModalSave.apply(this, arguments);
          }
          function _onModalSave() {
            _onModalSave = _asyncToGenerator(function* () {
              var _props$modelValue8, _result$data;
              if (!((_props$modelValue8 = props.modelValue) !== null && _props$modelValue8 !== void 0 && _props$modelValue8.filterSettings)) {
                return;
              }
              var bag = _objectSpread2({}, props.modelValue.filterSettings);
              var validProperties;
              if (isEditFullTextSearch.value) {
                bag.fullTextSearchEnabled = editFilterEnabled.value;
                validProperties = ["fullTextSearchEnabled"];
              } else if (!editFilterKey.value) {
                var _ref4;
                bag.yearSearchEnabled = editFilterEnabled.value;
                bag.yearSearchFilterControl = (_ref4 = toNumberOrNull(editFilterControl.value)) !== null && _ref4 !== void 0 ? _ref4 : ContentCollectionFilterControl.Pills;
                bag.yearSearchFilterIsMultipleSelection = editFilterType.value === "1";
                bag.yearSearchLabel = editFilterLabel.value;
                validProperties = ["yearSearchEnabled", "yearSearchFilterControl", "yearSearchFilterIsMultipleSelection", "yearSearchLabel"];
              } else if (isEditAttributeFilter.value) {
                var _bag$attributeFilters;
                bag.attributeFilters = [...((_bag$attributeFilters = bag.attributeFilters) !== null && _bag$attributeFilters !== void 0 ? _bag$attributeFilters : [])];
                var filterIndex = bag.attributeFilters.findIndex(f => f.attributeKey === editFilterKey.value);
                if (filterIndex === -1) {
                  return;
                }
                var filter = _objectSpread2({}, bag.attributeFilters[filterIndex]);
                filter.isEnabled = editFilterEnabled.value;
                filter.filterLabel = editFilterLabel.value;
                if (areEqual(filter.fieldTypeGuid, FieldType.Boolean)) {
                  filter.filterControl = ContentCollectionFilterControl.Boolean;
                  filter.isMultipleSelection = false;
                } else {
                  var _ref5;
                  filter.filterControl = (_ref5 = toNumberOrNull(editFilterControl.value)) !== null && _ref5 !== void 0 ? _ref5 : ContentCollectionFilterControl.Pills;
                  filter.isMultipleSelection = editFilterType.value === "1";
                }
                bag.attributeFilters.splice(filterIndex, 1, filter);
                validProperties = ["attributeFilters"];
              } else {
                var _bag$customFieldFilte, _ref6;
                bag.customFieldFilters = [...((_bag$customFieldFilte = bag.customFieldFilters) !== null && _bag$customFieldFilte !== void 0 ? _bag$customFieldFilte : [])];
                var _filterIndex = bag.customFieldFilters.findIndex(f => f.key === editFilterKey.value);
                if (_filterIndex === -1) {
                  return;
                }
                var _filter = _objectSpread2({}, bag.customFieldFilters[_filterIndex]);
                _filter.isEnabled = editFilterEnabled.value;
                _filter.filterLabel = editFilterLabel.value;
                _filter.filterControl = (_ref6 = toNumberOrNull(editFilterControl.value)) !== null && _ref6 !== void 0 ? _ref6 : ContentCollectionFilterControl.Pills;
                _filter.isMultipleSelection = editFilterType.value === "1";
                bag.customFieldFilters.splice(_filterIndex, 1, _filter);
                validProperties = ["customFieldFilters"];
              }
              var box = {
                entity: bag,
                validProperties,
                isEditable: true
              };
              var data = {
                key: props.modelValue.idKey,
                box
              };
              var result = yield invokeBlockAction("SaveFilterSettings", data);
              if (!result.isSuccess || !((_result$data = result.data) !== null && _result$data !== void 0 && _result$data.entity)) {
                alert(result.errorMessage || "Unable to save filter settings.");
                return;
              }
              emit("update:modelValue", result.data.entity);
              isEditModalOpen.value = false;
            });
            return _onModalSave.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Panel), {
              title: "Search Filters"
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Search Filters",
                description: "The configuration below allows you to set various ways your collection can be filtered."
              }), createVNode(unref(script$5), {
                isEnabled: unref(fullTextSearchEnabled),
                title: "Full Text Search",
                description: "Uses the content field of the content channel item or description of an Event Item.",
                onEdit: onEditFullTextSearch
              }, null, 8, ["isEnabled"]), createVNode(unref(script$5), {
                isEnabled: unref(yearSearchEnabled),
                title: "Year",
                description: "Uses the content channel item's start date to determine the year of the content.",
                values: unref(yearSearchValues),
                onEdit: onEditYearFilter
              }, null, 8, ["isEnabled", "values"]), createVNode(unref(SectionHeader), {
                title: "Attribute Filters",
                description: "The settings below allow you to provide filters for attributes that you have configured to add to your content collection.",
                class: "margin-t-lg"
              }), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(attributeFilters), attribute => {
                return openBlock(), createBlock(unref(script$4), {
                  modelValue: attribute,
                  onEdit: onEditAttributeFilter
                }, null, 8, ["modelValue"]);
              }), 256)), createVNode(unref(SectionHeader), {
                title: "Custom Field Filters",
                description: "The settings below allow you to provide filters for custom fields that you have configured on your content collection.",
                class: "margin-t-lg"
              }), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(customFieldFilters), customField => {
                return openBlock(), createBlock(unref(script$3), {
                  modelValue: customField,
                  onEdit: onEditCustomFieldFilter
                }, null, 8, ["modelValue"]);
              }), 256))]),
              _: 1
            }), createVNode(unref(Modal), {
              modelValue: isEditModalOpen.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isEditModalOpen.value = $event),
              title: "Edit Search Filter",
              class: "search-filter-modal",
              saveText: "Save",
              onSave: onModalSave
            }, {
              default: withCtx(() => [createElementVNode("h1", null, toDisplayString(editFilterName.value), 1), createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createVNode(unref(InlineSwitch), {
                modelValue: editFilterEnabled.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editFilterEnabled.value = $event),
                label: "Enable Filter"
              }, null, 8, ["modelValue"]), !isEditFullTextSearch.value ? (openBlock(), createBlock(unref(TextBox), {
                key: 0,
                modelValue: editFilterLabel.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => editFilterLabel.value = $event),
                label: "Filter Label",
                rules: "required"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), !isEditFullTextSearch.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(RadioButtonList), {
                modelValue: editFilterControl.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => editFilterControl.value = $event),
                label: "Filter Control",
                horizontal: "",
                items: editFilterControlItems.value
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_5$1, [editShowFilterType.value ? (openBlock(), createBlock(unref(RadioButtonList), {
                key: 0,
                modelValue: editFilterType.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => editFilterType.value = $event),
                label: "Filter Type",
                horizontal: "",
                items: editFilterTypeItems
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      });

      script$2.__file = "src/Cms/ContentCollectionDetail/searchFilters.partial.obs";

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
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
            var _props$modelValue$col;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addTextValue("Collection Key", (_props$modelValue$col = props.modelValue.collectionKey) !== null && _props$modelValue$col !== void 0 ? _props$modelValue$col : "");
            var segmentsLabel = "<span class=\"label label-".concat(props.modelValue.enableSegments ? "success" : "default", "\">Segments</span>");
            var requestFiltersLabel = "<span class=\"label label-".concat(props.modelValue.enableRequestFilters ? "success" : "default", "\">Request Filters</span>");
            valueBuilder.addHtmlValue("Personalization", "<div class=\"label-container\">".concat(segmentsLabel).concat(requestFiltersLabel, "</div>"));
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.trendingEnabled) {
              var label = "<span class=\"label label-success\">Enabled</span>";
              var days = "<span class=\"text-xs\"><i class=\"fa fa-calendar-alt\"></i> ".concat(props.modelValue.trendingWindowDay, " ").concat(pluralConditional(props.modelValue.trendingWindowDay, "day", "days"), "</span>");
              var items = "<span class=\"text-xs\"><i class=\"fa fa-file-alt\"></i> ".concat(props.modelValue.trendingMaxItems, " ").concat(pluralConditional(props.modelValue.trendingMaxItems, "item", "items"), "</span>");
              valueBuilder.addHtmlValue("Trending", "<div class=\"content-collection-trending-state text-muted\">".concat(label).concat(days).concat(items, "</div>"));
            } else {
              valueBuilder.addHtmlValue("Trending", "<span class=\"label label-default\">Disabled</span>");
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Cms/ContentCollectionDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = {
        class: "nav nav-pills nav-sm margin-b-md"
      };
      var _hoisted_4 = ["onClick"];
      var _hoisted_5 = ["onClick"];
      var script = exports('default', defineComponent({
        name: 'contentCollectionDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var contentCollectionViewBag = ref(config.entity);
          var contentCollectionEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var isContentSourcesActive = ref(true);
          var validProperties = ["attributeValues", "description", "enableRequestFilters", "enableSegments", "filterSettings", "lastIndexDateTime", "lastIndexItemCount", "collectionKey", "name", "trendingEnabled", "trendingGravity", "trendingMaxItems", "trendingWindowDay"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(contentCollectionEditBag, validProperties, invokeBlockAction), undefined, true);
          var isIndexRebuilding = ref(false);
          var panelName = computed(() => {
            var _contentCollectionVie, _contentCollectionVie2;
            return (_contentCollectionVie = (_contentCollectionVie2 = contentCollectionViewBag.value) === null || _contentCollectionVie2 === void 0 ? void 0 : _contentCollectionVie2.name) !== null && _contentCollectionVie !== void 0 ? _contentCollectionVie : "";
          });
          var entityKey = computed(() => {
            var _contentCollectionVie3, _contentCollectionVie4;
            return (_contentCollectionVie3 = (_contentCollectionVie4 = contentCollectionViewBag.value) === null || _contentCollectionVie4 === void 0 ? void 0 : _contentCollectionVie4.idKey) !== null && _contentCollectionVie3 !== void 0 ? _contentCollectionVie3 : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
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
          var isViewing = computed(() => {
            return panelMode.value === DetailPanelMode.View;
          });
          var contentSourcesNavClass = computed(() => {
            return isContentSourcesActive.value ? "active" : "";
          });
          var searchFiltersNavClass = computed(() => {
            return isContentSourcesActive.value ? "" : "active";
          });
          var footerSecondaryActions = computed(() => {
            var actions = [];
            if (config.isEditable) {
              actions.push({
                type: "default",
                title: "Rebuild Index",
                iconCssClass: !isIndexRebuilding.value ? "fa fa-download" : "fa fa-cog fa-spin",
                disabled: isIndexRebuilding.value,
                handler: onRebuildIndex
              });
            }
            return actions;
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _contentCollectionEdi;
              if (!((_contentCollectionEdi = contentCollectionEditBag.value) !== null && _contentCollectionEdi !== void 0 && _contentCollectionEdi.idKey)) {
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
              var _contentCollectionVie5;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_contentCollectionVie5 = contentCollectionViewBag.value) === null || _contentCollectionVie5 === void 0 ? void 0 : _contentCollectionVie5.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete content collection.";
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
              var _contentCollectionVie6;
              var result = yield invokeBlockAction("Edit", {
                key: (_contentCollectionVie6 = contentCollectionViewBag.value) === null || _contentCollectionVie6 === void 0 ? void 0 : _contentCollectionVie6.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                contentCollectionEditBag.value = result.data.entity;
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
                entity: contentCollectionEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  contentCollectionViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save content collection.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          function onContentSourcesNav() {
            isContentSourcesActive.value = true;
          }
          function onSearchFiltersNav() {
            isContentSourcesActive.value = false;
          }
          function onRebuildIndex() {
            return _onRebuildIndex.apply(this, arguments);
          }
          function _onRebuildIndex() {
            _onRebuildIndex = _asyncToGenerator(function* () {
              var _contentCollectionVie7;
              if (isIndexRebuilding.value) {
                return;
              }
              isIndexRebuilding.value = true;
              var result = yield invokeBlockAction("RebuildIndex", {
                key: (_contentCollectionVie7 = contentCollectionViewBag.value) === null || _contentCollectionVie7 === void 0 ? void 0 : _contentCollectionVie7.idKey
              });
              isIndexRebuilding.value = false;
              if (result.isSuccess && result.data) {
                yield alert(result.data);
              } else {
                yield alert(result.errorMessage || "Unknown error while trying to rebuild the index.");
              }
            });
            return _onRebuildIndex.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified content collection could not be viewed.";
          } else if (!config.entity.idKey) {
            contentCollectionEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              textContent: toDisplayString(blockError.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              textContent: toDisplayString(errorMessage.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(DetailBlock), {
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(EntityType).ContentCollection,
              entityTypeName: "ContentCollection",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              footerSecondaryActions: unref(footerSecondaryActions),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: contentCollectionViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$6), {
                modelValue: contentCollectionEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => contentCollectionEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "footerSecondaryActions"]), unref(isViewing) ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("ul", _hoisted_3, [createElementVNode("li", {
              class: normalizeClass(unref(contentSourcesNavClass)),
              role: "presentation"
            }, [createElementVNode("a", {
              href: "#",
              onClick: withModifiers(onContentSourcesNav, ["prevent"])
            }, "Content Sources", 8, _hoisted_4)], 2), createElementVNode("li", {
              class: normalizeClass(unref(searchFiltersNavClass)),
              role: "presentation"
            }, [createElementVNode("a", {
              href: "#",
              onClick: withModifiers(onSearchFiltersNav, ["prevent"])
            }, "Search Filters", 8, _hoisted_5)], 2)]), isContentSourcesActive.value ? (openBlock(), createBlock(unref(script$7), {
              key: 0,
              modelValue: contentCollectionViewBag.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => contentCollectionViewBag.value = $event)
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(script$2), {
              key: 1,
              modelValue: contentCollectionViewBag.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => contentCollectionViewBag.value = $event)
            }, null, 8, ["modelValue"]))])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

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

      var css_248z = ".content-collection-detail .content-collection-trending-state>span+span,.content-collection-detail .label-container>.label+.label{margin-left:8px}.content-collection-detail .collection-source{align-items:center;border:1px solid #c4c4c4;border-radius:8px;display:flex;min-height:64px;overflow:clip}.content-collection-detail .collection-source+.collection-source{margin-top:16px}.content-collection-detail .collection-source>.bar{align-self:stretch;width:8px}.content-collection-detail .collection-source>.icon{align-items:center;border-radius:17px;display:flex;height:34px;justify-content:center;margin:0 8px;width:34px}.content-collection-detail .collection-source>.title{flex:1 0 0}.content-collection-detail .collection-source>.title>.text{font-weight:700}.content-collection-detail .collection-source>.title>.secondary-text{color:#737475;font-size:.8em}.content-collection-detail .panel-body .collection-source>.actions{border:initial;margin:initial}.content-collection-detail .collection-source>.actions>.item-count{margin-right:12px}.content-collection-detail .search-filter-row{display:flex}.content-collection-detail .search-filter-row+.search-filter-row{border-top:1px solid #dfe0e1;padding-top:24px}.content-collection-detail .search-filter-icon{font-size:20px;text-align:center;width:48px}.content-collection-detail .search-filter-content{flex:1 0 0}.content-collection-detail .search-filter-title>.title{font-weight:700}.content-collection-detail .search-filter-content>fieldset{display:flex;flex-wrap:wrap;margin-top:24px}.content-collection-detail .search-filter-content>fieldset>dl{flex:1 0 33.33%}";
      styleInject(css_248z);

      script.__file = "src/Cms/contentCollectionDetail.obs";

    })
  };
}));
//# sourceMappingURL=contentCollectionDetail.obs.js.map
