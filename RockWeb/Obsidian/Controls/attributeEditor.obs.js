System.register(['vue', './checkBox.obs', './textBox.obs', './categoryPicker.obs', './fieldTypeEditor.obs', './staticFormControl.obs', './panel.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, createBlock, createCommentVNode, withCtx, CheckBox, TextBox, CategoryPicker, FieldTypeEditor, StaticFormControl, Panel, EntityType, emptyGuid;
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
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      FieldTypeEditor = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      emptyGuid = module.emptyGuid;
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
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
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
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-sm-6"
      };
      var _hoisted_11 = {
        class: "col-sm-6"
      };
      var _hoisted_12 = {
        class: "col-sm-6"
      };
      var _hoisted_13 = {
        class: "col-md-6"
      };
      var _hoisted_14 = {
        class: "row"
      };
      var _hoisted_15 = {
        class: "col-md-6"
      };
      var _hoisted_16 = {
        class: "col-md-6"
      };
      var script = exports('default', defineComponent({
        name: 'attributeEditor',
        props: {
          modelValue: {
            type: Object,
            default: null
          },
          attributeEntityTypeGuid: {
            type: String
          },
          isAnalyticsVisible: {
            type: Boolean,
            default: false
          },
          isShowInGridVisible: {
            type: Boolean,
            default: true
          },
          isShowOnBulkVisible: {
            type: Boolean,
            default: true
          },
          isAllowSearchVisible: {
            type: Boolean,
            default: false
          },
          isIndexingEnabledVisible: {
            type: Boolean,
            default: false
          },
          reservedKeyNames: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$nam, _props$modelValue, _props$modelValue$abb, _props$modelValue2, _props$modelValue$key, _props$modelValue3, _props$modelValue$des, _props$modelValue4, _props$modelValue$isS, _props$modelValue5, _props$modelValue$isA, _props$modelValue6, _props$modelValue$isP, _props$modelValue7, _props$modelValue$isR, _props$modelValue8, _props$modelValue$isS2, _props$modelValue9, _props$modelValue$isS3, _props$modelValue10, _props$modelValue$isE, _props$modelValue11, _props$modelValue$isA2, _props$modelValue12, _props$modelValue$isI, _props$modelValue13, _props$modelValue$isA3, _props$modelValue14, _props$modelValue$isA4, _props$modelValue15, _props$modelValue$pre, _props$modelValue16, _props$modelValue$pos, _props$modelValue17, _props$modelValue$cat, _props$modelValue18, _props$modelValue19, _props$modelValue20, _props$modelValue$con, _props$modelValue21, _props$modelValue$def, _props$modelValue22;
          var emit = _ref.emit;
          var props = __props;
          var attributeName = ref((_props$modelValue$nam = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var abbreviatedName = ref((_props$modelValue$abb = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.abbreviatedName) !== null && _props$modelValue$abb !== void 0 ? _props$modelValue$abb : "");
          var attributeKey = ref((_props$modelValue$key = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.key) !== null && _props$modelValue$key !== void 0 ? _props$modelValue$key : "");
          var description = ref((_props$modelValue$des = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var isSystem = ref((_props$modelValue$isS = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false);
          var isActive = ref((_props$modelValue$isA = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : true);
          var isPublic = ref((_props$modelValue$isP = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.isPublic) !== null && _props$modelValue$isP !== void 0 ? _props$modelValue$isP : false);
          var isRequired = ref((_props$modelValue$isR = (_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.isRequired) !== null && _props$modelValue$isR !== void 0 ? _props$modelValue$isR : false);
          var isShowOnBulk = ref((_props$modelValue$isS2 = (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : _props$modelValue9.isShowOnBulk) !== null && _props$modelValue$isS2 !== void 0 ? _props$modelValue$isS2 : false);
          var isShowInGrid = ref((_props$modelValue$isS3 = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : _props$modelValue10.isShowInGrid) !== null && _props$modelValue$isS3 !== void 0 ? _props$modelValue$isS3 : false);
          var isHistoryEnabled = ref((_props$modelValue$isE = (_props$modelValue11 = props.modelValue) === null || _props$modelValue11 === void 0 ? void 0 : _props$modelValue11.isEnableHistory) !== null && _props$modelValue$isE !== void 0 ? _props$modelValue$isE : false);
          var isAllowSearch = ref((_props$modelValue$isA2 = (_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.isAllowSearch) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
          var isIndexingEnabled = ref((_props$modelValue$isI = (_props$modelValue13 = props.modelValue) === null || _props$modelValue13 === void 0 ? void 0 : _props$modelValue13.isIndexEnabled) !== null && _props$modelValue$isI !== void 0 ? _props$modelValue$isI : false);
          var isAnalyticsEnabled = ref((_props$modelValue$isA3 = (_props$modelValue14 = props.modelValue) === null || _props$modelValue14 === void 0 ? void 0 : _props$modelValue14.isAnalytic) !== null && _props$modelValue$isA3 !== void 0 ? _props$modelValue$isA3 : false);
          var isAnalyticsHistoryEnabled = ref((_props$modelValue$isA4 = (_props$modelValue15 = props.modelValue) === null || _props$modelValue15 === void 0 ? void 0 : _props$modelValue15.isAnalyticHistory) !== null && _props$modelValue$isA4 !== void 0 ? _props$modelValue$isA4 : false);
          var preHtml = ref((_props$modelValue$pre = (_props$modelValue16 = props.modelValue) === null || _props$modelValue16 === void 0 ? void 0 : _props$modelValue16.preHtml) !== null && _props$modelValue$pre !== void 0 ? _props$modelValue$pre : "");
          var postHtml = ref((_props$modelValue$pos = (_props$modelValue17 = props.modelValue) === null || _props$modelValue17 === void 0 ? void 0 : _props$modelValue17.postHtml) !== null && _props$modelValue$pos !== void 0 ? _props$modelValue$pos : "");
          var categories = ref([...((_props$modelValue$cat = (_props$modelValue18 = props.modelValue) === null || _props$modelValue18 === void 0 ? void 0 : _props$modelValue18.categories) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : [])]);
          var fieldTypeValue = ref({
            fieldTypeGuid: ((_props$modelValue19 = props.modelValue) === null || _props$modelValue19 === void 0 ? void 0 : _props$modelValue19.realFieldTypeGuid) || ((_props$modelValue20 = props.modelValue) === null || _props$modelValue20 === void 0 ? void 0 : _props$modelValue20.fieldTypeGuid) || emptyGuid,
            configurationValues: _objectSpread2({}, (_props$modelValue$con = (_props$modelValue21 = props.modelValue) === null || _props$modelValue21 === void 0 ? void 0 : _props$modelValue21.configurationValues) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {}),
            defaultValue: (_props$modelValue$def = (_props$modelValue22 = props.modelValue) === null || _props$modelValue22 === void 0 ? void 0 : _props$modelValue22.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : ""
          });
          var categoryQualifierValue = computed(() => {
            if (props.attributeEntityTypeGuid) {
              return "{EL:".concat(EntityType.EntityType, ":").concat(props.attributeEntityTypeGuid, "}");
            } else {
              return "";
            }
          });
          var isFieldTypeReadOnly = computed(() => {
            var _props$modelValue23;
            return !!((_props$modelValue23 = props.modelValue) !== null && _props$modelValue23 !== void 0 && _props$modelValue23.guid);
          });
          function populateAttributeKey() {
            if (attributeKey.value.trim() == "" && attributeName.value.trim() != "") {
              var keyValue = attributeName.value.trim().replace(/[^a-zA-Z0-9_.-]/g, "");
              var newKeyValue = keyValue;
              var i = 1;
              while (props.reservedKeyNames.includes(newKeyValue)) {
                newKeyValue = keyValue + i++;
              }
              attributeKey.value = newKeyValue;
            }
          }
          watch([attributeName, abbreviatedName, attributeKey, description, isActive, isPublic, isRequired, isShowOnBulk, isShowInGrid, isAllowSearch, isAnalyticsHistoryEnabled, isAnalyticsHistoryEnabled, isHistoryEnabled, isIndexingEnabled, preHtml, postHtml, categories, fieldTypeValue], () => {
            var _props$modelValue24;
            var newModelValue = _objectSpread2(_objectSpread2({}, (_props$modelValue24 = props.modelValue) !== null && _props$modelValue24 !== void 0 ? _props$modelValue24 : {
              isSystem: false
            }), {}, {
              name: attributeName.value,
              abbreviatedName: abbreviatedName.value,
              key: attributeKey.value,
              description: description.value,
              isActive: isActive.value,
              isPublic: isPublic.value,
              isRequired: isRequired.value,
              isShowOnBulk: isShowOnBulk.value,
              isShowInGrid: isShowInGrid.value,
              isAllowSearch: isAllowSearch.value,
              isAnalytic: isAnalyticsEnabled.value,
              isAnalyticHistory: isAnalyticsHistoryEnabled.value,
              isEnableHistory: isHistoryEnabled.value,
              isIndexEnabled: isIndexingEnabled.value,
              preHtml: preHtml.value,
              postHtml: postHtml.value,
              categories: [...categories.value],
              fieldTypeGuid: fieldTypeValue.value.fieldTypeGuid,
              configurationValues: _objectSpread2({}, fieldTypeValue.value.configurationValues),
              defaultValue: fieldTypeValue.value.defaultValue
            });
            emit("update:modelValue", newModelValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(TextBox), {
              modelValue: attributeName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => attributeName.value = $event),
              label: "Name",
              rules: "required",
              onBlur: populateAttributeKey
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(CheckBox), {
              modelValue: isActive.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isActive.value = $event),
              label: "Active",
              help: "Set to Inactive to exclude this attribute from Edit and Display UIs.",
              text: "Yes"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: abbreviatedName.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => abbreviatedName.value = $event),
              label: "Abbreviated Name"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(CheckBox), {
              modelValue: isPublic.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isPublic.value = $event),
              label: "Public",
              help: "Set to public if you want this attribute to be displayed in public contexts.",
              text: "Yes"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: description.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => description.value = $event),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(CategoryPicker), {
              modelValue: categories.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => categories.value = $event),
              label: "Categories",
              entityTypeGuid: unref(EntityType).Attribute,
              entityTypeQualifierColumn: "EntityTypeId",
              entityTypeQualifierValue: unref(categoryQualifierValue),
              multiple: ""
            }, null, 8, ["modelValue", "entityTypeGuid", "entityTypeQualifierValue"]), isSystem.value ? (openBlock(), createBlock(unref(StaticFormControl), {
              key: 0,
              modelValue: attributeKey.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeKey.value = $event),
              label: "Key"
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
              key: 1,
              modelValue: attributeKey.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => attributeKey.value = $event),
              label: "Key",
              rules: "required"
            }, null, 8, ["modelValue"])), createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(CheckBox), {
              modelValue: isRequired.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRequired.value = $event),
              label: "Required",
              text: "Yes"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11, [__props.isShowOnBulkVisible ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              modelValue: isShowOnBulk.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isShowOnBulk.value = $event),
              label: "Show on Bulk",
              help: "If selected, this attribute will be shown with bulk update attributes.",
              text: "Yes"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_12, [__props.isShowInGridVisible ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              modelValue: isShowInGrid.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isShowInGrid.value = $event),
              label: "Show in Grid",
              help: "If selected, this attribute will be included in a grid.",
              text: "Yes"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])])]), createElementVNode("div", _hoisted_13, [createVNode(unref(FieldTypeEditor), {
              modelValue: fieldTypeValue.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => fieldTypeValue.value = $event),
              isFieldTypeReadOnly: unref(isFieldTypeReadOnly)
            }, null, 8, ["modelValue", "isFieldTypeReadOnly"])])]), createVNode(unref(Panel), {
              title: "Advanced Settings",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_14, [createElementVNode("div", _hoisted_15, [createVNode(unref(CheckBox), {
                label: "Enable History",
                modelValue: isHistoryEnabled.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isHistoryEnabled.value = $event),
                help: "If selected, changes to the value of this attribute will be stored in attribute value history.",
                text: "Yes"
              }, null, 8, ["modelValue"]), __props.isAllowSearchVisible ? (openBlock(), createBlock(unref(CheckBox), {
                key: 0,
                label: "Allow Search",
                modelValue: isAllowSearch.value,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isAllowSearch.value = $event),
                help: "If selected, this attribute can be searched on.",
                text: "Yes"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.isIndexingEnabledVisible ? (openBlock(), createBlock(unref(CheckBox), {
                key: 1,
                label: "Indexing Enabled",
                modelValue: isIndexingEnabled.value,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isIndexingEnabled.value = $event),
                help: "If selected, this attribute can be used when indexing for universal search.",
                text: "Yes"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_16, [__props.isAnalyticsVisible ? (openBlock(), createBlock(unref(CheckBox), {
                key: 0,
                label: "Analytics Enabled",
                modelValue: isAnalyticsEnabled.value,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isAnalyticsEnabled.value = $event),
                help: "If selected, this attribute will be made available as an Analytic.",
                text: "Yes"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.isAnalyticsVisible ? (openBlock(), createBlock(unref(CheckBox), {
                key: 1,
                label: "Analytics History Enabled",
                modelValue: isAnalyticsHistoryEnabled.value,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => isAnalyticsHistoryEnabled.value = $event),
                help: "If selected, changes to the value of this attribute will cause Analytics to create a history record. Note that this requires that 'Analytics Enabled' is also enabled.",
                text: "Yes"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), createVNode(unref(TextBox), {
                modelValue: preHtml.value,
                "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => preHtml.value = $event),
                label: "Pre-HTML",
                help: "HTML that should be rendered before the attribute's edit control.",
                textMode: "multiline"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: postHtml.value,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => postHtml.value = $event),
                label: "Post-HTML",
                help: "HTML that should be rendered before the attribute's edit control.",
                textMode: "multiline"
              }, null, 8, ["modelValue"])]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "Framework/Controls/attributeEditor.obs";

    })
  };
}));
//# sourceMappingURL=attributeEditor.obs.js.map
