System.register(['vue', '@Obsidian/Utility/promiseUtils', './Internal/treeListItem.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createBlock, unref, isPromise, TreeListItem;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      unref = module.unref;
    }, function (module) {
      isPromise = module.isPromise;
    }, function (module) {
      TreeListItem = module["default"];
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

      var _hoisted_1 = {
        style: {
          "overflow-x": "hidden",
          "max-width": "100%"
        }
      };
      var _hoisted_2 = {
        class: "rocktree"
      };
      var script = exports('default', defineComponent({
        name: 'treeList',
        props: {
          modelValue: {
            type: Array,
            default: []
          },
          multiple: {
            type: Boolean,
            default: false
          },
          items: {
            type: Array,
            default: []
          },
          provider: {
            type: Object
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
          }
        },
        emits: ["update:modelValue", "update:items", "treeitem-expanded"],
        setup(__props, _ref) {
          var _props$items;
          var emit = _ref.emit;
          var props = __props;
          var internalItems = ref((_props$items = props.items) !== null && _props$items !== void 0 ? _props$items : []);
          var getRootItems = function () {
            var _ref2 = _asyncToGenerator(function* () {
              if (props.provider) {
                var result = props.provider.getRootItems(props.modelValue);
                var rootItems = isPromise(result) ? yield result : result;
                internalItems.value = JSON.parse(JSON.stringify(rootItems));
                emit("update:items", internalItems.value);
              }
            });
            return function getRootItems() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onUpdateSelectedValues = values => {
            if (props.multiple) {
              emit("update:modelValue", values);
            } else {
              emit("update:modelValue", values.length > 0 ? [values[0]] : []);
            }
          };
          var onItemExpanded = function () {
            var _ref3 = _asyncToGenerator(function* (item) {
              if (props.provider) {
                if (item.hasChildren && item.children === null) {
                  var result = props.provider.getChildItems(item);
                  var children = isPromise(result) ? yield result : result;
                  item.children = JSON.parse(JSON.stringify(children));
                  emit("update:items", internalItems.value);
                }
              } else {
                emit("treeitem-expanded", item);
              }
            });
            return function onItemExpanded(_x) {
              return _ref3.apply(this, arguments);
            };
          }();
          watch(() => props.items, () => {
            if (!props.provider) {
              var _props$items2;
              internalItems.value = (_props$items2 = props.items) !== null && _props$items2 !== void 0 ? _props$items2 : [];
            }
          });
          if (props.provider) {
            getRootItems();
          }
          watch(() => props.provider, () => {
            if (props.provider) {
              getRootItems();
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("ul", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalItems.value, child => {
              return openBlock(), createBlock(unref(TreeListItem), {
                modelValue: __props.modelValue,
                item: child,
                multiple: __props.multiple,
                disableFolderSelection: __props.disableFolderSelection,
                autoExpand: __props.autoExpand,
                showChildCount: __props.showChildCount,
                provider: __props.provider,
                "onUpdate:modelValue": onUpdateSelectedValues,
                onTreeitemExpanded: onItemExpanded
              }, null, 8, ["modelValue", "item", "multiple", "disableFolderSelection", "autoExpand", "showChildCount", "provider"]);
            }), 256))])]);
          };
        }
      }));

      script.__file = "Framework/Controls/treeList.obs";

    })
  };
}));
//# sourceMappingURL=treeList.obs.js.map
