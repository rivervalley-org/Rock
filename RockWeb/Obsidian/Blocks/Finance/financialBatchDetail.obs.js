System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/currencyBox.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util', '@Obsidian/Utility/url', '@Obsidian/Utility/page'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, unref, createBlock, isRef, createVNode, withCtx, createTextVNode, toDisplayString, createCommentVNode, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, TextBox, NumberBox, CurrencyBox, CampusPicker, DropDownList, DateTimePicker, DefinedValuePicker, toNumber, toNumberOrNull, toCurrencyOrNull, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, onConfigurationValuesChanged, useReloadBlock, propertyRef, updateRefValue, toGuidOrNull, emptyGuid, ValueDetailList, RockDateTime, ValueDetailListItemBuilder, debounce, makeUrlRedirectSafe, addQuickReturn;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      unref = module.unref;
      createBlock = module.createBlock;
      isRef = module.isRef;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
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
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
      toCurrencyOrNull = module.toCurrencyOrNull;
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      addQuickReturn = module.addQuickReturn;
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
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
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
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam, _props$modelValue$sta, _props$modelValue$sta2, _props$modelValue$bat, _props$modelValue$bat2, _props$modelValue$cam, _props$modelValue$con, _props$modelValue$con2, _props$modelValue$acc, _props$modelValue$not;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var status = propertyRef((_props$modelValue$sta = (_props$modelValue$sta2 = props.modelValue.status) === null || _props$modelValue$sta2 === void 0 ? void 0 : _props$modelValue$sta2.toString()) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "1", "Status");
          var batchStartDateTime = propertyRef((_props$modelValue$bat = props.modelValue.batchStartDateTime) !== null && _props$modelValue$bat !== void 0 ? _props$modelValue$bat : "", "BatchStartDateTime");
          var batchEndDateTime = propertyRef((_props$modelValue$bat2 = props.modelValue.batchEndDateTime) !== null && _props$modelValue$bat2 !== void 0 ? _props$modelValue$bat2 : "", "BatchEndDateTime");
          var campus = propertyRef((_props$modelValue$cam = props.modelValue.campus) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : {}, "CampusId");
          var controlAmount = propertyRef((_props$modelValue$con = props.modelValue.controlAmount) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "", "ControlAmount");
          var controlItemCount = propertyRef((_props$modelValue$con2 = props.modelValue.controlItemCount) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : null, "ControlItemCount");
          var accountingSystemCode = propertyRef((_props$modelValue$acc = props.modelValue.accountingSystemCode) !== null && _props$modelValue$acc !== void 0 ? _props$modelValue$acc : "", "AccountingCode");
          var note = propertyRef((_props$modelValue$not = props.modelValue.note) !== null && _props$modelValue$not !== void 0 ? _props$modelValue$not : "", "Note");
          var definedValueName = ref(null);
          var batchStatusOptions = [{
            text: "Pending",
            value: "0"
          }, {
            text: "Open",
            value: "1"
          }, {
            text: "Closed",
            value: "2"
          }];
          var propRefs = [name, status, batchStartDateTime, batchEndDateTime, controlAmount, note, controlItemCount, accountingSystemCode, campus];
          var isStatusClosed = computed(() => props.modelValue.status == 2);
          var shouldGetNameFromDefinedType = computed(() => props.modelValue.id == 0 && !!toGuidOrNull(props.options.batchNameDefinedTypeGuid));
          watch([() => props.modelValue, () => definedValueName], () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$sta3, _props$modelValue$sta4, _props$modelValue$cam2, _props$modelValue$bat3, _props$modelValue$bat4, _props$modelValue$con3, _props$modelValue$con4, _props$modelValue$acc2, _props$modelValue$not2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            if (definedValueName.value != null) {
              var _definedValueName$val;
              updateRefValue(name, (_definedValueName$val = definedValueName.value.text) !== null && _definedValueName$val !== void 0 ? _definedValueName$val : "");
            } else {
              var _props$modelValue$nam2;
              updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            }
            updateRefValue(status, (_props$modelValue$sta3 = (_props$modelValue$sta4 = props.modelValue.status) === null || _props$modelValue$sta4 === void 0 ? void 0 : _props$modelValue$sta4.toString()) !== null && _props$modelValue$sta3 !== void 0 ? _props$modelValue$sta3 : "1");
            updateRefValue(campus, (_props$modelValue$cam2 = props.modelValue.campus) !== null && _props$modelValue$cam2 !== void 0 ? _props$modelValue$cam2 : {});
            updateRefValue(batchEndDateTime, (_props$modelValue$bat3 = props.modelValue.batchEndDateTime) !== null && _props$modelValue$bat3 !== void 0 ? _props$modelValue$bat3 : "");
            updateRefValue(batchStartDateTime, (_props$modelValue$bat4 = props.modelValue.batchStartDateTime) !== null && _props$modelValue$bat4 !== void 0 ? _props$modelValue$bat4 : "");
            updateRefValue(controlAmount, (_props$modelValue$con3 = props.modelValue.controlAmount) !== null && _props$modelValue$con3 !== void 0 ? _props$modelValue$con3 : "");
            updateRefValue(controlItemCount, (_props$modelValue$con4 = props.modelValue.controlItemCount) !== null && _props$modelValue$con4 !== void 0 ? _props$modelValue$con4 : null);
            updateRefValue(accountingSystemCode, (_props$modelValue$acc2 = props.modelValue.accountingSystemCode) !== null && _props$modelValue$acc2 !== void 0 ? _props$modelValue$acc2 : "");
            updateRefValue(note, (_props$modelValue$not2 = props.modelValue.note) !== null && _props$modelValue$not2 !== void 0 ? _props$modelValue$not2 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value,
              status: toNumber(status.value),
              batchStartDateTime: batchStartDateTime.value,
              batchEndDateTime: batchEndDateTime.value,
              campus: campus.value,
              controlAmount: controlAmount.value,
              accountingSystemCode: accountingSystemCode.value,
              controlItemCount: toNumberOrNull(controlItemCount.value),
              note: note.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _unref2;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [unref(shouldGetNameFromDefinedType) ? (openBlock(), createBlock(unref(DefinedValuePicker), {
              key: 0,
              modelValue: definedValueName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => definedValueName.value = $event),
              label: "Name",
              definedTypeGuid: (_unref2 = unref(toGuidOrNull)(props.options.batchNameDefinedTypeGuid)) !== null && _unref2 !== void 0 ? _unref2 : unref(emptyGuid)
            }, null, 8, ["modelValue", "definedTypeGuid"])) : (openBlock(), createBlock(unref(TextBox), {
              key: 1,
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"])), createVNode(unref(DropDownList), {
              modelValue: unref(status),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(status) ? status.value = $event : null),
              label: "Status",
              items: batchStatusOptions,
              disabled: __props.options.isStatusChangeDisabled,
              blankValue: "1",
              rules: "required"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(DateTimePicker), {
              modelValue: unref(batchStartDateTime),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(batchStartDateTime) ? batchStartDateTime.value = $event : null),
              label: "Batch Start",
              rules: "required",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(DateTimePicker), {
              modelValue: unref(batchEndDateTime),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(batchEndDateTime) ? batchEndDateTime.value = $event : null),
              label: "Batch End",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CurrencyBox), {
              modelValue: unref(controlAmount),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(controlAmount) ? controlAmount.value = $event : null),
              label: "Control Amount",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(NumberBox), {
              modelValue: unref(controlItemCount),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(controlItemCount) ? controlItemCount.value = $event : null),
              label: "Control Item Count",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(CampusPicker), {
              label: "Campus",
              modelValue: unref(campus),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(campus) ? campus.value = $event : null),
              showBlankItem: "",
              disabled: unref(isStatusClosed),
              includeInactive: ""
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(accountingSystemCode),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(accountingSystemCode) ? accountingSystemCode.value = $event : null),
              label: "Accounting Code",
              help: "Optional id or code from an external accounting system.",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(note),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(note) ? note.value = $event : null),
              label: "Notes",
              textMode: "multiline",
              disabled: unref(isStatusClosed)
            }, null, 8, ["modelValue", "disabled"])])]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 1
            }, null, 8, ["modelValue", "attributes"])])])]);
          };
        }
      });

      script$2.__file = "src/Finance/FinancialBatchDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-12"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
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
          var currencyInfo = props.options.currencyInfo;
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue3, _props$modelValue4, _props$modelValue5, _props$modelValue6, _props$modelValue7;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue3 = props.modelValue) !== null && _props$modelValue3 !== void 0 && _props$modelValue3.batchStartDateTime && (_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && _props$modelValue4.batchEndDateTime) {
              var _RockDateTime$parseIS, _RockDateTime$parseIS2, _RockDateTime$parseIS3, _RockDateTime$parseIS4;
              valueBuilder.addTextValue("Date Range", "".concat((_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO(props.modelValue.batchStartDateTime)) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("g")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : "", " to\n            ").concat((_RockDateTime$parseIS3 = (_RockDateTime$parseIS4 = RockDateTime.parseISO(props.modelValue.batchEndDateTime)) === null || _RockDateTime$parseIS4 === void 0 ? void 0 : _RockDateTime$parseIS4.toASPString("g")) !== null && _RockDateTime$parseIS3 !== void 0 ? _RockDateTime$parseIS3 : ""));
            }
            var controlAmount = toNumber((_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.controlAmount);
            var transactionAmount = toNumber(props.options.transactionAmount);
            var transactionVariance = transactionAmount - controlAmount;
            if (transactionVariance == 0) {
              valueBuilder.addHtmlValue("Transaction Amount / Control / Variance", "".concat(toCurrencyOrNull(transactionAmount, currencyInfo), " / ").concat(toCurrencyOrNull(controlAmount, currencyInfo), " / ").concat(toCurrencyOrNull(transactionVariance, currencyInfo)));
            } else {
              valueBuilder.addHtmlValue("Transaction Amount / Control / Variance", "".concat(toCurrencyOrNull(transactionAmount, currencyInfo), " / ").concat(toCurrencyOrNull(controlAmount, currencyInfo), " / <span class='label label-danger'>").concat(toCurrencyOrNull(transactionVariance, currencyInfo), "</span>"));
            }
            var transactionItemCount = toNumber(props.options.transactionItemCount);
            var controlItemCount = toNumber(props.modelValue.controlItemCount);
            var itemVariance = transactionItemCount - controlItemCount;
            if (props.modelValue.controlItemCount) {
              if (itemVariance == 0) {
                valueBuilder.addHtmlValue("Transaction Item Count / Control / Variance", "".concat(transactionItemCount, " / ").concat(controlItemCount, " / ").concat(itemVariance));
              } else {
                valueBuilder.addHtmlValue("Transaction Item Count / Control / Variance", "\n                     ".concat(transactionItemCount, " / ").concat(controlItemCount, " / <span class='label label-danger'> ").concat(itemVariance, " </span>"));
              }
            }
            if ((_props$modelValue6 = props.modelValue) !== null && _props$modelValue6 !== void 0 && _props$modelValue6.accountingSystemCode) {
              valueBuilder.addTextValue("Accounting Code", props.modelValue.accountingSystemCode);
            }
            if ((_props$modelValue7 = props.modelValue) !== null && _props$modelValue7 !== void 0 && _props$modelValue7.note) {
              valueBuilder.addTextValue("Notes", props.modelValue.note);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$options$accoun, _props$options$curren, _props$options$accoun2, _props$options$accoun3;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            var accountsTotalTable = "<table class=\"grid-table table table-auto\">\n                <tbody>\n                    ".concat((_props$options$accoun = props.options.accounts) === null || _props$options$accoun === void 0 ? void 0 : _props$options$accoun.map(a => "<tr> <td align='left'>" + a.name + "</td> <td align='right'>" + toCurrencyOrNull(a.currency, currencyInfo) + "</td> </tr>").join(""), "\n                </tbody>\n            </table>");
            var currencyTotalTable = "<table class=\"grid-table table table-auto\">\n            <tbody>\n                ".concat((_props$options$curren = props.options.currencyTypes) === null || _props$options$curren === void 0 ? void 0 : _props$options$curren.map(a => "<tr> <td align='left'>" + a.name + "</td> <td align='right'>" + toCurrencyOrNull(a.currency, currencyInfo) + "</td> </tr>").join(""), "\n            </tbody>\n        </table>");
            valueBuilder.addHtmlValue("Account Totals", ((_props$options$accoun2 = props.options.accounts) === null || _props$options$accoun2 === void 0 ? void 0 : _props$options$accoun2.length) == 0 ? "No Accounts Found" : accountsTotalTable);
            valueBuilder.addHtmlValue("Currency Totals", ((_props$options$accoun3 = props.options.accounts) === null || _props$options$accoun3 === void 0 ? void 0 : _props$options$accoun3.length) == 0 ? "No CurrencyTypes Found" : currencyTotalTable);
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            var _props$modelValue8;
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [(_props$modelValue8 = __props.modelValue) !== null && _props$modelValue8 !== void 0 && _props$modelValue8.isAutomated ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              "alert-type": "info"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.automatedToolTip), 1)]),
              _: 1
            })) : __props.options.isStatusChangeDisabled ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              "alert-type": "info"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.options.editModeMessage), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Finance/FinancialBatchDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["MatchTransactions"] = "MatchTransactions";
        NavigationUrlKey["AuditLogs"] = "AuditLogs";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'financialBatchDetail',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var statusLabels = {
            0: {
              title: "Pending",
              type: "danger"
            },
            1: {
              title: "Open",
              type: "warning"
            },
            2: {
              title: "Closed",
              type: "default"
            }
          };
          var financialBatchViewBag = ref(config.entity);
          var financialBatchEditBag = ref({});
          var entityTypeGuid = EntityType.FinancialBatch;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "accountingSystemCode", "batchEndDateTime", "batchStartDateTime", "campus", "controlAmount", "controlItemCount", "name", "note", "status", "transactions"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(financialBatchEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _financialBatchViewBa, _financialBatchViewBa2;
            return (_financialBatchViewBa = (_financialBatchViewBa2 = financialBatchViewBag.value) === null || _financialBatchViewBa2 === void 0 ? void 0 : _financialBatchViewBa2.name) !== null && _financialBatchViewBa !== void 0 ? _financialBatchViewBa : "";
          });
          var entityKey = computed(() => {
            var _financialBatchViewBa3, _financialBatchViewBa4;
            return (_financialBatchViewBa3 = (_financialBatchViewBa4 = financialBatchViewBag.value) === null || _financialBatchViewBa4 === void 0 ? void 0 : _financialBatchViewBa4.idKey) !== null && _financialBatchViewBa3 !== void 0 ? _financialBatchViewBa3 : "";
          });
          var blockLabels = computed(() => {
            var _financialBatchViewBa5, _financialBatchViewBa6, _financialBatchViewBa7, _financialBatchViewBa8, _financialBatchViewBa9, _financialBatchViewBa10, _financialBatchViewBa13;
            var labels = [{
              title: "Batch #".concat((_financialBatchViewBa5 = financialBatchViewBag.value) === null || _financialBatchViewBa5 === void 0 ? void 0 : _financialBatchViewBa5.id),
              type: "info"
            }, {
              title: "".concat(statusLabels[(_financialBatchViewBa6 = (_financialBatchViewBa7 = financialBatchViewBag.value) === null || _financialBatchViewBa7 === void 0 ? void 0 : _financialBatchViewBa7.status) !== null && _financialBatchViewBa6 !== void 0 ? _financialBatchViewBa6 : 1].title),
              type: "".concat(statusLabels[(_financialBatchViewBa8 = (_financialBatchViewBa9 = financialBatchViewBag.value) === null || _financialBatchViewBa9 === void 0 ? void 0 : _financialBatchViewBa9.status) !== null && _financialBatchViewBa8 !== void 0 ? _financialBatchViewBa8 : 1].type)
            }];
            if ((_financialBatchViewBa10 = financialBatchViewBag.value) !== null && _financialBatchViewBa10 !== void 0 && _financialBatchViewBa10.campus) {
              var _financialBatchViewBa11, _financialBatchViewBa12;
              labels.push({
                title: "".concat((_financialBatchViewBa11 = (_financialBatchViewBa12 = financialBatchViewBag.value) === null || _financialBatchViewBa12 === void 0 ? void 0 : _financialBatchViewBa12.campus.text) !== null && _financialBatchViewBa11 !== void 0 ? _financialBatchViewBa11 : ""),
                type: "campus"
              });
            }
            if ((_financialBatchViewBa13 = financialBatchViewBag.value) !== null && _financialBatchViewBa13 !== void 0 && _financialBatchViewBa13.isAutomated) {
              labels.push({
                title: "Automated",
                type: "warning"
              });
            }
            return labels;
          });
          var isEditable = computed(() => {
            var _financialBatchViewBa14, _config$options;
            var isReopenDisabled = ((_financialBatchViewBa14 = financialBatchViewBag.value) === null || _financialBatchViewBa14 === void 0 ? void 0 : _financialBatchViewBa14.status) == 2 && !((_config$options = config.options) !== null && _config$options !== void 0 && _config$options.isReopenAuthorized);
            return config.isEditable === true && !isReopenDisabled;
          });
          var options = computed(() => {
            var _config$options2;
            return (_config$options2 = config.options) !== null && _config$options2 !== void 0 ? _config$options2 : {
              isReopenAuthorized: false,
              isStatusChangeDisabled: true,
              transactionAmount: 0,
              transactionItemCount: 0,
              batchNameDefinedTypeGuid: null
            };
          });
          var footerActions = computed(() => {
            if (panelMode.value != DetailPanelMode.View) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-money",
              title: "Match Transactions",
              type: "default",
              handler: () => {
                var _config$navigationUrl, _config$navigationUrl2;
                window.location.href = makeUrlRedirectSafe((_config$navigationUrl = (_config$navigationUrl2 = config.navigationUrls) === null || _config$navigationUrl2 === void 0 ? void 0 : _config$navigationUrl2[NavigationUrlKey.MatchTransactions]) !== null && _config$navigationUrl !== void 0 ? _config$navigationUrl : "");
              }
            }, {
              iconCssClass: "fa fa-file-text-o",
              title: "Audit Log",
              type: "default",
              handler: () => {
                var _config$navigationUrl3, _config$navigationUrl4;
                window.location.href = makeUrlRedirectSafe((_config$navigationUrl3 = (_config$navigationUrl4 = config.navigationUrls) === null || _config$navigationUrl4 === void 0 ? void 0 : _config$navigationUrl4[NavigationUrlKey.AuditLogs]) !== null && _config$navigationUrl3 !== void 0 ? _config$navigationUrl3 : "");
              }
            }];
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _financialBatchEditBa;
              if (!((_financialBatchEditBa = financialBatchEditBag.value) !== null && _financialBatchEditBa !== void 0 && _financialBatchEditBa.idKey)) {
                var _config$navigationUrl5;
                if ((_config$navigationUrl5 = config.navigationUrls) !== null && _config$navigationUrl5 !== void 0 && _config$navigationUrl5[NavigationUrlKey.ParentPage]) {
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
              var _financialBatchViewBa15;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_financialBatchViewBa15 = financialBatchViewBag.value) === null || _financialBatchViewBa15 === void 0 ? void 0 : _financialBatchViewBa15.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete financial batch.";
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
              var _financialBatchViewBa16;
              var result = yield invokeBlockAction("Edit", {
                key: (_financialBatchViewBa16 = financialBatchViewBag.value) === null || _financialBatchViewBa16 === void 0 ? void 0 : _financialBatchViewBa16.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                financialBatchEditBag.value = result.data.entity;
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
                entity: financialBatchEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  financialBatchViewBag.value = result.data;
                  return true;
                } else if ((result.statusCode === 201 || result.statusCode === 200) && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save financial batch.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified financial batch could not be viewed.";
          } else if (!config.entity.idKey) {
            financialBatchEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          if (panelMode.value === DetailPanelMode.View && (_config$entity = config.entity) !== null && _config$entity !== void 0 && _config$entity.name) {
            addQuickReturn(config.entity.name, "Batches", 50);
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
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "FinancialBatch",
              isAuditHidden: false,
              isBadgesVisible: true,
              footerSecondaryActions: unref(footerActions),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: financialBatchViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: financialBatchEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => financialBatchEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "footerSecondaryActions", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Finance/financialBatchDetail.obs";

    })
  };
}));
//# sourceMappingURL=financialBatchDetail.obs.js.map
