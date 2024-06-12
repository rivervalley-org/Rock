System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/definedType', '@Obsidian/SystemGuids/definedValue', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Controls/tagList.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/util', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, resolveComponent, openBlock, createElementBlock, createVNode, unref, isRef, createBlock, createCommentVNode, withCtx, Fragment, renderList, toDisplayString, withModifiers, normalizeClass, NotificationBox, DetailPanelMode, RockButton, BtnType, BtnSize, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, DefinedType, DefinedValue, DefinedValuePicker, CampusPicker, TextBox, AddressControl, CheckBox, PhoneNumberBox, EmailBox, RadioButtonList, Panel, RockLabel, Modal, DropDownList, emptyGuid, toGuidOrNull, ValueDetailList, ValueDetailListItemBuilder, EntityTagList, EntityType, debounce, makeUrlRedirectSafe;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      withModifiers = module.withModifiers;
      normalizeClass = module.normalizeClass;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      DefinedValue = module.DefinedValue;
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      emptyGuid = module.emptyGuid;
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      EntityTagList = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
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

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "col-md-3"
      };
      var _hoisted_3$2 = {
        class: "col-md-9"
      };
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "col-md-6"
      };
      var _hoisted_6$1 = {
        class: "panel panel-section"
      };
      var _hoisted_7$1 = createElementVNode("div", {
        class: "panel-heading"
      }, [createElementVNode("h3", {
        class: "panel-title"
      }, "Address")], -1);
      var _hoisted_8 = {
        class: "panel-body"
      };
      var _hoisted_9 = {
        class: "panel panel-section"
      };
      var _hoisted_10 = createElementVNode("div", {
        class: "panel-heading"
      }, [createElementVNode("h3", {
        class: "panel-title"
      }, "Contact Information")], -1);
      var _hoisted_11 = {
        class: "panel-body"
      };
      var _hoisted_12 = {
        class: "row"
      };
      var _hoisted_13 = {
        class: "col-xs-12 col-sm-6"
      };
      var _hoisted_14 = {
        class: "col-xs-3"
      };
      var _hoisted_15 = {
        class: "col-xs-3"
      };
      var _hoisted_16 = createTextVNode("Search Keys");
      var _hoisted_17 = {
        class: "table-responsive"
      };
      var _hoisted_18 = {
        class: "grid-table table table-bordered table-striped table-hover"
      };
      var _hoisted_19 = createElementVNode("thead", null, [createElementVNode("tr", {
        align: "left"
      }, [createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Search Type"), createElementVNode("th", {
        "data-priority": "1",
        scope: "col"
      }, "Search Value"), createElementVNode("th", {
        class: "grid-columncommand",
        "data-priority": "1",
        scope: "col"
      }, " ")])], -1);
      var _hoisted_20 = {
        align: "left"
      };
      var _hoisted_21 = {
        "data-priority": "1"
      };
      var _hoisted_22 = {
        "data-priority": "1"
      };
      var _hoisted_23 = {
        class: "grid-columncommand",
        "data-priority": "1",
        align: "center"
      };
      var _hoisted_24 = ["onClick"];
      var _hoisted_25 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_26 = [_hoisted_25];
      var _hoisted_27 = {
        key: 1
      };
      var _hoisted_28 = {
        class: "grid-actions border-bottom border-panel"
      };
      var _hoisted_29 = createElementVNode("i", {
        class: "fa fa-plus-circle fa-fw"
      }, null, -1);
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          options: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$bus, _props$modelValue$rec, _props$modelValue$rec2, _props$modelValue$ema, _props$modelValue$ema2, _props$modelValue$pho, _props$modelValue$cou, _props$modelValue$add, _props$modelValue$cam, _props$options$search, _props$options$search2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var businessName = propertyRef((_props$modelValue$bus = props.modelValue.businessName) !== null && _props$modelValue$bus !== void 0 ? _props$modelValue$bus : "", "FirstName");
          var recordStatus = propertyRef((_props$modelValue$rec = props.modelValue.recordStatus) !== null && _props$modelValue$rec !== void 0 ? _props$modelValue$rec : {}, "RecordStatusValueId");
          var recordStatusReason = propertyRef((_props$modelValue$rec2 = props.modelValue.recordStatusReason) !== null && _props$modelValue$rec2 !== void 0 ? _props$modelValue$rec2 : {}, "RecordStatusReasonValueId");
          var email = propertyRef((_props$modelValue$ema = props.modelValue.emailAddress) !== null && _props$modelValue$ema !== void 0 ? _props$modelValue$ema : "", "Email");
          var emailPreference = propertyRef((_props$modelValue$ema2 = props.modelValue.emailPreference) !== null && _props$modelValue$ema2 !== void 0 ? _props$modelValue$ema2 : "", "EmailPreference");
          var phoneNumber = ref((_props$modelValue$pho = props.modelValue.phoneNumber) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : "");
          var countryCode = ref((_props$modelValue$cou = props.modelValue.countryCode) !== null && _props$modelValue$cou !== void 0 ? _props$modelValue$cou : "");
          var address = ref((_props$modelValue$add = props.modelValue.address) !== null && _props$modelValue$add !== void 0 ? _props$modelValue$add : {});
          var campus = propertyRef((_props$modelValue$cam = props.modelValue.campus) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : {}, "CampusId");
          var saveFormerAddress = ref(props.modelValue.saveFormerAddressAsPreviousAddress);
          var isSms = ref(props.modelValue.isSmsChecked);
          var isUnlisted = ref(props.modelValue.isUnlistedChecked);
          var searchKeys = ref((_props$options$search = props.options.searchKeys) !== null && _props$options$search !== void 0 ? _props$options$search : []);
          var searchKeyTypeList = ref((_props$options$search2 = props.options.searchTypesList) !== null && _props$options$search2 !== void 0 ? _props$options$search2 : []);
          var searchKeyType = ref("");
          var searchKeyValue = ref("");
          var isModalOpen = ref(false);
          var emailPreferences = [{
            text: "Email Allowed",
            value: "EmailAllowed"
          }, {
            text: "No Mass Emails",
            value: "NoMassEmails"
          }, {
            text: "Do Not Email",
            value: "DoNotEmail"
          }];
          var propRefs = [businessName, recordStatus, recordStatusReason, email, campus, emailPreference];
          var isReasonVisible = computed(() => {
            var _recordStatus$value$v;
            return ((_recordStatus$value$v = recordStatus.value.value) === null || _recordStatus$value$v === void 0 ? void 0 : _recordStatus$value$v.toUpperCase()) == DefinedValue.PersonRecordStatusInactive;
          });
          var onAddSearchKey = () => {
            isModalOpen.value = true;
          };
          var onSaveSearchKey = () => {
            isModalOpen.value = false;
            var searchType = searchKeyTypeList.value.find(x => x.value === searchKeyType.value);
            searchKeys.value.push({
              guid: emptyGuid,
              searchType: searchType,
              searchValue: searchKeyValue.value
            });
            searchKeyValue.value = "";
            searchKeyType.value = "";
          };
          var onDeleteSearchKey = function () {
            var _ref2 = _asyncToGenerator(function* (searchKey) {
              isModalOpen.value = false;
              if (!searchKey.guid) {
                searchKeys.value = searchKeys.value.filter(s => {
                  var _s$searchType, _searchKey$searchType;
                  return ((_s$searchType = s.searchType) === null || _s$searchType === void 0 ? void 0 : _s$searchType.value) !== ((_searchKey$searchType = searchKey.searchType) === null || _searchKey$searchType === void 0 ? void 0 : _searchKey$searchType.value) && s.searchValue !== searchKey.searchValue;
                });
              } else {
                searchKeys.value = searchKeys.value.filter(s => s.guid != searchKey.guid);
              }
            });
            return function onDeleteSearchKey(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$bus2, _props$modelValue$rec3, _props$modelValue$rec4, _props$modelValue$ema3, _props$modelValue$ema4, _props$modelValue$pho2, _props$modelValue$cam2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(businessName, (_props$modelValue$bus2 = props.modelValue.businessName) !== null && _props$modelValue$bus2 !== void 0 ? _props$modelValue$bus2 : "");
            updateRefValue(recordStatus, (_props$modelValue$rec3 = props.modelValue.recordStatus) !== null && _props$modelValue$rec3 !== void 0 ? _props$modelValue$rec3 : {});
            updateRefValue(recordStatusReason, (_props$modelValue$rec4 = props.modelValue.recordStatusReason) !== null && _props$modelValue$rec4 !== void 0 ? _props$modelValue$rec4 : {});
            updateRefValue(email, (_props$modelValue$ema3 = props.modelValue.emailAddress) !== null && _props$modelValue$ema3 !== void 0 ? _props$modelValue$ema3 : "");
            updateRefValue(emailPreference, (_props$modelValue$ema4 = props.modelValue.emailPreference) !== null && _props$modelValue$ema4 !== void 0 ? _props$modelValue$ema4 : "");
            updateRefValue(phoneNumber, (_props$modelValue$pho2 = props.modelValue.phoneNumber) !== null && _props$modelValue$pho2 !== void 0 ? _props$modelValue$pho2 : "");
            updateRefValue(campus, (_props$modelValue$cam2 = props.modelValue.campus) !== null && _props$modelValue$cam2 !== void 0 ? _props$modelValue$cam2 : {});
          });
          watch([attributeValues, searchKeys, phoneNumber, saveFormerAddress, isSms, isUnlisted, address, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              businessName: businessName.value,
              recordStatus: recordStatus.value,
              recordStatusReason: recordStatusReason.value,
              emailAddress: email.value,
              campus: campus.value,
              emailPreference: emailPreference.value,
              phoneNumber: phoneNumber.value,
              saveFormerAddressAsPreviousAddress: saveFormerAddress.value,
              isSmsChecked: isSms.value,
              isUnlistedChecked: isUnlisted.value,
              address: address.value,
              searchKeys: searchKeys.value,
              countryCode: countryCode.value
            });
            emit("update:modelValue", newValue);
          }, {
            deep: true
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _component_RockButton = resolveComponent("RockButton");
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createElementVNode("fieldset", null, [createVNode(unref(DefinedValuePicker), {
              label: "Record Status",
              modelValue: unref(recordStatus),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(recordStatus) ? recordStatus.value = $event : null),
              definedTypeGuid: unref(DefinedType).PersonRecordStatus,
              multiple: false,
              enhanceForLongLists: false
            }, null, 8, ["modelValue", "definedTypeGuid"]), unref(isReasonVisible) ? (openBlock(), createBlock(unref(DefinedValuePicker), {
              key: 0,
              label: "Reason",
              modelValue: unref(recordStatusReason),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(recordStatusReason) ? recordStatusReason.value = $event : null),
              definedTypeGuid: unref(DefinedType).PersonRecordStatusReason,
              multiple: false,
              enhanceForLongLists: false
            }, null, 8, ["modelValue", "definedTypeGuid"])) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_3$2, [createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [createVNode(unref(CampusPicker), {
              modelValue: unref(campus),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(campus) ? campus.value = $event : null),
              label: "Campus",
              includeInactive: "",
              showBlankItem: ""
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              label: "Name",
              modelValue: unref(businessName),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(businessName) ? businessName.value = $event : null)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_6$1, [_hoisted_7$1, createElementVNode("div", _hoisted_8, [createVNode(unref(AddressControl), {
              label: "Address",
              modelValue: address.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => address.value = $event)
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              label: "Save Former Address As Previous Address",
              modelValue: saveFormerAddress.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => saveFormerAddress.value = $event)
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_9, [_hoisted_10, createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createElementVNode("div", _hoisted_13, [createVNode(unref(PhoneNumberBox), {
              label: "Phone Number",
              modelValue: phoneNumber.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => phoneNumber.value = $event),
              countryCode: countryCode.value
            }, null, 8, ["modelValue", "countryCode"])]), createElementVNode("div", _hoisted_14, [createVNode(unref(CheckBox), {
              label: "SMS",
              modelValue: isSms.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isSms.value = $event)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_15, [createVNode(unref(CheckBox), {
              label: "Unlisted",
              modelValue: isUnlisted.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isUnlisted.value = $event)
            }, null, 8, ["modelValue"])])]), createVNode(unref(EmailBox), {
              label: "Email",
              modelValue: unref(email),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(email) ? email.value = $event : null)
            }, null, 8, ["modelValue"]), createVNode(unref(RadioButtonList), {
              label: "Email Preference",
              modelValue: unref(emailPreference),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(emailPreference) ? emailPreference.value = $event : null),
              items: emailPreferences,
              horizontal: "",
              repeatColumns: 0
            }, null, 8, ["modelValue"])])]), createVNode(unref(Panel), {
              "v-model": false,
              isDrawerOpen: false,
              title: "Advanced Settings",
              hasCollapse: true,
              hasFullscreen: false,
              isFullscreenPageOnly: true
            }, {
              default: withCtx(() => [createVNode(unref(RockLabel), {
                help: "Search keys provide alternate ways to search for an individual."
              }, {
                default: withCtx(() => [_hoisted_16]),
                _: 1
              }), createElementVNode("div", _hoisted_17, [createElementVNode("table", _hoisted_18, [_hoisted_19, createElementVNode("tbody", null, [searchKeys.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(searchKeys.value, searchKey => {
                var _searchKey$searchType2;
                return openBlock(), createElementBlock("tr", _hoisted_20, [createElementVNode("td", _hoisted_21, toDisplayString((_searchKey$searchType2 = searchKey.searchType) === null || _searchKey$searchType2 === void 0 ? void 0 : _searchKey$searchType2.text), 1), createElementVNode("td", _hoisted_22, toDisplayString(searchKey.searchValue), 1), createElementVNode("td", _hoisted_23, [createElementVNode("a", {
                  title: "Delete",
                  onClick: withModifiers($event => onDeleteSearchKey(searchKey), ["prevent", "stop"])
                }, _hoisted_26, 8, _hoisted_24)])]);
              }), 256)) : (openBlock(), createElementBlock("div", _hoisted_27, " No Search Keys Found "))])])]), createElementVNode("div", _hoisted_28, [createVNode(_component_RockButton, {
                class: "btn-add btn-grid-action",
                btnType: "link",
                onClick: onAddSearchKey
              }, {
                default: withCtx(() => [_hoisted_29]),
                _: 1
              })])]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])])]), createVNode(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => isModalOpen.value = $event),
              title: "Add Search Key",
              onSave: onSaveSearchKey,
              saveText: "Save"
            }, {
              default: withCtx(() => [createElementVNode("div", null, [createVNode(unref(DropDownList), {
                label: "Search Key",
                modelValue: searchKeyType.value,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => searchKeyType.value = $event),
                items: searchKeyTypeList.value,
                showBlankItem: ""
              }, null, 8, ["modelValue", "items"]), createVNode(unref(TextBox), {
                label: "Search Value",
                modelValue: searchKeyValue.value,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => searchKeyValue.value = $event),
                rules: "required"
              }, null, 8, ["modelValue"])])]),
              _: 1
            }, 8, ["modelValue"])]);
          };
        }
      });

      script$2.__file = "src/Finance/BusinessDetail/editPanel.partial.obs";

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
        name: 'viewPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          options: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue$bus, _props$modelValue3, _props$modelValue$idK, _props$modelValue4, _props$options;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var businessName = ref((_props$modelValue$bus = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.businessName) !== null && _props$modelValue$bus !== void 0 ? _props$modelValue$bus : "");
          var entityKey = ref((_props$modelValue$idK = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.idKey) !== null && _props$modelValue$idK !== void 0 ? _props$modelValue$idK : "");
          var tagCategoryGuid = ref(toGuidOrNull((_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.tagCategoryGuid));
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.addressAsHtml) {
              valueBuilder.addHtmlValue("Address", props.modelValue.addressAsHtml);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.phoneNumber) {
              valueBuilder.addTextValue("Phone Number", props.modelValue.phoneNumber);
            }
            if (props.modelValue.emailAddress) {
              valueBuilder.addTextValue("Email Address", props.modelValue.emailAddress);
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            var _tagCategoryGuid$valu;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("h1", null, toDisplayString(businessName.value), 1), createVNode(unref(EntityTagList), {
              entityTypeGuid: unref(EntityType).Person,
              entityKey: entityKey.value,
              categoryGuid: (_tagCategoryGuid$valu = tagCategoryGuid.value) !== null && _tagCategoryGuid$valu !== void 0 ? _tagCategoryGuid$valu : undefined
            }, null, 8, ["entityTypeGuid", "entityKey", "categoryGuid"]), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Finance/BusinessDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = createTextVNode(" Actions ");
      var _hoisted_2 = createElementVNode("i", {
        class: "fa fa-caret-down"
      }, null, -1);
      var _hoisted_3 = [_hoisted_1, _hoisted_2];
      var _hoisted_4 = ["innerHTML"];
      var _hoisted_5 = createTextVNode("Edit");
      var _hoisted_6 = createTextVNode(" Save ");
      var _hoisted_7 = createTextVNode("Cancel");
      var script = exports('default', defineComponent({
        name: 'businessDetail',
        setup(__props) {
          var _businessDetailViewBa;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var isSaving = ref(false);
          var businessDetailViewBag = ref(config.entity);
          var businessDetailEditBag = ref({});
          var headerSecondaryActionMenu = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var customActions = (_businessDetailViewBa = businessDetailViewBag.value) === null || _businessDetailViewBa === void 0 ? void 0 : _businessDetailViewBa.customActions;
          var validProperties = ["attributeValues", "businessName", "recordStatus", "recordStatusReason", "emailAddress", "emailPreference"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(businessDetailEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            if (panelMode.value == DetailPanelMode.View) {
              return "Business Details";
            } else {
              var _businessDetailViewBa2, _businessDetailViewBa3;
              return !((_businessDetailViewBa2 = businessDetailViewBag.value) !== null && _businessDetailViewBa2 !== void 0 && _businessDetailViewBa2.businessName) ? "Add Business" : "Edit ".concat((_businessDetailViewBa3 = businessDetailViewBag.value) === null || _businessDetailViewBa3 === void 0 ? void 0 : _businessDetailViewBa3.businessName);
            }
          });
          var statusClass = computed(() => {
            var _businessDetailViewBa4, _businessDetailViewBa5, _businessDetailViewBa6, _businessDetailViewBa7, _businessDetailViewBa8, _businessDetailViewBa9;
            if (((_businessDetailViewBa4 = businessDetailViewBag.value) === null || _businessDetailViewBa4 === void 0 ? void 0 : (_businessDetailViewBa5 = _businessDetailViewBa4.recordStatus) === null || _businessDetailViewBa5 === void 0 ? void 0 : (_businessDetailViewBa6 = _businessDetailViewBa5.value) === null || _businessDetailViewBa6 === void 0 ? void 0 : _businessDetailViewBa6.toUpperCase()) == DefinedValue.PersonRecordStatusPending) {
              return "label label-warning";
            } else if (((_businessDetailViewBa7 = businessDetailViewBag.value) === null || _businessDetailViewBa7 === void 0 ? void 0 : (_businessDetailViewBa8 = _businessDetailViewBa7.recordStatus) === null || _businessDetailViewBa8 === void 0 ? void 0 : (_businessDetailViewBa9 = _businessDetailViewBa8.value) === null || _businessDetailViewBa9 === void 0 ? void 0 : _businessDetailViewBa9.toUpperCase()) == DefinedValue.PersonRecordStatusInactive) {
              return "label label-danger";
            } else {
              return "label label-success";
            }
          });
          var status = computed(() => {
            var _businessDetailViewBa10, _businessDetailViewBa11, _businessDetailViewBa12, _businessDetailViewBa13, _businessDetailViewBa14, _businessDetailViewBa15;
            if (((_businessDetailViewBa10 = businessDetailViewBag.value) === null || _businessDetailViewBa10 === void 0 ? void 0 : (_businessDetailViewBa11 = _businessDetailViewBa10.recordStatus) === null || _businessDetailViewBa11 === void 0 ? void 0 : (_businessDetailViewBa12 = _businessDetailViewBa11.value) === null || _businessDetailViewBa12 === void 0 ? void 0 : _businessDetailViewBa12.toUpperCase()) == DefinedValue.PersonRecordStatusPending) {
              return "Pending";
            } else if (((_businessDetailViewBa13 = businessDetailViewBag.value) === null || _businessDetailViewBa13 === void 0 ? void 0 : (_businessDetailViewBa14 = _businessDetailViewBa13.recordStatus) === null || _businessDetailViewBa14 === void 0 ? void 0 : (_businessDetailViewBa15 = _businessDetailViewBa14.value) === null || _businessDetailViewBa15 === void 0 ? void 0 : _businessDetailViewBa15.toUpperCase()) == DefinedValue.PersonRecordStatusInactive) {
              return "Inactive";
            } else {
              return "Active";
            }
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var showActions = computed(() => {
            return customActions !== null && panelMode.value === DetailPanelMode.View;
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _businessDetailEditBa;
              if (!((_businessDetailEditBa = businessDetailEditBag.value) !== null && _businessDetailEditBa !== void 0 && _businessDetailEditBa.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  window.location.href = makeUrlRedirectSafe(config.navigationUrls[NavigationUrlKey.ParentPage]);
                }
              } else {
                panelMode.value = DetailPanelMode.View;
              }
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _businessDetailViewBa18;
              var result = yield invokeBlockAction("Edit", {
                key: (_businessDetailViewBa18 = businessDetailViewBag.value) === null || _businessDetailViewBa18 === void 0 ? void 0 : _businessDetailViewBa18.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                businessDetailEditBag.value = result.data.entity;
                panelMode.value = DetailPanelMode.Edit;
              }
            });
            return _onEdit.apply(this, arguments);
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              errorMessage.value = "";
              isSaving.value = true;
              var data = {
                entity: businessDetailEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              isSaving.value = false;
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  businessDetailViewBag.value = result.data;
                  panelMode.value = DetailPanelMode.View;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  window.location.href = makeUrlRedirectSafe(result.data);
                }
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save Business.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          function onActionContextDropdownClick() {
            if (headerSecondaryActionMenu.value) {
              headerSecondaryActionMenu.value.classList.toggle("open");
            }
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified business could not be viewed.";
          } else if (!config.entity.idKey) {
            businessDetailEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(blockError.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(Panel), {
              if: "!blockError",
              title: unref(panelName)
            }, {
              headerActions: withCtx(() => {
                var _businessDetailViewBa16, _businessDetailViewBa17;
                return [(_businessDetailViewBa16 = businessDetailViewBag.value) !== null && _businessDetailViewBa16 !== void 0 && (_businessDetailViewBa17 = _businessDetailViewBa16.recordStatus) !== null && _businessDetailViewBa17 !== void 0 && _businessDetailViewBa17.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref(statusClass))
                }, toDisplayString(unref(status)), 3)) : createCommentVNode("v-if", true), unref(showActions) ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "action panel-action-context clickable",
                  style: {
                    "position": "relative"
                  },
                  ref_key: "headerSecondaryActionMenu",
                  ref: headerSecondaryActionMenu
                }, [createElementVNode("button", {
                  type: "button",
                  class: "btn btn-default",
                  "data-toggle": "dropdown",
                  onClick: onActionContextDropdownClick
                }, _hoisted_3), createElementVNode("ul", {
                  class: "dropdown-menu dropdown-menu-right",
                  innerHTML: unref(customActions)
                }, null, 8, _hoisted_4)], 512)) : createCommentVNode("v-if", true)];
              }),
              footerActions: withCtx(() => [panelMode.value === unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(RockButton), {
                key: 0,
                btnSize: unref(BtnSize).Default,
                btnType: unref(BtnType).Primary,
                onClick: onEdit
              }, {
                default: withCtx(() => [_hoisted_5]),
                _: 1
              }, 8, ["btnSize", "btnType"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).Edit || panelMode.value === unref(DetailPanelMode).Add ? (openBlock(), createBlock(unref(RockButton), {
                key: 1,
                btnSize: unref(BtnSize).Default,
                btnType: unref(BtnType).Primary,
                isLoading: isSaving.value,
                onClick: onSave
              }, {
                default: withCtx(() => [_hoisted_6]),
                _: 1
              }, 8, ["btnSize", "btnType", "isLoading"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).Edit ? (openBlock(), createBlock(unref(RockButton), {
                key: 2,
                btnType: "link",
                onClick: onCancelEdit,
                autoDisable: ""
              }, {
                default: withCtx(() => [_hoisted_7]),
                _: 1
              })) : createCommentVNode("v-if", true)]),
              default: withCtx(() => [panelMode.value === unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(script$1), {
                key: 0,
                modelValue: businessDetailViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])) : (openBlock(), createBlock(unref(script$2), {
                key: 1,
                modelValue: businessDetailEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => businessDetailEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"]))]),
              _: 1
            }, 8, ["title"])], 64);
          };
        }
      }));

      script.__file = "src/Finance/businessDetail.obs";

    })
  };
}));
//# sourceMappingURL=businessDetail.obs.js.map
