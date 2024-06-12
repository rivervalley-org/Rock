System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Templates/detailBlock', '@Obsidian/Utility/util', '@Obsidian/Enums/Controls/detailPanelMode'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, createVNode, unref, isRef, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, EntityType, AttributeValuesContainer, CheckBox, TextBox, NumberBox, ComponentPicker, CodeEditor, useInvokeBlockAction, watchPropertyChanges, useConfigurationValues, getSecurityGrant, provideSecurityGrant, propertyRef, updateRefValue, toGuidOrNull, areEqual, emptyGuid, ValueDetailList, ValueDetailListItemBuilder, DetailBlock, debounce, DetailPanelMode;
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
      AttributeValuesContainer = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      getSecurityGrant = module.getSecurityGrant;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      propertyRef = module.propertyRef;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
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
      var script$2 = defineComponent({
        name: 'editPanel.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue", "propertyChanged"],
        setup(__props, _ref) {
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$ent, _props$modelValue$rea, _props$modelValue$rem, _props$modelValue$ent2;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var suggestionType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var reasonNote = propertyRef((_props$modelValue$rea = props.modelValue.reasonNote) !== null && _props$modelValue$rea !== void 0 ? _props$modelValue$rea : "", "ReasonNote");
          var reminderDays = propertyRef((_props$modelValue$rem = props.modelValue.reminderDays) !== null && _props$modelValue$rem !== void 0 ? _props$modelValue$rem : null, "ReminderDays");
          var entityNotificationFormatLava = propertyRef((_props$modelValue$ent2 = props.modelValue.entityNotificationFormatLava) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : "", "EntityNotificationFormatLava");
          var entityAttributes = ref({});
          var invokeBlockAction = useInvokeBlockAction();
          var propRefs = [description, isActive, name, suggestionType, reasonNote, reminderDays, entityNotificationFormatLava];
          var entityTypeName = computed(() => {
            var _suggestionType$value;
            return (_suggestionType$value = suggestionType.value.text) !== null && _suggestionType$value !== void 0 ? _suggestionType$value : "";
          });
          watch(() => suggestionType.value, _asyncToGenerator(function* () {
            var entityTypeGuid = toGuidOrNull(suggestionType.value.value);
            if (!entityTypeGuid || areEqual(entityTypeGuid, emptyGuid)) {
              return;
            }
            var request = {
              entityTypeGuid,
              idKey: props.modelValue.idKey
            };
            var result = yield invokeBlockAction("GetEntityAttributes", request);
            if (result.isSuccess && result.data) {
              var _result$data$attribut, _result$data$attribut2;
              entityAttributes.value = (_result$data$attribut = result.data.attributes) !== null && _result$data$attribut !== void 0 ? _result$data$attribut : {};
              attributeValues.value = (_result$data$attribut2 = result.data.attributeValues) !== null && _result$data$attribut2 !== void 0 ? _result$data$attribut2 : {};
            }
          }), {
            immediate: true
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$ent3, _props$modelValue$rea2, _props$modelValue$rem2, _props$modelValue$ent4;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(suggestionType, (_props$modelValue$ent3 = props.modelValue.entityType) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : {});
            updateRefValue(reasonNote, (_props$modelValue$rea2 = props.modelValue.reasonNote) !== null && _props$modelValue$rea2 !== void 0 ? _props$modelValue$rea2 : "");
            updateRefValue(reminderDays, (_props$modelValue$rem2 = props.modelValue.reminderDays) !== null && _props$modelValue$rem2 !== void 0 ? _props$modelValue$rem2 : null);
            updateRefValue(entityNotificationFormatLava, (_props$modelValue$ent4 = props.modelValue.entityNotificationFormatLava) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : "");
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              entityType: suggestionType.value,
              reasonNote: reasonNote.value,
              reminderDays: reminderDays.value,
              entityNotificationFormatLava: entityNotificationFormatLava.value
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
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(ComponentPicker), {
              modelValue: unref(suggestionType),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(suggestionType) ? suggestionType.value = $event : null),
              label: "Suggestion Type",
              containerType: "Rock.Follow.SuggestionContainer",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: unref(reasonNote),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(reasonNote) ? reasonNote.value = $event : null),
              label: "Reason Note",
              help: "Short note to describe to the recipient why a following was suggested.",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
              modelValue: unref(reminderDays),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(reminderDays) ? reminderDays.value = $event : null),
              label: "Reminded Days",
              help: "The number of days to wait before notifying person of this suggestion again if they have not followed or ignored the suggestion. Leave blank if person should never be reminded."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              showCategoryLabel: false,
              attributes: entityAttributes.value,
              isEditMode: "",
              showEmptyValues: "",
              numberOfColumns: 1,
              entityTypeName: unref(entityTypeName)
            }, null, 8, ["modelValue", "attributes", "entityTypeName"])])]), createVNode(unref(CodeEditor), {
              modelValue: unref(entityNotificationFormatLava),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(entityNotificationFormatLava) ? entityNotificationFormatLava.value = $event : null),
              theme: "rock",
              label: "Notification Format",
              mode: "lava",
              editorHeight: 200,
              help: "How the entity should be formatted in the following suggestion notification email when this suggestion is made for the entity. The entity is available to Lava as an 'Entity' object."
            }, null, 8, ["modelValue"])]);
          };
        }
      });

      script$2.__file = "src/Core/SuggestionDetail/editPanel.partial.obs";

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
          }
        },
        setup(__props) {
          var props = __props;
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
              valueBuilder.addTextValue("Suggestion Type", props.modelValue.entityType.text);
            }
            if (props.modelValue.reasonNote) {
              valueBuilder.addTextValue("Reason Note", props.modelValue.reasonNote);
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
            }, null, 8, ["modelValue"])])])]);
          };
        }
      });

      script$1.__file = "src/Core/SuggestionDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'suggestionDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var suggestionDetailViewBag = ref(config.entity);
          var suggestionDetailEditBag = ref(config.entity);
          var entityTypeGuid = EntityType.FollowingSuggestionType;
          var panelMode = ref(DetailPanelMode.Add);
          var refreshAttributesDebounce = debounce(_asyncToGenerator(function* () {
            var data = {
              entity: suggestionDetailEditBag.value,
              isEditable: true
            };
            var result = yield invokeBlockAction("RefreshAttributes", {
              box: data
            });
            if (result.isSuccess) {
              if (result.statusCode === 200 && result.data && suggestionDetailEditBag.value) {
                var _result$data$entity, _result$data$entity2;
                var newBag = _objectSpread2(_objectSpread2({}, suggestionDetailEditBag.value), {}, {
                  attributes: (_result$data$entity = result.data.entity) === null || _result$data$entity === void 0 ? void 0 : _result$data$entity.attributes,
                  attributeValues: (_result$data$entity2 = result.data.entity) === null || _result$data$entity2 === void 0 ? void 0 : _result$data$entity2.attributeValues
                });
                suggestionDetailEditBag.value = newBag;
              }
            }
          }), undefined, true);
          var panelName = computed(() => {
            var _suggestionDetailEdit, _suggestionDetailEdit2;
            return (_suggestionDetailEdit = (_suggestionDetailEdit2 = suggestionDetailEditBag.value) === null || _suggestionDetailEdit2 === void 0 ? void 0 : _suggestionDetailEdit2.name) !== null && _suggestionDetailEdit !== void 0 ? _suggestionDetailEdit : "";
          });
          var entityKey = computed(() => {
            var _suggestionDetailEdit3, _suggestionDetailEdit4;
            return (_suggestionDetailEdit3 = (_suggestionDetailEdit4 = suggestionDetailEditBag.value) === null || _suggestionDetailEdit4 === void 0 ? void 0 : _suggestionDetailEdit4.idKey) !== null && _suggestionDetailEdit3 !== void 0 ? _suggestionDetailEdit3 : "";
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _config$navigationUrl;
              if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.ParentPage]) {
                return config.navigationUrls[NavigationUrlKey.ParentPage];
              }
              return false;
            });
            return _onCancelEdit.apply(this, arguments);
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
              errorMessage.value = "";
              var data = {
                entity: suggestionDetailEditBag.value,
                isEditable: true
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save following suggestion type.";
                return false;
              }
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified following suggestion type could not be viewed.";
          } else if (!config.isEditable) {
            panelMode.value = DetailPanelMode.View;
          } else if (!config.entity.idKey) {
            suggestionDetailEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          } else {
            panelMode.value = DetailPanelMode.Edit;
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
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "FollowingSuggestionType",
              isAuditHidden: false,
              isBadgesVisible: true,
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: suggestionDetailViewBag.value
              }, null, 8, ["modelValue"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: suggestionDetailEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => suggestionDetailEditBag.value = $event),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["mode", "name", "entityKey", "entityTypeGuid"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/suggestionDetail.obs";

    })
  };
}));
//# sourceMappingURL=suggestionDetail.obs.js.map
