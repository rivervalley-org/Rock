System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, createBlock, unref, withCtx, createCommentVNode, createVNode, computed, onMounted, Fragment, renderList, normalizeClass, toDisplayString, NotificationBox, DetailBlock, DetailPanelMode, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, updateRefValue, CheckBox, TextBox, NumberBox, ValueDetailList, ValueDetailListItemBuilder, debounce, emptyGuid;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      computed = module.computed;
      onMounted = module.onMounted;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      DetailPanelMode = module.DetailPanelMode;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      watchPropertyChanges = module.watchPropertyChanges;
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      refreshDetailAttributes = module.refreshDetailAttributes;
      provideSecurityGrant = module.provideSecurityGrant;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      emptyGuid = module.emptyGuid;
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

      var _hoisted_1$1 = createTextVNode("The Web Farm will not function correctly with the In-Memory bus transport. Please configure a different bus transport before using the Web Farm.");
      var _hoisted_2$1 = createTextVNode("In order to respect any new setting changes made here, please restart this node after saving.");
      var _hoisted_3$1 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-6"
      };
      var _hoisted_5$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "seconds", -1);
      var _hoisted_6$1 = {
        class: "col-md-6"
      };
      var _hoisted_7$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "seconds", -1);
      var _hoisted_8$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "seconds", -1);
      var _hoisted_9$1 = createElementVNode("span", {
        class: "input-group-addon"
      }, "seconds", -1);
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$isA, _props$modelValue$web;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isActive = ref((_props$modelValue$isA = props.modelValue.isActive) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false);
          var webFarmKey = ref((_props$modelValue$web = props.modelValue.webFarmKey) !== null && _props$modelValue$web !== void 0 ? _props$modelValue$web : "");
          var lowerPollingLimit = ref(props.modelValue.lowerPollingLimit);
          var upperPollingLimit = ref(props.modelValue.upperPollingLimit);
          var maxPollingWaitSeconds = ref(props.modelValue.maxPollingWaitSeconds);
          var minimumPollingDifference = ref(props.modelValue.minimumPollingDifference);
          var isInMemoryTransport = ref(props.modelValue.isInMemoryTransport);
          var propRefs = [];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$web2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(isActive, props.modelValue.isActive);
            updateRefValue(webFarmKey, (_props$modelValue$web2 = props.modelValue.webFarmKey) !== null && _props$modelValue$web2 !== void 0 ? _props$modelValue$web2 : "");
            updateRefValue(lowerPollingLimit, props.modelValue.lowerPollingLimit);
            updateRefValue(upperPollingLimit, props.modelValue.upperPollingLimit);
            updateRefValue(maxPollingWaitSeconds, props.modelValue.maxPollingWaitSeconds);
            updateRefValue(minimumPollingDifference, props.modelValue.minimumPollingDifference);
          });
          watch([attributeValues, isActive, webFarmKey, lowerPollingLimit, upperPollingLimit, maxPollingWaitSeconds, minimumPollingDifference, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              isActive: isActive.value,
              webFarmKey: webFarmKey.value,
              lowerPollingLimit: lowerPollingLimit.value,
              upperPollingLimit: upperPollingLimit.value,
              maxPollingWaitSeconds: maxPollingWaitSeconds.value,
              minimumPollingDifference: minimumPollingDifference.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [isInMemoryTransport.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1$1]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(NotificationBox), {
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_2$1]),
              _: 1
            }), createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(CheckBox), {
              modelValue: isActive.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isActive.value = $event),
              label: "Active"
            }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
              modelValue: webFarmKey.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => webFarmKey.value = $event),
              label: "Key",
              help: "This feature is intended for enterprise size churches that would benefit from a distributed environment. Most Rock churches should not use the Web Farm because of the low level of benefit and a high complexity cost. A special key is required to activate this feature."
            }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
              modelValue: minimumPollingDifference.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => minimumPollingDifference.value = $event),
              label: "Min Interval Difference",
              help: "When starting, nodes may choose a random polling interval between the min and max. This value is the minimum difference between nodes' selected intervals. For example, if one node is polling every 300 seconds, and this value is 10, then another node may poll at 290 or 310, but not any closer. If this value is left blank, then a default will be used."
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_5$1]),
              _: 1
            }, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6$1, [createVNode(unref(NumberBox), {
              modelValue: lowerPollingLimit.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => lowerPollingLimit.value = $event),
              label: "Polling Minimum",
              help: "The number of seconds that is the minimum wait time before a node attempts to execute leadership. If this value is left blank, then a default will be used."
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_7$1]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(NumberBox), {
              modelValue: upperPollingLimit.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => upperPollingLimit.value = $event),
              label: "Polling Maximum",
              help: "The number of seconds that is the maximum wait time before a node attempts to execute leadership. If this value is left blank, then a default will be used."
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_8$1]),
              _: 1
            }, 8, ["modelValue"]), createVNode(unref(NumberBox), {
              modelValue: maxPollingWaitSeconds.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => maxPollingWaitSeconds.value = $event),
              label: "Polling Wait",
              help: "If a node is the leader and conducting a poll to assess responsiveness of other nodes, this number of seconds is the maximum time waited before assuming unresponsive nodes will not respond. If this value is left blank, then a default will be used."
            }, {
              inputGroupAppend: withCtx(() => [_hoisted_9$1]),
              _: 1
            }, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/WebFarm/WebFarmSettings/editPanel.partial.obs";

      var _hoisted_1 = createTextVNode("The Web Farm will not function correctly with the In-Memory bus transport. Please configure a different bus transport before using the Web Farm.");
      var _hoisted_2 = {
        class: "row"
      };
      var _hoisted_3 = {
        class: "col-md-4"
      };
      var _hoisted_4 = {
        class: "col-md-8"
      };
      var _hoisted_5 = createElementVNode("h5", null, "Nodes", -1);
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-sm-6 col-md-6 col-lg-4"
      };
      var _hoisted_8 = ["href"];
      var _hoisted_9 = ["innerHTML"];
      var _hoisted_10 = {
        class: "card-body p-0",
        style: {
          "height": "88px"
        }
      };
      var _hoisted_11 = {
        key: 0,
        class: "label label-danger rounded-pill position-absolute m-2",
        style: {
          "bottom": "0",
          "right": "0"
        }
      };
      var _hoisted_12 = ["innerHTML"];
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
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2, _props$modelValue3, _props$modelValue$nod, _props$modelValue4;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var isInMemoryTransport = ref((_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isInMemoryTransport);
          var nodes = ref((_props$modelValue$nod = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.nodes) !== null && _props$modelValue$nod !== void 0 ? _props$modelValue$nod : []);
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
            if (props.modelValue.webFarmKey) {
              valueBuilder.addTextValue("Key", props.modelValue.webFarmKey);
            } else {
              valueBuilder.addTextValue("Key", "None");
            }
            if (props.modelValue.lowerPollingLimit) {
              valueBuilder.addTextValue("Min Polling Limit", "".concat(props.modelValue.lowerPollingLimit, " seconds"));
            }
            if (props.modelValue.upperPollingLimit) {
              valueBuilder.addTextValue("Max Polling Limit", "".concat(props.modelValue.upperPollingLimit, " seconds"));
            }
            if (props.modelValue.minimumPollingDifference) {
              valueBuilder.addTextValue("Min Polling Difference", "".concat(props.modelValue.minimumPollingDifference, " seconds"));
            }
            if (props.modelValue.maxPollingWaitSeconds) {
              valueBuilder.addTextValue("Max Polling Limit", "".concat(props.modelValue.maxPollingWaitSeconds, " seconds"));
            }
            return valueBuilder.build();
          });
          var getCardClass = isActive => {
            return isActive ? "card card-node" : "card card-node bg-disabled";
          };
          var getIndicatorClass = (isActive, isUnresponsive) => {
            return "indicator ".concat(isActive ? " bg-success" : "", " ").concat(isUnresponsive ? " bg-danger" : "");
          };
          var getLeaderIcon = isLeader => {
            return isLeader ? "<span class='node-type-icon' title='Leader'><i class='fa fa-user-tie'></i></span>" : "";
          };
          var getCurrentJobRunnerIcon = isCurrentJobRunner => {
            return isCurrentJobRunner ? "<span class='node-type-icon' title='Job Runner'><i class='fa fa-cog'></i></span>" : "";
          };
          var getHeaderHTML = node => {
            return "<span class=\"server-meta\" title='Polling Interval: ".concat(node.currentLeadershipPollingIntervalSeconds, "'>\n                            <i class=\"").concat(node.isActive ? "fa fa-server" : "fa fa-exclamation-triangle", "\"></i>\n                            <span class=\"node-name text-truncate\">\n                                ").concat(node.nodeName, "\n                            </span>\n                        </span>\n                        ").concat(getLeaderIcon(node.isLeader), "\n                        ").concat(getCurrentJobRunnerIcon(node.isCurrentJobRunner));
          };
          onMounted(() => {
            var $ = window["$"];
            $(".js-chart").each(() => {
              var el = $(this);
              el.attr("data-chart") ? JSON.parse(el.attr("data-chart")) : {};
            });
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [isInMemoryTransport.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "warning"
            }, {
              default: withCtx(() => [_hoisted_1]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [_hoisted_5, createElementVNode("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, node => {
              var _node$nodeDetailPageU;
              return openBlock(), createElementBlock("div", null, [createElementVNode("div", _hoisted_7, [createElementVNode("a", {
                href: (_node$nodeDetailPageU = node.nodeDetailPageUrl) !== null && _node$nodeDetailPageU !== void 0 ? _node$nodeDetailPageU : '',
                style: {
                  "color": "inherit"
                }
              }, [createElementVNode("div", {
                class: normalizeClass(getCardClass(node.isActive))
              }, [createElementVNode("div", {
                class: normalizeClass(getIndicatorClass(node.isActive, node.isUnresponsive))
              }, null, 2), createElementVNode("div", {
                class: "card-header",
                innerHTML: getHeaderHTML(node)
              }, null, 8, _hoisted_9), createElementVNode("div", _hoisted_10, [node.isUnresponsive ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(node.humanReadableLastSeen), 1)) : createCommentVNode("v-if", true), createElementVNode("div", {
                innerHTML: node.chartHtml
              }, null, 8, _hoisted_12)])], 2)], 8, _hoisted_8)])]);
            }), 256))])])]), createVNode(unref(AttributeValuesContainer), {
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

      var css_248z = ".bg-disabled{background:#f5f5f5;color:#aeaeae}.bg-disabled .indicator{background:#a3a3a3}.card-node{border-top:0;margin-bottom:24px}.card-node .indicator{height:4px}.card-node .card-header{align-items:center;background:transparent;display:flex;justify-content:space-between;padding:0 8px}.server-meta{align-items:center;display:flex;flex:1 1 auto;flex-wrap:nowrap;font-size:20px;line-height:36px;overflow:hidden}.node-name{font-weight:700;margin-left:4px}.node-type-icon{flex-shrink:0;margin-left:8px}.card-node .card-body{padding:0}";
      styleInject(css_248z);

      script$1.__file = "src/WebFarm/WebFarmSettings/viewPanel.partial.obs";

      var script = exports('default', defineComponent({
        name: 'webFarmSettings',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var webFarmSettingsViewBag = ref(config.entity);
          var webFarmSettingsEditBag = ref({});
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "isActive", "webFarmKey", "lowerPollingLimit", "upperPollingLimit", "maxPollingWaitSeconds", "minimumPollingDifference"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(webFarmSettingsEditBag, validProperties, invokeBlockAction), undefined, true);
          var entityKey = computed(() => {
            var _webFarmSettingsViewB, _webFarmSettingsViewB2;
            return (_webFarmSettingsViewB = (_webFarmSettingsViewB2 = webFarmSettingsViewBag.value) === null || _webFarmSettingsViewB2 === void 0 ? void 0 : _webFarmSettingsViewB2.idKey) !== null && _webFarmSettingsViewB !== void 0 ? _webFarmSettingsViewB : "";
          });
          var blockLabels = computed(() => {
            var _webFarmSettingsViewB3;
            var labels = [];
            if ((_webFarmSettingsViewB3 = webFarmSettingsViewBag.value) !== null && _webFarmSettingsViewB3 !== void 0 && _webFarmSettingsViewB3.isActive) {
              labels.push({
                title: "Active",
                type: "success"
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
            return true;
          }
          function onDelete() {
            return _onDelete.apply(this, arguments);
          }
          function _onDelete() {
            _onDelete = _asyncToGenerator(function* () {
              var _webFarmSettingsViewB4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_webFarmSettingsViewB4 = webFarmSettingsViewBag.value) === null || _webFarmSettingsViewB4 === void 0 ? void 0 : _webFarmSettingsViewB4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete web farm setting.";
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
              var _webFarmSettingsViewB5;
              var result = yield invokeBlockAction("Edit", {
                key: (_webFarmSettingsViewB5 = webFarmSettingsViewBag.value) === null || _webFarmSettingsViewB5 === void 0 ? void 0 : _webFarmSettingsViewB5.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                webFarmSettingsEditBag.value = result.data.entity;
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
                entity: webFarmSettingsEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  webFarmSettingsViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save web farm settings.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified web farm could not be viewed.";
          } else if (!config.entity.idKey) {
            webFarmSettingsEditBag.value = config.entity;
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
              labels: unref(blockLabels),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(emptyGuid),
              entityTypeName: "WebFarmSettings",
              isAuditHidden: true,
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
                modelValue: webFarmSettingsViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: webFarmSettingsEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => webFarmSettingsEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "labels", "entityKey", "entityTypeGuid", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/WebFarm/webFarmSettings.obs";

    })
  };
}));
//# sourceMappingURL=webFarmSettings.obs.js.map
