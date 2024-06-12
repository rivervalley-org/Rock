System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/scheduleBuilder.obs', '@Obsidian/Utility/tooltip', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Utility/rockDateTime', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/url', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, onMounted, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, computed, Fragment, createBlock, renderList, toDisplayString, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, Numberbox, RockButton, CategoryPicker, ScheduleBuilder, tooltip, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, useReloadBlock, refreshDetailAttributes, provideSecurityGrant, onConfigurationValuesChanged, propertyRef, updateRefValue, ValueDetailList, RockDateTime, ValueDetailListItemBuilder, makeUrlRedirectSafe, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      Numberbox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      ScheduleBuilder = module["default"];
    }, function (module) {
      tooltip = module.tooltip;
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
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
        class: "col-md-3"
      };
      var _hoisted_5$1 = {
        class: "row"
      };
      var _hoisted_6$1 = {
        class: "col-md-6"
      };
      var _hoisted_7$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "mins before start", -1);
      var _hoisted_8$1 = {
        class: "col-md-6"
      };
      var _hoisted_9$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "mins after start", -1);
      var _hoisted_10 = {
        class: "row"
      };
      var _hoisted_11 = {
        class: "col-md-6"
      };
      var _hoisted_12 = {
        class: "row"
      };
      var _hoisted_13 = {
        class: "col-md-8"
      };
      var _hoisted_14 = {
        class: "col-md-2"
      };
      var _hoisted_15 = createTextVNode("Preview");
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$abb, _props$modelValue$isP, _props$modelValue$iCa;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var abbreviatedName = propertyRef((_props$modelValue$abb = props.modelValue.abbreviatedName) !== null && _props$modelValue$abb !== void 0 ? _props$modelValue$abb : "", "AbbreviatedName");
          var enableCheckIn = propertyRef(props.modelValue.checkInStartOffsetMinutes, "CheckInStartOffsetMinute");
          var closeCheckIn = propertyRef(props.modelValue.checkInEndOffsetMinutes, "CheckInEndOffsetMinute");
          var category = propertyRef(props.modelValue.category, "CategoryId");
          var autoInactivateWhenComplete = propertyRef(props.modelValue.autoInactivateWhenComplete, "AutoInactiveWhenComplete");
          var isPublic = propertyRef((_props$modelValue$isP = props.modelValue.isPublic) !== null && _props$modelValue$isP !== void 0 ? _props$modelValue$isP : false, "IsPublic");
          var calendarContent = propertyRef((_props$modelValue$iCa = props.modelValue.iCalendarContent) !== null && _props$modelValue$iCa !== void 0 ? _props$modelValue$iCa : "", "iCalendarContent");
          var scheduleEntityTypeGuid = EntityType.Schedule;
          var propRefs = [description, isActive, name, abbreviatedName, enableCheckIn, closeCheckIn, category, autoInactivateWhenComplete, isPublic, calendarContent];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$abb2, _props$modelValue$isP2, _props$modelValue$iCa2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(abbreviatedName, (_props$modelValue$abb2 = props.modelValue.abbreviatedName) !== null && _props$modelValue$abb2 !== void 0 ? _props$modelValue$abb2 : "");
            updateRefValue(enableCheckIn, props.modelValue.checkInStartOffsetMinutes);
            updateRefValue(closeCheckIn, props.modelValue.checkInEndOffsetMinutes);
            updateRefValue(category, props.modelValue.category);
            updateRefValue(autoInactivateWhenComplete, props.modelValue.autoInactivateWhenComplete);
            updateRefValue(isPublic, (_props$modelValue$isP2 = props.modelValue.isPublic) !== null && _props$modelValue$isP2 !== void 0 ? _props$modelValue$isP2 : false);
            updateRefValue(calendarContent, (_props$modelValue$iCa2 = props.modelValue.iCalendarContent) !== null && _props$modelValue$iCa2 !== void 0 ? _props$modelValue$iCa2 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              abbreviatedName: abbreviatedName.value,
              checkInStartOffsetMinutes: enableCheckIn.value,
              checkInEndOffsetMinutes: closeCheckIn.value,
              category: category.value,
              autoInactivateWhenComplete: autoInactivateWhenComplete.value,
              isPublic: isPublic.value,
              iCalendarContent: calendarContent.value
            });
            emit("update:modelValue", newValue);
          });
          var previewRef = ref();
          onMounted(() => {
            var _previewRef$value;
            tooltip(previewRef === null || previewRef === void 0 ? void 0 : (_previewRef$value = previewRef.value) === null || _previewRef$value === void 0 ? void 0 : _previewRef$value.$el);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _props$options;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(abbreviatedName),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(abbreviatedName) ? abbreviatedName.value = $event : null),
              label: "Abbreviated Name"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isPublic),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(isPublic) ? isPublic.value = $event : null),
              label: "Public",
              help: "Determines if this schedule should be shown or hidden when viewed by individuals outside of the organization."
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_5$1, [createElementVNode("div", _hoisted_6$1, [createVNode(unref(Numberbox), {
              modelValue: unref(enableCheckIn),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(enableCheckIn) ? enableCheckIn.value = $event : null),
              append: "mins before start",
              label: "Enable Check-in"
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_7$1]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(CategoryPicker), {
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(category) ? category.value = $event : null),
              label: "Category",
              multiple: false,
              rules: "required",
              entityTypeGuid: unref(scheduleEntityTypeGuid)
            }, null, 8, ["modelValue", "entityTypeGuid"])]), createElementVNode("div", _hoisted_8$1, [createVNode(unref(Numberbox), {
              modelValue: unref(closeCheckIn),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(closeCheckIn) ? closeCheckIn.value = $event : null),
              label: "Close Check-in"
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_9$1]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(autoInactivateWhenComplete),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(autoInactivateWhenComplete) ? autoInactivateWhenComplete.value = $event : null),
              label: "Inactivate Schedule When Complete",
              help: "When enabled, the schedule will automatically be inactivated once the schedule has no more occurrences."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createElementVNode("div", _hoisted_13, [createVNode(unref(ScheduleBuilder), {
              modelValue: unref(calendarContent),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(calendarContent) ? calendarContent.value = $event : null),
              label: "Schedule"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_14, [createVNode(unref(RockButton), {
              btnType: "link",
              "data-toggle": "tooltip",
              ref_key: "previewRef",
              ref: previewRef,
              "data-placement": "auto",
              "data-container": "body",
              "data-html": "true",
              title: "",
              "data-original-title": (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.helpText
            }, {
              default: withCtx(() => [_hoisted_15]),
              _: 1
            }, 8, ["data-original-title"])])])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/ScheduleDetail/editPanel.partial.obs";

      var _hoisted_1 = createElementVNode("strong", null, "Exclusions", -1);
      var _hoisted_2 = createTextVNode();
      var _hoisted_3 = createElementVNode("br", null, null, -1);
      var _hoisted_4 = {
        class: "js-notification-text"
      };
      var _hoisted_5 = createElementVNode("p", null, "This schedule will not be active during the following dates due to being excluded by the schedule's category:", -1);
      var _hoisted_6 = createElementVNode("br", null, null, -1);
      var _hoisted_7 = {
        class: "row"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
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
            var _props$modelValue3, _props$modelValue5, _props$modelValue8, _props$modelValue9, _props$modelValue11, _props$modelValue12, _props$modelValue14, _props$modelValue15;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue3 = props.modelValue) !== null && _props$modelValue3 !== void 0 && _props$modelValue3.description) {
              var _props$modelValue$des, _props$modelValue4;
              valueBuilder.addTextValue("Description", (_props$modelValue$des = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "");
            }
            if ((_props$modelValue5 = props.modelValue) !== null && _props$modelValue5 !== void 0 && _props$modelValue5.friendlyScheduleText) {
              if (props.options.hasScheduleWarning) {
                var _props$modelValue$fri, _props$modelValue6;
                valueBuilder.addHtmlValue("Schedule", "<label class='label label-warning'>".concat((_props$modelValue$fri = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.friendlyScheduleText) !== null && _props$modelValue$fri !== void 0 ? _props$modelValue$fri : "", "</label> <i class='fa fa-exclamation-triangle text-warning'></i>"));
              } else {
                var _props$modelValue$fri2, _props$modelValue7;
                valueBuilder.addHtmlValue("Schedule", (_props$modelValue$fri2 = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.friendlyScheduleText) !== null && _props$modelValue$fri2 !== void 0 ? _props$modelValue$fri2 : "");
              }
            }
            if ((_props$modelValue8 = props.modelValue) !== null && _props$modelValue8 !== void 0 && _props$modelValue8.nextOccurrence) {
              valueBuilder.addTextValue("Next Occurrence", "".concat(props.modelValue.nextOccurrence));
            }
            if ((_props$modelValue9 = props.modelValue) !== null && _props$modelValue9 !== void 0 && _props$modelValue9.category) {
              var _props$modelValue$cat, _props$modelValue10, _props$modelValue10$c;
              valueBuilder.addTextValue("Category", (_props$modelValue$cat = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : (_props$modelValue10$c = _props$modelValue10.category) === null || _props$modelValue10$c === void 0 ? void 0 : _props$modelValue10$c.text) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : "");
            }
            if (((_props$modelValue11 = props.modelValue) === null || _props$modelValue11 === void 0 ? void 0 : _props$modelValue11.checkInStartOffsetMinutes) !== null && ((_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.checkInStartOffsetMinutes) !== undefined) {
              var _props$modelValue13;
              valueBuilder.addTextValue("Check-in Starts", "".concat((_props$modelValue13 = props.modelValue) === null || _props$modelValue13 === void 0 ? void 0 : _props$modelValue13.checkInStartOffsetMinutes, " minutes before start of schedule"));
            }
            if (((_props$modelValue14 = props.modelValue) === null || _props$modelValue14 === void 0 ? void 0 : _props$modelValue14.checkInEndOffsetMinutes) !== null && ((_props$modelValue15 = props.modelValue) === null || _props$modelValue15 === void 0 ? void 0 : _props$modelValue15.checkInEndOffsetMinutes) !== undefined) {
              var _props$modelValue16;
              valueBuilder.addTextValue("Check-in Ends", "".concat((_props$modelValue16 = props.modelValue) === null || _props$modelValue16 === void 0 ? void 0 : _props$modelValue16.checkInEndOffsetMinutes, " minutes after start of schedule"));
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
          return (_ctx, _cache) => {
            var _ctx$$props$options$e, _ctx$$props$options$e2;
            return openBlock(), createElementBlock(Fragment, null, [((_ctx$$props$options$e = (_ctx$$props$options$e2 = _ctx.$props.options.exclusions) === null || _ctx$$props$options$e2 === void 0 ? void 0 : _ctx$$props$options$e2.length) !== null && _ctx$$props$options$e !== void 0 ? _ctx$$props$options$e : 0) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1, _hoisted_2, _hoisted_3, createElementVNode("span", _hoisted_4, [_hoisted_5, createElementVNode("p", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$props.options.exclusions, exclusion => {
                var _unref$parseISO, _exclusion$startDate, _unref$parseISO2, _exclusion$endDate;
                return openBlock(), createElementBlock(Fragment, null, [createElementVNode("strong", null, toDisplayString(exclusion.title), 1), createTextVNode(": " + toDisplayString((_unref$parseISO = unref(RockDateTime).parseISO((_exclusion$startDate = exclusion.startDate) !== null && _exclusion$startDate !== void 0 ? _exclusion$startDate : "")) === null || _unref$parseISO === void 0 ? void 0 : _unref$parseISO.toASPString("d")) + " - " + toDisplayString((_unref$parseISO2 = unref(RockDateTime).parseISO((_exclusion$endDate = exclusion.endDate) !== null && _exclusion$endDate !== void 0 ? _exclusion$endDate : "")) === null || _unref$parseISO2 === void 0 ? void 0 : _unref$parseISO2.toASPString("d")) + " ", 1), _hoisted_6], 64);
              }), 256))])])]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])])], 64);
          };
        }
      });

      script$1.__file = "src/Core/ScheduleDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["CancelLink"] = "CancelLink";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'scheduleDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var reloadBlock = useReloadBlock();
          var blockError = ref("");
          var errorMessage = ref("");
          var scheduleViewBag = ref(config.entity);
          var scheduleEditBag = ref({});
          var entityTypeGuid = EntityType.Schedule;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "abbreviatedName", "autoInactivateWhenComplete", "category", "checkInEndOffsetMinutes", "checkInStartOffsetMinutes", "description", "effectiveEndDate", "effectiveStartDate", "friendlyScheduleText", "iCalendarContent", "isActive", "isPublic", "name"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(scheduleEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _scheduleViewBag$valu, _scheduleViewBag$valu2;
            return (_scheduleViewBag$valu = (_scheduleViewBag$valu2 = scheduleViewBag.value) === null || _scheduleViewBag$valu2 === void 0 ? void 0 : _scheduleViewBag$valu2.name) !== null && _scheduleViewBag$valu !== void 0 ? _scheduleViewBag$valu : "";
          });
          var entityKey = computed(() => {
            var _scheduleViewBag$valu3, _scheduleViewBag$valu4;
            return (_scheduleViewBag$valu3 = (_scheduleViewBag$valu4 = scheduleViewBag.value) === null || _scheduleViewBag$valu4 === void 0 ? void 0 : _scheduleViewBag$valu4.idKey) !== null && _scheduleViewBag$valu3 !== void 0 ? _scheduleViewBag$valu3 : "";
          });
          var blockLabels = computed(() => {
            var _scheduleViewBag$valu5, _scheduleViewBag$valu6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_scheduleViewBag$valu5 = scheduleViewBag.value) === null || _scheduleViewBag$valu5 === void 0 ? void 0 : _scheduleViewBag$valu5.isActive) === true) {
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
            if ((_scheduleViewBag$valu6 = scheduleViewBag.value) !== null && _scheduleViewBag$valu6 !== void 0 && _scheduleViewBag$valu6.autoInactivateWhenComplete) {
              labels.push({
                title: "Will Close When Complete",
                type: "danger"
              });
            }
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var isDeleteable = computed(() => {
            var _config$options$canDe, _config$options;
            return ((_config$options$canDe = (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.canDelete) !== null && _config$options$canDe !== void 0 ? _config$options$canDe : false) && isEditable.value;
          });
          var options = computed(() => {
            var _config$options2;
            return (_config$options2 = config.options) !== null && _config$options2 !== void 0 ? _config$options2 : {
              canDelete: false,
              hasAttendance: false,
              hasScheduleWarning: false
            };
          });
          var additionalDeleteMessage = computed(() => {
            var _config$options3;
            return (_config$options3 = config.options) !== null && _config$options3 !== void 0 && _config$options3.hasAttendance ? "This schedule has attendance history. If you delete this, the attendance history will no longer be associated with the schedule." : "";
          });
          var footerActions = computed(() => {
            if (panelMode.value !== DetailPanelMode.View || !isEditable.value) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-clone",
              title: "Copy Schedule",
              type: "default",
              handler: onCopy
            }];
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _scheduleEditBag$valu;
              if (!((_scheduleEditBag$valu = scheduleEditBag.value) !== null && _scheduleEditBag$valu !== void 0 && _scheduleEditBag$valu.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.CancelLink]) {
                  return config.navigationUrls[NavigationUrlKey.CancelLink];
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
              var _scheduleViewBag$valu7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_scheduleViewBag$valu7 = scheduleViewBag.value) === null || _scheduleViewBag$valu7 === void 0 ? void 0 : _scheduleViewBag$valu7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete schedule.";
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
              var _scheduleViewBag$valu8;
              var result = yield invokeBlockAction("Edit", {
                key: (_scheduleViewBag$valu8 = scheduleViewBag.value) === null || _scheduleViewBag$valu8 === void 0 ? void 0 : _scheduleViewBag$valu8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                scheduleEditBag.value = result.data.entity;
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
                entity: scheduleEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  scheduleViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save schedule.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          function onCopy() {
            return _onCopy.apply(this, arguments);
          }
          function _onCopy() {
            _onCopy = _asyncToGenerator(function* () {
              var _scheduleViewBag$valu9, _scheduleViewBag$valu10, _result$errorMessage3;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Copy", {
                key: (_scheduleViewBag$valu9 = (_scheduleViewBag$valu10 = scheduleViewBag.value) === null || _scheduleViewBag$valu10 === void 0 ? void 0 : _scheduleViewBag$valu10.idKey) !== null && _scheduleViewBag$valu9 !== void 0 ? _scheduleViewBag$valu9 : ""
              });
              if (result.isSuccess && result.data && typeof result.data === "string") {
                window.location.href = makeUrlRedirectSafe(result.data);
                return;
              }
              errorMessage.value = (_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to copy schedule.";
            });
            return _onCopy.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          onConfigurationValuesChanged(reloadBlock);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (config.entity && !config.entity.idKey) {
            scheduleEditBag.value = config.entity;
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
            })) : createCommentVNode("v-if", true), !blockError.value && unref(config).entity ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "Schedule",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isDeleteable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              footerSecondaryActions: unref(footerActions),
              additionalDeleteMessage: unref(additionalDeleteMessage),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: scheduleViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: scheduleEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => scheduleEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "footerSecondaryActions", "additionalDeleteMessage"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/scheduleDetail.obs";

    })
  };
}));
//# sourceMappingURL=scheduleDetail.obs.js.map
