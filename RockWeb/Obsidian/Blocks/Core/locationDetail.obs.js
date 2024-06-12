System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/locationPicker.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/definedType', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, withCtx, Fragment, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, AddressControl, CheckBox, DefinedValuePicker, DropDownList, LocationPicker, NumberBox, RockButton, TextBox, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, DefinedType, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      LocationPicker = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      debounce = module.debounce;
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

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4$1 = createTextVNode(" Verify Address ");
      var _hoisted_5$1 = {
        class: "row"
      };
      var _hoisted_6 = {
        class: "col-sm-7"
      };
      var _hoisted_7 = {
        class: "col-sm-5"
      };
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$par, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$loc, _props$modelValue$pri, _props$modelValue$pri2, _props$modelValue$isG, _props$modelValue$sof, _props$modelValue$fir, _props$modelValue$add, _props$modelValue$geo, _props$modelValue$geo2;
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var parentLocation = propertyRef((_props$modelValue$par = props.modelValue.parentLocation) !== null && _props$modelValue$par !== void 0 ? _props$modelValue$par : undefined, "ParentLocationId");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var locationTypeValue = propertyRef((_props$modelValue$loc = props.modelValue.locationTypeValue) !== null && _props$modelValue$loc !== void 0 ? _props$modelValue$loc : null, "LocationTypeValueId");
          var printerDevice = propertyRef((_props$modelValue$pri = (_props$modelValue$pri2 = props.modelValue.printerDevice) === null || _props$modelValue$pri2 === void 0 ? void 0 : _props$modelValue$pri2.value) !== null && _props$modelValue$pri !== void 0 ? _props$modelValue$pri : "", "PrinterDeviceId");
          var isGeoPointLocked = propertyRef((_props$modelValue$isG = props.modelValue.isGeoPointLocked) !== null && _props$modelValue$isG !== void 0 ? _props$modelValue$isG : false, "IsGeoPointLocked");
          var softRoomThreshold = propertyRef((_props$modelValue$sof = props.modelValue.softRoomThreshold) !== null && _props$modelValue$sof !== void 0 ? _props$modelValue$sof : null, "SoftRoomThreshold");
          var firmRoomThreshold = propertyRef((_props$modelValue$fir = props.modelValue.firmRoomThreshold) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : null, "FirmRoomThreshold");
          var addressFields = ref((_props$modelValue$add = props.modelValue.addressFields) !== null && _props$modelValue$add !== void 0 ? _props$modelValue$add : {});
          var geoPointWellKnownText = propertyRef((_props$modelValue$geo = props.modelValue.geoPoint_WellKnownText) !== null && _props$modelValue$geo !== void 0 ? _props$modelValue$geo : "", "GeoPoint");
          var geoFenceWellKnownText = propertyRef((_props$modelValue$geo2 = props.modelValue.geoFence_WellKnownText) !== null && _props$modelValue$geo2 !== void 0 ? _props$modelValue$geo2 : "", "GeoFence");
          var standardizeAttemptedResult = ref("");
          var geocodeAttemptedResult = ref("");
          var propRefs = [isActive, name, parentLocation, locationTypeValue, printerDevice, isGeoPointLocked, softRoomThreshold, firmRoomThreshold, geoPointWellKnownText, geoFenceWellKnownText];
          var printerDeviceOptions = computed(() => {
            var _props$options$printe;
            return (_props$options$printe = props.options.printerDeviceOptions) !== null && _props$options$printe !== void 0 ? _props$options$printe : [];
          });
          var standardizationResults = computed(() => {
            if (standardizeAttemptedResult.value || geocodeAttemptedResult.value) {
              return "Standardization Result: " + standardizeAttemptedResult.value + "<br>" + "Geocoding Result:" + geocodeAttemptedResult.value;
            } else {
              return "";
            }
          });
          function onStandardizeClick() {
            return _onStandardizeClick.apply(this, arguments);
          }
          function _onStandardizeClick() {
            _onStandardizeClick = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("StandardizeLocation", {
                addressFields: addressFields.value
              });
              if (result.isSuccess && result.data) {
                var _result$data$addressF, _result$data$standard, _result$data$geocodeA;
                updateRefValue(addressFields, (_result$data$addressF = result.data.addressFields) !== null && _result$data$addressF !== void 0 ? _result$data$addressF : {});
                standardizeAttemptedResult.value = (_result$data$standard = result.data.standardizeAttemptedResult) !== null && _result$data$standard !== void 0 ? _result$data$standard : "";
                geocodeAttemptedResult.value = (_result$data$geocodeA = result.data.geocodeAttemptedResult) !== null && _result$data$geocodeA !== void 0 ? _result$data$geocodeA : "";
              }
            });
            return _onStandardizeClick.apply(this, arguments);
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$add2, _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$par2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$loc2, _props$modelValue$pri3, _props$modelValue$pri4, _props$modelValue$isG2, _props$modelValue$sof2, _props$modelValue$fir2, _props$modelValue$geo3, _props$modelValue$geo4;
            updateRefValue(addressFields, (_props$modelValue$add2 = props.modelValue.addressFields) !== null && _props$modelValue$add2 !== void 0 ? _props$modelValue$add2 : {});
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(parentLocation, (_props$modelValue$par2 = props.modelValue.parentLocation) !== null && _props$modelValue$par2 !== void 0 ? _props$modelValue$par2 : undefined);
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(locationTypeValue, (_props$modelValue$loc2 = props.modelValue.locationTypeValue) !== null && _props$modelValue$loc2 !== void 0 ? _props$modelValue$loc2 : null);
            updateRefValue(printerDevice, (_props$modelValue$pri3 = (_props$modelValue$pri4 = props.modelValue.printerDevice) === null || _props$modelValue$pri4 === void 0 ? void 0 : _props$modelValue$pri4.value) !== null && _props$modelValue$pri3 !== void 0 ? _props$modelValue$pri3 : "");
            updateRefValue(isGeoPointLocked, (_props$modelValue$isG2 = props.modelValue.isGeoPointLocked) !== null && _props$modelValue$isG2 !== void 0 ? _props$modelValue$isG2 : false);
            updateRefValue(softRoomThreshold, (_props$modelValue$sof2 = props.modelValue.softRoomThreshold) !== null && _props$modelValue$sof2 !== void 0 ? _props$modelValue$sof2 : null);
            updateRefValue(firmRoomThreshold, (_props$modelValue$fir2 = props.modelValue.firmRoomThreshold) !== null && _props$modelValue$fir2 !== void 0 ? _props$modelValue$fir2 : null);
            updateRefValue(geoPointWellKnownText, (_props$modelValue$geo3 = props.modelValue.geoPoint_WellKnownText) !== null && _props$modelValue$geo3 !== void 0 ? _props$modelValue$geo3 : "");
            updateRefValue(geoFenceWellKnownText, (_props$modelValue$geo4 = props.modelValue.geoFence_WellKnownText) !== null && _props$modelValue$geo4 !== void 0 ? _props$modelValue$geo4 : "");
          });
          watch([attributeValues, addressFields, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              addressFields: addressFields.value,
              attributeValues: attributeValues.value,
              isActive: isActive.value,
              name: name.value,
              locationTypeValue: locationTypeValue.value,
              parentLocation: parentLocation.value,
              printerDevice: {
                value: printerDevice.value
              },
              isGeoPointLocked: isGeoPointLocked.value,
              softRoomThreshold: softRoomThreshold.value,
              firmRoomThreshold: firmRoomThreshold.value,
              geoPoint_WellKnownText: geoPointWellKnownText.value,
              geoFence_WellKnownText: geoFenceWellKnownText.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(LocationPicker), {
              modelValue: unref(parentLocation),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(parentLocation) ? parentLocation.value = $event : null),
              label: "Parent Location"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(DefinedValuePicker), {
              modelValue: unref(locationTypeValue),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(locationTypeValue) ? locationTypeValue.value = $event : null),
              label: "Location Type",
              showBlankItem: true,
              definedTypeGuid: unref(DefinedType).LocationType
            }, null, 8, ["modelValue", "definedTypeGuid"]), createVNode(unref(DropDownList), {
              label: "Printer",
              modelValue: unref(printerDevice),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(printerDevice) ? printerDevice.value = $event : null),
              items: unref(printerDeviceOptions),
              help: "The printer that this location should use for printing.",
              showBlankItem: true,
              enhanceForLongLists: false,
              grouped: false,
              multiple: false
            }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"]), createVNode(unref(AddressControl), {
              label: "",
              modelValue: addressFields.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => addressFields.value = $event)
            }, null, 8, ["modelValue"]), unref(standardizationResults) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info",
              innerHTML: unref(standardizationResults)
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
              btnSize: "sm",
              btnType: "action",
              onClick: onStandardizeClick,
              autoDisable: ""
            }, {
              default: withCtx(() => [_hoisted_4$1]),
              _: 1
            }), createVNode(unref(CheckBox), {
              modelValue: unref(isGeoPointLocked),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(isGeoPointLocked) ? isGeoPointLocked.value = $event : null),
              label: "Location Locked",
              help: "Locks the location to prevent verification services (standardization/geocoding) from updating the address or point."
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_5$1, [createElementVNode("div", _hoisted_6, [createVNode(unref(TextBox), {
              label: "Point",
              modelValue: unref(geoPointWellKnownText),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(geoPointWellKnownText) ? geoPointWellKnownText.value = $event : null),
              readonly: ""
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              label: "Geo-Fence",
              modelValue: unref(geoFenceWellKnownText),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(geoFenceWellKnownText) ? geoFenceWellKnownText.value = $event : null),
              readonly: ""
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_7, [createVNode(unref(NumberBox), {
              label: "Threshold",
              modelValue: unref(softRoomThreshold),
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(softRoomThreshold) ? softRoomThreshold.value = $event : null),
              help: "The maximum number of people that room allows before a check-in will require a manager override."
            }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
              label: "Threshold (Absolute)",
              modelValue: unref(firmRoomThreshold),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(firmRoomThreshold) ? firmRoomThreshold.value = $event : null),
              help: "The absolute maximum number of people that room allows. Check-in will not allow check-in after this number of people have checked in."
            }, null, 8, ["modelValue"])])])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/LocationDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-3"
      };
      var _hoisted_3 = {
        class: "col-md-5"
      };
      var _hoisted_4 = {
        class: "col-md-4 location-maps"
      };
      var _hoisted_5 = ["innerHTML"];
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.imageId) {
              valueBuilder.addHtmlValue("", "<img src='/GetImage.ashx?id=".concat(props.modelValue.imageId, "&maxwidth=150&maxheight=150'>"));
            } else {
              valueBuilder.addHtmlValue("", "<img src='/Assets/Images/no-picture.svg?' style='max-width:150px; max-height:150px;'>");
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$par, _props$modelValue$loc, _props$modelValue$pri;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$par = props.modelValue.parentLocation) !== null && _props$modelValue$par !== void 0 && _props$modelValue$par.text) {
              var _props$modelValue$par2;
              valueBuilder.addTextValue("Parent Location", (_props$modelValue$par2 = props.modelValue.parentLocation.text) !== null && _props$modelValue$par2 !== void 0 ? _props$modelValue$par2 : "");
            }
            if ((_props$modelValue$loc = props.modelValue.locationTypeValue) !== null && _props$modelValue$loc !== void 0 && _props$modelValue$loc.text) {
              var _props$modelValue$loc2;
              valueBuilder.addTextValue("Location Type", (_props$modelValue$loc2 = props.modelValue.locationTypeValue.text) !== null && _props$modelValue$loc2 !== void 0 ? _props$modelValue$loc2 : "");
            }
            if ((_props$modelValue$pri = props.modelValue.printerDevice) !== null && _props$modelValue$pri !== void 0 && _props$modelValue$pri.text) {
              var _props$modelValue$pri2;
              valueBuilder.addTextValue("Printer", (_props$modelValue$pri2 = props.modelValue.printerDevice.text) !== null && _props$modelValue$pri2 !== void 0 ? _props$modelValue$pri2 : "");
            }
            if (props.modelValue.softRoomThreshold) {
              var _props$modelValue$sof, _props$modelValue$sof2;
              valueBuilder.addTextValue("Threshold", (_props$modelValue$sof = (_props$modelValue$sof2 = props.modelValue.softRoomThreshold) === null || _props$modelValue$sof2 === void 0 ? void 0 : _props$modelValue$sof2.toString()) !== null && _props$modelValue$sof !== void 0 ? _props$modelValue$sof : "");
            }
            if (props.modelValue.firmRoomThreshold) {
              var _props$modelValue$fir, _props$modelValue$fir2;
              valueBuilder.addTextValue("Threshold (Absolute)", (_props$modelValue$fir = (_props$modelValue$fir2 = props.modelValue.firmRoomThreshold) === null || _props$modelValue$fir2 === void 0 ? void 0 : _props$modelValue$fir2.toString()) !== null && _props$modelValue$fir !== void 0 ? _props$modelValue$fir : "");
            }
            if (props.modelValue.formattedHtmlAddress) {
              var _props$modelValue$for;
              valueBuilder.addHtmlValue("Address", (_props$modelValue$for = props.modelValue.formattedHtmlAddress) !== null && _props$modelValue$for !== void 0 ? _props$modelValue$for : "");
            }
            return valueBuilder.build();
          });
          var locationMapsHtml = computed(() => {
            var mapsHtml = "";
            if (!props.modelValue) {
              return mapsHtml;
            }
            if (props.modelValue.geoPointImageHtml) {
              mapsHtml += props.modelValue.geoPointImageHtml;
            }
            if (props.modelValue.geoFenceImageHtml) {
              mapsHtml += props.modelValue.geoFenceImageHtml;
            }
            return mapsHtml;
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createElementVNode("span", {
              innerHTML: unref(locationMapsHtml)
            }, null, 8, _hoisted_5)])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/LocationDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'locationDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var locationViewBag = ref(config.entity);
          var locationEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "firmRoomThreshold", "imageId", "isActive", "isGeoPointLocked", "locationTypeValue", "name", "parentLocation", "printerDevice", "softRoomThreshold", "addressFields"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(locationEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _locationViewBag$valu, _locationViewBag$valu2;
            return (_locationViewBag$valu = (_locationViewBag$valu2 = locationViewBag.value) === null || _locationViewBag$valu2 === void 0 ? void 0 : _locationViewBag$valu2.name) !== null && _locationViewBag$valu !== void 0 ? _locationViewBag$valu : "";
          });
          var entityKey = computed(() => {
            var _locationViewBag$valu3, _locationViewBag$valu4;
            return (_locationViewBag$valu3 = (_locationViewBag$valu4 = locationViewBag.value) === null || _locationViewBag$valu4 === void 0 ? void 0 : _locationViewBag$valu4.idKey) !== null && _locationViewBag$valu3 !== void 0 ? _locationViewBag$valu3 : "";
          });
          var blockLabels = computed(() => {
            var _locationViewBag$valu5, _locationViewBag$valu6, _locationViewBag$valu7;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_locationViewBag$valu5 = locationViewBag.value) === null || _locationViewBag$valu5 === void 0 ? void 0 : _locationViewBag$valu5.isActive) === true) {
              labels.push({
                iconCssClass: "fa fa-lightbulb",
                title: "Active",
                type: "success"
              });
            } else {
              labels.push({
                iconCssClass: "far fa-lightbulb",
                title: "Inactive",
                type: "danger"
              });
            }
            if ((_locationViewBag$valu6 = locationViewBag.value) !== null && _locationViewBag$valu6 !== void 0 && (_locationViewBag$valu7 = _locationViewBag$valu6.locationTypeValue) !== null && _locationViewBag$valu7 !== void 0 && _locationViewBag$valu7.text) {
              var _locationViewBag$valu8, _locationViewBag$valu9, _locationViewBag$valu10;
              labels.push({
                iconCssClass: "",
                title: (_locationViewBag$valu8 = (_locationViewBag$valu9 = locationViewBag.value) === null || _locationViewBag$valu9 === void 0 ? void 0 : (_locationViewBag$valu10 = _locationViewBag$valu9.locationTypeValue) === null || _locationViewBag$valu10 === void 0 ? void 0 : _locationViewBag$valu10.text) !== null && _locationViewBag$valu8 !== void 0 ? _locationViewBag$valu8 : "",
                type: "default"
              });
            }
            return labels;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _locationEditBag$valu;
              if (!((_locationEditBag$valu = locationEditBag.value) !== null && _locationEditBag$valu !== void 0 && _locationEditBag$valu.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  return config.navigationUrls[NavigationUrlKey.ParentPage];
                }
                return false;
              }
              return true;
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _locationViewBag$valu11;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_locationViewBag$valu11 = locationViewBag.value) === null || _locationViewBag$valu11 === void 0 ? void 0 : _locationViewBag$valu11.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete location.";
                return false;
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _locationViewBag$valu12;
              var result = yield invokeBlockAction("Edit", {
                key: (_locationViewBag$valu12 = locationViewBag.value) === null || _locationViewBag$valu12 === void 0 ? void 0 : _locationViewBag$valu12.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                locationEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
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
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: locationEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  locationViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save location.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified location could not be viewed.";
          } else if (!config.entity.idKey) {
            locationEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning",
              textContent: toDisplayString(blockError.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: "danger",
              textContent: toDisplayString(errorMessage.value)
            }, null, 8, ["textContent"])) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(EntityType).Location,
              entityTypeName: "Location",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: locationViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: locationEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => locationEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/locationDetail.obs";

    })
  };
}));
//# sourceMappingURL=locationDetail.obs.js.map
