System.register(['vue', '@Obsidian/Utility/http', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', 'ant-design-vue', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', './Internal/tag.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, withCtx, Fragment, renderList, createBlock, unref, createCommentVNode, nextTick, useHttp, useSuspense, ControlLazyMode, AutoComplete, useSecurityGrantToken, alert, confirm, Tag, toGuidOrNull, emptyGuid, areEqual, newGuid;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      unref = module.unref;
      createCommentVNode = module.createCommentVNode;
      nextTick = module.nextTick;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSuspense = module.useSuspense;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      AutoComplete = module.AutoComplete;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      alert = module.alert;
      confirm = module.confirm;
    }, function (module) {
      Tag = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
      areEqual = module.areEqual;
      newGuid = module.newGuid;
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
        class: "taglist"
      };
      var _hoisted_2 = createTextVNode(" .taglist .ant-select-auto-complete.ant-select { width: 125px; } .taglist .ant-select-auto-complete.ant-select > .ant-select-selector { border: 0px; padding: 0px; height: 22px; font-size: 12px; background: transparent; } .taglist .ant-select-auto-complete.ant-select-focused.ant-select > .ant-select-selector, .taglist .ant-select-auto-complete.ant-select > .ant-select-selector:hover { border: 0px; box-shadow: initial; background: rgba(0,0,0,0.05); } .taglist .ant-select-auto-complete.ant-select > .ant-select-selector .ant-select-selection-search { left: 6px; right: 6px; } .taglist .ant-select-auto-complete.ant-select > .ant-select-selector .ant-select-selection-placeholder { position: absolute; margin-left: 6px; line-height: 22px; } .taglist .ant-select-auto-complete.ant-select .ant-select-selection-search-input { height: 22px; } .taglist .add-new-tags { float: left; height: 22px; font-size: 0.7em; line-height: 22px; } .taglist .tag-wrap .tag.disabled:hover { padding-right: 12px; transition-delay: 0s; } ");
      var _hoisted_3 = {
        class: "tag-wrap"
      };
      var _hoisted_4 = {
        class: "tagsinput"
      };
      var _hoisted_5 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_6 = [_hoisted_5];
      var script = exports('default', defineComponent({
        name: 'tagList',
        props: {
          entityTypeGuid: {
            type: String,
            required: false
          },
          entityKey: {
            type: String,
            required: false
          },
          categoryGuid: {
            type: String,
            required: false
          },
          entityQualifierColumn: {
            type: String,
            default: ""
          },
          entityQualifierValue: {
            type: String,
            default: ""
          },
          lazyMode: {
            type: String,
            default: ControlLazyMode.Lazy
          },
          disabled: {
            type: Boolean,
            default: false
          },
          showInactiveTags: {
            type: Boolean,
            default: false
          },
          delaySave: {
            type: Boolean,
            default: false
          },
          disallowNewTags: {
            type: Boolean,
            default: false
          }
        },
        setup(__props, _ref) {
          var expose = _ref.expose;
          var props = __props;
          var securityToken = useSecurityGrantToken();
          var http = useHttp();
          var currentTags = ref([]);
          var searchValue = ref("");
          var searchOptions = ref([]);
          var isNewTagVisible = ref(false);
          var tagsInputRef = ref(null);
          var lastLoadCallTime = 0;
          var lastSearchCallTime = 0;
          var isAddNewTagCancelled = false;
          function getTagByName(_x) {
            return _getTagByName.apply(this, arguments);
          }
          function _getTagByName() {
            _getTagByName = _asyncToGenerator(function* (name) {
              var _toGuidOrNull2;
              var data = {
                entityTypeGuid: (_toGuidOrNull2 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                entityKey: props.entityKey,
                entityQualifierColumn: props.entityQualifierColumn,
                entityQualifierValue: props.entityQualifierValue,
                categoryGuid: toGuidOrNull(props.categoryGuid),
                name: name,
                showInactiveTags: props.showInactiveTags,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListGetAvailableTags", undefined, data);
              if (result.isSuccess && result.data) {
                var tags = result.data.filter(t => {
                  var _t$name;
                  return ((_t$name = t.name) === null || _t$name === void 0 ? void 0 : _t$name.toLowerCase()) === name.toLowerCase();
                });
                if (tags.length >= 1) {
                  return tags[0];
                } else {
                  return null;
                }
              } else {
                return null;
              }
            });
            return _getTagByName.apply(this, arguments);
          }
          function createPersonalTag(_x2) {
            return _createPersonalTag.apply(this, arguments);
          }
          function _createPersonalTag() {
            _createPersonalTag = _asyncToGenerator(function* (name) {
              var _toGuidOrNull3;
              var data = {
                entityTypeGuid: (_toGuidOrNull3 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull3 !== void 0 ? _toGuidOrNull3 : emptyGuid,
                categoryGuid: toGuidOrNull(props.categoryGuid),
                entityQualifierColumn: props.entityQualifierColumn,
                entityQualifierValue: props.entityQualifierValue,
                name: name,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListCreatePersonalTag", undefined, data);
              if ((result.isSuccess || result.statusCode === 409) && result.data) {
                return result.data;
              } else {
                return null;
              }
            });
            return _createPersonalTag.apply(this, arguments);
          }
          function addTag(_x3) {
            return _addTag.apply(this, arguments);
          }
          function _addTag() {
            _addTag = _asyncToGenerator(function* (tagKey) {
              var _toGuidOrNull4;
              var data = {
                entityTypeGuid: (_toGuidOrNull4 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull4 !== void 0 ? _toGuidOrNull4 : emptyGuid,
                entityKey: props.entityKey,
                tagKey: tagKey,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListAddEntityTag", undefined, data);
              if (result.isSuccess && result.data) {
                var newTags = [...currentTags.value];
                newTags.push(result.data);
                newTags.sort((a, b) => {
                  var _a$name2, _b$name2;
                  return ((_a$name2 = a.name) !== null && _a$name2 !== void 0 ? _a$name2 : "").localeCompare((_b$name2 = b.name) !== null && _b$name2 !== void 0 ? _b$name2 : "");
                });
                currentTags.value = newTags;
                searchValue.value = "";
              } else {
                var _result$errorMessage;
                alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to add tag.");
              }
            });
            return _addTag.apply(this, arguments);
          }
          function removeTag(_x4) {
            return _removeTag.apply(this, arguments);
          }
          function _removeTag() {
            _removeTag = _asyncToGenerator(function* (tagKey) {
              var _toGuidOrNull5;
              if (props.delaySave) {
                var newTags = currentTags.value.filter(t => t.idKey !== tagKey);
                currentTags.value = newTags;
                return;
              }
              var data = {
                entityTypeGuid: (_toGuidOrNull5 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull5 !== void 0 ? _toGuidOrNull5 : emptyGuid,
                entityKey: props.entityKey,
                tagKey: tagKey,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListRemoveEntityTag", undefined, data);
              if (result.isSuccess) {
                var _newTags = currentTags.value.filter(t => t.idKey !== tagKey);
                currentTags.value = _newTags;
              } else {
                var _result$errorMessage2;
                alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unable to remove tag.");
              }
            });
            return _removeTag.apply(this, arguments);
          }
          function addNamedTag(_x5) {
            return _addNamedTag.apply(this, arguments);
          }
          function _addNamedTag() {
            _addNamedTag = _asyncToGenerator(function* (tagName) {
              var tag = yield getTagByName(tagName);
              if (props.delaySave) {
                var _tag;
                if (tag === null && !(yield confirm("A tag called \"".concat(tagName, "\" does not exist. Do you want to create a new personal tag?")))) {
                  return;
                }
                var newTag = (_tag = tag) !== null && _tag !== void 0 ? _tag : createClientTag(tagName);
                return addTagOnClient(newTag);
              }
              if (tag === null && !props.disallowNewTags) {
                if (!(yield confirm("A tag called \"".concat(tagName, "\" does not exist. Do you want to create a new personal tag?")))) {
                  return;
                }
                tag = yield createPersonalTag(tagName);
                if (tag === null) {
                  yield alert("Unable to create personal tag.");
                  return;
                }
              }
              if (tag != null) {
                var _tag$idKey2;
                yield addTag((_tag$idKey2 = tag.idKey) !== null && _tag$idKey2 !== void 0 ? _tag$idKey2 : "");
              }
            });
            return _addNamedTag.apply(this, arguments);
          }
          function loadExistingTags() {
            return _loadExistingTags.apply(this, arguments);
          }
          function _loadExistingTags() {
            _loadExistingTags = _asyncToGenerator(function* () {
              var entityTypeGuid = toGuidOrNull(props.entityTypeGuid);
              if (entityTypeGuid && !areEqual(entityTypeGuid, emptyGuid) && props.entityKey) {
                var currentRequestTime = Date.now();
                lastLoadCallTime = currentRequestTime;
                var tags = [];
                var data = {
                  entityTypeGuid,
                  entityKey: props.entityKey,
                  categoryGuid: toGuidOrNull(props.categoryGuid),
                  entityQualifierColumn: props.entityQualifierColumn,
                  entityQualifierValue: props.entityQualifierValue,
                  showInactiveTags: props.showInactiveTags,
                  securityGrantToken: securityToken.value
                };
                var result = yield http.post("/api/v2/Controls/EntityTagListGetEntityTags", undefined, data);
                if (result.isSuccess && result.data) {
                  tags = result.data;
                }
                if (currentRequestTime == lastLoadCallTime) {
                  currentTags.value = tags;
                }
              }
            });
            return _loadExistingTags.apply(this, arguments);
          }
          function addTagOnClient(newTag) {
            var newTags = [...currentTags.value, newTag];
            newTags.sort((a, b) => {
              var _a$name, _b$name;
              return ((_a$name = a.name) !== null && _a$name !== void 0 ? _a$name : "").localeCompare((_b$name = b.name) !== null && _b$name !== void 0 ? _b$name : "");
            });
            currentTags.value = newTags;
            searchValue.value = "";
          }
          function createClientTag(tagName) {
            var _toGuidOrNull;
            var tagId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var newTag = {
              name: tagName,
              entityTypeGuid: (_toGuidOrNull = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
              isPersonal: true,
              idKey: tagId || newGuid()
            };
            return newTag;
          }
          function saveTagValues() {
            return _saveTagValues.apply(this, arguments);
          }
          function _saveTagValues() {
            _saveTagValues = _asyncToGenerator(function* () {
              var _toGuidOrNull6;
              var data = {
                tags: currentTags.value,
                entityTypeGuid: (_toGuidOrNull6 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull6 !== void 0 ? _toGuidOrNull6 : emptyGuid,
                entityKey: props.entityKey,
                categoryGuid: toGuidOrNull(props.categoryGuid),
                entityQualifierColumn: props.entityQualifierColumn,
                entityQualifierValue: props.entityQualifierValue,
                showInactiveTags: props.showInactiveTags,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListSaveTagValues", undefined, data);
              if (result.isSuccess && result.data) {
                currentTags.value = result.data;
                searchValue.value = "";
              } else {
                throw new Error("Unable to save tag values");
              }
            });
            return _saveTagValues.apply(this, arguments);
          }
          function onSelect(value, item) {
            var _item$value;
            if (!item) {
              return;
            }
            isAddNewTagCancelled = true;
            if (props.delaySave) {
              addTagOnClient(createClientTag(item.label, item.value));
              return;
            }
            searchValue.value = item.label;
            addTag((_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "");
          }
          var selectHandler = onSelect;
          function onSearch(_x6) {
            return _onSearch.apply(this, arguments);
          }
          function _onSearch() {
            _onSearch = _asyncToGenerator(function* (value) {
              var _toGuidOrNull7;
              if (!value) {
                searchOptions.value = [];
                return;
              }
              var currentRequestTime = Date.now();
              lastSearchCallTime = currentRequestTime;
              var data = {
                entityTypeGuid: (_toGuidOrNull7 = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull7 !== void 0 ? _toGuidOrNull7 : emptyGuid,
                entityKey: props.entityKey,
                entityQualifierColumn: props.entityQualifierColumn,
                entityQualifierValue: props.entityQualifierValue,
                name: value,
                showInactiveTags: props.showInactiveTags,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListGetAvailableTags", undefined, data);
              if (result.isSuccess && result.data && currentRequestTime == lastSearchCallTime) {
                searchOptions.value = result.data.map(t => {
                  var _t$idKey, _t$name2;
                  return {
                    value: (_t$idKey = t.idKey) !== null && _t$idKey !== void 0 ? _t$idKey : "",
                    label: (_t$name2 = t.name) !== null && _t$name2 !== void 0 ? _t$name2 : ""
                  };
                });
              }
            });
            return _onSearch.apply(this, arguments);
          }
          function onInputKeyDown(ev) {
            if (ev.keyCode === 13 && searchValue.value && !props.disallowNewTags) {
              var tagName = searchValue.value;
              isAddNewTagCancelled = false;
              setTimeout(() => {
                if (!isAddNewTagCancelled) {
                  if (props.delaySave) {
                    addTagOnClient(createClientTag(tagName));
                    return;
                  }
                  addNamedTag(tagName);
                }
              }, 1);
            }
          }
          function onRemoveTag(_x7) {
            return _onRemoveTag.apply(this, arguments);
          }
          function _onRemoveTag() {
            _onRemoveTag = _asyncToGenerator(function* (tagKey) {
              yield removeTag(tagKey);
            });
            return _onRemoveTag.apply(this, arguments);
          }
          function onAddNewTagsClick() {
            isNewTagVisible.value = true;
            nextTick(() => {
              var _tagsInputRef$value;
              (_tagsInputRef$value = tagsInputRef.value) === null || _tagsInputRef$value === void 0 ? void 0 : _tagsInputRef$value.focus();
            });
          }
          expose({
            saveTagValues
          });
          watch(() => [props.entityTypeGuid, props.entityKey, props.categoryGuid, props.entityQualifierColumn, props.entityQualifierValue, props.showInactiveTags], () => {
            loadExistingTags();
          });
          if (props.lazyMode === ControlLazyMode.Eager) {
            var _useSuspense;
            (_useSuspense = useSuspense()) === null || _useSuspense === void 0 ? void 0 : _useSuspense.addOperation(loadExistingTags());
          } else {
            loadExistingTags();
          }
          return (_ctx, _cache) => {
            var _component_v_style = resolveComponent("v-style");
            return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_v_style, null, {
              default: withCtx(() => [_hoisted_2]),
              _: 1
            }), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(currentTags.value, tag => {
              var _ref2, _tag$idKey;
              return openBlock(), createBlock(unref(Tag), {
                key: (_ref2 = (_tag$idKey = tag.idKey) !== null && _tag$idKey !== void 0 ? _tag$idKey : tag.name) !== null && _ref2 !== void 0 ? _ref2 : '',
                modelValue: tag,
                disabled: __props.disabled,
                onRemoveTag: onRemoveTag
              }, null, 8, ["modelValue", "disabled"]);
            }), 128)), !__props.disabled ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [isNewTagVisible.value ? (openBlock(), createBlock(unref(AutoComplete), {
              key: 0,
              ref_key: "tagsInputRef",
              ref: tagsInputRef,
              value: searchValue.value,
              "onUpdate:value": _cache[0] || (_cache[0] = $event => searchValue.value = $event),
              options: searchOptions.value,
              placeholder: "tag name",
              onSelect: unref(selectHandler),
              onSearch: onSearch,
              onInputKeyDown: onInputKeyDown
            }, null, 8, ["value", "options", "onSelect"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: "text-muted add-new-tags clickable",
              onClick: onAddNewTagsClick
            }, _hoisted_6))], 64)) : createCommentVNode("v-if", true)])])]);
          };
        }
      }));

      script.__file = "Framework/Controls/tagList.obs";

    })
  };
}));
//# sourceMappingURL=tagList.obs.js.map
