System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createBlock, unref, withCtx, createCommentVNode, createVNode, toDisplayString, isRef, computed, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, PagePicker, RockLabel, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, toGuidOrNull, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      isRef = module.isRef;
      computed = module.computed;
      Fragment = module.Fragment;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      PagePicker = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      debounce = module.debounce;
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

      var _hoisted_1$1 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_2$1 = createTextVNode(" Because this page route is used by Rock, editing is restricted. ");
      var _hoisted_3$1 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-2"
      };
      var _hoisted_5$1 = createTextVNode("Site");
      var _hoisted_6 = {
        class: "col-md-6 col-md-offset-4"
      };
      var script$2 = defineComponent({
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$rou, _props$modelValue$isG, _props$modelValue$sit, _props$modelValue$isS;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var route = propertyRef((_props$modelValue$rou = props.modelValue.route) !== null && _props$modelValue$rou !== void 0 ? _props$modelValue$rou : "", "Route");
          var isGlobal = propertyRef((_props$modelValue$isG = props.modelValue.isGlobal) !== null && _props$modelValue$isG !== void 0 ? _props$modelValue$isG : false, "IsGlobal");
          var site = ref((_props$modelValue$sit = props.modelValue.site) !== null && _props$modelValue$sit !== void 0 ? _props$modelValue$sit : "");
          var page = ref(toPageRouteValueBag(props.modelValue.page));
          var isSystem = ref((_props$modelValue$isS = props.modelValue.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [route, isGlobal];
          function toPageRouteValueBag(page) {
            var _props$modelValue$pag;
            return !page ? undefined : {
              page: (_props$modelValue$pag = props.modelValue.page) !== null && _props$modelValue$pag !== void 0 ? _props$modelValue$pag : {}
            };
          }
          function onUpdateSelectedPage(_x) {
            return _onUpdateSelectedPage.apply(this, arguments);
          }
          function _onUpdateSelectedPage() {
            _onUpdateSelectedPage = _asyncToGenerator(function* (value) {
              if (!value || Array.isArray(value) || !value.page) {
                site.value = "";
                return;
              }
              var request = {
                guid: toGuidOrNull(value.page.value)
              };
              var response = yield invokeBlockAction("GetSiteName", request);
              if (response.isSuccess && response.data) {
                site.value = response.data.siteName;
              }
            });
            return _onUpdateSelectedPage.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$rou2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(route, (_props$modelValue$rou2 = props.modelValue.route) !== null && _props$modelValue$rou2 !== void 0 ? _props$modelValue$rou2 : "");
            updateRefValue(isGlobal, props.modelValue.isGlobal);
            updateRefValue(page, toPageRouteValueBag(props.modelValue.page));
          });
          watch([attributeValues, route, isGlobal, page, ...propRefs], () => {
            var _page$value;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              route: route.value,
              isGlobal: isGlobal.value,
              page: (_page$value = page.value) === null || _page$value === void 0 ? void 0 : _page$value.page
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [isSystem.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1$1, _hoisted_2$1]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(PagePicker), {
              modelValue: page.value,
              "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => page.value = $event), onUpdateSelectedPage],
              label: "Page",
              rules: "required",
              multiple: false,
              showSelectCurrentPage: "",
              disabled: isSystem.value
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_5$1]),
              _: 1
            }), createElementVNode("p", null, toDisplayString(site.value), 1)]), createElementVNode("div", _hoisted_6, [createVNode(unref(TextBox), {
              modelValue: unref(route),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(route) ? route.value = $event : null),
              label: "Route",
              disabled: isSystem.value,
              rules: "required"
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(CheckBox), {
              modelValue: unref(isGlobal),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(isGlobal) ? isGlobal.value = $event : null),
              label: "Is Global",
              help: "Check this if the page should be used by every site even if 'Enable Exclusive Routes' is turned on."
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Cms/PageRouteDetail/editPanel.partial.obs";

      var _hoisted_1 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_2 = createTextVNode(" Because this page route is used by Rock, editing is restricted. ");
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
        name: 'viewPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isSystem = computed(() => {
            var _props$modelValue$isS, _props$modelValue3;
            return (_props$modelValue$isS = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$pag;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$pag = props.modelValue.page) !== null && _props$modelValue$pag !== void 0 && _props$modelValue$pag.value) {
              var _props$modelValue$pag2;
              valueBuilder.addTextValue("Page", (_props$modelValue$pag2 = props.modelValue.page.text) !== null && _props$modelValue$pag2 !== void 0 ? _props$modelValue$pag2 : "");
            }
            if (props.modelValue.route) {
              valueBuilder.addTextValue("Route", props.modelValue.route);
            }
            if (props.modelValue.site) {
              valueBuilder.addTextValue("Site", props.modelValue.site);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [unref(isSystem) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1, _hoisted_2]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Cms/PageRouteDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'pageRouteDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var pageRouteViewBag = ref(config.entity);
          var pageRouteEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "isGlobal", "page", "route"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(pageRouteEditBag, validProperties, invokeBlockAction), undefined, true);
          var entityKey = computed(() => {
            var _pageRouteViewBag$val, _pageRouteViewBag$val2;
            return (_pageRouteViewBag$val = (_pageRouteViewBag$val2 = pageRouteViewBag.value) === null || _pageRouteViewBag$val2 === void 0 ? void 0 : _pageRouteViewBag$val2.idKey) !== null && _pageRouteViewBag$val !== void 0 ? _pageRouteViewBag$val : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var isDeleteable = computed(() => {
            var _pageRouteViewBag$val3;
            return config.isEditable === true && ((_pageRouteViewBag$val3 = pageRouteViewBag.value) === null || _pageRouteViewBag$val3 === void 0 ? void 0 : _pageRouteViewBag$val3.isSystem) !== true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _pageRouteEditBag$val;
              if (!((_pageRouteEditBag$val = pageRouteEditBag.value) !== null && _pageRouteEditBag$val !== void 0 && _pageRouteEditBag$val.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  return config.navigationUrls[NavigationUrlKey.ParentPage];
                }
                return false;
              }
              return true;
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _pageRouteViewBag$val4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_pageRouteViewBag$val4 = pageRouteViewBag.value) === null || _pageRouteViewBag$val4 === void 0 ? void 0 : _pageRouteViewBag$val4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete page route.";
                return false;
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _pageRouteViewBag$val5;
              var result = yield invokeBlockAction("Edit", {
                key: (_pageRouteViewBag$val5 = pageRouteViewBag.value) === null || _pageRouteViewBag$val5 === void 0 ? void 0 : _pageRouteViewBag$val5.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                pageRouteEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return _onEdit.apply(this, arguments);
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
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: pageRouteEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  pageRouteViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save page route.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified page route could not be viewed.";
          } else if (!config.entity.idKey) {
            pageRouteEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              textContent: toDisplayString(blockError.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              textContent: toDisplayString(errorMessage.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(EntityType).PageRoute,
              entityTypeName: "PageRoute",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isDeleteable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: pageRouteViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: pageRouteEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => pageRouteEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/pageRouteDetail.obs";

    })
  };
}));
//# sourceMappingURL=pageRouteDetail.obs.js.map
