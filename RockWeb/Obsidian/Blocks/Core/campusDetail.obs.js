System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/keyValueList.obs', '@Obsidian/Controls/locationItemPicker.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/urlLinkBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/definedType', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/linq', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, createTextVNode, withCtx, Fragment, toDisplayString, NotificationBox, DetailBlock, DetailPanelMode, AttributeValuesContainer, DefinedValuePicker, DropDownList, KeyValueList, LocationPicker, PersonPicker, CheckBox, PhoneNumberBox, TextBox, UrlLinkBox, setPropertiesBoxValue, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, useEntityDetailBlock, propertyRef, updateRefValue, DefinedType, ValueDetailList, ValueDetailListItemBuilder, List, escapeHtml;
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
      createTextVNode = module.createTextVNode;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
    }, function (module) {
      LocationPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      UrlLinkBox = module["default"];
    }, function (module) {
      setPropertiesBoxValue = module.setPropertiesBoxValue;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useEntityDetailBlock = module.useEntityDetailBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      List = module.List;
    }, function (module) {
      escapeHtml = module.escapeHtml;
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
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
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
          var _props$modelValue$bag, _props$modelValue$bag2, _props$modelValue$bag3, _props$modelValue$bag4, _props$modelValue$bag5, _props$modelValue$bag6, _props$modelValue$bag7, _props$modelValue$bag8, _props$modelValue$bag9, _props$modelValue$bag10, _props$modelValue$bag11, _props$modelValue$bag12, _props$modelValue$bag13, _props$modelValue$bag14, _props$modelValue$bag15, _props$modelValue$bag16, _props$modelValue$bag17, _props$modelValue$bag18, _props$modelValue$bag19, _props$modelValue$bag20, _props$modelValue$bag21, _props$modelValue$bag22, _props$modelValue$bag23, _props$modelValue$bag24, _props$modelValue$bag25, _props$modelValue$bag26, _props$modelValue$bag27, _props$modelValue$bag28;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$bag = (_props$modelValue$bag2 = props.modelValue.bag) === null || _props$modelValue$bag2 === void 0 ? void 0 : _props$modelValue$bag2.attributes) !== null && _props$modelValue$bag !== void 0 ? _props$modelValue$bag : {});
          var attributeValues = ref((_props$modelValue$bag3 = (_props$modelValue$bag4 = props.modelValue.bag) === null || _props$modelValue$bag4 === void 0 ? void 0 : _props$modelValue$bag4.attributeValues) !== null && _props$modelValue$bag3 !== void 0 ? _props$modelValue$bag3 : {});
          var campusStatusValue = propertyRef((_props$modelValue$bag5 = (_props$modelValue$bag6 = props.modelValue.bag) === null || _props$modelValue$bag6 === void 0 ? void 0 : _props$modelValue$bag6.campusStatusValue) !== null && _props$modelValue$bag5 !== void 0 ? _props$modelValue$bag5 : null, "CampusStatusValueId");
          var campusTypeValue = propertyRef((_props$modelValue$bag7 = (_props$modelValue$bag8 = props.modelValue.bag) === null || _props$modelValue$bag8 === void 0 ? void 0 : _props$modelValue$bag8.campusTypeValue) !== null && _props$modelValue$bag7 !== void 0 ? _props$modelValue$bag7 : null, "CampusTypeValueId");
          var description = propertyRef((_props$modelValue$bag9 = (_props$modelValue$bag10 = props.modelValue.bag) === null || _props$modelValue$bag10 === void 0 ? void 0 : _props$modelValue$bag10.description) !== null && _props$modelValue$bag9 !== void 0 ? _props$modelValue$bag9 : "", "Description");
          var isActive = propertyRef((_props$modelValue$bag11 = (_props$modelValue$bag12 = props.modelValue.bag) === null || _props$modelValue$bag12 === void 0 ? void 0 : _props$modelValue$bag12.isActive) !== null && _props$modelValue$bag11 !== void 0 ? _props$modelValue$bag11 : false, "IsActive");
          var leaderPersonAlias = propertyRef((_props$modelValue$bag13 = (_props$modelValue$bag14 = props.modelValue.bag) === null || _props$modelValue$bag14 === void 0 ? void 0 : _props$modelValue$bag14.leaderPersonAlias) !== null && _props$modelValue$bag13 !== void 0 ? _props$modelValue$bag13 : undefined, "LeaderPersonAliasId");
          var location = propertyRef((_props$modelValue$bag15 = (_props$modelValue$bag16 = props.modelValue.bag) === null || _props$modelValue$bag16 === void 0 ? void 0 : _props$modelValue$bag16.location) !== null && _props$modelValue$bag15 !== void 0 ? _props$modelValue$bag15 : null, "LocationId");
          var name = propertyRef((_props$modelValue$bag17 = (_props$modelValue$bag18 = props.modelValue.bag) === null || _props$modelValue$bag18 === void 0 ? void 0 : _props$modelValue$bag18.name) !== null && _props$modelValue$bag17 !== void 0 ? _props$modelValue$bag17 : "", "Name");
          var phoneNumber = propertyRef((_props$modelValue$bag19 = (_props$modelValue$bag20 = props.modelValue.bag) === null || _props$modelValue$bag20 === void 0 ? void 0 : _props$modelValue$bag20.phoneNumber) !== null && _props$modelValue$bag19 !== void 0 ? _props$modelValue$bag19 : "", "PhoneNumber");
          var serviceTimes = propertyRef(((_props$modelValue$bag21 = (_props$modelValue$bag22 = props.modelValue.bag) === null || _props$modelValue$bag22 === void 0 ? void 0 : _props$modelValue$bag22.serviceTimes) !== null && _props$modelValue$bag21 !== void 0 ? _props$modelValue$bag21 : []).map(s => ({
            key: s.value,
            value: s.text
          })), "ServiceTimes");
          var shortCode = propertyRef((_props$modelValue$bag23 = (_props$modelValue$bag24 = props.modelValue.bag) === null || _props$modelValue$bag24 === void 0 ? void 0 : _props$modelValue$bag24.shortCode) !== null && _props$modelValue$bag23 !== void 0 ? _props$modelValue$bag23 : "", "ShortCode");
          var timeZoneId = propertyRef((_props$modelValue$bag25 = (_props$modelValue$bag26 = props.modelValue.bag) === null || _props$modelValue$bag26 === void 0 ? void 0 : _props$modelValue$bag26.timeZoneId) !== null && _props$modelValue$bag25 !== void 0 ? _props$modelValue$bag25 : "", "TimeZoneId");
          var url = propertyRef((_props$modelValue$bag27 = (_props$modelValue$bag28 = props.modelValue.bag) === null || _props$modelValue$bag28 === void 0 ? void 0 : _props$modelValue$bag28.url) !== null && _props$modelValue$bag27 !== void 0 ? _props$modelValue$bag27 : "", "Url");
          var propRefs = [campusStatusValue, campusTypeValue, description, isActive, leaderPersonAlias, location, name, phoneNumber, serviceTimes, shortCode, timeZoneId, url];
          var isTimeZoneVisible = computed(() => {
            return props.options.isMultiTimeZoneSupported === true;
          });
          var timeZoneOptions = computed(() => {
            var _props$options$timeZo;
            return (_props$options$timeZo = props.options.timeZoneOptions) !== null && _props$options$timeZo !== void 0 ? _props$options$timeZo : [];
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$bag29, _props$modelValue$bag30, _props$modelValue$bag31, _props$modelValue$bag32, _props$modelValue$bag33, _props$modelValue$bag34, _props$modelValue$bag35, _props$modelValue$bag36, _props$modelValue$bag37, _props$modelValue$bag38, _props$modelValue$bag39, _props$modelValue$bag40, _props$modelValue$bag41, _props$modelValue$bag42, _props$modelValue$bag43, _props$modelValue$bag44, _props$modelValue$bag45, _props$modelValue$bag46, _props$modelValue$bag47, _props$modelValue$bag48, _props$modelValue$bag49, _props$modelValue$bag50, _props$modelValue$bag51, _props$modelValue$bag52, _props$modelValue$bag53, _props$modelValue$bag54, _props$modelValue$bag55, _props$modelValue$bag56;
            updateRefValue(attributes, (_props$modelValue$bag29 = (_props$modelValue$bag30 = props.modelValue.bag) === null || _props$modelValue$bag30 === void 0 ? void 0 : _props$modelValue$bag30.attributes) !== null && _props$modelValue$bag29 !== void 0 ? _props$modelValue$bag29 : {});
            updateRefValue(attributeValues, (_props$modelValue$bag31 = (_props$modelValue$bag32 = props.modelValue.bag) === null || _props$modelValue$bag32 === void 0 ? void 0 : _props$modelValue$bag32.attributeValues) !== null && _props$modelValue$bag31 !== void 0 ? _props$modelValue$bag31 : {});
            updateRefValue(campusStatusValue, (_props$modelValue$bag33 = (_props$modelValue$bag34 = props.modelValue.bag) === null || _props$modelValue$bag34 === void 0 ? void 0 : _props$modelValue$bag34.campusStatusValue) !== null && _props$modelValue$bag33 !== void 0 ? _props$modelValue$bag33 : null);
            updateRefValue(campusTypeValue, (_props$modelValue$bag35 = (_props$modelValue$bag36 = props.modelValue.bag) === null || _props$modelValue$bag36 === void 0 ? void 0 : _props$modelValue$bag36.campusTypeValue) !== null && _props$modelValue$bag35 !== void 0 ? _props$modelValue$bag35 : null);
            updateRefValue(description, (_props$modelValue$bag37 = (_props$modelValue$bag38 = props.modelValue.bag) === null || _props$modelValue$bag38 === void 0 ? void 0 : _props$modelValue$bag38.description) !== null && _props$modelValue$bag37 !== void 0 ? _props$modelValue$bag37 : "");
            updateRefValue(isActive, (_props$modelValue$bag39 = (_props$modelValue$bag40 = props.modelValue.bag) === null || _props$modelValue$bag40 === void 0 ? void 0 : _props$modelValue$bag40.isActive) !== null && _props$modelValue$bag39 !== void 0 ? _props$modelValue$bag39 : false);
            updateRefValue(leaderPersonAlias, (_props$modelValue$bag41 = (_props$modelValue$bag42 = props.modelValue.bag) === null || _props$modelValue$bag42 === void 0 ? void 0 : _props$modelValue$bag42.leaderPersonAlias) !== null && _props$modelValue$bag41 !== void 0 ? _props$modelValue$bag41 : undefined);
            updateRefValue(location, (_props$modelValue$bag43 = (_props$modelValue$bag44 = props.modelValue.bag) === null || _props$modelValue$bag44 === void 0 ? void 0 : _props$modelValue$bag44.location) !== null && _props$modelValue$bag43 !== void 0 ? _props$modelValue$bag43 : null);
            updateRefValue(name, (_props$modelValue$bag45 = (_props$modelValue$bag46 = props.modelValue.bag) === null || _props$modelValue$bag46 === void 0 ? void 0 : _props$modelValue$bag46.name) !== null && _props$modelValue$bag45 !== void 0 ? _props$modelValue$bag45 : "");
            updateRefValue(phoneNumber, (_props$modelValue$bag47 = (_props$modelValue$bag48 = props.modelValue.bag) === null || _props$modelValue$bag48 === void 0 ? void 0 : _props$modelValue$bag48.phoneNumber) !== null && _props$modelValue$bag47 !== void 0 ? _props$modelValue$bag47 : "");
            updateRefValue(serviceTimes, ((_props$modelValue$bag49 = (_props$modelValue$bag50 = props.modelValue.bag) === null || _props$modelValue$bag50 === void 0 ? void 0 : _props$modelValue$bag50.serviceTimes) !== null && _props$modelValue$bag49 !== void 0 ? _props$modelValue$bag49 : []).map(s => ({
              key: s.value,
              value: s.text
            })));
            updateRefValue(shortCode, (_props$modelValue$bag51 = (_props$modelValue$bag52 = props.modelValue.bag) === null || _props$modelValue$bag52 === void 0 ? void 0 : _props$modelValue$bag52.shortCode) !== null && _props$modelValue$bag51 !== void 0 ? _props$modelValue$bag51 : "");
            updateRefValue(timeZoneId, (_props$modelValue$bag53 = (_props$modelValue$bag54 = props.modelValue.bag) === null || _props$modelValue$bag54 === void 0 ? void 0 : _props$modelValue$bag54.timeZoneId) !== null && _props$modelValue$bag53 !== void 0 ? _props$modelValue$bag53 : "");
            updateRefValue(url, (_props$modelValue$bag55 = (_props$modelValue$bag56 = props.modelValue.bag) === null || _props$modelValue$bag56 === void 0 ? void 0 : _props$modelValue$bag56.url) !== null && _props$modelValue$bag55 !== void 0 ? _props$modelValue$bag55 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = {
              bag: _objectSpread2({}, props.modelValue.bag)
            };
            setPropertiesBoxValue(newValue, "attributeValues", attributeValues.value);
            setPropertiesBoxValue(newValue, "campusStatusValue", campusStatusValue.value);
            setPropertiesBoxValue(newValue, "campusTypeValue", campusTypeValue.value);
            setPropertiesBoxValue(newValue, "description", description.value);
            setPropertiesBoxValue(newValue, "isActive", isActive.value);
            setPropertiesBoxValue(newValue, "leaderPersonAlias", leaderPersonAlias.value);
            setPropertiesBoxValue(newValue, "location", location.value);
            setPropertiesBoxValue(newValue, "name", name.value);
            setPropertiesBoxValue(newValue, "phoneNumber", phoneNumber.value);
            setPropertiesBoxValue(newValue, "serviceTimes", serviceTimes.value.map(s => {
              var _s$key, _s$value;
              return {
                value: (_s$key = s.key) !== null && _s$key !== void 0 ? _s$key : "",
                text: (_s$value = s.value) !== null && _s$value !== void 0 ? _s$value : ""
              };
            }));
            setPropertiesBoxValue(newValue, "shortCode", shortCode.value);
            setPropertiesBoxValue(newValue, "timeZoneId", timeZoneId.value);
            setPropertiesBoxValue(newValue, "url", url.value);
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(DefinedValuePicker), {
              modelValue: unref(campusStatusValue),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(campusStatusValue) ? campusStatusValue.value = $event : null),
              label: "Status",
              definedTypeGuid: unref(DefinedType).CampusStatus
            }, null, 8, ["modelValue", "definedTypeGuid"]), createVNode(unref(TextBox), {
              modelValue: unref(shortCode),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(shortCode) ? shortCode.value = $event : null),
              label: "Code"
            }, null, 8, ["modelValue"]), unref(isTimeZoneVisible) ? (openBlock(), createBlock(unref(DropDownList), {
              key: 0,
              modelValue: unref(timeZoneId),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(timeZoneId) ? timeZoneId.value = $event : null),
              label: "Time Zone",
              help: "The time zone you want certain time calculations of the Campus to operate in. Leave this blank to use the default Rock TimeZone.",
              items: unref(timeZoneOptions)
            }, null, 8, ["modelValue", "items"])) : createCommentVNode("v-if", true), createVNode(unref(PersonPicker), {
              modelValue: unref(leaderPersonAlias),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(leaderPersonAlias) ? leaderPersonAlias.value = $event : null),
              label: "Campus Leader"
            }, null, 8, ["modelValue"]), createVNode(unref(KeyValueList), {
              modelValue: unref(serviceTimes),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(serviceTimes) ? serviceTimes.value = $event : null),
              label: "Service Times",
              help: "A list of days and times that this campus has services."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(DefinedValuePicker), {
              modelValue: unref(campusTypeValue),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(campusTypeValue) ? campusTypeValue.value = $event : null),
              label: "Type",
              definedTypeGuid: unref(DefinedType).CampusType
            }, null, 8, ["modelValue", "definedTypeGuid"]), createVNode(unref(UrlLinkBox), {
              modelValue: unref(url),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(url) ? url.value = $event : null),
              label: "URL",
              requiresTrailingSlash: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PhoneNumberBox), {
              modelValue: unref(phoneNumber),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(phoneNumber) ? phoneNumber.value = $event : null),
              label: "Phone Number"
            }, null, 8, ["modelValue"]), createVNode(unref(LocationPicker), {
              modelValue: unref(location),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(location) ? location.value = $event : null),
              label: "Location",
              help: "Select a Campus location.",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/CampusDetail/editPanel.partial.obs";

      var _hoisted_1 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_2 = createTextVNode(" Because this campus is used by Rock, editing is not enabled. ");
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
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
          var isSystem = computed(() => {
            var _props$modelValue$isS, _props$modelValue3;
            return (_props$modelValue$isS = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$cam, _props$modelValue$lea;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$cam = props.modelValue.campusStatusValue) !== null && _props$modelValue$cam !== void 0 && _props$modelValue$cam.text) {
              valueBuilder.addTextValue("Status", props.modelValue.campusStatusValue.text);
            }
            if (props.modelValue.shortCode) {
              valueBuilder.addTextValue("Code", props.modelValue.shortCode);
            }
            if (props.options.isMultiTimeZoneSupported && props.modelValue.timeZoneId) {
              var _props$options$timeZo, _tz$text;
              var tz = new List((_props$options$timeZo = props.options.timeZoneOptions) !== null && _props$options$timeZo !== void 0 ? _props$options$timeZo : []).where(tz => {
                var _props$modelValue4;
                return tz.value === ((_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.timeZoneId);
              }).firstOrUndefined();
              valueBuilder.addTextValue("Time Zone", tz ? (_tz$text = tz.text) !== null && _tz$text !== void 0 ? _tz$text : "" : props.modelValue.timeZoneId);
            }
            if ((_props$modelValue$lea = props.modelValue.leaderPersonAlias) !== null && _props$modelValue$lea !== void 0 && _props$modelValue$lea.text) {
              valueBuilder.addTextValue("Campus Leader", props.modelValue.leaderPersonAlias.text);
            }
            if (props.modelValue.serviceTimes && props.modelValue.serviceTimes.length > 0) {
              var htmlValue = props.modelValue.serviceTimes.map(s => {
                var _s$value, _s$text;
                return "".concat(escapeHtml((_s$value = s.value) !== null && _s$value !== void 0 ? _s$value : ""), " ").concat(escapeHtml((_s$text = s.text) !== null && _s$text !== void 0 ? _s$text : ""));
              }).join("<br>");
              valueBuilder.addHtmlValue("Service Times", htmlValue);
            }
            if (props.modelValue.campusSchedules && props.modelValue.campusSchedules.length > 0) {
              valueBuilder.addTextValue("Campus Schedules", props.modelValue.campusSchedules.map(s => {
                var _s$schedule$text, _s$schedule;
                return (_s$schedule$text = (_s$schedule = s.schedule) === null || _s$schedule === void 0 ? void 0 : _s$schedule.text) !== null && _s$schedule$text !== void 0 ? _s$schedule$text : "";
              }).join(", "));
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$cam2, _props$modelValue$loc;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$cam2 = props.modelValue.campusTypeValue) !== null && _props$modelValue$cam2 !== void 0 && _props$modelValue$cam2.text) {
              valueBuilder.addTextValue("Type", props.modelValue.campusTypeValue.text);
            }
            if (props.modelValue.url) {
              valueBuilder.addTextValue("URL", props.modelValue.url);
            }
            if (props.modelValue.phoneNumber) {
              valueBuilder.addTextValue("Phone Number", props.modelValue.phoneNumber);
            }
            if ((_props$modelValue$loc = props.modelValue.location) !== null && _props$modelValue$loc !== void 0 && _props$modelValue$loc.text) {
              valueBuilder.addTextValue("Location", props.modelValue.location.text);
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [unref(isSystem) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1, _hoisted_2]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/CampusDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'campusDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var blockError = ref("");
          var errorMessage = ref("");
          var campusViewBag = ref(config.entity);
          var campusEditBag = ref({
            bag: {}
          });
          var panelMode = ref(DetailPanelMode.View);
          var baseBlock = useEntityDetailBlock({
            blockConfig: config,
            entity: campusEditBag
          });
          var panelName = computed(() => {
            var _campusViewBag$value$, _campusViewBag$value;
            return (_campusViewBag$value$ = (_campusViewBag$value = campusViewBag.value) === null || _campusViewBag$value === void 0 ? void 0 : _campusViewBag$value.name) !== null && _campusViewBag$value$ !== void 0 ? _campusViewBag$value$ : "";
          });
          var entityKey = computed(() => {
            var _campusViewBag$value$2, _campusViewBag$value2;
            return (_campusViewBag$value$2 = (_campusViewBag$value2 = campusViewBag.value) === null || _campusViewBag$value2 === void 0 ? void 0 : _campusViewBag$value2.idKey) !== null && _campusViewBag$value$2 !== void 0 ? _campusViewBag$value$2 : "";
          });
          var blockLabels = computed(() => {
            var _campusViewBag$value3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_campusViewBag$value3 = campusViewBag.value) === null || _campusViewBag$value3 === void 0 ? void 0 : _campusViewBag$value3.isActive) === true) {
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
            return labels;
          });
          var isEditable = computed(() => {
            var _campusViewBag$value4;
            return config.isEditable === true && ((_campusViewBag$value4 = campusViewBag.value) === null || _campusViewBag$value4 === void 0 ? void 0 : _campusViewBag$value4.isSystem) !== true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {
              isMultiTimeZoneSupported: false
            };
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _campusEditBag$value$;
              if (!((_campusEditBag$value$ = campusEditBag.value.bag) !== null && _campusEditBag$value$ !== void 0 && _campusEditBag$value$.idKey)) {
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
              var _campusViewBag$value5;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_campusViewBag$value5 = campusViewBag.value) === null || _campusViewBag$value5 === void 0 ? void 0 : _campusViewBag$value5.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete campus.";
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
              var _campusViewBag$value6;
              var result = yield invokeBlockAction("Edit", {
                key: (_campusViewBag$value6 = campusViewBag.value) === null || _campusViewBag$value6 === void 0 ? void 0 : _campusViewBag$value6.idKey
              });
              if (result.isSuccess && result.data && result.data.bag) {
                var _result$data$validPro;
                campusEditBag.value = {
                  bag: result.data.bag,
                  validProperties: (_result$data$validPro = result.data.validProperties) !== null && _result$data$validPro !== void 0 ? _result$data$validPro : Object.keys(result.data.bag)
                };
                return true;
              } else {
                return false;
              }
            });
            return _onEdit.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Save", {
                box: campusEditBag.value
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  campusViewBag.value = result.data.bag;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save campus.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified campus could not be viewed.";
          } else if (!config.entity.idKey) {
            campusEditBag.value = {
              bag: config.entity
            };
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
              isAuditHidden: false,
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
                modelValue: campusViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: campusEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => campusEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: unref(baseBlock).onPropertyChanged
              }, null, 8, ["modelValue", "options", "onPropertyChanged"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/campusDetail.obs";

    })
  };
}));
//# sourceMappingURL=campusDetail.obs.js.map
