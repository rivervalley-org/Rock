System.register(['vue', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/numberUtils', './segmentedPicker'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, DropDownList, InlineCheckbox, TextBox, toNumberOrNull, SegmentedPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      InlineCheckbox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      SegmentedPicker = module["default"];
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
      var FormEmailSourceType = function (FormEmailSourceType) {
        FormEmailSourceType[FormEmailSourceType["UseTemplate"] = 0] = "UseTemplate";
        FormEmailSourceType[FormEmailSourceType["Custom"] = 1] = "Custom";
        return FormEmailSourceType;
      }({});
      (function (FormNotificationEmailDestination) {
        FormNotificationEmailDestination[FormNotificationEmailDestination["SpecificIndividual"] = 0] = "SpecificIndividual";
        FormNotificationEmailDestination[FormNotificationEmailDestination["EmailAddress"] = 1] = "EmailAddress";
        FormNotificationEmailDestination[FormNotificationEmailDestination["CampusTopic"] = 2] = "CampusTopic";
        return FormNotificationEmailDestination;
      })({});
      (function (FormCompletionActionType) {
        FormCompletionActionType[FormCompletionActionType["DisplayMessage"] = 0] = "DisplayMessage";
        FormCompletionActionType[FormCompletionActionType["Redirect"] = 1] = "Redirect";
        return FormCompletionActionType;
      })({});
      (function (CampusSetFrom) {
        CampusSetFrom[CampusSetFrom["CurrentPerson"] = 0] = "CurrentPerson";
        CampusSetFrom[CampusSetFrom["WorkflowPerson"] = 1] = "WorkflowPerson";
        CampusSetFrom[CampusSetFrom["QueryString"] = 2] = "QueryString";
        return CampusSetFrom;
      })({});

      var emailSourceOptions = [{
        value: FormEmailSourceType.UseTemplate.toString(),
        text: "Use Email Template"
      }, {
        value: FormEmailSourceType.Custom.toString(),
        text: "Provide Custom Email"
      }];
      var emailSource = exports('default', defineComponent({
        name: "Workflow.FormBuilderDetail.EmailSource",
        components: {
          DropDownList,
          InlineCheckbox,
          SegmentedPicker,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            default: {}
          },
          templateOptions: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$typ, _props$modelValue$typ2, _props$modelValue$tem, _props$modelValue$sub, _props$modelValue$rep, _props$modelValue$bod, _props$modelValue$app;
          var emit = _ref.emit;
          var type = ref((_props$modelValue$typ = (_props$modelValue$typ2 = props.modelValue.type) === null || _props$modelValue$typ2 === void 0 ? void 0 : _props$modelValue$typ2.toString()) !== null && _props$modelValue$typ !== void 0 ? _props$modelValue$typ : FormEmailSourceType.UseTemplate.toString());
          var template = ref((_props$modelValue$tem = props.modelValue.template) !== null && _props$modelValue$tem !== void 0 ? _props$modelValue$tem : "");
          var subject = ref((_props$modelValue$sub = props.modelValue.subject) !== null && _props$modelValue$sub !== void 0 ? _props$modelValue$sub : "");
          var replyTo = ref((_props$modelValue$rep = props.modelValue.replyTo) !== null && _props$modelValue$rep !== void 0 ? _props$modelValue$rep : "");
          var body = ref((_props$modelValue$bod = props.modelValue.body) !== null && _props$modelValue$bod !== void 0 ? _props$modelValue$bod : "");
          var appendOrgHeaderAndFooter = ref((_props$modelValue$app = props.modelValue.appendOrgHeaderAndFooter) !== null && _props$modelValue$app !== void 0 ? _props$modelValue$app : false);
          var isTemplateType = computed(() => type.value === FormEmailSourceType.UseTemplate.toString());
          var isCustomType = computed(() => type.value === FormEmailSourceType.Custom.toString());
          watch(() => props.modelValue, () => {
            var _props$modelValue$typ3, _props$modelValue$typ4, _props$modelValue$tem2, _props$modelValue$sub2, _props$modelValue$rep2, _props$modelValue$bod2, _props$modelValue$app2;
            type.value = (_props$modelValue$typ3 = (_props$modelValue$typ4 = props.modelValue.type) === null || _props$modelValue$typ4 === void 0 ? void 0 : _props$modelValue$typ4.toString()) !== null && _props$modelValue$typ3 !== void 0 ? _props$modelValue$typ3 : FormEmailSourceType.UseTemplate.toString();
            template.value = (_props$modelValue$tem2 = props.modelValue.template) !== null && _props$modelValue$tem2 !== void 0 ? _props$modelValue$tem2 : "";
            subject.value = (_props$modelValue$sub2 = props.modelValue.subject) !== null && _props$modelValue$sub2 !== void 0 ? _props$modelValue$sub2 : "";
            replyTo.value = (_props$modelValue$rep2 = props.modelValue.replyTo) !== null && _props$modelValue$rep2 !== void 0 ? _props$modelValue$rep2 : "";
            body.value = (_props$modelValue$bod2 = props.modelValue.body) !== null && _props$modelValue$bod2 !== void 0 ? _props$modelValue$bod2 : "";
            appendOrgHeaderAndFooter.value = (_props$modelValue$app2 = props.modelValue.appendOrgHeaderAndFooter) !== null && _props$modelValue$app2 !== void 0 ? _props$modelValue$app2 : false;
          });
          watch([type, template, subject, replyTo, body, appendOrgHeaderAndFooter], () => {
            var _toNumberOrNull;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              type: (_toNumberOrNull = toNumberOrNull(type.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : FormEmailSourceType.UseTemplate,
              template: template.value,
              subject: subject.value,
              replyTo: replyTo.value,
              body: body.value,
              appendOrgHeaderAndFooter: appendOrgHeaderAndFooter.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            appendOrgHeaderAndFooter,
            type,
            template,
            subject,
            replyTo,
            body,
            emailSourceOptions,
            isCustomType,
            isTemplateType
          };
        },
        template: "\n<div>\n    <SegmentedPicker v-model=\"type\"\n        :items=\"emailSourceOptions\" />\n\n    <div v-if=\"isTemplateType\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"template\"\n                    label=\"Email Template\"\n                    rules=\"required\"\n                    :items=\"templateOptions\" />\n            </div>\n        </div>\n    </div>\n\n    <div v-else-if=\"isCustomType\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"subject\"\n                    label=\"Subject\"\n                    rules=\"required\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"replyTo\"\n                    label=\"Reply To\"\n                    rules=\"email\" />\n            </div>\n        </div>\n\n        <TextBox v-model=\"body\"\n            label=\"Email Body\"\n            textMode=\"multiline\"\n            rules=\"required\" />\n\n        <InlineCheckbox v-model=\"appendOrgHeaderAndFooter\"\n            label=\"Append Organization Header and Footer\" />\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=emailSource.js.map
