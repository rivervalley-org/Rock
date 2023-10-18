System.register(['vue', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', './segmentedPicker', '@Obsidian/Controls/sectionContainer'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, DropDownList, TextBox, toNumberOrNull, useVModelPassthrough, SegmentedPicker, SectionContainer;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      SegmentedPicker = module["default"];
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

      (function (FormFieldVisibility) {
        FormFieldVisibility[FormFieldVisibility["Hidden"] = 0] = "Hidden";
        FormFieldVisibility[FormFieldVisibility["Optional"] = 1] = "Optional";
        FormFieldVisibility[FormFieldVisibility["Required"] = 2] = "Required";
        return FormFieldVisibility;
      })({});
      (function (FormEmailSourceType) {
        FormEmailSourceType[FormEmailSourceType["UseTemplate"] = 0] = "UseTemplate";
        FormEmailSourceType[FormEmailSourceType["Custom"] = 1] = "Custom";
        return FormEmailSourceType;
      })({});
      (function (FormNotificationEmailDestination) {
        FormNotificationEmailDestination[FormNotificationEmailDestination["SpecificIndividual"] = 0] = "SpecificIndividual";
        FormNotificationEmailDestination[FormNotificationEmailDestination["EmailAddress"] = 1] = "EmailAddress";
        FormNotificationEmailDestination[FormNotificationEmailDestination["CampusTopic"] = 2] = "CampusTopic";
        return FormNotificationEmailDestination;
      })({});
      var FormCompletionActionType = function (FormCompletionActionType) {
        FormCompletionActionType[FormCompletionActionType["DisplayMessage"] = 0] = "DisplayMessage";
        FormCompletionActionType[FormCompletionActionType["Redirect"] = 1] = "Redirect";
        return FormCompletionActionType;
      }({});
      (function (CampusSetFrom) {
        CampusSetFrom[CampusSetFrom["CurrentPerson"] = 0] = "CurrentPerson";
        CampusSetFrom[CampusSetFrom["WorkflowPerson"] = 1] = "WorkflowPerson";
        CampusSetFrom[CampusSetFrom["QueryString"] = 2] = "QueryString";
        return CampusSetFrom;
      })({});

      var typeOptions = [{
        value: FormCompletionActionType.DisplayMessage.toString(),
        text: "Display Message"
      }, {
        value: FormCompletionActionType.Redirect.toString(),
        text: "Redirect to New Page"
      }];
      var completionSettings = exports('default', defineComponent({
        name: "Workflow.FormBuilderDetail.CompletionSettings",
        components: {
          DropDownList,
          SegmentedPicker,
          SectionContainer,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          enabled: {
            type: Boolean,
            default: true
          },
          hasEnable: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "update:enabled"],
        setup(props, _ref) {
          var _props$modelValue$typ, _props$modelValue$typ2, _props$modelValue$mes, _props$modelValue$red;
          var emit = _ref.emit;
          var enabled = useVModelPassthrough(props, "enabled", emit);
          var type = ref((_props$modelValue$typ = (_props$modelValue$typ2 = props.modelValue.type) === null || _props$modelValue$typ2 === void 0 ? void 0 : _props$modelValue$typ2.toString()) !== null && _props$modelValue$typ !== void 0 ? _props$modelValue$typ : FormCompletionActionType.DisplayMessage.toString());
          var message = ref((_props$modelValue$mes = props.modelValue.message) !== null && _props$modelValue$mes !== void 0 ? _props$modelValue$mes : "");
          var redirectUrl = ref((_props$modelValue$red = props.modelValue.redirectUrl) !== null && _props$modelValue$red !== void 0 ? _props$modelValue$red : "");
          var isTypeDisplayMessage = computed(() => type.value === FormCompletionActionType.DisplayMessage.toString());
          var isTypeRedirect = computed(() => type.value === FormCompletionActionType.Redirect.toString());
          var sectionToggleText = computed(() => props.hasEnable ? "Enable" : "");
          watch(() => props.modelValue, () => {
            var _props$modelValue$typ3, _props$modelValue$typ4, _props$modelValue$mes2, _props$modelValue$red2;
            type.value = (_props$modelValue$typ3 = (_props$modelValue$typ4 = props.modelValue.type) === null || _props$modelValue$typ4 === void 0 ? void 0 : _props$modelValue$typ4.toString()) !== null && _props$modelValue$typ3 !== void 0 ? _props$modelValue$typ3 : FormCompletionActionType.DisplayMessage.toString();
            message.value = (_props$modelValue$mes2 = props.modelValue.message) !== null && _props$modelValue$mes2 !== void 0 ? _props$modelValue$mes2 : "";
            redirectUrl.value = (_props$modelValue$red2 = props.modelValue.redirectUrl) !== null && _props$modelValue$red2 !== void 0 ? _props$modelValue$red2 : "";
          });
          watch([type, message, redirectUrl], () => {
            var _toNumberOrNull;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              type: (_toNumberOrNull = toNumberOrNull(type.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : FormCompletionActionType.DisplayMessage,
              message: message.value,
              redirectUrl: redirectUrl.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            enabled,
            isTypeDisplayMessage,
            isTypeRedirect,
            message,
            redirectUrl,
            sectionToggleText,
            type,
            typeOptions
          };
        },
        template: "\n<SectionContainer v-model=\"enabled\"\n    title=\"Completion Settings\"\n    description=\"The settings below determine the actions to take after an individual completes the form.\"\n    :toggleText=\"sectionToggleText\">\n    <SegmentedPicker v-model=\"type\"\n        :items=\"typeOptions\" />\n\n    <div v-if=\"isTypeDisplayMessage\">\n        <TextBox v-model=\"message\"\n            label=\"Completion Message\"\n            textMode=\"multiline\"\n            rules=\"required\" />\n    </div>\n\n    <div v-else-if=\"isTypeRedirect\">\n        <TextBox v-model=\"redirectUrl\"\n            label=\"Redirect URL\"\n            rules=\"required\" />\n    </div>\n</SectionContainer>\n"
      }));

    })
  };
}));
//# sourceMappingURL=completionSettings.js.map
