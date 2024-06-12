System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/util', '@Obsidian/Controls/rockForm.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, createVNode, unref, withCtx, createElementVNode, computed, onMounted, Fragment, createBlock, toDisplayString, createCommentVNode, createSlots, NotificationBox, Panel, DetailPanelMode, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, AttributeValuesContainer, ValueDetailList, ValueDetailListItemBuilder, RockDateTime, RockButton, BtnType, BtnSize, debounce, RockForm;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      computed = module.computed;
      onMounted = module.onMounted;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createSlots = module.createSlots;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
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
      AttributeValuesContainer = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      RockForm = module["default"];
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

      var _hoisted_1$2 = createTextVNode("In order to respect any new setting changes made here, please restart this node after saving.");
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$nod, _props$modelValue$isA;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var name = propertyRef((_props$modelValue$nod = props.modelValue.nodeName) !== null && _props$modelValue$nod !== void 0 ? _props$modelValue$nod : "", "NodeName");
          var isActive = propertyRef((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false, "IsActive");
          var propRefs = [isActive, name];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$nod2, _props$modelValue$isA2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(name, (_props$modelValue$nod2 = props.modelValue.nodeName) !== null && _props$modelValue$nod2 !== void 0 ? _props$modelValue$nod2 : "");
            updateRefValue(isActive, (_props$modelValue$isA2 = props.modelValue.isActive) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              nodeName: name.value,
              isActive: isActive.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(NotificationBox), {
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_1$2]),
              _: 1
            })]);
          };
        }
      });

      script$2.__file = "src/WebFarm/WebFarmNodeDetail/editPanel.partial.obs";

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-5"
      };
      var _hoisted_3 = {
        class: "col-md-7"
      };
      var _hoisted_4 = createElementVNode("span", {
        class: "control-label"
      }, "CPU Utilization", -1);
      var _hoisted_5 = {
        style: {
          "height": "250px"
        }
      };
      var _hoisted_6 = ["innerHTML"];
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue$cha, _props$modelValue3;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var chartHtml = ref((_props$modelValue$cha = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.chartHtml) !== null && _props$modelValue$cha !== void 0 ? _props$modelValue$cha : "");
          var topValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            if (props.modelValue.lastSeenDateTime) {
              var date = RockDateTime.parseISO(props.modelValue.lastSeenDateTime);
              if (date) {
                valueBuilder.addTextValue("Last Seen", date.toLocaleString({
                  dateStyle: "short",
                  timeStyle: "short"
                }));
              }
            }
            if (props.modelValue.isLeader) {
              valueBuilder.addTextValue("Is Leader", "Yes");
            } else {
              valueBuilder.addTextValue("Is Leader", "No");
            }
            if (props.modelValue.isCurrentJobRunner) {
              valueBuilder.addTextValue("Job Runner", "Yes");
            } else {
              valueBuilder.addTextValue("Job Runner", "No");
            }
            if (props.modelValue.currentLeadershipPollingIntervalSeconds) {
              valueBuilder.addTextValue("Polling Interval", "".concat(props.modelValue.currentLeadershipPollingIntervalSeconds, "s"));
            }
            return valueBuilder.build();
          });
          onMounted(() => {
            var $ = window["$"];
            $(".js-chart").each(() => {
              var el = $(this);
              el.attr("data-chart") ? JSON.parse(el.attr("data-chart")) : {};
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [_hoisted_4, createElementVNode("div", _hoisted_5, [createElementVNode("div", {
              innerHTML: chartHtml.value
            }, null, 8, _hoisted_6)])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z = ".card .indicator{height:4px}.server-meta{font-size:20px}.bg-disabled{background:#f5f5f5;color:#aeaeae}.bg-disabled .indicator{background:#a3a3a3}";
      styleInject(css_248z);

      script$1.__file = "src/WebFarm/WebFarmNodeDetail/viewPanel.partial.obs";

      var _hoisted_1 = createTextVNode(" Save ");
      var _hoisted_2 = createTextVNode(" Cancel ");
      var script = exports('default', defineComponent({
        name: 'webFarmNodeDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var webFarmNodeViewBag = ref(config.entity);
          var webFarmNodeEditBag = ref({});
          var submitForm = ref(false);
          var resetKey = ref("");
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "isActive", "isLeader", "nodeName"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(webFarmNodeEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _webFarmNodeViewBag$v;
            return "Web Farm Node: ".concat((_webFarmNodeViewBag$v = webFarmNodeViewBag.value) === null || _webFarmNodeViewBag$v === void 0 ? void 0 : _webFarmNodeViewBag$v.nodeName);
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
              resetKey.value = "reset-errors";
              panelMode.value = DetailPanelMode.View;
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
                entity: webFarmNodeEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (typeof result.data === "object") {
                  webFarmNodeViewBag.value = result.data;
                }
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to save web farm node.";
              }
            });
            return _onSave.apply(this, arguments);
          }
          var onStartSubmitForm = () => {
            submitForm.value = true;
          };
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified web farm node could not be viewed.";
          } else if (!config.entity.idKey) {
            webFarmNodeEditBag.value = config.entity;
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
            })) : createCommentVNode("v-if", true), createVNode(unref(RockForm), {
              submit: submitForm.value,
              "onUpdate:submit": _cache[1] || (_cache[1] = $event => submitForm.value = $event),
              onSubmit: onSave,
              formResetKey: resetKey.value
            }, {
              default: withCtx(() => [createVNode(unref(Panel), {
                type: "block",
                title: unref(panelName)
              }, createSlots({
                default: withCtx(() => [panelMode.value == unref(DetailPanelMode).View ? (openBlock(), createBlock(unref(script$1), {
                  key: 0,
                  modelValue: webFarmNodeViewBag.value,
                  options: unref(options)
                }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true), panelMode.value === unref(DetailPanelMode).Add || panelMode.value === unref(DetailPanelMode).Edit ? (openBlock(), createBlock(unref(script$2), {
                  key: 1,
                  modelValue: webFarmNodeEditBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => webFarmNodeEditBag.value = $event),
                  options: unref(options),
                  onPropertyChanged: onPropertyChanged
                }, null, 8, ["modelValue", "options"])) : createCommentVNode("v-if", true)]),
                _: 2
              }, [panelMode.value === unref(DetailPanelMode).Edit || panelMode.value === unref(DetailPanelMode).Add ? {
                name: "footerActions",
                fn: withCtx(() => [createElementVNode("div", null, [createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Primary,
                  onClick: onStartSubmitForm
                }, {
                  default: withCtx(() => [_hoisted_1]),
                  _: 1
                }, 8, ["btnSize", "btnType"]), createVNode(unref(RockButton), {
                  btnSize: unref(BtnSize).Default,
                  btnType: unref(BtnType).Link,
                  onClick: onCancelEdit
                }, {
                  default: withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["btnSize", "btnType"])])])
              } : undefined]), 1032, ["title"])]),
              _: 1
            }, 8, ["submit", "formResetKey"])], 64);
          };
        }
      }));

      script.__file = "src/WebFarm/webFarmNodeDetail.obs";

    })
  };
}));
//# sourceMappingURL=webFarmNodeDetail.obs.js.map
