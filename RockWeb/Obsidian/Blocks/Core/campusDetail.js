System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/keyValueList', '@Obsidian/Controls/locationItemPicker', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/textBox', '@Obsidian/Controls/urlLinkBox', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/definedType', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/linq', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, DefinedValuePicker, DropDownList, KeyValueList, LocationPicker, PersonPicker, CheckBox, PhoneNumberBox, TextBox, UrlLinkBox, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, DefinedType, ValueDetailList, ValueDetailListItemBuilder, List, escapeHtml, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
    }, function (module) {
      LocationPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      UrlLinkBox = module["default"];
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
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      List = module.List;
    }, function (module) {
      escapeHtml = module.escapeHtml;
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

      var EditPanel = defineComponent({
        name: "Core.CampusDetail.EditPanel",
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
        components: {
          AttributeValuesContainer,
          CheckBox,
          DefinedValuePicker,
          DropDownList,
          KeyValueList,
          LocationPicker,
          PersonPicker,
          PhoneNumberBox,
          TextBox,
          UrlLinkBox
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$cam, _props$modelValue$cam2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$lea, _props$modelValue$loc, _props$modelValue$nam, _props$modelValue$pho, _props$modelValue$ser, _props$modelValue$sho, _props$modelValue$tim, _props$modelValue$url;
          var emit = _ref.emit;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var campusStatusValue = propertyRef((_props$modelValue$cam = props.modelValue.campusStatusValue) !== null && _props$modelValue$cam !== void 0 ? _props$modelValue$cam : null, "CampusStatusValueId");
          var campusTypeValue = propertyRef((_props$modelValue$cam2 = props.modelValue.campusTypeValue) !== null && _props$modelValue$cam2 !== void 0 ? _props$modelValue$cam2 : null, "CampusTypeValueId");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var leaderPersonAlias = propertyRef((_props$modelValue$lea = props.modelValue.leaderPersonAlias) !== null && _props$modelValue$lea !== void 0 ? _props$modelValue$lea : null, "LeaderPersonAliasId");
          var location = propertyRef((_props$modelValue$loc = props.modelValue.location) !== null && _props$modelValue$loc !== void 0 ? _props$modelValue$loc : null, "LocationId");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var phoneNumber = propertyRef((_props$modelValue$pho = props.modelValue.phoneNumber) !== null && _props$modelValue$pho !== void 0 ? _props$modelValue$pho : "", "PhoneNumber");
          var serviceTimes = propertyRef(((_props$modelValue$ser = props.modelValue.serviceTimes) !== null && _props$modelValue$ser !== void 0 ? _props$modelValue$ser : []).map(s => ({
            key: s.value,
            value: s.text
          })), "ServiceTimes");
          var shortCode = propertyRef((_props$modelValue$sho = props.modelValue.shortCode) !== null && _props$modelValue$sho !== void 0 ? _props$modelValue$sho : "", "ShortCode");
          var timeZoneId = propertyRef((_props$modelValue$tim = props.modelValue.timeZoneId) !== null && _props$modelValue$tim !== void 0 ? _props$modelValue$tim : "", "TimeZoneId");
          var url = propertyRef((_props$modelValue$url = props.modelValue.url) !== null && _props$modelValue$url !== void 0 ? _props$modelValue$url : "", "Url");
          var propRefs = [campusStatusValue, campusTypeValue, description, isActive, leaderPersonAlias, location, name, phoneNumber, serviceTimes, shortCode, timeZoneId, url];
          var isTimeZoneVisible = computed(() => {
            return props.options.isMultiTimeZoneSupported === true;
          });
          var timeZoneOptions = computed(() => {
            var _props$options$timeZo;
            return (_props$options$timeZo = props.options.timeZoneOptions) !== null && _props$options$timeZo !== void 0 ? _props$options$timeZo : [];
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$cam3, _props$modelValue$cam4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$lea2, _props$modelValue$loc2, _props$modelValue$nam2, _props$modelValue$pho2, _props$modelValue$ser2, _props$modelValue$sho2, _props$modelValue$tim2, _props$modelValue$url2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(campusStatusValue, (_props$modelValue$cam3 = props.modelValue.campusStatusValue) !== null && _props$modelValue$cam3 !== void 0 ? _props$modelValue$cam3 : null);
            updateRefValue(campusTypeValue, (_props$modelValue$cam4 = props.modelValue.campusTypeValue) !== null && _props$modelValue$cam4 !== void 0 ? _props$modelValue$cam4 : null);
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(leaderPersonAlias, (_props$modelValue$lea2 = props.modelValue.leaderPersonAlias) !== null && _props$modelValue$lea2 !== void 0 ? _props$modelValue$lea2 : null);
            updateRefValue(location, (_props$modelValue$loc2 = props.modelValue.location) !== null && _props$modelValue$loc2 !== void 0 ? _props$modelValue$loc2 : null);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(phoneNumber, (_props$modelValue$pho2 = props.modelValue.phoneNumber) !== null && _props$modelValue$pho2 !== void 0 ? _props$modelValue$pho2 : "");
            updateRefValue(serviceTimes, ((_props$modelValue$ser2 = props.modelValue.serviceTimes) !== null && _props$modelValue$ser2 !== void 0 ? _props$modelValue$ser2 : []).map(s => ({
              key: s.value,
              value: s.text
            })));
            updateRefValue(shortCode, (_props$modelValue$sho2 = props.modelValue.shortCode) !== null && _props$modelValue$sho2 !== void 0 ? _props$modelValue$sho2 : "");
            updateRefValue(timeZoneId, (_props$modelValue$tim2 = props.modelValue.timeZoneId) !== null && _props$modelValue$tim2 !== void 0 ? _props$modelValue$tim2 : "");
            updateRefValue(url, (_props$modelValue$url2 = props.modelValue.url) !== null && _props$modelValue$url2 !== void 0 ? _props$modelValue$url2 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              campusStatusValue: campusStatusValue.value,
              campusTypeValue: campusTypeValue.value,
              description: description.value,
              isActive: isActive.value,
              leaderPersonAlias: leaderPersonAlias.value,
              location: location.value,
              name: name.value,
              phoneNumber: phoneNumber.value,
              serviceTimes: serviceTimes.value.map(s => {
                var _s$key, _s$value;
                return {
                  value: (_s$key = s.key) !== null && _s$key !== void 0 ? _s$key : "",
                  text: (_s$value = s.value) !== null && _s$value !== void 0 ? _s$value : ""
                };
              }),
              shortCode: shortCode.value,
              timeZoneId: timeZoneId.value,
              url: url.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return {
            attributes,
            attributeValues,
            campusStatusDefinedTypeGuid: DefinedType.CampusStatus,
            campusStatusValue,
            campusTypeDefinedTypeGuid: DefinedType.CampusType,
            campusTypeValue,
            description,
            isActive,
            isTimeZoneVisible,
            leaderPersonAlias,
            location,
            name,
            phoneNumber,
            serviceTimes,
            shortCode,
            timeZoneId,
            timeZoneOptions,
            url
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\"\n                label=\"Active\" />\n        </div>\n    </div>\n\n    <TextBox v-model=\"description\"\n        label=\"Description\"\n        textMode=\"multiline\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <DefinedValuePicker v-model=\"campusStatusValue\"\n                label=\"Status\"\n                :definedTypeGuid=\"campusStatusDefinedTypeGuid\" />\n\n            <TextBox v-model=\"shortCode\"\n                label=\"Code\" />\n\n            <DropDownList v-if=\"isTimeZoneVisible\"\n                v-model=\"timeZoneId\"\n                label=\"Time Zone\"\n                help=\"The time zone you want certain time calculations of the Campus to operate in. Leave this blank to use the default Rock TimeZone.\"\n                :items=\"timeZoneOptions\" />\n\n            <PersonPicker v-model=\"leaderPersonAlias\"\n                label=\"Campus Leader\" />\n\n            <KeyValueList v-model=\"serviceTimes\"\n                label=\"Service Times\"\n                help=\"A list of days and times that this campus has services.\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <DefinedValuePicker v-model=\"campusTypeValue\"\n                label=\"Type\"\n                :definedTypeGuid=\"campusTypeDefinedTypeGuid\" />\n\n            <UrlLinkBox v-model=\"url\"\n                label=\"URL\"\n                requiresTrailingSlash />\n\n            <PhoneNumberBox v-model=\"phoneNumber\"\n                label=\"Phone Number\" />\n\n            <LocationPicker v-model=\"location\"\n                label=\"Location\"\n                help=\"Select a Campus location.\"\n                rules=\"required\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var ViewPanel = defineComponent({
        name: "Core.CampusDetail.ViewPanel",
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
        components: {
          NotificationBox,
          AttributeValuesContainer,
          ValueDetailList
        },
        setup(props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isSystem = computed(() => {
            var _props$modelValue$isS, _props$modelValue3;
            return (_props$modelValue$isS = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isSystem) !== null && _props$modelValue$isS !== void 0 ? _props$modelValue$isS : false;
          });
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$cam, _props$modelValue$lea;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$cam = props.modelValue.campusStatusValue) !== null && _props$modelValue$cam !== void 0 && _props$modelValue$cam.text) {
              valueBuilder.addTextValue("Status", props.modelValue.campusStatusValue.text);
            }
            if (props.modelValue.shortCode) {
              valueBuilder.addTextValue("Code", props.modelValue.shortCode);
            }
            if (props.options.isMultiTimeZoneSupported && props.modelValue.timeZoneId) {
              var _props$options$timeZo, _tz$text;
              var tz = new List((_props$options$timeZo = props.options.timeZoneOptions) !== null && _props$options$timeZo !== void 0 ? _props$options$timeZo : []).where(tz => {
                var _props$modelValue4;
                return tz.value === ((_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.timeZoneId);
              }).firstOrUndefined();
              valueBuilder.addTextValue("Time Zone", tz ? (_tz$text = tz.text) !== null && _tz$text !== void 0 ? _tz$text : "" : props.modelValue.timeZoneId);
            }
            if ((_props$modelValue$lea = props.modelValue.leaderPersonAlias) !== null && _props$modelValue$lea !== void 0 && _props$modelValue$lea.text) {
              valueBuilder.addTextValue("Campus Leader", props.modelValue.leaderPersonAlias.text);
            }
            if (props.modelValue.serviceTimes && props.modelValue.serviceTimes.length > 0) {
              var htmlValue = props.modelValue.serviceTimes.map(s => {
                var _s$value, _s$text;
                return "".concat(escapeHtml((_s$value = s.value) !== null && _s$value !== void 0 ? _s$value : ""), " ").concat(escapeHtml((_s$text = s.text) !== null && _s$text !== void 0 ? _s$text : ""));
              }).join("<br>");
              valueBuilder.addHtmlValue("Service Times", htmlValue);
            }
            if (props.modelValue.campusSchedules && props.modelValue.campusSchedules.length > 0) {
              valueBuilder.addTextValue("Campus Schedules", props.modelValue.campusSchedules.map(s => {
                var _s$schedule$text, _s$schedule;
                return (_s$schedule$text = (_s$schedule = s.schedule) === null || _s$schedule === void 0 ? void 0 : _s$schedule.text) !== null && _s$schedule$text !== void 0 ? _s$schedule$text : "";
              }).join(", "));
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$cam2, _props$modelValue$loc;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$cam2 = props.modelValue.campusTypeValue) !== null && _props$modelValue$cam2 !== void 0 && _props$modelValue$cam2.text) {
              valueBuilder.addTextValue("Type", props.modelValue.campusTypeValue.text);
            }
            if (props.modelValue.url) {
              valueBuilder.addTextValue("URL", props.modelValue.url);
            }
            if (props.modelValue.phoneNumber) {
              valueBuilder.addTextValue("Phone Number", props.modelValue.phoneNumber);
            }
            if ((_props$modelValue$loc = props.modelValue.location) !== null && _props$modelValue$loc !== void 0 && _props$modelValue$loc.text) {
              valueBuilder.addTextValue("Location", props.modelValue.location.text);
            }
            return valueBuilder.build();
          });
          return {
            attributes,
            attributeValues,
            isSystem,
            leftSideValues,
            rightSideValues,
            topValues
          };
        },
        template: "\n<fieldset>\n    <NotificationBox v-if=\"isSystem\" alertType=\"info\">\n        <strong>Note</strong> Because this campus is used by Rock, editing is not enabled.\n    </NotificationBox>\n\n    <ValueDetailList :modelValue=\"topValues\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"rightSideValues\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer :modelValue=\"attributeValues\" :attributes=\"attributes\" :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var campusDetail = exports('default', defineComponent({
        name: "Core.CampusDetail",
        components: {
          NotificationBox,
          EditPanel,
          DetailBlock,
          ViewPanel
        },
        setup() {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var campusViewBag = ref(config.entity);
          var campusEditBag = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "campusSchedules", "campusStatusValue", "campusTypeValue", "description", "isActive", "leaderPersonAlias", "location", "name", "phoneNumber", "serviceTimes", "shortCode", "timeZoneId", "url"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(campusEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _campusViewBag$value$, _campusViewBag$value;
            return (_campusViewBag$value$ = (_campusViewBag$value = campusViewBag.value) === null || _campusViewBag$value === void 0 ? void 0 : _campusViewBag$value.name) !== null && _campusViewBag$value$ !== void 0 ? _campusViewBag$value$ : "";
          });
          var entityKey = computed(() => {
            var _campusViewBag$value$2, _campusViewBag$value2;
            return (_campusViewBag$value$2 = (_campusViewBag$value2 = campusViewBag.value) === null || _campusViewBag$value2 === void 0 ? void 0 : _campusViewBag$value2.idKey) !== null && _campusViewBag$value$2 !== void 0 ? _campusViewBag$value$2 : "";
          });
          var blockLabels = computed(() => {
            var _campusViewBag$value3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return null;
            }
            if (((_campusViewBag$value3 = campusViewBag.value) === null || _campusViewBag$value3 === void 0 ? void 0 : _campusViewBag$value3.isActive) === true) {
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
            return labels;
          });
          var isEditable = computed(() => {
            var _campusViewBag$value4;
            return config.isEditable === true && ((_campusViewBag$value4 = campusViewBag.value) === null || _campusViewBag$value4 === void 0 ? void 0 : _campusViewBag$value4.isSystem) !== true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {
              isMultiTimeZoneSupported: false
            };
          });
          var onCancelEdit = function () {
            var _ref = _asyncToGenerator(function* () {
              var _campusEditBag$value;
              if (!((_campusEditBag$value = campusEditBag.value) !== null && _campusEditBag$value !== void 0 && _campusEditBag$value.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                  return config.navigationUrls[NavigationUrlKey.ParentPage];
                }
                return false;
              }
              return true;
            });
            return function onCancelEdit() {
              return _ref.apply(this, arguments);
            };
          }();
          var onDelete = function () {
            var _ref2 = _asyncToGenerator(function* () {
              var _campusViewBag$value5;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_campusViewBag$value5 = campusViewBag.value) === null || _campusViewBag$value5 === void 0 ? void 0 : _campusViewBag$value5.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete campus.";
                return false;
              }
            });
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var _campusViewBag$value6;
              var result = yield invokeBlockAction("Edit", {
                key: (_campusViewBag$value6 = campusViewBag.value) === null || _campusViewBag$value6 === void 0 ? void 0 : _campusViewBag$value6.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                campusEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return function onEdit() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onPropertyChanged = propertyName => {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          };
          var onSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: campusEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  campusViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save campus.";
              return false;
            });
            return function onSave() {
              return _ref4.apply(this, arguments);
            };
          }();
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified campus could not be viewed.";
          } else if (!config.entity.idKey) {
            campusEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            campusViewBag,
            campusEditBag,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.Campus,
            errorMessage,
            isEditable,
            onCancelEdit,
            onDelete,
            onEdit,
            onPropertyChanged,
            onSave,
            options,
            panelMode,
            panelName
          };
        },
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\">{{ blockError }}</NotificationBox>\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\">{{ errorMessage }}</NotificationBox>\n\n<DetailBlock v-if=\"!blockError\"\n    v-model:mode=\"panelMode\"\n    :name=\"panelName\"\n    :labels=\"blockLabels\"\n    :entityKey=\"entityKey\"\n    :entityTypeGuid=\"entityTypeGuid\"\n    entityTypeName=\"Campus\"\n    :isAuditHidden=\"false\"\n    :isBadgesVisible=\"true\"\n    :isDeleteVisible=\"isEditable\"\n    :isEditVisible=\"isEditable\"\n    :isFollowVisible=\"true\"\n    :isSecurityHidden=\"false\"\n    @cancelEdit=\"onCancelEdit\"\n    @delete=\"onDelete\"\n    @edit=\"onEdit\"\n    @save=\"onSave\">\n    <template #view>\n        <ViewPanel :modelValue=\"campusViewBag\" :options=\"options\" />\n    </template>\n\n    <template #edit>\n        <EditPanel v-model=\"campusEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n    </template>\n</DetailBlock>\n"
      }));

    })
  };
}));
//# sourceMappingURL=campusDetail.js.map
