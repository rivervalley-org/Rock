System.register(['vue', '@Obsidian/Utility/component', './contentDropDownPicker.obs', './addressControl.obs', './rockValidation', '@Obsidian/Utility/address', './loading'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementVNode, createVNode, renderSlot, standardRockFormFieldProps, useStandardRockFormFieldProps, updateRefValue, ContentDropDownPicker, AddressControl, RockValidation, validateAddress, Loading;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      renderSlot = module.renderSlot;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      validateAddress = module.validateAddress;
    }, function (module) {
      Loading = module["default"];
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

      var _hoisted_1 = ["innerHTML"];
      var _hoisted_2 = createTextVNode("Select");
      var script = exports('default', defineComponent({
        name: 'locationAddressPicker',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: Object,
            required: true
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var controlValue = ref(_objectSpread2({}, props.modelValue));
          var pickerValue = ref(_objectSpread2({}, props.modelValue));
          var pickerLabel = ref("");
          var errors = ref([]);
          var isLoading = ref(false);
          var showPopup = ref(false);
          var formFieldProps = useStandardRockFormFieldProps(props);
          function select() {
            return _select.apply(this, arguments);
          }
          function _select() {
            _select = _asyncToGenerator(function* () {
              isLoading.value = true;
              var response = yield validateAddress(_objectSpread2({}, controlValue.value));
              if (response.isSuccess && response.data) {
                if (response.data.isValid) {
                  var _response$data$addres;
                  errors.value = [];
                  pickerValue.value = _objectSpread2({}, response.data.address);
                  controlValue.value = _objectSpread2({}, response.data.address);
                  pickerLabel.value = (_response$data$addres = response.data.addressString) !== null && _response$data$addres !== void 0 ? _response$data$addres : "";
                  showPopup.value = false;
                } else {
                  var _response$data$errorM;
                  errors.value = [{
                    name: "Invalid",
                    text: (_response$data$errorM = response.data.errorMessage) !== null && _response$data$errorM !== void 0 ? _response$data$errorM : "Please enter a valid address."
                  }];
                }
              } else {
                var _response$errorMessag, _response$errorMessag2;
                console.error((_response$errorMessag = response.errorMessage) !== null && _response$errorMessag !== void 0 ? _response$errorMessag : "Unknown error while validating address.");
                errors.value = [{
                  name: "Server",
                  text: (_response$errorMessag2 = response.errorMessage) !== null && _response$errorMessag2 !== void 0 ? _response$errorMessag2 : "An unknown error occurred. Please try again."
                }];
              }
              isLoading.value = false;
            });
            return _select.apply(this, arguments);
          }
          function cancel() {
            controlValue.value = pickerValue.value;
          }
          function clear() {
            pickerValue.value = {};
            pickerLabel.value = "";
          }
          watch(() => props.modelValue, () => {
            updateRefValue(controlValue, _objectSpread2({}, props.modelValue));
            updateRefValue(pickerValue, _objectSpread2({}, props.modelValue));
          });
          watch(pickerValue, () => {
            emit("update:modelValue", pickerValue.value);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(ContentDropDownPicker), mergeProps(unref(formFieldProps), {
              modelValue: pickerValue.value,
              iconCssClass: "fa fa-map-marker",
              showClear: !!pickerValue.value,
              onPrimaryButtonClicked: select,
              onSecondaryButtonClicked: cancel,
              onClearButtonClicked: clear,
              pickerContentBoxHeight: "auto",
              disablePickerContentBoxScroll: "",
              disableAutoCloseOnPrimaryAction: "",
              showPopup: showPopup.value,
              "onUpdate:showPopup": _cache[1] || (_cache[1] = $event => showPopup.value = $event)
            }), createSlots({
              innerLabel: withCtx(() => [createElementVNode("span", {
                class: "selected-names",
                innerHTML: pickerLabel.value
              }, null, 8, _hoisted_1)]),
              primaryButtonLabel: withCtx(() => [createVNode(unref(Loading), {
                isLoading: isLoading.value
              }, {
                default: withCtx(() => [_hoisted_2]),
                _: 1
              }, 8, ["isLoading"])]),
              default: withCtx(() => [createVNode(unref(RockValidation), {
                errors: errors.value
              }, null, 8, ["errors"]), createVNode(unref(AddressControl), {
                modelValue: controlValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => controlValue.value = $event),
                rules: "required"
              }, null, 8, ["modelValue"])]),
              _: 2
            }, [_ctx.$slots.pickerContentSuperHeader ? {
              name: "pickerContentSuperHeader",
              fn: withCtx(() => [renderSlot(_ctx.$slots, "pickerContentSuperHeader")])
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
            } : undefined]), 1040, ["modelValue", "showClear", "showPopup"]);
          };
        }
      }));

      script.__file = "Framework/Controls/locationAddressPicker.obs";

    })
  };
}));
//# sourceMappingURL=locationAddressPicker.obs.js.map
