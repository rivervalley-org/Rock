System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, computed, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, NumberBox, CheckBox, TextBox, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      NumberBox = module["default"];
    }, function (module) {
      CheckBox = module["default"];
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
        name: "Crm.AssessmentTypeDetail.EditPanel",
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
          NumberBox
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$tit, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$ass, _props$modelValue$ass2, _props$modelValue$min, _props$modelValue$req;
          var emit = _ref.emit;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var title = propertyRef((_props$modelValue$tit = props.modelValue.title) !== null && _props$modelValue$tit !== void 0 ? _props$modelValue$tit : "", "Title");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var assessmentPath = propertyRef((_props$modelValue$ass = props.modelValue.assessmentPath) !== null && _props$modelValue$ass !== void 0 ? _props$modelValue$ass : "", "AssessmentPath");
          var assessmentResultsPath = propertyRef((_props$modelValue$ass2 = props.modelValue.assessmentResultsPath) !== null && _props$modelValue$ass2 !== void 0 ? _props$modelValue$ass2 : "", "AssessmentResultsPath");
          var minimumDaysToRetake = propertyRef((_props$modelValue$min = props.modelValue.minimumDaysToRetake) !== null && _props$modelValue$min !== void 0 ? _props$modelValue$min : "", "MinimumDaysToRetake");
          var requiresRequest = propertyRef((_props$modelValue$req = props.modelValue.requiresRequest) !== null && _props$modelValue$req !== void 0 ? _props$modelValue$req : false, "RequiresRequest");
          var propRefs = [title, description, isActive, assessmentPath, assessmentResultsPath, minimumDaysToRetake, requiresRequest];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$tit2, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$ass3, _props$modelValue$ass4, _props$modelValue$min2, _props$modelValue$req2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(title, (_props$modelValue$tit2 = props.modelValue.title) !== null && _props$modelValue$tit2 !== void 0 ? _props$modelValue$tit2 : "");
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(assessmentPath, (_props$modelValue$ass3 = props.modelValue.assessmentPath) !== null && _props$modelValue$ass3 !== void 0 ? _props$modelValue$ass3 : "");
            updateRefValue(assessmentResultsPath, (_props$modelValue$ass4 = props.modelValue.assessmentResultsPath) !== null && _props$modelValue$ass4 !== void 0 ? _props$modelValue$ass4 : "");
            updateRefValue(minimumDaysToRetake, (_props$modelValue$min2 = props.modelValue.minimumDaysToRetake) !== null && _props$modelValue$min2 !== void 0 ? _props$modelValue$min2 : "");
            updateRefValue(requiresRequest, (_props$modelValue$req2 = props.modelValue.requiresRequest) !== null && _props$modelValue$req2 !== void 0 ? _props$modelValue$req2 : false);
          });
          watch([...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              title: title.value,
              description: description.value,
              isActive: isActive.value,
              assessmentPath: assessmentPath.value,
              assessmentResultsPath: assessmentResultsPath.value,
              minimumDaysToRetake: minimumDaysToRetake.value,
              requiresRequest: requiresRequest.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return {
            attributes,
            attributeValues,
            title,
            description,
            isActive,
            assessmentPath,
            assessmentResultsPath,
            minimumDaysToRetake,
            requiresRequest
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"title\" label=\"Title\" rules=\"required\" />\n        </div>\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\" label=\"Active\" />\n        </div>\n    </div>\n\n    <TextBox v-model=\"description\" label=\"Description\" textMode=\"multiline\" />\n\n    <TextBox v-model=\"assessmentPath\" label=\"Assessment Path\" rules=\"required\" />\n\n    <TextBox v-model=\"assessmentResultsPath\" label=\"Assessment Results Path Path\" rules=\"required\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <NumberBox v-model=\"minimumDaysToRetake\" label=\"Minimum Days To Retake\" help=\"The minimum number of days after the test has been taken before it can be taken again.\" />\n        </div>\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"requiresRequest\" label=\"Requires Request\" help=\"Is a person required to receive a request before this test can be taken?\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var ViewPanel = defineComponent({
        name: "Crm.AssessmentTypeDetail.ViewPanel",
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
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.requiresRequest) {
              valueBuilder.addTextValue("Requires Request", props.modelValue.requiresRequest ? "True" : "False");
            }
            if (props.modelValue.minimumDaysToRetake) {
              valueBuilder.addTextValue("Minimum Days To Retake", props.modelValue.minimumDaysToRetake.toString());
            }
            if (props.modelValue.validDuration) {
              valueBuilder.addTextValue("Valid Duration", props.modelValue.validDuration.toString());
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
        template: "\n<fieldset>\n    <ValueDetailList :modelValue=\"topValues\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"rightSideValues\" />\n        </div>\n    </div>\n\n    <AttributeValuesContainer :modelValue=\"attributeValues\" :attributes=\"attributes\" :numberOfColumns=\"2\" />\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var assessmentTypeDetail = exports('default', defineComponent({
        name: "Crm.AssessmentTypeDetail",
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
          var assessmentTypeViewBag = ref(config.entity);
          var assessmentTypeEditBag = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["assessmentPath", "assessmentResultsPath", "description", "isActive", "minimumDaysToRetake", "requiresRequest", "title"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(assessmentTypeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _assessmentTypeViewBa, _assessmentTypeViewBa2;
            return (_assessmentTypeViewBa = (_assessmentTypeViewBa2 = assessmentTypeViewBag.value) === null || _assessmentTypeViewBa2 === void 0 ? void 0 : _assessmentTypeViewBa2.title) !== null && _assessmentTypeViewBa !== void 0 ? _assessmentTypeViewBa : "";
          });
          var entityKey = computed(() => {
            var _assessmentTypeViewBa3, _assessmentTypeViewBa4;
            return (_assessmentTypeViewBa3 = (_assessmentTypeViewBa4 = assessmentTypeViewBag.value) === null || _assessmentTypeViewBa4 === void 0 ? void 0 : _assessmentTypeViewBa4.idKey) !== null && _assessmentTypeViewBa3 !== void 0 ? _assessmentTypeViewBa3 : "";
          });
          var blockLabels = computed(() => {
            var _assessmentTypeViewBa5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return null;
            }
            if (((_assessmentTypeViewBa5 = assessmentTypeViewBag.value) === null || _assessmentTypeViewBa5 === void 0 ? void 0 : _assessmentTypeViewBa5.isActive) === true) {
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
              var _assessmentTypeEditBa;
              if (!((_assessmentTypeEditBa = assessmentTypeEditBag.value) !== null && _assessmentTypeEditBa !== void 0 && _assessmentTypeEditBa.idKey)) {
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
              var _assessmentTypeViewBa6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_assessmentTypeViewBa6 = assessmentTypeViewBag.value) === null || _assessmentTypeViewBa6 === void 0 ? void 0 : _assessmentTypeViewBa6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete assessment type.";
                return false;
              }
            });
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var _assessmentTypeViewBa7;
              var result = yield invokeBlockAction("Edit", {
                key: (_assessmentTypeViewBa7 = assessmentTypeViewBag.value) === null || _assessmentTypeViewBa7 === void 0 ? void 0 : _assessmentTypeViewBa7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                assessmentTypeEditBag.value = result.data.entity;
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
                entity: assessmentTypeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  assessmentTypeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save assessment type.";
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
            blockError.value = "The specified assessment type could not be viewed.";
          } else if (!config.entity.idKey) {
            assessmentTypeEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            assessmentTypeViewBag,
            assessmentTypeEditBag,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.AssessmentType,
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
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\" v-text=\"blockError\" />\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\" v-text=\"errorMessage\" />\n\n<DetailBlock v-if=\"!blockError\"\n    v-model:mode=\"panelMode\"\n    :name=\"panelName\"\n    :labels=\"blockLabels\"\n    :entityKey=\"entityKey\"\n    :entityTypeGuid=\"entityTypeGuid\"\n    entityTypeName=\"AssessmentType\"\n    :isAuditHidden=\"false\"\n    :isBadgesVisible=\"true\"\n    :isDeleteVisible=\"isEditable\"\n    :isEditVisible=\"isEditable\"\n    :isFollowVisible=\"false\"\n    :isSecurityHidden=\"false\"\n    @cancelEdit=\"onCancelEdit\"\n    @delete=\"onDelete\"\n    @edit=\"onEdit\"\n    @save=\"onSave\">\n    <template #view>\n        <ViewPanel :modelValue=\"assessmentTypeViewBag\" :options=\"options\" />\n    </template>\n\n    <template #edit>\n        <EditPanel v-model=\"assessmentTypeEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n    </template>\n</DetailBlock>\n"
      }));

    })
  };
}));
//# sourceMappingURL=assessmentTypeDetail.js.map
