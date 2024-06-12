System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/toggle.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, toDisplayString, defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, unref, isRef, createBlock, createCommentVNode, withCtx, computed, Fragment, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, RadioButtonList, BinaryFileTypePicker, DropDownList, TransitionVerticalCollapse, RockButton, RockLabel, Toggle, CodeEditor, ComponentPicker, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, ValueDetailList, ValueDetailListItemBuilder, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      toDisplayString = module.toDisplayString;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      resolveComponent = module.resolveComponent;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      withCtx = module.withCtx;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      Toggle = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
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
      var _hoisted_7 = createElementVNode("div", {
        class: "row"
      }, null, -1);
      var _hoisted_8 = createTextVNode(" Template Tips ");
      var _hoisted_9 = {
        key: 0,
        class: "well"
      };
      var _hoisted_10 = createElementVNode("h2", null, "Template Tips", -1);
      var _hoisted_11 = createElementVNode("p", null, "Below are some tips to assist you in your template creation. The merge fields that you use to customize your templates will vary depending on where they are being used.", -1);
      var _hoisted_12 = createTextVNode("Merge Fields for Workflow Electronic Signatures");
      var _hoisted_13 = createElementVNode("p", null, "Below are some common merge fields for templates used for the electronic signature workflow action. Note that the attribute keys will need to map to what you have configured in your workflow template.", -1);
      var _hoisted_14 = createElementVNode("div", {
        class: "row"
      }, [createElementVNode("div", {
        class: "col-md-6"
      }, [createTextVNode(toDisplayString("\{\{ Workflow | Attribute:'SignedByPerson' \}\}")), createElementVNode("br"), createTextVNode(" " + toDisplayString("\{\{ Workflow | Attribute:'AppliesToPerson' \}\}")), createElementVNode("br"), createTextVNode(" " + toDisplayString("\{\{ Workflow | Attribute:'AssignedToPerson' \}\}")), createElementVNode("br")]), createElementVNode("div", {
        class: "col-md-6"
      })], -1);
      var _hoisted_15 = createElementVNode("br", null, null, -1);
      var _hoisted_16 = createTextVNode("Merge Fields for Event Registration");
      var _hoisted_17 = createElementVNode("p", null, "Below are some common merge fields for templates used for event registration. Again, the attribute value keys will be different in your registration.", -1);
      var _hoisted_18 = {
        class: "row"
      };
      var _hoisted_19 = {
        class: "col-md-6"
      };
      var _hoisted_20 = createElementVNode("p", null, [createElementVNode("b", null, "Registrant Fields")], -1);
      var _hoisted_21 = createElementVNode("br", null, null, -1);
      var _hoisted_22 = createElementVNode("div", {
        class: "col-md-6"
      }, [createElementVNode("p", null, [createElementVNode("b", null, "Registration Fields")]), createTextVNode(" " + toDisplayString("\{\{ Registration | Attribute:'VehicleDescription' \}\}"))], -1);
      var _hoisted_23 = {
        class: "well"
      };
      var _hoisted_24 = {
        class: "mb-3"
      };
      var _hoisted_25 = {
        key: 0
      };
      var _hoisted_26 = {
        key: 0,
        class: "well"
      };
      var _hoisted_27 = createTextVNode("Legacy Signature Provider Settings");
      var _hoisted_28 = createElementVNode("span", null, " Support for these providers will be fully removed in the next full release.", -1);
      var _hoisted_29 = {
        class: "row"
      };
      var _hoisted_30 = {
        class: "col-md-6"
      };
      var _hoisted_31 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$doc, _props$modelValue$sig, _props$modelValue$sig2, _props$modelValue$bin, _props$modelValue$com, _props$modelValue$com2, _props$modelValue$pro, _props$modelValue$pro2, _props$modelValue$lav, _props$modelValue$isV, _props$options$commun;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var documentTerm = propertyRef((_props$modelValue$doc = props.modelValue.documentTerm) !== null && _props$modelValue$doc !== void 0 ? _props$modelValue$doc : "", "DocumentTerm");
          var signatureInputTypes = ref((_props$modelValue$sig = props.modelValue.signatureInputTypes) !== null && _props$modelValue$sig !== void 0 ? _props$modelValue$sig : []);
          var signatureType = propertyRef((_props$modelValue$sig2 = props.modelValue.signatureType) !== null && _props$modelValue$sig2 !== void 0 ? _props$modelValue$sig2 : "", "SignatureType");
          var binaryFileType = propertyRef((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 ? _props$modelValue$bin : null, "BinaryFileTypeId");
          var completionSystemCommunicationValue = propertyRef((_props$modelValue$com = (_props$modelValue$com2 = props.modelValue.completionSystemCommunication) === null || _props$modelValue$com2 === void 0 ? void 0 : _props$modelValue$com2.value) !== null && _props$modelValue$com !== void 0 ? _props$modelValue$com : "", "CompletionSystemCommunicationId");
          var providerEntityType = propertyRef((_props$modelValue$pro = props.modelValue.providerEntityType) !== null && _props$modelValue$pro !== void 0 ? _props$modelValue$pro : null, "ProviderEntityTypeId");
          var providerTemplateKey = propertyRef((_props$modelValue$pro2 = props.modelValue.providerTemplateKey) !== null && _props$modelValue$pro2 !== void 0 ? _props$modelValue$pro2 : "", "ProviderTemplateKey");
          var lavaTemplate = propertyRef((_props$modelValue$lav = props.modelValue.lavaTemplate) !== null && _props$modelValue$lav !== void 0 ? _props$modelValue$lav : "", "LavaTemplate");
          var isValidInFuture = propertyRef((_props$modelValue$isV = props.modelValue.isValidInFuture) !== null && _props$modelValue$isV !== void 0 ? _props$modelValue$isV : false, "IsValidInFuture");
          var validityDurationInDays = propertyRef(props.modelValue.validityDurationInDays, "ValidityDurationInDays");
          var communicationTemplates = ref((_props$options$commun = props.options.communicationTemplates) !== null && _props$options$commun !== void 0 ? _props$options$commun : []);
          var showLegacyExternalProviders = ref(props.options.showLegacyExternalProviders);
          var showTips = ref(false);
          var isPreviewMode = ref(false);
          var propRefs = [description, isActive, name, documentTerm, signatureType, binaryFileType, completionSystemCommunicationValue, lavaTemplate, providerTemplateKey, providerEntityType, isValidInFuture, validityDurationInDays];
          function onTemplateTipsClick() {
            showTips.value = !showTips.value;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$doc2, _props$modelValue$sig3, _props$modelValue$bin2, _props$modelValue$com3, _props$modelValue$com4, _props$modelValue$lav2, _props$modelValue$pro3, _props$modelValue$pro4, _props$modelValue$isV2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(documentTerm, (_props$modelValue$doc2 = props.modelValue.documentTerm) !== null && _props$modelValue$doc2 !== void 0 ? _props$modelValue$doc2 : "");
            updateRefValue(signatureType, (_props$modelValue$sig3 = props.modelValue.signatureType) !== null && _props$modelValue$sig3 !== void 0 ? _props$modelValue$sig3 : "");
            updateRefValue(binaryFileType, (_props$modelValue$bin2 = props.modelValue.binaryFileType) !== null && _props$modelValue$bin2 !== void 0 ? _props$modelValue$bin2 : {});
            updateRefValue(completionSystemCommunicationValue, (_props$modelValue$com3 = (_props$modelValue$com4 = props.modelValue.completionSystemCommunication) === null || _props$modelValue$com4 === void 0 ? void 0 : _props$modelValue$com4.value) !== null && _props$modelValue$com3 !== void 0 ? _props$modelValue$com3 : "");
            updateRefValue(lavaTemplate, (_props$modelValue$lav2 = props.modelValue.lavaTemplate) !== null && _props$modelValue$lav2 !== void 0 ? _props$modelValue$lav2 : "");
            updateRefValue(providerTemplateKey, (_props$modelValue$pro3 = props.modelValue.providerTemplateKey) !== null && _props$modelValue$pro3 !== void 0 ? _props$modelValue$pro3 : "");
            updateRefValue(providerEntityType, (_props$modelValue$pro4 = props.modelValue.providerEntityType) !== null && _props$modelValue$pro4 !== void 0 ? _props$modelValue$pro4 : {});
            updateRefValue(isValidInFuture, (_props$modelValue$isV2 = props.modelValue.isValidInFuture) !== null && _props$modelValue$isV2 !== void 0 ? _props$modelValue$isV2 : false);
            updateRefValue(validityDurationInDays, props.modelValue.validityDurationInDays);
            updateRefValue(showLegacyExternalProviders, props.options.showLegacyExternalProviders);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              isActive: isActive.value,
              name: name.value,
              signatureType: signatureType.value,
              binaryFileType: binaryFileType.value,
              completionSystemCommunication: {
                value: completionSystemCommunicationValue.value
              },
              lavaTemplate: lavaTemplate.value,
              isValidInFuture: isValidInFuture.value,
              validityDurationInDays: validityDurationInDays.value,
              providerTemplateKey: providerTemplateKey.value,
              providerEntityType: providerEntityType.value,
              documentTerm: documentTerm.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _component_NumberBox = resolveComponent("NumberBox");
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
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(TextBox), {
              modelValue: unref(documentTerm),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(documentTerm) ? documentTerm.value = $event : null),
              label: "Document Term",
              help: "How the document should be referred to (e.g Waiver, Contract, Statement, etc.)"
            }, null, 8, ["modelValue"]), createVNode(unref(RadioButtonList), {
              modelValue: unref(signatureType),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(signatureType) ? signatureType.value = $event : null),
              label: "Signature Input Type",
              help: "The input type for the signature. Drawn will display an area where the individual can use the mouse or a finger to draw a representation of their signature.\r\n                                 Typed will allow them to type their name as their digital signature. Both are legally acceptable in the US and Canada.\r\n                                 The drawn value is considered Personally identifiable information (PII) and is more sensitive to keep. It is encrypted in the database.",
              horizontal: "",
              items: signatureInputTypes.value
            }, null, 8, ["modelValue", "items"]), createVNode(unref(CheckBox), {
              modelValue: unref(isValidInFuture),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(isValidInFuture) ? isValidInFuture.value = $event : null),
              label: "Valid In Future",
              help: "Determines if documents of this type should be considered valid for future eligibility needs."
            }, null, 8, ["modelValue"]), unref(isValidInFuture) ? (openBlock(), createBlock(_component_NumberBox, {
              key: 0,
              modelValue: unref(validityDurationInDays),
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isRef(validityDurationInDays) ? validityDurationInDays.value = $event : null),
              label: "Valid Duration Days",
              help: "The number of days a signed document of this type will be considered valid.",
              "minimum-value": "1",
              rules: "required"
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_6, [createVNode(unref(BinaryFileTypePicker), {
              modelValue: unref(binaryFileType),
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => isRef(binaryFileType) ? binaryFileType.value = $event : null),
              label: "File Type",
              help: "Determines which file type is used when storing the signed document.",
              showBlankItem: "",
              rules: "required"
            }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
              modelValue: unref(completionSystemCommunicationValue),
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => isRef(completionSystemCommunicationValue) ? completionSystemCommunicationValue.value = $event : null),
              label: "Completion Email Template",
              help: "The email template to use when sending the signed document upon completion.",
              items: communicationTemplates.value
            }, null, 8, ["modelValue", "items"])])]), _hoisted_7, createVNode(unref(RockButton), {
              btnType: "link",
              onClick: onTemplateTipsClick
            }, {
              default: withCtx(() => [_hoisted_8]),
              _: 1
            }), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [showTips.value ? (openBlock(), createElementBlock("div", _hoisted_9, [_hoisted_10, _hoisted_11, createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_12]),
                _: 1
              }), _hoisted_13, _hoisted_14, _hoisted_15, createVNode(unref(RockLabel), null, {
                default: withCtx(() => [_hoisted_16]),
                _: 1
              }), _hoisted_17, createElementVNode("div", _hoisted_18, [createElementVNode("div", _hoisted_19, [_hoisted_20, createTextVNode(" " + toDisplayString("\{\{ Registrant.FirstName \}\}"), 1), _hoisted_21, createTextVNode(" " + toDisplayString("\{\{ Registrant.LastName \}\}"), 1)]), _hoisted_22])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createElementVNode("div", _hoisted_23, [createElementVNode("div", _hoisted_24, [createVNode(unref(Toggle), {
              modelValue: isPreviewMode.value,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => isPreviewMode.value = $event),
              trueText: "Preview",
              falseText: "Edit"
            }, null, 8, ["modelValue"])]), isPreviewMode.value ? (openBlock(), createElementBlock("h4", _hoisted_25, "PDF Viewer")) : (openBlock(), createBlock(unref(CodeEditor), {
              key: 1,
              modelValue: unref(lavaTemplate),
              "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => isRef(lavaTemplate) ? lavaTemplate.value = $event : null),
              theme: "rock",
              mode: "text",
              editorHeight: 200
            }, null, 8, ["modelValue"]))]), showLegacyExternalProviders.value ? (openBlock(), createElementBlock("div", _hoisted_26, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_27]),
              _: 1
            }), _hoisted_28, createElementVNode("div", _hoisted_29, [createElementVNode("div", _hoisted_30, [createVNode(unref(ComponentPicker), {
              modelValue: unref(providerEntityType),
              "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => isRef(providerEntityType) ? providerEntityType.value = $event : null),
              containerType: "containerType",
              label: "External Digital Signature Provider",
              help: "This will be obsolete in a future version of Rock. Leave this blank to use the Rock's built-in Electronic Signature."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_31, [createVNode(unref(DropDownList), {
              modelValue: unref(providerTemplateKey),
              "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => isRef(providerTemplateKey) ? providerTemplateKey.value = $event : null),
              label: "External Provider Template",
              help: "A template that has been created with your digital signature provider"
            }, null, 8, ["modelValue"])])])])) : createCommentVNode("v-if", true), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Core/SignatureDocumentTemplateDetail/editPanel.partial.obs";

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
            var _props$modelValue$bin;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.description) {
              valueBuilder.addTextValue("Description", props.modelValue.description);
            }
            if ((_props$modelValue$bin = props.modelValue.binaryFileType) !== null && _props$modelValue$bin !== void 0 && _props$modelValue$bin.text) {
              valueBuilder.addTextValue("File Type", props.modelValue.binaryFileType.text);
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

      script$1.__file = "src/Core/SignatureDocumentTemplateDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'signatureDocumentTemplateDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var signatureDocumentTemplateViewBag = ref(config.entity);
          var signatureDocumentTemplateEditBag = ref({});
          var entityTypeGuid = EntityType.SignatureDocumentTemplate;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "binaryFileType", "completionSystemCommunication", "description", "documentTerm", "isActive", "lavaTemplate", "name", "providerEntityType", "providerTemplateKey", "signatureType", "isValidInFuture", "validityDurationInDays"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(signatureDocumentTemplateEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _signatureDocumentTem, _signatureDocumentTem2;
            return (_signatureDocumentTem = (_signatureDocumentTem2 = signatureDocumentTemplateViewBag.value) === null || _signatureDocumentTem2 === void 0 ? void 0 : _signatureDocumentTem2.name) !== null && _signatureDocumentTem !== void 0 ? _signatureDocumentTem : "";
          });
          var entityKey = computed(() => {
            var _signatureDocumentTem3, _signatureDocumentTem4;
            return (_signatureDocumentTem3 = (_signatureDocumentTem4 = signatureDocumentTemplateViewBag.value) === null || _signatureDocumentTem4 === void 0 ? void 0 : _signatureDocumentTem4.idKey) !== null && _signatureDocumentTem3 !== void 0 ? _signatureDocumentTem3 : "";
          });
          var blockLabels = computed(() => {
            var _signatureDocumentTem5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_signatureDocumentTem5 = signatureDocumentTemplateViewBag.value) === null || _signatureDocumentTem5 === void 0 ? void 0 : _signatureDocumentTem5.isActive) === true) {
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
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {
              communicationTemplates: [],
              showLegacyExternalProviders: false
            };
          });
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _signatureDocumentTem6;
              if (!((_signatureDocumentTem6 = signatureDocumentTemplateEditBag.value) !== null && _signatureDocumentTem6 !== void 0 && _signatureDocumentTem6.idKey)) {
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
              var _signatureDocumentTem7;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_signatureDocumentTem7 = signatureDocumentTemplateViewBag.value) === null || _signatureDocumentTem7 === void 0 ? void 0 : _signatureDocumentTem7.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete signature document template.";
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
              var _signatureDocumentTem8;
              var result = yield invokeBlockAction("Edit", {
                key: (_signatureDocumentTem8 = signatureDocumentTemplateViewBag.value) === null || _signatureDocumentTem8 === void 0 ? void 0 : _signatureDocumentTem8.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                signatureDocumentTemplateEditBag.value = result.data.entity;
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
                entity: signatureDocumentTemplateEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  signatureDocumentTemplateViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save signature document template.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified signature document template could not be viewed.";
          } else if (!config.entity.idKey) {
            signatureDocumentTemplateEditBag.value = config.entity;
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
              entityTypeName: "SignatureDocumentTemplate",
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
                modelValue: signatureDocumentTemplateViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: signatureDocumentTemplateEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => signatureDocumentTemplateEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Core/signatureDocumentTemplateDetail.obs";

    })
  };
}));
//# sourceMappingURL=signatureDocumentTemplateDetail.obs.js.map
