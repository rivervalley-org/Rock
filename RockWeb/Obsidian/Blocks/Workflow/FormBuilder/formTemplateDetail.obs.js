System.register(['vue', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/auditDetail.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/sectionContainer.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/inlineCheckBox.obs'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, toDisplayString, ref, computed, watch, createBlock, unref, isRef, withCtx, createVNode, createCommentVNode, createElementVNode, inject, provide, createTextVNode, createSlots, Panel, RockForm, NotificationBox, AuditDetail, RockButton, EntityType, useConfigurationValues, useInvokeBlockAction, toGuidOrNull, areEqual, emptyGuid, CheckBox, TextBox, useVModelPassthrough, updateRefValue, toNumberOrNull, SectionContainer, DropDownList, InlineCheckbox;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      inject = module.inject;
      provide = module.provide;
      createTextVNode = module.createTextVNode;
      createSlots = module.createSlots;
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
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      SectionContainer = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      InlineCheckbox = module["default"];
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
        class: "btn-group btn-group-xs mb-2",
        role: "group"
      };
      var _hoisted_2$7 = ["onClick"];
      var script$7 = defineComponent({
        name: 'segmentedPicker.partial',
        props: {
          modelValue: {
            type: String,
            default: ""
          },
          items: {
            type: Array,
            default: []
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          function getButtonClass(item) {
            return ["btn", item.value === internalValue.value ? "btn-primary" : "btn-default"];
          }
          function onItemClick(item) {
            var _item$value;
            internalValue.value = (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "";
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$7, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              var _item$value2;
              return openBlock(), createElementBlock("button", {
                class: normalizeClass(getButtonClass(item)),
                key: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : undefined,
                type: "button",
                onClick: $event => onItemClick(item)
              }, toDisplayString(item.text), 11, _hoisted_2$7);
            }), 128))]);
          };
        }
      });

      script$7.__file = "src/WorkFlow/FormBuilder/Shared/segmentedPicker.partial.obs";

      var FormFieldVisibility = function (FormFieldVisibility) {
        FormFieldVisibility[FormFieldVisibility["Hidden"] = 0] = "Hidden";
        FormFieldVisibility[FormFieldVisibility["Optional"] = 1] = "Optional";
        FormFieldVisibility[FormFieldVisibility["Required"] = 2] = "Required";
        return FormFieldVisibility;
      }({});
      var FormFieldShowHide = function (FormFieldShowHide) {
        FormFieldShowHide[FormFieldShowHide["Hide"] = 0] = "Hide";
        FormFieldShowHide[FormFieldShowHide["Show"] = 1] = "Show";
        return FormFieldShowHide;
      }({});
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

      var _hoisted_1$6 = {
        key: 0
      };
      var _hoisted_2$6 = {
        key: 1
      };
      var script$6 = defineComponent({
        name: 'completionSettings.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$typ, _props$modelValue$typ2, _props$modelValue$mes, _props$modelValue$red;
          var emit = _ref.emit;
          var props = __props;
          var enabled = useVModelPassthrough(props, "enabled", emit);
          var type = ref((_props$modelValue$typ = (_props$modelValue$typ2 = props.modelValue.type) === null || _props$modelValue$typ2 === void 0 ? void 0 : _props$modelValue$typ2.toString()) !== null && _props$modelValue$typ !== void 0 ? _props$modelValue$typ : FormCompletionActionType.DisplayMessage.toString());
          var message = ref((_props$modelValue$mes = props.modelValue.message) !== null && _props$modelValue$mes !== void 0 ? _props$modelValue$mes : "");
          var redirectUrl = ref((_props$modelValue$red = props.modelValue.redirectUrl) !== null && _props$modelValue$red !== void 0 ? _props$modelValue$red : "");
          var typeOptions = [{
            value: FormCompletionActionType.DisplayMessage.toString(),
            text: "Display Message"
          }, {
            value: FormCompletionActionType.Redirect.toString(),
            text: "Redirect to New Page"
          }];
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(SectionContainer), {
              modelValue: unref(enabled),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(enabled) ? enabled.value = $event : null),
              title: "Completion Settings",
              description: "The settings below determine the actions to take after an individual completes the form.",
              toggleText: unref(sectionToggleText)
            }, {
              default: withCtx(() => [createVNode(unref(script$7), {
                modelValue: type.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => type.value = $event),
                items: typeOptions
              }, null, 8, ["modelValue"]), unref(isTypeDisplayMessage) ? (openBlock(), createElementBlock("div", _hoisted_1$6, [createVNode(unref(TextBox), {
                modelValue: message.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => message.value = $event),
                label: "Completion Message",
                textMode: "multiline",
                rules: "required"
              }, null, 8, ["modelValue"])])) : unref(isTypeRedirect) ? (openBlock(), createElementBlock("div", _hoisted_2$6, [createVNode(unref(TextBox), {
                modelValue: redirectUrl.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => redirectUrl.value = $event),
                label: "Redirect URL",
                rules: "required"
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["modelValue", "toggleText"]);
          };
        }
      });

      script$6.__file = "src/WorkFlow/FormBuilder/Shared/completionSettings.partial.obs";

      var _hoisted_1$5 = {
        key: 0
      };
      var _hoisted_2$5 = {
        class: "row"
      };
      var _hoisted_3$5 = {
        class: "col-md-4"
      };
      var _hoisted_4$2 = {
        key: 1
      };
      var _hoisted_5$2 = {
        class: "row"
      };
      var _hoisted_6$2 = {
        class: "col-md-4"
      };
      var _hoisted_7$2 = {
        class: "row"
      };
      var _hoisted_8$1 = {
        class: "col-md-4"
      };
      var script$5 = defineComponent({
        name: 'emailSource.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$typ, _props$modelValue$typ2, _props$modelValue$tem, _props$modelValue$sub, _props$modelValue$rep, _props$modelValue$bod, _props$modelValue$app;
          var emit = _ref.emit;
          var props = __props;
          var type = ref((_props$modelValue$typ = (_props$modelValue$typ2 = props.modelValue.type) === null || _props$modelValue$typ2 === void 0 ? void 0 : _props$modelValue$typ2.toString()) !== null && _props$modelValue$typ !== void 0 ? _props$modelValue$typ : FormEmailSourceType.UseTemplate.toString());
          var template = ref((_props$modelValue$tem = props.modelValue.template) !== null && _props$modelValue$tem !== void 0 ? _props$modelValue$tem : "");
          var subject = ref((_props$modelValue$sub = props.modelValue.subject) !== null && _props$modelValue$sub !== void 0 ? _props$modelValue$sub : "");
          var replyTo = ref((_props$modelValue$rep = props.modelValue.replyTo) !== null && _props$modelValue$rep !== void 0 ? _props$modelValue$rep : "");
          var body = ref((_props$modelValue$bod = props.modelValue.body) !== null && _props$modelValue$bod !== void 0 ? _props$modelValue$bod : "");
          var appendOrgHeaderAndFooter = ref((_props$modelValue$app = props.modelValue.appendOrgHeaderAndFooter) !== null && _props$modelValue$app !== void 0 ? _props$modelValue$app : false);
          var emailSourceOptions = [{
            value: FormEmailSourceType.UseTemplate.toString(),
            text: "Use Email Template"
          }, {
            value: FormEmailSourceType.Custom.toString(),
            text: "Provide Custom Email"
          }];
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createVNode(unref(script$7), {
              modelValue: type.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => type.value = $event),
              items: emailSourceOptions
            }, null, 8, ["modelValue"]), unref(isTemplateType) ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$5, [createElementVNode("div", _hoisted_3$5, [createVNode(unref(DropDownList), {
              modelValue: template.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => template.value = $event),
              label: "Email Template",
              rules: "required",
              items: __props.templateOptions
            }, null, 8, ["modelValue", "items"])])])])) : unref(isCustomType) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [createElementVNode("div", _hoisted_5$2, [createElementVNode("div", _hoisted_6$2, [createVNode(unref(TextBox), {
              modelValue: subject.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => subject.value = $event),
              label: "Subject",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_7$2, [createElementVNode("div", _hoisted_8$1, [createVNode(unref(TextBox), {
              modelValue: replyTo.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => replyTo.value = $event),
              label: "Reply To",
              rules: "email"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: body.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => body.value = $event),
              label: "Email Body",
              textMode: "multiline",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(InlineCheckbox), {
              modelValue: appendOrgHeaderAndFooter.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => appendOrgHeaderAndFooter.value = $event),
              label: "Append Organization Header and Footer"
            }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]);
          };
        }
      });

      script$5.__file = "src/WorkFlow/FormBuilder/Shared/emailSource.partial.obs";

      var _hoisted_1$4 = {
        class: "row"
      };
      var _hoisted_2$4 = {
        class: "col-md-4"
      };
      var _hoisted_3$4 = {
        class: "mt-3"
      };
      var script$4 = defineComponent({
        name: 'confirmationEmail.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$ena, _props$modelValue$rec, _props$modelValue$sou;
          var emit = _ref.emit;
          var props = __props;
          var enabled = ref((_props$modelValue$ena = props.modelValue.enabled) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : false);
          var recipientAttributeGuidOrEmptyString = ref((_props$modelValue$rec = props.modelValue.recipientAttributeGuid) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : "");
          var source = ref((_props$modelValue$sou = props.modelValue.source) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : {});
          watch(() => props.modelValue, () => {
            var _props$modelValue$ena2, _props$modelValue$rec2, _props$modelValue$sou2;
            enabled.value = (_props$modelValue$ena2 = props.modelValue.enabled) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : false;
            recipientAttributeGuidOrEmptyString.value = (_props$modelValue$rec2 = props.modelValue.recipientAttributeGuid) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : "";
            source.value = (_props$modelValue$sou2 = props.modelValue.source) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : {};
          });
          watch([enabled, recipientAttributeGuidOrEmptyString, source], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              enabled: enabled.value,
              recipientAttributeGuid: toGuidOrNull(recipientAttributeGuidOrEmptyString.value),
              source: source.value
            });
            emit("update:modelValue", newValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(SectionContainer), {
              modelValue: enabled.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => enabled.value = $event),
              toggleText: "Enable",
              title: "Confirmation Email",
              description: "The following settings will be used to send an email to the individual who submitted the form."
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$4, [createVNode(unref(DropDownList), {
                modelValue: recipientAttributeGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => recipientAttributeGuidOrEmptyString.value = $event),
                label: "Recipient",
                rules: "required",
                items: __props.recipientOptions
              }, null, 8, ["modelValue", "items"])])]), createElementVNode("div", _hoisted_3$4, [createVNode(unref(script$5), {
                modelValue: source.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => source.value = $event),
                templateOptions: __props.sourceTemplateOptions
              }, null, 8, ["modelValue", "templateOptions"])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$4.__file = "src/WorkFlow/FormBuilder/Shared/confirmationEmail.partial.obs";

      var _hoisted_1$3 = {
        class: "row"
      };
      var _hoisted_2$3 = {
        class: "row"
      };
      var _hoisted_3$3 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "row"
      };
      var _hoisted_6$1 = {
        class: "row"
      };
      var _hoisted_7$1 = {
        class: "row"
      };
      var script$3 = defineComponent({
        name: 'personEntrySettings.partial',
        props: {
          modelValue: {
            type: Object,
            default: {}
          },
          recordStatusOptions: {
            type: Array,
            default: []
          },
          connectionStatusOptions: {
            type: Array,
            default: []
          },
          campusTypeOptions: {
            type: Array,
            default: []
          },
          campusStatusOptions: {
            type: Array,
            default: []
          },
          addressTypeOptions: {
            type: Array,
            default: []
          },
          isVertical: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "close"],
        setup(__props, _ref) {
          var _props$modelValue$aut, _props$modelValue$hid, _props$modelValue$rec, _props$modelValue$con, _props$modelValue$sho, _props$modelValue$cam, _props$modelValue$cam2, _props$modelValue$gen, _props$modelValue$gen2, _props$modelValue$ema, _props$modelValue$ema2, _props$modelValue$mob, _props$modelValue$mob2, _props$modelValue$sms, _props$modelValue$sms2, _props$modelValue$bir, _props$modelValue$bir2, _props$modelValue$add, _props$modelValue$add2, _props$modelValue$add3, _props$modelValue$mar, _props$modelValue$mar2, _props$modelValue$spo, _props$modelValue$spo2, _props$modelValue$spo3, _props$modelValue$rac, _props$modelValue$rac2, _props$modelValue$eth, _props$modelValue$eth2;
          var emit = _ref.emit;
          var props = __props;
          var autofillCurrentPerson = ref((_props$modelValue$aut = props.modelValue.autofillCurrentPerson) !== null && _props$modelValue$aut !== void 0 ? _props$modelValue$aut : false);
          var hideIfCurrentPersonKnown = ref((_props$modelValue$hid = props.modelValue.hideIfCurrentPersonKnown) !== null && _props$modelValue$hid !== void 0 ? _props$modelValue$hid : false);
          var recordStatus = ref((_props$modelValue$rec = props.modelValue.recordStatus) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : "");
          var connectionStatus = ref((_props$modelValue$con = props.modelValue.connectionStatus) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "");
          var showCampus = ref((_props$modelValue$sho = props.modelValue.showCampus) !== null && _props$modelValue$sho !== void 0 ? _props$modelValue$sho : false);
          var campusType = ref((_props$modelValue$cam = props.modelValue.campusType) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : "");
          var campusStatus = ref((_props$modelValue$cam2 = props.modelValue.campusStatus) !== null && _props$modelValue$cam2 !== void 0 ? _props$modelValue$cam2 : "");
          var gender = ref((_props$modelValue$gen = (_props$modelValue$gen2 = props.modelValue.gender) === null || _props$modelValue$gen2 === void 0 ? void 0 : _props$modelValue$gen2.toString()) !== null && _props$modelValue$gen !== void 0 ? _props$modelValue$gen : FormFieldVisibility.Hidden.toString());
          var email = ref((_props$modelValue$ema = (_props$modelValue$ema2 = props.modelValue.email) === null || _props$modelValue$ema2 === void 0 ? void 0 : _props$modelValue$ema2.toString()) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : FormFieldVisibility.Hidden.toString());
          var mobilePhone = ref((_props$modelValue$mob = (_props$modelValue$mob2 = props.modelValue.mobilePhone) === null || _props$modelValue$mob2 === void 0 ? void 0 : _props$modelValue$mob2.toString()) !== null && _props$modelValue$mob !== void 0 ? _props$modelValue$mob : FormFieldVisibility.Hidden.toString());
          var smsOptIn = ref((_props$modelValue$sms = (_props$modelValue$sms2 = props.modelValue.smsOptIn) === null || _props$modelValue$sms2 === void 0 ? void 0 : _props$modelValue$sms2.toString()) !== null && _props$modelValue$sms !== void 0 ? _props$modelValue$sms : FormFieldShowHide.Hide.toString());
          var birthdate = ref((_props$modelValue$bir = (_props$modelValue$bir2 = props.modelValue.birthdate) === null || _props$modelValue$bir2 === void 0 ? void 0 : _props$modelValue$bir2.toString()) !== null && _props$modelValue$bir !== void 0 ? _props$modelValue$bir : FormFieldVisibility.Hidden.toString());
          var address = ref((_props$modelValue$add = (_props$modelValue$add2 = props.modelValue.address) === null || _props$modelValue$add2 === void 0 ? void 0 : _props$modelValue$add2.toString()) !== null && _props$modelValue$add !== void 0 ? _props$modelValue$add : FormFieldVisibility.Hidden.toString());
          var addressType = ref((_props$modelValue$add3 = props.modelValue.addressType) !== null && _props$modelValue$add3 !== void 0 ? _props$modelValue$add3 : "");
          var maritalStatus = ref((_props$modelValue$mar = (_props$modelValue$mar2 = props.modelValue.maritalStatus) === null || _props$modelValue$mar2 === void 0 ? void 0 : _props$modelValue$mar2.toString()) !== null && _props$modelValue$mar !== void 0 ? _props$modelValue$mar : FormFieldVisibility.Hidden.toString());
          var spouseEntry = ref((_props$modelValue$spo = (_props$modelValue$spo2 = props.modelValue.spouseEntry) === null || _props$modelValue$spo2 === void 0 ? void 0 : _props$modelValue$spo2.toString()) !== null && _props$modelValue$spo !== void 0 ? _props$modelValue$spo : FormFieldVisibility.Hidden.toString());
          var spouseLabel = ref((_props$modelValue$spo3 = props.modelValue.spouseLabel) !== null && _props$modelValue$spo3 !== void 0 ? _props$modelValue$spo3 : "Spouse");
          var raceEntry = ref((_props$modelValue$rac = (_props$modelValue$rac2 = props.modelValue.raceEntry) === null || _props$modelValue$rac2 === void 0 ? void 0 : _props$modelValue$rac2.toString()) !== null && _props$modelValue$rac !== void 0 ? _props$modelValue$rac : FormFieldVisibility.Hidden.toString());
          var ethnicityEntry = ref((_props$modelValue$eth = (_props$modelValue$eth2 = props.modelValue.ethnicityEntry) === null || _props$modelValue$eth2 === void 0 ? void 0 : _props$modelValue$eth2.toString()) !== null && _props$modelValue$eth !== void 0 ? _props$modelValue$eth : FormFieldVisibility.Hidden.toString());
          var formFieldVisibilityOptions = [{
            value: FormFieldVisibility.Hidden.toString(),
            text: "Hidden"
          }, {
            value: FormFieldVisibility.Optional.toString(),
            text: "Optional"
          }, {
            value: FormFieldVisibility.Required.toString(),
            text: "Required"
          }];
          var formFieldShowHideOptions = [{
            value: FormFieldShowHide.Hide.toString(),
            text: "Hide"
          }, {
            value: FormFieldShowHide.Show.toString(),
            text: "Show"
          }];
          var columnClass = computed(() => props.isVertical ? "col-xs-12" : "col-md-3");
          watch([autofillCurrentPerson, hideIfCurrentPersonKnown, recordStatus, connectionStatus, showCampus, campusType, campusStatus, gender, email, mobilePhone, smsOptIn, birthdate, address, addressType, maritalStatus, spouseEntry, spouseLabel, raceEntry, ethnicityEntry], () => {
            var _toNumberOrNull, _toNumberOrNull2, _toNumberOrNull3, _toNumberOrNull4, _toNumberOrNull5, _toNumberOrNull6, _toNumberOrNull7, _toNumberOrNull8, _toNumberOrNull9, _toNumberOrNull10;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              autofillCurrentPerson: autofillCurrentPerson.value,
              hideIfCurrentPersonKnown: hideIfCurrentPersonKnown.value,
              recordStatus: recordStatus.value,
              connectionStatus: connectionStatus.value,
              showCampus: showCampus.value,
              campusType: campusType.value,
              campusStatus: campusStatus.value,
              gender: (_toNumberOrNull = toNumberOrNull(gender.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : FormFieldVisibility.Hidden,
              email: (_toNumberOrNull2 = toNumberOrNull(email.value)) !== null && _toNumberOrNull2 !== void 0 ? _toNumberOrNull2 : FormFieldVisibility.Hidden,
              mobilePhone: (_toNumberOrNull3 = toNumberOrNull(mobilePhone.value)) !== null && _toNumberOrNull3 !== void 0 ? _toNumberOrNull3 : FormFieldVisibility.Hidden,
              smsOptIn: (_toNumberOrNull4 = toNumberOrNull(smsOptIn.value)) !== null && _toNumberOrNull4 !== void 0 ? _toNumberOrNull4 : FormFieldVisibility.Hidden,
              birthdate: (_toNumberOrNull5 = toNumberOrNull(birthdate.value)) !== null && _toNumberOrNull5 !== void 0 ? _toNumberOrNull5 : FormFieldVisibility.Hidden,
              address: (_toNumberOrNull6 = toNumberOrNull(address.value)) !== null && _toNumberOrNull6 !== void 0 ? _toNumberOrNull6 : FormFieldVisibility.Hidden,
              addressType: addressType.value,
              maritalStatus: (_toNumberOrNull7 = toNumberOrNull(maritalStatus.value)) !== null && _toNumberOrNull7 !== void 0 ? _toNumberOrNull7 : FormFieldVisibility.Hidden,
              spouseEntry: (_toNumberOrNull8 = toNumberOrNull(spouseEntry.value)) !== null && _toNumberOrNull8 !== void 0 ? _toNumberOrNull8 : FormFieldVisibility.Hidden,
              spouseLabel: spouseLabel.value,
              raceEntry: (_toNumberOrNull9 = toNumberOrNull(raceEntry.value)) !== null && _toNumberOrNull9 !== void 0 ? _toNumberOrNull9 : FormFieldVisibility.Hidden,
              ethnicityEntry: (_toNumberOrNull10 = toNumberOrNull(ethnicityEntry.value)) !== null && _toNumberOrNull10 !== void 0 ? _toNumberOrNull10 : FormFieldVisibility.Hidden
            });
            emit("update:modelValue", newValue);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$aut2, _props$modelValue$hid2, _props$modelValue$rec2, _props$modelValue$con2, _props$modelValue$sho2, _props$modelValue$cam3, _props$modelValue$cam4, _props$modelValue$gen3, _props$modelValue$gen4, _props$modelValue$ema3, _props$modelValue$ema4, _props$modelValue$mob3, _props$modelValue$mob4, _props$modelValue$sms3, _props$modelValue$sms4, _props$modelValue$bir3, _props$modelValue$bir4, _props$modelValue$add4, _props$modelValue$add5, _props$modelValue$add6, _props$modelValue$mar3, _props$modelValue$mar4, _props$modelValue$spo4, _props$modelValue$spo5, _props$modelValue$spo6, _props$modelValue$rac3, _props$modelValue$rac4, _props$modelValue$eth3, _props$modelValue$eth4;
            autofillCurrentPerson.value = (_props$modelValue$aut2 = props.modelValue.autofillCurrentPerson) !== null && _props$modelValue$aut2 !== void 0 ? _props$modelValue$aut2 : false;
            hideIfCurrentPersonKnown.value = (_props$modelValue$hid2 = props.modelValue.hideIfCurrentPersonKnown) !== null && _props$modelValue$hid2 !== void 0 ? _props$modelValue$hid2 : false;
            recordStatus.value = (_props$modelValue$rec2 = props.modelValue.recordStatus) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : "";
            connectionStatus.value = (_props$modelValue$con2 = props.modelValue.connectionStatus) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : "";
            showCampus.value = (_props$modelValue$sho2 = props.modelValue.showCampus) !== null && _props$modelValue$sho2 !== void 0 ? _props$modelValue$sho2 : false;
            campusType.value = (_props$modelValue$cam3 = props.modelValue.campusType) !== null && _props$modelValue$cam3 !== void 0 ? _props$modelValue$cam3 : "";
            campusStatus.value = (_props$modelValue$cam4 = props.modelValue.campusStatus) !== null && _props$modelValue$cam4 !== void 0 ? _props$modelValue$cam4 : "";
            gender.value = (_props$modelValue$gen3 = (_props$modelValue$gen4 = props.modelValue.gender) === null || _props$modelValue$gen4 === void 0 ? void 0 : _props$modelValue$gen4.toString()) !== null && _props$modelValue$gen3 !== void 0 ? _props$modelValue$gen3 : FormFieldVisibility.Hidden.toString();
            email.value = (_props$modelValue$ema3 = (_props$modelValue$ema4 = props.modelValue.email) === null || _props$modelValue$ema4 === void 0 ? void 0 : _props$modelValue$ema4.toString()) !== null && _props$modelValue$ema3 !== void 0 ? _props$modelValue$ema3 : FormFieldVisibility.Hidden.toString();
            mobilePhone.value = (_props$modelValue$mob3 = (_props$modelValue$mob4 = props.modelValue.mobilePhone) === null || _props$modelValue$mob4 === void 0 ? void 0 : _props$modelValue$mob4.toString()) !== null && _props$modelValue$mob3 !== void 0 ? _props$modelValue$mob3 : FormFieldVisibility.Hidden.toString();
            smsOptIn.value = (_props$modelValue$sms3 = (_props$modelValue$sms4 = props.modelValue.smsOptIn) === null || _props$modelValue$sms4 === void 0 ? void 0 : _props$modelValue$sms4.toString()) !== null && _props$modelValue$sms3 !== void 0 ? _props$modelValue$sms3 : FormFieldShowHide.Hide.toString();
            birthdate.value = (_props$modelValue$bir3 = (_props$modelValue$bir4 = props.modelValue.birthdate) === null || _props$modelValue$bir4 === void 0 ? void 0 : _props$modelValue$bir4.toString()) !== null && _props$modelValue$bir3 !== void 0 ? _props$modelValue$bir3 : FormFieldVisibility.Hidden.toString();
            address.value = (_props$modelValue$add4 = (_props$modelValue$add5 = props.modelValue.address) === null || _props$modelValue$add5 === void 0 ? void 0 : _props$modelValue$add5.toString()) !== null && _props$modelValue$add4 !== void 0 ? _props$modelValue$add4 : FormFieldVisibility.Hidden.toString();
            addressType.value = (_props$modelValue$add6 = props.modelValue.addressType) !== null && _props$modelValue$add6 !== void 0 ? _props$modelValue$add6 : "";
            maritalStatus.value = (_props$modelValue$mar3 = (_props$modelValue$mar4 = props.modelValue.maritalStatus) === null || _props$modelValue$mar4 === void 0 ? void 0 : _props$modelValue$mar4.toString()) !== null && _props$modelValue$mar3 !== void 0 ? _props$modelValue$mar3 : FormFieldVisibility.Hidden.toString();
            spouseEntry.value = (_props$modelValue$spo4 = (_props$modelValue$spo5 = props.modelValue.spouseEntry) === null || _props$modelValue$spo5 === void 0 ? void 0 : _props$modelValue$spo5.toString()) !== null && _props$modelValue$spo4 !== void 0 ? _props$modelValue$spo4 : FormFieldVisibility.Hidden.toString();
            spouseLabel.value = (_props$modelValue$spo6 = props.modelValue.spouseLabel) !== null && _props$modelValue$spo6 !== void 0 ? _props$modelValue$spo6 : "";
            raceEntry.value = (_props$modelValue$rac3 = (_props$modelValue$rac4 = props.modelValue.raceEntry) === null || _props$modelValue$rac4 === void 0 ? void 0 : _props$modelValue$rac4.toString()) !== null && _props$modelValue$rac3 !== void 0 ? _props$modelValue$rac3 : FormFieldVisibility.Hidden.toString();
            ethnicityEntry.value = (_props$modelValue$eth3 = (_props$modelValue$eth4 = props.modelValue.ethnicityEntry) === null || _props$modelValue$eth4 === void 0 ? void 0 : _props$modelValue$eth4.toString()) !== null && _props$modelValue$eth3 !== void 0 ? _props$modelValue$eth3 : FormFieldVisibility.Hidden.toString();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createElementVNode("div", _hoisted_1$3, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(CheckBox), {
              modelValue: autofillCurrentPerson.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => autofillCurrentPerson.value = $event),
              label: "Autofill Current Person"
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(CheckBox), {
              modelValue: hideIfCurrentPersonKnown.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => hideIfCurrentPersonKnown.value = $event),
              label: "Hide if Current Person Known"
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: recordStatus.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => recordStatus.value = $event),
              label: "Record Status",
              items: __props.recordStatusOptions,
              rules: "required"
            }, null, 8, ["modelValue", "items"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: connectionStatus.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => connectionStatus.value = $event),
              label: "Connection Status",
              items: __props.connectionStatusOptions,
              rules: "required"
            }, null, 8, ["modelValue", "items"])], 2)]), createElementVNode("div", _hoisted_2$3, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(CheckBox), {
              modelValue: showCampus.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => showCampus.value = $event),
              label: "Show Campus"
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: campusType.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => campusType.value = $event),
              label: "Campus Type",
              items: __props.campusTypeOptions
            }, null, 8, ["modelValue", "items"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: campusStatus.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => campusStatus.value = $event),
              label: "Campus Status",
              items: __props.campusStatusOptions
            }, null, 8, ["modelValue", "items"])], 2)]), createElementVNode("div", _hoisted_3$3, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: gender.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => gender.value = $event),
              label: "Gender",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: email.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => email.value = $event),
              label: "Email",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: mobilePhone.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => mobilePhone.value = $event),
              label: "Mobile Phone",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: smsOptIn.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => smsOptIn.value = $event),
              label: "SMS Opt-In",
              disabled: unref(toNumberOrNull)(mobilePhone.value) === unref(FormFieldVisibility).Hidden,
              showBlankItem: false,
              items: formFieldShowHideOptions
            }, null, 8, ["modelValue", "disabled"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: birthdate.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => birthdate.value = $event),
              label: "Birthdate",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: address.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => address.value = $event),
              label: "Address",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: addressType.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => addressType.value = $event),
              label: "Address Type",
              items: __props.addressTypeOptions,
              rules: "required"
            }, null, 8, ["modelValue", "items"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: maritalStatus.value,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => maritalStatus.value = $event),
              label: "Marital Status",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_5$1, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: spouseEntry.value,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => spouseEntry.value = $event),
              label: "Spouse Entry",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2), createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(TextBox), {
              modelValue: spouseLabel.value,
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => spouseLabel.value = $event),
              label: "Spouse Label"
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_6$1, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: raceEntry.value,
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => raceEntry.value = $event),
              label: "Race Entry",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_7$1, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: ethnicityEntry.value,
              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => ethnicityEntry.value = $event),
              label: "Ethnicity Entry",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2)])]);
          };
        }
      });

      script$3.__file = "src/WorkFlow/FormBuilder/Shared/personEntrySettings.partial.obs";

      var sourcesKey = Symbol();
      function provideSources(sources) {
        provide(sourcesKey, sources);
      }
      function useSources() {
        var _inject;
        return (_inject = inject(sourcesKey)) !== null && _inject !== void 0 ? _inject : {};
      }

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "col-md-6"
      };
      var _hoisted_3$2 = {
        class: "col-md-6"
      };
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            default: {}
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$nam, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$isL, _props$modelValue$for, _props$modelValue$for2, _props$modelValue$all, _props$modelValue$per, _props$modelValue$con;
          var emit = _ref.emit;
          var props = __props;
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
          var recipientOptions = [{
            value: "00000000-0000-0000-0000-000000000001",
            text: "Person"
          }, {
            value: "00000000-0000-0000-0000-000000000002",
            text: "Spouse"
          }];
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
          return (_ctx, _cache) => {
            var _unref$emailTemplateO;
            return openBlock(), createElementBlock("div", null, [createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createVNode(unref(TextBox), {
              modelValue: name.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => name.value = $event),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$2, [createVNode(unref(CheckBox), {
              modelValue: isActive.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isActive.value = $event),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: description.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => description.value = $event),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: isLoginRequired.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isLoginRequired.value = $event),
              label: "Is Login Required",
              help: "Determines if a person needs to be logged in to complete this form."
            }, null, 8, ["modelValue"]), createVNode(unref(SectionContainer), {
              title: "Form Headers and Footers",
              description: "The headers and footers below will be displayed on all pages of the forms that use this template."
            }, {
              default: withCtx(() => [createVNode(unref(TextBox), {
                modelValue: formHeader.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => formHeader.value = $event),
                label: "Form Header",
                textMode: "multiline"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: formFooter.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => formFooter.value = $event),
                label: "Form Footer",
                textMode: "multiline"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(SectionContainer), {
              modelValue: allowPersonEntry.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => allowPersonEntry.value = $event),
              toggleText: "Enable",
              title: "Person Entry Settings",
              description: "These settings will lock the forms person entry settings."
            }, {
              default: withCtx(() => {
                var _unref$recordStatusOp, _unref$connectionStat, _unref$campusTypeOpti, _unref$campusStatusOp, _unref$addressTypeOpt;
                return [createVNode(unref(script$3), {
                  modelValue: personEntry.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => personEntry.value = $event),
                  recordStatusOptions: (_unref$recordStatusOp = unref(sources).recordStatusOptions) !== null && _unref$recordStatusOp !== void 0 ? _unref$recordStatusOp : undefined,
                  connectionStatusOptions: (_unref$connectionStat = unref(sources).connectionStatusOptions) !== null && _unref$connectionStat !== void 0 ? _unref$connectionStat : undefined,
                  campusTypeOptions: (_unref$campusTypeOpti = unref(sources).campusTypeOptions) !== null && _unref$campusTypeOpti !== void 0 ? _unref$campusTypeOpti : undefined,
                  campusStatusOptions: (_unref$campusStatusOp = unref(sources).campusStatusOptions) !== null && _unref$campusStatusOp !== void 0 ? _unref$campusStatusOp : undefined,
                  addressTypeOptions: (_unref$addressTypeOpt = unref(sources).addressTypeOptions) !== null && _unref$addressTypeOpt !== void 0 ? _unref$addressTypeOpt : undefined
                }, null, 8, ["modelValue", "recordStatusOptions", "connectionStatusOptions", "campusTypeOptions", "campusStatusOptions", "addressTypeOptions"])];
              }),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(script$4), {
              modelValue: confirmationEmail.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => confirmationEmail.value = $event),
              recipientOptions: recipientOptions,
              sourceTemplateOptions: (_unref$emailTemplateO = unref(sources).emailTemplateOptions) !== null && _unref$emailTemplateO !== void 0 ? _unref$emailTemplateO : undefined
            }, null, 8, ["modelValue", "sourceTemplateOptions"]), createVNode(unref(script$6), {
              modelValue: unref(completionAction),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(completionAction) ? completionAction.value = $event : null),
              enabled: unref(completionActionEnabled),
              "onUpdate:enabled": _cache[10] || (_cache[10] = $event => isRef(completionActionEnabled) ? completionActionEnabled.value = $event : null),
              hasEnable: ""
            }, null, 8, ["modelValue", "enabled"])]);
          };
        }
      });

      script$2.__file = "src/WorkFlow/FormBuilder/FormTemplateDetail/editPanel.partial.obs";

      var _hoisted_1$1 = createElementVNode("dt", null, "Name", -1);
      var _hoisted_2$1 = createElementVNode("dt", null, "Description", -1);
      var _hoisted_3$1 = createElementVNode("dt", null, "Used By", -1);
      var script$1 = defineComponent({
        name: 'viewPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          }
        },
        setup(__props) {
          var _props$modelValue$nam, _props$modelValue, _props$modelValue$des, _props$modelValue2, _props$modelValue$use, _props$modelValue3;
          var props = __props;
          var name = ref((_props$modelValue$nam = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "");
          var description = ref((_props$modelValue$des = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
          var usedByWorkflowTypes = ref((_props$modelValue$use = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.usedBy) !== null && _props$modelValue$use !== void 0 ? _props$modelValue$use : []);
          watch(() => props.modelValue, () => {
            var _props$modelValue$nam2, _props$modelValue4, _props$modelValue$des2, _props$modelValue5, _props$modelValue$use2, _props$modelValue6;
            updateRefValue(name, (_props$modelValue$nam2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(usedByWorkflowTypes, (_props$modelValue$use2 = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.usedBy) !== null && _props$modelValue$use2 !== void 0 ? _props$modelValue$use2 : []);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("dl", null, [_hoisted_1$1, createElementVNode("dd", null, toDisplayString(name.value), 1), description.value ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [_hoisted_2$1, createElementVNode("dd", null, toDisplayString(description.value), 1)], 64)) : createCommentVNode("v-if", true), _hoisted_3$1, createElementVNode("dd", null, [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(usedByWorkflowTypes.value, workflowType => {
              var _workflowType$value;
              return openBlock(), createElementBlock("li", {
                key: (_workflowType$value = workflowType.value) !== null && _workflowType$value !== void 0 ? _workflowType$value : undefined
              }, toDisplayString(workflowType.text), 1);
            }), 128))])])])]);
          };
        }
      });

      script$1.__file = "src/WorkFlow/FormBuilder/FormTemplateDetail/viewPanel.partial.obs";

      var _hoisted_1 = createTextVNode(" Unable to view details of this template. ");
      var _hoisted_2 = {
        key: 0,
        class: "label label-danger"
      };
      var _hoisted_3 = {
        key: 0
      };
      var _hoisted_4 = {
        class: "actions"
      };
      var _hoisted_5 = createTextVNode("Edit");
      var _hoisted_6 = {
        key: 1
      };
      var _hoisted_7 = {
        class: "actions"
      };
      var _hoisted_8 = createTextVNode("Save");
      var _hoisted_9 = createTextVNode("Cancel");
      var script = exports('default', defineComponent({
        name: 'formTemplateDetail',
        setup(__props) {
          var _config$templateGuid, _config$sources;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var templateDetail = ref(config.template);
          var templateEditDetail = ref({});
          var isEditable = ref(config.isEditable);
          var isEditMode = ref(areEqual((_config$templateGuid = config.templateGuid) !== null && _config$templateGuid !== void 0 ? _config$templateGuid : emptyGuid, emptyGuid));
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
          function onEditClick() {
            return _onEditClick.apply(this, arguments);
          }
          function _onEditClick() {
            _onEditClick = _asyncToGenerator(function* () {
              var _toGuidOrNull;
              var request = {
                guid: (_toGuidOrNull = toGuidOrNull(config.templateGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var result = yield invokeBlockAction("StartEdit", request);
              if (result.isSuccess && result.data) {
                templateEditDetail.value = result.data;
                isEditMode.value = true;
              }
            });
            return _onEditClick.apply(this, arguments);
          }
          function onEditCancelClick() {
            var _config$templateGuid2;
            if (config.parentUrl && areEqual((_config$templateGuid2 = config.templateGuid) !== null && _config$templateGuid2 !== void 0 ? _config$templateGuid2 : emptyGuid, emptyGuid)) {
              window.location.href = config.parentUrl;
              return;
            }
            templateEditDetail.value = {};
            isEditMode.value = false;
          }
          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }
          function _onSubmit() {
            _onSubmit = _asyncToGenerator(function* () {
              var _toGuidOrNull2;
              var request = {
                guid: (_toGuidOrNull2 = toGuidOrNull(config.templateGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                template: templateEditDetail.value
              };
              var result = yield invokeBlockAction("SaveTemplate", request);
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
            return _onSubmit.apply(this, arguments);
          }
          provideSources((_config$sources = config.sources) !== null && _config$sources !== void 0 ? _config$sources : {});
          return (_ctx, _cache) => {
            return unref(isStartupError) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1]),
              _: 1
            })) : (openBlock(), createBlock(unref(Panel), {
              key: 1,
              type: "block",
              title: unref(blockTitle),
              titleIconCssClass: "fa fa-align-left"
            }, createSlots({
              default: withCtx(() => [!isEditMode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(script$1), {
                modelValue: templateDetail.value
              }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [isEditable.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: "primary",
                accesskey: "e",
                onClick: onEditClick
              }, {
                default: withCtx(() => [_hoisted_5]),
                _: 1
              })) : createCommentVNode("v-if", true)])])) : (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(unref(RockForm), {
                onSubmit: onSubmit
              }, {
                default: withCtx(() => [createVNode(unref(script$2), {
                  modelValue: templateEditDetail.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => templateEditDetail.value = $event)
                }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_7, [createVNode(unref(RockButton), {
                  type: "submit",
                  btnType: "primary"
                }, {
                  default: withCtx(() => [_hoisted_8]),
                  _: 1
                }), createVNode(unref(RockButton), {
                  btnType: "link",
                  onClick: onEditCancelClick
                }, {
                  default: withCtx(() => [_hoisted_9]),
                  _: 1
                })])]),
                _: 1
              })]))]),
              _: 2
            }, [!isEditMode.value ? {
              name: "headerActions",
              fn: withCtx(() => [unref(isInactive) ? (openBlock(), createElementBlock("span", _hoisted_2, "Inactive")) : createCommentVNode("v-if", true)])
            } : undefined, !isEditMode.value ? {
              name: "drawer",
              fn: withCtx(() => {
                var _unref$templateGuid;
                return [createVNode(unref(AuditDetail), {
                  entityTypeGuid: unref(EntityType).WorkflowFormBuilderTemplate,
                  entityKey: (_unref$templateGuid = unref(config).templateGuid) !== null && _unref$templateGuid !== void 0 ? _unref$templateGuid : undefined
                }, null, 8, ["entityTypeGuid", "entityKey"])];
              })
            } : undefined]), 1032, ["title"]));
          };
        }
      }));

      script.__file = "src/WorkFlow/FormBuilder/formTemplateDetail.obs";

    })
  };
}));
//# sourceMappingURL=formTemplateDetail.obs.js.map
