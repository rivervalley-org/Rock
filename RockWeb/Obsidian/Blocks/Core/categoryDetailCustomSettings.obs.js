System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, toDisplayString, createElementBlock, createVNode, NotificationBox, LoadingIndicator, Modal, CategoryPicker, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue, toGuidOrNull;
  return {
    setters: [function (module) {
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
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      setCustomSettingsBoxValue = module.setCustomSettingsBoxValue;
    }, function (module) {
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

      var _hoisted_1 = {
        key: 2
      };
      var script = exports('default', defineComponent({
        name: 'categoryDetailCustomSettings',
        emits: ["close"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(null);
          var reloadBlock = useReloadBlock();
          var errorMessage = ref("");
          var isLoading = ref(true);
          var isModalOpen = ref(true);
          var entityTypeGuid = ref(undefined);
          var excludeCategories = ref();
          var rootCategory = ref();
          var saveButtonText = computed(() => {
            return errorMessage.value || !isLoading.value ? "Save" : "";
          });
          var startLoading = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetCustomSettings");
              if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                var _toGuidOrNull;
                entityTypeGuid.value = (_toGuidOrNull = toGuidOrNull(result.data.settings.entityTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : undefined;
                rootCategory.value = result.data.settings.rootCategory;
                excludeCategories.value = result.data.settings.excludeCategories;
                securityGrant.updateToken(result.data.securityGrantToken);
              } else {
                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
              }
              isLoading.value = false;
            });
            return function startLoading() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onSave = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var box = {};
              setCustomSettingsBoxValue(box, "rootCategory", rootCategory === null || rootCategory === void 0 ? void 0 : rootCategory.value);
              setCustomSettingsBoxValue(box, "excludeCategories", excludeCategories === null || excludeCategories === void 0 ? void 0 : excludeCategories.value);
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
          startLoading();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isModalOpen.value = $event),
              title: "Category Detail Settings",
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
              })) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(CategoryPicker), {
                label: "Root Category",
                modelValue: rootCategory.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => rootCategory.value = $event),
                multiple: false,
                entityTypeGuid: entityTypeGuid.value
              }, null, 8, ["modelValue", "entityTypeGuid"]), createVNode(unref(CategoryPicker), {
                label: "Exclude Categories",
                modelValue: excludeCategories.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => excludeCategories.value = $event),
                multiple: true,
                entityTypeGuid: entityTypeGuid.value
              }, null, 8, ["modelValue", "entityTypeGuid"])]))]),
              _: 1
            }, 8, ["modelValue", "saveText"]);
          };
        }
      }));

      script.__file = "src/Core/categoryDetailCustomSettings.obs";

    })
  };
}));
//# sourceMappingURL=categoryDetailCustomSettings.obs.js.map
