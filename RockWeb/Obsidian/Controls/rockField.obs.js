System.register(['vue', '@Obsidian/Utility/fieldTypes', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, computed, provide, unref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, createBlock, resolveDynamicComponent, createCommentVNode, isRef, getFieldType, FieldType, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      provide = module.provide;
      unref = module.unref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createBlock = module.createBlock;
      resolveDynamicComponent = module.resolveDynamicComponent;
      createCommentVNode = module.createCommentVNode;
      isRef = module.isRef;
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }],
    execute: (function () {

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = {
        key: 0,
        class: "form-group static-control"
      };
      var _hoisted_3 = {
        class: "control-label"
      };
      var _hoisted_4 = {
        class: "control-wrapper"
      };
      var _hoisted_5 = {
        class: "form-control-static"
      };
      var _hoisted_6 = {
        key: 1
      };
      var script = exports('default', defineComponent({
        name: 'rockField',
        props: {
          modelValue: {
            type: String,
            required: false
          },
          attribute: {
            type: Object,
            required: true
          },
          showEmptyValue: {
            type: Boolean,
            default: false
          },
          isEditMode: {
            type: Boolean,
            default: false
          },
          showLabel: {
            type: Boolean,
            default: true
          },
          isCondensed: {
            type: Boolean,
            default: false
          },
          dataEntryMode: {
            type: String,
            default: undefined
          },
          isEscaped: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var textField = getFieldType(FieldType.Text);
          var field = computed(() => {
            var _toGuidOrNull;
            var fieldType = getFieldType((_toGuidOrNull = toGuidOrNull(props.attribute.fieldTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid);
            return fieldType !== null && fieldType !== void 0 ? fieldType : textField;
          });
          var showValue = computed(() => {
            var _field$value, _props$modelValue, _props$attribute$conf;
            return props.showEmptyValue || ((_field$value = field.value) === null || _field$value === void 0 ? void 0 : _field$value.getTextValue((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "", (_props$attribute$conf = props.attribute.configurationValues) !== null && _props$attribute$conf !== void 0 ? _props$attribute$conf : {})) !== "";
          });
          var isRequired = computed(() => props.attribute.isRequired);
          var rules = computed(() => isRequired.value ? "required" : "");
          var isEditMode = computed(() => props.isEditMode);
          var label = computed(() => props.attribute.name);
          var helpText = computed(() => props.attribute.description);
          var valueComponent = computed(() => {
            var _field$value2, _field$value3;
            return props.isCondensed ? (_field$value2 = field.value) === null || _field$value2 === void 0 ? void 0 : _field$value2.getCondensedFormattedComponent(configurationValues.value) : (_field$value3 = field.value) === null || _field$value3 === void 0 ? void 0 : _field$value3.getFormattedComponent(configurationValues.value);
          });
          var editComponent = computed(() => {
            var _field$value4;
            return (_field$value4 = field.value) === null || _field$value4 === void 0 ? void 0 : _field$value4.getEditComponent(configurationValues.value);
          });
          var value = computed({
            get: () => props.modelValue || "",
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          var configurationValues = computed(() => {
            var _props$attribute$conf2;
            return (_props$attribute$conf2 = props.attribute.configurationValues) !== null && _props$attribute$conf2 !== void 0 ? _props$attribute$conf2 : {};
          });
          provide("isRequired", isRequired);
          return (_ctx, _cache) => {
            return !unref(isEditMode) ? (openBlock(), createElementBlock("div", _hoisted_1, [__props.showLabel ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [unref(showValue) ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("label", _hoisted_3, toDisplayString(unref(label)), 1), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [(openBlock(), createBlock(resolveDynamicComponent(unref(valueComponent)), {
              modelValue: unref(value),
              configurationValues: unref(configurationValues),
              isEscaped: __props.isEscaped
            }, null, 8, ["modelValue", "configurationValues", "isEscaped"]))])])])) : createCommentVNode("v-if", true)], 64)) : (openBlock(), createBlock(resolveDynamicComponent(unref(valueComponent)), {
              key: 1,
              modelValue: unref(value),
              configurationValues: unref(configurationValues),
              isEscaped: __props.isEscaped
            }, null, 8, ["modelValue", "configurationValues", "isEscaped"]))])) : (openBlock(), createElementBlock("div", _hoisted_6, [(openBlock(), createBlock(resolveDynamicComponent(unref(editComponent)), {
              modelValue: unref(value),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(value) ? value.value = $event : null),
              label: unref(label),
              help: unref(helpText),
              configurationValues: unref(configurationValues),
              rules: unref(rules),
              dataEntryMode: __props.dataEntryMode
            }, null, 8, ["modelValue", "label", "help", "configurationValues", "rules", "dataEntryMode"]))]));
          };
        }
      }));

      script.__file = "Framework/Controls/rockField.obs";

    })
  };
}));
//# sourceMappingURL=rockField.obs.js.map
