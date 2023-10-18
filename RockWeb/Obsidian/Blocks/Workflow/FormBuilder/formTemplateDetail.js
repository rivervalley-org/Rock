System.register(['vue', '@Obsidian/Controls/panel', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/auditDetail', '@Obsidian/Controls/rockButton', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/component', './Shared/completionSettings', './Shared/confirmationEmail', './Shared/personEntrySettings', '@Obsidian/Controls/sectionContainer'], (function (exports) {
  'use strict';
  var inject, provide, defineComponent, ref, computed, watch, Panel, RockForm, NotificationBox, AuditDetail, RockButton, EntityType, useConfigurationValues, useInvokeBlockAction, areEqual, emptyGuid, CheckBox, TextBox, updateRefValue, CompletionSettings, ConfirmationEmail, PersonEntrySettings, SectionContainer;
  return {
    setters: [function (module) {
      inject = module.inject;
      provide = module.provide;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      CompletionSettings = module["default"];
    }, function (module) {
      ConfirmationEmail = module["default"];
    }, function (module) {
      PersonEntrySettings = module["default"];
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

      var sourcesKey = Symbol();
      function provideSources(sources) {
        provide(sourcesKey, sources);
      }
      function useSources() {
        var _inject;
        return (_inject = inject(sourcesKey)) !== null && _inject !== void 0 ? _inject : {};
      }

      var recipientOptions = [{
        value: "00000000-0000-0000-0000-000000000001",
        text: "Person"
      }, {
        value: "00000000-0000-0000-0000-000000000002",
        text: "Spouse"
      }];
      var EditPanel = defineComponent({
        name: "Workflow.FormTemplateDetail",
        components: {
          AuditDetail,
          CheckBox,
          CompletionSettings,
          ConfirmationEmail,
          Panel,
          PersonEntrySettings,
          RockButton,
          RockForm,
          SectionContainer,
          TextBox
        },
        props: {
          modelValue: {
            type: Object,
            default: {}
          }
        },
        emits: ["update:modelValue"],
        setup(props, _ref) {
          var _props$modelValue$nam, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$isL, _props$modelValue$for, _props$modelValue$for2, _props$modelValue$all, _props$modelValue$per, _props$modelValue$con;
          var emit = _ref.emit;
          var sources = useSources();
          var name = ref((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var description = ref((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var isActive = ref((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : true);
          var isLoginRequired = ref((_props$modelValue$isL = props.modelValue.isLoginRequired) !== null && _props$modelValue$isL !== void 0 ? _props$modelValue$isL : false);
          var formHeader = ref((_props$modelValue$for = props.modelValue.formHeader) !== null && _props$modelValue$for !== void 0 ? _props$modelValue$for : "");
          var formFooter = ref((_props$modelValue$for2 = props.modelValue.formFooter) !== null && _props$modelValue$for2 !== void 0 ? _props$modelValue$for2 : "");
          var allowPersonEntry = ref((_props$modelValue$all = props.modelValue.allowPersonEntry) !== null && _props$modelValue$all !== void 0 ? _props$modelValue$all : false);
          var personEntry = ref((_props$modelValue$per = props.modelValue.personEntry) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : {});
          var confirmationEmail = ref((_props$modelValue$con = props.modelValue.confirmationEmail) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : {});
          var internalCompletionAction = ref(props.modelValue.completionAction);
          var completionAction = computed({
            get() {
              var _internalCompletionAc;
              return (_internalCompletionAc = internalCompletionAction.value) !== null && _internalCompletionAc !== void 0 ? _internalCompletionAc : {};
            },
            set(value) {
              if (completionActionEnabled.value) {
                updateRefValue(internalCompletionAction, value);
              }
            }
          });
          var completionActionEnabled = computed({
            get() {
              return !!internalCompletionAction.value;
            },
            set(value) {
              updateRefValue(internalCompletionAction, value ? {} : null);
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$nam2, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$isL2, _props$modelValue$for3, _props$modelValue$for4, _props$modelValue$all2, _props$modelValue$per2, _props$modelValue$con2;
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : true);
            updateRefValue(isLoginRequired, (_props$modelValue$isL2 = props.modelValue.isLoginRequired) !== null && _props$modelValue$isL2 !== void 0 ? _props$modelValue$isL2 : false);
            updateRefValue(formHeader, (_props$modelValue$for3 = props.modelValue.formHeader) !== null && _props$modelValue$for3 !== void 0 ? _props$modelValue$for3 : "");
            updateRefValue(formFooter, (_props$modelValue$for4 = props.modelValue.formFooter) !== null && _props$modelValue$for4 !== void 0 ? _props$modelValue$for4 : "");
            updateRefValue(allowPersonEntry, (_props$modelValue$all2 = props.modelValue.allowPersonEntry) !== null && _props$modelValue$all2 !== void 0 ? _props$modelValue$all2 : false);
            updateRefValue(personEntry, (_props$modelValue$per2 = props.modelValue.personEntry) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : {});
            updateRefValue(confirmationEmail, (_props$modelValue$con2 = props.modelValue.confirmationEmail) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : {});
            updateRefValue(internalCompletionAction, props.modelValue.completionAction);
          });
          watch([name, description, isActive, isLoginRequired, formHeader, formFooter, allowPersonEntry, personEntry, confirmationEmail, internalCompletionAction], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              name: name.value,
              description: description.value,
              isActive: isActive.value,
              isLoginRequired: isLoginRequired.value,
              formHeader: formHeader.value,
              formFooter: formFooter.value,
              allowPersonEntry: allowPersonEntry.value,
              personEntry: personEntry.value,
              confirmationEmail: confirmationEmail.value,
              completionAction: internalCompletionAction.value
            });
            emit("update:modelValue", newValue);
          });
          return {
            addressTypeOptions: sources.addressTypeOptions,
            allowPersonEntry,
            campusStatusOptions: sources.campusStatusOptions,
            campusTypeOptions: sources.campusTypeOptions,
            completionAction,
            completionActionEnabled,
            confirmationEmail,
            connectionStatusOptions: sources.connectionStatusOptions,
            description,
            formFooter,
            formHeader,
            isActive,
            isLoginRequired,
            name,
            personEntry,
            recipientOptions,
            recordStatusOptions: sources.recordStatusOptions,
            sourceTemplateOptions: sources.emailTemplateOptions
          };
        },
        template: "\n<div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\"\n                label=\"Active\" />\n        </div>\n    </div>\n\n    <TextBox v-model=\"description\"\n        label=\"Description\"\n        textMode=\"multiline\" />\n\n    <CheckBox v-model=\"isLoginRequired\"\n        label=\"Is Login Required\"\n        help=\"Determines if a person needs to be logged in to complete this form.\" />\n\n    <SectionContainer title=\"Form Headers and Footers\"\n        description=\"The headers and footers below will be displayed on all pages of the forms that use this template.\">\n        <TextBox v-model=\"formHeader\"\n            label=\"Form Header\"\n            textMode=\"multiline\" />\n\n        <TextBox v-model=\"formFooter\"\n            label=\"Form Footer\"\n            textMode=\"multiline\" />\n    </SectionContainer>\n\n    <SectionContainer v-model=\"allowPersonEntry\"\n        toggleText=\"Enable\"\n        title=\"Person Entry Settings\"\n        description=\"These settings will lock the forms person entry settings.\">\n        <PersonEntrySettings v-model=\"personEntry\"\n            :recordStatusOptions=\"recordStatusOptions\"\n            :connectionStatusOptions=\"connectionStatusOptions\"\n            :campusTypeOptions=\"campusTypeOptions\"\n            :campusStatusOptions=\"campusStatusOptions\"\n            :addressTypeOptions=\"addressTypeOptions\" />\n    </SectionContainer>\n\n    <ConfirmationEmail v-model=\"confirmationEmail\"\n        :recipientOptions=\"recipientOptions\"\n        :sourceTemplateOptions=\"sourceTemplateOptions\" />\n\n    <CompletionSettings v-model=\"completionAction\" v-model:enabled=\"completionActionEnabled\" hasEnable />\n</div>\n"
      });

      var ViewPanel = defineComponent({
        name: "Workflow.FormTemplateDetail",
        components: {},
        props: {
          modelValue: {
            type: Object,
            default: {}
          }
        },
        setup(props) {
          var _props$modelValue$nam, _props$modelValue$des, _props$modelValue$use;
          var name = ref((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var description = ref((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var usedByWorkflowTypes = ref((_props$modelValue$use = props.modelValue.usedBy) !== null && _props$modelValue$use !== void 0 ? _props$modelValue$use : []);
          watch(() => props.modelValue, () => {
            var _props$modelValue$nam2, _props$modelValue$des2, _props$modelValue$use2;
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(usedByWorkflowTypes, (_props$modelValue$use2 = props.modelValue.usedBy) !== null && _props$modelValue$use2 !== void 0 ? _props$modelValue$use2 : []);
          });
          return {
            description,
            name,
            usedByWorkflowTypes
          };
        },
        template: "\n<fieldset>\n    <dl>\n        <dt>Name</dt>\n        <dd>{{ name }}</dd>\n\n        <template v-if=\"description\">\n            <dt>Description</dt>\n            <dd>{{ description }}</dd>\n        </template>\n\n        <dt>Used By</dt>\n        <dd>\n            <ul>\n                <li v-for=\"workflowType in usedByWorkflowTypes\" :key=\"workflowType.value\">{{ workflowType.text }}</li>\n            </ul>\n        </dd>\n    </dl>\n</fieldset>\n"
      });

      var formTemplateDetail = exports('default', defineComponent({
        name: "WorkFlow.FormTemplateDetail",
        components: {
          NotificationBox,
          AuditDetail,
          EditPanel,
          Panel,
          RockButton,
          RockForm,
          ViewPanel
        },
        setup() {
          var _config$templateGuid, _config$sources, _config$templateGuid5;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var templateDetail = ref(config.template);
          var templateEditDetail = ref({});
          var isEditable = ref(config.isEditable);
          var isEditMode = ref(areEqual((_config$templateGuid = config.templateGuid) !== null && _config$templateGuid !== void 0 ? _config$templateGuid : "", emptyGuid));
          var isInactive = computed(() => {
            var _templateDetail$value, _templateDetail$value2;
            return !((_templateDetail$value = (_templateDetail$value2 = templateDetail.value) === null || _templateDetail$value2 === void 0 ? void 0 : _templateDetail$value2.isActive) !== null && _templateDetail$value !== void 0 ? _templateDetail$value : false);
          });
          var isStartupError = !config.template && !config.templateGuid;
          var blockTitle = computed(() => {
            if (!isEditMode.value) {
              var _templateDetail$value3, _templateDetail$value4;
              return (_templateDetail$value3 = (_templateDetail$value4 = templateDetail.value) === null || _templateDetail$value4 === void 0 ? void 0 : _templateDetail$value4.name) !== null && _templateDetail$value3 !== void 0 ? _templateDetail$value3 : "";
            } else {
              return templateEditDetail.value.name || "Add Template";
            }
          });
          var onEditClick = function () {
            var _ref = _asyncToGenerator(function* () {
              var _config$templateGuid2;
              var result = yield invokeBlockAction("StartEdit", {
                guid: (_config$templateGuid2 = config.templateGuid) !== null && _config$templateGuid2 !== void 0 ? _config$templateGuid2 : ""
              });
              if (result.isSuccess && result.data) {
                templateEditDetail.value = result.data;
                isEditMode.value = true;
              }
            });
            return function onEditClick() {
              return _ref.apply(this, arguments);
            };
          }();
          var onEditCancelClick = () => {
            var _config$templateGuid3;
            if (config.parentUrl && areEqual((_config$templateGuid3 = config.templateGuid) !== null && _config$templateGuid3 !== void 0 ? _config$templateGuid3 : "", emptyGuid)) {
              window.location.href = config.parentUrl;
              return;
            }
            templateEditDetail.value = {};
            isEditMode.value = false;
          };
          var onSubmit = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var _config$templateGuid4;
              var result = yield invokeBlockAction("SaveTemplate", {
                guid: (_config$templateGuid4 = config.templateGuid) !== null && _config$templateGuid4 !== void 0 ? _config$templateGuid4 : "",
                template: templateEditDetail.value
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  templateDetail.value = result.data;
                  templateEditDetail.value = {};
                  isEditMode.value = false;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  window.location.href = result.data;
                }
              }
            });
            return function onSubmit() {
              return _ref2.apply(this, arguments);
            };
          }();
          provideSources((_config$sources = config.sources) !== null && _config$sources !== void 0 ? _config$sources : {});
          return {
            blockTitle,
            entityKey: (_config$templateGuid5 = config.templateGuid) !== null && _config$templateGuid5 !== void 0 ? _config$templateGuid5 : "",
            entityTypeGuid: EntityType.WorkflowFormBuilderTemplate,
            isEditable,
            isInactive,
            isStartupError,
            isEditMode,
            onEditCancelClick,
            onEditClick,
            onSubmit,
            templateDetail,
            templateEditDetail
          };
        },
        template: "\n<NotificationBox v-if=\"isStartupError\" alertType=\"warning\">\n    Unable to view details of this template.\n</NotificationBox>\n\n<Panel v-else type=\"block\" :title=\"blockTitle\" titleIconCssClass=\"fa fa-align-left\">\n    <template v-if=\"!isEditMode\" #headerActions>\n        <span v-if=\"isInactive\" class=\"label label-danger\">Inactive</span>\n    </template>\n\n    <template v-if=\"!isEditMode\" #drawer>\n        <AuditDetail :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />\n    </template>\n\n    <div v-if=\"!isEditMode\">\n        <ViewPanel :modelValue=\"templateDetail\" />\n\n        <div class=\"actions\">\n            <RockButton v-if=\"isEditable\" btnType=\"primary\" accesskey=\"e\" @click=\"onEditClick\">Edit</RockButton>\n        </div>\n    </div>\n\n    <div v-else>\n        <RockForm @submit=\"onSubmit\">\n            <EditPanel v-model=\"templateEditDetail\" />\n\n            <div class=\"actions\">\n                <RockButton type=\"submit\" btnType=\"primary\">Save</RockButton>\n                <RockButton btnType=\"link\" @click=\"onEditCancelClick\">Cancel</RockButton>\n            </div>\n        </RockForm>\n    </div>\n</Panel>\n"
      }));

    })
  };
}));
//# sourceMappingURL=formTemplateDetail.js.map
