System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, withModifiers, createCommentVNode, createElementVNode, createTextVNode, toDisplayString, Fragment, renderList, withDirectives, createVNode, vShow;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      Fragment = module.Fragment;
      renderList = module.renderList;
      withDirectives = module.withDirectives;
      createVNode = module.createVNode;
      vShow = module.vShow;
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

      var _hoisted_1 = ["onClick"];
      var _hoisted_2 = ["title", "onClick"];
      var _hoisted_3 = {
        key: 0,
        class: "label label-tree"
      };
      var _hoisted_4 = {
        class: "rocktree-children"
      };
      var script = exports('default', defineComponent({
        name: 'treeListItem',
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
          provider: {
            type: Object
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
        emits: ["update:modelValue", "treeitem-expanded"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var children = computed(() => {
            var _props$item$children;
            return (_props$item$children = props.item.children) !== null && _props$item$children !== void 0 ? _props$item$children : [];
          });
          var hasChildrenLoaded = computed(() => children.value.length > 0);
          var hasChildren = computed(() => props.item.hasChildren);
          var itemName = computed(() => {
            var _props$item$text;
            return (_props$item$text = props.item.text) !== null && _props$item$text !== void 0 ? _props$item$text : "";
          });
          var showChildren = ref(false);
          var listItemClass = computed(() => {
            return hasChildren.value ? "rocktree-item rocktree-folder" : "rocktree-item rocktree-leaf";
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
            if (!props.autoExpand || hasChildrenLoaded.value == false) {
              return;
            }
            if (hasSelectedChild(props.item, props.modelValue)) {
              showChildren.value = true;
            } else if (children.value.length == 0) {
              showChildren.value = false;
            }
          }, {
            immediate: true,
            deep: true
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
          function onExpand() {
            showChildren.value = !showChildren.value;
            if (showChildren.value) {
              emit("treeitem-expanded", props.item);
            }
          }
          watch(hasChildrenLoaded, () => {
            if (!hasChildrenLoaded.value && showChildren.value) {
              onExpand();
            }
          });
          function onChildItemExpanded(item) {
            emit("treeitem-expanded", item);
          }
          function onSelect() {
            var _props$provider;
            var canSelect = !props.item.isFolder || !props.disableFolderSelection;
            if ((_props$provider = props.provider) !== null && _props$provider !== void 0 && _props$provider.canSelectItem) {
              canSelect = props.provider.canSelectItem(props.item, canSelect);
            }
            if (!canSelect) {
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
          }
          function onUpdateSelectedValues(values) {
            emit("update:modelValue", values);
          }
          return (_ctx, _cache) => {
            var _component_treeListItem = resolveComponent("treeListItem", true);
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(unref(listItemClass))
            }, [unref(hasChildren) ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(unref(folderClass)),
              onClick: withModifiers(onExpand, ["prevent", "stop"])
            }, null, 10, _hoisted_1)) : createCommentVNode("v-if", true), createElementVNode("span", {
              class: normalizeClass(unref(itemNameClass)),
              title: unref(itemName),
              onClick: withModifiers(onSelect, ["prevent", "stop"])
            }, [createElementVNode("i", {
              class: normalizeClass(unref(itemIconClass))
            }, null, 2), createTextVNode(" " + toDisplayString(unref(itemName)) + " ", 1), __props.showChildCount && __props.item.childCount ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.item.childCount), 1)) : createCommentVNode("v-if", true)], 10, _hoisted_2), unref(hasChildrenLoaded) ? (openBlock(true), createElementBlock(Fragment, {
              key: 1
            }, renderList(unref(children), child => {
              return withDirectives((openBlock(), createElementBlock("ul", _hoisted_4, [createVNode(_component_treeListItem, {
                modelValue: __props.modelValue,
                "onUpdate:modelValue": onUpdateSelectedValues,
                onTreeitemExpanded: onChildItemExpanded,
                item: child,
                multiple: __props.multiple,
                disableFolderSelection: __props.disableFolderSelection,
                autoExpand: __props.autoExpand,
                showChildCount: __props.showChildCount
              }, null, 8, ["modelValue", "item", "multiple", "disableFolderSelection", "autoExpand", "showChildCount"])], 512)), [[vShow, showChildren.value]]);
            }), 256)) : createCommentVNode("v-if", true)], 2);
          };
        }
      }));

      script.__file = "Framework/Controls/Internal/treeListItem.obs";

    })
  };
}));
//# sourceMappingURL=treeListItem.obs.js.map
