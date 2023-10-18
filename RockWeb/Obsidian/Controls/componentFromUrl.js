System.register(['vue', './notificationBox.obs', './loadingIndicator'], (function (exports, module) {
  'use strict';
  var defineComponent, markRaw, NotificationBox, LoadingIndicator;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
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

      var componentFromUrl = exports('default', defineComponent({
        name: "ComponentFromUrl",
        components: {
          LoadingIndicator,
          NotificationBox
        },
        props: {
          url: {
            type: String,
            required: true
          }
        },
        data() {
          return {
            control: null,
            loading: true,
            error: ""
          };
        },
        created() {
          var _this = this;
          return _asyncToGenerator(function* () {
            if (!_this.url) {
              _this.error = "Could not load the control because no URL was provided";
              _this.loading = false;
              return;
            }
            try {
              var controlComponentModule = yield module.import(_this.url);
              var control = controlComponentModule ? controlComponentModule.default || controlComponentModule : null;
              if (control) {
                _this.control = markRaw(control);
              }
            } catch (e) {
              console.error(e);
              _this.error = "Could not load the control for '".concat(_this.url, "'");
            } finally {
              _this.loading = false;
              if (!_this.control) {
                _this.error = "Could not load the control for '".concat(_this.url, "'");
              }
            }
          })();
        },
        template: "\n<NotificationBox v-if=\"error\" alertType=\"danger\">{{error}}</NotificationBox>\n<LoadingIndicator v-else-if=\"loading\" />\n<component v-else :is=\"control\" />"
      }));

    })
  };
}));
//# sourceMappingURL=componentFromUrl.js.map
