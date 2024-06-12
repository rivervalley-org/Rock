System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Controls/fileUploader.obs', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, computed, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CategoryPicker, ComponentPicker, PersonPicker, TextBox, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, BinaryFiletype, FileUploader, toGuidOrNull, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      Fragment = module.Fragment;
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
      CategoryPicker = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
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
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
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
          },
          entityTypeGuid: {
            type: String,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$nam, _props$modelValue$mer, _props$modelValue$tem, _props$modelValue$cat, _props$modelValue$per, _toGuidOrNull;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var mergeTemplateTypeEntityType = propertyRef((_props$modelValue$mer = props.modelValue.mergeTemplateTypeEntityType) !== null && _props$modelValue$mer !== void 0 ? _props$modelValue$mer : null, "MergeTemplateTypeEntityTypeId");
          var templateBinaryFile = propertyRef((_props$modelValue$tem = props.modelValue.templateBinaryFile) !== null && _props$modelValue$tem !== void 0 ? _props$modelValue$tem : null, "TemplateBinaryFileId");
          var category = propertyRef((_props$modelValue$cat = props.modelValue.category) !== null && _props$modelValue$cat !== void 0 ? _props$modelValue$cat : null, "CategoryId");
          var personAlias = propertyRef((_props$modelValue$per = props.modelValue.personAlias) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : undefined, "PersonAliasId");
          var showPersonPicker = ref(props.modelValue.showPersonPicker);
          var showCategory = ref(props.modelValue.showCategoryPicker);
          var entityTypeGuid = ref((_toGuidOrNull = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid);
          var containerType = ref("Rock.MergeTemplates.MergeTemplateTypeContainer");
          var binaryFileTypeGuid = BinaryFiletype.MergeTemplate;
          var warningMessage = ref("");
          var personPickerRules = ref(props.modelValue.isPersonRequired ? "required" : "");
          var propRefs = [description, name, mergeTemplateTypeEntityType, templateBinaryFile, category, personAlias];
          var invokeBlockAction = useInvokeBlockAction();
          watch(() => [templateBinaryFile.value, mergeTemplateTypeEntityType.value], _asyncToGenerator(function* () {
            var _templateBinaryFile$v;
            if ((_templateBinaryFile$v = templateBinaryFile.value) !== null && _templateBinaryFile$v !== void 0 && _templateBinaryFile$v.value) {
              var _mergeTemplateTypeEnt;
              var request = {
                binaryFile: templateBinaryFile.value,
                mergeTemplateTypeGuid: toGuidOrNull(mergeTemplateTypeEntityType === null || mergeTemplateTypeEntityType === void 0 ? void 0 : (_mergeTemplateTypeEnt = mergeTemplateTypeEntityType.value) === null || _mergeTemplateTypeEnt === void 0 ? void 0 : _mergeTemplateTypeEnt.value)
              };
              var response = yield invokeBlockAction("ValidateFile", request);
              if (response.isSuccess && response.data) {
                var _response$data$fileTy, _mergeTemplateTypeEnt2;
                if (!name.value) {
                  var _response$data$fileNa;
                  name.value = (_response$data$fileNa = response.data.fileName) !== null && _response$data$fileNa !== void 0 ? _response$data$fileNa : "";
                }
                warningMessage.value = (_response$data$fileTy = response.data.fileTypeWarningMessage) !== null && _response$data$fileTy !== void 0 ? _response$data$fileTy : "";
                if (!((_mergeTemplateTypeEnt2 = mergeTemplateTypeEntityType.value) !== null && _mergeTemplateTypeEnt2 !== void 0 && _mergeTemplateTypeEnt2.value)) {
                  var _response$data$mergeT;
                  mergeTemplateTypeEntityType.value = (_response$data$mergeT = response.data.mergeTemplateTypeEntityType) !== null && _response$data$mergeT !== void 0 ? _response$data$mergeT : {};
                }
              }
            }
          }));
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$nam2, _props$modelValue$mer2, _props$modelValue$tem2, _props$modelValue$cat2, _props$modelValue$per2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(mergeTemplateTypeEntityType, (_props$modelValue$mer2 = props.modelValue.mergeTemplateTypeEntityType) !== null && _props$modelValue$mer2 !== void 0 ? _props$modelValue$mer2 : null);
            updateRefValue(templateBinaryFile, (_props$modelValue$tem2 = props.modelValue.templateBinaryFile) !== null && _props$modelValue$tem2 !== void 0 ? _props$modelValue$tem2 : null);
            updateRefValue(category, (_props$modelValue$cat2 = props.modelValue.category) !== null && _props$modelValue$cat2 !== void 0 ? _props$modelValue$cat2 : null);
            updateRefValue(personAlias, (_props$modelValue$per2 = props.modelValue.personAlias) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : undefined);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              name: name.value,
              category: category.value,
              mergeTemplateTypeEntityType: mergeTemplateTypeEntityType.value,
              personAlias: personAlias.value,
              templateBinaryFile: templateBinaryFile.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createVNode(unref(ComponentPicker), {
              label: "Type",
              modelValue: unref(mergeTemplateTypeEntityType),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(mergeTemplateTypeEntityType) ? mergeTemplateTypeEntityType.value = $event : null),
              containerType: containerType.value,
              rules: "required"
            }, null, 8, ["modelValue", "containerType"])]), createElementVNode("div", _hoisted_3$1, [warningMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(warningMessage.value), 1)]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(FileUploader), {
              modelValue: unref(templateBinaryFile),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(templateBinaryFile) ? templateBinaryFile.value = $event : null),
              label: "Template File",
              rules: "required",
              binaryFileTypeGuid: unref(binaryFileTypeGuid),
              uploadButtonText: "Upload",
              showDeleteButton: true
            }, null, 8, ["modelValue", "binaryFileTypeGuid"]), showCategory.value ? (openBlock(), createBlock(unref(CategoryPicker), {
              key: 1,
              modelValue: unref(category),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(category) ? category.value = $event : null),
              label: "Category",
              rules: "required",
              entityTypeGuid: entityTypeGuid.value
            }, null, 8, ["modelValue", "entityTypeGuid"])) : createCommentVNode("v-if", true), showPersonPicker.value ? (openBlock(), createBlock(unref(PersonPicker), {
              key: 2,
              rules: personPickerRules.value,
              modelValue: unref(personAlias),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(personAlias) ? personAlias.value = $event : null),
              label: "Person",
              help: "Set this to make it a personal merge template. Leave it blank to make it a global."
            }, null, 8, ["rules", "modelValue"])) : createCommentVNode("v-if", true)])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Reporting/MergeTemplateDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
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
            var _props$modelValue$mer;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.templateBinaryFile) {
              var getFileUrl = "<a href='/GetFile.ashx?guid=".concat(props.modelValue.templateBinaryFile.value, "'>").concat(props.modelValue.templateBinaryFile.text, "</a>");
              valueBuilder.addHtmlValue("Template File", getFileUrl);
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if ((_props$modelValue$mer = props.modelValue.mergeTemplateTypeEntityType) !== null && _props$modelValue$mer !== void 0 && _props$modelValue$mer.text) {
              valueBuilder.addTextValue("Type", props.modelValue.mergeTemplateTypeEntityType.text);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$cat, _props$modelValue$per;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$cat = props.modelValue.category) !== null && _props$modelValue$cat !== void 0 && _props$modelValue$cat.text) {
              valueBuilder.addTextValue("Category", props.modelValue.category.text);
            }
            if ((_props$modelValue$per = props.modelValue.personAlias) !== null && _props$modelValue$per !== void 0 && _props$modelValue$per.text) {
              valueBuilder.addTextValue("Person", props.modelValue.personAlias.text);
            }
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Reporting/MergeTemplateDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'mergeTemplateDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var mergeTemplateViewBag = ref(config.entity);
          var mergeTemplateEditBag = ref({});
          var entityTypeGuid = EntityType.MergeTemplate;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "category", "description", "mergeTemplateTypeEntityType", "name", "personAlias", "templateBinaryFile"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(mergeTemplateEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _mergeTemplateViewBag, _mergeTemplateViewBag2;
            return (_mergeTemplateViewBag = (_mergeTemplateViewBag2 = mergeTemplateViewBag.value) === null || _mergeTemplateViewBag2 === void 0 ? void 0 : _mergeTemplateViewBag2.name) !== null && _mergeTemplateViewBag !== void 0 ? _mergeTemplateViewBag : "";
          });
          var entityKey = computed(() => {
            var _mergeTemplateViewBag3, _mergeTemplateViewBag4;
            return (_mergeTemplateViewBag3 = (_mergeTemplateViewBag4 = mergeTemplateViewBag.value) === null || _mergeTemplateViewBag4 === void 0 ? void 0 : _mergeTemplateViewBag4.idKey) !== null && _mergeTemplateViewBag3 !== void 0 ? _mergeTemplateViewBag3 : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
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
              var _mergeTemplateEditBag;
              if (!((_mergeTemplateEditBag = mergeTemplateEditBag.value) !== null && _mergeTemplateEditBag !== void 0 && _mergeTemplateEditBag.idKey)) {
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
              var _mergeTemplateViewBag5;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_mergeTemplateViewBag5 = mergeTemplateViewBag.value) === null || _mergeTemplateViewBag5 === void 0 ? void 0 : _mergeTemplateViewBag5.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete merge template.";
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
              var _mergeTemplateViewBag6;
              var result = yield invokeBlockAction("Edit", {
                key: (_mergeTemplateViewBag6 = mergeTemplateViewBag.value) === null || _mergeTemplateViewBag6 === void 0 ? void 0 : _mergeTemplateViewBag6.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                mergeTemplateEditBag.value = result.data.entity;
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
                entity: mergeTemplateEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  mergeTemplateViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save merge template.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified merge template could not be viewed.";
          } else if (!config.entity.idKey) {
            mergeTemplateEditBag.value = config.entity;
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
            })) : createCommentVNode("v-if", true), !blockError.value ? (openBlock(), createBlock(unref(DetailBlock), {
              key: 2,
              mode: panelMode.value,
              "onUpdate:mode": _cache[1] || (_cache[1] = $event => panelMode.value = $event),
              name: unref(panelName),
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "MergeTemplate",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: mergeTemplateViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: mergeTemplateEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => mergeTemplateEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged,
                entityTypeGuid: unref(entityTypeGuid)
              }, null, 8, ["modelValue", "options", "entityTypeGuid"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Reporting/mergeTemplateDetail.obs";

    })
  };
}));
//# sourceMappingURL=mergeTemplateDetail.obs.js.map
