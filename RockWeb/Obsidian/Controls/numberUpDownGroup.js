System.register(['vue', './numberUpDown', './rockFormField'], (function (exports) {
  'use strict';
  var defineComponent, NumberUpDownInternal, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
    }, function (module) {
      NumberUpDownInternal = module.NumberUpDownInternal;
    }, function (module) {
      RockFormField = module["default"];
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

      var numberUpDownGroup = exports('default', defineComponent({
        name: "NumberUpDownGroup",
        components: {
          RockFormField,
          NumberUpDownInternal
        },
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Array,
            required: true
          }
        },
        computed: {
          total() {
            var total = 0;
            var _iterator = _createForOfIteratorHelper(this.options),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var option = _step.value;
                total += this.modelValue[option.key] || 0;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return total;
          }
        },
        template: "\n<RockFormField\n    :modelValue=\"total\"\n    formGroupClasses=\"margin-b-md number-up-down-group\"\n    name=\"numberupdowngroup\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div v-for=\"option in options\" :key=\"option.key\" class=\"margin-l-sm margin-b-sm\">\n                <div v-if=\"option.label\" class=\"margin-b-sm\">\n                    {{option.label}}\n                </div>\n                <NumberUpDownInternal v-model=\"modelValue[option.key]\" :min=\"option.min\" :max=\"option.max\" class=\"margin-t-sm\" />\n            </div>\n        </div>\n    </template>\n</RockFormField>"
      }));

    })
  };
}));
//# sourceMappingURL=numberUpDownGroup.js.map
