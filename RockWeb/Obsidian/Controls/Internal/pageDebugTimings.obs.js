System.register(['vue', './pageDebugTimingRow.obs', '@Obsidian/PageState'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createBlock, unref, createVNode, PageDebugTimingRow, useStore;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      unref = module.unref;
      createVNode = module.createVNode;
    }, function (module) {
      PageDebugTimingRow = module["default"];
    }, function (module) {
      useStore = module.useStore;
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

      var _hoisted_1 = {
        class: "table table-bordered table-striped debug-timings",
        style: {
          "width": "100%",
          "margin-bottom": "48px"
        }
      };
      var _hoisted_2 = createElementVNode("thead", null, [createElementVNode("tr", null, [createElementVNode("th", {
        class: "debug-timestamp"
      }, "Timestamp"), createElementVNode("th", null, "Event"), createElementVNode("th", {
        class: "debug-timestamp"
      }, "Duration"), createElementVNode("th", {
        class: "debug-waterfall"
      }, "Waterfall")])], -1);
      var script = exports('default', defineComponent({
        name: 'pageDebugTimings',
        props: {
          serverViewModels: {
            type: Array,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var store = useStore();
          var serverStartTimeMs = computed(() => {
            if (!props.serverViewModels.length) {
              return 0;
            }
            return props.serverViewModels[0].timestampMs;
          });
          var serverEndTimeMs = computed(() => {
            if (!props.serverViewModels.length) {
              return 0;
            }
            var lastIndex = props.serverViewModels.length - 1;
            var lastViewModel = props.serverViewModels[lastIndex];
            return lastViewModel.timestampMs + lastViewModel.durationMs;
          });
          var firstClientRelativeStartTimeMs = computed(() => {
            if (!relativeClientViewModels.value.length) {
              return serverEndTimeMs.value;
            }
            var viewModel = relativeClientViewModels.value[0];
            return viewModel.timestampMs;
          });
          var clientRelativeEndTimeMs = computed(() => {
            if (!relativeClientViewModels.value.length) {
              return serverEndTimeMs.value;
            }
            var lastIndex = relativeClientViewModels.value.length - 1;
            var lastViewModel = relativeClientViewModels.value[lastIndex];
            return lastViewModel.timestampMs + lastViewModel.durationMs;
          });
          var totalMs = computed(() => {
            return clientRelativeEndTimeMs.value - serverStartTimeMs.value;
          });
          var clientViewModels = computed(() => {
            return store.state.debugTimings;
          });
          var relativeClientViewModels = computed(() => {
            return clientViewModels.value.map(vm => _objectSpread2(_objectSpread2({}, vm), {}, {
              timestampMs: serverEndTimeMs.value + vm.timestampMs
            }));
          });
          var clientHeader = computed(() => {
            return {
              durationMs: firstClientRelativeStartTimeMs.value - serverEndTimeMs.value,
              indentLevel: 0,
              isTitleBold: true,
              title: "Client Mount Blocks",
              timestampMs: serverEndTimeMs.value,
              subTitle: ""
            };
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("span", null, [createElementVNode("table", _hoisted_1, [_hoisted_2, createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.serverViewModels, (vm, i) => {
              return openBlock(), createBlock(unref(PageDebugTimingRow), {
                key: "s".concat(i, "-").concat(vm.timestampMs),
                viewModel: vm,
                startTimeMs: unref(serverStartTimeMs),
                totalMs: unref(totalMs)
              }, null, 8, ["viewModel", "startTimeMs", "totalMs"]);
            }), 128)), createVNode(unref(PageDebugTimingRow), {
              viewModel: unref(clientHeader),
              startTimeMs: unref(serverStartTimeMs),
              totalMs: unref(totalMs)
            }, null, 8, ["viewModel", "startTimeMs", "totalMs"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(relativeClientViewModels), (vm, i) => {
              return openBlock(), createBlock(unref(PageDebugTimingRow), {
                key: "c".concat(i, "-").concat(vm.timestampMs),
                viewModel: vm,
                startTimeMs: unref(serverStartTimeMs),
                totalMs: unref(totalMs)
              }, null, 8, ["viewModel", "startTimeMs", "totalMs"]);
            }), 128))])])]);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/pageDebugTimings.obs";

    })
  };
}));
//# sourceMappingURL=pageDebugTimings.obs.js.map
