System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, computed, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, createBlock, createCommentVNode, Fragment, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ComponentPicker, CodeEditor, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      Fragment = module.Fragment;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
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
      ComponentPicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
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
        class: "col-md-12"
      };
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        class: "row"
      };
      var _hoisted_10 = {
        class: "col-md-12"
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
          var _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$att, _props$modelValue, _props$modelValue$ent, _props$modelValue2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = computed(() => {
            if (!props.modelValue.attributes) {
              return {};
            }
            var attributes = props.modelValue.attributes;
            delete attributes["Active"];
            delete attributes["Order"];
            return attributes;
          });
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var attributeValues = propertyRef((_props$modelValue$att = props.modelValue.attributeValues) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {}, "AttributeValues");
          var isNoticeRequired = propertyRef(props.modelValue.isNoticeRequired, "IsNoticeRequired");
          var sendOnFriday = propertyRef(!props.modelValue.sendOnWeekends, "SendOnWeekends");
          var entityType = propertyRef(props.modelValue.entityType, "EntityTypeId");
          var includeNonPublicRequests = propertyRef((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.includeNonPublicRequests, "IncludeNonPublicRequests");
          var entityNotificationFormatLava = propertyRef((_props$modelValue$ent = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.entityNotificationFormatLava) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : "", "EntityNotificationFormatLava");
          var containerType = ref("Rock.Follow.EventContainer");
          var propRefs = [description, isActive, name, isNoticeRequired, sendOnFriday, entityType, entityNotificationFormatLava, includeNonPublicRequests];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att2, _props$modelValue$att3, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$ent2, _props$modelValue3, _props$modelValue4;
            updateRefValue(attributes, (_props$modelValue$att2 = props.modelValue.attributes) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
            updateRefValue(attributeValues, (_props$modelValue$att3 = props.modelValue.attributeValues) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(isNoticeRequired, props.modelValue.isNoticeRequired);
            updateRefValue(sendOnFriday, !props.modelValue.sendOnWeekends);
            updateRefValue(entityType, props.modelValue.entityType);
            updateRefValue(entityNotificationFormatLava, (_props$modelValue$ent2 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.entityNotificationFormatLava) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "");
            updateRefValue(includeNonPublicRequests, (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.includeNonPublicRequests);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              isNoticeRequired: isNoticeRequired.value,
              sendOnWeekends: !sendOnFriday.value,
              entityType: entityType.value,
              entityNotificationFormatLava: entityNotificationFormatLava.value,
              includeNonPublicRequests: includeNonPublicRequests.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _unref2, _unref2$value;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(ComponentPicker), {
              label: "Event Type",
              rules: "required",
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(entityType) ? entityType.value = $event : null),
              containerType: containerType.value
            }, null, 8, ["modelValue", "containerType"]), createVNode(unref(CheckBox), {
              modelValue: unref(isNoticeRequired),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(isNoticeRequired) ? isNoticeRequired.value = $event : null),
              label: "Notice Required",
              help: "Select this option to force user to get notified of this event for people they follow. Unselect this option if users should be able to decide whether to get notified or not."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(sendOnFriday),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(sendOnFriday) ? sendOnFriday.value = $event : null),
              label: "Send Weekend Notices on Friday",
              help: "Should any notices that would normally be sent on a weekend be sent on preceding Friday instead?"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_8, [((_unref2 = unref(entityType)) === null || _unref2 === void 0 ? void 0 : (_unref2$value = _unref2.value) === null || _unref2$value === void 0 ? void 0 : _unref2$value.toUpperCase()) == unref(EntityType).PersonPrayerRequest ? (openBlock(), createBlock(unref(CheckBox), {
              key: 0,
              modelValue: unref(includeNonPublicRequests),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(includeNonPublicRequests) ? includeNonPublicRequests.value = $event : null),
              label: "Include Non-Public Requests"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(AttributeValuesContainer), {
              modelValue: unref(attributeValues),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(attributeValues) ? attributeValues.value = $event : null),
              showCategoryLabel: "",
              attributes: unref(attributes),
              isEditMode: ""
            }, null, 8, ["modelValue", "attributes"])])]), createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, [createVNode(unref(CodeEditor), {
              modelValue: unref(entityNotificationFormatLava),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(entityNotificationFormatLava) ? entityNotificationFormatLava.value = $event : null),
              label: "Notification Format",
              theme: "rock",
              mode: "lava",
              editorHeight: 200,
              help: "How the entity should be formatted in the following event notification email when this event occurs for the entity. The entity is available to Lava as an 'Entity' object."
            }, null, 8, ["modelValue"])])])]);
          };
        }
      });

      script$2.__file = "src/Core/FollowingEventTypeDetail/editPanel.partial.obs";

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
          var _props$modelValue$att, _props$modelValue2;
          var props = __props;
          var attributes = computed(() => {
            var _props$modelValue;
            if (!((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 && _props$modelValue.attributes)) {
              return {};
            }
            var attributes = props.modelValue.attributes;
            delete attributes["Active"];
            delete attributes["Order"];
            return attributes;
          });
          var attributeValues = ref((_props$modelValue$att = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$ent3, _props$modelValue$ent4;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addTextValue("Event Type", (_props$modelValue$ent = (_props$modelValue$ent2 = props.modelValue.entityType) === null || _props$modelValue$ent2 === void 0 ? void 0 : _props$modelValue$ent2.text) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : "");
            valueBuilder.addTextValue("Require Notification", props.modelValue.isNoticeRequired ? "Yes" : "No");
            valueBuilder.addTextValue("Send Weekend Notices on Friday", !props.modelValue.sendOnWeekends ? "Yes" : "No");
            if (((_props$modelValue$ent3 = props.modelValue.entityType) === null || _props$modelValue$ent3 === void 0 ? void 0 : (_props$modelValue$ent4 = _props$modelValue$ent3.value) === null || _props$modelValue$ent4 === void 0 ? void 0 : _props$modelValue$ent4.toUpperCase()) == EntityType.PersonPrayerRequest) {
              valueBuilder.addTextValue("Include Non-Public Requests", props.modelValue.includeNonPublicRequests ? "Yes" : "No");
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
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: unref(attributes),
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/FollowingEventTypeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'followingEventTypeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var followingEventTypeViewBag = ref(config.entity);
          var followingEventTypeEditBag = ref(config.entity);
          var entityTypeGuid = EntityType.FollowingEventType;
          var panelMode = ref(config.isEditable ? DetailPanelMode.Edit : DetailPanelMode.View);
          var validProperties = ["attributeValues", "description", "entityNotificationFormatLava", "entityType", "followedEntityType", "followedEntityTypeId", "includeNonPublicRequests", "isActive", "isNoticeRequired", "lastCheckDateTime", "name", "order", "sendOnWeekends"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(followingEventTypeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _config$entity$name, _config$entity;
            return (_config$entity$name = (_config$entity = config.entity) === null || _config$entity === void 0 ? void 0 : _config$entity.name) !== null && _config$entity$name !== void 0 ? _config$entity$name : "";
          });
          var entityKey = computed(() => {
            var _followingEventTypeVi, _followingEventTypeVi2;
            return (_followingEventTypeVi = (_followingEventTypeVi2 = followingEventTypeViewBag.value) === null || _followingEventTypeVi2 === void 0 ? void 0 : _followingEventTypeVi2.idKey) !== null && _followingEventTypeVi !== void 0 ? _followingEventTypeVi : "";
          });
          var blockLabels = computed(() => {
            var _followingEventTypeVi3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return labels;
            }
            if (((_followingEventTypeVi3 = followingEventTypeViewBag.value) === null || _followingEventTypeVi3 === void 0 ? void 0 : _followingEventTypeVi3.isActive) === true) {
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _followingEventTypeEd;
              if (!((_followingEventTypeEd = followingEventTypeEditBag.value) !== null && _followingEventTypeEd !== void 0 && _followingEventTypeEd.idKey)) {
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
              var _followingEventTypeVi4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_followingEventTypeVi4 = followingEventTypeViewBag.value) === null || _followingEventTypeVi4 === void 0 ? void 0 : _followingEventTypeVi4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete following event type.";
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
              var _followingEventTypeVi5;
              var result = yield invokeBlockAction("Edit", {
                key: (_followingEventTypeVi5 = followingEventTypeViewBag.value) === null || _followingEventTypeVi5 === void 0 ? void 0 : _followingEventTypeVi5.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                followingEventTypeEditBag.value = result.data.entity;
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
                entity: followingEventTypeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if ((result.statusCode === 200 || result.statusCode === 201) && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save following event type.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified following event type could not be viewed.";
          } else if (!config.entity.idKey) {
            followingEventTypeEditBag.value = config.entity;
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
              entityTypeName: "FollowingEventType",
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
                modelValue: followingEventTypeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: followingEventTypeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => followingEventTypeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/followingEventTypeDetail.obs";

    })
  };
}));
//# sourceMappingURL=followingEventTypeDetail.obs.js.map
