System.register(['vue', './rockFormField', './panel', './textBox', '@Obsidian/Utility/http', '@Obsidian/Utility/promiseUtils'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, nextTick, RockFormField, Panel, TextBox, useHttp, sleep;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      nextTick = module.nextTick;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
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

      var AgeClassification = function (AgeClassification) {
        AgeClassification[AgeClassification["Unknown"] = 0] = "Unknown";
        AgeClassification[AgeClassification["Adult"] = 1] = "Adult";
        AgeClassification[AgeClassification["Child"] = 2] = "Child";
        return AgeClassification;
      }(AgeClassification || {});
      var personPicker = exports('default', defineComponent({
        name: "PersonPicker",
        components: {
          RockFormField,
          Panel,
          TextBox
        },
        props: {
          modelValue: {
            type: Object
          },
          formGroupClasses: {
            type: String,
            default: ""
          }
        },
        setup(props, _ref) {
          var emit = _ref.emit;
          var http = useHttp();
          var internalValue = ref(props.modelValue);
          var showClear = computed(() => {
            var _props$modelValue;
            return (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value;
          });
          var showPopup = ref(false);
          var searchText = ref("");
          var searchTextBox = ref(null);
          var searchResults = ref([]);
          var selectedSearchResult = ref("");
          var searchCancelToken = null;
          var selectedName = computed(() => {
            var _internalValue$value$, _internalValue$value;
            return (_internalValue$value$ = (_internalValue$value = internalValue.value) === null || _internalValue$value === void 0 ? void 0 : _internalValue$value.text) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "";
          });
          var updateSearchResults = function () {
            var _ref2 = _asyncToGenerator(function* (text, cancellationToken) {
              if (text.length < 3) {
                return;
              }
              yield sleep(200);
              if (cancellationToken.value) {
                return;
              }
              var options = {
                name: text,
                includeDetails: true
              };
              var result = yield http.doApiCall("POST", "/api/v2/Controls/PersonPickerSearch", undefined, options);
              if (cancellationToken.value) {
                return;
              }
              if (result.isSuccess && result.data) {
                searchResults.value = result.data;
                selectedSearchResult.value = "";
              } else {
                console.warn(result.errorMessage);
              }
            });
            return function updateSearchResults(_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }();
          var getNameAdditionalText = result => {
            if (result.spouseNickName && result.formattedAge) {
              return "Age: ".concat(result.formattedAge, "; Spouse: ").concat(result.spouseNickName);
            } else if (result.formattedAge) {
              return "Age: ".concat(result.formattedAge);
            } else if (result.spouseNickName) {
              return "Spouse: ".concat(result.spouseNickName);
            } else {
              return "";
            }
          };
          var getPersonImageStyle = result => {
            if (result.imageUrl) {
              return {
                backgroundImage: "url(".concat(result.imageUrl, ")"),
                width: "70px",
                height: "70px",
                backgroundSize: "cover",
                marginRight: "8px",
                border: "1px solid #dfe0e1"
              };
            } else {
              return {};
            }
          };
          var getCardStyle = result => {
            var styles = {
              margin: "0px 20px 20px 0px"
            };
            if (result.primaryAliasGuid === selectedSearchResult.value) {
              styles["border"] = "2px solid var(--brand-color)";
            } else {
              styles["border"] = "2px solid transparent";
            }
            return styles;
          };
          var onClear = () => {
            emit("update:modelValue", undefined);
          };
          var onPickerClick = () => {
            showPopup.value = !showPopup.value;
            if (showPopup.value) {
              searchText.value = "";
              selectedSearchResult.value = "";
              searchResults.value = [];
              nextTick(() => {
                if (searchTextBox.value) {
                  var input = searchTextBox.value.querySelector("input");
                  input === null || input === void 0 ? void 0 : input.focus();
                }
              });
            }
          };
          var onCancel = () => {
            showPopup.value = false;
          };
          var onPopupKeyDown = ev => {
            if (ev.keyCode === 27 && showPopup.value) {
              ev.stopImmediatePropagation();
              onCancel();
            }
          };
          var onCardClick = result => {
            if (!result.primaryAliasGuid || !result.name) {
              return;
            }
            internalValue.value = {
              value: selectedSearchResult.value,
              text: result.name
            };
            emit("update:modelValue", internalValue.value);
            showPopup.value = false;
          };
          var onCardFocus = result => {
            if (!result.primaryAliasGuid || !result.name) {
              return;
            }
            selectedSearchResult.value = result.primaryAliasGuid;
          };
          var onCardBlur = result => {
            if (!result.primaryAliasGuid || !result.name) {
              return;
            }
            if (selectedSearchResult.value === result.primaryAliasGuid) {
              selectedSearchResult.value = "";
            }
          };
          var onCardKeyPress = (result, ev) => {
            if (!result.primaryAliasGuid || !result.name) {
              return;
            }
            var isEnterKey = ev.keyCode === 10 || ev.keyCode === 13;
            if (selectedSearchResult.value === result.primaryAliasGuid && isEnterKey) {
              internalValue.value = {
                value: selectedSearchResult.value,
                text: result.name
              };
              emit("update:modelValue", internalValue.value);
              showPopup.value = false;
            }
          };
          watch(searchText, () => {
            if (searchCancelToken) {
              searchCancelToken.value = true;
            }
            searchCancelToken = ref(false);
            updateSearchResults(searchText.value, searchCancelToken);
          });
          watch(() => props.modelValue, () => internalValue.value = props.modelValue);
          return {
            getCardStyle,
            getNameAdditionalText,
            getPersonImageStyle,
            internalValue,
            onCardBlur,
            onCardClick,
            onCardFocus,
            onCardKeyPress,
            onClear,
            onPickerClick,
            onCancel,
            onPopupKeyDown,
            searchResults,
            searchText,
            searchTextBox,
            selectedName,
            selectedSearchResult,
            showClear,
            showPopup
          };
        },
        template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    :formGroupClasses=\"'person-picker ' + formGroupClasses\"\n    name=\"personpicker\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <div class=\"picker picker-select person-picker\">\n                <a class=\"picker-label\" href=\"#\" @click.prevent.stop=\"onPickerClick\">\n                    <i class=\"fa fa-user fa-fw\"></i>\n                    <span class=\"selected-name\">{{ selectedName }}</span>\n                    <b class=\"fa fa-caret-down pull-right\"></b>\n                </a>\n\n                <a v-if=\"showClear\" class=\"picker-select-none\" @click.prevent.stop=\"onClear\">\n                    <i class=\"fa fa-times\"></i>\n                </a>\n\n                <Panel v-if=\"showPopup\" isFullscreen isFullscreenPageOnly title=\"Person Search\">\n                    <template #headerActions>\n                        <span class=\"action\" @click.prevent.stop=\"onCancel\">\n                            <i class=\"fa fa-times\"></i>\n                        </span>\n                    </template>\n\n                    <div @keydown=\"onPopupKeyDown\" tabindex=\"0\">\n                        <div ref=\"searchTextBox\">\n                            <TextBox v-model=\"searchText\" label=\"Search\" />\n                        </div>\n\n                        <div style=\"display: flex;\">\n                            <div v-for=\"result in searchResults\" :key=\"result.primaryAliasGuid\" class=\"well cursor-pointer\" :style=\"getCardStyle(result)\" tabindex=\"0\" @click=\"onCardClick(result)\" @focus=\"onCardFocus(result)\" @blur=\"onCardBlur(result)\" @keypress=\"onCardKeyPress(result, $event)\">\n                                <div style=\"display: flex; min-width: 250px;\">\n                                    <div class=\"person-image\" :style=\"getPersonImageStyle(result)\"></div>\n                                    <div>\n                                        <div>{{ result.name }}</div>\n                                        <div v-if=\"getNameAdditionalText(result)\" class=\"text-muted\"><small>{{ getNameAdditionalText(result) }}</small></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </Panel>\n            </div>\n        </div>\n    </template>\n</RockFormField>\n"
      }));

    })
  };
}));
//# sourceMappingURL=personPicker.js.map
