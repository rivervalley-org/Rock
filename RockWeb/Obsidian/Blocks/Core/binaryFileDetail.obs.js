System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/fileUploader.obs', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/auditDetail.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Utility/util', '@Obsidian/Utility/url', '@Obsidian/SystemGuids/entityType'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, isRef, createElementVNode, createBlock, createCommentVNode, computed, createTextVNode, withCtx, createSlots, toDisplayString, NotificationBox, DetailPanelMode, RockButton, RockForm, AttributeValuesContainer, TextBox, FileUploader, BinaryFileTypePicker, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, onConfigurationValuesChanged, useReloadBlock, propertyRef, updateRefValue, BinaryFiletype, toGuidOrNull, ValueDetailList, ValueDetailListItemBuilder, Panel, AuditDetail, Modal, debounce, makeUrlRedirectSafe, EntityType;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createElementVNode = module.createElementVNode;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      createTextVNode = module.createTextVNode;
      withCtx = module.withCtx;
      createSlots = module.createSlots;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
    }, function (module) {
      EntityType = module.EntityType;
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
        class: "col-md-6"
      };
      var _hoisted_3$2 = {
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
          isEditable: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged", "labelFileChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$fil, _props$modelValue$des, _props$modelValue$fil2, _props$modelValue$mim, _props$modelValue$bin, _props$modelValue$wor, _props$modelValue$orp, _toGuidOrNull, _props$modelValue$bin2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var fileName = propertyRef((_props$modelValue$fil = props.modelValue.fileName) !== null && _props$modelValue$fil !== void 0 ? _props$modelValue$fil : "", "FileName");
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var file = ref((_props$modelValue$fil2 = props.modelValue.file) !== null && _props$modelValue$fil2 !== void 0 ? _props$modelValue$fil2 : {});
          var mimeType = propertyRef((_props$modelValue$mim = props.modelValue.mimeType) !== null && _props$modelValue$mim !== void 0 ? _props$modelValue$mim : "", "MimeType");
          var binaryFileType = propertyRef((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 ? _props$modelValue$bin : {}, "BinaryFileTypeId");
          var showBinaryFileType = ref(props.modelValue.showBinaryFileType);
          var workflowNotificationMessage = ref((_props$modelValue$wor = props.modelValue.workflowNotificationMessage) !== null && _props$modelValue$wor !== void 0 ? _props$modelValue$wor : "");
          var orphanedBinaryFileIdList = ref((_props$modelValue$orp = props.modelValue.orphanedBinaryFileIdList) !== null && _props$modelValue$orp !== void 0 ? _props$modelValue$orp : []);
          var binaryFileTypeGuid = ref((_toGuidOrNull = toGuidOrNull((_props$modelValue$bin2 = props.modelValue.binaryFileType) === null || _props$modelValue$bin2 === void 0 ? void 0 : _props$modelValue$bin2.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : BinaryFiletype.Default);
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, fileName, mimeType, binaryFileType];
          watch(() => file.value, _asyncToGenerator(function* () {
            var _props$modelValue$fil3;
            if (file.value && file.value.value !== ((_props$modelValue$fil3 = props.modelValue.file) === null || _props$modelValue$fil3 === void 0 ? void 0 : _props$modelValue$fil3.value)) {
              var result = yield invokeBlockAction("FileUploaded", {
                bag: _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
                  attributeValues: attributeValues.value,
                  description: description.value,
                  fileName: fileName.value,
                  mimeType: mimeType.value,
                  binaryFileType: binaryFileType.value,
                  file: file.value
                })
              });
              if (result.isSuccess && result.data) {
                if (result.data.fileName) {
                  fileName.value = result.data.fileName;
                }
                if (result.data.description) {
                  description.value = result.data.description;
                }
                if (result.data.mimeType) {
                  mimeType.value = result.data.mimeType;
                }
                if (result.data.binaryFileType) {
                  binaryFileType.value = result.data.binaryFileType;
                }
                if (result.data.workflowNotificationMessage) {
                  workflowNotificationMessage.value = result.data.workflowNotificationMessage;
                }
                if (file.value.value) {
                  orphanedBinaryFileIdList.value.push(file.value.value);
                }
                if (result.data.attributes) {
                  attributes.value = result.data.attributes;
                }
                if (result.data.attributeValues) {
                  attributeValues.value = result.data.attributeValues;
                }
                if (result.data.isLabelFile != props.modelValue.isLabelFile) {
                  emit("labelFileChanged", result.data);
                }
              }
            }
          }));
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$fil4, _props$modelValue$mim2, _props$modelValue$bin3, _toGuidOrNull2, _props$modelValue$bin4, _props$modelValue$wor2, _props$modelValue$orp2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(fileName, (_props$modelValue$fil4 = props.modelValue.fileName) !== null && _props$modelValue$fil4 !== void 0 ? _props$modelValue$fil4 : "");
            updateRefValue(mimeType, (_props$modelValue$mim2 = props.modelValue.mimeType) !== null && _props$modelValue$mim2 !== void 0 ? _props$modelValue$mim2 : "");
            updateRefValue(binaryFileType, (_props$modelValue$bin3 = props.modelValue.binaryFileType) !== null && _props$modelValue$bin3 !== void 0 ? _props$modelValue$bin3 : {});
            updateRefValue(binaryFileTypeGuid, (_toGuidOrNull2 = toGuidOrNull((_props$modelValue$bin4 = props.modelValue.binaryFileType) === null || _props$modelValue$bin4 === void 0 ? void 0 : _props$modelValue$bin4.value)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : BinaryFiletype.Default);
            updateRefValue(workflowNotificationMessage, (_props$modelValue$wor2 = props.modelValue.workflowNotificationMessage) !== null && _props$modelValue$wor2 !== void 0 ? _props$modelValue$wor2 : "");
            updateRefValue(orphanedBinaryFileIdList, (_props$modelValue$orp2 = props.modelValue.orphanedBinaryFileIdList) !== null && _props$modelValue$orp2 !== void 0 ? _props$modelValue$orp2 : []);
          });
          watch([attributeValues, file, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              fileName: fileName.value,
              mimeType: mimeType.value,
              binaryFileType: binaryFileType.value,
              file: file.value,
              workflowNotificationMessage: workflowNotificationMessage.value,
              orphanedBinaryFileIdList: orphanedBinaryFileIdList.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(TextBox), {
              modelValue: unref(fileName),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(fileName) ? fileName.value = $event : null),
              label: "File Name",
              rules: "required",
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline",
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"]), createElementVNode("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [workflowNotificationMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info",
              innerHTML: workflowNotificationMessage.value
            }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), __props.isEditable ? (openBlock(), createBlock(unref(FileUploader), {
              key: 1,
              modelValue: file.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => file.value = $event),
              label: "File Uploader",
              uploadButtonText: "Upload",
              uploadAsTemporary: true,
              binaryFileTypeGuid: binaryFileTypeGuid.value,
              showDeleteButton: false
            }, null, 8, ["modelValue", "binaryFileTypeGuid"])) : createCommentVNode("v-if", true), createVNode(unref(TextBox), {
              modelValue: unref(mimeType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(mimeType) ? mimeType.value = $event : null),
              label: "Mime Type",
              rules: "required",
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"]), showBinaryFileType.value ? (openBlock(), createBlock(unref(BinaryFileTypePicker), {
              key: 2,
              modelValue: unref(binaryFileType),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(binaryFileType) ? binaryFileType.value = $event : null),
              disabled: !__props.isEditable
            }, null, 8, ["modelValue", "disabled"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_3$2, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => attributeValues.value = $event),
              showCategoryLabel: !__props.isEditable,
              attributes: attributes.value,
              isEditMode: __props.isEditable,
              numberOfColumns: 1
            }, null, 8, ["modelValue", "showCategoryLabel", "attributes", "isEditMode"])])])]);
          };
        }
      });

      script$2.__file = "src/Core/BinaryFileDetail/editPanel.partial.obs";

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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var _props$modelValue$bin;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.fileName) {
              valueBuilder.addTextValue("File Name", props.modelValue.fileName);
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if (props.modelValue.mimeType) {
              valueBuilder.addTextValue("Mime Type", props.modelValue.mimeType);
            }
            if ((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 && _props$modelValue$bin.text) {
              valueBuilder.addTextValue("Binary File Type", props.modelValue.binaryFileType.text);
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
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(ValueDetailList), {
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

      script$1.__file = "src/Core/BinaryFileDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["EditLabelPage"] = "EditLabelPage";
        return NavigationUrlKey;
      }({});

      var _hoisted_1 = {
        key: 0
      };
      var _hoisted_2 = createTextVNode("Save");
      var _hoisted_3 = {
        key: 1
      };
      var _hoisted_4 = createTextVNode("Edit");
      var _hoisted_5 = createTextVNode("Edit Label Contents");
      var script = exports('default', defineComponent({
        name: 'binaryFileDetail',
        setup(__props) {
          var _config$entity, _binaryFileEditBag$va, _binaryFileEditBag$va2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var isSaving = ref(false);
          var isNavigating = ref(false);
          var submitForm = ref(false);
          var beginRerunWorkflow = ref(false);
          var showAuditDetailsModal = ref(false);
          var resetKey = ref("");
          var binaryFileViewBag = ref(config.entity);
          var binaryFileEditBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var workflowButtonText = ref((_binaryFileEditBag$va = binaryFileEditBag.value.workflowButtonText) !== null && _binaryFileEditBag$va !== void 0 ? _binaryFileEditBag$va : "");
          var isLabelFile = ref(binaryFileEditBag.value.isLabelFile);
          var showWorkflowButton = ref(binaryFileEditBag.value.showWorkflowButton);
          var entityKey = ref((_binaryFileEditBag$va2 = binaryFileEditBag.value.idKey) !== null && _binaryFileEditBag$va2 !== void 0 ? _binaryFileEditBag$va2 : "");
          var panelMode = ref(DetailPanelMode.Edit);
          var validProperties = ["attributeValues", "binaryFileTypeId", "description", "document", "fileName", "mimeType", "file"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(binaryFileEditBag, validProperties, invokeBlockAction), undefined, true);
          var cancelButtonText = computed(() => {
            return config.isEditable === true ? "Cancel" : "Close";
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var panelName = computed(() => {
            if (config.isEditable === true && panelMode.value !== DetailPanelMode.View) {
              var _binaryFileEditBag$va3, _binaryFileEditBag$va4, _binaryFileEditBag$va5;
              var binaryFileTypeName = (_binaryFileEditBag$va3 = (_binaryFileEditBag$va4 = binaryFileEditBag.value) === null || _binaryFileEditBag$va4 === void 0 ? void 0 : (_binaryFileEditBag$va5 = _binaryFileEditBag$va4.binaryFileType) === null || _binaryFileEditBag$va5 === void 0 ? void 0 : _binaryFileEditBag$va5.text) !== null && _binaryFileEditBag$va3 !== void 0 ? _binaryFileEditBag$va3 : "Binary File";
              return panelMode.value == DetailPanelMode.Add ? "Add ".concat(binaryFileTypeName) : "Edit ".concat(binaryFileTypeName);
            } else {
              return "View Binary File";
            }
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          var headerSecondaryActions = computed(() => {
            var actions = [];
            if (binaryFileEditBag.value.idKey) {
              actions.push({
                type: "default",
                title: "Audit Details",
                handler: onAuditClick
              });
            }
            return actions;
          });
          var onAuditClick = () => {
            showAuditDetailsModal.value = true;
          };
          function reRunWorkflow() {
            return _reRunWorkflow.apply(this, arguments);
          }
          function _reRunWorkflow() {
            _reRunWorkflow = _asyncToGenerator(function* () {
              var _binaryFileEditBag$va7;
              if (isEditable.value === true && (_binaryFileEditBag$va7 = binaryFileEditBag.value.file) !== null && _binaryFileEditBag$va7 !== void 0 && _binaryFileEditBag$va7.value) {
                var result = yield invokeBlockAction("RerunWorkflow", {
                  bag: binaryFileEditBag.value
                });
                if (result.isSuccess && result.data) {
                  binaryFileEditBag.value = result.data;
                }
              }
            });
            return _reRunWorkflow.apply(this, arguments);
          }
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _binaryFileEditBag$va8, _config$navigationUrl2;
              isNavigating.value = true;
              yield invokeBlockAction("RemoveOrphanedFiles", {
                orphanedBinaryFileIdList: (_binaryFileEditBag$va8 = binaryFileEditBag.value.orphanedBinaryFileIdList) !== null && _binaryFileEditBag$va8 !== void 0 ? _binaryFileEditBag$va8 : []
              });
              if ((_config$navigationUrl2 = config.navigationUrls) !== null && _config$navigationUrl2 !== void 0 && _config$navigationUrl2[NavigationUrlKey.ParentPage]) {
                window.location.href = makeUrlRedirectSafe(config.navigationUrls[NavigationUrlKey.ParentPage]);
              } else {
                isNavigating.value = false;
              }
            });
            return _onCancelEdit.apply(this, arguments);
          }
          function onLabelFileChanged(bag) {
            isLabelFile.value = bag.isLabelFile;
            if (config.navigationUrls && config.navigationUrls[NavigationUrlKey.EditLabelPage] && bag.idKey) {
              config.navigationUrls[NavigationUrlKey.EditLabelPage] = config.navigationUrls[NavigationUrlKey.EditLabelPage].replace("((Key))", bag.idKey);
            }
          }
          function onPropertyChanged(propertyName) {
            if (!config.qualifiedAttributeProperties || !config.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _binaryFileViewBag$va;
              var result = yield invokeBlockAction("Edit", {
                key: (_binaryFileViewBag$va = binaryFileViewBag.value) === null || _binaryFileViewBag$va === void 0 ? void 0 : _binaryFileViewBag$va.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                binaryFileEditBag.value = result.data.entity;
                panelMode.value = DetailPanelMode.Edit;
              }
            });
            return _onEdit.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              if (beginRerunWorkflow.value) {
                yield reRunWorkflow();
                beginRerunWorkflow.value = false;
              } else {
                errorMessage.value = "";
                isSaving.value = true;
                var data = {
                  entity: binaryFileEditBag.value,
                  isEditable: true,
                  validProperties: validProperties
                };
                var result = yield invokeBlockAction("Save", {
                  box: data
                });
                if (result.isSuccess && result.data) {
                  window.location.href = makeUrlRedirectSafe(result.data);
                } else {
                  var _result$errorMessage;
                  isSaving.value = false;
                  errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save binary file.";
                }
              }
            });
            return _onSave.apply(this, arguments);
          }
          function onEditLabelClick() {
            var _binaryFileEditBag$va6;
            if (isEditable.value === true && (_binaryFileEditBag$va6 = binaryFileEditBag.value.file) !== null && _binaryFileEditBag$va6 !== void 0 && _binaryFileEditBag$va6.value) {
              var _config$navigationUrl;
              if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.EditLabelPage]) {
                window.location.href = makeUrlRedirectSafe(config.navigationUrls[NavigationUrlKey.EditLabelPage]);
              }
            }
          }
          var onSaveClick = () => {
            beginRerunWorkflow.value = false;
            submitForm.value = true;
          };
          var onRerunWorkflowClick = () => {
            beginRerunWorkflow.value = true;
            submitForm.value = true;
          };
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified binary file could not be viewed.";
          } else if (!config.entity.idKey) {
            binaryFileEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockForm), {
              submit: submitForm.value,
              "onUpdate:submit": _cache[3] || (_cache[3] = $event => submitForm.value = $event),
              onSubmit: onSave,
              formResetKey: resetKey.value
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                title: unref(panelName),
                headerSecondaryActions: unref(headerSecondaryActions),
                type: "block"
              }, createSlots({
                default: withCtx(() => [blockError.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "warning",
                  innerHTML: blockError.value
                }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 1,
                  alertType: "danger",
                  innerHTML: errorMessage.value
                }, null, 8, ["innerHTML"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(script$1), {
                  key: 2,
                  modelValue: binaryFileViewBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => binaryFileViewBag.value = $event),
                  options: unref(options)
                }, null, 8, ["modelValue", "options"])) : (openBlock(), createBlock(unref(script$2), {
                  key: 3,
                  modelValue: binaryFileEditBag.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => binaryFileEditBag.value = $event),
                  options: unref(options),
                  isEditable: unref(isEditable),
                  onPropertyChanged: onPropertyChanged,
                  onLabelFileChanged: onLabelFileChanged
                }, null, 8, ["modelValue", "options", "isEditable"])), createVNode(unref(Modal), {
                  modelValue: showAuditDetailsModal.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => showAuditDetailsModal.value = $event),
                  title: "Audit Details"
                }, {
                  default: withCtx(() => [createVNode(unref(AuditDetail), {
                    entityTypeGuid: unref(EntityType).BinaryFile,
                    entityKey: entityKey.value
                  }, null, 8, ["entityTypeGuid", "entityKey"])]),
                  _: 1
                }, 8, ["modelValue"])]),
                footerActions: withCtx(() => [panelMode.value !== unref(DetailPanelMode).View ? (openBlock(), createElementBlock("div", _hoisted_1, [unref(isEditable) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnType: "primary",
                  disabled: isSaving.value,
                  onClick: onSaveClick
                }, {
                  default: withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["disabled"])) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                  btnType: "link",
                  onClick: onCancelEdit
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(cancelButtonText)), 1)]),
                  _: 1
                })])) : (openBlock(), createElementBlock("div", _hoisted_3, [unref(isEditable) ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnType: "primary",
                  onClick: onEdit
                }, {
                  default: withCtx(() => [_hoisted_4]),
                  _: 1
                })) : createCommentVNode("v-if", true)]))]),
                _: 2
              }, [panelMode.value !== unref(DetailPanelMode).View ? {
                name: "footerSecondaryActions",
                fn: withCtx(() => [isLabelFile.value ? (openBlock(), createBlock(unref(RockButton), {
                  key: 0,
                  btnType: "default",
                  onClick: onEditLabelClick
                }, {
                  default: withCtx(() => [_hoisted_5]),
                  _: 1
                })) : createCommentVNode("v-if", true), showWorkflowButton.value ? (openBlock(), createBlock(unref(RockButton), {
                  key: 1,
                  btnType: "default",
                  onClick: onRerunWorkflowClick
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(workflowButtonText.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true)])
              } : undefined]), 1032, ["title", "headerSecondaryActions"])]),
              _: 1
            }, 8, ["submit", "formResetKey"]);
          };
        }
      }));

      script.__file = "src/Core/binaryFileDetail.obs";

    })
  };
}));
//# sourceMappingURL=binaryFileDetail.obs.js.map
