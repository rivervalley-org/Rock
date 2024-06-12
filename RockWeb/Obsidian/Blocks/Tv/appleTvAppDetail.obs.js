System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, createTextVNode, computed, withCtx, Fragment, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, TextBox, CheckBox, CodeEditor, NumberBox, PagePicker, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      createTextVNode = module.createTextVNode;
      computed = module.computed;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
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
      NumberBox = module["default"];
    }, function (module) {
      PagePicker = module["default"];
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

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6 col-sm-6"
      };
      var _hoisted_8 = {
        class: "col-md-6"
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam, _props$modelValue$des, _props$modelValue$log, _props$modelValue$app, _props$modelValue$app2, _props$modelValue$pag, _props$modelValue$api;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef(props.modelValue.isActive, "IsActive");
          var enablePageViews = propertyRef(props.modelValue.enablePageViews, "EnablePageViews");
          var enablePageViewGeoTracking = propertyRef(props.modelValue.enablePageViewGeoTracking, "EnablePageViewGeoTracking");
          var loginPage = propertyRef((_props$modelValue$log = props.modelValue.loginPage) !== null && _props$modelValue$log !== void 0 ? _props$modelValue$log : {}, "LoginPageId");
          var applicationStyles = ref((_props$modelValue$app = props.modelValue.applicationStyles) !== null && _props$modelValue$app !== void 0 ? _props$modelValue$app : "");
          var applicationJavascript = ref((_props$modelValue$app2 = props.modelValue.applicationJavascript) !== null && _props$modelValue$app2 !== void 0 ? _props$modelValue$app2 : "");
          var pageViewRetentionPeriod = ref((_props$modelValue$pag = props.modelValue.pageViewRetentionPeriod) !== null && _props$modelValue$pag !== void 0 ? _props$modelValue$pag : null);
          var apiKey = ref((_props$modelValue$api = props.modelValue.apiKey) !== null && _props$modelValue$api !== void 0 ? _props$modelValue$api : "");
          var isApplicationJsVisible = ref(props.modelValue.showApplicationJavascript);
          var propRefs = [name, description, isActive, enablePageViews, loginPage, enablePageViewGeoTracking];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nam2, _props$modelValue$des2, _props$modelValue$log2, _props$modelValue$app3, _props$modelValue$app4, _props$modelValue$pag2, _props$modelValue$api2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, props.modelValue.isActive);
            updateRefValue(enablePageViews, props.modelValue.enablePageViews);
            updateRefValue(enablePageViewGeoTracking, props.modelValue.enablePageViewGeoTracking);
            updateRefValue(loginPage, (_props$modelValue$log2 = props.modelValue.loginPage) !== null && _props$modelValue$log2 !== void 0 ? _props$modelValue$log2 : {});
            updateRefValue(applicationStyles, (_props$modelValue$app3 = props.modelValue.applicationStyles) !== null && _props$modelValue$app3 !== void 0 ? _props$modelValue$app3 : "");
            updateRefValue(applicationJavascript, (_props$modelValue$app4 = props.modelValue.applicationJavascript) !== null && _props$modelValue$app4 !== void 0 ? _props$modelValue$app4 : "");
            updateRefValue(pageViewRetentionPeriod, (_props$modelValue$pag2 = props.modelValue.pageViewRetentionPeriod) !== null && _props$modelValue$pag2 !== void 0 ? _props$modelValue$pag2 : null);
            updateRefValue(apiKey, (_props$modelValue$api2 = props.modelValue.apiKey) !== null && _props$modelValue$api2 !== void 0 ? _props$modelValue$api2 : "");
          });
          watch([attributeValues, applicationStyles, pageViewRetentionPeriod, apiKey, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value,
              description: description.value,
              isActive: isActive.value,
              enablePageViews: enablePageViews.value,
              enablePageViewGeoTracking: enablePageViewGeoTracking.value,
              loginPage: loginPage.value,
              applicationStyles: applicationStyles.value,
              applicationJavascript: applicationJavascript.value,
              pageViewRetentionPeriod: pageViewRetentionPeriod.value,
              apiKey: apiKey.value
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
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), isApplicationJsVisible.value ? (openBlock(), createBlock(unref(CodeEditor), {
              key: 0,
              modelValue: applicationJavascript.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => applicationJavascript.value = $event),
              label: "Application Javascript",
              theme: "rock",
              mode: "text",
              editorHeight: 600
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(CodeEditor), {
              modelValue: applicationStyles.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => applicationStyles.value = $event),
              label: "Application Styles",
              theme: "rock",
              mode: "text",
              editorHeight: 400
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(CheckBox), {
              modelValue: unref(enablePageViews),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(enablePageViews) ? enablePageViews.value = $event : null),
              label: "Enable Page Views",
              help: "Determines if interaction records should be written for page views"
            }, null, 8, ["modelValue"]), unref(enablePageViews) ? (openBlock(), createBlock(unref(NumberBox), {
              key: 0,
              modelValue: pageViewRetentionPeriod.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => pageViewRetentionPeriod.value = $event),
              label: "Page View Retention Period",
              help: "The number of days to keep page views logged. Leave blank to keep page views logged indefinitely."
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(PagePicker), {
              modelValue: unref(loginPage),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(loginPage) ? loginPage.value = $event : null),
              multiple: false,
              label: "Authentication Page",
              help: "The page on your public website that will be used in the authentication process."
            }, null, 8, ["modelValue"])])])]), createElementVNode("div", _hoisted_8, [createVNode(unref(TextBox), {
              modelValue: apiKey.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => apiKey.value = $event),
              label: "API Key",
              rules: "required",
              help: "The API key that will be used to secure your TV application."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(enablePageViewGeoTracking),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(enablePageViewGeoTracking) ? enablePageViewGeoTracking.value = $event : null),
              label: "Enable Page View Geo Tracking",
              help: "Enabling this feature will allow the PopulateInteractionSessionData job to begin performing geolocation lookup on the IP addresses in the Interaction Session data. This also requires setting up a IP Address Location Service found under System Settings."
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Tv/AppleTvAppDetail/editPanel.partial.obs";

      var _hoisted_1 = createElementVNode("strong", null, "Note", -1);
      var _hoisted_2 = createTextVNode(" Because this site is used by Rock, editing is not enabled. ");
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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if (props.modelValue.enablePageViews) {
              valueBuilder.addTextValue("Enable Page Views", props.modelValue.enablePageViews ? "True" : "False");
            }
            if (props.modelValue.pageViewRetentionPeriod !== null) {
              valueBuilder.addTextValue("Page View Retention", "".concat(props.modelValue.pageViewRetentionPeriod, " days"));
            }
            if (props.modelValue.apiKey) {
              valueBuilder.addTextValue("API Key", props.modelValue.apiKey);
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

      script$1.__file = "src/Tv/AppleTvAppDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'appleTvAppDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var appleTvAppViewBag = ref(config.entity);
          var appleTvAppEditBag = ref({});
          var entityTypeGuid = EntityType.Site;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "name", "description", "isActive", "loginPage", "enablePageViews", "enablePageViewGeoTracking"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(appleTvAppEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _appleTvAppViewBag$va, _appleTvAppViewBag$va2;
            return (_appleTvAppViewBag$va = (_appleTvAppViewBag$va2 = appleTvAppViewBag.value) === null || _appleTvAppViewBag$va2 === void 0 ? void 0 : _appleTvAppViewBag$va2.name) !== null && _appleTvAppViewBag$va !== void 0 ? _appleTvAppViewBag$va : "";
          });
          var entityKey = computed(() => {
            var _appleTvAppViewBag$va3, _appleTvAppViewBag$va4;
            return (_appleTvAppViewBag$va3 = (_appleTvAppViewBag$va4 = appleTvAppViewBag.value) === null || _appleTvAppViewBag$va4 === void 0 ? void 0 : _appleTvAppViewBag$va4.idKey) !== null && _appleTvAppViewBag$va3 !== void 0 ? _appleTvAppViewBag$va3 : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            return labels;
          });
          var isEditable = computed(() => {
            var _appleTvAppViewBag$va5;
            return config.isEditable === true && ((_appleTvAppViewBag$va5 = appleTvAppViewBag.value) === null || _appleTvAppViewBag$va5 === void 0 ? void 0 : _appleTvAppViewBag$va5.isSystem) !== true;
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
              var _appleTvAppEditBag$va;
              if (!((_appleTvAppEditBag$va = appleTvAppEditBag.value) !== null && _appleTvAppEditBag$va !== void 0 && _appleTvAppEditBag$va.idKey)) {
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
              var _appleTvAppViewBag$va6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_appleTvAppViewBag$va6 = appleTvAppViewBag.value) === null || _appleTvAppViewBag$va6 === void 0 ? void 0 : _appleTvAppViewBag$va6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete site.";
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
              var _appleTvAppViewBag$va7;
              var result = yield invokeBlockAction("Edit", {
                key: (_appleTvAppViewBag$va7 = appleTvAppViewBag.value) === null || _appleTvAppViewBag$va7 === void 0 ? void 0 : _appleTvAppViewBag$va7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                appleTvAppEditBag.value = result.data.entity;
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
                entity: appleTvAppEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  appleTvAppViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save site.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified site could not be viewed.";
          } else if (!config.entity.idKey) {
            appleTvAppEditBag.value = config.entity;
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
            })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "AppleTVApp",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: false,
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: appleTvAppViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: appleTvAppEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => appleTvAppEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Tv/appleTvAppDetail.obs";

    })
  };
}));
//# sourceMappingURL=appleTvAppDetail.obs.js.map
