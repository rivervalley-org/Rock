System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/textBox', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/modal', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/panel', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/sectionHeader', '@Obsidian/Directives/dragDrop', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/component', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/inlineSwitch', '@Obsidian/Controls/radioButtonList', '@Obsidian/Enums/Cms/contentCollectionFilterControl', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, toDisplayString, createVNode, unref, normalizeClass, onBeforeUnmount, createBlock, NotificationBox, EntityType, DetailBlock, DetailPanelMode, CheckBoxList, CheckBox, CodeEditor, TextBox, useFormState, newGuid, areEqual, DropDownList, Modal, NumberBox, Panel, RockButton, SectionHeader, DragReorder, useDragReorder, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, alert, confirmDelete, updateRefValue, propertyRef, AttributeValuesContainer, InlineSwitch, RadioButtonList, ContentCollectionFilterControl, FieldType, toNumberOrNull, ValueDetailList, ValueDetailListItemBuilder, pluralConditional, debounce;
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
      onBeforeUnmount = module.onBeforeUnmount;
      createBlock = module.createBlock;
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
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      DragReorder = module.DragReorder;
      useDragReorder = module.useDragReorder;
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

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = createElementVNode("td", null, [createElementVNode("i", {
        class: "fa fa-check"
      })], -1);
      var _hoisted_3 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_4 = [_hoisted_3];
      var _hoisted_5 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_6 = [_hoisted_5];
      var _hoisted_7 = {
        key: 1
      };
      var _hoisted_8 = {
        colspan: "3"
      };
      var _hoisted_9 = {
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-md-4"
      };
      var _hoisted_11 = {
        class: "col-md-4"
      };
      var _hoisted_12 = {
        class: "col-md-4"
      };
      var _hoisted_13 = {
        class: "grid-columncommand",
        align: "center"
      };
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-check"
      }, null, -1);
      var _hoisted_15 = [_hoisted_14];
      var _hoisted_16 = createElementVNode("i", {
        class: "fa fa-minus"
      }, null, -1);
      var _hoisted_17 = [_hoisted_16];
      var script$1 = defineComponent({
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
            return !isEditMode.value ? (openBlock(), createElementBlock("tr", _hoisted_1, [createElementVNode("td", null, toDisplayString(key.value), 1), createElementVNode("td", null, toDisplayString(title.value), 1), _hoisted_2, createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-default btn-sm",
              onClick: onEditClick
            }, _hoisted_4)]), createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-danger btn-sm",
              onClick: onRemoveClick
            }, _hoisted_6)])])) : (openBlock(), createElementBlock("tr", _hoisted_7, [createElementVNode("td", _hoisted_8, [createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(TextBox), {
              modelValue: key.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => key.value = $event),
              label: "Key",
              rules: "required",
              help: "The key in the index to use for this custom value."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(TextBox), {
              modelValue: title.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => title.value = $event),
              label: "Title",
              rules: "required",
              help: "The title of the custom value, this is used if filtering is enabled."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_12, [createVNode(unref(CheckBox), {
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
            }, null, 8, ["modelValue"])]), createElementVNode("td", _hoisted_13, [createElementVNode("a", {
              class: normalizeClass(["btn btn-success btn-sm", {
                disabled: unref(isSaveDisabled)
              }]),
              onClick: onAcceptClick
            }, _hoisted_15, 2)]), createElementVNode("td", {
              class: "grid-columncommand",
              align: "center"
            }, [createElementVNode("a", {
              class: "btn btn-default btn-sm",
              onClick: onCancelClick
            }, _hoisted_17)])]));
          };
        }
      });

      script$1.__file = "src/Cms/ContentCollectionDetail/customKeySource.partial.obs";

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
      var Source = defineComponent({
        name: "Cms.ContentCollectionDetail.Source",
        components: {
          RockButton
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: {
          "edit": _value => true,
          "delete": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
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
          var onEditClick = () => {
            emit("edit", props.modelValue);
          };
          var onDeleteClick = () => {
            emit("delete", props.modelValue);
          };
          return {
            barStyle,
            iconCssClass,
            iconStyle,
            includes,
            itemCount,
            name,
            onDeleteClick,
            onEditClick
          };
        },
        template: "\n<div class=\"collection-source\">\n    <div class=\"bar\" :style=\"barStyle\"></div>\n    <div class=\"icon\" :style=\"iconStyle\">\n        <i v-if=\"iconCssClass\" :class=\"iconCssClass\"></i>\n    </div>\n    <div class=\"title\">\n        <div class=\"text\">{{ name }}</div>\n        <div v-if=\"includes\" class=\"secondary-text\">{{ includes }}</div>\n    </div>\n    <div class=\"actions\">\n        <span class=\"item-count badge badge-default\">{{ itemCount }}</span>\n        <span class=\"reorder-handle btn btn-default btn-sm\"><i class=\"fa fa-bars\"></i></span>\n        <RockButton btnSize=\"sm\" @click=\"onEditClick\"><i class=\"fa fa-pencil\"></i></RockButton>\n        <RockButton btnSize=\"sm\" @click=\"onDeleteClick\"><i class=\"fa fa-times\"></i></RockButton>\n    </div>\n</div>\n"
      });

      var ContentSources = defineComponent({
        name: "Cms.ContentCollectionDetail.ContentSources",
        components: {
          CheckBoxList,
          CustomKeySource: script$1,
          DropDownList,
          Modal,
          NumberBox,
          Panel,
          RockButton,
          SectionHeader,
          Source
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        directives: {
          DragReorder
        },
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$sou;
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var collectionSources = ref((_props$modelValue$sou = props.modelValue.sources) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : []);
          var isAddSourceOpen = ref(false);
          var addSourceMenuRef = ref(null);
          var sourceEditBag = ref(null);
          var isSourceModalOpen = ref(false);
          var sourceSelectedEntity = ref("");
          var sourceSelectedEntityAttributes = ref([]);
          var sourceEntityItems = ref([]);
          var sourceEntityAttributeTable = ref({});
          var sourceSelectedEntityOccurrences = ref(null);
          var sourceCustomFields = ref([]);
          var sourceNewCustomField = ref(null);
          var addSourceDropdownClass = computed(() => {
            return isAddSourceOpen.value ? "dropdown clearfix open" : "dropdown clearfix";
          });
          var sourceModalTitle = computed(() => {
            return isAddingSource.value ? "Add Content Source" : "Edit Content Source";
          });
          var isAddingSource = computed(() => {
            var _sourceEditBag$value;
            return !((_sourceEditBag$value = sourceEditBag.value) !== null && _sourceEditBag$value !== void 0 && _sourceEditBag$value.guid);
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
            return ((_sourceEntityAttribut = sourceEntityAttributeTable.value[sourceSelectedEntity.value]) !== null && _sourceEntityAttribut !== void 0 ? _sourceEntityAttribut : []).map(li => {
              return {
                value: li.value,
                text: li.category ? "".concat(li.text, " (").concat(li.category, ")") : li.text
              };
            });
          });
          var onAddSourceWindowClick = event => {
            var _event$target;
            if (!(event.target instanceof HTMLElement) || !isAddSourceOpen.value) {
              return;
            }
            var menu = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.closest(".dropdown-menu");
            if (menu !== addSourceMenuRef.value) {
              isAddSourceOpen.value = false;
            }
          };
          var onAddSourceClick = () => {
            isAddSourceOpen.value = !isAddSourceOpen.value;
          };
          var onAddCalendarSource = function () {
            var _ref2 = _asyncToGenerator(function* () {
              isAddSourceOpen.value = false;
              var result = yield invokeBlockAction("GetAvailableEventCalendars");
              if (!result || !result.data) {
                alert(result.errorMessage || "Unable to get list of event calendars.");
                return;
              }
              sourceSelectedEntity.value = "";
              sourceSelectedEntityAttributes.value = [];
              sourceSelectedEntityOccurrences.value = null;
              sourceEntityItems.value = result.data.filter(e => !collectionSources.value.some(s => areEqual(s.entityGuid, e.guid))).map(e => ({
                value: e.guid,
                text: e.name
              }));
              sourceEntityAttributeTable.value = result.data.reduce((table, c) => {
                var _c$guid, _c$attributes;
                table[(_c$guid = c.guid) !== null && _c$guid !== void 0 ? _c$guid : ""] = (_c$attributes = c.attributes) !== null && _c$attributes !== void 0 ? _c$attributes : [];
                return table;
              }, {});
              sourceEditBag.value = {
                entityTypeGuid: EntityType.EventCalendar,
                occurrencesToShow: 0,
                itemCount: 0
              };
              sourceCustomFields.value = [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return function onAddCalendarSource() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onAddContentChannelSource = function () {
            var _ref3 = _asyncToGenerator(function* () {
              isAddSourceOpen.value = false;
              var result = yield invokeBlockAction("GetAvailableContentChannels");
              if (!result || !result.data) {
                alert(result.errorMessage || "Unable to get list of content channels.");
                return;
              }
              sourceSelectedEntity.value = "";
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
                var _c$guid2, _c$attributes2;
                table[(_c$guid2 = c.guid) !== null && _c$guid2 !== void 0 ? _c$guid2 : ""] = (_c$attributes2 = c.attributes) !== null && _c$attributes2 !== void 0 ? _c$attributes2 : [];
                return table;
              }, {});
              sourceEditBag.value = {
                entityTypeGuid: EntityType.ContentChannel,
                occurrencesToShow: 0,
                itemCount: 0
              };
              sourceCustomFields.value = [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return function onAddContentChannelSource() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onSourceSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _sourceEditBag$value5, _sourceSelectedEntity, _props$modelValue, _result$data;
              if (!sourceEditBag.value) {
                return;
              }
              var bag = {
                guid: (_sourceEditBag$value5 = sourceEditBag.value) === null || _sourceEditBag$value5 === void 0 ? void 0 : _sourceEditBag$value5.guid,
                entityTypeGuid: sourceEditBag.value.entityTypeGuid,
                entityGuid: sourceSelectedEntity.value,
                attributes: sourceSelectedEntityAttributes.value.map(a => ({
                  value: a
                })),
                occurrencesToShow: (_sourceSelectedEntity = sourceSelectedEntityOccurrences.value) !== null && _sourceSelectedEntity !== void 0 ? _sourceSelectedEntity : 0,
                customFields: sourceCustomFields.value,
                itemCount: 0
              };
              var data = {
                key: (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.idKey,
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
            return function onSourceSave() {
              return _ref4.apply(this, arguments);
            };
          }();
          var onDeleteSource = function () {
            var _ref5 = _asyncToGenerator(function* (source) {
              var _props$modelValue2, _result$data2;
              if (!(yield confirmDelete("Collection Source"))) {
                return;
              }
              var data = {
                key: (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.idKey,
                sourceGuid: source.guid
              };
              var result = yield invokeBlockAction("DeleteCollectionSource", data);
              if (!result || !result.isSuccess || !((_result$data2 = result.data) !== null && _result$data2 !== void 0 && _result$data2.entity)) {
                alert(result.errorMessage || "Unable to delete the collection source.");
                return;
              }
              emit("update:modelValue", result.data.entity);
            });
            return function onDeleteSource(_x) {
              return _ref5.apply(this, arguments);
            };
          }();
          var onEditSource = function () {
            var _ref6 = _asyncToGenerator(function* (source) {
              var _source$entityGuid, _source$attributes$ma, _source$attributes;
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
              sourceSelectedEntity.value = (_source$entityGuid = source.entityGuid) !== null && _source$entityGuid !== void 0 ? _source$entityGuid : "";
              sourceSelectedEntityAttributes.value = (_source$attributes$ma = (_source$attributes = source.attributes) === null || _source$attributes === void 0 ? void 0 : _source$attributes.map(v => {
                var _v$value;
                return (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "";
              })) !== null && _source$attributes$ma !== void 0 ? _source$attributes$ma : [];
              sourceSelectedEntityOccurrences.value = source.occurrencesToShow > 0 ? source.occurrencesToShow : null;
              sourceEntityAttributeTable.value = availableContent.reduce((table, c) => {
                var _c$guid3, _c$attributes3;
                table[(_c$guid3 = c.guid) !== null && _c$guid3 !== void 0 ? _c$guid3 : ""] = (_c$attributes3 = c.attributes) !== null && _c$attributes3 !== void 0 ? _c$attributes3 : [];
                return table;
              }, {});
              sourceEditBag.value = source;
              sourceCustomFields.value = source.customFields ? [...source.customFields] : [];
              sourceNewCustomField.value = null;
              isSourceModalOpen.value = true;
            });
            return function onEditSource(_x2) {
              return _ref6.apply(this, arguments);
            };
          }();
          var onSourceReorder = function () {
            var _ref7 = _asyncToGenerator(function* (value, beforeValue) {
              var _beforeValue$guid;
              var data = {
                key: props.modelValue.idKey,
                guid: value.guid,
                beforeGuid: (_beforeValue$guid = beforeValue === null || beforeValue === void 0 ? void 0 : beforeValue.guid) !== null && _beforeValue$guid !== void 0 ? _beforeValue$guid : null
              };
              var result = yield invokeBlockAction("ReorderSource", data);
              if (!result.isSuccess) {
                alert(result.errorMessage || "Unable to re-order sources, you might need to reload the page.");
                return;
              }
            });
            return function onSourceReorder(_x3, _x4) {
              return _ref7.apply(this, arguments);
            };
          }();
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
            var _props$modelValue$sou2, _props$modelValue3;
            updateRefValue(collectionSources, (_props$modelValue$sou2 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.sources) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : []);
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
          return {
            addSourceDropdownClass,
            addSourceMenuRef,
            isAddingSource,
            isSourceModalCalendar,
            isSourceModalOpen,
            collectionSources,
            onAddCalendarSource,
            onAddContentChannelSource,
            onAddCustomFieldClick,
            onAddSourceClick,
            onCustomFieldRemove,
            onNewCustomFieldEditModeChanged,
            onNewCustomFieldSave,
            onSourceSave,
            onDeleteSource,
            onEditSource,
            reorderDragOptions,
            sourceCustomFields,
            sourceEntityAttributeItems,
            sourceEntityItems,
            sourceModalEntityName,
            sourceModalTitle,
            sourceModalEntityTitle,
            sourceNewCustomField,
            sourceSelectedEntity,
            sourceSelectedEntityAttributes,
            sourceSelectedEntityOccurrences
          };
        },
        template: "\n<Panel title=\"Sources\">\n    <SectionHeader title=\"Content Sources\" description=\"Content for this collection will be pulled from the following sources within Rock.\">\n        <template #actions>\n            <div :class=\"addSourceDropdownClass\">\n                <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" @click.prevent.stop=\"onAddSourceClick\">\n                    <i class=\"fa fa-plus\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul ref=\"addSourceMenuRef\" class=\"dropdown-menu dropdown-menu-right\">\n                    <li><a href=\"#\" @click.prevent=\"onAddContentChannelSource\">Add Content Channel</a></li>\n                    <li><a href=\"#\" @click.prevent=\"onAddCalendarSource\">Add Calendar</a></li>\n                </ul>\n            </div>\n        </template>\n    </SectionHeader>\n\n    <div class=\"collection-content-sources\" v-drag-reorder=\"reorderDragOptions\">\n        <Source v-for=\"source in collectionSources\" :key=\"source.guid\" v-model=\"source\" @delete=\"onDeleteSource\" @edit=\"onEditSource\" />\n    </div>\n</Panel>\n\n<Modal v-model=\"isSourceModalOpen\"\n    :title=\"sourceModalTitle\"\n    class=\"content-source-modal\"\n    saveText=\"Save\"\n    @save=\"onSourceSave\">\n    <h1 v-if=\"!isAddingSource\">{{ sourceModalEntityName }}</h1>\n    <div v-else class=\"row\">\n        <div class=\"col-md-6\">\n            <DropDownList v-if=\"isAddingSource\"\n                v-model=\"sourceSelectedEntity\"\n                :label=\"sourceModalEntityTitle\"\n                :items=\"sourceEntityItems\"\n                rules=\"required\" />\n        </div>\n    </div>\n\n    <div class=\"row\" v-if=\"sourceSelectedEntity\">\n        <div class=\"col-md-6\">\n            <CheckBoxList v-model=\"sourceSelectedEntityAttributes\"\n                label=\"Attributes to Include\"\n                help=\"Determines which attributes should be added to the collection index for search and retrieval.\"\n                :items=\"sourceEntityAttributeItems\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <NumberBox v-if=\"isSourceModalCalendar\"\n                v-model=\"sourceSelectedEntityOccurrences\"\n                label=\"Number of Future Occurrences to Show\"\n                rules=\"gte:1\" />\n        </div>\n    </div>\n\n    <SectionHeader title=\"Custom Values\"\n                   description=\"Most of the content you provide for the collection will be based on the attributes mentioned above. Additionally, you can provide properties below that can be used for filtering or to provide more information.\" />\n\n    <table class=\"grid-table table table-condensed table-light\">\n        <thead>\n            <tr>\n                <th>Key</th>\n                <th>Title</th>\n                <th>Multiple</th>\n                <th class=\"grid-columncommand\"></th>\n                <th class=\"grid-columncommand\"></th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <CustomKeySource v-for=\"(customField, index) in sourceCustomFields\"\n                v-model=\"sourceCustomFields[index]\"\n                v-model:editMode=\"sourceCustomFieldEditMode\"\n                @remove=\"onCustomFieldRemove(index)\" />\n\n            <CustomKeySource v-if=\"sourceNewCustomField\"\n                :modelValue=\"sourceNewCustomField\"\n                editMode\n                @update:modelValue=\"onNewCustomFieldSave\"\n                @update:editMode=\"onNewCustomFieldEditModeChanged\" />\n\n            <tr v-else-if=\"!sourceCustomFields.length\">\n                <td colspan=\"5\">No custom fields defined.</td>\n            </tr>\n        </tbody>\n\n        <tfoot>\n            <tr>\n                <td class=\"grid-actions\" colspan=\"6\">\n                    <a class=\"btn btn-grid-action btn-add btn-default btn-sm\" accesskey=\"n\" title=\"Alt+N\" href=\"#\" @click.prevent=\"onAddCustomFieldClick\">\n                        <i class=\"fa fa-plus-circle fa-fw\"></i>\n                    </a>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n\n    <div style=\"margin-bottom: 40px;\"></div>\n</Modal>\n"
      });

      var enablePersonalizationItems = [{
        value: "segments",
        text: "Segments"
      }, {
        value: "requestFilters",
        text: "Request Filters"
      }];
      var EditPanel = defineComponent({
        name: "Cms.ContentCollectionDetail.EditPanel",
        components: {
          AttributeValuesContainer,
          CheckBox,
          CheckBoxList,
          NumberBox,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$nam, _props$modelValue$col;
          var emit = _ref.emit;
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
          return {
            attributes,
            attributeValues,
            description,
            enablePersonalization,
            enablePersonalizationItems,
            name,
            collectionKey,
            trendingEnabled,
            trendingWindowDay,
            trendingMaxItems,
            trendingGravity
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n    </div>\n\n    <TextBox v-model=\"description\"\n        label=\"Description\"\n        textMode=\"multiline\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"collectionKey\"\n                label=\"Key\"\n                help=\"The unique key that will identify this collection.\"\n                rules=\"required\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"trendingEnabled\"\n                label=\"Enable Trending\"\n                help=\"Determines if trending metrics should be calculated on each run of the collection update job.\" />\n\n            <div v-if=\"trendingEnabled\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <NumberBox v-model=\"trendingWindowDay\"\n                            label=\"Trending Window\"\n                            help=\"Determines how many days of interactions to look at to determine trending items.\"\n                            :decimalCount=\"0\"\n                            rules=\"required|gte:0\">\n                            <template #append>\n                                <span class=\"input-group-addon\">Days</span>\n                            </template>\n                        </NumberBox>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <NumberBox v-model=\"trendingMaxItems\"\n                            label=\"Trending Item Count\"\n                            help=\"The number of items to mark as trending.\"\n                            :decimalCount=\"0\"\n                            rules=\"required|gte:0\" />\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <NumberBox v-model=\"trendingGravity\"\n                            label=\"Trending Gravity\"\n                            help=\"Gravity helps apply more weight to items that are newer. Selecting the correct gravity value can be a bit of trial and error, but we recommend that you start with the default value.\"\n                            rules=\"required|gte:0\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBoxList v-model=\"enablePersonalization\"\n                label=\"Enable Personalization\"\n                help=\"Determines which personalization features are enabled.\"\n                :items=\"enablePersonalizationItems\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var SearchFilter = defineComponent({
        name: "Cms.ContentCollectionDetail.SearchFilter",
        components: {
          RockButton
        },
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
        emits: {
          "edit": () => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var onEditClick = () => {
            emit("edit");
          };
          return {
            onEditClick
          };
        },
        template: "\n<div class=\"search-filter-row\">\n    <div class=\"search-filter-icon\">\n        <i v-if=\"isEnabled\" class=\"fa fa-check-square\" style=\"color: var(--brand-color);\"></i>\n        <i v-else class=\"fa fa-check-square-o\" style=\"color: #c3c2c2;\"></i>\n    </div>\n\n    <div class=\"search-filter-content\">\n        <div class=\"search-filter-title\">\n            <span class=\"title\">{{ title }}</span>\n            <template v-if=\"subtitle\">&nbsp;<span class=\"subtitle text-sm text-muted\">{{ subtitle }}</span></template>\n        </div>\n        <div v-if=\"description\" class=\"search-filter-description\">{{ description }}</div>\n\n        <fieldset v-if=\"!isInconsistent\">\n            <dl v-for=\"value in values\">\n                <dt>{{ value.text }}</dt>\n                <dd>{{ value.value }}</dd>\n            </dl>\n        </fieldset>\n        <div v-else class=\"text-danger margin-t-md margin-b-md\">\n            The field type configuration of the attribute is not consistent for all sources. Please resolve the inconsistency or rename the attribute key to be unique.\n        </div>\n    </div>\n\n    <div class=\"search-filter-actions\">\n        <RockButton v-if=\"!isInconsistent\" btnSize=\"sm\" @click=\"onEditClick\"><i class=\"fa fa-pencil\"></i></RockButton>\n    </div>\n</div>\n"
      });

      var AttributeSearchFilter = defineComponent({
        name: "Cms.ContentCollectionDetail.AttributeSearchFilter",
        components: {
          SearchFilter
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: {
          edit: _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
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
          var onEdit = () => {
            emit("edit", props.modelValue);
          };
          return {
            description,
            isEnabled,
            isInconsistent,
            onEdit,
            subtitle,
            title,
            values
          };
        },
        template: "\n<SearchFilter :isEnabled=\"isEnabled\"\n    :isInconsistent=\"isInconsistent\"\n    :title=\"title\"\n    :subtitle=\"subtitle\"\n    :description=\"description\"\n    :values=\"values\"\n    @edit=\"onEdit\" />\n"
      });

      var script = defineComponent({
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
            return openBlock(), createBlock(unref(SearchFilter), {
              isEnabled: unref(isEnabled),
              title: unref(title),
              description: unref(description),
              values: unref(values),
              onEdit: onEdit
            }, null, 8, ["isEnabled", "title", "description", "values"]);
          };
        }
      });

      script.__file = "src/Cms/ContentCollectionDetail/customFieldSearchFilter.partial.obs";

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
      var SearchFilters = defineComponent({
        name: "Cms.ContentCollectionDetail.SearchFilters",
        components: {
          AttributeSearchFilter,
          CustomFieldSearchFilter: script,
          InlineSwitch,
          Modal,
          Panel,
          RadioButtonList,
          RockButton,
          SearchFilter,
          SectionHeader,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: {
          "update:modelValue": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          console.log("setup");
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
          var fullTextSearchEnabled = computed(() => {
            var _props$modelValue$fil, _props$modelValue$fil2;
            return (_props$modelValue$fil = (_props$modelValue$fil2 = props.modelValue.filterSettings) === null || _props$modelValue$fil2 === void 0 ? void 0 : _props$modelValue$fil2.fullTextSearchEnabled) !== null && _props$modelValue$fil !== void 0 ? _props$modelValue$fil : false;
          });
          var yearSearchEnabled = computed(() => {
            var _props$modelValue$fil3, _props$modelValue$fil4;
            return (_props$modelValue$fil3 = (_props$modelValue$fil4 = props.modelValue.filterSettings) === null || _props$modelValue$fil4 === void 0 ? void 0 : _props$modelValue$fil4.yearSearchEnabled) !== null && _props$modelValue$fil3 !== void 0 ? _props$modelValue$fil3 : false;
          });
          var yearSearchLabel = computed(() => {
            var _props$modelValue$fil5;
            return ((_props$modelValue$fil5 = props.modelValue.filterSettings) === null || _props$modelValue$fil5 === void 0 ? void 0 : _props$modelValue$fil5.yearSearchLabel) || "Year";
          });
          var yearSearchFilterControl = computed(() => {
            var _props$modelValue$fil6, _props$modelValue$fil7;
            return (_props$modelValue$fil6 = (_props$modelValue$fil7 = props.modelValue.filterSettings) === null || _props$modelValue$fil7 === void 0 ? void 0 : _props$modelValue$fil7.yearSearchFilterControl) !== null && _props$modelValue$fil6 !== void 0 ? _props$modelValue$fil6 : ContentCollectionFilterControl.Pills;
          });
          var yearSearchFilterIsMultipleSelection = computed(() => {
            var _props$modelValue$fil8, _props$modelValue$fil9;
            return (_props$modelValue$fil8 = (_props$modelValue$fil9 = props.modelValue.filterSettings) === null || _props$modelValue$fil9 === void 0 ? void 0 : _props$modelValue$fil9.yearSearchFilterIsMultipleSelection) !== null && _props$modelValue$fil8 !== void 0 ? _props$modelValue$fil8 : false;
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
            var _props$modelValue$fil10, _props$modelValue$fil11;
            return (_props$modelValue$fil10 = (_props$modelValue$fil11 = props.modelValue.filterSettings) === null || _props$modelValue$fil11 === void 0 ? void 0 : _props$modelValue$fil11.attributeFilters) !== null && _props$modelValue$fil10 !== void 0 ? _props$modelValue$fil10 : [];
          });
          var customFieldFilters = computed(() => {
            var _props$modelValue$fil12, _props$modelValue$fil13;
            return (_props$modelValue$fil12 = (_props$modelValue$fil13 = props.modelValue.filterSettings) === null || _props$modelValue$fil13 === void 0 ? void 0 : _props$modelValue$fil13.customFieldFilters) !== null && _props$modelValue$fil12 !== void 0 ? _props$modelValue$fil12 : [];
          });
          var onEditAttributeFilter = filter => {
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
          };
          var onEditCustomFieldFilter = filter => {
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
          };
          var onEditFullTextSearch = () => {
            editFilterKey.value = "";
            editFilterName.value = "Full Text Search";
            editFilterEnabled.value = fullTextSearchEnabled.value;
            editShowFilterType.value = false;
            isEditFullTextSearch.value = true;
            isEditModalOpen.value = true;
          };
          var onEditYearFilter = () => {
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
          };
          var onModalSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _result$data;
              if (!props.modelValue.filterSettings) {
                return;
              }
              var bag = _objectSpread2({}, props.modelValue.filterSettings);
              var validProperties;
              if (isEditFullTextSearch.value) {
                bag.fullTextSearchEnabled = editFilterEnabled.value;
                validProperties = ["fullTextSearchEnabled"];
              } else if (!editFilterKey.value) {
                var _ref5;
                bag.yearSearchEnabled = editFilterEnabled.value;
                bag.yearSearchFilterControl = (_ref5 = toNumberOrNull(editFilterControl.value)) !== null && _ref5 !== void 0 ? _ref5 : ContentCollectionFilterControl.Pills;
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
                  var _ref6;
                  filter.filterControl = (_ref6 = toNumberOrNull(editFilterControl.value)) !== null && _ref6 !== void 0 ? _ref6 : ContentCollectionFilterControl.Pills;
                  filter.isMultipleSelection = editFilterType.value === "1";
                }
                bag.attributeFilters.splice(filterIndex, 1, filter);
                validProperties = ["attributeFilters"];
              } else {
                var _bag$customFieldFilte, _ref7;
                bag.customFieldFilters = [...((_bag$customFieldFilte = bag.customFieldFilters) !== null && _bag$customFieldFilte !== void 0 ? _bag$customFieldFilte : [])];
                var _filterIndex = bag.customFieldFilters.findIndex(f => f.key === editFilterKey.value);
                if (_filterIndex === -1) {
                  return;
                }
                var _filter = _objectSpread2({}, bag.customFieldFilters[_filterIndex]);
                _filter.isEnabled = editFilterEnabled.value;
                _filter.filterLabel = editFilterLabel.value;
                _filter.filterControl = (_ref7 = toNumberOrNull(editFilterControl.value)) !== null && _ref7 !== void 0 ? _ref7 : ContentCollectionFilterControl.Pills;
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
            return function onModalSave() {
              return _ref4.apply(this, arguments);
            };
          }();
          return {
            attributeFilters,
            customFieldFilters,
            editFilterControl,
            editFilterControlItems,
            editFilterEnabled,
            editFilterLabel,
            editFilterName,
            editFilterType,
            editFilterTypeItems,
            editShowFilterType,
            fullTextSearchEnabled,
            isEditFullTextSearch,
            isEditModalOpen,
            onEditAttributeFilter,
            onEditCustomFieldFilter,
            onEditFullTextSearch,
            onEditYearFilter,
            onModalSave,
            yearSearchEnabled,
            yearSearchValues
          };
        },
        template: "\n<Panel title=\"Search Filters\">\n    <SectionHeader title=\"Search Filters\"\n        description=\"The configuration below allows you to set various ways your collection can be filtered.\" />\n\n    <SearchFilter :isEnabled=\"fullTextSearchEnabled\"\n        title=\"Full Text Search\"\n        description=\"Uses the content field of the content channel item or description of an Event Item.\"\n        @edit=\"onEditFullTextSearch\" />\n\n    <SearchFilter :isEnabled=\"yearSearchEnabled\"\n        title=\"Year\"\n        description=\"Uses the content channel item's start date to determine the year of the content.\"\n        :values=\"yearSearchValues\"\n        @edit=\"onEditYearFilter\" />\n\n    <SectionHeader title=\"Attribute Filters\"\n        description=\"The settings below allow you to provide filters for attributes that you have configured to add to your content collection.\"\n        class=\"margin-t-lg\" />\n\n    <AttributeSearchFilter v-for=\"attribute in attributeFilters\"\n        :modelValue=\"attribute\"\n        @edit=\"onEditAttributeFilter\" />\n\n    <SectionHeader title=\"Custom Field Filters\"\n        description=\"The settings below allow you to provide filters for custom fields that you have configured on your content collection.\"\n        class=\"margin-t-lg\" />\n\n    <CustomFieldSearchFilter v-for=\"customField in customFieldFilters\"\n        :modelValue=\"customField\"\n        @edit=\"onEditCustomFieldFilter\" />\n</Panel>\n\n<Modal v-model=\"isEditModalOpen\"\n    title=\"Edit Search Filter\"\n    class=\"search-filter-modal\"\n    saveText=\"Save\"\n    @save=\"onModalSave\">\n    <h1>{{ editFilterName }}</h1>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <InlineSwitch v-model=\"editFilterEnabled\"\n                label=\"Enable Filter\" />\n\n            <TextBox v-if=\"!isEditFullTextSearch\"\n                v-model=\"editFilterLabel\"\n                label=\"Filter Label\"\n                rules=\"required\" />\n        </div>\n    </div>\n\n    <div v-if=\"!isEditFullTextSearch\" class=\"row\">\n        <div class=\"col-md-6\">\n            <RadioButtonList v-model=\"editFilterControl\"\n                label=\"Filter Control\"\n                horizontal\n                :items=\"editFilterControlItems\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <RadioButtonList v-if=\"editShowFilterType\"\n                v-model=\"editFilterType\"\n                label=\"Filter Type\"\n                horizontal\n                :items=\"editFilterTypeItems\" />\n        </div>\n    </div>\n</Modal>\n"
      });

      var ViewPanel = defineComponent({
        name: "Cms.ContentCollectionDetail.ViewPanel",
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
        components: {
          AttributeValuesContainer,
          ValueDetailList
        },
        setup(props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
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
          return {
            attributes,
            attributeValues,
            leftSideValues,
            rightSideValues,
            topValues
          };
        },
        template: "\n<fieldset>\n    <ValueDetailList :modelValue=\"topValues\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"rightSideValues\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer :modelValue=\"attributeValues\" :attributes=\"attributes\" :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var contentCollectionDetail = exports('default', defineComponent({
        name: "Cms.ContentCollectionView",
        components: {
          NotificationBox,
          ContentSources,
          SearchFilters,
          EditPanel,
          DetailBlock,
          ViewPanel
        },
        setup() {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var contentCollectionViewBag = ref(config.entity);
          var contentCollectionEditBag = ref(null);
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
              return null;
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
          var onCancelEdit = function () {
            var _ref = _asyncToGenerator(function* () {
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
            return function onCancelEdit() {
              return _ref.apply(this, arguments);
            };
          }();
          var onDelete = function () {
            var _ref2 = _asyncToGenerator(function* () {
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
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
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
            return function onEdit() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onPropertyChanged = propertyName => {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          };
          var onSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
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
            return function onSave() {
              return _ref4.apply(this, arguments);
            };
          }();
          var onContentSourcesNav = () => {
            isContentSourcesActive.value = true;
          };
          var onSearchFiltersNav = () => {
            isContentSourcesActive.value = false;
          };
          var onRebuildIndex = function () {
            var _ref5 = _asyncToGenerator(function* () {
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
            return function onRebuildIndex() {
              return _ref5.apply(this, arguments);
            };
          }();
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified content collection could not be viewed.";
          } else if (!config.entity.idKey) {
            contentCollectionEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            contentCollectionViewBag,
            contentCollectionEditBag,
            contentSourcesNavClass,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.ContentCollection,
            errorMessage,
            isContentSourcesActive,
            isEditable,
            isViewing,
            onCancelEdit,
            onContentSourcesNav,
            onDelete,
            onEdit,
            onPropertyChanged,
            onSave,
            onSearchFiltersNav,
            options,
            panelMode,
            panelName,
            searchFiltersNavClass,
            footerSecondaryActions
          };
        },
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\" v-text=\"blockError\" />\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\" v-text=\"errorMessage\" />\n\n<v-style>\n    .content-collection-detail .label-container > .label + .label {\n        margin-left: 8px;\n    }\n    .content-collection-detail .content-collection-trending-state > span + span {\n        margin-left: 8px;\n    }\n\n    .content-collection-detail .collection-source {\n        display: flex;\n        min-height: 64px;\n        border-radius: 8px;\n        border: 1px solid #c4c4c4;\n        overflow: clip;\n        align-items: center;\n    }\n\n    .content-collection-detail .collection-source + .collection-source {\n        margin-top: 16px;\n    }\n\n    .content-collection-detail .collection-source > .bar {\n        width: 8px;\n        align-self: stretch;\n    }\n\n    .content-collection-detail .collection-source > .icon {\n        margin: 0px 8px;\n        width: 34px;\n        height: 34px;\n        border-radius: 17px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .content-collection-detail .collection-source > .title {\n        flex: 1 0 0;\n    }\n\n    .content-collection-detail .collection-source > .title > .text {\n        font-weight: bold;\n    }\n\n    .content-collection-detail .collection-source > .title > .secondary-text {\n        color: #737475;\n        font-size: 0.8em;\n    }\n\n    /* Overrides to fix panel-body targets. */\n    .content-collection-detail .panel-body .collection-source > .actions {\n        margin: initial;\n        border: initial;\n    }\n\n    .content-collection-detail .collection-source > .actions > .item-count {\n        margin-right: 12px;\n    }\n\n    .content-collection-detail .search-filter-row {\n        display: flex;\n    }\n\n    .content-collection-detail .search-filter-row + .search-filter-row {\n        border-top: 1px solid #dfe0e1;\n        padding-top: 24px;\n    }\n\n    .content-collection-detail .search-filter-icon {\n        width: 48px;\n        text-align: center;\n        font-size: 20px;\n    }\n\n    .content-collection-detail .search-filter-content {\n        flex: 1 0 0;\n    }\n\n    .content-collection-detail .search-filter-title > .title {\n        font-weight: bold;\n    }\n\n    .content-collection-detail .search-filter-description {\n    }\n\n    .content-collection-detail .search-filter-content > fieldset {\n        margin-top: 24px;\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .content-collection-detail .search-filter-content > fieldset > dl {\n        flex: 1 0 33.33%;\n    }\n</v-style>\n\n<div v-if=\"!blockError\">\n    <DetailBlock v-model:mode=\"panelMode\"\n        :name=\"panelName\"\n        :labels=\"blockLabels\"\n        :entityKey=\"entityKey\"\n        :entityTypeGuid=\"entityTypeGuid\"\n        entityTypeName=\"ContentCollection\"\n        :isAuditHidden=\"false\"\n        :isBadgesVisible=\"true\"\n        :isDeleteVisible=\"isEditable\"\n        :isEditVisible=\"isEditable\"\n        :isFollowVisible=\"false\"\n        :isSecurityHidden=\"true\"\n        :footerSecondaryActions=\"footerSecondaryActions\"\n        @cancelEdit=\"onCancelEdit\"\n        @delete=\"onDelete\"\n        @edit=\"onEdit\"\n        @save=\"onSave\">\n        <template #view>\n            <ViewPanel :modelValue=\"contentCollectionViewBag\" :options=\"options\" />\n        </template>\n\n        <template #edit>\n            <EditPanel v-model=\"contentCollectionEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n        </template>\n    </DetailBlock>\n\n    <div v-if=\"isViewing\">\n        <ul class=\"nav nav-pills nav-sm margin-b-md\">\n            <li :class=\"contentSourcesNavClass\" role=\"presentation\"><a href=\"#\" @click.prevent=\"onContentSourcesNav\">Content Sources</a></li>\n            <li :class=\"searchFiltersNavClass\" role=\"presentation\"><a href=\"#\" @click.prevent=\"onSearchFiltersNav\">Search Filters</a></li>\n        </ul>\n\n        <ContentSources v-if=\"isContentSourcesActive\" v-model=\"contentCollectionViewBag\" />\n        <SearchFilters v-else v-model=\"contentCollectionViewBag\" />\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=contentCollectionDetail.js.map
