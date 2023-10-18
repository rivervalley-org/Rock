System.register(['vue', '@Obsidian/Controls/panel', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockForm', '@Obsidian/Utility/numberUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, Panel, CheckBox, DropDownList, TextBox, RockForm, toNumberOrNull;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
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

      var FormFieldVisibility = function (FormFieldVisibility) {
        FormFieldVisibility[FormFieldVisibility["Hidden"] = 0] = "Hidden";
        FormFieldVisibility[FormFieldVisibility["Optional"] = 1] = "Optional";
        FormFieldVisibility[FormFieldVisibility["Required"] = 2] = "Required";
        return FormFieldVisibility;
      }({});
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
      var personEntrySettings = exports('default', defineComponent({
        name: "Workflow.FormBuilderDetail.PersonEntrySettings",
        components: {
          CheckBox,
          DropDownList,
          Panel,
          RockForm,
          TextBox
        },
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
        setup(props, _ref) {
          var _props$modelValue$aut, _props$modelValue$hid, _props$modelValue$rec, _props$modelValue$con, _props$modelValue$sho, _props$modelValue$cam, _props$modelValue$cam2, _props$modelValue$gen, _props$modelValue$gen2, _props$modelValue$ema, _props$modelValue$ema2, _props$modelValue$mob, _props$modelValue$mob2, _props$modelValue$bir, _props$modelValue$bir2, _props$modelValue$add, _props$modelValue$add2, _props$modelValue$add3, _props$modelValue$mar, _props$modelValue$mar2, _props$modelValue$spo, _props$modelValue$spo2, _props$modelValue$spo3, _props$modelValue$rac, _props$modelValue$rac2, _props$modelValue$eth, _props$modelValue$eth2;
          var emit = _ref.emit;
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
          var birthdate = ref((_props$modelValue$bir = (_props$modelValue$bir2 = props.modelValue.birthdate) === null || _props$modelValue$bir2 === void 0 ? void 0 : _props$modelValue$bir2.toString()) !== null && _props$modelValue$bir !== void 0 ? _props$modelValue$bir : FormFieldVisibility.Hidden.toString());
          var address = ref((_props$modelValue$add = (_props$modelValue$add2 = props.modelValue.address) === null || _props$modelValue$add2 === void 0 ? void 0 : _props$modelValue$add2.toString()) !== null && _props$modelValue$add !== void 0 ? _props$modelValue$add : FormFieldVisibility.Hidden.toString());
          var addressType = ref((_props$modelValue$add3 = props.modelValue.addressType) !== null && _props$modelValue$add3 !== void 0 ? _props$modelValue$add3 : "");
          var maritalStatus = ref((_props$modelValue$mar = (_props$modelValue$mar2 = props.modelValue.maritalStatus) === null || _props$modelValue$mar2 === void 0 ? void 0 : _props$modelValue$mar2.toString()) !== null && _props$modelValue$mar !== void 0 ? _props$modelValue$mar : FormFieldVisibility.Hidden.toString());
          var spouseEntry = ref((_props$modelValue$spo = (_props$modelValue$spo2 = props.modelValue.spouseEntry) === null || _props$modelValue$spo2 === void 0 ? void 0 : _props$modelValue$spo2.toString()) !== null && _props$modelValue$spo !== void 0 ? _props$modelValue$spo : FormFieldVisibility.Hidden.toString());
          var spouseLabel = ref((_props$modelValue$spo3 = props.modelValue.spouseLabel) !== null && _props$modelValue$spo3 !== void 0 ? _props$modelValue$spo3 : "Spouse");
          var raceEntry = ref((_props$modelValue$rac = (_props$modelValue$rac2 = props.modelValue.raceEntry) === null || _props$modelValue$rac2 === void 0 ? void 0 : _props$modelValue$rac2.toString()) !== null && _props$modelValue$rac !== void 0 ? _props$modelValue$rac : FormFieldVisibility.Hidden.toString());
          var ethnicityEntry = ref((_props$modelValue$eth = (_props$modelValue$eth2 = props.modelValue.ethnicityEntry) === null || _props$modelValue$eth2 === void 0 ? void 0 : _props$modelValue$eth2.toString()) !== null && _props$modelValue$eth !== void 0 ? _props$modelValue$eth : FormFieldVisibility.Hidden.toString());
          var columnClass = computed(() => props.isVertical ? "col-xs-12" : "col-md-3");
          watch([autofillCurrentPerson, hideIfCurrentPersonKnown, recordStatus, connectionStatus, showCampus, campusType, campusStatus, gender, email, mobilePhone, birthdate, address, addressType, maritalStatus, spouseEntry, spouseLabel, raceEntry, ethnicityEntry], () => {
            var _toNumberOrNull, _toNumberOrNull2, _toNumberOrNull3, _toNumberOrNull4, _toNumberOrNull5, _toNumberOrNull6, _toNumberOrNull7, _toNumberOrNull8, _toNumberOrNull9;
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
              birthdate: (_toNumberOrNull4 = toNumberOrNull(birthdate.value)) !== null && _toNumberOrNull4 !== void 0 ? _toNumberOrNull4 : FormFieldVisibility.Hidden,
              address: (_toNumberOrNull5 = toNumberOrNull(address.value)) !== null && _toNumberOrNull5 !== void 0 ? _toNumberOrNull5 : FormFieldVisibility.Hidden,
              addressType: addressType.value,
              maritalStatus: (_toNumberOrNull6 = toNumberOrNull(maritalStatus.value)) !== null && _toNumberOrNull6 !== void 0 ? _toNumberOrNull6 : FormFieldVisibility.Hidden,
              spouseEntry: (_toNumberOrNull7 = toNumberOrNull(spouseEntry.value)) !== null && _toNumberOrNull7 !== void 0 ? _toNumberOrNull7 : FormFieldVisibility.Hidden,
              spouseLabel: spouseLabel.value,
              raceEntry: (_toNumberOrNull8 = toNumberOrNull(raceEntry.value)) !== null && _toNumberOrNull8 !== void 0 ? _toNumberOrNull8 : FormFieldVisibility.Hidden,
              ethnicityEntry: (_toNumberOrNull9 = toNumberOrNull(ethnicityEntry.value)) !== null && _toNumberOrNull9 !== void 0 ? _toNumberOrNull9 : FormFieldVisibility.Hidden
            });
            emit("update:modelValue", newValue);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$aut2, _props$modelValue$hid2, _props$modelValue$rec2, _props$modelValue$con2, _props$modelValue$sho2, _props$modelValue$cam3, _props$modelValue$cam4, _props$modelValue$gen3, _props$modelValue$gen4, _props$modelValue$ema3, _props$modelValue$ema4, _props$modelValue$mob3, _props$modelValue$mob4, _props$modelValue$bir3, _props$modelValue$bir4, _props$modelValue$add4, _props$modelValue$add5, _props$modelValue$add6, _props$modelValue$mar3, _props$modelValue$mar4, _props$modelValue$spo4, _props$modelValue$spo5, _props$modelValue$spo6, _props$modelValue$rac3, _props$modelValue$rac4, _props$modelValue$eth3, _props$modelValue$eth4;
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
            birthdate.value = (_props$modelValue$bir3 = (_props$modelValue$bir4 = props.modelValue.birthdate) === null || _props$modelValue$bir4 === void 0 ? void 0 : _props$modelValue$bir4.toString()) !== null && _props$modelValue$bir3 !== void 0 ? _props$modelValue$bir3 : FormFieldVisibility.Hidden.toString();
            address.value = (_props$modelValue$add4 = (_props$modelValue$add5 = props.modelValue.address) === null || _props$modelValue$add5 === void 0 ? void 0 : _props$modelValue$add5.toString()) !== null && _props$modelValue$add4 !== void 0 ? _props$modelValue$add4 : FormFieldVisibility.Hidden.toString();
            addressType.value = (_props$modelValue$add6 = props.modelValue.addressType) !== null && _props$modelValue$add6 !== void 0 ? _props$modelValue$add6 : "";
            maritalStatus.value = (_props$modelValue$mar3 = (_props$modelValue$mar4 = props.modelValue.maritalStatus) === null || _props$modelValue$mar4 === void 0 ? void 0 : _props$modelValue$mar4.toString()) !== null && _props$modelValue$mar3 !== void 0 ? _props$modelValue$mar3 : FormFieldVisibility.Hidden.toString();
            spouseEntry.value = (_props$modelValue$spo4 = (_props$modelValue$spo5 = props.modelValue.spouseEntry) === null || _props$modelValue$spo5 === void 0 ? void 0 : _props$modelValue$spo5.toString()) !== null && _props$modelValue$spo4 !== void 0 ? _props$modelValue$spo4 : FormFieldVisibility.Hidden.toString();
            spouseLabel.value = (_props$modelValue$spo6 = props.modelValue.spouseLabel) !== null && _props$modelValue$spo6 !== void 0 ? _props$modelValue$spo6 : "";
            raceEntry.value = (_props$modelValue$rac3 = (_props$modelValue$rac4 = props.modelValue.raceEntry) === null || _props$modelValue$rac4 === void 0 ? void 0 : _props$modelValue$rac4.toString()) !== null && _props$modelValue$rac3 !== void 0 ? _props$modelValue$rac3 : FormFieldVisibility.Hidden.toString();
            ethnicityEntry.value = (_props$modelValue$eth3 = (_props$modelValue$eth4 = props.modelValue.ethnicityEntry) === null || _props$modelValue$eth4 === void 0 ? void 0 : _props$modelValue$eth4.toString()) !== null && _props$modelValue$eth3 !== void 0 ? _props$modelValue$eth3 : FormFieldVisibility.Hidden.toString();
          });
          return {
            address,
            addressType,
            autofillCurrentPerson,
            birthdate,
            campusStatus,
            campusType,
            columnClass,
            connectionStatus,
            email,
            gender,
            hideIfCurrentPersonKnown,
            maritalStatus,
            mobilePhone,
            recordStatus,
            showCampus,
            spouseEntry,
            spouseLabel,
            raceEntry,
            ethnicityEntry,
            formFieldVisibilityOptions
          };
        },
        template: "\n<div>\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <CheckBox v-model=\"autofillCurrentPerson\"\n                label=\"Autofill Current Person\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <CheckBox v-model=\"hideIfCurrentPersonKnown\"\n                label=\"Hide if Current Person Known\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"recordStatus\"\n                label=\"Record Status\"\n                :items=\"recordStatusOptions\"\n                rules=\"required\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"connectionStatus\"\n                label=\"Connection Status\"\n                :items=\"connectionStatusOptions\"\n                rules=\"required\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <CheckBox v-model=\"showCampus\"\n                label=\"Show Campus\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"campusType\"\n                label=\"Campus Type\"\n                :items=\"campusTypeOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"campusStatus\"\n                label=\"Campus Status\"\n                :items=\"campusStatusOptions\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"gender\"\n                label=\"Gender\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"email\"\n                label=\"Email\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"mobilePhone\"\n                label=\"Mobile Phone\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"birthdate\"\n                label=\"Birthdate\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"address\"\n                label=\"Address\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"addressType\"\n                label=\"Address Type\"\n                :items=\"addressTypeOptions\"\n                rules=\"required\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"maritalStatus\"\n                label=\"Marital Status\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"spouseEntry\"\n                label=\"Spouse Entry\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n\n        <div :class=\"columnClass\">\n            <TextBox v-model=\"spouseLabel\"\n                label=\"Spouse Label\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"raceEntry\"\n                label=\"Race Entry\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div :class=\"columnClass\">\n            <DropDownList v-model=\"ethnicityEntry\"\n                label=\"Ethnicity Entry\"\n                :showBlankItem=\"false\"\n                :items=\"formFieldVisibilityOptions\" />\n        </div>\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=personEntrySettings.js.map
