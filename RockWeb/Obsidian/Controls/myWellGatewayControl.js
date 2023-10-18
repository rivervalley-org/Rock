System.register(['vue', './loadingIndicator', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, LoadingIndicator, sleep;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      sleep = module.sleep;
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

      var myWellGatewayControl = exports('default', defineComponent({
        name: "MyWellGatewayControl",
        components: {
          LoadingIndicator
        },
        props: {
          settings: {
            type: Object,
            required: true
          },
          submit: {
            type: Boolean,
            required: true
          }
        },
        data() {
          return {
            tokenizer: null,
            loading: true
          };
        },
        methods: {
          mountControl() {
            var _this = this;
            return _asyncToGenerator(function* () {
              var globalVarName = "Tokenizer";
              if (!window[globalVarName]) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://sandbox.gotnpgateway.com/tokenizer/tokenizer.js";
                document.getElementsByTagName("head")[0].appendChild(script);
                while (!window[globalVarName]) {
                  yield sleep(20);
                }
              }
              var settings = _this.getTokenizerSettings();
              _this.tokenizer = new window[globalVarName](settings);
              _this.tokenizer.create();
            })();
          },
          handleResponse(response) {
            this.loading = false;
            if (!(response !== null && response !== void 0 && response.status) || response.status === "error") {
              var errorResponse = response || null;
              this.$emit("error", (errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.message) || "There was an unexpected problem communicating with the gateway.");
              console.error("MyWell response was errored:", JSON.stringify(response));
              return;
            }
            if (response.status === "validation") {
              var _validationResponse$i;
              var validationResponse = response || null;
              if (!(validationResponse !== null && validationResponse !== void 0 && (_validationResponse$i = validationResponse.invalid) !== null && _validationResponse$i !== void 0 && _validationResponse$i.length)) {
                this.$emit("error", "There was a validation issue, but the invalid field was not specified.");
                console.error("MyWell response was errored:", JSON.stringify(response));
                return;
              }
              return;
            }
            if (response.status === "success") {
              var successResponse = response || null;
              if (!(successResponse !== null && successResponse !== void 0 && successResponse.token)) {
                this.$emit("error", "There was an unexpected problem communicating with the gateway.");
                console.error("MyWell response does not have the expected token:", JSON.stringify(response));
                return;
              }
              this.$emit("successRaw", successResponse.token);
              return;
            }
            this.$emit("error", "There was an unexpected problem communicating with the gateway.");
            console.error("MyWell response has invalid status:", JSON.stringify(response));
          },
          getTokenizerSettings() {
            return {
              onLoad: () => {
                this.loading = false;
              },
              apikey: this.publicApiKey,
              url: this.gatewayUrl,
              container: this.$refs["container"],
              submission: resp => {
                this.handleResponse(resp);
              },
              settings: {
                payment: {
                  types: ["card"],
                  ach: {
                    "sec_code": "web"
                  }
                },
                styles: {
                  body: {
                    color: "rgb(51, 51, 51)"
                  },
                  "#app": {
                    padding: "5px 15px"
                  },
                  "input,select": {
                    "color": "rgb(85, 85, 85)",
                    "border-radius": "4px",
                    "background-color": "rgb(255, 255, 255)",
                    "border": "1px solid rgb(204, 204, 204)",
                    "box-shadow": "rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset",
                    "padding": "6px 12px",
                    "font-size": "14px",
                    "height": "34px",
                    "font-family": "OpenSans, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  },
                  "input:focus,select:focus": {
                    "border": "1px solid #66afe9",
                    "box-shadow": "0 0 0 3px rgba(102,175,233,0.6)"
                  },
                  "select": {
                    "padding": "6px 4px"
                  },
                  ".fieldsetrow": {
                    "margin-left": "-2.5px",
                    "margin-right": "-2.5px"
                  },
                  ".card > .fieldset": {
                    "padding": "0 !important",
                    "margin": "0 2.5px 5px !important"
                  },
                  "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    "margin": "0"
                  }
                }
              }
            };
          }
        },
        computed: {
          publicApiKey() {
            return this.settings.publicApiKey;
          },
          gatewayUrl() {
            return this.settings.gatewayUrl;
          }
        },
        watch: {
          submit() {
            if (this.submit && this.tokenizer) {
              this.loading = true;
              this.tokenizer.submit();
            }
          }
        },
        mounted() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            yield _this2.mountControl();
          })();
        },
        template: "\n<div>\n    <div ref=\"container\" style=\"min-height: 49px;\"></div>\n    <div v-if=\"loading\" class=\"text-center\">\n        <LoadingIndicator />\n    </div>\n</div>"
      }));

    })
  };
}));
//# sourceMappingURL=myWellGatewayControl.js.map
