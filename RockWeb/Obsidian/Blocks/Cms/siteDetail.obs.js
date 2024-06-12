System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/fileUploader.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/attributeEditor.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, unref, withCtx, isRef, toDisplayString, createCommentVNode, computed, createBlock, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, NumberBox, DropDownList, PagePicker, FileUploader, Panel, CodeEditor, Modal, RockButton, AttributeEditor, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      isRef = module.isRef;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      createBlock = module.createBlock;
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
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      PagePicker = module["default"];
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      AttributeEditor = module["default"];
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
      var _hoisted_2$1 = createTextVNode(" If a Default Page is not specified, Rock will automatically create a new page at the root and set it as the default page for this new site. ");
      var _hoisted_3$1 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-6"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-4"
      };
      var _hoisted_8 = {
        class: "col-md-6 col-md-offset-2"
      };
      var _hoisted_9 = {
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-md-4"
      };
      var _hoisted_11 = {
        class: "col-md-4"
      };
      var _hoisted_12 = createTextVNode(" Page Attributes apply to all of the pages of this site. Each page will have its own value for these attributes. ");
      var _hoisted_13 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var _hoisted_14 = createElementVNode("hr", null, null, -1);
      var _hoisted_15 = createTextVNode("Save");
      var _hoisted_16 = {
        class: "row"
      };
      var _hoisted_17 = {
        class: "col-md-6"
      };
      var _hoisted_18 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$the, _props$modelValue$sit, _props$modelValue$err, _props$modelValue$goo, _props$modelValue$fav, _props$modelValue$sit2, _props$modelValue$all, _props$modelValue$ind, _props$modelValue$pag, _props$options$themes, _props$modelValue$def, _props$modelValue$log, _props$modelValue$cha, _props$modelValue$com, _props$modelValue$reg, _props$modelValue$pag2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var theme = propertyRef((_props$modelValue$the = props.modelValue.theme) !== null && _props$modelValue$the !== void 0 ? _props$modelValue$the : "", "Theme");
          var siteDomains = ref((_props$modelValue$sit = props.modelValue.siteDomains) !== null && _props$modelValue$sit !== void 0 ? _props$modelValue$sit : "");
          var errorPage = propertyRef((_props$modelValue$err = props.modelValue.errorPage) !== null && _props$modelValue$err !== void 0 ? _props$modelValue$err : "", "ErrorPage");
          var googleAnalyticsCode = propertyRef((_props$modelValue$goo = props.modelValue.googleAnalyticsCode) !== null && _props$modelValue$goo !== void 0 ? _props$modelValue$goo : "", "GoogleAnalyticsCode");
          var requiresEncryption = propertyRef(props.modelValue.requiresEncryption, "RequiresEncryption");
          var enabledForShortening = propertyRef(props.modelValue.enabledForShortening, "EnabledForShortening");
          var enableVisitorTracking = propertyRef(props.modelValue.enableVisitorTracking, "EnableVisitorTracking");
          var enablePersonalization = propertyRef(props.modelValue.enablePersonalization, "enablePersonalization");
          var favIconBinaryFile = propertyRef((_props$modelValue$fav = props.modelValue.favIconBinaryFile) !== null && _props$modelValue$fav !== void 0 ? _props$modelValue$fav : null, "FavIconBinaryFile");
          var siteLogoBinaryFile = propertyRef((_props$modelValue$sit2 = props.modelValue.siteLogoBinaryFile) !== null && _props$modelValue$sit2 !== void 0 ? _props$modelValue$sit2 : null, "SiteLogoBinaryFile");
          var enableMobileRedirect = propertyRef(props.modelValue.enableMobileRedirect, "EnableMobileRedirect");
          var enablePageViews = propertyRef(props.modelValue.enablePageViews, "EnablePageViews");
          var retentionDuration = ref(props.modelValue.retentionDuration);
          var allowedFrameDomains = propertyRef((_props$modelValue$all = props.modelValue.allowedFrameDomains) !== null && _props$modelValue$all !== void 0 ? _props$modelValue$all : "", "AllowedFrameDomains");
          var allowIndexing = propertyRef(props.modelValue.allowIndexing, "AllowIndexing");
          var indexStartingLocation = propertyRef((_props$modelValue$ind = props.modelValue.indexStartingLocation) !== null && _props$modelValue$ind !== void 0 ? _props$modelValue$ind : "", "IndexStartingLocation");
          var enableExclusiveRoutes = propertyRef(props.modelValue.enableExclusiveRoutes, "EnableExclusiveRoutes");
          var enablePageViewGeoTracking = propertyRef(props.modelValue.enablePageViewGeoTracking, "EnablePageViewGeoTracking");
          var disablePredictableIds = propertyRef(props.modelValue.disablePredictableIds, "DisablePredictableIds");
          var pageHeaderContent = propertyRef((_props$modelValue$pag = props.modelValue.pageHeaderContent) !== null && _props$modelValue$pag !== void 0 ? _props$modelValue$pag : "", "PageHeaderContent");
          var themes = ref((_props$options$themes = props.options.themes) !== null && _props$options$themes !== void 0 ? _props$options$themes : []);
          var isModalOpen = ref(false);
          var reservedKeyNames = ref([]);
          var modalTitle = ref("Add attribute for pages of ".concat(name));
          var siteAttribute = ref(null);
          var submitEditAttribute = ref(false);
          var defaultPage = ref({
            page: (_props$modelValue$def = props.modelValue.defaultPage) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : null
          });
          var loginPage = ref({
            page: (_props$modelValue$log = props.modelValue.loginPage) !== null && _props$modelValue$log !== void 0 ? _props$modelValue$log : null
          });
          var changePasswordPage = ref({
            page: (_props$modelValue$cha = props.modelValue.changePasswordPage) !== null && _props$modelValue$cha !== void 0 ? _props$modelValue$cha : null
          });
          var communicationPage = ref({
            page: (_props$modelValue$com = props.modelValue.communicationPage) !== null && _props$modelValue$com !== void 0 ? _props$modelValue$com : null
          });
          var registrationPage = ref({
            page: (_props$modelValue$reg = props.modelValue.registrationPage) !== null && _props$modelValue$reg !== void 0 ? _props$modelValue$reg : null
          });
          var pageNotFoundPage = ref({
            page: (_props$modelValue$pag2 = props.modelValue.pageNotFoundPage) !== null && _props$modelValue$pag2 !== void 0 ? _props$modelValue$pag2 : null
          });
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, isActive, name, theme, googleAnalyticsCode, requiresEncryption, enabledForShortening, enableVisitorTracking, enablePersonalization, favIconBinaryFile, enablePageViews, siteLogoBinaryFile, enableMobileRedirect, allowedFrameDomains, allowIndexing, indexStartingLocation, enableExclusiveRoutes, enablePageViewGeoTracking, disablePredictableIds, pageHeaderContent, errorPage];
          function onAddAttribute() {
            return _onAddAttribute.apply(this, arguments);
          }
          function _onAddAttribute() {
            _onAddAttribute = _asyncToGenerator(function* () {
              var request = {
                attributeGuid: null
              };
              var response = yield invokeBlockAction("GetAttribute", request);
              if (response.isSuccess && response.data) {
                siteAttribute.value = response.data.editableAttribute;
                isModalOpen.value = true;
                reservedKeyNames.value = response.data.reservedKeyNames;
                modalTitle.value = response.data.modalTitle;
              }
            });
            return _onAddAttribute.apply(this, arguments);
          }
          function onSaveEditAttribute() {
            if (siteAttribute.value && props.options.siteAttributes) {
              var index = props.options.siteAttributes.findIndex(a => {
                var _siteAttribute$value;
                return a.guid === ((_siteAttribute$value = siteAttribute.value) === null || _siteAttribute$value === void 0 ? void 0 : _siteAttribute$value.guid);
              });
              if (index !== -1) {
                props.options.siteAttributes.splice(index, 1, siteAttribute.value);
              } else {
                props.options.siteAttributes.push(siteAttribute.value);
              }
              siteAttribute.value = null;
              isModalOpen.value = false;
            }
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$the2, _props$modelValue$sit3, _props$modelValue$err2, _props$modelValue$goo2, _props$modelValue$fav2, _props$modelValue$sit4, _props$modelValue$all2, _props$modelValue$ind2, _props$modelValue$pag3, _props$modelValue$def2, _props$modelValue$log2, _props$modelValue$cha2, _props$modelValue$com2, _props$modelValue$reg2, _props$modelValue$pag4;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(theme, (_props$modelValue$the2 = props.modelValue.theme) !== null && _props$modelValue$the2 !== void 0 ? _props$modelValue$the2 : "");
            updateRefValue(siteDomains, (_props$modelValue$sit3 = props.modelValue.siteDomains) !== null && _props$modelValue$sit3 !== void 0 ? _props$modelValue$sit3 : "");
            updateRefValue(errorPage, (_props$modelValue$err2 = props.modelValue.errorPage) !== null && _props$modelValue$err2 !== void 0 ? _props$modelValue$err2 : "");
            updateRefValue(googleAnalyticsCode, (_props$modelValue$goo2 = props.modelValue.googleAnalyticsCode) !== null && _props$modelValue$goo2 !== void 0 ? _props$modelValue$goo2 : "");
            updateRefValue(requiresEncryption, props.modelValue.requiresEncryption);
            updateRefValue(enabledForShortening, props.modelValue.enabledForShortening);
            updateRefValue(enableVisitorTracking, props.modelValue.enableVisitorTracking);
            updateRefValue(enablePersonalization, props.modelValue.enablePersonalization);
            updateRefValue(favIconBinaryFile, (_props$modelValue$fav2 = props.modelValue.favIconBinaryFile) !== null && _props$modelValue$fav2 !== void 0 ? _props$modelValue$fav2 : null);
            updateRefValue(siteLogoBinaryFile, (_props$modelValue$sit4 = props.modelValue.siteLogoBinaryFile) !== null && _props$modelValue$sit4 !== void 0 ? _props$modelValue$sit4 : null);
            updateRefValue(enableMobileRedirect, props.modelValue.enableMobileRedirect);
            updateRefValue(enablePageViews, props.modelValue.enablePageViews);
            updateRefValue(retentionDuration, props.modelValue.retentionDuration);
            updateRefValue(allowedFrameDomains, (_props$modelValue$all2 = props.modelValue.allowedFrameDomains) !== null && _props$modelValue$all2 !== void 0 ? _props$modelValue$all2 : "");
            updateRefValue(allowIndexing, props.modelValue.allowIndexing);
            updateRefValue(indexStartingLocation, (_props$modelValue$ind2 = props.modelValue.indexStartingLocation) !== null && _props$modelValue$ind2 !== void 0 ? _props$modelValue$ind2 : "");
            updateRefValue(enableExclusiveRoutes, props.modelValue.enableExclusiveRoutes);
            updateRefValue(enablePageViewGeoTracking, props.modelValue.enablePageViewGeoTracking);
            updateRefValue(disablePredictableIds, props.modelValue.disablePredictableIds);
            updateRefValue(pageHeaderContent, (_props$modelValue$pag3 = props.modelValue.pageHeaderContent) !== null && _props$modelValue$pag3 !== void 0 ? _props$modelValue$pag3 : "");
            updateRefValue(defaultPage, {
              page: (_props$modelValue$def2 = props.modelValue.defaultPage) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : null
            });
            updateRefValue(loginPage, {
              page: (_props$modelValue$log2 = props.modelValue.loginPage) !== null && _props$modelValue$log2 !== void 0 ? _props$modelValue$log2 : null
            });
            updateRefValue(changePasswordPage, {
              page: (_props$modelValue$cha2 = props.modelValue.changePasswordPage) !== null && _props$modelValue$cha2 !== void 0 ? _props$modelValue$cha2 : null
            });
            updateRefValue(communicationPage, {
              page: (_props$modelValue$com2 = props.modelValue.communicationPage) !== null && _props$modelValue$com2 !== void 0 ? _props$modelValue$com2 : null
            });
            updateRefValue(registrationPage, {
              page: (_props$modelValue$reg2 = props.modelValue.registrationPage) !== null && _props$modelValue$reg2 !== void 0 ? _props$modelValue$reg2 : null
            });
            updateRefValue(pageNotFoundPage, {
              page: (_props$modelValue$pag4 = props.modelValue.pageNotFoundPage) !== null && _props$modelValue$pag4 !== void 0 ? _props$modelValue$pag4 : null
            });
          });
          watch([attributeValues, siteDomains, defaultPage, loginPage, changePasswordPage, communicationPage, registrationPage, pageNotFoundPage, ...propRefs], () => {
            var _defaultPage$value, _loginPage$value, _changePasswordPage$v, _communicationPage$va, _registrationPage$val, _pageNotFoundPage$val;
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              theme: theme.value,
              defaultPage: (_defaultPage$value = defaultPage.value) === null || _defaultPage$value === void 0 ? void 0 : _defaultPage$value.page,
              loginPage: (_loginPage$value = loginPage.value) === null || _loginPage$value === void 0 ? void 0 : _loginPage$value.page,
              changePasswordPage: (_changePasswordPage$v = changePasswordPage.value) === null || _changePasswordPage$v === void 0 ? void 0 : _changePasswordPage$v.page,
              communicationPage: (_communicationPage$va = communicationPage.value) === null || _communicationPage$va === void 0 ? void 0 : _communicationPage$va.page,
              registrationPage: (_registrationPage$val = registrationPage.value) === null || _registrationPage$val === void 0 ? void 0 : _registrationPage$val.page,
              pageNotFoundPage: (_pageNotFoundPage$val = pageNotFoundPage.value) === null || _pageNotFoundPage$val === void 0 ? void 0 : _pageNotFoundPage$val.page,
              siteDomains: siteDomains.value,
              errorPage: errorPage.value,
              googleAnalyticsCode: googleAnalyticsCode.value,
              requiresEncryption: requiresEncryption.value,
              enabledForShortening: enabledForShortening.value,
              enableVisitorTracking: enableVisitorTracking.value,
              enablePersonalization: enablePersonalization.value,
              favIconBinaryFile: favIconBinaryFile.value,
              siteLogoBinaryFile: siteLogoBinaryFile.value,
              enableMobileRedirect: enableMobileRedirect.value,
              enablePageViews: enablePageViews.value,
              retentionDuration: retentionDuration.value,
              allowedFrameDomains: allowedFrameDomains.value,
              allowIndexing: allowIndexing.value,
              indexStartingLocation: indexStartingLocation.value,
              enableExclusiveRoutes: enableExclusiveRoutes.value,
              enablePageViewGeoTracking: enablePageViewGeoTracking.value,
              disablePredictableIds: disablePredictableIds.value,
              pageHeaderContent: pageHeaderContent.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _component_RockForm = resolveComponent("RockForm");
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(NotificationBox), {
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1$1, _hoisted_2$1]),
              _: 1
            }), createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(DropDownList), {
              modelValue: unref(theme),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(theme) ? theme.value = $event : null),
              label: "Theme",
              help: "The theme that should be used for the site. Themes contain specific layouts and css styling that controls how a site and its pages will look.",
              items: themes.value
            }, null, 8, ["modelValue", "items"]), createVNode(unref(PagePicker), {
              modelValue: defaultPage.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => defaultPage.value = $event),
              label: "Default Page",
              multiple: false,
              help: "The page and route that will be used whenever a specific page or page route is not provided.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PagePicker), {
              modelValue: loginPage.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => loginPage.value = $event),
              label: "Login Page",
              multiple: false,
              help: "The page users will be redirected to when they request a page that requires login.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PagePicker), {
              modelValue: changePasswordPage.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => changePasswordPage.value = $event),
              label: "Change Password Page",
              multiple: false,
              help: "The page for changing a password for the site.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PagePicker), {
              modelValue: communicationPage.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => communicationPage.value = $event),
              label: "Communication Page",
              multiple: false,
              help: "The page that user will be redirected to when creating a new communication.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PagePicker), {
              modelValue: registrationPage.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => registrationPage.value = $event),
              label: "Group Registration Page",
              multiple: false,
              help: "The page that user will be redirected to when they request to register for a group.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"]), createVNode(unref(PagePicker), {
              modelValue: pageNotFoundPage.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => pageNotFoundPage.value = $event),
              label: "404 Page",
              multiple: false,
              help: "Page to use instead of the server's 404 message.",
              promptForPageRoute: "",
              showSelectCurrentPage: ""
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_8, [createVNode(unref(TextBox), {
              modelValue: siteDomains.value,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => siteDomains.value = $event),
              label: "Domain(s)",
              help: "A list of domains that are associated with this site (list can be either comma delimited or each on a separate line).\r\n                  These values are used by Rock to load the correct site whenever a specific page or route is not provided in the URL.\r\n                  Rock will determine the site to use by finding the first site with a domain value that is contained by the current request's hostname in the url.\r\n                  It will then display that site's default page.",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(errorPage),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(errorPage) ? errorPage.value = $event : null),
              label: "Error Page",
              help: "The URL that user will be redirected to if an error occurs on site."
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(googleAnalyticsCode),
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(googleAnalyticsCode) ? googleAnalyticsCode.value = $event : null),
              label: "Google Analytics Code",
              help: "Optional Google Analytics Code. If specified, the Google Analytics script with this code will be added to every page rendered for this site."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(requiresEncryption),
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => isRef(requiresEncryption) ? requiresEncryption.value = $event : null),
              label: "Require Encryption",
              help: "Ensures that the site is loaded over SSL by redirecting to https."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(enabledForShortening),
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isRef(enabledForShortening) ? enabledForShortening.value = $event : null),
              label: "Enabled for Shortening",
              help: "Should this site (and its first domain) be an available option when creating shortlinks?"
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(enableVisitorTracking),
              "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => isRef(enableVisitorTracking) ? enableVisitorTracking.value = $event : null),
              label: "Enable Visitor Tracking",
              help: "Enable Visitor Tracking to keep track of how an anonymous visitor is interacting with the site."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(enablePersonalization),
              "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => isRef(enablePersonalization) ? enablePersonalization.value = $event : null),
              label: "Enable Personalization",
              help: "Enable Personalization to allow pages to be personalized based on how the user interacts with the site."
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(FileUploader), {
              modelValue: unref(favIconBinaryFile),
              "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => isRef(favIconBinaryFile) ? favIconBinaryFile.value = $event : null),
              label: "Site Icon",
              help: "Commonly called a 'favicon', this image is used as a browser and app icon for your site. Recommended image size is 192x192. Rock will automatically create all the sizes required by various devices.",
              uploadAsTemporary: true,
              uploadButtonText: "Upload",
              showDeleteButton: true
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_11, [createVNode(unref(FileUploader), {
              modelValue: unref(siteLogoBinaryFile),
              "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => isRef(siteLogoBinaryFile) ? siteLogoBinaryFile.value = $event : null),
              label: "Site Logo",
              help: "The site logo is used by certain themes to apply to the changes on the site. See the theme's documentation for information on sizing",
              uploadAsTemporary: true,
              uploadButtonText: "Upload",
              showDeleteButton: true
            }, null, 8, ["modelValue"])])])])]), createVNode(unref(Panel), {
              title: "Page Attributes",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createVNode(unref(NotificationBox), {
                alertType: "info"
              }, {
                default: withCtx(() => [_hoisted_12]),
                _: 1
              }), createVNode(unref(RockButton), {
                class: "btn-add btn-grid-action",
                btnType: "link",
                onClick: onAddAttribute
              }, {
                default: withCtx(() => [_hoisted_13]),
                _: 1
              }), createVNode(unref(Modal), {
                modelValue: isModalOpen.value,
                "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => isModalOpen.value = $event),
                title: "Page Attributes"
              }, {
                customButtons: withCtx(() => [createVNode(unref(RockButton), {
                  btnType: "primary",
                  onClick: onSaveEditAttribute
                }, {
                  default: withCtx(() => [_hoisted_15]),
                  _: 1
                })]),
                default: withCtx(() => [createElementVNode("h4", null, toDisplayString(modalTitle.value), 1), _hoisted_14, createVNode(_component_RockForm, {
                  submit: submitEditAttribute.value,
                  "onUpdate:submit": _cache[20] || (_cache[20] = $event => submitEditAttribute.value = $event),
                  onSubmit: onSaveEditAttribute
                }, {
                  default: withCtx(() => [createCommentVNode(" <div v-if=\"showEntityTypeQualifier\" class=\"well\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <TextBox v-model=\"entityTypeQualifierColumn\" label=\"Qualifier Field\" />\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6\">\r\n                                <TextBox v-model=\"entityTypeQualifierValue\" label=\"Qualifier Value\" />\r\n                            </div>\r\n                        </div>\r\n                    </div> "), createVNode(unref(AttributeEditor), {
                    modelValue: siteAttribute.value,
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => siteAttribute.value = $event),
                    reservedKeyNames: reservedKeyNames.value
                  }, null, 8, ["modelValue", "reservedKeyNames"])]),
                  _: 1
                }, 8, ["submit"])]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), createVNode(unref(Panel), {
              title: "Advanced Settings",
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_16, [createElementVNode("div", _hoisted_17, [createVNode(unref(CheckBox), {
                modelValue: unref(enableMobileRedirect),
                "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => isRef(enableMobileRedirect) ? enableMobileRedirect.value = $event : null),
                label: "Enabled Mobile Redirect"
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                modelValue: unref(enablePageViews),
                "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => isRef(enablePageViews) ? enablePageViews.value = $event : null),
                label: "Log Page Views"
              }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
                modelValue: retentionDuration.value,
                "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => retentionDuration.value = $event),
                label: "Page View Retention Period",
                help: "The number of days to keep page views logged. Leave blank to keep page views logged indefinitely."
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: unref(allowedFrameDomains),
                "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => isRef(allowedFrameDomains) ? allowedFrameDomains.value = $event : null),
                label: "Allowed Frame Domain(s)",
                textMode: "multiline",
                help: "A list of domain values that are allowed to embed this site (via an iframe).  This list may be delimited with spaces or commas, or you may enter item per line.\r\n                      The value you enter here will be used for the <source> as described in [Content-Security-Policy frame-ancestors directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#Syntax).\r\n                      Be sure to include your own server domain(s) in the list to prevent locking yourself out from modal use.\r\n                      If left blank, Rock will inject properties into the HTTP Header which modern web browsers will use to prevent site embedding and it will use a frame-ancestors value of 'self'."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_18, [createVNode(unref(CheckBox), {
                modelValue: unref(allowIndexing),
                "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => isRef(allowIndexing) ? allowIndexing.value = $event : null),
                label: "Allow Indexing"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                modelValue: unref(indexStartingLocation),
                "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => isRef(indexStartingLocation) ? indexStartingLocation.value = $event : null),
                label: "Crawling Starting Location",
                help: "Enables the Rock indexer for this site."
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                modelValue: unref(enableExclusiveRoutes),
                "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => isRef(enableExclusiveRoutes) ? enableExclusiveRoutes.value = $event : null),
                label: "Enable Exclusive Routes",
                help: "Enabling this feature will prevent other sites from using this sites routes and prevent routes from other sites from working on this site.\r\n                      This means the domain in the URL used with the route must match the site's configured Domain(s). If the route is configured as 'Is Global' then this setting is ignored."
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                modelValue: unref(enablePageViewGeoTracking),
                "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => isRef(enablePageViewGeoTracking) ? enablePageViewGeoTracking.value = $event : null),
                label: "Enable Page View Geo Tracking",
                help: "Enabling this feature will allow the PopulateInteractionSessionData job to begin performing geolocation lookup on the IP addresses in the Interaction Session data. This also requires setting up a IP Address Location Service found under System Settings."
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                modelValue: unref(disablePredictableIds),
                "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => isRef(disablePredictableIds) ? disablePredictableIds.value = $event : null),
                label: "Disable Predictable Ids",
                help: "This should be disabled only with the knowledge that the site was created/built to handle this (rare)."
              }, null, 8, ["modelValue"])]), createVNode(unref(CodeEditor), {
                modelValue: unref(pageHeaderContent),
                "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => isRef(pageHeaderContent) ? pageHeaderContent.value = $event : null),
                label: "Page Header Content",
                theme: "rock",
                mode: "text",
                editorHeight: 200,
                help: "The content provided here will be added to each page's head section."
              }, null, 8, ["modelValue"])])]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Cms/SiteDetail/editPanel.partial.obs";

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
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Name", props.modelValue.name);
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.siteDomains) {
              valueBuilder.addTextValue("Domains", props.modelValue.siteDomains);
            }
            if (props.modelValue.theme) {
              valueBuilder.addTextValue("Theme", props.modelValue.theme);
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

      script$1.__file = "src/Cms/SiteDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'siteDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var siteViewBag = ref(config.entity);
          var siteEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "allowedFrameDomains", "allowIndexing", "changePasswordPage", "changePasswordPageRoute", "communicationPage", "communicationPageRoute", "defaultPage", "defaultPageRoute", "description", "disablePredictableIds", "enabledForShortening", "enableExclusiveRoutes", "enableMobileRedirect", "enablePageViewGeoTracking", "enablePageViews", "enablePersonalization", "enableVisitorTracking", "errorPage", "externalUrl", "favIconBinaryFile", "googleAnalyticsCode", "indexStartingLocation", "isActive", "isIndexEnabled", "loginPage", "loginPageRoute", "mobilePage", "name", "pageHeaderContent", "pageNotFoundPage", "pageNotFoundPageRoute", "redirectTablets", "registrationPage", "registrationPageRoute", "requiresEncryption", "siteLogoBinaryFile", "theme", "siteDomains"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(siteEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _siteViewBag$value$na, _siteViewBag$value;
            return (_siteViewBag$value$na = (_siteViewBag$value = siteViewBag.value) === null || _siteViewBag$value === void 0 ? void 0 : _siteViewBag$value.name) !== null && _siteViewBag$value$na !== void 0 ? _siteViewBag$value$na : "";
          });
          var entityKey = computed(() => {
            var _siteViewBag$value$id, _siteViewBag$value2;
            return (_siteViewBag$value$id = (_siteViewBag$value2 = siteViewBag.value) === null || _siteViewBag$value2 === void 0 ? void 0 : _siteViewBag$value2.idKey) !== null && _siteViewBag$value$id !== void 0 ? _siteViewBag$value$id : "";
          });
          var blockLabels = computed(() => {
            var _siteViewBag$value3, _siteViewBag$value4;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_siteViewBag$value3 = siteViewBag.value) === null || _siteViewBag$value3 === void 0 ? void 0 : _siteViewBag$value3.isActive) === true) {
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Active",
                type: "success"
              });
            } else {
              labels.push({
                iconCssClass: "far fa-lightbulb",
                title: "Inactive",
                type: "danger"
              });
            }
            if ((_siteViewBag$value4 = siteViewBag.value) !== null && _siteViewBag$value4 !== void 0 && _siteViewBag$value4.isSystem) {
              labels.push({
                title: "System",
                type: "success"
              });
            }
            return labels;
          });
          var isEditable = computed(() => {
            var _siteViewBag$value5;
            return config.isEditable === true && ((_siteViewBag$value5 = siteViewBag.value) === null || _siteViewBag$value5 === void 0 ? void 0 : _siteViewBag$value5.isSystem) !== true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {
              themes: [],
              siteAttributes: []
            };
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _siteEditBag$value;
              if (!((_siteEditBag$value = siteEditBag.value) !== null && _siteEditBag$value !== void 0 && _siteEditBag$value.idKey)) {
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
              var _siteViewBag$value6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_siteViewBag$value6 = siteViewBag.value) === null || _siteViewBag$value6 === void 0 ? void 0 : _siteViewBag$value6.idKey
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
              var _siteViewBag$value7;
              var result = yield invokeBlockAction("Edit", {
                key: (_siteViewBag$value7 = siteViewBag.value) === null || _siteViewBag$value7 === void 0 ? void 0 : _siteViewBag$value7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                siteEditBag.value = result.data.entity;
                config.options = result.data.options;
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
                entity: siteEditBag.value,
                isEditable: true,
                validProperties: validProperties,
                options: options.value
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  siteViewBag.value = result.data;
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
            siteEditBag.value = config.entity;
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
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(EntityType).Site,
              entityTypeName: "Site",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: siteViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: siteEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => siteEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/siteDetail.obs";

    })
  };
}));
//# sourceMappingURL=siteDetail.obs.js.map
