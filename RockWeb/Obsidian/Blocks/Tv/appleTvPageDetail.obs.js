System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/cacheabilityPicker.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/auditDetail.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Utility/util', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createTextVNode, computed, Fragment, createBlock, withCtx, toDisplayString, createCommentVNode, NotificationBox, EntityType, DetailPanelMode, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, TextBox, CheckBox, CodeEditor, CacheabilityPicker, RockButton, BtnType, BtnSize, RockForm, Panel, AuditDetail, Modal, debounce, makeUrlRedirectSafe;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createTextVNode = module.createTextVNode;
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      CacheabilityPicker = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
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

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam, _props$modelValue$des, _props$modelValue$pag, _props$modelValue$roc;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "InternalName");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var showInMenu = ref(props.modelValue.showInMenu);
          var pageTVML = ref((_props$modelValue$pag = props.modelValue.pageTVML) !== null && _props$modelValue$pag !== void 0 ? _props$modelValue$pag : "");
          var cacheability = ref((_props$modelValue$roc = props.modelValue.rockCacheability) !== null && _props$modelValue$roc !== void 0 ? _props$modelValue$roc : null);
          var propRefs = [name, description];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nam2, _props$modelValue$des2, _props$modelValue$pag2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(showInMenu, props.modelValue.showInMenu);
            updateRefValue(pageTVML, (_props$modelValue$pag2 = props.modelValue.pageTVML) !== null && _props$modelValue$pag2 !== void 0 ? _props$modelValue$pag2 : "");
          });
          watch([attributeValues, showInMenu, pageTVML, cacheability, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value,
              description: description.value,
              showInMenu: showInMenu.value,
              pageTVML: pageTVML.value,
              rockCacheability: cacheability.value
            });
            emit("update:modelValue", newValue);
          }, {
            deep: true
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Page Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: showInMenu.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showInMenu.value = $event),
              label: "Show In Menu"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
              modelValue: pageTVML.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => pageTVML.value = $event),
              label: "Page TVML",
              theme: "rock",
              mode: "text",
              editorHeight: 200
            }, null, 8, ["modelValue"]), createVNode(unref(CacheabilityPicker), {
              modelValue: cacheability.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => cacheability.value = $event),
              showBlankItem: false,
              multiple: false
            }, null, 8, ["modelValue"]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Tv/AppleTvPageDetail/editPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = createElementVNode("i", {
        class: "fa fa-clipboard"
      }, null, -1);
      var _hoisted_2 = [_hoisted_1];
      var _hoisted_3 = {
        key: 0
      };
      var _hoisted_4 = createTextVNode(" Save ");
      var _hoisted_5 = createTextVNode(" Save Continue Editing ");
      var _hoisted_6 = createTextVNode(" Cancel ");
      var script = exports('default', defineComponent({
        name: 'appleTvPageDetail',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var appleTvPageEditBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var submitForm = ref(false);
          var redirectAfterSave = ref(true);
          var resetKey = ref("");
          var showAuditDetailsModal = ref(false);
          var panelMode = ref(DetailPanelMode.Edit);
          var validProperties = ["attributeValues", "name", "description", "showInMenu", "pageTVML", "rockCacheability"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(appleTvPageEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _appleTvPageEditBag$v, _appleTvPageEditBag$v2;
            return (_appleTvPageEditBag$v = (_appleTvPageEditBag$v2 = appleTvPageEditBag.value) === null || _appleTvPageEditBag$v2 === void 0 ? void 0 : _appleTvPageEditBag$v2.name) !== null && _appleTvPageEditBag$v !== void 0 ? _appleTvPageEditBag$v : "New Application";
          });
          var entityKey = computed(() => {
            var _appleTvPageEditBag$v3, _appleTvPageEditBag$v4;
            return (_appleTvPageEditBag$v3 = (_appleTvPageEditBag$v4 = appleTvPageEditBag.value) === null || _appleTvPageEditBag$v4 === void 0 ? void 0 : _appleTvPageEditBag$v4.idKey) !== null && _appleTvPageEditBag$v3 !== void 0 ? _appleTvPageEditBag$v3 : "";
          });
          var headerSecondaryActions = computed(() => {
            var actions = [];
            if (appleTvPageEditBag.value.idKey) {
              actions.push({
                type: "default",
                title: "Audit Details",
                handler: onAuditClick
              });
            }
            return actions;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var onAuditClick = () => {
            showAuditDetailsModal.value = true;
          };
          var onExportClick = event => {
            var _appleTvPageEditBag$v5, _appleTvPageEditBag$v6;
            navigator.clipboard.writeText((_appleTvPageEditBag$v5 = (_appleTvPageEditBag$v6 = appleTvPageEditBag.value) === null || _appleTvPageEditBag$v6 === void 0 ? void 0 : _appleTvPageEditBag$v6.pageGuid) !== null && _appleTvPageEditBag$v5 !== void 0 ? _appleTvPageEditBag$v5 : "");
            var jquery = window["$"];
            var jEl = jquery(event.target).tooltip();
            jEl.attr("data-original-title", "Copied").tooltip("show").attr("data-original-title", "Copy Page Guid to Clipboard");
          };
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _config$navigationUrl;
              if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                window.location.href = makeUrlRedirectSafe(config.navigationUrls[NavigationUrlKey.ParentPage]);
              }
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              errorMessage.value = "";
              var data = {
                entity: appleTvPageEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 201 && typeof result.data === "string" && redirectAfterSave.value) {
                  window.location.href = makeUrlRedirectSafe(result.data);
                }
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save page.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          function onSaveForm() {
            redirectAfterSave.value = true;
            submitForm.value = true;
          }
          function onSaveAndContinueEditingForm() {
            redirectAfterSave.value = false;
            submitForm.value = true;
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified page could not be viewed.";
          } else if (!config.entity.idKey) {
            appleTvPageEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(RockForm), {
              submit: submitForm.value,
              "onUpdate:submit": _cache[2] || (_cache[2] = $event => submitForm.value = $event),
              onSubmit: onSave,
              formResetKey: resetKey.value
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                type: "block",
                title: unref(panelName),
                headerSecondaryActions: unref(headerSecondaryActions)
              }, {
                headerActions: withCtx(() => [createElementVNode("span", {
                  class: "action clickable text-info",
                  title: "Copy Page Guid to Clipboard",
                  onClick: onExportClick
                }, _hoisted_2)]),
                default: withCtx(() => [panelMode.value === unref(DetailPanelMode).Add || panelMode.value === unref(DetailPanelMode).Edit ? (openBlock(), createBlock(unref(script$1), {
                  key: 0,
                  modelValue: appleTvPageEditBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => appleTvPageEditBag.value = $event),
                  options: unref(options),
                  onPropertyChanged: onPropertyChanged
                }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true), createVNode(unref(Modal), {
                  modelValue: showAuditDetailsModal.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showAuditDetailsModal.value = $event),
                  title: "Audit Details"
                }, {
                  default: withCtx(() => [createVNode(unref(AuditDetail), {
                    entityTypeGuid: unref(EntityType).Page,
                    entityKey: unref(entityKey)
                  }, null, 8, ["entityTypeGuid", "entityKey"])]),
                  _: 1
                }, 8, ["modelValue"])]),
                footerActions: withCtx(() => [panelMode.value !== unref(DetailPanelMode).View ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onSaveForm
                }, {
                  default: withCtx(() => [_hoisted_4]),
                  _: 1
                }, 8, ["btnSize", "btnType"]), createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onSaveAndContinueEditingForm
                }, {
                  default: withCtx(() => [_hoisted_5]),
                  _: 1
                }, 8, ["btnSize", "btnType"]), createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onCancelEdit
                }, {
                  default: withCtx(() => [_hoisted_6]),
                  _: 1
                }, 8, ["btnSize", "btnType"])])) : createCommentVNode("v-if", true)]),
                _: 1
              }, 8, ["title", "headerSecondaryActions"])]),
              _: 1
            }, 8, ["submit", "formResetKey"])], 64);
          };
        }
      }));

      script.__file = "src/Tv/appleTvPageDetail.obs";

    })
  };
}));
//# sourceMappingURL=appleTvPageDetail.obs.js.map
