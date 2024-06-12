System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/colorPicker.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Enums/Core/noteFormatType', '@Obsidian/Utility/enumUtils', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createVNode, unref, isRef, createBlock, toDisplayString, createCommentVNode, withCtx, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, DropDownList, TextBox, EntityTypePicker, ColorPicker, CheckBox, NumberBox, BinaryFileTypePicker, TransitionVerticalCollapse, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, NoteFormatType, NoteFormatTypeDescription, enumToListItemBag, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
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
      DropDownList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
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
      NoteFormatType = module.NoteFormatType;
      NoteFormatTypeDescription = module.NoteFormatTypeDescription;
    }, function (module) {
      enumToListItemBag = module.enumToListItemBag;
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
        key: 1,
        class: "form-group static-control"
      };
      var _hoisted_4 = createElementVNode("label", {
        class: "control-label"
      }, "Entity Type", -1);
      var _hoisted_5 = {
        class: "control-wrapper"
      };
      var _hoisted_6 = {
        class: "form-control-static"
      };
      var _hoisted_7 = createTextVNode(" Once you change a note type to the Structured format, it cannot be changed back. Be sure this is what you want to do. ");
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        key: 0
      };
      var _hoisted_10 = {
        key: 0
      };
      var _hoisted_11 = {
        key: 0
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nam, _props$modelValue$ent, _props$modelValue$ico, _props$modelValue$col, _props$modelValue$bin;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var entityType = propertyRef((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : {}, "EntityTypeId");
          var iconCssClass = propertyRef((_props$modelValue$ico = props.modelValue.iconCssClass) !== null && _props$modelValue$ico !== void 0 ? _props$modelValue$ico : "", "IconCssClass");
          var color = propertyRef((_props$modelValue$col = props.modelValue.color) !== null && _props$modelValue$col !== void 0 ? _props$modelValue$col : "", "Color");
          var userSelectable = propertyRef(props.modelValue.userSelectable, "UserSelectable");
          var allowsWatching = propertyRef(props.modelValue.allowsWatching, "AllowsWatching");
          var autoWatchAuthors = propertyRef(props.modelValue.autoWatchAuthors, "AutoWatchAuthors");
          var allowsReplies = propertyRef(props.modelValue.allowsReplies, "AllowsReplies");
          var maxReplyDepth = propertyRef(props.modelValue.maxReplyDepth, "MaxReplyDepth");
          var allowsAttachments = propertyRef(props.modelValue.allowsAttachments, "AllowsAttachments");
          var binaryFileType = propertyRef((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 ? _props$modelValue$bin : {}, "BinaryFileTypeId");
          var formatType = propertyRef(props.modelValue.formatType.toString(), "FormatType");
          var isMentionEnabled = propertyRef(props.modelValue.isMentionEnabled, "IsMentionEnabled");
          var showEntityTypePicker = ref(props.modelValue.showEntityTypePicker);
          var showContentFormatDropdown = ref(props.modelValue.formatType !== NoteFormatType.Structured);
          var propRefs = [name, entityType, iconCssClass, color, userSelectable, allowsWatching, autoWatchAuthors, allowsReplies, maxReplyDepth, allowsAttachments, binaryFileType, formatType, isMentionEnabled];
          var formatTypeItems = enumToListItemBag(NoteFormatTypeDescription);
          var isChangingToStructuredFormat = computed(() => {
            return showContentFormatDropdown.value && formatType.value === NoteFormatType.Structured.toString();
          });
          var showEnableMentions = computed(() => {
            return showContentFormatDropdown.value && (formatType.value === NoteFormatType.Structured.toString() || formatType.value === NoteFormatType.Unknown.toString());
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nam2, _props$modelValue$ent2, _props$modelValue$ico2, _props$modelValue$col2, _props$modelValue$bin2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(entityType, (_props$modelValue$ent2 = props.modelValue.entityType) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : {});
            updateRefValue(iconCssClass, (_props$modelValue$ico2 = props.modelValue.iconCssClass) !== null && _props$modelValue$ico2 !== void 0 ? _props$modelValue$ico2 : "");
            updateRefValue(color, (_props$modelValue$col2 = props.modelValue.color) !== null && _props$modelValue$col2 !== void 0 ? _props$modelValue$col2 : "");
            updateRefValue(userSelectable, props.modelValue.userSelectable);
            updateRefValue(allowsWatching, props.modelValue.allowsWatching);
            updateRefValue(maxReplyDepth, props.modelValue.maxReplyDepth);
            updateRefValue(allowsAttachments, props.modelValue.allowsAttachments);
            updateRefValue(binaryFileType, (_props$modelValue$bin2 = props.modelValue.binaryFileType) !== null && _props$modelValue$bin2 !== void 0 ? _props$modelValue$bin2 : {});
            updateRefValue(formatType, props.modelValue.formatType.toString());
            updateRefValue(isMentionEnabled, props.modelValue.isMentionEnabled);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              name: name.value,
              entityType: entityType.value,
              iconCssClass: iconCssClass.value,
              color: color.value,
              userSelectable: userSelectable.value,
              allowsWatching: allowsWatching.value,
              autoWatchAuthors: autoWatchAuthors.value,
              allowsReplies: allowsReplies.value,
              maxReplyDepth: maxReplyDepth.value,
              allowsAttachments: allowsAttachments.value,
              binaryFileType: binaryFileType.value,
              formatType: parseInt(formatType.value),
              isMentionEnabled: isMentionEnabled.value
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
            }, null, 8, ["modelValue"]), showEntityTypePicker.value ? (openBlock(), createBlock(unref(EntityTypePicker), {
              key: 0,
              modelValue: unref(entityType),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(entityType) ? entityType.value = $event : null),
              label: "Entity Type",
              rules: "required",
              multiple: false,
              includeGlobalOption: false
            }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [_hoisted_4, createElementVNode("div", _hoisted_5, [createElementVNode("div", _hoisted_6, toDisplayString(unref(entityType).text), 1)])])), createVNode(unref(TextBox), {
              modelValue: unref(iconCssClass),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(iconCssClass) ? iconCssClass.value = $event : null),
              label: "Icon CSS Class"
            }, null, 8, ["modelValue"]), createVNode(unref(ColorPicker), {
              modelValue: unref(color),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(color) ? color.value = $event : null),
              label: "Color",
              help: "The base color to use for notes of this type. The background and foreground colors will be automatically calculated from this color."
            }, null, 8, ["modelValue"]), showContentFormatDropdown.value ? (openBlock(), createBlock(unref(DropDownList), {
              key: 2,
              modelValue: unref(formatType),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(formatType) ? formatType.value = $event : null),
              label: "Content Format",
              help: "Structured format provides additional features and is the default for all new note types. Unstructured is a legacy format that is not checked for correctness and will be removed in the future.",
              items: unref(formatTypeItems),
              showBlankItem: true
            }, null, 8, ["modelValue", "items"])) : createCommentVNode("v-if", true), unref(isChangingToStructuredFormat) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 3,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_7]),
              _: 1
            })) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_8, [createVNode(unref(CheckBox), {
              modelValue: unref(userSelectable),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(userSelectable) ? userSelectable.value = $event : null),
              label: "User Selectable",
              text: "Yes"
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(allowsWatching),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(allowsWatching) ? allowsWatching.value = $event : null),
              label: "Allows Watching",
              text: "Yes",
              help: "If enabled, an option to watch individual notes will appear, and note watch notifications will be sent on watched notes."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(autoWatchAuthors),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(autoWatchAuthors) ? autoWatchAuthors.value = $event : null),
              label: "Auto Watch Authors",
              text: "Yes",
              help: "If enabled, the author of a note will get notifications for direct replies to the note. In other words, a 'watch' will be automatically enabled on the note."
            }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
              modelValue: unref(allowsReplies),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(allowsReplies) ? allowsReplies.value = $event : null),
              label: "Allow Replies",
              text: "Yes"
            }, null, 8, ["modelValue"]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [unref(allowsReplies) ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(unref(NumberBox), {
                label: "Max Reply Depth",
                class: "input-width-sm",
                modelValue: unref(maxReplyDepth),
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isRef(maxReplyDepth) ? maxReplyDepth.value = $event : null)
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createVNode(unref(CheckBox), {
              modelValue: unref(allowsAttachments),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(allowsAttachments) ? allowsAttachments.value = $event : null),
              label: "Allows Attachments",
              text: "Yes",
              help: "If enabled, then this note type will allow attachments. However, not all UI components will currently allow file uploads."
            }, null, 8, ["modelValue"]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [unref(allowsAttachments) ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(unref(BinaryFileTypePicker), {
                modelValue: unref(binaryFileType),
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(binaryFileType) ? binaryFileType.value = $event : null),
                label: "Attachment File Type",
                help: "When a file is attached to a note, it will be stored using this file type.",
                rules: "required"
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), unref(showEnableMentions) ? (openBlock(), createBlock(unref(TransitionVerticalCollapse), {
              key: 0
            }, {
              default: withCtx(() => [unref(showEnableMentions) ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(unref(CheckBox), {
                modelValue: unref(isMentionEnabled),
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(isMentionEnabled) ? isMentionEnabled.value = $event : null),
                label: "Enable Mentions",
                text: "Yes",
                help: "Mentions allow a person to be mentioned in the text of a note. Once saved the mentioned person will be notified."
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)]),
              _: 1
            })) : createCommentVNode("v-if", true)])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/NoteTypeDetail/editPanel.partial.obs";

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
            var _props$modelValue$ent, _props$modelValue$bin;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.name) {
              valueBuilder.addTextValue("Name", props.modelValue.name);
            }
            if ((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 && _props$modelValue$ent.text) {
              valueBuilder.addTextValue("Entity Type", props.modelValue.entityType.text);
            }
            if (props.modelValue.iconCssClass) {
              valueBuilder.addTextValue("Icon CSS Class", props.modelValue.iconCssClass);
            }
            if (props.modelValue.maxReplyDepth) {
              valueBuilder.addTextValue("Max Reply Depth", props.modelValue.maxReplyDepth.toString());
            }
            if ((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 && _props$modelValue$bin.text) {
              valueBuilder.addTextValue("Attachment Entity Type", props.modelValue.binaryFileType.text);
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
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Core/NoteTypeDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'noteTypeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var noteTypeViewBag = ref(config.entity);
          var noteTypeEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "allowsAttachments", "allowsReplies", "allowsWatching", "approvalUrlTemplate", "autoWatchAuthors", "binaryFileType", "color", "entityType", "formatType", "iconCssClass", "isMentionEnabled", "maxReplyDepth", "name", "requiresApprovals", "sendApprovalNotifications", "userSelectable"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(noteTypeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _noteTypeViewBag$valu, _noteTypeViewBag$valu2;
            return (_noteTypeViewBag$valu = (_noteTypeViewBag$valu2 = noteTypeViewBag.value) === null || _noteTypeViewBag$valu2 === void 0 ? void 0 : _noteTypeViewBag$valu2.name) !== null && _noteTypeViewBag$valu !== void 0 ? _noteTypeViewBag$valu : "";
          });
          var entityKey = computed(() => {
            var _noteTypeViewBag$valu3, _noteTypeViewBag$valu4;
            return (_noteTypeViewBag$valu3 = (_noteTypeViewBag$valu4 = noteTypeViewBag.value) === null || _noteTypeViewBag$valu4 === void 0 ? void 0 : _noteTypeViewBag$valu4.idKey) !== null && _noteTypeViewBag$valu3 !== void 0 ? _noteTypeViewBag$valu3 : "";
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
              var _noteTypeEditBag$valu;
              if (!((_noteTypeEditBag$valu = noteTypeEditBag.value) !== null && _noteTypeEditBag$valu !== void 0 && _noteTypeEditBag$valu.idKey)) {
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
              var _noteTypeViewBag$valu6;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_noteTypeViewBag$valu6 = noteTypeViewBag.value) === null || _noteTypeViewBag$valu6 === void 0 ? void 0 : _noteTypeViewBag$valu6.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete note type.";
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
              var _noteTypeViewBag$valu7;
              var result = yield invokeBlockAction("Edit", {
                key: (_noteTypeViewBag$valu7 = noteTypeViewBag.value) === null || _noteTypeViewBag$valu7 === void 0 ? void 0 : _noteTypeViewBag$valu7.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                noteTypeEditBag.value = result.data.entity;
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
                entity: noteTypeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  noteTypeViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save note type.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified note type could not be viewed.";
          } else if (!config.entity.idKey) {
            noteTypeEditBag.value = config.entity;
            panelMode.value = DetailPanelMode.Add;
          }
          return (_ctx, _cache) => {
            var _noteTypeViewBag$valu5;
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
              entityTypeGuid: unref(EntityType).NoteType,
              entityTypeName: "NoteType",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: ((_noteTypeViewBag$valu5 = noteTypeViewBag.value) === null || _noteTypeViewBag$valu5 === void 0 ? void 0 : _noteTypeViewBag$valu5.isSystem) !== true,
              isEditVisible: unref(isEditable),
              isFollowVisible: false,
              isSecurityHidden: true,
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: noteTypeViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: noteTypeEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => noteTypeEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/noteTypeDetail.obs";

    })
  };
}));
//# sourceMappingURL=noteTypeDetail.obs.js.map
