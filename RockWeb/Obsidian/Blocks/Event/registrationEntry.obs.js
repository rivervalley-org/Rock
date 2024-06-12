System.register(['vue', '@Obsidian/Utility/guid', '@Obsidian/Utility/page', '@Obsidian/Enums/Event/registrantsSameFamily', '@Obsidian/Enums/Event/registrationPersonFieldType', '@Obsidian/Enums/Event/registrationFieldSource', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/numberUpDown.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/PageState', '@Obsidian/Utility/stringUtils', '@Obsidian/Controls/gatewayControl.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/rockValidation.obs', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Utility/block', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/numberUpDownGroup.obs', '@Obsidian/Utility/component', '@Obsidian/Controls/rockField.obs', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Utility/fieldTypes', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/birthdayPicker.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/genderDropDownList.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/phoneNumberBoxWithSms.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/electronicSignature.obs', '@Obsidian/Controls/itemsWithPreAndPostHtml.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/dialog.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/saveFinancialAccountForm.obs', '@Obsidian/Controls/currencyBox.obs', '@Obsidian/Controls/helpBlock.obs', '@Obsidian/Controls/loading.obs', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/staticFormControl.obs', '@Obsidian/Enums/Event/registrarOption', '@Obsidian/Controls/countdownTimer.obs', '@Obsidian/Controls/progressTracker.obs', '@Obsidian/Utility/linq'], (function (exports) {
  'use strict';
  var inject, nextTick, createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, unref, createBlock, withCtx, createElementVNode, toDisplayString, createCommentVNode, createVNode, Fragment, renderList, withDirectives, vModelRadio, Transition, isRef, resolveDynamicComponent, mergeProps, onUpdated, createSlots, vShow, pushScopeId, popScopeId, normalizeClass, onMounted, vModelText, provide, readonly, newGuid, toGuidOrNull, areEqual, emptyGuid, smoothScrollToTop, RegistrantsSameFamily, RegistrationPersonFieldType, RegistrationFieldSource, toCurrencyOrNull, asFormattedString, toWord, NumberFilter, NotificationBox, NumberUpDown, RockButton, useStore, pluralConditional, toTitleCase, StringFilter, isNullOrWhiteSpace, GatewayControl, RockForm, RockValidation, provideSubmitPayment, useInvokeBlockAction, useConfigurationValues, CheckBox, DropDownList, NumberUpDownGroup, updateRefValue, RockField, FilterExpressionType, getFieldType, AddressControl, BirthdayPicker, EmailBox, GenderDropDownList, PhoneNumberBox, PhoneNumberBoxWithSms, TextBox, ElectronicSignature, ItemsWithPreAndPostHtml, RadioButtonList, AttributeValuesContainer, Dialog, LoadingIndicator, RockDateTime, SaveFinancialAccountForm, CurrencyBox, HelpBlock, Loading, InlineCheckBox, StaticFormControl, RegistrarOption, CountdownTimer, ProgressTracker, List;
  return {
    setters: [function (module) {
      inject = module.inject;
      nextTick = module.nextTick;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withDirectives = module.withDirectives;
      vModelRadio = module.vModelRadio;
      Transition = module.Transition;
      isRef = module.isRef;
      resolveDynamicComponent = module.resolveDynamicComponent;
      mergeProps = module.mergeProps;
      onUpdated = module.onUpdated;
      createSlots = module.createSlots;
      vShow = module.vShow;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      normalizeClass = module.normalizeClass;
      onMounted = module.onMounted;
      vModelText = module.vModelText;
      provide = module.provide;
      readonly = module.readonly;
    }, function (module) {
      newGuid = module.newGuid;
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      smoothScrollToTop = module.smoothScrollToTop;
    }, function (module) {
      RegistrantsSameFamily = module.RegistrantsSameFamily;
    }, function (module) {
      RegistrationPersonFieldType = module.RegistrationPersonFieldType;
    }, function (module) {
      RegistrationFieldSource = module.RegistrationFieldSource;
    }, function (module) {
      toCurrencyOrNull = module.toCurrencyOrNull;
      asFormattedString = module.asFormattedString;
      toWord = module.toWord;
      NumberFilter = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      NumberUpDown = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      pluralConditional = module.pluralConditional;
      toTitleCase = module.toTitleCase;
      StringFilter = module["default"];
      isNullOrWhiteSpace = module.isNullOrWhiteSpace;
    }, function (module) {
      GatewayControl = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      provideSubmitPayment = module.provideSubmitPayment;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      NumberUpDownGroup = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      FilterExpressionType = module.FilterExpressionType;
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      BirthdayPicker = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      GenderDropDownList = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      PhoneNumberBoxWithSms = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      ElectronicSignature = module["default"];
    }, function (module) {
      ItemsWithPreAndPostHtml = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      Dialog = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      SaveFinancialAccountForm = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      HelpBlock = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
    }, function (module) {
      RegistrarOption = module.RegistrarOption;
    }, function (module) {
      CountdownTimer = module["default"];
    }, function (module) {
      ProgressTracker = module["default"];
    }, function (module) {
      List = module.List;
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

      var unknownSingleFamilyGuid = newGuid();
      function getForcedFamilyGuid(currentPerson, viewModel) {
        return currentPerson && viewModel.registrantsSameFamily === RegistrantsSameFamily.Yes ? viewModel.currentPersonFamilyGuid || unknownSingleFamilyGuid : null;
      }
      function getDefaultRegistrantInfo(currentPerson, viewModel, familyGuid) {
        var forcedFamilyGuid = getForcedFamilyGuid(currentPerson, viewModel);
        if (forcedFamilyGuid) {
          familyGuid = forcedFamilyGuid;
        }
        if (!familyGuid && viewModel.registrantsSameFamily === RegistrantsSameFamily.No) {
          familyGuid = newGuid();
        }
        var registrantBag = {
          cost: 0,
          isOnWaitList: false,
          familyGuid: familyGuid,
          fieldValues: {},
          feeItemQuantities: {},
          guid: newGuid(),
          personGuid: null
        };
        return registrantBag;
      }
      function getRegistrantBasicInfo(registrant, registrantForms) {
        var _fields$find, _fields$find2, _fields$find3, _registrant$fieldValu, _registrant$fieldValu2, _registrant$fieldValu3;
        var fields = (registrantForms === null || registrantForms === void 0 ? void 0 : registrantForms.reduce((acc, f) => {
          var _f$fields;
          return acc.concat((_f$fields = f.fields) !== null && _f$fields !== void 0 ? _f$fields : []);
        }, [])) || [];
        var firstNameGuidOrEmptyString = ((_fields$find = fields.find(f => f.personFieldType === RegistrationPersonFieldType.FirstName && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find === void 0 ? void 0 : _fields$find.guid) || "";
        var lastNameGuidOrEmptyString = ((_fields$find2 = fields.find(f => f.personFieldType === RegistrationPersonFieldType.LastName && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find2 === void 0 ? void 0 : _fields$find2.guid) || "";
        var emailGuidOrEmptyString = ((_fields$find3 = fields.find(f => f.personFieldType === RegistrationPersonFieldType.Email && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find3 === void 0 ? void 0 : _fields$find3.guid) || "";
        return {
          firstName: (registrant === null || registrant === void 0 ? void 0 : (_registrant$fieldValu = registrant.fieldValues) === null || _registrant$fieldValu === void 0 ? void 0 : _registrant$fieldValu[firstNameGuidOrEmptyString]) || "",
          lastName: (registrant === null || registrant === void 0 ? void 0 : (_registrant$fieldValu2 = registrant.fieldValues) === null || _registrant$fieldValu2 === void 0 ? void 0 : _registrant$fieldValu2[lastNameGuidOrEmptyString]) || "",
          email: (registrant === null || registrant === void 0 ? void 0 : (_registrant$fieldValu3 = registrant.fieldValues) === null || _registrant$fieldValu3 === void 0 ? void 0 : _registrant$fieldValu3[emailGuidOrEmptyString]) || "",
          guid: (registrant === null || registrant === void 0 ? void 0 : registrant.guid) || ""
        };
      }
      function scrollToTopAfterNextRender() {
        nextTick(() => smoothScrollToTop());
      }
      function use(key) {
        var result = inject(key);
        if (result === undefined) {
          throw "Attempted to access ".concat(key, " before a value was provided.");
        }
        return result;
      }
      function convertComparisonValue(value) {
        var _value$value;
        return {
          value: (_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : "",
          comparisonType: value.comparisonType
        };
      }
      var CurrentRegistrationEntryState = Symbol("registration-entry-state");
      var GetPersistSessionArgs = Symbol("get-persist-session-args");
      var PersistSession = Symbol("persist-session");
      var RegistrationCostSummary = Symbol("registration-cost-summary");
      function formatCurrency(value, overrides) {
        var currencyBag = _objectSpread2({
          decimalPlaces: 2,
          symbol: "$"
        }, overrides);
        var formattedValue = toCurrencyOrNull(value, currencyBag);
        if (formattedValue) {
          return formattedValue;
        } else {
          return "".concat(currencyBag.symbol).concat(asFormattedString(value, currencyBag.decimalPlaces));
        }
      }

      var _hoisted_1$e = {
        class: "registrationentry-intro"
      };
      var _hoisted_2$b = ["innerHTML"];
      var _hoisted_3$a = {
        key: 2,
        class: "registrationentry-intro mb-3"
      };
      var _hoisted_4$a = {
        key: 6,
        class: "actions text-right"
      };
      var _hoisted_5$a = createTextVNode(" Next ");
      var script$f = defineComponent({
        name: 'intro.partial',
        emits: ["next"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var store = useStore();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var showRemainingCapacity = ref(false);
          var numberOfRegistrants = ref(registrationEntryState.registrants.length);
          var currentPerson = computed(() => {
            return store.state.currentPerson;
          });
          var config = computed(() => {
            return registrationEntryState.viewModel;
          });
          var spotsRemaining = computed(() => {
            var _config$value$spotsRe;
            return (_config$value$spotsRe = config.value.spotsRemaining) !== null && _config$value$spotsRe !== void 0 ? _config$value$spotsRe : null;
          });
          var numberToAddToWaitlist = computed(() => {
            if (spotsRemaining.value === null || !config.value.waitListEnabled) {
              return 0;
            }
            if (spotsRemaining.value >= numberOfRegistrants.value) {
              return 0;
            }
            return numberOfRegistrants.value - spotsRemaining.value;
          });
          var remainingCapacityPhrase = computed(() => {
            if (spotsRemaining.value === null) {
              return "";
            }
            return pluralConditional(spotsRemaining.value, "1 more ".concat(registrantTerm.value), "".concat(spotsRemaining.value, " more ").concat(registrantTermPlural.value));
          });
          var isFull = computed(() => {
            if (spotsRemaining.value === null) {
              return false;
            }
            return spotsRemaining.value < 1;
          });
          var canContinue = computed(() => {
            return !(isFull.value && numberToAddToWaitlist.value !== numberOfRegistrants.value);
          });
          var registrantTerm = computed(() => {
            config.value.instanceName;
            return (config.value.registrantTerm || "registrant").toLowerCase();
          });
          var registrantTermPlural = computed(() => {
            return (config.value.pluralRegistrantTerm || "registrants").toLowerCase();
          });
          var registrationTerm = computed(() => {
            return (config.value.registrationTerm || "registration").toLowerCase();
          });
          var registrationTermPlural = computed(() => {
            return (config.value.pluralRegistrationTerm || "registrations").toLowerCase();
          });
          var registrationTermTitleCase = computed(() => {
            return toTitleCase(registrationTerm.value);
          });
          function onNext() {
            var forcedFamilyGuid = getForcedFamilyGuid(currentPerson.value, config.value);
            while (numberOfRegistrants.value > registrationEntryState.registrants.length) {
              var registrant = getDefaultRegistrantInfo(currentPerson.value, config.value, forcedFamilyGuid);
              registrationEntryState.registrants.push(registrant);
            }
            registrationEntryState.registrants.length = numberOfRegistrants.value;
            var firstWaitListIndex = numberOfRegistrants.value - numberToAddToWaitlist.value;
            for (var i = firstWaitListIndex; i < numberOfRegistrants.value; i++) {
              registrationEntryState.registrants[i].isOnWaitList = true;
            }
            emit("next");
          }
          watch(numberOfRegistrants, () => {
            var spots = spotsRemaining.value;
            if (!config.value.waitListEnabled && spots !== null && spots < numberOfRegistrants.value) {
              showRemainingCapacity.value = true;
              nextTick(() => numberOfRegistrants.value = spots);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$e, [unref(isFull) && unref(numberToAddToWaitlist) !== numberOfRegistrants.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              class: "text-left",
              alertType: "warning"
            }, {
              default: withCtx(() => [createElementVNode("strong", null, toDisplayString(unref(registrationTermTitleCase)) + " Full", 1), createElementVNode("p", null, " There are not any more " + toDisplayString(unref(registrationTermPlural)) + " available for " + toDisplayString(unref(config).instanceName) + ". ", 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), showRemainingCapacity.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              class: "text-left",
              alertType: "warning"
            }, {
              default: withCtx(() => [createElementVNode("strong", null, toDisplayString(unref(registrationTermTitleCase)) + " Full", 1), createElementVNode("p", null, " This " + toDisplayString(unref(registrationTerm)) + " only has capacity for " + toDisplayString(unref(remainingCapacityPhrase)) + ". ", 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", {
              class: "text-left",
              innerHTML: unref(config).instructionsHtml
            }, null, 8, _hoisted_2$b), unref(config).maxRegistrants > 1 ? (openBlock(), createElementBlock("div", _hoisted_3$a, [createElementVNode("h1", null, "How many " + toDisplayString(unref(config).pluralRegistrantTerm) + " will you be registering?", 1), createVNode(unref(NumberUpDown), {
              modelValue: numberOfRegistrants.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => numberOfRegistrants.value = $event),
              class: "margin-t-sm",
              numberIncrementClasses: "input-lg",
              max: unref(config).maxRegistrants
            }, null, 8, ["modelValue", "max"])])) : createCommentVNode("v-if", true), unref(config).timeoutMinutes ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 3,
              alertType: "info",
              class: "text-left"
            }, {
              default: withCtx(() => [createTextVNode(" Due to a high-volume of expected interest, your " + toDisplayString(unref(registrationTerm)) + " session will expire after " + toDisplayString(unref(pluralConditional)(unref(config).timeoutMinutes, 'a minute', unref(config).timeoutMinutes + ' minutes')) + " of inactivity. ", 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), unref(numberToAddToWaitlist) === numberOfRegistrants.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 4,
              class: "text-left",
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(" This " + toDisplayString(unref(registrationTerm)) + " has reached its capacity. Complete the registration to be added to the waitlist. ", 1)]),
              _: 1
            })) : unref(numberToAddToWaitlist) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 5,
              class: "text-left",
              alertType: "warning"
            }, {
              default: withCtx(() => {
                var _unref$spotsRemaining;
                return [createTextVNode(" This " + toDisplayString(unref(registrationTerm)) + " only has capacity for " + toDisplayString(unref(remainingCapacityPhrase)) + ". The first " + toDisplayString(unref(pluralConditional)((_unref$spotsRemaining = unref(config).spotsRemaining) !== null && _unref$spotsRemaining !== void 0 ? _unref$spotsRemaining : 0, unref(registrantTerm), unref(config).spotsRemaining + ' ' + unref(registrantTermPlural))) + " you add will be registered for " + toDisplayString(unref(config).instanceName) + ". The remaining " + toDisplayString(unref(pluralConditional)(unref(numberToAddToWaitlist), unref(registrantTerm), unref(numberToAddToWaitlist) + ' ' + unref(registrantTermPlural))) + " will be added to the waitlist. ", 1)];
              }),
              _: 1
            })) : createCommentVNode("v-if", true), unref(canContinue) ? (openBlock(), createElementBlock("div", _hoisted_4$a, [createVNode(unref(RockButton), {
              btnType: "primary",
              onClick: onNext
            }, {
              default: withCtx(() => [_hoisted_5$a]),
              _: 1
            })])) : createCommentVNode("v-if", true)]);
          };
        }
      });

      script$f.__file = "src/Event/RegistrationEntry/intro.partial.obs";

      var _hoisted_1$d = {
        class: "registrationentry-payment"
      };
      var _hoisted_2$a = createElementVNode("h4", null, "Payment Information", -1);
      var _hoisted_3$9 = createElementVNode("hr", null, null, -1);
      var _hoisted_4$9 = {
        key: 0,
        class: "payment-method-options"
      };
      var _hoisted_5$9 = {
        class: "radio payment-method"
      };
      var _hoisted_6$9 = ["for"];
      var _hoisted_7$5 = ["id", "name", "value"];
      var _hoisted_8$5 = {
        class: "label-text payment-method-account"
      };
      var _hoisted_9$5 = ["src"];
      var _hoisted_10$5 = {
        class: "payment-method-name"
      };
      var _hoisted_11$4 = {
        class: "payment-method-description text-muted"
      };
      var _hoisted_12$4 = {
        class: "position-relative overflow-hidden"
      };
      var _hoisted_13$3 = {
        key: 0,
        class: "hosted-gateway-container payment-method-entry"
      };
      var _hoisted_14$2 = {
        class: "hosted-payment-control"
      };
      var _hoisted_15$2 = {
        class: "actions text-right"
      };
      var _hoisted_16$1 = createTextVNode(" Previous ");
      var _hoisted_17$1 = createTextVNode(" Pay ");
      var script$e = defineComponent({
        name: 'payment.partial',
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var submitPayment = provideSubmitPayment();
          var getRegistrationEntryBlockArgs = use(GetPersistSessionArgs);
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var uniqueId = newGuid();
          var loading = ref(false);
          var gatewayErrorMessage = ref("");
          var gatewayValidationFields = ref([]);
          var submitErrorMessage = ref("");
          var selectedSavedAccount = ref("");
          var gatewayControlModel = computed(() => {
            var _viewModel$value$gate;
            return (_viewModel$value$gate = viewModel.value.gatewayControl) !== null && _viewModel$value$gate !== void 0 ? _viewModel$value$gate : null;
          });
          var viewModel = computed(() => {
            return registrationEntryState.viewModel;
          });
          var hasSavedAccounts = computed(() => {
            var _registrationEntrySta;
            var savedAccounts = (_registrationEntrySta = registrationEntryState.viewModel.savedAccounts) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : null;
            return savedAccounts !== null && savedAccounts.length > 0;
          });
          var savedAccountOptions = computed(() => {
            var _registrationEntrySta2;
            var savedAccounts = (_registrationEntrySta2 = registrationEntryState.viewModel.savedAccounts) !== null && _registrationEntrySta2 !== void 0 ? _registrationEntrySta2 : null;
            if (savedAccounts === null) {
              return [];
            }
            var options = [...savedAccounts];
            options.push({
              value: "",
              text: "New Payment Method"
            });
            return options;
          });
          var showGateway = computed(() => {
            return !hasSavedAccounts.value || selectedSavedAccount.value === "";
          });
          var amountToPay = computed(() => {
            return registrationEntryState.amountToPayToday;
          });
          var amountToPayText = computed(() => {
            return "$".concat(registrationEntryState.amountToPayToday.toFixed(2));
          });
          var redirectReturnUrl = computed(() => {
            if (window.location.href.includes("?")) {
              return "".concat(window.location.href, "&sessionGuid=").concat(registrationEntryState.registrationSessionGuid);
            } else {
              return "".concat(window.location.href, "?sessionGuid=").concat(registrationEntryState.registrationSessionGuid);
            }
          });
          function onPrevious() {
            emit("previous");
          }
          function onNext() {
            return _onNext.apply(this, arguments);
          }
          function _onNext() {
            _onNext = _asyncToGenerator(function* () {
              loading.value = true;
              if (registrationEntryState.amountToPayToday) {
                if (showGateway.value) {
                  gatewayErrorMessage.value = "";
                  gatewayValidationFields.value = [];
                  submitPayment();
                } else if (selectedSavedAccount.value !== "") {
                  registrationEntryState.savedAccountGuid = toGuidOrNull(selectedSavedAccount.value);
                  var success = yield submit();
                  loading.value = false;
                  if (success) {
                    emit("next");
                  }
                } else {
                  submitErrorMessage.value = "Please select a valid payment option.";
                  loading.value = false;
                  return;
                }
              } else {
                var _success = yield submit();
                loading.value = false;
                if (_success) {
                  emit("next");
                }
              }
            });
            return _onNext.apply(this, arguments);
          }
          function onGatewayControlSuccess(_x) {
            return _onGatewayControlSuccess.apply(this, arguments);
          }
          function _onGatewayControlSuccess() {
            _onGatewayControlSuccess = _asyncToGenerator(function* (token) {
              registrationEntryState.gatewayToken = token;
              var success = yield submit();
              loading.value = false;
              if (success) {
                emit("next");
              }
            });
            return _onGatewayControlSuccess.apply(this, arguments);
          }
          function onGatewayControlError(message) {
            loading.value = false;
            gatewayErrorMessage.value = message;
          }
          function onGatewayControlValidation(invalidFields) {
            loading.value = false;
            gatewayValidationFields.value = invalidFields;
          }
          function getOptionUniqueId(option) {
            var _option$value$replace, _option$value;
            var key = (_option$value$replace = (_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.replace(" ", "-")) !== null && _option$value$replace !== void 0 ? _option$value$replace : "";
            return "".concat(uniqueId, "-").concat(key);
          }
          function getAccountImage(option) {
            var _option$image;
            return (_option$image = option.image) !== null && _option$image !== void 0 ? _option$image : "";
          }
          function getAccountName(option) {
            var _option$text;
            return (_option$text = option.text) !== null && _option$text !== void 0 ? _option$text : "";
          }
          function getAccountDescription(option) {
            var _option$description;
            return (_option$description = option.description) !== null && _option$description !== void 0 ? _option$description : "";
          }
          function submit() {
            return _submit.apply(this, arguments);
          }
          function _submit() {
            _submit = _asyncToGenerator(function* () {
              submitErrorMessage.value = "";
              var result = yield invokeBlockAction("SubmitRegistration", {
                args: getRegistrationEntryBlockArgs()
              });
              if (result.isError || !result.data) {
                submitErrorMessage.value = result.errorMessage || "Unknown error";
              } else {
                registrationEntryState.successViewModel = result.data;
              }
              return result.isSuccess;
            });
            return _submit.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$d, [createVNode(unref(RockForm), {
              onSubmit: onNext
            }, {
              default: withCtx(() => [_hoisted_2$a, createElementVNode("div", null, " Payment Amount: " + toDisplayString(unref(amountToPayText)), 1), _hoisted_3$9, unref(gatewayControlModel) ? (openBlock(), createElementBlock("div", _hoisted_4$9, [unref(hasSavedAccounts) ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(unref(savedAccountOptions), savedAccount => {
                return openBlock(), createElementBlock("div", _hoisted_5$9, [createElementVNode("label", {
                  for: getOptionUniqueId(savedAccount)
                }, [withDirectives(createElementVNode("input", {
                  id: getOptionUniqueId(savedAccount),
                  name: unref(uniqueId),
                  type: "radio",
                  value: savedAccount.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => selectedSavedAccount.value = $event)
                }, null, 8, _hoisted_7$5), [[vModelRadio, selectedSavedAccount.value]]), createElementVNode("span", _hoisted_8$5, [getAccountImage(savedAccount) ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: "payment-method-image",
                  src: getAccountImage(savedAccount)
                }, null, 8, _hoisted_9$5)) : createCommentVNode("v-if", true), createElementVNode("span", _hoisted_10$5, toDisplayString(getAccountName(savedAccount)), 1), createElementVNode("span", _hoisted_11$4, toDisplayString(getAccountDescription(savedAccount)), 1)])], 8, _hoisted_6$9)]);
              }), 256)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_12$4, [createVNode(Transition, {
                name: "rockslide"
              }, {
                default: withCtx(() => [unref(showGateway) ? (openBlock(), createElementBlock("div", _hoisted_13$3, [gatewayErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "danger"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(gatewayErrorMessage.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), createVNode(unref(RockValidation), {
                  errors: gatewayValidationFields.value
                }, null, 8, ["errors"]), createElementVNode("div", _hoisted_14$2, [createVNode(unref(GatewayControl), {
                  gatewayControlModel: unref(gatewayControlModel),
                  amountToPay: unref(amountToPay),
                  returnUrl: unref(redirectReturnUrl),
                  onSuccess: onGatewayControlSuccess,
                  onError: onGatewayControlError,
                  onValidation: onGatewayControlValidation
                }, null, 8, ["gatewayControlModel", "amountToPay", "returnUrl"])])])) : createCommentVNode("v-if", true)]),
                _: 1
              })])])) : createCommentVNode("v-if", true), submitErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 1,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(submitErrorMessage.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_15$2, [createVNode(unref(RockButton), {
                class: "pull-left",
                btnType: "default",
                onClick: onPrevious,
                isLoading: loading.value,
                autoDisable: ""
              }, {
                default: withCtx(() => [_hoisted_16$1]),
                _: 1
              }, 8, ["isLoading"]), unref(gatewayControlModel) ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: "primary",
                type: "submit",
                isLoading: loading.value,
                autoDisable: ""
              }, {
                default: withCtx(() => [_hoisted_17$1]),
                _: 1
              }, 8, ["isLoading"])) : createCommentVNode("v-if", true)])]),
              _: 1
            })]);
          };
        }
      });

      script$e.__file = "src/Event/RegistrationEntry/payment.partial.obs";

      var _hoisted_1$c = createTextVNode("This fee configuration is not supported");
      var script$d = defineComponent({
        name: 'feeField.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          fee: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(_objectSpread2({}, props.modelValue));
          function getItemLabel(item) {
            var formattedCost = asFormattedString(item.cost, 2);
            if (item.countRemaining !== null && item.countRemaining !== undefined) {
              var formattedRemaining = asFormattedString(item.countRemaining, 0);
              return "".concat(item.name, " ($").concat(formattedCost, ") (").concat(formattedRemaining, " remaining)");
            }
            return "".concat(item.name, " ($").concat(formattedCost, ")");
          }
          var maxValue = computed(() => {
            if (!singleItem.value || singleItem.value.countRemaining === null || singleItem.value.countRemaining === undefined) {
              return 100;
            }
            return singleItem.value.countRemaining + quantityValue.value;
          });
          var checkboxValue = computed({
            get() {
              if (singleItem.value) {
                return internalValue.value[singleItem.value.guid] === 1 ? true : false;
              } else {
                return false;
              }
            },
            set(value) {
              if (singleItem.value) {
                internalValue.value = {
                  [singleItem.value.guid]: value ? 1 : 0
                };
              }
            }
          });
          var quantityValue = computed({
            get() {
              if (singleItem.value) {
                var _internalValue$value$;
                return (_internalValue$value$ = internalValue.value[singleItem.value.guid]) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : 0;
              } else {
                return 0;
              }
            },
            set(value) {
              if (singleItem.value) {
                internalValue.value = {
                  [singleItem.value.guid]: value
                };
              }
            }
          });
          var dropDownValue = computed({
            get() {
              if (props.fee.items) {
                var _iterator = _createForOfIteratorHelper(props.fee.items),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    if (internalValue.value[item.guid]) {
                      return item.guid;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              return "";
            },
            set(value) {
              var newValue = {};
              if (props.fee.items) {
                var _iterator2 = _createForOfIteratorHelper(props.fee.items),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;
                    if (areEqual(value, item.guid)) {
                      newValue[item.guid] = 1;
                    } else {
                      newValue[item.guid] = 0;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              updateRefValue(internalValue, newValue);
            }
          });
          var numberGroupValue = computed({
            get() {
              var values = {};
              var _iterator3 = _createForOfIteratorHelper(numberUpDownGroupOptions.value),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _internalValue$value$2;
                  var option = _step3.value;
                  values[option.key] = (_internalValue$value$2 = internalValue.value[option.key]) !== null && _internalValue$value$2 !== void 0 ? _internalValue$value$2 : 0;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              return values;
            },
            set(value) {
              updateRefValue(internalValue, value);
            }
          });
          var label = computed(() => {
            var _props$fee$name;
            if (singleItem.value) {
              return getItemLabel(singleItem.value);
            }
            return (_props$fee$name = props.fee.name) !== null && _props$fee$name !== void 0 ? _props$fee$name : "";
          });
          var singleItem = computed(() => {
            if (!props.fee.items || props.fee.items.length !== 1) {
              return null;
            }
            return props.fee.items[0];
          });
          var isHidden = computed(() => {
            var _props$fee$items;
            if (!((_props$fee$items = props.fee.items) !== null && _props$fee$items !== void 0 && _props$fee$items.length)) {
              return true;
            }
            if (props.fee.hideWhenNoneRemaining) {
              if (singleItem.value && props.fee.items[0].countRemaining !== null && props.fee.items[0].countRemaining !== undefined) {
                var _internalValue$value$3;
                if (props.fee.items[0].countRemaining + ((_internalValue$value$3 = internalValue.value[props.fee.items[0].guid]) !== null && _internalValue$value$3 !== void 0 ? _internalValue$value$3 : 0) === 0) {
                  return true;
                }
              }
              if (!singleItem.value) {
                if (props.fee.items.every(i => {
                  var _internalValue$value$4;
                  return i.countRemaining !== null && i.countRemaining !== undefined && i.countRemaining + ((_internalValue$value$4 = internalValue.value[i.guid]) !== null && _internalValue$value$4 !== void 0 ? _internalValue$value$4 : 0) === 0;
                })) {
                  return true;
                }
              }
            }
            return false;
          });
          var isCheckbox = computed(() => {
            return !!singleItem.value && !props.fee.allowMultiple;
          });
          var isNumberUpDown = computed(() => {
            return !!singleItem.value && props.fee.allowMultiple;
          });
          var isNumberUpDownGroup = computed(() => {
            return !!props.fee.items && props.fee.items.length > 1 && props.fee.allowMultiple;
          });
          var isDropDown = computed(() => {
            return !!props.fee.items && props.fee.items.length > 1 && !props.fee.allowMultiple;
          });
          var dropDownListOptions = computed(() => {
            var _props$fee$items$filt, _props$fee$items2;
            return (_props$fee$items$filt = (_props$fee$items2 = props.fee.items) === null || _props$fee$items2 === void 0 ? void 0 : _props$fee$items2.filter(i => {
              var _ref2;
              return !props.fee.hideWhenNoneRemaining || i.countRemaining === null || i.countRemaining === undefined || ((_ref2 = i.countRemaining + internalValue.value[i.guid]) !== null && _ref2 !== void 0 ? _ref2 : 0) > 0;
            }).map(i => {
              var _ref3;
              return {
                text: getItemLabel(i),
                value: i.guid,
                disabled: i.countRemaining !== null && i.countRemaining !== undefined && ((_ref3 = i.countRemaining + internalValue.value[i.guid]) !== null && _ref3 !== void 0 ? _ref3 : 0) === 0
              };
            })) !== null && _props$fee$items$filt !== void 0 ? _props$fee$items$filt : [];
          });
          var numberUpDownGroupOptions = computed(() => {
            var _props$fee$items$filt2, _props$fee$items3;
            return (_props$fee$items$filt2 = (_props$fee$items3 = props.fee.items) === null || _props$fee$items3 === void 0 ? void 0 : _props$fee$items3.filter(i => {
              var _ref4;
              return !props.fee.hideWhenNoneRemaining || i.countRemaining === null || i.countRemaining === undefined || ((_ref4 = i.countRemaining + internalValue.value[i.guid]) !== null && _ref4 !== void 0 ? _ref4 : 0) > 0;
            }).map(i => {
              var _internalValue$value$5;
              return {
                key: i.guid,
                label: getItemLabel(i),
                max: i.countRemaining !== null && i.countRemaining !== undefined ? i.countRemaining + ((_internalValue$value$5 = internalValue.value[i.guid]) !== null && _internalValue$value$5 !== void 0 ? _internalValue$value$5 : 0) : 100,
                min: 0
              };
            })) !== null && _props$fee$items$filt2 !== void 0 ? _props$fee$items$filt2 : [];
          });
          var rules = computed(() => {
            return props.fee.isRequired ? "required" : "";
          });
          var isCheckboxDisabled = computed(() => {
            var _props$fee$items4;
            if (props.fee.isRequired && checkboxValue.value) {
              return "disabled";
            }
            if (!checkboxValue.value && (_props$fee$items4 = props.fee.items) !== null && _props$fee$items4 !== void 0 && _props$fee$items4.length && props.fee.items[0].countRemaining === 0) {
              return "disabled";
            }
            return undefined;
          });
          watch(() => props.modelValue, () => {
            updateRefValue(internalValue, _objectSpread2({}, props.modelValue));
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          if (singleItem.value && props.fee.isRequired) {
            var _props$fee$items5;
            if ((_props$fee$items5 = props.fee.items) !== null && _props$fee$items5 !== void 0 && _props$fee$items5.length && (props.fee.items[0].countRemaining === null || props.fee.items[0].countRemaining === undefined || props.fee.items[0].countRemaining > 0)) {
              if (isCheckbox.value && !checkboxValue.value) {
                checkboxValue.value = true;
              } else if (isNumberUpDown.value && !quantityValue.value) {
                quantityValue.value = 1;
              }
              emit("update:modelValue", internalValue.value);
            }
          }
          return (_ctx, _cache) => {
            var _props$fee$name2;
            return !unref(isHidden) ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [unref(isCheckbox) ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              label: unref(label),
              validationTitle: props.fee.name,
              modelValue: unref(checkboxValue),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(checkboxValue) ? checkboxValue.value = $event : null),
              rules: unref(rules),
              disabled: unref(isCheckboxDisabled)
            }, null, 8, ["label", "validationTitle", "modelValue", "rules", "disabled"])) : unref(isNumberUpDown) ? (openBlock(), createBlock(unref(NumberUpDown), {
              key: 1,
              validationTitle: (_props$fee$name2 = props.fee.name) !== null && _props$fee$name2 !== void 0 ? _props$fee$name2 : undefined,
              label: unref(label),
              min: 0,
              max: unref(maxValue),
              modelValue: unref(quantityValue),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(quantityValue) ? quantityValue.value = $event : null),
              rules: unref(rules)
            }, null, 8, ["validationTitle", "label", "max", "modelValue", "rules"])) : unref(isDropDown) ? (openBlock(), createBlock(unref(DropDownList), {
              key: 2,
              label: unref(label),
              items: unref(dropDownListOptions),
              modelValue: unref(dropDownValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(dropDownValue) ? dropDownValue.value = $event : null),
              rules: unref(rules),
              formControlClasses: "input-width-md"
            }, null, 8, ["label", "items", "modelValue", "rules"])) : unref(isNumberUpDownGroup) ? (openBlock(), createBlock(unref(NumberUpDownGroup), {
              key: 3,
              label: unref(label),
              options: unref(numberUpDownGroupOptions),
              modelValue: unref(numberGroupValue),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(numberGroupValue) ? numberGroupValue.value = $event : null),
              rules: unref(rules)
            }, null, 8, ["label", "options", "modelValue", "rules"])) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 4,
              alertType: "danger"
            }, {
              default: withCtx(() => [_hoisted_1$c]),
              _: 1
            }))], 64)) : createCommentVNode("v-if", true);
          };
        }
      });

      script$d.__file = "src/Event/RegistrationEntry/feeField.partial.obs";

      var _hoisted_1$b = createTextVNode("Could not resolve attribute field");
      var script$c = defineComponent({
        name: 'registrantAttributeField.partial',
        props: {
          field: {
            type: Object,
            required: true
          },
          fieldValues: {
            type: Object,
            required: true
          },
          formFields: {
            type: Array,
            required: true
          }
        },
        setup(__props) {
          var _ref;
          var props = __props;
          if (!props.field.visibilityRules) {
            props.field.visibilityRules = [];
          }
          var value = ref((_ref = props.fieldValues[props.field.guid]) !== null && _ref !== void 0 ? _ref : "");
          var isVisible = computed(() => {
            var _props$field$visibili, _props$field$visibili2, _props$field$visibili3, _props$field$visibili4, _props$field$visibili5, _props$field$visibili6, _props$field$visibili7, _props$field$visibili8;
            switch (props.field.visibilityRuleType) {
              case FilterExpressionType.GroupAll:
                return (_props$field$visibili = (_props$field$visibili2 = props.field.visibilityRules) === null || _props$field$visibili2 === void 0 ? void 0 : _props$field$visibili2.every(vr => isRuleMet(vr, props.fieldValues, props.formFields))) !== null && _props$field$visibili !== void 0 ? _props$field$visibili : true;
              case FilterExpressionType.GroupAllFalse:
                return (_props$field$visibili3 = (_props$field$visibili4 = props.field.visibilityRules) === null || _props$field$visibili4 === void 0 ? void 0 : _props$field$visibili4.every(vr => !isRuleMet(vr, props.fieldValues, props.formFields))) !== null && _props$field$visibili3 !== void 0 ? _props$field$visibili3 : true;
              case FilterExpressionType.GroupAny:
                return (_props$field$visibili5 = (_props$field$visibili6 = props.field.visibilityRules) === null || _props$field$visibili6 === void 0 ? void 0 : _props$field$visibili6.some(vr => isRuleMet(vr, props.fieldValues, props.formFields))) !== null && _props$field$visibili5 !== void 0 ? _props$field$visibili5 : true;
              case FilterExpressionType.GroupAnyFalse:
                return (_props$field$visibili7 = (_props$field$visibili8 = props.field.visibilityRules) === null || _props$field$visibili8 === void 0 ? void 0 : _props$field$visibili8.some(vr => !isRuleMet(vr, props.fieldValues, props.formFields))) !== null && _props$field$visibili7 !== void 0 ? _props$field$visibili7 : true;
            }
            return true;
          });
          var modifiedAttribute = computed(() => {
            if (!props.field.attribute) {
              return null;
            }
            var fieldAttribute = _objectSpread2({}, props.field.attribute);
            fieldAttribute.isRequired = props.field.isRequired;
            return fieldAttribute;
          });
          function isRuleMet(rule, fieldValues, formFields) {
            var _comparedToFormField$, _rule$comparisonValue, _comparedToFormField$2;
            var value = fieldValues[rule.comparedToRegistrationTemplateFormFieldGuid] || "";
            if (typeof value !== "string") {
              return false;
            }
            var comparedToFormField = formFields.find(ff => areEqual(ff.guid, rule.comparedToRegistrationTemplateFormFieldGuid));
            if (!(comparedToFormField !== null && comparedToFormField !== void 0 && (_comparedToFormField$ = comparedToFormField.attribute) !== null && _comparedToFormField$ !== void 0 && _comparedToFormField$.fieldTypeGuid)) {
              return false;
            }
            var fieldType = getFieldType(comparedToFormField.attribute.fieldTypeGuid);
            if (!fieldType) {
              return false;
            }
            if (!rule.comparisonValue) {
              return false;
            }
            var comparisonValue = {
              value: (_rule$comparisonValue = rule.comparisonValue.value) !== null && _rule$comparisonValue !== void 0 ? _rule$comparisonValue : "",
              comparisonType: rule.comparisonValue.comparisonType
            };
            return fieldType.doesValueMatchFilter(value, comparisonValue, (_comparedToFormField$2 = comparedToFormField.attribute.configurationValues) !== null && _comparedToFormField$2 !== void 0 ? _comparedToFormField$2 : {});
          }
          watch(() => props.fieldValues[props.field.guid], () => {
            value.value = props.fieldValues[props.field.guid];
          });
          watch(value, () => {
            props.fieldValues[props.field.guid] = value.value;
          });
          return (_ctx, _cache) => {
            return unref(isVisible) ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [unref(modifiedAttribute) ? (openBlock(), createBlock(unref(RockField), {
              key: 0,
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
              isEditMode: "",
              attribute: unref(modifiedAttribute)
            }, null, 8, ["modelValue", "attribute"])) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [_hoisted_1$b]),
              _: 1
            }))], 64)) : createCommentVNode("v-if", true);
          };
        }
      });

      script$c.__file = "src/Event/RegistrationEntry/registrantAttributeField.partial.obs";

      var script$b = defineComponent({
        name: 'registrantPersonField.partial',
        props: {
          field: {
            type: Object,
            required: true
          },
          fieldValues: {
            type: Object,
            required: true
          },
          isKnownFamilyMember: {
            type: Boolean,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var component = computed(() => {
            var _registrationEntrySta, _registrationEntrySta2;
            switch (props.field.personFieldType) {
              case RegistrationPersonFieldType.FirstName:
                return TextBox;
              case RegistrationPersonFieldType.LastName:
                return TextBox;
              case RegistrationPersonFieldType.MiddleName:
                return TextBox;
              case RegistrationPersonFieldType.Campus:
                return DropDownList;
              case RegistrationPersonFieldType.Email:
                return EmailBox;
              case RegistrationPersonFieldType.Gender:
                return GenderDropDownList;
              case RegistrationPersonFieldType.Birthdate:
                return BirthdayPicker;
              case RegistrationPersonFieldType.AnniversaryDate:
                return BirthdayPicker;
              case RegistrationPersonFieldType.Address:
                return AddressControl;
              case RegistrationPersonFieldType.MaritalStatus:
                return DropDownList;
              case RegistrationPersonFieldType.ConnectionStatus:
                return DropDownList;
              case RegistrationPersonFieldType.Grade:
                return DropDownList;
              case RegistrationPersonFieldType.HomePhone:
                return PhoneNumberBox;
              case RegistrationPersonFieldType.WorkPhone:
                return PhoneNumberBox;
              case RegistrationPersonFieldType.MobilePhone:
                if ((_registrationEntrySta = (_registrationEntrySta2 = registrationEntryState.viewModel) === null || _registrationEntrySta2 === void 0 ? void 0 : _registrationEntrySta2.showSmsOptIn) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : false) {
                  return PhoneNumberBoxWithSms;
                }
                return PhoneNumberBox;
              case RegistrationPersonFieldType.Race:
                return DropDownList;
              case RegistrationPersonFieldType.Ethnicity:
                return DropDownList;
            }
          });
          var fieldControlComponentProps = computed(() => {
            var _registrationEntrySta3, _registrationEntrySta4, _registrationEntrySta5, _registrationEntrySta6, _registrationEntrySta7, _registrationEntrySta8;
            var componentProps = {
              rules: props.field.isRequired ? "required" : ""
            };
            switch (props.field.personFieldType) {
              case RegistrationPersonFieldType.FirstName:
                componentProps.label = "First Name";
                componentProps.disabled = props.isKnownFamilyMember;
                break;
              case RegistrationPersonFieldType.LastName:
                componentProps.label = "Last Name";
                componentProps.disabled = props.isKnownFamilyMember;
                break;
              case RegistrationPersonFieldType.MiddleName:
                componentProps.label = "Middle Name";
                break;
              case RegistrationPersonFieldType.Campus:
                componentProps.label = "Campus";
                componentProps.items = [...((_registrationEntrySta3 = registrationEntryState.viewModel.campuses) !== null && _registrationEntrySta3 !== void 0 ? _registrationEntrySta3 : [])];
                break;
              case RegistrationPersonFieldType.Email:
                componentProps.label = "Email";
                break;
              case RegistrationPersonFieldType.Gender:
                break;
              case RegistrationPersonFieldType.Birthdate:
                componentProps.label = "Birthday";
                break;
              case RegistrationPersonFieldType.AnniversaryDate:
                componentProps.label = "Anniversary Date";
                break;
              case RegistrationPersonFieldType.Address:
                componentProps.label = "Address";
                break;
              case RegistrationPersonFieldType.MaritalStatus:
                componentProps.label = "Marital Status";
                componentProps.items = [...((_registrationEntrySta4 = registrationEntryState.viewModel.maritalStatuses) !== null && _registrationEntrySta4 !== void 0 ? _registrationEntrySta4 : [])];
                break;
              case RegistrationPersonFieldType.ConnectionStatus:
                componentProps.label = "Connection Status";
                componentProps.items = [...((_registrationEntrySta5 = registrationEntryState.viewModel.connectionStatuses) !== null && _registrationEntrySta5 !== void 0 ? _registrationEntrySta5 : [])];
                break;
              case RegistrationPersonFieldType.Grade:
                componentProps.label = "Grade";
                componentProps.items = [...((_registrationEntrySta6 = registrationEntryState.viewModel.grades) !== null && _registrationEntrySta6 !== void 0 ? _registrationEntrySta6 : [])];
                break;
              case RegistrationPersonFieldType.HomePhone:
                componentProps.label = "Home Phone";
                break;
              case RegistrationPersonFieldType.WorkPhone:
                componentProps.label = "Work Phone";
                break;
              case RegistrationPersonFieldType.MobilePhone:
                componentProps.label = "Mobile Phone";
                break;
              case RegistrationPersonFieldType.Race:
                componentProps.label = "Race";
                componentProps.items = [...((_registrationEntrySta7 = registrationEntryState.viewModel.races) !== null && _registrationEntrySta7 !== void 0 ? _registrationEntrySta7 : [])];
                break;
              case RegistrationPersonFieldType.Ethnicity:
                componentProps.label = "Ethnicity";
                componentProps.items = [...((_registrationEntrySta8 = registrationEntryState.viewModel.ethnicities) !== null && _registrationEntrySta8 !== void 0 ? _registrationEntrySta8 : [])];
                break;
            }
            return componentProps;
          });
          var fieldType = computed(() => {
            return props.field.personFieldType;
          });
          if (!(props.field.guid in props.fieldValues)) {
            var defaultValue = "";
            switch (props.field.personFieldType) {
              case RegistrationPersonFieldType.Birthdate:
                defaultValue = undefined;
                break;
              case RegistrationPersonFieldType.AnniversaryDate:
                defaultValue = undefined;
                break;
              case RegistrationPersonFieldType.Address:
                defaultValue = {};
                break;
            }
            props.fieldValues[props.field.guid] = defaultValue;
          }
          return (_ctx, _cache) => {
            return unref(component) ? (openBlock(), createBlock(resolveDynamicComponent(unref(component)), mergeProps({
              key: 0
            }, unref(fieldControlComponentProps), {
              modelValue: __props.fieldValues[__props.field.guid],
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => __props.fieldValues[__props.field.guid] = $event)
            }), null, 16, ["modelValue"])) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode("Could not load the control for person field " + toDisplayString(unref(fieldType)) + ".", 1)]),
              _: 1
            }));
          };
        }
      });

      script$b.__file = "src/Event/RegistrationEntry/registrantPersonField.partial.obs";

      var _hoisted_1$a = {
        class: "registrationentry-registrant-details"
      };
      var _hoisted_2$9 = {
        key: 0,
        class: "well"
      };
      var _hoisted_3$8 = {
        key: 1,
        class: "row"
      };
      var _hoisted_4$8 = {
        class: "col-md-6"
      };
      var _hoisted_5$8 = {
        key: 1,
        class: "well registration-additional-options"
      };
      var _hoisted_6$8 = {
        key: 1,
        class: "registrant-signature-document styled-scroll"
      };
      var _hoisted_7$4 = {
        class: "signature-header"
      };
      var _hoisted_8$4 = {
        class: "signaturedocument-container"
      };
      var _hoisted_9$4 = ["srcdoc"];
      var _hoisted_10$4 = {
        class: "well"
      };
      var _hoisted_11$3 = {
        class: "actions row"
      };
      var _hoisted_12$3 = {
        class: "col-xs-6"
      };
      var _hoisted_13$2 = createTextVNode(" Previous ");
      var _hoisted_14$1 = {
        class: "col-xs-6 text-right"
      };
      var _hoisted_15$1 = createTextVNode(" Next ");
      var script$a = defineComponent({
        name: 'registrant.partial',
        props: {
          currentRegistrant: {
            type: Object,
            required: true
          },
          isWaitList: {
            type: Boolean,
            required: true
          }
        },
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var store = useStore();
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var getRegistrationEntryBlockArgs = use(GetPersistSessionArgs);
          if (!props.currentRegistrant.feeItemQuantities) {
            props.currentRegistrant.feeItemQuantities = {};
          }
          if (!props.currentRegistrant.fieldValues) {
            props.currentRegistrant.fieldValues = {};
          }
          if (registrationEntryState.viewModel.fees && props.currentRegistrant.feeItemQuantities) {
            var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.fees),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _fee$items;
                var fee = _step.value;
                var _iterator2 = _createForOfIteratorHelper((_fee$items = fee.items) !== null && _fee$items !== void 0 ? _fee$items : []),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var feeItem = _step2.value;
                    if (feeItem.guid && typeof props.currentRegistrant.feeItemQuantities[feeItem.guid] !== "number") {
                      props.currentRegistrant.feeItemQuantities[feeItem.guid] = 0;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          var fieldSources = {
            personField: RegistrationFieldSource.PersonField,
            personAttribute: RegistrationFieldSource.PersonAttribute,
            groupMemberAttribute: RegistrationFieldSource.GroupMemberAttribute,
            registrantAttribute: RegistrationFieldSource.RegistrantAttribute
          };
          var signatureData = ref();
          var signatureSource = ref("");
          var signatureToken = ref("");
          var formResetKey = ref("");
          var isNextDisabled = ref(false);
          var isSignatureDrawn = computed(() => {
            return registrationEntryState.viewModel.isSignatureDrawn;
          });
          var showPrevious = computed(() => {
            var _registrationEntrySta, _registrationEntrySta2, _registrationEntrySta3;
            if (registrationEntryState.currentRegistrantIndex > 0) {
              return true;
            }
            if (((_registrationEntrySta = (_registrationEntrySta2 = registrationEntryState.viewModel) === null || _registrationEntrySta2 === void 0 ? void 0 : (_registrationEntrySta3 = _registrationEntrySta2.registrationAttributesStart) === null || _registrationEntrySta3 === void 0 ? void 0 : _registrationEntrySta3.length) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : 0) > 0) {
              return true;
            }
            if (!registrationEntryState.viewModel.isExistingRegistration) {
              return true;
            }
            return false;
          });
          var viewModel = computed(() => {
            return registrationEntryState.viewModel;
          });
          var currentFormIndex = computed(() => {
            return registrationEntryState.currentRegistrantFormIndex;
          });
          var currentForm = computed(() => {
            return formsToShow.value[currentFormIndex.value] || null;
          });
          var isLastForm = computed(() => {
            return currentFormIndex.value + 1 === formsToShow.value.length;
          });
          var isDataForm = computed(() => {
            return currentFormIndex.value < formsToShow.value.length;
          });
          var isSignatureForm = computed(() => {
            return viewModel.value.isInlineSignatureRequired && currentFormIndex.value === formsToShow.value.length;
          });
          var isNextVisible = computed(() => {
            return !isSignatureForm.value;
          });
          var formsToShow = computed(() => {
            var _viewModel$value$regi2, _viewModel$value$regi3;
            if (!props.isWaitList) {
              var _viewModel$value$regi;
              return (_viewModel$value$regi = viewModel.value.registrantForms) !== null && _viewModel$value$regi !== void 0 ? _viewModel$value$regi : [];
            }
            return (_viewModel$value$regi2 = (_viewModel$value$regi3 = viewModel.value.registrantForms) === null || _viewModel$value$regi3 === void 0 ? void 0 : _viewModel$value$regi3.filter(form => {
              var _form$fields;
              return (_form$fields = form.fields) === null || _form$fields === void 0 ? void 0 : _form$fields.some(field => field.showOnWaitList);
            })) !== null && _viewModel$value$regi2 !== void 0 ? _viewModel$value$regi2 : [];
          });
          var currentFormFields = computed(() => {
            var _currentForm$value;
            return (((_currentForm$value = currentForm.value) === null || _currentForm$value === void 0 ? void 0 : _currentForm$value.fields) || []).filter(f => !props.isWaitList || f.showOnWaitList);
          });
          var currentFormFieldsAugmented = computed(() => {
            var fields = JSON.parse(JSON.stringify(currentFormFields.value));
            fields.forEach(value => {
              var _value$visibilityRule, _value$visibilityRule2, _value$visibilityRule3, _value$visibilityRule4;
              if (value.fieldSource != fieldSources.personField) {
                var isVisible = true;
                switch (value.visibilityRuleType) {
                  case FilterExpressionType.GroupAll:
                    isVisible = !!((_value$visibilityRule = value.visibilityRules) !== null && _value$visibilityRule !== void 0 && _value$visibilityRule.every(vr => {
                      var _props$currentRegistr;
                      return isRuleMet(vr, (_props$currentRegistr = props.currentRegistrant.fieldValues) !== null && _props$currentRegistr !== void 0 ? _props$currentRegistr : {}, fields);
                    }));
                    break;
                  case FilterExpressionType.GroupAllFalse:
                    isVisible = !!((_value$visibilityRule2 = value.visibilityRules) !== null && _value$visibilityRule2 !== void 0 && _value$visibilityRule2.every(vr => {
                      var _props$currentRegistr2;
                      return !isRuleMet(vr, (_props$currentRegistr2 = props.currentRegistrant.fieldValues) !== null && _props$currentRegistr2 !== void 0 ? _props$currentRegistr2 : {}, fields);
                    }));
                    break;
                  case FilterExpressionType.GroupAny:
                    isVisible = !!((_value$visibilityRule3 = value.visibilityRules) !== null && _value$visibilityRule3 !== void 0 && _value$visibilityRule3.some(vr => {
                      var _props$currentRegistr3;
                      return isRuleMet(vr, (_props$currentRegistr3 = props.currentRegistrant.fieldValues) !== null && _props$currentRegistr3 !== void 0 ? _props$currentRegistr3 : {}, fields);
                    }));
                    break;
                  case FilterExpressionType.GroupAnyFalse:
                    isVisible = !!((_value$visibilityRule4 = value.visibilityRules) !== null && _value$visibilityRule4 !== void 0 && _value$visibilityRule4.some(vr => {
                      var _props$currentRegistr4;
                      return !isRuleMet(vr, (_props$currentRegistr4 = props.currentRegistrant.fieldValues) !== null && _props$currentRegistr4 !== void 0 ? _props$currentRegistr4 : {}, fields);
                    }));
                    break;
                  default:
                    isVisible = true;
                    break;
                }
                if (isVisible === false) {
                  value.preHtml = "";
                  value.postHtml = "";
                }
              }
            });
            return fields;
          });
          var prePostHtmlItems = computed(() => {
            return currentFormFieldsAugmented.value.filter(f => f.guid).map(f => {
              var _f$preHtml, _f$postHtml;
              return {
                preHtml: (_f$preHtml = f.preHtml) !== null && _f$preHtml !== void 0 ? _f$preHtml : "",
                postHtml: (_f$postHtml = f.postHtml) !== null && _f$postHtml !== void 0 ? _f$postHtml : "",
                slotName: f.guid
              };
            });
          });
          var currentPerson = computed(() => {
            return store.state.currentPerson;
          });
          var pluralFeeTerm = computed(() => {
            return StringFilter.toTitleCase(viewModel.value.pluralFeeTerm || "fees");
          });
          var familyOptions = computed(() => {
            var _currentPerson$value;
            var options = [];
            var usedFamilyGuids = {};
            if (viewModel.value.registrantsSameFamily !== RegistrantsSameFamily.Ask) {
              return options;
            }
            for (var i = 0; i < registrationEntryState.currentRegistrantIndex; i++) {
              var _viewModel$value$regi4;
              var registrant = registrationEntryState.registrants[i];
              var info = getRegistrantBasicInfo(registrant, (_viewModel$value$regi4 = viewModel.value.registrantForms) !== null && _viewModel$value$regi4 !== void 0 ? _viewModel$value$regi4 : []);
              if (registrant.familyGuid && !usedFamilyGuids[registrant.familyGuid] && info !== null && info !== void 0 && info.firstName && info !== null && info !== void 0 && info.lastName) {
                options.push({
                  text: "".concat(info.firstName, " ").concat(info.lastName),
                  value: registrant.familyGuid
                });
                usedFamilyGuids[registrant.familyGuid] = true;
              }
            }
            if (viewModel.value.currentPersonFamilyGuid && (_currentPerson$value = currentPerson.value) !== null && _currentPerson$value !== void 0 && _currentPerson$value.fullName && !usedFamilyGuids[viewModel.value.currentPersonFamilyGuid]) {
              usedFamilyGuids[viewModel.value.currentPersonFamilyGuid] = true;
              options.push({
                text: currentPerson.value.fullName,
                value: viewModel.value.currentPersonFamilyGuid
              });
            }
            var familyGuid = !props.currentRegistrant.familyGuid || usedFamilyGuids[props.currentRegistrant.familyGuid] == true ? newGuid() : props.currentRegistrant.familyGuid;
            options.push({
              text: "None of the above",
              value: familyGuid
            });
            return options;
          });
          var familyMemberOptions = computed(() => {
            var _viewModel$value$fami, _viewModel$value$fami2, _viewModel$value$fami3;
            var usedFamilyMemberGuids = registrationEntryState.registrants.filter(r => r.personGuid && r.personGuid !== props.currentRegistrant.personGuid).map(r => r.personGuid);
            return (_viewModel$value$fami = (_viewModel$value$fami2 = viewModel.value.familyMembers) === null || _viewModel$value$fami2 === void 0 ? void 0 : (_viewModel$value$fami3 = _viewModel$value$fami2.filter(fm => fm.guid && !usedFamilyMemberGuids.includes(fm.guid))) === null || _viewModel$value$fami3 === void 0 ? void 0 : _viewModel$value$fami3.map(fm => ({
              text: fm.fullName,
              value: fm.guid
            }))) !== null && _viewModel$value$fami !== void 0 ? _viewModel$value$fami : [];
          });
          var uppercaseRegistrantTerm = computed(() => {
            var _viewModel$value$regi5;
            return StringFilter.toTitleCase((_viewModel$value$regi5 = viewModel.value.registrantTerm) !== null && _viewModel$value$regi5 !== void 0 ? _viewModel$value$regi5 : "");
          });
          var firstName = computed(() => {
            var _viewModel$value$regi6;
            return getRegistrantBasicInfo(props.currentRegistrant, (_viewModel$value$regi6 = viewModel.value.registrantForms) !== null && _viewModel$value$regi6 !== void 0 ? _viewModel$value$regi6 : []).firstName;
          });
          var familyMember = computed(() => {
            var _viewModel$value$fami4, _viewModel$value$fami5;
            var personGuid = props.currentRegistrant.personGuid;
            if (!personGuid) {
              return null;
            }
            return ((_viewModel$value$fami4 = viewModel.value.familyMembers) === null || _viewModel$value$fami4 === void 0 ? void 0 : (_viewModel$value$fami5 = _viewModel$value$fami4.filter(fm => fm.guid)) === null || _viewModel$value$fami5 === void 0 ? void 0 : _viewModel$value$fami5.find(fm => areEqual(fm.guid, personGuid))) || null;
          });
          var signatureDocumentTerm = computed(() => {
            return StringFilter.toTitleCase(viewModel.value.signatureDocumentTerm || "Release");
          });
          function isRuleMet(rule, fieldValues, formFields) {
            var _comparedToFormField$, _comparedToFormField$2;
            var value = !rule.comparedToRegistrationTemplateFormFieldGuid ? "" : fieldValues[rule.comparedToRegistrationTemplateFormFieldGuid] || "";
            if (typeof value !== "string") {
              return false;
            }
            var comparedToFormField = formFields.find(ff => areEqual(ff.guid, rule.comparedToRegistrationTemplateFormFieldGuid));
            if (!(comparedToFormField !== null && comparedToFormField !== void 0 && (_comparedToFormField$ = comparedToFormField.attribute) !== null && _comparedToFormField$ !== void 0 && _comparedToFormField$.fieldTypeGuid)) {
              return false;
            }
            var fieldType = getFieldType(comparedToFormField.attribute.fieldTypeGuid);
            if (!fieldType) {
              return false;
            }
            if (!rule.comparisonValue) {
              return false;
            }
            return fieldType.doesValueMatchFilter(value, convertComparisonValue(rule.comparisonValue), (_comparedToFormField$2 = comparedToFormField.attribute.configurationValues) !== null && _comparedToFormField$2 !== void 0 ? _comparedToFormField$2 : {});
          }
          function onPrevious() {
            clearFormErrors();
            if (currentFormIndex.value <= 0) {
              emit("previous");
              return;
            }
            registrationEntryState.currentRegistrantFormIndex--;
            scrollToTopAfterNextRender();
          }
          function onNext() {
            return _onNext.apply(this, arguments);
          }
          function _onNext() {
            _onNext = _asyncToGenerator(function* () {
              clearFormErrors();
              var lastFormIndex = formsToShow.value.length - 1;
              if (viewModel.value.isInlineSignatureRequired) {
                isNextDisabled.value = true;
                try {
                  var _toGuidOrNull;
                  var request = {
                    args: getRegistrationEntryBlockArgs(),
                    registrantGuid: (_toGuidOrNull = toGuidOrNull(props.currentRegistrant.guid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
                  };
                  var result = yield invokeBlockAction("GetSignatureDocumentData", request);
                  if (result.isSuccess && result.data) {
                    var data = result.data;
                    if (data.existingSignatureDocumentGuid) {
                      props.currentRegistrant.existingSignatureDocumentGuid = data.existingSignatureDocumentGuid;
                    } else {
                      signatureSource.value = data.documentHtml;
                      signatureToken.value = data.securityToken;
                      lastFormIndex += 1;
                    }
                  } else {
                    console.error(result.data);
                    return;
                  }
                } finally {
                  isNextDisabled.value = false;
                }
              }
              if (currentFormIndex.value >= lastFormIndex) {
                emit("next");
                return;
              }
              registrationEntryState.currentRegistrantFormIndex++;
              scrollToTopAfterNextRender();
            });
            return _onNext.apply(this, arguments);
          }
          function updateFeeItemsRemaining() {
            var _registrationEntrySta4;
            var combinedFeeItemQuantities = {};
            var _iterator3 = _createForOfIteratorHelper(registrationEntryState.registrants),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var registrant = _step3.value;
                for (var feeItemGuid in registrant.feeItemQuantities) {
                  if (registrant.feeItemQuantities[feeItemGuid] > 0) {
                    var feeItemsUsed = registrant.feeItemQuantities[feeItemGuid];
                    if (combinedFeeItemQuantities[feeItemGuid] === undefined || combinedFeeItemQuantities[feeItemGuid] === null) {
                      combinedFeeItemQuantities[feeItemGuid] = feeItemsUsed;
                    } else {
                      combinedFeeItemQuantities[feeItemGuid] += feeItemsUsed;
                    }
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            var fees = (_registrationEntrySta4 = registrationEntryState.viewModel.fees) !== null && _registrationEntrySta4 !== void 0 ? _registrationEntrySta4 : [];
            var _iterator4 = _createForOfIteratorHelper(fees),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _fee$items2;
                var _fee = _step4.value;
                if (_fee !== null && _fee !== void 0 && (_fee$items2 = _fee.items) !== null && _fee$items2 !== void 0 && _fee$items2.length) {
                  var _iterator5 = _createForOfIteratorHelper(_fee.items),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _combinedFeeItemQuant;
                      var _feeItem = _step5.value;
                      if (!_feeItem.guid || _feeItem.countRemaining === null || _feeItem.countRemaining === undefined || _feeItem.originalCountRemaining === undefined || _feeItem.originalCountRemaining === null) {
                        continue;
                      }
                      var usedFeeItemCount = (_combinedFeeItemQuant = combinedFeeItemQuantities[_feeItem.guid]) !== null && _combinedFeeItemQuant !== void 0 ? _combinedFeeItemQuant : 0;
                      if (usedFeeItemCount !== undefined && usedFeeItemCount !== null) {
                        _feeItem.countRemaining = _feeItem.originalCountRemaining - usedFeeItemCount;
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          function clearFormErrors() {
            formResetKey.value = newGuid();
          }
          function onSigned() {
            return _onSigned.apply(this, arguments);
          }
          function _onSigned() {
            _onSigned = _asyncToGenerator(function* () {
              var _toGuidOrNull2;
              var request = {
                args: getRegistrationEntryBlockArgs(),
                registrantGuid: (_toGuidOrNull2 = toGuidOrNull(props.currentRegistrant.guid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                documentHtml: signatureSource.value,
                securityToken: signatureToken.value,
                signature: signatureData.value
              };
              var result = yield invokeBlockAction("SignDocument", request);
              if (result.isSuccess && result.data) {
                props.currentRegistrant.signatureData = result.data;
                emit("next");
              } else {
                console.error(result.data);
              }
            });
            return _onSigned.apply(this, arguments);
          }
          function copyValuesFromFamilyMember() {
            var _viewModel$value$regi7;
            if (!familyMember.value || registrationEntryState.navBack || registrationEntryState.viewModel.isExistingRegistration) {
              return;
            }
            if (!props.currentRegistrant.fieldValues) {
              props.currentRegistrant.fieldValues = {};
            }
            var _iterator6 = _createForOfIteratorHelper((_viewModel$value$regi7 = viewModel.value.registrantForms) !== null && _viewModel$value$regi7 !== void 0 ? _viewModel$value$regi7 : []),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _form$fields2;
                var form = _step6.value;
                var _iterator7 = _createForOfIteratorHelper((_form$fields2 = form.fields) !== null && _form$fields2 !== void 0 ? _form$fields2 : []),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var field = _step7.value;
                    if (!field.guid) {
                      continue;
                    }
                    if (field.fieldSource === RegistrationFieldSource.RegistrantAttribute) {
                      continue;
                    }
                    if (!familyMember.value.fieldValues) {
                      continue;
                    }
                    if (field.guid in familyMember.value.fieldValues) {
                      var familyMemberValue = familyMember.value.fieldValues[field.guid];
                      if (!familyMemberValue) {
                        delete props.currentRegistrant.fieldValues[field.guid];
                      } else if (typeof familyMemberValue === "object") {
                        props.currentRegistrant.fieldValues[field.guid] = _objectSpread2({}, familyMemberValue);
                      } else {
                        props.currentRegistrant.fieldValues[field.guid] = familyMemberValue;
                      }
                    } else {
                      delete props.currentRegistrant.fieldValues[field.guid];
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          function getFieldValues() {
            return _getFieldValues.apply(this, arguments);
          }
          function _getFieldValues() {
            _getFieldValues = _asyncToGenerator(function* () {
              var _toGuidOrNull3;
              var request = {
                args: getRegistrationEntryBlockArgs(),
                forms: viewModel.value.registrantForms,
                registrantGuid: (_toGuidOrNull3 = toGuidOrNull(props.currentRegistrant.guid)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid
              };
              var result = yield invokeBlockAction("GetDefaultAttributeFieldValues", request);
              if (result.isSuccess && result.data && viewModel.value.registrantForms) {
                if (!props.currentRegistrant.fieldValues) {
                  props.currentRegistrant.fieldValues = {};
                }
                var _iterator10 = _createForOfIteratorHelper(viewModel.value.registrantForms),
                  _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var form = _step10.value;
                    if (form.fields) {
                      var _iterator11 = _createForOfIteratorHelper(form.fields),
                        _step11;
                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var field = _step11.value;
                          if (field.guid && field.guid in result.data) {
                            var formFieldValue = result.data[field.guid];
                            var currentFormFieldValue = props.currentRegistrant.fieldValues[field.guid];
                            if (currentFormFieldValue === undefined || currentFormFieldValue === null || currentFormFieldValue === "") {
                              if (typeof formFieldValue === "object" && typeof currentFormFieldValue === "object") {
                                props.currentRegistrant.fieldValues[field.guid] = _objectSpread2({}, formFieldValue);
                              } else {
                                props.currentRegistrant.fieldValues[field.guid] = formFieldValue;
                              }
                            }
                          }
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
            });
            return _getFieldValues.apply(this, arguments);
          }
          function onUpdateRegistrantFee(values) {
            var newValue = _objectSpread2({}, props.currentRegistrant.feeItemQuantities);
            for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              newValue[key] = values[key];
            }
            props.currentRegistrant.feeItemQuantities = newValue;
            updateFeeItemsRemaining();
          }
          function onSetFamilyGuid(familyGuid) {
            if (familyGuid !== props.currentRegistrant.familyGuid) {
              props.currentRegistrant.familyGuid = familyGuid;
              props.currentRegistrant.personGuid = null;
            }
          }
          function onSetPersonGuid(guid) {
            if (Array.isArray(guid)) {
              guid = guid[0];
            }
            if (!areEqual(guid, props.currentRegistrant.personGuid)) {
              props.currentRegistrant.personGuid = guid;
              if (familyMember.value) {
                props.currentRegistrant.familyGuid = familyMember.value.familyGuid;
              }
            }
          }
          watch(familyMember, () => {
            if (!familyMember.value) {
              if (viewModel.value.registrantForms && props.currentRegistrant.fieldValues) {
                var _iterator8 = _createForOfIteratorHelper(viewModel.value.registrantForms),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var form = _step8.value;
                    if (form.fields) {
                      var _iterator9 = _createForOfIteratorHelper(form.fields),
                        _step9;
                      try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                          var field = _step9.value;
                          if (field.fieldSource === RegistrationFieldSource.RegistrantAttribute) {
                            continue;
                          }
                          delete props.currentRegistrant.fieldValues[field.guid];
                        }
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            } else {
              copyValuesFromFamilyMember();
            }
          });
          onUpdated(() => {
            updateFeeItemsRemaining();
          });
          getFieldValues();
          copyValuesFromFamilyMember();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$a, [createVNode(unref(RockForm), {
              onSubmit: onNext,
              formResetKey: formResetKey.value
            }, {
              default: withCtx(() => {
                var _props$currentRegist, _props$currentRegist2, _unref$fees;
                return [unref(isDataForm) ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [unref(currentFormIndex) === 0 ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [unref(familyOptions).length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$9, [createVNode(unref(RadioButtonList), {
                  label: (unref(firstName) || unref(uppercaseRegistrantTerm)) + ' is in the same immediate family as',
                  rules: "required",
                  modelValue: (_props$currentRegist = __props.currentRegistrant.familyGuid) !== null && _props$currentRegist !== void 0 ? _props$currentRegist : undefined,
                  "onUpdate:modelValue": onSetFamilyGuid,
                  items: unref(familyOptions),
                  validationTitle: "Family"
                }, null, 8, ["label", "modelValue", "items"])])) : createCommentVNode("v-if", true), unref(familyMemberOptions).length ? (openBlock(), createElementBlock("div", _hoisted_3$8, [createElementVNode("div", _hoisted_4$8, [createVNode(unref(DropDownList), {
                  modelValue: (_props$currentRegist2 = __props.currentRegistrant.personGuid) !== null && _props$currentRegist2 !== void 0 ? _props$currentRegist2 : '',
                  "onUpdate:modelValue": onSetPersonGuid,
                  items: unref(familyMemberOptions),
                  label: "Family Member to Register"
                }, null, 8, ["modelValue", "items"])])])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), createVNode(unref(ItemsWithPreAndPostHtml), {
                  items: unref(prePostHtmlItems)
                }, createSlots({
                  _: 2
                }, [renderList(unref(currentFormFields), field => {
                  return {
                    name: field.guid,
                    fn: withCtx(() => [field.fieldSource === unref(fieldSources).personField && __props.currentRegistrant.fieldValues ? (openBlock(), createBlock(unref(script$b), {
                      key: 0,
                      field: field,
                      fieldValues: __props.currentRegistrant.fieldValues,
                      isKnownFamilyMember: !!__props.currentRegistrant.personGuid
                    }, null, 8, ["field", "fieldValues", "isKnownFamilyMember"])) : (field.fieldSource === unref(fieldSources).registrantAttribute || field.fieldSource === unref(fieldSources).personAttribute || field.fieldSource === unref(fieldSources).groupMemberAttribute) && __props.currentRegistrant.fieldValues ? (openBlock(), createBlock(unref(script$c), {
                      key: 1,
                      field: field,
                      fieldValues: __props.currentRegistrant.fieldValues,
                      formFields: unref(currentFormFields)
                    }, null, 8, ["field", "fieldValues", "formFields"])) : (openBlock(), createBlock(unref(NotificationBox), {
                      key: 2,
                      alertType: "danger"
                    }, {
                      default: withCtx(() => [createTextVNode("Could not resolve field source " + toDisplayString(field.fieldSource), 1)]),
                      _: 2
                    }, 1024))])
                  };
                })]), 1032, ["items"]), !__props.isWaitList && unref(isLastForm) && (_unref$fees = unref(viewModel).fees) !== null && _unref$fees !== void 0 && _unref$fees.length && unref(viewModel).fees.some(f => {
                  var _f$items;
                  return !!((_f$items = f.items) !== null && _f$items !== void 0 && _f$items.length);
                }) ? (openBlock(), createElementBlock("div", _hoisted_5$8, [createElementVNode("h4", null, toDisplayString(unref(pluralFeeTerm)), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(viewModel).fees, fee => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: fee.guid
                  }, [__props.currentRegistrant.feeItemQuantities ? (openBlock(), createBlock(unref(script$d), {
                    key: 0,
                    modelValue: __props.currentRegistrant.feeItemQuantities,
                    fee: fee,
                    "onUpdate:modelValue": onUpdateRegistrantFee
                  }, null, 8, ["modelValue", "fee"])) : createCommentVNode("v-if", true)], 64);
                }), 128))])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true), unref(isSignatureForm) ? (openBlock(), createElementBlock("div", _hoisted_6$8, [createElementVNode("h2", _hoisted_7$4, "Please Sign the " + toDisplayString(unref(signatureDocumentTerm)) + " for " + toDisplayString(unref(firstName)), 1), createElementVNode("div", _hoisted_8$4, [createElementVNode("iframe", {
                  src: "javascript: window.frameElement.getAttribute('srcdoc');",
                  onload: "this.style.height = this.contentWindow.document.body.scrollHeight + 'px'",
                  class: "signaturedocument-iframe",
                  border: "0",
                  frameborder: "0",
                  srcdoc: signatureSource.value
                }, null, 8, _hoisted_9$4)]), createElementVNode("div", _hoisted_10$4, [createVNode(unref(ElectronicSignature), {
                  modelValue: signatureData.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => signatureData.value = $event),
                  isDrawn: unref(isSignatureDrawn),
                  onSigned: onSigned,
                  documentTerm: unref(signatureDocumentTerm)
                }, null, 8, ["modelValue", "isDrawn", "documentTerm"])])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_11$3, [createElementVNode("div", _hoisted_12$3, [unref(showPrevious) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnType: "default",
                  onClick: onPrevious
                }, {
                  default: withCtx(() => [_hoisted_13$2]),
                  _: 1
                })) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_14$1, [unref(isNextVisible) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnType: "primary",
                  type: "submit",
                  disabled: isNextDisabled.value
                }, {
                  default: withCtx(() => [_hoisted_15$1]),
                  _: 1
                }, 8, ["disabled"])) : createCommentVNode("v-if", true)])])];
              }),
              _: 1
            }, 8, ["formResetKey"])]);
          };
        }
      });

      script$a.__file = "src/Event/RegistrationEntry/registrant.partial.obs";

      var _hoisted_1$9 = {
        class: "registrationentry-registrant"
      };
      var script$9 = defineComponent({
        name: 'registrants.partial',
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var persistSession = use(PersistSession);
          var hasCopiedCommonValues = ref(false);
          function onPrevious() {
            return _onPrevious.apply(this, arguments);
          }
          function _onPrevious() {
            _onPrevious = _asyncToGenerator(function* () {
              var _registrationEntrySta, _registrationEntrySta2;
              if (registrationEntryState.currentRegistrantIndex <= 0) {
                emit("previous");
                return;
              }
              var lastFormIndex = ((_registrationEntrySta = (_registrationEntrySta2 = registrationEntryState.viewModel.registrantForms) === null || _registrationEntrySta2 === void 0 ? void 0 : _registrationEntrySta2.length) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : 0) - 1;
              registrationEntryState.currentRegistrantIndex--;
              registrationEntryState.currentRegistrantFormIndex = lastFormIndex;
              yield persistSession();
              scrollToTopAfterNextRender();
            });
            return _onPrevious.apply(this, arguments);
          }
          function onNext() {
            return _onNext.apply(this, arguments);
          }
          function _onNext() {
            _onNext = _asyncToGenerator(function* () {
              var lastIndex = registrationEntryState.registrants.length - 1;
              if (registrationEntryState.currentRegistrantIndex >= lastIndex) {
                emit("next");
                return;
              }
              if (registrationEntryState.currentRegistrantIndex === 0) {
                copyCommonValuesFromFirstRegistrant();
              }
              registrationEntryState.currentRegistrantIndex++;
              registrationEntryState.currentRegistrantFormIndex = 0;
              yield persistSession();
              scrollToTopAfterNextRender();
            });
            return _onNext.apply(this, arguments);
          }
          function copyCommonValuesFromFirstRegistrant() {
            if (hasCopiedCommonValues.value) {
              return;
            }
            hasCopiedCommonValues.value = true;
            var firstRegistrant = registrants.value[0];
            if (!firstRegistrant.fieldValues) {
              firstRegistrant.fieldValues = {};
            }
            if (!registrationEntryState.viewModel.registrantForms) {
              registrationEntryState.viewModel.registrantForms = [];
            }
            for (var i = 1; i < registrants.value.length; i++) {
              var currentRegistrant = registrants.value[i];
              if (!currentRegistrant.fieldValues) {
                currentRegistrant.fieldValues = {};
              }
              var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.registrantForms),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var form = _step.value;
                  if (!form.fields) {
                    form.fields = [];
                  }
                  var _iterator2 = _createForOfIteratorHelper(form.fields),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var field = _step2.value;
                      if (!field.isSharedValue) {
                        continue;
                      }
                      var valueToShare = firstRegistrant.fieldValues[field.guid];
                      if (valueToShare && typeof valueToShare === "object") {
                        currentRegistrant.fieldValues[field.guid] = _objectSpread2({}, valueToShare);
                      } else {
                        currentRegistrant.fieldValues[field.guid] = valueToShare;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
          var hasWaitlist = computed(() => {
            return registrationEntryState.registrants.some(r => r.isOnWaitList);
          });
          var isOnWaitlist = computed(() => {
            var currentRegistrant = registrationEntryState.registrants[registrationEntryState.currentRegistrantIndex];
            return currentRegistrant.isOnWaitList;
          });
          var registrantTerm = computed(() => {
            return (registrationEntryState.viewModel.registrantTerm || "registrant").toLowerCase();
          });
          var registrants = computed(() => {
            return registrationEntryState.registrants;
          });
          var currentRegistrantIndex = computed(() => {
            return registrationEntryState.currentRegistrantIndex;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$9, [unref(hasWaitlist) && !unref(isOnWaitlist) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(" This " + toDisplayString(unref(registrantTerm)) + " will be fully registered. ", 1)]),
              _: 1
            })) : unref(isOnWaitlist) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(" This " + toDisplayString(unref(registrantTerm)) + " will be on the waiting list. ", 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(registrants), (r, i) => {
              return withDirectives((openBlock(), createBlock(unref(script$a), {
                key: r.guid,
                currentRegistrant: r,
                isWaitList: unref(isOnWaitlist),
                onNext: onNext,
                onPrevious: onPrevious
              }, null, 8, ["currentRegistrant", "isWaitList"])), [[vShow, unref(currentRegistrantIndex) === i]]);
            }), 128))]);
          };
        }
      });

      script$9.__file = "src/Event/RegistrationEntry/registrants.partial.obs";

      var _hoisted_1$8 = {
        class: "registrationentry-registration-attributes"
      };
      var _hoisted_2$8 = {
        class: "actions row"
      };
      var _hoisted_3$7 = {
        class: "col-xs-6"
      };
      var _hoisted_4$7 = createTextVNode(" Previous ");
      var _hoisted_5$7 = {
        class: "col-xs-6 text-right"
      };
      var _hoisted_6$7 = createTextVNode(" Next ");
      var script$8 = defineComponent({
        name: 'registrationEnd.partial',
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var attributeValues = ref({});
          if (registrationEntryState.viewModel.registrationAttributesEnd) {
            var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a$key, _a$attributeGuid;
                var a = _step.value;
                attributeValues.value[(_a$key = a.key) !== null && _a$key !== void 0 ? _a$key : ""] = registrationEntryState.registrationFieldValues[(_a$attributeGuid = a.attributeGuid) !== null && _a$attributeGuid !== void 0 ? _a$attributeGuid : ""] || "";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          var showPrevious = computed(() => {
            return registrationEntryState.firstStep === registrationEntryState.steps.intro;
          });
          var attributes = computed(() => {
            var attrs = {};
            if (registrationEntryState.viewModel.registrationAttributesEnd) {
              var _iterator2 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _a$key2;
                  var _a = _step2.value;
                  attrs[(_a$key2 = _a.key) !== null && _a$key2 !== void 0 ? _a$key2 : ""] = _a;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            return attrs;
          });
          function onPrevious() {
            emit("previous");
          }
          function onNext() {
            emit("next");
          }
          watch(attributeValues, () => {
            if (registrationEntryState.viewModel.registrationAttributesEnd) {
              var _iterator3 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _a2$attributeGuid, _a2$key;
                  var _a2 = _step3.value;
                  registrationEntryState.registrationFieldValues[(_a2$attributeGuid = _a2.attributeGuid) !== null && _a2$attributeGuid !== void 0 ? _a2$attributeGuid : ""] = attributeValues.value[(_a2$key = _a2.key) !== null && _a2$key !== void 0 ? _a2$key : ""];
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$8, [createVNode(unref(RockForm), {
              onSubmit: onNext
            }, {
              default: withCtx(() => [createVNode(unref(AttributeValuesContainer), {
                modelValue: attributeValues.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => attributeValues.value = $event),
                attributes: unref(attributes),
                isEditMode: "",
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"]), createElementVNode("div", _hoisted_2$8, [createElementVNode("div", _hoisted_3$7, [unref(showPrevious) ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: "default",
                onClick: onPrevious
              }, {
                default: withCtx(() => [_hoisted_4$7]),
                _: 1
              })) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_5$7, [createVNode(unref(RockButton), {
                btnType: "primary",
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_6$7]),
                _: 1
              })])])]),
              _: 1
            })]);
          };
        }
      });

      script$8.__file = "src/Event/RegistrationEntry/registrationEnd.partial.obs";

      var _hoisted_1$7 = {
        class: "registrationentry-registration-attributes"
      };
      var _hoisted_2$7 = {
        class: "actions row"
      };
      var _hoisted_3$6 = {
        class: "col-xs-6"
      };
      var _hoisted_4$6 = createTextVNode(" Previous ");
      var _hoisted_5$6 = {
        class: "col-xs-6 text-right"
      };
      var _hoisted_6$6 = createTextVNode(" Next ");
      var script$7 = defineComponent({
        name: 'registrationStart.partial',
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var attributeValues = ref({});
          if (registrationEntryState.viewModel.registrationAttributesStart) {
            var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a$key, _a$attributeGuid;
                var a = _step.value;
                attributeValues.value[(_a$key = a.key) !== null && _a$key !== void 0 ? _a$key : ""] = registrationEntryState.registrationFieldValues[(_a$attributeGuid = a.attributeGuid) !== null && _a$attributeGuid !== void 0 ? _a$attributeGuid : ""] || "";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          var showPrevious = computed(() => {
            return registrationEntryState.firstStep === registrationEntryState.steps.intro && !registrationEntryState.viewModel.isExistingRegistration;
          });
          var attributes = computed(() => {
            var attrs = {};
            if (registrationEntryState.viewModel.registrationAttributesStart) {
              var _iterator2 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _a$key2;
                  var _a = _step2.value;
                  attrs[(_a$key2 = _a.key) !== null && _a$key2 !== void 0 ? _a$key2 : ""] = _a;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            return attrs;
          });
          function onPrevious() {
            emit("previous");
          }
          function onNext() {
            emit("next");
          }
          watch(attributeValues, () => {
            if (registrationEntryState.viewModel.registrationAttributesStart) {
              var _iterator3 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _a2$attributeGuid, _a2$key;
                  var _a2 = _step3.value;
                  registrationEntryState.registrationFieldValues[(_a2$attributeGuid = _a2.attributeGuid) !== null && _a2$attributeGuid !== void 0 ? _a2$attributeGuid : ""] = attributeValues.value[(_a2$key = _a2.key) !== null && _a2$key !== void 0 ? _a2$key : ""];
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$7, [createVNode(unref(RockForm), {
              onSubmit: onNext
            }, {
              default: withCtx(() => [createVNode(unref(AttributeValuesContainer), {
                modelValue: attributeValues.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => attributeValues.value = $event),
                attributes: unref(attributes),
                isEditMode: "",
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"]), createElementVNode("div", _hoisted_2$7, [createElementVNode("div", _hoisted_3$6, [unref(showPrevious) ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: "default",
                onClick: onPrevious
              }, {
                default: withCtx(() => [_hoisted_4$6]),
                _: 1
              })) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_5$6, [createVNode(unref(RockButton), {
                btnType: "primary",
                type: "submit"
              }, {
                default: withCtx(() => [_hoisted_6$6]),
                _: 1
              })])])]),
              _: 1
            })]);
          };
        }
      });

      script$7.__file = "src/Event/RegistrationEntry/registrationStart.partial.obs";

      var _hoisted_1$6 = {
        key: 0
      };
      var _hoisted_2$6 = {
        key: 1
      };
      var _hoisted_3$5 = createTextVNode(" Due to high demand there is no longer space available. You can continue, but your registrants will be placed on the waitlist. Do you wish to continue with the registration? ");
      var _hoisted_4$5 = createTextVNode(" Due to high demand there is no longer space available for this registration. ");
      var _hoisted_5$5 = createTextVNode(" Your registration has timed out. Do you wish to request an extension in time? ");
      var _hoisted_6$5 = createTextVNode("Close");
      var _hoisted_7$3 = createTextVNode("Yes");
      var _hoisted_8$3 = createTextVNode("No, cancel registration");
      var _hoisted_9$3 = createTextVNode("Yes");
      var _hoisted_10$3 = createTextVNode("No, cancel registration");
      var script$6 = defineComponent({
        name: 'sessionRenewal.partial',
        props: {
          isSessionExpired: {
            type: Boolean,
            required: true
          }
        },
        emits: ["success"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var invokeBlockAction = useInvokeBlockAction();
          var spotsSecured = ref(null);
          var isLoading = ref(false);
          var isModalVisible = ref(false);
          var hasWaitlist = computed(() => {
            return registrationEntryState.viewModel.waitListEnabled;
          });
          var allRegistrantCount = computed(() => {
            return registrationEntryState.registrants.length;
          });
          var waitlistRegistrantCount = computed(() => {
            return registrationEntryState.registrants.filter(r => r.isOnWaitList).length;
          });
          var waitlistRegistrantCountWord = computed(() => {
            return toWord(waitlistRegistrantCount.value);
          });
          var nonWaitlistRegistrantCount = computed(() => {
            return registrationEntryState.registrants.filter(r => !r.isOnWaitList).length;
          });
          var nonWaitlistRegistrantCountWord = computed(() => {
            return toWord(nonWaitlistRegistrantCount.value);
          });
          function restart() {
            isLoading.value = true;
            location.reload();
          }
          function close() {
            isModalVisible.value = false;
            nextTick(() => {
              spotsSecured.value = null;
              isLoading.value = false;
            });
          }
          function requestRenewal() {
            return _requestRenewal.apply(this, arguments);
          }
          function _requestRenewal() {
            _requestRenewal = _asyncToGenerator(function* () {
              spotsSecured.value = 0;
              isLoading.value = true;
              try {
                var _toGuidOrNull;
                var request = {
                  registrationSessionGuid: (_toGuidOrNull = toGuidOrNull(registrationEntryState.registrationSessionGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
                };
                var response = yield invokeBlockAction("TryToRenewSession", request);
                if (response.isSuccess && response.data) {
                  var _response$data$expira, _asDate$toMillisecond;
                  var asDate = RockDateTime.parseISO((_response$data$expira = response.data.expirationDateTime) !== null && _response$data$expira !== void 0 ? _response$data$expira : "");
                  registrationEntryState.sessionExpirationDateMs = (_asDate$toMillisecond = asDate === null || asDate === void 0 ? void 0 : asDate.toMilliseconds()) !== null && _asDate$toMillisecond !== void 0 ? _asDate$toMillisecond : null;
                  spotsSecured.value = response.data.spotsSecured;
                } else {
                  registrationEntryState.sessionExpirationDateMs = null;
                  spotsSecured.value = 0;
                }
                var deficiency = nonWaitlistRegistrantCount.value - spotsSecured.value;
                if (!deficiency) {
                  emit("success");
                  close();
                  return;
                }
                registrationEntryState.viewModel.spotsRemaining = spotsSecured.value;
                if (!hasWaitlist) {
                  registrationEntryState.registrants.length = spotsSecured.value;
                  return;
                }
                for (var i = allRegistrantCount.value - 1; i >= 0; i--) {
                  if (!deficiency) {
                    break;
                  }
                  var registrant = registrationEntryState.registrants[i];
                  if (registrant.isOnWaitList) {
                    continue;
                  }
                  registrant.isOnWaitList = true;
                  deficiency--;
                }
              } finally {
                isLoading.value = false;
              }
            });
            return _requestRenewal.apply(this, arguments);
          }
          watch(() => props.isSessionExpired, () => {
            if (props.isSessionExpired) {
              spotsSecured.value = null;
              isModalVisible.value = true;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Dialog), {
              modelValue: isModalVisible.value,
              dismissible: false
            }, createSlots({
              header: withCtx(() => [isLoading.value || spotsSecured.value === null ? (openBlock(), createElementBlock("h4", _hoisted_1$6, "Registration Timed Out")) : (openBlock(), createElementBlock("h4", _hoisted_2$6, "Request Extension"))]),
              default: withCtx(() => [isLoading.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
                key: 0
              })) : unref(hasWaitlist) && spotsSecured.value === 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [_hoisted_3$5], 64)) : spotsSecured.value === 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 2
              }, [_hoisted_4$5], 64)) : unref(hasWaitlist) && spotsSecured.value !== null ? (openBlock(), createElementBlock(Fragment, {
                key: 3
              }, [createTextVNode(" Due to high demand there is no longer space available for all your registrants. Your last " + toDisplayString(unref(waitlistRegistrantCountWord)) + " " + toDisplayString(unref(pluralConditional)(unref(waitlistRegistrantCount), 'registrant', ' registrants')) + " will be placed on the waitlist. Do you wish to continue with the registration? ", 1)], 64)) : spotsSecured.value !== null ? (openBlock(), createElementBlock(Fragment, {
                key: 4
              }, [createTextVNode(" Due to high demand there is no longer space available for all your registrants. Only " + toDisplayString(unref(nonWaitlistRegistrantCountWord)) + " " + toDisplayString(unref(pluralConditional)(unref(nonWaitlistRegistrantCount), 'spot is', 'spots are')) + " available. Your registration has been updated to only allow " + toDisplayString(unref(nonWaitlistRegistrantCountWord)) + " " + toDisplayString(unref(pluralConditional)(unref(nonWaitlistRegistrantCount), 'registrant', 'registrants')) + ". Do you wish to continue with the registration? ", 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 5
              }, [_hoisted_5$5], 64))]),
              _: 2
            }, [!isLoading.value ? {
              name: "footer",
              fn: withCtx(() => [!unref(hasWaitlist) && spotsSecured.value === 0 ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnType: "link",
                onClick: restart
              }, {
                default: withCtx(() => [_hoisted_6$5]),
                _: 1
              })) : spotsSecured.value !== null ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createVNode(unref(RockButton), {
                btnType: "primary",
                onClick: close
              }, {
                default: withCtx(() => [_hoisted_7$3]),
                _: 1
              }), createVNode(unref(RockButton), {
                btnType: "link",
                onClick: restart
              }, {
                default: withCtx(() => [_hoisted_8$3]),
                _: 1
              })], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 2
              }, [createVNode(unref(RockButton), {
                btnType: "primary",
                onClick: requestRenewal
              }, {
                default: withCtx(() => [_hoisted_9$3]),
                _: 1
              }), createVNode(unref(RockButton), {
                btnType: "link",
                onClick: restart
              }, {
                default: withCtx(() => [_hoisted_10$3]),
                _: 1
              })], 64))])
            } : undefined]), 1032, ["modelValue"]);
          };
        }
      });

      script$6.__file = "src/Event/RegistrationEntry/sessionRenewal.partial.obs";

      var _hoisted_1$5 = ["innerHTML"];
      var _hoisted_2$5 = createElementVNode("h3", null, "Make Payments Even Easier", -1);
      var script$5 = defineComponent({
        name: 'success.partial',
        setup(__props) {
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var registrationTerm = computed(() => {
            var _registrationEntrySta, _registrationEntrySta2;
            return (_registrationEntrySta = (_registrationEntrySta2 = registrationEntryState.viewModel.registrationTerm) === null || _registrationEntrySta2 === void 0 ? void 0 : _registrationEntrySta2.toLowerCase()) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : "";
          });
          var messageHtml = computed(() => {
            var _registrationEntrySta3;
            return ((_registrationEntrySta3 = registrationEntryState.successViewModel) === null || _registrationEntrySta3 === void 0 ? void 0 : _registrationEntrySta3.messageHtml) || "You have successfully completed this ".concat(registrationTerm.value);
          });
          var gatewayGuid = computed(() => {
            return toGuidOrNull(registrationEntryState.viewModel.gatewayGuid);
          });
          var transactionCode = computed(() => {
            var _registrationEntrySta4;
            return registrationEntryState.viewModel.isRedirectGateway ? "" : ((_registrationEntrySta4 = registrationEntryState.successViewModel) === null || _registrationEntrySta4 === void 0 ? void 0 : _registrationEntrySta4.transactionCode) || "";
          });
          var gatewayPersonIdentifier = computed(() => {
            var _registrationEntrySta5;
            return ((_registrationEntrySta5 = registrationEntryState.successViewModel) === null || _registrationEntrySta5 === void 0 ? void 0 : _registrationEntrySta5.gatewayPersonIdentifier) || "";
          });
          var enableSaveAccount = computed(() => {
            return registrationEntryState.viewModel.enableSaveAccount && registrationEntryState.savedAccountGuid === null;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [createElementVNode("div", {
              innerHTML: unref(messageHtml)
            }, null, 8, _hoisted_1$5), unref(gatewayGuid) && unref(transactionCode) && unref(gatewayPersonIdentifier) && unref(enableSaveAccount) ? (openBlock(), createBlock(unref(SaveFinancialAccountForm), {
              key: 0,
              gatewayGuid: unref(gatewayGuid),
              transactionCode: unref(transactionCode),
              gatewayPersonIdentifier: unref(gatewayPersonIdentifier),
              class: "well"
            }, {
              header: withCtx(() => [_hoisted_2$5]),
              _: 1
            }, 8, ["gatewayGuid", "transactionCode", "gatewayPersonIdentifier"])) : createCommentVNode("v-if", true)]);
          };
        }
      });

      script$5.__file = "src/Event/RegistrationEntry/success.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-369aff92"), n = n(), popScopeId(), n);
      var _hoisted_1$4 = {
        class: "fee-table"
      };
      var _hoisted_2$4 = {
        class: "row hidden-xs fee-header"
      };
      var _hoisted_3$4 = _withScopeId(() => createElementVNode("strong", null, "Description", -1));
      var _hoisted_4$4 = [_hoisted_3$4];
      var _hoisted_5$4 = _withScopeId(() => createElementVNode("div", {
        class: "col-sm-3 fee-value"
      }, [createElementVNode("strong", null, "Amount")], -1));
      var _hoisted_6$4 = {
        key: 0,
        class: "col-sm-3 fee-value"
      };
      var _hoisted_7$2 = _withScopeId(() => createElementVNode("strong", null, "Discounted Amount", -1));
      var _hoisted_8$2 = [_hoisted_7$2];
      var _hoisted_9$2 = {
        class: "col-sm-3 fee-value"
      };
      var _hoisted_10$2 = _withScopeId(() => createElementVNode("span", {
        class: "visible-xs-inline"
      }, "Amount:", -1));
      var _hoisted_11$2 = {
        key: 0,
        class: "col-sm-3 fee-value"
      };
      var _hoisted_12$2 = _withScopeId(() => createElementVNode("span", {
        class: "visible-xs-inline"
      }, "Discounted Amount:", -1));
      var _hoisted_13$1 = {
        class: "row fee-row-total"
      };
      var _hoisted_14 = {
        class: "col-sm-3 fee-value"
      };
      var _hoisted_15 = _withScopeId(() => createElementVNode("span", {
        class: "visible-xs-inline"
      }, "Amount:", -1));
      var _hoisted_16 = {
        key: 0,
        class: "col-sm-3 fee-value"
      };
      var _hoisted_17 = _withScopeId(() => createElementVNode("span", {
        class: "visible-xs-inline"
      }, "Discounted Amount:", -1));
      var _hoisted_18 = {
        class: "row fee-totals"
      };
      var _hoisted_19 = {
        class: "col-sm-offset-8 col-sm-4 fee-totals-options"
      };
      var _hoisted_20 = {
        class: "form-group static-control"
      };
      var _hoisted_21 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Total Cost", -1));
      var _hoisted_22 = {
        class: "control-wrapper"
      };
      var _hoisted_23 = {
        class: "form-control-static"
      };
      var _hoisted_24 = {
        key: 0,
        class: "form-group static-control"
      };
      var _hoisted_25 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Previously Paid", -1));
      var _hoisted_26 = {
        class: "control-wrapper"
      };
      var _hoisted_27 = {
        class: "form-control-static"
      };
      var _hoisted_28 = {
        class: "form-group static-control"
      };
      var _hoisted_29 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Minimum Due Today", -1));
      var _hoisted_30 = {
        class: "control-wrapper"
      };
      var _hoisted_31 = {
        class: "form-control-static"
      };
      var _hoisted_32 = {
        class: "form-group static-control"
      };
      var _hoisted_33 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Amount Remaining After Payment", -1));
      var _hoisted_34 = {
        class: "control-wrapper"
      };
      var _hoisted_35 = {
        class: "form-control-static"
      };
      var _hoisted_36 = {
        key: 2,
        class: "form-group static-control"
      };
      var _hoisted_37 = _withScopeId(() => createElementVNode("label", {
        class: "control-label"
      }, "Amount Due", -1));
      var _hoisted_38 = {
        class: "control-wrapper"
      };
      var _hoisted_39 = {
        class: "form-control-static"
      };
      var RegistrationCostSummaryType = function (RegistrationCostSummaryType) {
        RegistrationCostSummaryType[RegistrationCostSummaryType["Cost"] = 0] = "Cost";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Fee"] = 1] = "Fee";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Discount"] = 2] = "Discount";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Total"] = 3] = "Total";
        return RegistrationCostSummaryType;
      }(RegistrationCostSummaryType || {});
      var script$4 = defineComponent({
        name: 'costSummary.partial',
        setup(__props) {
          var getRegistrationEntryBlockArgs = use(GetPersistSessionArgs);
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var _use = use(RegistrationCostSummary),
            updateRegistrationCostSummary = _use.updateRegistrationCostSummary;
          var isLoading = ref(false);
          var lineItems = ref([]);
          var augmentedLineItems = computed(() => {
            return lineItems.value.map(li => _objectSpread2(_objectSpread2({}, li), {}, {
              isFee: li.type === RegistrationCostSummaryType.Fee,
              discountHelp: hasDiscount.value && li.cost === li.discountedCost ? "This item is not eligible for the discount." : "",
              amountFormatted: formatCurrency(li.cost, {
                symbol: ""
              }),
              discountedAmountFormatted: formatCurrency(li.discountedCost, {
                symbol: ""
              })
            }));
          });
          var hasDiscount = computed(() => {
            return lineItems.value.some(li => li.discountedCost !== li.cost);
          });
          var total = computed(() => {
            var total = 0;
            lineItems.value.forEach(li => total += li.cost);
            return total;
          });
          var totalFormatted = computed(() => {
            return formatCurrency(total.value);
          });
          var defaultPaymentAmount = computed(() => {
            var total = 0;
            var hasDefault = false;
            lineItems.value.forEach(li => {
              if (li.defaultPaymentAmount) {
                hasDefault = true;
                total += li.defaultPaymentAmount;
              }
            });
            total = hasDefault ? total : maxAmountCanBePaid.value;
            if (total > maxAmountCanBePaid.value) {
              total = maxAmountCanBePaid.value;
            }
            if (total < amountDueToday.value) {
              total = amountDueToday.value;
            }
            if (total < 0) {
              total = 0;
            }
            return total;
          });
          var discountedTotal = computed(() => {
            var total = 0;
            lineItems.value.forEach(li => total += li.discountedCost);
            return total;
          });
          var discountedTotalFormatted = computed(() => {
            return formatCurrency(discountedTotal.value);
          });
          var amountDueToday = computed(() => {
            if (amountPreviouslyPaid.value) {
              return 0;
            }
            var total = 0;
            lineItems.value.forEach(li => total += Math.min(li.minimumPaymentAmount, li.discountedCost));
            return total;
          });
          var amountDueTodayFormatted = computed(() => {
            return formatCurrency(amountDueToday.value);
          });
          var showAmountDueToday = computed(() => {
            return amountDueToday.value !== discountedTotal.value;
          });
          var amountPreviouslyPaid = computed(() => {
            var _registrationEntrySta;
            return ((_registrationEntrySta = registrationEntryState.viewModel.session) === null || _registrationEntrySta === void 0 ? void 0 : _registrationEntrySta.previouslyPaid) || 0;
          });
          var amountPreviouslyPaidFormatted = computed(() => {
            return formatCurrency(amountPreviouslyPaid.value);
          });
          var maxAmountCanBePaid = computed(() => {
            var balance = discountedTotal.value - amountPreviouslyPaid.value;
            if (balance > 0) {
              return balance;
            }
            return 0;
          });
          var maxAmountCanBePaidFormatted = computed(() => {
            return formatCurrency(maxAmountCanBePaid.value);
          });
          var amountRemaining = computed(() => {
            var actual = maxAmountCanBePaid.value - registrationEntryState.amountToPayToday;
            var bounded = actual < 0 ? 0 : actual > maxAmountCanBePaid.value ? maxAmountCanBePaid.value : actual;
            return bounded;
          });
          var amountRemainingFormatted = computed(() => {
            return formatCurrency(amountRemaining.value);
          });
          var amountToPayTodayRules = computed(() => {
            var rules = [];
            var min = amountDueToday.value;
            var max = maxAmountCanBePaid.value;
            if (min > max) {
              min = max;
            }
            if (min > 0) {
              rules.push("required");
            } else {
              rules.push("notblank");
            }
            rules.push("gte:".concat(min));
            rules.push("lte:".concat(max));
            return rules;
          });
          function fetchData() {
            return _fetchData.apply(this, arguments);
          }
          function _fetchData() {
            _fetchData = _asyncToGenerator(function* () {
              isLoading.value = true;
              lineItems.value = [];
              try {
                var response = yield invokeBlockAction("CalculateCost", {
                  args: getRegistrationEntryBlockArgs()
                });
                if (response.data) {
                  lineItems.value = response.data;
                }
              } finally {
                isLoading.value = false;
              }
              updateRegistrationCostSummary({
                paidAmount: amountPreviouslyPaid.value,
                remainingAmount: amountRemaining.value,
                minimumRemainingAmount: amountDueToday.value
              });
            });
            return _fetchData.apply(this, arguments);
          }
          watch(defaultPaymentAmount, () => {
            registrationEntryState.amountToPayToday = defaultPaymentAmount.value;
          }, {
            immediate: true
          });
          watch(() => registrationEntryState.discountCode, _asyncToGenerator(function* () {
            yield fetchData();
          }));
          fetchData();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Loading), {
              isLoading: isLoading.value
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$4, [createElementVNode("div", {
                class: normalizeClass({
                  'col-sm-6': unref(hasDiscount),
                  'col-sm-9': !unref(hasDiscount)
                })
              }, _hoisted_4$4, 2), _hoisted_5$4, unref(hasDiscount) ? (openBlock(), createElementBlock("div", _hoisted_6$4, _hoisted_8$2)) : createCommentVNode("v-if", true)]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(augmentedLineItems), lineItem => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["row", lineItem.isFee ? 'fee-row-fee' : 'fee-row-cost'])
                }, [createElementVNode("div", {
                  class: normalizeClass({
                    'col-sm-6 fee-caption': unref(hasDiscount),
                    'col-sm-9 fee-caption': !unref(hasDiscount)
                  })
                }, toDisplayString(lineItem.description), 3), createElementVNode("div", _hoisted_9$2, [_hoisted_10$2, createTextVNode(" $ " + toDisplayString(lineItem.amountFormatted), 1)]), unref(hasDiscount) ? (openBlock(), createElementBlock("div", _hoisted_11$2, [lineItem.discountHelp ? (openBlock(), createBlock(unref(HelpBlock), {
                  key: 0,
                  text: lineItem.discountHelp
                }, null, 8, ["text"])) : createCommentVNode("v-if", true), _hoisted_12$2, createTextVNode(" $ " + toDisplayString(lineItem.discountedAmountFormatted), 1)])) : createCommentVNode("v-if", true)], 2);
              }), 256)), createElementVNode("div", _hoisted_13$1, [createElementVNode("div", {
                class: normalizeClass({
                  'col-sm-6 fee-caption': unref(hasDiscount),
                  'col-sm-9 fee-caption': !unref(hasDiscount)
                })
              }, " Total ", 2), createElementVNode("div", _hoisted_14, [_hoisted_15, createTextVNode(" " + toDisplayString(unref(totalFormatted)), 1)]), unref(hasDiscount) ? (openBlock(), createElementBlock("div", _hoisted_16, [_hoisted_17, createTextVNode(" " + toDisplayString(unref(discountedTotalFormatted)), 1)])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_18, [createElementVNode("div", _hoisted_19, [createElementVNode("div", _hoisted_20, [_hoisted_21, createElementVNode("div", _hoisted_22, [createElementVNode("div", _hoisted_23, toDisplayString(unref(discountedTotalFormatted)), 1)])]), unref(amountPreviouslyPaid) ? (openBlock(), createElementBlock("div", _hoisted_24, [_hoisted_25, createElementVNode("div", _hoisted_26, [createElementVNode("div", _hoisted_27, toDisplayString(unref(amountPreviouslyPaidFormatted)), 1)])])) : createCommentVNode("v-if", true), unref(showAmountDueToday) && unref(maxAmountCanBePaid) ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createElementVNode("div", _hoisted_28, [_hoisted_29, createElementVNode("div", _hoisted_30, [createElementVNode("div", _hoisted_31, toDisplayString(unref(amountDueTodayFormatted)), 1)])]), createVNode(unref(CurrencyBox), {
                label: "Amount To Pay Today",
                rules: unref(amountToPayTodayRules),
                modelValue: unref(registrationEntryState).amountToPayToday,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(registrationEntryState).amountToPayToday = $event),
                formGroupClasses: "form-right",
                inputGroupClasses: "input-width-md amount-to-pay"
              }, null, 8, ["rules", "modelValue"]), createElementVNode("div", _hoisted_32, [_hoisted_33, createElementVNode("div", _hoisted_34, [createElementVNode("div", _hoisted_35, toDisplayString(unref(amountRemainingFormatted)), 1)])])], 64)) : (openBlock(), createElementBlock("div", _hoisted_36, [_hoisted_37, createElementVNode("div", _hoisted_38, [createElementVNode("div", _hoisted_39, toDisplayString(unref(maxAmountCanBePaidFormatted)), 1)])]))])])]),
              _: 1
            }, 8, ["isLoading"]);
          };
        }
      });

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

      var css_248z = ".payment-plan[data-v-369aff92] .control-label:not(.primary-label){font-weight:400}";
      styleInject(css_248z);

      script$4.__scopeId = "data-v-369aff92";
      script$4.__file = "src/Event/RegistrationEntry/costSummary.partial.obs";

      var _hoisted_1$3 = {
        key: 0,
        class: "clearfix"
      };
      var _hoisted_2$3 = {
        class: "form-group pull-right"
      };
      var _hoisted_3$3 = createElementVNode("label", {
        class: "control-label"
      }, "Discount Code", -1);
      var _hoisted_4$3 = {
        class: "input-group"
      };
      var _hoisted_5$3 = ["disabled"];
      var _hoisted_6$3 = createTextVNode(" Apply ");
      var script$3 = defineComponent({
        name: 'discountCodeForm.partial',
        setup(__props) {
          var getPersistSessionArgs = use(GetPersistSessionArgs);
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var loading = ref(false);
          var discountCodeInput = ref("");
          var discountCodeWarningMessage = ref("");
          var discountCodeSuccessMessage = ref("");
          var isDiscountPanelVisible = computed(() => {
            return config.value.hasDiscountsAvailable;
          });
          var isDiscountCodeAllowed = computed(() => {
            var args = getPersistSessionArgs();
            if (args.discountCode && args.discountCode.length > 0 && args.registrationGuid != null) {
              return false;
            }
            return true;
          });
          var config = computed(() => {
            return registrationEntryState.viewModel;
          });
          function tryDiscountCode(_x) {
            return _tryDiscountCode.apply(this, arguments);
          }
          function _tryDiscountCode() {
            _tryDiscountCode = _asyncToGenerator(function* (isAutoApply) {
              loading.value = true;
              try {
                var _config$value$session;
                var request = {
                  code: discountCodeInput.value,
                  registrantCount: registrationEntryState.registrants.length,
                  registrationGuid: toGuidOrNull((_config$value$session = config.value.session) === null || _config$value$session === void 0 ? void 0 : _config$value$session.registrationGuid),
                  isAutoApply: isAutoApply !== null && isAutoApply !== void 0 ? isAutoApply : false
                };
                var result = yield invokeBlockAction("CheckDiscountCode", request);
                if (result.isError || !result.data) {
                  if (!isAutoApply) {
                    if (result.errorMessage != null && result.errorMessage != "") {
                      discountCodeWarningMessage.value = result.errorMessage;
                    } else if (discountCodeInput.value != "") {
                      discountCodeWarningMessage.value = "'".concat(discountCodeInput.value, "' is not a valid Discount Code.");
                    }
                  }
                } else {
                  discountCodeWarningMessage.value = "";
                  discountCodeInput.value = discountCodeInput.value == "" ? result.data.discountCode : discountCodeInput.value;
                  registrationEntryState.discountAmount = result.data.discountAmount;
                  registrationEntryState.discountPercentage = result.data.discountPercentage;
                  registrationEntryState.discountCode = result.data.discountCode;
                  registrationEntryState.discountMaxRegistrants = result.data.discountMaxRegistrants;
                  if (!isAutoApply || registrationEntryState.registrants.some(r => !r.isOnWaitList)) {
                    discountCodeSuccessMessage.value = getDiscountCodeSuccessMessage();
                  } else {
                    discountCodeSuccessMessage.value = "";
                  }
                }
              } finally {
                loading.value = false;
              }
            });
            return _tryDiscountCode.apply(this, arguments);
          }
          function getDiscountCodeSuccessMessage() {
            var _registrationEntrySta;
            var discountAmount = registrationEntryState.discountAmount;
            var discountPercent = registrationEntryState.discountPercentage;
            var discountMaxRegistrants = (_registrationEntrySta = registrationEntryState.discountMaxRegistrants) !== null && _registrationEntrySta !== void 0 ? _registrationEntrySta : 0;
            var registrantCount = registrationEntryState.registrants.length;
            if (!discountPercent && !discountAmount) {
              return "";
            }
            var discountText = discountPercent ? "".concat(asFormattedString(discountPercent * 100, 0), "%") : "$".concat(asFormattedString(discountAmount, 2));
            if (discountMaxRegistrants != 0 && registrantCount > discountMaxRegistrants) {
              var registrantTerm = discountMaxRegistrants == 1 ? "registrant" : "registrants";
              return "Your ".concat(discountText, " discount code was successfully applied to the maximum allowed number of ").concat(discountMaxRegistrants, " ").concat(registrantTerm);
            }
            return "Your ".concat(discountText, " discount code for all registrants was successfully applied.");
          }
          watch(() => registrationEntryState.discountCode, () => {
            discountCodeInput.value = registrationEntryState.discountCode;
          }, {
            immediate: true
          });
          onMounted(_asyncToGenerator(function* () {
            yield tryDiscountCode(true);
          }));
          return (_ctx, _cache) => {
            return unref(isDiscountPanelVisible) || discountCodeInput.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [discountCodeWarningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(discountCodeWarningMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), discountCodeSuccessMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(discountCodeSuccessMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_2$3, [_hoisted_3$3, createElementVNode("div", _hoisted_4$3, [withDirectives(createElementVNode("input", {
              type: "text",
              disabled: loading.value || !unref(isDiscountCodeAllowed),
              class: "form-control input-width-md input-sm",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => discountCodeInput.value = $event)
            }, null, 8, _hoisted_5$3), [[vModelText, discountCodeInput.value]]), unref(isDiscountCodeAllowed) ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnSize: "sm",
              isLoading: loading.value,
              class: "margin-l-sm",
              onClick: _cache[1] || (_cache[1] = $event => tryDiscountCode(false))
            }, {
              default: withCtx(() => [_hoisted_6$3]),
              _: 1
            }, 8, ["isLoading"])) : createCommentVNode("v-if", true)])])])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$3.__file = "src/Event/RegistrationEntry/discountCodeForm.partial.obs";

      var _hoisted_1$2 = {
        key: 0,
        class: "well"
      };
      var _hoisted_2$2 = createElementVNode("h4", null, "This Registration Was Completed By", -1);
      var _hoisted_3$2 = {
        class: "row"
      };
      var _hoisted_4$2 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_5$2 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_6$2 = {
        class: "row"
      };
      var _hoisted_7$1 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_8$1 = {
        class: "row"
      };
      var _hoisted_9$1 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_10$1 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_11$1 = {
        class: "row"
      };
      var _hoisted_12$1 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_13 = {
        class: "col-md-6 col-sm-6"
      };
      var script$2 = defineComponent({
        name: 'registrar.partial',
        setup(__props) {
          var store = useStore();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var isRegistrarPanelShown = ref(true);
          var useLoggedInPersonForRegistrar = computed(() => {
            return !!currentPerson.value && viewModel.value.registrarOption === RegistrarOption.UseLoggedInPerson;
          });
          var currentPerson = computed(() => {
            return store.state.currentPerson;
          });
          var registrar = computed(() => {
            return registrationEntryState.registrar;
          });
          var firstRegistrant = computed(() => {
            return registrationEntryState.registrants[0];
          });
          var viewModel = computed(() => {
            return registrationEntryState.viewModel;
          });
          var doShowUpdateEmailOption = computed(() => {
            var _currentPerson$value;
            return !viewModel.value.forceEmailUpdate && !!((_currentPerson$value = currentPerson.value) !== null && _currentPerson$value !== void 0 && _currentPerson$value.email);
          });
          var familyOptions = computed(() => {
            var options = [];
            var usedFamilyGuids = {};
            if (viewModel.value.registrantsSameFamily !== RegistrantsSameFamily.Ask) {
              return options;
            }
            for (var i = 0; i < registrationEntryState.registrants.length; i++) {
              var _viewModel$value$regi;
              var registrant = registrationEntryState.registrants[i];
              var info = getRegistrantBasicInfo(registrant, (_viewModel$value$regi = viewModel.value.registrantForms) !== null && _viewModel$value$regi !== void 0 ? _viewModel$value$regi : []);
              if (registrant.familyGuid && !usedFamilyGuids[registrant.familyGuid] && info !== null && info !== void 0 && info.firstName && info.lastName) {
                options.push({
                  text: "".concat(info.firstName, " ").concat(info.lastName),
                  value: registrant.familyGuid
                });
                usedFamilyGuids[registrant.familyGuid] = true;
              }
            }
            if (!usedFamilyGuids[registrationEntryState.ownFamilyGuid]) {
              options.push({
                text: "None",
                value: registrationEntryState.ownFamilyGuid
              });
            }
            return options;
          });
          function prefillRegistrar() {
            isRegistrarPanelShown.value = true;
            if (currentPerson.value && (viewModel.value.registrarOption === RegistrarOption.UseLoggedInPerson || viewModel.value.registrarOption === RegistrarOption.PromptForRegistrar)) {
              registrar.value.nickName = currentPerson.value.nickName || currentPerson.value.firstName || "";
              registrar.value.lastName = currentPerson.value.lastName || "";
              registrar.value.email = currentPerson.value.email || "";
              registrar.value.familyGuid = viewModel.value.currentPersonFamilyGuid || null;
              return;
            }
            if (viewModel.value.registrarOption === RegistrarOption.PromptForRegistrar) {
              return;
            }
            if (viewModel.value.registrarOption === RegistrarOption.PrefillFirstRegistrant || viewModel.value.registrarOption === RegistrarOption.UseFirstRegistrant) {
              var _viewModel$value$regi2;
              var firstRegistrantInfo = getRegistrantBasicInfo(firstRegistrant.value, (_viewModel$value$regi2 = viewModel.value.registrantForms) !== null && _viewModel$value$regi2 !== void 0 ? _viewModel$value$regi2 : []);
              registrar.value.nickName = firstRegistrantInfo.firstName;
              registrar.value.lastName = firstRegistrantInfo.lastName;
              registrar.value.email = firstRegistrantInfo.email;
              registrar.value.familyGuid = firstRegistrant.value.familyGuid;
              var hasAllInfo = !!registrar.value.nickName && !!registrar.value.lastName && !!registrar.value.email;
              if (hasAllInfo && viewModel.value.registrarOption === RegistrarOption.UseFirstRegistrant) {
                isRegistrarPanelShown.value = false;
              }
              return;
            }
          }
          function onUpdateFamilyGuid(guid) {
            registrar.value.familyGuid = guid;
          }
          watch(currentPerson, () => {
            prefillRegistrar();
          }, {
            immediate: true
          });
          return (_ctx, _cache) => {
            var _unref$nickName, _unref$lastName, _unref$email, _unref$nickName2, _unref$lastName2, _unref$email2, _unref$familyGuid;
            return isRegistrarPanelShown.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [_hoisted_2$2, unref(useLoggedInPersonForRegistrar) ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [createElementVNode("div", _hoisted_3$2, [createElementVNode("div", _hoisted_4$2, [createVNode(unref(StaticFormControl), {
              label: "First Name",
              modelValue: (_unref$nickName = unref(registrar).nickName) !== null && _unref$nickName !== void 0 ? _unref$nickName : ''
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$2, [createVNode(unref(StaticFormControl), {
              label: "Last Name",
              modelValue: (_unref$lastName = unref(registrar).lastName) !== null && _unref$lastName !== void 0 ? _unref$lastName : ''
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_6$2, [createElementVNode("div", _hoisted_7$1, [createVNode(unref(StaticFormControl), {
              label: "Email",
              modelValue: (_unref$email = unref(registrar).email) !== null && _unref$email !== void 0 ? _unref$email : ''
            }, null, 8, ["modelValue"])])])], 64)) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [createElementVNode("div", _hoisted_8$1, [createElementVNode("div", _hoisted_9$1, [createVNode(unref(TextBox), {
              label: "First Name",
              rules: "required",
              modelValue: (_unref$nickName2 = unref(registrar).nickName) !== null && _unref$nickName2 !== void 0 ? _unref$nickName2 : '',
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(registrar).nickName = $event),
              tabIndex: "1"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10$1, [createVNode(unref(TextBox), {
              label: "Last Name",
              rules: "required",
              modelValue: (_unref$lastName2 = unref(registrar).lastName) !== null && _unref$lastName2 !== void 0 ? _unref$lastName2 : '',
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => unref(registrar).lastName = $event),
              tabIndex: "2"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_11$1, [createElementVNode("div", _hoisted_12$1, [createVNode(unref(EmailBox), {
              label: "Send Confirmation Emails To",
              rules: "required",
              modelValue: (_unref$email2 = unref(registrar).email) !== null && _unref$email2 !== void 0 ? _unref$email2 : '',
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => unref(registrar).email = $event),
              tabIndex: "3"
            }, null, 8, ["modelValue"]), unref(doShowUpdateEmailOption) ? (openBlock(), createBlock(unref(InlineCheckBox), {
              key: 0,
              label: "Should Your Account Be Updated To Use This Email Address?",
              modelValue: unref(registrar).updateEmail,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => unref(registrar).updateEmail = $event)
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_13, [unref(familyOptions).length ? (openBlock(), createBlock(unref(RadioButtonList), {
              key: 0,
              label: (unref(registrar).nickName || 'Person') + ' is in the same immediate family as',
              rules: "required:{\"allowEmptyString\": true}",
              modelValue: (_unref$familyGuid = unref(registrar).familyGuid) !== null && _unref$familyGuid !== void 0 ? _unref$familyGuid : undefined,
              "onUpdate:modelValue": onUpdateFamilyGuid,
              items: unref(familyOptions),
              validationTitle: "Family"
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true)])])], 64))])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$2.__file = "src/Event/RegistrationEntry/registrar.partial.obs";

      var _hoisted_1$1 = {
        class: "registrationentry-summary"
      };
      var _hoisted_2$1 = {
        key: 0
      };
      var _hoisted_3$1 = createElementVNode("h4", null, "Payment Summary", -1);
      var _hoisted_4$1 = {
        key: 1,
        class: "margin-b-md"
      };
      var _hoisted_5$1 = {
        class: "actions text-right"
      };
      var _hoisted_6$1 = createTextVNode(" Previous ");
      var script$1 = defineComponent({
        name: 'summary.partial',
        emits: ["next", "previous"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var getRegistrationEntryBlockArgs = use(GetPersistSessionArgs);
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = use(CurrentRegistrationEntryState);
          var persistSession = use(PersistSession);
          var loading = ref(false);
          var submitErrorMessage = ref("");
          var hasPaymentCost = computed(() => {
            var _registrationEntrySta;
            var usedFeeIds = [];
            var _iterator = _createForOfIteratorHelper(registrationEntryState.registrants),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var registrant = _step.value;
                for (var feeId in registrant.feeItemQuantities) {
                  if (registrant.feeItemQuantities[feeId] > 0) {
                    usedFeeIds.push(feeId);
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var hasCostFees = (_registrationEntrySta = registrationEntryState.viewModel.fees) === null || _registrationEntrySta === void 0 ? void 0 : _registrationEntrySta.some(f => {
              var _f$items;
              return (_f$items = f.items) === null || _f$items === void 0 ? void 0 : _f$items.some(i => i.cost > 0 && usedFeeIds.includes(i.guid));
            });
            return hasCostFees || registrationEntryState.viewModel.cost > 0;
          });
          var viewModel = computed(() => {
            return registrationEntryState.viewModel;
          });
          var registrantInfos = computed(() => {
            return registrationEntryState.registrants.map(r => {
              var _viewModel$value$regi;
              return getRegistrantBasicInfo(r, (_viewModel$value$regi = viewModel.value.registrantForms) !== null && _viewModel$value$regi !== void 0 ? _viewModel$value$regi : []);
            });
          });
          var registrantTerm = computed(() => {
            var _ref2;
            return (_ref2 = registrantInfos.value.length === 1 ? viewModel.value.registrantTerm : viewModel.value.pluralRegistrantTerm) !== null && _ref2 !== void 0 ? _ref2 : "";
          });
          var instanceName = computed(() => {
            var _viewModel$value$inst;
            return (_viewModel$value$inst = viewModel.value.instanceName) !== null && _viewModel$value$inst !== void 0 ? _viewModel$value$inst : "";
          });
          var finishButtonText = computed(() => {
            if (registrationEntryState.amountToPayToday) {
              return viewModel.value.isRedirectGateway ? "Pay" : "Next";
            } else {
              return "Finish";
            }
          });
          function onPrevious() {
            emit("previous");
          }
          function onNext() {
            return _onNext.apply(this, arguments);
          }
          function _onNext() {
            _onNext = _asyncToGenerator(function* () {
              loading.value = true;
              if (registrationEntryState.amountToPayToday) {
                yield persistSession(true);
                if (viewModel.value.isRedirectGateway) {
                  var redirectUrl = yield getPaymentRedirect();
                  if (redirectUrl) {
                    location.href = redirectUrl;
                  } else {
                    loading.value = false;
                  }
                } else {
                  loading.value = false;
                  emit("next");
                }
              } else {
                var success = yield submit();
                loading.value = false;
                if (success) {
                  emit("next");
                }
              }
            });
            return _onNext.apply(this, arguments);
          }
          function submit() {
            return _submit.apply(this, arguments);
          }
          function _submit() {
            _submit = _asyncToGenerator(function* () {
              submitErrorMessage.value = "";
              var result = yield invokeBlockAction("SubmitRegistration", {
                args: getRegistrationEntryBlockArgs()
              });
              if (result.isError || !result.data) {
                submitErrorMessage.value = result.errorMessage || "Unknown error";
              } else {
                registrationEntryState.successViewModel = result.data;
              }
              return result.isSuccess;
            });
            return _submit.apply(this, arguments);
          }
          function getPaymentRedirect() {
            return _getPaymentRedirect.apply(this, arguments);
          }
          function _getPaymentRedirect() {
            _getPaymentRedirect = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetPaymentRedirect", {
                args: getRegistrationEntryBlockArgs(),
                returnUrl: window.location.href
              });
              if (result.isError || !result.data) {
                submitErrorMessage.value = result.errorMessage || "Unknown error";
              }
              return result.data || "";
            });
            return _getPaymentRedirect.apply(this, arguments);
          }
          if (!hasPaymentCost.value) {
            registrationEntryState.amountToPayToday = 0;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(RockForm), {
              onSubmit: onNext
            }, {
              default: withCtx(() => [createVNode(unref(script$2)), unref(hasPaymentCost) ? (openBlock(), createElementBlock("div", _hoisted_2$1, [_hoisted_3$1, createVNode(unref(script$3)), createVNode(unref(script$4))])) : createCommentVNode("v-if", true), !unref(hasPaymentCost) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createElementVNode("p", null, "The following " + toDisplayString(unref(registrantTerm)) + " will be registered for " + toDisplayString(unref(instanceName)) + ":", 1), createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(registrantInfos), r => {
                return openBlock(), createElementBlock("li", {
                  key: r.guid
                }, [createElementVNode("strong", null, toDisplayString(r.firstName) + " " + toDisplayString(r.lastName), 1)]);
              }), 128))])])) : createCommentVNode("v-if", true), submitErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 2,
                alertType: "danger"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(submitErrorMessage.value), 1)]),
                _: 1
              })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_5$1, [unref(viewModel).allowRegistrationUpdates ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                class: "pull-left",
                btnType: "default",
                onClick: onPrevious,
                isLoading: loading.value,
                autoDisable: ""
              }, {
                default: withCtx(() => [_hoisted_6$1]),
                _: 1
              }, 8, ["isLoading"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                btnType: "primary",
                type: "submit",
                isLoading: loading.value,
                autoDisable: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(finishButtonText)), 1)]),
                _: 1
              }, 8, ["isLoading"])])]),
              _: 1
            })]);
          };
        }
      });

      script$1.__file = "src/Event/RegistrationEntry/summary.partial.obs";

      var Step = function (Step) {
        Step["Intro"] = "intro";
        Step["RegistrationStartForm"] = "registrationStartForm";
        Step["PerRegistrantForms"] = "perRegistrantForms";
        Step["RegistrationEndForm"] = "registrationEndForm";
        Step["Review"] = "review";
        Step["Payment"] = "payment";
        Step["Success"] = "success";
        return Step;
      }({});

      var _hoisted_1 = createElementVNode("strong", null, "Sorry", -1);
      var _hoisted_2 = createElementVNode("strong", null, "Please log in", -1);
      var _hoisted_3 = createElementVNode("p", null, "You must be logged in to access this registration.", -1);
      var _hoisted_4 = createElementVNode("strong", null, "Sorry", -1);
      var _hoisted_5 = createElementVNode("p", null, "You are not allowed to view or edit the selected registration since you are not the one who created the registration.", -1);
      var _hoisted_6 = createElementVNode("strong", null, "Incorrect Configuration", -1);
      var _hoisted_7 = createElementVNode("p", null, "This registration has costs/fees associated with it but the configured payment gateway is not supported.", -1);
      var _hoisted_8 = ["innerHTML"];
      var _hoisted_9 = {
        key: 0,
        class: "remaining-time flex-grow-1 flex-md-grow-0"
      };
      var _hoisted_10 = createElementVNode("h4", null, "Success", -1);
      var _hoisted_11 = createElementVNode("span", {
        class: "remaining-time-title"
      }, "Time left before timeout", -1);
      var _hoisted_12 = {
        class: "remaining-time-countdown"
      };
      var script = exports('default', defineComponent({
        name: 'registrationEntry',
        setup(__props) {
          var _config$registrationA, _config$registrationA2, _config$registrationA3, _config$registrationA4, _config$session, _config$session2, _config$session3, _config$session4, _config$session5, _config$session6, _config$session7, _config$successViewMo, _config$session8;
          var store = useStore();
          var steps = {
            [Step.Intro]: Step.Intro,
            [Step.RegistrationStartForm]: Step.RegistrationStartForm,
            [Step.PerRegistrantForms]: Step.PerRegistrantForms,
            [Step.RegistrationEndForm]: Step.RegistrationEndForm,
            [Step.Review]: Step.Review,
            [Step.Payment]: Step.Payment,
            [Step.Success]: Step.Success
          };
          var invokeBlockAction = useInvokeBlockAction();
          var config = useConfigurationValues();
          var notFound = !!config.registrationInstanceNotFoundMessage || !config.registrationAttributesStart;
          var notFoundMessage = config.registrationInstanceNotFoundMessage || "The selected registration could not be found or is no longer active.";
          var hasPreAttributes = ((_config$registrationA = (_config$registrationA2 = config.registrationAttributesStart) === null || _config$registrationA2 === void 0 ? void 0 : _config$registrationA2.length) !== null && _config$registrationA !== void 0 ? _config$registrationA : 0) > 0;
          var hasPostAttributes = ((_config$registrationA3 = (_config$registrationA4 = config.registrationAttributesEnd) === null || _config$registrationA4 === void 0 ? void 0 : _config$registrationA4.length) !== null && _config$registrationA3 !== void 0 ? _config$registrationA3 : 0) > 0;
          var initialStep = steps.intro;
          if (config.successViewModel) {
            initialStep = steps.success;
          } else if (config.session && !config.startAtBeginning) {
            initialStep = steps.review;
          } else if (config.maxRegistrants === 1 && isNullOrWhiteSpace(config.instructionsHtml)) {
            initialStep = hasPreAttributes ? steps.registrationStartForm : steps.perRegistrantForms;
          } else if (config.isExistingRegistration && config.startAtBeginning) {
            initialStep = hasPreAttributes ? steps.registrationStartForm : steps.perRegistrantForms;
          }
          var secondsBeforeExpiration = ref(-1);
          var hasSessionRenewalSuccess = ref(false);
          var registrationEntryState = ref({
            steps: steps,
            viewModel: config,
            firstStep: initialStep,
            currentStep: initialStep,
            navBack: false,
            currentRegistrantFormIndex: 0,
            currentRegistrantIndex: 0,
            registrants: ((_config$session = config.session) === null || _config$session === void 0 ? void 0 : _config$session.registrants) || [getDefaultRegistrantInfo(null, config, null)],
            registrationFieldValues: ((_config$session2 = config.session) === null || _config$session2 === void 0 ? void 0 : _config$session2.fieldValues) || {},
            registrar: ((_config$session3 = config.session) === null || _config$session3 === void 0 ? void 0 : _config$session3.registrar) || {
              nickName: "",
              lastName: "",
              email: "",
              updateEmail: true,
              familyGuid: null
            },
            gatewayToken: "",
            savedAccountGuid: null,
            discountCode: ((_config$session4 = config.session) === null || _config$session4 === void 0 ? void 0 : _config$session4.discountCode) || "",
            discountAmount: ((_config$session5 = config.session) === null || _config$session5 === void 0 ? void 0 : _config$session5.discountAmount) || 0,
            discountPercentage: ((_config$session6 = config.session) === null || _config$session6 === void 0 ? void 0 : _config$session6.discountPercentage) || 0,
            discountMaxRegistrants: ((_config$session7 = config.session) === null || _config$session7 === void 0 ? void 0 : _config$session7.discountMaxRegistrants) || 0,
            successViewModel: (_config$successViewMo = config.successViewModel) !== null && _config$successViewMo !== void 0 ? _config$successViewMo : null,
            amountToPayToday: 0,
            sessionExpirationDateMs: null,
            registrationSessionGuid: ((_config$session8 = config.session) === null || _config$session8 === void 0 ? void 0 : _config$session8.registrationSessionGuid) || newGuid(),
            ownFamilyGuid: config.currentPersonFamilyGuid || newGuid()
          });
          var registrationCostSummary = ref({
            paidAmount: 0,
            remainingAmount: 0,
            minimumRemainingAmount: 0
          });
          var currentStep = computed(() => {
            return registrationEntryState.value.currentStep;
          });
          var currentPerson = computed(() => {
            return store.state.currentPerson;
          });
          var isSessionExpired = computed(() => {
            return secondsBeforeExpiration.value === 0 && registrationEntryState.value.currentStep !== Step.Success;
          });
          var mustLogin = computed(() => {
            return !currentPerson.value && config != null && (config.isUnauthorized || config.loginRequiredToRegister);
          });
          var isUnauthorized = computed(() => {
            var _config$isUnauthorize;
            return (_config$isUnauthorize = config.isUnauthorized) !== null && _config$isUnauthorize !== void 0 ? _config$isUnauthorize : false;
          });
          var progressTrackerIndex = computed(() => {
            if (currentStep.value === Step.Intro) {
              return 0;
            }
            var stepsBeforePre = registrationEntryState.value.firstStep === Step.Intro ? 1 : 0;
            if (currentStep.value === Step.RegistrationStartForm) {
              return stepsBeforePre;
            }
            var stepsBeforeRegistrants = stepsBeforePre + (hasPreAttributes ? 1 : 0);
            if (currentStep.value === Step.PerRegistrantForms) {
              return registrationEntryState.value.currentRegistrantIndex + stepsBeforeRegistrants;
            }
            var stepsToCompleteRegistrants = registrationEntryState.value.registrants.length + stepsBeforeRegistrants;
            if (currentStep.value === Step.RegistrationEndForm) {
              return stepsToCompleteRegistrants;
            }
            if (currentStep.value === Step.Review) {
              return stepsToCompleteRegistrants + (hasPostAttributes ? 1 : 0);
            }
            if (currentStep.value === Step.Payment) {
              return stepsToCompleteRegistrants + (hasPostAttributes ? 1 : 0);
            }
            return 0;
          });
          var uppercaseRegistrantTerm = computed(() => {
            var _config$registrantTer;
            return StringFilter.toTitleCase((_config$registrantTer = config.registrantTerm) !== null && _config$registrantTer !== void 0 ? _config$registrantTer : "");
          });
          var currentRegistrantTitle = computed(() => {
            var ordinal = NumberFilter.toOrdinal(registrationEntryState.value.currentRegistrantIndex + 1);
            var title = StringFilter.toTitleCase(registrationEntryState.value.registrants.length <= 1 ? uppercaseRegistrantTerm.value : ordinal + " " + uppercaseRegistrantTerm.value);
            if (registrationEntryState.value.currentRegistrantFormIndex > 0) {
              title += " (cont)";
            }
            return title;
          });
          var stepTitleHtml = computed(() => {
            if (currentStep.value === Step.RegistrationStartForm) {
              var _config$registrationA5;
              return (_config$registrationA5 = config.registrationAttributeTitleStart) !== null && _config$registrationA5 !== void 0 ? _config$registrationA5 : "";
            }
            if (currentStep.value === Step.PerRegistrantForms) {
              return currentRegistrantTitle.value;
            }
            if (currentStep.value === Step.RegistrationEndForm) {
              var _config$registrationA6;
              return (_config$registrationA6 = config.registrationAttributeTitleEnd) !== null && _config$registrationA6 !== void 0 ? _config$registrationA6 : "";
            }
            if (currentStep.value === Step.Review) {
              return "Review Registration";
            }
            if (currentStep.value === Step.Success) {
              var _registrationEntrySta;
              return ((_registrationEntrySta = registrationEntryState.value.successViewModel) === null || _registrationEntrySta === void 0 ? void 0 : _registrationEntrySta.titleHtml) || "Congratulations";
            }
            return "";
          });
          var progressTrackerItems = computed(() => {
            var _config$registrationT5;
            var items = [];
            if (registrationEntryState.value.firstStep === Step.Intro) {
              var _config$registrationT;
              items.push({
                key: "Start",
                title: "Start",
                subtitle: (_config$registrationT = config.registrationTerm) !== null && _config$registrationT !== void 0 ? _config$registrationT : ""
              });
            }
            if (hasPreAttributes) {
              var _config$registrationA7, _config$registrationT2;
              items.push({
                key: "Pre",
                title: (_config$registrationA7 = config.registrationAttributeTitleStart) !== null && _config$registrationA7 !== void 0 ? _config$registrationA7 : "",
                subtitle: (_config$registrationT2 = config.registrationTerm) !== null && _config$registrationT2 !== void 0 ? _config$registrationT2 : ""
              });
            }
            if (!registrationEntryState.value.registrants.length) {
              var _config$registrantTer2, _config$registrationT3;
              items.push({
                key: "Registrant",
                title: toTitleCase((_config$registrantTer2 = config.registrantTerm) !== null && _config$registrantTer2 !== void 0 ? _config$registrantTer2 : ""),
                subtitle: (_config$registrationT3 = config.registrationTerm) !== null && _config$registrationT3 !== void 0 ? _config$registrationT3 : ""
              });
            }
            for (var i = 0; i < registrationEntryState.value.registrants.length; i++) {
              var _config$registrantFor;
              var registrant = registrationEntryState.value.registrants[i];
              var info = getRegistrantBasicInfo(registrant, (_config$registrantFor = config.registrantForms) !== null && _config$registrantFor !== void 0 ? _config$registrantFor : []);
              if (info !== null && info !== void 0 && info.firstName && info.lastName) {
                items.push({
                  key: "Registrant-".concat(registrant.guid),
                  title: info.firstName,
                  subtitle: info.lastName
                });
              } else {
                var _config$registrantTer3;
                items.push({
                  key: "Registrant-".concat(registrant.guid),
                  title: toTitleCase((_config$registrantTer3 = config.registrantTerm) !== null && _config$registrantTer3 !== void 0 ? _config$registrantTer3 : ""),
                  subtitle: toTitleCase(toWord(i + 1))
                });
              }
            }
            if (hasPostAttributes) {
              var _config$registrationA8, _config$registrationT4;
              items.push({
                key: "Post",
                title: (_config$registrationA8 = config.registrationAttributeTitleEnd) !== null && _config$registrationA8 !== void 0 ? _config$registrationA8 : "",
                subtitle: (_config$registrationT4 = config.registrationTerm) !== null && _config$registrationT4 !== void 0 ? _config$registrationT4 : ""
              });
            }
            items.push({
              key: "Finalize",
              title: "Finalize",
              subtitle: (_config$registrationT5 = config.registrationTerm) !== null && _config$registrationT5 !== void 0 ? _config$registrationT5 : ""
            });
            return items;
          });
          var isInvalidGateway = computed(() => {
            var _config$fees, _config$gatewayContro;
            if (!config) {
              return false;
            }
            var hasCostFees = new List((_config$fees = config.fees) !== null && _config$fees !== void 0 ? _config$fees : []).any(f => {
              var _f$items;
              return new List((_f$items = f.items) !== null && _f$items !== void 0 ? _f$items : []).any(i => i.cost > 0);
            });
            if (config.cost <= 0 && !hasCostFees) {
              return false;
            }
            if (config.isRedirectGateway || (_config$gatewayContro = config.gatewayControl) !== null && _config$gatewayContro !== void 0 && _config$gatewayContro.fileUrl) {
              return false;
            }
            return true;
          });
          var isFull = computed(() => {
            var _config$spotsRemainin;
            var spotsRemaining = (_config$spotsRemainin = config === null || config === void 0 ? void 0 : config.spotsRemaining) !== null && _config$spotsRemainin !== void 0 ? _config$spotsRemainin : null;
            if (spotsRemaining == null) {
              return false;
            }
            return spotsRemaining < 1 && !config.waitListEnabled;
          });
          var preventNewRegistration = computed(() => {
            return isFull.value && !config.isExistingRegistration;
          });
          var registrationTerm = computed(() => {
            return (config.registrationTerm || "registration").toLowerCase();
          });
          var registrationTermPlural = computed(() => {
            return (config.pluralRegistrationTerm || "registrations").toLowerCase();
          });
          var registrationTermTitleCase = computed(() => {
            return toTitleCase(registrationTerm.value);
          });
          function getRegistrationEntryBlockArgs() {
            var _config$session9;
            return {
              registrationSessionGuid: registrationEntryState.value.registrationSessionGuid,
              gatewayToken: registrationEntryState.value.gatewayToken,
              savedAccountGuid: registrationEntryState.value.savedAccountGuid,
              discountCode: registrationEntryState.value.discountCode,
              fieldValues: registrationEntryState.value.registrationFieldValues,
              registrar: registrationEntryState.value.registrar,
              registrants: registrationEntryState.value.registrants,
              amountToPayNow: registrationEntryState.value.amountToPayToday,
              registrationGuid: ((_config$session9 = config.session) === null || _config$session9 === void 0 ? void 0 : _config$session9.registrationGuid) || null
            };
          }
          function persistSession() {
            return _persistSession.apply(this, arguments);
          }
          function _persistSession() {
            _persistSession = _asyncToGenerator(function* () {
              var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (!force && !config.timeoutMinutes) {
                return;
              }
              var response = yield invokeBlockAction("PersistSession", {
                args: getRegistrationEntryBlockArgs()
              });
              if (response.data) {
                var _expirationDate$toMil;
                var expirationDate = RockDateTime.parseISO(response.data.expirationDateTime);
                registrationEntryState.value.sessionExpirationDateMs = (_expirationDate$toMil = expirationDate === null || expirationDate === void 0 ? void 0 : expirationDate.toMilliseconds()) !== null && _expirationDate$toMil !== void 0 ? _expirationDate$toMil : null;
              }
            });
            return _persistSession.apply(this, arguments);
          }
          function onSessionRenewalSuccess() {
            hasSessionRenewalSuccess.value = true;
            setTimeout(() => hasSessionRenewalSuccess.value = false, 5000);
          }
          function onIntroNext() {
            return _onIntroNext.apply(this, arguments);
          }
          function _onIntroNext() {
            _onIntroNext = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = hasPreAttributes ? Step.RegistrationStartForm : Step.PerRegistrantForms;
              registrationEntryState.value.navBack = false;
              scrollToTopAfterNextRender();
            });
            return _onIntroNext.apply(this, arguments);
          }
          function onRegistrationStartPrevious() {
            return _onRegistrationStartPrevious.apply(this, arguments);
          }
          function _onRegistrationStartPrevious() {
            _onRegistrationStartPrevious = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = Step.Intro;
              registrationEntryState.value.navBack = true;
              scrollToTopAfterNextRender();
            });
            return _onRegistrationStartPrevious.apply(this, arguments);
          }
          function onRegistrationStartNext() {
            return _onRegistrationStartNext.apply(this, arguments);
          }
          function _onRegistrationStartNext() {
            _onRegistrationStartNext = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = Step.PerRegistrantForms;
              registrationEntryState.value.navBack = false;
              scrollToTopAfterNextRender();
            });
            return _onRegistrationStartNext.apply(this, arguments);
          }
          function onRegistrantPrevious() {
            return _onRegistrantPrevious.apply(this, arguments);
          }
          function _onRegistrantPrevious() {
            _onRegistrantPrevious = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = hasPreAttributes ? Step.RegistrationStartForm : Step.Intro;
              registrationEntryState.value.navBack = true;
              scrollToTopAfterNextRender();
            });
            return _onRegistrantPrevious.apply(this, arguments);
          }
          function onRegistrantNext() {
            return _onRegistrantNext.apply(this, arguments);
          }
          function _onRegistrantNext() {
            _onRegistrantNext = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = hasPostAttributes ? Step.RegistrationEndForm : Step.Review;
              registrationEntryState.value.navBack = false;
              scrollToTopAfterNextRender();
            });
            return _onRegistrantNext.apply(this, arguments);
          }
          function onRegistrationEndPrevious() {
            return _onRegistrationEndPrevious.apply(this, arguments);
          }
          function _onRegistrationEndPrevious() {
            _onRegistrationEndPrevious = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = Step.PerRegistrantForms;
              registrationEntryState.value.navBack = true;
              scrollToTopAfterNextRender();
            });
            return _onRegistrationEndPrevious.apply(this, arguments);
          }
          function onRegistrationEndNext() {
            return _onRegistrationEndNext.apply(this, arguments);
          }
          function _onRegistrationEndNext() {
            _onRegistrationEndNext = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = Step.Review;
              registrationEntryState.value.navBack = false;
              scrollToTopAfterNextRender();
            });
            return _onRegistrationEndNext.apply(this, arguments);
          }
          function onSummaryPrevious() {
            return _onSummaryPrevious.apply(this, arguments);
          }
          function _onSummaryPrevious() {
            _onSummaryPrevious = _asyncToGenerator(function* () {
              yield persistSession(false);
              if (hasPostAttributes) {
                registrationEntryState.value.currentStep = Step.RegistrationEndForm;
              } else {
                var _registrationEntrySta2, _registrationEntrySta3;
                var lastFormIndex = ((_registrationEntrySta2 = (_registrationEntrySta3 = registrationEntryState.value.viewModel.registrantForms) === null || _registrationEntrySta3 === void 0 ? void 0 : _registrationEntrySta3.length) !== null && _registrationEntrySta2 !== void 0 ? _registrationEntrySta2 : 0) - 1;
                registrationEntryState.value.currentRegistrantFormIndex = lastFormIndex;
                registrationEntryState.value.currentStep = Step.PerRegistrantForms;
              }
              registrationEntryState.value.navBack = true;
              scrollToTopAfterNextRender();
            });
            return _onSummaryPrevious.apply(this, arguments);
          }
          function onSummaryNext() {
            if (registrationEntryState.value.amountToPayToday) {
              registrationEntryState.value.currentStep = Step.Payment;
            } else {
              registrationEntryState.value.currentStep = Step.Success;
            }
            registrationEntryState.value.navBack = false;
            scrollToTopAfterNextRender();
          }
          function onPaymentPrevious() {
            return _onPaymentPrevious.apply(this, arguments);
          }
          function _onPaymentPrevious() {
            _onPaymentPrevious = _asyncToGenerator(function* () {
              yield persistSession(false);
              registrationEntryState.value.currentStep = Step.Review;
              registrationEntryState.value.navBack = true;
              scrollToTopAfterNextRender();
            });
            return _onPaymentPrevious.apply(this, arguments);
          }
          function onPaymentNext() {
            registrationEntryState.value.currentStep = Step.Success;
            registrationEntryState.value.navBack = false;
            scrollToTopAfterNextRender();
          }
          watch(currentPerson, () => {
            var forcedFamilyGuid = getForcedFamilyGuid(currentPerson.value, config);
            if (forcedFamilyGuid) {
              var _iterator = _createForOfIteratorHelper(registrationEntryState.value.registrants),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var registrant = _step.value;
                  registrant.familyGuid = forcedFamilyGuid;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }, {
            immediate: true
          });
          watch(() => registrationEntryState.value.sessionExpirationDateMs, () => {
            if (!registrationEntryState.value.sessionExpirationDateMs) {
              secondsBeforeExpiration.value = -1;
              return;
            }
            var nowMs = RockDateTime.now().toMilliseconds();
            var thenMs = registrationEntryState.value.sessionExpirationDateMs;
            var diffMs = thenMs - nowMs;
            secondsBeforeExpiration.value = diffMs / 1000;
          }, {
            immediate: true
          });
          provide(CurrentRegistrationEntryState, registrationEntryState.value);
          provide(GetPersistSessionArgs, getRegistrationEntryBlockArgs);
          provide(PersistSession, persistSession);
          provide(RegistrationCostSummary, {
            readonlyRegistrationCostSummary: readonly(registrationCostSummary),
            updateRegistrationCostSummary: value => {
              var remainingAmount = typeof value.remainingAmount !== "undefined" ? Math.round(value.remainingAmount * 100) / 100 : registrationCostSummary.value.remainingAmount;
              var minimumRemainingAmount = typeof value.minimumRemainingAmount !== "undefined" ? Math.round(value.minimumRemainingAmount * 100) / 100 : registrationCostSummary.value.minimumRemainingAmount;
              var paidAmount = typeof value.paidAmount !== "undefined" ? Math.round(value.paidAmount * 100) / 100 : registrationCostSummary.value.paidAmount;
              registrationCostSummary.value = _objectSpread2(_objectSpread2({}, registrationCostSummary.value), _objectSpread2(_objectSpread2({}, value), {}, {
                remainingAmount,
                minimumRemainingAmount,
                paidAmount
              }));
            }
          });
          onMounted(() => {
            if (config.loginRequiredToRegister && !currentPerson.value) {
              store.redirectToLogin();
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [unref(notFound) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1, createElementVNode("p", null, toDisplayString(unref(notFoundMessage)), 1)]),
              _: 1
            })) : unref(mustLogin) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_2, _hoisted_3]),
              _: 1
            })) : unref(isUnauthorized) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_4, _hoisted_5]),
              _: 1
            })) : unref(isInvalidGateway) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 3,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_6, _hoisted_7]),
              _: 1
            })) : unref(preventNewRegistration) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 4,
              class: "text-left",
              alertType: "warning"
            }, {
              default: withCtx(() => [createElementVNode("strong", null, toDisplayString(unref(registrationTermTitleCase)) + " Full", 1), createElementVNode("p", null, " There are not any more " + toDisplayString(unref(registrationTermPlural)) + " available for " + toDisplayString(unref(config).instanceName) + ". ", 1)]),
              _: 1
            })) : (openBlock(), createElementBlock(Fragment, {
              key: 5
            }, [unref(currentStep) !== steps.intro ? (openBlock(), createElementBlock("h1", {
              key: 0,
              innerHTML: unref(stepTitleHtml)
            }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true), unref(config).hideProgressBar !== true && unref(currentStep) !== steps.success ? (openBlock(), createBlock(unref(ProgressTracker), {
              key: 1,
              items: unref(progressTrackerItems),
              currentIndex: unref(progressTrackerIndex)
            }, {
              aside: withCtx(() => [secondsBeforeExpiration.value >= 0 ? withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [hasSessionRenewalSuccess.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "success",
                class: "m-0 pt-3",
                style: {
                  "position": "absolute",
                  "top": "0",
                  "left": "0",
                  "right": "0",
                  "bottom": "0"
                }
              }, {
                default: withCtx(() => [_hoisted_10]),
                _: 1
              })) : createCommentVNode("v-if", true), _hoisted_11, createElementVNode("p", _hoisted_12, [createVNode(unref(CountdownTimer), {
                modelValue: secondsBeforeExpiration.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => secondsBeforeExpiration.value = $event)
              }, null, 8, ["modelValue"])])], 512)), [[vShow, secondsBeforeExpiration.value <= 30 * 60]]) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["items", "currentIndex"])) : createCommentVNode("v-if", true), unref(currentStep) === steps.intro ? (openBlock(), createBlock(unref(script$f), {
              key: 2,
              onNext: onIntroNext
            })) : unref(currentStep) === steps.registrationStartForm ? (openBlock(), createBlock(unref(script$7), {
              key: 3,
              onNext: onRegistrationStartNext,
              onPrevious: onRegistrationStartPrevious
            })) : unref(currentStep) === steps.perRegistrantForms ? (openBlock(), createBlock(unref(script$9), {
              key: 4,
              onNext: onRegistrantNext,
              onPrevious: onRegistrantPrevious
            })) : unref(currentStep) === steps.registrationEndForm ? (openBlock(), createBlock(unref(script$8), {
              key: 5,
              onNext: onRegistrationEndNext,
              onPrevious: onRegistrationEndPrevious
            })) : unref(currentStep) === steps.review ? (openBlock(), createBlock(unref(script$1), {
              key: 6,
              onNext: onSummaryNext,
              onPrevious: onSummaryPrevious
            })) : unref(currentStep) === steps.payment ? (openBlock(), createBlock(unref(script$e), {
              key: 7,
              onNext: onPaymentNext,
              onPrevious: onPaymentPrevious
            })) : unref(currentStep) === steps.success ? (openBlock(), createBlock(unref(script$5), {
              key: 8
            })) : (openBlock(), createBlock(unref(NotificationBox), {
              key: 9,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode("Invalid State: '" + toDisplayString(unref(currentStep)) + "'", 1)]),
              _: 1
            })), createVNode(unref(script$6), {
              isSessionExpired: unref(isSessionExpired),
              onSuccess: onSessionRenewalSuccess
            }, null, 8, ["isSessionExpired"])], 64))]);
          };
        }
      }));

      script.__file = "src/Event/registrationEntry.obs";

    })
  };
}));
//# sourceMappingURL=registrationEntry.obs.js.map
