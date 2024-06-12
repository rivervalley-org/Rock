System.register(['vue', '@Obsidian/Enums/Blocks/Crm/FamilyPreRegistration/communicationPreference', '@Obsidian/Enums/Crm/gender', '@Obsidian/Utility/booleanUtils', '@Obsidian/Utility/dateKey', '@Obsidian/Utility/guid', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/birthdayPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/ethnicityPicker.obs', '@Obsidian/Controls/genderDropDownList.obs', '@Obsidian/Controls/gradePicker.obs', '@Obsidian/Controls/imageEditor.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/racePicker.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/staticFormControl.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/SystemGuids/definedType', '@Obsidian/Utility/block', '@Obsidian/Utility/stringUtils', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Utility/http'], (function (exports) {
  'use strict';
  var reactive, computed, toRefs, pushScopeId, popScopeId, createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, toDisplayString, createCommentVNode, createBlock, renderList, createTextVNode, nextTick, withDirectives, isRef, vShow, CommunicationPreference, CommunicationPreferenceDescription, Gender, asBooleanOrNull, getMonth, getDay, getYear, emptyGuid, toGuidOrNull, toNumberOrNull, AttributeValuesContainer, BirthdayPicker, CheckBox, DefinedValuePicker, DropDownList, EmailBox, EthnicityPicker, GenderDropDownList, GradePicker, ImageEditor, PhoneNumberBox, RacePicker, RadioButtonList, RockButton, StaticFormControl, TextBox, BinaryFiletype, DefinedType, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, toTitleCase, NotificationBox, AddressControl, CampusPicker, DatePicker, Panel, RockForm, useHttp;
  return {
    setters: [function (module) {
      reactive = module.reactive;
      computed = module.computed;
      toRefs = module.toRefs;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createBlock = module.createBlock;
      renderList = module.renderList;
      createTextVNode = module.createTextVNode;
      nextTick = module.nextTick;
      withDirectives = module.withDirectives;
      isRef = module.isRef;
      vShow = module.vShow;
    }, function (module) {
      CommunicationPreference = module.CommunicationPreference;
      CommunicationPreferenceDescription = module.CommunicationPreferenceDescription;
    }, function (module) {
      Gender = module.Gender;
    }, function (module) {
      asBooleanOrNull = module.asBooleanOrNull;
    }, function (module) {
      getMonth = module.getMonth;
      getDay = module.getDay;
      getYear = module.getYear;
    }, function (module) {
      emptyGuid = module.emptyGuid;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      BirthdayPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      EthnicityPicker = module["default"];
    }, function (module) {
      GenderDropDownList = module["default"];
    }, function (module) {
      GradePicker = module["default"];
    }, function (module) {
      ImageEditor = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      RacePicker = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      toTitleCase = module.toTitleCase;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
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

      function convertPersonToPersonRequest(person) {
        var _person$communication;
        var defaults = createPersonRequest();
        return _objectSpread2(_objectSpread2({}, person), {}, {
          guid: (person === null || person === void 0 ? void 0 : person.guid) || emptyGuid,
          attributeValues: (person === null || person === void 0 ? void 0 : person.attributeValues) || defaults.attributeValues,
          communicationPreference: (_person$communication = person === null || person === void 0 ? void 0 : person.communicationPreference) !== null && _person$communication !== void 0 ? _person$communication : defaults.communicationPreference,
          email: (person === null || person === void 0 ? void 0 : person.email) || defaults.email,
          firstName: (person === null || person === void 0 ? void 0 : person.firstName) || defaults.firstName,
          gender: (person === null || person === void 0 ? void 0 : person.gender) || defaults.gender,
          isFirstNameReadOnly: (person === null || person === void 0 ? void 0 : person.isFirstNameReadOnly) || defaults.isFirstNameReadOnly,
          isLastNameReadOnly: (person === null || person === void 0 ? void 0 : person.isLastNameReadOnly) || defaults.isLastNameReadOnly,
          lastName: (person === null || person === void 0 ? void 0 : person.lastName) || defaults.lastName,
          mobilePhone: (person === null || person === void 0 ? void 0 : person.mobilePhone) || defaults.mobilePhone,
          mobilePhoneCountryCode: (person === null || person === void 0 ? void 0 : person.mobilePhoneCountryCode) || defaults.mobilePhoneCountryCode,
          isMessagingEnabled: (person === null || person === void 0 ? void 0 : person.isMessagingEnabled) || defaults.isMessagingEnabled
        });
      }
      function convertPersonToChildRequest(person) {
        var request = convertPersonToPersonRequest(person);
        var defaults = createChildRequest();
        return _objectSpread2(_objectSpread2({}, request), {}, {
          familyRoleGuid: request.familyRoleGuid || defaults.familyRoleGuid
        });
      }
      function createPersonRequest() {
        return {
          guid: emptyGuid,
          attributeValues: {},
          communicationPreference: CommunicationPreference.None,
          email: "",
          firstName: "",
          gender: Gender.Unknown,
          isFirstNameReadOnly: false,
          isLastNameReadOnly: false,
          lastName: "",
          mobilePhone: "",
          mobilePhoneCountryCode: "",
          isMessagingEnabled: false
        };
      }
      function createPersonViewModel(person) {
        return reactive(_objectSpread2(_objectSpread2({}, toRefs(person.value)), {}, {
          communicationPreferenceStringValue: computed({
            get() {
              var _person$value$communi;
              return (_person$value$communi = person.value.communicationPreference) === null || _person$value$communi === void 0 ? void 0 : _person$value$communi.toString();
            },
            set(newValue) {
              person.value.communicationPreference = CommunicationPreference[CommunicationPreferenceDescription[Number(newValue)]];
            }
          }),
          ethnicityListItemBag: createListItemBagWrapper(person, "ethnicityDefinedValueGuid"),
          genderStringValue: computed({
            get() {
              return person.value.gender.toString();
            },
            set(newValue) {
              person.value.gender = Number(newValue);
            }
          }),
          gradeListItemBag: createListItemBagWrapper(person, "gradeDefinedValueGuid"),
          maritalStatusListItemBag: createListItemBagWrapper(person, "maritalStatusDefinedValueGuid"),
          profileImageListItemBag: createListItemBagWrapper(person, "profilePhotoGuid"),
          raceListItemBag: createListItemBagWrapper(person, "raceDefinedValueGuid"),
          suffixListItemBag: createListItemBagWrapper(person, "suffixDefinedValueGuid")
        }));
      }
      function createChildRequest() {
        return {
          guid: emptyGuid,
          attributeValues: {},
          communicationPreference: CommunicationPreference.None,
          email: "",
          familyRoleGuid: emptyGuid,
          firstName: "",
          gender: Gender.Unknown,
          isFirstNameReadOnly: false,
          isLastNameReadOnly: false,
          lastName: "",
          mobilePhone: "",
          mobilePhoneCountryCode: "",
          isMessagingEnabled: false
        };
      }
      function createListItemBagWrapper(r, p) {
        return computed({
          get() {
            var value = r.value;
            return {
              value: value && value[p] && typeof value[p]["toString"] === "function" ? value[p].toString() : undefined
            };
          },
          set(newValue) {
            try {
              var value = r.value;
              if (value) {
                Object.assign(value, {
                  [p]: newValue === null || newValue === void 0 ? void 0 : newValue.value
                });
              }
            } catch (e) {}
          }
        });
      }
      function getNumberAsOrdinalString(numb) {
        var ordinalStrings = {
          1: "first",
          2: "second",
          3: "third",
          4: "fourth",
          5: "fifth",
          6: "sixth",
          7: "seventh",
          8: "eighth",
          9: "ninth",
          10: "tenth",
          11: "eleventh",
          12: "twelfth",
          13: "thirteenth",
          14: "fourteenth",
          15: "fifteenth",
          16: "sixteenth",
          17: "seventeenth",
          18: "eighteenth",
          19: "nineteenth",
          20: "twentieth",
          30: "thirtieth",
          40: "fortieth",
          50: "fiftieth",
          60: "sixtieth",
          70: "seventieth",
          80: "eightieth",
          90: "ninetieth",
          100: "one hundredth",
          1000: "one thousandth",
          1000000: "one millionth",
          1000000000: "one trillionth",
          1000000000000: "one quadrillionth"
        };
        var numberStrings = {
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six",
          7: "seven",
          8: "eight",
          9: "nine",
          10: "ten",
          11: "eleven",
          12: "twelve",
          13: "thirteen",
          14: "fourteen",
          15: "fifteen",
          16: "sixteen",
          17: "seventeen",
          18: "eighteen",
          19: "nineteen",
          20: "twenty",
          30: "thirty",
          40: "forty",
          50: "fifty",
          60: "sixty",
          70: "seventy",
          80: "eighty",
          90: "ninety",
          100: "one hundred",
          1000: "one thousand",
          1000000: "one million",
          1000000000: "one billion",
          1000000000000: "one trillion",
          1000000000000000: "one quadrillion"
        };
        var oneHundred = 100;
        var oneThousand = 1000;
        var oneMillion = 1000000;
        var oneBillion = 1000000000;
        var oneTrillion = 1000000000000;
        var oneQuadrillion = 1000000000000000;
        if (ordinalStrings[numb]) {
          return ordinalStrings[numb];
        }
        function getQuadrillionth(numb) {
          var trillionth = getTrillionth(numb);
          if (numb >= oneQuadrillion) {
            var quadrillions = getHundredsString(Number(numb.toString().slice(-18, -15)));
            if (trillionth) {
              return "".concat(quadrillions, " quadrillion ").concat(trillionth);
            } else {
              return "".concat(quadrillions, " quadrillionth");
            }
          }
          return trillionth;
        }
        function getTrillionth(numb) {
          numb = Number(numb.toString().slice(-15));
          var billionth = getBillionth(numb);
          if (numb >= oneTrillion) {
            var trillions = getHundredsString(Number(numb.toString().slice(-15, -12)));
            if (billionth) {
              return "".concat(trillions, " trillion ").concat(billionth);
            } else {
              return "".concat(trillions, " trillionth");
            }
          }
          return billionth;
        }
        function getBillionth(numb) {
          numb = Number(numb.toString().slice(-12));
          var millionth = getMillionth(numb);
          if (numb >= oneBillion) {
            var billions = getHundredsString(Number(numb.toString().slice(-12, -9)));
            if (millionth) {
              return "".concat(billions, " billion ").concat(millionth);
            } else {
              return "".concat(billions, " billionth");
            }
          }
          return millionth;
        }
        function getMillionth(numb) {
          numb = Number(numb.toString().slice(-9));
          var thousandths = getThousandths(numb);
          if (numb >= oneMillion) {
            var millions = getHundredsString(Number(numb.toString().slice(-9, -6)));
            if (thousandths) {
              return "".concat(millions, " million ").concat(thousandths);
            } else {
              return "".concat(millions, " millionth");
            }
          }
          return thousandths;
        }
        function getThousandths(numb) {
          numb = Number(numb.toString().slice(-6));
          var hundredths = getHundredths(numb);
          if (numb >= oneThousand) {
            var thousands = getHundredsString(Number(numb.toString().slice(-6, -3)));
            if (hundredths) {
              return "".concat(thousands, " thousand ").concat(hundredths);
            } else {
              return "".concat(thousands, " thousandths");
            }
          }
          return hundredths;
        }
        function getHundredths(numb) {
          numb = Number(numb.toString().slice(-3));
          if (ordinalStrings[numb]) {
            return ordinalStrings[numb];
          }
          var tenths = getTenths(numb);
          if (numb >= oneHundred) {
            var hundreds = Number(numb.toString().slice(-3, -2));
            if (tenths) {
              return "".concat(numberStrings[hundreds], " hundred ").concat(tenths);
            } else {
              return "".concat(numberStrings[hundreds], " hundredth");
            }
          }
          return tenths;
        }
        function getHundredsString(numb) {
          numb = Number(numb.toString().slice(-3));
          if (numberStrings[numb]) {
            return numberStrings[numb];
          }
          var tens = getTensString(numb);
          if (numb >= oneHundred) {
            var hundreds = Number(numb.toString().slice(-3, -2));
            if (tens) {
              return "".concat(numberStrings[hundreds], " hundred ").concat(tens);
            } else {
              return "".concat(numberStrings[hundreds], " hundred");
            }
          }
          return tens;
        }
        function getTensString(numb) {
          numb = Number(numb.toString().slice(-2));
          if (numberStrings[numb]) {
            return numberStrings[numb];
          }
          var ones = getOnesString(numb);
          if (numb >= 20) {
            var tens = Number(numb.toString().slice(-2, -1));
            if (ones) {
              return "".concat(numberStrings[tens * 10], "-").concat(ones);
            } else {
              return numberStrings[tens * 10];
            }
          }
          return ones;
        }
        function getTenths(numb) {
          numb = Number(numb.toString().slice(-2));
          if (ordinalStrings[numb]) {
            return ordinalStrings[numb];
          }
          var oneths = getOneths(numb);
          if (numb >= 20) {
            var tens = Number(numb.toString().slice(-2, -1));
            if (oneths) {
              return "".concat(numberStrings[tens * 10], "-").concat(oneths);
            } else {
              return ordinalStrings[tens * 10];
            }
          }
          return oneths;
        }
        function getOneths(numb) {
          numb = Number(numb.toString().slice(-1));
          return ordinalStrings[numb];
        }
        function getOnesString(numb) {
          numb = Number(numb.toString().slice(-1));
          return numberStrings[numb];
        }
        return getQuadrillionth(numb);
      }
      function required(value, params) {
        var options = params && params.length >= 1 && typeof params[0] === "string" ? JSON.parse(params[0]) : {};
        if (typeof value === "string") {
          var allowEmptyString = !!options.allowEmptyString;
          if (!allowEmptyString && !(value !== null && value !== void 0 && value.trim())) {
            return "is required";
          }
          return true;
        }
        if (typeof value === "number" && value === 0) {
          return "is required";
        }
        if (Array.isArray(value) && value.length === 0) {
          return "is required";
        }
        if (typeof value === "boolean") {
          return true;
        }
        if (!value) {
          return "is required";
        }
        return true;
      }
      function monthAndDayRequiredRule(value, _params) {
        if (typeof value !== "string") {
          return true;
        }
        if (!getMonth(value)) {
          return "must have a month";
        }
        if (!getDay(value)) {
          return "must have a day";
        }
        return true;
      }
      function monthAndDayAndYearRequiredRule(value, _params) {
        if (typeof value !== "string") {
          return true;
        }
        if (!getYear(value)) {
          return "must have a year";
        }
        if (!getMonth(value)) {
          return "must have a month";
        }
        if (!getDay(value)) {
          return "must have a day";
        }
        return true;
      }
      function convertToNumber(value) {
        if (typeof value === "number") {
          return value;
        }
        if (typeof value === "string") {
          return toNumberOrNull(value) || 0;
        }
        return 0;
      }
      function isNumeric(value) {
        if (typeof value === "number") {
          return true;
        }
        if (typeof value === "string") {
          return toNumberOrNull(value) !== null;
        }
        return false;
      }
      function createNotEqualRule(compare) {
        return (value, params) => {
          if (isNumeric(value) && isNumeric(compare)) {
            if (convertToNumber(value) !== convertToNumber(compare)) {
              return true;
            }
          } else if (typeof value === "boolean") {
            if (value !== asBooleanOrNull(compare)) {
              return true;
            }
          } else if (value !== compare) {
            return true;
          }
          return "must not equal ".concat(compare);
        };
      }
      function createRuleWithSuffix(rule, suffix) {
        return (value, params) => {
          var result = rule(value, params);
          if (typeof result === "string" && result && suffix) {
            return "".concat(result, " ").concat(suffix);
          }
          return result;
        };
      }
      function createRuleWithReplacement(rule, replacement) {
        return (value, params) => {
          var result = rule(value, params);
          if (typeof result === "string" && result && replacement) {
            return replacement;
          }
          return result;
        };
      }

      var _withScopeId = n => (pushScopeId("data-v-28340dee"), n = n(), popScopeId(), n);
      var _hoisted_1$2 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1));
      var _hoisted_2$2 = {
        class: "child-caption"
      };
      var _hoisted_3$2 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-sm-6"
      };
      var _hoisted_5$1 = _withScopeId(() => createElementVNode("div", {
        class: "col-sm-6"
      }, null, -1));
      var _hoisted_6$1 = {
        class: "row clearfix"
      };
      var _hoisted_7$1 = {
        class: "col-sm-6"
      };
      var _hoisted_8$1 = {
        class: "col-sm-6"
      };
      var _hoisted_9$1 = {
        class: "row clearfix"
      };
      var _hoisted_10$1 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_11$1 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_12$1 = {
        class: "row clearfix"
      };
      var _hoisted_13$1 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_14$1 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_15$1 = {
        class: "row clearfix"
      };
      var _hoisted_16$1 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_17$1 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_18$1 = {
        class: "row clearfix"
      };
      var _hoisted_19$1 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_20$1 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_21$1 = {
        class: "row clearfix"
      };
      var _hoisted_22$1 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_23$1 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_24$1 = {
        key: 0,
        class: "row"
      };
      var _hoisted_25$1 = {
        class: "col-sm-6"
      };
      var _hoisted_26$1 = _withScopeId(() => createElementVNode("div", {
        class: "col-sm-6"
      }, null, -1));
      var _hoisted_27$1 = {
        class: "row"
      };
      var script$2 = defineComponent({
        name: 'preRegistrationChild.partial',
        props: {
          childNumber: {
            type: Number,
            required: true
          },
          child: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["remove"],
        setup(__props) {
          var props = __props;
          var config = useConfigurationValues();
          var childRequest = ref(props.child);
          var child = createPersonViewModel(childRequest);
          var caption = computed(() => {
            return toTitleCase("".concat(getNumberAsOrdinalString(props.childNumber), " Child"));
          });
          var requiredRules = computed(() => [createRuleWithSuffix(required, "for ".concat(caption.value)), "required"]);
          var requiredGenderRules = computed(() => [createRuleWithSuffix(required, "for ".concat(caption.value)), createRuleWithReplacement(createNotEqualRule(Gender.Unknown), "is required for ".concat(caption.value)), "required"]);
          var requiredBirthdayRules = computed(() => [createRuleWithSuffix(monthAndDayAndYearRequiredRule, "for ".concat(caption.value)), "required"]);
          watch(() => props.child, () => {
            childRequest.value = props.child;
          });
          return (_ctx, _cache) => {
            var _unref$childRelations, _unref$childGenderFie, _unref$childSuffixFie, _unref$childBirthDate, _unref$childGradeFiel, _unref$childMobilePho, _unref$displaySmsOptI, _unref$displaySmsOptI2, _unref$displaySmsOptI3, _unref$childEmailFiel, _unref$childCommunica, _unref$childRaceField, _unref$childEthnicity, _unref$childProfilePh;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(RockButton), {
              btnSize: "xs",
              btnType: "danger",
              class: "pull-right",
              disabled: __props.disabled,
              isSquare: true,
              onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit('remove', unref(child)))
            }, {
              default: withCtx(() => [_hoisted_1$2]),
              _: 1
            }, 8, ["disabled"]), createElementVNode("h4", _hoisted_2$2, toDisplayString(unref(caption)), 1), createElementVNode("div", _hoisted_3$2, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(DropDownList), {
              modelValue: unref(child).familyRoleGuid,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => unref(child).familyRoleGuid = $event),
              disabled: __props.disabled,
              items: (_unref$childRelations = unref(config).childRelationshipTypes) !== null && _unref$childRelations !== void 0 ? _unref$childRelations : undefined,
              label: "Relationship to Adult",
              rules: unref(requiredRules),
              showBlankItem: false
            }, null, 8, ["modelValue", "disabled", "items", "rules"])]), _hoisted_5$1, createCommentVNode(" filler/blocker column ")]), createElementVNode("div", _hoisted_6$1, [createElementVNode("div", _hoisted_7$1, [unref(child).isFirstNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
              key: 0,
              label: "First Name",
              modelValue: unref(child).firstName
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
              key: 1,
              modelValue: unref(child).firstName,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => unref(child).firstName = $event),
              disabled: __props.disabled,
              label: "First Name",
              rules: unref(requiredRules)
            }, null, 8, ["modelValue", "disabled", "rules"]))]), createElementVNode("div", _hoisted_8$1, [unref(child).isLastNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
              key: 0,
              label: "Last Name",
              modelValue: unref(child).lastName
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
              key: 1,
              modelValue: unref(child).lastName,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => unref(child).lastName = $event),
              disabled: __props.disabled,
              label: "Last Name",
              rules: unref(requiredRules)
            }, null, 8, ["modelValue", "disabled", "rules"]))])]), createElementVNode("div", _hoisted_9$1, [(_unref$childGenderFie = unref(config).childGenderField) !== null && _unref$childGenderFie !== void 0 && _unref$childGenderFie.isShown ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createVNode(unref(GenderDropDownList), {
              modelValue: unref(child).genderStringValue,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => unref(child).genderStringValue = $event),
              disabled: __props.disabled,
              label: "Gender",
              rules: unref(config).childGenderField.isRequired ? unref(requiredGenderRules) : ''
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$childSuffixFie = unref(config).childSuffixField) !== null && _unref$childSuffixFie !== void 0 && _unref$childSuffixFie.isShown ? (openBlock(), createElementBlock("div", _hoisted_11$1, [createVNode(unref(DefinedValuePicker), {
              modelValue: unref(child).suffixListItemBag,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => unref(child).suffixListItemBag = $event),
              definedTypeGuid: unref(DefinedType).PersonSuffix,
              disabled: __props.disabled,
              label: "Suffix",
              lazyMode: "lazy",
              showBlankItem: true
            }, null, 8, ["modelValue", "definedTypeGuid", "disabled"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_12$1, [(_unref$childBirthDate = unref(config).childBirthDateField) !== null && _unref$childBirthDate !== void 0 && _unref$childBirthDate.isShown ? (openBlock(), createElementBlock("div", _hoisted_13$1, [createVNode(unref(BirthdayPicker), {
              modelValue: unref(child).birthDate,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => unref(child).birthDate = $event),
              disabled: __props.disabled,
              label: "Birth Date",
              rules: unref(config).childBirthDateField.isRequired ? unref(requiredBirthdayRules) : ''
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$childGradeFiel = unref(config).childGradeField) !== null && _unref$childGradeFiel !== void 0 && _unref$childGradeFiel.isShown ? (openBlock(), createElementBlock("div", _hoisted_14$1, [createVNode(unref(GradePicker), {
              modelValue: unref(child).gradeListItemBag,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => unref(child).gradeListItemBag = $event),
              disabled: __props.disabled,
              label: "Grade",
              lazyMode: "lazy",
              useGuidAsValue: true,
              rules: unref(config).childGradeField.isRequired ? unref(requiredRules) : '',
              showBlankItem: true
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_15$1, [(_unref$childMobilePho = unref(config).childMobilePhoneField) !== null && _unref$childMobilePho !== void 0 && _unref$childMobilePho.isShown ? (openBlock(), createElementBlock("div", _hoisted_16$1, [createVNode(unref(PhoneNumberBox), {
              modelValue: unref(child).mobilePhone,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => unref(child).mobilePhone = $event),
              countryCode: unref(child).mobilePhoneCountryCode,
              "onUpdate:countryCode": _cache[9] || (_cache[9] = $event => unref(child).mobilePhoneCountryCode = $event),
              disabled: __props.disabled,
              label: "Mobile Phone",
              rules: unref(config).childMobilePhoneField.isRequired ? unref(requiredRules) : ''
            }, null, 8, ["modelValue", "countryCode", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$displaySmsOptI = unref(config).displaySmsOptIn) !== null && _unref$displaySmsOptI !== void 0 && _unref$displaySmsOptI.isShowChildren ? (openBlock(), createElementBlock("div", _hoisted_17$1, [createVNode(unref(CheckBox), {
              modelValue: unref(child).isMessagingEnabled,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => unref(child).isMessagingEnabled = $event),
              label: "",
              disabled: __props.disabled,
              text: (_unref$displaySmsOptI2 = (_unref$displaySmsOptI3 = unref(config).displaySmsOptIn) === null || _unref$displaySmsOptI3 === void 0 ? void 0 : _unref$displaySmsOptI3.smsOptInDisplayText) !== null && _unref$displaySmsOptI2 !== void 0 ? _unref$displaySmsOptI2 : ''
            }, null, 8, ["modelValue", "disabled", "text"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_18$1, [(_unref$childEmailFiel = unref(config).childEmailField) !== null && _unref$childEmailFiel !== void 0 && _unref$childEmailFiel.isShown ? (openBlock(), createElementBlock("div", _hoisted_19$1, [createVNode(unref(EmailBox), {
              modelValue: unref(child).email,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => unref(child).email = $event),
              disabled: __props.disabled,
              label: "Email",
              rules: unref(config).childEmailField.isRequired ? unref(requiredRules) : ''
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$childCommunica = unref(config).childCommunicationPreferenceField) !== null && _unref$childCommunica !== void 0 && _unref$childCommunica.isShown ? (openBlock(), createElementBlock("div", _hoisted_20$1, [createVNode(unref(RadioButtonList), {
              modelValue: unref(child).communicationPreferenceStringValue,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => unref(child).communicationPreferenceStringValue = $event),
              disabled: __props.disabled,
              horizontal: true,
              items: [{
                text: 'Email',
                value: unref(CommunicationPreference).Email.toString()
              }, {
                text: 'SMS',
                value: unref(CommunicationPreference).SMS.toString()
              }],
              label: "Communication Preference",
              rules: unref(config).childCommunicationPreferenceField.isRequired ? unref(requiredRules) : ''
            }, null, 8, ["modelValue", "disabled", "items", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_21$1, [(_unref$childRaceField = unref(config).childRaceField) !== null && _unref$childRaceField !== void 0 && _unref$childRaceField.isShown ? (openBlock(), createElementBlock("div", _hoisted_22$1, [createVNode(unref(RacePicker), {
              modelValue: unref(child).raceListItemBag,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => unref(child).raceListItemBag = $event),
              disabled: __props.disabled,
              rules: unref(config).childRaceField.isRequired ? unref(requiredRules) : '',
              showBlankItem: true
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$childEthnicity = unref(config).childEthnicityField) !== null && _unref$childEthnicity !== void 0 && _unref$childEthnicity.isShown ? (openBlock(), createElementBlock("div", _hoisted_23$1, [createVNode(unref(EthnicityPicker), {
              modelValue: unref(child).ethnicityListItemBag,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => unref(child).ethnicityListItemBag = $event),
              disabled: __props.disabled,
              rules: unref(config).childEthnicityField.isRequired ? unref(requiredRules) : '',
              showBlankItem: true
            }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), (_unref$childProfilePh = unref(config).childProfilePhotoField) !== null && _unref$childProfilePh !== void 0 && _unref$childProfilePh.isShown ? (openBlock(), createElementBlock("div", _hoisted_24$1, [createElementVNode("div", _hoisted_25$1, [createVNode(unref(ImageEditor), {
              modelValue: unref(child).profileImageListItemBag,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => unref(child).profileImageListItemBag = $event),
              binaryFileTypeGuid: unref(BinaryFiletype).PersonImage,
              disabled: __props.disabled,
              label: "Profile Photo",
              rules: unref(config).childProfilePhotoField.isRequired ? unref(requiredRules) : ''
            }, null, 8, ["modelValue", "binaryFileTypeGuid", "disabled", "rules"])]), _hoisted_26$1, createCommentVNode(" filler/blocker column ")])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_27$1, [unref(config).childAttributes != null ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
              key: 0,
              modelValue: unref(child).attributeValues,
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => unref(child).attributeValues = $event),
              attributes: unref(config).childAttributes,
              columnBreakpoint: "sm",
              displayWithinExistingRow: true,
              isEditMode: "",
              numberOfColumns: 2,
              showCategoryLabel: true
            }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true)])], 64);
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

      var css_248z = ".child-caption[data-v-28340dee]{text-transform:capitalize}";
      styleInject(css_248z);

      script$2.__scopeId = "data-v-28340dee";
      script$2.__file = "src/Crm/FamilyPreRegistration/preRegistrationChild.partial.obs";

      var _hoisted_1$1 = createElementVNode("hr", null, null, -1);
      var _hoisted_2$1 = createElementVNode("i", {
        class: "fa fa-user"
      }, null, -1);
      var _hoisted_3$1 = createElementVNode("span", null, " Add Child", -1);
      var script$1 = defineComponent({
        name: 'preRegistrationChildren.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          lastName: {
            type: String,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["addChild", "removeChild"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var addChildErrors = ref([]);
          function onAddChildClicked() {
            return _onAddChildClicked.apply(this, arguments);
          }
          function _onAddChildClicked() {
            _onAddChildClicked = _asyncToGenerator(function* () {
              addChildErrors.value = [];
              var result = yield invokeBlockAction("GetNewChild");
              if (result !== null && result !== void 0 && result.isSuccess && result.data) {
                var _child = convertPersonToChildRequest(result.data);
                _child.lastName = props.lastName;
                emit("addChild", _child);
              } else {
                addChildErrors.value = [(result === null || result === void 0 ? void 0 : result.errorMessage) || "An unexpected error occurred while adding a child. Please try again."];
              }
            });
            return _onAddChildClicked.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.modelValue, (child, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: child.guid
              }, [createVNode(unref(script$2), {
                childNumber: index + 1,
                child: child,
                disabled: __props.disabled,
                onRemove: $event => _ctx.$emit('removeChild', child)
              }, null, 8, ["childNumber", "child", "disabled", "onRemove"]), _hoisted_1$1], 64);
            }), 128)), addChildErrors.value.length ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger",
              title: "Add Child"
            }, {
              default: withCtx(() => [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(addChildErrors.value, error => {
                return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
              }), 256))])]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
              btnSize: "xs",
              btnType: "default",
              class: "add pull-right",
              disabled: __props.disabled,
              onClick: onAddChildClicked
            }, {
              default: withCtx(() => [_hoisted_2$1, _hoisted_3$1]),
              _: 1
            }, 8, ["disabled"])], 64);
          };
        }
      });

      script$1.__file = "src/Crm/FamilyPreRegistration/preRegistrationChildren.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        key: 1,
        class: "col-md-5"
      };
      var _hoisted_3 = {
        key: 2,
        class: "col-md-7"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-sm-6"
      };
      var _hoisted_6 = {
        class: "col-sm-6"
      };
      var _hoisted_7 = createElementVNode("h4", {
        class: "heading-individual"
      }, "First Adult", -1);
      var _hoisted_8 = {
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-sm-6"
      };
      var _hoisted_10 = {
        class: "col-sm-6"
      };
      var _hoisted_11 = {
        class: "row"
      };
      var _hoisted_12 = {
        class: "col-sm-6"
      };
      var _hoisted_13 = {
        class: "col-sm-6"
      };
      var _hoisted_14 = {
        class: "row"
      };
      var _hoisted_15 = {
        class: "col-sm-6"
      };
      var _hoisted_16 = {
        class: "col-sm-6"
      };
      var _hoisted_17 = {
        class: "row"
      };
      var _hoisted_18 = {
        class: "col-sm-6"
      };
      var _hoisted_19 = {
        class: "col-sm-6"
      };
      var _hoisted_20 = {
        class: "row"
      };
      var _hoisted_21 = {
        class: "col-sm-6"
      };
      var _hoisted_22 = {
        class: "col-sm-6"
      };
      var _hoisted_23 = {
        class: "row"
      };
      var _hoisted_24 = {
        class: "col-sm-6"
      };
      var _hoisted_25 = {
        class: "col-sm-6"
      };
      var _hoisted_26 = {
        class: "row"
      };
      var _hoisted_27 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_28 = {
        class: "row"
      };
      var _hoisted_29 = {
        class: "row mt-3"
      };
      var _hoisted_30 = {
        class: "col-md-12"
      };
      var _hoisted_31 = {
        key: 0
      };
      var _hoisted_32 = {
        class: "well card-createaccount"
      };
      var _hoisted_33 = {
        class: "heading-createaccount"
      };
      var _hoisted_34 = {
        class: "row"
      };
      var _hoisted_35 = {
        class: "col-md-6"
      };
      var _hoisted_36 = createElementVNode("dt", null, null, -1);
      var _hoisted_37 = createTextVNode("The selected username is available.");
      var _hoisted_38 = createTextVNode("The username you selected is already in use.");
      var _hoisted_39 = {
        class: "col-md-6"
      };
      var _hoisted_40 = createElementVNode("hr", null, null, -1);
      var _hoisted_41 = createElementVNode("h4", {
        class: "heading-individual"
      }, "Second Adult", -1);
      var _hoisted_42 = {
        class: "adult-2-fields"
      };
      var _hoisted_43 = {
        class: "row"
      };
      var _hoisted_44 = {
        class: "col-sm-6"
      };
      var _hoisted_45 = {
        class: "col-sm-6"
      };
      var _hoisted_46 = {
        class: "row"
      };
      var _hoisted_47 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_48 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_49 = {
        class: "row"
      };
      var _hoisted_50 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_51 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_52 = {
        class: "row"
      };
      var _hoisted_53 = {
        class: "col-sm-6"
      };
      var _hoisted_54 = {
        class: "col-sm-6"
      };
      var _hoisted_55 = {
        class: "row"
      };
      var _hoisted_56 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_57 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_58 = {
        class: "row"
      };
      var _hoisted_59 = {
        class: "col-sm-6"
      };
      var _hoisted_60 = {
        class: "col-sm-6"
      };
      var _hoisted_61 = {
        class: "row"
      };
      var _hoisted_62 = {
        key: 0,
        class: "col-sm-6"
      };
      var _hoisted_63 = {
        class: "row"
      };
      var _hoisted_64 = createElementVNode("hr", null, null, -1);
      var _hoisted_65 = {
        class: "row"
      };
      var _hoisted_66 = {
        class: "col-sm-6"
      };
      var _hoisted_67 = {
        class: "col-sm-6"
      };
      var _hoisted_68 = createTextVNode("Save");
      var _hoisted_69 = createTextVNode("Clear");
      var script = exports('default', defineComponent({
        name: 'familyPreRegistration',
        setup(__props) {
          var _config$address, _config$children$map, _config$children, _config$visitDateFiel;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var http = useHttp();
          var errorNotificationBox = ref();
          var formErrorsScrollTarget = ref();
          var shouldScrollToFormErrors = ref(false);
          var isSaving = ref(false);
          var isNavigating = ref(false);
          var errorTitle = ref();
          var errors = ref(config.errorMessage ? [config.errorMessage] : []);
          var isCampusPickerVisible = ref(false);
          var internalCampusListItemBag = ref(config.campusGuid ? {
            value: config.campusGuid
          } : undefined);
          var plannedVisitDate = ref("");
          var scheduleGuidOrEmptyString = ref("");
          var scheduleDateItems = ref([]);
          var isUsernameAvailable = ref();
          var confirmPassword = ref("");
          var address = ref((_config$address = config.address) !== null && _config$address !== void 0 ? _config$address : undefined);
          var fullName = ref("");
          var familyAttributeValues = ref(config.familyAttributeValues || {});
          var createAccount = ref({
            username: "",
            password: ""
          });
          var adult1Request = ref(convertPersonToPersonRequest(config.adult1));
          var adult2Request = ref(convertPersonToPersonRequest(config.adult2));
          var children = ref((_config$children$map = (_config$children = config.children) === null || _config$children === void 0 ? void 0 : _config$children.map(person => convertPersonToChildRequest(person))) !== null && _config$children$map !== void 0 ? _config$children$map : []);
          var adult1 = createPersonViewModel(adult1Request);
          var adult2 = createPersonViewModel(adult2Request);
          var isAdult1Entered = computed(() => !!adult1.firstName.trim());
          var isAdult2Entered = computed(() => !!adult2.firstName.trim());
          computed(() => !!adult2.firstName.trim());
          computed(() => !!adult2.lastName.trim());
          var adult1RequiredRules = computed(() => [createRuleWithSuffix(required, "for First Adult"), "required"]);
          var adult1RequiredGenderRules = computed(() => [createRuleWithSuffix(required, "for First Adult"), createRuleWithReplacement(createNotEqualRule(Gender.Unknown), "is required for First Adult"), "required"]);
          var adult2RequiredRules = computed(() => [createRuleWithSuffix(required, "for Second Adult"), "required"]);
          var adult2RequiredGenderRules = computed(() => [createRuleWithSuffix(required, "for Second Adult"), createRuleWithReplacement(createNotEqualRule(Gender.Unknown), "is required for Second Adult"), "required"]);
          var campusListItemBag = computed({
            get() {
              return internalCampusListItemBag.value;
            },
            set(newValue) {
              internalCampusListItemBag.value = newValue;
              updateScheduleDateControl();
            }
          });
          var confirmPasswordRules = computed(() => {
            return "equalsfield:and Password do not match,".concat(createAccount.value.password);
          });
          var scheduleTimeItems = computed(() => {
            var _scheduleDateItem$sch;
            var scheduleDateItem = scheduleDateItems.value.find(s => s.value === plannedVisitDate.value);
            return (_scheduleDateItem$sch = scheduleDateItem === null || scheduleDateItem === void 0 ? void 0 : scheduleDateItem.scheduleTimes) !== null && _scheduleDateItem$sch !== void 0 ? _scheduleDateItem$sch : [];
          });
          function onAddChild(_x) {
            return _onAddChild.apply(this, arguments);
          }
          function _onAddChild() {
            _onAddChild = _asyncToGenerator(function* (child) {
              children.value.push(child);
            });
            return _onAddChild.apply(this, arguments);
          }
          function onClearClicked() {
            isNavigating.value = true;
            location.reload();
          }
          function onFormSubmitted() {
            return _onFormSubmitted.apply(this, arguments);
          }
          function _onFormSubmitted() {
            _onFormSubmitted = _asyncToGenerator(function* () {
              try {
                var _internalCampusListIt;
                isSaving.value = true;
                var bag = {
                  address: address.value,
                  adult1: isAdult1Entered.value ? adult1Request.value : undefined,
                  adult2: isAdult2Entered.value ? adult2Request.value : undefined,
                  campusGuid: toGuidOrNull((_internalCampusListIt = internalCampusListItemBag.value) === null || _internalCampusListIt === void 0 ? void 0 : _internalCampusListIt.value),
                  children: children.value,
                  createAccount: createAccount.value,
                  familyAttributeValues: familyAttributeValues.value,
                  familyGuid: toGuidOrNull(config.familyGuid),
                  fullName: fullName.value,
                  plannedVisitDate: plannedVisitDate.value,
                  scheduleGuid: toGuidOrNull(scheduleGuidOrEmptyString.value)
                };
                clearErrors();
                var result = yield invokeBlockAction("Save", {
                  bag
                });
                if (result.isSuccess && result !== null && result !== void 0 && result.data) {
                  var _result$data$errors;
                  if ((_result$data$errors = result.data.errors) !== null && _result$data$errors !== void 0 && _result$data$errors.length) {
                    setErrors("Please correct the following:", ...result.data.errors);
                  }
                  if (result.data.redirectUrl) {
                    navigate(result.data.redirectUrl);
                  }
                } else {
                  setErrors("Error", result.errorMessage || "An error has occurred while processing your request. Your organization's administrators have been notified of this problem.");
                }
              } finally {
                isSaving.value = false;
              }
            });
            return _onFormSubmitted.apply(this, arguments);
          }
          function onRemoveChild(child) {
            var index = children.value.indexOf(child);
            if (index !== -1) {
              children.value.splice(index, 1);
            }
          }
          function onVisibleValidationChanged(errors) {
            if (errors !== null && errors !== void 0 && errors.length && shouldScrollToFormErrors.value) {
              scrollIntoView(() => formErrorsScrollTarget.value);
              shouldScrollToFormErrors.value = false;
            }
          }
          function adult1FirstNameRule() {
            var _adult1$firstName, _adult1$lastName;
            var adult1FirstName = (_adult1$firstName = adult1.firstName) === null || _adult1$firstName === void 0 ? void 0 : _adult1$firstName.trim();
            var adult1LastName = (_adult1$lastName = adult1.lastName) === null || _adult1$lastName === void 0 ? void 0 : _adult1$lastName.trim();
            if (!adult1FirstName && adult1LastName) {
              return "is invalid. First and Last Name are required.";
            }
            return true;
          }
          function adult1LastNameRule() {
            var _adult1$firstName2, _adult1$lastName2;
            var adult1FirstName = (_adult1$firstName2 = adult1.firstName) === null || _adult1$firstName2 === void 0 ? void 0 : _adult1$firstName2.trim();
            var adult1LastName = (_adult1$lastName2 = adult1.lastName) === null || _adult1$lastName2 === void 0 ? void 0 : _adult1$lastName2.trim();
            if (adult1FirstName && !adult1LastName) {
              return "is invalid. First and Last Name are required.";
            }
            return true;
          }
          function adult2FirstNameRule() {
            var _adult2$firstName, _adult2$lastName;
            var adult2FirstName = (_adult2$firstName = adult2.firstName) === null || _adult2$firstName === void 0 ? void 0 : _adult2$firstName.trim();
            var adult2LastName = (_adult2$lastName = adult2.lastName) === null || _adult2$lastName === void 0 ? void 0 : _adult2$lastName.trim();
            if (!adult2FirstName && adult2LastName) {
              return "is invalid. First and Last Name are required.";
            }
            return true;
          }
          function adult2LastNameRule() {
            var _adult2$firstName2, _adult2$lastName2;
            var adult2FirstName = (_adult2$firstName2 = adult2.firstName) === null || _adult2$firstName2 === void 0 ? void 0 : _adult2$firstName2.trim();
            var adult2LastName = (_adult2$lastName2 = adult2.lastName) === null || _adult2$lastName2 === void 0 ? void 0 : _adult2$lastName2.trim();
            if (adult2FirstName && !adult2LastName) {
              return "is invalid. First and Last Name are required.";
            }
            return true;
          }
          function atLeastOneAdultFirstNameRule() {
            var _adult1$firstName3, _adult2$firstName3;
            var adult1FirstName = (_adult1$firstName3 = adult1.firstName) === null || _adult1$firstName3 === void 0 ? void 0 : _adult1$firstName3.trim();
            var adult2FirstName = (_adult2$firstName3 = adult2.firstName) === null || _adult2$firstName3 === void 0 ? void 0 : _adult2$firstName3.trim();
            if (!adult1FirstName && !adult2FirstName) {
              return "is invalid. The name of at least one adult needs to be entered.";
            }
            return true;
          }
          function checkUsernameAvailability() {
            return _checkUsernameAvailability.apply(this, arguments);
          }
          function _checkUsernameAvailability() {
            _checkUsernameAvailability = _asyncToGenerator(function* () {
              var username = createAccount.value.username;
              if (!username) {
                isUsernameAvailable.value = null;
              } else {
                var response = yield http.get("/api/userlogins/available", {
                  username
                });
                isUsernameAvailable.value = !!response.data;
              }
            });
            return _checkUsernameAvailability.apply(this, arguments);
          }
          function clearErrors() {
            errorTitle.value = undefined;
            errors.value = [];
          }
          function navigate(url) {
            isNavigating.value = true;
            location.href = url;
          }
          function scrollIntoView(elementGetter) {
            if (!elementGetter) {
              return;
            }
            nextTick(() => {
              var element = elementGetter();
              if (element && typeof element["scrollIntoView"] === "function") {
                element.scrollIntoView();
              }
            });
          }
          function setErrors(title) {
            errorTitle.value = title;
            for (var _len = arguments.length, errorMessages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              errorMessages[_key - 1] = arguments[_key];
            }
            errors.value = errorMessages;
            scrollIntoView(() => errorNotificationBox.value);
          }
          function updateScheduleDateControl() {
            return _updateScheduleDateControl.apply(this, arguments);
          }
          function _updateScheduleDateControl() {
            _updateScheduleDateControl = _asyncToGenerator(function* () {
              var _config$visitDateFiel2, _config$campusField, _campusListItemBag$va;
              scheduleDateItems.value = [];
              if (!((_config$visitDateFiel2 = config.visitDateField) !== null && _config$visitDateFiel2 !== void 0 && _config$visitDateFiel2.isDateAndTimeShown) || (_config$campusField = config.campusField) !== null && _config$campusField !== void 0 && _config$campusField.isShown && !campusListItemBag.value) {
                return;
              }
              var bag = {
                campusGuid: toGuidOrNull((_campusListItemBag$va = campusListItemBag.value) === null || _campusListItemBag$va === void 0 ? void 0 : _campusListItemBag$va.value)
              };
              clearErrors();
              var result = yield invokeBlockAction("GetScheduleDates", {
                bag
              });
              if (result !== null && result !== void 0 && result.data) {
                var _result$data$schedule;
                if (result.data.errorText) {
                  setErrors(result.data.errorTitle || null, result.data.errorText);
                }
                config.visitDateField = result.data.visitDateField;
                scheduleDateItems.value = (_result$data$schedule = result.data.scheduleDates) !== null && _result$data$schedule !== void 0 ? _result$data$schedule : [];
              } else if (result !== null && result !== void 0 && result.errorMessage) {
                setErrors(null, result.errorMessage);
              }
            });
            return _updateScheduleDateControl.apply(this, arguments);
          }
          onConfigurationValuesChanged(useReloadBlock());
          if ((_config$visitDateFiel = config.visitDateField) !== null && _config$visitDateFiel !== void 0 && _config$visitDateFiel.isDateAndTimeShown) {
            nextTick(() => updateScheduleDateControl());
          }
          return (_ctx, _cache) => {
            var _errorTitle$value;
            return openBlock(), createElementBlock("div", null, [errors.value.length ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "errorNotificationBox",
              ref: errorNotificationBox
            }, [createVNode(unref(NotificationBox), {
              alertType: "validation",
              heading: (_errorTitle$value = errorTitle.value) !== null && _errorTitle$value !== void 0 ? _errorTitle$value : undefined
            }, {
              default: withCtx(() => [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, error => {
                return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
              }), 256))])]),
              _: 1
            }, 8, ["heading"])], 512)) : createCommentVNode("v-if", true), createElementVNode("span", {
              ref_key: "formErrorsScrollTarget",
              ref: formErrorsScrollTarget
            }, null, 512), createVNode(unref(RockForm), {
              onSubmit: onFormSubmitted,
              onVisibleValidationChanged: onVisibleValidationChanged
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                type: "block",
                title: "Family Pre-Registration"
              }, {
                default: withCtx(() => {
                  var _unref$campusField, _unref$visitDateField, _unref$visitDateField4;
                  return [(_unref$campusField = unref(config).campusField) !== null && _unref$campusField !== void 0 && _unref$campusField.isShown || (_unref$visitDateField = unref(config).visitDateField) !== null && _unref$visitDateField !== void 0 && _unref$visitDateField.isShown ? withDirectives((openBlock(), createBlock(unref(Panel), {
                    key: 0,
                    title: unref(config).visitInfoTitle || 'Visit Information'
                  }, {
                    default: withCtx(() => {
                      var _unref$campusField2, _unref$visitDateField2, _unref$visitDateField3;
                      return [createElementVNode("div", _hoisted_1, [(_unref$campusField2 = unref(config).campusField) !== null && _unref$campusField2 !== void 0 && _unref$campusField2.isShown ? (openBlock(), createBlock(unref(CampusPicker), {
                        key: 0,
                        modelValue: unref(campusListItemBag),
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(campusListItemBag) ? campusListItemBag.value = $event : null),
                        campusStatusFilter: unref(config).campusStatusesFilter || [],
                        campusTypeFilter: unref(config).campusTypesFilter || [],
                        disabled: isSaving.value || isNavigating.value,
                        formGroupClasses: "col-md-4",
                        label: "Campus",
                        rules: unref(config).campusField.isRequired ? ['required'] : [],
                        showBlankItem: true,
                        onIsVisible: _cache[1] || (_cache[1] = $event => isCampusPickerVisible.value = $event)
                      }, null, 8, ["modelValue", "campusStatusFilter", "campusTypeFilter", "disabled", "rules"])) : createCommentVNode("v-if", true), (_unref$visitDateField2 = unref(config).visitDateField) !== null && _unref$visitDateField2 !== void 0 && _unref$visitDateField2.isDateShown ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(DatePicker), {
                        modelValue: plannedVisitDate.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => plannedVisitDate.value = $event),
                        disabled: isSaving.value || isNavigating.value,
                        disallowPastDateSelection: true,
                        label: "Planned Visit Date",
                        rules: unref(config).visitDateField.isRequired ? 'required' : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$visitDateField3 = unref(config).visitDateField) !== null && _unref$visitDateField3 !== void 0 && _unref$visitDateField3.isDateAndTimeShown ? (openBlock(), createElementBlock("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(DropDownList), {
                        modelValue: plannedVisitDate.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => plannedVisitDate.value = $event),
                        disabled: isSaving.value || isNavigating.value,
                        items: scheduleDateItems.value,
                        label: "Planned Visit Date",
                        rules: unref(config).visitDateField.isRequired ? 'required' : '',
                        showBlankItem: unref(config).visitDateField.isOptional
                      }, null, 8, ["modelValue", "disabled", "items", "rules", "showBlankItem"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(DropDownList), {
                        modelValue: scheduleGuidOrEmptyString.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => scheduleGuidOrEmptyString.value = $event),
                        disabled: isSaving.value || isNavigating.value,
                        items: unref(scheduleTimeItems),
                        label: "Planned Visit Time",
                        rules: unref(config).visitDateField.isRequired ? 'required' : '',
                        showBlankItem: unref(config).visitDateField.isOptional
                      }, null, 8, ["modelValue", "disabled", "items", "rules", "showBlankItem"])])])])) : createCommentVNode("v-if", true)])];
                    }),
                    _: 1
                  }, 8, ["title"])), [[vShow, isCampusPickerVisible.value || ((_unref$visitDateField4 = unref(config).visitDateField) === null || _unref$visitDateField4 === void 0 ? void 0 : _unref$visitDateField4.isShown)]]) : createCommentVNode("v-if", true), createVNode(unref(Panel), {
                    title: "Adult Information"
                  }, {
                    default: withCtx(() => {
                      var _unref$adultGenderFie, _unref$adultSuffixFie, _unref$adultBirthdayF, _unref$adultMaritalSt, _unref$adultMobilePho, _unref$displaySmsOptI, _unref$displaySmsOptI2, _unref$displaySmsOptI3, _unref$adultEmailFiel, _unref$adultCommunica, _unref$adultRaceField, _unref$adultEthnicity, _unref$adultProfilePh, _unref$createAccountF, _unref$adultGenderFie2, _unref$adultSuffixFie2, _unref$adultBirthdayF2, _unref$adultMaritalSt2, _unref$adultMobilePho2, _unref$displaySmsOptI4, _unref$displaySmsOptI5, _unref$displaySmsOptI6, _unref$adultEmailFiel2, _unref$adultCommunica2, _unref$adultRaceField2, _unref$adultEthnicity2, _unref$adultProfilePh2, _unref$addressField;
                      return [_hoisted_7, createElementVNode("div", _hoisted_8, [createVNode(unref(TextBox), {
                        modelValue: fullName.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => fullName.value = $event),
                        autocomplete: "new-password",
                        class: "rock-fullname",
                        disabled: isSaving.value || isNavigating.value,
                        placeholder: "Please enter name (Required)"
                      }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_9, [unref(adult1).isFirstNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
                        key: 0,
                        label: "First Name",
                        modelValue: unref(adult1).firstName
                      }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
                        key: 1,
                        modelValue: unref(adult1).firstName,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => unref(adult1).firstName = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "First Name",
                        rules: [atLeastOneAdultFirstNameRule, adult1FirstNameRule]
                      }, null, 8, ["modelValue", "disabled", "rules"]))]), createElementVNode("div", _hoisted_10, [unref(adult1).isLastNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
                        key: 0,
                        label: "Last Name",
                        modelValue: unref(adult1).lastName
                      }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
                        key: 1,
                        modelValue: unref(adult1).lastName,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => unref(adult1).lastName = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Last Name",
                        rules: [adult1LastNameRule]
                      }, null, 8, ["modelValue", "disabled", "rules"]))])]), createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [(_unref$adultGenderFie = unref(config).adultGenderField) !== null && _unref$adultGenderFie !== void 0 && _unref$adultGenderFie.isShown ? (openBlock(), createBlock(unref(GenderDropDownList), {
                        key: 0,
                        modelValue: unref(adult1).genderStringValue,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => unref(adult1).genderStringValue = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Gender",
                        rules: unref(config).adultGenderField.isRequired ? unref(adult1RequiredGenderRules) : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_13, [(_unref$adultSuffixFie = unref(config).adultSuffixField) !== null && _unref$adultSuffixFie !== void 0 && _unref$adultSuffixFie.isShown ? (openBlock(), createBlock(unref(DefinedValuePicker), {
                        key: 0,
                        modelValue: unref(adult1).suffixListItemBag,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => unref(adult1).suffixListItemBag = $event),
                        definedTypeGuid: unref(DefinedType).PersonSuffix,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Suffix",
                        lazyMode: "lazy",
                        rules: unref(config).adultSuffixField.isRequired ? unref(adult1RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "definedTypeGuid", "disabled", "rules"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_14, [createElementVNode("div", _hoisted_15, [(_unref$adultBirthdayF = unref(config).adultBirthdayField) !== null && _unref$adultBirthdayF !== void 0 && _unref$adultBirthdayF.isShown ? (openBlock(), createBlock(unref(BirthdayPicker), {
                        key: 0,
                        modelValue: unref(adult1).birthDate,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => unref(adult1).birthDate = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Birth Date",
                        rules: unref(config).adultBirthdayField.isRequired ? [unref(createRuleWithSuffix)(unref(monthAndDayAndYearRequiredRule), 'for First Adult'), 'required'] : unref(config).adultBirthdayField.isMonthAndDayRequired ? unref(createRuleWithSuffix)(unref(monthAndDayRequiredRule), 'for First Adult') : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_16, [(_unref$adultMaritalSt = unref(config).adultMaritalStatusField) !== null && _unref$adultMaritalSt !== void 0 && _unref$adultMaritalSt.isShown ? (openBlock(), createBlock(unref(DefinedValuePicker), {
                        key: 0,
                        modelValue: unref(adult1).maritalStatusListItemBag,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => unref(adult1).maritalStatusListItemBag = $event),
                        definedTypeGuid: unref(DefinedType).PersonMaritalStatus,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Marital Status",
                        lazyMode: "lazy",
                        rules: unref(config).adultMaritalStatusField.isRequired ? unref(adult1RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "definedTypeGuid", "disabled", "rules"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_17, [createElementVNode("div", _hoisted_18, [(_unref$adultMobilePho = unref(config).adultMobilePhoneField) !== null && _unref$adultMobilePho !== void 0 && _unref$adultMobilePho.isShown ? (openBlock(), createBlock(unref(PhoneNumberBox), {
                        key: 0,
                        modelValue: unref(adult1).mobilePhone,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => unref(adult1).mobilePhone = $event),
                        countryCode: unref(adult1).mobilePhoneCountryCode,
                        "onUpdate:countryCode": _cache[13] || (_cache[13] = $event => unref(adult1).mobilePhoneCountryCode = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Mobile Phone",
                        rules: unref(config).adultMobilePhoneField.isRequired ? unref(adult1RequiredRules) : ''
                      }, null, 8, ["modelValue", "countryCode", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_19, [(_unref$displaySmsOptI = unref(config).displaySmsOptIn) !== null && _unref$displaySmsOptI !== void 0 && _unref$displaySmsOptI.isShowFirstAdult ? (openBlock(), createBlock(unref(CheckBox), {
                        key: 0,
                        modelValue: unref(adult1).isMessagingEnabled,
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => unref(adult1).isMessagingEnabled = $event),
                        label: "",
                        disabled: isSaving.value || isNavigating.value,
                        text: (_unref$displaySmsOptI2 = (_unref$displaySmsOptI3 = unref(config).displaySmsOptIn) === null || _unref$displaySmsOptI3 === void 0 ? void 0 : _unref$displaySmsOptI3.smsOptInDisplayText) !== null && _unref$displaySmsOptI2 !== void 0 ? _unref$displaySmsOptI2 : ''
                      }, null, 8, ["modelValue", "disabled", "text"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_20, [createElementVNode("div", _hoisted_21, [(_unref$adultEmailFiel = unref(config).adultEmailField) !== null && _unref$adultEmailFiel !== void 0 && _unref$adultEmailFiel.isShown ? (openBlock(), createBlock(unref(EmailBox), {
                        key: 0,
                        modelValue: unref(adult1).email,
                        "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => unref(adult1).email = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Email",
                        rules: unref(config).adultEmailField.isRequired ? unref(adult1RequiredRules) : []
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_22, [(_unref$adultCommunica = unref(config).adultCommunicationPreferenceField) !== null && _unref$adultCommunica !== void 0 && _unref$adultCommunica.isShown ? (openBlock(), createBlock(unref(RadioButtonList), {
                        key: 0,
                        modelValue: unref(adult1).communicationPreferenceStringValue,
                        "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => unref(adult1).communicationPreferenceStringValue = $event),
                        disabled: isSaving.value || isNavigating.value,
                        horizontal: true,
                        items: [{
                          text: 'Email',
                          value: unref(CommunicationPreference).Email.toString()
                        }, {
                          text: 'SMS',
                          value: unref(CommunicationPreference).SMS.toString()
                        }],
                        label: "Communication Preference",
                        rules: unref(config).adultCommunicationPreferenceField.isRequired ? unref(adult1RequiredRules) : ''
                      }, null, 8, ["modelValue", "disabled", "items", "rules"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_23, [createElementVNode("div", _hoisted_24, [(_unref$adultRaceField = unref(config).adultRaceField) !== null && _unref$adultRaceField !== void 0 && _unref$adultRaceField.isShown ? (openBlock(), createBlock(unref(RacePicker), {
                        key: 0,
                        modelValue: unref(adult1).raceListItemBag,
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => unref(adult1).raceListItemBag = $event),
                        disabled: isSaving.value || isNavigating.value,
                        rules: unref(config).adultRaceField.isRequired ? unref(adult1RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_25, [(_unref$adultEthnicity = unref(config).adultEthnicityField) !== null && _unref$adultEthnicity !== void 0 && _unref$adultEthnicity.isShown ? (openBlock(), createBlock(unref(EthnicityPicker), {
                        key: 0,
                        modelValue: unref(adult1).ethnicityListItemBag,
                        "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => unref(adult1).ethnicityListItemBag = $event),
                        disabled: isSaving.value || isNavigating.value,
                        rules: unref(config).adultEthnicityField.isRequired ? unref(adult1RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_26, [(_unref$adultProfilePh = unref(config).adultProfilePhotoField) !== null && _unref$adultProfilePh !== void 0 && _unref$adultProfilePh.isShown ? (openBlock(), createElementBlock("div", _hoisted_27, [createVNode(unref(ImageEditor), {
                        modelValue: unref(adult1).profileImageListItemBag,
                        "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => unref(adult1).profileImageListItemBag = $event),
                        binaryFileTypeGuid: unref(BinaryFiletype).PersonImage,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Profile Photo",
                        rules: unref(config).adultProfilePhotoField.isRequired ? unref(adult1RequiredRules) : ''
                      }, null, 8, ["modelValue", "binaryFileTypeGuid", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_28, [unref(adult1).attributes != null ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                        key: 0,
                        modelValue: unref(adult1).attributeValues,
                        "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => unref(adult1).attributeValues = $event),
                        attributes: unref(adult1).attributes,
                        columnBreakpoint: "sm",
                        displayWithinExistingRow: true,
                        isEditMode: "",
                        numberOfColumns: 2,
                        showCategoryLabel: true
                      }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_29, [createElementVNode("div", _hoisted_30, [(_unref$createAccountF = unref(config).createAccountField) !== null && _unref$createAccountF !== void 0 && _unref$createAccountF.isShown ? (openBlock(), createElementBlock("div", _hoisted_31, [createElementVNode("div", _hoisted_32, [createElementVNode("h4", _hoisted_33, toDisplayString(unref(config).createAccountTitle), 1), createElementVNode("p", null, toDisplayString(unref(config).createAccountDescription), 1), createElementVNode("div", _hoisted_34, [createElementVNode("div", _hoisted_35, [createVNode(unref(TextBox), {
                        modelValue: createAccount.value.username,
                        "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => createAccount.value.username = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Username",
                        rules: unref(config).createAccountField.isRequired ? 'required' : '',
                        onBlur: checkUsernameAvailability
                      }, null, 8, ["modelValue", "disabled", "rules"]), createElementVNode("dl", null, [_hoisted_36, createElementVNode("dd", null, [isUsernameAvailable.value ? (openBlock(), createBlock(unref(NotificationBox), {
                        key: 0,
                        alertType: "success"
                      }, {
                        default: withCtx(() => [_hoisted_37]),
                        _: 1
                      })) : isUsernameAvailable.value === false ? (openBlock(), createBlock(unref(NotificationBox), {
                        key: 1,
                        alertType: "warning"
                      }, {
                        default: withCtx(() => [_hoisted_38]),
                        _: 1
                      })) : createCommentVNode("v-if", true)])])]), createElementVNode("div", _hoisted_39, [createVNode(unref(TextBox), {
                        modelValue: createAccount.value.password,
                        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => createAccount.value.password = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Password",
                        rules: unref(config).createAccountField.isRequired ? 'required' : '',
                        type: "password"
                      }, null, 8, ["modelValue", "disabled", "rules"]), createVNode(unref(TextBox), {
                        modelValue: confirmPassword.value,
                        "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => confirmPassword.value = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Confirm Password",
                        type: "password",
                        rules: "".concat(unref(config).createAccountField.isRequired ? 'required|' : '').concat(unref(confirmPasswordRules))
                      }, null, 8, ["modelValue", "disabled", "rules"])])])])])) : createCommentVNode("v-if", true)])]), _hoisted_40, _hoisted_41, createElementVNode("div", _hoisted_42, [createElementVNode("div", _hoisted_43, [createElementVNode("div", _hoisted_44, [unref(adult2).isFirstNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
                        key: 0,
                        label: "First Name",
                        modelValue: unref(adult2).firstName
                      }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
                        key: 1,
                        modelValue: unref(adult2).firstName,
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => unref(adult2).firstName = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "First Name",
                        rules: [adult2FirstNameRule]
                      }, null, 8, ["modelValue", "disabled", "rules"]))]), createElementVNode("div", _hoisted_45, [unref(adult2).isLastNameReadOnly ? (openBlock(), createBlock(unref(StaticFormControl), {
                        key: 0,
                        label: "Last Name",
                        modelValue: unref(adult2).lastName
                      }, null, 8, ["modelValue"])) : (openBlock(), createBlock(unref(TextBox), {
                        key: 1,
                        modelValue: unref(adult2).lastName,
                        "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => unref(adult2).lastName = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Last Name",
                        rules: [adult2LastNameRule]
                      }, null, 8, ["modelValue", "disabled", "rules"]))])]), createElementVNode("div", _hoisted_46, [(_unref$adultGenderFie2 = unref(config).adultGenderField) !== null && _unref$adultGenderFie2 !== void 0 && _unref$adultGenderFie2.isShown ? (openBlock(), createElementBlock("div", _hoisted_47, [createVNode(unref(GenderDropDownList), {
                        modelValue: unref(adult2).genderStringValue,
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => unref(adult2).genderStringValue = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Gender",
                        rules: unref(isAdult2Entered) && unref(config).adultGenderField.isRequired ? unref(adult2RequiredGenderRules) : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$adultSuffixFie2 = unref(config).adultSuffixField) !== null && _unref$adultSuffixFie2 !== void 0 && _unref$adultSuffixFie2.isShown ? (openBlock(), createElementBlock("div", _hoisted_48, [createVNode(unref(DefinedValuePicker), {
                        modelValue: unref(adult2).suffixListItemBag,
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => unref(adult2).suffixListItemBag = $event),
                        definedTypeGuid: unref(DefinedType).PersonSuffix,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Suffix",
                        lazyMode: "lazy",
                        rules: unref(isAdult2Entered) && unref(config).adultSuffixField.isRequired ? unref(adult2RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "definedTypeGuid", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_49, [(_unref$adultBirthdayF2 = unref(config).adultBirthdayField) !== null && _unref$adultBirthdayF2 !== void 0 && _unref$adultBirthdayF2.isShown ? (openBlock(), createElementBlock("div", _hoisted_50, [createVNode(unref(BirthdayPicker), {
                        modelValue: unref(adult2).birthDate,
                        "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => unref(adult2).birthDate = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Birth Date",
                        rules: unref(isAdult2Entered) && unref(config).adultBirthdayField.isRequired ? [unref(createRuleWithSuffix)(unref(monthAndDayAndYearRequiredRule), 'for Second Adult'), 'required'] : unref(isAdult2Entered) && unref(config).adultBirthdayField.isMonthAndDayRequired ? unref(createRuleWithSuffix)(unref(monthAndDayRequiredRule), 'for Second Adult') : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$adultMaritalSt2 = unref(config).adultMaritalStatusField) !== null && _unref$adultMaritalSt2 !== void 0 && _unref$adultMaritalSt2.isShown ? (openBlock(), createElementBlock("div", _hoisted_51, [createVNode(unref(DefinedValuePicker), {
                        modelValue: unref(adult2).maritalStatusListItemBag,
                        "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => unref(adult2).maritalStatusListItemBag = $event),
                        definedTypeGuid: unref(DefinedType).PersonMaritalStatus,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Marital Status",
                        lazyMode: "lazy",
                        rules: unref(isAdult2Entered) && unref(config).adultMaritalStatusField.isRequired ? unref(adult2RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "definedTypeGuid", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_52, [createElementVNode("div", _hoisted_53, [(_unref$adultMobilePho2 = unref(config).adultMobilePhoneField) !== null && _unref$adultMobilePho2 !== void 0 && _unref$adultMobilePho2.isShown ? (openBlock(), createBlock(unref(PhoneNumberBox), {
                        key: 0,
                        modelValue: unref(adult2).mobilePhone,
                        "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => unref(adult2).mobilePhone = $event),
                        countryCode: unref(adult2).mobilePhoneCountryCode,
                        "onUpdate:countryCode": _cache[31] || (_cache[31] = $event => unref(adult2).mobilePhoneCountryCode = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Mobile Phone",
                        rules: unref(isAdult2Entered) && unref(config).adultMobilePhoneField.isRequired ? unref(adult2RequiredRules) : ''
                      }, null, 8, ["modelValue", "countryCode", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_54, [(_unref$displaySmsOptI4 = unref(config).displaySmsOptIn) !== null && _unref$displaySmsOptI4 !== void 0 && _unref$displaySmsOptI4.isShowAllAdults ? (openBlock(), createBlock(unref(CheckBox), {
                        key: 0,
                        modelValue: unref(adult2).isMessagingEnabled,
                        "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => unref(adult2).isMessagingEnabled = $event),
                        label: "",
                        disabled: isSaving.value || isNavigating.value,
                        text: (_unref$displaySmsOptI5 = (_unref$displaySmsOptI6 = unref(config).displaySmsOptIn) === null || _unref$displaySmsOptI6 === void 0 ? void 0 : _unref$displaySmsOptI6.smsOptInDisplayText) !== null && _unref$displaySmsOptI5 !== void 0 ? _unref$displaySmsOptI5 : ''
                      }, null, 8, ["modelValue", "disabled", "text"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_55, [(_unref$adultEmailFiel2 = unref(config).adultEmailField) !== null && _unref$adultEmailFiel2 !== void 0 && _unref$adultEmailFiel2.isShown ? (openBlock(), createElementBlock("div", _hoisted_56, [createVNode(unref(EmailBox), {
                        modelValue: unref(adult2).email,
                        "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => unref(adult2).email = $event),
                        disabled: isSaving.value || isNavigating.value,
                        label: "Email",
                        rules: unref(isAdult2Entered) && unref(config).adultEmailField.isRequired ? unref(adult2RequiredRules) : ''
                      }, null, 8, ["modelValue", "disabled", "rules"])])) : createCommentVNode("v-if", true), (_unref$adultCommunica2 = unref(config).adultCommunicationPreferenceField) !== null && _unref$adultCommunica2 !== void 0 && _unref$adultCommunica2.isShown ? (openBlock(), createElementBlock("div", _hoisted_57, [createVNode(unref(RadioButtonList), {
                        modelValue: unref(adult2).communicationPreferenceStringValue,
                        "onUpdate:modelValue": _cache[34] || (_cache[34] = $event => unref(adult2).communicationPreferenceStringValue = $event),
                        disabled: isSaving.value || isNavigating.value,
                        horizontal: true,
                        items: [{
                          text: 'Email',
                          value: unref(CommunicationPreference).Email.toString()
                        }, {
                          text: 'SMS',
                          value: unref(CommunicationPreference).SMS.toString()
                        }],
                        label: "Communication Preference",
                        rules: unref(isAdult2Entered) && unref(config).adultCommunicationPreferenceField.isRequired ? unref(adult2RequiredRules) : ''
                      }, null, 8, ["modelValue", "disabled", "items", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_58, [createElementVNode("div", _hoisted_59, [(_unref$adultRaceField2 = unref(config).adultRaceField) !== null && _unref$adultRaceField2 !== void 0 && _unref$adultRaceField2.isShown ? (openBlock(), createBlock(unref(RacePicker), {
                        key: 0,
                        modelValue: unref(adult2).raceListItemBag,
                        "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => unref(adult2).raceListItemBag = $event),
                        disabled: isSaving.value || isNavigating.value,
                        rules: unref(isAdult2Entered) && unref(config).adultRaceField.isRequired ? unref(adult2RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_60, [(_unref$adultEthnicity2 = unref(config).adultEthnicityField) !== null && _unref$adultEthnicity2 !== void 0 && _unref$adultEthnicity2.isShown ? (openBlock(), createBlock(unref(EthnicityPicker), {
                        key: 0,
                        modelValue: unref(adult2).ethnicityListItemBag,
                        "onUpdate:modelValue": _cache[36] || (_cache[36] = $event => unref(adult2).ethnicityListItemBag = $event),
                        disabled: isSaving.value || isNavigating.value,
                        rules: unref(isAdult2Entered) && unref(config).adultEthnicityField.isRequired ? unref(adult2RequiredRules) : '',
                        showBlankItem: true
                      }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_61, [(_unref$adultProfilePh2 = unref(config).adultProfilePhotoField) !== null && _unref$adultProfilePh2 !== void 0 && _unref$adultProfilePh2.isShown ? (openBlock(), createElementBlock("div", _hoisted_62, [createVNode(unref(ImageEditor), {
                        modelValue: unref(adult2).profileImageListItemBag,
                        "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => unref(adult2).profileImageListItemBag = $event),
                        binaryFileTypeGuid: unref(BinaryFiletype).PersonImage,
                        disabled: isSaving.value || isNavigating.value,
                        label: "Profile Photo",
                        rules: unref(isAdult2Entered) && unref(config).adultProfilePhotoField.isRequired ? unref(adult2RequiredRules) : ''
                      }, null, 8, ["modelValue", "binaryFileTypeGuid", "disabled", "rules"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_63, [unref(adult2).attributes != null ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                        key: 0,
                        modelValue: unref(adult2).attributeValues,
                        "onUpdate:modelValue": _cache[38] || (_cache[38] = $event => unref(adult2).attributeValues = $event),
                        attributes: unref(adult2).attributes,
                        columnBreakpoint: "sm",
                        displayWithinExistingRow: true,
                        isEditMode: "",
                        numberOfColumns: 2,
                        showCategoryLabel: true
                      }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true)])]), _hoisted_64, createElementVNode("div", _hoisted_65, [createElementVNode("div", _hoisted_66, [(_unref$addressField = unref(config).addressField) !== null && _unref$addressField !== void 0 && _unref$addressField.isShown ? (openBlock(), createBlock(unref(AddressControl), {
                        key: 0,
                        modelValue: address.value,
                        "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => address.value = $event),
                        disabled: isSaving.value || isNavigating.value,
                        disableFrontEndValidation: !unref(config).addressField.isRequired,
                        label: "Address",
                        rules: unref(config).addressField.isRequired ? 'required' : '',
                        useCountryAbbreviation: false
                      }, null, 8, ["modelValue", "disabled", "disableFrontEndValidation", "rules"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_67, [unref(config).familyAttributes ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                        key: 0,
                        modelValue: familyAttributeValues.value,
                        "onUpdate:modelValue": _cache[40] || (_cache[40] = $event => familyAttributeValues.value = $event),
                        attributes: unref(config).familyAttributes,
                        columnBreakpoint: "sm",
                        isEditMode: "",
                        numberOfColumns: 2,
                        showCategoryLabel: false
                      }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true)])])];
                    }),
                    _: 1
                  }), createVNode(unref(Panel), {
                    type: "default",
                    title: "Children"
                  }, {
                    default: withCtx(() => [createVNode(unref(script$1), {
                      modelValue: children.value,
                      "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => children.value = $event),
                      disabled: isSaving.value || isNavigating.value,
                      lastName: unref(adult1).lastName,
                      onAddChild: onAddChild,
                      onRemoveChild: onRemoveChild
                    }, null, 8, ["modelValue", "disabled", "lastName"])]),
                    _: 1
                  })];
                }),
                footerActions: withCtx(() => [createVNode(unref(RockButton), {
                  btnType: "primary",
                  disabled: isSaving.value || isNavigating.value,
                  type: "submit",
                  onClick: _cache[42] || (_cache[42] = $event => shouldScrollToFormErrors.value = true)
                }, {
                  default: withCtx(() => [_hoisted_68]),
                  _: 1
                }, 8, ["disabled"]), createVNode(unref(RockButton), {
                  btnType: "link",
                  disabled: isSaving.value || isNavigating.value,
                  onClick: onClearClicked
                }, {
                  default: withCtx(() => [_hoisted_69]),
                  _: 1
                }, 8, ["disabled"])]),
                _: 1
              })]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "src/Crm/familyPreRegistration.obs";

    })
  };
}));
//# sourceMappingURL=familyPreRegistration.obs.js.map
