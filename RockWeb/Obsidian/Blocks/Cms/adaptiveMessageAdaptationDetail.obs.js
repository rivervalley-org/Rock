System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createVNode, unref, isRef, withCtx, Fragment, createBlock, createTextVNode, toDisplayString, createCommentVNode, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, CheckBox, TextBox, NumberBox, DropDownList, SectionHeader, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, debounce;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
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
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
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

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = {
        class: "col-md-6"
      };
      var _hoisted_4 = {
        class: "row"
      };
      var _hoisted_5 = {
        class: "col-md-3"
      };
      var _hoisted_6 = {
        class: "col-md-3"
      };
      var _hoisted_7 = createElementVNode("span", {
        class: "input-group-addon"
      }, "days", -1);
      var _hoisted_8 = {
        class: "row"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var script$1 = defineComponent({
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$des, _props$modelValue$isA, _props$modelValue$nam, _props$modelValue$vie, _props$modelValue$vie2, _props$modelValue$seg;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var description = propertyRef((_props$modelValue$des = props.modelValue.description) !== null && _props$modelValue$des !== void 0 ? _props$modelValue$des : "", "Description");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var name = propertyRef((_props$modelValue$nam = props.modelValue.name) !== null && _props$modelValue$nam !== void 0 ? _props$modelValue$nam : "", "Name");
          var viewSaturationCount = propertyRef((_props$modelValue$vie = props.modelValue.viewSaturationCount) !== null && _props$modelValue$vie !== void 0 ? _props$modelValue$vie : null, "ViewSaturationCount");
          var viewSaturationInDays = propertyRef((_props$modelValue$vie2 = props.modelValue.viewSaturationInDays) !== null && _props$modelValue$vie2 !== void 0 ? _props$modelValue$vie2 : null, "ViewSaturationInDays");
          var segments = propertyRef((_props$modelValue$seg = props.modelValue.segments) !== null && _props$modelValue$seg !== void 0 ? _props$modelValue$seg : [], "Segments");
          var propRefs = [description, isActive, name, segments, viewSaturationCount, viewSaturationInDays];
          var segmentOptions = computed(() => {
            var _props$options$segmen;
            return (_props$options$segmen = props.options.segmentOptions) !== null && _props$options$segmen !== void 0 ? _props$options$segmen : [];
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$des2, _props$modelValue$isA2, _props$modelValue$nam2, _props$modelValue$vie3, _props$modelValue$vie4, _props$modelValue$seg2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(description, (_props$modelValue$des2 = props.modelValue.description) !== null && _props$modelValue$des2 !== void 0 ? _props$modelValue$des2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(name, (_props$modelValue$nam2 = props.modelValue.name) !== null && _props$modelValue$nam2 !== void 0 ? _props$modelValue$nam2 : "");
            updateRefValue(viewSaturationCount, (_props$modelValue$vie3 = props.modelValue.viewSaturationCount) !== null && _props$modelValue$vie3 !== void 0 ? _props$modelValue$vie3 : null);
            updateRefValue(viewSaturationInDays, (_props$modelValue$vie4 = props.modelValue.viewSaturationInDays) !== null && _props$modelValue$vie4 !== void 0 ? _props$modelValue$vie4 : null);
            updateRefValue(segments, (_props$modelValue$seg2 = props.modelValue.segments) !== null && _props$modelValue$seg2 !== void 0 ? _props$modelValue$seg2 : []);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              description: description.value,
              viewSaturationInDays: viewSaturationInDays.value,
              viewSaturationCount: viewSaturationCount.value,
              isActive: isActive.value,
              name: name.value,
              segments: segments.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(TextBox), {
              modelValue: unref(name),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(name) ? name.value = $event : null),
              label: "Name",
              rules: "required"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(CheckBox), {
              modelValue: unref(isActive),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(isActive) ? isActive.value = $event : null),
              label: "Active"
            }, null, 8, ["modelValue"])])]), createVNode(unref(TextBox), {
              modelValue: unref(description),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(description) ? description.value = $event : null),
              label: "Description",
              textMode: "multiline"
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(NumberBox), {
              modelValue: unref(viewSaturationCount),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(viewSaturationCount) ? viewSaturationCount.value = $event : null),
              label: "View Saturation Count",
              help: "The number of times a person should view the message before it's deemed to have been saturated."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(NumberBox), {
              modelValue: unref(viewSaturationInDays),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(viewSaturationInDays) ? viewSaturationInDays.value = $event : null),
              label: "View Saturation Date Range",
              help: "Specify the number of days to be taken into consideration for the saturation calculation of views. Views outside this range will not be considered."
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createVNode(unref(DropDownList), {
              modelValue: unref(segments),
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isRef(segments) ? segments.value = $event : null),
              enhanceForLongLists: "",
              multiple: "",
              label: "Segments",
              help: "The segment that an individual need to be in order for this message adaptation to be considered relevant. Leave blank for all individuals to be considered relevant.",
              items: unref(segmentOptions)
            }, null, 8, ["modelValue", "items"])])]), createVNode(unref(SectionHeader), {
              title: "Message Content",
              description: "The items below represent different forms of content that can the associated with the message."
            }), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 1,
              showCategoryLabel: false
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Cms/AdaptiveMessageAdaptationDetail/editPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'adaptiveMessageAdaptationDetail',
        setup(__props) {
          var _config$entity;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var adaptiveMessageAdaptationEditBag = ref((_config$entity = config.entity) !== null && _config$entity !== void 0 ? _config$entity : {});
          var entityTypeGuid = EntityType.AdaptiveMessageAdaptation;
          var panelMode = ref(DetailPanelMode.Edit);
          var validProperties = ["attributeValues", "description", "isActive", "name", "viewSaturationCount", "viewSaturationInDays", "segments"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(adaptiveMessageAdaptationEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _adaptiveMessageAdapt, _adaptiveMessageAdapt2;
            return (_adaptiveMessageAdapt = (_adaptiveMessageAdapt2 = adaptiveMessageAdaptationEditBag.value) === null || _adaptiveMessageAdapt2 === void 0 ? void 0 : _adaptiveMessageAdapt2.name) !== null && _adaptiveMessageAdapt !== void 0 ? _adaptiveMessageAdapt : "";
          });
          var entityKey = computed(() => {
            var _adaptiveMessageAdapt3, _adaptiveMessageAdapt4;
            return (_adaptiveMessageAdapt3 = (_adaptiveMessageAdapt4 = adaptiveMessageAdaptationEditBag.value) === null || _adaptiveMessageAdapt4 === void 0 ? void 0 : _adaptiveMessageAdapt4.idKey) !== null && _adaptiveMessageAdapt3 !== void 0 ? _adaptiveMessageAdapt3 : "";
          });
          var blockLabels = computed(() => {
            var _adaptiveMessageAdapt5;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_adaptiveMessageAdapt5 = adaptiveMessageAdaptationEditBag.value) === null || _adaptiveMessageAdapt5 === void 0 ? void 0 : _adaptiveMessageAdapt5.isActive) === true) {
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
              var _adaptiveMessageAdapt6;
              if (!((_adaptiveMessageAdapt6 = adaptiveMessageAdaptationEditBag.value) !== null && _adaptiveMessageAdapt6 !== void 0 && _adaptiveMessageAdapt6.idKey)) {
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
                entity: adaptiveMessageAdaptationEditBag.value,
                isEditable: true,
                validProperties: validProperties
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
            blockError.value = "The specified adaptive message adaptation could not be viewed.";
          } else if (!config.entity.idKey) {
            adaptiveMessageAdaptationEditBag.value = config.entity;
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
              entityTypeName: "AdaptiveMessageAdaptation",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: true,
              isFollowVisible: true,
              isSecurityHidden: false,
              onCancelEdit: onCancelEdit,
              onSave: onSave
            }, {
              edit: withCtx(() => [createVNode(unref(script$1), {
                modelValue: adaptiveMessageAdaptationEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => adaptiveMessageAdaptationEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Cms/adaptiveMessageAdaptationDetail.obs";

    })
  };
}));
//# sourceMappingURL=adaptiveMessageAdaptationDetail.obs.js.map
