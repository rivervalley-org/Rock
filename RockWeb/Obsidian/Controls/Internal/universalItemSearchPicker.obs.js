System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Utility/util', '@Obsidian/Utility/http'], (function (exports) {
  'use strict';
  var defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString, Fragment, renderList, normalizeClass, createVNode, unref, withCtx, createCommentVNode, computed, watch, nextTick, createBlock, updateRefValue, ContentDropDownPicker, InlineCheckBox, TextBox, TransitionVerticalCollapse, debounce, useHttp;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      toDisplayString = module.toDisplayString;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
      createBlock = module.createBlock;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      useHttp = module.useHttp;
    }],
    execute: (function () {

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

      var _hoisted_1$1 = {
        class: "picker-select-item",
        style: {
          "list-style": "none"
        }
      };
      var _hoisted_2$1 = {
        class: "radio"
      };
      var _hoisted_3$1 = {
        class: "label-text d-flex gap"
      };
      var _hoisted_4$1 = {
        class: "flex-grow-1"
      };
      var _hoisted_5$1 = {
        class: "d-flex gap"
      };
      var _hoisted_6$1 = {
        key: 0,
        class: "picker-select-item-details"
      };
      var _hoisted_7 = {
        key: 0,
        class: "picker-select-item-description mb-2"
      };
      var _hoisted_8 = {
        class: "d-flex"
      };
      var _hoisted_9 = {
        class: "mr-2 text-nowrap"
      };
      var script$1 = defineComponent({
        name: 'universalItemSearchPickerResult.partial',
        props: {
          result: {
            type: Object,
            required: true
          },
          areDetailsAlwaysVisible: {
            type: Boolean,
            default: false
          }
        },
        emits: ["select"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var result = ref(props.result);
          var detailsVisible = ref(props.areDetailsAlwaysVisible);
          function getLabelClass(label) {
            return "label label-".concat(label.value);
          }
          function onItemSelected() {
            detailsVisible.value = true;
            emit("select", result.value);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("li", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createElementVNode("label", null, [createElementVNode("input", {
              type: "radio",
              name: "item-value",
              onClick: onItemSelected
            }), createElementVNode("span", _hoisted_3$1, [createElementVNode("span", _hoisted_4$1, toDisplayString(result.value.title), 1), createElementVNode("span", _hoisted_5$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(result.value.labels, label => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass(getLabelClass(label))
              }, toDisplayString(label.text), 3);
            }), 256))])])])]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [detailsVisible.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [result.value.description ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(result.value.description), 1)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(result.value.details, detail => {
                return openBlock(), createElementBlock("dl", _hoisted_8, [createElementVNode("dt", _hoisted_9, toDisplayString(detail.value), 1), createElementVNode("dd", null, toDisplayString(detail.text), 1)]);
              }), 256))])) : createCommentVNode("v-if", true)]),
              _: 1
            })]);
          };
        }
      });

      script$1.__file = "Framework/Controls/Internal/universalItemSearchPickerResult.partial.obs";

      var _hoisted_1 = {
        class: "picker-search-header"
      };
      var _hoisted_2 = createElementVNode("h4", null, "Search", -1);
      var _hoisted_3 = {
        class: "ml-auto"
      };
      var _hoisted_4 = createElementVNode("hr", null, null, -1);
      var _hoisted_5 = {
        class: "picker-select-list",
        style: {
          "padding": "0",
          "list-style": "none"
        }
      };
      var _hoisted_6 = {
        class: "selected-names"
      };
      var script = exports('default', defineComponent({
        name: 'universalItemSearchPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          iconCssClass: {
            type: String,
            required: false
          },
          areDetailsAlwaysVisible: {
            type: Boolean,
            default: false
          },
          isIncludeInactiveVisible: {
            type: Boolean,
            default: false
          },
          searchUrl: {
            type: String,
            required: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var showPopup = ref(false);
          var includeInactive = ref(false);
          var searchPanel = ref(null);
          var searchValue = ref("");
          var searchResults = ref([]);
          var performSearch = debounce(search);
          var searchCancellationToken = ref(false);
          var lastSelectedValue = null;
          var showClear = computed(() => {
            var _props$modelValue2;
            return !!((_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 && _props$modelValue2.value);
          });
          var selectedName = computed(() => {
            var _props$modelValue$tex, _props$modelValue3;
            return (_props$modelValue$tex = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "";
          });
          var pickerIconClass = computed(() => {
            return props.iconCssClass ? props.iconCssClass : undefined;
          });
          function updateModelValue() {
            emit("update:modelValue", internalValue.value);
          }
          function onClear() {
            emit("update:modelValue", null);
          }
          function onCancel() {
            showPopup.value = false;
          }
          function onSelect() {
            updateModelValue();
            showPopup.value = false;
          }
          function onItemSelected(item) {
            if (item.value === lastSelectedValue) {
              updateModelValue();
              showPopup.value = false;
            } else if (item.value) {
              lastSelectedValue = item.value;
              internalValue.value = {
                value: item.value,
                text: item.title
              };
            }
          }
          function onSearchValueChanged(value) {
            searchValue.value = value;
            performSearch();
          }
          function search() {
            return _search.apply(this, arguments);
          }
          function _search() {
            _search = _asyncToGenerator(function* () {
              var cancellationToken = ref(false);
              searchCancellationToken.value = true;
              searchCancellationToken = cancellationToken;
              if (!props.searchUrl || searchValue.value.length < 3) {
                return;
              }
              var payload = {
                value: searchValue.value,
                isInactiveIncluded: includeInactive.value
              };
              var result = yield http.post(props.searchUrl, undefined, payload);
              if (cancellationToken.value) {
                return;
              }
              if (result.isSuccess && result.data) {
                searchResults.value = result.data;
              }
            });
            return _search.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue4;
            updateRefValue(internalValue, (_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 ? _props$modelValue4 : null);
          });
          watch(showPopup, () => {
            if (showPopup.value) {
              searchCancellationToken.value = true;
              searchValue.value = "";
              searchResults.value = [];
              includeInactive.value = false;
              nextTick(() => {
                if (searchPanel.value) {
                  var input = searchPanel.value.querySelector(".universalitemsearchpicker-search-field");
                  input === null || input === void 0 ? void 0 : input.focus();
                }
              });
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(ContentDropDownPicker), {
              formGroupClasses: "universal-item-search-picker",
              pickerClass: "picker-universalitemsearch",
              modelValue: internalValue.value,
              iconCssClass: unref(pickerIconClass),
              showClear: unref(showClear),
              showPopup: showPopup.value,
              "onUpdate:showPopup": _cache[1] || (_cache[1] = $event => showPopup.value = $event),
              pickerContentBoxHeight: "400px",
              fullWidth: "",
              onPrimaryButtonClicked: onSelect,
              onSecondaryButtonClicked: onCancel,
              onClearButtonClicked: onClear
            }, {
              pickerContentSuperHeader: withCtx(() => [createElementVNode("div", _hoisted_1, [_hoisted_2, createElementVNode("div", _hoisted_3, [__props.isIncludeInactiveVisible ? (openBlock(), createBlock(unref(InlineCheckBox), {
                key: 0,
                modelValue: includeInactive.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => includeInactive.value = $event),
                label: "Include Inactive",
                class: "mt-0 mb-0"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", {
                ref_key: "searchPanel",
                ref: searchPanel,
                class: "universalitemsearchpicker-search-panel"
              }, [createVNode(unref(TextBox), {
                modelValue: searchValue.value,
                inputClasses: "universalitemsearchpicker-search-field",
                "onUpdate:modelValue": onSearchValueChanged
              }, null, 8, ["modelValue"])], 512), _hoisted_4]),
              innerLabel: withCtx(() => [createElementVNode("span", _hoisted_6, toDisplayString(unref(selectedName)), 1)]),
              default: withCtx(() => [createElementVNode("div", null, [createElementVNode("ul", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, result => {
                return openBlock(), createBlock(unref(script$1), {
                  result: result,
                  areDetailsAlwaysVisible: __props.areDetailsAlwaysVisible,
                  onSelect: $event => onItemSelected(result)
                }, null, 8, ["result", "areDetailsAlwaysVisible", "onSelect"]);
              }), 256))])])]),
              _: 1
            }, 8, ["modelValue", "iconCssClass", "showClear", "showPopup"]);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/universalItemSearchPicker.obs";

    })
  };
}));
//# sourceMappingURL=universalItemSearchPicker.obs.js.map
