System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, Fragment, renderList, toDisplayString, withModifiers, computed, createBlock, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, Panel, Modal, DropDownList, AttributeEditor, RockButton, RockForm, BtnType, BtnSize, toGuidOrNull, areEqual, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
      computed = module.computed;
      createBlock = module.createBlock;
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
      Panel = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      AttributeEditor = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
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
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "table-responsive"
      };
      var _hoisted_7 = {
        class: "grid-table table table-striped table-hover"
      };
      var _hoisted_8 = createElementVNode("thead", null, [createElementVNode("tr", {
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
      var _hoisted_9 = {
        align: "left"
      };
      var _hoisted_10 = {
        "data-priority": "1"
      };
      var _hoisted_11 = {
        "data-priority": "1"
      };
      var _hoisted_12 = {
        "data-priority": "1"
      };
      var _hoisted_13 = ["innerHTML"];
      var _hoisted_14 = ["innerHTML"];
      var _hoisted_15 = ["innerHTML"];
      var _hoisted_16 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_17 = createElementVNode("i", {
        class: "fa fa-pencil"
      }, null, -1);
      var _hoisted_18 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_19 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_20 = {
        key: 1
      };
      var _hoisted_21 = createElementVNode("hr", null, null, -1);
      var _hoisted_22 = createTextVNode(" No Attributes Found ");
      var _hoisted_23 = createElementVNode("hr", null, null, -1);
      var _hoisted_24 = [_hoisted_21, _hoisted_22, _hoisted_23];
      var _hoisted_25 = {
        class: "grid-actions border-panel"
      };
      var _hoisted_26 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_27 = createElementVNode("hr", null, null, -1);
      var _hoisted_28 = createTextVNode("Save");
      var _hoisted_29 = {
        class: "table-responsive"
      };
      var _hoisted_30 = {
        class: "grid-table table table-striped table-hover"
      };
      var _hoisted_31 = createElementVNode("thead", null, [createElementVNode("tr", {
        align: "left"
      }, [createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Channels"), createElementVNode("th", {
        class: "grid-columncommand",
        "data-priority": "1",
        scope: "col"
      }, " ")])], -1);
      var _hoisted_32 = {
        align: "left"
      };
      var _hoisted_33 = {
        "data-priority": "1"
      };
      var _hoisted_34 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_35 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_36 = {
        key: 1
      };
      var _hoisted_37 = createElementVNode("hr", null, null, -1);
      var _hoisted_38 = createTextVNode(" No Content Channels Found ");
      var _hoisted_39 = createElementVNode("hr", null, null, -1);
      var _hoisted_40 = [_hoisted_37, _hoisted_38, _hoisted_39];
      var _hoisted_41 = {
        class: "grid-actions border-panel"
      };
      var _hoisted_42 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$ico, _props$modelValue$con, _props$modelValue$sav, _props$modelValue$eve;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var iconCssClass = propertyRef((_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "", "iconCssClass");
          var isContentChannelModalOpen = ref(false);
          var contentChannelsList = ref((_props$modelValue$con = props.modelValue.contentChannels) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : []);
          var contentChannel = ref("");
          var savedContentChannels = ref((_props$modelValue$sav = props.modelValue.savedContentChannels) !== null && _props$modelValue$sav !== void 0 ? _props$modelValue$sav : []);
          var eventAttributes = ref((_props$modelValue$eve = props.modelValue.eventAttributes) !== null && _props$modelValue$eve !== void 0 ? _props$modelValue$eve : []);
          var isAttributeModalOpen = ref(false);
          var submitEditAttribute = ref(false);
          var eventAttribute = ref(null);
          var reservedKeyNames = ref([]);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, isActive, name, iconCssClass];
          var getCheckMark = booleanValue => {
            return booleanValue ? "<i class='fa fa-check'></i>" : "";
          };
          var onSaveContentChannel = () => {
            isContentChannelModalOpen.value = false;
            if (!savedContentChannels.value.some(x => x.value == contentChannel.value)) {
              var selectedContentChannel = contentChannelsList.value.find(x => x.value == contentChannel.value);
              if (selectedContentChannel) {
                savedContentChannels.value.push(selectedContentChannel);
              }
            }
            contentChannel.value = "";
          };
          var onAddContentChannel = () => {
            isContentChannelModalOpen.value = true;
          };
          var onDeleteContentChannel = function () {
            var _ref2 = _asyncToGenerator(function* (contentChannel) {
              isContentChannelModalOpen.value = false;
              savedContentChannels.value = savedContentChannels.value.filter(s => s.value !== contentChannel.value);
            });
            return function onDeleteContentChannel(_x) {
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
              eventAttributes.value = eventAttributes.value.filter(s => {
                var _s$attribute, _eventAttribute$attri, _s$attribute2, _eventAttribute$attri2;
                return ((_s$attribute = s.attribute) === null || _s$attribute === void 0 ? void 0 : _s$attribute.guid) !== ((_eventAttribute$attri = eventAttribute.attribute) === null || _eventAttribute$attri === void 0 ? void 0 : _eventAttribute$attri.guid) || ((_s$attribute2 = s.attribute) === null || _s$attribute2 === void 0 ? void 0 : _s$attribute2.key) !== ((_eventAttribute$attri2 = eventAttribute.attribute) === null || _eventAttribute$attri2 === void 0 ? void 0 : _eventAttribute$attri2.key);
              });
              props.options.eventAttributes = eventAttributes.value;
            });
            return function onDeleteAttribute(_x3) {
              return _ref4.apply(this, arguments);
            };
          }();
          var onSaveEditAttribute = () => {
            if (eventAttribute.value && eventAttributes.value) {
              var index = eventAttributes.value.findIndex(a => {
                var _a$attribute, _eventAttribute$value, _a$attribute2, _eventAttribute$value2;
                return ((_a$attribute = a.attribute) === null || _a$attribute === void 0 ? void 0 : _a$attribute.guid) === ((_eventAttribute$value = eventAttribute.value) === null || _eventAttribute$value === void 0 ? void 0 : _eventAttribute$value.guid) && ((_a$attribute2 = a.attribute) === null || _a$attribute2 === void 0 ? void 0 : _a$attribute2.key) === ((_eventAttribute$value2 = eventAttribute.value) === null || _eventAttribute$value2 === void 0 ? void 0 : _eventAttribute$value2.key);
              });
              if (index !== -1) {
                var editedAttribute = eventAttributes.value.find(a => {
                  var _a$attribute3, _eventAttribute$value3;
                  return ((_a$attribute3 = a.attribute) === null || _a$attribute3 === void 0 ? void 0 : _a$attribute3.guid) == ((_eventAttribute$value3 = eventAttribute.value) === null || _eventAttribute$value3 === void 0 ? void 0 : _eventAttribute$value3.guid);
                });
                if (editedAttribute) {
                  editedAttribute.attribute = eventAttribute.value;
                  eventAttributes.value.splice(index, 1, editedAttribute);
                }
              } else {
                var newEventAttribute = {
                  attribute: eventAttribute.value,
                  fieldType: ""
                };
                eventAttributes.value.push(newEventAttribute);
              }
              props.options.eventAttributes = eventAttributes.value;
              eventAttribute.value = null;
              isAttributeModalOpen.value = false;
            }
          };
          var onStartSaveEditAttribute = () => {
            submitEditAttribute.value = true;
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$ico2, _props$modelValue$eve2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(iconCssClass, (_props$modelValue$ico2 = props.modelValue.iconCssClass) !== null && _props$modelValue$ico2 !== void 0 ? _props$modelValue$ico2 : "");
            updateRefValue(eventAttributes, (_props$modelValue$eve2 = props.modelValue.eventAttributes) !== null && _props$modelValue$eve2 !== void 0 ? _props$modelValue$eve2 : []);
          });
          watch([attributeValues, savedContentChannels, eventAttributes, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              iconCssClass: iconCssClass.value,
              savedContentChannels: savedContentChannels.value,
              eventAttributes: eventAttributes.value
            });
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
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: unref(iconCssClass),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(iconCssClass) ? iconCssClass.value = $event : null),
              label: "Calendar CSS Class"
            }, null, 8, ["modelValue"])])]), createVNode(unref(Panel), {
              title: "Event Attributes",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_6, [createElementVNode("table", _hoisted_7, [_hoisted_8, createElementVNode("tbody", null, [eventAttributes.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(eventAttributes.value, eventAttribute => {
                var _eventAttribute$attri3, _eventAttribute$attri4, _eventAttribute$attri5, _eventAttribute$attri6, _eventAttribute$attri7;
                return openBlock(), createElementBlock("tr", _hoisted_9, [createElementVNode("td", _hoisted_10, toDisplayString((_eventAttribute$attri3 = eventAttribute.attribute) === null || _eventAttribute$attri3 === void 0 ? void 0 : _eventAttribute$attri3.name), 1), createElementVNode("td", _hoisted_11, toDisplayString((_eventAttribute$attri4 = eventAttribute.attribute) === null || _eventAttribute$attri4 === void 0 ? void 0 : _eventAttribute$attri4.description), 1), createElementVNode("td", _hoisted_12, toDisplayString(eventAttribute.fieldType), 1), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri5 = eventAttribute.attribute) === null || _eventAttribute$attri5 === void 0 ? void 0 : _eventAttribute$attri5.isRequired)
                }, null, 8, _hoisted_13), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri6 = eventAttribute.attribute) === null || _eventAttribute$attri6 === void 0 ? void 0 : _eventAttribute$attri6.isShowInGrid)
                }, null, 8, _hoisted_14), createElementVNode("td", {
                  "data-priority": "1",
                  innerHTML: getCheckMark((_eventAttribute$attri7 = eventAttribute.attribute) === null || _eventAttribute$attri7 === void 0 ? void 0 : _eventAttribute$attri7.isAllowSearch)
                }, null, 8, _hoisted_15), createElementVNode("td", _hoisted_16, [createVNode(unref(RockButton), {
                  title: "Edit",
                  class: "btn-grid-action",
                  btnType: "link",
                  onClick: withModifiers($event => onAddEditAttribute(eventAttribute.attribute), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [_hoisted_17]),
                  _: 2
                }, 1032, ["onClick"])]), createElementVNode("td", _hoisted_18, [createVNode(unref(RockButton), {
                  title: "Delete",
                  class: "btn-grid-action",
                  btnType: "link",
                  onClick: withModifiers($event => onDeleteAttribute(eventAttribute), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [_hoisted_19]),
                  _: 2
                }, 1032, ["onClick"])])]);
              }), 256)) : (openBlock(), createElementBlock("div", _hoisted_20, _hoisted_24))])])]), createElementVNode("div", _hoisted_25, [createVNode(unref(RockButton), {
                class: "btn-add btn-grid-action",
                btnType: "link",
                onClick: _cache[4] || (_cache[4] = withModifiers($event => onAddEditAttribute(null), ["prevent", "stop"]))
              }, {
                default: withCtx(() => [_hoisted_26]),
                _: 1
              })]), createVNode(unref(Modal), {
                modelValue: isAttributeModalOpen.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isAttributeModalOpen.value = $event),
                title: "Calendar Event Attribute"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSaveEditAttribute
                }, {
                  default: withCtx(() => [_hoisted_28]),
                  _: 1
                }, 8, ["btnSize", "btnType"])]),
                default: withCtx(() => [_hoisted_27, createVNode(unref(RockForm), {
                  submit: submitEditAttribute.value,
                  "onUpdate:submit": _cache[6] || (_cache[6] = $event => submitEditAttribute.value = $event),
                  onSubmit: onSaveEditAttribute
                }, {
                  default: withCtx(() => [createVNode(unref(AttributeEditor), {
                    modelValue: eventAttribute.value,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => eventAttribute.value = $event),
                    reservedKeyNames: reservedKeyNames.value
                  }, null, 8, ["modelValue", "reservedKeyNames"])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(Panel), {
              title: "Content Channels",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_29, [createElementVNode("table", _hoisted_30, [_hoisted_31, createElementVNode("tbody", null, [savedContentChannels.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(savedContentChannels.value, contentChannel => {
                return openBlock(), createElementBlock("tr", _hoisted_32, [createElementVNode("td", _hoisted_33, toDisplayString(contentChannel.text), 1), createElementVNode("td", _hoisted_34, [createVNode(unref(RockButton), {
                  title: "Delete",
                  class: "btn-add btn-grid-action",
                  btnType: "link",
                  onClick: withModifiers($event => onDeleteContentChannel(contentChannel), ["prevent", "stop"])
                }, {
                  default: withCtx(() => [_hoisted_35]),
                  _: 2
                }, 1032, ["onClick"])])]);
              }), 256)) : (openBlock(), createElementBlock("div", _hoisted_36, _hoisted_40))])])]), createElementVNode("div", _hoisted_41, [createVNode(unref(RockButton), {
                class: "btn-add btn-grid-action",
                btnType: "link",
                onClick: withModifiers(onAddContentChannel, ["prevent", "stop"])
              }, {
                default: withCtx(() => [_hoisted_42]),
                _: 1
              }, 8, ["onClick"])])]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"]), createVNode(unref(Modal), {
              modelValue: isContentChannelModalOpen.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isContentChannelModalOpen.value = $event),
              title: "Content Channel",
              onSave: onSaveContentChannel,
              saveText: "Save"
            }, {
              default: withCtx(() => [createElementVNode("div", null, [createVNode(unref(DropDownList), {
                label: "Channel",
                modelValue: contentChannel.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => contentChannel.value = $event),
                items: contentChannelsList.value,
                showBlankItem: ""
              }, null, 8, ["modelValue", "items"])])]),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      script$2.__file = "src/Event/EventCalendarDetail/editPanel.partial.obs";

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

      script$1.__file = "src/Event/EventCalendarDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'eventCalendarDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var eventCalendarViewBag = ref(config.entity);
          var eventCalendarEditBag = ref({});
          var entityTypeGuid = EntityType.EventCalendar;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "description", "iconCssClass", "isActive", "isIndexEnabled", "name"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(eventCalendarEditBag, validProperties, invokeBlockAction), undefined, true);
          var canAdministrate = computed(() => {
            var _eventCalendarViewBag;
            return ((_eventCalendarViewBag = eventCalendarViewBag.value) === null || _eventCalendarViewBag === void 0 ? void 0 : _eventCalendarViewBag.canAdministrate) === true;
          });
          var panelName = computed(() => {
            var _eventCalendarViewBag2, _eventCalendarViewBag3;
            return (_eventCalendarViewBag2 = (_eventCalendarViewBag3 = eventCalendarViewBag.value) === null || _eventCalendarViewBag3 === void 0 ? void 0 : _eventCalendarViewBag3.name) !== null && _eventCalendarViewBag2 !== void 0 ? _eventCalendarViewBag2 : "";
          });
          var entityKey = computed(() => {
            var _eventCalendarViewBag4, _eventCalendarViewBag5;
            return (_eventCalendarViewBag4 = (_eventCalendarViewBag5 = eventCalendarViewBag.value) === null || _eventCalendarViewBag5 === void 0 ? void 0 : _eventCalendarViewBag5.idKey) !== null && _eventCalendarViewBag4 !== void 0 ? _eventCalendarViewBag4 : "";
          });
          var headerActions = computed(() => {
            var actions = [];
            actions.push({
              iconCssClass: "fa fa-calendar-alt",
              title: "Export Calendar Feed",
              type: "info",
              handler: onExportClick
            });
            return actions;
          });
          var blockLabels = computed(() => {
            var _eventCalendarViewBag6;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_eventCalendarViewBag6 = eventCalendarViewBag.value) === null || _eventCalendarViewBag6 === void 0 ? void 0 : _eventCalendarViewBag6.isActive) === true) {
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
          computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var onExportClick = event => {
            var _eventCalendarViewBag7, _eventCalendarViewBag8;
            navigator.clipboard.writeText((_eventCalendarViewBag7 = (_eventCalendarViewBag8 = eventCalendarViewBag.value) === null || _eventCalendarViewBag8 === void 0 ? void 0 : _eventCalendarViewBag8.exportFeedUrl) !== null && _eventCalendarViewBag7 !== void 0 ? _eventCalendarViewBag7 : "");
            var jquery = window["$"];
            var jEl = jquery(event.target).tooltip();
            jEl.attr("data-original-title", "Copied").tooltip("show").attr("data-original-title", "Export Calendar Feed");
          };
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _eventCalendarEditBag;
              if (!((_eventCalendarEditBag = eventCalendarEditBag.value) !== null && _eventCalendarEditBag !== void 0 && _eventCalendarEditBag.idKey)) {
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
              var _eventCalendarViewBag9;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_eventCalendarViewBag9 = eventCalendarViewBag.value) === null || _eventCalendarViewBag9 === void 0 ? void 0 : _eventCalendarViewBag9.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete event calendar.";
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
              var _eventCalendarViewBag10;
              var result = yield invokeBlockAction("Edit", {
                key: (_eventCalendarViewBag10 = eventCalendarViewBag.value) === null || _eventCalendarViewBag10 === void 0 ? void 0 : _eventCalendarViewBag10.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                eventCalendarEditBag.value = result.data.entity;
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
                entity: eventCalendarEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  eventCalendarViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save event calendar.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified event calendar could not be viewed.";
          } else if (!config.entity.idKey) {
            eventCalendarEditBag.value = config.entity;
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
              entityTypeName: "EventCalendar",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(canAdministrate),
              isEditVisible: unref(canAdministrate),
              isFollowVisible: false,
              isSecurityHidden: !unref(canAdministrate),
              headerActions: unref(headerActions),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: eventCalendarViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: eventCalendarEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => eventCalendarEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "isSecurityHidden", "headerActions"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Event/eventCalendarDetail.obs";

    })
  };
}));
//# sourceMappingURL=eventCalendarDetail.obs.js.map
