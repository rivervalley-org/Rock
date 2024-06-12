System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/imageUploader.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/SystemGuids/definedType', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, toDisplayString, createCommentVNode, Fragment, renderList, withModifiers, withCtx, createBlock, computed, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, Modal, RockButton, RockForm, Panel, CheckBoxList, ImageUploader, DefinedValuePicker, AttributeEditor, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, BtnType, BtnSize, DefinedType, toGuidOrNull, areEqual, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withModifiers = module.withModifiers;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      computed = module.computed;
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
      Modal = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      ImageUploader = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      AttributeEditor = module["default"];
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
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
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
      var _hoisted_4 = {
        class: "col-md-3"
      };
      var _hoisted_5 = {
        key: 0,
        class: "small"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = {
        class: "table-responsive"
      };
      var _hoisted_9 = {
        class: "grid-table table table-striped table-hover"
      };
      var _hoisted_10 = createElementVNode("thead", null, [createElementVNode("tr", {
        align: "left"
      }, [createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Audiences"), createElementVNode("th", {
        class: "grid-columncommand",
        "data-priority": "1",
        scope: "col"
      }, " ")])], -1);
      var _hoisted_11 = {
        align: "left"
      };
      var _hoisted_12 = {
        "data-priority": "1"
      };
      var _hoisted_13 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-times fa-fw"
      }, null, -1);
      var _hoisted_15 = {
        key: 1
      };
      var _hoisted_16 = createElementVNode("hr", null, null, -1);
      var _hoisted_17 = createTextVNode(" No Audiences Found ");
      var _hoisted_18 = createElementVNode("hr", null, null, -1);
      var _hoisted_19 = [_hoisted_16, _hoisted_17, _hoisted_18];
      var _hoisted_20 = {
        class: "grid-actions border-panel"
      };
      var _hoisted_21 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_22 = {
        class: "col-md-6"
      };
      var _hoisted_23 = {
        class: "table-responsive"
      };
      var _hoisted_24 = {
        class: "grid-table table table-striped table-hover"
      };
      var _hoisted_25 = createElementVNode("thead", null, [createElementVNode("tr", {
        align: "left"
      }, [createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Attribute"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Description"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Field Type"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Required"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Show in Grid"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Allow Search"), createElementVNode("th", {
        class: "grid-columncommand",
        "data-priority": "1",
        scope: "col"
      }, " ")])], -1);
      var _hoisted_26 = {
        align: "left"
      };
      var _hoisted_27 = {
        "data-priority": "1"
      };
      var _hoisted_28 = {
        "data-priority": "1"
      };
      var _hoisted_29 = {
        "data-priority": "1"
      };
      var _hoisted_30 = ["innerHTML"];
      var _hoisted_31 = ["innerHTML"];
      var _hoisted_32 = ["innerHTML"];
      var _hoisted_33 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_34 = createElementVNode("i", {
        class: "fa fa-pencil fa-fw"
      }, null, -1);
      var _hoisted_35 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_36 = createElementVNode("i", {
        class: "fa fa-times fa-fw"
      }, null, -1);
      var _hoisted_37 = {
        key: 1
      };
      var _hoisted_38 = createElementVNode("hr", null, null, -1);
      var _hoisted_39 = createTextVNode(" No Attributes Found ");
      var _hoisted_40 = createElementVNode("hr", null, null, -1);
      var _hoisted_41 = [_hoisted_38, _hoisted_39, _hoisted_40];
      var _hoisted_42 = {
        class: "grid-actions border-panel"
      };
      var _hoisted_43 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_44 = createTextVNode("Save");
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$sum, _props$modelValue$det, _props$modelValue$isA2, _props$modelValue$pho, _props$modelValue$eve, _props$modelValue$aud, _props$modelValue$ava, _props$modelValue$cal, _props$modelValue$eve2, _props$modelValue$app;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var summary = propertyRef((_props$modelValue$sum = props.modelValue.summary) !== null && _props$modelValue$sum !== void 0 ? _props$modelValue$sum : "", "Summary");
          var detailsUrl = propertyRef((_props$modelValue$det = props.modelValue.detailsUrl) !== null && _props$modelValue$det !== void 0 ? _props$modelValue$det : "", "DetailsUrl");
          var isApproved = propertyRef((_props$modelValue$isA2 = props.modelValue.isApproved) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false, "IsApproved");
          var photo = propertyRef((_props$modelValue$pho = props.modelValue.photo) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : {}, "PhotoId");
          var eventOccurenceAttributes = ref((_props$modelValue$eve = props.modelValue.eventOccurenceAttributes) !== null && _props$modelValue$eve !== void 0 ? _props$modelValue$eve : []);
          var isAttributeModalOpen = ref(false);
          var submitEditAttribute = ref(false);
          var eventAttribute = ref(null);
          var reservedKeyNames = ref([]);
          var isAudienceModalOpen = ref(false);
          var audiences = ref((_props$modelValue$aud = props.modelValue.audiences) !== null && _props$modelValue$aud !== void 0 ? _props$modelValue$aud : []);
          var audience = ref({});
          var availableCalendars = ref((_props$modelValue$ava = props.modelValue.availableCalendars) !== null && _props$modelValue$ava !== void 0 ? _props$modelValue$ava : []);
          var calendars = ref((_props$modelValue$cal = props.modelValue.calendars) !== null && _props$modelValue$cal !== void 0 ? _props$modelValue$cal : []);
          var eventItemAttributes = ref((_props$modelValue$eve2 = props.modelValue.eventCalendarItemAttributes) !== null && _props$modelValue$eve2 !== void 0 ? _props$modelValue$eve2 : []);
          var approvalText = ref((_props$modelValue$app = props.modelValue.approvalText) !== null && _props$modelValue$app !== void 0 ? _props$modelValue$app : "");
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, isActive, name, summary, isApproved, detailsUrl, photo];
          var getCheckMark = booleanValue => {
            return booleanValue ? "<i class='fa fa-check'></i>" : "";
          };
          var onSaveAudience = () => {
            var _audience$value;
            isAudienceModalOpen.value = false;
            var audienceValue = (_audience$value = audience.value) === null || _audience$value === void 0 ? void 0 : _audience$value.value;
            if (audienceValue && !audiences.value.some(x => x.value == audienceValue)) {
              audiences.value.push(audience.value);
            }
            audience.value = {};
          };
          var onAddAudience = () => {
            isAudienceModalOpen.value = true;
          };
          var onDeleteAudience = function () {
            var _ref2 = _asyncToGenerator(function* (audience) {
              isAudienceModalOpen.value = false;
              audiences.value = audiences.value.filter(s => s.value !== audience.value);
            });
            return function onDeleteAudience(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var onAddEditAttribute = function () {
            var _ref3 = _asyncToGenerator(function* (attribute) {
              var attributeGuid = toGuidOrNull(attribute === null || attribute === void 0 ? void 0 : attribute.guid);
              if (attribute && (!attributeGuid || areEqual(attributeGuid, emptyGuid))) {
                eventAttribute.value = attribute;
                isAttributeModalOpen.value = true;
              } else {
                var request = {
                  attributeGuid
                };
                var response = yield invokeBlockAction("GetAttribute", request);
                if (response.isSuccess && response.data) {
                  eventAttribute.value = response.data.editableAttribute;
                  isAttributeModalOpen.value = true;
                  reservedKeyNames.value = response.data.reservedKeyNames;
                }
              }
            });
            return function onAddEditAttribute(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          var onDeleteAttribute = function () {
            var _ref4 = _asyncToGenerator(function* (eventAttribute) {
              isAttributeModalOpen.value = false;
              eventOccurenceAttributes.value = eventOccurenceAttributes.value.filter(s => {
                var _s$attribute, _eventAttribute$attri, _s$attribute2, _eventAttribute$attri2;
                return ((_s$attribute = s.attribute) === null || _s$attribute === void 0 ? void 0 : _s$attribute.guid) !== ((_eventAttribute$attri = eventAttribute.attribute) === null || _eventAttribute$attri === void 0 ? void 0 : _eventAttribute$attri.guid) || ((_s$attribute2 = s.attribute) === null || _s$attribute2 === void 0 ? void 0 : _s$attribute2.key) !== ((_eventAttribute$attri2 = eventAttribute.attribute) === null || _eventAttribute$attri2 === void 0 ? void 0 : _eventAttribute$attri2.key);
              });
            });
            return function onDeleteAttribute(_x3) {
              return _ref4.apply(this, arguments);
            };
          }();
          var onSaveEditAttribute = () => {
            if (eventAttribute.value && eventOccurenceAttributes.value) {
              var index = eventOccurenceAttributes.value.findIndex(a => {
                var _a$attribute, _eventAttribute$value, _a$attribute2, _eventAttribute$value2;
                return ((_a$attribute = a.attribute) === null || _a$attribute === void 0 ? void 0 : _a$attribute.guid) === ((_eventAttribute$value = eventAttribute.value) === null || _eventAttribute$value === void 0 ? void 0 : _eventAttribute$value.guid) && ((_a$attribute2 = a.attribute) === null || _a$attribute2 === void 0 ? void 0 : _a$attribute2.key) === ((_eventAttribute$value2 = eventAttribute.value) === null || _eventAttribute$value2 === void 0 ? void 0 : _eventAttribute$value2.key);
              });
              if (index !== -1) {
                var editedAttribute = eventOccurenceAttributes.value.find(a => {
                  var _a$attribute3, _eventAttribute$value3;
                  return ((_a$attribute3 = a.attribute) === null || _a$attribute3 === void 0 ? void 0 : _a$attribute3.guid) == ((_eventAttribute$value3 = eventAttribute.value) === null || _eventAttribute$value3 === void 0 ? void 0 : _eventAttribute$value3.guid);
                });
                if (editedAttribute) {
                  editedAttribute.attribute = eventAttribute.value;
                  eventOccurenceAttributes.value.splice(index, 1, editedAttribute);
                }
              } else {
                var newEventAttribute = {
                  attribute: eventAttribute.value,
                  fieldType: ""
                };
                eventOccurenceAttributes.value.push(newEventAttribute);
              }
              eventAttribute.value = null;
              isAttributeModalOpen.value = false;
            }
          };
          var onStartSaveEditAttribute = () => {
            submitEditAttribute.value = true;
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA3, _props$modelValue$nam2, _props$modelValue$sum2, _props$modelValue$isA4, _props$modelValue$det2, _props$modelValue$pho2, _props$modelValue$aud2, _props$modelValue$cal2, _props$modelValue$eve3;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA3 = props.modelValue.isActive) !== null && _props$modelValue$isA3 !== void 0 ? _props$modelValue$isA3 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(summary, (_props$modelValue$sum2 = props.modelValue.summary) !== null && _props$modelValue$sum2 !== void 0 ? _props$modelValue$sum2 : "");
            updateRefValue(isApproved, (_props$modelValue$isA4 = props.modelValue.isApproved) !== null && _props$modelValue$isA4 !== void 0 ? _props$modelValue$isA4 : false);
            updateRefValue(detailsUrl, (_props$modelValue$det2 = props.modelValue.detailsUrl) !== null && _props$modelValue$det2 !== void 0 ? _props$modelValue$det2 : "");
            updateRefValue(photo, (_props$modelValue$pho2 = props.modelValue.photo) !== null && _props$modelValue$pho2 !== void 0 ? _props$modelValue$pho2 : {});
            updateRefValue(audiences, (_props$modelValue$aud2 = props.modelValue.audiences) !== null && _props$modelValue$aud2 !== void 0 ? _props$modelValue$aud2 : []);
            updateRefValue(calendars, (_props$modelValue$cal2 = props.modelValue.calendars) !== null && _props$modelValue$cal2 !== void 0 ? _props$modelValue$cal2 : []);
            updateRefValue(eventItemAttributes, (_props$modelValue$eve3 = props.modelValue.eventCalendarItemAttributes) !== null && _props$modelValue$eve3 !== void 0 ? _props$modelValue$eve3 : []);
          });
          watch([attributeValues, eventOccurenceAttributes, audiences, calendars, eventItemAttributes, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              summary: summary.value,
              isApproved: isApproved.value,
              eventOccurenceAttributes: eventOccurenceAttributes.value,
              detailsUrl: detailsUrl.value,
              photo: photo.value,
              audiences: audiences.value,
              calendars: calendars.value,
              eventCalendarItemAttributes: eventItemAttributes.value
            });
            emit("update:modelValue", newValue);
          }, {
            deep: true
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
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(CheckBox), {
              modelValue: unref(isApproved),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isApproved) ? isApproved.value = $event : null),
              label: "Approved"
            }, null, 8, ["modelValue"]), unref(isApproved) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(approvalText.value), 1)) : createCommentVNode("v-if", true)])]), createVNode(unref(TextBox), {
              modelValue: unref(summary),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(summary) ? summary.value = $event : null),
              label: "Summary",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createElementVNode("div", null, [createElementVNode("div", _hoisted_8, [createElementVNode("table", _hoisted_9, [_hoisted_10, createElementVNode("tbody", null, [audiences.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
              key: 0
            }, renderList(audiences.value, audience => {
              return openBlock(), createElementBlock("tr", _hoisted_11, [createElementVNode("td", _hoisted_12, toDisplayString(audience.text), 1), createElementVNode("td", _hoisted_13, [createVNode(unref(RockButton), {
                class: "btn-add btn-sm",
                title: "Delete",
                btnType: "link",
                onClick: withModifiers($event => onDeleteAudience(audience), ["prevent", "stop"])
              }, {
                default: withCtx(() => [_hoisted_14]),
                _: 2
              }, 1032, ["onClick"])])]);
            }), 256)) : (openBlock(), createElementBlock("div", _hoisted_15, _hoisted_19))])])]), createElementVNode("div", _hoisted_20, [createVNode(unref(RockButton), {
              class: "btn-add btn-grid-action",
              btnType: "link",
              onClick: withModifiers(onAddAudience, ["prevent", "stop"])
            }, {
              default: withCtx(() => [_hoisted_21]),
              _: 1
            }, 8, ["onClick"])])]), createVNode(unref(CheckBoxList), {
              label: "Calendars",
              modelValue: calendars.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => calendars.value = $event),
              rules: "required",
              help: "Calendars that this item should be added to (at least one is required).",
              items: availableCalendars.value,
              horizontal: "",
              repeatColumns: 0
            }, null, 8, ["modelValue", "items"]), createVNode(unref(TextBox), {
              label: "Details Url",
              modelValue: unref(detailsUrl),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(detailsUrl) ? detailsUrl.value = $event : null),
              help: "A custom URL to use for showing details of the calendar item (if the default item detail page should not be used)."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_22, [createVNode(unref(ImageUploader), {
              modelValue: unref(photo),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(photo) ? photo.value = $event : null),
              label: "Photo",
              uploadAsTemporary: true,
              uploadButtonText: "Upload",
              showDeleteButton: true
            }, null, 8, ["modelValue"])])]), eventItemAttributes.value.length > 0 ? (openBlock(), createBlock(unref(Panel), {
              key: 0,
              title: "Event Attribute Values",
              hasCollapse: ""
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(eventItemAttributes.value, eventItemAttribute => {
                return openBlock(), createElementBlock("div", null, [createElementVNode("h3", null, toDisplayString(eventItemAttribute.eventCalendarName), 1), eventItemAttribute.attributeValues && eventItemAttribute.attributes ? (openBlock(), createBlock(unref(AttributeValuesContainer), {
                  key: 0,
                  showCategoryLabel: false,
                  modelValue: eventItemAttribute.attributeValues,
                  "onUpdate:modelValue": $event => eventItemAttribute.attributeValues = $event,
                  attributes: eventItemAttribute.attributes,
                  isEditMode: "",
                  numberOfColumns: 2
                }, null, 8, ["modelValue", "onUpdate:modelValue", "attributes"])) : createCommentVNode("v-if", true)]);
              }), 256))]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(Panel), {
              title: "Event Attributes",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_23, [createElementVNode("table", _hoisted_24, [_hoisted_25, createElementVNode("tbody", null, [eventOccurenceAttributes.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(eventOccurenceAttributes.value, eventAttribute => {
                var _eventAttribute$attri3, _eventAttribute$attri4, _eventAttribute$attri5, _eventAttribute$attri6, _eventAttribute$attri7;
                return openBlock(), createElementBlock("tr", _hoisted_26, [createElementVNode("td", _hoisted_27, toDisplayString((_eventAttribute$attri3 = eventAttribute.attribute) === null || _eventAttribute$attri3 === void 0 ? void 0 : _eventAttribute$attri3.name), 1), createElementVNode("td", _hoisted_28, toDisplayString((_eventAttribute$attri4 = eventAttribute.attribute) === null || _eventAttribute$attri4 === void 0 ? void 0 : _eventAttribute$attri4.description), 1), createElementVNode("td", _hoisted_29, toDisplayString(eventAttribute.fieldType), 1), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri5 = eventAttribute.attribute) === null || _eventAttribute$attri5 === void 0 ? void 0 : _eventAttribute$attri5.isRequired)
                }, null, 8, _hoisted_30), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri6 = eventAttribute.attribute) === null || _eventAttribute$attri6 === void 0 ? void 0 : _eventAttribute$attri6.isShowInGrid)
                }, null, 8, _hoisted_31), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri7 = eventAttribute.attribute) === null || _eventAttribute$attri7 === void 0 ? void 0 : _eventAttribute$attri7.isAllowSearch)
                }, null, 8, _hoisted_32), createElementVNode("td", _hoisted_33, [createVNode(unref(RockButton), {
                  class: "btn-add btn-sm",
                  title: "Edit",
                  btnType: "link",
                  onClick: withModifiers($event => onAddEditAttribute(eventAttribute.attribute), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [_hoisted_34]),
                  _: 2
                }, 1032, ["onClick"])]), createElementVNode("td", _hoisted_35, [createVNode(unref(RockButton), {
                  class: "btn-add btn-sm",
                  title: "Delete",
                  btnType: "link",
                  onClick: withModifiers($event => onDeleteAttribute(eventAttribute), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [_hoisted_36]),
                  _: 2
                }, 1032, ["onClick"])])]);
              }), 256)) : (openBlock(), createElementBlock("div", _hoisted_37, _hoisted_41))])])]), createElementVNode("div", _hoisted_42, [createVNode(unref(RockButton), {
                class: "btn-add btn-grid-action",
                btnType: "link",
                onClick: _cache[8] || (_cache[8] = withModifiers($event => onAddEditAttribute(null), ["prevent", "stop"]))
              }, {
                default: withCtx(() => [_hoisted_43]),
                _: 1
              })]), createVNode(unref(Modal), {
                modelValue: isAttributeModalOpen.value,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isAttributeModalOpen.value = $event),
                title: "Event Occurrence Attribute"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSaveEditAttribute
                }, {
                  default: withCtx(() => [_hoisted_44]),
                  _: 1
                }, 8, ["btnSize", "btnType"])]),
                default: withCtx(() => [createVNode(unref(RockForm), {
                  submit: submitEditAttribute.value,
                  "onUpdate:submit": _cache[10] || (_cache[10] = $event => submitEditAttribute.value = $event),
                  onSubmit: onSaveEditAttribute
                }, {
                  default: withCtx(() => [createVNode(unref(AttributeEditor), {
                    modelValue: eventAttribute.value,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => eventAttribute.value = $event),
                    reservedKeyNames: reservedKeyNames.value
                  }, null, 8, ["modelValue", "reservedKeyNames"])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(Modal), {
              modelValue: isAudienceModalOpen.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isAudienceModalOpen.value = $event),
              title: "Select Audience",
              onSave: onSaveAudience,
              saveText: "Save"
            }, {
              default: withCtx(() => [createElementVNode("div", null, [createVNode(unref(DefinedValuePicker), {
                label: "Defined Value",
                modelValue: audience.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => audience.value = $event),
                definedTypeGuid: unref(DefinedType).MarketingCampaignAudienceType,
                multiple: false,
                enhanceForLongLists: false
              }, null, 8, ["modelValue", "definedTypeGuid"])])]),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      script$2.__file = "src/Event/EventItemDetail/editPanel.partial.obs";

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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.summary) {
              valueBuilder.addTextValue("Summary", props.modelValue.summary);
            }
            if (props.modelValue.selectedCalendarNames) {
              valueBuilder.addTextValue("Calendars", props.modelValue.selectedCalendarNames.join(", "));
            }
            if (props.modelValue.audiences) {
              valueBuilder.addTextValue("Audiences", props.modelValue.audiences.map(a => a.text).join(", "));
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.photoUrl) {
              var img = "\n            <a href=\"".concat(props.modelValue.photoUrl, "\">\n                <img class=\"img-thumbnail\" src=\"").concat(props.modelValue.photoUrl, "&maxwidth=300&maxheight=300\">\n            </a>");
              valueBuilder.addHtmlValue("", img);
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

      script$1.__file = "src/Event/EventItemDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'eventItemDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var eventItemViewBag = ref(config.entity);
          var eventItemEditBag = ref({});
          var entityTypeGuid = EntityType.EventItem;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "approvedByPersonAlias", "approvedOnDateTime", "description", "detailsUrl", "isActive", "isApproved", "name", "photo", "summary"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(eventItemEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _eventItemViewBag$val, _eventItemViewBag$val2;
            return (_eventItemViewBag$val = (_eventItemViewBag$val2 = eventItemViewBag.value) === null || _eventItemViewBag$val2 === void 0 ? void 0 : _eventItemViewBag$val2.name) !== null && _eventItemViewBag$val !== void 0 ? _eventItemViewBag$val : "";
          });
          var entityKey = computed(() => {
            var _eventItemViewBag$val3, _eventItemViewBag$val4;
            return (_eventItemViewBag$val3 = (_eventItemViewBag$val4 = eventItemViewBag.value) === null || _eventItemViewBag$val4 === void 0 ? void 0 : _eventItemViewBag$val4.idKey) !== null && _eventItemViewBag$val3 !== void 0 ? _eventItemViewBag$val3 : "";
          });
          var blockLabels = computed(() => {
            var _eventItemViewBag$val5, _eventItemViewBag$val6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_eventItemViewBag$val5 = eventItemViewBag.value) === null || _eventItemViewBag$val5 === void 0 ? void 0 : _eventItemViewBag$val5.isActive) === true) {
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
            if (((_eventItemViewBag$val6 = eventItemViewBag.value) === null || _eventItemViewBag$val6 === void 0 ? void 0 : _eventItemViewBag$val6.isApproved) === true) {
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Approved",
                type: "info"
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
              var _eventItemEditBag$val;
              if (!((_eventItemEditBag$val = eventItemEditBag.value) !== null && _eventItemEditBag$val !== void 0 && _eventItemEditBag$val.idKey)) {
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
              var _eventItemViewBag$val7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_eventItemViewBag$val7 = eventItemViewBag.value) === null || _eventItemViewBag$val7 === void 0 ? void 0 : _eventItemViewBag$val7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete event item.";
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
              var _eventItemViewBag$val8;
              var result = yield invokeBlockAction("Edit", {
                key: (_eventItemViewBag$val8 = eventItemViewBag.value) === null || _eventItemViewBag$val8 === void 0 ? void 0 : _eventItemViewBag$val8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                eventItemEditBag.value = result.data.entity;
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
                entity: eventItemEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  eventItemViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save event item.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified event item could not be viewed.";
          } else if (!config.entity.idKey) {
            eventItemEditBag.value = config.entity;
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
              entityTypeName: "EventItem",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: eventItemViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: eventItemEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => eventItemEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Event/eventItemDetail.obs";

    })
  };
}));
//# sourceMappingURL=eventItemDetail.obs.js.map
