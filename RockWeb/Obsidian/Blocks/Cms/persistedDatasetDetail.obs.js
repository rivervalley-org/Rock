System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/lavaCommandPicker.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Utility/component', '@Obsidian/Controls/switch.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/scheduleBuilder.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, createCommentVNode, createVNode, isRef, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, CheckBox, TextBox, CodeEditor, EntityTypePicker, LavaCommandPicker, NumberBox, DatePicker, propertyRef, updateRefValue, Switch, Panel, RadioButtonList, ButtonGroup, DropDownList, RangeSlider, ScheduleBuilder, ValueDetailList, ValueDetailListItemBuilder, RockDateTime, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, provideSecurityGrant;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      isRef = module.isRef;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      LavaCommandPicker = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      Switch = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      ButtonGroup = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RangeSlider = module["default"];
    }, function (module) {
      ScheduleBuilder = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      provideSecurityGrant = module.provideSecurityGrant;
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

      var _withScopeId = n => (pushScopeId("data-v-926f4da6"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = _withScopeId(() => createElementVNode("span", null, [createElementVNode("strong", null, "Note: "), createTextVNode("Because this dataset is used by Rock, editing is not enabled. ")], -1));
      var _hoisted_2$1 = {
        class: "row"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        key: 0,
        class: "panel-body bottom-border"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-xs-12 col-md-3"
      };
      var _hoisted_8 = {
        class: "col-xs-12 col-md-9"
      };
      var _hoisted_9 = {
        class: "sliderButtons"
      };
      var _hoisted_10 = {
        class: "col-xs-12 col-md-3"
      };
      var _hoisted_11 = {
        key: 0,
        class: "col-xs-12 col-md-6"
      };
      var _hoisted_12 = {
        key: 1,
        class: "col-xs-12 col-md-6"
      };
      var _hoisted_13 = {
        class: "row"
      };
      var _hoisted_14 = {
        class: "col-md-2"
      };
      var _hoisted_15 = _withScopeId(() => createElementVNode("span", {
        class: "input-group-addon"
      }, "hour(s)", -1));
      var _hoisted_16 = {
        class: "col-md-2 col-md-offset-4"
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
          var _ref2, _ref3, _ref4, _ref5, _props$modelValue$per, _props$modelValue$per2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$acc, _props$modelValue$bui, _props$modelValue$ent, _props$modelValue$ena, _props$modelValue$all, _props$modelValue$exp, _props$modelValue$ref, _props$modelValue$per3, _props$modelValue$per4, _props$modelValue$per5;
          var emit = _ref.emit;
          var props = __props;
          var typeOfPersistence = ref((_ref2 = props.modelValue.persistenceType) !== null && _ref2 !== void 0 ? _ref2 : "");
          var typeOfSchedule = ref((_ref3 = props.modelValue.persistedScheduleType) !== null && _ref3 !== void 0 ? _ref3 : "Unique");
          var typeOfInterval = ref((_ref4 = props.modelValue.persistedScheduleIntervalType) !== null && _ref4 !== void 0 ? _ref4 : "Hours");
          var intervalMinutes = ref((_ref5 = props.modelValue.refreshInterval) !== null && _ref5 !== void 0 ? _ref5 : 12);
          var isPersistenceEnabled = ref(props.modelValue.persistenceType !== null);
          var selectedNamedSchedule = ref((_props$modelValue$per = (_props$modelValue$per2 = props.modelValue.persistedScheduleId) === null || _props$modelValue$per2 === void 0 ? void 0 : _props$modelValue$per2.toString()) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : "");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var accessKey = propertyRef((_props$modelValue$acc = props.modelValue.accessKey) !== null && _props$modelValue$acc !== void 0 ? _props$modelValue$acc : "", "AccessKey");
          var buildScript = propertyRef((_props$modelValue$bui = props.modelValue.buildScript) !== null && _props$modelValue$bui !== void 0 ? _props$modelValue$bui : "", "BuildScript");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var enabledLavaCommands = ref((_props$modelValue$ena = props.modelValue.enabledLavaCommands) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : [{
            value: "All",
            text: "All"
          }]);
          var allowManualRefresh = propertyRef((_props$modelValue$all = props.modelValue.allowManualRefresh) !== null && _props$modelValue$all !== void 0 ? _props$modelValue$all : false, "AllowManualRefresh");
          var refreshInterval = propertyRef(props.modelValue.refreshIntervalHours, "RefreshIntervalMinutes");
          var memoryCacheDuration = propertyRef(props.modelValue.memoryCacheDurationHours, "MemoryCacheDurationMS");
          var expiresOn = propertyRef((_props$modelValue$exp = props.modelValue.expireDateTime) !== null && _props$modelValue$exp !== void 0 ? _props$modelValue$exp : "", "ExpireDateTime");
          var refreshIntervalMinutes = propertyRef((_props$modelValue$ref = props.modelValue.refreshInterval) !== null && _props$modelValue$ref !== void 0 ? _props$modelValue$ref : 1, "RefreshInterval");
          var persistedSchedule = propertyRef((_props$modelValue$per3 = props.modelValue.persistedSchedule) !== null && _props$modelValue$per3 !== void 0 ? _props$modelValue$per3 : "", "PersistedSchedule");
          var persistenceIntervalType = propertyRef((_props$modelValue$per4 = props.modelValue.persistedScheduleIntervalType) !== null && _props$modelValue$per4 !== void 0 ? _props$modelValue$per4 : "", "PersistedScheduleIntervalType");
          var persistedScheduleType = propertyRef((_props$modelValue$per5 = props.modelValue.persistedScheduleType) !== null && _props$modelValue$per5 !== void 0 ? _props$modelValue$per5 : "", "PersistedScheduleType");
          var persistenceType = propertyRef(typeOfPersistence === null || typeOfPersistence === void 0 ? void 0 : typeOfPersistence.value, "PersistenceType");
          var propRefs = [description, isActive, name, accessKey, buildScript, entityType, enabledLavaCommands, allowManualRefresh, refreshInterval, memoryCacheDuration, expiresOn, refreshIntervalMinutes, persistedSchedule, persistenceType, persistedScheduleType, persistenceIntervalType];
          var persistenceTypeOptions = [{
            value: "Interval",
            text: "Interval"
          }, {
            value: "Schedule",
            text: "Schedule"
          }];
          var scheduleTypeOptions = [{
            value: "Unique",
            text: "Unique"
          }, {
            value: "NamedSchedule",
            text: "Named Schedule"
          }];
          var namedSchedules = computed(() => {
            var _props$modelValue$nam2;
            return (_props$modelValue$nam2 = props.modelValue.namedSchedules) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : [];
          });
          var intervalTypeOptions = [{
            value: "Mins",
            text: "Mins"
          }, {
            value: "Hours",
            text: "Hours"
          }, {
            value: "Days",
            text: "Days"
          }];
          var intervalMin = computed(() => {
            switch (typeOfInterval.value) {
              case "Mins":
                return 1;
              case "Hours":
                return 1;
              case "Days":
                return 1;
            }
          });
          var intervalMax = computed(() => {
            switch (typeOfInterval.value) {
              case "Mins":
                return 59;
              case "Hours":
                return 23;
              case "Days":
                return 31;
            }
          });
          var intervalStep = computed(() => {
            switch (typeOfInterval.value) {
              case "Mins":
                return 1;
              case "Hours":
                return 1;
              case "Days":
                return 1;
            }
          });
          var isSystem = computed(() => {
            var _props$modelValue$isS;
            return (_props$modelValue$isS = props.modelValue.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
          function handlePersistenceToggle() {
            if (!isPersistenceEnabled.value) {
              typeOfPersistence.value = "";
              typeOfSchedule.value = "Unique";
              intervalMinutes.value = 12;
              persistedSchedule.value = "";
              selectedNamedSchedule.value = "";
              refreshIntervalMinutes.value = 1;
            }
            emitUpdate();
          }
          function handleScheduleData(scheduleData) {
            persistedSchedule.value = scheduleData;
            emitUpdate();
          }
          function emitUpdate() {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              accessKey: accessKey.value,
              buildScript: buildScript.value,
              entityType: entityType.value,
              enabledLavaCommands: enabledLavaCommands.value,
              allowManualRefresh: allowManualRefresh.value,
              refreshIntervalHours: refreshInterval.value,
              memoryCacheDurationHours: memoryCacheDuration.value,
              expireDateTime: expiresOn.value,
              persistedScheduleIntervalType: typeOfInterval.value,
              persistenceType: isPersistenceEnabled.value ? persistenceType.value : null,
              persistedScheduleType: isPersistenceEnabled.value ? persistedScheduleType.value : null,
              refreshInterval: isPersistenceEnabled.value && typeOfPersistence.value === "Interval" ? intervalMinutes.value : null,
              persistedSchedule: isPersistenceEnabled.value && typeOfPersistence.value === "Schedule" ? persistedSchedule.value : null,
              persistedScheduleId: isPersistenceEnabled.value && typeOfPersistence.value === "Schedule" && selectedNamedSchedule.value ? parseInt(selectedNamedSchedule.value) : null
            });
            emit("update:modelValue", newValue);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam3, _props$modelValue$acc2, _props$modelValue$bui2, _props$modelValue$ent2, _props$modelValue$ena2, _props$modelValue$all2, _props$modelValue$exp2, _props$modelValue$ref2, _props$modelValue$per6;
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam3 = props.modelValue.name) !== null && _props$modelValue$nam3 !== void 0 ? _props$modelValue$nam3 : "");
            updateRefValue(accessKey, (_props$modelValue$acc2 = props.modelValue.accessKey) !== null && _props$modelValue$acc2 !== void 0 ? _props$modelValue$acc2 : "");
            updateRefValue(buildScript, (_props$modelValue$bui2 = props.modelValue.buildScript) !== null && _props$modelValue$bui2 !== void 0 ? _props$modelValue$bui2 : "");
            updateRefValue(entityType, (_props$modelValue$ent2 = props.modelValue.entityType) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : {});
            updateRefValue(enabledLavaCommands, (_props$modelValue$ena2 = props.modelValue.enabledLavaCommands) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : []);
            updateRefValue(allowManualRefresh, (_props$modelValue$all2 = props.modelValue.allowManualRefresh) !== null && _props$modelValue$all2 !== void 0 ? _props$modelValue$all2 : false);
            updateRefValue(refreshInterval, props.modelValue.refreshIntervalHours);
            updateRefValue(memoryCacheDuration, props.modelValue.memoryCacheDurationHours);
            updateRefValue(expiresOn, (_props$modelValue$exp2 = props.modelValue.expireDateTime) !== null && _props$modelValue$exp2 !== void 0 ? _props$modelValue$exp2 : "");
            updateRefValue(refreshIntervalMinutes, (_props$modelValue$ref2 = props.modelValue.refreshInterval) !== null && _props$modelValue$ref2 !== void 0 ? _props$modelValue$ref2 : 1);
            updateRefValue(persistedSchedule, (_props$modelValue$per6 = props.modelValue.persistedSchedule) !== null && _props$modelValue$per6 !== void 0 ? _props$modelValue$per6 : "");
            updateRefValue(persistenceType, props.modelValue.refreshInterval != null ? "Interval" : "Schedule");
            updateRefValue(persistedScheduleType, props.modelValue.refreshInterval != null ? "Unique" : "NamedSchedule");
          });
          watch([...propRefs, selectedNamedSchedule], emitUpdate);
          watch(() => isPersistenceEnabled.value, handlePersistenceToggle);
          watch(() => intervalMinutes.value, () => {
            if (typeOfPersistence.value === "Interval") {
              refreshIntervalMinutes.value = intervalMinutes.value;
              emitUpdate();
            }
          });
          watch(() => typeOfInterval.value, () => {
            emitUpdate();
          });
          emitUpdate();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(isSystem) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1$1]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("fieldset", null, [createElementVNode("div", _hoisted_2$1, [createElementVNode("div", _hoisted_3$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required",
              disabled: unref(isSystem)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(accessKey),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(accessKey) ? accessKey.value = $event : null),
              label: "Access Key",
              rules: "required",
              disabled: unref(isSystem),
              help: "The key to use to uniquely identify this dataset. This will be the key to use when using the PersistedDataset lava filter."
            }, null, 8, ["modelValue", "disabled"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isActive) ? isActive.value = $event : null),
              help: "Set this to false to have the PersistedDataset lava filter return null for this dataset, and to exclude this dataset when rebuilding.",
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline",
              disabled: unref(isSystem)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(CodeEditor), {
              modelValue: unref(buildScript),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(buildScript) ? buildScript.value = $event : null),
              label: "Build Script",
              help: "Lava Template to use for building JSON that will be used as the cached dataset object.",
              theme: "rock",
              mode: "lava",
              editorHeight: 200,
              disabled: unref(isSystem)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(LavaCommandPicker), {
              modelValue: enabledLavaCommands.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => enabledLavaCommands.value = $event),
              multiple: true,
              label: "Enabled Lava Commands",
              disabled: unref(isSystem)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(Panel), {
              title: "Persistence Schedule"
            }, {
              default: withCtx(() => [createElementVNode("div", null, [createCommentVNode(" Toggle Switch for Persistence Schedule "), createVNode(unref(Switch), {
                modelValue: isPersistenceEnabled.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isPersistenceEnabled.value = $event),
                text: "Persistence Schedule"
              }, null, 8, ["modelValue"])]), createCommentVNode(" Persistence Schedule Settings "), isPersistenceEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createCommentVNode(" Type Selection: Interval or Schedule "), createElementVNode("div", _hoisted_7, [createVNode(unref(RadioButtonList), {
                modelValue: typeOfPersistence.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => typeOfPersistence.value = $event),
                items: persistenceTypeOptions,
                label: "Type"
              }, null, 8, ["modelValue"])]), createCommentVNode(" Conditional Display Logic "), typeOfPersistence.value === 'Interval' ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createCommentVNode(" Interval Picker "), createElementVNode("div", _hoisted_8, [createVNode(unref(RangeSlider), {
                modelValue: intervalMinutes.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => intervalMinutes.value = $event),
                label: "Persistence Interval",
                min: unref(intervalMin),
                max: unref(intervalMax),
                step: unref(intervalStep),
                showValueBar: true,
                columnCount: 2
              }, null, 8, ["modelValue", "min", "max", "step"]), createElementVNode("div", _hoisted_9, [createVNode(unref(ButtonGroup), {
                modelValue: typeOfInterval.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => typeOfInterval.value = $event),
                items: intervalTypeOptions,
                btnSize: "xs"
              }, null, 8, ["modelValue"])])])], 64)) : createCommentVNode("v-if", true), typeOfPersistence.value === 'Schedule' ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createCommentVNode(" Schedule Type Selection: Unique or Named "), createElementVNode("div", _hoisted_10, [createVNode(unref(RadioButtonList), {
                modelValue: typeOfSchedule.value,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => typeOfSchedule.value = $event),
                items: scheduleTypeOptions,
                label: "Persistence Schedule"
              }, null, 8, ["modelValue"])]), typeOfSchedule.value === 'Unique' ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(ScheduleBuilder), {
                label: "Unique",
                modelValue: unref(persistedSchedule),
                "onUpdate:modelValue": [_cache[11] || (_cache[11] = $event => isRef(persistedSchedule) ? persistedSchedule.value = $event : null), handleScheduleData]
              }, null, 8, ["modelValue"])])) : (openBlock(), createElementBlock("div", _hoisted_12, [createVNode(unref(DropDownList), {
                modelValue: selectedNamedSchedule.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => selectedNamedSchedule.value = $event),
                items: unref(namedSchedules),
                label: "Named"
              }, null, 8, ["modelValue", "items"])]))], 64)) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createElementVNode("div", _hoisted_13, [createElementVNode("div", _hoisted_14, [createVNode(unref(NumberBox), {
              modelValue: unref(memoryCacheDuration),
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isRef(memoryCacheDuration) ? memoryCacheDuration.value = $event : null),
              label: "Memory Cache Duration",
              help: "How long the persisted object should be cached in memory. This is a sliding timeline, so each time the object is read the counter will reset. Leave blank to not cache the object in memory which will mean it will be deserialized into the object on each request (still fast).",
              decimalCount: 0
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_15]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(DatePicker), {
              modelValue: unref(expiresOn),
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isRef(expiresOn) ? expiresOn.value = $event : null),
              label: "Expires on",
              help: "Set this to consider the dataset inactive after the specified date. This will mean that its value is no longer updated by the refresh job and that it will return empty when requested through Lava.",
              displayCurrentOption: false,
              isCurrentDateOffset: false
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_16, [createVNode(unref(EntityTypePicker), {
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isRef(entityType) ? entityType.value = $event : null),
              label: "Entity Type",
              help: "Set this to indicate which EntityType the JSON object should be associated with. This will be used by the PersistedDataset Lava Filter when entity related options such as 'AppendFollowing' are specified.'",
              multiple: false,
              includeGlobalOption: false,
              disabled: unref(isSystem)
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(CheckBox), {
              modelValue: unref(allowManualRefresh),
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => isRef(allowManualRefresh) ? allowManualRefresh.value = $event : null),
              help: "Determines if the persisted dataset can be manually refreshed in the Persisted Dataset list.",
              label: "Allow Manual Refresh"
            }, null, 8, ["modelValue"])])])])], 64);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".sliderButtons[data-v-926f4da6]{align-items:center;display:flex;justify-content:flex-end;margin-top:10px}";
      styleInject(css_248z);

      script$2.__scopeId = "data-v-926f4da6";
      script$2.__file = "src/Cms/PersistedDatasetDetail/editPanel.partial.obs";

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
          var props = __props;
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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Dataset Name", props.modelValue.name);
            }
            if (props.modelValue.accessKey) {
              valueBuilder.addTextValue("Access Key", props.modelValue.accessKey);
            }
            if (props.modelValue.enabledLavaCommands) {
              valueBuilder.addTextValue("Enabled Lava Commands", props.modelValue.enabledLavaCommands.map(c => c.text).join(", "));
            }
            if (props.modelValue.refreshIntervalHours && !props.modelValue.refreshInterval) {
              valueBuilder.addTextValue("Refresh Interval", "".concat(props.modelValue.refreshIntervalHours, " hour(s)"));
            }
            if (props.modelValue.memoryCacheDurationHours) {
              valueBuilder.addTextValue("Memory Cache", "".concat(props.modelValue.memoryCacheDurationHours, " hour(s)"));
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$ent;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.expireDateTime) {
              var date = RockDateTime.parseISO(props.modelValue.expireDateTime);
              if (date) {
                valueBuilder.addTextValue("Expires On", date.toString());
              }
            }
            if ((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 && _props$modelValue$ent.text) {
              valueBuilder.addTextValue("Entity Type", props.modelValue.entityType.text);
            }
            if (props.modelValue.persistedScheduleId) {
              valueBuilder.addTextValue("Schedule ID", props.modelValue.persistedScheduleId.toString());
            }
            if (props.modelValue.persistedSchedule) {
              var _props$modelValue$fri;
              valueBuilder.addTextValue("Persisted Schedule", (_props$modelValue$fri = props.modelValue.friendlyScheduleText) !== null && _props$modelValue$fri !== void 0 ? _props$modelValue$fri : "Schedule not available");
            }
            if (props.modelValue.refreshInterval) {
              var intervalValue = props.modelValue.refreshInterval;
              var intervalType = props.modelValue.persistedScheduleIntervalType;
              if (intervalValue >= 1440) {
                intervalType = "Days";
                intervalValue /= 1440;
              } else if (intervalValue >= 60) {
                intervalType = "Hours";
                intervalValue /= 60;
              }
              valueBuilder.addTextValue("Persistence Interval", "Every ".concat(intervalValue, " ").concat(intervalType));
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
            }, null, 8, ["modelValue"])])])]);
          };
        }
      });

      script$1.__file = "src/Cms/PersistedDatasetDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'persistedDatasetDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var persistedDatasetViewBag = ref(config.entity);
          var persistedDatasetEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["accessKey", "allowManualRefresh", "buildScript", "description", "enabledLavaCommands", "entityType", "expireDateTime", "isActive", "memoryCacheDurationHours", "name", "refreshIntervalHours", "persistedScheduleId", "refreshInterval", "persistedScheduleIntervalType", "persistedScheduleType", "persistedSchedule"];
          var panelName = computed(() => {
            var _persistedDatasetView, _persistedDatasetView2;
            return (_persistedDatasetView = (_persistedDatasetView2 = persistedDatasetViewBag.value) === null || _persistedDatasetView2 === void 0 ? void 0 : _persistedDatasetView2.name) !== null && _persistedDatasetView !== void 0 ? _persistedDatasetView : "";
          });
          var entityKey = computed(() => {
            var _persistedDatasetView3, _persistedDatasetView4;
            return (_persistedDatasetView3 = (_persistedDatasetView4 = persistedDatasetViewBag.value) === null || _persistedDatasetView4 === void 0 ? void 0 : _persistedDatasetView4.idKey) !== null && _persistedDatasetView3 !== void 0 ? _persistedDatasetView3 : "";
          });
          var timeToBuildLabelType = computed(() => {
            var _persistedDatasetView5;
            if ((_persistedDatasetView5 = persistedDatasetViewBag.value) !== null && _persistedDatasetView5 !== void 0 && _persistedDatasetView5.timeToBuildMS) {
              if (persistedDatasetViewBag.value.timeToBuildMS < 400) {
                return "success";
              } else if (persistedDatasetViewBag.value.timeToBuildMS < 1000) {
                return "warning";
              } else {
                return "danger";
              }
            }
            return "info";
          });
          var blockLabels = computed(() => {
            var _persistedDatasetView6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_persistedDatasetView6 = persistedDatasetViewBag.value) === null || _persistedDatasetView6 === void 0 ? void 0 : _persistedDatasetView6.isActive) === true) {
              var _RockDateTime$parseIS;
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Active",
                type: "success"
              });
              var lastRefreshLabel = persistedDatasetViewBag.value.lastRefreshDateTime ? (_RockDateTime$parseIS = RockDateTime.parseISO(persistedDatasetViewBag.value.lastRefreshDateTime)) === null || _RockDateTime$parseIS === void 0 ? void 0 : _RockDateTime$parseIS.toString() : "Never";
              labels.push({
                iconCssClass: "fa fa-refresh",
                title: "Not Run Since: ".concat(lastRefreshLabel),
                type: "warning"
              });
              var timeToRunLabel = persistedDatasetViewBag.value.timeToBuildMS ? "".concat(persistedDatasetViewBag.value.timeToBuildMS.toString(), "ms") : "Never";
              labels.push({
                iconCssClass: "fa fa-clock",
                title: "Time To Run: ".concat(timeToRunLabel),
                type: timeToBuildLabelType.value
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _persistedDatasetEdit;
              if (!((_persistedDatasetEdit = persistedDatasetEditBag.value) !== null && _persistedDatasetEdit !== void 0 && _persistedDatasetEdit.idKey)) {
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
              var _persistedDatasetView7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_persistedDatasetView7 = persistedDatasetViewBag.value) === null || _persistedDatasetView7 === void 0 ? void 0 : _persistedDatasetView7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete persisted dataset.";
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
              var _persistedDatasetView8;
              var result = yield invokeBlockAction("Edit", {
                key: (_persistedDatasetView8 = persistedDatasetViewBag.value) === null || _persistedDatasetView8 === void 0 ? void 0 : _persistedDatasetView8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                persistedDatasetEditBag.value = result.data.entity;
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
              var _persistedDatasetEdit2, _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: persistedDatasetEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var scheduleData = {
                iCalendarContent: (_persistedDatasetEdit2 = persistedDatasetEditBag.value) === null || _persistedDatasetEdit2 === void 0 ? void 0 : _persistedDatasetEdit2.persistedSchedule,
                autoInactivateWhenComplete: false,
                isActive: true
              };
              var result = yield invokeBlockAction("Save", {
                box: data,
                scheduleBag: scheduleData
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  persistedDatasetEditBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save persisted dataset.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified persisted dataset could not be viewed.";
          } else if (!config.entity.idKey) {
            persistedDatasetEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              textContent: toDisplayString(blockError.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              textContent: toDisplayString(errorMessage.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(EntityType).PersistedDataset,
              entityTypeName: "PersistedDataset",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: persistedDatasetViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: persistedDatasetEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => persistedDatasetEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/persistedDatasetDetail.obs";

    })
  };
}));
//# sourceMappingURL=persistedDatasetDetail.obs.js.map
