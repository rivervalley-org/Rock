System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, openBlock, createElementBlock, createVNode, unref, withCtx, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, nextTick, NotificationBox, AttributeValuesContainer, CampusPicker, CheckBox, DropDownList, EmailBox, Panel, PhoneNumberBox, RockButton, RockForm, TextBox, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, toGuidOrNull;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      nextTick = module.nextTick;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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

      var _hoisted_1 = {
        class: "upAdd"
      };
      var _hoisted_2 = {
        key: 0,
        class: "prayer-requester"
      };
      var _hoisted_3 = createElementVNode("h2", null, "Request Submitted", -1);
      var _hoisted_4 = createTextVNode("Add Another Request");
      var script = exports('default', defineComponent({
        name: 'prayerRequestEntry',
        setup(__props) {
          var _config$defaultFirstN, _config$defaultLastNa, _config$defaultEmail, _toGuidOrNull, _config$defaultReques;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var firstName = ref((_config$defaultFirstN = config.defaultFirstName) !== null && _config$defaultFirstN !== void 0 ? _config$defaultFirstN : "");
          var lastName = ref((_config$defaultLastNa = config.defaultLastName) !== null && _config$defaultLastNa !== void 0 ? _config$defaultLastNa : "");
          var email = ref((_config$defaultEmail = config.defaultEmail) !== null && _config$defaultEmail !== void 0 ? _config$defaultEmail : "");
          var mobilePhoneNumber = ref("");
          var mobilePhoneNumberCountryCode = ref("");
          var campusListItemBag = ref(config.defaultCampus);
          var categoryGuidOrEmptyString = ref((_toGuidOrNull = toGuidOrNull(config.defaultCategoryGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "");
          var categories = ref(config.categories || []);
          var request = ref((_config$defaultReques = config.defaultRequest) !== null && _config$defaultReques !== void 0 ? _config$defaultReques : "");
          var requestCharacterLimit = ref(config.characterLimit > 0 ? config.characterLimit : undefined);
          var requestPlaceholder = ref(config.characterLimit > 0 ? "Please pray that\u2026 (up to ".concat(config.characterLimit, " characters)") : "Please pray that…");
          var internalIsUrgent = ref(false);
          var internalAllowComments = ref(config.allowCommentsDefaultValue);
          var internalIsPublic = ref(config.isPublicDefaultValue);
          var isEntryHidden = ref(false);
          var successMessage = ref(null);
          var errors = ref([]);
          var requestInputWrapper = ref(null);
          var isSaving = ref(false);
          var isNavigating = ref(false);
          var attributes = ref(config.attributes || null);
          var attributeValues = ref({});
          var isUrgent = computed(() => config.isUrgentShown ? internalIsUrgent.value : false);
          var allowComments = computed(() => config.isAllowCommentsShown ? internalAllowComments.value : config.allowCommentsDefaultValue);
          var isPublic = computed(() => config.isIsPublicShown ? internalIsPublic.value : config.isPublicDefaultValue);
          var requestInput = computed(() => {
            if (!requestInputWrapper.value) {
              return null;
            }
            return requestInputWrapper.value.querySelector("textarea");
          });
          var saveButtonText = computed(() => isSaving.value ? "Saving…" : "Save Request");
          function onAddAnotherRequestClicked() {
            resetToAddAnotherRequest();
          }
          function onSubmitted() {
            return save();
          }
          function navigate(_x) {
            return _navigate.apply(this, arguments);
          }
          function _navigate() {
            _navigate = _asyncToGenerator(function* (url) {
              try {
                isNavigating.value = true;
                window.location.href = url;
                return new Promise((_resolve, _reject) => {});
              } finally {}
            });
            return _navigate.apply(this, arguments);
          }
          function resetToAddAnotherRequest() {
            request.value = "";
            internalIsUrgent.value = false;
            internalIsPublic.value = config.isPublicDefaultValue;
            internalAllowComments.value = config.allowCommentsDefaultValue;
            attributeValues.value = {};
            isEntryHidden.value = false;
            nextTick(() => {
              if (requestInput.value) {
                requestInput.value.focus();
              }
            });
          }
          function save() {
            return _save.apply(this, arguments);
          }
          function _save() {
            _save = _asyncToGenerator(function* () {
              try {
                var _campusListItemBag$va;
                isSaving.value = true;
                var bag = {
                  allowComments: allowComments.value,
                  campusGuid: toGuidOrNull((_campusListItemBag$va = campusListItemBag.value) === null || _campusListItemBag$va === void 0 ? void 0 : _campusListItemBag$va.value),
                  categoryGuid: toGuidOrNull(categoryGuidOrEmptyString.value),
                  email: email.value,
                  firstName: firstName.value,
                  isPublic: isPublic.value,
                  isUrgent: isUrgent.value,
                  lastName: lastName.value,
                  mobilePhoneNumber: mobilePhoneNumber.value,
                  mobilePhoneNumberCountryCode: mobilePhoneNumberCountryCode.value,
                  request: request.value,
                  attributeValues: attributeValues.value
                };
                var result = yield invokeBlockAction("Save", {
                  bag
                });
                if (!(result !== null && result !== void 0 && result.isSuccess) || !result.data) {
                  errors.value = [result.errorMessage || "An unexpected error occurred."];
                } else if (result.data.errors) {
                  errors.value = result.data.errors;
                } else if (config.isPageRedirectedToParentOnSave && config.parentPageUrl) {
                  return yield navigate(config.parentPageUrl);
                } else if (config.isPageRefreshedOnSave) {
                  return yield navigate(window.location.href);
                } else {
                  isEntryHidden.value = true;
                  successMessage.value = result.data.successMessage || null;
                }
              } finally {
                isSaving.value = false;
              }
            });
            return _save.apply(this, arguments);
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(Panel), {
              title: "Add Prayer Request",
              titleIconCssClass: "fa fa-praying-hands",
              type: "block"
            }, {
              default: withCtx(() => [!isEntryHidden.value ? (openBlock(), createBlock(unref(RockForm), {
                key: 0,
                onSubmit: onSubmitted
              }, {
                default: withCtx(() => [errors.value.length ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  id: "nbWarningMessage",
                  alertType: "warning",
                  label: "Warning"
                }, {
                  default: withCtx(() => [createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, error => {
                    return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
                  }), 256))])]),
                  _: 1
                })) : createCommentVNode("v-if", true), createElementVNode("fieldset", null, [unref(config).isRequesterInfoShown ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(TextBox), {
                  modelValue: firstName.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => firstName.value = $event),
                  autocomplete: "given-name",
                  disabled: isSaving.value || isNavigating.value,
                  label: "First Name",
                  rules: "required"
                }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
                  modelValue: lastName.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => lastName.value = $event),
                  autocomplete: "family-name",
                  disabled: isSaving.value || isNavigating.value,
                  label: "Last Name",
                  rules: unref(config).isLastNameRequired ? 'required' : ''
                }, null, 8, ["modelValue", "disabled", "rules"]), createVNode(unref(EmailBox), {
                  modelValue: email.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => email.value = $event),
                  autocomplete: "email",
                  disabled: isSaving.value || isNavigating.value,
                  label: "Email"
                }, null, 8, ["modelValue", "disabled"]), unref(config).isMobilePhoneShown ? (openBlock(), createBlock(unref(PhoneNumberBox), {
                  key: 0,
                  modelValue: mobilePhoneNumber.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => mobilePhoneNumber.value = $event),
                  countryCode: mobilePhoneNumberCountryCode.value,
                  "onUpdate:countryCode": _cache[4] || (_cache[4] = $event => mobilePhoneNumberCountryCode.value = $event),
                  autocomplete: "mobile",
                  disabled: isSaving.value || isNavigating.value,
                  label: "Mobile Phone"
                }, null, 8, ["modelValue", "countryCode", "disabled"])) : createCommentVNode("v-if", true), unref(config).isCampusShown ? (openBlock(), createBlock(unref(CampusPicker), {
                  key: 1,
                  modelValue: campusListItemBag.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => campusListItemBag.value = $event),
                  disabled: isSaving.value || isNavigating.value,
                  includeInactive: false,
                  label: "Campus",
                  rules: unref(config).isCampusRequired ? 'required' : ''
                }, null, 8, ["modelValue", "disabled", "rules"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), categories.value.length ? (openBlock(), createBlock(unref(DropDownList), {
                  key: 1,
                  modelValue: categoryGuidOrEmptyString.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => categoryGuidOrEmptyString.value = $event),
                  disabled: isSaving.value || isNavigating.value,
                  items: categories.value,
                  label: "Category"
                }, null, 8, ["modelValue", "disabled", "items"])) : createCommentVNode("v-if", true), attributes.value != null ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                  key: 2,
                  modelValue: attributeValues.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => attributeValues.value = $event),
                  attributes: attributes.value,
                  isEditMode: "",
                  showCategoryLabel: false
                }, null, 8, ["modelValue", "attributes"])) : createCommentVNode("v-if", true), createElementVNode("div", {
                  ref_key: "requestInputWrapper",
                  ref: requestInputWrapper
                }, [createVNode(unref(TextBox), {
                  modelValue: request.value,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => request.value = $event),
                  autocomplete: "off",
                  disabled: isSaving.value || isNavigating.value,
                  label: "Request",
                  maxLength: requestCharacterLimit.value,
                  placeholder: requestPlaceholder.value,
                  rows: 3,
                  rules: "required",
                  showCountDown: !!requestCharacterLimit.value,
                  textMode: "multiline"
                }, null, 8, ["modelValue", "disabled", "maxLength", "placeholder", "showCountDown"])], 512), unref(config).isUrgentShown ? (openBlock(), createBlock(unref(CheckBox), {
                  key: 3,
                  modelValue: internalIsUrgent.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => internalIsUrgent.value = $event),
                  disabled: isSaving.value || isNavigating.value,
                  help: "If 'Yes' is checked, the request will be flagged as urgent in need of attention quickly.",
                  label: "Urgent?",
                  text: "Yes"
                }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), unref(config).isAllowCommentsShown ? (openBlock(), createBlock(unref(CheckBox), {
                  key: 4,
                  modelValue: internalAllowComments.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => internalAllowComments.value = $event),
                  disabled: isSaving.value || isNavigating.value,
                  help: "If 'Yes' is checked, the prayer team can offer encouraging comments on the request.",
                  label: "Allow Encouraging Comments?",
                  text: "Yes"
                }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true), unref(config).isIsPublicShown ? (openBlock(), createBlock(unref(CheckBox), {
                  key: 5,
                  modelValue: internalIsPublic.value,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => internalIsPublic.value = $event),
                  disabled: isSaving.value || isNavigating.value,
                  help: "If 'Yes' is checked, you give permission to show the request on the public website.",
                  label: "Allow Publication?",
                  text: "Yes"
                }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true)]), createVNode(unref(RockButton), {
                  accesskey: "s",
                  btnType: "primary",
                  disabled: isSaving.value || isNavigating.value,
                  type: "submit"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(saveButtonText)), 1)]),
                  _: 1
                }, 8, ["disabled"])]),
                _: 1
              })) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [_hoisted_3, successMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: "success",
                innerHTML: successMessage.value
              }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                btnType: "link",
                onClick: onAddAnotherRequestClicked
              }, {
                default: withCtx(() => [_hoisted_4]),
                _: 1
              })], 64))]),
              _: 1
            })]);
          };
        }
      }));

      script.__file = "src/Prayer/prayerRequestEntry.obs";

    })
  };
}));
//# sourceMappingURL=prayerRequestEntry.obs.js.map
