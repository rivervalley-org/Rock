System.register(['vue', '@Obsidian/Utility/treeItemProviders', './treeItemPicker.obs', './rockButton', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/PageState', './baseAsyncPicker', '@Obsidian/Utility/http', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/guid', '@Obsidian/Utility/component', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, withDirectives, createElementBlock, toDisplayString, createVNode, vShow, createCommentVNode, nextTick, PageTreeItemProvider, TreeItemPicker, RockButton, BtnType, BtnSize, useStore, BaseAsyncPicker, useHttp, PickerDisplayStyle, ControlLazyMode, emptyGuid, useStandardRockFormFieldProps, standardRockFormFieldProps, Dialogs;
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
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      createElementBlock = module.createElementBlock;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      vShow = module.vShow;
      createCommentVNode = module.createCommentVNode;
      nextTick = module.nextTick;
    }, function (module) {
      PageTreeItemProvider = module.PageTreeItemProvider;
    }, function (module) {
      TreeItemPicker = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      BaseAsyncPicker = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      Dialogs = module;
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

      var _hoisted_1 = createElementVNode("i", {
        class: "fa fa-file-o"
      }, null, -1);
      var _hoisted_2 = {
        key: 0,
        class: "input-max-w-xl"
      };
      var _hoisted_3 = {
        class: "d-block small mt-1 mb-2"
      };
      var script = exports('default', defineComponent({
        name: 'pagePicker',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          securityGrantToken: {
            type: String,
            required: false
          },
          showSelectCurrentPage: {
            type: Boolean,
            default: false
          },
          hidePageGuids: {
            type: Array,
            required: false
          },
          promptForPageRoute: {
            type: Boolean,
            default: false
          },
          multiple: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var open = ref(null);
          var internalPageValue = computed(() => {
            if (!props.modelValue) {
              return null;
            }
            if (Array.isArray(props.modelValue)) {
              if (props.multiple) {
                return props.modelValue.map(item => item.page);
              }
              emit("update:modelValue", {
                page: props.modelValue[0].page
              });
              return props.modelValue[0].page;
            }
            return props.modelValue.page;
          });
          var pagePickerValue = computed(() => {
            if (internalRouteValue.value) {
              var route = internalRouteValue.value;
              var page = internalPageValue.value;
              return {
                value: page.value,
                text: "".concat(page.text, " (").concat(route.text, ")")
              };
            }
            return internalPageValue.value;
          });
          function updatePage(pages) {
            var _internalPageValue$va;
            if (!pages) {
              if (props.multiple) {
                emit("update:modelValue", []);
              } else {
                emit("update:modelValue", null);
              }
            } else if (props.multiple) {
              emit("update:modelValue", pages.map(page => ({
                page
              })));
            } else if (pages.value == ((_internalPageValue$va = internalPageValue.value) === null || _internalPageValue$va === void 0 ? void 0 : _internalPageValue$va.value)) {
              emit("update:modelValue", {
                page: internalPageValue.value
              });
            } else {
              emit("update:modelValue", {
                page: pages
              });
            }
          }
          var pageStore = useStore();
          var pageGuid = pageStore.state.pageGuid;
          var currentPage;
          function selectCurrentPage() {
            return _selectCurrentPage.apply(this, arguments);
          }
          function _selectCurrentPage() {
            _selectCurrentPage = _asyncToGenerator(function* () {
              if (currentPage) {
                updatePage(props.multiple ? [currentPage] : currentPage);
                refreshProvider();
                return;
              }
              var options = {
                pageGuid,
                securityGrantToken: props.securityGrantToken
              };
              var response = yield http.post("/api/v2/Controls/PagePickerGetPageName", {}, options);
              if (response.isSuccess && response.data) {
                currentPage = {
                  text: response.data,
                  value: pageGuid
                };
                updatePage(props.multiple ? [currentPage] : currentPage);
              } else if (response.statusCode == 401) {
                Dialogs.alert("Could not determine current page");
                return;
              } else {
                console.error("Error", response.errorMessage);
                updatePage(props.multiple ? [{
                  value: pageGuid
                }] : {
                  value: pageGuid
                });
              }
              yield nextTick();
              refreshProvider();
            });
            return _selectCurrentPage.apply(this, arguments);
          }
          var itemProvider = ref(new PageTreeItemProvider());
          refreshProvider();
          function refreshProvider() {
            var prov = new PageTreeItemProvider();
            prov.securityGrantToken = props.securityGrantToken;
            prov.hidePageGuids = props.hidePageGuids;
            if (internalPageValue.value) {
              if (Array.isArray(internalPageValue.value)) {
                prov.selectedPageGuids = internalPageValue.value.map(p => {
                  var _p$value;
                  return (_p$value = p === null || p === void 0 ? void 0 : p.value) !== null && _p$value !== void 0 ? _p$value : emptyGuid;
                });
              } else {
                var _internalPageValue$va2;
                prov.selectedPageGuids = [(_internalPageValue$va2 = internalPageValue.value.value) !== null && _internalPageValue$va2 !== void 0 ? _internalPageValue$va2 : emptyGuid];
              }
            }
            itemProvider.value = prov;
          }
          var shouldPromptForRoute = computed(() => !props.multiple && props.promptForPageRoute);
          var internalRouteValue = computed(() => {
            if (!props.modelValue || Array.isArray(props.modelValue) || !shouldPromptForRoute.value) {
              return null;
            }
            return props.modelValue.route;
          });
          var isRoutePickerVisible = computed(() => {
            return shouldPromptForRoute.value && !internalRouteValue.value && !!internalPageValue.value;
          });
          function updateRoute(route) {
            if (Array.isArray(route)) {
              route = route[0];
            }
            emit("update:modelValue", {
              page: internalPageValue.value,
              route
            });
          }
          var loadedItems = ref(null);
          var actualRouteItems = computed(() => {
            return loadedItems.value || loadOptions;
          });
          var routeItemsCount = computed(() => {
            if (Array.isArray(actualRouteItems.value)) {
              return actualRouteItems.value.length;
            }
            return 0;
          });
          var routeCountText = computed(() => {
            if (routeItemsCount.value == 1) {
              return "( 1 route exists )";
            }
            return "( ".concat(routeItemsCount.value, " routes exist )");
          });
          var loadOptions = function () {
            var _ref2 = _asyncToGenerator(function* () {
              if (Array.isArray(internalPageValue.value)) {
                return [];
              }
              var options = {
                pageGuid: internalPageValue.value.value
              };
              var result = yield http.post("/api/v2/Controls/PagePickerGetPageRoutes", undefined, options);
              if (result.isSuccess && result.data) {
                loadedItems.value = result.data;
                return result.data;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
                loadedItems.value = [];
                return [];
              }
            });
            return function loadOptions() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(internalPageValue, () => {
            loadedItems.value = null;
          });
          var routePickerDisplayStyle = PickerDisplayStyle.Condensed;
          var isLazy = ControlLazyMode.Eager;
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), mergeProps(unref(standardFieldProps), {
              modelValue: unref(pagePickerValue),
              "onUpdate:modelValue": updatePage,
              formGroupClasses: "location-item-picker",
              iconCssClass: "fa fa-file",
              provider: itemProvider.value,
              multiple: __props.multiple,
              autoExpand: true
            }), createSlots({
              append: withCtx(() => [unref(isRoutePickerVisible) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("span", _hoisted_3, toDisplayString(unref(routeCountText)), 1), createVNode(unref(BaseAsyncPicker), {
                modelValue: unref(internalRouteValue),
                "onUpdate:modelValue": updateRoute,
                showBlankItem: "",
                lazyMode: unref(isLazy),
                displayStyle: unref(routePickerDisplayStyle),
                items: unref(actualRouteItems),
                open: open.value
              }, null, 8, ["modelValue", "lazyMode", "displayStyle", "items", "open"])], 512)), [[vShow, unref(routeItemsCount) > 0]]) : createCommentVNode("v-if", true)]),
              _: 2
            }, [__props.showSelectCurrentPage ? {
              name: "customPickerActions",
              fn: withCtx(() => [createVNode(unref(RockButton), {
                onClick: selectCurrentPage,
                btnSize: unref(BtnSize).ExtraSmall,
                btnType: unref(BtnType).Link,
                title: "Select Current Page"
              }, {
                default: withCtx(() => [_hoisted_1]),
                _: 1
              }, 8, ["btnSize", "btnType"])])
            } : undefined]), 1040, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/pagePicker.obs";

    })
  };
}));
//# sourceMappingURL=pagePicker.obs.js.map
