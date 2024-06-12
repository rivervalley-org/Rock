System.register(['vue', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Controls/loading.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Enums/Blocks/Engagement/SignUp/registerMode', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, inject, ref, computed, openBlock, createElementBlock, Fragment, toDisplayString, createVNode, unref, isRef, createCommentVNode, createTextVNode, renderList, createBlock, withCtx, provide, AttributeValuesContainer, CheckBox, EmailBox, PhoneNumberBox, TextBox, RockButton, RockLabel, CheckBoxList, NotificationBox, RadioButtonList, AlertType, Loading, RockForm, RegisterMode, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      createTextVNode = module.createTextVNode;
      renderList = module.renderList;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      provide = module.provide;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      RegisterMode = module.RegisterMode;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }],
    execute: (function () {

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

      var MemberAttributes = Symbol("member-attributes");
      var MemberOpportunityAttributes = Symbol("member-opportunity-attributes");

      var _hoisted_1$5 = {
        class: "row sign-up-anonymous-name"
      };
      var _hoisted_2$4 = {
        class: "col-md-6"
      };
      var _hoisted_3$4 = {
        class: "col-md-6"
      };
      var _hoisted_4$3 = {
        class: "row sign-up-anonymous-communication"
      };
      var _hoisted_5$3 = {
        class: "col-md-6"
      };
      var _hoisted_6$3 = {
        class: "col-md-6"
      };
      var _hoisted_7$2 = {
        class: "row -mt-form-group sign-up-anonymous-allow-sms"
      };
      var _hoisted_8$2 = {
        class: "col-md-6 col-md-offset-6"
      };
      var _hoisted_9$2 = {
        key: 0,
        class: "sign-up-anonymous-member-attributes"
      };
      var _hoisted_10$2 = {
        key: 1,
        class: "sign-up-anonymous-member-opportunity-attributes"
      };
      var _hoisted_11$2 = createElementVNode("hr", null, null, -1);
      var script$5 = defineComponent({
        name: 'registerIndividual.partial',
        props: {
          registrant: {
            type: Object,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          requireEmail: {
            type: Boolean,
            required: true
          },
          requireMobilePhone: {
            type: Boolean,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var memberAttributes = inject(MemberAttributes, ref({}));
          var memberOpportunityAttributes = inject(MemberOpportunityAttributes, ref({}));
          var firstName = computed({
            get() {
              var _props$registrant$fir;
              return (_props$registrant$fir = props.registrant.firstName) !== null && _props$registrant$fir !== void 0 ? _props$registrant$fir : "";
            },
            set(newValue) {
              props.registrant.firstName = newValue;
            }
          });
          var lastName = computed({
            get() {
              var _props$registrant$las;
              return (_props$registrant$las = props.registrant.lastName) !== null && _props$registrant$las !== void 0 ? _props$registrant$las : "";
            },
            set(newValue) {
              props.registrant.lastName = newValue;
            }
          });
          var email = computed({
            get() {
              var _props$registrant$ema;
              return (_props$registrant$ema = props.registrant.email) !== null && _props$registrant$ema !== void 0 ? _props$registrant$ema : "";
            },
            set(newValue) {
              props.registrant.email = newValue;
            }
          });
          var emailRules = computed(() => {
            return props.requireEmail ? "required" : "";
          });
          var mobilePhoneNumber = computed({
            get() {
              var _props$registrant$mob;
              return (_props$registrant$mob = props.registrant.mobilePhoneNumber) !== null && _props$registrant$mob !== void 0 ? _props$registrant$mob : undefined;
            },
            set(newValue) {
              props.registrant.mobilePhoneNumber = newValue;
              props.registrant.allowSms = !!newValue;
            }
          });
          var mobilePhoneCountryCode = computed({
            get() {
              var _props$registrant$mob2;
              return (_props$registrant$mob2 = props.registrant.mobilePhoneCountryCode) !== null && _props$registrant$mob2 !== void 0 ? _props$registrant$mob2 : undefined;
            },
            set(newValue) {
              props.registrant.mobilePhoneCountryCode = newValue;
            }
          });
          var mobilePhoneRules = computed(() => {
            return props.requireMobilePhone ? "required" : "";
          });
          var anyMemberAttributes = computed(() => {
            return !!Object.keys(memberAttributes.value).length;
          });
          var anyMemberOpportunityAttributes = computed(() => {
            return !!Object.keys(memberOpportunityAttributes.value).length;
          });
          var memberAttributeValues = computed({
            get() {
              var _props$registrant$mem;
              return (_props$registrant$mem = props.registrant.memberAttributeValues) !== null && _props$registrant$mem !== void 0 ? _props$registrant$mem : {};
            },
            set(newValue) {
              props.registrant.memberAttributeValues = newValue;
            }
          });
          var memberOpportunityAttributeValues = computed({
            get() {
              var _props$registrant$mem2;
              return (_props$registrant$mem2 = props.registrant.memberOpportunityAttributeValues) !== null && _props$registrant$mem2 !== void 0 ? _props$registrant$mem2 : {};
            },
            set(newValue) {
              props.registrant.memberOpportunityAttributeValues = newValue;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(__props.title), 1), createElementVNode("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$4, [createVNode(unref(TextBox), {
              modelValue: unref(firstName),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(firstName) ? firstName.value = $event : null),
              label: "First Name",
              rules: "required",
              validationTitle: "".concat(__props.title, " First Name"),
              disabled: __props.disabled
            }, null, 8, ["modelValue", "validationTitle", "disabled"])]), createElementVNode("div", _hoisted_3$4, [createVNode(unref(TextBox), {
              modelValue: unref(lastName),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(lastName) ? lastName.value = $event : null),
              label: "Last Name",
              rules: "required",
              validationTitle: "".concat(__props.title, " Last Name"),
              disabled: __props.disabled
            }, null, 8, ["modelValue", "validationTitle", "disabled"])])]), createElementVNode("div", _hoisted_4$3, [createElementVNode("div", _hoisted_5$3, [createVNode(unref(EmailBox), {
              modelValue: unref(email),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(email) ? email.value = $event : null),
              label: "Email",
              rules: unref(emailRules),
              validationTitle: "".concat(__props.title, " Email"),
              disabled: __props.disabled
            }, null, 8, ["modelValue", "rules", "validationTitle", "disabled"])]), createElementVNode("div", _hoisted_6$3, [createVNode(unref(PhoneNumberBox), {
              modelValue: unref(mobilePhoneNumber),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(mobilePhoneNumber) ? mobilePhoneNumber.value = $event : null),
              countryCode: unref(mobilePhoneCountryCode),
              "onUpdate:countryCode": _cache[4] || (_cache[4] = $event => isRef(mobilePhoneCountryCode) ? mobilePhoneCountryCode.value = $event : null),
              label: "Mobile Phone",
              rules: unref(mobilePhoneRules),
              validationTitle: "".concat(__props.title, " Mobile Phone"),
              disabled: __props.disabled
            }, null, 8, ["modelValue", "countryCode", "rules", "validationTitle", "disabled"])])]), createElementVNode("div", _hoisted_7$2, [createElementVNode("div", _hoisted_8$2, [createVNode(unref(CheckBox), {
              modelValue: __props.registrant.allowSms,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => __props.registrant.allowSms = $event),
              label: "",
              text: "Allow SMS Messages",
              disabled: __props.disabled || !unref(mobilePhoneNumber)
            }, null, 8, ["modelValue", "disabled"])])]), unref(anyMemberAttributes) ? (openBlock(), createElementBlock("div", _hoisted_9$2, [createVNode(unref(AttributeValuesContainer), {
              modelValue: unref(memberAttributeValues),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(memberAttributeValues) ? memberAttributeValues.value = $event : null),
              isEditMode: true,
              attributes: unref(memberAttributes),
              showCategoryLabel: false,
              numberOfColumns: 2,
              disabled: __props.disabled
            }, null, 8, ["modelValue", "attributes", "disabled"])])) : createCommentVNode("v-if", true), unref(anyMemberOpportunityAttributes) ? (openBlock(), createElementBlock("div", _hoisted_10$2, [createVNode(unref(AttributeValuesContainer), {
              modelValue: unref(memberOpportunityAttributeValues),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(memberOpportunityAttributeValues) ? memberOpportunityAttributeValues.value = $event : null),
              isEditMode: true,
              attributes: unref(memberOpportunityAttributes),
              showCategoryLabel: false,
              numberOfColumns: 2,
              disabled: __props.disabled
            }, null, 8, ["modelValue", "attributes", "disabled"])])) : createCommentVNode("v-if", true), _hoisted_11$2], 64);
          };
        }
      });

      script$5.__file = "src/Engagement/SignUp/SignUpRegister/registerIndividual.partial.obs";

      var _hoisted_1$4 = {
        key: 0,
        class: "form-group"
      };
      var _hoisted_2$3 = createTextVNode(" We are unable to register you for this project as you don't currently meet the requirement(s) below: ");
      var _hoisted_3$3 = {
        key: "requirement-{i}"
      };
      var _hoisted_4$2 = {
        key: 2,
        class: "form-group"
      };
      var _hoisted_5$2 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_6$2 = createTextVNode(" Add Additional Individual ");
      var script$4 = defineComponent({
        name: 'registerAnonymous.partial',
        props: {
          isRegistering: {
            type: Boolean,
            required: true
          },
          registrants: {
            type: Array,
            required: true
          },
          projectHasRequiredGroupRequirements: {
            type: Boolean,
            required: true
          },
          requireEmail: {
            type: Boolean,
            required: true
          },
          requireMobilePhone: {
            type: Boolean,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var registrarUnmetRequirements = computed(() => {
            var _props$registrants$fi, _props$registrants$fi2;
            return (_props$registrants$fi = (_props$registrants$fi2 = props.registrants.find(r => r === null || r === void 0 ? void 0 : r.isRegistrar)) === null || _props$registrants$fi2 === void 0 ? void 0 : _props$registrants$fi2.unmetGroupRequirements) !== null && _props$registrants$fi !== void 0 ? _props$registrants$fi : [];
          });
          var allowAddRegistrants = computed(() => {
            return !props.projectHasRequiredGroupRequirements && !props.isRegistering;
          });
          function ensureAtLeastOneRegistrant() {
            if (!props.registrants.length) {
              addRegistrant();
            }
          }
          function addRegistrant() {
            props.registrants.push({
              allowSms: false,
              communicationPreference: 0,
              email: null,
              firstName: null,
              fullName: null,
              isChild: false,
              isRegistrar: true,
              lastName: null,
              mobilePhoneCountryCode: null,
              mobilePhoneNumber: null,
              mobilePhoneNumberFormatted: null,
              personIdKey: null,
              unmetGroupRequirements: null,
              willAttend: true
            });
          }
          function onAddClick() {
            addRegistrant();
          }
          ensureAtLeastOneRegistrant();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(registrarUnmetRequirements).length ? (openBlock(), createElementBlock("div", _hoisted_1$4, [_hoisted_2$3, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(registrarUnmetRequirements), (requirement, i) => {
              return openBlock(), createElementBlock("li", _hoisted_3$3, toDisplayString(requirement), 1);
            }), 128))])])) : (openBlock(true), createElementBlock(Fragment, {
              key: 1
            }, renderList(__props.registrants, (registrant, i) => {
              return openBlock(), createBlock(unref(script$5), {
                key: "registrant-{i}",
                registrant: registrant,
                title: "Registrant #".concat(i + 1),
                requireEmail: __props.requireEmail,
                requireMobilePhone: __props.requireMobilePhone,
                disabled: __props.isRegistering
              }, null, 8, ["registrant", "title", "requireEmail", "requireMobilePhone", "disabled"]);
            }), 128)), unref(allowAddRegistrants) ? (openBlock(), createElementBlock("div", _hoisted_4$2, [createVNode(unref(RockButton), {
              type: "button",
              onClick: onAddClick,
              class: "btn-square mr-1"
            }, {
              default: withCtx(() => [_hoisted_5$2]),
              _: 1
            }), _hoisted_6$2])) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      script$4.__file = "src/Engagement/SignUp/SignUpRegister/registerAnonymous.partial.obs";

      var _hoisted_1$3 = {
        key: 0,
        class: "form-group"
      };
      var script$3 = defineComponent({
        name: 'listUnmetRequirements.partial',
        props: {
          registrants: {
            type: Array,
            required: true
          },
          groupTerm: {
            type: String,
            default: "group"
          }
        },
        setup(__props) {
          var props = __props;
          var label = computed(() => {
            return "The following ".concat(props.groupTerm || "group", " member(s) do not meet the project requirements");
          });
          var registrantsWithUnmetRequirements = computed(() => {
            var _props$registrants;
            return (_props$registrants = props.registrants) === null || _props$registrants === void 0 ? void 0 : _props$registrants.filter(r => {
              var _r$unmetGroupRequirem;
              return (r === null || r === void 0 ? void 0 : r.personIdKey) && (r === null || r === void 0 ? void 0 : r.fullName) && (r === null || r === void 0 ? void 0 : (_r$unmetGroupRequirem = r.unmetGroupRequirements) === null || _r$unmetGroupRequirem === void 0 ? void 0 : _r$unmetGroupRequirem.length);
            }).map(r => {
              var _r$personIdKey, _r$fullName, _r$unmetGroupRequirem2, _r$unmetGroupRequirem3;
              return {
                key: (_r$personIdKey = r.personIdKey) !== null && _r$personIdKey !== void 0 ? _r$personIdKey : "",
                fullName: (_r$fullName = r.fullName) !== null && _r$fullName !== void 0 ? _r$fullName : "",
                unmetRequirements: (_r$unmetGroupRequirem2 = (_r$unmetGroupRequirem3 = r.unmetGroupRequirements) === null || _r$unmetGroupRequirem3 === void 0 ? void 0 : _r$unmetGroupRequirem3.join(", ")) !== null && _r$unmetGroupRequirem2 !== void 0 ? _r$unmetGroupRequirem2 : ""
              };
            });
          });
          return (_ctx, _cache) => {
            return Object.keys(unref(registrantsWithUnmetRequirements)).length ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(label)), 1)]),
              _: 1
            }), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(registrantsWithUnmetRequirements), r => {
              return openBlock(), createElementBlock("div", {
                key: r.key
              }, toDisplayString(r.fullName) + " - " + toDisplayString(r.unmetRequirements), 1);
            }), 128))])) : createCommentVNode("v-if", true);
          };
        }
      });

      script$3.__file = "src/Engagement/SignUp/SignUpRegister/listUnmetRequirements.partial.obs";

      var _hoisted_1$2 = {
        key: 1
      };
      var _hoisted_2$2 = {
        key: 0
      };
      var _hoisted_3$2 = {
        key: 1,
        class: "form-group"
      };
      var _hoisted_4$1 = {
        key: 0
      };
      var _hoisted_5$1 = {
        key: 1
      };
      var _hoisted_6$1 = {
        key: 2,
        class: "form-group"
      };
      var _hoisted_7$1 = {
        key: "requirement-{i}"
      };
      var _hoisted_8$1 = {
        key: 3,
        class: "form-group"
      };
      var _hoisted_9$1 = {
        key: 4
      };
      var _hoisted_10$1 = {
        key: 0
      };
      var _hoisted_11$1 = createElementVNode("div", {
        class: "form-group"
      }, " The number provided will be updated on your personal profile with permissions to allow us to send SMS messages. ", -1);
      var _hoisted_12$1 = {
        key: 1
      };
      var _hoisted_13 = createElementVNode("div", {
        class: "form-group"
      }, " The email provided will be updated on your personal profile. ", -1);
      var script$2 = defineComponent({
        name: 'registerFamily.partial',
        props: {
          isRegistering: {
            type: Boolean,
            required: true
          },
          registrants: {
            type: Array,
            required: true
          },
          anyEligibleRegistrants: {
            type: Boolean,
            required: true
          },
          communicationPreferenceItems: {
            type: Array,
            required: true
          },
          title: {
            type: String,
            default: ""
          }
        },
        setup(__props) {
          var props = __props;
          var unableToRegisterMsgPrefix = "We are unable to register you for this project";
          var registrar = computed(() => {
            var _props$registrants;
            return (_props$registrants = props.registrants) === null || _props$registrants === void 0 ? void 0 : _props$registrants.find(r => r.isRegistrar);
          });
          var showRegistrarContactSummary = computed(() => {
            var _registrar$value, _registrar$value2;
            return !!((_registrar$value = registrar.value) !== null && _registrar$value !== void 0 && _registrar$value.mobilePhoneNumberFormatted || (_registrar$value2 = registrar.value) !== null && _registrar$value2 !== void 0 && _registrar$value2.email);
          });
          var registrarUnmetRequirements = computed(() => {
            var _registrar$value$unme, _registrar$value3;
            return (_registrar$value$unme = (_registrar$value3 = registrar.value) === null || _registrar$value3 === void 0 ? void 0 : _registrar$value3.unmetGroupRequirements) !== null && _registrar$value$unme !== void 0 ? _registrar$value$unme : [];
          });
          var registrarCommunicationPreference = computed({
            get() {
              var _registrar$value$comm, _registrar$value4, _registrar$value4$com;
              return (_registrar$value$comm = (_registrar$value4 = registrar.value) === null || _registrar$value4 === void 0 ? void 0 : (_registrar$value4$com = _registrar$value4.communicationPreference) === null || _registrar$value4$com === void 0 ? void 0 : _registrar$value4$com.toString()) !== null && _registrar$value$comm !== void 0 ? _registrar$value$comm : undefined;
            },
            set(newValue) {
              if (registrar.value && newValue) {
                if (newValue) {
                  registrar.value.communicationPreference = +newValue;
                } else {
                  registrar.value.communicationPreference = 0;
                }
              }
            }
          });
          var communicationPreferenceIsSms = computed(() => {
            return registrarCommunicationPreference.value == "2";
          });
          var communicationPreferenceIsEmail = computed(() => {
            return registrarCommunicationPreference.value == "1";
          });
          var registrarMobilePhoneNumber = computed({
            get() {
              var _registrar$value$mobi, _registrar$value5;
              return (_registrar$value$mobi = (_registrar$value5 = registrar.value) === null || _registrar$value5 === void 0 ? void 0 : _registrar$value5.mobilePhoneNumber) !== null && _registrar$value$mobi !== void 0 ? _registrar$value$mobi : undefined;
            },
            set(newValue) {
              if (registrar.value) {
                registrar.value.mobilePhoneNumber = newValue;
                registrar.value.allowSms = !!newValue;
              }
            }
          });
          var registrarMobilePhoneCountryCode = computed({
            get() {
              var _registrar$value$mobi2, _registrar$value6;
              return (_registrar$value$mobi2 = (_registrar$value6 = registrar.value) === null || _registrar$value6 === void 0 ? void 0 : _registrar$value6.mobilePhoneCountryCode) !== null && _registrar$value$mobi2 !== void 0 ? _registrar$value$mobi2 : undefined;
            },
            set(newValue) {
              if (registrar.value) {
                registrar.value.mobilePhoneCountryCode = newValue;
              }
            }
          });
          var registrarEmail = computed({
            get() {
              var _registrar$value$emai, _registrar$value7;
              return (_registrar$value$emai = (_registrar$value7 = registrar.value) === null || _registrar$value7 === void 0 ? void 0 : _registrar$value7.email) !== null && _registrar$value$emai !== void 0 ? _registrar$value$emai : "";
            },
            set(newValue) {
              if (registrar.value) {
                registrar.value.email = newValue;
              }
            }
          });
          var nonRegistrarRegistrants = computed(() => {
            var _props$registrants$fi, _props$registrants2;
            return (_props$registrants$fi = (_props$registrants2 = props.registrants) === null || _props$registrants2 === void 0 ? void 0 : _props$registrants2.filter(r => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false && (r === null || r === void 0 ? void 0 : r.personIdKey) && (r === null || r === void 0 ? void 0 : r.fullName))) !== null && _props$registrants$fi !== void 0 ? _props$registrants$fi : [];
          });
          var eligibleFamilyMembers = computed(() => {
            return nonRegistrarRegistrants.value.filter(r => {
              var _r$unmetGroupRequirem;
              return !((_r$unmetGroupRequirem = r.unmetGroupRequirements) !== null && _r$unmetGroupRequirem !== void 0 && _r$unmetGroupRequirem.length);
            }).map(r => ({
              value: r.personIdKey,
              text: r.fullName
            }));
          });
          var registeredFamilyMembers = computed({
            get() {
              return nonRegistrarRegistrants.value.filter(r => r.willAttend).map(r => {
                var _r$personIdKey;
                return (_r$personIdKey = r.personIdKey) !== null && _r$personIdKey !== void 0 ? _r$personIdKey : "";
              });
            },
            set(newValue) {
              nonRegistrarRegistrants.value.forEach(r => {
                r.willAttend = newValue.some(personIdKey => personIdKey === r.personIdKey);
              });
            }
          });
          var ineligibleFamilyMembers = computed(() => {
            return nonRegistrarRegistrants.value.filter(r => {
              var _r$unmetGroupRequirem2;
              return (_r$unmetGroupRequirem2 = r.unmetGroupRequirements) === null || _r$unmetGroupRequirem2 === void 0 ? void 0 : _r$unmetGroupRequirem2.length;
            });
          });
          var registerFamilyMembersLabel = computed(() => {
            var _registrar$value8;
            var registrarIsEligibleAndWillAttend = !registrarUnmetRequirements.value.length && ((_registrar$value8 = registrar.value) === null || _registrar$value8 === void 0 ? void 0 : _registrar$value8.willAttend);
            return "Please ".concat(registrarIsEligibleAndWillAttend ? "also " : "", "sign-up the following family members");
          });
          function onRegisteredFamilyMembersChanged() {
            var _props$registrants3;
            (_props$registrants3 = props.registrants) === null || _props$registrants3 === void 0 ? void 0 : _props$registrants3.filter(r => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false).forEach(r => {
              r.willAttend = registeredFamilyMembers.value.some(personIdKey => personIdKey === r.personIdKey);
            });
          }
          return (_ctx, _cache) => {
            var _unref2, _unref3, _unref4;
            return !unref(registrar) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unableToRegisterMsgPrefix) + ". ")]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock("div", _hoisted_1$2, [props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$2, toDisplayString(props.title), 1)) : createCommentVNode("v-if", true), unref(showRegistrarContactSummary) ? (openBlock(), createElementBlock("div", _hoisted_3$2, [(_unref2 = unref(registrar)) !== null && _unref2 !== void 0 && _unref2.mobilePhoneNumberFormatted ? (openBlock(), createElementBlock("div", _hoisted_4$1, " Mobile Phone: " + toDisplayString(unref(registrar).mobilePhoneNumberFormatted), 1)) : createCommentVNode("v-if", true), (_unref3 = unref(registrar)) !== null && _unref3 !== void 0 && _unref3.email ? (openBlock(), createElementBlock("div", _hoisted_5$1, " Email: " + toDisplayString((_unref4 = unref(registrar)) === null || _unref4 === void 0 ? void 0 : _unref4.email), 1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), unref(registrarUnmetRequirements).length ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createTextVNode(toDisplayString(unableToRegisterMsgPrefix) + " as you don't currently meet the requirement(s) below: "), createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(registrarUnmetRequirements), (requirement, i) => {
              return openBlock(), createElementBlock("li", _hoisted_7$1, toDisplayString(requirement), 1);
            }), 128))])])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [createVNode(unref(CheckBox), {
              modelValue: unref(registrar).willAttend,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(registrar).willAttend = $event),
              label: "",
              text: "I will attend",
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "disabled"])])), __props.anyEligibleRegistrants && props.communicationPreferenceItems.length ? (openBlock(), createElementBlock("div", _hoisted_9$1, [createVNode(unref(RadioButtonList), {
              modelValue: unref(registrarCommunicationPreference),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(registrarCommunicationPreference) ? registrarCommunicationPreference.value = $event : null),
              label: "Please send reminder using",
              items: props.communicationPreferenceItems,
              horizontal: true,
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "items", "disabled"]), unref(communicationPreferenceIsSms) ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createVNode(unref(PhoneNumberBox), {
              modelValue: unref(registrarMobilePhoneNumber),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(registrarMobilePhoneNumber) ? registrarMobilePhoneNumber.value = $event : null),
              countryCode: unref(registrarMobilePhoneCountryCode),
              "onUpdate:countryCode": _cache[3] || (_cache[3] = $event => isRef(registrarMobilePhoneCountryCode) ? registrarMobilePhoneCountryCode.value = $event : null),
              label: "Mobile Phone",
              class: "input-max-w-xl",
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "countryCode", "disabled"]), _hoisted_11$1])) : createCommentVNode("v-if", true), unref(communicationPreferenceIsEmail) ? (openBlock(), createElementBlock("div", _hoisted_12$1, [createVNode(unref(EmailBox), {
              modelValue: unref(registrarEmail),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(registrarEmail) ? registrarEmail.value = $event : null),
              label: "Email",
              class: "input-max-w-xl",
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "disabled"]), _hoisted_13])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), unref(eligibleFamilyMembers).length ? (openBlock(), createBlock(unref(CheckBoxList), {
              key: 5,
              modelValue: unref(registeredFamilyMembers),
              "onUpdate:modelValue": [_cache[5] || (_cache[5] = $event => isRef(registeredFamilyMembers) ? registeredFamilyMembers.value = $event : null), onRegisteredFamilyMembersChanged],
              label: unref(registerFamilyMembersLabel),
              items: unref(eligibleFamilyMembers),
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "label", "items", "disabled"])) : createCommentVNode("v-if", true), unref(ineligibleFamilyMembers).length ? (openBlock(), createBlock(unref(script$3), {
              key: 6,
              registrants: unref(ineligibleFamilyMembers),
              groupTerm: "family"
            }, null, 8, ["registrants"])) : createCommentVNode("v-if", true)]));
          };
        }
      });

      script$2.__file = "src/Engagement/SignUp/SignUpRegister/registerFamily.partial.obs";

      var _hoisted_1$1 = createTextVNode(" No group members found to register for this project. ");
      var _hoisted_2$1 = {
        key: 1
      };
      var _hoisted_3$1 = {
        key: 0
      };
      var script$1 = defineComponent({
        name: 'registerGroup.partial',
        props: {
          isRegistering: {
            type: Boolean,
            required: true
          },
          registrants: {
            type: Array,
            required: true
          },
          title: {
            type: String,
            default: ""
          }
        },
        setup(__props) {
          var props = __props;
          var identifiableGroupMembers = computed(() => {
            var _props$registrants$fi, _props$registrants;
            return (_props$registrants$fi = (_props$registrants = props.registrants) === null || _props$registrants === void 0 ? void 0 : _props$registrants.filter(r => (r === null || r === void 0 ? void 0 : r.personIdKey) && (r === null || r === void 0 ? void 0 : r.fullName))) !== null && _props$registrants$fi !== void 0 ? _props$registrants$fi : [];
          });
          var eligibleGroupMembers = computed(() => {
            return identifiableGroupMembers.value.filter(r => {
              var _r$unmetGroupRequirem;
              return !((_r$unmetGroupRequirem = r.unmetGroupRequirements) !== null && _r$unmetGroupRequirem !== void 0 && _r$unmetGroupRequirem.length);
            }).map(r => ({
              value: r.personIdKey,
              text: r.fullName
            }));
          });
          var registeredGroupMembers = computed({
            get() {
              return identifiableGroupMembers.value.filter(r => r.willAttend).map(r => {
                var _r$personIdKey;
                return (_r$personIdKey = r.personIdKey) !== null && _r$personIdKey !== void 0 ? _r$personIdKey : "";
              });
            },
            set(newValue) {
              identifiableGroupMembers.value.forEach(r => {
                r.willAttend = newValue.some(personIdKey => personIdKey === r.personIdKey);
              });
            }
          });
          var ineligibleGroupMembers = computed(() => {
            return identifiableGroupMembers.value.filter(r => {
              var _r$unmetGroupRequirem2;
              return (_r$unmetGroupRequirem2 = r.unmetGroupRequirements) === null || _r$unmetGroupRequirem2 === void 0 ? void 0 : _r$unmetGroupRequirem2.length;
            });
          });
          function onRegisteredGroupMembersChanged() {
            var _props$registrants2;
            (_props$registrants2 = props.registrants) === null || _props$registrants2 === void 0 ? void 0 : _props$registrants2.filter(r => (r === null || r === void 0 ? void 0 : r.isRegistrar) === false).forEach(r => {
              r.willAttend = registeredGroupMembers.value.some(personIdKey => personIdKey === r.personIdKey);
            });
          }
          return (_ctx, _cache) => {
            return !unref(identifiableGroupMembers).length ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [_hoisted_1$1]),
              _: 1
            }, 8, ["alertType"])) : (openBlock(), createElementBlock("div", _hoisted_2$1, [props.title ? (openBlock(), createElementBlock("h3", _hoisted_3$1, toDisplayString(props.title), 1)) : createCommentVNode("v-if", true), unref(eligibleGroupMembers).length ? (openBlock(), createBlock(unref(CheckBoxList), {
              key: 1,
              modelValue: unref(registeredGroupMembers),
              "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => isRef(registeredGroupMembers) ? registeredGroupMembers.value = $event : null), onRegisteredGroupMembersChanged],
              label: "Group Members",
              items: unref(eligibleGroupMembers),
              disabled: __props.isRegistering
            }, null, 8, ["modelValue", "items", "disabled"])) : createCommentVNode("v-if", true), unref(ineligibleGroupMembers).length ? (openBlock(), createBlock(unref(script$3), {
              key: 2,
              registrants: unref(ineligibleGroupMembers)
            }, null, 8, ["registrants"])) : createCommentVNode("v-if", true)]));
          };
        }
      });

      script$1.__file = "src/Engagement/SignUp/SignUpRegister/registerGroup.partial.obs";

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = createElementVNode("p", null, "Successfully registered individual(s):", -1);
      var _hoisted_3 = {
        key: "registered-{i}"
      };
      var _hoisted_4 = {
        key: 1
      };
      var _hoisted_5 = createElementVNode("p", null, "Successfully unregistered individual(s):", -1);
      var _hoisted_6 = {
        key: "unregistered-{i}"
      };
      var _hoisted_7 = {
        key: 0
      };
      var _hoisted_8 = {
        key: 1
      };
      var _hoisted_9 = createElementVNode("p", null, "Unable to register individual(s):", -1);
      var _hoisted_10 = {
        key: "unsuccessful-{i}"
      };
      var _hoisted_11 = {
        key: 4
      };
      var _hoisted_12 = {
        key: 0,
        class: "actions"
      };
      var script = exports('default', defineComponent({
        name: 'signUpRegister',
        setup(__props) {
          var _config$mode, _config$communication, _config$registrants, _config$memberAttribu, _config$memberOpportu;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var registerMode = ref((_config$mode = config.mode) !== null && _config$mode !== void 0 ? _config$mode : RegisterMode.Anonymous);
          var communicationPreferenceItems = ref((_config$communication = config.communicationPreferenceItems) !== null && _config$communication !== void 0 ? _config$communication : []);
          var registrants = ref((_config$registrants = config.registrants) !== null && _config$registrants !== void 0 ? _config$registrants : []);
          var memberAttributes = ref((_config$memberAttribu = config.memberAttributes) !== null && _config$memberAttribu !== void 0 ? _config$memberAttribu : {});
          var memberOpportunityAttributes = ref((_config$memberOpportu = config.memberOpportunityAttributes) !== null && _config$memberOpportu !== void 0 ? _config$memberOpportu : {});
          var isRegistering = ref(false);
          var errorMessage = ref("");
          var registrationWarning = ref("");
          var registeredRegistrantNames = ref([]);
          var unregisteredRegistrantNames = ref([]);
          var unsuccessfulRegistrantNames = ref([]);
          var submitButtonText = ref(getSubmitButtonText(config.registrants));
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          var anyEligibleRegistrants = computed(() => {
            return registrants.value.some(r => {
              var _r$unmetGroupRequirem;
              return r && !((_r$unmetGroupRequirem = r.unmetGroupRequirements) !== null && _r$unmetGroupRequirem !== void 0 && _r$unmetGroupRequirem.length);
            });
          });
          var showRegistrationSuccess = computed(() => {
            var _registeredRegistrant, _unregisteredRegistra;
            return !!((_registeredRegistrant = registeredRegistrantNames.value) !== null && _registeredRegistrant !== void 0 && _registeredRegistrant.length || (_unregisteredRegistra = unregisteredRegistrantNames.value) !== null && _unregisteredRegistra !== void 0 && _unregisteredRegistra.length);
          });
          var showRegistrationWarning = computed(() => {
            var _unsuccessfulRegistra, _registrationWarning$;
            return !!((_unsuccessfulRegistra = unsuccessfulRegistrantNames.value) !== null && _unsuccessfulRegistra !== void 0 && _unsuccessfulRegistra.length || (_registrationWarning$ = registrationWarning.value) !== null && _registrationWarning$ !== void 0 && _registrationWarning$.length);
          });
          var showRegistrationForm = computed(() => {
            if (blockErrorMessage.value) {
              return false;
            }
            if (showRegistrationSuccess.value) {
              return showRegistrationWarning.value;
            }
            return true;
          });
          function getSubmitButtonText(registrants) {
            return registrants !== null && registrants !== void 0 && registrants.some(r => (r === null || r === void 0 ? void 0 : r.willAttend) && (r === null || r === void 0 ? void 0 : r.personIdKey)) ? "Update Registration" : "Register";
          }
          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }
          function _onSubmit() {
            _onSubmit = _asyncToGenerator(function* () {
              var _result$data$warningM, _result$data, _result$data$register, _result$data2, _result$data$unregist, _result$data3, _result$data$unsucces, _result$data4;
              isRegistering.value = true;
              errorMessage.value = "";
              registrationWarning.value = "";
              registeredRegistrantNames.value = [];
              unregisteredRegistrantNames.value = [];
              unsuccessfulRegistrantNames.value = [];
              var bag = {
                registrants: registrants.value
              };
              var result = yield invokeBlockAction("Register", {
                bag
              });
              isRegistering.value = false;
              if (!result.isSuccess) {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error when trying to register for this project.";
                return;
              }
              registrationWarning.value = (_result$data$warningM = (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.warningMessage) !== null && _result$data$warningM !== void 0 ? _result$data$warningM : "";
              registeredRegistrantNames.value = (_result$data$register = (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.registeredRegistrantNames) !== null && _result$data$register !== void 0 ? _result$data$register : [];
              unregisteredRegistrantNames.value = (_result$data$unregist = (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.unregisteredRegistrantNames) !== null && _result$data$unregist !== void 0 ? _result$data$unregist : [];
              unsuccessfulRegistrantNames.value = (_result$data$unsucces = (_result$data4 = result.data) === null || _result$data4 === void 0 ? void 0 : _result$data4.unsuccessfulRegistrantNames) !== null && _result$data$unsucces !== void 0 ? _result$data$unsucces : [];
              submitButtonText.value = getSubmitButtonText(registrants.value);
            });
            return _onSubmit.apply(this, arguments);
          }
          provide(MemberAttributes, memberAttributes);
          provide(MemberOpportunityAttributes, memberOpportunityAttributes);
          onConfigurationValuesChanged(reloadBlock);
          return (_ctx, _cache) => {
            var _registeredRegistrant2, _unregisteredRegistra2;
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), (_registeredRegistrant2 = registeredRegistrantNames.value) !== null && _registeredRegistrant2 !== void 0 && _registeredRegistrant2.length || (_unregisteredRegistra2 = unregisteredRegistrantNames.value) !== null && _unregisteredRegistra2 !== void 0 && _unregisteredRegistra2.length ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: unref(AlertType).Success
            }, {
              default: withCtx(() => {
                var _registeredRegistrant3, _unregisteredRegistra3;
                return [(_registeredRegistrant3 = registeredRegistrantNames.value) !== null && _registeredRegistrant3 !== void 0 && _registeredRegistrant3.length ? (openBlock(), createElementBlock("div", _hoisted_1, [_hoisted_2, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(registeredRegistrantNames.value, (name, i) => {
                  return openBlock(), createElementBlock("li", _hoisted_3, toDisplayString(name), 1);
                }), 128))])])) : createCommentVNode("v-if", true), (_unregisteredRegistra3 = unregisteredRegistrantNames.value) !== null && _unregisteredRegistra3 !== void 0 && _unregisteredRegistra3.length ? (openBlock(), createElementBlock("div", _hoisted_4, [_hoisted_5, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unregisteredRegistrantNames.value, (name, i) => {
                  return openBlock(), createElementBlock("li", _hoisted_6, toDisplayString(name), 1);
                }), 128))])])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(showRegistrationWarning) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 3,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => {
                var _unsuccessfulRegistra2;
                return [registrationWarning.value ? (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("p", null, toDisplayString(registrationWarning.value), 1)])) : createCommentVNode("v-if", true), (_unsuccessfulRegistra2 = unsuccessfulRegistrantNames.value) !== null && _unsuccessfulRegistra2 !== void 0 && _unsuccessfulRegistra2.length ? (openBlock(), createElementBlock("div", _hoisted_8, [_hoisted_9, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unsuccessfulRegistrantNames.value, (name, i) => {
                  return openBlock(), createElementBlock("li", _hoisted_10, toDisplayString(name), 1);
                }), 128))])])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(showRegistrationForm) ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(RockForm), {
              onSubmit: onSubmit
            }, {
              default: withCtx(() => [registerMode.value == unref(RegisterMode).Anonymous ? (openBlock(), createBlock(unref(script$4), {
                key: 0,
                isRegistering: isRegistering.value,
                registrants: registrants.value,
                projectHasRequiredGroupRequirements: unref(config).projectHasRequiredGroupRequirements,
                requireEmail: unref(config).requireEmail,
                requireMobilePhone: unref(config).requireMobilePhone
              }, null, 8, ["isRegistering", "registrants", "projectHasRequiredGroupRequirements", "requireEmail", "requireMobilePhone"])) : createCommentVNode("v-if", true), registerMode.value == unref(RegisterMode).Family ? (openBlock(), createBlock(unref(script$2), {
                key: 1,
                isRegistering: isRegistering.value,
                registrants: registrants.value,
                anyEligibleRegistrants: unref(anyEligibleRegistrants),
                communicationPreferenceItems: communicationPreferenceItems.value,
                title: unref(config).title
              }, null, 8, ["isRegistering", "registrants", "anyEligibleRegistrants", "communicationPreferenceItems", "title"])) : createCommentVNode("v-if", true), registerMode.value == unref(RegisterMode).Group ? (openBlock(), createBlock(unref(script$1), {
                key: 2,
                isRegistering: isRegistering.value,
                registrants: registrants.value,
                title: unref(config).title
              }, null, 8, ["isRegistering", "registrants", "title"])) : createCommentVNode("v-if", true), createVNode(unref(Loading), {
                isLoading: isRegistering.value
              }, {
                default: withCtx(() => [unref(anyEligibleRegistrants) ? (openBlock(), createElementBlock("div", _hoisted_12, [createVNode(unref(RockButton), {
                  type: "submit",
                  btnType: unref(BtnType).Primary,
                  disabled: isRegistering.value
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(submitButtonText.value), 1)]),
                  _: 1
                }, 8, ["btnType", "disabled"])])) : createCommentVNode("v-if", true)]),
                _: 1
              }, 8, ["isLoading"])]),
              _: 1
            })])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/SignUp/signUpRegister.obs";

    })
  };
}));
//# sourceMappingURL=signUpRegister.obs.js.map
