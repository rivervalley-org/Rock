System.register(['vue', './checkBox', './textBox', './categoryPicker', './fieldTypeEditor', './staticFormControl', './panelWidget', '@Obsidian/SystemGuids/entityType'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, CheckBox, TextBox, CategoryPicker, FieldTypeEditor, StaticFormControl, PanelWidget, EntityType;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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
      PanelWidget = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
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

      var attributeEditor = exports('default', defineComponent({
        name: "AttributeEditor",
        components: {
          CategoryPicker,
          CheckBox,
          FieldTypeEditor,
          PanelWidget,
          StaticFormControl,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            default: null
          },
          attributeEntityTypeGuid: {
            type: String,
            default: ""
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
        setup(props, _ref) {
          var _props$modelValue$nam, _props$modelValue, _props$modelValue$abb, _props$modelValue2, _props$modelValue$key, _props$modelValue3, _props$modelValue$des, _props$modelValue4, _props$modelValue$isS, _props$modelValue5, _props$modelValue$isA, _props$modelValue6, _props$modelValue$isP, _props$modelValue7, _props$modelValue$isR, _props$modelValue8, _props$modelValue$isS2, _props$modelValue9, _props$modelValue$isS3, _props$modelValue10, _props$modelValue$isE, _props$modelValue11, _props$modelValue$isA2, _props$modelValue12, _props$modelValue$isI, _props$modelValue13, _props$modelValue$isA3, _props$modelValue14, _props$modelValue$isA4, _props$modelValue15, _props$modelValue$pre, _props$modelValue16, _props$modelValue$pos, _props$modelValue17, _props$modelValue$cat, _props$modelValue18, _props$modelValue$fie, _props$modelValue19, _props$modelValue$con, _props$modelValue20, _props$modelValue$def, _props$modelValue21;
          var emit = _ref.emit;
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
            fieldTypeGuid: (_props$modelValue$fie = (_props$modelValue19 = props.modelValue) === null || _props$modelValue19 === void 0 ? void 0 : _props$modelValue19.fieldTypeGuid) !== null && _props$modelValue$fie !== void 0 ? _props$modelValue$fie : "",
            configurationValues: _objectSpread2({}, (_props$modelValue$con = (_props$modelValue20 = props.modelValue) === null || _props$modelValue20 === void 0 ? void 0 : _props$modelValue20.configurationValues) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {}),
            defaultValue: (_props$modelValue$def = (_props$modelValue21 = props.modelValue) === null || _props$modelValue21 === void 0 ? void 0 : _props$modelValue21.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : ""
          });
          var categoryQualifierValue = computed(() => {
            if (props.attributeEntityTypeGuid) {
              return "{EL:".concat(EntityType.EntityType, ":").concat(props.attributeEntityTypeGuid, "}");
            } else {
              return "";
            }
          });
          var isFieldTypeReadOnly = computed(() => {
            var _props$modelValue22;
            return !!((_props$modelValue22 = props.modelValue) !== null && _props$modelValue22 !== void 0 && _props$modelValue22.guid);
          });
          watch([attributeName, abbreviatedName, attributeKey, description, isActive, isPublic, isRequired, isShowOnBulk, isShowInGrid, isAllowSearch, isAnalyticsHistoryEnabled, isAnalyticsHistoryEnabled, isHistoryEnabled, isIndexingEnabled, preHtml, postHtml, categories, fieldTypeValue], () => {
            var _props$modelValue23;
            var newModelValue = _objectSpread2(_objectSpread2({}, (_props$modelValue23 = props.modelValue) !== null && _props$modelValue23 !== void 0 ? _props$modelValue23 : {
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
          return {
            abbreviatedName,
            attributeEntityTypeGuid: EntityType.Attribute,
            attributeName,
            attributeKey,
            categoryQualifierValue,
            description,
            categories,
            fieldTypeValue,
            isActive,
            isAllowSearch,
            isAnalyticsEnabled,
            isAnalyticsHistoryEnabled,
            isFieldTypeReadOnly,
            isHistoryEnabled,
            isIndexingEnabled,
            isPublic,
            isRequired,
            isShowInGrid,
            isShowOnBulk,
            isSystem,
            preHtml,
            postHtml
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"attributeName\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\"\n                label=\"Active\"\n                help=\"Set to Inactive to exclude this attribute from Edit and Display UIs.\"\n                text=\"Yes\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"abbreviatedName\"\n                label=\"Abbreviated Name\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isPublic\"\n                label=\"Public\"\n                help=\"Set to public if you want this attribute to be displayed in public contexts.\"\n                text=\"Yes\" />\n        </div>\n    </div>\n\n    <TextBox v-model=\"description\"\n        label=\"Description\"\n        textMode=\"multiline\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <CategoryPicker v-model=\"categories\"\n                label=\"Categories\"\n                :entityTypeGuid=\"attributeEntityTypeGuid\"\n                entityTypeQualifierColumn=\"EntityTypeId\"\n                :entityTypeQualifierValue=\"categoryQualifierValue\"\n                multiple />\n\n            <StaticFormControl v-if=\"isSystem\" v-model=\"attributeKey\" label=\"Key\" />\n            <TextBox v-else v-model=\"attributeKey\" label=\"Key\" rules=\"required\" :disabled=\"keyDisabledAttr\" />\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <CheckBox v-model=\"isRequired\"\n                        label=\"Required\"\n                        text=\"Yes\" />\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <CheckBox v-if=\"isShowOnBulkVisible\"\n                        v-model=\"isShowOnBulk\"\n                        label=\"Show on Bulk\"\n                        help=\"If selected, this attribute will be shown with bulk update attributes.\"\n                        text=\"Yes\" />\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <CheckBox v-if=\"isShowInGridVisible\"\n                        v-model=\"isShowInGrid\"\n                        label=\"Show in Grid\"\n                        help=\"If selected, this attribute will be included in a grid.\"\n                        text=\"Yes\" />\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <FieldTypeEditor v-model=\"fieldTypeValue\" :isFieldTypeReadOnly=\"isFieldTypeReadOnly\" />\n        </div>\n    </div>\n\n    <PanelWidget>\n        <template #header>Advanced Settings</template>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <CheckBox label=\"Enable History\"\n                    v-model=\"isHistoryEnabled\"\n                    help=\"If selected, changes to the value of this attribute will be stored in attribute value history.\"\n                    text=\"Yes\" />\n\n                <CheckBox v-if=\"isAllowSearchVisible\"\n                    label=\"Allow Search\"\n                    v-model=\"isAllowSearch\"\n                    help=\"If selected, this attribute can be searched on.\"\n                    text=\"Yes\" />\n\n                <CheckBox v-if=\"isIndexingEnabledVisible\"\n                    label=\"Indexing Enabled\"\n                    v-model=\"isIndexingEnabled\"\n                    help=\"If selected, this attribute can be used when indexing for universal search.\"\n                    text=\"Yes\" />\n            </div>\n\n            <div class=\"col-md-6\">\n                <CheckBox v-if=\"isAnalyticsVisible\"\n                    label=\"Analytics Enabled\"\n                    v-model=\"isAnalyticHistory\"\n                    help=\"If selected, this attribute will be made available as an Analytic.\"\n                    text=\"Yes\" />\n\n                <CheckBox v-if=\"isAnalyticsVisible\"\n                    label=\"Analytics History Enabled\"\n                    v-model=\"isAnalyticsHistoryEnabled\"\n                    help=\"If selected, changes to the value of this attribute will cause Analytics to create a history record. Note that this requires that 'Analytics Enabled' is also enabled.\"\n                    text=\"Yes\" />\n            </div>\n        </div>\n\n        <TextBox v-model=\"preHtml\"\n            label=\"Pre-HTML\"\n            help=\"HTML that should be rendered before the attribute's edit control.\"\n            textMode=\"multiline\" />\n\n        <TextBox v-model=\"postHtml\"\n            label=\"Post-HTML\"\n            help=\"HTML that should be rendered before the attribute's edit control.\"\n            textMode=\"multiline\" />\n    </PanelWidget>\n</fieldset>\n"
      }));

    })
  };
}));
//# sourceMappingURL=attributeEditor.js.map
