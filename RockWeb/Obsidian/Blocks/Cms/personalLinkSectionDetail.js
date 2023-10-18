System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/textBox', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, computed, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, TextBox, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      computed = module.computed;
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
      TextBox = module["default"];
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

      var EditPanel = defineComponent({
        name: "Cms.PersonalLinkSectionDetail.EditPanel",
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
          TextBox
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam;
          var emit = _ref.emit;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var propRefs = [name];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nam2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return {
            attributes,
            attributeValues,
            name
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n    </div>\n\n    <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var ViewPanel = defineComponent({
        name: "Cms.PersonalLinkSectionDetail.ViewPanel",
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
          AttributeValuesContainer,
          ValueDetailList
        },
        setup(props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
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
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Name", props.modelValue.name);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          return {
            attributes,
            attributeValues,
            leftSideValues,
            rightSideValues,
            topValues
          };
        },
        template: "\n<fieldset>\n\n    <ValueDetailList :modelValue=\"topValues\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"rightSideValues\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer :modelValue=\"attributeValues\" :attributes=\"attributes\" :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var personalLinkSectionDetail = exports('default', defineComponent({
        name: "Cms.PersonalLinkSectionDetail",
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
          var personalLinkSectionViewBag = ref(config.entity);
          var personalLinkSectionEditBag = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "name"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(personalLinkSectionEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _personalLinkSectionV, _personalLinkSectionV2;
            return (_personalLinkSectionV = (_personalLinkSectionV2 = personalLinkSectionViewBag.value) === null || _personalLinkSectionV2 === void 0 ? void 0 : _personalLinkSectionV2.name) !== null && _personalLinkSectionV !== void 0 ? _personalLinkSectionV : "";
          });
          var entityKey = computed(() => {
            var _personalLinkSectionV3, _personalLinkSectionV4;
            return (_personalLinkSectionV3 = (_personalLinkSectionV4 = personalLinkSectionViewBag.value) === null || _personalLinkSectionV4 === void 0 ? void 0 : _personalLinkSectionV4.idKey) !== null && _personalLinkSectionV3 !== void 0 ? _personalLinkSectionV3 : "";
          });
          var blockLabels = computed(() => {
            var _personalLinkSectionV5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return null;
            }
            if ((_personalLinkSectionV5 = personalLinkSectionViewBag.value) !== null && _personalLinkSectionV5 !== void 0 && _personalLinkSectionV5.isShared) {
              labels.push({
                title: "Shared",
                type: "info"
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
          var onCancelEdit = function () {
            var _ref = _asyncToGenerator(function* () {
              var _personalLinkSectionE;
              if (!((_personalLinkSectionE = personalLinkSectionEditBag.value) !== null && _personalLinkSectionE !== void 0 && _personalLinkSectionE.idKey)) {
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
              var _personalLinkSectionV6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_personalLinkSectionV6 = personalLinkSectionViewBag.value) === null || _personalLinkSectionV6 === void 0 ? void 0 : _personalLinkSectionV6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete personal link section.";
                return false;
              }
            });
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var _personalLinkSectionV7;
              var result = yield invokeBlockAction("Edit", {
                key: (_personalLinkSectionV7 = personalLinkSectionViewBag.value) === null || _personalLinkSectionV7 === void 0 ? void 0 : _personalLinkSectionV7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                personalLinkSectionEditBag.value = result.data.entity;
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
                entity: personalLinkSectionEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  personalLinkSectionViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save personal link section.";
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
            blockError.value = "The specified personal link section could not be viewed.";
          } else if (!config.entity.idKey) {
            personalLinkSectionEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            personalLinkSectionViewBag,
            personalLinkSectionEditBag,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.PersonalLinkSection,
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
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\" v-text=\"blockError\" />\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\" v-text=\"errorMessage\" />\n\n<DetailBlock v-if=\"!blockError\"\n    v-model:mode=\"panelMode\"\n    :name=\"panelName\"\n    :labels=\"blockLabels\"\n    :entityKey=\"entityKey\"\n    :entityTypeGuid=\"entityTypeGuid\"\n    entityTypeName=\"PersonalLinkSection\"\n    :isAuditHidden=\"false\"\n    :isBadgesVisible=\"true\"\n    :isDeleteVisible=\"isEditable\"\n    :isEditVisible=\"isEditable\"\n    :isFollowVisible=\"false\"\n    :isSecurityHidden=\"false\"\n    @cancelEdit=\"onCancelEdit\"\n    @delete=\"onDelete\"\n    @edit=\"onEdit\"\n    @save=\"onSave\">\n    <template #view>\n        <ViewPanel :modelValue=\"personalLinkSectionViewBag\" :options=\"options\" />\n    </template>\n\n    <template #edit>\n        <EditPanel v-model=\"personalLinkSectionEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n    </template>\n</DetailBlock>\n"
      }));

    })
  };
}));
//# sourceMappingURL=personalLinkSectionDetail.js.map
