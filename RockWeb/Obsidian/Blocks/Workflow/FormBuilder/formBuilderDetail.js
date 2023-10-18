System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/panel', '@Obsidian/Controls/rockButton', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/rockForm', './Shared/confirmationEmail', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/numberUtils', './Shared/emailSource', './Shared/segmentedPicker', '@Obsidian/Controls/sectionContainer', '@Obsidian/Utility/fieldTypes', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Controls/modal', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/switch', '@Obsidian/Controls/fieldFilterEditor', '@Obsidian/Controls/fieldTypeEditor', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Utility/linq', '@Obsidian/Utility/component', '@Obsidian/Controls/rockField', '@Obsidian/Directives/dragDrop', '@Obsidian/Controls/transitionVerticalCollapse', './Shared/personEntrySettings', '@Obsidian/Utility/dialogs', './Shared/completionSettings', '@Obsidian/Controls/categoryPicker', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dateTimePicker', '@Obsidian/Controls/inlineSwitch', '@Obsidian/SystemGuids/entityType'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, inject, provide, nextTick, reactive, shallowRef, NotificationBox, Panel, RockButton, FieldType, useInvokeBlockAction, useConfigurationValues, areEqual, newGuid, RockForm, ConfirmationEmail, PersonPicker, DropDownList, EmailBox, TextBox, toNumberOrNull, EmailSource, SegmentedPicker, SectionContainer, getFieldType, FilterExpressionType, Modal, RockLabel, Switch, FieldFilterEditor, FieldTypeEditor, LoadingIndicator, NumberBox, RangeSlider, List, useVModelPassthrough, updateRefValue, RockField, DragSource, DragTarget, TransitionVerticalCollapse, PersonEntrySettings, confirmDelete, CompletionSettings, CategoryPicker, CheckBox, DateTimePicker, InlineSwitch, EntityType;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      inject = module.inject;
      provide = module.provide;
      nextTick = module.nextTick;
      reactive = module.reactive;
      shallowRef = module.shallowRef;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      areEqual = module.areEqual;
      newGuid = module.newGuid;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      ConfirmationEmail = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      EmailSource = module["default"];
    }, function (module) {
      SegmentedPicker = module["default"];
    }, function (module) {
      SectionContainer = module["default"];
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      FilterExpressionType = module.FilterExpressionType;
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      Switch = module["default"];
    }, function (module) {
      FieldFilterEditor = module["default"];
    }, function (module) {
      FieldTypeEditor = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      RangeSlider = module["default"];
    }, function (module) {
      List = module.List;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      DragSource = module.DragSource;
      DragTarget = module.DragTarget;
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      PersonEntrySettings = module["default"];
    }, function (module) {
      confirmDelete = module.confirmDelete;
    }, function (module) {
      CompletionSettings = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      InlineSwitch = module["default"];
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
      var FormNotificationEmailDestination = function (FormNotificationEmailDestination) {
        FormNotificationEmailDestination[FormNotificationEmailDestination["SpecificIndividual"] = 0] = "SpecificIndividual";
        FormNotificationEmailDestination[FormNotificationEmailDestination["EmailAddress"] = 1] = "EmailAddress";
        FormNotificationEmailDestination[FormNotificationEmailDestination["CampusTopic"] = 2] = "CampusTopic";
        return FormNotificationEmailDestination;
      }({});
      (function (FormCompletionActionType) {
        FormCompletionActionType[FormCompletionActionType["DisplayMessage"] = 0] = "DisplayMessage";
        FormCompletionActionType[FormCompletionActionType["Redirect"] = 1] = "Redirect";
        return FormCompletionActionType;
      })({});
      var CampusSetFrom = function (CampusSetFrom) {
        CampusSetFrom[CampusSetFrom["CurrentPerson"] = 0] = "CurrentPerson";
        CampusSetFrom[CampusSetFrom["WorkflowPerson"] = 1] = "WorkflowPerson";
        CampusSetFrom[CampusSetFrom["QueryString"] = 2] = "QueryString";
        return CampusSetFrom;
      }({});

      var notificationDestinationOptions = [{
        value: FormNotificationEmailDestination.SpecificIndividual.toString(),
        text: "Specific Individual"
      }, {
        value: FormNotificationEmailDestination.EmailAddress.toString(),
        text: "Email Address"
      }, {
        value: FormNotificationEmailDestination.CampusTopic.toString(),
        text: "Campus Topic Address"
      }];
      var NotificationEmail = defineComponent({
        name: "Workflow.FormBuilderDetail.NotificationEmail",
        components: {
          DropDownList,
          EmailBox,
          EmailSource,
          PersonPicker,
          SegmentedPicker,
          SectionContainer,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          sourceTemplateOptions: {
            type: Array,
            default: []
          },
          campusTopicOptions: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$ena, _props$modelValue$des, _props$modelValue$des2, _props$modelValue$rec, _props$modelValue$ema, _props$modelValue$cam, _props$modelValue$sou;
          var emit = _ref.emit;
          var enabled = ref((_props$modelValue$ena = props.modelValue.enabled) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : false);
          var destination = ref((_props$modelValue$des = (_props$modelValue$des2 = props.modelValue.destination) === null || _props$modelValue$des2 === void 0 ? void 0 : _props$modelValue$des2.toString()) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : FormNotificationEmailDestination.SpecificIndividual.toString());
          var recipient = ref((_props$modelValue$rec = props.modelValue.recipient) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : null);
          var emailAddress = ref((_props$modelValue$ema = props.modelValue.emailAddress) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "");
          var campusTopicGuid = ref((_props$modelValue$cam = props.modelValue.campusTopicGuid) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : "");
          var source = ref((_props$modelValue$sou = props.modelValue.source) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : {});
          var isDestinationSpecificIndividual = computed(() => destination.value === FormNotificationEmailDestination.SpecificIndividual.toString());
          var isDestinationEmailAddress = computed(() => destination.value === FormNotificationEmailDestination.EmailAddress.toString());
          var isDestinationCampusTopic = computed(() => destination.value === FormNotificationEmailDestination.CampusTopic.toString());
          watch(() => props.modelValue, () => {
            var _props$modelValue$ena2, _props$modelValue$des3, _props$modelValue$des4, _props$modelValue$rec2, _props$modelValue$ema2, _props$modelValue$cam2, _props$modelValue$sou2;
            enabled.value = (_props$modelValue$ena2 = props.modelValue.enabled) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : false;
            destination.value = (_props$modelValue$des3 = (_props$modelValue$des4 = props.modelValue.destination) === null || _props$modelValue$des4 === void 0 ? void 0 : _props$modelValue$des4.toString()) !== null && _props$modelValue$des3 !== void 0 ? _props$modelValue$des3 : FormNotificationEmailDestination.SpecificIndividual.toString();
            recipient.value = (_props$modelValue$rec2 = props.modelValue.recipient) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : null;
            emailAddress.value = (_props$modelValue$ema2 = props.modelValue.emailAddress) !== null && _props$modelValue$ema2 !== void 0 ? _props$modelValue$ema2 : "";
            campusTopicGuid.value = (_props$modelValue$cam2 = props.modelValue.campusTopicGuid) !== null && _props$modelValue$cam2 !== void 0 ? _props$modelValue$cam2 : "";
            source.value = (_props$modelValue$sou2 = props.modelValue.source) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : {};
          });
          watch([enabled, destination, recipient, emailAddress, campusTopicGuid, source], () => {
            var _toNumberOrNull;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              enabled: enabled.value,
              destination: (_toNumberOrNull = toNumberOrNull(destination.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : FormNotificationEmailDestination.SpecificIndividual,
              recipient: recipient.value,
              emailAddress: emailAddress.value,
              campusTopicGuid: campusTopicGuid.value,
              source: source.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            campusTopicGuid,
            destination,
            destinationOptions: notificationDestinationOptions,
            emailAddress,
            enabled,
            isDestinationSpecificIndividual,
            isDestinationEmailAddress,
            isDestinationCampusTopic,
            recipient,
            source
          };
        },
        template: "\n<SectionContainer v-model=\"enabled\"\n    toggleText=\"Enable\"\n    title=\"Notification Email\"\n    description=\"Notification emails can be sent to specified individuals when each form is completed.\">\n    <SegmentedPicker v-model=\"destination\" :items=\"destinationOptions\" />\n\n    <div v-if=\"isDestinationSpecificIndividual\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <PersonPicker v-model=\"recipient\"\n                    label=\"Recipient\"\n                    rules=\"required\" />\n            </div>\n        </div>\n    </div>\n\n    <div v-else-if=\"isDestinationEmailAddress\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <EmailBox v-model=\"emailAddress\"\n                    label=\"Recipients\"\n                    rules=\"required\"\n                    allowMultiple />\n            </div>\n        </div>\n    </div>\n\n    <div v-else-if=\"isDestinationCampusTopic\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"campusTopicGuid\"\n                    label=\"Topic\"\n                    rules=\"required\"\n                    :items=\"campusTopicOptions\" />\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mt-3\">\n        <EmailSource v-model=\"source\" :templateOptions=\"sourceTemplateOptions\" />\n    </div>\n</SectionContainer>\n"
      });

      var sourcesKey = Symbol();
      function provideFormSources(options) {
        provide(sourcesKey, options);
      }
      function useFormSources() {
        var _inject;
        return (_inject = inject(sourcesKey)) !== null && _inject !== void 0 ? _inject : {};
      }
      function getFilterGroupTitle(group) {
        switch (group.expressionType) {
          case FilterExpressionType.GroupAll:
            return "<strong>Show</strong> when <strong>all</strong> of the following match:";
          case FilterExpressionType.GroupAny:
            return "<strong>Show</strong> when <strong>any</strong> of the following match:";
          case FilterExpressionType.GroupAllFalse:
            return "<strong>Hide</strong> when <strong>all</strong> of the following match:";
          case FilterExpressionType.GroupAnyFalse:
            return "<strong>Hide</strong> when <strong>any</strong> of the following match:";
          default:
            return "";
        }
      }
      function getFilterRuleDescription(rule, sources, fields) {
        var ruleField = fields.filter(f => areEqual(f.guid, rule.attributeGuid));
        var ruleSource = sources.filter(s => areEqual(s.guid, rule.attributeGuid));
        if (ruleField.length === 1 && ruleSource.length === 1 && ruleSource[0].attribute) {
          var fieldType = getFieldType(ruleField[0].fieldTypeGuid);
          if (fieldType) {
            var _rule$value, _ruleSource$0$attribu;
            var descr = fieldType.getFilterValueDescription({
              comparisonType: rule.comparisonType,
              value: (_rule$value = rule.value) !== null && _rule$value !== void 0 ? _rule$value : ""
            }, (_ruleSource$0$attribu = ruleSource[0].attribute.configurationValues) !== null && _ruleSource$0$attribu !== void 0 ? _ruleSource$0$attribu : {});
            return "".concat(ruleSource[0].attribute.name, " ").concat(descr);
          }
        }
        return "";
      }
      function timeoutAsync(ms) {
        return new Promise((_resolve, reject) => {
          setTimeout(reject, ms);
        });
      }

      var CommunicationsTab = defineComponent({
        name: "Workflow.FormBuilderDetail.CommunicationsTab",
        components: {
          NotificationBox,
          ConfirmationEmail,
          NotificationEmail,
          RockForm
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
          templateOverrides: {
            type: Object
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "validationChanged"],
        setup(props, _ref) {
          var _props$modelValue$con, _props$modelValue$not, _sources$emailTemplat, _sources$campusTopicO;
          var emit = _ref.emit;
          var confirmationEmail = ref((_props$modelValue$con = props.modelValue.confirmationEmail) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {});
          var notificationEmail = ref((_props$modelValue$not = props.modelValue.notificationEmail) !== null && _props$modelValue$not !== void 0 ? _props$modelValue$not : {});
          var formSubmit = ref(false);
          var sources = useFormSources();
          var sourceTemplateOptions = (_sources$emailTemplat = sources.emailTemplateOptions) !== null && _sources$emailTemplat !== void 0 ? _sources$emailTemplat : [];
          var campusTopicOptions = (_sources$campusTopicO = sources.campusTopicOptions) !== null && _sources$campusTopicO !== void 0 ? _sources$campusTopicO : [];
          var isConfirmationEmailForced = computed(() => {
            var _props$templateOverri, _props$templateOverri2;
            return (_props$templateOverri = (_props$templateOverri2 = props.templateOverrides) === null || _props$templateOverri2 === void 0 ? void 0 : _props$templateOverri2.isConfirmationEmailConfigured) !== null && _props$templateOverri !== void 0 ? _props$templateOverri : false;
          });
          var onValidationChanged = errors => {
            emit("validationChanged", errors);
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue$con2, _props$modelValue$not2;
            confirmationEmail.value = (_props$modelValue$con2 = props.modelValue.confirmationEmail) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : {};
            notificationEmail.value = (_props$modelValue$not2 = props.modelValue.notificationEmail) !== null && _props$modelValue$not2 !== void 0 ? _props$modelValue$not2 : {};
          });
          watch([confirmationEmail, notificationEmail], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              confirmationEmail: confirmationEmail.value,
              notificationEmail: notificationEmail.value
            });
            emit("update:modelValue", newValue);
          });
          watch(() => props.submit, () => {
            if (props.submit) {
              formSubmit.value = true;
            }
          });
          return {
            campusTopicOptions,
            confirmationEmail,
            formSubmit,
            isConfirmationEmailForced,
            notificationEmail,
            onValidationChanged,
            sourceTemplateOptions
          };
        },
        template: "\n<div class=\"form-builder-scroll\">\n    <div class=\"panel-body\">\n        <RockForm v-model:submit=\"formSubmit\" @validationChanged=\"onValidationChanged\">\n            <ConfirmationEmail v-if=\"!isConfirmationEmailForced\" v-model=\"confirmationEmail\" :sourceTemplateOptions=\"sourceTemplateOptions\" :recipientOptions=\"recipientOptions\" />\n            <NotificationBox v-else alertType=\"info\">\n                <h4 class=\"alert-heading\">Confirmation Email</h4>\n                <p>\n                    The confirmation e-mail is defined on the template and cannot be changed.\n                </p>\n            </NotificationBox>\n\n            <NotificationEmail v-model=\"notificationEmail\" :sourceTemplateOptions=\"sourceTemplateOptions\" :campusTopicOptions=\"campusTopicOptions\" />\n        </RockForm>\n    </div>\n</div>\n"
      });

      var ConfigurableZone = defineComponent({
        name: "Workflow.FormBuilderDetail.ConfigurableZone",
        components: {},
        props: {
          modelValue: {
            type: Boolean,
            default: false
          },
          iconCssClass: {
            type: String,
            default: "fa fa-gear"
          },
          clickBodyToConfigure: {
            type: Boolean,
            default: false
          }
        },
        emits: ["configure"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var zoneClasses = computed(() => {
            var classes = ["configurable-zone"];
            if (props.modelValue) {
              classes.push("active");
            }
            return classes;
          });
          var onActionClick = () => {
            emit("configure");
          };
          var onBodyActionClick = () => {
            if (props.clickBodyToConfigure) {
              emit("configure");
            }
          };
          return {
            onActionClick,
            onBodyActionClick,
            zoneClasses
          };
        },
        template: "\n<div :class=\"zoneClasses\">\n    <div class=\"zone-content-container\" @click.stop=\"onBodyActionClick\">\n        <div class=\"zone-content\">\n            <slot />\n        </div>\n    </div>\n\n    <div class=\"zone-actions\">\n        <slot name=\"preActions\" />\n        <div v-if=\"iconCssClass\" class=\"zone-action\" @click.stop=\"onActionClick\"><i :class=\"iconCssClass + ' fa-fw'\"></i></div>\n        <slot name=\"postActions\" />\n    </div>\n</div>\n"
      });

      function shallowStrictEqual(a, b) {
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
          var key = _aKeys[_i];
          if (!bKeys.includes(key)) {
            return false;
          }
          if (a[key] !== b[key]) {
            return false;
          }
        }
        return true;
      }
      var FieldEditAside = defineComponent({
        name: "Workflow.FormBuilderDetail.FieldEditAside",
        components: {
          Panel,
          FieldFilterEditor,
          FieldTypeEditor,
          InlineSwitch: Switch,
          LoadingIndicator,
          Modal,
          NumberBox,
          RockButton,
          RockForm,
          RangeSlider,
          TextBox,
          NotificationBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          formFields: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "close", "validationChanged"],
        methods: {
          isSafeToClose() {
            this.formSubmit = true;
            var result = this.validationErrors.length === 0;
            if (!result && this.scrollableElement) {
              this.scrollableElement.scroll({
                behavior: "smooth",
                top: 0
              });
            }
            return result;
          }
        },
        setup(props, _ref) {
          var _useFormSources$field, _props$modelValue$des, _props$modelValue$isR, _props$modelValue$isH, _props$modelValue$isS, _props$modelValue$vis, _props$modelValue$con, _props$modelValue$def;
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var fieldTypes = (_useFormSources$field = useFormSources().fieldTypes) !== null && _useFormSources$field !== void 0 ? _useFormSources$field : [];
          var conditionalSourcesLoadAttempted = false;
          var fieldName = ref(props.modelValue.name);
          var fieldDescription = ref((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var fieldKey = ref(props.modelValue.key);
          var fieldSize = ref(props.modelValue.size);
          var isFieldRequired = ref((_props$modelValue$isR = props.modelValue.isRequired) !== null && _props$modelValue$isR !== void 0 ? _props$modelValue$isR : false);
          var isFieldLabelHidden = ref((_props$modelValue$isH = props.modelValue.isHideLabel) !== null && _props$modelValue$isH !== void 0 ? _props$modelValue$isH : false);
          var isShowOnGrid = ref((_props$modelValue$isS = props.modelValue.isShowOnGrid) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false);
          var visibilityRule = ref((_props$modelValue$vis = props.modelValue.visibilityRule) !== null && _props$modelValue$vis !== void 0 ? _props$modelValue$vis : null);
          var fieldTypeValue = ref({
            fieldTypeGuid: props.modelValue.fieldTypeGuid,
            configurationValues: (_props$modelValue$con = props.modelValue.configurationValues) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {},
            defaultValue: (_props$modelValue$def = props.modelValue.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : ""
          });
          var validationErrors = ref([]);
          var formSubmit = ref(false);
          var scrollableElement = ref(null);
          var conditionalModel = ref(null);
          var conditionalSources = ref(null);
          var conditionalPanelOpen = ref(false);
          var conditionalModalOpen = ref(false);
          var fieldTypeEditorKey = computed(() => "fieldTypeEditor_".concat(props.modelValue.guid));
          var fieldType = computed(() => {
            var _List$firstOrUndefine;
            return (_List$firstOrUndefine = new List(fieldTypes).firstOrUndefined(f => areEqual(f.guid, props.modelValue.fieldTypeGuid))) !== null && _List$firstOrUndefine !== void 0 ? _List$firstOrUndefine : null;
          });
          var asideIconSvg = computed(() => {
            var _fieldType$value$svg, _fieldType$value;
            return (_fieldType$value$svg = (_fieldType$value = fieldType.value) === null || _fieldType$value === void 0 ? void 0 : _fieldType$value.svg) !== null && _fieldType$value$svg !== void 0 ? _fieldType$value$svg : "";
          });
          var fieldKeyRules = computed(() => {
            var rules = ["required"];
            var keys = props.formFields.filter(f => !areEqual(f.guid, props.modelValue.guid)).map(f => f.key);
            rules.push(value => {
              var valueString = value;
              if (keys.includes(valueString)) {
                return "must be unique";
              }
              return "";
            });
            return rules;
          });
          var hasConditions = computed(() => {
            var _visibilityRule$value;
            return !!((_visibilityRule$value = visibilityRule.value) !== null && _visibilityRule$value !== void 0 && _visibilityRule$value.rules) && visibilityRule.value.rules.length > 0;
          });
          var conditionalTitle = computed(() => {
            return visibilityRule.value ? getFilterGroupTitle(visibilityRule.value) : "";
          });
          var conditionalRules = computed(() => {
            var _visibilityRule$value2, _visibilityRule$value3;
            return (_visibilityRule$value2 = (_visibilityRule$value3 = visibilityRule.value) === null || _visibilityRule$value3 === void 0 ? void 0 : _visibilityRule$value3.rules) !== null && _visibilityRule$value2 !== void 0 ? _visibilityRule$value2 : [];
          });
          var isConditionalsLoading = computed(() => !conditionalSources.value);
          var getRuleDescription = rule => {
            var _conditionalSources$v;
            return getFilterRuleDescription(rule, (_conditionalSources$v = conditionalSources.value) !== null && _conditionalSources$v !== void 0 ? _conditionalSources$v : [], props.formFields);
          };
          var loadConditionalSources = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var fields = props.formFields.filter(f => !areEqual(f.guid, props.modelValue.guid));
              var getFilterSources = invokeBlockAction("GetFilterSources", {
                formFields: fields
              });
              var result = yield Promise.race([getFilterSources, timeoutAsync(2000)]);
              if (!result || !result.isSuccess || !result.data) {
                return;
              }
              conditionalSources.value = result.data;
            });
            return function loadConditionalSources() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onBackClick = () => emit("close");
          var onFieldTypeModelValueUpdate = value => {
            emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              configurationValues: value.configurationValues,
              defaultValue: value.defaultValue
            }));
          };
          var onValidationChanged = errors => {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          };
          var onConditionalEditClick = function () {
            var _ref3 = _asyncToGenerator(function* () {
              conditionalModel.value = visibilityRule.value;
              conditionalModalOpen.value = true;
            });
            return function onConditionalEditClick() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onConditionalSave = () => {
            visibilityRule.value = conditionalModel.value;
            conditionalModalOpen.value = false;
          };
          watch(fieldName, (newValue, oldValue) => {
            var oldValueAsKey = oldValue.replace(/[^a-zA-Z0-9_\-.]/g, "");
            if (oldValueAsKey === fieldKey.value) {
              fieldKey.value = newValue.replace(/[^a-zA-Z0-9_\-.]/g, "");
            }
          });
          watch(conditionalPanelOpen, () => {
            if (!conditionalPanelOpen.value || conditionalSources.value !== null || conditionalSourcesLoadAttempted) {
              return;
            }
            conditionalSourcesLoadAttempted = true;
            loadConditionalSources();
          });
          watch([fieldName, fieldDescription, fieldKey, fieldSize, isFieldRequired, isFieldLabelHidden, isShowOnGrid, visibilityRule], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              name: fieldName.value,
              description: fieldDescription.value,
              key: fieldKey.value,
              size: fieldSize.value,
              isRequired: isFieldRequired.value,
              isHideLabel: isFieldLabelHidden.value,
              isShowOnGrid: isShowOnGrid.value,
              visibilityRule: visibilityRule.value
            });
            emit("update:modelValue", newValue);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$des2, _props$modelValue$isR2, _props$modelValue$isH2, _props$modelValue$isS2, _props$modelValue$vis2, _fieldTypeValue$value, _props$modelValue$con2;
            fieldName.value = props.modelValue.name;
            fieldDescription.value = (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "";
            fieldKey.value = props.modelValue.key;
            fieldSize.value = props.modelValue.size;
            isFieldRequired.value = (_props$modelValue$isR2 = props.modelValue.isRequired) !== null && _props$modelValue$isR2 !== void 0 ? _props$modelValue$isR2 : false;
            isFieldLabelHidden.value = (_props$modelValue$isH2 = props.modelValue.isHideLabel) !== null && _props$modelValue$isH2 !== void 0 ? _props$modelValue$isH2 : false;
            isShowOnGrid.value = (_props$modelValue$isS2 = props.modelValue.isShowOnGrid) !== null && _props$modelValue$isS2 !== void 0 ? _props$modelValue$isS2 : false;
            visibilityRule.value = (_props$modelValue$vis2 = props.modelValue.visibilityRule) !== null && _props$modelValue$vis2 !== void 0 ? _props$modelValue$vis2 : null;
            var isConfigChanged = fieldTypeValue.value.fieldTypeGuid !== props.modelValue.fieldTypeGuid || !shallowStrictEqual((_fieldTypeValue$value = fieldTypeValue.value.configurationValues) !== null && _fieldTypeValue$value !== void 0 ? _fieldTypeValue$value : {}, (_props$modelValue$con2 = props.modelValue.configurationValues) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : {}) || fieldTypeValue.value.defaultValue !== props.modelValue.defaultValue;
            if (isConfigChanged) {
              var _props$modelValue$con3, _props$modelValue$def2;
              fieldTypeValue.value = {
                fieldTypeGuid: props.modelValue.fieldTypeGuid,
                configurationValues: (_props$modelValue$con3 = props.modelValue.configurationValues) !== null && _props$modelValue$con3 !== void 0 ? _props$modelValue$con3 : {},
                defaultValue: (_props$modelValue$def2 = props.modelValue.defaultValue) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : ""
              };
            }
          });
          return {
            asideIconSvg,
            conditionalTitle,
            conditionalModalOpen,
            conditionalModel,
            conditionalPanelOpen,
            conditionalRules,
            conditionalSources,
            fieldDescription,
            fieldKey,
            fieldKeyRules,
            fieldName,
            fieldSize,
            fieldTypeEditorKey,
            fieldTypeValue,
            formSubmit,
            getRuleDescription,
            hasConditions,
            isConditionalsLoading,
            isFieldLabelHidden,
            isFieldRequired,
            isShowOnGrid,
            onBackClick,
            onConditionalEditClick,
            onConditionalSave,
            onFieldTypeModelValueUpdate,
            onValidationChanged,
            scrollableElement,
            validationErrors
          };
        },
        template: "\n    <div class=\"form-sidebar\">\n    <div class=\"sidebar-header\">\n        <div class=\"sidebar-back\" @click=\"onBackClick\">\n            <i class=\"fa fa-chevron-left\"></i>\n        </div>\n\n        <div class=\"title\">\n            <span v-if=\"asideIconSvg\" class=\"inline-svg icon\" v-html=\"asideIconSvg\"></span>\n            {{ fieldName }}\n        </div>\n    </div>\n\n    <div ref=\"scrollableElement\" class=\"sidebar-body\">\n        <RockForm v-model:submit=\"formSubmit\" @validationChanged=\"onValidationChanged\" class=\"sidebar-panels sidebar-field-edit field-edit-aside\">\n            <Panel :modelValue=\"true\" title=\"Field Type\" :hasCollapse=\"true\">\n                <TextBox v-model=\"fieldName\"\n                    rules=\"required\"\n                    label=\"Name\" />\n                <TextBox v-model=\"fieldDescription\"\n                    label=\"Description\"\n                    textMode=\"multiline\" />\n                <FieldTypeEditor :modelValue=\"fieldTypeValue\" :key=\"fieldTypeEditorKey\" @update:modelValue=\"onFieldTypeModelValueUpdate\" isFieldTypeReadOnly />\n            </Panel>\n\n            <Panel title=\"Conditionals\" v-model=\"conditionalPanelOpen\" :hasCollapse=\"true\">\n                <LoadingIndicator v-if=\"isConditionalsLoading\" />\n\n                <div v-else-if=\"conditionalSources.length < 1\">\n                    <NotificationBox alertType=\"warning\">No source fields available.</NotificationBox>\n\n                    <div class=\"d-flex justify-content-end\">\n                        <RockButton btnType=\"default\" btnSize=\"sm\" disabled><i class=\"fa fa-pencil\"></i></RockButton>\n                    </div>\n                </div>\n\n                <div v-else>\n                    <div v-if=\"hasConditions\">\n                        <div v-html=\"conditionalTitle\"></div>\n                        <ul>\n                            <li v-for=\"rule in conditionalRules\" :key=\"rule.guid\">{{ getRuleDescription(rule) }}</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"d-flex justify-content-end\">\n                        <RockButton btnType=\"default\" btnSize=\"sm\" @click=\"onConditionalEditClick\"><i class=\"fa fa-pencil\"></i></RockButton>\n                    </div>\n                </div>\n            </Panel>\n\n            <Panel title=\"Format\" :hasCollapse=\"true\">\n                <RangeSlider v-model=\"fieldSize\" label=\"Column Span\" :min=\"1\" :max=\"12\" :step=\"1\" showValueBar/>\n                <InlineSwitch v-model=\"isFieldRequired\" text=\"Required\" />\n                <InlineSwitch v-model=\"isFieldLabelHidden\" text=\"Hide Label\" />\n            </Panel>\n\n            <Panel title=\"Advanced\" :hasCollapse=\"true\">\n                <TextBox v-model=\"fieldKey\"\n                    :rules=\"fieldKeyRules\"\n                    label=\"Field Key\" />\n                <InlineSwitch v-model=\"isShowOnGrid\" text=\"Show on Results Grid\" />\n            </Panel>\n        </RockForm>\n    </div>\n\n    <Modal v-model=\"conditionalModalOpen\" title=\"Conditional Settings\" saveText=\"Save\" @save=\"onConditionalSave\">\n        <FieldFilterEditor v-model=\"conditionalModel\" :title=\"fieldName\" :sources=\"conditionalSources\" />\n    </Modal>\n    </div>\n"
      });

      var FormContentModal = defineComponent({
        name: "Workflow.FormBuilderDetail.FormContentModal",
        components: {
          ConfigurableZone,
          Modal,
          RockButton,
          RockForm,
          TextBox
        },
        props: {
          modelValue: {
            type: String,
            required: true
          },
          isVisible: {
            type: Boolean,
            default: false
          }
        },
        emits: ["save", "update:modelValue", "update:isVisible"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var submitForm = ref(false);
          var contentTextBox = ref(null);
          var onStartSave = () => {
            submitForm.value = true;
          };
          var onSubmitForm = () => {
            emit("save");
          };
          watch(isVisible, () => {
            nextTick(() => {
              if (contentTextBox.value) {
                var input = contentTextBox.value.querySelector("textarea");
                input === null || input === void 0 ? void 0 : input.focus();
              }
            });
          });
          return {
            contentTextBox,
            internalValue,
            isVisible,
            onSubmitForm,
            onStartSave,
            submitForm
          };
        },
        template: "\n<Modal v-model=\"isVisible\">\n    <RockForm v-model:submit=\"submitForm\" @submit=\"onSubmitForm\">\n        <div ref=\"contentTextBox\">\n            <TextBox v-model=\"internalValue\" label=\"Content\" textMode=\"multiline\" />\n        </div>\n    </RockForm>\n\n    <template #customButtons>\n        <RockButton btnType=\"primary\" @click=\"onStartSave\">Save</RockButton>\n    </template>\n</Modal>\n"
      });

      var FormContentZone = defineComponent({
        name: "Workflow.FormBuilderDetail.FormContentZone",
        components: {
          ConfigurableZone
        },
        props: {
          modelValue: {
            type: String,
            required: true
          },
          placeholder: {
            type: String,
            required: true
          },
          isActive: {
            type: Boolean,
            default: false
          },
          iconCssClass: {
            type: String,
            default: "fa fa-pencil"
          }
        },
        emits: ["configure"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var hasContent = computed(() => !!props.modelValue);
          var safeContent = computed(() => {
            if (!props.modelValue) {
              return "";
            }
            var div = document.createElement("div");
            div.innerHTML = props.modelValue;
            return div.innerHTML;
          });
          var onConfigure = () => emit("configure");
          return {
            hasContent,
            onConfigure,
            safeContent
          };
        },
        template: "\n<ConfigurableZone :modelValue=\"isActive\" :iconCssClass=\"iconCssClass\" @configure=\"onConfigure\">\n    <div class=\"zone-body\">\n        <div v-if=\"hasContent\" style=\"min-height: 24px;\" v-html=\"safeContent\"></div>\n        <div v-else class=\"text-center text-muted\">{{ placeholder }}</div>\n    </div>\n</ConfigurableZone>\n"
      });

      var campusSetFromOptions = [{
        value: CampusSetFrom.CurrentPerson.toString(),
        text: "Current Person"
      }, {
        value: CampusSetFrom.WorkflowPerson.toString(),
        text: "Workflow Person"
      }, {
        value: CampusSetFrom.QueryString.toString(),
        text: "Query String"
      }];
      var GeneralAside = defineComponent({
        name: "Workflow.FormBuilderDetail.GeneralAside",
        components: {
          NotificationBox,
          ConfigurableZone,
          DropDownList,
          RockField,
          RockLabel,
          Switch,
          TransitionVerticalCollapse
        },
        directives: {
          DragSource
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          sectionDragOptions: {
            type: Object,
            required: true
          },
          fieldDragOptions: {
            type: Object,
            required: true
          },
          isPersonEntryForced: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        methods: {
          isSafeToClose() {
            return true;
          }
        },
        setup(props, _ref) {
          var _props$modelValue$cam, _props$modelValue$cam2, _props$modelValue$has, _useFormSources$field;
          var emit = _ref.emit;
          var campusSetFrom = ref((_props$modelValue$cam = (_props$modelValue$cam2 = props.modelValue.campusSetFrom) === null || _props$modelValue$cam2 === void 0 ? void 0 : _props$modelValue$cam2.toString()) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : "");
          var hasPersonEntry = ref((_props$modelValue$has = props.modelValue.hasPersonEntry) !== null && _props$modelValue$has !== void 0 ? _props$modelValue$has : false);
          var fieldTypes = (_useFormSources$field = useFormSources().fieldTypes) !== null && _useFormSources$field !== void 0 ? _useFormSources$field : [];
          var isAdditionalFieldsVisible = ref(false);
          var commonFieldTypes = computed(() => {
            return fieldTypes.filter(f => f.isCommon);
          });
          var advancedFieldTypes = computed(() => {
            return fieldTypes.filter(f => !f.isCommon);
          });
          var additionalFieldsClass = computed(() => {
            return isAdditionalFieldsVisible.value ? "fa fa-chevron-up" : "fa fa-chevron-down";
          });
          var autoSyncModelValue = true;
          var onAdditionalFieldsClick = () => {
            isAdditionalFieldsVisible.value = !isAdditionalFieldsVisible.value;
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue$cam3, _props$modelValue$cam4, _props$modelValue$has2;
            autoSyncModelValue = false;
            campusSetFrom.value = (_props$modelValue$cam3 = (_props$modelValue$cam4 = props.modelValue.campusSetFrom) === null || _props$modelValue$cam4 === void 0 ? void 0 : _props$modelValue$cam4.toString()) !== null && _props$modelValue$cam3 !== void 0 ? _props$modelValue$cam3 : "";
            hasPersonEntry.value = (_props$modelValue$has2 = props.modelValue.hasPersonEntry) !== null && _props$modelValue$has2 !== void 0 ? _props$modelValue$has2 : false;
            autoSyncModelValue = true;
          });
          watch([campusSetFrom, hasPersonEntry], () => {
            var _toNumberOrNull;
            if (!autoSyncModelValue) {
              return;
            }
            var value = {
              campusSetFrom: (_toNumberOrNull = toNumberOrNull(campusSetFrom.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : undefined,
              hasPersonEntry: hasPersonEntry.value
            };
            emit("update:modelValue", value);
          });
          return {
            additionalFieldsClass,
            advancedFieldTypes,
            campusSetFrom,
            campusSetFromOptions,
            commonFieldTypes,
            hasPersonEntry,
            isAdditionalFieldsVisible,
            onAdditionalFieldsClick
          };
        },
        template: "\n<div class=\"form-sidebar\">\n    <div class=\"sidebar-header\">\n        <span class=\"title\">Field List</span>\n    </div>\n\n    <div class=\"sidebar-body\">\n        <div class=\"panel-body\">\n            <div v-drag-source=\"sectionDragOptions\">\n                <div class=\"form-template-item form-template-item-section\">\n                    <i class=\"fa fa-expand fa-fw\"></i>\n                    Section\n                </div>\n            </div>\n\n            <div class=\"mt-3\">\n                <RockLabel>Common Fields</RockLabel>\n\n                <div class=\"form-template-item-list\" v-drag-source=\"fieldDragOptions\">\n                    <div v-for=\"field in commonFieldTypes\" class=\"form-template-item form-template-item-field\" :data-field-type=\"field.guid\">\n                        <span class=\"inline-svg icon\" v-html=\"field.svg\"></span>\n                        <div class=\"text\">{{ field.text }}</div>\n                    </div>\n                </div>\n\n                <div @click=\"onAdditionalFieldsClick\" class=\"mt-2\">\n                    <RockLabel>Additional Fields <i :class=\"additionalFieldsClass\"></i></RockLabel>\n                </div>\n\n                <TransitionVerticalCollapse>\n                    <div v-if=\"isAdditionalFieldsVisible\" class=\"form-template-item-list\" v-drag-source=\"fieldDragOptions\">\n                        <div v-for=\"field in advancedFieldTypes\" class=\"form-template-item form-template-item-field\" :data-field-type=\"field.guid\">\n                            <span class=\"inline-svg icon\" v-html=\"field.svg\"></span>\n                            <div class=\"text\">{{ field.text }}</div>\n                        </div>\n                    </div>\n                </TransitionVerticalCollapse>\n            </div>\n\n            <div class=\"mt-3\">\n                <Switch v-if=\"!isPersonEntryForced\" v-model=\"hasPersonEntry\" text=\"Enable Person Entry\" />\n\n                <NotificationBox v-else alertType=\"info\">\n                    Person entry is enabled on the template and cannot be changed.\n                </NotificationBox>\n\n                <DropDownList v-model=\"campusSetFrom\" label=\"Campus Set From\" :items=\"campusSetFromOptions\" />\n            </div>\n        </div>\n    </div>\n</div>\n"
      });

      var PersonEntryEditAside = defineComponent({
        name: "Workflow.FormBuilderDetail.PersonEntryEditAside",
        components: {
          Panel,
          PersonEntrySettings,
          RockForm
        },
        props: {
          modelValue: {
            type: Object,
            default: {}
          }
        },
        emits: ["update:modelValue", "close", "validationChanged"],
        methods: {
          isSafeToClose() {
            this.formSubmit = true;
            var result = this.validationErrors.length === 0;
            if (!result && this.scrollableElement) {
              this.scrollableElement.scroll({
                behavior: "smooth",
                top: 0
              });
            }
            return result;
          }
        },
        setup(props, _ref) {
          var _options$addressTypeO, _options$campusStatus, _options$campusTypeOp, _options$connectionSt, _options$recordStatus;
          var emit = _ref.emit;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var validationErrors = ref([]);
          var scrollableElement = ref(null);
          var formSubmit = ref(false);
          var onBackClick = () => emit("close");
          var onValidationChanged = errors => {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          };
          var options = useFormSources();
          return {
            addressTypeOptions: (_options$addressTypeO = options.addressTypeOptions) !== null && _options$addressTypeO !== void 0 ? _options$addressTypeO : [],
            campusStatusOptions: (_options$campusStatus = options.campusStatusOptions) !== null && _options$campusStatus !== void 0 ? _options$campusStatus : [],
            campusTypeOptions: (_options$campusTypeOp = options.campusTypeOptions) !== null && _options$campusTypeOp !== void 0 ? _options$campusTypeOp : [],
            connectionStatusOptions: (_options$connectionSt = options.connectionStatusOptions) !== null && _options$connectionSt !== void 0 ? _options$connectionSt : [],
            recordStatusOptions: (_options$recordStatus = options.recordStatusOptions) !== null && _options$recordStatus !== void 0 ? _options$recordStatus : [],
            formSubmit,
            internalValue,
            onBackClick,
            onValidationChanged,
            scrollableElement,
            validationErrors
          };
        },
        template: "\n<div class=\"form-sidebar\">\n    <div class=\"sidebar-header\">\n        <div class=\"sidebar-back\" @click=\"onBackClick\">\n            <i class=\"fa fa-chevron-left\"></i>\n        </div>\n\n        <span class=\"title\">\n            <i class=\"fa fa-fw fa-user icon\"></i>\n            Person Entry\n        </span>\n    </div>\n\n    <div ref=\"scrollableElement\" class=\"sidebar-body\">\n        <RockForm v-model:submit=\"formSubmit\" @validationChanged=\"onValidationChanged\" class=\"sidebar-panels\">\n            <div class=\"panel-body\">\n                <PersonEntrySettings v-model=\"internalValue\"\n                    isVertical\n                    :recordStatusOptions=\"recordStatusOptions\"\n                    :connectionStatusOptions=\"connectionStatusOptions\"\n                    :campusTypeOptions=\"campusTypeOptions\"\n                    :campusStatusOptions=\"campusStatusOptions\"\n                    :addressTypeOptions=\"addressTypeOptions\" />\n            </div>\n        </RockForm>\n    </div>\n</div>\n"
      });

      var SectionEditAside = defineComponent({
        name: "Workflow.FormBuilderDetail.SectionEditAside",
        components: {
          ConfigurableZone,
          DropDownList,
          FieldFilterEditor,
          LoadingIndicator,
          Modal,
          Panel,
          RockButton,
          RockField,
          RockForm,
          Switch,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          formFields: {
            type: Array,
            required: true
          }
        },
        emits: ["close", "update:modelValue", "validationChanged"],
        methods: {
          isSafeToClose() {
            this.formSubmit = true;
            return this.validationErrors.length === 0;
          }
        },
        setup(props, _ref) {
          var _props$modelValue$typ, _props$modelValue$vis, _useFormSources$secti;
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var conditionalSourcesLoadAttempted = false;
          var title = ref(props.modelValue.title);
          var description = ref(props.modelValue.description);
          var showHeadingSeparator = ref(props.modelValue.showHeadingSeparator);
          var sectionType = ref((_props$modelValue$typ = props.modelValue.type) !== null && _props$modelValue$typ !== void 0 ? _props$modelValue$typ : "");
          var visibilityRule = ref((_props$modelValue$vis = props.modelValue.visibilityRule) !== null && _props$modelValue$vis !== void 0 ? _props$modelValue$vis : null);
          var validationErrors = ref([]);
          var formSubmit = ref(false);
          var autoSyncModelValue = true;
          var sectionTypeOptions = (_useFormSources$secti = useFormSources().sectionTypeOptions) !== null && _useFormSources$secti !== void 0 ? _useFormSources$secti : [];
          var conditionalModel = ref(null);
          var conditionalSources = ref(null);
          var conditionalPanelOpen = ref(false);
          var conditionalModalOpen = ref(false);
          var hasConditions = computed(() => {
            var _visibilityRule$value;
            return !!((_visibilityRule$value = visibilityRule.value) !== null && _visibilityRule$value !== void 0 && _visibilityRule$value.rules) && visibilityRule.value.rules.length > 0;
          });
          var conditionalTitle = computed(() => {
            return visibilityRule.value ? getFilterGroupTitle(visibilityRule.value) : "";
          });
          var conditionalRules = computed(() => {
            var _visibilityRule$value2, _visibilityRule$value3;
            return (_visibilityRule$value2 = (_visibilityRule$value3 = visibilityRule.value) === null || _visibilityRule$value3 === void 0 ? void 0 : _visibilityRule$value3.rules) !== null && _visibilityRule$value2 !== void 0 ? _visibilityRule$value2 : [];
          });
          var isConditionalsLoading = computed(() => !conditionalSources.value);
          var getRuleDescription = rule => {
            var _conditionalSources$v;
            return getFilterRuleDescription(rule, (_conditionalSources$v = conditionalSources.value) !== null && _conditionalSources$v !== void 0 ? _conditionalSources$v : [], props.formFields);
          };
          var loadConditionalSources = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var getFilterSources = invokeBlockAction("GetFilterSources", {
                formFields: props.formFields
              });
              var result = yield Promise.race([getFilterSources, timeoutAsync(2000)]);
              if (!result || !result.isSuccess || !result.data) {
                return;
              }
              conditionalSources.value = result.data;
            });
            return function loadConditionalSources() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onValidationChanged = errors => {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          };
          var onBackClick = () => emit("close");
          var onConditionalEditClick = function () {
            var _ref3 = _asyncToGenerator(function* () {
              conditionalModel.value = visibilityRule.value;
              conditionalModalOpen.value = true;
            });
            return function onConditionalEditClick() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onConditionalSave = () => {
            visibilityRule.value = conditionalModel.value;
            conditionalModalOpen.value = false;
          };
          watch(conditionalPanelOpen, () => {
            if (!conditionalPanelOpen.value || conditionalSources.value !== null || conditionalSourcesLoadAttempted) {
              return;
            }
            conditionalSourcesLoadAttempted = true;
            loadConditionalSources();
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$typ2, _props$modelValue$vis2;
            autoSyncModelValue = false;
            title.value = props.modelValue.title;
            description.value = props.modelValue.description;
            showHeadingSeparator.value = props.modelValue.showHeadingSeparator;
            sectionType.value = (_props$modelValue$typ2 = props.modelValue.type) !== null && _props$modelValue$typ2 !== void 0 ? _props$modelValue$typ2 : "";
            visibilityRule.value = (_props$modelValue$vis2 = props.modelValue.visibilityRule) !== null && _props$modelValue$vis2 !== void 0 ? _props$modelValue$vis2 : null;
            autoSyncModelValue = true;
          });
          watch([title, description, showHeadingSeparator, sectionType, visibilityRule], () => {
            if (!autoSyncModelValue) {
              return;
            }
            var value = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              title: title.value,
              description: description.value,
              showHeadingSeparator: showHeadingSeparator.value,
              type: sectionType.value === "" ? null : sectionType.value,
              visibilityRule: visibilityRule.value
            });
            emit("update:modelValue", value);
          });
          return {
            conditionalTitle,
            conditionalModalOpen,
            conditionalModel,
            conditionalPanelOpen,
            conditionalRules,
            conditionalSources,
            description,
            formSubmit,
            getRuleDescription,
            hasConditions,
            isConditionalsLoading,
            onBackClick,
            title,
            onConditionalEditClick,
            onConditionalSave,
            onValidationChanged,
            sectionType,
            sectionTypeOptions,
            showHeadingSeparator,
            validationErrors
          };
        },
        template: "\n<div class=\"form-sidebar\">\n    <div class=\"sidebar-header\">\n        <div class=\"sidebar-back\" @click=\"onBackClick\">\n            <i class=\"fa fa-chevron-left\"></i>\n        </div>\n\n        <div class=\"title\">\n            Section\n        </div>\n    </div>\n\n    <RockForm v-model:submit=\"formSubmit\" @validationChanged=\"onValidationChanged\" class=\"sidebar-body\">\n        <div class=\"sidebar-panels\">\n            <div></div>\n            <Panel :modelValue=\"true\" title=\"Section Configuration\" hasCollapse>\n                <TextBox v-model=\"title\"\n                    label=\"Title\" />\n                <TextBox v-model=\"description\"\n                    label=\"Description\"\n                    textMode=\"multiline\" />\n                <Switch v-model=\"showHeadingSeparator\"\n                    label=\"Show Heading Separator\" />\n                <DropDownList v-model=\"sectionType\"\n                    label=\"Type\"\n                    :items=\"sectionTypeOptions\"\n                    :showBlankItem=\"false\" />\n            </Panel>\n            <Panel title=\"Conditionals\" v-model=\"conditionalPanelOpen\" :hasCollapse=\"true\">\n                <LoadingIndicator v-if=\"isConditionalsLoading\" />\n\n                <div v-else-if=\"conditionalSources.length < 1\">\n                    <NotificationBox alertType=\"warning\">No source fields available.</NotificationBox>\n\n                    <div class=\"d-flex justify-content-end\">\n                        <RockButton btnType=\"default\" btnSize=\"sm\" disabled><i class=\"fa fa-pencil\"></i></RockButton>\n                    </div>\n                </div>\n\n                <div v-else>\n                    <div v-if=\"hasConditions\">\n                        <div v-html=\"conditionalTitle\"></div>\n                        <ul>\n                            <li v-for=\"rule in conditionalRules\" :key=\"rule.guid\">{{ getRuleDescription(rule) }}</li>\n                        </ul>\n                    </div>\n                    <div class=\"d-flex justify-content-end\">\n                        <RockButton btnType=\"default\" btnSize=\"sm\" @click=\"onConditionalEditClick\"><i class=\"fa fa-pencil\"></i></RockButton>\n                    </div>\n                </div>\n            </Panel>\n        </div>\n    </RockForm>\n\n    <Modal v-model=\"conditionalModalOpen\" title=\"Conditional Settings\" saveText=\"Save\" @save=\"onConditionalSave\">\n        <FieldFilterEditor v-model=\"conditionalModel\" :title=\"fieldName\" :sources=\"conditionalSources\" />\n    </Modal>\n</div>\n"
      });

      function getAttributeFromField(field) {
        var _field$isHideLabel, _field$isRequired, _field$description;
        return {
          attributeGuid: newGuid(),
          fieldTypeGuid: field.fieldTypeGuid,
          name: !((_field$isHideLabel = field.isHideLabel) !== null && _field$isHideLabel !== void 0 ? _field$isHideLabel : false) ? field.name : "",
          key: field.key,
          configurationValues: field.configurationValues,
          isRequired: (_field$isRequired = field.isRequired) !== null && _field$isRequired !== void 0 ? _field$isRequired : false,
          description: (_field$description = field.description) !== null && _field$description !== void 0 ? _field$description : "",
          order: 0,
          categories: []
        };
      }
      var fieldWrapper = defineComponent({
        name: "Workflow.FormBuilderDetail.SectionZone.FieldWrapper",
        components: {
          RockField
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        setup(props) {
          var _props$modelValue$def;
          var attribute = ref(getAttributeFromField(props.modelValue));
          var defaultValue = ref((_props$modelValue$def = props.modelValue.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : "");
          watch(() => props.modelValue, () => {
            var _props$modelValue$def2;
            attribute.value = getAttributeFromField(props.modelValue);
            defaultValue.value = (_props$modelValue$def2 = props.modelValue.defaultValue) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : "";
          }, {
            deep: true
          });
          return {
            attribute,
            defaultValue
          };
        },
        template: "\n<RockField :modelValue=\"defaultValue\" :attribute=\"attribute\" isEditMode />\n"
      });
      var SectionZone = defineComponent({
        name: "Workflow.FormBuilderDetail.SectionZone",
        components: {
          ConfigurableZone,
          RockField,
          FieldWrapper: fieldWrapper
        },
        directives: {
          DragSource,
          DragTarget
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          dragTargetId: {
            type: String,
            required: true
          },
          reorderDragOptions: {
            type: Object,
            required: true
          },
          activeZone: {
            type: String,
            required: false
          },
          sectionTypeOptions: {
            type: Array,
            default: []
          }
        },
        emits: ["configureField", "delete", "deleteField"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var sectionGuid = ref(props.modelValue.guid);
          var title = ref(props.modelValue.title);
          var description = ref(props.modelValue.description);
          var showSeparator = ref(props.modelValue.showHeadingSeparator);
          var sectionType = ref(props.modelValue.type);
          var fields = ref(props.modelValue.fields);
          var sectionTypeClass = computed(() => {
            if (sectionType.value) {
              var sectionTypeValue = sectionType.value;
              var matches = props.sectionTypeOptions.filter(t => areEqual(sectionTypeValue, t.value));
              if (matches.length > 0) {
                var _matches$0$category;
                return (_matches$0$category = matches[0].category) !== null && _matches$0$category !== void 0 ? _matches$0$category : "";
              }
            }
            return "";
          });
          var isSectionActive = computed(() => props.activeZone === sectionGuid.value);
          var getFieldColumnSize = field => "flex-col flex-col-".concat(field.size);
          var isFieldActive = field => {
            return field.guid === props.activeZone;
          };
          var onConfigureField = field => {
            emit("configureField", field);
          };
          var onDelete = () => {
            emit("delete", props.modelValue.guid);
          };
          var onDeleteField = field => {
            emit("deleteField", field.guid);
          };
          watch(() => [props.modelValue.guid, props.modelValue.title, props.modelValue.description, props.modelValue.showHeadingSeparator, props.modelValue.type, props.modelValue.fields], () => {
            console.log("section changed");
            sectionGuid.value = props.modelValue.guid;
            title.value = props.modelValue.title;
            description.value = props.modelValue.description;
            showSeparator.value = props.modelValue.showHeadingSeparator;
            sectionType.value = props.modelValue.type;
            fields.value = props.modelValue.fields;
          });
          return {
            description,
            fields,
            getFieldColumnSize,
            isFieldActive,
            isSectionActive,
            onConfigureField,
            onDelete,
            onDeleteField,
            sectionGuid,
            sectionTypeClass,
            showSeparator,
            title
          };
        },
        template: "\n<ConfigurableZone class=\"zone-section\" :modelValue=\"isSectionActive\">\n    <div class=\"zone-body\">\n        <div class=\"d-flex flex-column\" :class=\"sectionTypeClass\" style=\"flex-grow: 1;\">\n            <div>\n                <h1 v-if=\"title\">{{ title }}</h1>\n                <div v-if=\"description\" class=\"mb-2\">{{ description }}</div>\n                <hr v-if=\"showSeparator\" />\n            </div>\n\n            <div class=\"form-section\" v-drag-source=\"reorderDragOptions\" v-drag-target=\"reorderDragOptions.id\" v-drag-target:2=\"dragTargetId\" :data-section-id=\"sectionGuid\">\n                <ConfigurableZone v-for=\"field in fields\"\n                    :key=\"field.guid\"\n                    :modelValue=\"isFieldActive(field)\"\n                    :class=\"getFieldColumnSize(field)\"\n                    :data-field-id=\"field.guid\"\n                    clickBodyToConfigure\n                    @configure=\"onConfigureField(field)\">\n                    <div class=\"zone-body\">\n                        <FieldWrapper :modelValue=\"field\" />\n                    </div>\n\n                    <template #preActions>\n                        <div class=\"zone-action zone-action-move\"><i class=\"fa fa-bars fa-fw\"></i></div>\n                    </template>\n                    <template #postActions>\n                        <i class=\"fa fa-times fa-fw zone-action zone-action-delete\" @click.stop=\"onDeleteField(field)\"></i>\n                    </template>\n                </ConfigurableZone>\n            </div>\n        </div>\n    </div>\n    <template #preActions>\n        <div class=\"zone-action zone-action-move\"><i class=\"fa fa-bars fa-fw \"></i></div>\n    </template>\n    <template #postActions>\n        <div class=\"zone-action zone-action-delete\" @click.stop=\"onDelete\"><i class=\"fa fa-times fa-fw\"></i></div>\n    </template>\n</ConfigurableZone>\n"
      });

      function getSectionDragSourceOptions(sections, defaultSectionType) {
        return {
          id: newGuid(),
          copyElement: true,
          dragDrop(operation) {
            operation.element.remove();
            if (operation.targetIndex !== undefined) {
              sections.splice(operation.targetIndex, 0, {
                guid: newGuid(),
                title: "",
                description: "",
                showHeadingSeparator: false,
                type: defaultSectionType,
                fields: [],
                visibilityRule: {
                  guid: newGuid(),
                  expressionType: 1,
                  rules: []
                }
              });
            }
          }
        };
      }
      function getFieldDragSourceOptions(sections, availableFieldTypes) {
        return {
          id: newGuid(),
          copyElement: true,
          dragOver(operation) {
            if (operation.targetContainer && operation.targetContainer instanceof HTMLElement) {
              var _operation$targetCont;
              (_operation$targetCont = operation.targetContainer.closest(".zone-section")) === null || _operation$targetCont === void 0 ? void 0 : _operation$targetCont.classList.add("highlight");
            }
          },
          dragOut(operation) {
            if (operation.targetContainer && operation.targetContainer instanceof HTMLElement) {
              var _operation$targetCont2;
              (_operation$targetCont2 = operation.targetContainer.closest(".zone-section")) === null || _operation$targetCont2 === void 0 ? void 0 : _operation$targetCont2.classList.remove("highlight");
            }
          },
          dragShadow(operation) {
            if (operation.shadow) {
              operation.shadow.classList.remove("col-xs-6");
              operation.shadow.classList.add("flex-col", "flex-col-12");
            }
          },
          dragDrop(operation) {
            var _dataset$fieldType, _dataset$sectionId;
            operation.element.remove();
            var fieldTypeGuid = (_dataset$fieldType = operation.element.dataset.fieldType) !== null && _dataset$fieldType !== void 0 ? _dataset$fieldType : "";
            var sectionGuid = (_dataset$sectionId = operation.targetContainer.dataset.sectionId) !== null && _dataset$sectionId !== void 0 ? _dataset$sectionId : "";
            var section = new List(sections).firstOrUndefined(s => areEqual(s.guid, sectionGuid));
            var fieldType = new List(availableFieldTypes.value).firstOrUndefined(f => areEqual(f.guid, fieldTypeGuid));
            if (section && fieldType && operation.targetIndex !== undefined) {
              var existingKeys = [];
              var _iterator = _createForOfIteratorHelper(sections),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var sect = _step.value;
                  if (sect.fields) {
                    var _iterator2 = _createForOfIteratorHelper(sect.fields),
                      _step2;
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var field = _step2.value;
                        existingKeys.push(field.key);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              var baseKey = fieldType.text.replace(/[^a-zA-Z0-9_\-.]/g, "");
              var key = baseKey;
              var keyCount = 0;
              while (existingKeys.includes(key)) {
                keyCount++;
                key = "".concat(baseKey).concat(keyCount);
              }
              if (!section.fields) {
                section.fields = [];
              }
              section.fields.splice(operation.targetIndex, 0, {
                guid: newGuid(),
                fieldTypeGuid: fieldType.guid,
                name: fieldType.text,
                key: key,
                size: 12,
                configurationValues: {},
                defaultValue: "",
                visibilityRule: {
                  guid: newGuid(),
                  expressionType: 1,
                  rules: []
                }
              });
            }
          }
        };
      }
      function getFieldReorderDragSourceOptions(sections) {
        return {
          id: newGuid(),
          copyElement: false,
          handleSelector: ".zone-actions > .zone-action-move",
          dragOver(operation) {
            if (operation.targetContainer && operation.targetContainer instanceof HTMLElement) {
              var _operation$targetCont3;
              (_operation$targetCont3 = operation.targetContainer.closest(".zone-section")) === null || _operation$targetCont3 === void 0 ? void 0 : _operation$targetCont3.classList.add("highlight");
            }
          },
          dragOut(operation) {
            if (operation.targetContainer && operation.targetContainer instanceof HTMLElement) {
              var _operation$targetCont4;
              (_operation$targetCont4 = operation.targetContainer.closest(".zone-section")) === null || _operation$targetCont4 === void 0 ? void 0 : _operation$targetCont4.classList.remove("highlight");
            }
          },
          dragDrop(operation) {
            var _dataset$sectionId2, _dataset$sectionId3;
            var sourceSectionGuid = (_dataset$sectionId2 = operation.sourceContainer.dataset.sectionId) !== null && _dataset$sectionId2 !== void 0 ? _dataset$sectionId2 : "";
            var targetSectionGuid = (_dataset$sectionId3 = operation.targetContainer.dataset.sectionId) !== null && _dataset$sectionId3 !== void 0 ? _dataset$sectionId3 : "";
            var sourceSection = new List(sections).firstOrUndefined(s => areEqual(s.guid, sourceSectionGuid));
            var targetSection = new List(sections).firstOrUndefined(s => areEqual(s.guid, targetSectionGuid));
            if (sourceSection !== null && sourceSection !== void 0 && sourceSection.fields && targetSection !== null && targetSection !== void 0 && targetSection.fields && operation.targetIndex !== undefined) {
              var field = sourceSection.fields[operation.sourceIndex];
              sourceSection.fields.splice(operation.sourceIndex, 1);
              targetSection.fields.splice(operation.targetIndex, 0, field);
            }
          }
        };
      }
      function getSectionReorderDragSourceOptions(sections) {
        return {
          id: newGuid(),
          copyElement: false,
          handleSelector: ".zone-section > .zone-actions > .zone-action-move > .fa",
          dragDrop(operation) {
            if (operation.targetIndex !== undefined) {
              var section = sections[operation.sourceIndex];
              sections.splice(operation.sourceIndex, 1);
              sections.splice(operation.targetIndex, 0, section);
            }
          }
        };
      }
      var formHeaderZoneGuid = "C7D522D0-A18C-4CB0-B604-B2E9727E9E33";
      var formFooterZoneGuid = "317E5892-C156-4614-806F-BE4CAB67AC10";
      var personEntryZoneGuid = "5257312E-102C-4026-B558-10184AFEAC4D";
      var FormBuilderTab = defineComponent({
        name: "Workflow.FormBuilderDetail.FormBuilderTab",
        components: {
          ConfigurableZone,
          DropDownList,
          FieldEditAside,
          FormContentModal,
          FormContentZone,
          GeneralAside,
          Modal,
          Panel,
          RockButton,
          RockForm,
          RockLabel,
          PersonEntryEditAside,
          SectionEditAside,
          SectionZone,
          Switch,
          TextBox
        },
        directives: {
          DragSource,
          DragTarget
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          templateOverrides: {
            type: Object
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "validationChanged"],
        setup(props, _ref) {
          var _sources$sectionTypeO, _props$modelValue$sec, _props$modelValue$hea, _props$modelValue$foo, _sources$fieldTypes, _props$modelValue$per, _sources$defaultSecti;
          var emit = _ref.emit;
          var sources = useFormSources();
          var sectionTypeOptions = (_sources$sectionTypeO = sources.sectionTypeOptions) !== null && _sources$sectionTypeO !== void 0 ? _sources$sectionTypeO : [];
          var sections = reactive((_props$modelValue$sec = props.modelValue.sections) !== null && _props$modelValue$sec !== void 0 ? _props$modelValue$sec : []);
          var formHeaderContent = ref((_props$modelValue$hea = props.modelValue.headerContent) !== null && _props$modelValue$hea !== void 0 ? _props$modelValue$hea : "");
          var formFooterContent = ref((_props$modelValue$foo = props.modelValue.footerContent) !== null && _props$modelValue$foo !== void 0 ? _props$modelValue$foo : "");
          var formHeaderEditContent = ref("");
          var formFooterEditContent = ref("");
          var availableFieldTypes = ref((_sources$fieldTypes = sources.fieldTypes) !== null && _sources$fieldTypes !== void 0 ? _sources$fieldTypes : []);
          var generalAsideSettings = ref({
            campusSetFrom: props.modelValue.campusSetFrom,
            hasPersonEntry: props.modelValue.allowPersonEntry
          });
          var sectionAsideSettings = ref(null);
          var personEntryAsideSettings = ref((_props$modelValue$per = props.modelValue.personEntry) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : {});
          var sectionDragSourceOptions = getSectionDragSourceOptions(sections, (_sources$defaultSecti = sources.defaultSectionType) !== null && _sources$defaultSecti !== void 0 ? _sources$defaultSecti : null);
          var sectionReorderDragSourceOptions = getSectionReorderDragSourceOptions(sections);
          var fieldDragSourceOptions = getFieldDragSourceOptions(sections, availableFieldTypes);
          var fieldReorderDragSourceOptions = getFieldReorderDragSourceOptions(sections);
          var bodyElement = shallowRef(null);
          var generalAsideComponentInstance = ref(null);
          var personEntryAsideComponentInstance = ref(null);
          var sectionEditAsideComponentInstance = ref(null);
          var fieldEditAsideComponentInstance = ref(null);
          var personEntryEditAsideComponentInstance = ref(null);
          var activeZone = ref("");
          var editField = ref(null);
          var activeAside = computed(() => {
            if (showGeneralAside.value) {
              return generalAsideComponentInstance.value;
            } else if (personEntryAsideComponentInstance.value) {
              return personEntryAsideComponentInstance.value;
            } else if (sectionEditAsideComponentInstance.value) {
              return sectionEditAsideComponentInstance.value;
            } else if (fieldEditAsideComponentInstance.value) {
              return fieldEditAsideComponentInstance.value;
            } else if (personEntryEditAsideComponentInstance.value) {
              return personEntryEditAsideComponentInstance.value;
            } else {
              return null;
            }
          });
          var showGeneralAside = computed(() => {
            return !showFieldAside.value && !showSectionAside.value && !showPersonEntryAside.value;
          });
          var showFieldAside = computed(() => {
            return editField.value !== null;
          });
          var showSectionAside = computed(() => {
            return sectionAsideSettings.value !== null;
          });
          var showPersonEntryAside = computed(() => activeZone.value === personEntryZoneGuid);
          var hasPersonEntry = computed(() => {
            var _props$templateOverri, _props$templateOverri2, _generalAsideSettings;
            if ((_props$templateOverri = (_props$templateOverri2 = props.templateOverrides) === null || _props$templateOverri2 === void 0 ? void 0 : _props$templateOverri2.isPersonEntryConfigured) !== null && _props$templateOverri !== void 0 ? _props$templateOverri : false) {
              return true;
            }
            return (_generalAsideSettings = generalAsideSettings.value.hasPersonEntry) !== null && _generalAsideSettings !== void 0 ? _generalAsideSettings : false;
          });
          var isFormHeaderActive = computed({
            get: () => {
              return activeZone.value === formHeaderZoneGuid;
            },
            set(value) {
              if (!value && activeZone.value === formHeaderZoneGuid) {
                closeAside();
              }
            }
          });
          var isFormFooterActive = computed({
            get: () => {
              return activeZone.value === formFooterZoneGuid;
            },
            set(value) {
              if (!value && activeZone.value === formFooterZoneGuid) {
                closeAside();
              }
            }
          });
          var isPersonEntryActive = computed(() => activeZone.value === personEntryZoneGuid);
          var isPersonEntryForced = computed(() => {
            var _props$templateOverri3, _props$templateOverri4;
            return (_props$templateOverri3 = (_props$templateOverri4 = props.templateOverrides) === null || _props$templateOverri4 === void 0 ? void 0 : _props$templateOverri4.isPersonEntryConfigured) !== null && _props$templateOverri3 !== void 0 ? _props$templateOverri3 : false;
          });
          var personEntryZoneIconClass = computed(() => {
            if (isPersonEntryForced.value) {
              return "";
            }
            return "fa fa-gear";
          });
          var templateFormHeaderContent = computed(() => {
            var _props$templateOverri5, _props$templateOverri6;
            return (_props$templateOverri5 = (_props$templateOverri6 = props.templateOverrides) === null || _props$templateOverri6 === void 0 ? void 0 : _props$templateOverri6.formHeader) !== null && _props$templateOverri5 !== void 0 ? _props$templateOverri5 : "";
          });
          var templateFormFooterContent = computed(() => {
            var _props$templateOverri7, _props$templateOverri8;
            return (_props$templateOverri7 = (_props$templateOverri8 = props.templateOverrides) === null || _props$templateOverri8 === void 0 ? void 0 : _props$templateOverri8.formFooter) !== null && _props$templateOverri7 !== void 0 ? _props$templateOverri7 : "";
          });
          var existingFields = computed(() => {
            var fields = [];
            var _iterator3 = _createForOfIteratorHelper(sections),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var sect = _step3.value;
                if (sect.fields) {
                  var _iterator4 = _createForOfIteratorHelper(sect.fields),
                    _step4;
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var field = _step4.value;
                      fields.push(field);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return fields;
          });
          var canCloseAside = () => {
            if (activeAside.value) {
              return activeAside.value.isSafeToClose();
            } else {
              return true;
            }
          };
          var closeAside = () => {
            editField.value = null;
            activeZone.value = "";
            sectionAsideSettings.value = null;
            emit("validationChanged", []);
          };
          var onConfigureFormHeader = () => {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            formHeaderEditContent.value = formHeaderContent.value;
            activeZone.value = formHeaderZoneGuid;
          };
          var onConfigureFormFooter = () => {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            formFooterEditContent.value = formFooterContent.value;
            activeZone.value = formFooterZoneGuid;
          };
          var onConfigurePersonEntry = () => {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            activeZone.value = personEntryZoneGuid;
          };
          var onConfigureSection = section => {
            var _section$title, _section$description, _section$showHeadingS, _section$type;
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            activeZone.value = section.guid;
            sectionAsideSettings.value = {
              guid: section.guid,
              title: (_section$title = section.title) !== null && _section$title !== void 0 ? _section$title : "",
              description: (_section$description = section.description) !== null && _section$description !== void 0 ? _section$description : "",
              showHeadingSeparator: (_section$showHeadingS = section.showHeadingSeparator) !== null && _section$showHeadingS !== void 0 ? _section$showHeadingS : false,
              type: (_section$type = section.type) !== null && _section$type !== void 0 ? _section$type : null,
              visibilityRule: section.visibilityRule
            };
          };
          var onConfigureField = field => {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            var _iterator5 = _createForOfIteratorHelper(sections),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _section$fields;
                var section = _step5.value;
                var _iterator6 = _createForOfIteratorHelper((_section$fields = section.fields) !== null && _section$fields !== void 0 ? _section$fields : []),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var existingField = _step6.value;
                    if (areEqual(existingField.guid, field.guid)) {
                      activeZone.value = existingField.guid;
                      editField.value = existingField;
                      return;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          };
          var onAsideClose = () => {
            if (!canCloseAside()) {
              return;
            }
            activeZone.value = "";
            editField.value = null;
            sectionAsideSettings.value = null;
          };
          var onFieldEditUpdate = value => {
            editField.value = value;
            var _iterator7 = _createForOfIteratorHelper(sections),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var section = _step7.value;
                if (section.fields) {
                  var existingFieldIndex = section.fields.findIndex(f => areEqual(f.guid, value.guid));
                  if (existingFieldIndex !== -1) {
                    section.fields.splice(existingFieldIndex, 1, value);
                    return;
                  }
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          };
          var onFieldDelete = function () {
            var _ref2 = _asyncToGenerator(function* (guid) {
              if (!(yield confirmDelete("field"))) {
                return;
              }
              deleteField(guid);
            });
            return function onFieldDelete(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var deleteField = guid => {
            var _editField$value$guid, _editField$value;
            var _iterator8 = _createForOfIteratorHelper(sections),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _section$visibilityRu, _section$visibilityRu2;
                var section = _step8.value;
                if (section.fields) {
                  var existingFieldIndex = section.fields.findIndex(f => areEqual(f.guid, guid));
                  if (existingFieldIndex !== -1) {
                    section.fields.splice(existingFieldIndex, 1);
                  }
                  var _iterator9 = _createForOfIteratorHelper(section.fields),
                    _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var _field$visibilityRule, _field$visibilityRule2;
                      var field = _step9.value;
                      if ((_field$visibilityRule = field.visibilityRule) !== null && _field$visibilityRule !== void 0 && (_field$visibilityRule2 = _field$visibilityRule.rules) !== null && _field$visibilityRule2 !== void 0 && _field$visibilityRule2.length) {
                        field.visibilityRule.rules = field.visibilityRule.rules.filter(rule => rule.attributeGuid !== guid);
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
                if ((_section$visibilityRu = section.visibilityRule) !== null && _section$visibilityRu !== void 0 && (_section$visibilityRu2 = _section$visibilityRu.rules) !== null && _section$visibilityRu2 !== void 0 && _section$visibilityRu2.length) {
                  section.visibilityRule.rules = section.visibilityRule.rules.filter(rule => rule.attributeGuid !== guid);
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
            if (areEqual(guid, (_editField$value$guid = (_editField$value = editField.value) === null || _editField$value === void 0 ? void 0 : _editField$value.guid) !== null && _editField$value$guid !== void 0 ? _editField$value$guid : null)) {
              closeAside();
            }
          };
          var onSectionEditUpdate = value => {
            sectionAsideSettings.value = value;
            var _iterator10 = _createForOfIteratorHelper(sections),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var section = _step10.value;
                if (areEqual(section.guid, value.guid)) {
                  section.title = value.title;
                  section.description = value.description;
                  section.showHeadingSeparator = value.showHeadingSeparator;
                  section.type = value.type;
                  section.visibilityRule = value.visibilityRule;
                  return;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          };
          var onSectionDelete = function () {
            var _ref3 = _asyncToGenerator(function* (guid) {
              var _sectionAsideSettings, _sectionAsideSettings2;
              if (!(yield confirmDelete("section"))) {
                return;
              }
              var existingSectionIndex = sections.findIndex(s => areEqual(s.guid, guid));
              if (existingSectionIndex !== -1) {
                var section = sections[existingSectionIndex];
                if (section.fields) {
                  var guids = section.fields.map(field => field.guid);
                  var _iterator11 = _createForOfIteratorHelper(guids),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _guid = _step11.value;
                      deleteField(_guid);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                }
                sections.splice(existingSectionIndex, 1);
              }
              if (areEqual(guid, (_sectionAsideSettings = (_sectionAsideSettings2 = sectionAsideSettings.value) === null || _sectionAsideSettings2 === void 0 ? void 0 : _sectionAsideSettings2.guid) !== null && _sectionAsideSettings !== void 0 ? _sectionAsideSettings : null)) {
                closeAside();
              }
            });
            return function onSectionDelete(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          var onEditPersonEntryUpdate = value => {
            personEntryAsideSettings.value = value;
          };
          var onFormHeaderSave = () => {
            formHeaderContent.value = formHeaderEditContent.value;
            closeAside();
          };
          var onFormFooterSave = () => {
            formFooterContent.value = formFooterEditContent.value;
            closeAside();
          };
          var onFieldEditValidationChanged = errors => {
            if (showFieldAside.value) {
              emit("validationChanged", errors);
            }
          };
          var onSectionValidationChanged = errors => {
            if (showSectionAside.value) {
              emit("validationChanged", errors);
            }
          };
          var onPersonEntryValidationChanged = errors => {
            if (showPersonEntryAside.value) {
              emit("validationChanged", errors);
            }
          };
          watch(bodyElement, () => {
            var _bodyElement$value, _bodyElement$value2, _bodyElement$value3, _bodyElement$value4;
            sectionDragSourceOptions.mirrorContainer = (_bodyElement$value = bodyElement.value) !== null && _bodyElement$value !== void 0 ? _bodyElement$value : undefined;
            sectionReorderDragSourceOptions.mirrorContainer = (_bodyElement$value2 = bodyElement.value) !== null && _bodyElement$value2 !== void 0 ? _bodyElement$value2 : undefined;
            fieldDragSourceOptions.mirrorContainer = (_bodyElement$value3 = bodyElement.value) !== null && _bodyElement$value3 !== void 0 ? _bodyElement$value3 : undefined;
            fieldReorderDragSourceOptions.mirrorContainer = (_bodyElement$value4 = bodyElement.value) !== null && _bodyElement$value4 !== void 0 ? _bodyElement$value4 : undefined;
          });
          watch(() => props.templateOverrides, (newValue, oldValue) => {
            var _newValue$isPersonEnt, _oldValue$isPersonEnt;
            if (((_newValue$isPersonEnt = newValue === null || newValue === void 0 ? void 0 : newValue.isPersonEntryConfigured) !== null && _newValue$isPersonEnt !== void 0 ? _newValue$isPersonEnt : false) !== ((_oldValue$isPersonEnt = oldValue === null || oldValue === void 0 ? void 0 : oldValue.isPersonEntryConfigured) !== null && _oldValue$isPersonEnt !== void 0 ? _oldValue$isPersonEnt : false)) {
              if (isPersonEntryActive.value) {
                closeAside();
              }
            }
          });
          watch([sections, formHeaderContent, formFooterContent, generalAsideSettings, personEntryAsideSettings], () => {
            var newValue = {
              allowPersonEntry: generalAsideSettings.value.hasPersonEntry,
              campusSetFrom: generalAsideSettings.value.campusSetFrom,
              footerContent: formFooterContent.value,
              headerContent: formHeaderContent.value,
              personEntry: personEntryAsideSettings.value,
              sections: sections
            };
            emit("update:modelValue", newValue);
          });
          watch(() => props.submit, () => {
            if (props.submit) {
              canCloseAside();
            }
          });
          return {
            activeZone,
            availableFieldTypes,
            bodyElement,
            editField,
            existingFields,
            fieldDragSourceOptions,
            fieldDragTargetId: fieldDragSourceOptions.id,
            fieldEditAsideComponentInstance,
            fieldReorderDragSourceOptions,
            formFooterContent,
            formFooterEditContent,
            formHeaderContent,
            formHeaderEditContent,
            generalAsideComponentInstance,
            generalAsideSettings,
            hasPersonEntry,
            isFormFooterActive,
            isFormHeaderActive,
            isPersonEntryActive,
            isPersonEntryForced,
            onAsideClose,
            onConfigureField,
            onConfigureFormHeader,
            onConfigureFormFooter,
            onConfigurePersonEntry,
            onConfigureSection,
            onFieldEditUpdate,
            onEditPersonEntryUpdate,
            onSectionEditUpdate,
            onFieldDelete,
            onFieldEditValidationChanged,
            onFormFooterSave,
            onFormHeaderSave,
            onPersonEntryValidationChanged,
            onSectionDelete,
            onSectionValidationChanged,
            personEntryAsideSettings,
            personEntryEditAsideComponentInstance,
            personEntryZoneIconClass,
            sectionAsideSettings,
            sectionDragSourceOptions,
            sectionDragTargetId: sectionDragSourceOptions.id,
            sectionReorderDragSourceOptions,
            sectionTypeOptions,
            sections,
            showFieldAside,
            showGeneralAside,
            showPersonEntryAside,
            showSectionAside,
            templateFormFooterContent,
            templateFormHeaderContent
          };
        },
        template: "\n<div ref=\"bodyElement\" class=\"form-builder-grow\">\n\n    <GeneralAside v-if=\"showGeneralAside\"\n        v-model=\"generalAsideSettings\"\n        ref=\"generalAsideComponentInstance\"\n        :isPersonEntryForced=\"isPersonEntryForced\"\n        :fieldTypes=\"availableFieldTypes\"\n        :sectionDragOptions=\"sectionDragSourceOptions\"\n        :fieldDragOptions=\"fieldDragSourceOptions\" />\n\n    <FieldEditAside v-else-if=\"showFieldAside\"\n        :modelValue=\"editField\"\n        ref=\"fieldEditAsideComponentInstance\"\n        :fieldTypes=\"availableFieldTypes\"\n        :formFields=\"existingFields\"\n        @update:modelValue=\"onFieldEditUpdate\"\n        @close=\"onAsideClose\"\n        @validationChanged=\"onFieldEditValidationChanged\" />\n\n    <SectionEditAside v-else-if=\"showSectionAside\"\n        :modelValue=\"sectionAsideSettings\"\n        ref=\"sectionEditAsideComponentInstance\"\n        :formFields=\"existingFields\"\n        @update:modelValue=\"onSectionEditUpdate\"\n        @close=\"onAsideClose\"\n        @validationChanged=\"onSectionValidationChanged\" />\n\n    <PersonEntryEditAside v-else-if=\"showPersonEntryAside\"\n        :modelValue=\"personEntryAsideSettings\"\n        ref=\"personEntryEditAsideComponentInstance\"\n        @update:modelValue=\"onEditPersonEntryUpdate\"\n        @close=\"onAsideClose\"\n        @validationChanged=\"onPersonEntryValidationChanged\" />\n\n\n    <div class=\"form-layout\">\n        <FormContentZone v-if=\"templateFormHeaderContent\" :modelValue=\"templateFormHeaderContent\" placeholder=\"\" iconCssClass=\"\" />\n\n        <FormContentZone :modelValue=\"formHeaderContent\" :isActive=\"isFormHeaderActive\" @configure=\"onConfigureFormHeader\" placeholder=\"Form Header\" />\n\n        <ConfigurableZone v-if=\"hasPersonEntry\" :modelValue=\"isPersonEntryActive\" :iconCssClass=\"personEntryZoneIconClass\" @configure=\"onConfigurePersonEntry\">\n            <div class=\"zone-body\">\n                <div class=\"text-center text-muted\">Person Entry Form</div>\n            </div>\n        </ConfigurableZone>\n\n        <div class=\"form-layout-body\" v-drag-target=\"sectionDragTargetId\" v-drag-source=\"sectionReorderDragSourceOptions\" v-drag-target:2=\"sectionReorderDragSourceOptions.id\">\n            <SectionZone v-for=\"section in sections\"\n                :key=\"section.guid\"\n                v-model=\"section\"\n                :activeZone=\"activeZone\"\n                :dragTargetId=\"fieldDragTargetId\"\n                :reorderDragOptions=\"fieldReorderDragSourceOptions\"\n                :sectionTypeOptions=\"sectionTypeOptions\"\n                @configure=\"onConfigureSection(section)\"\n                @configureField=\"onConfigureField\"\n                @delete=\"onSectionDelete\"\n                @deleteField=\"onFieldDelete\">\n            </SectionZone>\n        </div>\n\n        <FormContentZone :modelValue=\"formFooterContent\" :isActive=\"isFormFooterActive\" @configure=\"onConfigureFormFooter\" placeholder=\"Form Footer\" />\n\n        <FormContentZone v-if=\"templateFormFooterContent\" :modelValue=\"templateFormFooterContent\" placeholder=\"\" iconCssClass=\"\" />\n    </div>\n</div>\n\n<FormContentModal v-model=\"formHeaderEditContent\" v-model:isVisible=\"isFormHeaderActive\" title=\"Form Header\" @save=\"onFormHeaderSave\" />\n\n<FormContentModal v-model=\"formFooterEditContent\" v-model:isVisible=\"isFormFooterActive\" title=\"Form Footer\" @save=\"onFormFooterSave\" />\n"
      });

      var GeneralSettings = defineComponent({
        name: "Workflow.FormBuilderDetail.GeneralSettings",
        components: {
          NotificationBox,
          CategoryPicker,
          CheckBox,
          DateTimePicker,
          DropDownList,
          EmailSource,
          InlineSwitch,
          SectionContainer,
          TextBox,
          TransitionVerticalCollapse
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          templateOverrides: {
            type: Object
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$nam, _props$modelValue$des, _props$modelValue$tem, _props$modelValue$cat, _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$isL;
          var emit = _ref.emit;
          var sources = useFormSources();
          var name = ref((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var description = ref((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var template = ref((_props$modelValue$tem = props.modelValue.template) !== null && _props$modelValue$tem !== void 0 ? _props$modelValue$tem : "");
          var category = ref((_props$modelValue$cat = props.modelValue.category) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : null);
          var entryStarts = ref((_props$modelValue$ent = props.modelValue.entryStarts) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : "");
          var entryEnds = ref((_props$modelValue$ent2 = props.modelValue.entryEnds) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "");
          var isLoginRequired = ref((_props$modelValue$isL = props.modelValue.isLoginRequired) !== null && _props$modelValue$isL !== void 0 ? _props$modelValue$isL : false);
          var isLoginRequiredForced = computed(() => {
            var _props$templateOverri, _props$templateOverri2;
            return (_props$templateOverri = (_props$templateOverri2 = props.templateOverrides) === null || _props$templateOverri2 === void 0 ? void 0 : _props$templateOverri2.isLoginRequiredConfigured) !== null && _props$templateOverri !== void 0 ? _props$templateOverri : false;
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$nam2, _props$modelValue$des2, _props$modelValue$tem2, _props$modelValue$cat2, _props$modelValue$ent3, _props$modelValue$ent4;
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(template, (_props$modelValue$tem2 = props.modelValue.template) !== null && _props$modelValue$tem2 !== void 0 ? _props$modelValue$tem2 : "");
            updateRefValue(category, (_props$modelValue$cat2 = props.modelValue.category) !== null && _props$modelValue$cat2 !== void 0 ? _props$modelValue$cat2 : null);
            updateRefValue(entryStarts, (_props$modelValue$ent3 = props.modelValue.entryStarts) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "");
            updateRefValue(entryEnds, (_props$modelValue$ent4 = props.modelValue.entryEnds) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : "");
          });
          watch([name, description, template, category, isLoginRequired, entryStarts, entryEnds], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              name: name.value,
              description: description.value,
              template: template.value,
              category: category.value,
              isLoginRequired: isLoginRequired.value,
              entryStarts: entryStarts.value,
              entryEnds: entryEnds.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            category,
            description,
            entryStarts,
            entryEnds,
            isLoginRequired,
            isLoginRequiredForced,
            name,
            template,
            templateOptions: sources.formTemplateOptions,
            workflowTypeEntityTypeGuid: EntityType.WorkflowType
          };
        },
        template: "\n<SectionContainer title=\"General Settings\"\n    description=\"Update the general settings for the form below.\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div>\n                <TextBox v-model=\"name\"\n                    label=\"Form Name\"\n                    rules=\"required\" />\n\n                <TextBox v-model=\"description\"\n                    label=\"Description\"\n                    textMode=\"multiline\" />\n\n                <DropDownList v-model=\"template\"\n                    label=\"Template\"\n                    :items=\"templateOptions\" />\n\n                <CategoryPicker v-model=\"category\"\n                    label=\"Category\"\n                    rules=\"required\"\n                    :entityTypeGuid=\"workflowTypeEntityTypeGuid\" />\n            </div>\n        </div>\n    </div>\n\n    <CheckBox v-if=\"!isLoginRequiredForced\" v-model=\"isLoginRequired\"\n        label=\"Is Login Required\"\n        help=\"Determines if a person needs to be logged in to complete the form.\" />\n\n    <NotificationBox v-else alertType=\"info\">\n        The template has enforced the login required setting.\n    </NotificationBox>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <DateTimePicker v-model=\"entryStarts\"\n                label=\"Form Entry Starts\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <DateTimePicker v-model=\"entryEnds\"\n                label=\"Form Entry Ends\" />\n        </div>\n    </div>\n</SectionContainer>\n"
      });

      var SettingsTab = defineComponent({
        name: "Workflow.FormBuilderDetail.SettingsTab",
        components: {
          NotificationBox,
          GeneralSettings,
          CompletionSettings,
          RockForm
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          completion: {
            type: Object,
            required: true
          },
          templateOverrides: {
            type: Object
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "update:completion", "validationChanged"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var generalSettings = useVModelPassthrough(props, "modelValue", emit);
          var completionSettings = useVModelPassthrough(props, "completion", emit);
          var formSubmit = ref(false);
          var isCompletionForced = computed(() => {
            var _props$templateOverri, _props$templateOverri2;
            return (_props$templateOverri = (_props$templateOverri2 = props.templateOverrides) === null || _props$templateOverri2 === void 0 ? void 0 : _props$templateOverri2.isCompletionActionConfigured) !== null && _props$templateOverri !== void 0 ? _props$templateOverri : false;
          });
          var onValidationChanged = errors => {
            emit("validationChanged", errors);
          };
          watch(() => props.submit, () => {
            if (props.submit) {
              formSubmit.value = true;
            }
          });
          return {
            completionSettings,
            formSubmit,
            generalSettings,
            isCompletionForced,
            onValidationChanged
          };
        },
        template: "\n<div class=\"form-builder-scroll\">\n    <div class=\"panel-body\">\n        <RockForm v-model:submit=\"formSubmit\" @validationChanged=\"onValidationChanged\">\n            <GeneralSettings v-model=\"generalSettings\" :templateOverrides=\"templateOverrides\" />\n\n            <CompletionSettings v-if=\"!isCompletionForced\" v-model=\"completionSettings\" />\n            <NotificationBox v-else alertType=\"info\">\n                <h4 class=\"alert-heading\">Completion Settings</h4>\n                <p>\n                    The completion action is defined on the template and cannot be changed.\n                </p>\n            </NotificationBox>\n        </RockForm>\n    </div>\n</div>\n"
      });

      var formBuilderDetail = exports('default', defineComponent({
        name: "WorkFlow.FormBuilderDetail",
        components: {
          NotificationBox,
          CommunicationsTab,
          FormBuilderTab,
          Panel,
          RockButton,
          SettingsTab
        },
        setup() {
          var _config$form, _form$confirmationEma, _form$notificationEma, _form$general, _form$completion, _config$sources2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var form = (_config$form = config.form) !== null && _config$form !== void 0 ? _config$form : {};
          var isFormDirty = ref(false);
          var selectedTab = ref(0);
          var recipientOptions = ref([]);
          var communicationsViewModel = ref({
            confirmationEmail: (_form$confirmationEma = form.confirmationEmail) !== null && _form$confirmationEma !== void 0 ? _form$confirmationEma : {},
            notificationEmail: (_form$notificationEma = form.notificationEmail) !== null && _form$notificationEma !== void 0 ? _form$notificationEma : {}
          });
          var generalViewModel = ref((_form$general = form.general) !== null && _form$general !== void 0 ? _form$general : {});
          var blockTitle = computed(() => {
            var _ref, _generalViewModel$val;
            return (_ref = ((_generalViewModel$val = generalViewModel.value) === null || _generalViewModel$val === void 0 ? void 0 : _generalViewModel$val.name) + " Form") !== null && _ref !== void 0 ? _ref : "Workflow Form Builder";
          });
          var completionViewModel = ref((_form$completion = form.completion) !== null && _form$completion !== void 0 ? _form$completion : {});
          var builderViewModel = ref({
            allowPersonEntry: form.allowPersonEntry,
            campusSetFrom: form.campusSetFrom,
            footerContent: form.footerContent,
            headerContent: form.headerContent,
            personEntry: form.personEntry,
            sections: form.sections
          });
          var blockError = ref("");
          var formSubmit = ref(false);
          var communicationsValidationErrors = ref([]);
          var formBuilderValidationErrors = ref([]);
          var settingsValidationErrors = ref([]);
          var isFormBuilderTabSelected = computed(() => selectedTab.value === 0);
          var isCommunicationsTabSelected = computed(() => selectedTab.value === 1);
          var isSettingsTabSelected = computed(() => selectedTab.value === 2);
          var formBuilderContainerStyle = computed(() => {
            return {
              display: isFormBuilderTabSelected.value ? "flex" : "none"
            };
          });
          var communicationsContainerStyle = computed(() => {
            return {
              display: isCommunicationsTabSelected.value ? "flex" : "none"
            };
          });
          var settingsContainerStyle = computed(() => {
            return {
              display: isSettingsTabSelected.value ? "flex" : "none"
            };
          });
          var selectedTemplate = computed(() => {
            var _config$sources, _config$sources$formT;
            var matches = (_config$sources = config.sources) === null || _config$sources === void 0 ? void 0 : (_config$sources$formT = _config$sources.formTemplateOptions) === null || _config$sources$formT === void 0 ? void 0 : _config$sources$formT.filter(t => {
              var _form$general2;
              return areEqual(t.value, (_form$general2 = form.general) === null || _form$general2 === void 0 ? void 0 : _form$general2.template);
            });
            return matches && matches.length > 0 ? matches[0] : null;
          });
          var onFormBuilderTabClick = () => {
            selectedTab.value = 0;
          };
          var onCommunicationsTabClick = () => {
            selectedTab.value = 1;
          };
          var onSettingsTabClick = () => {
            selectedTab.value = 2;
          };
          var onSaveClick = function () {
            var _ref2 = _asyncToGenerator(function* () {
              formSubmit.value = true;
              nextTick(() => formSubmit.value = false);
              if (formBuilderValidationErrors.value.length > 0) {
                onFormBuilderTabClick();
                return;
              }
              if (communicationsValidationErrors.value.length > 0) {
                onCommunicationsTabClick();
                return;
              }
              if (settingsValidationErrors.value.length > 0) {
                onSettingsTabClick();
                return;
              }
              var result = yield invokeBlockAction("SaveForm", {
                formGuid: config.formGuid,
                formSettings: form
              });
              if (!result.isSuccess) {
                var _result$errorMessage;
                alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Failed to save.");
              } else {
                isFormDirty.value = false;
              }
            });
            return function onSaveClick() {
              return _ref2.apply(this, arguments);
            };
          }();
          var updateRecipientOptions = () => {
            var options = [];
            if (config.otherAttributes) {
              var _iterator = _createForOfIteratorHelper(config.otherAttributes),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var attribute = _step.value;
                  if (!attribute.guid || !attribute.fieldTypeGuid || !attribute.name) {
                    continue;
                  }
                  if (areEqual(attribute.fieldTypeGuid, FieldType.Person) || areEqual(attribute.fieldTypeGuid, FieldType.Email)) {
                    options.push({
                      value: attribute.guid,
                      text: attribute.name
                    });
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            if (form.sections) {
              var _iterator2 = _createForOfIteratorHelper(form.sections),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var section = _step2.value;
                  if (!section.fields) {
                    continue;
                  }
                  var _iterator3 = _createForOfIteratorHelper(section.fields),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var field = _step3.value;
                      if (areEqual(field.fieldTypeGuid, FieldType.Person) || areEqual(field.fieldTypeGuid, FieldType.Email)) {
                        options.push({
                          value: field.guid,
                          text: field.name
                        });
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            options.sort((a, b) => {
              var _a$text, _b$text, _a$text2, _b$text2;
              if (((_a$text = a.text) !== null && _a$text !== void 0 ? _a$text : "") < ((_b$text = b.text) !== null && _b$text !== void 0 ? _b$text : "")) {
                return -1;
              } else if (((_a$text2 = a.text) !== null && _a$text2 !== void 0 ? _a$text2 : "") > ((_b$text2 = b.text) !== null && _b$text2 !== void 0 ? _b$text2 : "")) {
                return 1;
              } else {
                return 0;
              }
            });
            recipientOptions.value = options;
          };
          var onBeforeUnload = event => {
            event.preventDefault();
            event.returnValue = "";
          };
          var onCommunicationsValidationChanged = errors => {
            communicationsValidationErrors.value = errors;
          };
          var onFormBuilderValidationChanged = errors => {
            formBuilderValidationErrors.value = errors;
          };
          var onSettingsValidationChanged = errors => {
            settingsValidationErrors.value = errors;
          };
          watch([builderViewModel, communicationsViewModel, generalViewModel, completionViewModel], () => {
            form.allowPersonEntry = builderViewModel.value.allowPersonEntry;
            form.campusSetFrom = builderViewModel.value.campusSetFrom;
            form.footerContent = builderViewModel.value.footerContent;
            form.headerContent = builderViewModel.value.headerContent;
            form.personEntry = builderViewModel.value.personEntry;
            form.sections = builderViewModel.value.sections;
            form.general = generalViewModel.value;
            form.completion = completionViewModel.value;
            form.confirmationEmail = communicationsViewModel.value.confirmationEmail;
            form.notificationEmail = communicationsViewModel.value.notificationEmail;
            updateRecipientOptions();
            isFormDirty.value = true;
          });
          watch(isFormDirty, () => {
            window.removeEventListener("beforeunload", onBeforeUnload);
            if (isFormDirty.value) {
              window.addEventListener("beforeunload", onBeforeUnload);
            }
          });
          provideFormSources((_config$sources2 = config.sources) !== null && _config$sources2 !== void 0 ? _config$sources2 : {});
          updateRecipientOptions();
          if (!config.formGuid || !config.form) {
            blockError.value = "That form does not exist or it can't be edited.";
          }
          var queryString = new URLSearchParams(window.location.search.toLowerCase());
          if (queryString.has("tab")) {
            var tab = queryString.get("tab");
            if (tab === "communications") {
              selectedTab.value = 1;
            } else if (tab === "settings") {
              selectedTab.value = 2;
            }
          }
          return {
            analyticsPageUrl: config.analyticsPageUrl,
            blockError,
            builderViewModel,
            communicationsContainerStyle,
            communicationsValidationErrors,
            communicationsViewModel,
            completionViewModel,
            formBuilderContainerStyle,
            formSubmit,
            isCommunicationsTabSelected,
            isFormBuilderTabSelected,
            isFormDirty,
            isSettingsTabSelected,
            settingsContainerStyle,
            generalViewModel,
            blockTitle,
            submissionsPageUrl: config.submissionsPageUrl,
            onCommunicationsTabClick,
            onCommunicationsValidationChanged,
            onFormBuilderTabClick,
            onFormBuilderValidationChanged,
            onSaveClick,
            onSettingsTabClick,
            onSettingsValidationChanged,
            recipientOptions,
            selectedTemplate
          };
        },
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\">\n    {{ blockError }}\n</NotificationBox>\n\n<Panel v-else type=\"block\" hasFullscreen :title=\"blockTitle\" titleIconCssClass=\"fa fa-poll-h\">\n    <template #default>\n\n        <div ref=\"bodyElement\" class=\"panel-flex-fill-body styled-scroll\">\n            <div class=\"panel-toolbar panel-toolbar-shadow\">\n                <ul class=\"nav nav-pills nav-sm\">\n                    <li role=\"presentation\"><a :href=\"submissionsPageUrl\">Submissions</a></li>\n                    <li :class=\"{ active: isFormBuilderTabSelected }\" role=\"presentation\"><a href=\"#\" @click.prevent=\"onFormBuilderTabClick\">Form Builder</a></li>\n                    <li :class=\"{ active: isCommunicationsTabSelected }\" role=\"presentation\"><a href=\"#\" @click.prevent=\"onCommunicationsTabClick\">Communications</a></li>\n                    <li :class=\"{ active: isSettingsTabSelected }\" role=\"presentation\"><a href=\"#\" @click.prevent=\"onSettingsTabClick\">Settings</a></li>\n                    <li role=\"presentation\"><a :href=\"analyticsPageUrl\">Analytics</a></li>\n                </ul>\n\n                <RockButton btnType=\"primary\" btnSize=\"sm\" :disabled=\"!isFormDirty\" @click=\"onSaveClick\">Save</RockButton>\n            </div>\n\n            <div class=\"form-builder-container form-builder-grow\" :style=\"formBuilderContainerStyle\">\n                <FormBuilderTab v-model=\"builderViewModel\"\n                    :templateOverrides=\"selectedTemplate\"\n                    :submit=\"formSubmit\"\n                    @validationChanged=\"onFormBuilderValidationChanged\" />\n            </div>\n\n            <div class=\"communications-container form-builder-grow\" :style=\"communicationsContainerStyle\">\n                <CommunicationsTab v-model=\"communicationsViewModel\"\n                    :recipientOptions=\"recipientOptions\"\n                    :templateOverrides=\"selectedTemplate\"\n                    :submit=\"formSubmit\"\n                    @validationChanged=\"onCommunicationsValidationChanged\" />\n            </div>\n\n            <div class=\"settings-container form-builder-grow\" :style=\"settingsContainerStyle\">\n                <SettingsTab v-model=\"generalViewModel\"\n                    v-model:completion=\"completionViewModel\"\n                    :templateOverrides=\"selectedTemplate\"\n                    :submit=\"formSubmit\"\n                    @validationChanged=\"onSettingsValidationChanged\" />\n            </div>\n        </div>\n    </template>\n</Panel>\n"
      }));

    })
  };
}));
//# sourceMappingURL=formBuilderDetail.js.map
