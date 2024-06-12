System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/accountPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/dayOfWeekPicker.obs', '@Obsidian/SystemGuids/definedType', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/groupPicker.obs', '@Obsidian/Controls/interactionChannelPicker.obs', '@Obsidian/Controls/interactionComponentPicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Engagement/streakStructureType', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/enumUtils', '@Obsidian/Enums/Engagement/streakOccurrenceFrequency', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/url', '@Obsidian/Utility/util', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, withCtx, createTextVNode, toDisplayString, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, AccountPicker, CheckBox, TextBox, DatePicker, DayOfWeekPicker, DefinedType, DefinedValuePicker, DropDownList, GroupTypePicker, GroupPicker, InteractionChannelPicker, InteractionComponentPicker, toNumber, toNumberOrNull, StreakStructureTypeDescription, StreakStructureType, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, enumToListItemBag, StreakOccurrenceFrequencyDescription, toGuidOrNull, ValueDetailList, RockDateTime, ValueDetailListItemBuilder, makeUrlRedirectSafe, debounce, confirm;
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
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
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
      AccountPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DayOfWeekPicker = module["default"];
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      GroupTypePicker = module["default"];
    }, function (module) {
      GroupPicker = module["default"];
    }, function (module) {
      InteractionChannelPicker = module["default"];
    }, function (module) {
      InteractionComponentPicker = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
      toNumberOrNull = module.toNumberOrNull;
    }, function (module) {
      StreakStructureTypeDescription = module.StreakStructureTypeDescription;
      StreakStructureType = module.StreakStructureType;
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
      enumToListItemBag = module.enumToListItemBag;
    }, function (module) {
      StreakOccurrenceFrequencyDescription = module.StreakOccurrenceFrequencyDescription;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      confirm = module.confirm;
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
        class: "col-md-12"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "col-sm-3 col-xs-6"
      };
      var _hoisted_7 = {
        class: "col-sm-3 col-xs-6"
      };
      var _hoisted_8 = {
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "col-sm-6 col-xs-12"
      };
      var _hoisted_11 = {
        class: "col-sm-6 col-xs-12"
      };
      var _hoisted_12 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$req, _props$modelValue$fir, _props$modelValue, _props$modelValue$fir2, _props$modelValue$occ, _props$modelValue2, _props$modelValue2$oc, _props$modelValue$str, _props$modelValue3, _props$modelValue3$st, _props$modelValue$str2, _props$modelValue4, _props$modelValue$inc, _props$modelValue5, _props$modelValue6;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var startDate = propertyRef(props.modelValue.startDate, "StartDate");
          var requiresEnrollment = propertyRef((_props$modelValue$req = props.modelValue.requiresEnrollment) !== null && _props$modelValue$req !== void 0 ? _props$modelValue$req : "", "RequiresEnrollment");
          var enableAttendance = propertyRef(props.modelValue.enableAttendance, "EnableAttendance");
          var firstDayOfWeek = propertyRef((_props$modelValue$fir = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : (_props$modelValue$fir2 = _props$modelValue.firstDayOfWeek) === null || _props$modelValue$fir2 === void 0 ? void 0 : _props$modelValue$fir2.toString()) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : null, "FirstDayOfWeek");
          var occurrenceFrequency = propertyRef((_props$modelValue$occ = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : (_props$modelValue2$oc = _props$modelValue2.occurrenceFrequency) === null || _props$modelValue2$oc === void 0 ? void 0 : _props$modelValue2$oc.toString()) !== null && _props$modelValue$occ !== void 0 ? _props$modelValue$occ : null, "OccurrenceFrequency");
          var structureType = propertyRef((_props$modelValue$str = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : (_props$modelValue3$st = _props$modelValue3.structureType) === null || _props$modelValue3$st === void 0 ? void 0 : _props$modelValue3$st.toString()) !== null && _props$modelValue$str !== void 0 ? _props$modelValue$str : "None", "StructureType");
          var structureEntity = propertyRef((_props$modelValue$str2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.structureEntity) !== null && _props$modelValue$str2 !== void 0 ? _props$modelValue$str2 : {}, "StructureEntity");
          var includeChildAccounts = propertyRef((_props$modelValue$inc = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.includeChildAccounts) !== null && _props$modelValue$inc !== void 0 ? _props$modelValue$inc : {}, "IncludeChildAccounts");
          var interactionComponentInteractionChannel = ref((_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.interactionComponentInteractionChannel);
          var streakStructureTypes = ref(enumToListItemBag(StreakStructureTypeDescription));
          var streakOccurrenceFrequencies = ref(enumToListItemBag(StreakOccurrenceFrequencyDescription));
          var isAddMode = computed(() => {
            var _props$modelValue7;
            return ((_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.idKey) == "";
          });
          var canUpdateDayOfWeekPicker = computed(() => {
            var _props$modelValue8;
            return ((_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.occurrenceFrequency) == 1;
          });
          var propRefs = [description, isActive, name, startDate, requiresEnrollment, enableAttendance, firstDayOfWeek, occurrenceFrequency, structureType, structureEntity, includeChildAccounts];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$sta, _props$modelValue$fir3, _props$modelValue9, _props$modelValue9$fi, _props$modelValue$occ2, _props$modelValue10, _props$modelValue$str3, _props$modelValue11, _props$modelValue11$s, _props$modelValue$str4, _props$modelValue12, _props$modelValue$inc2, _props$modelValue13;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(startDate, (_props$modelValue$sta = props.modelValue.startDate) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "");
            updateRefValue(requiresEnrollment, props.modelValue.requiresEnrollment);
            updateRefValue(enableAttendance, props.modelValue.enableAttendance);
            updateRefValue(firstDayOfWeek, (_props$modelValue$fir3 = (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : (_props$modelValue9$fi = _props$modelValue9.firstDayOfWeek) === null || _props$modelValue9$fi === void 0 ? void 0 : _props$modelValue9$fi.toString()) !== null && _props$modelValue$fir3 !== void 0 ? _props$modelValue$fir3 : null);
            updateRefValue(occurrenceFrequency, (_props$modelValue$occ2 = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : _props$modelValue10.occurrenceFrequency.toString()) !== null && _props$modelValue$occ2 !== void 0 ? _props$modelValue$occ2 : null);
            updateRefValue(structureType, (_props$modelValue$str3 = (_props$modelValue11 = props.modelValue) === null || _props$modelValue11 === void 0 ? void 0 : (_props$modelValue11$s = _props$modelValue11.structureType) === null || _props$modelValue11$s === void 0 ? void 0 : _props$modelValue11$s.toString()) !== null && _props$modelValue$str3 !== void 0 ? _props$modelValue$str3 : "");
            updateRefValue(structureEntity, (_props$modelValue$str4 = (_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.structureEntity) !== null && _props$modelValue$str4 !== void 0 ? _props$modelValue$str4 : {});
            updateRefValue(includeChildAccounts, (_props$modelValue$inc2 = (_props$modelValue13 = props.modelValue) === null || _props$modelValue13 === void 0 ? void 0 : _props$modelValue13.includeChildAccounts) !== null && _props$modelValue$inc2 !== void 0 ? _props$modelValue$inc2 : false);
          });
          watch([attributeValues, ...propRefs], () => {
            var _firstDayOfWeek$value, _props$modelValue14, _props$modelValue14$s;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              startDate: startDate.value,
              requiresEnrollment: requiresEnrollment.value,
              enableAttendance: enableAttendance.value,
              firstDayOfWeek: parseInt((_firstDayOfWeek$value = firstDayOfWeek.value) !== null && _firstDayOfWeek$value !== void 0 ? _firstDayOfWeek$value : "0"),
              occurrenceFrequency: toNumber(occurrenceFrequency.value),
              structureType: toNumberOrNull(structureType.value),
              structureEntity: ((_props$modelValue14 = props.modelValue) === null || _props$modelValue14 === void 0 ? void 0 : (_props$modelValue14$s = _props$modelValue14.structureType) === null || _props$modelValue14$s === void 0 ? void 0 : _props$modelValue14$s.toString()) == structureType.value ? structureEntity.value : {},
              includeChildAccounts: includeChildAccounts.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _props$options, _interactionComponent, _streakOccurrenceFreq, _streakOccurrenceFreq2, _streakOccurrenceFreq3;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4$1, [createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$1, [createVNode(unref(DatePicker), {
              modelValue: unref(startDate),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(startDate) ? startDate.value = $event : null),
              label: "Start Date",
              rules: "required",
              disabled: !unref(isAddMode),
              help: "This defines the first day (or week) that a person could engage with this Streak Type and receive an affirmative mark towards their streak.\r\n                        The start date cannot be changed once the Streak Type is created except when rebuilding the entire Streak Type."
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(CheckBox), {
              modelValue: unref(enableAttendance),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(enableAttendance) ? enableAttendance.value = $event : null),
              label: "Sync Linked Activity",
              help: "If enabled, this streak type will create linked activity records (interaction or attendance) when the Mark Engagement API endpoints are used.\r\n                        Furthermore, when linked activity records are added, this streak type will mark the appropriate engagement bit."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_7, [createVNode(unref(CheckBox), {
              modelValue: unref(requiresEnrollment),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(requiresEnrollment) ? requiresEnrollment.value = $event : null),
              label: "Require Enrollment",
              help: "If enabled, this Streak Type will not allow new Streaks to be tracked unless the person has been explicitly enrolled. Implicit enrollment\r\n                        occurs when Sync Linked Activity is enabled, and a linked activity record is created."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(DropDownList), {
              modelValue: unref(structureType),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(structureType) ? structureType.value = $event : null),
              label: "Linked Activity",
              items: streakStructureTypes.value,
              blankValue: "None",
              help: "This specifies what linked activity types this Streak Type may interface with. Something very broad like “Attendance: Any” could\r\n                        help measure general engagement with the church. Alternatively, something narrower like a Group Type Purpose could measure more specific engagement points."
            }, null, 8, ["modelValue", "items"]), __props.modelValue.structureType == unref(StreakStructureType).GroupType ? (openBlock(), createBlock(unref(GroupTypePicker), {
              key: 0,
              label: "Group Type",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              isSortedByName: true,
              showBlankItem: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).Group ? (openBlock(), createBlock(unref(GroupPicker), {
              key: 1,
              label: "Group",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              showBlankItem: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).GroupTypePurpose ? (openBlock(), createBlock(unref(DefinedValuePicker), {
              key: 2,
              label: "Group Type Purpose",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              definedTypeGuid: unref(DefinedType).GrouptypePurpose,
              showBlankItem: ""
            }, null, 8, ["modelValue", "definedTypeGuid"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).CheckInConfig ? (openBlock(), createBlock(unref(GroupTypePicker), {
              key: 3,
              label: "Check-In Configuration",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              isSortedByName: true,
              groupTypes: (_props$options = __props.options) === null || _props$options === void 0 ? void 0 : _props$options.attendanceCheckInConfigGroupTypesGuids,
              showBlankItem: ""
            }, null, 8, ["modelValue", "groupTypes"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).InteractionChannel ? (openBlock(), createBlock(unref(InteractionChannelPicker), {
              key: 4,
              label: "Interaction Channel",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              showBlankItem: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).InteractionComponent ? (openBlock(), createBlock(unref(InteractionChannelPicker), {
              key: 5,
              label: "Interaction Channel",
              modelValue: interactionComponentInteractionChannel.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => interactionComponentInteractionChannel.value = $event),
              showBlankItem: ""
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).InteractionComponent ? (openBlock(), createBlock(unref(InteractionComponentPicker), {
              key: 6,
              label: "Interaction Component",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              interactionChannelGuid: unref(toGuidOrNull)((_interactionComponent = interactionComponentInteractionChannel.value) === null || _interactionComponent === void 0 ? void 0 : _interactionComponent.value),
              showBlankItem: ""
            }, null, 8, ["modelValue", "interactionChannelGuid"])) : createCommentVNode("v-if", true), __props.modelValue.structureType == unref(StreakStructureType).InteractionMedium ? (openBlock(), createBlock(unref(DefinedValuePicker), {
              key: 7,
              label: "Interaction Medium",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              definedTypeGuid: unref(DefinedType).InteractionChannelMedium,
              showBlankItem: ""
            }, null, 8, ["modelValue", "definedTypeGuid"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_10, [__props.modelValue.structureType == unref(StreakStructureType).FinancialTransaction ? (openBlock(), createBlock(unref(AccountPicker), {
              key: 0,
              label: "Account",
              modelValue: unref(structureEntity),
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isRef(structureEntity) ? structureEntity.value = $event : null),
              enhanceForLongLists: "",
              multiple: false
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_11, [__props.modelValue.structureType == unref(StreakStructureType).FinancialTransaction ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              label: "Include Child Accounts",
              modelValue: unref(includeChildAccounts),
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => isRef(includeChildAccounts) ? includeChildAccounts.value = $event : null)
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_12, [createVNode(unref(DropDownList), {
              modelValue: unref(occurrenceFrequency),
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => isRef(occurrenceFrequency) ? occurrenceFrequency.value = $event : null),
              label: "Frequency",
              items: (_streakOccurrenceFreq = streakOccurrenceFrequencies.value) !== null && _streakOccurrenceFreq !== void 0 ? _streakOccurrenceFreq : [],
              disabled: !unref(isAddMode),
              blankValue: (_streakOccurrenceFreq2 = (_streakOccurrenceFreq3 = streakOccurrenceFrequencies.value) === null || _streakOccurrenceFreq3 === void 0 ? void 0 : _streakOccurrenceFreq3[0].value) !== null && _streakOccurrenceFreq2 !== void 0 ? _streakOccurrenceFreq2 : '',
              help: "Daily measuring is great for something like Bible Reading where the ideal is daily engagement. Weekly measurements are better suited for activities\r\n                        such as a small group where the ideal is weekly engagement."
            }, null, 8, ["modelValue", "items", "disabled", "blankValue"]), unref(canUpdateDayOfWeekPicker) ? (openBlock(), createBlock(unref(DayOfWeekPicker), {
              key: 0,
              label: "Day of the Week",
              modelValue: unref(firstDayOfWeek),
              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => isRef(firstDayOfWeek) ? firstDayOfWeek.value = $event : null),
              help: "Allows this weekly streak type to calculate streaks based off a custom first day of the week setting. Leave this blank to use the system setting."
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Engagement/StreakTypeDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        key: 0,
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-12"
      };
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
          },
          rebuildActionSuccessMessage: String
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
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue3, _RockDateTime$parseIS, _RockDateTime$parseIS2, _props$modelValue$sta, _props$modelValue4, _props$modelValue5, _props$modelValue6, _props$modelValue7;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addTextValue("Frequency", StreakOccurrenceFrequencyDescription[(_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.occurrenceFrequency]);
            valueBuilder.addTextValue("Start Date", (_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO((_props$modelValue$sta = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.startDate) !== null && _props$modelValue$sta !== void 0 ? _props$modelValue$sta : "")) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("d")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : "");
            valueBuilder.addTextValue("Requires Enrollment", (_props$modelValue5 = props.modelValue) !== null && _props$modelValue5 !== void 0 && _props$modelValue5.requiresEnrollment ? "Yes" : "No");
            valueBuilder.addTextValue("Sync Linked Activity", (_props$modelValue6 = props.modelValue) !== null && _props$modelValue6 !== void 0 && _props$modelValue6.enableAttendance ? "Yes" : "No");
            valueBuilder.addTextValue("Linked Activity", ((_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.structureTypeDisplay) || "None");
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [__props.rebuildActionSuccessMessage ? (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(NotificationBox), {
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.rebuildActionSuccessMessage), 1)]),
              _: 1
            })])])) : createCommentVNode("v-if", true), createVNode(unref(ValueDetailList), {
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

      script$1.__file = "src/Engagement/StreakTypeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["MapEditorPage"] = "MapEditorPage";
        NavigationUrlKey["ExclusionsPage"] = "ExclusionsPage";
        NavigationUrlKey["AchievementsPage"] = "AchievementsPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'streakTypeDetail',
        setup(__props) {
          var _streakTypeViewBag$va;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var rebuildActionSuccessMessage = ref("");
          var blockError = ref("");
          var errorMessage = ref("");
          var streakTypeViewBag = ref(config.entity);
          var streakTypeEditBag = ref({});
          var rebuildButtonEnabled = ref(((_streakTypeViewBag$va = streakTypeViewBag.value) === null || _streakTypeViewBag$va === void 0 ? void 0 : _streakTypeViewBag$va.isActive) === true);
          var entityTypeGuid = EntityType.StreakType;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "description", "enableAttendance", "isActive", "name", "occurrenceFrequency", "requiresEnrollment", "startDate", "streaks", "firstDayOfWeek", "streakTypeExclusions", "structureType", "structureEntity", "includeChildAccounts"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(streakTypeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _streakTypeViewBag$va2, _streakTypeViewBag$va3;
            return (_streakTypeViewBag$va2 = (_streakTypeViewBag$va3 = streakTypeViewBag.value) === null || _streakTypeViewBag$va3 === void 0 ? void 0 : _streakTypeViewBag$va3.name) !== null && _streakTypeViewBag$va2 !== void 0 ? _streakTypeViewBag$va2 : "";
          });
          var entityKey = computed(() => {
            var _streakTypeViewBag$va4, _streakTypeViewBag$va5;
            return (_streakTypeViewBag$va4 = (_streakTypeViewBag$va5 = streakTypeViewBag.value) === null || _streakTypeViewBag$va5 === void 0 ? void 0 : _streakTypeViewBag$va5.idKey) !== null && _streakTypeViewBag$va4 !== void 0 ? _streakTypeViewBag$va4 : "";
          });
          var blockLabels = computed(() => {
            var _streakTypeViewBag$va6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_streakTypeViewBag$va6 = streakTypeViewBag.value) === null || _streakTypeViewBag$va6 === void 0 ? void 0 : _streakTypeViewBag$va6.isActive) === true) {
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
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var footerActions = computed(() => {
            var _streakTypeViewBag$va7, _streakTypeViewBag$va8;
            if (panelMode.value != DetailPanelMode.View) {
              return [];
            }
            var footerActionsPanelActions = [{
              iconCssClass: "fa fa-medal",
              title: "Achievements",
              type: "default",
              handler: () => {
                var _config$navigationUrl, _config$navigationUrl2;
                window.location.href = makeUrlRedirectSafe((_config$navigationUrl = (_config$navigationUrl2 = config.navigationUrls) === null || _config$navigationUrl2 === void 0 ? void 0 : _config$navigationUrl2[NavigationUrlKey.AchievementsPage]) !== null && _config$navigationUrl !== void 0 ? _config$navigationUrl : "");
              }
            }, {
              iconCssClass: "fa fa-calendar-check",
              title: "Map Editor",
              type: "default",
              handler: () => {
                var _config$navigationUrl3, _config$navigationUrl4;
                window.location.href = makeUrlRedirectSafe((_config$navigationUrl3 = (_config$navigationUrl4 = config.navigationUrls) === null || _config$navigationUrl4 === void 0 ? void 0 : _config$navigationUrl4[NavigationUrlKey.MapEditorPage]) !== null && _config$navigationUrl3 !== void 0 ? _config$navigationUrl3 : "");
              }
            }, {
              iconCssClass: "fa fa-calendar-times",
              title: "Exclusions",
              type: "default",
              handler: () => {
                var _config$navigationUrl5, _config$navigationUrl6;
                window.location.href = makeUrlRedirectSafe((_config$navigationUrl5 = (_config$navigationUrl6 = config.navigationUrls) === null || _config$navigationUrl6 === void 0 ? void 0 : _config$navigationUrl6[NavigationUrlKey.ExclusionsPage]) !== null && _config$navigationUrl5 !== void 0 ? _config$navigationUrl5 : "");
              }
            }];
            if (((_streakTypeViewBag$va7 = streakTypeViewBag.value) === null || _streakTypeViewBag$va7 === void 0 ? void 0 : _streakTypeViewBag$va7.structureType) === 0 || ((_streakTypeViewBag$va8 = streakTypeViewBag.value) === null || _streakTypeViewBag$va8 === void 0 ? void 0 : _streakTypeViewBag$va8.structureEntity) != null) {
              footerActionsPanelActions.push({
                iconCssClass: "fa fa-redo-alt",
                title: "Rebuild",
                type: "danger",
                handler: () => {
                  onRebuild();
                },
                disabled: !rebuildButtonEnabled.value
              });
            }
            return footerActionsPanelActions;
          });
          function onRebuild() {
            return _onRebuild.apply(this, arguments);
          }
          function _onRebuild() {
            _onRebuild = _asyncToGenerator(function* () {
              var _streakTypeViewBag$va9;
              errorMessage.value = "";
              rebuildActionSuccessMessage.value = "";
              if (!(yield confirm("Are you sure you want to delete this data? Occurrence and enrollment map data belonging to this streak type will be deleted and rebuilt from attendance records! This process runs in separate process and may take several minutes to complete."))) {
                return false;
              }
              var result = yield invokeBlockAction("Rebuild", {
                key: (_streakTypeViewBag$va9 = streakTypeViewBag.value) === null || _streakTypeViewBag$va9 === void 0 ? void 0 : _streakTypeViewBag$va9.idKey
              });
              if (result.isSuccess && result.data) {
                rebuildActionSuccessMessage.value = result.data;
                rebuildButtonEnabled.value = false;
                return true;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to rebuild streak.";
                return false;
              }
            });
            return _onRebuild.apply(this, arguments);
          }
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _streakTypeEditBag$va;
              if (!((_streakTypeEditBag$va = streakTypeEditBag.value) !== null && _streakTypeEditBag$va !== void 0 && _streakTypeEditBag$va.idKey)) {
                var _config$navigationUrl7;
                if ((_config$navigationUrl7 = config.navigationUrls) !== null && _config$navigationUrl7 !== void 0 && _config$navigationUrl7[NavigationUrlKey.ParentPage]) {
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
              var _streakTypeViewBag$va10;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_streakTypeViewBag$va10 = streakTypeViewBag.value) === null || _streakTypeViewBag$va10 === void 0 ? void 0 : _streakTypeViewBag$va10.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage2;
                errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete streak type.";
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
              var _streakTypeViewBag$va11;
              var result = yield invokeBlockAction("Edit", {
                key: (_streakTypeViewBag$va11 = streakTypeViewBag.value) === null || _streakTypeViewBag$va11 === void 0 ? void 0 : _streakTypeViewBag$va11.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                streakTypeEditBag.value = result.data.entity;
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
              var _result$errorMessage3;
              errorMessage.value = "";
              var data = {
                entity: streakTypeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  streakTypeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to save streak type.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified streak type could not be viewed.";
          } else if (!config.entity.idKey) {
            streakTypeEditBag.value = config.entity;
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
              entityTypeName: "StreakType",
              footerSecondaryActions: unref(footerActions),
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: false,
              additionalDeleteMessage: "All associated Enrollments and Exclusions will also be deleted!",
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: streakTypeViewBag.value,
                options: unref(options),
                rebuildActionSuccessMessage: rebuildActionSuccessMessage.value
              }, null, 8, ["modelValue", "options", "rebuildActionSuccessMessage"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: streakTypeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => streakTypeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "footerSecondaryActions", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/streakTypeDetail.obs";

    })
  };
}));
//# sourceMappingURL=streakTypeDetail.obs.js.map
