System.register(['@Obsidian/Controls/dropDownList', '@Obsidian/Controls/currencyBox', 'vue', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/rockButton', '@Obsidian/Utility/guid', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/block', '@Obsidian/Controls/toggle', '@Obsidian/PageState', '@Obsidian/Controls/textBox', '@Obsidian/Utility/stringUtils', '@Obsidian/Controls/gatewayControl', '@Obsidian/Core/Controls/financialGateway', '@Obsidian/Controls/rockValidation'], (function (exports) {
  'use strict';
  var DropDownList, CurrencyBox, defineComponent, DatePicker, RockButton, newGuid, RockDateTime, NotificationBox, asFormattedString, useInvokeBlockAction, useConfigurationValues, Toggle, useStore, TextBox, asCommaAnd, GatewayControl, provideSubmitPayment, RockValidation;
  return {
    setters: [function (module) {
      DropDownList = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      defineComponent = module.defineComponent;
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      asFormattedString = module.asFormattedString;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
    }, function (module) {
      Toggle = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      asCommaAnd = module.asCommaAnd;
    }, function (module) {
      GatewayControl = module["default"];
    }, function (module) {
      provideSubmitPayment = module.provideSubmitPayment;
    }, function (module) {
      RockValidation = module["default"];
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
      var transactionEntry = exports('default', defineComponent({
        name: "Finance.TransactionEntry",
        components: {
          CurrencyBox,
          DropDownList,
          DatePicker,
          RockButton,
          NotificationBox,
          Toggle,
          TextBox,
          GatewayControl,
          RockValidation
        },
        setup() {
          var submitPayment = provideSubmitPayment();
          return {
            submitPayment,
            invokeBlockAction: useInvokeBlockAction(),
            configurationValues: useConfigurationValues()
          };
        },
        data() {
          var configurationValues = useConfigurationValues();
          var campuses = configurationValues["campuses"] || [];
          var frequencies = configurationValues["frequencies"] || [];
          return {
            loading: false,
            gatewayErrorMessage: "",
            gatewayValidationFields: {},
            transactionGuid: newGuid(),
            criticalError: "",
            pageIndex: 1,
            page1Error: "",
            args: {
              isGivingAsPerson: true,
              email: "",
              phoneNumber: "",
              phoneCountryCode: "",
              accountAmounts: {},
              street1: "",
              street2: "",
              city: "",
              state: "",
              postalCode: "",
              country: "",
              firstName: "",
              lastName: "",
              businessName: "",
              financialPersonSavedAccountGuid: null,
              comment: "",
              transactionEntityId: null,
              referenceNumber: "",
              campusGuid: campuses.length > 0 ? campuses[0].value : "",
              businessGuid: null,
              frequencyValueGuid: frequencies.length > 0 ? frequencies[0].value : "",
              giftDate: RockDateTime.now().toASPString("yyyy-MM-dd"),
              isGiveAnonymously: false
            }
          };
        },
        computed: {
          totalAmount() {
            var total = 0;
            for (var accountKey in this.args.accountAmounts) {
              total += this.args.accountAmounts[accountKey];
            }
            return total;
          },
          totalAmountFormatted() {
            return "$".concat(asFormattedString(this.totalAmount, 2));
          },
          gatewayControlModel() {
            return this.configurationValues["gatewayControl"];
          },
          currentPerson() {
            return store.state.currentPerson;
          },
          currentPersonFullName() {
            var _currentPerson$nickNa, _currentPerson$lastNa;
            var currentPerson = this.currentPerson;
            if (currentPerson === null) {
              return null;
            }
            return "".concat((_currentPerson$nickNa = currentPerson.nickName) !== null && _currentPerson$nickNa !== void 0 ? _currentPerson$nickNa : "", " ").concat((_currentPerson$lastNa = currentPerson.lastName) !== null && _currentPerson$lastNa !== void 0 ? _currentPerson$lastNa : "");
          },
          accounts() {
            return this.configurationValues["financialAccounts"] || [];
          },
          campuses() {
            return this.configurationValues["campuses"] || [];
          },
          frequencies() {
            return this.configurationValues["frequencies"] || [];
          },
          campusName() {
            var _matchedCampuses$0$te;
            if (this.args.campusGuid === null) {
              return null;
            }
            var matchedCampuses = this.campuses.filter(c => c.value === this.args.campusGuid);
            return matchedCampuses.length >= 1 ? (_matchedCampuses$0$te = matchedCampuses[0].text) !== null && _matchedCampuses$0$te !== void 0 ? _matchedCampuses$0$te : "" : null;
          },
          accountAndCampusString() {
            var _this = this;
            var accountNames = [];
            var _loop = function _loop(accountKey) {
              var account = _this.accounts.find(a => a.idKey === accountKey);
              if (!account || !account.publicName) {
                return "continue";
              }
              accountNames.push(account.publicName);
            };
            for (var accountKey in this.args.accountAmounts) {
              var _ret = _loop(accountKey);
              if (_ret === "continue") continue;
            }
            if (this.campusName) {
              return "".concat(asCommaAnd(accountNames), " - ").concat(this.campusName);
            }
            return asCommaAnd(accountNames);
          }
        },
        methods: {
          goBack() {
            this.pageIndex--;
          },
          onPageOneSubmit() {
            if (this.totalAmount <= 0) {
              this.page1Error = "Please specify an amount";
              return;
            }
            this.page1Error = "";
            this.pageIndex = 2;
          },
          onPageTwoSubmit() {
            this.loading = true;
            this.gatewayErrorMessage = "";
            this.gatewayValidationFields = {};
            this.submitPayment();
          },
          onGatewayControlSuccess(token) {
            this.loading = false;
            this.args.referenceNumber = token;
            this.pageIndex = 3;
          },
          onGatewayControlError(message) {
            this.loading = false;
            this.gatewayErrorMessage = message;
          },
          onGatewayControlValidation(invalidFields) {
            this.loading = false;
            this.gatewayValidationFields = invalidFields;
          },
          onPageThreeSubmit() {
            var _this2 = this;
            return _asyncToGenerator(function* () {
              _this2.loading = true;
              try {
                yield _this2.invokeBlockAction("ProcessTransaction", {
                  args: _this2.args,
                  transactionGuid: _this2.transactionGuid
                });
                _this2.pageIndex = 4;
              } catch (e) {
                console.log(e);
              } finally {
                _this2.loading = false;
              }
            })();
          }
        },
        watch: {
          currentPerson: {
            immediate: true,
            handler() {
              if (!this.currentPerson) {
                return;
              }
              this.args.firstName = this.args.firstName || this.currentPerson.firstName || "";
              this.args.lastName = this.args.lastName || this.currentPerson.lastName || "";
              this.args.email = this.args.email || this.currentPerson.email || "";
            }
          }
        },
        template: "\n<div class=\"transaction-entry-v2\">\n    <NotificationBox v-if=\"criticalError\" danger>{{criticalError}}</NotificationBox>\n    <template v-else-if=\"!gatewayControlModel || !gatewayControlModel.fileUrl\">\n        <h4>Welcome to Rock's On-line Giving Experience</h4>\n        <p>\n            There is currently no gateway configured.\n        </p>\n    </template>\n    <template v-else-if=\"pageIndex === 1\">\n        <h2>Your Generosity Changes Lives (Vue)</h2>\n        <template v-for=\"account in accounts\">\n            <CurrencyBox :label=\"account.publicName\" v-model=\"args.accountAmounts[account.guid]\" />\n        </template>\n        <DropDownList label=\"Campus\" v-model=\"args.campusGuid\" :showBlankItem=\"false\" :items=\"campuses\" />\n        <DropDownList label=\"Frequency\" v-model=\"args.frequencyValueGuid\" :showBlankItem=\"false\" :items=\"frequencies\" />\n        <DatePicker label=\"Process Gift On\" v-model=\"args.giftDate\" />\n        <NotificationBox alertType=\"validation\" v-if=\"page1Error\">{{page1Error}}</NotificationBox>\n        <RockButton btnType=\"primary\" @click=\"onPageOneSubmit\">Give Now</RockButton>\n    </template>\n    <template v-else-if=\"pageIndex === 2\">\n        <div class=\"amount-summary\">\n            <div class=\"amount-summary-text\">\n                {{accountAndCampusString}}\n            </div>\n            <div class=\"amount-display\">\n                {{totalAmountFormatted}}\n            </div>\n        </div>\n        <div>\n            <NotificationBox v-if=\"gatewayErrorMessage\" alertType=\"danger\">{{gatewayErrorMessage}}</NotificationBox>\n            <RockValidation :errors=\"gatewayValidationFields\" />\n            <div class=\"hosted-payment-control\">\n                <GatewayControl\n                    :gatewayControlModel=\"gatewayControlModel\"\n                    @success=\"onGatewayControlSuccess\"\n                    @error=\"onGatewayControlError\"\n                    @validation=\"onGatewayControlValidation\" />\n            </div>\n            <div class=\"navigation actions\">\n                <RockButton btnType=\"default\" @click=\"goBack\" :isLoading=\"loading\">Back</RockButton>\n                <RockButton btnType=\"primary\" class=\"pull-right\" @click=\"onPageTwoSubmit\" :isLoading=\"loading\">Next</RockButton>\n            </div>\n        </div>\n    </template>\n    <template v-else-if=\"pageIndex === 3\">\n        <Toggle v-model=\"args.isGivingAsPerson\">\n            <template #on>Individual</template>\n            <template #off>Business</template>\n        </Toggle>\n        <template v-if=\"args.isGivingAsPerson && currentPerson\">\n            <div class=\"form-control-static\">\n                {{currentPersonFullName}}\n            </div>\n        </template>\n        <template v-else-if=\"args.isGivingAsPerson\">\n            <TextBox v-model=\"args.firstName\" placeholder=\"First Name\" class=\"margin-b-sm\" />\n            <TextBox v-model=\"args.lastName\" placeholder=\"Last Name\" class=\"margin-b-sm\" />\n        </template>\n        <div class=\"navigation actions margin-t-md\">\n            <RockButton :isLoading=\"loading\" @click=\"goBack\">Back</RockButton>\n            <RockButton :isLoading=\"loading\" btnType=\"primary\" class=\"pull-right\" @click=\"onPageThreeSubmit\">Finish</RockButton>\n        </div>\n    </template>\n    <template v-else-if=\"pageIndex === 4\">\n        Last Page\n    </template>\n</div>"
      }));

    })
  };
}));
//# sourceMappingURL=transactionEntry.js.map
