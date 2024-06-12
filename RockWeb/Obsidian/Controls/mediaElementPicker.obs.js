System.register(['vue', '@Obsidian/Utility/component', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', './baseAsyncPicker.obs', './rockButton.obs', './rockFormField.obs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, withCtx, createCommentVNode, createSlots, createVNode, withModifiers, nextTick, standardRockFormFieldProps, useStandardAsyncPickerProps, useStandardRockFormFieldProps, updateRefValue, standardAsyncPickerProps, ControlLazyMode, emptyGuid, useHttp, BaseAsyncPicker, RockButton, RockFormField;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createSlots = module.createSlots;
      createVNode = module.createVNode;
      withModifiers = module.withModifiers;
      nextTick = module.nextTick;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      useStandardAsyncPickerProps = module.useStandardAsyncPickerProps;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      standardAsyncPickerProps = module.standardAsyncPickerProps;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockFormField = module["default"];
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

      var _hoisted_1 = {
        class: "input-group-addon"
      };
      var _hoisted_2 = createElementVNode("i", {
        class: "fa fa-refresh"
      }, null, -1);
      var _hoisted_3 = {
        class: "input-group-addon"
      };
      var _hoisted_4 = createElementVNode("i", {
        class: "fa fa-refresh"
      }, null, -1);
      var script = exports('default', defineComponent({
        name: 'mediaElementPicker',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          account: {
            type: Object,
            default: null
          },
          folder: {
            type: Object,
            default: null
          },
          modelValue: {
            type: Object,
            default: null
          },
          hideAccountPicker: {
            type: Boolean,
            default: false
          },
          hideFolderPicker: {
            type: Boolean,
            default: false
          },
          hideMediaPicker: {
            type: Boolean,
            default: false
          },
          hideRefreshButtons: {
            type: Boolean,
            default: false
          },
          mediaElementLabel: {
            type: String,
            default: "Media"
          }
        }, standardAsyncPickerProps),
        emits: ["update:account", "update:folder", "update:modelValue"],
        setup(__props, _ref) {
          var _internalMediaElement, _internalMediaFolder$, _internalMediaAccount;
          var emit = _ref.emit;
          var props = __props;
          var internalMediaAccount = ref(props.account);
          var internalMediaFolder = ref(props.folder);
          var internalMediaElement = ref(props.modelValue);
          var mediaAccountItems = ref(null);
          var mediaFolderItems = ref(null);
          var mediaElementItems = ref(null);
          var standardProps = useStandardAsyncPickerProps(props);
          var formFieldProps = useStandardRockFormFieldProps(props);
          var pauseModelWatching = false;
          var http = useHttp();
          function loadItems(_x) {
            return _loadItems.apply(this, arguments);
          }
          function _loadItems() {
            _loadItems = _asyncToGenerator(function* (apiAction) {
              var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var result = yield http.post("/api/v2/Controls/" + apiAction, undefined, payload);
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                return [];
              }
            });
            return _loadItems.apply(this, arguments);
          }
          function loadMediaAccounts() {
            return _loadMediaAccounts.apply(this, arguments);
          }
          function _loadMediaAccounts() {
            _loadMediaAccounts = _asyncToGenerator(function* () {
              return loadItems("MediaElementPickerGetMediaAccounts");
            });
            return _loadMediaAccounts.apply(this, arguments);
          }
          function loadMediaFolders() {
            return _loadMediaFolders.apply(this, arguments);
          }
          function _loadMediaFolders() {
            _loadMediaFolders = _asyncToGenerator(function* () {
              var _internalMediaAccount2;
              var options = {
                mediaAccountGuid: ((_internalMediaAccount2 = internalMediaAccount.value) === null || _internalMediaAccount2 === void 0 ? void 0 : _internalMediaAccount2.value) || emptyGuid
              };
              return loadItems("MediaElementPickerGetMediaFolders", options);
            });
            return _loadMediaFolders.apply(this, arguments);
          }
          function loadMediaElements() {
            return _loadMediaElements.apply(this, arguments);
          }
          function _loadMediaElements() {
            _loadMediaElements = _asyncToGenerator(function* () {
              var _internalMediaFolder$2;
              var options = {
                mediaFolderGuid: ((_internalMediaFolder$2 = internalMediaFolder.value) === null || _internalMediaFolder$2 === void 0 ? void 0 : _internalMediaFolder$2.value) || emptyGuid
              };
              return loadItems("MediaElementPickerGetMediaElements", options);
            });
            return _loadMediaElements.apply(this, arguments);
          }
          function loadFullTree(_x2) {
            return _loadFullTree.apply(this, arguments);
          }
          function _loadFullTree() {
            _loadFullTree = _asyncToGenerator(function* (payload) {
              var result = yield http.post("/api/v2/Controls/MediaElementPickerGetMediaTree", undefined, payload);
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage2;
                console.error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while loading data.");
                return;
              }
              var data = result.data;
              pauseModelWatching = true;
              if (data.mediaAccounts) {
                mediaAccountItems.value = data.mediaAccounts;
              }
              if (data.mediaFolders) {
                mediaFolderItems.value = data.mediaFolders;
              }
              if (data.mediaElements) {
                mediaElementItems.value = data.mediaElements;
              }
              if (data.mediaAccount) {
                internalMediaAccount.value = data.mediaAccount;
              }
              if (data.mediaFolder) {
                internalMediaFolder.value = data.mediaFolder;
              }
              if (data.mediaElement) {
                internalMediaElement.value = data.mediaElement;
              }
              yield nextTick();
              pauseModelWatching = false;
            });
            return _loadFullTree.apply(this, arguments);
          }
          function fetchMediaAccounts() {
            mediaAccountItems.value = () => loadMediaAccounts();
          }
          function fetchMediaFolders() {
            mediaFolderItems.value = () => loadMediaFolders();
          }
          function fetchMediaElements() {
            mediaElementItems.value = () => loadMediaElements();
          }
          var hideAccountPicker = computed(() => {
            return props.hideAccountPicker && internalMediaAccount.value != null;
          });
          var hideFolderPicker = computed(() => {
            return props.hideFolderPicker && internalMediaFolder.value != null;
          });
          watch(internalMediaAccount, () => {
            emit("update:account", internalMediaAccount.value);
            if (pauseModelWatching) return;
            internalMediaFolder.value = null;
            if (internalMediaAccount.value != null) {
              fetchMediaFolders();
            }
          });
          watch(internalMediaFolder, () => {
            emit("update:folder", internalMediaFolder.value);
            if (pauseModelWatching) return;
            internalMediaElement.value = null;
            if (internalMediaFolder.value != null) {
              fetchMediaElements();
            }
          });
          watch(internalMediaElement, () => {
            emit("update:modelValue", internalMediaElement.value);
          });
          watch(() => props.account, () => {
            if (updateRefValue(internalMediaAccount, props.account) && internalMediaAccount.value != null) {
              loadFullTree({
                mediaAccountGuid: internalMediaAccount.value.value
              });
            }
          });
          watch(() => props.folder, () => {
            if (updateRefValue(internalMediaFolder, props.folder) && internalMediaFolder.value != null) {
              loadFullTree({
                mediaFolderGuid: internalMediaFolder.value.value
              });
            }
          });
          watch(() => props.modelValue, () => {
            if (updateRefValue(internalMediaElement, props.modelValue) && internalMediaElement.value != null) {
              loadFullTree({
                mediaElementGuid: internalMediaElement.value.value
              });
            }
          });
          if ((_internalMediaElement = internalMediaElement.value) !== null && _internalMediaElement !== void 0 && _internalMediaElement.value) {
            loadFullTree({
              mediaElementGuid: internalMediaElement.value.value
            });
          } else if ((_internalMediaFolder$ = internalMediaFolder.value) !== null && _internalMediaFolder$ !== void 0 && _internalMediaFolder$.value) {
            loadFullTree({
              mediaFolderGuid: internalMediaFolder.value.value
            });
          } else if ((_internalMediaAccount = internalMediaAccount.value) !== null && _internalMediaAccount !== void 0 && _internalMediaAccount.value) {
            loadFullTree({
              mediaAccountGuid: internalMediaAccount.value.value
            });
          } else {
            fetchMediaAccounts();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps(unref(formFieldProps), {
              modelValue: internalMediaElement.value,
              name: "media-element-picker"
            }), {
              default: withCtx(() => [!unref(hideAccountPicker) ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
                key: 0,
                modelValue: internalMediaAccount.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalMediaAccount.value = $event)
              }, unref(standardProps), {
                label: "Account",
                multiple: false,
                items: mediaAccountItems.value,
                showBlankItem: ""
              }), null, 16, ["modelValue", "items"])) : createCommentVNode("v-if", true), internalMediaAccount.value && !unref(hideFolderPicker) ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
                key: 1,
                modelValue: internalMediaFolder.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalMediaFolder.value = $event)
              }, unref(standardProps), {
                label: "Folder",
                multiple: false,
                items: mediaFolderItems.value,
                showBlankItem: "",
                lazyMode: unref(ControlLazyMode).Eager
              }), createSlots({
                _: 2
              }, [!__props.hideRefreshButtons ? {
                name: "inputGroupAppend",
                fn: withCtx(() => [createElementVNode("span", _hoisted_1, [createVNode(unref(RockButton), {
                  isSquare: "",
                  onClick: withModifiers(fetchMediaFolders, ["prevent"])
                }, {
                  default: withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["onClick"])])])
              } : undefined]), 1040, ["modelValue", "items", "lazyMode"])) : createCommentVNode("v-if", true), internalMediaFolder.value && !__props.hideMediaPicker ? (openBlock(), createBlock(unref(BaseAsyncPicker), mergeProps({
                key: 2,
                modelValue: internalMediaElement.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => internalMediaElement.value = $event)
              }, unref(standardProps), {
                label: __props.mediaElementLabel,
                items: mediaElementItems.value,
                showBlankItem: "",
                lazyMode: unref(ControlLazyMode).Eager
              }), createSlots({
                _: 2
              }, [!__props.hideRefreshButtons ? {
                name: "inputGroupAppend",
                fn: withCtx(() => [createElementVNode("span", _hoisted_3, [createVNode(unref(RockButton), {
                  isSquare: "",
                  onClick: withModifiers(fetchMediaElements, ["prevent"])
                }, {
                  default: withCtx(() => [_hoisted_4]),
                  _: 1
                }, 8, ["onClick"])])])
              } : undefined]), 1040, ["modelValue", "label", "items", "lazyMode"])) : createCommentVNode("v-if", true)]),
              _: 1
            }, 16, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/mediaElementPicker.obs";

    })
  };
}));
//# sourceMappingURL=mediaElementPicker.obs.js.map
