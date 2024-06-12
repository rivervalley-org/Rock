System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/keyValueList.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, toDisplayString, createElementBlock, createVNode, withModifiers, createCommentVNode, NotificationBox, CodeEditor, DropDownList, KeyValueList, LoadingIndicator, Modal, TransitionVerticalCollapse, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue, alert, newGuid, areEqual, toGuidOrNull;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      withModifiers = module.withModifiers;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      setCustomSettingsBoxValue = module.setCustomSettingsBoxValue;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      newGuid = module.newGuid;
      areEqual = module.areEqual;
      toGuidOrNull = module.toGuidOrNull;
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

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = {
        key: 0
      };
      var _hoisted_3 = {
        key: 1
      };
      var _hoisted_4 = {
        key: 0,
        class: "mb-3"
      };
      var _hoisted_5 = createElementVNode("div", {
        class: "flex-grow-1"
      }, " Theme Documentation ", -1);
      var _hoisted_6 = {
        key: 0,
        class: "align-self-center fa fa-chevron-up"
      };
      var _hoisted_7 = {
        key: 1,
        class: "align-self-center fa fa-chevron-down"
      };
      var _hoisted_8 = {
        key: 0,
        style: {
          "border-top": "1px solid #c3c3c3",
          "overflow-y": "auto",
          "max-height": "300px"
        }
      };
      var _hoisted_9 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'realTimeVisualizerCustomSettings',
        emits: ["close"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(null);
          var reloadBlock = useReloadBlock();
          var errorMessage = ref("");
          var isLoading = ref(true);
          var isModalOpen = ref(true);
          var topicConfiguration = ref([]);
          var topicConfigurationItems = ref([]);
          var customThemeGuid = newGuid();
          var themeGuidOrEmptyString = ref("");
          var systemThemes = ref([]);
          var pageTemplate = ref("");
          var style = ref("");
          var script = ref("");
          var themeSettings = ref([]);
          var themeSettingsItems = ref([]);
          var isThemeHelpVisible = ref(false);
          var themeHelpContent = ref("");
          var originalSelectedThemeGuidOrEmptyString = "";
          var originalSelectedThemeSettings = [];
          var saveButtonText = computed(() => {
            return errorMessage.value || !isLoading.value ? "Save" : "";
          });
          var themeItems = computed(() => {
            var items = [{
              value: customThemeGuid,
              text: "Custom"
            }, ...systemThemes.value];
            return items;
          });
          var startLoading = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetCustomSettings");
              if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                var _toGuidOrNull, _result$data$settings, _result$data$settings2, _result$data$settings3, _toGuidOrNull2, _result$data$options$, _result$data$settings4, _result$data$settings5, _result$data$options$2, _result$data$options$3;
                themeGuidOrEmptyString.value = (_toGuidOrNull = toGuidOrNull(result.data.settings.themeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : "";
                pageTemplate.value = (_result$data$settings = result.data.settings.pageTemplate) !== null && _result$data$settings !== void 0 ? _result$data$settings : "";
                style.value = (_result$data$settings2 = result.data.settings.style) !== null && _result$data$settings2 !== void 0 ? _result$data$settings2 : "";
                script.value = (_result$data$settings3 = result.data.settings.script) !== null && _result$data$settings3 !== void 0 ? _result$data$settings3 : "";
                securityGrant.updateToken(result.data.securityGrantToken);
                originalSelectedThemeGuidOrEmptyString = (_toGuidOrNull2 = toGuidOrNull(result.data.settings.themeGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : "";
                originalSelectedThemeSettings = [];
                if (result.data.settings.themeSettings) {
                  for (var key in result.data.settings.themeSettings) {
                    originalSelectedThemeSettings.push({
                      value: key,
                      key: result.data.settings.themeSettings[key]
                    });
                  }
                }
                systemThemes.value = (_result$data$options$ = result.data.options.themes) !== null && _result$data$options$ !== void 0 ? _result$data$options$ : [];
                updateSelectedTheme();
                topicConfiguration.value = (_result$data$settings4 = (_result$data$settings5 = result.data.settings.topicConfiguration) === null || _result$data$settings5 === void 0 ? void 0 : _result$data$settings5.map(tc => ({
                  value: tc.topic,
                  key: tc.channel
                }))) !== null && _result$data$settings4 !== void 0 ? _result$data$settings4 : [];
                topicConfigurationItems.value = (_result$data$options$2 = (_result$data$options$3 = result.data.options.topics) === null || _result$data$options$3 === void 0 ? void 0 : _result$data$options$3.map(t => ({
                  value: t,
                  text: t
                }))) !== null && _result$data$options$2 !== void 0 ? _result$data$options$2 : [];
              } else {
                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
              }
              isLoading.value = false;
            });
            return function startLoading() {
              return _ref2.apply(this, arguments);
            };
          }();
          function updateSelectedTheme() {
            var _theme$helpContent, _theme$settings$map, _theme$settings;
            var theme = systemThemes.value.find(t => areEqual(t.value, themeGuidOrEmptyString.value));
            if (!themeGuidOrEmptyString.value || !theme || areEqual(themeGuidOrEmptyString.value, customThemeGuid)) {
              themeSettings.value = [];
              themeSettingsItems.value = [];
              themeHelpContent.value = "";
              return;
            }
            isThemeHelpVisible.value = false;
            themeHelpContent.value = (_theme$helpContent = theme.helpContent) !== null && _theme$helpContent !== void 0 ? _theme$helpContent : "";
            themeSettingsItems.value = (_theme$settings$map = (_theme$settings = theme.settings) === null || _theme$settings === void 0 ? void 0 : _theme$settings.map(s => ({
              value: s,
              text: s
            }))) !== null && _theme$settings$map !== void 0 ? _theme$settings$map : [];
            if (areEqual(themeGuidOrEmptyString.value, originalSelectedThemeGuidOrEmptyString)) {
              themeSettings.value = originalSelectedThemeSettings;
            }
          }
          var onSave = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var box = {};
              var settings = {};
              var _iterator = _createForOfIteratorHelper(themeSettings.value),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var setting = _step.value;
                  if (setting.value) {
                    var _setting$key;
                    settings[setting.value] = (_setting$key = setting.key) !== null && _setting$key !== void 0 ? _setting$key : "";
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              var tcs = topicConfiguration.value.map(tc => ({
                topic: tc.value,
                channel: tc.key
              }));
              setCustomSettingsBoxValue(box, "themeGuid", themeGuidOrEmptyString.value);
              setCustomSettingsBoxValue(box, "pageTemplate", pageTemplate.value);
              setCustomSettingsBoxValue(box, "style", style.value);
              setCustomSettingsBoxValue(box, "script", script.value);
              setCustomSettingsBoxValue(box, "themeSettings", settings);
              setCustomSettingsBoxValue(box, "topicConfiguration", tcs);
              var data = {
                box
              };
              var result = yield invokeBlockAction("SaveCustomSettings", data);
              if (result.isSuccess) {
                isModalOpen.value = false;
                reloadBlock();
              } else {
                alert(result.errorMessage || "Unable to save block settings.");
              }
            });
            return function onSave() {
              return _ref3.apply(this, arguments);
            };
          }();
          provideSecurityGrant(securityGrant);
          watch(isModalOpen, () => {
            if (!isModalOpen.value) {
              emit("close");
            }
          });
          watch(themeGuidOrEmptyString, () => {
            updateSelectedTheme();
          });
          startLoading();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isModalOpen.value = $event),
              title: "Real Time Visualizer Settings",
              saveText: unref(saveButtonText),
              onSave: onSave
            }, {
              default: withCtx(() => [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                textContent: toDisplayString(errorMessage.value),
                alertType: "warning"
              }, null, 8, ["textContent"])) : isLoading.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
                key: 1,
                delay: 500
              })) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(KeyValueList), {
                modelValue: topicConfiguration.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => topicConfiguration.value = $event),
                label: "Topic Configuration",
                valueOptions: topicConfigurationItems.value,
                displayValueFirst: "",
                fullWidth: ""
              }, null, 8, ["modelValue", "valueOptions"]), createVNode(unref(DropDownList), {
                modelValue: themeGuidOrEmptyString.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => themeGuidOrEmptyString.value = $event),
                label: "Theme",
                rules: "required",
                items: unref(themeItems),
                showBlankItem: ""
              }, null, 8, ["modelValue", "items"]), themeGuidOrEmptyString.value === unref(customThemeGuid) ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(CodeEditor), {
                modelValue: pageTemplate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => pageTemplate.value = $event),
                label: "Page Template",
                mode: "lava",
                rules: "required"
              }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
                modelValue: style.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => style.value = $event),
                label: "Style",
                mode: "text"
              }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
                modelValue: script.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => script.value = $event),
                label: "Script",
                mode: "javascript"
              }, null, 8, ["modelValue"])])) : themeGuidOrEmptyString.value ? (openBlock(), createElementBlock("div", _hoisted_3, [themeHelpContent.value ? (openBlock(), createElementBlock("div", _hoisted_4, [createElementVNode("div", {
                class: "d-flex clickable",
                style: {
                  "background-color": "#f5f5f5",
                  "padding": "4px 16px"
                },
                onClick: _cache[5] || (_cache[5] = withModifiers($event => isThemeHelpVisible.value = !isThemeHelpVisible.value, ["stop"]))
              }, [_hoisted_5, isThemeHelpVisible.value ? (openBlock(), createElementBlock("i", _hoisted_6)) : (openBlock(), createElementBlock("i", _hoisted_7))]), createVNode(unref(TransitionVerticalCollapse), null, {
                default: withCtx(() => [isThemeHelpVisible.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createElementVNode("div", {
                  style: {
                    "background-color": "#f5f5f5",
                    "padding": "16px"
                  },
                  innerHTML: themeHelpContent.value
                }, null, 8, _hoisted_9)])) : createCommentVNode("v-if", true)]),
                _: 1
              })])) : createCommentVNode("v-if", true), createVNode(unref(KeyValueList), {
                modelValue: themeSettings.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => themeSettings.value = $event),
                label: "Theme Settings",
                valueOptions: themeSettingsItems.value,
                displayValueFirst: "",
                fullWidth: ""
              }, null, 8, ["modelValue", "valueOptions"])])) : createCommentVNode("v-if", true)]))]),
              _: 1
            }, 8, ["modelValue", "saveText"]);
          };
        }
      }));

      script.__file = "src/Utility/realTimeVisualizerCustomSettings.obs";

    })
  };
}));
//# sourceMappingURL=realTimeVisualizerCustomSettings.obs.js.map
