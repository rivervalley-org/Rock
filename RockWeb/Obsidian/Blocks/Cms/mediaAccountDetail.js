System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Controls/componentPicker', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, computed, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, ComponentPicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
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
        name: "Cms.MediaAccountDetail.EditPanel",
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
          TextBox,
          ComponentPicker
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$com;
          var emit = _ref.emit;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var componentEntityType = propertyRef((_props$modelValue$com = props.modelValue.componentEntityType) !== null && _props$modelValue$com !== void 0 ? _props$modelValue$com : {}, "ComponentEntityType");
          var propRefs = [isActive, name, componentEntityType];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$com2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(componentEntityType, (_props$modelValue$com2 = props.modelValue.componentEntityType) !== null && _props$modelValue$com2 !== void 0 ? _props$modelValue$com2 : {});
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              isActive: isActive.value,
              name: name.value,
              componentEntityType: componentEntityType.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return {
            attributes,
            attributeValues,
            isActive,
            name,
            componentEntityType,
            containerType: ref("Rock.Media.MediaAccountContainer")
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\"\n                label=\"Active\" />\n        </div>\n    </div>\n<div class=\"well\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ComponentPicker label=\"Component Type\"\n                    v-model=\"componentEntityType\"\n                    :containerType=\"containerType\" />\n        </div>\n    </div>\n    <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :numberOfColumns=\"2\" />\n</div>\n</fieldset>\n"
      });

      var ViewPanel = defineComponent({
        name: "Cms.MediaAccountDetail.ViewPanel",
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
          var leftSideValues = computed(() => {
            var _props$modelValue$com;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$com = props.modelValue.componentEntityType) !== null && _props$modelValue$com !== void 0 && _props$modelValue$com.text) {
              valueBuilder.addTextValue("Status", props.modelValue.componentEntityType.text);
            }
            return valueBuilder.build();
          });
          return {
            attributes,
            attributeValues,
            leftSideValues
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n    </div>\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var mediaAccountDetail = exports('default', defineComponent({
        name: "Cms.MediaAccountDetail",
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
          var mediaAccountViewBag = ref(config.entity);
          var mediaAccountEditBag = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "componentEntityType", "isActive", "name"];
          var qualifiedAttributeProperties = ["componentEntityType"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(mediaAccountEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _mediaAccountViewBag$, _mediaAccountViewBag$2;
            return (_mediaAccountViewBag$ = (_mediaAccountViewBag$2 = mediaAccountViewBag.value) === null || _mediaAccountViewBag$2 === void 0 ? void 0 : _mediaAccountViewBag$2.name) !== null && _mediaAccountViewBag$ !== void 0 ? _mediaAccountViewBag$ : "Media Account";
          });
          var entityKey = computed(() => {
            var _mediaAccountViewBag$3, _mediaAccountViewBag$4;
            return (_mediaAccountViewBag$3 = (_mediaAccountViewBag$4 = mediaAccountViewBag.value) === null || _mediaAccountViewBag$4 === void 0 ? void 0 : _mediaAccountViewBag$4.idKey) !== null && _mediaAccountViewBag$3 !== void 0 ? _mediaAccountViewBag$3 : "";
          });
          var blockLabels = computed(() => {
            var _mediaAccountViewBag$5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return null;
            }
            if (((_mediaAccountViewBag$5 = mediaAccountViewBag.value) === null || _mediaAccountViewBag$5 === void 0 ? void 0 : _mediaAccountViewBag$5.isActive) === true) {
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
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var onCancelEdit = function () {
            var _ref = _asyncToGenerator(function* () {
              var _mediaAccountEditBag$;
              if (!((_mediaAccountEditBag$ = mediaAccountEditBag.value) !== null && _mediaAccountEditBag$ !== void 0 && _mediaAccountEditBag$.idKey)) {
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
              var _mediaAccountViewBag$6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_mediaAccountViewBag$6 = mediaAccountViewBag.value) === null || _mediaAccountViewBag$6 === void 0 ? void 0 : _mediaAccountViewBag$6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete media account.";
                return false;
              }
            });
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var _mediaAccountViewBag$7;
              var result = yield invokeBlockAction("Edit", {
                key: (_mediaAccountViewBag$7 = mediaAccountViewBag.value) === null || _mediaAccountViewBag$7 === void 0 ? void 0 : _mediaAccountViewBag$7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                mediaAccountEditBag.value = result.data.entity;
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
            if (!qualifiedAttributeProperties || !qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          };
          var onSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: mediaAccountEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  mediaAccountViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save media account.";
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
            blockError.value = "The specified media account could not be viewed.";
          } else if (!config.entity.idKey) {
            mediaAccountEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            mediaAccountViewBag,
            mediaAccountEditBag,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.MediaAccount,
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
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\">{{ blockError }}</NotificationBox>\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\">{{ errorMessage }}</NotificationBox>\n\n<DetailBlock v-if=\"!blockError\"\n    v-model:mode=\"panelMode\"\n    :name=\"panelName\"\n    :labels=\"blockLabels\"\n    :entityKey=\"entityKey\"\n    :entityTypeGuid=\"entityTypeGuid\"\n    entityTypeName=\"MediaAccount\"\n    :isAuditHidden=\"false\"\n    :isBadgesVisible=\"true\"\n    :isDeleteVisible=\"isEditable\"\n    :isEditVisible=\"isEditable\"\n    :isFollowVisible=\"false\"\n    :isSecurityHidden=\"true\"\n    @cancelEdit=\"onCancelEdit\"\n    @delete=\"onDelete\"\n    @edit=\"onEdit\"\n    @save=\"onSave\">\n    <template #view>\n        <ViewPanel :modelValue=\"mediaAccountViewBag\" :options=\"options\" />\n    </template>\n\n    <template #edit>\n        <EditPanel v-model=\"mediaAccountEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n    </template>\n</DetailBlock>\n"
      }));

    })
  };
}));
//# sourceMappingURL=mediaAccountDetail.js.map
