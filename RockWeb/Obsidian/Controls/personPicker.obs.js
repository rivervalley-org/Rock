System.register(['vue', './rockFormField.obs', './panel.obs', './textBox.obs', './rockButton.obs', './Internal/tag.obs', '@Obsidian/PageState', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', '@Obsidian/Utility/promiseUtils', '@Obsidian/Enums/Controls/btnSize'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, withModifiers, toDisplayString, createElementBlock, createCommentVNode, withKeys, createVNode, normalizeClass, Fragment, renderList, normalizeStyle, nextTick, RockFormField, Panel, TextBox, RockButton, Tag, useStore, emptyGuid, useHttp, sleep, BtnSize;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      withModifiers = module.withModifiers;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      createCommentVNode = module.createCommentVNode;
      withKeys = module.withKeys;
      createVNode = module.createVNode;
      normalizeClass = module.normalizeClass;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeStyle = module.normalizeStyle;
      nextTick = module.nextTick;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      Tag = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      sleep = module.sleep;
    }, function (module) {
      BtnSize = module.BtnSize;
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
        class: "control-wrapper"
      };
      var _hoisted_2 = {
        class: "picker picker-select person-picker"
      };
      var _hoisted_3 = ["onClick"];
      var _hoisted_4 = createElementVNode("i", {
        class: "fa fa-user fa-fw"
      }, null, -1);
      var _hoisted_5 = {
        class: "selected-name"
      };
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var _hoisted_9 = createElementVNode("b", {
        class: "fa fa-caret-down"
      }, null, -1);
      var _hoisted_10 = createElementVNode("i", {
        class: "fa fa-user",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-search-plus",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_12 = ["onClick"];
      var _hoisted_13 = createElementVNode("i", {
        class: "fa fa-times",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_14 = [_hoisted_13];
      var _hoisted_15 = {
        tabindex: "0"
      };
      var _hoisted_16 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Name", -1);
      var _hoisted_17 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Phone", -1);
      var _hoisted_18 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Address", -1);
      var _hoisted_19 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Email", -1);
      var _hoisted_20 = ["onClick", "onKeypress"];
      var _hoisted_21 = ["alt"];
      var _hoisted_22 = {
        style: {
          "width": "200px"
        },
        class: "flex-shrink-0"
      };
      var _hoisted_23 = {
        class: "leading-snug"
      };
      var _hoisted_24 = {
        class: "text-md font-weight-semibold"
      };
      var _hoisted_25 = createTextVNode();
      var _hoisted_26 = {
        key: 0,
        class: "fa fa-child text-primary",
        "aria-label": "Child",
        title: "Child"
      };
      var _hoisted_27 = createTextVNode();
      var _hoisted_28 = {
        key: 1,
        class: "text-muted"
      };
      var _hoisted_29 = {
        key: 0,
        class: "text-muted"
      };
      var _hoisted_30 = ["innerHTML"];
      var _hoisted_31 = ["href"];
      var _hoisted_32 = {
        style: {
          "width": "275px"
        },
        class: "flex-shrink-0"
      };
      var _hoisted_33 = {
        style: {
          "width": "150px"
        },
        class: "list-unstyled flex-shrink-0"
      };
      var _hoisted_34 = {
        key: 0,
        class: "text-muted"
      };
      var _hoisted_35 = {
        class: "ml-auto flex-shrink-0"
      };
      var _hoisted_36 = {
        class: "taglist"
      };
      var AgeClassification = function (AgeClassification) {
        AgeClassification[AgeClassification["Unknown"] = 0] = "Unknown";
        AgeClassification[AgeClassification["Adult"] = 1] = "Adult";
        AgeClassification[AgeClassification["Child"] = 2] = "Child";
        return AgeClassification;
      }(AgeClassification || {});
      var script = exports('default', defineComponent({
        name: 'personPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          formGroupClasses: {
            type: String,
            default: ""
          },
          includeBusinesses: {
            type: Boolean,
            default: false
          },
          enableSelfSelection: {
            type: Boolean,
            default: false
          },
          excludeDeceased: {
            type: Boolean,
            default: false
          },
          expandSearchOptions: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var http = useHttp();
          var internalValue = ref(props.modelValue);
          var showClear = computed(() => {
            var _props$modelValue;
            return (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value;
          });
          var showPopup = ref(false);
          var nameSearchTextBox = ref(null);
          var nameSearchText = ref("");
          var addressSearchText = ref("");
          var phoneSearchText = ref("");
          var emailSearchText = ref("");
          var searchResults = ref([]);
          var searchCancelToken = null;
          var selectedName = computed(() => {
            var _internalValue$value$, _internalValue$value;
            return (_internalValue$value$ = (_internalValue$value = internalValue.value) === null || _internalValue$value === void 0 ? void 0 : _internalValue$value.text) !== null && _internalValue$value$ !== void 0 ? _internalValue$value$ : "";
          });
          var isAdvancedSearch = ref(false);
          var currentPerson = useStore().state.currentPerson;
          var isSelfSelectionEnabled = computed(() => {
            var _currentPerson$idKey;
            return props.enableSelfSelection && ((_currentPerson$idKey = currentPerson === null || currentPerson === void 0 ? void 0 : currentPerson.idKey) !== null && _currentPerson$idKey !== void 0 ? _currentPerson$idKey : false);
          });
          function updateSearchResults(_x, _x2, _x3, _x4, _x5) {
            return _updateSearchResults.apply(this, arguments);
          }
          function _updateSearchResults() {
            _updateSearchResults = _asyncToGenerator(function* (name, address, phone, email, cancellationToken) {
              if (name.length < 3 && address.length < 3 && phone.length < 3 && email.length < 3) {
                if (searchResults.value) {
                  yield sleep(200);
                  if (cancellationToken.value) {
                    return;
                  }
                  searchResults.value = [];
                }
                return;
              }
              yield sleep(200);
              if (cancellationToken.value) {
                return;
              }
              var options = {
                name: name,
                address: address || undefined,
                email: email || undefined,
                phone: phone || undefined,
                includeDetails: true,
                includeBusinesses: props.includeBusinesses,
                includeDeceased: !props.excludeDeceased
              };
              var result = yield http.post("/api/v2/Controls/PersonPickerSearch", undefined, options);
              if (cancellationToken.value) {
                return;
              }
              if (result.isSuccess && result.data) {
                searchResults.value = result.data;
              } else {
                console.error("Error fetching person picker search results: ", result.errorMessage);
              }
            });
            return _updateSearchResults.apply(this, arguments);
          }
          function getSubInformation(result) {
            var text = [];
            if (result.spouseName) {
              text.push("Spouse: ".concat(result.spouseName));
            }
            if (result.isBusiness) {
              text.push("Business");
            }
            if (!result.isActive && result.recordStatus) {
              text.push("(" + result.recordStatus + ")");
            }
            if (result.isDeceased) {
              text.push("<span class=\"text-danger\">(Deceased)</span>");
            }
            return text.join(" ");
          }
          function getPersonImageStyle(result) {
            if (result.imageUrl) {
              return {
                backgroundImage: "url(".concat(result.imageUrl, ")"),
                width: "48px",
                height: "48px",
                backgroundSize: "cover",
                borderRadius: "48px"
              };
            } else {
              return {};
            }
          }
          function getTags(result) {
            var tags = [];
            if (result.connectionStatus) {
              tags.push({
                entityTypeGuid: emptyGuid,
                isPersonal: false,
                name: result.connectionStatus,
                backgroundColor: result.connectionStatusColor || "#fff"
              });
            }
            if (result.campusShortCode) {
              tags.push({
                entityTypeGuid: emptyGuid,
                isPersonal: false,
                name: result.campusShortCode,
                backgroundColor: "#fff"
              });
            }
            return tags;
          }
          function onClear() {
            emit("update:modelValue", undefined);
          }
          function onPickerClick() {
            showPopup.value = !showPopup.value;
            if (showPopup.value) {
              nextTick(() => {
                if (nameSearchTextBox.value) {
                  var input = nameSearchTextBox.value.querySelector("input");
                  input === null || input === void 0 ? void 0 : input.focus();
                }
              });
            }
          }
          function onCancel() {
            showPopup.value = false;
          }
          function selectSelf() {
            selectPerson({
              primaryAliasGuid: currentPerson === null || currentPerson === void 0 ? void 0 : currentPerson.idKey,
              name: currentPerson === null || currentPerson === void 0 ? void 0 : currentPerson.fullName
            });
          }
          function selectPerson(person) {
            if (!person.primaryAliasGuid || !person.name) {
              return;
            }
            internalValue.value = {
              value: person.primaryAliasGuid,
              text: person.name
            };
            emit("update:modelValue", internalValue.value);
            showPopup.value = false;
          }
          watch(isAdvancedSearch, () => {
            if (!isAdvancedSearch.value) {
              addressSearchText.value = "";
              phoneSearchText.value = "";
              emailSearchText.value = "";
            }
          });
          watch([nameSearchText, addressSearchText, phoneSearchText, emailSearchText], () => {
            if (searchCancelToken) {
              searchCancelToken.value = true;
            }
            searchCancelToken = ref(false);
            updateSearchResults(nameSearchText.value, addressSearchText.value, phoneSearchText.value, emailSearchText.value, searchCancelToken);
          });
          watch(() => props.expandSearchOptions, () => {
            if (props.expandSearchOptions) {
              isAdvancedSearch.value = true;
            }
          }, {
            immediate: true
          });
          watch(() => props.modelValue, () => internalValue.value = props.modelValue);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              formGroupClasses: 'person-picker ' + __props.formGroupClasses,
              name: "personpicker"
            }, {
              default: withCtx(_ref2 => {
                _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("a", {
                  class: "picker-label",
                  href: "#",
                  onClick: withModifiers(onPickerClick, ["prevent", "stop"])
                }, [_hoisted_4, createElementVNode("span", _hoisted_5, toDisplayString(unref(selectedName)), 1), unref(showClear) ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  role: "button",
                  type: "button",
                  "aria-label": "Clear selection",
                  class: "btn picker-select-none",
                  onClick: withModifiers(onClear, ["prevent", "stop"])
                }, _hoisted_8, 8, _hoisted_6)) : createCommentVNode("v-if", true), _hoisted_9], 8, _hoisted_3), showPopup.value ? (openBlock(), createBlock(unref(Panel), {
                  key: 0,
                  isFullscreen: "",
                  isFullscreenPageOnly: "",
                  title: "Person Search",
                  onKeydown: withKeys(withModifiers(onCancel, ["stop"]), ["esc"])
                }, {
                  headerActions: withCtx(() => [unref(isSelfSelectionEnabled) ? (openBlock(), createBlock(unref(RockButton), {
                    key: 0,
                    class: "btn-square mr-2",
                    onClick: withModifiers(selectSelf, ["prevent"]),
                    btnSize: unref(BtnSize).ExtraSmall,
                    "aria-label": "Select Self",
                    title: "Select Self"
                  }, {
                    default: withCtx(() => [_hoisted_10]),
                    _: 1
                  }, 8, ["onClick", "btnSize"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                    class: "btn-square mr-2",
                    onClick: _cache[0] || (_cache[0] = withModifiers($event => isAdvancedSearch.value = !isAdvancedSearch.value, ["prevent"])),
                    btnSize: unref(BtnSize).ExtraSmall,
                    "aria-label": "Advanced Search",
                    title: "Advanced Search"
                  }, {
                    default: withCtx(() => [_hoisted_11]),
                    _: 1
                  }, 8, ["btnSize"]), createElementVNode("button", {
                    class: "action btn-link",
                    onClick: withModifiers(onCancel, ["prevent", "stop"]),
                    type: "button",
                    "aria-label": "Close",
                    title: "Close"
                  }, _hoisted_14, 8, _hoisted_12)]),
                  default: withCtx(() => [createElementVNode("div", _hoisted_15, [createElementVNode("div", {
                    ref_key: "nameSearchTextBox",
                    ref: nameSearchTextBox,
                    class: normalizeClass(["personpicker-search-panel", {
                      'row': isAdvancedSearch.value
                    }])
                  }, [createVNode(unref(TextBox), {
                    modelValue: nameSearchText.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => nameSearchText.value = $event),
                    formGroupClasses: isAdvancedSearch.value ? 'col-sm-6' : '',
                    disableLabel: ""
                  }, {
                    inputGroupPrepend: withCtx(() => [_hoisted_16]),
                    _: 1
                  }, 8, ["modelValue", "formGroupClasses"]), isAdvancedSearch.value ? (openBlock(), createBlock(unref(TextBox), {
                    key: 0,
                    modelValue: phoneSearchText.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => phoneSearchText.value = $event),
                    formGroupClasses: "col-sm-6",
                    disableLabel: ""
                  }, {
                    inputGroupPrepend: withCtx(() => [_hoisted_17]),
                    _: 1
                  }, 8, ["modelValue"])) : createCommentVNode("v-if", true), isAdvancedSearch.value ? (openBlock(), createBlock(unref(TextBox), {
                    key: 1,
                    modelValue: addressSearchText.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => addressSearchText.value = $event),
                    formGroupClasses: "col-sm-6",
                    disableLabel: ""
                  }, {
                    inputGroupPrepend: withCtx(() => [_hoisted_18]),
                    _: 1
                  }, 8, ["modelValue"])) : createCommentVNode("v-if", true), isAdvancedSearch.value ? (openBlock(), createBlock(unref(TextBox), {
                    key: 2,
                    modelValue: emailSearchText.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => emailSearchText.value = $event),
                    formGroupClasses: "col-sm-6",
                    disableLabel: ""
                  }, {
                    inputGroupPrepend: withCtx(() => [_hoisted_19]),
                    _: 1
                  }, 8, ["modelValue"])) : createCommentVNode("v-if", true)], 2), createElementVNode("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, result => {
                    var _internalValue$value2;
                    return openBlock(), createElementBlock("div", {
                      key: result.primaryAliasGuid,
                      class: "well cursor-pointer mb-2 p-2",
                      style: normalizeStyle({
                        borderColor: ((_internalValue$value2 = internalValue.value) === null || _internalValue$value2 === void 0 ? void 0 : _internalValue$value2.value) == result.primaryAliasGuid ? 'var(--color-primary)' : undefined
                      }),
                      tabindex: "0",
                      onClick: $event => selectPerson(result),
                      onKeypress: withKeys($event => selectPerson(result), ["enter"]),
                      role: "button"
                    }, [createElementVNode("div", {
                      class: normalizeClass(["d-flex text-xs flex-wrap gap", {
                        'o-60': !result.isActive
                      }])
                    }, [createElementVNode("div", {
                      class: "person-image flex-shrink-0",
                      style: normalizeStyle(getPersonImageStyle(result)),
                      alt: 'Profile image for ' + result.name
                    }, null, 12, _hoisted_21), createElementVNode("div", _hoisted_22, [createElementVNode("div", _hoisted_23, [createElementVNode("span", _hoisted_24, toDisplayString(result.name), 1), _hoisted_25, result.ageClassification == AgeClassification.Child ? (openBlock(), createElementBlock("i", _hoisted_26)) : createCommentVNode("v-if", true), _hoisted_27, result.formattedAge ? (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(result.formattedAge), 1)) : createCommentVNode("v-if", true)]), getSubInformation(result) ? (openBlock(), createElementBlock("div", _hoisted_29, [createElementVNode("small", {
                      innerHTML: getSubInformation(result)
                    }, null, 8, _hoisted_30)])) : createCommentVNode("v-if", true), createElementVNode("a", {
                      href: "/Person/".concat(result.guid),
                      onClick: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop"])),
                      target: "_blank",
                      rel: "noreferrer noopener"
                    }, "Profile", 8, _hoisted_31)]), createElementVNode("div", _hoisted_32, [createElementVNode("div", null, toDisplayString(result.address), 1), createElementVNode("div", null, toDisplayString(result.email), 1)]), createElementVNode("ul", _hoisted_33, [(openBlock(true), createElementBlock(Fragment, null, renderList(result.phoneNumbers, phone => {
                      var _ref3, _phone$type;
                      return openBlock(), createElementBlock("li", {
                        key: (_ref3 = (_phone$type = phone.type) !== null && _phone$type !== void 0 ? _phone$type : '' + phone.number) !== null && _ref3 !== void 0 ? _ref3 : ''
                      }, [createTextVNode(toDisplayString(phone.isUnlisted ? 'Unlisted' : phone.number) + " ", 1), phone.type ? (openBlock(), createElementBlock("small", _hoisted_34, toDisplayString(phone.type), 1)) : createCommentVNode("v-if", true)]);
                    }), 128))]), createElementVNode("div", _hoisted_35, [createElementVNode("div", _hoisted_36, [(openBlock(true), createElementBlock(Fragment, null, renderList(getTags(result), tag => {
                      var _tag$name;
                      return openBlock(), createBlock(unref(Tag), {
                        key: (_tag$name = tag.name) !== null && _tag$name !== void 0 ? _tag$name : undefined,
                        modelValue: tag,
                        disabled: ""
                      }, null, 8, ["modelValue"]);
                    }), 128))])])], 2)], 44, _hoisted_20);
                  }), 128))])])]),
                  _: 1
                }, 8, ["onKeydown"])) : createCommentVNode("v-if", true)])])];
              }),
              _: 1
            }, 8, ["modelValue", "formGroupClasses"]);
          };
        }
      }));

      script.__file = "Framework/Controls/personPicker.obs";

    })
  };
}));
//# sourceMappingURL=personPicker.obs.js.map
