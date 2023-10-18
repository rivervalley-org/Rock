System.register(['vue', './notificationBox.obs', './inlineCheckBox', './rockButton', './textBox', './rockForm', '@Obsidian/PageState', '@Obsidian/Utility/http'], (function (exports) {
  'use strict';
  var defineComponent, NotificationBox, InlineCheckBox, RockButton, TextBox, RockForm, useStore, useHttp;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      useHttp = module.useHttp;
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

      var store = useStore();
      var SaveFinancialAccountForm = exports('default', defineComponent({
        name: "SaveFinancialAccountForm",
        components: {
          InlineCheckBox,
          TextBox,
          NotificationBox,
          RockButton,
          RockForm
        },
        props: {
          gatewayGuid: {
            type: String,
            required: true
          },
          transactionCode: {
            type: String,
            required: true
          },
          gatewayPersonIdentifier: {
            type: String,
            required: true
          }
        },
        setup() {
          var http = useHttp();
          return {
            http
          };
        },
        data() {
          return {
            doSave: false,
            username: "",
            password: "",
            confirmPassword: "",
            savedAccountName: "",
            isLoading: false,
            successTitle: "",
            successMessage: "",
            errorTitle: "",
            errorMessage: ""
          };
        },
        computed: {
          currentPerson() {
            return store.state.currentPerson;
          },
          isLoginCreationNeeded() {
            return !this.currentPerson;
          }
        },
        methods: {
          onSubmit() {
            var _this = this;
            return _asyncToGenerator(function* () {
              var _result$data;
              _this.errorTitle = "";
              _this.errorMessage = "";
              if (_this.password !== _this.confirmPassword) {
                _this.errorTitle = "Password";
                _this.errorMessage = "The password fields do not match.";
                return;
              }
              _this.isLoading = true;
              var options = {
                gatewayGuid: _this.gatewayGuid,
                password: _this.password,
                savedAccountName: _this.savedAccountName,
                transactionCode: _this.transactionCode,
                username: _this.username,
                gatewayPersonIdentifier: _this.gatewayPersonIdentifier
              };
              var result = yield _this.http.post("/api/v2/Controls/SaveFinancialAccountFormSaveAccount", null, options);
              if (result.isSuccess && (_result$data = result.data) !== null && _result$data !== void 0 && _result$data.isSuccess) {
                _this.successTitle = result.data.title || "";
                _this.successMessage = result.data.detail || "Success";
              } else {
                var _result$data2, _result$data3;
                _this.errorTitle = ((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.title) || "";
                _this.errorMessage = ((_result$data3 = result.data) === null || _result$data3 === void 0 ? void 0 : _result$data3.detail) || "Error";
              }
              _this.isLoading = false;
            })();
          }
        },
        template: "\n<div>\n    <NotificationBox v-if=\"successMessage\" alertType=\"success\" class=\"m-0\">\n        <strong v-if=\"successTitle\">{{successTitle}}:</strong>\n        {{successMessage}}\n    </NotificationBox>\n    <template v-else>\n        <slot name=\"header\">\n            <h3>Make Giving Even Easier</h3>\n        </slot>\n        <NotificationBox v-if=\"errorMessage\" alertType=\"danger\">\n            <strong v-if=\"errorTitle\">{{errorTitle}}:</strong>\n            {{errorMessage}}\n        </NotificationBox>\n        <InlineCheckBox label=\"Save account information for future gifts\" v-model=\"doSave\" />\n        <RockForm v-if=\"doSave\" @submit=\"onSubmit\">\n            <TextBox label=\"Name for the account\" rules=\"required\" v-model=\"savedAccountName\" />\n            <template v-if=\"isLoginCreationNeeded\">\n                <NotificationBox alertType=\"info\">\n                    <strong>Note:</strong>\n                    For security purposes you will need to login to use your saved account information. To create\n                    a login account please provide a user name and password below. You will be sent an email with\n                    the account information above as a reminder.\n                </NotificationBox>\n                <TextBox label=\"Username\" v-model=\"username\" rules=\"required\" />\n                <TextBox label=\"Password\" v-model=\"password\" type=\"password\" rules=\"required\" />\n                <TextBox label=\"Confirm Password\" v-model=\"confirmPassword\" type=\"password\" rules=\"required\" />\n            </template>\n            <RockButton :isLoading=\"isLoading\" btnType=\"primary\" type=\"submit\">Save Account</RockButton>\n        </RockForm>\n    </template>\n</div>"
      }));

    })
  };
}));
//# sourceMappingURL=saveFinancialAccountForm.js.map
