System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, computed, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, TextBox, ComponentPicker, EntityTypePicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
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
      computed = module.computed;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
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
      ComponentPicker = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
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
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-3"
      };
      var _hoisted_5 = {
        class: "row"
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$bad, _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$ent3;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var badgeComponentEntityType = propertyRef((_props$modelValue$bad = props.modelValue.badgeComponentEntityType) !== null && _props$modelValue$bad !== void 0 ? _props$modelValue$bad : {}, "BadgeComponentEntityTypeId");
          var containerType = ref("Rock.Badge.BadgeContainer");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var entityTypeQualifierColumn = propertyRef((_props$modelValue$ent2 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "", "EntityTypeQualifierColumn");
          var entityTypeQualifierValue = propertyRef((_props$modelValue$ent3 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "", "EntityTypeQualifierValue");
          var propRefs = [description, isActive, name, badgeComponentEntityType, entityType, entityTypeQualifierColumn, entityTypeQualifierValue];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$bad2, _props$modelValue$ent4, _props$modelValue$ent5, _props$modelValue$ent6;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(badgeComponentEntityType, (_props$modelValue$bad2 = props.modelValue.badgeComponentEntityType) !== null && _props$modelValue$bad2 !== void 0 ? _props$modelValue$bad2 : {});
            updateRefValue(entityType, (_props$modelValue$ent4 = props.modelValue.entityType) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : {});
            updateRefValue(entityTypeQualifierColumn, (_props$modelValue$ent5 = props.modelValue.entityTypeQualifierColumn) !== null && _props$modelValue$ent5 !== void 0 ? _props$modelValue$ent5 : "");
            updateRefValue(entityTypeQualifierValue, (_props$modelValue$ent6 = props.modelValue.entityTypeQualifierValue) !== null && _props$modelValue$ent6 !== void 0 ? _props$modelValue$ent6 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              badgeComponentEntityType: badgeComponentEntityType.value,
              entityType: entityType.value,
              entityTypeQualifierColumn: entityTypeQualifierColumn.value,
              entityTypeQualifierValue: entityTypeQualifierValue.value
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
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4, [createVNode(unref(EntityTypePicker), {
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(entityType) ? entityType.value = $event : null),
              label: "Entity Type",
              multiple: false,
              showBlankItem: "",
              includeGlobalOption: false
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, [createVNode(unref(ComponentPicker), {
              label: "Badge Type",
              rules: "required",
              modelValue: unref(badgeComponentEntityType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(badgeComponentEntityType) ? badgeComponentEntityType.value = $event : null),
              containerType: containerType.value
            }, null, 8, ["modelValue", "containerType"])])]), createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(TextBox), {
              modelValue: unref(entityTypeQualifierColumn),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(entityTypeQualifierColumn) ? entityTypeQualifierColumn.value = $event : null),
              label: "Qualifier Column"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(TextBox), {
              modelValue: unref(entityTypeQualifierValue),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(entityTypeQualifierValue) ? entityTypeQualifierValue.value = $event : null),
              label: "Qualifier Value"
            }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_10, [createElementVNode("div", _hoisted_11, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              showCategoryLabel: false
            }, null, 8, ["modelValue", "attributes"])])])]);
          };
        }
      });

      script$2.__file = "src/Crm/BadgeDetail/editPanel.partial.obs";

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
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$ent;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 && _props$modelValue$ent.text) {
              valueBuilder.addTextValue("Entity Type", props.modelValue.entityType.text);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$modelValue$bad;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if ((_props$modelValue$bad = props.modelValue.badgeComponentEntityType) !== null && _props$modelValue$bad !== void 0 && _props$modelValue$bad.text) {
              valueBuilder.addTextValue("Badge Component Entity Type", props.modelValue.badgeComponentEntityType.text);
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

      script$1.__file = "src/Crm/BadgeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'badgeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var badgeViewBag = ref(config.entity);
          var badgeEditBag = ref({});
          var entityTypeGuid = EntityType.Badge;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "badgeComponentEntityType", "description", "entityType", "entityTypeQualifierColumn", "entityTypeQualifierValue", "isActive", "name"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(badgeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _badgeViewBag$value$n, _badgeViewBag$value;
            return (_badgeViewBag$value$n = (_badgeViewBag$value = badgeViewBag.value) === null || _badgeViewBag$value === void 0 ? void 0 : _badgeViewBag$value.name) !== null && _badgeViewBag$value$n !== void 0 ? _badgeViewBag$value$n : "";
          });
          var entityKey = computed(() => {
            var _badgeViewBag$value$i, _badgeViewBag$value2;
            return (_badgeViewBag$value$i = (_badgeViewBag$value2 = badgeViewBag.value) === null || _badgeViewBag$value2 === void 0 ? void 0 : _badgeViewBag$value2.idKey) !== null && _badgeViewBag$value$i !== void 0 ? _badgeViewBag$value$i : "";
          });
          var blockLabels = computed(() => {
            var _badgeViewBag$value3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_badgeViewBag$value3 = badgeViewBag.value) === null || _badgeViewBag$value3 === void 0 ? void 0 : _badgeViewBag$value3.isActive) === true) {
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
              var _badgeEditBag$value;
              if (!((_badgeEditBag$value = badgeEditBag.value) !== null && _badgeEditBag$value !== void 0 && _badgeEditBag$value.idKey)) {
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
              var _badgeViewBag$value4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_badgeViewBag$value4 = badgeViewBag.value) === null || _badgeViewBag$value4 === void 0 ? void 0 : _badgeViewBag$value4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete badge.";
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
              var _badgeViewBag$value5;
              var result = yield invokeBlockAction("Edit", {
                key: (_badgeViewBag$value5 = badgeViewBag.value) === null || _badgeViewBag$value5 === void 0 ? void 0 : _badgeViewBag$value5.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                badgeEditBag.value = result.data.entity;
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
                entity: badgeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  badgeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save badge.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified badge could not be viewed.";
          } else if (!config.entity.idKey) {
            badgeEditBag.value = config.entity;
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
              entityTypeName: "Badge",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: badgeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: badgeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => badgeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Crm/badgeDetail.obs";

    })
  };
}));
//# sourceMappingURL=badgeDetail.obs.js.map