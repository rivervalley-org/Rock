System.register(['vue', '@Obsidian/Controls/mediaSelector.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/keyValueList.obs', '@Obsidian/Utility/component', './fieldType', './utils', '@Obsidian/Enums/Controls/mediaSelectorMode', '@Obsidian/Utility/numberUtils'], (function (exports, module) {
  'use strict';
  var defineComponent, inject, ref, watch, MediaSelector, DropDownList, TextBox, KeyValueList, defineAsyncComponent, getFieldEditorProps, getFieldConfigurationProps, MediaSelectorMode, toNumber;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      inject = module.inject;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      MediaSelector = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
    }, function (module) {
      defineAsyncComponent = module.defineAsyncComponent;
    }, function () {}, function (module) {
      getFieldEditorProps = module.getFieldEditorProps;
      getFieldConfigurationProps = module.getFieldConfigurationProps;
    }, function (module) {
      MediaSelectorMode = module.MediaSelectorMode;
    }, function (module) {
      toNumber = module.toNumber;
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

      var ConfigurationValueKey = function (ConfigurationValueKey) {
        ConfigurationValueKey["MediaItems"] = "mediaitems";
        ConfigurationValueKey["Mode"] = "modetype";
        ConfigurationValueKey["ItemWidth"] = "itemwidth";
        return ConfigurationValueKey;
      }({});
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./mediaSelectorFieldComponents')).EditComponent;
      }));
      defineAsyncComponent(_asyncToGenerator(function* () {
        return (yield module.import('./mediaSelectorFieldComponents')).ConfigurationComponent;
      }));

      function parseKeyValueItemValue(keyValueItemValue) {
        try {
          return JSON.parse(keyValueItemValue !== null && keyValueItemValue !== void 0 ? keyValueItemValue : "[]");
        } catch (_unused) {
          return [];
        }
      }
      function parseMediaSelectorMode(modeNumber) {
        var mediaSelectorModeNumber = toNumber(modeNumber);
        return mediaSelectorModeNumber == 0 ? MediaSelectorMode.Image : MediaSelectorMode.Audio;
      }
      var EditComponent = exports('EditComponent', defineComponent({
        name: "MediaSelectorField.Edit",
        components: {
          MediaSelector
        },
        props: getFieldEditorProps(),
        setup() {
          return {
            isRequired: inject("isRequired")
          };
        },
        data() {
          return {
            internalValue: []
          };
        },
        computed: {
          options() {
            try {
              var _this$configurationVa;
              var ds = JSON.parse((_this$configurationVa = this.configurationValues[ConfigurationValueKey.MediaItems]) !== null && _this$configurationVa !== void 0 ? _this$configurationVa : "[]");
              return ds.map(v => {
                return {
                  key: v.key,
                  value: v.value
                };
              });
            } catch (_unused2) {
              return [];
            }
          },
          itemWidth() {
            var _this$configurationVa2;
            return (_this$configurationVa2 = this.configurationValues[ConfigurationValueKey.ItemWidth]) !== null && _this$configurationVa2 !== void 0 ? _this$configurationVa2 : "";
          },
          mode() {
            try {
              return parseMediaSelectorMode(this.configurationValues[ConfigurationValueKey.Mode]);
            } catch (_unused3) {
              return MediaSelectorMode.Image;
            }
          }
        },
        watch: {
          internalValue() {
            this.$emit("update:modelValue", this.internalValue.join(","));
          },
          modelValue: {
            immediate: true,
            handler() {
              var value = this.modelValue || "";
              this.internalValue = value !== "" ? value.split(",") : [];
            }
          }
        },
        template: "\n<MediaSelector v-model=\"internalValue\" :mediaItems=\"options\" :mode=\"mode\" :itemWidth=\"itemWidth\" />\n"
      }));
      var mediaSelectorOptions = [{
        value: "0",
        text: "Image"
      }, {
        value: "1",
        text: "Audio"
      }];
      var ConfigurationComponent = exports('ConfigurationComponent', defineComponent({
        name: "MediaSelectorField.Configuration",
        components: {
          DropDownList,
          TextBox,
          KeyValueList
        },
        props: getFieldConfigurationProps(),
        emits: ["update:modelValue", "updateConfiguration", "updateConfigurationValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var itemWidth = ref("");
          var mediaItems = ref([]);
          var mode = ref("");
          var maybeUpdateModelValue = () => {
            var _itemWidth$value, _mode$value$toString, _mode$value, _mediaItems$value, _props$modelValue$Con, _props$modelValue$Con2;
            var newValue = _objectSpread2({}, props.modelValue);
            newValue[ConfigurationValueKey.ItemWidth] = (_itemWidth$value = itemWidth.value) !== null && _itemWidth$value !== void 0 ? _itemWidth$value : "";
            newValue[ConfigurationValueKey.Mode] = (_mode$value$toString = (_mode$value = mode.value) === null || _mode$value === void 0 ? void 0 : _mode$value.toString()) !== null && _mode$value$toString !== void 0 ? _mode$value$toString : "0";
            newValue[ConfigurationValueKey.MediaItems] = JSON.stringify((_mediaItems$value = mediaItems.value) !== null && _mediaItems$value !== void 0 ? _mediaItems$value : []);
            var anyValueChanged = newValue[ConfigurationValueKey.ItemWidth] !== ((_props$modelValue$Con = props.modelValue[ConfigurationValueKey.ItemWidth]) !== null && _props$modelValue$Con !== void 0 ? _props$modelValue$Con : "") || newValue[ConfigurationValueKey.Mode] !== props.modelValue[ConfigurationValueKey.Mode] || newValue[ConfigurationValueKey.MediaItems] !== ((_props$modelValue$Con2 = props.modelValue[ConfigurationValueKey.MediaItems]) !== null && _props$modelValue$Con2 !== void 0 ? _props$modelValue$Con2 : []);
            if (anyValueChanged) {
              emit("update:modelValue", newValue);
              return true;
            } else {
              return false;
            }
          };
          var maybeUpdateConfiguration = (key, value) => {
            if (maybeUpdateModelValue()) {
              emit("updateConfigurationValue", key, value);
            }
          };
          watch(() => [props.modelValue, props.configurationProperties], () => {
            var _props$modelValue$Con3, _props$modelValue$Con4;
            mode.value = (_props$modelValue$Con3 = props.modelValue[ConfigurationValueKey.Mode]) !== null && _props$modelValue$Con3 !== void 0 ? _props$modelValue$Con3 : "0";
            mediaItems.value = parseKeyValueItemValue(props.modelValue[ConfigurationValueKey.MediaItems]);
            itemWidth.value = (_props$modelValue$Con4 = props.modelValue[ConfigurationValueKey.ItemWidth]) !== null && _props$modelValue$Con4 !== void 0 ? _props$modelValue$Con4 : "";
          }, {
            immediate: true
          });
          watch(mode, () => {
            var _mode$toString;
            return maybeUpdateConfiguration(ConfigurationValueKey.Mode, (_mode$toString = mode.toString()) !== null && _mode$toString !== void 0 ? _mode$toString : MediaSelectorMode.Image);
          });
          watch(mediaItems, () => {
            var _JSON$stringify;
            return maybeUpdateConfiguration(ConfigurationValueKey.MediaItems, (_JSON$stringify = JSON.stringify(mediaItems.value)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "");
          }, {
            deep: true
          });
          watch(itemWidth, () => {
            var _itemWidth$value2;
            return maybeUpdateConfiguration(ConfigurationValueKey.ItemWidth, (_itemWidth$value2 = itemWidth.value) !== null && _itemWidth$value2 !== void 0 ? _itemWidth$value2 : "50px");
          });
          return {
            mediaItems,
            itemWidth,
            mode,
            mediaSelectorOptions
          };
        },
        template: "\n<div>\n    <DropDownList v-model=\"mode\"\n        label=\"Mode\"\n        :items=\"mediaSelectorOptions\"\n        :showBlankItem=\"false\" />\n\n    <TextBox v-model=\"itemWidth\"\n        label=\"Item Width\"\n        help=\"The width of each media item in pixels or percentage.\" />\n\n    <KeyValueList v-model=\"mediaItems\"\n        label=\"Media Items\"\n        help=\"The items to display. The key will be the name of the item and the value should be the URL to the media file.\" />\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=mediaSelectorFieldComponents.js.map
