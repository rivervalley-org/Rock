System.register(['vue', './notificationBox.obs', './loadingIndicator.obs'], (function (exports, module) {
  'use strict';
  var defineComponent, ref, openBlock, createBlock, unref, withCtx, createTextVNode, toDisplayString, resolveDynamicComponent, markRaw, NotificationBox, LoadingIndicator;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      resolveDynamicComponent = module.resolveDynamicComponent;
      markRaw = module.markRaw;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
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
        name: 'componentFromUrl',
        props: {
          url: {
            type: String,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var control = ref(null);
          var loading = ref(true);
          var error = ref("");
          function loadComponent() {
            return _loadComponent.apply(this, arguments);
          }
          function _loadComponent() {
            _loadComponent = _asyncToGenerator(function* () {
              if (!props.url) {
                error.value = "Could not load the control because no URL was provided";
                loading.value = false;
                return;
              }
              try {
                var controlComponentModule = yield module.import(props.url);
                var controlModule = controlComponentModule ? controlComponentModule.default || controlComponentModule : null;
                if (controlModule) {
                  control.value = markRaw(controlModule);
                }
              } catch (e) {
                console.error(e);
                error.value = "Could not load the control for '".concat(props.url, "'");
              } finally {
                loading.value = false;
                if (!control) {
                  error.value = "Could not load the control for '".concat(props.url, "'");
                }
              }
            });
            return _loadComponent.apply(this, arguments);
          }
          loadComponent();
          return (_ctx, _cache) => {
            return error.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
              _: 1
            })) : loading.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
              key: 1
            })) : (openBlock(), createBlock(resolveDynamicComponent(control.value), {
              key: 2
            }));
          };
        }
      }));

      script.__file = "Framework/Controls/componentFromUrl.obs";

    })
  };
}));
//# sourceMappingURL=componentFromUrl.obs.js.map
