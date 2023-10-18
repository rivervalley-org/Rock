System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/textBox', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/entityTypePicker', '@Obsidian/Controls/lavaCommandPicker', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/rockDateTime'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, computed, NotificationBox, EntityType, DetailBlock, DetailPanelMode, CheckBox, TextBox, CodeEditor, EntityTypePicker, LavaCommandPicker, NumberBox, DatePicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, RockDateTime;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      LavaCommandPicker = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      RockDateTime = module.RockDateTime;
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
        name: "Cms.PersistedDatasetDetail.EditPanel",
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
          CheckBox,
          TextBox,
          CodeEditor,
          EntityTypePicker,
          LavaCommandPicker,
          NumberBox,
          DatePicker
        },
        emits: {
          "update:modelValue": _value => true,
          "propertyChanged": _value => true
        },
        setup(props, _ref) {
          var _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$acc, _props$modelValue$bui, _props$modelValue$ent, _props$modelValue$ena, _props$modelValue$all, _props$modelValue$exp;
          var emit = _ref.emit;
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var accessKey = propertyRef((_props$modelValue$acc = props.modelValue.accessKey) !== null && _props$modelValue$acc !== void 0 ? _props$modelValue$acc : "", "AccessKey");
          var buildScript = propertyRef((_props$modelValue$bui = props.modelValue.buildScript) !== null && _props$modelValue$bui !== void 0 ? _props$modelValue$bui : "", "BuildScript");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var enabledLavaCommands = ref((_props$modelValue$ena = props.modelValue.enabledLavaCommands) !== null && _props$modelValue$ena !== void 0 ? _props$modelValue$ena : []);
          var allowManualRefresh = propertyRef((_props$modelValue$all = props.modelValue.allowManualRefresh) !== null && _props$modelValue$all !== void 0 ? _props$modelValue$all : false, "AllowManualRefresh");
          var refreshInterval = propertyRef(props.modelValue.refreshIntervalHours, "RefreshIntervalMinutes");
          var memoryCacheDuration = propertyRef(props.modelValue.memoryCacheDurationHours, "MemoryCacheDurationMS");
          var expiresOn = propertyRef((_props$modelValue$exp = props.modelValue.expireDateTime) !== null && _props$modelValue$exp !== void 0 ? _props$modelValue$exp : "", "ExpireDateTime");
          var propRefs = [description, isActive, name, accessKey, buildScript, entityType, allowManualRefresh, refreshInterval, memoryCacheDuration, expiresOn];
          watch(() => props.modelValue, () => {
            var _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$acc2, _props$modelValue$bui2, _props$modelValue$ent2, _props$modelValue$ena2, _props$modelValue$all2, _props$modelValue$exp2;
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(accessKey, (_props$modelValue$acc2 = props.modelValue.accessKey) !== null && _props$modelValue$acc2 !== void 0 ? _props$modelValue$acc2 : "");
            updateRefValue(buildScript, (_props$modelValue$bui2 = props.modelValue.buildScript) !== null && _props$modelValue$bui2 !== void 0 ? _props$modelValue$bui2 : "");
            updateRefValue(entityType, (_props$modelValue$ent2 = props.modelValue.entityType) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : {});
            updateRefValue(enabledLavaCommands, (_props$modelValue$ena2 = props.modelValue.enabledLavaCommands) !== null && _props$modelValue$ena2 !== void 0 ? _props$modelValue$ena2 : []);
            updateRefValue(allowManualRefresh, (_props$modelValue$all2 = props.modelValue.allowManualRefresh) !== null && _props$modelValue$all2 !== void 0 ? _props$modelValue$all2 : false);
            updateRefValue(refreshInterval, props.modelValue.refreshIntervalHours);
            updateRefValue(memoryCacheDuration, props.modelValue.memoryCacheDurationHours);
            updateRefValue(expiresOn, (_props$modelValue$exp2 = props.modelValue.expireDateTime) !== null && _props$modelValue$exp2 !== void 0 ? _props$modelValue$exp2 : "");
          });
          watch([...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              accessKey: accessKey.value,
              buildScript: buildScript.value,
              entityType: entityType.value,
              enabledLavaCommands: enabledLavaCommands.value,
              allowManualRefresh: allowManualRefresh.value,
              refreshIntervalHours: refreshInterval.value,
              memoryCacheDurationHours: memoryCacheDuration.value,
              expireDateTime: expiresOn.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return {
            description,
            isActive,
            name,
            accessKey,
            buildScript,
            entityType,
            enabledLavaCommands,
            allowManualRefresh,
            refreshInterval,
            memoryCacheDuration,
            expiresOn
          };
        },
        template: "\n<fieldset>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <TextBox v-model=\"name\"\n                label=\"Name\"\n                rules=\"required\" />\n\n            <TextBox v-model=\"accessKey\"\n                label=\"Access Key\"\n                rules=\"required\"\n                help=\"The key to use to uniquely identify this dataset. This will be the key to use when using the PersistedDataset lava filter.\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <CheckBox v-model=\"isActive\"\n                help=\"Set this to false to have the PersistedDataset lava filter return null for this dataset, and to exclude this dataset when rebuilding.\"\n                label=\"Active\" />\n        </div>\n    </div>\n\n    <TextBox v-model=\"description\"\n        label=\"Description\"\n        textMode=\"multiline\" />\n\n    <CodeEditor v-model=\"buildScript\"\n        label=\"Build Script\"\n        help=\"Lava Template to use for building JSON that will be used as the cached dataset object.\"\n        theme=\"rock\"\n        mode=\"text\"\n        :editorHeight=\"200\" />\n\n    <LavaCommandPicker v-model=\"enabledLavaCommands\"\n        :multiple=\"true\"\n        label=\"Enabled Lava Commands\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <NumberBox v-model=\"refreshInterval\"\n                label=\"Refresh Interval\"\n                help=\"How often the dataset should be updated by the Update Persisted Dataset job.\"\n                :decimalCount=\"0\"\n                rules=\"required|gte:0\">\n                <template #append>\n                    <span class=\"input-group-addon\">Hour(s)</span>\n                </template>\n            </NumberBox>\n\n            <NumberBox v-model=\"memoryCacheDuration\"\n                label=\"Memory Cache Duration\"\n                help=\"How long the persisted object should be cached in memory. This is a sliding timeline, so each time the object is read the counter will reset. Leave blank to not cache the object in memory which will mean it will be deserialized into the object on each request (still fast).\"\n                :decimalCount=\"0\">\n                <template #append>\n                    <span class=\"input-group-addon\">Hour(s)</span>\n                </template>\n            </NumberBox>\n\n            <DatePicker v-model=\"expiresOn\"\n                label=\"Expires on\"\n                help=\"Set this to consider the dataset inactive after the specified date. This will mean that its value is no longer updated by the refresh job and that it will return empty when requested through Lava.\"\n                :displayCurrentOption=\"false\"\n                :isCurrentDateOffset=\"false\" />\n        </div>\n\n        <div class=\"col-md-4 col-md-offset-6\">\n            <EntityTypePicker v-model=\"entityType\"\n                label=\"Entity Type\"\n                help=\"Set this to indicate which EntityType the JSON object should be associated with. This will be used by the PersistedDataset Lava Filter when entity related options such as 'AppendFollowing' are specified.'\"\n                :multiple=\"false\"\n                :includeGlobalOption=\"false\" />\n\n            <CheckBox v-model=\"allowManualRefresh\"\n                help=\"Determines if the persisted dataset can be manually refreshed in the Persisted Dataset list.\"\n                label=\"Allow Manual Refresh\" />\n        </div>\n    </div>\n\n</fieldset>\n"
      });

      var ViewPanel = defineComponent({
        name: "Cms.PersistedDatasetDetail.ViewPanel",
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
          ValueDetailList
        },
        setup(props) {
          var topValues = computed(() => {
            var _props$modelValue$ent;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Name", props.modelValue.name);
            }
            if (props.modelValue.accessKey) {
              valueBuilder.addTextValue("Access Key", props.modelValue.accessKey);
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if (props.modelValue.enabledLavaCommands) {
              valueBuilder.addTextValue("Enabled Lava Commands", props.modelValue.enabledLavaCommands.map(c => c.text).join(", "));
            }
            if (props.modelValue.refreshIntervalHours) {
              valueBuilder.addTextValue("Refresh Interval", "".concat(props.modelValue.refreshIntervalHours, " hour(s)"));
            }
            if (props.modelValue.memoryCacheDurationHours) {
              valueBuilder.addTextValue("Memory Cache", "".concat(props.modelValue.memoryCacheDurationHours, " hour(s)"));
            }
            if (props.modelValue.expireDateTime) {
              var date = RockDateTime.parseISO(props.modelValue.expireDateTime);
              if (date) {
                valueBuilder.addTextValue("Expires On", date.toString());
              }
            }
            if ((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 && _props$modelValue$ent.text) {
              valueBuilder.addTextValue("Entity Type", props.modelValue.entityType.text);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
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
            leftSideValues,
            rightSideValues,
            topValues
          };
        },
        template: "\n<fieldset>\n\n    <ValueDetailList :modelValue=\"topValues\" />\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"leftSideValues\" />\n        </div>\n\n        <div class=\"col-md-6\">\n            <ValueDetailList :modelValue=\"rightSideValues\" />\n        </div>\n    </div>\n</fieldset>\n"
      });

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var persistedDatasetDetail = exports('default', defineComponent({
        name: "Cms.PersistedDatasetDetail",
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
          var persistedDatasetViewBag = ref(config.entity);
          var persistedDatasetEditBag = ref(null);
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["accessKey", "allowManualRefresh", "buildScript", "description", "enabledLavaCommands", "entityType", "expireDateTime", "isActive", "memoryCacheDurationHours", "name", "refreshIntervalHours"];
          var panelName = computed(() => {
            var _persistedDatasetView, _persistedDatasetView2;
            return (_persistedDatasetView = (_persistedDatasetView2 = persistedDatasetViewBag.value) === null || _persistedDatasetView2 === void 0 ? void 0 : _persistedDatasetView2.name) !== null && _persistedDatasetView !== void 0 ? _persistedDatasetView : "";
          });
          var entityKey = computed(() => {
            var _persistedDatasetView3, _persistedDatasetView4;
            return (_persistedDatasetView3 = (_persistedDatasetView4 = persistedDatasetViewBag.value) === null || _persistedDatasetView4 === void 0 ? void 0 : _persistedDatasetView4.idKey) !== null && _persistedDatasetView3 !== void 0 ? _persistedDatasetView3 : "";
          });
          var blockLabels = computed(() => {
            var _persistedDatasetView5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return null;
            }
            if (((_persistedDatasetView5 = persistedDatasetViewBag.value) === null || _persistedDatasetView5 === void 0 ? void 0 : _persistedDatasetView5.isActive) === true) {
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
              var _persistedDatasetEdit;
              if (!((_persistedDatasetEdit = persistedDatasetEditBag.value) !== null && _persistedDatasetEdit !== void 0 && _persistedDatasetEdit.idKey)) {
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
              var _persistedDatasetView6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_persistedDatasetView6 = persistedDatasetViewBag.value) === null || _persistedDatasetView6 === void 0 ? void 0 : _persistedDatasetView6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete persisted dataset.";
                return false;
              }
            });
            return function onDelete() {
              return _ref2.apply(this, arguments);
            };
          }();
          var onEdit = function () {
            var _ref3 = _asyncToGenerator(function* () {
              var _persistedDatasetView7;
              var result = yield invokeBlockAction("Edit", {
                key: (_persistedDatasetView7 = persistedDatasetViewBag.value) === null || _persistedDatasetView7 === void 0 ? void 0 : _persistedDatasetView7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                persistedDatasetEditBag.value = result.data.entity;
                return true;
              } else {
                return false;
              }
            });
            return function onEdit() {
              return _ref3.apply(this, arguments);
            };
          }();
          var onSave = function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _result$errorMessage2;
              errorMessage.value = "";
              var data = {
                entity: persistedDatasetEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  persistedDatasetViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save persisted dataset.";
              return false;
            });
            return function onSave() {
              return _ref4.apply(this, arguments);
            };
          }();
          var onPropertyChanged = propertyName => {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
          };
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified persisted dataset could not be viewed.";
          } else if (!config.entity.idKey) {
            persistedDatasetEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return {
            persistedDatasetViewBag,
            persistedDatasetEditBag,
            blockError,
            blockLabels,
            entityKey,
            entityTypeGuid: EntityType.PersistedDataset,
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
        template: "\n<NotificationBox v-if=\"blockError\" alertType=\"warning\" v-text=\"blockError\" />\n\n<NotificationBox v-if=\"errorMessage\" alertType=\"danger\" v-text=\"errorMessage\" />\n\n<DetailBlock v-if=\"!blockError\"\n    v-model:mode=\"panelMode\"\n    :name=\"panelName\"\n    :labels=\"blockLabels\"\n    :entityKey=\"entityKey\"\n    :entityTypeGuid=\"entityTypeGuid\"\n    entityTypeName=\"PersistedDataset\"\n    :isAuditHidden=\"false\"\n    :isBadgesVisible=\"true\"\n    :isDeleteVisible=\"isEditable\"\n    :isEditVisible=\"isEditable\"\n    :isFollowVisible=\"false\"\n    :isSecurityHidden=\"false\"\n    @cancelEdit=\"onCancelEdit\"\n    @delete=\"onDelete\"\n    @edit=\"onEdit\"\n    @save=\"onSave\">\n    <template #view>\n        <ViewPanel :modelValue=\"persistedDatasetViewBag\" :options=\"options\" />\n    </template>\n\n    <template #edit>\n        <EditPanel v-model=\"persistedDatasetEditBag\" :options=\"options\" @propertyChanged=\"onPropertyChanged\" />\n    </template>\n</DetailBlock>\n"
      }));

    })
  };
}));
//# sourceMappingURL=persistedDatasetDetail.js.map
