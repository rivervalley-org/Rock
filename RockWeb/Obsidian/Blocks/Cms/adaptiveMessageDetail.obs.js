System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/grid', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/guid', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, reactive, watch, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, withDirectives, Fragment, renderList, toDisplayString, vShow, computed, resolveComponent, createBlock, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, CategoryPicker, Panel, Grid, TextColumn, Column, BooleanColumn, EditColumn, DeleteColumn, ReorderColumn, watchPropertyChanges, useInvokeBlockAction, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, AttributeEditor, Modal, RockButton, RockForm, ValueDetailList, SectionHeader, ValueDetailListItemBuilder, toGuidOrNull, emptyGuid, debounce;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      reactive = module.reactive;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      vShow = module.vShow;
      computed = module.computed;
      resolveComponent = module.resolveComponent;
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
      CategoryPicker = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      Column = module.Column;
      BooleanColumn = module.BooleanColumn;
      EditColumn = module.EditColumn;
      DeleteColumn = module.DeleteColumn;
      ReorderColumn = module.ReorderColumn;
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      AttributeEditor = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
      var _hoisted_7 = {
        class: "panel-body"
      };
      var _hoisted_8 = createTextVNode(" These Attributes apply to all adaptations. Each adaptation will have thier own value for these attributes. ");
      var _hoisted_9 = createElementVNode("h5", null, "Shared Adaptation Attributes", -1);
      var _hoisted_10 = {
        class: "grid grid-panel"
      };
      var _hoisted_11 = createTextVNode(" (Inherited from Adaptive Message) ");
      var _hoisted_12 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
      var _hoisted_13 = createElementVNode("h5", null, "Adaptation Attributes", -1);
      var _hoisted_14 = {
        class: "grid grid-panel"
      };
      var _hoisted_15 = createTextVNode(" Please correct the following: ");
      var _hoisted_16 = createTextVNode("Save");
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$key, _props$modelValue$cat, _props$modelValue$ada, _props$modelValue$ada2, _props$options$reserv;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var key = propertyRef((_props$modelValue$key = props.modelValue.key) !== null && _props$modelValue$key !== void 0 ? _props$modelValue$key : "", "Key");
          var categories = propertyRef((_props$modelValue$cat = props.modelValue.categories) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : [], "Categories");
          var adaptationSharedAttributes = ref((_props$modelValue$ada = props.modelValue.adaptationSharedAttributes) !== null && _props$modelValue$ada !== void 0 ? _props$modelValue$ada : []);
          var adaptationAttributes = ref((_props$modelValue$ada2 = props.modelValue.adaptationAttributes) !== null && _props$modelValue$ada2 !== void 0 ? _props$modelValue$ada2 : []);
          var adaptationAttribute = ref(null);
          var isModalOpen = ref(false);
          var attributeErrors = ref([]);
          var submitEditAttribute = ref(false);
          var reservedKeyNames = ref((_props$options$reserv = props.options.reservedKeyNames) !== null && _props$options$reserv !== void 0 ? _props$options$reserv : []);
          var propRefs = [description, isActive, name, categories, key];
          var gridSharedData = reactive({
            rows: adaptationSharedAttributes.value.map(x => convertToRowItem(x))
          });
          var gridData = reactive({
            rows: adaptationAttributes.value.map(x => convertToRowItem(x))
          });
          function convertToRowItem(attribute) {
            return {
              key: attribute.key,
              name: attribute.name,
              description: attribute.description,
              isRequired: attribute.isRequired
            };
          }
          function onAddItem() {
            return _onAddItem.apply(this, arguments);
          }
          function _onAddItem() {
            _onAddItem = _asyncToGenerator(function* () {
              adaptationAttribute.value = {};
              isModalOpen.value = true;
              attributeErrors.value = [];
            });
            return _onAddItem.apply(this, arguments);
          }
          var onEditItem = function () {
            var _ref2 = _asyncToGenerator(function* (key) {
              attributeErrors.value = [];
              var selectedSiteAttribute = adaptationAttributes.value.find(x => x.key === key);
              if (selectedSiteAttribute) {
                adaptationAttribute.value = selectedSiteAttribute;
                isModalOpen.value = true;
              } else {
                onAddItem();
              }
            });
            return function onEditItem(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var onDeleteItem = function () {
            var _ref3 = _asyncToGenerator(function* (key) {
              isModalOpen.value = false;
              adaptationAttributes.value = adaptationAttributes.value.filter(s => s.key !== key);
              if (gridData.rows) {
                var index = gridData.rows.findIndex(r => r["key"] === key);
                if (index !== -1) {
                  var _gridData$rows;
                  (_gridData$rows = gridData.rows) === null || _gridData$rows === void 0 ? void 0 : _gridData$rows.splice(index, 1);
                }
              }
            });
            return function onDeleteItem(_x2) {
              return _ref3.apply(this, arguments);
            };
          }();
          function onSaveAttribute() {
            if (adaptationAttribute.value) {
              var _adaptationAttribute$5, _adaptationAttribute$6;
              var index = adaptationAttributes.value.findIndex(a => {
                var _adaptationAttribute$;
                return a.key === ((_adaptationAttribute$ = adaptationAttribute.value) === null || _adaptationAttribute$ === void 0 ? void 0 : _adaptationAttribute$.key);
              });
              if (index !== -1) {
                var _gridData$rows2;
                var editedAttribute = adaptationAttributes.value.find(a => {
                  var _adaptationAttribute$2;
                  return a.guid == ((_adaptationAttribute$2 = adaptationAttribute.value) === null || _adaptationAttribute$2 === void 0 ? void 0 : _adaptationAttribute$2.guid);
                });
                var rowItem = (_gridData$rows2 = gridData.rows) === null || _gridData$rows2 === void 0 ? void 0 : _gridData$rows2.find(x => {
                  var _adaptationAttribute$3;
                  return x["idKey"] == ((_adaptationAttribute$3 = adaptationAttribute.value) === null || _adaptationAttribute$3 === void 0 ? void 0 : _adaptationAttribute$3.key);
                });
                if (editedAttribute) {
                  editedAttribute = adaptationAttribute.value;
                  adaptationAttributes.value.splice(index, 1, editedAttribute);
                }
                if (rowItem && gridData.rows && editedAttribute) {
                  var _gridData$rows3;
                  var rowIndex = gridData.rows.findIndex(r => {
                    var _adaptationAttribute$4;
                    return r["idKey"] === ((_adaptationAttribute$4 = adaptationAttribute.value) === null || _adaptationAttribute$4 === void 0 ? void 0 : _adaptationAttribute$4.key);
                  });
                  rowItem = convertToRowItem(editedAttribute);
                  (_gridData$rows3 = gridData.rows) === null || _gridData$rows3 === void 0 ? void 0 : _gridData$rows3.splice(rowIndex, 1, rowItem);
                }
              } else {
                var _gridData$rows4;
                adaptationAttributes.value.push(adaptationAttribute.value);
                var newRowItem = convertToRowItem(adaptationAttribute.value);
                (_gridData$rows4 = gridData.rows) === null || _gridData$rows4 === void 0 ? void 0 : _gridData$rows4.push(newRowItem);
              }
              var _key = (_adaptationAttribute$5 = (_adaptationAttribute$6 = adaptationAttribute.value) === null || _adaptationAttribute$6 === void 0 ? void 0 : _adaptationAttribute$6.key) !== null && _adaptationAttribute$5 !== void 0 ? _adaptationAttribute$5 : "";
              adaptationAttribute.value = null;
              isModalOpen.value = false;
              if (!reservedKeyNames.value.includes(_key)) {
                reservedKeyNames.value.push(_key);
              }
            }
          }
          var onStartSaveAttribute = () => {
            var _adaptationAttribute$7, _adaptationAttribute$8, _adaptationAttribute$9;
            attributeErrors.value = [];
            var isExistingKey = reservedKeyNames.value.includes((_adaptationAttribute$7 = (_adaptationAttribute$8 = adaptationAttribute.value) === null || _adaptationAttribute$8 === void 0 ? void 0 : _adaptationAttribute$8.key) !== null && _adaptationAttribute$7 !== void 0 ? _adaptationAttribute$7 : "") && !((_adaptationAttribute$9 = adaptationAttribute.value) !== null && _adaptationAttribute$9 !== void 0 && _adaptationAttribute$9.guid);
            submitEditAttribute.value = !isExistingKey;
            if (isExistingKey) {
              attributeErrors.value.push("There is already an existing property with the key value you entered or the key has illegal characters. Please select a different key value and use only letters, numbers and underscores.");
            }
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$key2, _props$modelValue$cat2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(key, (_props$modelValue$key2 = props.modelValue.key) !== null && _props$modelValue$key2 !== void 0 ? _props$modelValue$key2 : "");
            updateRefValue(categories, (_props$modelValue$cat2 = props.modelValue.categories) !== null && _props$modelValue$cat2 !== void 0 ? _props$modelValue$cat2 : []);
          });
          watch([attributeValues, adaptationAttributes, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              key: key.value,
              categories: categories.value,
              adaptationAttributes: adaptationAttributes.value
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
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(TextBox), {
              modelValue: unref(key),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(key) ? key.value = $event : null),
              label: "Key",
              help: "The unique key that will identify this adaptive message.",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(CategoryPicker), {
              modelValue: unref(categories),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(categories) ? categories.value = $event : null),
              label: "Categories",
              multiple: "",
              entityTypeGuid: unref(EntityType).AdaptiveMessage
            }, null, 8, ["modelValue", "entityTypeGuid"])])]), createVNode(unref(Panel), {
              title: "Adaptation Attributes",
              hasCollapse: false,
              isDrawerOpen: true
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_7, [createVNode(unref(NotificationBox), {
                alertType: "info"
              }, {
                default: withCtx(() => [_hoisted_8]),
                _: 1
              }), _hoisted_9, createElementVNode("div", _hoisted_10, [createVNode(unref(Grid), {
                data: gridSharedData,
                keyField: "key",
                itemTerm: "Shared Adaptation Attribute",
                liveUpdates: "",
                light: ""
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "name",
                  field: "name",
                  title: "Attribute"
                }), createVNode(unref(TextColumn), {
                  name: "description",
                  field: "description",
                  title: "Description"
                }), createVNode(unref(Column), {
                  title: "Inherited",
                  name: "key"
                }, {
                  format: withCtx(_ref4 => {
                    _ref4.row;
                    return [_hoisted_11];
                  }),
                  skeleton: withCtx(() => [_hoisted_12]),
                  _: 1
                })]),
                _: 1
              }, 8, ["data"])]), _hoisted_13, createElementVNode("div", _hoisted_14, [createVNode(unref(Grid), {
                data: gridData,
                keyField: "key",
                itemTerm: "Attribute",
                liveUpdates: "",
                light: "",
                onAddItem: onAddItem
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "name",
                  field: "name",
                  title: "Attribute"
                }), createVNode(unref(TextColumn), {
                  name: "description",
                  field: "description",
                  title: "Description"
                }), createVNode(unref(BooleanColumn), {
                  name: "isRequired",
                  field: "isRequired",
                  title: "Required"
                }), createVNode(unref(EditColumn), {
                  onClick: onEditItem
                }), createVNode(unref(DeleteColumn), {
                  onClick: onDeleteItem,
                  disableConfirmation: ""
                })]),
                _: 1
              }, 8, ["data"])])]), createVNode(unref(Modal), {
                modelValue: isModalOpen.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isModalOpen.value = $event),
                title: "Adaptation Attributes"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnType: "primary",
                  onClick: onStartSaveAttribute
                }, {
                  default: withCtx(() => [_hoisted_16]),
                  _: 1
                })]),
                default: withCtx(() => [createVNode(unref(RockForm), {
                  submit: submitEditAttribute.value,
                  "onUpdate:submit": _cache[6] || (_cache[6] = $event => submitEditAttribute.value = $event),
                  onSubmit: onSaveAttribute
                }, {
                  default: withCtx(() => [withDirectives(createVNode(unref(NotificationBox), {
                    alertType: "validation"
                  }, {
                    default: withCtx(() => [_hoisted_15, createElementVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(attributeErrors.value, error => {
                      return openBlock(), createElementBlock("li", null, toDisplayString(error), 1);
                    }), 256))])]),
                    _: 1
                  }, 512), [[vShow, attributeErrors.value.length > 0]]), createVNode(unref(AttributeEditor), {
                    modelValue: adaptationAttribute.value,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => adaptationAttribute.value = $event),
                    reservedKeyNames: reservedKeyNames.value
                  }, null, 8, ["modelValue", "reservedKeyNames"])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Cms/AdaptiveMessageDetail/editPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["AdaptationDetailPage"] = "AdaptationDetailPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "label label-info margin-r-sm"
      };
      var _hoisted_5 = createElementVNode("div", {
        class: "skeleton skeleton-text skeleton-rounded"
      }, null, -1);
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue$ada, _props$modelValue3;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var adaptations = reactive((_props$modelValue$ada = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.adaptationsGridData) !== null && _props$modelValue$ada !== void 0 ? _props$modelValue$ada : {});
          var adaptationsGridDataSource = ref(adaptations);
          var invokeBlockAction = useInvokeBlockAction();
          var config = useConfigurationValues();
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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.key) {
              valueBuilder.addTextValue("Key", props.modelValue.key);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.categories && props.modelValue.categories.length > 0) {
              var categoryStr = "";
              var _iterator = _createForOfIteratorHelper(props.modelValue.categories),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var category = _step.value;
                  categoryStr += "<span class='label label-default margin-r-sm'>".concat(category.text, "</span>");
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              valueBuilder.addHtmlValue("Categories", "".concat(categoryStr));
            }
            return valueBuilder.build();
          });
          function onAddAdaptation() {
            var _config$navigationUrl;
            if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.AdaptationDetailPage]) {
              var _props$modelValue4;
              window.location.href = config.navigationUrls[NavigationUrlKey.AdaptationDetailPage].replace("((Key))", "0") + "&AdaptiveMessageId=".concat((_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.idKey);
            }
          }
          function onEditAdaptation(key) {
            var _config$navigationUrl2;
            if ((_config$navigationUrl2 = config.navigationUrls) !== null && _config$navigationUrl2 !== void 0 && _config$navigationUrl2[NavigationUrlKey.AdaptationDetailPage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.AdaptationDetailPage].replace("((Key))", key);
            }
          }
          function onOrderChanged(_x, _x2) {
            return _onOrderChanged.apply(this, arguments);
          }
          function _onOrderChanged() {
            _onOrderChanged = _asyncToGenerator(function* (item, beforeItem) {
              var _props$modelValue6, _toGuidOrNull;
              var data = {
                key: (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.idKey,
                guid: (_toGuidOrNull = toGuidOrNull(item === null || item === void 0 ? void 0 : item.guid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                beforeGuid: toGuidOrNull(beforeItem === null || beforeItem === void 0 ? void 0 : beforeItem.guid)
              };
              var result = yield invokeBlockAction("ReorderAdaptation", data);
              if (!result.isSuccess) {
                alert(result.errorMessage || "Unable to re-order sources, you might need to reload the page.");
                return;
              }
            });
            return _onOrderChanged.apply(this, arguments);
          }
          function onDeleteClick(_x3) {
            return _onDeleteClick.apply(this, arguments);
          }
          function _onDeleteClick() {
            _onDeleteClick = _asyncToGenerator(function* (key) {
              var result = yield invokeBlockAction("DeleteAdaptation", {
                key
              });
              if (result.isSuccess) {
                if (adaptationsGridDataSource) {
                  var _adaptationsGridDataS;
                  var index = (_adaptationsGridDataS = adaptationsGridDataSource.value.rows) === null || _adaptationsGridDataS === void 0 ? void 0 : _adaptationsGridDataS.findIndex(r => r["idKey"] === key);
                  if (index && index !== -1) {
                    var _adaptationsGridDataS2;
                    (_adaptationsGridDataS2 = adaptationsGridDataSource.value.rows) === null || _adaptationsGridDataS2 === void 0 ? void 0 : _adaptationsGridDataS2.splice(index, 1);
                  }
                }
              } else {
                var _result$errorMessage;
                yield alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete site.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            var _component_Column = resolveComponent("Column");
            var _component_NumberColumn = resolveComponent("NumberColumn");
            var _component_Panel = resolveComponent("Panel");
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
            }, null, 8, ["modelValue", "attributes"]), createVNode(_component_Panel, {
              title: "Adaptations",
              hasCollapse: true,
              isDrawerOpen: true
            }, {
              default: withCtx(() => {
                var _props$modelValue$ada2, _props$modelValue5;
                return [createVNode(unref(SectionHeader), {
                  title: "Adaptations",
                  description: "The messages below are personalized for the configured segments and are in order by the priority."
                }), createVNode(unref(Grid), {
                  definition: (_props$modelValue$ada2 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.adaptationsGridDefinition) !== null && _props$modelValue$ada2 !== void 0 ? _props$modelValue$ada2 : undefined,
                  data: adaptationsGridDataSource.value,
                  entityTypeGuid: unref(EntityType).AdaptiveMessageAdaptation,
                  light: "",
                  keyField: "idKey",
                  itemTerm: "Adaptation",
                  liveUpdates: "",
                  onAddItem: onAddAdaptation
                }, {
                  default: withCtx(() => [createVNode(unref(ReorderColumn), {
                    onOrderChanged: onOrderChanged
                  }), createVNode(unref(TextColumn), {
                    name: "name",
                    title: "Description",
                    field: "name",
                    visiblePriority: "xs"
                  }), createVNode(_component_Column, {
                    name: "segments",
                    title: "Segments",
                    visiblePriority: "lg"
                  }, {
                    format: withCtx(_ref => {
                      var row = _ref.row;
                      return [(openBlock(true), createElementBlock(Fragment, null, renderList(row.segments, segment => {
                        return openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(segment), 1);
                      }), 256))];
                    }),
                    skeleton: withCtx(() => [_hoisted_5]),
                    _: 1
                  }), createVNode(unref(TextColumn), {
                    name: "saturation",
                    title: "Saturation",
                    field: "saturation",
                    visiblePriority: "lg"
                  }), createVNode(_component_NumberColumn, {
                    name: "views",
                    title: "Views",
                    field: "views",
                    visiblePriority: "sm"
                  }), createVNode(unref(EditColumn), {
                    onClick: onEditAdaptation
                  }), createVNode(unref(DeleteColumn), {
                    onClick: onDeleteClick
                  })]),
                  _: 1
                }, 8, ["definition", "data", "entityTypeGuid"])];
              }),
              _: 1
            })]);
          };
        }
      });

      script$1.__file = "src/Cms/AdaptiveMessageDetail/viewPanel.partial.obs";

      var script = exports('default', defineComponent({
        name: 'adaptiveMessageDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var adaptiveMessageViewBag = ref(config.entity);
          var adaptiveMessageEditBag = ref({});
          var entityTypeGuid = EntityType.AdaptiveMessage;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "description", "isActive", "key", "name", "categories"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(adaptiveMessageEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _adaptiveMessageViewB, _adaptiveMessageViewB2;
            return (_adaptiveMessageViewB = (_adaptiveMessageViewB2 = adaptiveMessageViewBag.value) === null || _adaptiveMessageViewB2 === void 0 ? void 0 : _adaptiveMessageViewB2.name) !== null && _adaptiveMessageViewB !== void 0 ? _adaptiveMessageViewB : "";
          });
          var entityKey = computed(() => {
            var _adaptiveMessageViewB3, _adaptiveMessageViewB4;
            return (_adaptiveMessageViewB3 = (_adaptiveMessageViewB4 = adaptiveMessageViewBag.value) === null || _adaptiveMessageViewB4 === void 0 ? void 0 : _adaptiveMessageViewB4.idKey) !== null && _adaptiveMessageViewB3 !== void 0 ? _adaptiveMessageViewB3 : "";
          });
          var blockLabels = computed(() => {
            var _adaptiveMessageViewB5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_adaptiveMessageViewB5 = adaptiveMessageViewBag.value) === null || _adaptiveMessageViewB5 === void 0 ? void 0 : _adaptiveMessageViewB5.isActive) === true) {
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _adaptiveMessageEditB;
              if (!((_adaptiveMessageEditB = adaptiveMessageEditBag.value) !== null && _adaptiveMessageEditB !== void 0 && _adaptiveMessageEditB.idKey)) {
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
              var _adaptiveMessageViewB6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_adaptiveMessageViewB6 = adaptiveMessageViewBag.value) === null || _adaptiveMessageViewB6 === void 0 ? void 0 : _adaptiveMessageViewB6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete adaptive message.";
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
              var _adaptiveMessageViewB7;
              var result = yield invokeBlockAction("Edit", {
                key: (_adaptiveMessageViewB7 = adaptiveMessageViewBag.value) === null || _adaptiveMessageViewB7 === void 0 ? void 0 : _adaptiveMessageViewB7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                adaptiveMessageEditBag.value = result.data.entity;
                config.options = result.data.options;
                panelMode.value = DetailPanelMode.Edit;
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
                entity: adaptiveMessageEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  adaptiveMessageViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save adaptive message.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified adaptive message could not be viewed.";
          } else if (!config.entity.idKey) {
            adaptiveMessageEditBag.value = config.entity;
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
              entityTypeName: "AdaptiveMessage",
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
                modelValue: adaptiveMessageViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: adaptiveMessageEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => adaptiveMessageEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/adaptiveMessageDetail.obs";

    })
  };
}));
//# sourceMappingURL=adaptiveMessageDetail.obs.js.map
