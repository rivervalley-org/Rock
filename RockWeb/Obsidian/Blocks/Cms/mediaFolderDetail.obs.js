System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/switch.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/workflowTypePicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, withCtx, createCommentVNode, Fragment, createBlock, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, TextBox, Switch, DropDownList, RadioButtonList, TransitionVerticalCollapse, WorkflowTypePicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
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
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
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
      Switch = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      WorkflowTypePicker = module["default"];
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
        class: "col-md-12"
      };
      var _hoisted_4 = {
        class: "col-md-4"
      };
      var _hoisted_5 = {
        class: "mt-3"
      };
      var _hoisted_6 = {
        class: "mb-3 galleryContent-reflectionToggle"
      };
      var _hoisted_7 = {
        key: 0
      };
      var _hoisted_8 = {
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$nam, _props$modelValue$isC, _props$modelValue$con, _props$modelValue$con2, _props$options$conten, _props$options$conten2, _props$modelValue$con3, _props$modelValue$con4, _props$modelValue$con5, _props$modelValue$wor;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var isContentChannelSyncEnabled = propertyRef((_props$modelValue$isC = props.modelValue.isContentChannelSyncEnabled) !== null && _props$modelValue$isC !== void 0 ? _props$modelValue$isC : false, "IsContentChannelSyncEnabled");
          var contentChannelValue = propertyRef((_props$modelValue$con = (_props$modelValue$con2 = props.modelValue.contentChannel) === null || _props$modelValue$con2 === void 0 ? void 0 : _props$modelValue$con2.value) !== null && _props$modelValue$con !== void 0 ? _props$modelValue$con : "", "ContentChannelId");
          var contentChannelOptions = ref((_props$options$conten = props.options.contentChannels) !== null && _props$options$conten !== void 0 ? _props$options$conten : []);
          var contentChannelAttributes = ref((_props$options$conten2 = props.options.contentChannelAttributes) !== null && _props$options$conten2 !== void 0 ? _props$options$conten2 : {});
          var contentChannelAttributeValue = propertyRef((_props$modelValue$con3 = (_props$modelValue$con4 = props.modelValue.contentChannelAttribute) === null || _props$modelValue$con4 === void 0 ? void 0 : _props$modelValue$con4.value) !== null && _props$modelValue$con3 !== void 0 ? _props$modelValue$con3 : "", "ContentChannelAttributeId");
          var contentChannelItemStatus = propertyRef((_props$modelValue$con5 = props.modelValue.contentChannelItemStatus) !== null && _props$modelValue$con5 !== void 0 ? _props$modelValue$con5 : "", "ContentChannelItemStatus");
          var workflowType = propertyRef((_props$modelValue$wor = props.modelValue.workflowType) !== null && _props$modelValue$wor !== void 0 ? _props$modelValue$wor : {}, "WorkflowTypeId");
          var propRefs = [description, name, isContentChannelSyncEnabled, contentChannelValue, contentChannelAttributeValue, contentChannelItemStatus, workflowType];
          var channelStatuses = [{
            text: "Pending Approval",
            value: "Pending Approval"
          }, {
            text: "Approved",
            value: "Approved"
          }, {
            text: "Denied",
            value: "Denied"
          }];
          var contentChannelItemAttributes = computed(() => contentChannelAttributes.value[contentChannelValue.value]);
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$nam2, _props$modelValue$isC2, _props$modelValue$con6, _props$modelValue$con7, _props$modelValue$con8, _props$modelValue$con9, _props$modelValue$con10, _props$modelValue$wor2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(isContentChannelSyncEnabled, (_props$modelValue$isC2 = props.modelValue.isContentChannelSyncEnabled) !== null && _props$modelValue$isC2 !== void 0 ? _props$modelValue$isC2 : false);
            updateRefValue(contentChannelValue, (_props$modelValue$con6 = (_props$modelValue$con7 = props.modelValue.contentChannel) === null || _props$modelValue$con7 === void 0 ? void 0 : _props$modelValue$con7.value) !== null && _props$modelValue$con6 !== void 0 ? _props$modelValue$con6 : "");
            updateRefValue(contentChannelAttributeValue, (_props$modelValue$con8 = (_props$modelValue$con9 = props.modelValue.contentChannelAttribute) === null || _props$modelValue$con9 === void 0 ? void 0 : _props$modelValue$con9.value) !== null && _props$modelValue$con8 !== void 0 ? _props$modelValue$con8 : "");
            updateRefValue(contentChannelItemStatus, (_props$modelValue$con10 = props.modelValue.contentChannelItemStatus) !== null && _props$modelValue$con10 !== void 0 ? _props$modelValue$con10 : "");
            updateRefValue(workflowType, (_props$modelValue$wor2 = props.modelValue.workflowType) !== null && _props$modelValue$wor2 !== void 0 ? _props$modelValue$wor2 : {});
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              name: name.value,
              isContentChannelSyncEnabled: isContentChannelSyncEnabled.value,
              contentChannel: {
                value: contentChannelValue.value
              },
              contentChannelItemStatus: contentChannelItemStatus.value,
              contentChannelAttribute: {
                value: contentChannelAttributeValue.value
              },
              workflowType: workflowType.value
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
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(WorkflowTypePicker), {
              modelValue: unref(workflowType),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(workflowType) ? workflowType.value = $event : null),
              label: "Workflow Type",
              help: "The type of workflow to trigger when a new media element is added to this folder."
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createVNode(unref(Switch), {
              modelValue: unref(isContentChannelSyncEnabled),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(isContentChannelSyncEnabled) ? isContentChannelSyncEnabled.value = $event : null),
              text: "Enable Content Channel Sync"
            }, null, 8, ["modelValue"])]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [unref(isContentChannelSyncEnabled) ? (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(DropDownList), {
                modelValue: unref(contentChannelValue),
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(contentChannelValue) ? contentChannelValue.value = $event : null),
                label: "Content Channel",
                items: contentChannelOptions.value,
                help: "The content channel that content channel items will be added to when new media files are created.",
                rules: "required"
              }, null, 8, ["modelValue", "items"]), createVNode(unref(DropDownList), {
                modelValue: unref(contentChannelAttributeValue),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(contentChannelAttributeValue) ? contentChannelAttributeValue.value = $event : null),
                label: "Media File Attribute",
                help: "The attribute that the media will be assigned to. The attribute must be of type 'Media Element'.",
                items: unref(contentChannelItemAttributes),
                rules: "required"
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(RadioButtonList), {
                modelValue: unref(contentChannelItemStatus),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(contentChannelItemStatus) ? contentChannelItemStatus.value = $event : null),
                label: "Content Channel Item Status",
                help: "The status to use for the new content channel items that are created.",
                items: channelStatuses,
                horizontal: "",
                rules: "required"
              }, null, 8, ["modelValue"])])])])) : createCommentVNode("v-if", true)]),
              _: 1
            })]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Cms/MediaFolderDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-sm-6 col-md-7 col-lg-8"
      };
      var _hoisted_3 = {
        class: "col-sm-6 col-md-5 col-lg-4"
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
            var _props$modelValue$med, _props$modelValue$con, _props$modelValue$con3, _props$modelValue$wor;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$med = props.modelValue.mediaAccount) !== null && _props$modelValue$med !== void 0 && _props$modelValue$med.value) {
              var _props$modelValue$med2;
              valueBuilder.addTextValue("Account", (_props$modelValue$med2 = props.modelValue.mediaAccount.text) !== null && _props$modelValue$med2 !== void 0 ? _props$modelValue$med2 : "");
            }
            if ((_props$modelValue$con = props.modelValue.contentChannel) !== null && _props$modelValue$con !== void 0 && _props$modelValue$con.value) {
              var _props$modelValue$con2;
              valueBuilder.addTextValue("Content Channel", (_props$modelValue$con2 = props.modelValue.contentChannel.text) !== null && _props$modelValue$con2 !== void 0 ? _props$modelValue$con2 : "");
            }
            if ((_props$modelValue$con3 = props.modelValue.contentChannelAttribute) !== null && _props$modelValue$con3 !== void 0 && _props$modelValue$con3.value) {
              var _props$modelValue$con4;
              valueBuilder.addTextValue("Content Channel Attribute", (_props$modelValue$con4 = props.modelValue.contentChannelAttribute.text) !== null && _props$modelValue$con4 !== void 0 ? _props$modelValue$con4 : "");
            }
            if (props.modelValue.contentChannelItemStatus) {
              var _props$modelValue$con5;
              valueBuilder.addTextValue("Content Channel Item Status", (_props$modelValue$con5 = props.modelValue.contentChannelItemStatus) !== null && _props$modelValue$con5 !== void 0 ? _props$modelValue$con5 : "");
            }
            if ((_props$modelValue$wor = props.modelValue.workflowType) !== null && _props$modelValue$wor !== void 0 && _props$modelValue$wor.text) {
              var _props$modelValue$wor2, _props$modelValue$wor3;
              valueBuilder.addTextValue("Workflow Type", (_props$modelValue$wor2 = (_props$modelValue$wor3 = props.modelValue.workflowType) === null || _props$modelValue$wor3 === void 0 ? void 0 : _props$modelValue$wor3.text) !== null && _props$modelValue$wor2 !== void 0 ? _props$modelValue$wor2 : "");
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.metricData) {
              valueBuilder.addHtmlValue("", props.modelValue.metricData);
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

      script$1.__file = "src/Cms/MediaFolderDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'mediaFolderDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var mediaFolderViewBag = ref(config.entity);
          var mediaFolderEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "contentChannel", "contentChannelAttribute", "description", "isContentChannelSyncEnabled", "isPublic", "name", "workflowType", "contentChannelItemStatus"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(mediaFolderEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _mediaFolderViewBag$v, _mediaFolderViewBag$v2;
            return (_mediaFolderViewBag$v = (_mediaFolderViewBag$v2 = mediaFolderViewBag.value) === null || _mediaFolderViewBag$v2 === void 0 ? void 0 : _mediaFolderViewBag$v2.name) !== null && _mediaFolderViewBag$v !== void 0 ? _mediaFolderViewBag$v : "";
          });
          var entityKey = computed(() => {
            var _mediaFolderViewBag$v3, _mediaFolderViewBag$v4;
            return (_mediaFolderViewBag$v3 = (_mediaFolderViewBag$v4 = mediaFolderViewBag.value) === null || _mediaFolderViewBag$v4 === void 0 ? void 0 : _mediaFolderViewBag$v4.idKey) !== null && _mediaFolderViewBag$v3 !== void 0 ? _mediaFolderViewBag$v3 : "";
          });
          var blockLabels = computed(() => {
            var _mediaFolderViewBag$v5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if ((_mediaFolderViewBag$v5 = mediaFolderViewBag.value) !== null && _mediaFolderViewBag$v5 !== void 0 && _mediaFolderViewBag$v5.isContentChannelSyncEnabled) {
              labels.push({
                iconCssClass: "fa fa-exchange",
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _mediaFolderEditBag$v;
              if (!((_mediaFolderEditBag$v = mediaFolderEditBag.value) !== null && _mediaFolderEditBag$v !== void 0 && _mediaFolderEditBag$v.idKey)) {
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
              var _mediaFolderViewBag$v6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_mediaFolderViewBag$v6 = mediaFolderViewBag.value) === null || _mediaFolderViewBag$v6 === void 0 ? void 0 : _mediaFolderViewBag$v6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete media folder.";
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
              var _mediaFolderViewBag$v7;
              var result = yield invokeBlockAction("Edit", {
                key: (_mediaFolderViewBag$v7 = mediaFolderViewBag.value) === null || _mediaFolderViewBag$v7 === void 0 ? void 0 : _mediaFolderViewBag$v7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                mediaFolderEditBag.value = result.data.entity;
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
                entity: mediaFolderEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  mediaFolderViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save media folder.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified media folder could not be viewed.";
          } else if (!config.entity.idKey) {
            mediaFolderEditBag.value = config.entity;
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
              entityTypeGuid: unref(EntityType).MediaFolder,
              entityTypeName: unref(panelName),
              isAuditHidden: false,
              isBadgesVisible: false,
              isDeleteVisible: false,
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: mediaFolderViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: mediaFolderEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => mediaFolderEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "entityTypeName", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/mediaFolderDetail.obs";

    })
  };
}));
//# sourceMappingURL=mediaFolderDetail.obs.js.map
