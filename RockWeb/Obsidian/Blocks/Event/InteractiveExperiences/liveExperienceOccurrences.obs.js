System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, NotificationBox, useConfigurationValues, useInvokeBlockAction, onConfigurationValuesChanged, useReloadBlock, PromiseCompletionSource;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      PromiseCompletionSource = module.PromiseCompletionSource;
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

      var script = exports('default', defineComponent({
        name: 'liveExperienceOccurrences',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var contentElement = ref(null);
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          function getDeviceLocation(_x) {
            return _getDeviceLocation.apply(this, arguments);
          }
          function _getDeviceLocation() {
            _getDeviceLocation = _asyncToGenerator(function* (alwaysRequest) {
              if (!alwaysRequest) {
                if (navigator.permissions) {
                  var status = yield navigator.permissions.query({
                    name: "geolocation"
                  });
                  if (status.state !== "granted") {
                    return null;
                  }
                }
              }
              var completionSource = new PromiseCompletionSource();
              navigator.geolocation.getCurrentPosition(position => {
                completionSource.resolve(position.coords);
              }, () => {
                completionSource.reject(new Error("Unable to get device location."));
              });
              try {
                return yield completionSource.promise;
              } catch (error) {
                console.error(error);
                return null;
              }
            });
            return _getDeviceLocation.apply(this, arguments);
          }
          function updateContent(_x2) {
            return _updateContent.apply(this, arguments);
          }
          function _updateContent() {
            _updateContent = _asyncToGenerator(function* (alwaysRequestLocation) {
              var _location$latitude, _location$longitude, _result$data;
              var location = yield getDeviceLocation(alwaysRequestLocation);
              var result = yield invokeBlockAction("GetContent", {
                latitude: (_location$latitude = location === null || location === void 0 ? void 0 : location.latitude) !== null && _location$latitude !== void 0 ? _location$latitude : null,
                longitude: (_location$longitude = location === null || location === void 0 ? void 0 : location.longitude) !== null && _location$longitude !== void 0 ? _location$longitude : null
              });
              if (contentElement.value && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.content) {
                contentElement.value.innerHTML = result.data.content;
              }
            });
            return _updateContent.apply(this, arguments);
          }
          onConfigurationValuesChanged(useReloadBlock());
          if (config.provideLocationKey) {
            window[config.provideLocationKey] = () => updateContent(true);
          }
          updateContent(config.alwaysRequestLocation);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createElementVNode("div", {
              ref_key: "contentElement",
              ref: contentElement
            }, null, 512)], 64);
          };
        }
      }));

      script.__file = "src/Event/InteractiveExperiences/liveExperienceOccurrences.obs";

    })
  };
}));
//# sourceMappingURL=liveExperienceOccurrences.obs.js.map
