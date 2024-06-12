System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/component', '@Obsidian/Controls/sectionContainer.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Utility/fieldTypes', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Controls/fieldFilterEditor.obs', '@Obsidian/Controls/fieldTypeEditor.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/switch.obs', '@Obsidian/Utility/linq', '@Obsidian/Directives/dragDrop', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/rockField.obs', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/SystemGuids/entityType'], (function (exports) {
  'use strict';
  var defineComponent, openBlock, createElementBlock, Fragment, renderList, normalizeClass, toDisplayString, ref, computed, watch, createVNode, unref, createElementVNode, createCommentVNode, createBlock, withCtx, inject, provide, withModifiers, renderSlot, createTextVNode, nextTick, isRef, withDirectives, resolveComponent, reactive, shallowRef, normalizeStyle, NotificationBox, Panel, RockButton, FieldType, useInvokeBlockAction, useConfigurationValues, toGuidOrNull, areEqual, newGuid, emptyGuid, RockForm, DropDownList, InlineCheckbox, TextBox, toNumberOrNull, useVModelPassthrough, updateRefValue, SectionContainer, PersonPicker, EmailBox, getFieldType, FilterExpressionType, FieldFilterEditor, FieldTypeEditor, Modal, LoadingIndicator, RangeSlider, InlineSwitch, List, DragSource, DragTarget, RockLabel, TransitionVerticalCollapse, CheckBox, RockField, confirmDelete, CategoryPicker, DateTimePicker, EntityType;
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
      createVNode = module.createVNode;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      createCommentVNode = module.createCommentVNode;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      inject = module.inject;
      provide = module.provide;
      withModifiers = module.withModifiers;
      renderSlot = module.renderSlot;
      createTextVNode = module.createTextVNode;
      nextTick = module.nextTick;
      isRef = module.isRef;
      withDirectives = module.withDirectives;
      resolveComponent = module.resolveComponent;
      reactive = module.reactive;
      shallowRef = module.shallowRef;
      normalizeStyle = module.normalizeStyle;
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
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      newGuid = module.newGuid;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      InlineCheckbox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      SectionContainer = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      FilterExpressionType = module.FilterExpressionType;
    }, function (module) {
      FieldFilterEditor = module["default"];
    }, function (module) {
      FieldTypeEditor = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      RangeSlider = module["default"];
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      List = module.List;
    }, function (module) {
      DragSource = module.DragSource;
      DragTarget = module.DragTarget;
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      confirmDelete = module.confirmDelete;
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
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

      var _hoisted_1$i = {
        class: "btn-group btn-group-xs mb-2",
        role: "group"
      };
      var _hoisted_2$h = ["onClick"];
      var script$j = defineComponent({
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
            return openBlock(), createElementBlock("div", _hoisted_1$i, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              var _item$value2;
              return openBlock(), createElementBlock("button", {
                class: normalizeClass(getButtonClass(item)),
                key: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : undefined,
                type: "button",
                onClick: $event => onItemClick(item)
              }, toDisplayString(item.text), 11, _hoisted_2$h);
            }), 128))]);
          };
        }
      });

      script$j.__file = "src/WorkFlow/FormBuilder/Shared/segmentedPicker.partial.obs";

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
      var FormNotificationEmailDestination = function (FormNotificationEmailDestination) {
        FormNotificationEmailDestination[FormNotificationEmailDestination["SpecificIndividual"] = 0] = "SpecificIndividual";
        FormNotificationEmailDestination[FormNotificationEmailDestination["EmailAddress"] = 1] = "EmailAddress";
        FormNotificationEmailDestination[FormNotificationEmailDestination["CampusTopic"] = 2] = "CampusTopic";
        return FormNotificationEmailDestination;
      }({});
      var FormCompletionActionType = function (FormCompletionActionType) {
        FormCompletionActionType[FormCompletionActionType["DisplayMessage"] = 0] = "DisplayMessage";
        FormCompletionActionType[FormCompletionActionType["Redirect"] = 1] = "Redirect";
        return FormCompletionActionType;
      }({});
      var CampusSetFrom = function (CampusSetFrom) {
        CampusSetFrom[CampusSetFrom["CurrentPerson"] = 0] = "CurrentPerson";
        CampusSetFrom[CampusSetFrom["WorkflowPerson"] = 1] = "WorkflowPerson";
        CampusSetFrom[CampusSetFrom["QueryString"] = 2] = "QueryString";
        return CampusSetFrom;
      }({});

      var _hoisted_1$h = {
        key: 0
      };
      var _hoisted_2$g = {
        class: "row"
      };
      var _hoisted_3$f = {
        class: "col-md-4"
      };
      var _hoisted_4$c = {
        key: 1
      };
      var _hoisted_5$9 = {
        class: "row"
      };
      var _hoisted_6$8 = {
        class: "col-md-4"
      };
      var _hoisted_7$7 = {
        class: "row"
      };
      var _hoisted_8$6 = {
        class: "col-md-4"
      };
      var script$i = defineComponent({
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
            return openBlock(), createElementBlock("div", null, [createVNode(unref(script$j), {
              modelValue: type.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => type.value = $event),
              items: emailSourceOptions
            }, null, 8, ["modelValue"]), unref(isTemplateType) ? (openBlock(), createElementBlock("div", _hoisted_1$h, [createElementVNode("div", _hoisted_2$g, [createElementVNode("div", _hoisted_3$f, [createVNode(unref(DropDownList), {
              modelValue: template.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => template.value = $event),
              label: "Email Template",
              rules: "required",
              items: __props.templateOptions
            }, null, 8, ["modelValue", "items"])])])])) : unref(isCustomType) ? (openBlock(), createElementBlock("div", _hoisted_4$c, [createElementVNode("div", _hoisted_5$9, [createElementVNode("div", _hoisted_6$8, [createVNode(unref(TextBox), {
              modelValue: subject.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => subject.value = $event),
              label: "Subject",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_7$7, [createElementVNode("div", _hoisted_8$6, [createVNode(unref(TextBox), {
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

      script$i.__file = "src/WorkFlow/FormBuilder/Shared/emailSource.partial.obs";

      var _hoisted_1$g = {
        class: "row"
      };
      var _hoisted_2$f = {
        class: "col-md-4"
      };
      var _hoisted_3$e = {
        class: "mt-3"
      };
      var script$h = defineComponent({
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
              default: withCtx(() => [createElementVNode("div", _hoisted_1$g, [createElementVNode("div", _hoisted_2$f, [createVNode(unref(DropDownList), {
                modelValue: recipientAttributeGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => recipientAttributeGuidOrEmptyString.value = $event),
                label: "Recipient",
                rules: "required",
                items: __props.recipientOptions
              }, null, 8, ["modelValue", "items"])])]), createElementVNode("div", _hoisted_3$e, [createVNode(unref(script$i), {
                modelValue: source.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => source.value = $event),
                templateOptions: __props.sourceTemplateOptions
              }, null, 8, ["modelValue", "templateOptions"])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$h.__file = "src/WorkFlow/FormBuilder/Shared/confirmationEmail.partial.obs";

      var _hoisted_1$f = {
        key: 0
      };
      var _hoisted_2$e = {
        class: "row"
      };
      var _hoisted_3$d = {
        class: "col-md-4"
      };
      var _hoisted_4$b = {
        key: 1
      };
      var _hoisted_5$8 = {
        class: "row"
      };
      var _hoisted_6$7 = {
        class: "col-md-4"
      };
      var _hoisted_7$6 = {
        key: 2
      };
      var _hoisted_8$5 = {
        class: "row"
      };
      var _hoisted_9$5 = {
        class: "col-md-4"
      };
      var _hoisted_10$5 = {
        class: "mt-3"
      };
      var script$g = defineComponent({
        name: 'notificationEmail.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$ena, _props$modelValue$des, _props$modelValue$des2, _props$modelValue$rec, _props$modelValue$ema, _props$modelValue$cam, _props$modelValue$sou;
          var emit = _ref.emit;
          var props = __props;
          var enabled = ref((_props$modelValue$ena = props.modelValue.enabled) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : false);
          var destination = ref((_props$modelValue$des = (_props$modelValue$des2 = props.modelValue.destination) === null || _props$modelValue$des2 === void 0 ? void 0 : _props$modelValue$des2.toString()) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : FormNotificationEmailDestination.SpecificIndividual.toString());
          var recipient = ref((_props$modelValue$rec = props.modelValue.recipient) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : undefined);
          var emailAddress = ref((_props$modelValue$ema = props.modelValue.emailAddress) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "");
          var campusTopicGuidOrEmptyString = ref((_props$modelValue$cam = props.modelValue.campusTopicGuid) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : "");
          var source = ref((_props$modelValue$sou = props.modelValue.source) !== null && _props$modelValue$sou !== void 0 ? _props$modelValue$sou : {});
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
          var isDestinationSpecificIndividual = computed(() => destination.value === FormNotificationEmailDestination.SpecificIndividual.toString());
          var isDestinationEmailAddress = computed(() => destination.value === FormNotificationEmailDestination.EmailAddress.toString());
          var isDestinationCampusTopic = computed(() => destination.value === FormNotificationEmailDestination.CampusTopic.toString());
          watch(() => props.modelValue, () => {
            var _props$modelValue$ena2, _props$modelValue$des3, _props$modelValue$des4, _props$modelValue$rec2, _props$modelValue$ema2, _toGuidOrNull, _props$modelValue$sou2;
            enabled.value = (_props$modelValue$ena2 = props.modelValue.enabled) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : false;
            destination.value = (_props$modelValue$des3 = (_props$modelValue$des4 = props.modelValue.destination) === null || _props$modelValue$des4 === void 0 ? void 0 : _props$modelValue$des4.toString()) !== null && _props$modelValue$des3 !== void 0 ? _props$modelValue$des3 : FormNotificationEmailDestination.SpecificIndividual.toString();
            recipient.value = (_props$modelValue$rec2 = props.modelValue.recipient) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : undefined;
            emailAddress.value = (_props$modelValue$ema2 = props.modelValue.emailAddress) !== null && _props$modelValue$ema2 !== void 0 ? _props$modelValue$ema2 : "";
            campusTopicGuidOrEmptyString.value = (_toGuidOrNull = toGuidOrNull(props.modelValue.campusTopicGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "";
            source.value = (_props$modelValue$sou2 = props.modelValue.source) !== null && _props$modelValue$sou2 !== void 0 ? _props$modelValue$sou2 : {};
          });
          watch([enabled, destination, recipient, emailAddress, campusTopicGuidOrEmptyString, source], () => {
            var _toNumberOrNull;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              enabled: enabled.value,
              destination: (_toNumberOrNull = toNumberOrNull(destination.value)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : FormNotificationEmailDestination.SpecificIndividual,
              recipient: recipient.value,
              emailAddress: emailAddress.value,
              campusTopicGuid: toGuidOrNull(campusTopicGuidOrEmptyString.value),
              source: source.value
            });
            emit("update:modelValue", newValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(SectionContainer), {
              modelValue: enabled.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => enabled.value = $event),
              toggleText: "Enable",
              title: "Notification Email",
              description: "Notification emails can be sent to specified individuals when each form is completed."
            }, {
              default: withCtx(() => [createVNode(unref(script$j), {
                modelValue: destination.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => destination.value = $event),
                items: notificationDestinationOptions
              }, null, 8, ["modelValue"]), unref(isDestinationSpecificIndividual) ? (openBlock(), createElementBlock("div", _hoisted_1$f, [createElementVNode("div", _hoisted_2$e, [createElementVNode("div", _hoisted_3$d, [createVNode(unref(PersonPicker), {
                modelValue: recipient.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => recipient.value = $event),
                label: "Recipient",
                rules: "required"
              }, null, 8, ["modelValue"])])])])) : unref(isDestinationEmailAddress) ? (openBlock(), createElementBlock("div", _hoisted_4$b, [createElementVNode("div", _hoisted_5$8, [createElementVNode("div", _hoisted_6$7, [createVNode(unref(EmailBox), {
                modelValue: emailAddress.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => emailAddress.value = $event),
                label: "Recipients",
                help: "You can specify multiple email addresses by separating them with a comma.",
                rules: "required",
                allowMultiple: ""
              }, null, 8, ["modelValue"])])])])) : unref(isDestinationCampusTopic) ? (openBlock(), createElementBlock("div", _hoisted_7$6, [createElementVNode("div", _hoisted_8$5, [createElementVNode("div", _hoisted_9$5, [createVNode(unref(DropDownList), {
                modelValue: campusTopicGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => campusTopicGuidOrEmptyString.value = $event),
                label: "Topic",
                rules: "required",
                items: __props.campusTopicOptions
              }, null, 8, ["modelValue", "items"])])])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_10$5, [createVNode(unref(script$i), {
                modelValue: source.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => source.value = $event),
                templateOptions: __props.sourceTemplateOptions
              }, null, 8, ["modelValue", "templateOptions"])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$g.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/notificationEmail.partial.obs";

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
          var _ruleField$0$universa;
          var fieldType = getFieldType((_ruleField$0$universa = ruleField[0].universalFieldTypeGuid) !== null && _ruleField$0$universa !== void 0 ? _ruleField$0$universa : ruleField[0].fieldTypeGuid);
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

      var _hoisted_1$e = {
        class: "form-builder-scroll"
      };
      var _hoisted_2$d = {
        class: "panel-body"
      };
      var _hoisted_3$c = createElementVNode("h4", {
        class: "alert-heading"
      }, "Confirmation Email", -1);
      var _hoisted_4$a = createElementVNode("p", null, " The confirmation e-mail is defined on the template and cannot be changed. ", -1);
      var script$f = defineComponent({
        name: 'communicationsTab.partial',
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
            type: Object,
            required: false
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "validationChanged"],
        setup(__props, _ref) {
          var _props$modelValue$con, _props$modelValue$not, _sources$emailTemplat, _sources$campusTopicO;
          var emit = _ref.emit;
          var props = __props;
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
          function onValidationChanged(errors) {
            emit("validationChanged", errors);
          }
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$e, [createElementVNode("div", _hoisted_2$d, [createVNode(unref(RockForm), {
              submit: formSubmit.value,
              "onUpdate:submit": _cache[2] || (_cache[2] = $event => formSubmit.value = $event),
              onValidationChanged: onValidationChanged
            }, {
              default: withCtx(() => [!unref(isConfirmationEmailForced) ? (openBlock(), createBlock(unref(script$h), {
                key: 0,
                modelValue: confirmationEmail.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => confirmationEmail.value = $event),
                sourceTemplateOptions: unref(sourceTemplateOptions),
                recipientOptions: __props.recipientOptions
              }, null, 8, ["modelValue", "sourceTemplateOptions", "recipientOptions"])) : (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "info"
              }, {
                default: withCtx(() => [_hoisted_3$c, _hoisted_4$a]),
                _: 1
              })), createVNode(unref(script$g), {
                modelValue: notificationEmail.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => notificationEmail.value = $event),
                sourceTemplateOptions: unref(sourceTemplateOptions),
                campusTopicOptions: unref(campusTopicOptions)
              }, null, 8, ["modelValue", "sourceTemplateOptions", "campusTopicOptions"])]),
              _: 1
            }, 8, ["submit"])])]);
          };
        }
      });

      script$f.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/communicationsTab.partial.obs";

      var _hoisted_1$d = ["onClick"];
      var _hoisted_2$c = {
        class: "zone-content"
      };
      var _hoisted_3$b = {
        class: "zone-actions"
      };
      var _hoisted_4$9 = ["onClick"];
      var script$e = defineComponent({
        name: 'configurableZone.partial',
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
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var zoneClasses = computed(() => {
            var classes = ["configurable-zone"];
            if (props.modelValue) {
              classes.push("active");
            }
            return classes;
          });
          function onActionClick() {
            emit("configure");
          }
          function onBodyActionClick() {
            if (props.clickBodyToConfigure) {
              emit("configure");
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(unref(zoneClasses))
            }, [createElementVNode("div", {
              class: "zone-content-container",
              onClick: withModifiers(onBodyActionClick, ["stop"])
            }, [createElementVNode("div", _hoisted_2$c, [renderSlot(_ctx.$slots, "default")])], 8, _hoisted_1$d), createElementVNode("div", _hoisted_3$b, [renderSlot(_ctx.$slots, "preActions"), __props.iconCssClass ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "zone-action",
              onClick: withModifiers(onActionClick, ["stop"])
            }, [createElementVNode("i", {
              class: normalizeClass(__props.iconCssClass + ' fa-fw')
            }, null, 2)], 8, _hoisted_4$9)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "postActions")])], 2);
          };
        }
      });

      script$e.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/configurableZone.partial.obs";

      var _hoisted_1$c = {
        class: "form-sidebar"
      };
      var _hoisted_2$b = {
        class: "sidebar-header"
      };
      var _hoisted_3$a = createElementVNode("i", {
        class: "fa fa-chevron-left"
      }, null, -1);
      var _hoisted_4$8 = [_hoisted_3$a];
      var _hoisted_5$7 = {
        class: "title"
      };
      var _hoisted_6$6 = ["innerHTML"];
      var _hoisted_7$5 = {
        key: 1
      };
      var _hoisted_8$4 = createTextVNode("No source fields available.");
      var _hoisted_9$4 = {
        class: "d-flex justify-content-end"
      };
      var _hoisted_10$4 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_11$4 = {
        key: 2
      };
      var _hoisted_12$3 = {
        key: 0
      };
      var _hoisted_13$2 = ["innerHTML"];
      var _hoisted_14$2 = {
        class: "d-flex justify-content-end"
      };
      var _hoisted_15$2 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var script$d = defineComponent({
        name: 'fieldEditAside.partial',
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
        setup(__props, _ref) {
          var _useFormSources$field, _props$modelValue$des, _props$modelValue$isR, _props$modelValue$isH, _props$modelValue$isS, _props$modelValue$vis, _props$modelValue$con, _props$modelValue$def;
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
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
          var conditionalModel = ref({});
          var conditionalSources = ref(null);
          var conditionalPanelOpen = ref(false);
          var conditionalModalOpen = ref(false);
          var pendingEditConfigurationValueUpdate = undefined;
          var editConfigurationValuesLastUpdate = 0;
          var pendingEditConfigurationValueUpdateTimer = undefined;
          var isUpdatingEditConfigurationValues = false;
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
          function isSafeToClose() {
            formSubmit.value = true;
            var result = validationErrors.value.length === 0;
            if (!result && scrollableElement.value) {
              scrollableElement.value.scroll({
                behavior: "smooth",
                top: 0
              });
            }
            return result;
          }
          function getRuleDescription(rule) {
            var _conditionalSources$v;
            return getFilterRuleDescription(rule, (_conditionalSources$v = conditionalSources.value) !== null && _conditionalSources$v !== void 0 ? _conditionalSources$v : [], props.formFields);
          }
          function loadConditionalSources() {
            return _loadConditionalSources.apply(this, arguments);
          }
          function _loadConditionalSources() {
            _loadConditionalSources = _asyncToGenerator(function* () {
              var providedGuid = toGuidOrNull(props.modelValue.guid);
              var fields = props.formFields.filter(f => !areEqual(f.guid, providedGuid));
              var getFilterSources = invokeBlockAction("GetFilterSources", {
                formFields: fields
              });
              var result = yield Promise.race([getFilterSources, timeoutAsync(2000)]);
              if (!result || !result.isSuccess || !result.data) {
                return;
              }
              conditionalSources.value = result.data;
            });
            return _loadConditionalSources.apply(this, arguments);
          }
          function requestUpdateEditConfigurationValues(fieldGuid, fieldTypeGuid, configurationValues) {
            pendingEditConfigurationValueUpdate = {
              fieldGuid,
              fieldTypeGuid,
              configurationValues
            };
            if (isUpdatingEditConfigurationValues || editConfigurationValuesLastUpdate + 250 > Date.now()) {
              if (pendingEditConfigurationValueUpdateTimer === undefined) {
                pendingEditConfigurationValueUpdateTimer = window.setTimeout(() => {
                  pendingEditConfigurationValueUpdateTimer = undefined;
                  updateEditConfigurationValues();
                }, 250);
              }
              return;
            } else {
              updateEditConfigurationValues();
            }
          }
          function updateEditConfigurationValues() {
            return _updateEditConfigurationValues.apply(this, arguments);
          }
          function _updateEditConfigurationValues() {
            _updateEditConfigurationValues = _asyncToGenerator(function* () {
              if (!pendingEditConfigurationValueUpdate) {
                return;
              }
              isUpdatingEditConfigurationValues = true;
              try {
                var fieldGuid = pendingEditConfigurationValueUpdate.fieldGuid;
                var fieldTypeGuid = pendingEditConfigurationValueUpdate.fieldTypeGuid;
                var configurationValues = pendingEditConfigurationValueUpdate.configurationValues;
                pendingEditConfigurationValueUpdate = undefined;
                var configurationValuesJson = JSON.stringify(configurationValues);
                var data = {
                  fieldTypeGuid: fieldTypeGuid,
                  configurationValues
                };
                var result = yield invokeBlockAction("GetEditConfigurationValues", data);
                if (fieldGuid !== props.modelValue.guid || JSON.stringify(props.modelValue.configurationValues) !== configurationValuesJson) {
                  return;
                }
                if (result.isSuccess && result.data) {
                  emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                    editConfigurationValues: result.data
                  }));
                }
              } finally {
                isUpdatingEditConfigurationValues = false;
                editConfigurationValuesLastUpdate = Date.now();
              }
            });
            return _updateEditConfigurationValues.apply(this, arguments);
          }
          function onBackClick() {
            emit("close");
          }
          function onFieldTypeModelValueUpdate(value) {
            var _value$configurationV;
            emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              configurationValues: value === null || value === void 0 ? void 0 : value.configurationValues,
              defaultValue: value === null || value === void 0 ? void 0 : value.defaultValue
            }));
            requestUpdateEditConfigurationValues(props.modelValue.guid, props.modelValue.fieldTypeGuid, (_value$configurationV = value === null || value === void 0 ? void 0 : value.configurationValues) !== null && _value$configurationV !== void 0 ? _value$configurationV : {});
          }
          function onValidationChanged(errors) {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          }
          function onConditionalEditClick() {
            return _onConditionalEditClick.apply(this, arguments);
          }
          function _onConditionalEditClick() {
            _onConditionalEditClick = _asyncToGenerator(function* () {
              var _visibilityRule$value4;
              conditionalModel.value = (_visibilityRule$value4 = visibilityRule.value) !== null && _visibilityRule$value4 !== void 0 ? _visibilityRule$value4 : {};
              conditionalModalOpen.value = true;
            });
            return _onConditionalEditClick.apply(this, arguments);
          }
          function onConditionalSave() {
            visibilityRule.value = conditionalModel.value;
            conditionalModalOpen.value = false;
          }
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
            var _props$modelValue$des2, _props$modelValue$isR2, _props$modelValue$isH2, _props$modelValue$isS2, _props$modelValue$vis2, _fieldTypeValue$value, _fieldTypeValue$value2, _fieldTypeValue$value3, _props$modelValue$con2, _fieldTypeValue$value4;
            fieldName.value = props.modelValue.name;
            fieldDescription.value = (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "";
            fieldKey.value = props.modelValue.key;
            fieldSize.value = props.modelValue.size;
            isFieldRequired.value = (_props$modelValue$isR2 = props.modelValue.isRequired) !== null && _props$modelValue$isR2 !== void 0 ? _props$modelValue$isR2 : false;
            isFieldLabelHidden.value = (_props$modelValue$isH2 = props.modelValue.isHideLabel) !== null && _props$modelValue$isH2 !== void 0 ? _props$modelValue$isH2 : false;
            isShowOnGrid.value = (_props$modelValue$isS2 = props.modelValue.isShowOnGrid) !== null && _props$modelValue$isS2 !== void 0 ? _props$modelValue$isS2 : false;
            visibilityRule.value = (_props$modelValue$vis2 = props.modelValue.visibilityRule) !== null && _props$modelValue$vis2 !== void 0 ? _props$modelValue$vis2 : null;
            var isConfigChanged = ((_fieldTypeValue$value = fieldTypeValue.value) === null || _fieldTypeValue$value === void 0 ? void 0 : _fieldTypeValue$value.fieldTypeGuid) !== props.modelValue.fieldTypeGuid || !shallowStrictEqual((_fieldTypeValue$value2 = (_fieldTypeValue$value3 = fieldTypeValue.value) === null || _fieldTypeValue$value3 === void 0 ? void 0 : _fieldTypeValue$value3.configurationValues) !== null && _fieldTypeValue$value2 !== void 0 ? _fieldTypeValue$value2 : {}, (_props$modelValue$con2 = props.modelValue.configurationValues) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : {}) || ((_fieldTypeValue$value4 = fieldTypeValue.value) === null || _fieldTypeValue$value4 === void 0 ? void 0 : _fieldTypeValue$value4.defaultValue) !== props.modelValue.defaultValue;
            if (isConfigChanged) {
              var _props$modelValue$con3, _props$modelValue$def2;
              fieldTypeValue.value = {
                fieldTypeGuid: props.modelValue.fieldTypeGuid,
                configurationValues: (_props$modelValue$con3 = props.modelValue.configurationValues) !== null && _props$modelValue$con3 !== void 0 ? _props$modelValue$con3 : {},
                defaultValue: (_props$modelValue$def2 = props.modelValue.defaultValue) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : ""
              };
            }
          });
          expose({
            isSafeToClose
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$c, [createElementVNode("div", _hoisted_2$b, [createElementVNode("div", {
              class: "sidebar-back",
              onClick: onBackClick
            }, _hoisted_4$8), createElementVNode("div", _hoisted_5$7, [unref(asideIconSvg) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "inline-svg icon",
              innerHTML: unref(asideIconSvg)
            }, null, 8, _hoisted_6$6)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(fieldName.value), 1)])]), createElementVNode("div", {
              ref_key: "scrollableElement",
              ref: scrollableElement,
              class: "sidebar-body"
            }, [createVNode(unref(RockForm), {
              submit: formSubmit.value,
              "onUpdate:submit": _cache[8] || (_cache[8] = $event => formSubmit.value = $event),
              onValidationChanged: onValidationChanged,
              class: "sidebar-panels sidebar-field-edit field-edit-aside"
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                modelValue: true,
                title: "Field Type",
                hasCollapse: true
              }, {
                default: withCtx(() => [createVNode(unref(TextBox), {
                  modelValue: fieldName.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => fieldName.value = $event),
                  rules: "required",
                  label: "Name"
                }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                  modelValue: fieldDescription.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => fieldDescription.value = $event),
                  label: "Description",
                  textMode: "multiline"
                }, null, 8, ["modelValue"]), (openBlock(), createBlock(unref(FieldTypeEditor), {
                  modelValue: fieldTypeValue.value,
                  key: unref(fieldTypeEditorKey),
                  "onUpdate:modelValue": onFieldTypeModelValueUpdate,
                  isFieldTypeReadOnly: ""
                }, null, 8, ["modelValue"]))]),
                _: 1
              }), createVNode(unref(Panel), {
                title: "Conditionals",
                modelValue: conditionalPanelOpen.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => conditionalPanelOpen.value = $event),
                hasCollapse: true
              }, {
                default: withCtx(() => [unref(isConditionalsLoading) ? (openBlock(), createBlock(unref(LoadingIndicator), {
                  key: 0
                })) : conditionalSources.value.length < 1 ? (openBlock(), createElementBlock("div", _hoisted_7$5, [createVNode(unref(NotificationBox), {
                  alertType: "warning"
                }, {
                  default: withCtx(() => [_hoisted_8$4]),
                  _: 1
                }), createElementVNode("div", _hoisted_9$4, [createVNode(unref(RockButton), {
                  btnType: "default",
                  btnSize: "sm",
                  disabled: ""
                }, {
                  default: withCtx(() => [_hoisted_10$4]),
                  _: 1
                })])])) : (openBlock(), createElementBlock("div", _hoisted_11$4, [unref(hasConditions) ? (openBlock(), createElementBlock("div", _hoisted_12$3, [createElementVNode("div", {
                  innerHTML: unref(conditionalTitle)
                }, null, 8, _hoisted_13$2), createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(conditionalRules), rule => {
                  return openBlock(), createElementBlock("li", {
                    key: rule.guid
                  }, toDisplayString(getRuleDescription(rule)), 1);
                }), 128))])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_14$2, [createVNode(unref(RockButton), {
                  btnType: "default",
                  btnSize: "sm",
                  onClick: onConditionalEditClick
                }, {
                  default: withCtx(() => [_hoisted_15$2]),
                  _: 1
                })])]))]),
                _: 1
              }, 8, ["modelValue"]), createVNode(unref(Panel), {
                title: "Format",
                hasCollapse: true
              }, {
                default: withCtx(() => [createVNode(unref(RangeSlider), {
                  modelValue: fieldSize.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => fieldSize.value = $event),
                  label: "Column Span",
                  min: 1,
                  max: 12,
                  step: 1,
                  showValueBar: ""
                }, null, 8, ["modelValue"]), createVNode(unref(InlineSwitch), {
                  modelValue: isFieldRequired.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isFieldRequired.value = $event),
                  text: "Required"
                }, null, 8, ["modelValue"]), createVNode(unref(InlineSwitch), {
                  modelValue: isFieldLabelHidden.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isFieldLabelHidden.value = $event),
                  text: "Hide Label"
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(unref(Panel), {
                title: "Advanced",
                hasCollapse: true
              }, {
                default: withCtx(() => [createVNode(unref(TextBox), {
                  modelValue: fieldKey.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => fieldKey.value = $event),
                  rules: unref(fieldKeyRules),
                  label: "Field Key"
                }, null, 8, ["modelValue", "rules"]), createVNode(unref(InlineSwitch), {
                  modelValue: isShowOnGrid.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isShowOnGrid.value = $event),
                  text: "Show on Results Grid"
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["submit"])], 512), createVNode(unref(Modal), {
              modelValue: conditionalModalOpen.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => conditionalModalOpen.value = $event),
              title: "Conditional Settings",
              saveText: "Save",
              onSave: onConditionalSave
            }, {
              default: withCtx(() => {
                var _conditionalSources$v2;
                return [createVNode(unref(FieldFilterEditor), {
                  modelValue: conditionalModel.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => conditionalModel.value = $event),
                  title: fieldName.value,
                  sources: (_conditionalSources$v2 = conditionalSources.value) !== null && _conditionalSources$v2 !== void 0 ? _conditionalSources$v2 : []
                }, null, 8, ["modelValue", "title", "sources"])];
              }),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      script$d.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/fieldEditAside.partial.obs";

      var _hoisted_1$b = createTextVNode("Save");
      var script$c = defineComponent({
        name: 'formContentModal.partial',
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
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var isVisible = useVModelPassthrough(props, "isVisible", emit);
          var submitForm = ref(false);
          var contentTextBox = ref(null);
          function onStartSave() {
            submitForm.value = true;
          }
          function onSubmitForm() {
            emit("save");
          }
          watch(isVisible, () => {
            nextTick(() => {
              if (contentTextBox.value) {
                var input = contentTextBox.value.querySelector("textarea");
                input === null || input === void 0 ? void 0 : input.focus();
              }
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isVisible) ? isVisible.value = $event : null)
            }, {
              customButtons: withCtx(() => [createVNode(unref(RockButton), {
                btnType: "primary",
                onClick: onStartSave
              }, {
                default: withCtx(() => [_hoisted_1$b]),
                _: 1
              })]),
              default: withCtx(() => [createVNode(unref(RockForm), {
                submit: submitForm.value,
                "onUpdate:submit": _cache[1] || (_cache[1] = $event => submitForm.value = $event),
                onSubmit: onSubmitForm
              }, {
                default: withCtx(() => [createElementVNode("div", {
                  ref_key: "contentTextBox",
                  ref: contentTextBox
                }, [createVNode(unref(TextBox), {
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  label: "Content",
                  textMode: "multiline"
                }, null, 8, ["modelValue"])], 512)]),
                _: 1
              }, 8, ["submit"])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$c.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/formContentModal.partial.obs";

      var _hoisted_1$a = {
        class: "zone-body"
      };
      var _hoisted_2$a = ["innerHTML"];
      var _hoisted_3$9 = {
        key: 1,
        class: "text-center text-muted"
      };
      var script$b = defineComponent({
        name: 'formContentZone.partial',
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
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var hasContent = computed(() => !!props.modelValue);
          var safeContent = computed(() => {
            if (!props.modelValue) {
              return "";
            }
            var div = document.createElement("div");
            div.innerHTML = props.modelValue;
            return div.innerHTML;
          });
          function onConfigure() {
            emit("configure");
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$e), {
              modelValue: __props.isActive,
              iconCssClass: __props.iconCssClass,
              onConfigure: onConfigure
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1$a, [unref(hasContent) ? (openBlock(), createElementBlock("div", {
                key: 0,
                style: {
                  "min-height": "24px"
                },
                innerHTML: unref(safeContent)
              }, null, 8, _hoisted_2$a)) : (openBlock(), createElementBlock("div", _hoisted_3$9, toDisplayString(__props.placeholder), 1))])]),
              _: 1
            }, 8, ["modelValue", "iconCssClass"]);
          };
        }
      });

      script$b.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/formContentZone.partial.obs";

      var _hoisted_1$9 = {
        class: "form-sidebar"
      };
      var _hoisted_2$9 = createElementVNode("div", {
        class: "sidebar-header"
      }, [createElementVNode("span", {
        class: "title"
      }, "Field List")], -1);
      var _hoisted_3$8 = {
        class: "sidebar-body"
      };
      var _hoisted_4$7 = {
        class: "panel-body"
      };
      var _hoisted_5$6 = createElementVNode("div", {
        class: "form-template-item form-template-item-section"
      }, [createElementVNode("i", {
        class: "fa fa-expand fa-fw"
      }), createTextVNode(" Section ")], -1);
      var _hoisted_6$5 = [_hoisted_5$6];
      var _hoisted_7$4 = {
        class: "mt-3"
      };
      var _hoisted_8$3 = createTextVNode("Common Fields");
      var _hoisted_9$3 = {
        class: "form-template-item-list"
      };
      var _hoisted_10$3 = ["data-field-type"];
      var _hoisted_11$3 = ["innerHTML"];
      var _hoisted_12$2 = {
        class: "text"
      };
      var _hoisted_13$1 = createTextVNode("Additional Fields ");
      var _hoisted_14$1 = {
        key: 0,
        class: "form-template-item-list"
      };
      var _hoisted_15$1 = ["data-field-type"];
      var _hoisted_16 = ["innerHTML"];
      var _hoisted_17 = {
        class: "text"
      };
      var _hoisted_18 = {
        class: "mt-3"
      };
      var _hoisted_19 = createTextVNode(" Person entry is enabled on the template and cannot be changed. ");
      var script$a = defineComponent({
        name: 'generalAside.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$cam, _props$modelValue$cam2, _props$modelValue$has, _useFormSources$field;
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
          var campusSetFrom = ref((_props$modelValue$cam = (_props$modelValue$cam2 = props.modelValue.campusSetFrom) === null || _props$modelValue$cam2 === void 0 ? void 0 : _props$modelValue$cam2.toString()) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : "");
          var hasPersonEntry = ref((_props$modelValue$has = props.modelValue.hasPersonEntry) !== null && _props$modelValue$has !== void 0 ? _props$modelValue$has : false);
          var fieldTypes = (_useFormSources$field = useFormSources().fieldTypes) !== null && _useFormSources$field !== void 0 ? _useFormSources$field : [];
          var isAdditionalFieldsVisible = ref(false);
          var autoSyncModelValue = true;
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
          var commonFieldTypes = computed(() => {
            return fieldTypes.filter(f => f.isCommon);
          });
          var advancedFieldTypes = computed(() => {
            return fieldTypes.filter(f => !f.isCommon);
          });
          var additionalFieldsClass = computed(() => {
            return isAdditionalFieldsVisible.value ? "fa fa-chevron-up" : "fa fa-chevron-down";
          });
          function isSafeToClose() {
            return true;
          }
          function onAdditionalFieldsClick() {
            isAdditionalFieldsVisible.value = !isAdditionalFieldsVisible.value;
          }
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
          expose({
            isSafeToClose
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$9, [_hoisted_2$9, createElementVNode("div", _hoisted_3$8, [createElementVNode("div", _hoisted_4$7, [withDirectives((openBlock(), createElementBlock("div", null, _hoisted_6$5)), [[unref(DragSource), __props.sectionDragOptions]]), createElementVNode("div", _hoisted_7$4, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_8$3]),
              _: 1
            }), withDirectives((openBlock(), createElementBlock("div", _hoisted_9$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(commonFieldTypes), field => {
              return openBlock(), createElementBlock("div", {
                class: "form-template-item form-template-item-field",
                "data-field-type": field.guid
              }, [createElementVNode("span", {
                class: "inline-svg icon",
                innerHTML: field.svg
              }, null, 8, _hoisted_11$3), createElementVNode("div", _hoisted_12$2, toDisplayString(field.text), 1)], 8, _hoisted_10$3);
            }), 256))])), [[unref(DragSource), __props.fieldDragOptions]]), createElementVNode("div", {
              onClick: onAdditionalFieldsClick,
              class: "mt-2"
            }, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_13$1, createElementVNode("i", {
                class: normalizeClass(unref(additionalFieldsClass))
              }, null, 2)]),
              _: 1
            })]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [isAdditionalFieldsVisible.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_14$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(advancedFieldTypes), field => {
                return openBlock(), createElementBlock("div", {
                  class: "form-template-item form-template-item-field",
                  "data-field-type": field.guid
                }, [createElementVNode("span", {
                  class: "inline-svg icon",
                  innerHTML: field.svg
                }, null, 8, _hoisted_16), createElementVNode("div", _hoisted_17, toDisplayString(field.text), 1)], 8, _hoisted_15$1);
              }), 256))])), [[unref(DragSource), __props.fieldDragOptions]]) : createCommentVNode("v-if", true)]),
              _: 1
            })]), createElementVNode("div", _hoisted_18, [!__props.isPersonEntryForced ? (openBlock(), createBlock(unref(InlineSwitch), {
              key: 0,
              modelValue: hasPersonEntry.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => hasPersonEntry.value = $event),
              text: "Enable Person Entry"
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_19]),
              _: 1
            })), createVNode(unref(DropDownList), {
              modelValue: campusSetFrom.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => campusSetFrom.value = $event),
              label: "Campus Set From",
              items: campusSetFromOptions
            }, null, 8, ["modelValue"])])])])]);
          };
        }
      });

      script$a.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/generalAside.partial.obs";

      var _hoisted_1$8 = {
        class: "row"
      };
      var _hoisted_2$8 = {
        class: "row"
      };
      var _hoisted_3$7 = {
        class: "row"
      };
      var _hoisted_4$6 = {
        class: "row"
      };
      var _hoisted_5$5 = {
        class: "row"
      };
      var _hoisted_6$4 = {
        class: "row"
      };
      var _hoisted_7$3 = {
        class: "row"
      };
      var script$9 = defineComponent({
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
            return openBlock(), createElementBlock("div", null, [createElementVNode("div", _hoisted_1$8, [createElementVNode("div", {
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
            }, null, 8, ["modelValue", "items"])], 2)]), createElementVNode("div", _hoisted_2$8, [createElementVNode("div", {
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
            }, null, 8, ["modelValue", "items"])], 2)]), createElementVNode("div", _hoisted_3$7, [createElementVNode("div", {
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
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_4$6, [createElementVNode("div", {
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
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_5$5, [createElementVNode("div", {
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
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_6$4, [createElementVNode("div", {
              class: normalizeClass(unref(columnClass))
            }, [createVNode(unref(DropDownList), {
              modelValue: raceEntry.value,
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => raceEntry.value = $event),
              label: "Race Entry",
              showBlankItem: false,
              items: formFieldVisibilityOptions
            }, null, 8, ["modelValue"])], 2)]), createElementVNode("div", _hoisted_7$3, [createElementVNode("div", {
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

      script$9.__file = "src/WorkFlow/FormBuilder/Shared/personEntrySettings.partial.obs";

      var _hoisted_1$7 = {
        class: "form-sidebar"
      };
      var _hoisted_2$7 = createElementVNode("i", {
        class: "fa fa-chevron-left"
      }, null, -1);
      var _hoisted_3$6 = [_hoisted_2$7];
      var _hoisted_4$5 = createElementVNode("span", {
        class: "title"
      }, [createElementVNode("i", {
        class: "fa fa-fw fa-user icon"
      }), createTextVNode(" Person Entry ")], -1);
      var _hoisted_5$4 = {
        class: "panel-body"
      };
      var script$8 = defineComponent({
        name: 'personEntryEditAside.partial',
        props: {
          modelValue: {
            type: Object,
            default: {}
          }
        },
        emits: ["update:modelValue", "close", "validationChanged"],
        setup(__props, _ref) {
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var validationErrors = ref([]);
          var scrollableElement = ref(null);
          var formSubmit = ref(false);
          function isSafeToClose() {
            formSubmit.value = true;
            var result = validationErrors.value.length === 0;
            if (!result && scrollableElement.value) {
              scrollableElement.value.scroll({
                behavior: "smooth",
                top: 0
              });
            }
            return result;
          }
          function onBackClick() {
            emit("close");
          }
          function onValidationChanged(errors) {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          }
          var options = useFormSources();
          expose({
            isSafeToClose
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$7, [createElementVNode("div", {
              class: "sidebar-header"
            }, [createElementVNode("div", {
              class: "sidebar-back",
              onClick: onBackClick
            }, _hoisted_3$6), _hoisted_4$5]), createElementVNode("div", {
              ref_key: "scrollableElement",
              ref: scrollableElement,
              class: "sidebar-body"
            }, [createVNode(unref(RockForm), {
              submit: formSubmit.value,
              "onUpdate:submit": _cache[1] || (_cache[1] = $event => formSubmit.value = $event),
              onValidationChanged: onValidationChanged,
              class: "sidebar-panels"
            }, {
              default: withCtx(() => {
                var _unref$recordStatusOp, _unref$connectionStat, _unref$campusTypeOpti, _unref$campusStatusOp, _unref$addressTypeOpt;
                return [createElementVNode("div", _hoisted_5$4, [createVNode(unref(script$9), {
                  modelValue: unref(internalValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                  isVertical: "",
                  recordStatusOptions: (_unref$recordStatusOp = unref(options).recordStatusOptions) !== null && _unref$recordStatusOp !== void 0 ? _unref$recordStatusOp : [],
                  connectionStatusOptions: (_unref$connectionStat = unref(options).connectionStatusOptions) !== null && _unref$connectionStat !== void 0 ? _unref$connectionStat : [],
                  campusTypeOptions: (_unref$campusTypeOpti = unref(options).campusTypeOptions) !== null && _unref$campusTypeOpti !== void 0 ? _unref$campusTypeOpti : [],
                  campusStatusOptions: (_unref$campusStatusOp = unref(options).campusStatusOptions) !== null && _unref$campusStatusOp !== void 0 ? _unref$campusStatusOp : [],
                  addressTypeOptions: (_unref$addressTypeOpt = unref(options).addressTypeOptions) !== null && _unref$addressTypeOpt !== void 0 ? _unref$addressTypeOpt : []
                }, null, 8, ["modelValue", "recordStatusOptions", "connectionStatusOptions", "campusTypeOptions", "campusStatusOptions", "addressTypeOptions"])])];
              }),
              _: 1
            }, 8, ["submit"])], 512)]);
          };
        }
      });

      script$8.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/personEntryEditAside.partial.obs";

      var _hoisted_1$6 = {
        class: "form-sidebar"
      };
      var _hoisted_2$6 = createElementVNode("i", {
        class: "fa fa-chevron-left"
      }, null, -1);
      var _hoisted_3$5 = [_hoisted_2$6];
      var _hoisted_4$4 = createElementVNode("div", {
        class: "title"
      }, " Section ", -1);
      var _hoisted_5$3 = {
        class: "sidebar-panels"
      };
      var _hoisted_6$3 = createElementVNode("div", null, null, -1);
      var _hoisted_7$2 = {
        key: 1
      };
      var _hoisted_8$2 = createTextVNode("No source fields available.");
      var _hoisted_9$2 = {
        class: "d-flex justify-content-end"
      };
      var _hoisted_10$2 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_11$2 = {
        key: 2
      };
      var _hoisted_12$1 = {
        key: 0
      };
      var _hoisted_13 = ["innerHTML"];
      var _hoisted_14 = {
        class: "d-flex justify-content-end"
      };
      var _hoisted_15 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var script$7 = defineComponent({
        name: 'sectionEditAside.partial',
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
        setup(__props, _ref) {
          var _props$modelValue$typ, _props$modelValue$vis, _useFormSources$secti;
          var expose = _ref.expose,
            emit = _ref.emit;
          var props = __props;
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
          var conditionalModel = ref({});
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
          function isSafeToClose() {
            formSubmit.value = true;
            return validationErrors.value.length === 0;
          }
          function getRuleDescription(rule) {
            var _conditionalSources$v;
            return getFilterRuleDescription(rule, (_conditionalSources$v = conditionalSources.value) !== null && _conditionalSources$v !== void 0 ? _conditionalSources$v : [], props.formFields);
          }
          function loadConditionalSources() {
            return _loadConditionalSources.apply(this, arguments);
          }
          function _loadConditionalSources() {
            _loadConditionalSources = _asyncToGenerator(function* () {
              var getFilterSources = invokeBlockAction("GetFilterSources", {
                formFields: props.formFields
              });
              var result = yield Promise.race([getFilterSources, timeoutAsync(2000)]);
              if (!result || !result.isSuccess || !result.data) {
                return;
              }
              conditionalSources.value = result.data;
            });
            return _loadConditionalSources.apply(this, arguments);
          }
          function onValidationChanged(errors) {
            validationErrors.value = errors;
            emit("validationChanged", errors);
          }
          function onBackClick() {
            emit("close");
          }
          function onConditionalEditClick() {
            return _onConditionalEditClick.apply(this, arguments);
          }
          function _onConditionalEditClick() {
            _onConditionalEditClick = _asyncToGenerator(function* () {
              var _visibilityRule$value4;
              conditionalModel.value = (_visibilityRule$value4 = visibilityRule.value) !== null && _visibilityRule$value4 !== void 0 ? _visibilityRule$value4 : {};
              conditionalModalOpen.value = true;
            });
            return _onConditionalEditClick.apply(this, arguments);
          }
          function onConditionalSave() {
            visibilityRule.value = conditionalModel.value;
            conditionalModalOpen.value = false;
          }
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
          expose({
            isSafeToClose
          });
          return (_ctx, _cache) => {
            var _component_NotificationBox = resolveComponent("NotificationBox");
            return openBlock(), createElementBlock("div", _hoisted_1$6, [createElementVNode("div", {
              class: "sidebar-header"
            }, [createElementVNode("div", {
              class: "sidebar-back",
              onClick: onBackClick
            }, _hoisted_3$5), _hoisted_4$4]), createVNode(unref(RockForm), {
              submit: formSubmit.value,
              "onUpdate:submit": _cache[5] || (_cache[5] = $event => formSubmit.value = $event),
              onValidationChanged: onValidationChanged,
              class: "sidebar-body"
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_5$3, [_hoisted_6$3, createVNode(unref(Panel), {
                modelValue: true,
                title: "Section Configuration",
                hasCollapse: ""
              }, {
                default: withCtx(() => [createVNode(unref(TextBox), {
                  modelValue: title.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => title.value = $event),
                  label: "Title"
                }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                  modelValue: description.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => description.value = $event),
                  label: "Description",
                  textMode: "multiline"
                }, null, 8, ["modelValue"]), createVNode(unref(InlineSwitch), {
                  modelValue: showHeadingSeparator.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => showHeadingSeparator.value = $event),
                  label: "Show Heading Separator"
                }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
                  modelValue: sectionType.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => sectionType.value = $event),
                  label: "Type",
                  items: unref(sectionTypeOptions),
                  showBlankItem: false
                }, null, 8, ["modelValue", "items"])]),
                _: 1
              }), createVNode(unref(Panel), {
                title: "Conditionals",
                modelValue: conditionalPanelOpen.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => conditionalPanelOpen.value = $event),
                hasCollapse: true
              }, {
                default: withCtx(() => [unref(isConditionalsLoading) ? (openBlock(), createBlock(unref(LoadingIndicator), {
                  key: 0
                })) : conditionalSources.value.length < 1 ? (openBlock(), createElementBlock("div", _hoisted_7$2, [createVNode(_component_NotificationBox, {
                  alertType: "warning"
                }, {
                  default: withCtx(() => [_hoisted_8$2]),
                  _: 1
                }), createElementVNode("div", _hoisted_9$2, [createVNode(unref(RockButton), {
                  btnType: "default",
                  btnSize: "sm",
                  disabled: ""
                }, {
                  default: withCtx(() => [_hoisted_10$2]),
                  _: 1
                })])])) : (openBlock(), createElementBlock("div", _hoisted_11$2, [unref(hasConditions) ? (openBlock(), createElementBlock("div", _hoisted_12$1, [createElementVNode("div", {
                  innerHTML: unref(conditionalTitle)
                }, null, 8, _hoisted_13), createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(conditionalRules), rule => {
                  return openBlock(), createElementBlock("li", {
                    key: rule.guid
                  }, toDisplayString(getRuleDescription(rule)), 1);
                }), 128))])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_14, [createVNode(unref(RockButton), {
                  btnType: "default",
                  btnSize: "sm",
                  onClick: onConditionalEditClick
                }, {
                  default: withCtx(() => [_hoisted_15]),
                  _: 1
                })])]))]),
                _: 1
              }, 8, ["modelValue"])])]),
              _: 1
            }, 8, ["submit"]), createVNode(unref(Modal), {
              modelValue: conditionalModalOpen.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => conditionalModalOpen.value = $event),
              title: "Conditional Settings",
              saveText: "Save",
              onSave: onConditionalSave
            }, {
              default: withCtx(() => {
                var _conditionalSources$v2;
                return [createVNode(unref(FieldFilterEditor), {
                  modelValue: conditionalModel.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => conditionalModel.value = $event),
                  title: title.value,
                  sources: (_conditionalSources$v2 = conditionalSources.value) !== null && _conditionalSources$v2 !== void 0 ? _conditionalSources$v2 : []
                }, null, 8, ["modelValue", "title", "sources"])];
              }),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      script$7.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/sectionEditAside.partial.obs";

      var script$6 = defineComponent({
        name: 'fieldWrapper.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var _props$modelValue$def;
          var props = __props;
          function getAttributeFromField(field) {
            var _field$universalField, _field$isHideLabel, _field$isRequired, _field$description;
            return {
              attributeGuid: newGuid(),
              fieldTypeGuid: (_field$universalField = field.universalFieldTypeGuid) !== null && _field$universalField !== void 0 ? _field$universalField : field.fieldTypeGuid,
              name: !((_field$isHideLabel = field.isHideLabel) !== null && _field$isHideLabel !== void 0 ? _field$isHideLabel : false) ? field.name : "",
              key: field.key,
              configurationValues: field.editConfigurationValues,
              isRequired: (_field$isRequired = field.isRequired) !== null && _field$isRequired !== void 0 ? _field$isRequired : false,
              description: (_field$description = field.description) !== null && _field$description !== void 0 ? _field$description : "",
              order: 0,
              categories: []
            };
          }
          var attribute = ref(getAttributeFromField(props.modelValue));
          var defaultValue = ref((_props$modelValue$def = props.modelValue.defaultValue) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : "");
          watch(() => props.modelValue, () => {
            var _props$modelValue$def2;
            attribute.value = getAttributeFromField(props.modelValue);
            defaultValue.value = (_props$modelValue$def2 = props.modelValue.defaultValue) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : "";
          }, {
            deep: true
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockField), {
              modelValue: defaultValue.value,
              attribute: attribute.value,
              isEditMode: ""
            }, null, 8, ["modelValue", "attribute"]);
          };
        }
      });

      script$6.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/fieldWrapper.partial.obs";

      var _hoisted_1$5 = {
        class: "zone-body"
      };
      var _hoisted_2$5 = {
        key: 0
      };
      var _hoisted_3$4 = {
        key: 1,
        class: "mb-2"
      };
      var _hoisted_4$3 = {
        key: 2
      };
      var _hoisted_5$2 = ["data-section-id"];
      var _hoisted_6$2 = {
        class: "zone-body"
      };
      var _hoisted_7$1 = createElementVNode("div", {
        class: "zone-action zone-action-move"
      }, [createElementVNode("i", {
        class: "fa fa-bars fa-fw"
      })], -1);
      var _hoisted_8$1 = ["onClick"];
      var _hoisted_9$1 = createElementVNode("div", {
        class: "zone-action zone-action-move"
      }, [createElementVNode("i", {
        class: "fa fa-bars fa-fw"
      })], -1);
      var _hoisted_10$1 = ["onClick"];
      var _hoisted_11$1 = createElementVNode("i", {
        class: "fa fa-times fa-fw"
      }, null, -1);
      var _hoisted_12 = [_hoisted_11$1];
      var script$5 = defineComponent({
        name: 'sectionZone.partial',
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
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$e), {
              class: "zone-section",
              modelValue: unref(isSectionActive)
            }, {
              preActions: withCtx(() => [_hoisted_9$1]),
              postActions: withCtx(() => [createElementVNode("div", {
                class: "zone-action zone-action-delete",
                onClick: withModifiers(onDelete, ["stop"])
              }, _hoisted_12, 8, _hoisted_10$1)]),
              default: withCtx(() => [createElementVNode("div", _hoisted_1$5, [createElementVNode("div", {
                class: normalizeClass(["d-flex flex-column", unref(sectionTypeClass)]),
                style: {
                  "flex-grow": "1"
                }
              }, [createElementVNode("div", null, [title.value ? (openBlock(), createElementBlock("h3", _hoisted_2$5, toDisplayString(title.value), 1)) : createCommentVNode("v-if", true), description.value ? (openBlock(), createElementBlock("div", _hoisted_3$4, toDisplayString(description.value), 1)) : createCommentVNode("v-if", true), showSeparator.value ? (openBlock(), createElementBlock("hr", _hoisted_4$3)) : createCommentVNode("v-if", true)]), withDirectives((openBlock(), createElementBlock("div", {
                class: "form-section",
                "data-section-id": sectionGuid.value
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, field => {
                return openBlock(), createBlock(unref(script$e), {
                  key: field.guid,
                  modelValue: isFieldActive(field),
                  class: normalizeClass(getFieldColumnSize(field)),
                  "data-field-id": field.guid,
                  clickBodyToConfigure: "",
                  onConfigure: $event => onConfigureField(field)
                }, {
                  preActions: withCtx(() => [_hoisted_7$1]),
                  postActions: withCtx(() => [createElementVNode("i", {
                    class: "fa fa-times fa-fw zone-action zone-action-delete",
                    onClick: withModifiers($event => onDeleteField(field), ["stop"])
                  }, null, 8, _hoisted_8$1)]),
                  default: withCtx(() => [createElementVNode("div", _hoisted_6$2, [createVNode(unref(script$6), {
                    modelValue: field
                  }, null, 8, ["modelValue"])])]),
                  _: 2
                }, 1032, ["modelValue", "class", "data-field-id", "onConfigure"]);
              }), 128))], 8, _hoisted_5$2)), [[unref(DragSource), __props.reorderDragOptions], [unref(DragTarget), __props.reorderDragOptions.id], [unref(DragTarget), __props.dragTargetId, "2"]])], 2)])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$5.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/sectionZone.partial.obs";

      var _hoisted_1$4 = {
        class: "form-layout"
      };
      var _hoisted_2$4 = createElementVNode("div", {
        class: "zone-body"
      }, [createElementVNode("div", {
        class: "text-center text-muted"
      }, "Person Entry Form")], -1);
      var _hoisted_3$3 = {
        class: "form-layout-body"
      };
      var script$4 = defineComponent({
        name: 'formBuilderTab.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          templateOverrides: {
            type: Object,
            required: false
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "validationChanged"],
        setup(__props, _ref) {
          var _sources$sectionTypeO, _props$modelValue$sec, _props$modelValue$hea, _props$modelValue$foo, _sources$fieldTypes, _props$modelValue$per, _sources$defaultSecti;
          var emit = _ref.emit;
          var props = __props;
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
                operation.element.remove();
                var fieldTypeGuid = toGuidOrNull(operation.element.dataset.fieldType);
                var sectionGuid = toGuidOrNull(operation.targetContainer.dataset.sectionId);
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
                var sourceSectionGuid = toGuidOrNull(operation.sourceContainer.dataset.sectionId);
                var targetSectionGuid = toGuidOrNull(operation.targetContainer.dataset.sectionId);
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
          function canCloseAside() {
            if (activeAside.value) {
              return activeAside.value.isSafeToClose();
            } else {
              return true;
            }
          }
          function closeAside() {
            editField.value = null;
            activeZone.value = "";
            sectionAsideSettings.value = null;
            emit("validationChanged", []);
          }
          function onConfigureFormHeader() {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            formHeaderEditContent.value = formHeaderContent.value;
            activeZone.value = formHeaderZoneGuid;
          }
          function onConfigureFormFooter() {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            formFooterEditContent.value = formFooterContent.value;
            activeZone.value = formFooterZoneGuid;
          }
          function onConfigurePersonEntry() {
            if (!canCloseAside()) {
              return;
            }
            closeAside();
            activeZone.value = personEntryZoneGuid;
          }
          function onConfigureSection(section) {
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
          }
          function onConfigureField(field) {
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
          }
          function onAsideClose() {
            if (!canCloseAside()) {
              return;
            }
            activeZone.value = "";
            editField.value = null;
            sectionAsideSettings.value = null;
          }
          function onFieldEditUpdate(value) {
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
          }
          function onFieldDelete(_x) {
            return _onFieldDelete.apply(this, arguments);
          }
          function _onFieldDelete() {
            _onFieldDelete = _asyncToGenerator(function* (guid) {
              if (!(yield confirmDelete("field"))) {
                return;
              }
              deleteField(guid);
            });
            return _onFieldDelete.apply(this, arguments);
          }
          function deleteField(guid) {
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
          }
          function onSectionEditUpdate(value) {
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
          }
          function onSectionDelete(_x2) {
            return _onSectionDelete.apply(this, arguments);
          }
          function _onSectionDelete() {
            _onSectionDelete = _asyncToGenerator(function* (guid) {
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
            return _onSectionDelete.apply(this, arguments);
          }
          function onEditPersonEntryUpdate(value) {
            personEntryAsideSettings.value = value;
          }
          function onFormHeaderSave() {
            formHeaderContent.value = formHeaderEditContent.value;
            closeAside();
          }
          function onFormFooterSave() {
            formFooterContent.value = formFooterEditContent.value;
            closeAside();
          }
          function onFieldEditValidationChanged(errors) {
            if (showFieldAside.value) {
              emit("validationChanged", errors);
            }
          }
          function onSectionValidationChanged(errors) {
            if (showSectionAside.value) {
              emit("validationChanged", errors);
            }
          }
          function onPersonEntryValidationChanged(errors) {
            if (showPersonEntryAside.value) {
              emit("validationChanged", errors);
            }
          }
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", {
              ref_key: "bodyElement",
              ref: bodyElement,
              class: "form-builder-grow"
            }, [unref(showGeneralAside) ? (openBlock(), createBlock(unref(script$a), {
              key: 0,
              modelValue: generalAsideSettings.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => generalAsideSettings.value = $event),
              ref_key: "generalAsideComponentInstance",
              ref: generalAsideComponentInstance,
              isPersonEntryForced: unref(isPersonEntryForced),
              fieldTypes: availableFieldTypes.value,
              sectionDragOptions: unref(sectionDragSourceOptions),
              fieldDragOptions: unref(fieldDragSourceOptions)
            }, null, 8, ["modelValue", "isPersonEntryForced", "fieldTypes", "sectionDragOptions", "fieldDragOptions"])) : unref(showFieldAside) ? (openBlock(), createBlock(unref(script$d), {
              key: 1,
              modelValue: editField.value,
              ref_key: "fieldEditAsideComponentInstance",
              ref: fieldEditAsideComponentInstance,
              fieldTypes: availableFieldTypes.value,
              formFields: unref(existingFields),
              "onUpdate:modelValue": onFieldEditUpdate,
              onClose: onAsideClose,
              onValidationChanged: onFieldEditValidationChanged
            }, null, 8, ["modelValue", "fieldTypes", "formFields"])) : unref(showSectionAside) ? (openBlock(), createBlock(unref(script$7), {
              key: 2,
              modelValue: sectionAsideSettings.value,
              ref_key: "sectionEditAsideComponentInstance",
              ref: sectionEditAsideComponentInstance,
              formFields: unref(existingFields),
              "onUpdate:modelValue": onSectionEditUpdate,
              onClose: onAsideClose,
              onValidationChanged: onSectionValidationChanged
            }, null, 8, ["modelValue", "formFields"])) : unref(showPersonEntryAside) ? (openBlock(), createBlock(unref(script$8), {
              key: 3,
              modelValue: personEntryAsideSettings.value,
              ref_key: "personEntryEditAsideComponentInstance",
              ref: personEntryEditAsideComponentInstance,
              "onUpdate:modelValue": onEditPersonEntryUpdate,
              onClose: onAsideClose,
              onValidationChanged: onPersonEntryValidationChanged
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$4, [unref(templateFormHeaderContent) ? (openBlock(), createBlock(unref(script$b), {
              key: 0,
              modelValue: unref(templateFormHeaderContent),
              placeholder: "",
              iconCssClass: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(script$b), {
              modelValue: formHeaderContent.value,
              isActive: unref(isFormHeaderActive),
              onConfigure: onConfigureFormHeader,
              placeholder: "Form Header"
            }, null, 8, ["modelValue", "isActive"]), unref(hasPersonEntry) ? (openBlock(), createBlock(unref(script$e), {
              key: 1,
              modelValue: unref(isPersonEntryActive),
              iconCssClass: unref(personEntryZoneIconClass),
              onConfigure: onConfigurePersonEntry
            }, {
              default: withCtx(() => [_hoisted_2$4]),
              _: 1
            }, 8, ["modelValue", "iconCssClass"])) : createCommentVNode("v-if", true), withDirectives((openBlock(), createElementBlock("div", _hoisted_3$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(sections, section => {
              return openBlock(), createBlock(unref(script$5), {
                key: section.guid,
                modelValue: section,
                activeZone: activeZone.value,
                dragTargetId: unref(fieldDragSourceOptions).id,
                reorderDragOptions: unref(fieldReorderDragSourceOptions),
                sectionTypeOptions: unref(sectionTypeOptions),
                onConfigure: $event => onConfigureSection(section),
                onConfigureField: onConfigureField,
                onDelete: onSectionDelete,
                onDeleteField: onFieldDelete
              }, null, 8, ["modelValue", "activeZone", "dragTargetId", "reorderDragOptions", "sectionTypeOptions", "onConfigure"]);
            }), 128))])), [[unref(DragTarget), unref(sectionDragSourceOptions).id], [unref(DragSource), unref(sectionReorderDragSourceOptions)], [unref(DragTarget), unref(sectionReorderDragSourceOptions).id, "2"]]), createVNode(unref(script$b), {
              modelValue: formFooterContent.value,
              isActive: unref(isFormFooterActive),
              onConfigure: onConfigureFormFooter,
              placeholder: "Form Footer"
            }, null, 8, ["modelValue", "isActive"]), unref(templateFormFooterContent) ? (openBlock(), createBlock(unref(script$b), {
              key: 2,
              modelValue: unref(templateFormFooterContent),
              placeholder: "",
              iconCssClass: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])], 512), createVNode(unref(script$c), {
              modelValue: formHeaderEditContent.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => formHeaderEditContent.value = $event),
              isVisible: unref(isFormHeaderActive),
              "onUpdate:isVisible": _cache[2] || (_cache[2] = $event => isRef(isFormHeaderActive) ? isFormHeaderActive.value = $event : null),
              title: "Form Header",
              onSave: onFormHeaderSave
            }, null, 8, ["modelValue", "isVisible"]), createVNode(unref(script$c), {
              modelValue: formFooterEditContent.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => formFooterEditContent.value = $event),
              isVisible: unref(isFormFooterActive),
              "onUpdate:isVisible": _cache[4] || (_cache[4] = $event => isRef(isFormFooterActive) ? isFormFooterActive.value = $event : null),
              title: "Form Footer",
              onSave: onFormFooterSave
            }, null, 8, ["modelValue", "isVisible"])], 64);
          };
        }
      });

      script$4.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/formBuilderTab.partial.obs";

      var _hoisted_1$3 = {
        key: 0
      };
      var _hoisted_2$3 = {
        key: 1
      };
      var script$3 = defineComponent({
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
              default: withCtx(() => [createVNode(unref(script$j), {
                modelValue: type.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => type.value = $event),
                items: typeOptions
              }, null, 8, ["modelValue"]), unref(isTypeDisplayMessage) ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(TextBox), {
                modelValue: message.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => message.value = $event),
                label: "Completion Message",
                textMode: "multiline",
                rules: "required"
              }, null, 8, ["modelValue"])])) : unref(isTypeRedirect) ? (openBlock(), createElementBlock("div", _hoisted_2$3, [createVNode(unref(TextBox), {
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

      script$3.__file = "src/WorkFlow/FormBuilder/Shared/completionSettings.partial.obs";

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "col-md-6"
      };
      var _hoisted_3$2 = createTextVNode(" The template has enforced the login required setting. ");
      var _hoisted_4$2 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6$1 = {
        class: "col-md-6"
      };
      var script$2 = defineComponent({
        name: 'generalSettings.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          templateOverrides: {
            type: Object,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$nam, _props$modelValue$des, _props$modelValue$tem, _props$modelValue$cat, _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$isL;
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(SectionContainer), {
              title: "General Settings",
              description: "Update the general settings for the form below."
            }, {
              default: withCtx(() => {
                var _unref$formTemplateOp;
                return [createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createElementVNode("div", null, [createVNode(unref(TextBox), {
                  modelValue: name.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => name.value = $event),
                  label: "Form Name",
                  rules: "required"
                }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                  modelValue: description.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => description.value = $event),
                  label: "Description",
                  textMode: "multiline"
                }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
                  modelValue: template.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => template.value = $event),
                  label: "Template",
                  items: (_unref$formTemplateOp = unref(sources).formTemplateOptions) !== null && _unref$formTemplateOp !== void 0 ? _unref$formTemplateOp : undefined
                }, null, 8, ["modelValue", "items"]), createVNode(unref(CategoryPicker), {
                  modelValue: category.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => category.value = $event),
                  label: "Category",
                  rules: "required",
                  entityTypeGuid: unref(EntityType).WorkflowType
                }, null, 8, ["modelValue", "entityTypeGuid"])])])]), !unref(isLoginRequiredForced) ? (openBlock(), createBlock(unref(CheckBox), {
                  key: 0,
                  modelValue: isLoginRequired.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isLoginRequired.value = $event),
                  label: "Is Login Required",
                  help: "Determines if a person needs to be logged in to complete the form."
                }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(NotificationBox), {
                  key: 1,
                  alertType: "info"
                }, {
                  default: withCtx(() => [_hoisted_3$2]),
                  _: 1
                })), createElementVNode("div", _hoisted_4$2, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(DateTimePicker), {
                  modelValue: entryStarts.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => entryStarts.value = $event),
                  label: "Form Entry Starts"
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6$1, [createVNode(unref(DateTimePicker), {
                  modelValue: entryEnds.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => entryEnds.value = $event),
                  label: "Form Entry Ends"
                }, null, 8, ["modelValue"])])])];
              }),
              _: 1
            });
          };
        }
      });

      script$2.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/generalSettings.partial.obs";

      var _hoisted_1$1 = {
        class: "form-builder-scroll"
      };
      var _hoisted_2$1 = {
        class: "panel-body"
      };
      var _hoisted_3$1 = createElementVNode("h4", {
        class: "alert-heading"
      }, "Completion Settings", -1);
      var _hoisted_4$1 = createElementVNode("p", null, " The completion action is defined on the template and cannot be changed. ", -1);
      var script$1 = defineComponent({
        name: 'settingsTab.partial',
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
            type: Object,
            required: false
          },
          submit: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "update:completion", "validationChanged"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(RockForm), {
              submit: formSubmit.value,
              "onUpdate:submit": _cache[2] || (_cache[2] = $event => formSubmit.value = $event),
              onValidationChanged: onValidationChanged
            }, {
              default: withCtx(() => [createVNode(unref(script$2), {
                modelValue: unref(generalSettings),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(generalSettings) ? generalSettings.value = $event : null),
                templateOverrides: __props.templateOverrides
              }, null, 8, ["modelValue", "templateOverrides"]), !unref(isCompletionForced) ? (openBlock(), createBlock(unref(script$3), {
                key: 0,
                modelValue: unref(completionSettings),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(completionSettings) ? completionSettings.value = $event : null)
              }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "info"
              }, {
                default: withCtx(() => [_hoisted_3$1, _hoisted_4$1]),
                _: 1
              }))]),
              _: 1
            }, 8, ["submit"])])]);
          };
        }
      });

      script$1.__file = "src/WorkFlow/FormBuilder/FormBuilderDetail/settingsTab.partial.obs";

      var _hoisted_1 = {
        ref: "bodyElement",
        class: "panel-flex-fill-body styled-scroll"
      };
      var _hoisted_2 = {
        class: "panel-toolbar panel-toolbar-shadow"
      };
      var _hoisted_3 = {
        class: "nav nav-pills nav-sm"
      };
      var _hoisted_4 = {
        role: "presentation"
      };
      var _hoisted_5 = ["href"];
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = ["onClick"];
      var _hoisted_8 = ["onClick"];
      var _hoisted_9 = {
        role: "presentation"
      };
      var _hoisted_10 = ["href"];
      var _hoisted_11 = createTextVNode("Save");
      var script = exports('default', defineComponent({
        name: 'formBuilderDetail',
        setup(__props) {
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
          function updateRecipientOptions() {
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
          }
          function onFormBuilderTabClick() {
            selectedTab.value = 0;
          }
          function onCommunicationsTabClick() {
            selectedTab.value = 1;
          }
          function onSettingsTabClick() {
            selectedTab.value = 2;
          }
          function onSaveClick() {
            return _onSaveClick.apply(this, arguments);
          }
          function _onSaveClick() {
            _onSaveClick = _asyncToGenerator(function* () {
              var _toGuidOrNull;
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
              var request = {
                formGuid: (_toGuidOrNull = toGuidOrNull(config.formGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                formSettings: form
              };
              var result = yield invokeBlockAction("SaveForm", request);
              if (!result.isSuccess) {
                var _result$errorMessage;
                alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Failed to save.");
              } else {
                isFormDirty.value = false;
              }
            });
            return _onSaveClick.apply(this, arguments);
          }
          function onBeforeUnload(event) {
            event.preventDefault();
            event.returnValue = "";
          }
          function onCommunicationsValidationChanged(errors) {
            communicationsValidationErrors.value = errors;
          }
          function onFormBuilderValidationChanged(errors) {
            formBuilderValidationErrors.value = errors;
          }
          function onSettingsValidationChanged(errors) {
            settingsValidationErrors.value = errors;
          }
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
          return (_ctx, _cache) => {
            return blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : (openBlock(), createBlock(unref(Panel), {
              key: 1,
              type: "block",
              hasFullscreen: "",
              title: unref(blockTitle),
              titleIconCssClass: "fa fa-poll-h"
            }, {
              default: withCtx(() => {
                var _unref$submissionsPag, _unref$analyticsPageU;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("ul", _hoisted_3, [createElementVNode("li", _hoisted_4, [createElementVNode("a", {
                  href: (_unref$submissionsPag = unref(config).submissionsPageUrl) !== null && _unref$submissionsPag !== void 0 ? _unref$submissionsPag : undefined
                }, "Submissions", 8, _hoisted_5)]), createElementVNode("li", {
                  class: normalizeClass({
                    active: unref(isFormBuilderTabSelected)
                  }),
                  role: "presentation"
                }, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(onFormBuilderTabClick, ["prevent"])
                }, "Form Builder", 8, _hoisted_6)], 2), createElementVNode("li", {
                  class: normalizeClass({
                    active: unref(isCommunicationsTabSelected)
                  }),
                  role: "presentation"
                }, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(onCommunicationsTabClick, ["prevent"])
                }, "Communications", 8, _hoisted_7)], 2), createElementVNode("li", {
                  class: normalizeClass({
                    active: unref(isSettingsTabSelected)
                  }),
                  role: "presentation"
                }, [createElementVNode("a", {
                  href: "#",
                  onClick: withModifiers(onSettingsTabClick, ["prevent"])
                }, "Settings", 8, _hoisted_8)], 2), createElementVNode("li", _hoisted_9, [createElementVNode("a", {
                  href: (_unref$analyticsPageU = unref(config).analyticsPageUrl) !== null && _unref$analyticsPageU !== void 0 ? _unref$analyticsPageU : undefined
                }, "Analytics", 8, _hoisted_10)])]), createVNode(unref(RockButton), {
                  btnType: "primary",
                  btnSize: "sm",
                  disabled: !isFormDirty.value,
                  onClick: onSaveClick
                }, {
                  default: withCtx(() => [_hoisted_11]),
                  _: 1
                }, 8, ["disabled"])]), createElementVNode("div", {
                  class: "form-builder-container form-builder-grow",
                  style: normalizeStyle(unref(formBuilderContainerStyle))
                }, [createVNode(unref(script$4), {
                  modelValue: builderViewModel.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => builderViewModel.value = $event),
                  templateOverrides: unref(selectedTemplate),
                  submit: formSubmit.value,
                  onValidationChanged: onFormBuilderValidationChanged
                }, null, 8, ["modelValue", "templateOverrides", "submit"])], 4), createElementVNode("div", {
                  class: "communications-container form-builder-grow",
                  style: normalizeStyle(unref(communicationsContainerStyle))
                }, [createVNode(unref(script$f), {
                  modelValue: communicationsViewModel.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => communicationsViewModel.value = $event),
                  recipientOptions: recipientOptions.value,
                  templateOverrides: unref(selectedTemplate),
                  submit: formSubmit.value,
                  onValidationChanged: onCommunicationsValidationChanged
                }, null, 8, ["modelValue", "recipientOptions", "templateOverrides", "submit"])], 4), createElementVNode("div", {
                  class: "settings-container form-builder-grow",
                  style: normalizeStyle(unref(settingsContainerStyle))
                }, [createVNode(unref(script$1), {
                  modelValue: generalViewModel.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => generalViewModel.value = $event),
                  completion: completionViewModel.value,
                  "onUpdate:completion": _cache[3] || (_cache[3] = $event => completionViewModel.value = $event),
                  templateOverrides: unref(selectedTemplate),
                  submit: formSubmit.value,
                  onValidationChanged: onSettingsValidationChanged
                }, null, 8, ["modelValue", "completion", "templateOverrides", "submit"])], 4)], 512)];
              }),
              _: 1
            }, 8, ["title"]));
          };
        }
      }));

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".inline-svg{fill:currentColor;display:inline-flex;height:1em;line-height:1;width:1.25em}.form-builder-detail{--zone-border:#ebebeb;--zone-configurable-border:#f5faff;--zone-configurable-hover-border:#dfe0e1;--zone-action-bg:#f5faff;--zone-action-border:#dde7f2;--zone-action-color:#89a1b9;--zone-action-hover-color:#737475;--zone-active-color:#c9eaf9;--zone-active-action-color:#83bad3;--zone-highlight-color:#ee7725;--zone-highlight-action-text-color:#e4bda2;--flex-col-gutter:30px;--zone-border-radius:6px}.form-builder-detail .zone-body .configurable-zone>.zone-content-container>.zone-content{pointer-events:none}.form-builder-detail .zone-body>div>.form-group{margin-bottom:0}.form-builder-detail .configurable-zone{display:flex;margin-bottom:12px;position:relative;transition:border-color 108ms cubic-bezier(.2,.2,.38,.9)}.form-builder-detail .configurable-zone.zone-section{flex-grow:1}.form-builder-detail .configurable-zone.zone-section>.zone-actions{position:relative}.form-builder-detail .configurable-zone>.zone-content-container{background:#fff;border:2px dotted var(--zone-border);border-radius:var(--zone-border-radius) 0 0 var(--zone-border-radius);border-right:2px solid var(--zone-action-border);display:flex;flex-grow:1}.form-builder-detail .configurable-zone>.zone-content-container>.zone-content{flex-grow:1}.form-builder-detail .configurable-zone>.zone-content-container>.zone-content>.zone-body{display:flex;flex-direction:column;min-height:100%;padding:20px}.form-builder-detail .configurable-zone>.zone-actions{align-items:center;background-color:var(--zone-action-bg);border:2px solid var(--zone-action-border);border-left:0;display:flex;flex-direction:column;flex-shrink:0;justify-content:center;width:40px}.form-builder-detail .configurable-zone.active>.zone-content-container{border-color:var(--zone-active-color)}.form-builder-detail .configurable-zone.active>.zone-actions{background-color:var(--zone-active-color);border-color:var(--zone-active-color)}.form-builder-detail .configurable-zone.highlight>.zone-content-container{border-color:var(--zone-highlight-color);border-right-style:dotted}.form-builder-detail .form-section{align-content:flex-start;display:flex;flex:1 1 auto;flex-wrap:wrap;margin:0 calc(var(--flex-col-gutter)*-.5) -10px;min-height:50px}.form-builder-detail .form-layout .form-template-item{font-size:18px;margin:0 0 12px;padding:16px}.form-builder-detail .form-layout .form-template-item.form-template-item-field{flex-basis:calc(100% - var(--flex-col-gutter) - 40px);margin:0 calc(var(--flex-col-gutter)*.5 + 40px) 12px calc(var(--flex-col-gutter)*.5)}.form-builder-detail .form-section .configurable-zone{--zone-border:var(--zone-configurable-border)}.form-builder-detail .form-section .configurable-zone>.zone-actions{border-radius:0 var(--zone-border-radius) var(--zone-border-radius) 0;border-style:dotted;opacity:0;transform:scaleX(0);transform-origin:0 0;transition:opacity 116ms cubic-bezier(.2,.2,.38,.9),transform 116ms cubic-bezier(.2,.2,.38,.9)}.form-builder-detail .form-section .configurable-zone>.zone-content-container{border-right:2px dotted var(--zone-border)}.form-builder-detail .form-section .configurable-zone.active,.form-builder-detail .form-section .configurable-zone:hover{--zone-border:var(--zone-configurable-hover-border)}.form-builder-detail .form-section .configurable-zone.active>.zone-content-container,.form-builder-detail .form-section .configurable-zone:hover>.zone-content-container{border-right-color:transparent}.form-builder-detail .form-section .configurable-zone.active>.zone-actions,.form-builder-detail .form-section .configurable-zone:hover>.zone-actions{opacity:1;transform:scaleX(1);transform-origin:0 0}.form-builder-detail .flex-col{margin-left:calc(var(--flex-col-gutter)*.5);margin-right:calc(var(--flex-col-gutter)*.5)}.form-builder-detail .flex-col-1{flex-basis:calc(8.3333% - var(--flex-col-gutter))}.form-builder-detail .flex-col-2{flex-basis:calc(16.6666% - var(--flex-col-gutter))}.form-builder-detail .flex-col-3{flex-basis:calc(25% - var(--flex-col-gutter))}.form-builder-detail .flex-col-4{flex-basis:calc(33.3333% - var(--flex-col-gutter))}.form-builder-detail .flex-col-5{flex-basis:calc(41.6666% - var(--flex-col-gutter))}.form-builder-detail .flex-col-6{flex-basis:calc(50% - var(--flex-col-gutter))}.form-builder-detail .flex-col-7{flex-basis:calc(58.3333% - var(--flex-col-gutter))}.form-builder-detail .flex-col-8{flex-basis:calc(66.6666% - var(--flex-col-gutter))}.form-builder-detail .flex-col-9{flex-basis:calc(75% - var(--flex-col-gutter))}.form-builder-detail .flex-col-10{flex-basis:calc(83.3333% - var(--flex-col-gutter))}.form-builder-detail .flex-col-11{flex-basis:calc(91.6666% - var(--flex-col-gutter))}.form-builder-detail .flex-col-12{flex-basis:calc(100% - var(--flex-col-gutter))}.form-builder-grow{display:flex;flex-grow:1;overflow:hidden;position:relative}.form-builder-container{display:flex;flex:1 1 auto;overflow:hidden}.form-builder-scroll{display:flex;flex-direction:column;flex-grow:1;overflow-y:auto}.form-layout{flex:1 1 0;overflow-y:auto;padding:1rem;position:relative}.form-layout,.form-layout-body{display:flex;flex-direction:column}.form-layout-body{flex-grow:1}.form-sidebar{border-right:1px solid #dfe0e1;display:flex;flex:1 0 auto;flex-direction:column;max-width:320px;min-width:320px;overflow:hidden;position:relative;z-index:20}.form-sidebar .panel-body{padding:12px 16px}.form-sidebar .panel-title{font-size:16px;padding:0 16px!important}.sidebar-back{align-items:center;background-color:#484848;color:#fff;cursor:pointer;display:flex;justify-content:center;width:40px}.sidebar-back:hover{background-color:#3d3d3d}.sidebar-header{align-items:stretch;border-bottom:1px solid #dfe0e1;display:flex;flex-direction:row;font-size:14px;font-weight:600;position:relative}.sidebar-header .title{align-items:center;display:flex;padding:8px}.sidebar-header .icon{font-size:1.125rem;height:1em;margin-right:8px;width:1em}.sidebar-body{overflow-y:auto;position:relative}.sidebar-body,.sidebar-panels{display:flex;flex-direction:column}.sidebar-panels{flex-grow:1}.sidebar-panels .panel-default{border:0;border-radius:0;border-top:1px solid var(--panel-border);box-shadow:none;margin-bottom:0}.sidebar-panels>div:nth-child(2)>.panel{border-top:0}.sidebar-panels>div:last-child{border-bottom:1px solid var(--panel-border)}.sidebar-panels .panel-heading{background:var(--theme-lightest);border-bottom:0;transition:background-color .1s ease-in-out}.sidebar-panels .panel-heading>.panel-aside{color:#737475}.sidebar-panels .panel-heading:hover{background:#fcfcfc}.sidebar-panels .panel-heading:hover>.panel-aside{color:var(--text-color)}.sidebar-panels .panel-heading:active{background:#dfe0e1}.form-template-item-list{--gutter:8px;display:flex;flex-wrap:wrap;margin-left:calc(var(--gutter)*-.5);margin-right:calc(var(--gutter)*-.5);margin-top:calc(var(--gutter)*-1)}.form-template-item-list .form-template-item{flex-shrink:0;margin-left:calc(var(--gutter)*.5);margin-right:calc(var(--gutter)*.5);margin-top:var(--gutter);max-width:100%;width:calc(50% - var(--gutter))}.zone-action{color:var(--zone-action-color);cursor:pointer;padding:6px 4px;text-align:center;width:100%!important;z-index:10}.zone-action:hover{color:var(--zone-action-hover-color)}.configurable-zone.active .zone-action{color:var(--zone-active-action-color)}.zone-action.zone-action-delete:hover{color:var(--color-danger)}.zone-action-move{cursor:grab;margin-bottom:auto}.section-header{display:flex}.section-header-content{align-items:center;flex-grow:1}.form-template-item{align-items:center;background-color:#fff;border:1px solid #e1e1e1;border-left-width:3px;border-radius:3px;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);cursor:grab;display:flex;font-size:14px;font-weight:600;padding:7px 6px;transform:scale(1);transition:all 108ms cubic-bezier(.2,.2,.38,.9)}.form-template-item>.fa{margin-right:6px}.form-template-item>.icon{height:18px;margin-right:3px;width:18px}.form-template-item>.text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.form-template-item:hover{border-color:var(--color-primary);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);transform:scale(1.02)}.form-template-item.form-template-item-section{border-left-color:#009ce3}";
      styleInject(css_248z);

      script.__file = "src/WorkFlow/FormBuilder/formBuilderDetail.obs";

    })
  };
}));
//# sourceMappingURL=formBuilderDetail.obs.js.map
