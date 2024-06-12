System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/accountPicker.obs', '@Obsidian/Controls/dateRangePicker.obs', '@Obsidian/Controls/currencyBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/SystemGuids/definedType', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, Fragment, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, onConfigurationValuesChanged, useReloadBlock, propertyRef, updateRefValue, PersonPicker, AccountPicker, DateRangePicker, CurrencyBox, DropDownList, DefinedType, DefinedValuePicker, toGuidOrNull, areEqual, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, toCurrencyOrNull, RockDateTime, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      AccountPicker = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      toCurrencyOrNull = module.toCurrencyOrNull;
    }, function (module) {
      RockDateTime = module.RockDateTime;
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
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-md-6"
      };
      var _hoisted_11 = {
        class: "attributes"
      };
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          },
          isEditable: {
            type: Boolean,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$acc, _props$modelValue$gro, _props$modelValue$gro2, _props$modelValue$per, _props$modelValue$sta, _props$modelValue$end, _props$modelValue$tot, _props$modelValue$ple, _toGuidOrNull, _props$options$groupT, _props$options$groups;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var account = propertyRef((_props$modelValue$acc = props.modelValue.account) !== null && _props$modelValue$acc !== void 0 ? _props$modelValue$acc : {}, "AccountId");
          var groupGuidOrEmptyString = propertyRef((_props$modelValue$gro = (_props$modelValue$gro2 = props.modelValue.group) === null || _props$modelValue$gro2 === void 0 ? void 0 : _props$modelValue$gro2.value) !== null && _props$modelValue$gro !== void 0 ? _props$modelValue$gro : "", "GroupId");
          var personAlias = propertyRef((_props$modelValue$per = props.modelValue.personAlias) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : undefined, "PersonAliasId");
          var startDate = propertyRef((_props$modelValue$sta = props.modelValue.startDate) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "", "StartDate");
          var endDate = propertyRef((_props$modelValue$end = props.modelValue.endDate) !== null && _props$modelValue$end !== void 0 ? _props$modelValue$end : "", "EndDate");
          var totalAmount = propertyRef((_props$modelValue$tot = props.modelValue.totalAmount) !== null && _props$modelValue$tot !== void 0 ? _props$modelValue$tot : null, "TotalAmount");
          var pledgeFrequencyValue = propertyRef((_props$modelValue$ple = props.modelValue.pledgeFrequencyValue) !== null && _props$modelValue$ple !== void 0 ? _props$modelValue$ple : null, "PledgeFrequencyValueId");
          var selectedDateRange = ref(startDate.value || endDate.value ? {
            lowerValue: startDate.value,
            upperValue: endDate.value
          } : undefined);
          var selectGroupTypeGuidOrEmptyString = ref((_toGuidOrNull = toGuidOrNull(props.options.selectGroupTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "");
          var groupType = ref((_props$options$groupT = props.options.groupType) !== null && _props$options$groupT !== void 0 ? _props$options$groupT : "Group");
          var groups = ref((_props$options$groups = props.options.groups) !== null && _props$options$groups !== void 0 ? _props$options$groups : []);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [startDate, endDate, totalAmount, groupGuidOrEmptyString, pledgeFrequencyValue, personAlias, account];
          var rules = computed(() => {
            var rules = ["required", validateAccount];
            return rules;
          });
          function validateAccount(value) {
            var accounts = value;
            if (!accounts || accounts.length == 0 || !accounts[0]) {
              return "is required";
            }
            return true;
          }
          watch(() => personAlias.value, _asyncToGenerator(function* () {
            var _personAlias$value;
            var personAliasGuid = toGuidOrNull((_personAlias$value = personAlias.value) === null || _personAlias$value === void 0 ? void 0 : _personAlias$value.value);
            if (personAliasGuid && !areEqual(personAliasGuid, emptyGuid)) {
              var request = {
                personAliasGuid
              };
              var result = yield invokeBlockAction("LoadGroups", request);
              if (result.isSuccess) {
                var _result$data;
                groups.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
              }
            }
          }));
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$sta2, _props$modelValue$end2, _props$modelValue$tot2, _props$modelValue$gro3, _props$modelValue$gro4, _props$modelValue$ple2, _props$modelValue$per2, _props$modelValue$acc2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(startDate, (_props$modelValue$sta2 = props.modelValue.startDate) !== null && _props$modelValue$sta2 !== void 0 ? _props$modelValue$sta2 : "");
            updateRefValue(endDate, (_props$modelValue$end2 = props.modelValue.endDate) !== null && _props$modelValue$end2 !== void 0 ? _props$modelValue$end2 : "");
            updateRefValue(totalAmount, (_props$modelValue$tot2 = props.modelValue.totalAmount) !== null && _props$modelValue$tot2 !== void 0 ? _props$modelValue$tot2 : null);
            updateRefValue(groupGuidOrEmptyString, (_props$modelValue$gro3 = (_props$modelValue$gro4 = props.modelValue.group) === null || _props$modelValue$gro4 === void 0 ? void 0 : _props$modelValue$gro4.value) !== null && _props$modelValue$gro3 !== void 0 ? _props$modelValue$gro3 : "");
            updateRefValue(pledgeFrequencyValue, (_props$modelValue$ple2 = props.modelValue.pledgeFrequencyValue) !== null && _props$modelValue$ple2 !== void 0 ? _props$modelValue$ple2 : null);
            updateRefValue(personAlias, (_props$modelValue$per2 = props.modelValue.personAlias) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : undefined);
            updateRefValue(account, (_props$modelValue$acc2 = props.modelValue.account) !== null && _props$modelValue$acc2 !== void 0 ? _props$modelValue$acc2 : {});
            updateRefValue(selectedDateRange, startDate.value || endDate.value ? {
              lowerValue: startDate.value,
              upperValue: endDate.value
            } : undefined);
          });
          watch([attributeValues, selectedDateRange, ...propRefs], () => {
            var _selectedDateRange$va, _selectedDateRange$va2;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              totalAmount: totalAmount.value,
              group: {
                value: groupGuidOrEmptyString.value
              },
              pledgeFrequencyValue: pledgeFrequencyValue.value,
              startDate: (_selectedDateRange$va = selectedDateRange.value) === null || _selectedDateRange$va === void 0 ? void 0 : _selectedDateRange$va.lowerValue,
              endDate: (_selectedDateRange$va2 = selectedDateRange.value) === null || _selectedDateRange$va2 === void 0 ? void 0 : _selectedDateRange$va2.upperValue,
              personAlias: personAlias.value,
              account: account.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(PersonPicker), {
              modelValue: unref(personAlias),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(personAlias) ? personAlias.value = $event : null),
              label: "Person",
              rules: "required",
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(DateRangePicker), {
              label: "Date Range",
              modelValue: selectedDateRange.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedDateRange.value = $event),
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [selectGroupTypeGuidOrEmptyString.value ? (openBlock(), createBlock(unref(DropDownList), {
              key: 0,
              label: groupType.value,
              modelValue: unref(groupGuidOrEmptyString),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(groupGuidOrEmptyString) ? groupGuidOrEmptyString.value = $event : null),
              items: groups.value,
              showBlankItem: true,
              enhanceForLongLists: false,
              grouped: false,
              multiple: false,
              disabled: !__props.isEditable
            }, null, 8, ["label", "modelValue", "items", "disabled"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(AccountPicker), {
              label: "Account",
              modelValue: unref(account),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(account) ? account.value = $event : null),
              rules: unref(rules),
              enhanceForLongLists: true,
              multiple: false,
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "rules", "disabled"])])]), createVNode(unref(CurrencyBox), {
              label: "Total Amount",
              modelValue: unref(totalAmount),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(totalAmount) ? totalAmount.value = $event : null),
              help: "The total amount that you are pledging. If you intend to give $100 monthly for one year, enter $1,200.",
              rules: "required",
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_8, [createVNode(unref(DefinedValuePicker), {
              label: "Payment Schedule",
              help: "How often the person is expected to give some portion of the total amount.",
              modelValue: unref(pledgeFrequencyValue),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(pledgeFrequencyValue) ? pledgeFrequencyValue.value = $event : null),
              definedTypeGuid: unref(DefinedType).FinancialFrequency,
              showBlankItem: true,
              multiple: false,
              enhanceForLongLists: true,
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "definedTypeGuid", "disabled"])])]), createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])])])])]);
          };
        }
      });

      script$2.__file = "src/Finance/FinancialPledgeDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
        name: 'viewPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue3, _props$modelValue3$pe, _props$modelValue4, _props$modelValue4$ac;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue3 = props.modelValue) !== null && _props$modelValue3 !== void 0 && (_props$modelValue3$pe = _props$modelValue3.personAlias) !== null && _props$modelValue3$pe !== void 0 && _props$modelValue3$pe.text) {
              valueBuilder.addTextValue("Person", props.modelValue.personAlias.text);
            }
            if ((_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && (_props$modelValue4$ac = _props$modelValue4.account) !== null && _props$modelValue4$ac !== void 0 && _props$modelValue4$ac.text) {
              valueBuilder.addTextValue("Account", props.modelValue.account.text);
            }
            var amount = toCurrencyOrNull(props.modelValue.totalAmount);
            if (amount) {
              valueBuilder.addTextValue("Amount", amount);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$ple;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.startDate && props.modelValue.endDate) {
              var _RockDateTime$parseIS, _props$modelValue$sta, _RockDateTime$parseIS2, _props$modelValue$end;
              valueBuilder.addTextValue("Date Range", "".concat((_RockDateTime$parseIS = RockDateTime.parseISO((_props$modelValue$sta = props.modelValue.startDate) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "")) === null || _RockDateTime$parseIS === void 0 ? void 0 : _RockDateTime$parseIS.toASPString("d"), " to ").concat((_RockDateTime$parseIS2 = RockDateTime.parseISO((_props$modelValue$end = props.modelValue.endDate) !== null && _props$modelValue$end !== void 0 ? _props$modelValue$end : "")) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("d")));
            } else if (props.modelValue.startDate) {
              var _RockDateTime$parseIS3, _props$modelValue$sta2;
              valueBuilder.addTextValue("Start Date", "".concat((_RockDateTime$parseIS3 = RockDateTime.parseISO((_props$modelValue$sta2 = props.modelValue.startDate) !== null && _props$modelValue$sta2 !== void 0 ? _props$modelValue$sta2 : "")) === null || _RockDateTime$parseIS3 === void 0 ? void 0 : _RockDateTime$parseIS3.toASPString("d")));
            } else if (props.modelValue.endDate) {
              var _RockDateTime$parseIS4, _props$modelValue$end2;
              valueBuilder.addTextValue("End Date", "".concat((_RockDateTime$parseIS4 = RockDateTime.parseISO((_props$modelValue$end2 = props.modelValue.endDate) !== null && _props$modelValue$end2 !== void 0 ? _props$modelValue$end2 : "")) === null || _RockDateTime$parseIS4 === void 0 ? void 0 : _RockDateTime$parseIS4.toASPString("d")));
            }
            if ((_props$modelValue$ple = props.modelValue.pledgeFrequencyValue) !== null && _props$modelValue$ple !== void 0 && _props$modelValue$ple.text) {
              valueBuilder.addTextValue("Payment Schedule", props.modelValue.pledgeFrequencyValue.text);
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Finance/FinancialPledgeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'financialPledgeDetail',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var financialPledgeViewBag = ref(config.entity);
          var financialPledgeEditBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var entityTypeGuid = EntityType.FinancialPledge;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "account", "endDate", "group", "personAlias", "pledgeFrequencyValue", "startDate", "totalAmount"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(financialPledgeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _config$entity2;
            return (_config$entity2 = config.entity) !== null && _config$entity2 !== void 0 && _config$entity2.idKey ? "Edit Financial Pledge" : "Add Financial Pledge";
          });
          var entityKey = computed(() => {
            var _financialPledgeViewB, _financialPledgeViewB2;
            return (_financialPledgeViewB = (_financialPledgeViewB2 = financialPledgeViewBag.value) === null || _financialPledgeViewB2 === void 0 ? void 0 : _financialPledgeViewB2.idKey) !== null && _financialPledgeViewB !== void 0 ? _financialPledgeViewB : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var isAuditHidden = computed(() => {
            return panelMode.value === DetailPanelMode.Add;
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _financialPledgeEditB;
              if (!((_financialPledgeEditB = financialPledgeEditBag.value) !== null && _financialPledgeEditB !== void 0 && _financialPledgeEditB.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  return config.navigationUrls[NavigationUrlKey.ParentPage];
                }
                return false;
              }
              return true;
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _financialPledgeViewB3;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_financialPledgeViewB3 = financialPledgeViewBag.value) === null || _financialPledgeViewB3 === void 0 ? void 0 : _financialPledgeViewB3.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete financial pledge.";
                return false;
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _financialPledgeViewB4;
              var result = yield invokeBlockAction("Edit", {
                key: (_financialPledgeViewB4 = financialPledgeViewBag.value) === null || _financialPledgeViewB4 === void 0 ? void 0 : _financialPledgeViewB4.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                financialPledgeEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return _onEdit.apply(this, arguments);
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
              var _result$errorMessage2;
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
                  financialPledgeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save financial pledge.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified financial pledge could not be viewed.";
          } else if (!config.entity.idKey) {
            financialPledgeEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              innerHTML: errorMessage.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              title: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "FinancialPledge",
              isAuditHidden: unref(isAuditHidden),
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              isFullScreenVisible: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: financialPledgeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: financialPledgeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => financialPledgeEditBag.value = $event),
                options: unref(options),
                isEditable: unref(isEditable),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options", "isEditable"])]),
              _: 1
            }, 8, ["mode", "name", "title", "labels", "entityKey", "entityTypeGuid", "isAuditHidden", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Finance/financialPledgeDetail.obs";

    })
  };
}));
//# sourceMappingURL=financialPledgeDetail.obs.js.map
