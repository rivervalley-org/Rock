System.register(['@Obsidian/Utility/numberUtils', 'vue', '@Obsidian/PageState'], (function (exports) {
  'use strict';
  var asFormattedString, defineComponent, useStore;
  return {
    setters: [function (module) {
      asFormattedString = module.asFormattedString;
    }, function (module) {
      defineComponent = module.defineComponent;
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

      var store = useStore();
      var pageDebugTimingRow = defineComponent({
        name: "PageDebugTimingRow",
        props: {
          viewModel: {
            type: Object,
            required: true
          },
          startTimeMs: {
            type: Number,
            required: true
          },
          totalMs: {
            type: Number,
            required: true
          }
        },
        methods: {
          numberAsFormattedString: asFormattedString
        },
        computed: {
          indentStyle() {
            if (!this.viewModel.indentLevel) {
              return "";
            }
            var pixels = this.viewModel.indentLevel * 24;
            return "padding-left: ".concat(pixels, "px");
          },
          waterfallTitle() {
            var timestampString = this.numberAsFormattedString(this.viewModel.timestampMs, 2);
            var durationString = this.numberAsFormattedString(this.viewModel.durationMs, 2);
            return "Started at ".concat(timestampString, " ms / Duration ").concat(durationString, " ms");
          },
          getPercentFromMs() {
            return ms => {
              if (!this.totalMs) {
                return 0;
              }
              var msFromStart = ms - this.startTimeMs;
              return msFromStart / this.totalMs * 100;
            };
          },
          waterfallStyle() {
            var leftPercent = this.getPercentFromMs(this.viewModel.timestampMs);
            var widthPercent = this.getPercentFromMs(this.viewModel.durationMs);
            return "left: ".concat(leftPercent, "%; width: ").concat(widthPercent, "%;");
          }
        },
        template: "\n<tr>\n    <td class=\"debug-timestamp\">{{numberAsFormattedString(viewModel.timestampMs, 2)}} ms</td>\n    <td :style=\"indentStyle\">\n        <strong v-if=\"viewModel.isTitleBold\">\n            {{viewModel.title}}\n        </strong>\n        <template v-else>\n            {{viewModel.title}}\n        </template>\n        <small v-if=\"viewModel.subTitle\" style=\"color:#A4A4A4; padding-left: 3px;\">\n            {{viewModel.subTitle}}\n        </small>\n    </td>\n    <td class=\"debug-timestamp\">{{numberAsFormattedString(viewModel.durationMs, 2)}} ms</td>\n    <td class=\"debug-waterfall\">\n        <span class=\"debug-chart-bar\" :title=\"waterfallTitle\" :style=\"waterfallStyle\"></span>\n    </td>\n</tr>"
      });
      var pageDebugTimings = exports('default', defineComponent({
        name: "PageDebugTimings",
        components: {
          PageDebugTimingRow: pageDebugTimingRow
        },
        props: {
          serverViewModels: {
            type: Array,
            required: true
          }
        },
        computed: {
          serverStartTimeMs() {
            if (!this.serverViewModels.length) {
              return 0;
            }
            return this.serverViewModels[0].timestampMs;
          },
          serverEndTimeMs() {
            if (!this.serverViewModels.length) {
              return 0;
            }
            var lastIndex = this.serverViewModels.length - 1;
            var lastViewModel = this.serverViewModels[lastIndex];
            return lastViewModel.timestampMs + lastViewModel.durationMs;
          },
          firstClientRelativeStartTimeMs() {
            if (!this.relativeClientViewModels.length) {
              return this.serverEndTimeMs;
            }
            var viewModel = this.relativeClientViewModels[0];
            return viewModel.timestampMs;
          },
          clientRelativeEndTimeMs() {
            if (!this.relativeClientViewModels.length) {
              return this.serverEndTimeMs;
            }
            var lastIndex = this.relativeClientViewModels.length - 1;
            var lastViewModel = this.relativeClientViewModels[lastIndex];
            return lastViewModel.timestampMs + lastViewModel.durationMs;
          },
          totalMs() {
            return this.clientRelativeEndTimeMs - this.serverStartTimeMs;
          },
          clientViewModels() {
            return store.state.debugTimings;
          },
          relativeClientViewModels() {
            return this.clientViewModels.map(vm => _objectSpread2(_objectSpread2({}, vm), {}, {
              timestampMs: this.serverEndTimeMs + vm.timestampMs
            }));
          },
          clientHeader() {
            return {
              durationMs: this.firstClientRelativeStartTimeMs - this.serverEndTimeMs,
              indentLevel: 0,
              isTitleBold: true,
              title: "Client Mount Blocks",
              timestampMs: this.serverEndTimeMs,
              subTitle: ""
            };
          }
        },
        template: "\n<span>\n    <table class=\"table table-bordered table-striped debug-timings\" style=\"width:100%; margin-bottom: 48px;\">\n        <thead>\n            <tr>\n                <th class=\"debug-timestamp\">Timestamp</th>\n                <th>Event</th>\n                <th class=\"debug-timestamp\">Duration</th>\n                <th class=\"debug-waterfall\">Waterfall</th>\n            </tr>\n        </thead>\n        <tbody>\n            <PageDebugTimingRow v-for=\"(vm, i) in serverViewModels\" :key=\"`s${i}-${vm.timestampMs}`\" :viewModel=\"vm\" :startTimeMs=\"serverStartTimeMs\" :totalMs=\"totalMs\" />\n            <PageDebugTimingRow :viewModel=\"clientHeader\" :startTimeMs=\"serverStartTimeMs\" :totalMs=\"totalMs\" />\n            <PageDebugTimingRow v-for=\"(vm, i) in relativeClientViewModels\" :key=\"`c${i}-${vm.timestampMs}`\" :viewModel=\"vm\" :startTimeMs=\"serverStartTimeMs\" :totalMs=\"totalMs\" />\n        </tbody>\n    </table>\n</span>"
      }));

    })
  };
}));
//# sourceMappingURL=pageDebugTimings.js.map
