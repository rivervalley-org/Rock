System.register(['vue', '@Obsidian/Utility/component', './contentDropDownPicker.obs', './loading.obs', './textBox.obs', './treeList.obs', './rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/block', '@Obsidian/Utility/http', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, computed, ref, watch, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, toDisplayString, createVNode, withModifiers, createCommentVNode, createElementBlock, normalizeClass, withDirectives, vModelCheckbox, Fragment, renderList, vShow, renderSlot, standardRockFormFieldProps, updateRefValue, useStandardRockFormFieldProps, ContentDropDownPicker, Loading, TextBox, TreeList, RockButton, BtnType, BtnSize, useSecurityGrantToken, useHttp, toGuidOrNull, emptyGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      createSlots = module.createSlots;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createVNode = module.createVNode;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
      Fragment = module.Fragment;
      renderList = module.renderList;
      vShow = module.vShow;
      renderSlot = module.renderSlot;
    }, function (module) {
      standardRockFormFieldProps = module.standardRockFormFieldProps;
      updateRefValue = module.updateRefValue;
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      TreeList = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
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
        class: "selected-names"
      };
      var _hoisted_2 = {
        class: "width-full"
      };
      var _hoisted_3 = {
        class: "input-group-btn"
      };
      var _hoisted_4 = ["onClick"];
      var _hoisted_5 = createElementVNode("i", {
        class: "fa fa-search"
      }, null, -1);
      var _hoisted_6 = [_hoisted_5];
      var _hoisted_7 = {
        class: "flex-fill"
      };
      var _hoisted_8 = {
        class: "text-color d-block"
      };
      var _hoisted_9 = ["innerHTML"];
      var _hoisted_10 = ["onClick"];
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_12 = [_hoisted_11];
      var _hoisted_13 = {
        class: "treeview"
      };
      var _hoisted_14 = ["type", "onChange", "checked"];
      var _hoisted_15 = {
        class: "label-text"
      };
      var _hoisted_16 = {
        class: "text-color d-block"
      };
      var _hoisted_17 = ["innerHTML"];
      var _hoisted_18 = createTextVNode("Select");
      var _hoisted_19 = createTextVNode("Select");
      var _hoisted_20 = createTextVNode(" Select All ");
      var _hoisted_21 = createTextVNode(" Cancel ");
      var _hoisted_22 = ["title", "onClick"];
      var _hoisted_23 = {
        key: 1,
        class: "rock-checkbox-icon text-normal mb-0"
      };
      var _hoisted_24 = createTextVNode(" Show Inactive ");
      var _hoisted_25 = {
        style: {
          "display": "none"
        }
      };
      var script = exports('default', defineComponent({
        name: 'accountPicker',
        props: _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
          modelValue: {
            type: Object,
            required: true
          },
          multiple: {
            type: Boolean,
            default: false
          },
          displayPublicName: {
            type: Boolean,
            default: false
          },
          activeOnly: {
            type: Boolean,
            default: false
          },
          displayChildItemCountLabel: {
            type: Boolean,
            default: false
          },
          enhanceForLongLists: {
            type: Boolean,
            default: true
          }
        }),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var valuesAsArray = computed(() => forceToArray(props.modelValue, props.multiple));
          var selectedNames = computed(() => valuesAsArray.value.map(v => v.text).join(", "));
          var selectedGuids = computed(() => valuesAsArray.value.map(v => toGuidOrNull(v.value)).filter(v => v !== null).map(v => v));
          var internalValues = ref(valuesAsArray.value.map(v => toGuidOrNull(v.value)).filter(v => v !== null).map(v => v));
          watch([() => props.modelValue, () => props.multiple], (oldValues, newValues) => {
            updateRefValue(internalValues, valuesAsArray.value.map(v => toGuidOrNull(v.value)).filter(v => v !== null).map(v => v));
            if (newValues[1] !== oldValues[1]) {
              updateModelValue();
            }
          });
          function updateModelValue() {
            return _updateModelValue.apply(this, arguments);
          }
          function _updateModelValue() {
            _updateModelValue = _asyncToGenerator(function* () {
              var selectAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              if (selectAll) {
                emit("update:modelValue", flatItems.value.map(_ref5 => {
                  var value = _ref5.value,
                    text = _ref5.text;
                  return {
                    value,
                    text
                  };
                }));
                return;
              }
              if (!internalValues.value || internalValues.value.length == 0) {
                emit("update:modelValue", props.multiple ? [] : null);
                return;
              } else {
                yield getRootItems();
              }
              if (props.multiple) {
                var newModelValue = flatItems.value.filter(i => i.value && internalValues.value.includes(i.value)).map(i => ({
                  value: i.value,
                  text: i.text
                }));
                emit("update:modelValue", newModelValue);
                return;
              }
              var guid = internalValues.value[0];
              if (guid) {
                var _value = flatItems.value.find(i => i.value == guid);
                emit("update:modelValue", _value ? {
                  value: _value.value,
                  text: _value.text
                } : null);
              } else {
                emit("update:modelValue", null);
              }
            });
            return _updateModelValue.apply(this, arguments);
          }
          var showPopup = ref(false);
          var showClear = computed(() => {
            return valuesAsArray.value.length > 0;
          });
          var showInactiveCheckbox = computed(() => !props.activeOnly);
          var includeInactive = ref(false);
          var mode = ref("tree");
          var allowSelectAll = ref(false);
          var formFieldProps = useStandardRockFormFieldProps(props);
          var isLoading = ref(false);
          var securityGrantToken = useSecurityGrantToken();
          var http = useHttp();
          var timeout;
          function setLoading(val) {
            if (val) {
              timeout = setTimeout(() => isLoading.value = val, 100);
            } else {
              clearTimeout(timeout);
              isLoading.value = val;
            }
          }
          function select() {
            showPopup.value = false;
            updateModelValue();
            mode.value = "tree";
            searchValue.value = "";
          }
          function cancel() {
            showPopup.value = false;
            internalValues.value = valuesAsArray.value.map(v => toGuidOrNull(v.value)).filter(v => v !== null).map(v => v);
          }
          function clear() {
            internalValues.value = [];
            updateModelValue();
            showPopup.value = false;
          }
          function selectAll() {
            return _selectAll.apply(this, arguments);
          }
          function _selectAll() {
            _selectAll = _asyncToGenerator(function* () {
              setLoading(true);
              yield getRootItems(true, true);
              setLoading(false);
              updateModelValue(true);
              showPopup.value = false;
            });
            return _selectAll.apply(this, arguments);
          }
          function changeMode() {
            if (mode.value == "tree") {
              mode.value = "preview";
            } else {
              mode.value = "tree";
            }
          }
          var treeItems = ref([]);
          var flatItems = computed(() => {
            var _treeItems$value;
            return flatten((_treeItems$value = treeItems.value) !== null && _treeItems$value !== void 0 ? _treeItems$value : [], i => {
              var _i$children;
              return (_i$children = i.children) !== null && _i$children !== void 0 ? _i$children : [];
            });
          });
          function getItems(_x, _x2) {
            return _getItems.apply(this, arguments);
          }
          function _getItems() {
            _getItems = _asyncToGenerator(function* (parentNode, refetch) {
              var _internalValues$value;
              var loadFullTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              if (loadFullTree || refetch && !parentNode || !parentNode && (!treeItems.value || treeItems.value.length == 0)) {
                var _timeout = setTimeout(() => {
                  treeItems.value = [{
                    isActive: true,
                    iconCssClass: "fa fa-spinner fa-spin",
                    isFolder: false,
                    hasChildren: false
                  }];
                }, 150);
                try {
                  treeItems.value = yield fetchItems(undefined, loadFullTree);
                  clearTimeout(_timeout);
                } catch (e) {
                  clearTimeout(_timeout);
                  treeItems.value = [];
                }
              } else if (refetch && parentNode || parentNode && (!parentNode.children || parentNode.children.length == 0)) {
                var _timeout2 = setTimeout(() => {
                  parentNode.children = [{
                    isActive: true,
                    iconCssClass: "fa fa-spinner fa-spin",
                    isFolder: false,
                    hasChildren: false
                  }];
                }, 150);
                try {
                  parentNode.children = yield fetchItems(parentNode.value);
                  clearTimeout(_timeout2);
                } catch (e) {
                  clearTimeout(_timeout2);
                  parentNode.children = null;
                }
              }
              if (!parentNode && !loadFullTree && ((_internalValues$value = internalValues.value) === null || _internalValues$value === void 0 ? void 0 : _internalValues$value.length) > 0) {
                yield getHierarchyToSelectedItems(refetch);
              }
            });
            return _getItems.apply(this, arguments);
          }
          function fetchItems(_x3) {
            return _fetchItems.apply(this, arguments);
          }
          function _fetchItems() {
            _fetchItems = _asyncToGenerator(function* (parentGuid) {
              var _toGuidOrNull, _props$displayPublicN;
              var loadFullTree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var options = {
                parentGuid: (_toGuidOrNull = toGuidOrNull(parentGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                displayPublicName: (_props$displayPublicN = props.displayPublicName) !== null && _props$displayPublicN !== void 0 ? _props$displayPublicN : false,
                includeInactive: !props.activeOnly && includeInactive.value,
                loadFullTree,
                securityGrantToken: securityGrantToken.value
              };
              var url = "/api/v2/Controls/AccountPickerGetChildren";
              var response = yield http.post(url, undefined, options);
              if (response.isSuccess && response.data) {
                return response.data;
              } else {
                console.error("Error fetching items from server", response.errorMessage);
                return [];
              }
            });
            return _fetchItems.apply(this, arguments);
          }
          function getHierarchyToSelectedItems(_x4) {
            return _getHierarchyToSelectedItems.apply(this, arguments);
          }
          function _getHierarchyToSelectedItems() {
            _getHierarchyToSelectedItems = _asyncToGenerator(function* (refetch) {
              var parentGuids = [];
              if (refetch) {
                parentGuids = yield getParentList(internalValues.value);
              } else {
                var unFetchedSelectedGuids = internalValues.value.filter(guid => {
                  return !flatItems.value.find(i => i.value == guid);
                });
                if (unFetchedSelectedGuids.length > 0) {
                  parentGuids = yield getParentList(unFetchedSelectedGuids);
                  parentGuids = parentGuids.filter(guid => {
                    return !flatItems.value.find(i => {
                      var _i$children2;
                      return i.value == guid && ((_i$children2 = i.children) === null || _i$children2 === void 0 ? void 0 : _i$children2.length);
                    });
                  });
                }
              }
              if (parentGuids.length == 0) {
                return;
              }
              var childLists = yield Promise.all(parentGuids.map(guid => fetchItems(guid)));
              parentGuids.forEach((parentGuid, i) => {
                var parentPage = flatItems.value.find(i => i.value == parentGuid);
                if (parentPage) {
                  parentPage.children = childLists[i];
                }
              });
            });
            return _getHierarchyToSelectedItems.apply(this, arguments);
          }
          function getParentList(_x5) {
            return _getParentList.apply(this, arguments);
          }
          function _getParentList() {
            _getParentList = _asyncToGenerator(function* (guids) {
              var options = {
                guids: guids === null || guids === void 0 ? void 0 : guids.map(g => toGuidOrNull(g)).filter(g => g !== null).map(g => g),
                securityGrantToken: securityGrantToken.value
              };
              var url = "/api/v2/Controls/AccountPickerGetParentGuids";
              var response = yield http.post(url, undefined, options);
              if (response.isSuccess && response.data) {
                return response.data;
              } else {
                console.error("Error", response.errorMessage);
                return [];
              }
            });
            return _getParentList.apply(this, arguments);
          }
          function getRootItems() {
            return _getRootItems.apply(this, arguments);
          }
          function _getRootItems() {
            _getRootItems = _asyncToGenerator(function* () {
              var refetch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              var loadFullTree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return getItems(null, refetch, loadFullTree);
            });
            return _getRootItems.apply(this, arguments);
          }
          function getChildItems(_x6) {
            return _getChildItems.apply(this, arguments);
          }
          function _getChildItems() {
            _getChildItems = _asyncToGenerator(function* (item) {
              var refetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return getItems(item, refetch);
            });
            return _getChildItems.apply(this, arguments);
          }
          watch(() => [props.activeOnly, props.displayPublicName, includeInactive.value], () => {
            getRootItems(true);
          });
          watch(selectedGuids, () => {
            getRootItems(false);
          });
          var searchValue = ref("");
          var searchItems = ref([]);
          function search() {
            return _search.apply(this, arguments);
          }
          function _search() {
            _search = _asyncToGenerator(function* () {
              var _props$displayPublicN2;
              setLoading(true);
              mode.value = "search";
              var options = {
                searchTerm: searchValue.value,
                displayPublicName: (_props$displayPublicN2 = props.displayPublicName) !== null && _props$displayPublicN2 !== void 0 ? _props$displayPublicN2 : false,
                includeInactive: !props.activeOnly && includeInactive.value,
                securityGrantToken: securityGrantToken.value
              };
              try {
                var response = yield http.post("/api/v2/Controls/AccountPickerGetSearchedAccounts", undefined, options);
                if (response.isSuccess && response.data != null) {
                  searchItems.value = response.data.map(item => {
                    var _item$category;
                    return {
                      text: item.text,
                      value: item.value,
                      category: (_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.replace(/\^/gi, "<i class=\"fa fa-chevron-right px-1\" aria-hidden=\"true\"></i>")
                    };
                  });
                } else {
                  searchItems.value = [];
                }
              } finally {
                setLoading(false);
              }
            });
            return _search.apply(this, arguments);
          }
          function selectSearchItem(guid) {
            if (props.multiple) {
              if (internalValues.value.includes(guid)) {
                var index = internalValues.value.indexOf(guid);
                internalValues.value.splice(index, 1);
              } else {
                internalValues.value.push(guid);
              }
            } else {
              internalValues.value = [guid];
            }
          }
          var previewItems = ref([]);
          function getPreviewItems() {
            return _getPreviewItems.apply(this, arguments);
          }
          function _getPreviewItems() {
            _getPreviewItems = _asyncToGenerator(function* () {
              var _props$displayPublicN3;
              var selectedGuids = internalValues.value.map(v => toGuidOrNull(v)).filter(g => g !== null).map(g => g);
              if (selectedGuids.length == 0) {
                previewItems.value = [];
                return;
              }
              setLoading(true);
              var options = {
                selectedGuids,
                displayPublicName: (_props$displayPublicN3 = props.displayPublicName) !== null && _props$displayPublicN3 !== void 0 ? _props$displayPublicN3 : false,
                securityGrantToken: securityGrantToken.value
              };
              try {
                var response = yield http.post("/api/v2/Controls/AccountPickerGetPreviewItems", undefined, options);
                if (response.isSuccess && response.data != null) {
                  previewItems.value = response.data.map(item => {
                    var _item$category2;
                    return {
                      text: item.text,
                      value: item.value,
                      category: (_item$category2 = item.category) === null || _item$category2 === void 0 ? void 0 : _item$category2.replace(/\^/gi, "<i class=\"fa fa-chevron-right px-1\" aria-hidden=\"true\"></i>")
                    };
                  });
                }
              } finally {
                setLoading(false);
              }
            });
            return _getPreviewItems.apply(this, arguments);
          }
          watch(mode, () => {
            if (mode.value == "preview") {
              getPreviewItems();
            }
          });
          function removePreviewItem(guid) {
            if (internalValues.value.includes(guid)) {
              var index = internalValues.value.indexOf(guid);
              internalValues.value.splice(index, 1);
            }
            if (previewItems.value.find(i => i.value == guid)) {
              var _index = previewItems.value.findIndex(i => i.value == guid);
              previewItems.value.splice(_index, 1);
            }
          }
          function flatten(source, childrenSource) {
            var stack = [...source];
            var flatArray = [];
            for (var i = 0; i < stack.length; i++) {
              var item = stack[i];
              flatArray.push(item);
              stack = stack.concat(childrenSource(item));
            }
            return flatArray;
          }
          function forceToArray(value, multiple) {
            if (value === undefined || value === null) {
              return [];
            } else if (Array.isArray(value)) {
              if (!multiple && value.length > 1) {
                return [value[0]];
              } else {
                return value;
              }
            } else {
              return [value];
            }
          }
          function getAllowSelectAll() {
            return _getAllowSelectAll.apply(this, arguments);
          }
          function _getAllowSelectAll() {
            _getAllowSelectAll = _asyncToGenerator(function* () {
              var response = yield http.post("/api/v2/Controls/AccountPickerGetAllowSelectAll");
              if (response.isSuccess && response.data != null) {
                allowSelectAll.value = response.data;
              }
            });
            return _getAllowSelectAll.apply(this, arguments);
          }
          getAllowSelectAll();
          getRootItems();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(ContentDropDownPicker), mergeProps(unref(formFieldProps), {
              modelValue: internalValues.value,
              iconCssClass: "fa fa-building-o",
              showClear: unref(showClear),
              onPrimaryButtonClicked: select,
              onSecondaryButtonClicked: cancel,
              onClearButtonClicked: clear,
              disableAutoCloseOnPrimaryAction: "",
              pickerContentBoxHeight: "380px",
              showPopup: showPopup.value,
              "onUpdate:showPopup": _cache[4] || (_cache[4] = $event => showPopup.value = $event)
            }), createSlots({
              innerLabel: withCtx(() => [createElementVNode("span", _hoisted_1, toDisplayString(unref(selectedNames)), 1)]),
              primaryButtonLabel: withCtx(() => [createVNode(unref(Loading), {
                isLoading: isLoading.value
              }, {
                default: withCtx(() => [_hoisted_18]),
                _: 1
              }, 8, ["isLoading"])]),
              mainPickerActions: withCtx(() => [createVNode(unref(RockButton), {
                btnSize: unref(BtnSize).ExtraSmall,
                btnType: unref(BtnType).Primary,
                class: "picker-btn",
                onClick: withModifiers(select, ["prevent", "stop"])
              }, {
                default: withCtx(() => [createVNode(unref(Loading), {
                  isLoading: isLoading.value,
                  isSmall: ""
                }, {
                  default: withCtx(() => [_hoisted_19]),
                  _: 1
                }, 8, ["isLoading"])]),
                _: 1
              }, 8, ["btnSize", "btnType", "onClick"]), !isLoading.value && allowSelectAll.value && __props.multiple ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnSize: unref(BtnSize).ExtraSmall,
                btnType: unref(BtnType).Link,
                onClick: withModifiers(selectAll, ["prevent", "stop"])
              }, {
                default: withCtx(() => [_hoisted_20]),
                _: 1
              }, 8, ["btnSize", "btnType", "onClick"])) : createCommentVNode("v-if", true), !isLoading.value ? (openBlock(), createBlock(unref(RockButton), {
                key: 1,
                btnSize: unref(BtnSize).ExtraSmall,
                btnType: unref(BtnType).Link,
                class: "picker-cancel",
                onClick: withModifiers(cancel, ["prevent", "stop"])
              }, {
                default: withCtx(() => [_hoisted_21]),
                _: 1
              }, 8, ["btnSize", "btnType", "onClick"])) : createCommentVNode("v-if", true)]),
              customPickerActions: withCtx(() => [__props.multiple && internalValues.value.length > 0 || mode.value == 'search' ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: normalizeClass(["btn btn-link btn-xs picker-preview", mode.value == 'tree' ? 'picker-preview' : 'picker-treeview']),
                title: mode.value == 'tree' ? 'Preview' : 'Tree View',
                onClick: withModifiers(changeMode, ["prevent"])
              }, [createElementVNode("i", {
                class: normalizeClass(["fa", mode.value == 'tree' ? 'fa-list' : 'fa-sitemap'])
              }, null, 2)], 10, _hoisted_22)) : createCommentVNode("v-if", true), unref(showInactiveCheckbox) ? (openBlock(), createElementBlock("label", _hoisted_23, [createElementVNode("i", {
                class: normalizeClass(['fa', includeInactive.value ? 'fa-check-square-o' : 'fa-square-o'])
              }, null, 2), _hoisted_24, createElementVNode("span", _hoisted_25, [withDirectives(createElementVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => includeInactive.value = $event)
              }, null, 512), [[vModelCheckbox, includeInactive.value]])])])) : createCommentVNode("v-if", true)]),
              default: withCtx(() => [withDirectives(createElementVNode("div", null, [createVNode(unref(Loading), {
                isLoading: isLoading.value
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(previewItems.value, item => {
                  var _item$value;
                  return openBlock(), createElementBlock("div", {
                    class: "d-flex align-items-center preview-item",
                    key: (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : 0
                  }, [createElementVNode("div", _hoisted_7, [createElementVNode("span", _hoisted_8, toDisplayString(item.text), 1), createElementVNode("span", {
                    class: "text-muted text-sm",
                    innerHTML: item.category || 'Top Level'
                  }, null, 8, _hoisted_9)]), createElementVNode("button", {
                    title: "Remove From Preview",
                    class: "btn btn-link text-color btn-xs btn-square ml-auto flex-shrink-0 text-center",
                    onClick: withModifiers($event => {
                      var _unref2;
                      return removePreviewItem((_unref2 = unref(toGuidOrNull)(item.value)) !== null && _unref2 !== void 0 ? _unref2 : unref(emptyGuid));
                    }, ["prevent"])
                  }, _hoisted_12, 8, _hoisted_10)]);
                }), 128))]),
                _: 1
              }, 8, ["isLoading"])], 512), [[vShow, mode.value == 'preview']]), withDirectives(createElementVNode("div", _hoisted_13, [createVNode(unref(Loading), {
                isLoading: isLoading.value
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(searchItems.value, option => {
                  var _option$value, _unref4;
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(["search-item js-search-item", __props.multiple ? 'checkbox' : 'radio']),
                    key: (_option$value = option.value) !== null && _option$value !== void 0 ? _option$value : 0
                  }, [createElementVNode("label", null, [createElementVNode("input", {
                    class: "checkbox js-chk-search",
                    type: __props.multiple ? 'checkbox' : 'radio',
                    onChange: $event => {
                      var _unref3;
                      return selectSearchItem((_unref3 = unref(toGuidOrNull)(option.value)) !== null && _unref3 !== void 0 ? _unref3 : unref(emptyGuid));
                    },
                    checked: internalValues.value.includes((_unref4 = unref(toGuidOrNull)(option.value)) !== null && _unref4 !== void 0 ? _unref4 : unref(emptyGuid))
                  }, null, 40, _hoisted_14), createElementVNode("span", _hoisted_15, [createElementVNode("span", _hoisted_16, toDisplayString(option.text), 1), createElementVNode("span", {
                    class: "text-muted text-sm",
                    innerHTML: option.category || 'Top Level'
                  }, null, 8, _hoisted_17)])])], 2);
                }), 128))]),
                _: 1
              }, 8, ["isLoading"])], 512), [[vShow, mode.value == 'search']]), withDirectives(createVNode(unref(TreeList), {
                modelValue: internalValues.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValues.value = $event),
                multiple: __props.multiple,
                items: treeItems.value,
                "onUpdate:items": _cache[2] || (_cache[2] = $event => treeItems.value = $event),
                onTreeitemExpanded: getChildItems,
                autoExpand: "",
                showChildCount: __props.displayChildItemCountLabel
              }, null, 8, ["modelValue", "multiple", "items", "showChildCount"]), [[vShow, mode.value == 'tree']])]),
              _: 2
            }, [mode.value != 'preview' && __props.enhanceForLongLists ? {
              name: "pickerContentHeader",
              fn: withCtx(() => [createElementVNode("div", _hoisted_2, [createVNode(unref(TextBox), {
                modelValue: searchValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchValue.value = $event),
                size: "small"
              }, {
                inputGroupAppend: withCtx(() => [createElementVNode("span", _hoisted_3, [createElementVNode("button", {
                  class: "btn btn-default",
                  onClick: withModifiers(search, ["prevent"])
                }, _hoisted_6, 8, _hoisted_4)])]),
                _: 1
              }, 8, ["modelValue"])])])
            } : undefined, _ctx.$slots.pickerContentSuperHeader ? {
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

      script.__file = "Framework/Controls/accountPicker.obs";

    })
  };
}));
//# sourceMappingURL=accountPicker.obs.js.map
