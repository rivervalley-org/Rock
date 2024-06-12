System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, withCtx, createCommentVNode, computed, Fragment, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, TextBox, EntityTypePicker, CheckBox, NumberBox, BinaryFileTypePicker, CodeEditor, RockButton, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
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
      TextBox = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      RockButton = module["default"];
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

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = {
        class: "row"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
        class: "row"
      };
      var _hoisted_11 = {
        class: "col-md-6"
      };
      var _hoisted_12 = {
        class: "row"
      };
      var _hoisted_13 = {
        class: "col-sm-12 text-right"
      };
      var _hoisted_14 = createTextVNode(" Show Advanced Settings ");
      var _hoisted_15 = createTextVNode(" Hide Advanced Settings ");
      var _hoisted_16 = {
        key: 0,
        class: "well"
      };
      var _hoisted_17 = {
        class: "row"
      };
      var _hoisted_18 = {
        class: "col-md-6"
      };
      var _hoisted_19 = {
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
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam, _props$modelValue$ent, _props$modelValue$use, _props$modelValue$max, _props$modelValue$bin, _props$modelValue$isI, _props$modelValue$ico, _props$modelValue$ent2, _props$modelValue$ent3, _props$modelValue$def;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var isUserSelectable = propertyRef((_props$modelValue$use = props.modelValue.userSelectable) !== null && _props$modelValue$use !== void 0 ? _props$modelValue$use : "", "UserSelectable");
          var maxDocsPerEntity = propertyRef((_props$modelValue$max = props.modelValue.maxDocumentsPerEntity) !== null && _props$modelValue$max !== void 0 ? _props$modelValue$max : null, "MaxDocsPerEntity");
          var fileType = propertyRef((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 ? _props$modelValue$bin : null, "FileType");
          var isImage = propertyRef((_props$modelValue$isI = props.modelValue.isImage) !== null && _props$modelValue$isI !== void 0 ? _props$modelValue$isI : false, "IsImage");
          var iconCssClass = propertyRef((_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "", "IconCssClass");
          var showAdvanced = ref(false);
          var entityQualifierColumn = propertyRef((_props$modelValue$ent2 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "", "EntityTypeQualifierColumn");
          var entityQualifierValue = propertyRef((_props$modelValue$ent3 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "", "EntityTypeQualifierValue");
          var defaultDocumentNameTemplate = propertyRef((_props$modelValue$def = props.modelValue.defaultDocumentNameTemplate) !== null && _props$modelValue$def !== void 0 ? _props$modelValue$def : "", "DefaultDocumentNameTemplate");
          var propRefs = [name, entityType, isUserSelectable, maxDocsPerEntity, fileType, isImage, iconCssClass, entityQualifierColumn, entityQualifierValue, defaultDocumentNameTemplate];
          function onShowAdvanced(show) {
            showAdvanced.value = show;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nam2, _props$modelValue$bin2, _props$modelValue$ent4, _props$modelValue$ico2, _props$modelValue$max2, _props$modelValue$ent5, _props$modelValue$ent6, _props$modelValue$def2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(fileType, (_props$modelValue$bin2 = props.modelValue.binaryFileType) !== null && _props$modelValue$bin2 !== void 0 ? _props$modelValue$bin2 : null);
            updateRefValue(entityType, (_props$modelValue$ent4 = props.modelValue.entityType) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : {});
            updateRefValue(isImage, props.modelValue.isImage);
            updateRefValue(isUserSelectable, props.modelValue.userSelectable);
            updateRefValue(iconCssClass, (_props$modelValue$ico2 = props.modelValue.iconCssClass) !== null && _props$modelValue$ico2 !== void 0 ? _props$modelValue$ico2 : "");
            updateRefValue(maxDocsPerEntity, (_props$modelValue$max2 = props.modelValue.maxDocumentsPerEntity) !== null && _props$modelValue$max2 !== void 0 ? _props$modelValue$max2 : null);
            updateRefValue(entityQualifierColumn, (_props$modelValue$ent5 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent5 !== void 0 ? _props$modelValue$ent5 : "");
            updateRefValue(entityQualifierValue, (_props$modelValue$ent6 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent6 !== void 0 ? _props$modelValue$ent6 : "");
            updateRefValue(defaultDocumentNameTemplate, (_props$modelValue$def2 = props.modelValue.defaultDocumentNameTemplate) !== null && _props$modelValue$def2 !== void 0 ? _props$modelValue$def2 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value,
              binaryFileType: fileType.value,
              entityType: entityType.value,
              isImage: isImage.value,
              userSelectable: isUserSelectable.value,
              iconCssClass: iconCssClass.value,
              maxDocumentsPerEntity: maxDocsPerEntity.value,
              entityTypeQualifierColumn: entityQualifierColumn.value,
              entityTypeQualifierValue: entityQualifierValue.value,
              defaultDocumentNameTemplate: defaultDocumentNameTemplate.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _component_TransitionVerticalCollapse = resolveComponent("TransitionVerticalCollapse");
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(BinaryFileTypePicker), {
              modelValue: unref(fileType),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(fileType) ? fileType.value = $event : null),
              label: "File Type",
              showBlankItem: true,
              rules: "required"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(EntityTypePicker), {
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(entityType) ? entityType.value = $event : null),
              label: "Entity Type",
              rules: "required",
              multiple: false,
              includeGlobalOption: false,
              enhanceForLongLists: ""
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(CheckBox), {
              modelValue: unref(isImage),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(isImage) ? isImage.value = $event : null),
              label: "Is Image"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(CheckBox), {
              modelValue: unref(isUserSelectable),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isUserSelectable) ? isUserSelectable.value = $event : null),
              label: "Manually Selectable",
              help: "Checking this box will allow this Document Type as an option when manually adding/editing documents for the entity."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(TextBox), {
              modelValue: unref(iconCssClass),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(iconCssClass) ? iconCssClass.value = $event : null),
              label: "Icon CSS Class"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createVNode(unref(NumberBox), {
              modelValue: unref(maxDocsPerEntity),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(maxDocsPerEntity) ? maxDocsPerEntity.value = $event : null),
              label: "Max Documents Per Entity",
              numberType: "Integer",
              help: "This would limit the number of the documents of that type per entity. A blank value means no limit."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_12, [createElementVNode("div", _hoisted_13, [!showAdvanced.value ? (openBlock(), createBlock(unref(RockButton), {
              key: 0,
              btnType: "link",
              onClick: _cache[7] || (_cache[7] = $event => onShowAdvanced(true))
            }, {
              default: withCtx(() => [_hoisted_14]),
              _: 1
            })) : createCommentVNode("v-if", true), showAdvanced.value ? (openBlock(), createBlock(unref(RockButton), {
              key: 1,
              btnType: "link",
              onClick: _cache[8] || (_cache[8] = $event => onShowAdvanced(false))
            }, {
              default: withCtx(() => [_hoisted_15]),
              _: 1
            })) : createCommentVNode("v-if", true)])]), createVNode(_component_TransitionVerticalCollapse, null, {
              default: withCtx(() => [showAdvanced.value ? (openBlock(), createElementBlock("div", _hoisted_16, [createElementVNode("div", _hoisted_17, [createElementVNode("div", _hoisted_18, [createVNode(unref(TextBox), {
                modelValue: unref(entityQualifierColumn),
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(entityQualifierColumn) ? entityQualifierColumn.value = $event : null),
                label: "Entity Qualifier Column",
                help: "If you would like the document type to only apply to specific entities of the specified type you can provide a column to filter on for that entity. For example if you would like the documents to be specific to a group of a certain type the �Column� would be �GroupTypeId�. You�ll also need to provide a Entity Qualifer Value."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_19, [createVNode(unref(TextBox), {
                modelValue: unref(entityQualifierValue),
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(entityQualifierValue) ? entityQualifierValue.value = $event : null),
                label: "Entity Qualifier Value",
                help: "Once you provide a Entity Qualifer Column, you�ll need to provide the value in that column to filter on. In the example of groups of a certain type, the value would be the Group Type Id to filter on (e.g. 12)."
              }, null, 8, ["modelValue"])])]), createVNode(unref(CodeEditor), {
                modelValue: unref(defaultDocumentNameTemplate),
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(defaultDocumentNameTemplate) ? defaultDocumentNameTemplate.value = $event : null),
                label: "Default Document Name Template",
                help: "This template is used to dynamically build the document's name. The available merge fields are NickName, LastName, DocumentPurposeKey, and DocumentTypeName. <span class='tip tip-lava'></span>",
                theme: "rock",
                mode: "lava",
                editorHeight: 200
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Crm/DocumentTypeDetail/editPanel.partial.obs";

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
            var _props$modelValue$bin, _props$modelValue$bin2, _props$modelValue$ent, _props$modelValue$ent2;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addTextValue("File Type", (_props$modelValue$bin = (_props$modelValue$bin2 = props.modelValue.binaryFileType) === null || _props$modelValue$bin2 === void 0 ? void 0 : _props$modelValue$bin2.text) !== null && _props$modelValue$bin !== void 0 ? _props$modelValue$bin : "");
            valueBuilder.addTextValue("Entity Type", (_props$modelValue$ent = (_props$modelValue$ent2 = props.modelValue.entityType) === null || _props$modelValue$ent2 === void 0 ? void 0 : _props$modelValue$ent2.text) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : "");
            if (props.modelValue.entityTypeQualifierColumn) {
              var _props$modelValue$ent3;
              valueBuilder.addTextValue("Qualifier Column", (_props$modelValue$ent3 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "");
            }
            if (props.modelValue.entityTypeQualifierValue) {
              var _props$modelValue$ent4;
              valueBuilder.addTextValue("Qualifier Value", (_props$modelValue$ent4 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : "");
            }
            valueBuilder.addTextValue("Manually Selectable", props.modelValue.userSelectable ? "Yes" : "No");
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
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

      script$1.__file = "src/Crm/DocumentTypeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'documentTypeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var documentTypeViewBag = ref(config.entity);
          var documentTypeEditBag = ref({});
          var entityTypeGuid = EntityType.DocumentType;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "binaryFileType", "defaultDocumentNameTemplate", "entityType", "entityTypeQualifierColumn", "entityTypeQualifierValue", "iconCssClass", "isImage", "maxDocumentsPerEntity", "name", "userSelectable"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(documentTypeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _documentTypeViewBag$, _documentTypeViewBag$2;
            return (_documentTypeViewBag$ = (_documentTypeViewBag$2 = documentTypeViewBag.value) === null || _documentTypeViewBag$2 === void 0 ? void 0 : _documentTypeViewBag$2.name) !== null && _documentTypeViewBag$ !== void 0 ? _documentTypeViewBag$ : "";
          });
          var entityKey = computed(() => {
            var _documentTypeViewBag$3, _documentTypeViewBag$4;
            return (_documentTypeViewBag$3 = (_documentTypeViewBag$4 = documentTypeViewBag.value) === null || _documentTypeViewBag$4 === void 0 ? void 0 : _documentTypeViewBag$4.idKey) !== null && _documentTypeViewBag$3 !== void 0 ? _documentTypeViewBag$3 : "";
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
              var _documentTypeEditBag$;
              if (!((_documentTypeEditBag$ = documentTypeEditBag.value) !== null && _documentTypeEditBag$ !== void 0 && _documentTypeEditBag$.idKey)) {
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
              var _documentTypeViewBag$5;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_documentTypeViewBag$5 = documentTypeViewBag.value) === null || _documentTypeViewBag$5 === void 0 ? void 0 : _documentTypeViewBag$5.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete document type.";
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
              var _documentTypeViewBag$6;
              var result = yield invokeBlockAction("Edit", {
                key: (_documentTypeViewBag$6 = documentTypeViewBag.value) === null || _documentTypeViewBag$6 === void 0 ? void 0 : _documentTypeViewBag$6.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                documentTypeEditBag.value = result.data.entity;
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
                entity: documentTypeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  documentTypeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save document type.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified document type could not be viewed.";
          } else if (!config.entity.idKey) {
            documentTypeEditBag.value = config.entity;
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
              entityTypeName: "DocumentType",
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
                modelValue: documentTypeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: documentTypeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => documentTypeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Crm/documentTypeDetail.obs";

    })
  };
}));
//# sourceMappingURL=documentTypeDetail.obs.js.map
