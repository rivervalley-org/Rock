System.register(['vue', './rockFormField.obs', './currencyBox.obs', './campusPicker.obs', './loading.obs', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', '@Obsidian/Utility/suspense', '@Obsidian/ValidationRules', './baseAsyncPicker.obs', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, watchEffect, openBlock, createBlock, unref, mergeProps, withCtx, createVNode, createElementBlock, Fragment, normalizeClass, isRef, createCommentVNode, renderList, RockFormField, CurrencyBox, CampusPicker, Loading, PickerDisplayStyle, useVModelPassthrough, useStandardRockFormFieldProps, standardRockFormFieldProps, toGuidOrNull, areEqual, useHttp, useSuspense, containsRequiredRule, normalizeRules, BaseAsyncPicker, useSecurityGrantToken;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      watchEffect = module.watchEffect;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      normalizeClass = module.normalizeClass;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      renderList = module.renderList;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSuspense = module.useSuspense;
    }, function (module) {
      containsRequiredRule = module.containsRequiredRule;
      normalizeRules = module.normalizeRules;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
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

      var script = exports('default', defineComponent({
        name: 'campusAccountAmountPicker',
        props: _objectSpread2({
          modelValue: {
            type: Array,
            required: false
          },
          campusGuid: {
            type: String,
            default: null
          },
          currencyCodeDefinedValueGuid: {
            type: String,
            default: null
          },
          accountAmountEntryMode: {
            type: String,
            default: "singleAccount"
          },
          disableAccountCampusMappingLogic: {
            type: Boolean,
            default: false
          },
          accountHeaderTemplate: {
            type: String,
            default: null
          },
          selectableAccountGuids: {
            type: Array,
            required: true
          },
          orderBySelectableAccountsIndex: {
            type: Boolean,
            default: false
          },
          hideCampusIfKnown: {
            type: Boolean,
            default: false
          },
          includeInactiveCampuses: {
            type: Boolean,
            default: false
          },
          campusTypeFilter: {
            type: [String, Array],
            default: null
          },
          campusStatusFilter: {
            type: [String, Array],
            default: null
          },
          amountEntrySingleCssClass: {
            type: String,
            default: ""
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue", "update:campusGuid"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = useVModelPassthrough(props, "modelValue", emit);
          var internalCampusGuid = useVModelPassthrough(props, "campusGuid", emit);
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var hideCampusPicker = ref(false);
          var http = useHttp();
          var loadedAccounts = ref(null);
          var loadedAccountListItems = ref(null);
          var securityToken = useSecurityGrantToken();
          var isLoading = ref(false);
          var amount = ref();
          var selectedAccount = ref(null);
          var amounts = ref([]);
          var accountPickerAccounts = computed(() => {
            var _loadedAccountListIte;
            return (_loadedAccountListIte = loadedAccountListItems.value) !== null && _loadedAccountListIte !== void 0 ? _loadedAccountListIte : loadAccountOptions;
          });
          var internalCampusBag = computed({
            get() {
              return {
                value: internalCampusGuid.value
              };
            },
            set(newValue) {
              internalCampusGuid.value = toGuidOrNull(newValue.value);
            }
          });
          var properSelectedAccount = computed(() => {
            if (!selectedAccount.value || props.accountAmountEntryMode == "multipleAccounts") {
              return null;
            }
            return getMappedAccountForCampus(selectedAccount.value, internalCampusGuid.value);
          });
          var mutatedRules = computed(() => {
            if (containsRequiredRule(props.rules)) {
              var rules = normalizeRules(props.rules);
              var index = rules.indexOf("required");
              rules[index] = function accountAmountRequired() {
                var _internalValue$value;
                var hasAmount = !!((_internalValue$value = internalValue.value) !== null && _internalValue$value !== void 0 && _internalValue$value.some(aa => !!aa.amount));
                console.log("validating", hasAmount);
                return hasAmount || "Please enter an amount.";
              };
              return rules;
            }
            return props.rules;
          });
          watch([loadedAccountListItems, () => props.accountAmountEntryMode], () => {
            if (loadedAccountListItems.value && loadedAccountListItems.value.length) {
              if (props.accountAmountEntryMode == "multipleAccounts") {
                amounts.value = loadedAccountListItems.value.map(account => {
                  return {
                    amount: null,
                    account,
                    readOnly: false
                  };
                });
              } else {
                selectedAccount.value = loadedAccountListItems.value[0];
              }
            }
          });
          watch(() => props.hideCampusIfKnown, () => {
            hideCampusPicker.value = !!(props.campusGuid && props.hideCampusIfKnown);
          }, {
            immediate: true
          });
          watchEffect(() => {
            if (props.accountAmountEntryMode == "singleAccount") {
              internalValue.value = [{
                account: properSelectedAccount.value,
                amount: amount.value || null,
                readOnly: false
              }];
            } else {
              internalValue.value = amounts.value.map(aa => {
                var _aa$account;
                return {
                  amount: aa.amount,
                  account: getMappedAccountForCampus((_aa$account = aa.account) !== null && _aa$account !== void 0 ? _aa$account : {}, internalCampusGuid.value),
                  readOnly: aa.readOnly
                };
              });
            }
          });
          watch(() => [props.orderBySelectableAccountsIndex, props.selectableAccountGuids, props.accountHeaderTemplate], () => loadAccountOptions());
          function loadAccountOptions() {
            return _loadAccountOptions.apply(this, arguments);
          }
          function _loadAccountOptions() {
            _loadAccountOptions = _asyncToGenerator(function* () {
              var options = {
                selectableAccountGuids: props.selectableAccountGuids.map(s => toGuidOrNull(s)).filter(g => g !== null).map(g => g),
                orderBySelectableAccountsIndex: props.orderBySelectableAccountsIndex,
                accountHeaderTemplate: props.accountHeaderTemplate,
                securityGrantToken: securityToken.value
              };
              isLoading.value = true;
              var result = yield http.post("/api/v2/Controls/CampusAccountAmountPickerGetAccounts", undefined, options);
              if (result.isSuccess && result.data) {
                loadedAccounts.value = result.data;
                loadedAccountListItems.value = result.data.map(item => ({
                  text: item.name,
                  value: item.value
                }));
                isLoading.value = false;
                return loadedAccountListItems.value;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedAccounts.value = [];
                isLoading.value = false;
                return [];
              }
            });
            return _loadAccountOptions.apply(this, arguments);
          }
          function getMappedAccountForCampus(account, campus) {
            var _loadedAccounts$value, _loadedAccounts$value2, _loadedAccounts$value3;
            if (props.disableAccountCampusMappingLogic || !campus) {
              return account;
            }
            return ((_loadedAccounts$value = loadedAccounts.value) === null || _loadedAccounts$value === void 0 ? void 0 : (_loadedAccounts$value2 = _loadedAccounts$value.find(acct => areEqual(account.value, acct === null || acct === void 0 ? void 0 : acct.value))) === null || _loadedAccounts$value2 === void 0 ? void 0 : (_loadedAccounts$value3 = _loadedAccounts$value2.campusAccounts) === null || _loadedAccounts$value3 === void 0 ? void 0 : _loadedAccounts$value3[campus]) || account;
          }
          var suspense = useSuspense();
          if (suspense) {
            suspense.addOperation(loadAccountOptions());
          } else {
            loadAccountOptions();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              disableLabel: "",
              modelValue: unref(internalValue)
            }, unref(standardFieldProps), {
              rules: unref(mutatedRules),
              name: "campus-account-amount-picker"
            }), {
              default: withCtx(() => [createVNode(unref(Loading), {
                isLoading: isLoading.value
              }, {
                default: withCtx(() => {
                  var _props$currencyCodeD, _props$campusTypeFil, _props$campusStatusF, _props$campusTypeFil2, _props$campusStatusF2;
                  return [__props.accountAmountEntryMode == 'singleAccount' ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [createVNode(unref(CurrencyBox), {
                    currencyCodeDefinedValueGuid: (_props$currencyCodeD = __props.currencyCodeDefinedValueGuid) !== null && _props$currencyCodeD !== void 0 ? _props$currencyCodeD : undefined,
                    modelValue: amount.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => amount.value = $event),
                    class: normalizeClass(__props.amountEntrySingleCssClass)
                  }, null, 8, ["currencyCodeDefinedValueGuid", "modelValue", "class"]), !hideCampusPicker.value ? (openBlock(), createBlock(unref(CampusPicker), {
                    key: 0,
                    label: "Campus",
                    modelValue: unref(internalCampusBag),
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(internalCampusBag) ? internalCampusBag.value = $event : null),
                    includeInactive: __props.includeInactiveCampuses,
                    campusTypeFilter: (_props$campusTypeFil = __props.campusTypeFilter) !== null && _props$campusTypeFil !== void 0 ? _props$campusTypeFil : undefined,
                    campusStatusFilter: (_props$campusStatusF = __props.campusStatusFilter) !== null && _props$campusStatusF !== void 0 ? _props$campusStatusF : undefined
                  }, null, 8, ["modelValue", "includeInactive", "campusTypeFilter", "campusStatusFilter"])) : createCommentVNode("v-if", true), createVNode(unref(BaseAsyncPicker), mergeProps({
                    modelValue: selectedAccount.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => selectedAccount.value = $event)
                  }, unref(standardFieldProps), {
                    label: undefined,
                    displayStyle: unref(PickerDisplayStyle).Condensed,
                    items: unref(accountPickerAccounts)
                  }), null, 16, ["modelValue", "displayStyle", "items"])], 64)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(amounts.value, accountAmount => {
                    var _accountAmount$accoun, _accountAmount$accoun2, _props$currencyCodeD2;
                    return openBlock(), createBlock(unref(CurrencyBox), {
                      key: accountAmount === null || accountAmount === void 0 ? void 0 : (_accountAmount$accoun = accountAmount.account) === null || _accountAmount$accoun === void 0 ? void 0 : _accountAmount$accoun.value,
                      label: accountAmount === null || accountAmount === void 0 ? void 0 : (_accountAmount$accoun2 = accountAmount.account) === null || _accountAmount$accoun2 === void 0 ? void 0 : _accountAmount$accoun2.text,
                      modelValue: accountAmount.amount,
                      "onUpdate:modelValue": $event => accountAmount.amount = $event,
                      currencyCodeDefinedValueGuid: (_props$currencyCodeD2 = __props.currencyCodeDefinedValueGuid) !== null && _props$currencyCodeD2 !== void 0 ? _props$currencyCodeD2 : undefined
                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "currencyCodeDefinedValueGuid"]);
                  }), 128)), !hideCampusPicker.value ? (openBlock(), createBlock(unref(CampusPicker), {
                    key: 0,
                    label: "Campus",
                    modelValue: unref(internalCampusBag),
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(internalCampusBag) ? internalCampusBag.value = $event : null),
                    includeInactive: __props.includeInactiveCampuses,
                    campusTypeFilter: (_props$campusTypeFil2 = __props.campusTypeFilter) !== null && _props$campusTypeFil2 !== void 0 ? _props$campusTypeFil2 : undefined,
                    campusStatusFilter: (_props$campusStatusF2 = __props.campusStatusFilter) !== null && _props$campusStatusF2 !== void 0 ? _props$campusStatusF2 : undefined
                  }, null, 8, ["modelValue", "includeInactive", "campusTypeFilter", "campusStatusFilter"])) : createCommentVNode("v-if", true)], 64))];
                }),
                _: 1
              }, 8, ["isLoading"])]),
              _: 1
            }, 16, ["modelValue", "rules"]);
          };
        }
      }));

      script.__file = "Framework/Controls/campusAccountAmountPicker.obs";

    })
  };
}));
//# sourceMappingURL=campusAccountAmountPicker.obs.js.map
