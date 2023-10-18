System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/countdownTimer', '@Obsidian/Controls/javaScriptAnchor', '@Obsidian/Controls/progressTracker', '@Obsidian/Controls/rockButton', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/stringUtils', '@Obsidian/PageState', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Utility/linq', '@Obsidian/Utility/page', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/numberUpDown', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/electronicSignature', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Utility/address', '@Obsidian/Controls/textBox', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/genderDropDownList', '@Obsidian/Controls/birthdayPicker', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/componentFromUrl', '@Obsidian/Controls/datePartsPicker', '@Obsidian/Controls/rockField', '@Obsidian/Core/Reporting/filterExpressionType', '@Obsidian/Utility/fieldTypes', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/numberUpDownGroup', '@Obsidian/Controls/itemsWithPreAndPostHtml', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/dialog', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/saveFinancialAccountForm', '@Obsidian/Controls/gatewayControl', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Controls/rockValidation', '@Obsidian/Controls/loading', '@Obsidian/Controls/currencyBox', '@Obsidian/Controls/helpBlock', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/staticFormControl'], (function (exports) {
  'use strict';
  var defineComponent, inject, computed, ref, watch, reactive, provide, NotificationBox, CountdownTimer, JavaScriptAnchor, ProgressTracker, RockButton, Number$1, toWord, asFormattedString, pluralConditional, toTitleCase, StringFilter, isNullOrWhiteSpace, useStore, useInvokeBlockAction, useConfigurationValues, newGuid, areEqual, GuidHelper, toGuidOrNull, List, Page, RockDateTime, NumberUpDown, DropDownList, ElectronicSignature, RadioButtonList, AddressControl, getDefaultAddressControlModel, TextBox, EmailBox, GenderDropDownList, BirthdayPicker, PhoneNumberBox, ComponentFromUrl, getDefaultDatePartsPickerModel, RockField, FilterExpressionType, getFieldType, RockForm, CheckBox, NumberUpDownGroup, ItemsWithPreAndPostHtml, AttributeValuesContainer, Dialog, LoadingIndicator, SaveFinancialAccountForm, GatewayControl, provideSubmitPayment, RockValidation, Loading, CurrencyBox, HelpBlock, InlineCheckBox, StaticFormControl;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      reactive = module.reactive;
      provide = module.provide;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      CountdownTimer = module["default"];
    }, function (module) {
      JavaScriptAnchor = module["default"];
    }, function (module) {
      ProgressTracker = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      Number$1 = module["default"];
      toWord = module.toWord;
      asFormattedString = module.asFormattedString;
    }, function (module) {
      pluralConditional = module.pluralConditional;
      toTitleCase = module.toTitleCase;
      StringFilter = module["default"];
      isNullOrWhiteSpace = module.isNullOrWhiteSpace;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      newGuid = module.newGuid;
      areEqual = module.areEqual;
      GuidHelper = module["default"];
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      List = module.List;
    }, function (module) {
      Page = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      NumberUpDown = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      ElectronicSignature = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      getDefaultAddressControlModel = module.getDefaultAddressControlModel;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      GenderDropDownList = module["default"];
    }, function (module) {
      BirthdayPicker = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      ComponentFromUrl = module["default"];
    }, function (module) {
      getDefaultDatePartsPickerModel = module.getDefaultDatePartsPickerModel;
    }, function (module) {
      RockField = module["default"];
    }, function (module) {
      FilterExpressionType = module.FilterExpressionType;
    }, function (module) {
      getFieldType = module.getFieldType;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      NumberUpDownGroup = module["default"];
    }, function (module) {
      ItemsWithPreAndPostHtml = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      Dialog = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      SaveFinancialAccountForm = module["default"];
    }, function (module) {
      GatewayControl = module["default"];
    }, function (module) {
      provideSubmitPayment = module.provideSubmitPayment;
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      HelpBlock = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
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

      var RegistrationPersonFieldType = function (RegistrationPersonFieldType) {
        RegistrationPersonFieldType[RegistrationPersonFieldType["FirstName"] = 0] = "FirstName";
        RegistrationPersonFieldType[RegistrationPersonFieldType["LastName"] = 1] = "LastName";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Campus"] = 2] = "Campus";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Address"] = 3] = "Address";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Email"] = 4] = "Email";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Birthdate"] = 5] = "Birthdate";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Gender"] = 6] = "Gender";
        RegistrationPersonFieldType[RegistrationPersonFieldType["MaritalStatus"] = 7] = "MaritalStatus";
        RegistrationPersonFieldType[RegistrationPersonFieldType["MobilePhone"] = 8] = "MobilePhone";
        RegistrationPersonFieldType[RegistrationPersonFieldType["HomePhone"] = 9] = "HomePhone";
        RegistrationPersonFieldType[RegistrationPersonFieldType["WorkPhone"] = 10] = "WorkPhone";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Grade"] = 11] = "Grade";
        RegistrationPersonFieldType[RegistrationPersonFieldType["ConnectionStatus"] = 12] = "ConnectionStatus";
        RegistrationPersonFieldType[RegistrationPersonFieldType["MiddleName"] = 13] = "MiddleName";
        RegistrationPersonFieldType[RegistrationPersonFieldType["AnniversaryDate"] = 14] = "AnniversaryDate";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Race"] = 15] = "Race";
        RegistrationPersonFieldType[RegistrationPersonFieldType["Ethnicity"] = 16] = "Ethnicity";
        return RegistrationPersonFieldType;
      }({});
      var RegistrationFieldSource = function (RegistrationFieldSource) {
        RegistrationFieldSource[RegistrationFieldSource["PersonField"] = 0] = "PersonField";
        RegistrationFieldSource[RegistrationFieldSource["PersonAttribute"] = 1] = "PersonAttribute";
        RegistrationFieldSource[RegistrationFieldSource["GroupMemberAttribute"] = 2] = "GroupMemberAttribute";
        RegistrationFieldSource[RegistrationFieldSource["RegistrantAttribute"] = 4] = "RegistrantAttribute";
        return RegistrationFieldSource;
      }({});
      var RegistrarOption = function (RegistrarOption) {
        RegistrarOption[RegistrarOption["PromptForRegistrar"] = 0] = "PromptForRegistrar";
        RegistrarOption[RegistrarOption["PrefillFirstRegistrant"] = 1] = "PrefillFirstRegistrant";
        RegistrarOption[RegistrarOption["UseFirstRegistrant"] = 2] = "UseFirstRegistrant";
        RegistrarOption[RegistrarOption["UseLoggedInPerson"] = 3] = "UseLoggedInPerson";
        return RegistrarOption;
      }({});
      var RegistrantsSameFamily = function (RegistrantsSameFamily) {
        RegistrantsSameFamily[RegistrantsSameFamily["No"] = 0] = "No";
        RegistrantsSameFamily[RegistrantsSameFamily["Yes"] = 1] = "Yes";
        RegistrantsSameFamily[RegistrantsSameFamily["Ask"] = 2] = "Ask";
        return RegistrantsSameFamily;
      }({});
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

      var unknownSingleFamilyGuid = newGuid();
      function getForcedFamilyGuid(currentPerson, viewModel) {
        return currentPerson && viewModel.registrantsSameFamily === RegistrantsSameFamily.Yes ? currentPerson.primaryFamilyGuid || unknownSingleFamilyGuid : null;
      }
      function getDefaultRegistrantInfo(currentPerson, viewModel, familyGuid) {
        var forcedFamilyGuid = getForcedFamilyGuid(currentPerson, viewModel);
        if (forcedFamilyGuid) {
          familyGuid = forcedFamilyGuid;
        }
        if (!familyGuid) {
          familyGuid = newGuid();
        }
        return {
          isOnWaitList: false,
          familyGuid: familyGuid,
          fieldValues: {},
          feeItemQuantities: {},
          guid: newGuid(),
          personGuid: null
        };
      }
      function getRegistrantBasicInfo(registrant, registrantForms) {
        var _fields$find, _fields$find2, _fields$find3;
        var fields = (registrantForms === null || registrantForms === void 0 ? void 0 : registrantForms.reduce((acc, f) => acc.concat(f.fields), [])) || [];
        var firstNameGuid = ((_fields$find = fields.find(f => f.personFieldType === RegistrationPersonFieldType.FirstName && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find === void 0 ? void 0 : _fields$find.guid) || "";
        var lastNameGuid = ((_fields$find2 = fields.find(f => f.personFieldType === RegistrationPersonFieldType.LastName && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find2 === void 0 ? void 0 : _fields$find2.guid) || "";
        var emailGuid = ((_fields$find3 = fields.find(f => f.personFieldType === RegistrationPersonFieldType.Email && f.fieldSource === RegistrationFieldSource.PersonField)) === null || _fields$find3 === void 0 ? void 0 : _fields$find3.guid) || "";
        return {
          firstName: (registrant === null || registrant === void 0 ? void 0 : registrant.fieldValues[firstNameGuid]) || "",
          lastName: (registrant === null || registrant === void 0 ? void 0 : registrant.fieldValues[lastNameGuid]) || "",
          email: (registrant === null || registrant === void 0 ? void 0 : registrant.fieldValues[emailGuid]) || "",
          guid: registrant === null || registrant === void 0 ? void 0 : registrant.guid
        };
      }

      var store$3 = useStore();
      var RegistrationEntryIntro = defineComponent({
        name: "Event.RegistrationEntry.Intro",
        components: {
          NumberUpDown,
          RockButton,
          NotificationBox
        },
        data() {
          var registrationEntryState = inject("registrationEntryState");
          return {
            numberOfRegistrants: registrationEntryState.registrants.length,
            registrationEntryState,
            showRemainingCapacity: false
          };
        },
        computed: {
          currentPerson() {
            return store$3.state.currentPerson;
          },
          viewModel() {
            return this.registrationEntryState.viewModel;
          },
          numberToAddToWaitlist() {
            if (this.viewModel.spotsRemaining === null || !this.viewModel.waitListEnabled) {
              return 0;
            }
            if (this.viewModel.spotsRemaining >= this.numberOfRegistrants) {
              return 0;
            }
            return this.numberOfRegistrants - this.viewModel.spotsRemaining;
          },
          remainingCapacityPhrase() {
            var spots = this.viewModel.spotsRemaining;
            if (spots === null) {
              return "";
            }
            return pluralConditional(spots, "1 more ".concat(this.registrantTerm), "".concat(spots, " more ").concat(this.registrantTermPlural));
          },
          isFull() {
            if (this.viewModel.spotsRemaining === null) {
              return false;
            }
            return this.viewModel.spotsRemaining < 1;
          },
          canContinue() {
            return !(this.isFull && this.numberToAddToWaitlist !== this.numberOfRegistrants);
          },
          registrantTerm() {
            this.viewModel.instanceName;
            return (this.viewModel.registrantTerm || "registrant").toLowerCase();
          },
          registrantTermPlural() {
            return (this.viewModel.pluralRegistrantTerm || "registrants").toLowerCase();
          },
          registrationTerm() {
            return (this.viewModel.registrationTerm || "registration").toLowerCase();
          },
          registrationTermPlural() {
            return (this.viewModel.pluralRegistrationTerm || "registrations").toLowerCase();
          },
          registrationTermTitleCase() {
            return toTitleCase(this.registrationTerm);
          }
        },
        methods: {
          pluralConditional,
          onNext() {
            var forcedFamilyGuid = getForcedFamilyGuid(this.currentPerson, this.viewModel);
            var usedFamilyMemberGuids = this.registrationEntryState.registrants.filter(r => r.personGuid).map(r => r.personGuid);
            this.viewModel.familyMembers.filter(fm => areEqual(fm.familyGuid, forcedFamilyGuid) && !usedFamilyMemberGuids.includes(fm.guid));
            while (this.numberOfRegistrants > this.registrationEntryState.registrants.length) {
              var registrant = getDefaultRegistrantInfo(this.currentPerson, this.viewModel, forcedFamilyGuid);
              this.registrationEntryState.registrants.push(registrant);
            }
            this.registrationEntryState.registrants.length = this.numberOfRegistrants;
            var firstWaitListIndex = this.numberOfRegistrants - this.numberToAddToWaitlist;
            for (var i = firstWaitListIndex; i < this.numberOfRegistrants; i++) {
              this.registrationEntryState.registrants[i].isOnWaitList = true;
            }
            this.$emit("next");
          }
        },
        watch: {
          numberOfRegistrants() {
            if (!this.viewModel.waitListEnabled && this.viewModel.spotsRemaining !== null && this.viewModel.spotsRemaining < this.numberOfRegistrants) {
              this.showRemainingCapacity = true;
              var spotsRemaining = this.viewModel.spotsRemaining;
              this.$nextTick(() => this.numberOfRegistrants = spotsRemaining);
            }
          }
        },
        template: "\n<div class=\"registrationentry-intro\">\n    <NotificationBox v-if=\"isFull && numberToAddToWaitlist !== numberOfRegistrants\" class=\"text-left\" alertType=\"warning\">\n        <strong>{{registrationTermTitleCase}} Full</strong>\n        <p>\n            There are not any more {{registrationTermPlural}} available for {{viewModel.instanceName}}.\n        </p>\n    </NotificationBox>\n    <NotificationBox v-if=\"showRemainingCapacity\" class=\"text-left\" alertType=\"warning\">\n        <strong>{{registrationTermTitleCase}} Full</strong>\n        <p>\n            This {{registrationTerm}} only has capacity for {{remainingCapacityPhrase}}.\n        </p>\n    </NotificationBox>\n    <div class=\"text-left\" v-html=\"viewModel.instructionsHtml\">\n    </div>\n    <div v-if=\"viewModel.maxRegistrants > 1\" class=\"registrationentry-intro\">\n        <h1>How many {{viewModel.pluralRegistrantTerm}} will you be registering?</h1>\n        <NumberUpDown v-model=\"numberOfRegistrants\" class=\"margin-t-sm\" numberIncrementClasses=\"input-lg\" :max=\"viewModel.maxRegistrants\" />\n    </div>\n    <NotificationBox v-if=\"viewModel.timeoutMinutes\" alertType=\"info\" class=\"text-left\">\n        Due to a high-volume of expected interest, your {{registrationTerm}} session will expire after\n        {{pluralConditional(viewModel.timeoutMinutes, 'a minute', viewModel.timeoutMinutes + ' minutes')}}\n        of inactivity.\n    </NotificationBox>\n    <NotificationBox v-if=\"numberToAddToWaitlist === numberOfRegistrants\" class=\"text-left\" alertType=\"warning\">\n        This {{registrationTerm}} has reached its capacity. Complete the registration to be added to the waitlist.\n    </NotificationBox>\n    <NotificationBox v-else-if=\"numberToAddToWaitlist\" class=\"text-left\" alertType=\"warning\">\n        This {{registrationTerm}} only has capacity for {{remainingCapacityPhrase}}.\n        The first {{pluralConditional(viewModel.spotsRemaining, registrantTerm, viewModel.spotsRemaining + ' ' + registrantTermPlural)}} you add will be registered for {{viewModel.instanceName}}.\n        The remaining {{pluralConditional(numberToAddToWaitlist, registrantTerm, numberToAddToWaitlist + ' ' + registrantTermPlural)}} will be added to the waitlist.\n    </NotificationBox>\n\n    <div v-if=\"canContinue\" class=\"actions text-right\">\n        <RockButton btnType=\"primary\" @click=\"onNext\">\n            Next\n        </RockButton>\n    </div>\n</div>"
      });

      var RegistrantPersonField = defineComponent({
        name: "Event.RegistrationEntry.RegistrantPersonField",
        components: {
          NotificationBox,
          ComponentFromUrl
        },
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
        setup(props) {
          var registrationEntryState = inject("registrationEntryState");
          var component = computed(() => {
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
                return PhoneNumberBox;
              case RegistrationPersonFieldType.Race:
                return DropDownList;
              case RegistrationPersonFieldType.Ethnicity:
                return DropDownList;
            }
          });
          var fieldControlComponentProps = computed(() => {
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
                componentProps.items = [...registrationEntryState.viewModel.campuses];
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
                componentProps.items = [...registrationEntryState.viewModel.maritalStatuses];
                break;
              case RegistrationPersonFieldType.ConnectionStatus:
                componentProps.label = "Connection Status";
                componentProps.items = [...registrationEntryState.viewModel.connectionStatuses];
                break;
              case RegistrationPersonFieldType.Grade:
                componentProps.label = "Grade";
                componentProps.items = [...registrationEntryState.viewModel.grades];
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
                componentProps.items = [...registrationEntryState.viewModel.races];
                break;
              case RegistrationPersonFieldType.Ethnicity:
                componentProps.label = "Ethnicity";
                componentProps.items = [...registrationEntryState.viewModel.ethnicities];
                break;
            }
            return componentProps;
          });
          if (!(props.field.guid in props.fieldValues)) {
            var defaultValue = "";
            switch (props.field.personFieldType) {
              case RegistrationPersonFieldType.Birthdate:
                defaultValue = getDefaultDatePartsPickerModel();
                break;
              case RegistrationPersonFieldType.AnniversaryDate:
                defaultValue = getDefaultDatePartsPickerModel();
                break;
              case RegistrationPersonFieldType.Address:
                defaultValue = getDefaultAddressControlModel();
                break;
            }
            props.fieldValues[props.field.guid] = defaultValue;
          }
          return {
            component,
            fieldControlComponentProps,
            fieldValues: props.fieldValues,
            fieldType: props.field.personFieldType
          };
        },
        template: "\n<component v-if=\"component\" :is=\"component\" v-bind=\"fieldControlComponentProps\" v-model=\"fieldValues[field.guid]\" />\n<NotificationBox v-else alertType=\"danger\">Could not load the control for person field {{ fieldType }}.</NotificationBox>\n"
      });

      function isRuleMet$1(rule, fieldValues, formFields) {
        var _comparedToFormField$, _comparedToFormField$2;
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
        return fieldType.doesValueMatchFilter(value, rule.comparisonValue, (_comparedToFormField$2 = comparedToFormField.attribute.configurationValues) !== null && _comparedToFormField$2 !== void 0 ? _comparedToFormField$2 : {});
      }
      var RegistrantAttributeField = defineComponent({
        name: "Event.RegistrationEntry.RegistrantAttributeField",
        components: {
          NotificationBox,
          RockField
        },
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
        setup(props) {
          var _ref;
          var isVisible = computed(() => {
            switch (props.field.visibilityRuleType) {
              case FilterExpressionType.GroupAll:
                return props.field.visibilityRules.every(vr => isRuleMet$1(vr, props.fieldValues, props.formFields));
              case FilterExpressionType.GroupAllFalse:
                return props.field.visibilityRules.every(vr => !isRuleMet$1(vr, props.fieldValues, props.formFields));
              case FilterExpressionType.GroupAny:
                return props.field.visibilityRules.some(vr => isRuleMet$1(vr, props.fieldValues, props.formFields));
              case FilterExpressionType.GroupAnyFalse:
                return props.field.visibilityRules.some(vr => !isRuleMet$1(vr, props.fieldValues, props.formFields));
            }
            return true;
          });
          var value = ref((_ref = props.fieldValues[props.field.guid]) !== null && _ref !== void 0 ? _ref : "");
          var modifiedAttribute = computed(() => {
            if (!props.field.attribute) {
              return null;
            }
            var fieldAttribute = _objectSpread2({}, props.field.attribute);
            fieldAttribute.isRequired = props.field.isRequired;
            return fieldAttribute;
          });
          watch(() => props.fieldValues[props.field.guid], () => {
            value.value = props.fieldValues[props.field.guid];
          });
          watch(value, () => {
            props.fieldValues[props.field.guid] = value.value;
          });
          return {
            isVisible,
            modifiedAttribute,
            value
          };
        },
        template: "\n<template v-if=\"isVisible\">\n    <RockField v-if=\"modifiedAttribute\" v-model=\"value\" isEditMode :attribute=\"modifiedAttribute\" />\n    <NotificationBox v-else alertType=\"danger\">Could not resolve attribute field</NotificationBox>\n</template>"
      });

      var FeeField = defineComponent({
        name: "Event.RegistrationEntry.FeeField",
        components: {
          NumberUpDown,
          NumberUpDownGroup,
          DropDownList,
          CheckBox,
          NotificationBox
        },
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
        data() {
          return {
            dropDownValue: "",
            checkboxValue: false,
            disabled: false
          };
        },
        methods: {
          getItemLabel(item) {
            var formattedCost = Number$1.asFormattedString(item.cost, 2);
            if (item.countRemaining !== null && item.countRemaining !== undefined) {
              var formattedRemaining = Number$1.asFormattedString(item.countRemaining, 0);
              return "".concat(item.name, " ($").concat(formattedCost, ") (").concat(formattedRemaining, " remaining)");
            }
            return "".concat(item.name, " ($").concat(formattedCost, ")");
          }
        },
        computed: {
          label() {
            if (this.singleItem) {
              return this.getItemLabel(this.singleItem);
            }
            return this.fee.name;
          },
          singleItem() {
            if (this.fee.items.length !== 1) {
              return null;
            }
            return this.fee.items[0];
          },
          isHidden() {
            return !this.fee.items.length;
          },
          isCheckbox() {
            return !!this.singleItem && !this.fee.allowMultiple;
          },
          isNumberUpDown() {
            return !!this.singleItem && this.fee.allowMultiple;
          },
          isNumberUpDownGroup() {
            return this.fee.items.length > 1 && this.fee.allowMultiple;
          },
          isDropDown() {
            return this.fee.items.length > 1 && !this.fee.allowMultiple;
          },
          dropDownListOptions() {
            return this.fee.items.map(i => ({
              text: this.getItemLabel(i),
              value: i.guid,
              disabled: i.countRemaining != null && i.countRemaining < 1
            }));
          },
          numberUpDownGroupOptions() {
            return this.fee.items.map(i => {
              var _i$countRemaining;
              return {
                key: i.guid,
                label: this.getItemLabel(i),
                max: (_i$countRemaining = i.countRemaining) !== null && _i$countRemaining !== void 0 ? _i$countRemaining : 100,
                min: 0
              };
            });
          },
          rules() {
            return this.fee.isRequired ? "required" : "";
          },
          isDisabled() {
            return this.disabled ? "disabled" : undefined;
          }
        },
        watch: {
          modelValue: {
            immediate: true,
            deep: true,
            handler() {
              if (this.isDropDown) {
                this.dropDownValue = "";
                var _iterator = _createForOfIteratorHelper(this.fee.items),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    if (!this.dropDownValue && this.modelValue[item.guid]) {
                      this.modelValue[item.guid] = 1;
                      this.dropDownValue = item.guid;
                    } else if (this.modelValue[item.guid]) {
                      this.modelValue[item.guid] = 0;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              if (this.isCheckbox && this.singleItem) {
                this.checkboxValue = !!this.modelValue[this.singleItem.guid];
                this.modelValue[this.singleItem.guid] = this.checkboxValue ? 1 : 0;
                if (this.fee.isRequired && (this.fee.items[0].countRemaining === null || this.fee.items[0].countRemaining > 0)) {
                  this.checkboxValue = true;
                  this.modelValue[this.singleItem.guid] = this.checkboxValue ? 1 : 0;
                  this.disabled = true;
                }
                if (this.fee.items[0].countRemaining !== null && this.fee.items[0].countRemaining <= 0) {
                  this.checkboxValue = this.checkboxValue ? this.checkboxValue : false;
                  this.modelValue[this.singleItem.guid] = this.checkboxValue ? 1 : 0;
                  this.disabled = true;
                }
              }
            }
          },
          fee: {
            immediate: true,
            handler() {
              var _iterator2 = _createForOfIteratorHelper(this.fee.items),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;
                  this.modelValue[item.guid] = this.modelValue[item.guid] || 0;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          },
          dropDownValue() {
            var _iterator3 = _createForOfIteratorHelper(this.fee.items),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                var isSelected = GuidHelper.areEqual(this.dropDownValue, item.guid);
                this.modelValue[item.guid] = isSelected ? 1 : 0;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          },
          checkboxValue() {
            if (this.singleItem) {
              this.modelValue[this.singleItem.guid] = this.checkboxValue ? 1 : 0;
            }
          }
        },
        template: "\n<template v-if=\"!isHidden\">\n    <CheckBox v-if=\"isCheckbox\" :label=\"label\" v-model=\"checkboxValue\" :rules=\"rules\" :disabled=\"isDisabled\" />\n    <NumberUpDown v-else-if=\"isNumberUpDown\" :label=\"label\" :min=\"0\" :max=\"singleItem.countRemaining ?? 100\" v-model=\"modelValue[singleItem.guid]\" :rules=\"rules\" />\n    <DropDownList v-else-if=\"isDropDown\" :label=\"label\" :items=\"dropDownListOptions\" v-model=\"dropDownValue\" :rules=\"rules\" formControlClasses=\"input-width-md\" />\n    <NumberUpDownGroup v-else-if=\"isNumberUpDownGroup\" :label=\"label\" :options=\"numberUpDownGroupOptions\" v-model=\"modelValue\" :rules=\"rules\" />\n    <NotificationBox v-else alertType=\"danger\">This fee configuration is not supported</NotificationBox>\n</template>"
      });

      var store$2 = useStore();
      function isRuleMet(rule, fieldValues, formFields) {
        var _comparedToFormField$, _comparedToFormField$2;
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
        return fieldType.doesValueMatchFilter(value, rule.comparisonValue, (_comparedToFormField$2 = comparedToFormField.attribute.configurationValues) !== null && _comparedToFormField$2 !== void 0 ? _comparedToFormField$2 : {});
      }
      var Registrant = defineComponent({
        name: "Event.RegistrationEntry.Registrant",
        components: {
          ElectronicSignature,
          RadioButtonList,
          RockButton,
          RegistrantPersonField,
          RegistrantAttributeField,
          NotificationBox,
          RockForm,
          FeeField,
          DropDownList,
          ItemsWithPreAndPostHtml
        },
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
        setup() {
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = inject("registrationEntryState");
          var getRegistrationEntryBlockArgs = inject("getRegistrationEntryBlockArgs");
          var signatureData = ref(null);
          var signatureSource = ref("");
          var signatureToken = ref("");
          var formResetKey = ref("");
          var isNextDisabled = ref(false);
          var isSignatureDrawn = computed(() => registrationEntryState.viewModel.isSignatureDrawn);
          return {
            formResetKey,
            getRegistrationEntryBlockArgs,
            invokeBlockAction,
            isNextDisabled,
            isSignatureDrawn,
            registrationEntryState,
            signatureData,
            signatureSource,
            signatureToken
          };
        },
        updated() {
          this.updateFeeItemsRemaining();
        },
        data() {
          return {
            fieldSources: {
              personField: RegistrationFieldSource.PersonField,
              personAttribute: RegistrationFieldSource.PersonAttribute,
              groupMemberAttribute: RegistrationFieldSource.GroupMemberAttribute,
              registrantAttribute: RegistrationFieldSource.RegistrantAttribute
            }
          };
        },
        computed: {
          showPrevious() {
            return this.registrationEntryState.firstStep !== this.registrationEntryState.steps.perRegistrantForms;
          },
          viewModel() {
            return this.registrationEntryState.viewModel;
          },
          currentFormIndex() {
            return this.registrationEntryState.currentRegistrantFormIndex;
          },
          currentForm() {
            return this.formsToShow[this.currentFormIndex] || null;
          },
          isLastForm() {
            return this.currentFormIndex + 1 === this.formsToShow.length;
          },
          isDataForm() {
            return this.currentFormIndex < this.formsToShow.length;
          },
          isSignatureForm() {
            return this.viewModel.isInlineSignatureRequired && this.currentFormIndex === this.formsToShow.length;
          },
          isNextVisible() {
            return !this.isSignatureForm;
          },
          formsToShow() {
            if (!this.isWaitList) {
              return this.viewModel.registrantForms;
            }
            return this.viewModel.registrantForms.filter(form => form.fields.some(field => field.showOnWaitList));
          },
          currentFormFields() {
            var _this$currentForm;
            return (((_this$currentForm = this.currentForm) === null || _this$currentForm === void 0 ? void 0 : _this$currentForm.fields) || []).filter(f => !this.isWaitList || f.showOnWaitList);
          },
          currentFormFieldsAugmented() {
            var fields = JSON.parse(JSON.stringify(this.currentFormFields));
            fields.forEach((value, index) => {
              if (value.fieldSource != this.fieldSources.personField) {
                var isVisible = true;
                switch (value.visibilityRuleType) {
                  case FilterExpressionType.GroupAll:
                    isVisible = value.visibilityRules.every(vr => isRuleMet(vr, this.currentRegistrant.fieldValues, fields));
                    break;
                  case FilterExpressionType.GroupAllFalse:
                    isVisible = value.visibilityRules.every(vr => !isRuleMet(vr, this.currentRegistrant.fieldValues, fields));
                    break;
                  case FilterExpressionType.GroupAny:
                    isVisible = value.visibilityRules.some(vr => isRuleMet(vr, this.currentRegistrant.fieldValues, fields));
                    break;
                  case FilterExpressionType.GroupAnyFalse:
                    isVisible = value.visibilityRules.some(vr => !isRuleMet(vr, this.currentRegistrant.fieldValues, fields));
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
          },
          prePostHtmlItems() {
            return this.currentFormFieldsAugmented.map(f => ({
              preHtml: f.preHtml,
              postHtml: f.postHtml,
              slotName: f.guid
            }));
          },
          currentPerson() {
            return store$2.state.currentPerson;
          },
          pluralFeeTerm() {
            return StringFilter.toTitleCase(this.viewModel.pluralFeeTerm || "fees");
          },
          familyOptions() {
            var _this$currentPerson;
            var options = [];
            var usedFamilyGuids = {};
            if (this.viewModel.registrantsSameFamily !== RegistrantsSameFamily.Ask) {
              return options;
            }
            for (var i = 0; i < this.registrationEntryState.currentRegistrantIndex; i++) {
              var registrant = this.registrationEntryState.registrants[i];
              var info = getRegistrantBasicInfo(registrant, this.viewModel.registrantForms);
              if (!usedFamilyGuids[registrant.familyGuid] && info !== null && info !== void 0 && info.firstName && info !== null && info !== void 0 && info.lastName) {
                options.push({
                  text: "".concat(info.firstName, " ").concat(info.lastName),
                  value: registrant.familyGuid
                });
                usedFamilyGuids[registrant.familyGuid] = true;
              }
            }
            if ((_this$currentPerson = this.currentPerson) !== null && _this$currentPerson !== void 0 && _this$currentPerson.primaryFamilyGuid && this.currentPerson.fullName && !usedFamilyGuids[this.currentPerson.primaryFamilyGuid]) {
              usedFamilyGuids[this.currentPerson.primaryFamilyGuid] = true;
              options.push({
                text: this.currentPerson.fullName,
                value: this.currentPerson.primaryFamilyGuid
              });
            }
            var familyGuid = usedFamilyGuids[this.currentRegistrant.familyGuid] == true ? newGuid() : this.currentRegistrant.familyGuid;
            options.push({
              text: "None of the above",
              value: familyGuid
            });
            return options;
          },
          familyMemberOptions() {
            var usedFamilyMemberGuids = this.registrationEntryState.registrants.filter(r => r.personGuid && r.personGuid !== this.currentRegistrant.personGuid).map(r => r.personGuid);
            return this.viewModel.familyMembers.filter(fm => !usedFamilyMemberGuids.includes(fm.guid)).map(fm => ({
              text: fm.fullName,
              value: fm.guid
            }));
          },
          uppercaseRegistrantTerm() {
            return StringFilter.toTitleCase(this.viewModel.registrantTerm);
          },
          firstName() {
            return getRegistrantBasicInfo(this.currentRegistrant, this.viewModel.registrantForms).firstName;
          },
          familyMember() {
            var personGuid = this.currentRegistrant.personGuid;
            if (!personGuid) {
              return null;
            }
            return this.viewModel.familyMembers.find(fm => areEqual(fm.guid, personGuid)) || null;
          },
          signatureDocumentTerm() {
            return StringFilter.toTitleCase(this.viewModel.signatureDocumentTerm || "Release");
          }
        },
        methods: {
          onPrevious() {
            this.clearFormErrors();
            if (this.currentFormIndex <= 0) {
              this.$emit("previous");
              return;
            }
            this.registrationEntryState.currentRegistrantFormIndex--;
          },
          onNext() {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.clearFormErrors();
              var lastFormIndex = _this.formsToShow.length - 1;
              if (_this.viewModel.isInlineSignatureRequired) {
                _this.isNextDisabled = true;
                try {
                  var result = yield _this.invokeBlockAction("GetSignatureDocumentData", {
                    args: _this.getRegistrationEntryBlockArgs(),
                    registrantGuid: _this.currentRegistrant.guid
                  });
                  if (result.isSuccess && result.data) {
                    _this.signatureSource = result.data.documentHtml;
                    _this.signatureToken = result.data.securityToken;
                    lastFormIndex += 1;
                  } else {
                    console.error(result.data);
                    return;
                  }
                } finally {
                  _this.isNextDisabled = false;
                }
              }
              if (_this.currentFormIndex >= lastFormIndex) {
                _this.$emit("next");
                return;
              }
              _this.registrationEntryState.currentRegistrantFormIndex++;
            })();
          },
          updateFeeItemsRemaining() {
            var combinedFeeItemQuantities = {};
            var self = this;
            var _iterator = _createForOfIteratorHelper(self.registrationEntryState.registrants),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var registrant = _step.value;
                if (registrant.guid === this.currentRegistrant.guid) {
                  continue;
                }
                for (var feeItemGuid in registrant.feeItemQuantities) {
                  if (registrant.feeItemQuantities[feeItemGuid] > 0) {
                    var feeItemsUsed = registrant.feeItemQuantities[feeItemGuid];
                    if (combinedFeeItemQuantities[feeItemGuid] === undefined || combinedFeeItemQuantities[feeItemGuid] === null) {
                      combinedFeeItemQuantities[feeItemGuid] = feeItemsUsed;
                    } else {
                      combinedFeeItemQuantities[feeItemGuid] = combinedFeeItemQuantities[feeItemGuid] + feeItemsUsed;
                    }
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var fees = self.registrationEntryState.viewModel.fees;
            var _iterator2 = _createForOfIteratorHelper(fees),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var fee = _step2.value;
                var selfFee = fee;
                if (selfFee !== undefined && selfFee !== null && selfFee.items !== undefined && selfFee.items !== null && selfFee.items.length > 0) {
                  var _iterator3 = _createForOfIteratorHelper(selfFee.items),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var feeItem = _step3.value;
                      if (feeItem.countRemaining === null || feeItem.countRemaining === undefined || feeItem.originalCountRemaining === undefined || feeItem.originalCountRemaining === null) {
                        continue;
                      }
                      var usedFeeItemCount = combinedFeeItemQuantities[feeItem.guid];
                      if (usedFeeItemCount !== undefined && usedFeeItemCount !== null) {
                        feeItem.countRemaining = feeItem.originalCountRemaining - usedFeeItemCount;
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          },
          clearFormErrors() {
            this.formResetKey = newGuid();
          },
          onSigned() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              var result = yield _this2.invokeBlockAction("SignDocument", {
                args: _this2.getRegistrationEntryBlockArgs(),
                registrantGuid: _this2.currentRegistrant.guid,
                documentHtml: _this2.signatureSource,
                securityToken: _this2.signatureToken,
                signature: _this2.signatureData
              });
              if (result.isSuccess && result.data) {
                _this2.currentRegistrant.signatureData = result.data;
                _this2.$emit("next");
              } else {
                console.error(result.data);
              }
            })();
          },
          copyValuesFromFamilyMember() {
            if (!this.familyMember || this.registrationEntryState.navBack) {
              return;
            }
            var _iterator4 = _createForOfIteratorHelper(this.viewModel.registrantForms),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var form = _step4.value;
                var _iterator5 = _createForOfIteratorHelper(form.fields),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var field = _step5.value;
                    if (field.guid in this.familyMember.fieldValues) {
                      var familyMemberValue = this.familyMember.fieldValues[field.guid];
                      if (!familyMemberValue) {
                        delete this.currentRegistrant.fieldValues[field.guid];
                      } else if (typeof familyMemberValue === "object") {
                        this.currentRegistrant.fieldValues[field.guid] = _objectSpread2({}, familyMemberValue);
                      } else {
                        this.currentRegistrant.fieldValues[field.guid] = familyMemberValue;
                      }
                    } else {
                      delete this.currentRegistrant.fieldValues[field.guid];
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        },
        watch: {
          "currentRegistrant.familyGuid"() {
            this.currentRegistrant.personGuid = null;
          },
          familyMember: {
            handler() {
              if (!this.familyMember) {
                var _iterator6 = _createForOfIteratorHelper(this.viewModel.registrantForms),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var form = _step6.value;
                    var _iterator7 = _createForOfIteratorHelper(form.fields),
                      _step7;
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var field = _step7.value;
                        delete this.currentRegistrant.fieldValues[field.guid];
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
              } else {
                this.copyValuesFromFamilyMember();
              }
            }
          }
        },
        created() {
          this.copyValuesFromFamilyMember();
        },
        template: "\n<div>\n    <RockForm @submit=\"onNext\" :formResetKey=\"formResetKey\">\n        <template v-if=\"isDataForm\">\n            <template v-if=\"currentFormIndex === 0\">\n                <div v-if=\"familyOptions.length > 1\" class=\"well js-registration-same-family\">\n                    <RadioButtonList :label=\"(firstName || uppercaseRegistrantTerm) + ' is in the same immediate family as'\" rules='required:{\"allowEmptyString\": true}' v-model=\"currentRegistrant.familyGuid\" :items=\"familyOptions\" validationTitle=\"Family\" />\n                </div>\n                <div v-if=\"familyMemberOptions.length\" class=\"row\">\n                    <div class=\"col-md-6\">\n                        <DropDownList v-model=\"currentRegistrant.personGuid\" :items=\"familyMemberOptions\" label=\"Family Member to Register\" />\n                    </div>\n                </div>\n            </template>\n\n            <ItemsWithPreAndPostHtml :items=\"prePostHtmlItems\">\n                <template v-for=\"field in currentFormFields\" :key=\"field.guid\" v-slot:[field.guid]>\n                    <RegistrantPersonField v-if=\"field.fieldSource === fieldSources.personField\" :field=\"field\" :fieldValues=\"currentRegistrant.fieldValues\" :isKnownFamilyMember=\"!!currentRegistrant.personGuid\" />\n                    <RegistrantAttributeField v-else-if=\"field.fieldSource === fieldSources.registrantAttribute || field.fieldSource === fieldSources.personAttribute || field.fieldSource === fieldSources.groupMemberAttribute\" :field=\"field\" :fieldValues=\"currentRegistrant.fieldValues\" :formFields=\"currentFormFields\" />\n                    <NotificationBox alertType=\"danger\" v-else>Could not resolve field source {{field.fieldSource}}</NotificationBox>\n                </template>\n            </ItemsWithPreAndPostHtml>\n\n            <div v-if=\"!isWaitList && isLastForm && viewModel.fees.length\" class=\"well registration-additional-options\">\n                <h4>{{pluralFeeTerm}}</h4>\n                <template v-for=\"fee in viewModel.fees\" :key=\"fee.guid\">\n                    <FeeField :fee=\"fee\" v-model=\"currentRegistrant.feeItemQuantities\" />\n                </template>\n            </div>\n        </template>\n\n        <div v-if=\"isSignatureForm\" class=\"registrant-signature-document styled-scroll\">\n            <h2 class=\"signature-header\">Please Sign the {{ signatureDocumentTerm }} for {{ firstName }}</h2>\n            <div class=\"signaturedocument-container\">\n                <iframe src=\"javascript: window.frameElement.getAttribute('srcdoc');\" onload=\"this.style.height = this.contentWindow.document.body.scrollHeight + 'px'\" class=\"signaturedocument-iframe\" border=\"0\" frameborder=\"0\" :srcdoc=\"signatureSource\"></iframe>\n            </div>\n\n            <div class=\"well\">\n                <ElectronicSignature v-model=\"signatureData\" :isDrawn=\"isSignatureDrawn\" @signed=\"onSigned\" :documentTerm=\"signatureDocumentTerm\" />\n            </div>\n        </div>\n\n        <div class=\"actions row\">\n            <div class=\"col-xs-6\">\n                <RockButton v-if=\"showPrevious\" btnType=\"default\" @click=\"onPrevious\">\n                    Previous\n                </RockButton>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <RockButton v-if=\"isNextVisible\" btnType=\"primary\" type=\"submit\" :disabled=\"isNextDisabled\">\n                    Next\n                </RockButton>\n            </div>\n        </div>\n    </RockForm>\n</div>"
      });

      var RegistrationEntryRegistrants = defineComponent({
        name: "Event.RegistrationEntry.Registrants",
        components: {
          Registrant,
          NotificationBox
        },
        setup() {
          return {
            registrationEntryState: inject("registrationEntryState"),
            persistSession: inject("persistSession")
          };
        },
        data() {
          return {
            hasCopiedCommonValues: false
          };
        },
        methods: {
          onPrevious() {
            var _this = this;
            return _asyncToGenerator(function* () {
              if (_this.registrationEntryState.currentRegistrantIndex <= 0) {
                _this.$emit("previous");
                return;
              }
              var lastFormIndex = _this.registrationEntryState.viewModel.registrantForms.length - 1;
              _this.registrationEntryState.currentRegistrantIndex--;
              _this.registrationEntryState.currentRegistrantFormIndex = lastFormIndex;
              yield _this.persistSession();
            })();
          },
          onNext() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              var lastIndex = _this2.registrationEntryState.registrants.length - 1;
              if (_this2.registrationEntryState.currentRegistrantIndex >= lastIndex) {
                _this2.$emit("next");
                return;
              }
              if (_this2.registrationEntryState.currentRegistrantIndex === 0) {
                _this2.copyCommonValuesFromFirstRegistrant();
              }
              _this2.registrationEntryState.currentRegistrantIndex++;
              _this2.registrationEntryState.currentRegistrantFormIndex = 0;
              yield _this2.persistSession();
            })();
          },
          copyCommonValuesFromFirstRegistrant() {
            if (this.hasCopiedCommonValues) {
              return;
            }
            this.hasCopiedCommonValues = true;
            var firstRegistrant = this.registrants[0];
            for (var i = 1; i < this.registrants.length; i++) {
              var currentRegistrant = this.registrants[i];
              var _iterator = _createForOfIteratorHelper(this.registrationEntryState.viewModel.registrantForms),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var form = _step.value;
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
        },
        computed: {
          hasWaitlist() {
            return this.registrationEntryState.registrants.some(r => r.isOnWaitList);
          },
          isOnWaitlist() {
            var currentRegistrant = this.registrationEntryState.registrants[this.registrationEntryState.currentRegistrantIndex];
            return currentRegistrant.isOnWaitList;
          },
          registrantTerm() {
            return (this.registrationEntryState.viewModel.registrantTerm || "registrant").toLowerCase();
          },
          registrants() {
            return this.registrationEntryState.registrants;
          },
          currentRegistrantIndex() {
            return this.registrationEntryState.currentRegistrantIndex;
          }
        },
        template: "\n<div class=\"registrationentry-registrant\">\n    <NotificationBox v-if=\"hasWaitlist && !isOnWaitlist\" alertType=\"success\">\n        This {{registrantTerm}} will be fully registered.\n    </NotificationBox>\n    <NotificationBox v-else-if=\"isOnWaitlist\" alertType=\"warning\">\n        This {{registrantTerm}} will be on the waiting list.\n    </NotificationBox>\n    <template v-for=\"(r, i) in registrants\" :key=\"r.guid\">\n        <Registrant v-show=\"currentRegistrantIndex === i\" :currentRegistrant=\"r\" :isWaitList=\"isOnWaitlist\" @next=\"onNext\" @previous=\"onPrevious\" />\n    </template>\n</div>"
      });

      var RegistrationEntryRegistrationEnd = defineComponent({
        name: "Event.RegistrationEntry.RegistrationEnd",
        components: {
          RockButton,
          AttributeValuesContainer,
          RockForm
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var registrationEntryState = inject("registrationEntryState");
          var attributeValues = ref({});
          var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _a$key3, _a$attributeGuid2;
              var a = _step.value;
              attributeValues.value[(_a$key3 = a.key) !== null && _a$key3 !== void 0 ? _a$key3 : ""] = registrationEntryState.registrationFieldValues[(_a$attributeGuid2 = a.attributeGuid) !== null && _a$attributeGuid2 !== void 0 ? _a$attributeGuid2 : ""] || "";
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var showPrevious = computed(() => {
            return registrationEntryState.firstStep === registrationEntryState.steps.intro;
          });
          var attributes = computed(() => {
            var attrs = {};
            var _iterator2 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _a$key;
                var a = _step2.value;
                attrs[(_a$key = a.key) !== null && _a$key !== void 0 ? _a$key : ""] = a;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return attrs;
          });
          var onPrevious = () => {
            emit("previous");
          };
          var onNext = () => {
            emit("next");
          };
          watch(attributeValues, () => {
            var _iterator3 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesEnd),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _a$attributeGuid, _a$key2;
                var a = _step3.value;
                registrationEntryState.registrationFieldValues[(_a$attributeGuid = a.attributeGuid) !== null && _a$attributeGuid !== void 0 ? _a$attributeGuid : ""] = attributeValues.value[(_a$key2 = a.key) !== null && _a$key2 !== void 0 ? _a$key2 : ""];
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
          return {
            attributes,
            attributeValues,
            onNext,
            onPrevious,
            showPrevious
          };
        },
        template: "\n<div class=\"registrationentry-registration-attributes\">\n    <RockForm @submit=\"onNext\">\n        <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :showCategoryLabel=\"false\" />\n\n        <div class=\"actions row\">\n            <div class=\"col-xs-6\">\n                <RockButton v-if=\"showPrevious\" btnType=\"default\" @click=\"onPrevious\">\n                    Previous\n                </RockButton>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <RockButton btnType=\"primary\" type=\"submit\">\n                    Next\n                </RockButton>\n            </div>\n        </div>\n    </RockForm>\n</div>"
      });

      var RegistrationEntryRegistrationStart = defineComponent({
        name: "Event.RegistrationEntry.RegistrationStart",
        components: {
          RockButton,
          AttributeValuesContainer,
          RockForm
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var registrationEntryState = inject("registrationEntryState");
          var attributeValues = ref({});
          var _iterator = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _a$key3, _a$attributeGuid2;
              var a = _step.value;
              attributeValues.value[(_a$key3 = a.key) !== null && _a$key3 !== void 0 ? _a$key3 : ""] = registrationEntryState.registrationFieldValues[(_a$attributeGuid2 = a.attributeGuid) !== null && _a$attributeGuid2 !== void 0 ? _a$attributeGuid2 : ""] || "";
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var showPrevious = computed(() => {
            return registrationEntryState.firstStep === registrationEntryState.steps.intro;
          });
          var attributes = computed(() => {
            var attrs = {};
            var _iterator2 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _a$key;
                var a = _step2.value;
                attrs[(_a$key = a.key) !== null && _a$key !== void 0 ? _a$key : ""] = a;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return attrs;
          });
          var onPrevious = () => {
            emit("previous");
          };
          var onNext = () => {
            emit("next");
          };
          watch(attributeValues, () => {
            var _iterator3 = _createForOfIteratorHelper(registrationEntryState.viewModel.registrationAttributesStart),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _a$attributeGuid, _a$key2;
                var a = _step3.value;
                registrationEntryState.registrationFieldValues[(_a$attributeGuid = a.attributeGuid) !== null && _a$attributeGuid !== void 0 ? _a$attributeGuid : ""] = attributeValues.value[(_a$key2 = a.key) !== null && _a$key2 !== void 0 ? _a$key2 : ""];
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
          return {
            attributes,
            attributeValues,
            onNext,
            onPrevious,
            showPrevious
          };
        },
        template: "\n<div class=\"registrationentry-registration-attributes\">\n    <RockForm @submit=\"onNext\">\n        <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :showCategoryLabel=\"false\" />\n\n        <div class=\"actions row\">\n            <div class=\"col-xs-6\">\n                <RockButton v-if=\"showPrevious\" btnType=\"default\" @click=\"onPrevious\">\n                    Previous\n                </RockButton>\n            </div>\n            <div class=\"col-xs-6 text-right\">\n                <RockButton btnType=\"primary\" type=\"submit\">\n                    Next\n                </RockButton>\n            </div>\n        </div>\n    </RockForm>\n</div>"
      });

      var SessionRenewal = defineComponent({
        name: "Event.RegistrationEntry.SessionRenewal",
        components: {
          Dialog,
          LoadingIndicator,
          RockButton
        },
        props: {
          isSessionExpired: {
            type: Boolean,
            required: true
          }
        },
        setup() {
          return {
            registrationEntryState: inject("registrationEntryState"),
            invokeBlockAction: useInvokeBlockAction()
          };
        },
        data() {
          return {
            spotsSecured: null,
            isLoading: false,
            isModalVisible: false
          };
        },
        computed: {
          hasWaitlist() {
            return this.registrationEntryState.viewModel.waitListEnabled;
          },
          allRegistrantCount() {
            return this.registrationEntryState.registrants.length;
          },
          waitlistRegistrantCount() {
            return this.registrationEntryState.registrants.filter(r => r.isOnWaitList).length;
          },
          waitlistRegistrantCountWord() {
            return toWord(this.waitlistRegistrantCount);
          },
          nonWaitlistRegistrantCount() {
            return this.registrationEntryState.registrants.filter(r => !r.isOnWaitList).length;
          },
          nonWaitlistRegistrantCountWord() {
            return toWord(this.nonWaitlistRegistrantCount);
          }
        },
        methods: {
          pluralConditional,
          restart() {
            this.isLoading = true;
            location.reload();
          },
          close() {
            this.isModalVisible = false;
            this.$nextTick(() => {
              this.spotsSecured = null;
              this.isLoading = false;
            });
          },
          requestRenewal() {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.spotsSecured = 0;
              _this.isLoading = true;
              try {
                var response = yield _this.invokeBlockAction("TryToRenewSession", {
                  registrationSessionGuid: _this.registrationEntryState.registrationSessionGuid
                });
                if (response.isSuccess && response.data) {
                  var _asDate$toMillisecond;
                  var asDate = RockDateTime.parseISO(response.data.expirationDateTime);
                  _this.registrationEntryState.sessionExpirationDateMs = (_asDate$toMillisecond = asDate === null || asDate === void 0 ? void 0 : asDate.toMilliseconds()) !== null && _asDate$toMillisecond !== void 0 ? _asDate$toMillisecond : null;
                  _this.spotsSecured = response.data.spotsSecured;
                } else {
                  _this.registrationEntryState.sessionExpirationDateMs = null;
                  _this.spotsSecured = 0;
                }
                var deficiency = _this.nonWaitlistRegistrantCount - _this.spotsSecured;
                if (!deficiency) {
                  _this.$emit("success");
                  _this.close();
                  return;
                }
                _this.registrationEntryState.viewModel.spotsRemaining = _this.spotsSecured;
                if (!_this.hasWaitlist) {
                  _this.registrationEntryState.registrants.length = _this.spotsSecured;
                  return;
                }
                for (var i = _this.allRegistrantCount - 1; i >= 0; i--) {
                  if (!deficiency) {
                    break;
                  }
                  var registrant = _this.registrationEntryState.registrants[i];
                  if (registrant.isOnWaitList) {
                    continue;
                  }
                  registrant.isOnWaitList = true;
                  deficiency--;
                }
              } finally {
                _this.isLoading = false;
              }
            })();
          }
        },
        watch: {
          isSessionExpired() {
            if (this.isSessionExpired) {
              this.spotsSecured = null;
              this.isModalVisible = true;
            }
          }
        },
        template: "\n<Dialog :modelValue=\"isModalVisible\" :dismissible=\"false\">\n    <template #header>\n        <h4 v-if=\"isLoading || spotsSecured === null\">Registration Timed Out</h4>\n        <h4 v-else>Request Extension</h4>\n    </template>\n    <template #default>\n        <LoadingIndicator v-if=\"isLoading\" />\n        <template v-else-if=\"hasWaitlist && spotsSecured === 0\">\n            Due to high demand there is no longer space available.\n            You can continue, but your registrants will be placed on the waitlist.\n            Do you wish to continue with the registration?\n        </template>\n        <template v-else-if=\"spotsSecured === 0\">\n            Due to high demand there is no longer space available for this registration.\n        </template>\n        <template v-else-if=\"hasWaitlist && spotsSecured !== null\">\n            Due to high demand there is no longer space available for all your registrants.\n            Your last {{waitlistRegistrantCountWord}}\n            {{pluralConditional(waitlistRegistrantCount, 'registrant', ' registrants')}}\n            will be placed on the waitlist.\n            Do you wish to continue with the registration?\n        </template>\n        <template v-else-if=\"spotsSecured !== null\">\n            Due to high demand there is no longer space available for all your registrants.\n            Only {{nonWaitlistRegistrantCountWord}} {{pluralConditional(nonWaitlistRegistrantCount, 'spot is', 'spots are')}} available.\n            Your registration has been updated to only allow\n            {{nonWaitlistRegistrantCountWord}} {{pluralConditional(nonWaitlistRegistrantCount, 'registrant', 'registrants')}}.\n            Do you wish to continue with the registration?\n        </template>\n        <template v-else>\n            Your registration has timed out. Do you wish to request an extension in time?\n        </template>\n    </template>\n    <template v-if=\"!isLoading\" #footer>\n        <template v-if=\"!hasWaitlist && spotsSecured === 0\">\n            <RockButton btnType=\"link\" @click=\"restart\">Close</RockButton>\n        </template>\n        <template v-else-if=\"spotsSecured !== null\">\n            <RockButton btnType=\"primary\" @click=\"close\">Yes</RockButton>\n            <RockButton btnType=\"link\" @click=\"restart\">No, cancel registration</RockButton>\n        </template>\n        <template v-else>\n            <RockButton btnType=\"primary\" @click=\"requestRenewal\">Yes</RockButton>\n            <RockButton btnType=\"link\" @click=\"restart\">No, cancel registration</RockButton>\n        </template>\n    </template>\n</Dialog>"
      });

      var RegistrationEntrySuccess = defineComponent({
        name: "Event.RegistrationEntry.Success",
        components: {
          SaveFinancialAccountForm
        },
        setup() {
          return {
            registrationEntryState: inject("registrationEntryState")
          };
        },
        computed: {
          registrationTerm() {
            return this.registrationEntryState.viewModel.registrationTerm.toLowerCase();
          },
          messageHtml() {
            var _this$registrationEnt;
            return ((_this$registrationEnt = this.registrationEntryState.successViewModel) === null || _this$registrationEnt === void 0 ? void 0 : _this$registrationEnt.messageHtml) || "You have successfully completed this ".concat(this.registrationTerm);
          },
          gatewayGuid() {
            return this.registrationEntryState.viewModel.gatewayGuid;
          },
          transactionCode() {
            var _this$registrationEnt2;
            return this.registrationEntryState.viewModel.isRedirectGateway ? "" : ((_this$registrationEnt2 = this.registrationEntryState.successViewModel) === null || _this$registrationEnt2 === void 0 ? void 0 : _this$registrationEnt2.transactionCode) || "";
          },
          gatewayPersonIdentifier() {
            var _this$registrationEnt3;
            return ((_this$registrationEnt3 = this.registrationEntryState.successViewModel) === null || _this$registrationEnt3 === void 0 ? void 0 : _this$registrationEnt3.gatewayPersonIdentifier) || "";
          },
          enableSaveAccount() {
            return this.registrationEntryState.viewModel.enableSaveAccount && this.registrationEntryState.savedAccountGuid === null;
          }
        },
        template: "\n<div>\n    <div v-html=\"messageHtml\"></div>\n    <SaveFinancialAccountForm v-if=\"gatewayGuid && transactionCode && gatewayPersonIdentifier && enableSaveAccount\"\n        :gatewayGuid=\"gatewayGuid\"\n        :transactionCode=\"transactionCode\"\n        :gatewayPersonIdentifier=\"gatewayPersonIdentifier\"\n        class=\"well\">\n        <template #header>\n            <h3>Make Payments Even Easier</h3>\n        </template>\n    </SaveFinancialAccountForm>\n</div>"
      });

      var RegistrationEntryPayment = defineComponent({
        name: "Event.RegistrationEntry.Payment",
        components: {
          RockButton,
          RockForm,
          NotificationBox,
          GatewayControl,
          RockValidation
        },
        setup() {
          var submitPayment = provideSubmitPayment();
          var getRegistrationEntryBlockArgs = inject("getRegistrationEntryBlockArgs");
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = inject("registrationEntryState");
          var loading = ref(false);
          var gatewayErrorMessage = ref("");
          var gatewayValidationFields = ref([]);
          var submitErrorMessage = ref("");
          var selectedSavedAccount = ref("");
          return {
            uniqueId: newGuid(),
            loading,
            gatewayErrorMessage,
            gatewayValidationFields,
            submitErrorMessage,
            selectedSavedAccount,
            submitPayment,
            getRegistrationEntryBlockArgs,
            invokeBlockAction,
            registrationEntryState: registrationEntryState
          };
        },
        computed: {
          gatewayControlModel() {
            return this.viewModel.gatewayControl;
          },
          viewModel() {
            return this.registrationEntryState.viewModel;
          },
          finishButtonText() {
            return "Pay";
          },
          hasSavedAccounts() {
            return this.registrationEntryState.viewModel.savedAccounts !== null && this.registrationEntryState.viewModel.savedAccounts.length > 0;
          },
          savedAccountOptions() {
            if (this.registrationEntryState.viewModel.savedAccounts === null) {
              return [];
            }
            var options = [...this.registrationEntryState.viewModel.savedAccounts];
            options.push({
              value: "",
              text: "New Payment Method"
            });
            return options;
          },
          showGateway() {
            return !this.hasSavedAccounts || this.selectedSavedAccount === "";
          },
          amountToPay() {
            return this.registrationEntryState.amountToPayToday;
          },
          amountToPayText() {
            return "$".concat(this.registrationEntryState.amountToPayToday.toFixed(2));
          },
          redirectReturnUrl() {
            if (window.location.href.includes("?")) {
              return "".concat(window.location.href, "&sessionGuid=").concat(this.registrationEntryState.registrationSessionGuid);
            } else {
              return "".concat(window.location.href, "?sessionGuid=").concat(this.registrationEntryState.registrationSessionGuid);
            }
          }
        },
        methods: {
          onPrevious() {
            this.$emit("previous");
          },
          onNext() {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.loading = true;
              if (_this.registrationEntryState.amountToPayToday) {
                if (_this.showGateway) {
                  _this.gatewayErrorMessage = "";
                  _this.gatewayValidationFields = [];
                  _this.submitPayment();
                } else if (_this.selectedSavedAccount !== "") {
                  _this.registrationEntryState.savedAccountGuid = toGuidOrNull(_this.selectedSavedAccount);
                  var success = yield _this.submit();
                  _this.loading = false;
                  if (success) {
                    _this.$emit("next");
                  }
                } else {
                  _this.submitErrorMessage = "Please select a valid payment option.";
                  _this.loading = false;
                  return;
                }
              } else {
                var _success = yield _this.submit();
                _this.loading = false;
                if (_success) {
                  _this.$emit("next");
                }
              }
            })();
          },
          onGatewayControlSuccess(token) {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              _this2.registrationEntryState.gatewayToken = token;
              var success = yield _this2.submit();
              _this2.loading = false;
              if (success) {
                _this2.$emit("next");
              }
            })();
          },
          onGatewayControlError(message) {
            this.loading = false;
            this.gatewayErrorMessage = message;
          },
          onGatewayControlValidation(invalidFields) {
            this.loading = false;
            this.gatewayValidationFields = invalidFields;
          },
          getOptionUniqueId(option) {
            var _option$value$replace, _option$value;
            var key = (_option$value$replace = (_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.replace(" ", "-")) !== null && _option$value$replace !== void 0 ? _option$value$replace : "";
            return "".concat(this.uniqueId, "-").concat(key);
          },
          getAccountImage(option) {
            var _option$image;
            return (_option$image = option.image) !== null && _option$image !== void 0 ? _option$image : "";
          },
          getAccountName(option) {
            var _option$text;
            return (_option$text = option.text) !== null && _option$text !== void 0 ? _option$text : "";
          },
          getAccountDescription(option) {
            var _option$description;
            return (_option$description = option.description) !== null && _option$description !== void 0 ? _option$description : "";
          },
          submit() {
            var _this3 = this;
            return _asyncToGenerator(function* () {
              _this3.submitErrorMessage = "";
              var result = yield _this3.invokeBlockAction("SubmitRegistration", {
                args: _this3.getRegistrationEntryBlockArgs()
              });
              if (result.isError || !result.data) {
                _this3.submitErrorMessage = result.errorMessage || "Unknown error";
              } else {
                _this3.registrationEntryState.successViewModel = result.data;
              }
              return result.isSuccess;
            })();
          }
        },
        template: "\n<div class=\"registrationentry-payment\">\n    <RockForm @submit=\"onNext\">\n        <h4>Payment Information</h4>\n        <div>\n            Payment Amount: {{ amountToPayText }}\n        </div>\n\n        <hr/>\n\n        <div v-if=\"gatewayControlModel\" class=\"payment-method-options\">\n            <div v-if=\"hasSavedAccounts\" v-for=\"savedAccount in savedAccountOptions\" class=\"radio payment-method\">\n                <label :for=\"getOptionUniqueId(savedAccount)\">\n                    <input :id=\"getOptionUniqueId(savedAccount)\"\n                        :name=\"uniqueId\"\n                        type=\"radio\"\n                        :value=\"savedAccount.value\"\n                        v-model=\"selectedSavedAccount\" />\n                    <span class=\"label-text payment-method-account\">\n                        <img v-if=\"getAccountImage(savedAccount)\" class=\"payment-method-image\" :src=\"getAccountImage(savedAccount)\">\n                        <span class=\"payment-method-name\">{{ getAccountName(savedAccount) }}</span>\n                        <span class=\"payment-method-description text-muted\">{{ getAccountDescription(savedAccount) }}</span>\n                    </span>\n                </label>\n            </div>\n\n            <div class=\"position-relative overflow-hidden\">\n                <transition name=\"rockslide\">\n                    <div v-if=\"showGateway\" class=\"hosted-gateway-container payment-method-entry\">\n                        <NotificationBox v-if=\"gatewayErrorMessage\" alertType=\"danger\">{{gatewayErrorMessage}}</NotificationBox>\n                        <RockValidation :errors=\"gatewayValidationFields\" />\n                        <div class=\"hosted-payment-control\">\n                            <GatewayControl\n                                :gatewayControlModel=\"gatewayControlModel\"\n                                :amountToPay=\"amountToPay\"\n                                :returnUrl=\"redirectReturnUrl\"\n                                @success=\"onGatewayControlSuccess\"\n                                @error=\"onGatewayControlError\"\n                                @validation=\"onGatewayControlValidation\" />\n                        </div>\n                    </div>\n                </transition>\n            </div>\n        </div>\n\n        <NotificationBox v-if=\"submitErrorMessage\" alertType=\"danger\">{{submitErrorMessage}}</NotificationBox>\n\n        <div class=\"actions text-right\">\n            <RockButton class=\"pull-left\" btnType=\"default\" @click=\"onPrevious\" :isLoading=\"loading\" autoDisable>\n                Previous\n            </RockButton>\n\n            <RockButton v-if=\"gatewayControlModel\" btnType=\"primary\" type=\"submit\" :isLoading=\"loading\" autoDisable>\n                {{finishButtonText}}\n            </RockButton>\n        </div>\n    </RockForm>\n</div>"
      });

      var RegistrationCostSummaryType = function (RegistrationCostSummaryType) {
        RegistrationCostSummaryType[RegistrationCostSummaryType["Cost"] = 0] = "Cost";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Fee"] = 1] = "Fee";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Discount"] = 2] = "Discount";
        RegistrationCostSummaryType[RegistrationCostSummaryType["Total"] = 3] = "Total";
        return RegistrationCostSummaryType;
      }(RegistrationCostSummaryType || {});
      var CostSummary = defineComponent({
        name: "Event.RegistrationEntry.CostSummary",
        components: {
          Loading,
          CurrencyBox,
          HelpBlock
        },
        setup() {
          return {
            getRegistrationEntryBlockArgs: inject("getRegistrationEntryBlockArgs"),
            invokeBlockAction: useInvokeBlockAction(),
            registrationEntryState: inject("registrationEntryState")
          };
        },
        data() {
          return {
            isLoading: false,
            lineItems: []
          };
        },
        computed: {
          augmentedLineItems() {
            return this.lineItems.map(li => _objectSpread2(_objectSpread2({}, li), {}, {
              isFee: li.type === RegistrationCostSummaryType.Fee,
              discountHelp: this.hasDiscount && li.cost === li.discountedCost ? "This item is not eligible for the discount." : "",
              amountFormatted: asFormattedString(li.cost, 2),
              discountedAmountFormatted: asFormattedString(li.discountedCost, 2)
            }));
          },
          hasDiscount() {
            return this.lineItems.some(li => li.discountedCost !== li.cost);
          },
          total() {
            var total = 0;
            this.lineItems.forEach(li => total += li.cost);
            return total;
          },
          totalFormatted() {
            return "$".concat(asFormattedString(this.total, 2));
          },
          defaultPaymentAmount() {
            var total = 0;
            var hasDefault = false;
            this.lineItems.forEach(li => {
              if (li.defaultPayment) {
                hasDefault = true;
                total += li.defaultPayment;
              }
            });
            total = hasDefault ? total : this.maxAmountCanBePaid;
            if (total > this.maxAmountCanBePaid) {
              total = this.maxAmountCanBePaid;
            }
            if (total < this.amountDueToday) {
              total = this.amountDueToday;
            }
            if (total < 0) {
              total = 0;
            }
            return total;
          },
          discountedTotal() {
            var total = 0;
            this.lineItems.forEach(li => total += li.discountedCost);
            return total;
          },
          discountedTotalFormatted() {
            return "$".concat(asFormattedString(this.discountedTotal, 2));
          },
          amountDueToday() {
            if (this.amountPreviouslyPaid) {
              return 0;
            }
            var total = 0;
            this.lineItems.forEach(li => total += Math.min(li.minPayment, li.discountedCost));
            return total;
          },
          amountDueTodayFormatted() {
            return "$".concat(asFormattedString(this.amountDueToday, 2));
          },
          showAmountDueToday() {
            return this.amountDueToday !== this.discountedTotal;
          },
          amountPreviouslyPaid() {
            var _this$registrationEnt;
            return ((_this$registrationEnt = this.registrationEntryState.viewModel.session) === null || _this$registrationEnt === void 0 ? void 0 : _this$registrationEnt.previouslyPaid) || 0;
          },
          amountPreviouslyPaidFormatted() {
            return "$".concat(asFormattedString(this.amountPreviouslyPaid, 2));
          },
          maxAmountCanBePaid() {
            var balance = this.discountedTotal - this.amountPreviouslyPaid;
            if (balance > 0) {
              return balance;
            }
            return 0;
          },
          maxAmountCanBePaidFormatted() {
            return "$".concat(asFormattedString(this.maxAmountCanBePaid, 2));
          },
          amountRemaining() {
            var actual = this.maxAmountCanBePaid - this.registrationEntryState.amountToPayToday;
            var bounded = actual < 0 ? 0 : actual > this.maxAmountCanBePaid ? this.maxAmountCanBePaid : actual;
            return bounded;
          },
          amountRemainingFormatted() {
            return "$".concat(asFormattedString(this.amountRemaining, 2));
          },
          amountToPayTodayRules() {
            var rules = [];
            var min = this.amountDueToday;
            var max = this.maxAmountCanBePaid;
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
          }
        },
        methods: {
          fetchData() {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.isLoading = true;
              _this.lineItems = [];
              try {
                var response = yield _this.invokeBlockAction("CalculateCost", {
                  args: _this.getRegistrationEntryBlockArgs()
                });
                if (response.data) {
                  _this.lineItems = response.data;
                }
              } finally {
                _this.isLoading = false;
              }
            })();
          }
        },
        created() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            yield _this2.fetchData();
          })();
        },
        watch: {
          defaultPaymentAmount: {
            immediate: true,
            handler() {
              this.registrationEntryState.amountToPayToday = this.defaultPaymentAmount;
            }
          },
          "registrationEntryState.discountCode"() {
            var _this3 = this;
            return _asyncToGenerator(function* () {
              yield _this3.fetchData();
            })();
          }
        },
        template: "\n<Loading :isLoading=\"isLoading\">\n    <div class=\"fee-table\">\n        <div class=\"row hidden-xs fee-header\">\n            <div class=\"col-sm-6\">\n                <strong>Description</strong>\n            </div>\n            <div v-if=\"hasDiscount\" class=\"col-sm-3 fee-value\">\n                <strong>Discounted Amount</strong>\n            </div>\n            <div class=\"col-sm-3 fee-value\">\n                <strong>Amount</strong>\n            </div>\n        </div>\n        <div v-for=\"lineItem in augmentedLineItems\" class=\"row\" :class=\"lineItem.isFee ? 'fee-row-fee' : 'fee-row-cost'\">\n            <div class=\"col-sm-6 fee-caption\">\n                {{lineItem.description}}\n            </div>\n            <div v-if=\"hasDiscount\" class=\"col-sm-3 fee-value\">\n                <HelpBlock v-if=\"lineItem.discountHelp\" :text=\"lineItem.discountHelp\" />\n                <span class=\"visible-xs-inline\">Discounted Amount:</span>\n                $ {{lineItem.discountedAmountFormatted}}\n            </div>\n            <div class=\"col-sm-3 fee-value\">\n                <span class=\"visible-xs-inline\">Amount:</span>\n                $ {{lineItem.amountFormatted}}\n            </div>\n        </div>\n        <div class=\"row fee-row-total\">\n            <div class=\"col-sm-6 fee-caption\">\n                Total\n            </div>\n            <div v-if=\"hasDiscount\" class=\"col-sm-3 fee-value\">\n                <span class=\"visible-xs-inline\">Discounted Amount:</span>\n                {{discountedTotalFormatted}}\n            </div>\n            <div class=\"col-sm-3 fee-value\">\n                <span class=\"visible-xs-inline\">Amount:</span>\n                {{totalFormatted}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row fee-totals\">\n        <div class=\"col-sm-offset-8 col-sm-4 fee-totals-options\">\n            <div class=\"form-group static-control\">\n                <label class=\"control-label\">Total Cost</label>\n                <div class=\"control-wrapper\">\n                    <div class=\"form-control-static\">\n                        {{discountedTotalFormatted}}\n                    </div>\n                </div>\n            </div>\n            <div v-if=\"amountPreviouslyPaid\" class=\"form-group static-control\">\n                <label class=\"control-label\">Previously Paid</label>\n                <div class=\"control-wrapper\">\n                    <div class=\"form-control-static\">\n                        {{amountPreviouslyPaidFormatted}}\n                    </div>\n                </div>\n            </div>\n            <template v-if=\"showAmountDueToday && maxAmountCanBePaid\">\n                <div class=\"form-group static-control\">\n                    <label class=\"control-label\">Minimum Due Today</label>\n                    <div class=\"control-wrapper\">\n                        <div class=\"form-control-static\">\n                            {{amountDueTodayFormatted}}\n                        </div>\n                    </div>\n                </div>\n                <CurrencyBox label=\"Amount To Pay Today\" :rules=\"amountToPayTodayRules\" v-model=\"registrationEntryState.amountToPayToday\" formGroupClasses=\"form-right\" inputGroupClasses=\"input-width-md amount-to-pay\" />\n                <div class=\"form-group static-control\">\n                    <label class=\"control-label\">Amount Remaining After Payment</label>\n                    <div class=\"control-wrapper\">\n                        <div class=\"form-control-static\">\n                            {{amountRemainingFormatted}}\n                        </div>\n                    </div>\n                </div>\n            </template>\n            <div v-else class=\"form-group static-control\">\n                <label class=\"control-label\">Amount Due</label>\n                <div class=\"control-wrapper\">\n                    <div class=\"form-control-static\">\n                        {{maxAmountCanBePaidFormatted}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</Loading>"
      });

      var DiscountCodeForm = defineComponent({
        name: "Event.RegistrationEntry.DiscountCodeForm",
        components: {
          RockButton,
          TextBox,
          NotificationBox
        },
        setup() {
          var getRegistrationEntryBlockArgs = inject("getRegistrationEntryBlockArgs");
          return {
            invokeBlockAction: useInvokeBlockAction(),
            registrationEntryState: inject("registrationEntryState"),
            getRegistrationEntryBlockArgs
          };
        },
        mounted() {
          this.tryDiscountCode(true);
        },
        data() {
          return {
            loading: false,
            discountCodeInput: "",
            discountCodeWarningMessage: ""
          };
        },
        computed: {
          discountCodeSuccessMessage() {
            var _this$registrationEnt;
            var discountAmount = this.registrationEntryState.discountAmount;
            var discountPercent = this.registrationEntryState.discountPercentage;
            var discountMaxRegistrants = (_this$registrationEnt = this.registrationEntryState.discountMaxRegistrants) !== null && _this$registrationEnt !== void 0 ? _this$registrationEnt : 0;
            var registrantCount = this.registrationEntryState.registrants.length;
            if (!discountPercent && !discountAmount) {
              return "";
            }
            var discountText = discountPercent ? "".concat(asFormattedString(discountPercent * 100, 0), "%") : "$".concat(asFormattedString(discountAmount, 2));
            if (discountMaxRegistrants != 0 && registrantCount > discountMaxRegistrants) {
              var registrantTerm = discountMaxRegistrants == 1 ? "registrant" : "registrants";
              return "Your ".concat(discountText, " discount code was successfully applied to the maximum allowed number of ").concat(discountMaxRegistrants, " ").concat(registrantTerm);
            }
            return "Your ".concat(discountText, " discount code for all registrants was successfully applied.");
          },
          isDiscountPanelVisible() {
            return this.viewModel.hasDiscountsAvailable;
          },
          isDiscountCodeAllowed() {
            var args = this.getRegistrationEntryBlockArgs();
            if (args.discountCode.length > 0 && args.registrationGuid != null) {
              return false;
            }
            return true;
          },
          viewModel() {
            return this.registrationEntryState.viewModel;
          }
        },
        methods: {
          tryDiscountCode(isAutoApply) {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.loading = true;
              try {
                var _this$viewModel$sessi, _this$viewModel$sessi2;
                var result = yield _this.invokeBlockAction("CheckDiscountCode", {
                  code: _this.discountCodeInput,
                  registrantCount: _this.registrationEntryState.registrants.length,
                  registrationGuid: (_this$viewModel$sessi = (_this$viewModel$sessi2 = _this.viewModel.session) === null || _this$viewModel$sessi2 === void 0 ? void 0 : _this$viewModel$sessi2.registrationGuid) !== null && _this$viewModel$sessi !== void 0 ? _this$viewModel$sessi : null,
                  isAutoApply: isAutoApply !== null && isAutoApply !== void 0 ? isAutoApply : false
                });
                if (result.isError || !result.data) {
                  if (!isAutoApply) {
                    if (result.errorMessage != null && result.errorMessage != "") {
                      _this.discountCodeWarningMessage = result.errorMessage;
                    } else if (_this.discountCodeInput != "") {
                      _this.discountCodeWarningMessage = "'".concat(_this.discountCodeInput, "' is not a valid Discount Code.");
                    }
                  }
                } else {
                  _this.discountCodeWarningMessage = "";
                  _this.discountCodeInput = _this.discountCodeInput == "" ? result.data.discountCode : _this.discountCodeInput;
                  _this.registrationEntryState.discountAmount = result.data.discountAmount;
                  _this.registrationEntryState.discountPercentage = result.data.discountPercentage;
                  _this.registrationEntryState.discountCode = result.data.discountCode;
                  _this.registrationEntryState.discountMaxRegistrants = result.data.discountMaxRegistrants;
                }
              } finally {
                _this.loading = false;
              }
            })();
          }
        },
        watch: {
          "registrationEntryState.DiscountCode": {
            immediate: true,
            handler() {
              this.discountCodeInput = this.registrationEntryState.discountCode;
            }
          }
        },
        template: "\n<div v-if=\"isDiscountPanelVisible || discountCodeInput\" class=\"clearfix\">\n    <NotificationBox v-if=\"discountCodeWarningMessage\" alertType=\"warning\">{{discountCodeWarningMessage}}</NotificationBox>\n    <NotificationBox v-if=\"discountCodeSuccessMessage\" alertType=\"success\">{{discountCodeSuccessMessage}}</NotificationBox>\n    <div class=\"form-group pull-right\">\n        <label class=\"control-label\">Discount Code</label>\n        <div class=\"input-group\">\n            <input type=\"text\" :disabled=\"loading || !isDiscountCodeAllowed\" class=\"form-control input-width-md input-sm\" v-model=\"discountCodeInput\" />\n            <RockButton v-if=\"isDiscountCodeAllowed\" btnSize=\"sm\" :isLoading=\"loading\" class=\"margin-l-sm\" @click=\"tryDiscountCode(false)\">\n                Apply\n            </RockButton>\n        </div>\n    </div>\n</div>"
      });

      var store$1 = useStore();
      var Registrar = defineComponent({
        name: "Event.RegistrationEntry.Registrar",
        components: {
          TextBox,
          InlineCheckBox,
          EmailBox,
          StaticFormControl,
          RadioButtonList
        },
        setup() {
          return {
            getRegistrationEntryBlockArgs: inject("getRegistrationEntryBlockArgs"),
            registrationEntryState: inject("registrationEntryState")
          };
        },
        data() {
          return {
            isRegistrarPanelShown: true
          };
        },
        computed: {
          useLoggedInPersonForRegistrar() {
            return !!this.currentPerson && this.viewModel.registrarOption === RegistrarOption.UseLoggedInPerson;
          },
          currentPerson() {
            return store$1.state.currentPerson;
          },
          registrar() {
            return this.registrationEntryState.registrar;
          },
          firstRegistrant() {
            return this.registrationEntryState.registrants[0];
          },
          viewModel() {
            return this.registrationEntryState.viewModel;
          },
          doShowUpdateEmailOption() {
            var _this$currentPerson;
            return !this.viewModel.forceEmailUpdate && !!((_this$currentPerson = this.currentPerson) !== null && _this$currentPerson !== void 0 && _this$currentPerson.email);
          },
          registrantInfos() {
            return this.registrationEntryState.registrants.map(r => getRegistrantBasicInfo(r, this.viewModel.registrantForms));
          },
          registrantTerm() {
            return this.registrantInfos.length === 1 ? this.viewModel.registrantTerm : this.viewModel.pluralRegistrantTerm;
          },
          instanceName() {
            return this.viewModel.instanceName;
          },
          familyOptions() {
            var options = [];
            var usedFamilyGuids = {};
            if (this.viewModel.registrantsSameFamily !== RegistrantsSameFamily.Ask) {
              return options;
            }
            for (var i = 0; i < this.registrationEntryState.registrants.length; i++) {
              var registrant = this.registrationEntryState.registrants[i];
              var info = getRegistrantBasicInfo(registrant, this.viewModel.registrantForms);
              if (!usedFamilyGuids[registrant.familyGuid] && info !== null && info !== void 0 && info.firstName && info !== null && info !== void 0 && info.lastName) {
                options.push({
                  text: "".concat(info.firstName, " ").concat(info.lastName),
                  value: registrant.familyGuid
                });
                usedFamilyGuids[registrant.familyGuid] = true;
              }
            }
            if (!usedFamilyGuids[this.registrationEntryState.ownFamilyGuid]) {
              options.push({
                text: "None",
                value: this.registrationEntryState.ownFamilyGuid
              });
            }
            return options;
          }
        },
        methods: {
          prefillRegistrar() {
            this.isRegistrarPanelShown = true;
            if (this.currentPerson && (this.viewModel.registrarOption === RegistrarOption.UseLoggedInPerson || this.viewModel.registrarOption === RegistrarOption.PromptForRegistrar)) {
              this.registrar.nickName = this.currentPerson.nickName || this.currentPerson.firstName || "";
              this.registrar.lastName = this.currentPerson.lastName || "";
              this.registrar.email = this.currentPerson.email || "";
              this.registrar.familyGuid = this.currentPerson.primaryFamilyGuid || null;
              return;
            }
            if (this.viewModel.registrarOption === RegistrarOption.PromptForRegistrar) {
              return;
            }
            if (this.viewModel.registrarOption === RegistrarOption.PrefillFirstRegistrant || this.viewModel.registrarOption === RegistrarOption.UseFirstRegistrant) {
              var firstRegistrantInfo = getRegistrantBasicInfo(this.firstRegistrant, this.viewModel.registrantForms);
              this.registrar.nickName = firstRegistrantInfo.firstName;
              this.registrar.lastName = firstRegistrantInfo.lastName;
              this.registrar.email = firstRegistrantInfo.email;
              this.registrar.familyGuid = this.firstRegistrant.familyGuid;
              var hasAllInfo = !!this.registrar.nickName && !!this.registrar.lastName && !!this.registrar.email;
              if (hasAllInfo && this.viewModel.registrarOption === RegistrarOption.UseFirstRegistrant) {
                this.isRegistrarPanelShown = false;
              }
              return;
            }
          }
        },
        watch: {
          currentPerson: {
            immediate: true,
            handler() {
              this.prefillRegistrar();
            }
          }
        },
        template: "\n<div v-if=\"isRegistrarPanelShown\" class=\"well\">\n    <h4>This Registration Was Completed By</h4>\n    <template v-if=\"useLoggedInPersonForRegistrar\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <StaticFormControl label=\"First Name\" v-model=\"registrar.nickName\" />\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <StaticFormControl label=\"Last Name\" v-model=\"registrar.lastName\" />\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <StaticFormControl label=\"Email\" v-model=\"registrar.email\" />\n          </div>\n        </div>\n    </template>\n    <template v-else>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n                <TextBox label=\"First Name\" rules=\"required\" v-model=\"registrar.nickName\" tabIndex=\"1\" />\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n                <TextBox label=\"Last Name\" rules=\"required\" v-model=\"registrar.lastName\" tabIndex=\"2\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n                <EmailBox label=\"Send Confirmation Emails To\" rules=\"required\" v-model=\"registrar.email\" tabIndex=\"3\" />\n                <InlineCheckBox v-if=\"doShowUpdateEmailOption\" label=\"Should Your Account Be Updated To Use This Email Address?\" v-model=\"registrar.updateEmail\" />\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n                <RadioButtonList\n                    v-if=\"familyOptions.length\"\n                    :label=\"(registrar.nickName || 'Person') + ' is in the same immediate family as'\"\n                    rules='required:{\"allowEmptyString\": true}'\n                    v-model=\"registrar.familyGuid\"\n                    :items=\"familyOptions\"\n                    validationTitle=\"Family\" />\n            </div>\n        </div>\n    </template>\n</div>"
      });

      var RegistrationEntrySummary = defineComponent({
        name: "Event.RegistrationEntry.Summary",
        components: {
          RockButton,
          EmailBox,
          RockForm,
          NotificationBox,
          DropDownList,
          GatewayControl,
          RockValidation,
          CostSummary,
          Registrar,
          DiscountCodeForm
        },
        setup() {
          var getRegistrationEntryBlockArgs = inject("getRegistrationEntryBlockArgs");
          var invokeBlockAction = useInvokeBlockAction();
          var registrationEntryState = inject("registrationEntryState");
          var loading = ref(false);
          var submitErrorMessage = ref("");
          var persistSession = inject("persistSession");
          var hasPaymentCost = computed(() => {
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
            var hasCostFees = registrationEntryState.viewModel.fees.some(f => f.items.some(i => i.cost > 0 && usedFeeIds.includes(i.guid)));
            return hasCostFees || registrationEntryState.viewModel.cost > 0;
          });
          if (!hasPaymentCost.value) {
            registrationEntryState.amountToPayToday = 0;
          }
          return {
            loading,
            submitErrorMessage,
            getRegistrationEntryBlockArgs,
            hasPaymentCost,
            invokeBlockAction,
            persistSession,
            registrationEntryState: registrationEntryState
          };
        },
        computed: {
          viewModel() {
            return this.registrationEntryState.viewModel;
          },
          registrantInfos() {
            return this.registrationEntryState.registrants.map(r => getRegistrantBasicInfo(r, this.viewModel.registrantForms));
          },
          registrantTerm() {
            return this.registrantInfos.length === 1 ? this.viewModel.registrantTerm : this.viewModel.pluralRegistrantTerm;
          },
          instanceName() {
            return this.viewModel.instanceName;
          },
          finishButtonText() {
            if (this.registrationEntryState.amountToPayToday) {
              return this.viewModel.isRedirectGateway ? "Pay" : "Next";
            } else {
              return "Finish";
            }
          }
        },
        methods: {
          onPrevious() {
            this.$emit("previous");
          },
          onNext() {
            var _this = this;
            return _asyncToGenerator(function* () {
              _this.loading = true;
              if (_this.registrationEntryState.amountToPayToday) {
                yield _this.persistSession(true);
                if (_this.viewModel.isRedirectGateway) {
                  var redirectUrl = yield _this.getPaymentRedirect();
                  if (redirectUrl) {
                    location.href = redirectUrl;
                  } else {
                    _this.loading = false;
                  }
                } else {
                  _this.loading = false;
                  _this.$emit("next");
                }
              } else {
                var success = yield _this.submit();
                _this.loading = false;
                if (success) {
                  _this.$emit("next");
                }
              }
            })();
          },
          submit() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              _this2.submitErrorMessage = "";
              var result = yield _this2.invokeBlockAction("SubmitRegistration", {
                args: _this2.getRegistrationEntryBlockArgs()
              });
              if (result.isError || !result.data) {
                _this2.submitErrorMessage = result.errorMessage || "Unknown error";
              } else {
                _this2.registrationEntryState.successViewModel = result.data;
              }
              return result.isSuccess;
            })();
          },
          getPaymentRedirect() {
            var _this3 = this;
            return _asyncToGenerator(function* () {
              var result = yield _this3.invokeBlockAction("GetPaymentRedirect", {
                args: _this3.getRegistrationEntryBlockArgs(),
                returnUrl: window.location.href
              });
              if (result.isError || !result.data) {
                _this3.submitErrorMessage = result.errorMessage || "Unknown error";
              }
              return result.data || "";
            })();
          }
        },
        template: "\n<div class=\"registrationentry-summary\">\n    <RockForm @submit=\"onNext\">\n\n        <Registrar />\n\n        <div v-if=\"hasPaymentCost\">\n            <h4>Payment Summary</h4>\n            <DiscountCodeForm />\n            <CostSummary />\n        </div>\n\n        <div v-if=\"!hasPaymentCost\" class=\"margin-b-md\">\n            <p>The following {{registrantTerm}} will be registered for {{instanceName}}:</p>\n            <ul>\n                <li v-for=\"r in registrantInfos\" :key=\"r.guid\">\n                    <strong>{{r.firstName}} {{r.lastName}}</strong>\n                </li>\n            </ul>\n        </div>\n\n        <NotificationBox v-if=\"submitErrorMessage\" alertType=\"danger\">{{submitErrorMessage}}</NotificationBox>\n\n        <div class=\"actions text-right\">\n            <RockButton v-if=\"viewModel.allowRegistrationUpdates\" class=\"pull-left\" btnType=\"default\" @click=\"onPrevious\" :isLoading=\"loading\" autoDisable>\n                Previous\n            </RockButton>\n            <RockButton btnType=\"primary\" type=\"submit\" :isLoading=\"loading\" autoDisable>\n                {{finishButtonText}}\n            </RockButton>\n        </div>\n    </RockForm>\n</div>"
      });

      var store = useStore();
      var registrationEntry = exports('default', defineComponent({
        name: "Event.RegistrationEntry",
        components: {
          RockButton,
          RegistrationEntryIntro,
          RegistrationEntryRegistrants,
          RegistrationEntryRegistrationStart,
          RegistrationEntryRegistrationEnd,
          RegistrationEntrySummary,
          RegistrationEntryPayment,
          RegistrationEntrySuccess,
          ProgressTracker,
          NotificationBox,
          CountdownTimer,
          JavaScriptAnchor,
          SessionRenewal
        },
        setup() {
          var _viewModel$registrati, _viewModel$session, _viewModel$session2, _viewModel$session3, _viewModel$session4, _viewModel$session5, _viewModel$session6, _viewModel$session7, _viewModel$session8, _store$state$currentP;
          var steps = {
            [Step.Intro]: Step.Intro,
            [Step.RegistrationStartForm]: Step.RegistrationStartForm,
            [Step.PerRegistrantForms]: Step.PerRegistrantForms,
            [Step.RegistrationEndForm]: Step.RegistrationEndForm,
            [Step.Review]: Step.Review,
            [Step.Payment]: Step.Payment,
            [Step.Success]: Step.Success
          };
          var notFound = ref(false);
          var viewModel = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var notFoundMessage = (viewModel === null || viewModel === void 0 ? void 0 : viewModel.registrationInstanceNotFoundMessage) || "The selected registration could not be found or is no longer active.";
          if (viewModel === null || viewModel.registrationInstanceNotFoundMessage) {
            notFound.value = true;
            return {
              viewModel,
              notFound,
              notFoundMessage
            };
          }
          if (!viewModel.registrationAttributesStart) {
            notFound.value = true;
          }
          var hasPreAttributes = ((_viewModel$registrati = viewModel.registrationAttributesStart) === null || _viewModel$registrati === void 0 ? void 0 : _viewModel$registrati.length) > 0;
          var currentStep = steps.intro;
          if (viewModel.successViewModel) {
            currentStep = steps.success;
          } else if (viewModel.session && !viewModel.startAtBeginning) {
            currentStep = steps.review;
          } else if (viewModel.maxRegistrants === 1 && isNullOrWhiteSpace(viewModel.instructionsHtml)) {
            currentStep = hasPreAttributes ? steps.registrationStartForm : steps.perRegistrantForms;
          } else if (viewModel.isExistingRegistration && viewModel.startAtBeginning) {
            currentStep = hasPreAttributes ? steps.registrationStartForm : steps.perRegistrantForms;
          }
          var staticRegistrationEntryState = {
            steps: steps,
            viewModel: viewModel,
            firstStep: currentStep,
            currentStep: currentStep,
            navBack: false,
            currentRegistrantFormIndex: 0,
            currentRegistrantIndex: 0,
            registrants: ((_viewModel$session = viewModel.session) === null || _viewModel$session === void 0 ? void 0 : _viewModel$session.registrants) || [getDefaultRegistrantInfo(null, viewModel, null)],
            registrationFieldValues: ((_viewModel$session2 = viewModel.session) === null || _viewModel$session2 === void 0 ? void 0 : _viewModel$session2.fieldValues) || {},
            registrar: ((_viewModel$session3 = viewModel.session) === null || _viewModel$session3 === void 0 ? void 0 : _viewModel$session3.registrar) || {
              nickName: "",
              lastName: "",
              email: "",
              updateEmail: true,
              familyGuid: null
            },
            gatewayToken: "",
            savedAccountGuid: null,
            discountCode: ((_viewModel$session4 = viewModel.session) === null || _viewModel$session4 === void 0 ? void 0 : _viewModel$session4.discountCode) || "",
            discountAmount: ((_viewModel$session5 = viewModel.session) === null || _viewModel$session5 === void 0 ? void 0 : _viewModel$session5.discountAmount) || 0,
            discountPercentage: ((_viewModel$session6 = viewModel.session) === null || _viewModel$session6 === void 0 ? void 0 : _viewModel$session6.discountPercentage) || 0,
            discountMaxRegistrants: ((_viewModel$session7 = viewModel.session) === null || _viewModel$session7 === void 0 ? void 0 : _viewModel$session7.discountMaxRegistrants) || 0,
            successViewModel: viewModel.successViewModel,
            amountToPayToday: 0,
            sessionExpirationDateMs: null,
            registrationSessionGuid: ((_viewModel$session8 = viewModel.session) === null || _viewModel$session8 === void 0 ? void 0 : _viewModel$session8.registrationSessionGuid) || newGuid(),
            ownFamilyGuid: ((_store$state$currentP = store.state.currentPerson) === null || _store$state$currentP === void 0 ? void 0 : _store$state$currentP.primaryFamilyGuid) || newGuid()
          };
          var registrationEntryState = reactive(staticRegistrationEntryState);
          provide("registrationEntryState", registrationEntryState);
          var getRegistrationEntryBlockArgs = () => {
            var _viewModel$session9;
            return {
              registrationSessionGuid: registrationEntryState.registrationSessionGuid,
              gatewayToken: registrationEntryState.gatewayToken,
              savedAccountGuid: registrationEntryState.savedAccountGuid,
              discountCode: registrationEntryState.discountCode,
              fieldValues: registrationEntryState.registrationFieldValues,
              registrar: registrationEntryState.registrar,
              registrants: registrationEntryState.registrants,
              amountToPayNow: registrationEntryState.amountToPayToday,
              registrationGuid: ((_viewModel$session9 = viewModel.session) === null || _viewModel$session9 === void 0 ? void 0 : _viewModel$session9.registrationGuid) || null
            };
          };
          provide("getRegistrationEntryBlockArgs", getRegistrationEntryBlockArgs);
          var persistSession = function () {
            var _ref = _asyncToGenerator(function* () {
              var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (!force && !viewModel.timeoutMinutes) {
                return;
              }
              var response = yield invokeBlockAction("PersistSession", {
                args: getRegistrationEntryBlockArgs()
              });
              if (response.data) {
                var _expirationDate$toMil;
                var expirationDate = RockDateTime.parseISO(response.data.expirationDateTime);
                registrationEntryState.sessionExpirationDateMs = (_expirationDate$toMil = expirationDate === null || expirationDate === void 0 ? void 0 : expirationDate.toMilliseconds()) !== null && _expirationDate$toMil !== void 0 ? _expirationDate$toMil : null;
              }
            });
            return function persistSession() {
              return _ref.apply(this, arguments);
            };
          }();
          provide("persistSession", persistSession);
          return {
            viewModel,
            steps,
            registrationEntryState,
            notFound,
            notFoundMessage,
            persistSession,
            invokeBlockAction,
            getRegistrationEntryBlockArgs
          };
        },
        data() {
          return {
            secondsBeforeExpiration: -1,
            hasSessionRenewalSuccess: false
          };
        },
        computed: {
          currentPerson() {
            return store.state.currentPerson;
          },
          isSessionExpired() {
            return this.secondsBeforeExpiration === 0 && this.currentStep !== Step.Success;
          },
          mustLogin() {
            return !store.state.currentPerson && this.viewModel != null && (this.viewModel.isUnauthorized || this.viewModel.loginRequiredToRegister);
          },
          isUnauthorized() {
            var _this$viewModel$isUna, _this$viewModel;
            return (_this$viewModel$isUna = (_this$viewModel = this.viewModel) === null || _this$viewModel === void 0 ? void 0 : _this$viewModel.isUnauthorized) !== null && _this$viewModel$isUna !== void 0 ? _this$viewModel$isUna : false;
          },
          currentStep() {
            var _this$registrationEnt, _this$registrationEnt2;
            return (_this$registrationEnt = (_this$registrationEnt2 = this.registrationEntryState) === null || _this$registrationEnt2 === void 0 ? void 0 : _this$registrationEnt2.currentStep) !== null && _this$registrationEnt !== void 0 ? _this$registrationEnt : "";
          },
          registrants() {
            var _this$registrationEnt3, _this$registrationEnt4;
            return (_this$registrationEnt3 = (_this$registrationEnt4 = this.registrationEntryState) === null || _this$registrationEnt4 === void 0 ? void 0 : _this$registrationEnt4.registrants) !== null && _this$registrationEnt3 !== void 0 ? _this$registrationEnt3 : [];
          },
          hasPreAttributes() {
            var _this$viewModel$regis, _this$viewModel2, _this$viewModel2$regi;
            return ((_this$viewModel$regis = (_this$viewModel2 = this.viewModel) === null || _this$viewModel2 === void 0 ? void 0 : (_this$viewModel2$regi = _this$viewModel2.registrationAttributesStart) === null || _this$viewModel2$regi === void 0 ? void 0 : _this$viewModel2$regi.length) !== null && _this$viewModel$regis !== void 0 ? _this$viewModel$regis : 0) > 0;
          },
          hasPostAttributes() {
            var _this$viewModel$regis2, _this$viewModel3, _this$viewModel3$regi;
            return ((_this$viewModel$regis2 = (_this$viewModel3 = this.viewModel) === null || _this$viewModel3 === void 0 ? void 0 : (_this$viewModel3$regi = _this$viewModel3.registrationAttributesEnd) === null || _this$viewModel3$regi === void 0 ? void 0 : _this$viewModel3$regi.length) !== null && _this$viewModel$regis2 !== void 0 ? _this$viewModel$regis2 : 0) > 0;
          },
          progressTrackerIndex() {
            var _this$registrationEnt5;
            if (this.currentStep === Step.Intro || this.registrationEntryState == null) {
              return 0;
            }
            var stepsBeforePre = ((_this$registrationEnt5 = this.registrationEntryState) === null || _this$registrationEnt5 === void 0 ? void 0 : _this$registrationEnt5.firstStep) === Step.Intro ? 1 : 0;
            if (this.currentStep === Step.RegistrationStartForm) {
              return stepsBeforePre;
            }
            var stepsBeforeRegistrants = stepsBeforePre + (this.hasPreAttributes ? 1 : 0);
            if (this.currentStep === Step.PerRegistrantForms) {
              return this.registrationEntryState.currentRegistrantIndex + stepsBeforeRegistrants;
            }
            var stepsToCompleteRegistrants = this.registrationEntryState.registrants.length + stepsBeforeRegistrants;
            if (this.currentStep === Step.RegistrationEndForm) {
              return stepsToCompleteRegistrants;
            }
            if (this.currentStep === Step.Review) {
              return stepsToCompleteRegistrants + (this.hasPostAttributes ? 1 : 0);
            }
            if (this.currentStep === Step.Payment) {
              return stepsToCompleteRegistrants + (this.hasPostAttributes ? 1 : 0);
            }
            return 0;
          },
          uppercaseRegistrantTerm() {
            var _this$viewModel$regis3, _this$viewModel4;
            return StringFilter.toTitleCase((_this$viewModel$regis3 = (_this$viewModel4 = this.viewModel) === null || _this$viewModel4 === void 0 ? void 0 : _this$viewModel4.registrantTerm) !== null && _this$viewModel$regis3 !== void 0 ? _this$viewModel$regis3 : "");
          },
          currentRegistrantTitle() {
            if (this.registrationEntryState == null) {
              return "";
            }
            var ordinal = Number$1.toOrdinal(this.registrationEntryState.currentRegistrantIndex + 1);
            var title = StringFilter.toTitleCase(this.registrants.length <= 1 ? this.uppercaseRegistrantTerm : ordinal + " " + this.uppercaseRegistrantTerm);
            if (this.registrationEntryState.currentRegistrantFormIndex > 0) {
              title += " (cont)";
            }
            return title;
          },
          stepTitleHtml() {
            if (this.currentStep === Step.RegistrationStartForm) {
              var _this$viewModel$regis4, _this$viewModel5;
              return (_this$viewModel$regis4 = (_this$viewModel5 = this.viewModel) === null || _this$viewModel5 === void 0 ? void 0 : _this$viewModel5.registrationAttributeTitleStart) !== null && _this$viewModel$regis4 !== void 0 ? _this$viewModel$regis4 : "";
            }
            if (this.currentStep === Step.PerRegistrantForms) {
              return this.currentRegistrantTitle;
            }
            if (this.currentStep === Step.RegistrationEndForm) {
              var _this$viewModel$regis5, _this$viewModel6;
              return (_this$viewModel$regis5 = (_this$viewModel6 = this.viewModel) === null || _this$viewModel6 === void 0 ? void 0 : _this$viewModel6.registrationAttributeTitleEnd) !== null && _this$viewModel$regis5 !== void 0 ? _this$viewModel$regis5 : "";
            }
            if (this.currentStep === Step.Review) {
              return "Review Registration";
            }
            if (this.currentStep === Step.Success) {
              var _this$registrationEnt6, _this$registrationEnt7;
              return ((_this$registrationEnt6 = this.registrationEntryState) === null || _this$registrationEnt6 === void 0 ? void 0 : (_this$registrationEnt7 = _this$registrationEnt6.successViewModel) === null || _this$registrationEnt7 === void 0 ? void 0 : _this$registrationEnt7.titleHtml) || "Congratulations";
            }
            return "";
          },
          progressTrackerItems() {
            var items = [];
            if (this.registrationEntryState == null) {
              return items;
            }
            if (this.registrationEntryState.firstStep === Step.Intro) {
              items.push({
                key: "Start",
                title: "Start",
                subtitle: this.viewModel.registrationTerm
              });
            }
            if (this.hasPreAttributes) {
              items.push({
                key: "Pre",
                title: this.viewModel.registrationAttributeTitleStart,
                subtitle: this.viewModel.registrationTerm
              });
            }
            if (!this.registrationEntryState.registrants.length) {
              items.push({
                key: "Registrant",
                title: toTitleCase(this.viewModel.registrantTerm),
                subtitle: this.viewModel.registrationTerm
              });
            }
            for (var i = 0; i < this.registrationEntryState.registrants.length; i++) {
              var registrant = this.registrationEntryState.registrants[i];
              var info = getRegistrantBasicInfo(registrant, this.viewModel.registrantForms);
              if (info !== null && info !== void 0 && info.firstName && info !== null && info !== void 0 && info.lastName) {
                items.push({
                  key: "Registrant-".concat(registrant.guid),
                  title: info.firstName,
                  subtitle: info.lastName
                });
              } else {
                items.push({
                  key: "Registrant-".concat(registrant.guid),
                  title: toTitleCase(this.viewModel.registrantTerm),
                  subtitle: toTitleCase(toWord(i + 1))
                });
              }
            }
            if (this.hasPostAttributes) {
              items.push({
                key: "Post",
                title: this.viewModel.registrationAttributeTitleEnd,
                subtitle: this.viewModel.registrationTerm
              });
            }
            items.push({
              key: "Finalize",
              title: "Finalize",
              subtitle: this.viewModel.registrationTerm
            });
            return items;
          },
          isInvalidGateway() {
            if (!this.viewModel) {
              return false;
            }
            var hasCostFees = new List(this.viewModel.fees).any(f => new List(f.items).any(i => i.cost > 0));
            if (this.viewModel.cost <= 0 && !hasCostFees) {
              return false;
            }
            if (this.viewModel.isRedirectGateway || this.viewModel.gatewayControl.fileUrl) {
              return false;
            }
            return true;
          },
          isFull() {
            if (!this.viewModel || this.viewModel.spotsRemaining === null) {
              return false;
            }
            return this.viewModel.spotsRemaining < 1 && !this.viewModel.waitListEnabled;
          },
          preventNewRegistration() {
            if (!this.viewModel) {
              return this.isFull;
            }
            return this.isFull && !this.viewModel.isExistingRegistration;
          },
          registrationTerm() {
            var _this$viewModel7;
            return (((_this$viewModel7 = this.viewModel) === null || _this$viewModel7 === void 0 ? void 0 : _this$viewModel7.registrationTerm) || "registration").toLowerCase();
          },
          registrationTermPlural() {
            var _this$viewModel8;
            return (((_this$viewModel8 = this.viewModel) === null || _this$viewModel8 === void 0 ? void 0 : _this$viewModel8.pluralRegistrationTerm) || "registrations").toLowerCase();
          },
          registrationTermTitleCase() {
            return toTitleCase(this.registrationTerm);
          }
        },
        methods: {
          onSessionRenewalSuccess() {
            this.hasSessionRenewalSuccess = true;
            setTimeout(() => this.hasSessionRenewalSuccess = false, 5000);
          },
          onIntroNext() {
            var _this = this;
            return _asyncToGenerator(function* () {
              if (_this.persistSession && _this.registrationEntryState) {
                yield _this.persistSession(false);
                _this.registrationEntryState.currentStep = _this.hasPreAttributes ? Step.RegistrationStartForm : Step.PerRegistrantForms;
                _this.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrationStartPrevious() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              if (_this2.persistSession && _this2.registrationEntryState) {
                yield _this2.persistSession(false);
                _this2.registrationEntryState.currentStep = Step.Intro;
                _this2.registrationEntryState.navBack = true;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrationStartNext() {
            var _this3 = this;
            return _asyncToGenerator(function* () {
              if (_this3.persistSession && _this3.registrationEntryState) {
                yield _this3.persistSession(false);
                _this3.registrationEntryState.currentStep = Step.PerRegistrantForms;
                _this3.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrantPrevious() {
            var _this4 = this;
            return _asyncToGenerator(function* () {
              if (_this4.persistSession && _this4.registrationEntryState) {
                yield _this4.persistSession(false);
                _this4.registrationEntryState.currentStep = _this4.hasPreAttributes ? Step.RegistrationStartForm : Step.Intro;
                _this4.registrationEntryState.navBack = true;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrantNext() {
            var _this5 = this;
            return _asyncToGenerator(function* () {
              if (_this5.persistSession && _this5.registrationEntryState) {
                yield _this5.persistSession(false);
                _this5.registrationEntryState.currentStep = _this5.hasPostAttributes ? Step.RegistrationEndForm : Step.Review;
                _this5.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrationEndPrevious() {
            var _this6 = this;
            return _asyncToGenerator(function* () {
              if (_this6.persistSession && _this6.registrationEntryState) {
                yield _this6.persistSession(false);
                _this6.registrationEntryState.currentStep = Step.PerRegistrantForms;
                _this6.registrationEntryState.navBack = true;
                Page.smoothScrollToTop();
              }
            })();
          },
          onRegistrationEndNext() {
            var _this7 = this;
            return _asyncToGenerator(function* () {
              if (_this7.persistSession && _this7.registrationEntryState) {
                yield _this7.persistSession(false);
                _this7.registrationEntryState.currentStep = Step.Review;
                _this7.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          },
          onSummaryPrevious() {
            var _this8 = this;
            return _asyncToGenerator(function* () {
              if (_this8.persistSession && _this8.registrationEntryState) {
                yield _this8.persistSession(false);
                if (_this8.hasPostAttributes) {
                  _this8.registrationEntryState.currentStep = Step.RegistrationEndForm;
                } else {
                  var lastFormIndex = _this8.registrationEntryState.viewModel.registrantForms.length - 1;
                  _this8.registrationEntryState.currentRegistrantFormIndex = lastFormIndex;
                  _this8.registrationEntryState.currentStep = Step.PerRegistrantForms;
                }
                _this8.registrationEntryState.navBack = true;
                Page.smoothScrollToTop();
              }
            })();
          },
          onSummaryNext() {
            var _this9 = this;
            return _asyncToGenerator(function* () {
              if (_this9.persistSession && _this9.registrationEntryState) {
                if (_this9.registrationEntryState.amountToPayToday) {
                  _this9.registrationEntryState.currentStep = Step.Payment;
                } else {
                  _this9.registrationEntryState.currentStep = Step.Success;
                }
                _this9.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          },
          onPaymentPrevious() {
            var _this10 = this;
            return _asyncToGenerator(function* () {
              if (_this10.persistSession && _this10.registrationEntryState) {
                yield _this10.persistSession(false);
                _this10.registrationEntryState.currentStep = Step.Review;
                _this10.registrationEntryState.navBack = true;
                Page.smoothScrollToTop();
              }
            })();
          },
          onPaymentNext() {
            var _this11 = this;
            return _asyncToGenerator(function* () {
              if (_this11.persistSession && _this11.registrationEntryState) {
                _this11.registrationEntryState.currentStep = Step.Success;
                _this11.registrationEntryState.navBack = false;
                Page.smoothScrollToTop();
              }
            })();
          }
        },
        watch: {
          currentPerson: {
            immediate: true,
            handler() {
              if (this.viewModel != null && this.registrationEntryState != null) {
                var forcedFamilyGuid = getForcedFamilyGuid(this.currentPerson, this.viewModel);
                if (forcedFamilyGuid) {
                  var _iterator = _createForOfIteratorHelper(this.registrationEntryState.registrants),
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
              }
            }
          },
          "registrationEntryState.sessionExpirationDateMs": {
            immediate: true,
            handler() {
              var _this$registrationEnt8;
              if (!((_this$registrationEnt8 = this.registrationEntryState) !== null && _this$registrationEnt8 !== void 0 && _this$registrationEnt8.sessionExpirationDateMs)) {
                this.secondsBeforeExpiration = -1;
                return;
              }
              var nowMs = RockDateTime.now().toMilliseconds();
              var thenMs = this.registrationEntryState.sessionExpirationDateMs;
              var diffMs = thenMs - nowMs;
              this.secondsBeforeExpiration = diffMs / 1000;
            }
          }
        },
        mounted() {
          var _this$viewModel9;
          if ((_this$viewModel9 = this.viewModel) !== null && _this$viewModel9 !== void 0 && _this$viewModel9.loginRequiredToRegister && !store.state.currentPerson) {
            store.redirectToLogin();
          }
        },
        template: "\n<div>\n    <NotificationBox v-if=\"notFound\" alertType=\"warning\">\n        <strong>Sorry</strong>\n        <p>{{notFoundMessage}}</p>\n    </NotificationBox>\n    <NotificationBox v-else-if=\"mustLogin\" alertType=\"warning\">\n        <strong>Please log in</strong>\n        <p>You must be logged in to access this registration.</p>\n    </NotificationBox>\n    <NotificationBox v-else-if=\"isUnauthorized\" alertType=\"warning\">\n        <strong>Sorry</strong>\n        <p>You are not allowed to view or edit the selected registration since you are not the one who created the registration.</p>\n    </NotificationBox>\n    <NotificationBox v-else-if=\"isInvalidGateway\" alertType=\"warning\">\n        <strong>Incorrect Configuration</strong>\n        <p>This registration has costs/fees associated with it but the configured payment gateway is not supported.</p>\n    </NotificationBox>\n    <NotificationBox v-else-if=\"preventNewRegistration\" class=\"text-left\" alertType=\"warning\">\n        <strong>{{registrationTermTitleCase}} Full</strong>\n        <p>\n            There are not any more {{registrationTermPlural}} available for {{viewModel.instanceName}}.\n        </p>\n    </NotificationBox>\n    <template v-else>\n        <h1 v-if=\"currentStep !== steps.intro\" v-html=\"stepTitleHtml\"></h1>\n        <ProgressTracker v-if=\"currentStep !== steps.success\" :items=\"progressTrackerItems\" :currentIndex=\"progressTrackerIndex\">\n            <template #aside>\n                <div v-if=\"secondsBeforeExpiration >= 0\" v-show=\"secondsBeforeExpiration <= (30 * 60)\" class=\"remaining-time flex-grow-1 flex-md-grow-0\">\n                    <NotificationBox v-if=\"hasSessionRenewalSuccess\" alertType=\"success\" class=\"m-0 pt-3\" style=\"position: absolute; top: 0; left: 0; right: 0; bottom: 0;\">\n                        <h4>Success</h4>\n                    </NotificationBox>\n                    <span class=\"remaining-time-title\">Time left before timeout</span>\n                    <p class=\"remaining-time-countdown\">\n                        <CountdownTimer v-model=\"secondsBeforeExpiration\" />\n                    </p>\n                </div>\n            </template>\n        </ProgressTracker>\n        <RegistrationEntryIntro v-if=\"currentStep === steps.intro\" @next=\"onIntroNext\" />\n        <RegistrationEntryRegistrationStart v-else-if=\"currentStep === steps.registrationStartForm\" @next=\"onRegistrationStartNext\" @previous=\"onRegistrationStartPrevious\" />\n        <RegistrationEntryRegistrants v-else-if=\"currentStep === steps.perRegistrantForms\" @next=\"onRegistrantNext\" @previous=\"onRegistrantPrevious\" />\n        <RegistrationEntryRegistrationEnd v-else-if=\"currentStep === steps.registrationEndForm\" @next=\"onRegistrationEndNext\" @previous=\"onRegistrationEndPrevious\" />\n        <RegistrationEntrySummary v-else-if=\"currentStep === steps.review\" @next=\"onSummaryNext\" @previous=\"onSummaryPrevious\" />\n        <RegistrationEntryPayment v-else-if=\"currentStep === steps.payment\" @next=\"onPaymentNext\" @previous=\"onPaymentPrevious\" />\n        <RegistrationEntrySuccess v-else-if=\"currentStep === steps.success\" />\n        <NotificationBox v-else alertType=\"danger\">Invalid State: '{{currentStep}}'</NotificationBox>\n    </template>\n    <SessionRenewal :isSessionExpired=\"isSessionExpired\" @success=\"onSessionRenewalSuccess\" />\n</div>"
      }));

    })
  };
}));
//# sourceMappingURL=registrationEntry.js.map
