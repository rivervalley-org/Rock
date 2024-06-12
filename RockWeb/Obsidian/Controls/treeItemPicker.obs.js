System.register(['vue', './treeList.obs', '@Obsidian/Utility/component', './contentDropDownPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, createSlots, withCtx, createElementVNode, toDisplayString, createVNode, renderSlot, TreeList, updateRefValue, ContentDropDownPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      renderSlot = module.renderSlot;
    }, function (module) {
      TreeList = module["default"];
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }],
    execute: (function () {

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

      var _hoisted_1 = {
        class: "selected-names"
      };
      var script = exports('default', defineComponent({
        name: 'treeItemPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          multiple: {
            type: Boolean,
            default: false
          },
          items: {
            type: Array
          },
          provider: {
            type: Object
          },
          iconCssClass: {
            type: String,
            default: "fa fa-folder-open"
          },
          disableFolderSelection: {
            type: Boolean,
            default: false
          },
          autoExpand: {
            type: Boolean,
            default: false
          },
          showChildCount: {
            type: Boolean,
            default: false
          },
          fullWidth: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "valueSelected"],
        setup(__props, _ref) {
          var _props$items;
          var emit = _ref.emit;
          var props = __props;
          var internalValues = ref(forceToArray(props.modelValue, props.multiple).map(v => {
            var _v$value;
            return (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : "";
          }));
          var flatItems = ref(flatten((_props$items = props.items) !== null && _props$items !== void 0 ? _props$items : [], i => {
            var _i$children;
            return (_i$children = i.children) !== null && _i$children !== void 0 ? _i$children : [];
          }));
          var showPopup = ref(false);
          var showClear = computed(() => {
            return forceToArray(props.modelValue, props.multiple).length > 0;
          });
          var selectedNames = computed(() => {
            return forceToArray(props.modelValue, true).map(v => v.text).join(", ");
          });
          var pickerIconClass = computed(() => "".concat(props.iconCssClass, " fa-fw"));
          var updateModelValue = () => {
            var newModelValue = forceToArray(props.modelValue, true).filter(v => {
              var _v$value2;
              return internalValues.value.includes((_v$value2 = v.value) !== null && _v$value2 !== void 0 ? _v$value2 : "");
            });
            var knownValues = newModelValue.map(v => v.value);
            var additionalValues = internalValues.value.filter(v => !knownValues.includes(v));
            var _iterator = _createForOfIteratorHelper(additionalValues),
              _step;
            try {
              var _loop = function _loop() {
                var v = _step.value;
                var items = flatItems.value.filter(i => i.value === v);
                if (items.length > 0 && items[0].value && items[0].text) {
                  newModelValue.push({
                    value: items[0].value,
                    text: items[0].text
                  });
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (props.multiple) {
              emit("update:modelValue", newModelValue);
            } else {
              emit("update:modelValue", newModelValue.length > 0 ? newModelValue[0] : null);
            }
          };
          var onUpdateItems = newItems => {
            flatItems.value = flatten(newItems !== null && newItems !== void 0 ? newItems : [], i => {
              var _i$children2;
              return (_i$children2 = i.children) !== null && _i$children2 !== void 0 ? _i$children2 : [];
            });
          };
          var onClear = () => {
            emit("update:modelValue", props.multiple ? [] : null);
          };
          var onCancel = () => {
            showPopup.value = false;
          };
          var onSelect = () => {
            updateModelValue();
            showPopup.value = false;
            emit("valueSelected");
          };
          watch([() => props.modelValue, () => props.multiple], (oldValues, newValues) => {
            updateRefValue(internalValues, forceToArray(props.modelValue, props.multiple).map(v => {
              var _v$value3;
              return (_v$value3 = v.value) !== null && _v$value3 !== void 0 ? _v$value3 : "";
            }));
            if (newValues[1] !== oldValues[1]) {
              updateModelValue();
            }
          });
          function flatten(source, childrenSource) {
            var stack = [...source];
            var flatArray = [];
            for (var i = 0; i < stack.length; i++) {
              var item = stack[i];
              flatArray.push(item);
              stack = stack.concat(childrenSource(item));
            }
            return flatArray;
          }
          function forceToArray(value, multiple) {
            if (value === undefined || value === null) {
              return [];
            } else if (Array.isArray(value)) {
              if (!multiple && value.length > 1) {
                return [value[0]];
              } else {
                return value;
              }
            } else {
              return [value];
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(ContentDropDownPicker), {
              onPrimaryButtonClicked: onSelect,
              onSecondaryButtonClicked: onCancel,
              onClearButtonClicked: onClear,
              iconCssClass: unref(pickerIconClass),
              showClear: unref(showClear),
              modelValue: internalValues.value,
              fullWidth: __props.fullWidth
            }, createSlots({
              innerLabel: withCtx(() => [createElementVNode("span", _hoisted_1, toDisplayString(unref(selectedNames)), 1)]),
              default: withCtx(() => [createVNode(unref(TreeList), {
                modelValue: internalValues.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalValues.value = $event),
                multiple: __props.multiple,
                items: __props.items,
                provider: __props.provider,
                "onUpdate:items": onUpdateItems,
                disableFolderSelection: __props.disableFolderSelection,
                autoExpand: __props.autoExpand,
                showChildCount: __props.showChildCount
              }, null, 8, ["modelValue", "multiple", "items", "provider", "disableFolderSelection", "autoExpand", "showChildCount"])]),
              _: 2
            }, [_ctx.$slots.pickerContentSuperHeader ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentSuperHeader")])
            } : undefined, _ctx.$slots.pickerContentHeader ? {
              name: "pickerContentHeader",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentHeader")])
            } : undefined, _ctx.$slots.pickerContentHeading ? {
              name: "pickerContentHeading",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentHeading")])
            } : undefined, _ctx.$slots.mainPickerActions ? {
              name: "mainPickerActions",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "mainPickerActions")])
            } : undefined, _ctx.$slots.primaryButtonLabel ? {
              name: "primaryButtonLabel",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "primaryButtonLabel")])
            } : undefined, _ctx.$slots.secondaryButtonLabel ? {
              name: "secondaryButtonLabel",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "secondaryButtonLabel")])
            } : undefined, _ctx.$slots.customPickerActions ? {
              name: "customPickerActions",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "customPickerActions")])
            } : undefined, _ctx.$slots.prepend ? {
              name: "prepend",
              fn: withCtx(_ref2 => {
                var isInputGroupSupported = _ref2.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.inputGroupPrepend ? {
              name: "inputGroupPrepend",
              fn: withCtx(_ref3 => {
                var isInputGroupSupported = _ref3.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "inputGroupPrepend", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined, _ctx.$slots.append ? {
              name: "append",
              fn: withCtx(_ref4 => {
                var isInputGroupSupported = _ref4.isInputGroupSupported;
                return [renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: isInputGroupSupported
                })];
              })
            } : undefined]), 1032, ["iconCssClass", "showClear", "modelValue", "fullWidth"]);
          };
        }
      }));

      script.__file = "Framework/Controls/treeItemPicker.obs";

    })
  };
}));
//# sourceMappingURL=treeItemPicker.obs.js.map
