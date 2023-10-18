System.register(['vue', './rockFormField', './dropDownList', './textBox', '@Obsidian/Enums/Controls/requirementLevel', '@Obsidian/Utility/http', './loading', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var defineComponent, reactive, computed, watch, ref, openBlock, createBlock, unref, isRef, withCtx, createElementVNode, createVNode, createElementBlock, createCommentVNode, normalizeClass, RockFormField, DropDownList, TextBox, RequirementLevel, post, Loading, rulesPropType, containsRequiredRule;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      reactive = module.reactive;
      computed = module.computed;
      watch = module.watch;
      ref = module.ref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      normalizeClass = module.normalizeClass;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RequirementLevel = module.RequirementLevel;
    }, function (module) {
      post = module.post;
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      rulesPropType = module.rulesPropType;
      containsRequiredRule = module.containsRequiredRule;
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

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        key: 0,
        class: "form-row"
      };
      var _hoisted_3 = {
        class: "form-group col-sm-6"
      };
      var _hoisted_4 = {
        key: 1,
        class: "form-group"
      };
      var _hoisted_5 = {
        key: 2,
        class: "form-group"
      };
      var _hoisted_6 = {
        class: "form-row"
      };
      var _hoisted_7 = {
        key: 1,
        class: "form-group col-sm-3"
      };
      var _hoisted_8 = {
        key: 2,
        class: "form-group col-sm-3"
      };
      var _hoisted_9 = {
        key: 3,
        class: "form-group col-sm-3"
      };
      var script = exports('default', defineComponent({
        name: 'addressControl',
        props: {
          modelValue: {
            type: Object,
            default: {}
          },
          disabled: {
            type: Boolean,
            default: false
          },
          id: {
            type: String,
            default: ""
          },
          showCounty: {
            type: Boolean,
            default: false
          },
          showAddressLine2: {
            type: Boolean,
            default: true
          },
          useCountryAbbreviation: {
            type: Boolean,
            default: false
          },
          disableFrontEndValidation: {
            type: Boolean,
            default: false
          },
          rules: rulesPropType
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue$cit, _props$modelValue$cou, _props$modelValue$pos, _props$modelValue$sta, _props$modelValue$str, _props$modelValue$str2, _props$modelValue$loc;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = reactive({
            city: (_props$modelValue$cit = props.modelValue.city) !== null && _props$modelValue$cit !== void 0 ? _props$modelValue$cit : "",
            country: (_props$modelValue$cou = props.modelValue.country) !== null && _props$modelValue$cou !== void 0 ? _props$modelValue$cou : "",
            postalCode: (_props$modelValue$pos = props.modelValue.postalCode) !== null && _props$modelValue$pos !== void 0 ? _props$modelValue$pos : "",
            state: (_props$modelValue$sta = props.modelValue.state) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "",
            street1: (_props$modelValue$str = props.modelValue.street1) !== null && _props$modelValue$str !== void 0 ? _props$modelValue$str : "",
            street2: (_props$modelValue$str2 = props.modelValue.street2) !== null && _props$modelValue$str2 !== void 0 ? _props$modelValue$str2 : "",
            locality: (_props$modelValue$loc = props.modelValue.locality) !== null && _props$modelValue$loc !== void 0 ? _props$modelValue$loc : ""
          });
          var isRequired = computed(() => {
            return containsRequiredRule(props.rules);
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue);
          });
          watch(() => props.modelValue, () => {
            Object.entries(props.modelValue).forEach(_ref2 => {
              var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];
              if (val === null || val === undefined) {
                internalValue[key] = "";
              } else if (val !== internalValue[key]) {
                internalValue[key] = val;
              }
            });
          });
          var isLoading = ref(false);
          var country = reactive({
            isVisible: true,
            label: "Country",
            autocomplete: "country"
          });
          var address1 = reactive({
            isVisible: true,
            label: "Address Line 1",
            rules: RequirementLevel.Unspecified,
            autocomplete: "address-line1"
          });
          var address2 = reactive({
            isVisible: true,
            label: "Address Line 2",
            rules: RequirementLevel.Unspecified,
            autocomplete: "address-line2"
          });
          var city = reactive({
            isVisible: true,
            label: "City",
            rules: RequirementLevel.Unspecified,
            autocomplete: "address-level2"
          });
          var county = reactive({
            isVisible: true,
            label: "County",
            rules: RequirementLevel.Unspecified,
            autocomplete: "address-level2"
          });
          var state = reactive({
            isVisible: true,
            label: "State",
            rules: RequirementLevel.Unspecified,
            autocomplete: "address-level1"
          });
          var zip = reactive({
            isVisible: true,
            label: "Zip",
            rules: RequirementLevel.Unspecified,
            autocomplete: "postal-code"
          });
          var countryOptions = ref([]);
          var stateOptions = ref([]);
          var hasStateList = ref(false);
          var rules = computed(() => {
            var rules = {
              country: undefined,
              street1: undefined,
              street2: undefined,
              city: undefined,
              locality: undefined,
              state: undefined,
              postalCode: undefined
            };
            if (props.disableFrontEndValidation) {
              return rules;
            }
            if (isRequired.value || internalValue.street1) {
              if (address1.rules == RequirementLevel.Required) {
                rules.street1 = "required";
              }
              if (address2.rules == RequirementLevel.Required) {
                rules.street2 = "required";
              }
              if (city.rules == RequirementLevel.Required) {
                rules.city = "required";
              }
              if (county.rules == RequirementLevel.Required) {
                rules.locality = "required";
              }
              if (state.rules == RequirementLevel.Required) {
                rules.state = "required";
              }
              if (zip.rules == RequirementLevel.Required) {
                rules.postalCode = "required";
              }
            }
            return rules;
          });
          function getConfiguration() {
            return _getConfiguration.apply(this, arguments);
          }
          function _getConfiguration() {
            _getConfiguration = _asyncToGenerator(function* () {
              isLoading.value = true;
              var options = {
                useCountryAbbreviation: props.useCountryAbbreviation,
                countryCode: props.modelValue.country
              };
              var result = yield post("/api/v2/Controls/AddressControlGetConfiguration", undefined, options);
              if (result.isSuccess && result.data) {
                var _data$localityLabel, _data$cityLabel, _data$stateLabel, _data$postalCodeLabel, _data$countries, _data$states, _ref5, _data$defaultState;
                var data = result.data;
                country.isVisible = data.showCountrySelection;
                address1.isVisible = data.addressLine1Requirement != RequirementLevel.Unavailable;
                address1.rules = data.addressLine1Requirement;
                address2.isVisible = data.addressLine2Requirement == RequirementLevel.Required || props.showAddressLine2 && data.addressLine2Requirement != RequirementLevel.Unavailable;
                address2.rules = data.addressLine2Requirement;
                county.isVisible = data.localityRequirement == RequirementLevel.Required || props.showCounty && data.localityRequirement != RequirementLevel.Unavailable;
                county.rules = data.localityRequirement;
                county.label = (_data$localityLabel = data.localityLabel) !== null && _data$localityLabel !== void 0 ? _data$localityLabel : county.label;
                city.isVisible = data.cityRequirement != RequirementLevel.Unavailable;
                city.rules = data.cityRequirement;
                city.label = (_data$cityLabel = data.cityLabel) !== null && _data$cityLabel !== void 0 ? _data$cityLabel : city.label;
                city.autocomplete = county.isVisible ? "address-level3" : "address-level2";
                state.isVisible = data.stateRequirement != RequirementLevel.Unavailable;
                state.rules = data.stateRequirement;
                state.label = (_data$stateLabel = data.stateLabel) !== null && _data$stateLabel !== void 0 ? _data$stateLabel : state.label;
                zip.isVisible = data.postalCodeRequirement != RequirementLevel.Unavailable;
                zip.rules = data.postalCodeRequirement;
                zip.label = (_data$postalCodeLabel = data.postalCodeLabel) !== null && _data$postalCodeLabel !== void 0 ? _data$postalCodeLabel : zip.label;
                countryOptions.value = (_data$countries = data.countries) !== null && _data$countries !== void 0 ? _data$countries : [];
                stateOptions.value = (_data$states = data.states) !== null && _data$states !== void 0 ? _data$states : [];
                hasStateList.value = data.hasStateList;
                var countryValue = (_ref5 = data.selectedCountry || data.defaultCountry) !== null && _ref5 !== void 0 ? _ref5 : "";
                var stateValue = (_data$defaultState = data.defaultState) !== null && _data$defaultState !== void 0 ? _data$defaultState : "";
                if (!internalValue.country && countryValue) {
                  internalValue.country = countryValue;
                }
                if (!internalValue.state && stateValue) {
                  internalValue.state = stateValue;
                }
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
              }
              isLoading.value = false;
            });
            return _getConfiguration.apply(this, arguments);
          }
          watch(() => internalValue.country, (currentVal, oldVal) => {
            if (currentVal != oldVal) {
              getConfiguration();
            }
          }, {
            deep: true
          });
          getConfiguration();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              formGroupClasses: "address-control",
              name: "addresscontrol",
              modelValue: internalValue,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(internalValue) ? internalValue.value = $event : null),
              modelModifiers: {
                lazy: true
              },
              rules: _ctx.$props.rules
            }, {
              default: withCtx(_ref4 => {
                var uniqueId = _ref4.uniqueId;
                  _ref4.field;
                return [createElementVNode("div", _hoisted_1, [createVNode(unref(Loading), {
                  id: __props.id || uniqueId,
                  isLoading: isLoading.value
                }, {
                  default: withCtx(() => [country.isVisible ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(DropDownList), {
                    modelValue: internalValue.country,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValue.country = $event),
                    items: countryOptions.value,
                    validationTitle: country.label,
                    rules: unref(rules).country,
                    disabled: __props.disabled,
                    autocomplete: country.autocomplete
                  }, null, 8, ["modelValue", "items", "validationTitle", "rules", "disabled", "autocomplete"])])])) : createCommentVNode("v-if", true), address1.isVisible ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(TextBox), {
                    modelValue: internalValue.street1,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.street1 = $event),
                    placeholder: address1.label,
                    validationTitle: address1.label,
                    rules: unref(rules).street1,
                    disabled: __props.disabled,
                    autocomplete: address1.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"])])) : createCommentVNode("v-if", true), address2.isVisible ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(TextBox), {
                    modelValue: internalValue.street2,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalValue.street2 = $event),
                    placeholder: address2.label,
                    validationTitle: address2.label,
                    rules: unref(rules).street2,
                    disabled: __props.disabled,
                    autocomplete: address2.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6, [city.isVisible ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["form-group", county.isVisible ? 'col-sm-3' : 'col-sm-6'])
                  }, [createVNode(unref(TextBox), {
                    modelValue: internalValue.city,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => internalValue.city = $event),
                    placeholder: city.label,
                    validationTitle: city.label,
                    rules: unref(rules).city,
                    disabled: __props.disabled,
                    autocomplete: city.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"])], 2)) : createCommentVNode("v-if", true), county.isVisible ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(TextBox), {
                    modelValue: internalValue.locality,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => internalValue.locality = $event),
                    placeholder: county.label,
                    validationTitle: county.label,
                    rules: unref(rules).locality,
                    disabled: __props.disabled,
                    autocomplete: county.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"])])) : createCommentVNode("v-if", true), state.isVisible ? (openBlock(), createElementBlock("div", _hoisted_8, [hasStateList.value ? (openBlock(), createBlock(unref(DropDownList), {
                    key: 0,
                    showBlankItem: false,
                    modelValue: internalValue.state,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => internalValue.state = $event),
                    items: stateOptions.value,
                    validationTitle: state.label,
                    rules: unref(rules).state,
                    disabled: __props.disabled,
                    autocomplete: state.autocomplete
                  }, null, 8, ["modelValue", "items", "validationTitle", "rules", "disabled", "autocomplete"])) : (openBlock(), createBlock(unref(TextBox), {
                    key: 1,
                    modelValue: internalValue.state,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => internalValue.state = $event),
                    placeholder: state.label,
                    validationTitle: state.label,
                    rules: unref(rules).state,
                    disabled: __props.disabled,
                    autocomplete: state.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"]))])) : createCommentVNode("v-if", true), zip.isVisible ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(unref(TextBox), {
                    modelValue: internalValue.postalCode,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => internalValue.postalCode = $event),
                    placeholder: zip.label,
                    validationTitle: zip.label,
                    rules: unref(rules).postalCode,
                    disabled: __props.disabled,
                    autocomplete: zip.autocomplete
                  }, null, 8, ["modelValue", "placeholder", "validationTitle", "rules", "disabled", "autocomplete"])])) : createCommentVNode("v-if", true)])]),
                  _: 2
                }, 1032, ["id", "isLoading"])])];
              }),
              _: 1
            }, 8, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/addressControl.obs";

    })
  };
}));
//# sourceMappingURL=addressControl.obs.js.map
