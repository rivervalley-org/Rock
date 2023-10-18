System.register(['vue', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/inlineSwitch', '@Obsidian/Controls/transitionVerticalCollapse', './emailSource', '@Obsidian/Controls/sectionContainer'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, DropDownList, InlineSwitch, TransitionVerticalCollapse, EmailSource, SectionContainer;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      EmailSource = module["default"];
    }, function (module) {
      SectionContainer = module["default"];
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

      var confirmationEmail = exports('default', defineComponent({
        name: "Workflow.FormBuilderDetail.ConfirmationEmail",
        components: {
          DropDownList,
          EmailSource,
          InlineSwitch,
          SectionContainer,
          TransitionVerticalCollapse
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          recipientOptions: {
            type: Array,
            default: []
          },
          sourceTemplateOptions: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$ena, _props$modelValue$rec, _props$modelValue$sou;
          var emit = _ref.emit;
          var enabled = ref((_props$modelValue$ena = props.modelValue.enabled) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : false);
          var recipientAttributeGuid = ref((_props$modelValue$rec = props.modelValue.recipientAttributeGuid) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : null);
          var source = ref((_props$modelValue$sou = props.modelValue.source) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : {});
          watch(() => props.modelValue, () => {
            var _props$modelValue$ena2, _props$modelValue$rec2, _props$modelValue$sou2;
            enabled.value = (_props$modelValue$ena2 = props.modelValue.enabled) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : false;
            recipientAttributeGuid.value = (_props$modelValue$rec2 = props.modelValue.recipientAttributeGuid) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : null;
            source.value = (_props$modelValue$sou2 = props.modelValue.source) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : {};
          });
          watch([enabled, recipientAttributeGuid, source], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              enabled: enabled.value,
              recipientAttributeGuid: recipientAttributeGuid.value,
              source: source.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            enabled,
            recipientAttributeGuid,
            source
          };
        },
        template: "\n<SectionContainer v-model=\"enabled\"\n    toggleText=\"Enable\"\n    title=\"Confirmation Email\"\n    description=\"The following settings will be used to send an email to the individual who submitted the form.\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <DropDownList v-model=\"recipientAttributeGuid\"\n                label=\"Recipient\"\n                rules=\"required\"\n                :items=\"recipientOptions\" />\n        </div>\n    </div>\n\n    <div class=\"mt-3\">\n        <EmailSource v-model=\"source\" :templateOptions=\"sourceTemplateOptions\" />\n    </div>\n</SectionContainer>\n"
      }));

    })
  };
}));
//# sourceMappingURL=confirmationEmail.js.map
