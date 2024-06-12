System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/toggle.obs', '@Obsidian/Utility/tooltip', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, createVNode, unref, isRef, createTextVNode, toDisplayString, createCommentVNode, Fragment, createBlock, withCtx, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CategoryPicker, DatePicker, EmailBox, PersonPicker, CheckBox, CheckBoxList, CampusPicker, Toggle, tooltip, TextBox, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, toGuidOrNull, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
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
      CategoryPicker = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      Toggle = module["default"];
    }, function (module) {
      tooltip = module.tooltip;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
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
        class: "col-md-3"
      };
      var _hoisted_4$1 = {
        key: 0
      };
      var _hoisted_5$1 = createElementVNode("i", {
        class: "fa fa-flag"
      }, null, -1);
      var _hoisted_6$1 = {
        class: "col-md-3"
      };
      var _hoisted_7$1 = {
        class: "row"
      };
      var _hoisted_8$1 = {
        class: "col-md-12"
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$isA, _props$modelValue$req, _props$modelValue$isA2, _props$modelValue$fir, _props$modelValue$las, _props$modelValue$ema, _props$modelValue$exp, _props$modelValue, _props$modelValue$tex, _props$modelValue$ans;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : true, "IsActive");
          var requestedByPersonAlias = propertyRef((_props$modelValue$req = props.modelValue.requestedByPersonAlias) !== null && _props$modelValue$req !== void 0 ? _props$modelValue$req : undefined, "RequestedByPersonAliasId");
          var isApproved = propertyRef((_props$modelValue$isA2 = props.modelValue.isApproved) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false, "IsApproved");
          var firstName = propertyRef((_props$modelValue$fir = props.modelValue.firstName) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : "", "FirstName");
          var lastName = propertyRef((_props$modelValue$las = props.modelValue.lastName) !== null && _props$modelValue$las !== void 0 ? _props$modelValue$las : "", "LastName");
          var email = propertyRef((_props$modelValue$ema = props.modelValue.email) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "", "Email");
          var expirationDate = propertyRef((_props$modelValue$exp = props.modelValue.expirationDate) !== null && _props$modelValue$exp !== void 0 ? _props$modelValue$exp : "", "ExpirationDate");
          var campus = propertyRef((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.campus, "CampusId");
          var category = propertyRef(props.modelValue.category, "Category");
          var request = propertyRef((_props$modelValue$tex = props.modelValue.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "", "Text");
          var answer = propertyRef((_props$modelValue$ans = props.modelValue.answer) !== null && _props$modelValue$ans !== void 0 ? _props$modelValue$ans : "", "Answer");
          var isPublic = propertyRef(props.modelValue.isPublic, "IsPublic");
          var isUrgent = propertyRef(props.modelValue.isUrgent, "IsUrgent");
          var allowComments = propertyRef(props.modelValue.allowComments, "AllowComments");
          var optionsList = [{
            text: "Public",
            value: "isPublic"
          }, {
            text: "Urgent",
            value: "isUrgent"
          }, {
            text: "Allow Comments",
            value: "allowComments"
          }];
          var prayerRequestEntityTypeGuid = EntityType.PrayerRequest;
          var propRefs = [isActive, requestedByPersonAlias, isApproved, firstName, lastName, email, expirationDate, campus, category, request, answer, isPublic, isUrgent, allowComments];
          var invokeBlockAction = useInvokeBlockAction();
          var optionsListValue = computed({
            get() {
              var values = [];
              if (isPublic.value) {
                values.push("isPublic");
              }
              if (isUrgent.value) {
                values.push("isUrgent");
              }
              if (allowComments.value) {
                values.push("allowComments");
              }
              return values;
            },
            set(values) {
              isPublic.value = values.includes("isPublic");
              isUrgent.value = values.includes("isUrgent");
              allowComments.value = values.includes("allowComments");
            }
          });
          var isLastNameRequired = computed(() => props.options.isLastNameRequired ? "required" : "");
          var isCampusRequired = computed(() => props.options.isCampusRequired ? "required" : "");
          function updatePersonName(_x) {
            return _updatePersonName.apply(this, arguments);
          }
          function _updatePersonName() {
            _updatePersonName = _asyncToGenerator(function* (personPickerSelection) {
              var _toGuidOrNull, _result$data$nickName, _result$data, _result$data$lastName, _result$data2, _result$data$email, _result$data3;
              var request = {
                personAliasGuid: (_toGuidOrNull = toGuidOrNull(personPickerSelection === null || personPickerSelection === void 0 ? void 0 : personPickerSelection.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid
              };
              var result = yield invokeBlockAction("GetPersonName", request);
              firstName.value = (_result$data$nickName = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.nickName) !== null && _result$data$nickName !== void 0 ? _result$data$nickName : "";
              lastName.value = (_result$data$lastName = result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.lastName) !== null && _result$data$lastName !== void 0 ? _result$data$lastName : "";
              email.value = (_result$data$email = result === null || result === void 0 ? void 0 : (_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.email) !== null && _result$data$email !== void 0 ? _result$data$email : "";
            });
            return _updatePersonName.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$isA3, _props$modelValue$req2, _props$modelValue$isA4, _props$modelValue$fir2, _props$modelValue$las2, _props$modelValue$ema2, _props$modelValue$exp2, _props$modelValue2, _props$modelValue3, _props$modelValue$tex2, _props$modelValue$ans2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(isActive, (_props$modelValue$isA3 = props.modelValue.isActive) !== null && _props$modelValue$isA3 !== void 0 ? _props$modelValue$isA3 : false);
            updateRefValue(requestedByPersonAlias, (_props$modelValue$req2 = props.modelValue.requestedByPersonAlias) !== null && _props$modelValue$req2 !== void 0 ? _props$modelValue$req2 : undefined);
            updateRefValue(isApproved, (_props$modelValue$isA4 = props.modelValue.isApproved) !== null && _props$modelValue$isA4 !== void 0 ? _props$modelValue$isA4 : false);
            updateRefValue(firstName, (_props$modelValue$fir2 = props.modelValue.firstName) !== null && _props$modelValue$fir2 !== void 0 ? _props$modelValue$fir2 : "");
            updateRefValue(lastName, (_props$modelValue$las2 = props.modelValue.lastName) !== null && _props$modelValue$las2 !== void 0 ? _props$modelValue$las2 : "");
            updateRefValue(email, (_props$modelValue$ema2 = props.modelValue.email) !== null && _props$modelValue$ema2 !== void 0 ? _props$modelValue$ema2 : "");
            updateRefValue(expirationDate, (_props$modelValue$exp2 = props.modelValue.expirationDate) !== null && _props$modelValue$exp2 !== void 0 ? _props$modelValue$exp2 : "");
            updateRefValue(campus, (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.campus);
            updateRefValue(category, (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.category);
            updateRefValue(request, (_props$modelValue$tex2 = props.modelValue.text) !== null && _props$modelValue$tex2 !== void 0 ? _props$modelValue$tex2 : "");
            updateRefValue(answer, (_props$modelValue$ans2 = props.modelValue.answer) !== null && _props$modelValue$ans2 !== void 0 ? _props$modelValue$ans2 : "");
            updateRefValue(isPublic, props.modelValue.isPublic);
            updateRefValue(isUrgent, props.modelValue.isUrgent);
            updateRefValue(allowComments, props.modelValue.allowComments);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              isActive: isActive.value,
              requestedByPersonAlias: requestedByPersonAlias.value,
              isApproved: isApproved.value,
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              expirationDate: expirationDate.value,
              category: category.value,
              text: request.value,
              answer: answer.value,
              isPublic: isPublic.value,
              isUrgent: isUrgent.value,
              allowComments: allowComments.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          var flagCountRef = ref(null);
          onMounted(() => {
            if (flagCountRef !== null && flagCountRef !== void 0 && flagCountRef.value) {
              tooltip(flagCountRef.value);
            }
          });
          return (_ctx, _cache) => {
            var _props$modelValue4, _props$modelValue5;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(PersonPicker), {
              modelValue: unref(requestedByPersonAlias),
              "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => isRef(requestedByPersonAlias) ? requestedByPersonAlias.value = $event : null), _cache[1] || (_cache[1] = $event => updatePersonName($event))],
              label: "Requested By"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(firstName),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(firstName) ? firstName.value = $event : null),
              label: "First Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(lastName),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(lastName) ? lastName.value = $event : null),
              label: "Last Name",
              rules: unref(isLastNameRequired)
            }, null, 8, ["modelValue", "rules"]), createVNode(unref(EmailBox), {
              modelValue: unref(email),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(email) ? email.value = $event : null),
              label: "Email"
            }, null, 8, ["modelValue"]), createVNode(unref(DatePicker), {
              modelValue: unref(expirationDate),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(expirationDate) ? expirationDate.value = $event : null),
              label: "Expiration Date"
            }, null, 8, ["modelValue"]), createVNode(unref(CampusPicker), {
              label: "Campus",
              modelValue: unref(campus),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(campus) ? campus.value = $event : null),
              rules: unref(isCampusRequired)
            }, null, 8, ["modelValue", "rules"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"]), (_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && _props$modelValue4.flagCount ? (openBlock(), createElementBlock("div", _hoisted_4$1, [createElementVNode("span", {
              ref_key: "flagCountRef",
              ref: flagCountRef,
              class: "label label-warning",
              tabindex: "-1",
              "data-toggle": "tooltip",
              "data-placement": "auto",
              "data-container": "body",
              "data-html": "true",
              "data-original-title": "re-approve the request to clear the flags"
            }, [_hoisted_5$1, createTextVNode(" flagged " + toDisplayString((_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.flagCount) + " times ", 1)], 512)])) : createCommentVNode("v-if", true), createVNode(unref(CheckBoxList), {
              label: "Options",
              modelValue: unref(optionsListValue),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(optionsListValue) ? optionsListValue.value = $event : null),
              items: optionsList
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6$1, [createVNode(unref(Toggle), {
              modelValue: unref(isApproved),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(isApproved) ? isApproved.value = $event : null),
              trueText: "Approved",
              falseText: "Pending",
              btnSize: "xs",
              onButtonActiveCssClass: "btn-success",
              offButtonActiveCssClass: "btn-warning",
              label: "Status"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_7$1, [createElementVNode("div", _hoisted_8$1, [createVNode(unref(CategoryPicker), {
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(category) ? category.value = $event : null),
              label: "Category",
              entityTypeGuid: unref(prayerRequestEntityTypeGuid),
              rules: "required",
              autoExpand: ""
            }, null, 8, ["modelValue", "entityTypeGuid"]), createVNode(unref(TextBox), {
              modelValue: unref(request),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(request) ? request.value = $event : null),
              label: "Request",
              textMode: "multiline",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(answer),
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(answer) ? answer.value = $event : null),
              textMode: "multiline",
              label: "Answer"
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2,
              showEmptyValues: false
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Prayer/PrayerRequestDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-12"
      };
      var _hoisted_3 = {
        class: "pull-right"
      };
      var _hoisted_4 = createElementVNode("i", {
        class: "fa fa-flag"
      }, null, -1);
      var _hoisted_5 = {
        key: 1,
        class: "label label-danger"
      };
      var _hoisted_6 = createElementVNode("i", {
        class: "fa fa-exclamation-circle"
      }, null, -1);
      var _hoisted_7 = createTextVNode(" Urgent");
      var _hoisted_8 = [_hoisted_6, _hoisted_7];
      var _hoisted_9 = ["data-original-title"];
      var _hoisted_10 = {
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
            var _props$modelValue3, _props$modelValue4, _props$modelValue$ful, _props$modelValue6, _props$modelValue$ema, _props$modelValue7, _props$modelValue8, _props$modelValue8$ca, _props$modelValue$tex, _props$modelValue10, _props$modelValue11;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue3 = props.modelValue) !== null && _props$modelValue3 !== void 0 && _props$modelValue3.group) {
              var _props$modelValue$gro;
              valueBuilder.addTextValue("Group", (_props$modelValue$gro = props.modelValue.group.text) !== null && _props$modelValue$gro !== void 0 ? _props$modelValue$gro : "");
            }
            if ((_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && _props$modelValue4.requestedByPersonAlias) {
              var _props$modelValue$req, _props$modelValue5, _props$modelValue5$re;
              valueBuilder.addTextValue("Requested By", (_props$modelValue$req = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : (_props$modelValue5$re = _props$modelValue5.requestedByPersonAlias) === null || _props$modelValue5$re === void 0 ? void 0 : _props$modelValue5$re.text) !== null && _props$modelValue$req !== void 0 ? _props$modelValue$req : "");
            }
            valueBuilder.addTextValue("Name", "".concat((_props$modelValue$ful = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.fullName) !== null && _props$modelValue$ful !== void 0 ? _props$modelValue$ful : ""));
            var email = (_props$modelValue$ema = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.email) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "";
            if (email) {
              valueBuilder.addHtmlValue("Email", "<a hRockLabel ref=\"mailto:".concat(email, "\">").concat(email, "</a>"));
            }
            if ((_props$modelValue8 = props.modelValue) !== null && _props$modelValue8 !== void 0 && (_props$modelValue8$ca = _props$modelValue8.campus) !== null && _props$modelValue8$ca !== void 0 && _props$modelValue8$ca.text) {
              var _props$modelValue9;
              valueBuilder.addTextValue("Campus", (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : _props$modelValue9.campus.text);
            }
            valueBuilder.addHtmlValue("Request", (_props$modelValue$tex = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : _props$modelValue10.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "");
            if ((_props$modelValue11 = props.modelValue) !== null && _props$modelValue11 !== void 0 && _props$modelValue11.answer) {
              var _props$modelValue12;
              valueBuilder.addHtmlValue("Answer", (_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.answer);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var flagCountRef = ref(null);
          var prayerCountRef = ref(null);
          onMounted(() => {
            if (flagCountRef !== null && flagCountRef !== void 0 && flagCountRef.value) {
              tooltip(flagCountRef.value);
            }
            if (prayerCountRef !== null && prayerCountRef !== void 0 && prayerCountRef.value) {
              tooltip(prayerCountRef.value);
            }
          });
          return (_ctx, _cache) => {
            var _props$modelValue13, _props$modelValue14, _props$modelValue15, _props$modelValue16, _props$modelValue17, _props$modelValue18;
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [(_props$modelValue13 = props.modelValue) !== null && _props$modelValue13 !== void 0 && _props$modelValue13.flagCount ? (openBlock(), createElementBlock("span", {
              key: 0,
              ref_key: "flagCountRef",
              ref: flagCountRef,
              class: "label label-warning",
              tabindex: "-1",
              "data-toggle": "tooltip",
              "data-placement": "auto",
              "data-container": "body",
              "data-html": "true",
              "data-original-title": "To clear the flags you'll have to re-approve this request."
            }, [_hoisted_4, createTextVNode(" flagged " + toDisplayString((_props$modelValue14 = props.modelValue) === null || _props$modelValue14 === void 0 ? void 0 : _props$modelValue14.flagCount) + " times ", 1)], 512)) : createCommentVNode("v-if", true), (_props$modelValue15 = props.modelValue) !== null && _props$modelValue15 !== void 0 && _props$modelValue15.isUrgent ? (openBlock(), createElementBlock("span", _hoisted_5, _hoisted_8)) : createCommentVNode("v-if", true), (_props$modelValue16 = props.modelValue) !== null && _props$modelValue16 !== void 0 && _props$modelValue16.prayerCount ? (openBlock(), createElementBlock("span", {
              key: 2,
              ref_key: "prayerCountRef",
              ref: prayerCountRef,
              class: "badge",
              title: "",
              "data-toggle": "tooltip",
              "data-original-title": ((_props$modelValue17 = props.modelValue) === null || _props$modelValue17 === void 0 ? void 0 : _props$modelValue17.prayerCount) + 'prayers offered by the team for this request.'
            }, toDisplayString((_props$modelValue18 = props.modelValue) === null || _props$modelValue18 === void 0 ? void 0 : _props$modelValue18.prayerCount) + " prayers ", 9, _hoisted_9)) : createCommentVNode("v-if", true)]), createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2,
              showEmptyValues: false
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Prayer/PrayerRequestDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'prayerRequestDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var prayerRequestViewBag = ref(config.entity);
          var prayerRequestEditBag = ref({});
          var entityTypeGuid = EntityType.PrayerRequest;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "allowComments", "answer", "approvedByPersonAlias", "approvedByPersonAliasId", "approvedOnDateTime", "campus", "campusId", "category", "categoryId", "createdByPersonAlias", "createdByPersonAliasId", "createdDateTime", "email", "enteredDateTime", "expirationDate", "firstName", "flagCount", "foreignGuid", "foreignId", "foreignKey", "group", "groupId", "isActive", "isApproved", "isPublic", "isUrgent", "languageValue", "languageValueId", "lastName", "modifiedByPersonAlias", "modifiedByPersonAliasId", "modifiedDateTime", "prayerCount", "requestedByPersonAlias", "requestedByPersonAliasId", "text"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(prayerRequestEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _prayerRequestViewBag, _prayerRequestViewBag2;
            return (_prayerRequestViewBag = (_prayerRequestViewBag2 = prayerRequestViewBag.value) === null || _prayerRequestViewBag2 === void 0 ? void 0 : _prayerRequestViewBag2.text) !== null && _prayerRequestViewBag !== void 0 ? _prayerRequestViewBag : "";
          });
          var entityKey = computed(() => {
            var _prayerRequestViewBag3, _prayerRequestViewBag4;
            return (_prayerRequestViewBag3 = (_prayerRequestViewBag4 = prayerRequestViewBag.value) === null || _prayerRequestViewBag4 === void 0 ? void 0 : _prayerRequestViewBag4.idKey) !== null && _prayerRequestViewBag3 !== void 0 ? _prayerRequestViewBag3 : "";
          });
          var blockLabels = computed(() => {
            var _prayerRequestViewBag5, _prayerRequestViewBag6, _prayerRequestViewBag7, _prayerRequestViewBag10, _prayerRequestViewBag11;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_prayerRequestViewBag5 = prayerRequestViewBag.value) === null || _prayerRequestViewBag5 === void 0 ? void 0 : _prayerRequestViewBag5.isActive) === true) {
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Active",
                type: "success"
              });
            } else {
              labels.push({
                iconCssClass: "far fa-lightbulb",
                title: "Inactive",
                type: "danger"
              });
            }
            if ((_prayerRequestViewBag6 = prayerRequestViewBag.value) !== null && _prayerRequestViewBag6 !== void 0 && (_prayerRequestViewBag7 = _prayerRequestViewBag6.category) !== null && _prayerRequestViewBag7 !== void 0 && _prayerRequestViewBag7.text) {
              var _prayerRequestViewBag8, _prayerRequestViewBag9;
              labels.push({
                title: "".concat((_prayerRequestViewBag8 = prayerRequestViewBag.value) === null || _prayerRequestViewBag8 === void 0 ? void 0 : (_prayerRequestViewBag9 = _prayerRequestViewBag8.category) === null || _prayerRequestViewBag9 === void 0 ? void 0 : _prayerRequestViewBag9.text),
                type: "default"
              });
            }
            labels.push({
              title: "".concat((_prayerRequestViewBag10 = prayerRequestViewBag.value) !== null && _prayerRequestViewBag10 !== void 0 && _prayerRequestViewBag10.isApproved ? "Approved" : "Pending"),
              type: "".concat((_prayerRequestViewBag11 = prayerRequestViewBag.value) !== null && _prayerRequestViewBag11 !== void 0 && _prayerRequestViewBag11.isApproved ? "success" : "warning")
            });
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {
              isCampusRequired: false,
              isLastNameRequired: false
            };
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _config$navigationUrl;
              if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                return config.navigationUrls[NavigationUrlKey.ParentPage];
              }
              return false;
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _prayerRequestViewBag12;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_prayerRequestViewBag12 = prayerRequestViewBag.value) === null || _prayerRequestViewBag12 === void 0 ? void 0 : _prayerRequestViewBag12.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete prayer request.";
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
              var _prayerRequestViewBag13;
              var result = yield invokeBlockAction("Edit", {
                key: (_prayerRequestViewBag13 = prayerRequestViewBag.value) === null || _prayerRequestViewBag13 === void 0 ? void 0 : _prayerRequestViewBag13.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                prayerRequestEditBag.value = result.data.entity;
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
                entity: prayerRequestEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data && typeof result.data === "string") {
                return result.data;
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save prayer request.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified prayer request could not be viewed.";
          } else if (!config.entity.idKey) {
            prayerRequestEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
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
              entityTypeName: "PrayerRequest",
              isAuditHidden: true,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: prayerRequestViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: prayerRequestEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => prayerRequestEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Prayer/prayerRequestDetail.obs";

    })
  };
}));
//# sourceMappingURL=prayerRequestDetail.obs.js.map
