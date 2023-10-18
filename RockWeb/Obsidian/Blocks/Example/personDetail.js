System.register(['@Obsidian/Utility/bus', '@Obsidian/Templates/block', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/textBox', 'vue', '@Obsidian/PageState', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/rockValidation', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/loading', '@Obsidian/Controls/primaryBlock', '@Obsidian/Utility/block', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Utility/address', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime'], (function (exports) {
  'use strict';
  var bus, Block, RockButton, TextBox, defineComponent, useStore, EmailBox, RockValidation, RockForm, Loading, PrimaryBlock, useInvokeBlockAction, DatePicker, AddressControl, getDefaultAddressControlModel, toNumber, RockDateTime, DateTimeFormat;
  return {
    setters: [function (module) {
      bus = module["default"];
    }, function (module) {
      Block = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      defineComponent = module.defineComponent;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      PrimaryBlock = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      getDefaultAddressControlModel = module.getDefaultAddressControlModel;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      RockDateTime = module.RockDateTime;
      DateTimeFormat = module.DateTimeFormat;
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

      var store = useStore();
      var personDetail = exports('default', defineComponent({
        name: "Example.PersonDetail",
        components: {
          Block,
          RockButton,
          TextBox,
          EmailBox,
          RockValidation,
          RockForm,
          Loading,
          PrimaryBlock,
          DatePicker,
          AddressControl
        },
        setup() {
          return {
            invokeBlockAction: useInvokeBlockAction()
          };
        },
        data() {
          return {
            person: null,
            personForEditing: null,
            isEditMode: false,
            messageToPublish: "",
            receivedMessage: "",
            isLoading: false,
            birthdate: null,
            address: getDefaultAddressControlModel()
          };
        },
        methods: {
          setIsEditMode(isEditMode) {
            this.isEditMode = isEditMode;
          },
          doEdit() {
            var _this$birthdateOrNull, _this$birthdateOrNull2;
            this.personForEditing = this.person ? _objectSpread2({}, this.person) : null;
            this.birthdate = (_this$birthdateOrNull = (_this$birthdateOrNull2 = this.birthdateOrNull) === null || _this$birthdateOrNull2 === void 0 ? void 0 : _this$birthdateOrNull2.toASPString("yyyy-MM-dd")) !== null && _this$birthdateOrNull !== void 0 ? _this$birthdateOrNull : null;
            this.setIsEditMode(true);
          },
          doCancel() {
            this.setIsEditMode(false);
          },
          doSave() {
            var _this = this;
            return _asyncToGenerator(function* () {
              if (_this.personForEditing) {
                var _this$birthdate;
                var match = /^(\d+)-(\d+)-(\d+)/.exec((_this$birthdate = _this.birthdate) !== null && _this$birthdate !== void 0 ? _this$birthdate : "");
                var birthDay = null;
                var birthMonth = null;
                var birthYear = null;
                if (match !== null) {
                  birthYear = toNumber(match[1]);
                  birthMonth = toNumber(match[2]);
                  birthDay = toNumber(match[3]);
                }
                _this.person = _objectSpread2(_objectSpread2({}, _this.personForEditing), {}, {
                  birthDay: birthDay,
                  birthMonth: birthMonth,
                  birthYear: birthYear
                });
                _this.isLoading = true;
                yield _this.invokeBlockAction("EditPerson", {
                  personArgs: _this.person
                });
                _this.isLoading = false;
              }
              _this.setIsEditMode(false);
            })();
          },
          doPublish() {
            bus.publish("PersonDetail:Message", this.messageToPublish);
            this.messageToPublish = "";
          },
          receiveMessage(message) {
            this.receivedMessage = message;
          }
        },
        computed: {
          birthdateOrNull() {
            var _this$person;
            if (!((_this$person = this.person) !== null && _this$person !== void 0 && _this$person.birthDay) || !this.person.birthMonth || !this.person.birthYear) {
              return null;
            }
            return RockDateTime.fromParts(this.person.birthYear, this.person.birthMonth, this.person.birthDay);
          },
          birthdateFormatted() {
            if (!this.birthdateOrNull) {
              return "Not Completed";
            }
            return this.birthdateOrNull.toLocaleString(DateTimeFormat.DateTimeShort);
          },
          blockTitle() {
            return this.person ? "Edit Yourself: ".concat(this.person.nickName || this.person.firstName, " ").concat(this.person.lastName) : "Edit Yourself";
          },
          currentPerson() {
            return store.state.currentPerson;
          },
          currentPersonKey() {
            var _this$currentPerson$i, _this$currentPerson;
            return (_this$currentPerson$i = (_this$currentPerson = this.currentPerson) === null || _this$currentPerson === void 0 ? void 0 : _this$currentPerson.idKey) !== null && _this$currentPerson$i !== void 0 ? _this$currentPerson$i : null;
          }
        },
        watch: {
          currentPersonKey: {
            immediate: true,
            handler() {
              var _this2 = this;
              return _asyncToGenerator(function* () {
                if (!_this2.currentPersonKey) {
                  _this2.person = null;
                  return;
                }
                if (_this2.person && _this2.person.idKey === _this2.currentPersonKey) {
                  return;
                }
                _this2.isLoading = true;
                _this2.person = (yield _this2.invokeBlockAction("GetPersonViewModel")).data;
                _this2.isLoading = false;
              })();
            }
          }
        },
        created() {
          bus.subscribe("PersonSecondary:Message", this.receiveMessage);
        },
        template: "\n<PrimaryBlock :hideSecondaryBlocks=\"isEditMode\">\n    <Block :title=\"blockTitle\">\n        <template #default>\n            <Loading :isLoading=\"isLoading\">\n                <p v-if=\"!person\">\n                    There is no person loaded.\n                </p>\n                <RockForm v-else-if=\"isEditMode\" @submit=\"doSave\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <TextBox label=\"First Name\" v-model=\"personForEditing.firstName\" rules=\"required\" />\n                            <TextBox label=\"Nick Name\" v-model=\"personForEditing.nickName\" />\n                            <TextBox label=\"Last Name\" v-model=\"personForEditing.lastName\" rules=\"required\" />\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <EmailBox label=\"Email\" v-model=\"personForEditing.email\" />\n                            <DatePicker label=\"Birthdate\" v-model=\"birthdate\" rules=\"required\" />\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <AddressControl v-model=\"address\" />\n                        </div>\n                    </div>\n                    <div class=\"actions\">\n                        <RockButton btnType=\"primary\" type=\"submit\">Save</RockButton>\n                        <RockButton btnType=\"link\" @click=\"doCancel\">Cancel</RockButton>\n                    </div>\n                </RockForm>\n                <template v-else>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <dl>\n                                <dt>First Name</dt>\n                                <dd>{{person.firstName}}</dd>\n                                <dt>Last Name</dt>\n                                <dd>{{person.lastName}}</dd>\n                                <dt>Email</dt>\n                                <dd>{{person.email}}</dd>\n                                <dt>Birthdate</dt>\n                                <dd>{{birthdateFormatted}}</dd>\n                            </dl>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"well\">\n                                <TextBox label=\"Message\" v-model=\"messageToPublish\" />\n                                <RockButton btnType=\"primary\" btnSize=\"sm\" @click=\"doPublish\">Publish</RockButton>\n                            </div>\n                            <p>\n                                <strong>Secondary block says:</strong>\n                                {{receivedMessage}}\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"actions\">\n                        <RockButton btnType=\"primary\" @click=\"doEdit\">Edit</RockButton>\n                    </div>\n                </template>\n            </Loading>\n        </template>\n    </Block>\n</PrimaryBlock>"
      }));

    })
  };
}));
//# sourceMappingURL=personDetail.js.map
