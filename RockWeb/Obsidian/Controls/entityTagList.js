System.register(['@Obsidian/Utility/http', '@Obsidian/Utility/suspense', '@Obsidian/Enums/Controls/controlLazyMode', 'ant-design-vue', 'vue', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs'], (function (exports) {
  'use strict';
  var useHttp, useSuspense, ControlLazyMode, AutoComplete, defineComponent, computed, ref, watch, nextTick, useSecurityGrantToken, alert, confirm;
  return {
    setters: [function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSuspense = module.useSuspense;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      AutoComplete = module.AutoComplete;
    }, function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      nextTick = module.nextTick;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      alert = module.alert;
      confirm = module.confirm;
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

      var tag = defineComponent({
        name: "EntityTagList.Tag",
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: {
          "removeTag": _value => true
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var text = computed(() => {
            var _props$modelValue$nam;
            return (_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "";
          });
          var iconCssClass = computed(() => {
            var _props$modelValue$ico;
            return (_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "";
          });
          var tagClass = computed(() => {
            return props.modelValue.isPersonal ? "tag personal" : "tag";
          });
          var tagStyle = computed(() => {
            var styles = {};
            if (props.modelValue.backgroundColor) {
              styles["background-color"] = props.modelValue.backgroundColor;
            }
            return styles;
          });
          var onRemoveTag = () => {
            var _props$modelValue$idK;
            emit("removeTag", (_props$modelValue$idK = props.modelValue.idKey) !== null && _props$modelValue$idK !== void 0 ? _props$modelValue$idK : "");
          };
          return {
            iconCssClass,
            onRemoveTag,
            tagClass,
            tagStyle,
            text
          };
        },
        template: "\n<span :class=\"tagClass\" :style=\"tagStyle\">\n    <span v-if=\"iconCssClass\" class=\"tag-icon\">\n        <i :class=\"iconCssClass\"></i>\n    </span>\n    <span>{{ text }}</span>\n    <a v-if=\"!disabled\" href=\"#\" title=\"Remove tag\" @click.prevent.stop=\"onRemoveTag\">x</a>\n</span>\n"
      });
      function getEntityTags(_x, _x2, _x3, _x4) {
        return _getEntityTags.apply(this, arguments);
      }
      function _getEntityTags() {
        _getEntityTags = _asyncToGenerator(function* (http, entityTypeGuid, entityKey, securityToken) {
          var data = {
            entityTypeGuid: entityTypeGuid,
            entityKey: entityKey,
            securityGrantToken: securityToken
          };
          var result = yield http.post("/api/v2/Controls/EntityTagListGetEntityTags", undefined, data);
          if (result.isSuccess && result.data) {
            return result.data;
          }
          return [];
        });
        return _getEntityTags.apply(this, arguments);
      }
      var entityTagList = exports('default', defineComponent({
        name: "EntityTagList",
        components: {
          AutoComplete,
          Tag: tag
        },
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
          lazyMode: {
            type: String,
            default: ControlLazyMode.Lazy
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: {},
        setup(props) {
          var securityToken = useSecurityGrantToken();
          var http = useHttp();
          var currentTags = ref([]);
          var searchValue = ref("");
          var searchOptions = ref([]);
          var isNewTagVisible = ref(false);
          var tagsInputRef = ref(null);
          var loadCancelledToken = null;
          var searchCancelledToken = null;
          var isAddNewTagCancelled = false;
          var getTagByName = function () {
            var _ref2 = _asyncToGenerator(function* (name) {
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                categoryGuid: props.categoryGuid,
                name: name,
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
            return function getTagByName(_x5) {
              return _ref2.apply(this, arguments);
            };
          }();
          var createPersonalTag = function () {
            var _ref3 = _asyncToGenerator(function* (name) {
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                categoryGuid: props.categoryGuid,
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
            return function createPersonalTag(_x6) {
              return _ref3.apply(this, arguments);
            };
          }();
          var addTag = function () {
            var _ref4 = _asyncToGenerator(function* (tagKey) {
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                tagKey: tagKey,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListAddEntityTag", undefined, data);
              if (result.isSuccess && result.data) {
                var newTags = [...currentTags.value];
                newTags.push(result.data);
                newTags.sort((a, b) => {
                  var _a$name, _b$name;
                  return ((_a$name = a.name) !== null && _a$name !== void 0 ? _a$name : "").localeCompare((_b$name = b.name) !== null && _b$name !== void 0 ? _b$name : "");
                });
                currentTags.value = newTags;
                searchValue.value = "";
              } else {
                var _result$errorMessage;
                alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to add tag.");
              }
            });
            return function addTag(_x7) {
              return _ref4.apply(this, arguments);
            };
          }();
          var removeTag = function () {
            var _ref5 = _asyncToGenerator(function* (tagKey) {
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                tagKey: tagKey,
                securityGrantToken: securityToken.value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListRemoveEntityTag", undefined, data);
              if (result.isSuccess) {
                var newTags = currentTags.value.filter(t => t.idKey !== tagKey);
                currentTags.value = newTags;
              } else {
                var _result$errorMessage2;
                alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unable to remove tag.");
              }
            });
            return function removeTag(_x8) {
              return _ref5.apply(this, arguments);
            };
          }();
          var addNamedTag = function () {
            var _ref6 = _asyncToGenerator(function* (tagName) {
              var _tag$idKey;
              var tag = yield getTagByName(tagName);
              if (tag === null) {
                if (!(yield confirm("A tag called \"".concat(tagName, "\" does not exist. Do you want to create a new personal tag?")))) {
                  return;
                }
                tag = yield createPersonalTag(tagName);
                if (tag === null) {
                  yield alert("Unable to create personal tag.");
                  return;
                }
              }
              yield addTag((_tag$idKey = tag.idKey) !== null && _tag$idKey !== void 0 ? _tag$idKey : "");
            });
            return function addNamedTag(_x9) {
              return _ref6.apply(this, arguments);
            };
          }();
          var loadExistingTags = function () {
            var _ref7 = _asyncToGenerator(function* () {
              if (loadCancelledToken) {
                loadCancelledToken.value = true;
              }
              if (props.entityTypeGuid && props.entityKey) {
                var cancelled = ref(false);
                loadCancelledToken = cancelled;
                var tags = yield getEntityTags(http, props.entityTypeGuid, props.entityKey, securityToken.value);
                if (!cancelled.value) {
                  currentTags.value = tags;
                }
              }
            });
            return function loadExistingTags() {
              return _ref7.apply(this, arguments);
            };
          }();
          var onSelect = value => {
            var _item$0$value;
            isAddNewTagCancelled = true;
            var item = searchOptions.value.filter(o => o.value === value);
            if (item.length === 0) {
              return;
            }
            searchValue.value = item[0].label;
            addTag((_item$0$value = item[0].value) !== null && _item$0$value !== void 0 ? _item$0$value : "");
          };
          var onSearch = function () {
            var _ref8 = _asyncToGenerator(function* (value) {
              if (searchCancelledToken) {
                searchCancelledToken.value = true;
              }
              if (!value) {
                return;
              }
              var cancelled = ref(false);
              searchCancelledToken = cancelled;
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                name: value
              };
              var result = yield http.post("/api/v2/Controls/EntityTagListGetAvailableTags", undefined, data);
              if (result.isSuccess && result.data) {
                searchOptions.value = result.data.map(t => {
                  var _t$idKey, _t$name2;
                  return {
                    value: (_t$idKey = t.idKey) !== null && _t$idKey !== void 0 ? _t$idKey : "",
                    label: (_t$name2 = t.name) !== null && _t$name2 !== void 0 ? _t$name2 : ""
                  };
                });
              }
            });
            return function onSearch(_x10) {
              return _ref8.apply(this, arguments);
            };
          }();
          var onInputKeyDown = ev => {
            if (ev.keyCode === 13 && searchValue.value) {
              var tagName = searchValue.value;
              isAddNewTagCancelled = false;
              setTimeout(() => {
                if (!isAddNewTagCancelled) {
                  addNamedTag(tagName);
                }
              }, 1);
            }
          };
          var onRemoveTag = function () {
            var _ref9 = _asyncToGenerator(function* (tagKey) {
              yield removeTag(tagKey);
            });
            return function onRemoveTag(_x11) {
              return _ref9.apply(this, arguments);
            };
          }();
          var onAddNewTagsClick = () => {
            isNewTagVisible.value = true;
            nextTick(() => {
              var _tagsInputRef$value;
              var input = (_tagsInputRef$value = tagsInputRef.value) === null || _tagsInputRef$value === void 0 ? void 0 : _tagsInputRef$value.querySelector("input.ant-select-selection-search-input");
              input === null || input === void 0 ? void 0 : input.focus();
            });
          };
          watch([() => props.entityTypeGuid, () => props.entityKey, () => props.categoryGuid], () => {
            loadExistingTags();
          });
          if (props.lazyMode === ControlLazyMode.Eager) {
            var _useSuspense;
            (_useSuspense = useSuspense()) === null || _useSuspense === void 0 ? void 0 : _useSuspense.addOperation(loadExistingTags());
          } else {
            loadExistingTags();
          }
          return {
            currentTags,
            isNewTagVisible,
            onAddNewTagsClick,
            onInputKeyDown,
            onRemoveTag,
            onSearch,
            onSelect,
            searchOptions,
            searchValue,
            tagsInputRef
          };
        },
        template: "\n<div class=\"taglist\">\n    <v-style>\n.taglist .ant-select-auto-complete.ant-select {\n    width: 125px;\n}\n\n.taglist .ant-select-auto-complete.ant-select > .ant-select-selector {\n    border: 0px;\n    padding: 0px;\n    height: 22px;\n    font-size: 12px;\n    background: transparent;\n}\n\n.taglist .ant-select-auto-complete.ant-select-focused.ant-select > .ant-select-selector,\n.taglist .ant-select-auto-complete.ant-select > .ant-select-selector:hover {\n    border: 0px;\n    box-shadow: initial;\n    background: rgba(0,0,0,0.05);\n}\n\n.taglist .ant-select-auto-complete.ant-select > .ant-select-selector .ant-select-selection-search {\n    left: 6px;\n    right: 6px;\n}\n\n.taglist .ant-select-auto-complete.ant-select > .ant-select-selector .ant-select-selection-placeholder {\n    position: absolute;\n    margin-left: 6px;\n    line-height: 22px;\n}\n\n.taglist .ant-select-auto-complete.ant-select .ant-select-selection-search-input {\n    height: 22px;\n}\n\n.taglist .add-new-tags {\n    float: left;\n    height: 22px;\n    font-size: 0.7em;\n    line-height: 22px;\n}\n    </v-style>\n\n    <div class=\"tag-wrap\">\n        <div class=\"tagsinput\" ref=\"tagsInputRef\">\n            <Tag v-for=\"tag in currentTags\"\n                :key=\"tag.value\"\n                :modelValue=\"tag\"\n                :disabled=\"disabled\"\n                @removeTag=\"onRemoveTag\" />\n        </div>\n\n        <template v-if=\"!disabled\">\n            <AutoComplete v-if=\"isNewTagVisible\"\n                v-model:value=\"searchValue\"\n                :options=\"searchOptions\"\n                placeholder=\"tag name\"\n                @select=\"onSelect\"\n                @search=\"onSearch\"\n                @inputKeyDown=\"onInputKeyDown\" />\n\n            <span v-else class=\"text-muted add-new-tags clickable\" @click=\"onAddNewTagsClick\">\n                <i class=\"fa fa-plus\"></i>\n            </span>\n        </template>\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=entityTagList.js.map
