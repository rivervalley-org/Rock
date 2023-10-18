System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/component', './codeBox.obs', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/textBox', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/birthdayPicker', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/datePartsPicker', '@Obsidian/Controls/genderDropDownList', '@Obsidian/Utility/rockDateTime', '@Obsidian/Enums/Blocks/Security/AccountEntry/accountEntryStep', '@Obsidian/Utility/block', '@Obsidian/Utility/http', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, onMounted, openBlock, createElementBlock, Fragment, toDisplayString, createBlock, unref, withCtx, createCommentVNode, computed, createElementVNode, renderSlot, renderList, createVNode, withDirectives, isRef, vModelRadio, provide, inject, normalizeClass, ref, onBeforeUnmount, NotificationBox, RockButton, BtnType, toTitleCase, splitCamelCase, useVModelPassthrough, CodeBox, RockForm, EmailBox, TextBox, InlineCheckBox, PhoneNumberBox, Address, BirthdayPicker, CampusPicker, getDefaultDatePartsPickerModel, GenderDropDownList, RockDateTime, AccountEntryStep, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, useHttp, removeCurrentUrlQueryParams;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      renderList = module.renderList;
      createVNode = module.createVNode;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      vModelRadio = module.vModelRadio;
      provide = module.provide;
      inject = module.inject;
      normalizeClass = module.normalizeClass;
      ref = module.ref;
      onBeforeUnmount = module.onBeforeUnmount;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      toTitleCase = module.toTitleCase;
      splitCamelCase = module.splitCamelCase;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      CodeBox = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      Address = module["default"];
    }, function (module) {
      BirthdayPicker = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
    }, function (module) {
      GenderDropDownList = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      AccountEntryStep = module.AccountEntryStep;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      removeCurrentUrlQueryParams = module.removeCurrentUrlQueryParams;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
        key: 0
      };
      var _hoisted_2$5 = createTextVNode("Continue");
      var script$b = defineComponent({
        name: 'completedStep.partial',
        props: {
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["navigate"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function onContinueClicked() {
            tryNavigate(props.options.redirectUrl);
          }
          function tryNavigate(url) {
            if (url) {
              emit("navigate", url);
            }
          }
          onMounted(() => {
            if (props.options.isRedirectAutomatic) {
              tryNavigate(props.options.redirectUrl);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [__props.options.isPlainCaption && __props.options.caption ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString(__props.options.caption), 1)) : __props.options.caption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.caption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), __props.options.redirectUrl ? (openBlock(), createBlock(unref(RockButton), {
              key: 2,
              btnType: unref(BtnType).Primary,
              disabled: __props.disabled,
              onClick: onContinueClicked
            }, {
              default: withCtx(() => [_hoisted_2$5]),
              _: 1
            }, 8, ["btnType", "disabled"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      script$b.__file = "src/Security/AccountEntry/completedStep.partial.obs";

      var script$a = defineComponent({
        name: 'confirmationSentStep.partial',
        props: {
          options: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          return (_ctx, _cache) => {
            return __props.options.caption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.caption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true);
          };
        }
      });

      script$a.__file = "src/Security/AccountEntry/confirmationSentStep.partial.obs";

      var _hoisted_1$6 = {
        class: "grid-table table table-bordered table-striped table-hover"
      };
      var script$9 = defineComponent({
        name: 'simpleGrid.partial',
        props: {
          items: {
            type: Array,
            required: false,
            default: []
          }
        },
        setup(__props) {
          var props = __props;
          var propertyNames = computed(() => {
            var _props$items;
            if (!((_props$items = props.items) !== null && _props$items !== void 0 && _props$items.length)) {
              return [];
            }
            var firstTruthyItem = props.items.find(item => !!item && typeof item === "object");
            return getPropertyNames(firstTruthyItem);
          });
          function getColumnSlotName(columnId) {
            return "column-".concat(columnId);
          }
          function getHeaderSlotName(columnId) {
            return "header-".concat(columnId);
          }
          function getProperties(item) {
            if (!item) {
              return [];
            }
            return Object.entries(item);
          }
          function getPropertyNames(item) {
            var properties = getProperties(item);
            if (!properties.length) {
              return [];
            }
            return properties.map(_ref => {
              var _ref2 = _slicedToArray(_ref, 2),
                name = _ref2[0];
                _ref2[1];
              return name;
            });
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("table", _hoisted_1$6, [createElementVNode("thead", null, [createCommentVNode(" Implement <template v-slot=\"header\"></template> in parent to override the header template. "), renderSlot(_ctx.$slots, "header", {}, () => [createElementVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(propertyNames), propertyName => {
              return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" Implement <template v-slot=\"header-<propertyName>\"></template> in parent to override the individual header cell templates. "), renderSlot(_ctx.$slots, getHeaderSlotName(propertyName), {
                propertyName: propertyName
              }, () => [createElementVNode("th", null, toDisplayString(unref(toTitleCase)(unref(splitCamelCase)(propertyName))), 1)])], 64);
            }), 256))])])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, item => {
              return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" Implement <template v-slot=\"row\"></template> in parent to override the row template. "), renderSlot(_ctx.$slots, "row", {
                item: item
              }, () => [createElementVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(propertyNames), propertyName => {
                return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" Implement <template v-slot=\"column-<propertyName>\"></template> in parent to override the individual row cell templates. "), renderSlot(_ctx.$slots, getColumnSlotName(propertyName), {
                  item: item,
                  propertyName: propertyName
                }, () => [createElementVNode("td", null, toDisplayString(item[propertyName]), 1)])], 64);
              }), 256))])])], 64);
            }), 256))]), createElementVNode("tfoot", null, [createCommentVNode(" Implement <template v-slot=\"footer\"></template> in parent to override the footer template. "), renderSlot(_ctx.$slots, "footer")])]);
          };
        }
      });

      script$9.__file = "src/Security/AccountEntry/simpleGrid.partial.obs";

      var _hoisted_1$5 = createElementVNode("tr", null, [createElementVNode("th", null, "You?"), createElementVNode("th", null, "Name")], -1);
      var _hoisted_2$4 = ["disabled", "value"];
      var _hoisted_3$4 = {
        class: "radio"
      };
      var _hoisted_4$3 = ["disabled"];
      var _hoisted_5$1 = createElementVNode("span", {
        class: "label-text"
      }, [createElementVNode("strong", null, "None of these are me")], -1);
      var _hoisted_6 = {
        class: "actions"
      };
      var _hoisted_7 = createTextVNode("Previous");
      var _hoisted_8 = createTextVNode("Next");
      var script$8 = defineComponent({
        name: 'duplicatePersonSelectionStep.partial',
        props: {
          modelValue: {
            type: Object,
            required: false,
            default: null
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "movePrevious", "personSelected", "noPersonSelected"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalModelValue = useVModelPassthrough(props, "modelValue", emit);
          function onNextClicked() {
            if (internalModelValue.value) {
              emit("personSelected");
            } else {
              emit("noPersonSelected");
            }
          }
          function onPreviousClicked() {
            emit("movePrevious");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [__props.options.caption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.caption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(script$9), {
              items: __props.options.duplicatePeople
            }, {
              header: withCtx(() => [_hoisted_1$5]),
              row: withCtx(_ref2 => {
                var item = _ref2.item;
                return [createElementVNode("tr", null, [createElementVNode("td", null, [withDirectives(createElementVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalModelValue) ? internalModelValue.value = $event : null),
                  disabled: __props.disabled,
                  name: "DuplicatePerson",
                  type: "radio",
                  value: item
                }, null, 8, _hoisted_2$4), [[vModelRadio, unref(internalModelValue)]])]), createElementVNode("td", null, toDisplayString(item.fullName), 1)])];
              }),
              _: 1
            }, 8, ["items"]), createElementVNode("div", _hoisted_3$4, [createElementVNode("label", null, [withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalModelValue) ? internalModelValue.value = $event : null),
              disabled: __props.disabled,
              name: "DuplicatePerson",
              type: "radio",
              value: null
            }, null, 8, _hoisted_4$3), [[vModelRadio, unref(internalModelValue)]]), _hoisted_5$1])]), createElementVNode("div", _hoisted_6, [createVNode(unref(RockButton), {
              btnType: unref(BtnType).Link,
              disabled: __props.disabled,
              onClick: onPreviousClicked
            }, {
              default: withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["btnType", "disabled"]), createVNode(unref(RockButton), {
              btnType: unref(BtnType).Primary,
              disabled: __props.disabled,
              onClick: onNextClicked
            }, {
              default: withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["btnType", "disabled"])])], 64);
          };
        }
      });

      script$8.__file = "src/Security/AccountEntry/duplicatePersonSelectionStep.partial.obs";

      var _hoisted_1$4 = {
        class: "actions"
      };
      var _hoisted_2$3 = createTextVNode("Previous");
      var _hoisted_3$3 = createTextVNode("Yes, send it");
      var _hoisted_4$2 = createTextVNode("No, just let me log in");
      var script$7 = defineComponent({
        name: 'existingAccountStep.partial',
        props: {
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["movePrevious", "emailUsername", "sendToLogin"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          function onEmailUsernameClicked() {
            emit("emailUsername");
          }
          function onPreviousClicked() {
            emit("movePrevious");
          }
          function onSendToLoginClicked() {
            emit("sendToLogin");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [__props.options.caption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.caption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_1$4, [createVNode(unref(RockButton), {
              btnType: unref(BtnType).Link,
              disabled: __props.disabled,
              onClick: onPreviousClicked
            }, {
              default: withCtx(() => [_hoisted_2$3]),
              _: 1
            }, 8, ["btnType", "disabled"]), createVNode(unref(RockButton), {
              btnType: unref(BtnType).Primary,
              class: "ml-1",
              disabled: __props.disabled,
              onClick: onEmailUsernameClicked
            }, {
              default: withCtx(() => [_hoisted_3$3]),
              _: 1
            }, 8, ["btnType", "disabled"]), createVNode(unref(RockButton), {
              btnType: unref(BtnType).Primary,
              class: "ml-1",
              disabled: __props.disabled,
              onClick: onSendToLoginClicked
            }, {
              default: withCtx(() => [_hoisted_4$2]),
              _: 1
            }, 8, ["btnType", "disabled"])])], 64);
          };
        }
      });

      script$7.__file = "src/Security/AccountEntry/existingAccountStep.partial.obs";

      var bootstrapBreakpointInjectionKey = Symbol("bootstrap-breakpoint");
      function provideBreakpoint(breakpoint) {
        provide(bootstrapBreakpointInjectionKey, breakpoint);
      }
      function useBreakpoint() {
        var breakpoint = inject(bootstrapBreakpointInjectionKey);
        if (!breakpoint) {
          throw "provideBreakpoint must be invoked before useBreakpoint can be used. If useBreakpoint is in a component where <BreakpointObserver> is used in the template, then use the @breakpoint output binding to get the breakpoint.";
        }
        return breakpoint;
      }

      var _hoisted_1$3 = {
        class: "actions d-flex d-sm-block flex-column-reverse"
      };
      var _hoisted_2$2 = createTextVNode("Previous");
      var _hoisted_3$2 = createTextVNode("Complete Sign In");
      var script$6 = defineComponent({
        name: 'passwordlessConfirmationSentStep.partial',
        props: {
          modelValue: {
            type: String,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["movePrevious", "submit", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var breakpoint = useBreakpoint();
          function onPreviousClicked() {
            emit("movePrevious");
          }
          function onFormSubmitted() {
            emit("submit");
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [__props.options.caption ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.caption), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(RockForm), {
              onSubmit: onFormSubmitted
            }, {
              default: withCtx(() => [createVNode(unref(CodeBox), {
                modelValue: unref(internalValue),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalValue) ? internalValue.value = $event : null),
                modelModifiers: {
                  capitalize: true
                },
                disabled: __props.disabled,
                maxLength: 6,
                rules: "required",
                validationTitle: "Code"
              }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_1$3, [createVNode(unref(RockButton), {
                btnType: unref(BtnType).Link,
                class: normalizeClass(unref(breakpoint) === 'xs' ? 'btn-block' : ''),
                disabled: __props.disabled,
                type: "button",
                onClick: onPreviousClicked
              }, {
                default: withCtx(() => [_hoisted_2$2]),
                _: 1
              }, 8, ["btnType", "class", "disabled"]), createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                class: normalizeClass(unref(breakpoint) === 'xs' ? 'btn-block' : ''),
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_3$2]),
                _: 1
              }, 8, ["btnType", "class", "disabled"])])]),
              _: 1
            })], 64);
          };
        }
      });

      script$6.__file = "src/Security/AccountEntry/passwordlessConfirmationSentStep.partial.obs";

      var _hoisted_1$2 = createElementVNode("legend", null, "New Account", -1);
      var script$5 = defineComponent({
        name: 'registrationStepAccountInfo.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          config: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isUsernameAvailable: {
            type: Object,
            required: false,
            default: null
          }
        },
        emits: ["checkUsernameAvailability", "update:isUsernameAvailable", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var usernameValidators = ["required", (value, _params) => {
            if (typeof value !== "string" || !(value !== null && value !== void 0 && value.trim())) {
              return "".concat(usernameFieldLabel.value, " is required.");
            }
            if (validateUsernameRegex.value && !validateUsernameRegex.value.test(value)) {
              return "".concat(usernameFieldLabel.value, " is invalid. ").concat(props.config.usernameRegexDescription);
            }
            return true;
          }];
          var usernameValidationError = ref(null);
          var isUsernameError = computed(() => !!usernameValidationError.value);
          var isEmailRequiredForUsername = computed(() => props.config.isEmailRequiredForUsername);
          var usernameFieldLabel = computed(() => props.config.usernameFieldLabel || "Username");
          var validateUsernameRegex = computed(() => props.config.usernameRegex ? new RegExp(props.config.usernameRegex) : null);
          var internalUsername = computed({
            get() {
              var _props$modelValue$use, _props$modelValue;
              return (_props$modelValue$use = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.username) !== null && _props$modelValue$use !== void 0 ? _props$modelValue$use : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                username: newValue
              }));
            }
          });
          var internalPassword = computed({
            get() {
              var _props$modelValue$pas, _props$modelValue2;
              return (_props$modelValue$pas = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.password) !== null && _props$modelValue$pas !== void 0 ? _props$modelValue$pas : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                password: newValue
              }));
            }
          });
          var internalConfirmPassword = computed({
            get() {
              var _props$modelValue$con, _props$modelValue3;
              return (_props$modelValue$con = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.confirmPassword) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                confirmPassword: newValue
              }));
            }
          });
          var confirmPasswordRules = computed(() => {
            return "required|equalsfield:must match Password,".concat(internalPassword.value);
          });
          var usernameValidationCaption = computed(() => {
            if (usernameValidationError.value) {
              return usernameValidationError.value;
            } else if (props.isUsernameAvailable) {
              return "The ".concat(usernameFieldLabel.value.toLowerCase(), " you selected is available.");
            } else if (props.isUsernameAvailable === false) {
              return "The ".concat(usernameFieldLabel.value.toLowerCase(), " you selected is already in use.");
            } else {
              return "";
            }
          });
          function onUsernameChanged() {
            var _internalUsername$val;
            if (!((_internalUsername$val = internalUsername.value) !== null && _internalUsername$val !== void 0 && _internalUsername$val.trim())) {
              usernameValidationError.value = "".concat(usernameFieldLabel.value, " is required.");
              emit("update:isUsernameAvailable", null);
            } else if (validateUsernameRegex.value && !validateUsernameRegex.value.test(internalUsername.value)) {
              usernameValidationError.value = "".concat(usernameFieldLabel.value, " is invalid. ").concat(props.config.usernameRegexDescription);
              emit("update:isUsernameAvailable", null);
            } else {
              usernameValidationError.value = null;
              if (!props.config.isUsernameAvailabilityCheckDisabled) {
                emit("checkUsernameAvailability", internalUsername.value);
              }
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [_hoisted_1$2, !unref(isEmailRequiredForUsername) ? (openBlock(), createBlock(unref(TextBox), {
              key: 0,
              modelValue: unref(internalUsername),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalUsername) ? internalUsername.value = $event : null),
              disabled: __props.disabled,
              label: unref(usernameFieldLabel),
              rules: usernameValidators,
              onChange: onUsernameChanged
            }, null, 8, ["modelValue", "disabled", "label"])) : (openBlock(), createBlock(unref(EmailBox), {
              key: 1,
              modelValue: unref(internalUsername),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalUsername) ? internalUsername.value = $event : null),
              disabled: __props.disabled,
              label: "Email",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"])), unref(usernameValidationCaption) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: !__props.isUsernameAvailable || unref(isUsernameError) ? 'warning' : 'success'
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(usernameValidationCaption)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
              modelValue: unref(internalPassword),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalPassword) ? internalPassword.value = $event : null),
              disabled: __props.disabled,
              label: "Password",
              rules: "required",
              type: "password"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(internalConfirmPassword),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalConfirmPassword) ? internalConfirmPassword.value = $event : null),
              disabled: __props.disabled,
              label: "Confirm Password",
              rules: unref(confirmPasswordRules),
              type: "password"
            }, null, 8, ["modelValue", "disabled", "rules"])]);
          };
        }
      });

      script$5.__file = "src/Security/AccountEntry/registrationStepAccountInfo.partial.obs";

      var script$4 = defineComponent({
        name: 'phoneNumberDetails.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalPhoneNumber = computed({
            get() {
              var _props$modelValue$pho;
              return (_props$modelValue$pho = props.modelValue.phoneNumber) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                phoneNumber: newValue
              }));
            }
          });
          var internalCountryCode = computed({
            get() {
              var _props$modelValue$cou;
              return (_props$modelValue$cou = props.modelValue.countryCode) !== null && _props$modelValue$cou !== void 0 ? _props$modelValue$cou : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                countryCode: newValue
              }));
            }
          });
          var internalIsSmsEnabled = computed({
            get() {
              return props.modelValue.isSmsEnabled;
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                isSmsEnabled: newValue
              }));
            }
          });
          var internalIsUnlisted = computed({
            get() {
              return props.modelValue.isUnlisted;
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                isUnlisted: newValue
              }));
            }
          });
          var phoneNumberRules = computed(() => props.modelValue.isRequired ? "required" : "");
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(PhoneNumberBox), {
              modelValue: unref(internalPhoneNumber),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalPhoneNumber) ? internalPhoneNumber.value = $event : null),
              countryCode: unref(internalCountryCode),
              "onUpdate:countryCode": _cache[1] || (_cache[1] = $event => isRef(internalCountryCode) ? internalCountryCode.value = $event : null),
              disabled: __props.disabled,
              label: __props.modelValue.label,
              rules: unref(phoneNumberRules)
            }, null, 8, ["modelValue", "countryCode", "disabled", "label", "rules"]), createVNode(unref(InlineCheckBox), {
              disabled: __props.disabled,
              label: "SMS",
              modelValue: unref(internalIsSmsEnabled),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalIsSmsEnabled) ? internalIsSmsEnabled.value = $event : null)
            }, null, 8, ["disabled", "modelValue"]), createVNode(unref(InlineCheckBox), {
              disabled: __props.disabled,
              label: "Unlisted",
              modelValue: unref(internalIsUnlisted),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalIsUnlisted) ? internalIsUnlisted.value = $event : null)
            }, null, 8, ["disabled", "modelValue"])], 64);
          };
        }
      });

      script$4.__file = "src/Security/AccountEntry/phoneNumberDetails.partial.obs";

      var _hoisted_1$1 = createElementVNode("legend", null, "Your Information", -1);
      var _hoisted_2$1 = {
        key: 0
      };
      var _hoisted_3$1 = {
        key: 0
      };
      var _hoisted_4$1 = {
        key: 1
      };
      var _hoisted_5 = createElementVNode("legend", null, "Address", -1);
      var script$3 = defineComponent({
        name: 'registrationStepPersonInfo.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          config: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var arePhoneNumbersShown = computed(() => props.config.arePhoneNumbersShown);
          var campusPickerLabel = computed(() => props.config.campusPickerLabel || "Campus");
          var isAddressShown = computed(() => props.config.isAddressShown);
          var isAddressRequired = computed(() => props.config.isAddressRequired);
          var isCampusPickerShown = computed(() => props.config.isCampusPickerShown);
          var isEmailHidden = computed(() => props.config.isEmailHidden);
          var isGenderPickerShown = computed(() => props.config.isGenderPickerShown);
          var internalFirstName = computed({
            get() {
              var _props$modelValue$fir, _props$modelValue;
              return (_props$modelValue$fir = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.firstName) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                firstName: newValue
              }));
            }
          });
          var internalLastName = computed({
            get() {
              var _props$modelValue$las, _props$modelValue2;
              return (_props$modelValue$las = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.lastName) !== null && _props$modelValue$las !== void 0 ? _props$modelValue$las : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                lastName: newValue
              }));
            }
          });
          var internalEmail = computed({
            get() {
              var _props$modelValue$ema, _props$modelValue3;
              return (_props$modelValue$ema = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.email) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "";
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                email: newValue
              }));
            }
          });
          var internalGender = computed({
            get() {
              var _props$modelValue$gen, _props$modelValue4;
              return (_props$modelValue$gen = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.gender) !== null && _props$modelValue$gen !== void 0 ? _props$modelValue$gen : 0;
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                gender: newValue
              }));
            }
          });
          var internalBirthday = computed({
            get() {
              var _props$modelValue$bir, _props$modelValue5;
              return (_props$modelValue$bir = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.birthday) !== null && _props$modelValue$bir !== void 0 ? _props$modelValue$bir : getDefaultDatePartsPickerModel();
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                birthday: newValue
              }));
            }
          });
          var internalPhoneNumbers = computed({
            get() {
              var _props$modelValue$pho, _props$modelValue6;
              return (_props$modelValue$pho = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.phoneNumbers) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : [];
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                phoneNumbers: newValue
              }));
            }
          });
          var internalAddress = computed({
            get() {
              var _props$modelValue7;
              return ((_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.address) || {};
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                address: newValue
              }));
            }
          });
          var addressRules = computed(() => isAddressRequired.value ? "required" : "");
          var internalArePhoneNumbersShown = computed(() => arePhoneNumbersShown.value && internalPhoneNumbers.value.some(p => !p.isHidden));
          function isListItemBag(object) {
            return !!object && typeof object === "object" && "value" in object;
          }
          function onCampusChanged(value) {
            if (isListItemBag(value)) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                campus: value.value
              }));
            } else {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                campus: null
              }));
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createElementVNode("fieldset", null, [_hoisted_1$1, createVNode(unref(TextBox), {
              modelValue: unref(internalFirstName),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(internalFirstName) ? internalFirstName.value = $event : null),
              disabled: __props.disabled,
              label: "First Name",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(internalLastName),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalLastName) ? internalLastName.value = $event : null),
              disabled: __props.disabled,
              label: "Last Name",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"]), !unref(isEmailHidden) ? (openBlock(), createBlock(unref(EmailBox), {
              key: 0,
              modelValue: unref(internalEmail),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(internalEmail) ? internalEmail.value = $event : null),
              disabled: __props.disabled,
              label: "Email",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), unref(isGenderPickerShown) ? (openBlock(), createBlock(unref(GenderDropDownList), {
              key: 1,
              modelValue: unref(internalGender),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalGender) ? internalGender.value = $event : null),
              disabled: __props.disabled
            }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), createVNode(unref(BirthdayPicker), {
              modelValue: unref(internalBirthday),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(internalBirthday) ? internalBirthday.value = $event : null),
              disabled: __props.disabled,
              label: "Birthday",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"])]), unref(internalArePhoneNumbersShown) ? (openBlock(), createElementBlock("fieldset", _hoisted_2$1, [unref(internalPhoneNumbers).length > 1 ? (openBlock(), createElementBlock("legend", _hoisted_3$1, "Phone Numbers")) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(internalPhoneNumbers), (value, key) => {
              return openBlock(), createElementBlock(Fragment, null, [!value.isHidden ? (openBlock(), createBlock(unref(script$4), {
                key: 0,
                modelValue: unref(internalPhoneNumbers)[key],
                "onUpdate:modelValue": $event => unref(internalPhoneNumbers)[key] = $event,
                disabled: __props.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : createCommentVNode("v-if", true)], 64);
            }), 256))])) : createCommentVNode("v-if", true), unref(isAddressShown) ? (openBlock(), createElementBlock("fieldset", _hoisted_4$1, [_hoisted_5, createVNode(unref(Address), {
              modelValue: unref(internalAddress),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(internalAddress) ? internalAddress.value = $event : null),
              disabled: __props.disabled,
              rules: unref(addressRules)
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), unref(isCampusPickerShown) ? (openBlock(), createBlock(unref(CampusPicker), {
              key: 2,
              disabled: __props.disabled,
              label: unref(campusPickerLabel),
              "onUpdate:modelValue": onCampusChanged,
              forceVisible: true,
              includeInactive: true,
              showBlankItem: true
            }, null, 8, ["disabled", "label"])) : createCommentVNode("v-if", true)]);
          };
        }
      });

      script$3.__file = "src/Security/AccountEntry/registrationStepPersonInfo.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "row"
      };
      var _hoisted_3 = {
        class: "col-md-12"
      };
      var _hoisted_4 = createTextVNode("Next");
      var ValidationErrorMessages = function (ValidationErrorMessages) {
        ValidationErrorMessages["MinimumAge"] = "We are sorry, you must be at least {0} years old to create an account.";
        return ValidationErrorMessages;
      }(ValidationErrorMessages || {});
      var script$2 = defineComponent({
        name: 'registrationStep.partial',
        props: {
          config: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            required: false,
            default: false
          },
          isUsernameAvailable: {
            type: Object,
            required: false,
            default: null
          },
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["checkUsernameAvailability", "error", "register", "update:isUsernameAvailable", "update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var fullName = ref("");
          var shouldUsernameUpdateSetPersonInfoEmail = computed(() => props.config.isEmailRequiredForUsername);
          var internalIsUsernameAvailable = useVModelPassthrough(props, "isUsernameAvailable", emit);
          var internalAccountInfo = computed({
            get() {
              return props.modelValue.accountInfo;
            },
            set(newValue) {
              var _props$modelValue$per;
              var modelValue;
              if (shouldUsernameUpdateSetPersonInfoEmail.value && ((_props$modelValue$per = props.modelValue.personInfo) === null || _props$modelValue$per === void 0 ? void 0 : _props$modelValue$per.email) !== (newValue === null || newValue === void 0 ? void 0 : newValue.username)) {
                modelValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                  accountInfo: newValue,
                  personInfo: _objectSpread2(_objectSpread2({}, props.modelValue.personInfo), {}, {
                    email: newValue === null || newValue === void 0 ? void 0 : newValue.username
                  })
                });
              } else {
                modelValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                  accountInfo: newValue
                });
              }
              emit("update:modelValue", modelValue);
            }
          });
          var internalPersonInfo = computed({
            get() {
              return props.modelValue.personInfo;
            },
            set(newValue) {
              emit("update:modelValue", _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                personInfo: newValue
              }));
            }
          });
          function onCheckUsernameAvailability(username) {
            if (!props.config.isUsernameAvailabilityCheckDisabled) {
              emit("checkUsernameAvailability", username);
            }
          }
          function onFormSubmit() {
            return _onFormSubmit.apply(this, arguments);
          }
          function _onFormSubmit() {
            _onFormSubmit = _asyncToGenerator(function* () {
              if (isPersonInfoValid()) {
                emit("register");
              }
            });
            return _onFormSubmit.apply(this, arguments);
          }
          function isOldEnough() {
            var _internalPersonInfo$v;
            if (props.config.minimumAge <= 0) {
              return true;
            }
            var birthday = (_internalPersonInfo$v = internalPersonInfo.value) === null || _internalPersonInfo$v === void 0 ? void 0 : _internalPersonInfo$v.birthday;
            if (!birthday) {
              emit("error", "Birthday is required");
              return false;
            }
            var threshold = RockDateTime.now().addYears(-props.config.minimumAge);
            var birthdate = RockDateTime.fromParts(birthday.year, birthday.month, birthday.day);
            if (!birthdate || birthdate.isLaterThan(threshold)) {
              emit("error", ValidationErrorMessages.MinimumAge.replace("{0}", props.config.minimumAge.toString()));
              return false;
            }
            return true;
          }
          function isPersonInfoValid() {
            return isOldEnough();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockForm), {
              onSubmit: onFormSubmit
            }, {
              default: withCtx(() => [createVNode(unref(TextBox), {
                modelValue: fullName.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => fullName.value = $event),
                class: "rock-fullname",
                disabled: __props.disabled,
                name: "name",
                placeholder: "Please enter name (Required)"
              }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_1, [!__props.config.isAccountInfoHidden ? (openBlock(), createBlock(unref(script$5), {
                key: 0,
                modelValue: unref(internalAccountInfo),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalAccountInfo) ? internalAccountInfo.value = $event : null),
                isUsernameAvailable: unref(internalIsUsernameAvailable),
                "onUpdate:isUsernameAvailable": _cache[2] || (_cache[2] = $event => isRef(internalIsUsernameAvailable) ? internalIsUsernameAvailable.value = $event : null),
                class: "col-md-6",
                config: __props.config,
                disabled: __props.disabled,
                onCheckUsernameAvailability: onCheckUsernameAvailability
              }, null, 8, ["modelValue", "isUsernameAvailable", "config", "disabled"])) : createCommentVNode("v-if", true), createVNode(unref(script$3), {
                modelValue: unref(internalPersonInfo),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalPersonInfo) ? internalPersonInfo.value = $event : null),
                class: "col-md-6",
                config: __props.config,
                disabled: __props.disabled
              }, null, 8, ["modelValue", "config", "disabled"])]), createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(RockButton), {
                btnType: unref(BtnType).Primary,
                disabled: __props.disabled,
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_4]),
                _: 1
              }, 8, ["btnType", "disabled"])])])]),
              _: 1
            });
          };
        }
      });

      script$2.__file = "src/Security/AccountEntry/registrationStep.partial.obs";

      var script$1 = defineComponent({
        name: 'breakpointObserver.partial',
        emits: ["breakpoint"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var breakpointDisplays = {
            "xs": "none",
            "sm": "inline",
            "md": "inline-block",
            "lg": "block",
            "xl": "table"
          };
          var displayBreakpoints = Object.entries(breakpointDisplays).reduce((swapped, _ref2) => {
            var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
            return _objectSpread2(_objectSpread2({}, swapped), {}, {
              [value]: key
            });
          }, {});
          var classes = Object.keys(breakpointDisplays).map(breakpoint => breakpoint).map(breakpoint => breakpoint === "xs" ? "d-".concat(breakpointDisplays[breakpoint]) : "d-".concat(breakpoint, "-").concat(breakpointDisplays[breakpoint]));
          var breakpointHelperDiv = ref();
          var breakpoint = ref("unknown");
          var internalBreakpoint = computed({
            get() {
              return breakpoint.value;
            },
            set(newValue) {
              breakpoint.value = newValue;
              emit("breakpoint", breakpoint.value);
            }
          });
          function checkBreakpoint() {
            var _displayBreakpoints$d;
            if (!breakpointHelperDiv.value) {
              return;
            }
            var display = getComputedStyle(breakpointHelperDiv.value).display;
            var newBreakpoint = (_displayBreakpoints$d = displayBreakpoints[display]) !== null && _displayBreakpoints$d !== void 0 ? _displayBreakpoints$d : "unknown";
            internalBreakpoint.value = newBreakpoint;
          }
          function onWindowResized() {
            checkBreakpoint();
          }
          provideBreakpoint(breakpoint);
          onMounted(() => {
            checkBreakpoint();
            addEventListener("resize", onWindowResized);
          });
          onBeforeUnmount(() => {
            removeEventListener("resize", onWindowResized);
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [renderSlot(_ctx.$slots, "default"), createElementVNode("div", {
              ref_key: "breakpointHelperDiv",
              ref: breakpointHelperDiv,
              style: {
                "visibility": "collapse !important"
              },
              class: normalizeClass(unref(classes))
            }, null, 2)], 64);
          };
        }
      });

      script$1.__file = "src/Security/breakpointObserver.partial.obs";

      var script = exports('default', defineComponent({
        name: 'accountEntry',
        setup(__props) {
          var _config$phoneNumbers;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var http = useHttp();
          removeCurrentUrlQueryParams("State");
          var errorMessage = ref();
          var stepStack = ref([]);
          var accountEntryStep = computed(() => stepStack.value.length ? stepStack.value[stepStack.value.length - 1] : null);
          var registrationInfo = ref({
            accountInfo: {
              password: "",
              username: ""
            },
            personInfo: {
              birthday: {
                year: 0,
                month: 0,
                day: 0
              },
              email: config.email || "",
              firstName: "",
              gender: 0,
              lastName: "",
              phoneNumbers: [...((_config$phoneNumbers = config.phoneNumbers) !== null && _config$phoneNumbers !== void 0 ? _config$phoneNumbers : [])]
            },
            fullName: null,
            selectedPersonId: null,
            state: config.state
          });
          var isUsernameAvailable = ref(null);
          var duplicatePersonSelectionStepOptions = ref({});
          var internalSelectedDuplicatePerson = ref(null);
          var selectedDuplicatePerson = computed({
            get() {
              return internalSelectedDuplicatePerson.value;
            },
            set(newValue) {
              internalSelectedDuplicatePerson.value = newValue;
              registrationInfo.value.selectedPersonId = newValue === null || newValue === void 0 ? void 0 : newValue.id;
            }
          });
          var passwordlessConfirmationSentStepOptions = ref({});
          var passwordlessConfirmationCode = ref("");
          var existingAccountStepOptions = ref({});
          var confirmationSentStepOptions = ref({});
          var completedStepOptions = ref({
            isPlainCaption: false,
            isRedirectAutomatic: false
          });
          var isNavigating = ref(false);
          var isRegistering = ref(false);
          var isSendingForgotUsername = ref(false);
          var step = computed(() => ({
            isCompleted: accountEntryStep.value === AccountEntryStep.Completed,
            isConfirmationSent: accountEntryStep.value === AccountEntryStep.ConfirmationSent,
            isDuplicatePersonSelection: accountEntryStep.value === AccountEntryStep.DuplicatePersonSelection,
            isExistingAccount: accountEntryStep.value === AccountEntryStep.ExistingAccount,
            isRegistration: accountEntryStep.value === AccountEntryStep.Registration,
            isPasswordlessConfirmationSent: accountEntryStep.value === AccountEntryStep.PasswordlessConfirmationSent
          }));
          var sentLoginCaption = computed(() => {
            return config.sentLoginCaption || "Your username has been emailed to you. If you've forgotten your password, the email includes a link to reset your password.";
          });
          var successCaption = computed(() => {
            return config.successCaption || "{0}, Your account has been created.";
          });
          function onCheckUsernameAvailability(_x) {
            return _onCheckUsernameAvailability.apply(this, arguments);
          }
          function _onCheckUsernameAvailability() {
            _onCheckUsernameAvailability = _asyncToGenerator(function* (username) {
              if (config.isUsernameAvailabilityCheckDisabled) {
                isUsernameAvailable.value = null;
              } else {
                var response = yield http.get("/api/userlogins/available", {
                  username: username
                });
                isUsernameAvailable.value = response.data;
              }
            });
            return _onCheckUsernameAvailability.apply(this, arguments);
          }
          function onDuplicatePersonSelected() {
            return _onDuplicatePersonSelected.apply(this, arguments);
          }
          function _onDuplicatePersonSelected() {
            _onDuplicatePersonSelected = _asyncToGenerator(function* () {
              var _selectedDuplicatePer;
              registrationInfo.value.selectedPersonId = (_selectedDuplicatePer = selectedDuplicatePerson.value) === null || _selectedDuplicatePer === void 0 ? void 0 : _selectedDuplicatePer.id;
              yield register();
            });
            return _onDuplicatePersonSelected.apply(this, arguments);
          }
          function onDuplicatePersonSelectionStepMovePrevious() {
            selectedDuplicatePerson.value = null;
            onMovePrevious();
          }
          function onEmailUsername() {
            return _onEmailUsername.apply(this, arguments);
          }
          function _onEmailUsername() {
            _onEmailUsername = _asyncToGenerator(function* () {
              try {
                var _registrationInfo$val, _registrationInfo$val2, _registrationInfo$val3;
                isSendingForgotUsername.value = true;
                var bag = {
                  personId: (_registrationInfo$val = registrationInfo.value.selectedPersonId) !== null && _registrationInfo$val !== void 0 ? _registrationInfo$val : 0,
                  email: (_registrationInfo$val2 = registrationInfo.value.personInfo) === null || _registrationInfo$val2 === void 0 ? void 0 : _registrationInfo$val2.email,
                  lastName: (_registrationInfo$val3 = registrationInfo.value.personInfo) === null || _registrationInfo$val3 === void 0 ? void 0 : _registrationInfo$val3.lastName
                };
                var result = yield invokeBlockAction("ForgotUsername", {
                  bag
                });
                if (!(result !== null && result !== void 0 && result.isSuccess)) {
                  showError((result === null || result === void 0 ? void 0 : result.errorMessage) || "An unexpected error occurred.");
                  return;
                }
                showCompletedStepNext({
                  isPlainCaption: true,
                  caption: sentLoginCaption.value,
                  isRedirectAutomatic: false
                });
              } finally {
                isSendingForgotUsername.value = false;
              }
            });
            return _onEmailUsername.apply(this, arguments);
          }
          function onMovePrevious() {
            movePrevious();
          }
          function onNavigate(_x2) {
            return _onNavigate.apply(this, arguments);
          }
          function _onNavigate() {
            _onNavigate = _asyncToGenerator(function* (url) {
              yield navigate(url);
            });
            return _onNavigate.apply(this, arguments);
          }
          function onNoDuplicatePersonSelected() {
            return _onNoDuplicatePersonSelected.apply(this, arguments);
          }
          function _onNoDuplicatePersonSelected() {
            _onNoDuplicatePersonSelected = _asyncToGenerator(function* () {
              registrationInfo.value.selectedPersonId = 0;
              yield register();
            });
            return _onNoDuplicatePersonSelected.apply(this, arguments);
          }
          function onPasswordlessConfirmationSentStepMovePrevious() {
            passwordlessConfirmationCode.value = "";
            registrationInfo.value.code = "";
            movePrevious();
          }
          function onPasswordlessConfirmationSubmitted() {
            return _onPasswordlessConfirmationSubmitted.apply(this, arguments);
          }
          function _onPasswordlessConfirmationSubmitted() {
            _onPasswordlessConfirmationSubmitted = _asyncToGenerator(function* () {
              registrationInfo.value.code = passwordlessConfirmationCode.value;
              yield register();
            });
            return _onPasswordlessConfirmationSubmitted.apply(this, arguments);
          }
          function onRegister() {
            return _onRegister.apply(this, arguments);
          }
          function _onRegister() {
            _onRegister = _asyncToGenerator(function* () {
              yield register();
            });
            return _onRegister.apply(this, arguments);
          }
          function onSendToLogin() {
            return _onSendToLogin.apply(this, arguments);
          }
          function _onSendToLogin() {
            _onSendToLogin = _asyncToGenerator(function* () {
              yield navigate(config.loginPageUrl || "/Login");
            });
            return _onSendToLogin.apply(this, arguments);
          }
          function clearError() {
            errorMessage.value = null;
          }
          function movePrevious() {
            if (stepStack.value.length) {
              stepStack.value.splice(stepStack.value.length - 1);
            } else {
              showRegistrationStepNext();
            }
          }
          function navigate(_x3) {
            return _navigate.apply(this, arguments);
          }
          function _navigate() {
            _navigate = _asyncToGenerator(function* (url) {
              isNavigating.value = true;
              window.location.href = url;
              return new Promise((_resolve, _reject) => {});
            });
            return _navigate.apply(this, arguments);
          }
          function register() {
            return _register.apply(this, arguments);
          }
          function _register() {
            _register = _asyncToGenerator(function* () {
              try {
                var _response$data, _response$data2;
                isRegistering.value = true;
                clearError();
                isUsernameAvailable.value = null;
                var response = yield invokeBlockAction("Register", {
                  box: registrationInfo.value
                });
                if (response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.step || (response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.step) === AccountEntryStep.Registration) {
                  switch (response.data.step) {
                    case AccountEntryStep.Completed:
                      {
                        showCompletedStepNext(response.data.completedStepBag);
                        break;
                      }
                    case AccountEntryStep.ConfirmationSent:
                      {
                        showConfirmationSentStepNext(response.data.confirmationSentStepBag);
                        break;
                      }
                    case AccountEntryStep.DuplicatePersonSelection:
                      {
                        showDuplicatePersonSelectionStepNext(response.data.duplicatePersonSelectionStepBag);
                        break;
                      }
                    case AccountEntryStep.PasswordlessConfirmationSent:
                      {
                        showPasswordlessConfirmationSentStepNext(response.data.passwordlessConfirmationSentStepBag);
                        break;
                      }
                    case AccountEntryStep.ExistingAccount:
                      {
                        showExistingAccountStepNext(response.data.existingAccountStepBag);
                        break;
                      }
                    case AccountEntryStep.Registration:
                      {
                        showRegistrationStepNext();
                        break;
                      }
                  }
                } else {
                  showError((response === null || response === void 0 ? void 0 : response.errorMessage) || "An unexpected error occurred");
                }
              } finally {
                isRegistering.value = false;
              }
            });
            return _register.apply(this, arguments);
          }
          function showCompletedStepNext(options) {
            if (options) {
              completedStepOptions.value = options;
            }
            stepStack.value.push(AccountEntryStep.Completed);
          }
          function showConfirmationSentStepNext(options) {
            if (options) {
              confirmationSentStepOptions.value = options;
            }
            stepStack.value.push(AccountEntryStep.ConfirmationSent);
          }
          function showDuplicatePersonSelectionStepNext(options) {
            if (options) {
              duplicatePersonSelectionStepOptions.value = options;
              selectedDuplicatePerson.value = null;
            }
            stepStack.value.push(AccountEntryStep.DuplicatePersonSelection);
          }
          function showPasswordlessConfirmationSentStepNext(options) {
            if (options) {
              passwordlessConfirmationSentStepOptions.value = options;
              passwordlessConfirmationCode.value = "";
              registrationInfo.value.state = options.state;
            }
            stepStack.value.push(AccountEntryStep.PasswordlessConfirmationSent);
          }
          function showExistingAccountStepNext(options) {
            if (options) {
              existingAccountStepOptions.value = options;
            }
            stepStack.value.push(AccountEntryStep.ExistingAccount);
          }
          function showError(error) {
            errorMessage.value = error;
          }
          function showRegistrationStepNext() {
            selectedDuplicatePerson.value = null;
            duplicatePersonSelectionStepOptions.value = {};
            stepStack.value.push(AccountEntryStep.Registration);
          }
          if (config !== null && config !== void 0 && config.step || (config === null || config === void 0 ? void 0 : config.step) === AccountEntryStep.Completed) {
            showCompletedStepNext({
              isPlainCaption: true,
              caption: successCaption.value,
              isRedirectAutomatic: false
            });
          } else {
            showRegistrationStepNext();
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$1), null, {
              default: withCtx(() => [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "validation",
                innerHTML: errorMessage.value
              }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), unref(step).isRegistration ? (openBlock(), createBlock(unref(script$2), {
                key: 1,
                modelValue: registrationInfo.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => registrationInfo.value = $event),
                isUsernameAvailable: isUsernameAvailable.value,
                "onUpdate:isUsernameAvailable": _cache[1] || (_cache[1] = $event => isUsernameAvailable.value = $event),
                config: unref(config),
                disabled: isRegistering.value || isNavigating.value,
                onCheckUsernameAvailability: onCheckUsernameAvailability,
                onError: showError,
                onRegister: onRegister
              }, null, 8, ["modelValue", "isUsernameAvailable", "config", "disabled"])) : unref(step).isDuplicatePersonSelection ? (openBlock(), createBlock(unref(script$8), {
                key: 2,
                modelValue: unref(selectedDuplicatePerson),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(selectedDuplicatePerson) ? selectedDuplicatePerson.value = $event : null),
                disabled: isRegistering.value || isNavigating.value,
                options: duplicatePersonSelectionStepOptions.value,
                onMovePrevious: _cache[3] || (_cache[3] = $event => onDuplicatePersonSelectionStepMovePrevious()),
                onPersonSelected: onDuplicatePersonSelected,
                onNoPersonSelected: onNoDuplicatePersonSelected
              }, null, 8, ["modelValue", "disabled", "options"])) : unref(step).isPasswordlessConfirmationSent ? (openBlock(), createBlock(unref(script$6), {
                key: 3,
                modelValue: passwordlessConfirmationCode.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => passwordlessConfirmationCode.value = $event),
                disabled: isRegistering.value || isNavigating.value,
                options: passwordlessConfirmationSentStepOptions.value,
                onMovePrevious: _cache[5] || (_cache[5] = $event => onPasswordlessConfirmationSentStepMovePrevious()),
                onSubmit: onPasswordlessConfirmationSubmitted
              }, null, 8, ["modelValue", "disabled", "options"])) : unref(step).isExistingAccount ? (openBlock(), createBlock(unref(script$7), {
                key: 4,
                disabled: isSendingForgotUsername.value || isRegistering.value || isNavigating.value,
                options: existingAccountStepOptions.value,
                onMovePrevious: _cache[6] || (_cache[6] = $event => onMovePrevious()),
                onEmailUsername: onEmailUsername,
                onSendToLogin: onSendToLogin
              }, null, 8, ["disabled", "options"])) : unref(step).isConfirmationSent ? (openBlock(), createBlock(unref(script$a), {
                key: 5,
                options: confirmationSentStepOptions.value
              }, null, 8, ["options"])) : unref(step).isCompleted ? (openBlock(), createBlock(unref(script$b), {
                key: 6,
                disabled: isRegistering.value || isNavigating.value,
                options: completedStepOptions.value,
                onNavigate: _cache[7] || (_cache[7] = $event => onNavigate($event))
              }, null, 8, ["disabled", "options"])) : createCommentVNode("v-if", true)]),
              _: 1
            });
          };
        }
      }));

      script.__file = "src/Security/accountEntry.obs";

    })
  };
}));
//# sourceMappingURL=accountEntry.obs.js.map
