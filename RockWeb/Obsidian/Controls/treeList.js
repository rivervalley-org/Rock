System.register(['vue', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, isPromise;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
    }, function (module) {
      isPromise = module.isPromise;
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

      var treeItem = defineComponent({
        name: "TreeList.Item",
        props: {
          modelValue: {
            type: Array,
            default: []
          },
          multiple: {
            type: Boolean,
            default: false
          },
          item: {
            type: Object,
            default: {}
          },
          disableFolderSelection: {
            type: Boolean,
            default: false
          },
          autoExpand: {
            type: Boolean,
            default: false
          }
        },
        emits: ["treeitem-expanded", "update:modelValue"],
        setup(props, _ref) {
          var emit = _ref.emit;
          var children = computed(() => {
            var _props$item$children;
            return (_props$item$children = props.item.children) !== null && _props$item$children !== void 0 ? _props$item$children : [];
          });
          var hasChildren = computed(() => children.value.length > 0);
          var isFolder = computed(() => props.item.isFolder || props.item.hasChildren);
          var itemName = computed(() => {
            var _props$item$text;
            return (_props$item$text = props.item.text) !== null && _props$item$text !== void 0 ? _props$item$text : "";
          });
          var showChildren = ref(false);
          var listItemClass = computed(() => {
            return isFolder.value ? "rocktree-item rocktree-folder" : "rocktree-item rocktree-leaf";
          });
          var folderClass = computed(() => {
            return showChildren.value ? "rocktree-icon icon-fw fa fa-fw fa-chevron-down" : "rocktree-icon icon-fw fa fa-fw fa-chevron-right";
          });
          var itemIconClass = computed(() => {
            return "icon-fw ".concat(props.item.iconCssClass);
          });
          var itemNameClass = computed(() => {
            var classes = ["rocktree-name"];
            if (props.item.value && props.modelValue.includes(props.item.value)) {
              classes.push("selected");
            }
            if (!props.item.isActive) {
              classes.push("is-inactive");
            }
            return classes.join(" ");
          });
          watch(() => [props.item, props.modelValue], () => {
            if (!props.autoExpand || hasChildren.value == false) {
              return;
            }
            if (hasSelectedChild(props.item, props.modelValue)) {
              showChildren.value = true;
            } else if (children.value.length == 0) {
              showChildren.value = false;
            }
          }, {
            immediate: true
          });
          function hasSelectedChild(item, values) {
            var children = item.children;
            if (children && children.length > 0) {
              var _iterator = _createForOfIteratorHelper(children),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _child$value;
                  var child = _step.value;
                  if (values.includes((_child$value = child.value) !== null && _child$value !== void 0 ? _child$value : "")) {
                    return true;
                  }
                  if (child.children && child.children.length > 0 && hasSelectedChild(child, values)) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            return false;
          }
          var onExpand = () => {
            showChildren.value = !showChildren.value;
            if (showChildren.value) {
              emit("treeitem-expanded", props.item);
            }
          };
          watch(hasChildren, () => {
            if (!hasChildren.value && showChildren.value) {
              onExpand();
            }
          });
          var onChildItemExpanded = item => {
            emit("treeitem-expanded", item);
          };
          var onSelect = () => {
            if (isFolder.value && props.disableFolderSelection) {
              return;
            }
            if (props.multiple) {
              if (props.item.value && !props.modelValue.includes(props.item.value)) {
                emit("update:modelValue", [...props.modelValue, props.item.value]);
              } else if (props.item.value && props.modelValue.includes(props.item.value)) {
                emit("update:modelValue", [...props.modelValue.filter(v => v !== props.item.value)]);
              }
            } else {
              if (props.item.value && !props.modelValue.includes(props.item.value)) {
                emit("update:modelValue", [props.item.value]);
              } else if (props.item.value && props.modelValue.includes(props.item.value)) {
                emit("update:modelValue", []);
              }
            }
          };
          var onUpdateSelectedValues = values => {
            emit("update:modelValue", values);
          };
          return {
            children,
            hasChildren,
            folderClass,
            isFolder,
            itemIconClass,
            itemName,
            itemNameClass,
            listItemClass,
            onChildItemExpanded,
            onExpand,
            onSelect,
            onUpdateSelectedValues,
            showChildren
          };
        },
        template: "\n<li :class=\"listItemClass\">\n    <i v-if=\"isFolder\" :class=\"folderClass\" @click.prevent.stop=\"onExpand\"></i>\n    <span :class=\"itemNameClass\" :title=\"itemName\" @click.prevent.stop=\"onSelect\">\n        <i :class=\"itemIconClass\"></i>\n        {{ itemName }}\n    </span>\n    <ul v-if=\"hasChildren\" v-show=\"showChildren\" class=\"rocktree-children\" v-for=\"child in children\">\n        <TreeList.Item :modelValue=\"modelValue\" @update:modelValue=\"onUpdateSelectedValues\" @treeitem-expanded=\"onChildItemExpanded\" :item=\"child\" :multiple=\"multiple\" :disableFolderSelection=\"disableFolderSelection\" :autoExpand=\"autoExpand\" />\n    </ul>\n</li>\n"
      });
      var treeList = exports('default', defineComponent({
        name: "TreeList",
        components: {
          TreeItem: treeItem
        },
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
          }
        },
        emits: ["update:modelValue", "update:items", "treeitem-expanded"],
        setup(props, _ref2) {
          var _props$items;
          var emit = _ref2.emit;
          var internalItems = ref((_props$items = props.items) !== null && _props$items !== void 0 ? _props$items : []);
          var getRootItems = function () {
            var _ref3 = _asyncToGenerator(function* () {
              if (props.provider) {
                var result = props.provider.getRootItems();
                var rootItems = isPromise(result) ? yield result : result;
                internalItems.value = JSON.parse(JSON.stringify(rootItems));
                emit("update:items", internalItems.value);
              }
            });
            return function getRootItems() {
              return _ref3.apply(this, arguments);
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
            var _ref4 = _asyncToGenerator(function* (item) {
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
              return _ref4.apply(this, arguments);
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
          return {
            internalItems,
            onItemExpanded,
            onUpdateSelectedValues
          };
        },
        template: "\n<div style=\"overflow-x: hidden; max-width: 100%;\">\n    <ul class=\"rocktree\">\n        <TreeItem v-for=\"child in internalItems\" :modelValue=\"modelValue\" @update:modelValue=\"onUpdateSelectedValues\" @treeitem-expanded=\"onItemExpanded\" :item=\"child\" :multiple=\"multiple\" :disableFolderSelection=\"disableFolderSelection\" :autoExpand=\"autoExpand\" />\n    </ul>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=treeList.js.map
