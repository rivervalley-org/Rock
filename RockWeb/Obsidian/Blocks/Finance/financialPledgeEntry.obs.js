System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/dateRangePicker.obs', '@Obsidian/Controls/currencyBox.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createBlock, unref, createVNode, withCtx, createElementVNode, toDisplayString, isRef, createCommentVNode, createSlots, NotificationBox, Panel, DetailPanelMode, RockButton, BtnType, BtnSize, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, TextBox, EmailBox, DateRangePicker, CurrencyBox, RockLabel, DropDownList, RockForm, debounce;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      createSlots = module.createSlots;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      debounce = module.debounce;
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

      var _hoisted_1$1 = {
        key: 1
      };
      var _hoisted_2$1 = {
        key: 0,
        class: "form-group"
      };
      var _hoisted_3$1 = createTextVNode("Name");
      var _hoisted_4$1 = {
        key: 1
      };
      var script$1 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$fir, _props$modelValue$las, _props$modelValue$ema, _props$modelValue$cur, _props$modelValue$per, _props$modelValue$sta, _props$modelValue$end, _props$modelValue$tot, _props$modelValue$gro, _props$modelValue$gro2, _props$modelValue$ple, _props$modelValue$ple2, _props$options$select, _props$options$groups, _props$options$groups2, _props$options$pledge, _props$modelValue$acc;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var firstName = ref((_props$modelValue$fir = props.modelValue.firstName) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : "");
          var lastName = ref((_props$modelValue$las = props.modelValue.lastName) !== null && _props$modelValue$las !== void 0 ? _props$modelValue$las : "");
          var email = ref((_props$modelValue$ema = props.modelValue.email) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "");
          var currentPerson = ref((_props$modelValue$cur = props.modelValue.currentPerson) !== null && _props$modelValue$cur !== void 0 ? _props$modelValue$cur : {});
          var personAlias = propertyRef((_props$modelValue$per = props.modelValue.personAlias) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : {}, "PersonAliasId");
          var startDate = propertyRef((_props$modelValue$sta = props.modelValue.startDate) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "", "StartDate");
          var endDate = propertyRef((_props$modelValue$end = props.modelValue.endDate) !== null && _props$modelValue$end !== void 0 ? _props$modelValue$end : "", "EndDate");
          var totalAmount = propertyRef((_props$modelValue$tot = props.modelValue.totalAmount) !== null && _props$modelValue$tot !== void 0 ? _props$modelValue$tot : null, "TotalAmount");
          var groupGuidOrEmptyString = propertyRef((_props$modelValue$gro = (_props$modelValue$gro2 = props.modelValue.group) === null || _props$modelValue$gro2 === void 0 ? void 0 : _props$modelValue$gro2.value) !== null && _props$modelValue$gro !== void 0 ? _props$modelValue$gro : "", "GroupId");
          var pledgeFrequencyValue = propertyRef((_props$modelValue$ple = (_props$modelValue$ple2 = props.modelValue.pledgeFrequencyValue) === null || _props$modelValue$ple2 === void 0 ? void 0 : _props$modelValue$ple2.value) !== null && _props$modelValue$ple !== void 0 ? _props$modelValue$ple : "", "PledgeFrequencyValueId");
          var selectGroupTypeGuidOrEmptyString = ref((_props$options$select = props.options.selectGroupTypeGuid) !== null && _props$options$select !== void 0 ? _props$options$select : "");
          var groupsLabel = ref((_props$options$groups = props.options.groupsLabel) !== null && _props$options$groups !== void 0 ? _props$options$groups : "");
          var groups = ref((_props$options$groups2 = props.options.groups) !== null && _props$options$groups2 !== void 0 ? _props$options$groups2 : []);
          var showPledgeFrequency = ref(props.options.showPledgeFrequency);
          var pledgeFrequencies = ref((_props$options$pledge = props.options.pledgeFrequencies) !== null && _props$options$pledge !== void 0 ? _props$options$pledge : []);
          var duplicatePledgeWarningText = ref(props.modelValue.duplicatePledgeWarningText);
          var account = propertyRef((_props$modelValue$acc = props.modelValue.account) !== null && _props$modelValue$acc !== void 0 ? _props$modelValue$acc : {}, "AccountId");
          var selectedDateRange = ref(startDate.value || endDate.value ? {
            lowerValue: startDate.value,
            upperValue: endDate.value
          } : undefined);
          var showDateRange = ref(props.options.showDateRange);
          var pledgeTerm = ref(props.options.pledgeTerm);
          var propRefs = [startDate, endDate, totalAmount, groupGuidOrEmptyString, pledgeFrequencyValue, personAlias, account];
          var pledgeFrequencyValidationRule = computed(() => props.options.requirePledgeFrequency ? "required" : "");
          var pledgeLabel = computed(() => "Total ".concat(pledgeTerm.value, " Amount"));
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$sta2, _props$modelValue$sta3, _props$modelValue$tot2, _props$modelValue$gro3, _props$modelValue$gro4, _props$modelValue$ple3, _props$modelValue$ple4, _props$modelValue$per2, _props$modelValue$acc2, _props$modelValue$dup;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(startDate, (_props$modelValue$sta2 = props.modelValue.startDate) !== null && _props$modelValue$sta2 !== void 0 ? _props$modelValue$sta2 : "");
            updateRefValue(endDate, (_props$modelValue$sta3 = props.modelValue.startDate) !== null && _props$modelValue$sta3 !== void 0 ? _props$modelValue$sta3 : "");
            updateRefValue(totalAmount, (_props$modelValue$tot2 = props.modelValue.totalAmount) !== null && _props$modelValue$tot2 !== void 0 ? _props$modelValue$tot2 : null);
            updateRefValue(groupGuidOrEmptyString, (_props$modelValue$gro3 = (_props$modelValue$gro4 = props.modelValue.group) === null || _props$modelValue$gro4 === void 0 ? void 0 : _props$modelValue$gro4.value) !== null && _props$modelValue$gro3 !== void 0 ? _props$modelValue$gro3 : "");
            updateRefValue(pledgeFrequencyValue, (_props$modelValue$ple3 = (_props$modelValue$ple4 = props.modelValue.pledgeFrequencyValue) === null || _props$modelValue$ple4 === void 0 ? void 0 : _props$modelValue$ple4.value) !== null && _props$modelValue$ple3 !== void 0 ? _props$modelValue$ple3 : "");
            updateRefValue(personAlias, (_props$modelValue$per2 = props.modelValue.personAlias) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : {});
            updateRefValue(account, (_props$modelValue$acc2 = props.modelValue.account) !== null && _props$modelValue$acc2 !== void 0 ? _props$modelValue$acc2 : {});
            updateRefValue(duplicatePledgeWarningText, (_props$modelValue$dup = props.modelValue.duplicatePledgeWarningText) !== null && _props$modelValue$dup !== void 0 ? _props$modelValue$dup : "");
          });
          watch([attributeValues, selectedDateRange, ...propRefs], () => {
            var _selectedDateRange$va, _selectedDateRange$va2;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              totalAmount: totalAmount.value,
              group: {
                value: groupGuidOrEmptyString.value
              },
              pledgeFrequencyValue: {
                value: pledgeFrequencyValue.value
              },
              startDate: (_selectedDateRange$va = selectedDateRange.value) === null || _selectedDateRange$va === void 0 ? void 0 : _selectedDateRange$va.lowerValue,
              endDate: (_selectedDateRange$va2 = selectedDateRange.value) === null || _selectedDateRange$va2 === void 0 ? void 0 : _selectedDateRange$va2.upperValue,
              personAlias: personAlias.value,
              account: account.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [duplicatePledgeWarningText.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              innerHTML: duplicatePledgeWarningText.value,
              dismissable: false,
              alertType: "warning"
            }, null, 8, ["innerHTML"])) : (openBlock(), createElementBlock("div", _hoisted_1$1, [currentPerson.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_3$1]),
              _: 1
            }), createElementVNode("div", null, toDisplayString(currentPerson.value.text), 1)])) : (openBlock(), createElementBlock("div", _hoisted_4$1, [createVNode(unref(TextBox), {
              label: "First Name",
              modelValue: firstName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => firstName.value = $event)
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              label: "Last Name",
              modelValue: lastName.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => lastName.value = $event)
            }, null, 8, ["modelValue"]), createVNode(unref(EmailBox), {
              label: "Email",
              modelValue: email.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => email.value = $event)
            }, null, 8, ["modelValue"])])), selectGroupTypeGuidOrEmptyString.value ? (openBlock(), createBlock(unref(DropDownList), {
              key: 2,
              label: groupsLabel.value,
              modelValue: unref(groupGuidOrEmptyString),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(groupGuidOrEmptyString) ? groupGuidOrEmptyString.value = $event : null),
              items: groups.value,
              showBlankItem: false,
              enhanceForLongLists: false,
              grouped: false,
              multiple: false
            }, null, 8, ["label", "modelValue", "items"])) : createCommentVNode("v-if", true), showDateRange.value ? (openBlock(), createBlock(unref(DateRangePicker), {
              key: 3,
              label: "Date Range",
              modelValue: selectedDateRange.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => selectedDateRange.value = $event)
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(CurrencyBox), {
              label: unref(pledgeLabel),
              modelValue: unref(totalAmount),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(totalAmount) ? totalAmount.value = $event : null),
              help: "The total amount that you are pledging. If you intend to give $100 monthly for one year, enter $1,200.",
              rules: "required"
            }, null, 8, ["label", "modelValue"]), showPledgeFrequency.value ? (openBlock(), createBlock(unref(DropDownList), {
              key: 4,
              label: "Gift Frequency",
              help: "How often you expect to be making gifts towards the total amount.",
              modelValue: unref(pledgeFrequencyValue),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(pledgeFrequencyValue) ? pledgeFrequencyValue.value = $event : null),
              items: pledgeFrequencies.value,
              rules: unref(pledgeFrequencyValidationRule),
              showBlankItem: false,
              multiple: false,
              enhanceForLongLists: true
            }, null, 8, ["modelValue", "items", "rules"])) : createCommentVNode("v-if", true)]))]);
          };
        }
      });

      script$1.__file = "src/Finance/FinancialPledgeEntry/editPanel.partial.obs";

      var _hoisted_1 = ["innerHTML"];
      var _hoisted_2 = {
        key: 3
      };
      var _hoisted_3 = createTextVNode(" Cancel ");
      var _hoisted_4 = {
        key: 0,
        class: "mt-3"
      };
      var _hoisted_5 = {
        key: 0
      };
      var script = exports('default', defineComponent({
        name: 'financialPledgeEntry',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var financialPledgeEditBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var submitForm = ref(false);
          var resetKey = ref("");
          var panelMode = ref(DetailPanelMode.Edit);
          var validProperties = ["attributeValues", "account", "endDate", "group", "personAlias", "pledgeFrequencyValue", "startDate", "totalAmount"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(financialPledgeEditBag, validProperties, invokeBlockAction), undefined, true);
          var noteMessage = computed(() => {
            var _config$options$noteM, _config$options;
            return (_config$options$noteM = (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.noteMessage) !== null && _config$options$noteM !== void 0 ? _config$options$noteM : "";
          });
          var duplicatePledgeWarningText = computed(() => {
            var _financialPledgeEditB, _financialPledgeEditB2;
            return (_financialPledgeEditB = (_financialPledgeEditB2 = financialPledgeEditBag.value) === null || _financialPledgeEditB2 === void 0 ? void 0 : _financialPledgeEditB2.duplicatePledgeWarningText) !== null && _financialPledgeEditB !== void 0 ? _financialPledgeEditB : "";
          });
          var saveButtonText = computed(() => {
            var _financialPledgeEditB3, _financialPledgeEditB4;
            return (_financialPledgeEditB3 = (_financialPledgeEditB4 = financialPledgeEditBag.value) === null || _financialPledgeEditB4 === void 0 ? void 0 : _financialPledgeEditB4.saveButtonText) !== null && _financialPledgeEditB3 !== void 0 ? _financialPledgeEditB3 : "";
          });
          var receiptText = computed(() => {
            return financialPledgeEditBag.value.receiptText;
          });
          var options = computed(() => {
            var _config$options2;
            return (_config$options2 = config.options) !== null && _config$options2 !== void 0 ? _config$options2 : {
              requirePledgeFrequency: false,
              showPledgeFrequency: false,
              showDateRange: true
            };
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              resetKey.value = "reset-errors";
              var result = yield invokeBlockAction("InitializeBox");
              if (result.isSuccess && result.data && result.data.entity) {
                financialPledgeEditBag.value = result.data.entity;
              }
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              errorMessage.value = "";
              var data = {
                entity: financialPledgeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  financialPledgeEditBag.value = result.data;
                }
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save financial pledge.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          var onStartSubmitForm = () => {
            submitForm.value = true;
          };
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified financial pledge could not be viewed.";
          } else if (!config.entity.idKey) {
            financialPledgeEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockForm), {
              submit: submitForm.value,
              "onUpdate:submit": _cache[1] || (_cache[1] = $event => submitForm.value = $event),
              onSubmit: onSave,
              formResetKey: resetKey.value
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                type: "block"
              }, createSlots({
                default: withCtx(() => [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "warning"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 1,
                  alertType: "danger"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), unref(receiptText) ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  innerHTML: unref(receiptText)
                }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, [unref(duplicatePledgeWarningText) ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  innerHTML: unref(duplicatePledgeWarningText),
                  dismissable: false,
                  alertType: "warning"
                }, null, 8, ["innerHTML"])) : (openBlock(), createBlock(unref(script$1), {
                  key: 1,
                  modelValue: financialPledgeEditBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => financialPledgeEditBag.value = $event),
                  options: unref(options),
                  onPropertyChanged: onPropertyChanged
                }, null, 8, ["modelValue", "options"]))]))]),
                _: 2
              }, [!unref(receiptText) ? {
                name: "footerActions",
                fn: withCtx(() => [createElementVNode("div", null, [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSubmitForm
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(saveButtonText)), 1)]),
                  _: 1
                }, 8, ["btnSize", "btnType"]), unref(duplicatePledgeWarningText) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onCancelEdit
                }, {
                  default: withCtx(() => [_hoisted_3]),
                  _: 1
                }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true)]), !unref(duplicatePledgeWarningText) ? (openBlock(), createElementBlock("div", _hoisted_4, [unref(noteMessage) ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(unref(noteMessage)), 1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)])
              } : undefined]), 1024)]),
              _: 1
            }, 8, ["submit", "formResetKey"]);
          };
        }
      }));

      script.__file = "src/Finance/financialPledgeEntry.obs";

    })
  };
}));
//# sourceMappingURL=financialPledgeEntry.obs.js.map
