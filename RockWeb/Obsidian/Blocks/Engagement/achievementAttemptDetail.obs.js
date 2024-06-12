System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/achievementTypePicker.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/util', '@Obsidian/Utility/url'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, unref, createElementVNode, createVNode, isRef, createCommentVNode, computed, onMounted, Fragment, createBlock, withCtx, createTextVNode, toDisplayString, NotificationBox, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, NumberBox, AchievementTypePicker, DatePicker, ValueDetailList, ValueDetailListItemBuilder, debounce, makeUrlRedirectSafe;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
      isRef = module.isRef;
      createCommentVNode = module.createCommentVNode;
      computed = module.computed;
      onMounted = module.onMounted;
      Fragment = module.Fragment;
      createBlock = module.createBlock;
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
      NumberBox = module["default"];
    }, function (module) {
      AchievementTypePicker = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      makeUrlRedirectSafe = module.makeUrlRedirectSafe;
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
        key: 0,
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6",
        id: "divAchiever",
        runat: "server"
      };
      var _hoisted_3$1 = {
        class: "col-md-6",
        id: "divAchievement",
        runat: "server"
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
      var _hoisted_7 = {
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$ach, _props$modelValue$ach2, _props$modelValue$ach3, _props$modelValue$ach4;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var achieverId = propertyRef((_props$modelValue$ach = props.modelValue.achieverEntityId) !== null && _props$modelValue$ach !== void 0 ? _props$modelValue$ach : null, "AchieverEntityId");
          var achievementType = propertyRef((_props$modelValue$ach2 = props.modelValue.achievementType) !== null && _props$modelValue$ach2 !== void 0 ? _props$modelValue$ach2 : {}, "AchievementType");
          var achievementAttemptStartDateTime = propertyRef((_props$modelValue$ach3 = props.modelValue.achievementAttemptStartDateTime) !== null && _props$modelValue$ach3 !== void 0 ? _props$modelValue$ach3 : "", "AchievementAttemptStartDateTime");
          var achievementAttemptEndDateTime = propertyRef((_props$modelValue$ach4 = props.modelValue.achievementAttemptEndDateTime) !== null && _props$modelValue$ach4 !== void 0 ? _props$modelValue$ach4 : "", "AchievementAttemptEndDateTime");
          var progress = propertyRef(props.modelValue.progress, "Progress");
          var propRefs = [achieverId, achievementType, achievementAttemptStartDateTime, achievementAttemptEndDateTime, progress];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$ach5, _props$modelValue$ach6, _props$modelValue$ach7, _props$modelValue$ach8;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(achieverId, (_props$modelValue$ach5 = props.modelValue.achieverEntityId) !== null && _props$modelValue$ach5 !== void 0 ? _props$modelValue$ach5 : null);
            updateRefValue(achievementType, (_props$modelValue$ach6 = props.modelValue.achievementType) !== null && _props$modelValue$ach6 !== void 0 ? _props$modelValue$ach6 : {});
            updateRefValue(achievementAttemptStartDateTime, (_props$modelValue$ach7 = props.modelValue.achievementAttemptStartDateTime) !== null && _props$modelValue$ach7 !== void 0 ? _props$modelValue$ach7 : "");
            updateRefValue(achievementAttemptEndDateTime, (_props$modelValue$ach8 = props.modelValue.achievementAttemptEndDateTime) !== null && _props$modelValue$ach8 !== void 0 ? _props$modelValue$ach8 : "");
            updateRefValue(progress, props.modelValue.progress);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              achieverEntityId: achieverId.value,
              achievementType: achievementType.value,
              achievementAttemptStartDateTime: achievementAttemptStartDateTime.value,
              achievementAttemptEndDateTime: achievementAttemptEndDateTime.value,
              progress: progress.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("fieldset", null, [!unref(achieverId) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [createVNode(unref(NumberBox), {
              modelValue: unref(achieverId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(achieverId) ? achieverId.value = $event : null),
              rules: "required",
              label: "Achiever Id"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$1, [createVNode(unref(AchievementTypePicker), {
              modelValue: unref(achievementType),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(achievementType) ? achievementType.value = $event : null),
              rules: "required",
              label: "Achievement",
              multiple: false
            }, null, 8, ["modelValue"])])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_4, [createElementVNode("div", _hoisted_5, [createVNode(unref(DatePicker), {
              modelValue: unref(achievementAttemptStartDateTime),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(achievementAttemptStartDateTime) ? achievementAttemptStartDateTime.value = $event : null),
              rules: "required",
              label: "Start Date",
              help: "The date that progress toward this attempt began."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_6, [createVNode(unref(DatePicker), {
              modelValue: unref(achievementAttemptEndDateTime),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(achievementAttemptEndDateTime) ? achievementAttemptEndDateTime.value = $event : null),
              label: "End Date",
              help: "The date that progress toward this attempt ended."
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_7, [createVNode(unref(NumberBox), {
              modelValue: unref(progress),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isRef(progress) ? progress.value = $event : null),
              class: "input-width-md",
              label: "Progress",
              help: "The percent towards completion of this attempt. 0.5 is 50%, 1 is 100%, etc."
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Engagement/AchievementAttemptDetail/editPanel.partial.obs";

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
            if (props.modelValue.progressHtml) {
              valueBuilder.addHtmlValue("", props.modelValue.progressHtml);
            }
            if (props.modelValue.achieverHtml) {
              valueBuilder.addHtmlValue("", props.modelValue.achieverHtml);
            }
            if (props.modelValue.attemptDescription) {
              valueBuilder.addTextValue("Date", props.modelValue.attemptDescription);
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
          onMounted(() => {
            var $ = window["$"];
            $(".js-person-popover").popover({
              placement: "right",
              trigger: "manual",
              delay: 500,
              html: true,
              content: function content() {
                var dataUrl = "/api/People/PopupHtml/" + $(this).attr("personid") + "/false";
                var result = $.ajax({
                  type: "GET",
                  url: dataUrl,
                  dataType: "json",
                  contentType: "application/json; charset=utf-8",
                  async: false
                }).responseText;
                var resultObject = JSON.parse(result);
                return resultObject.PickerItemDetailsHtml;
              }
            }).on("mouseenter", e => {
              console.log(e);
              var target = e.target;
              $(target).popover("show");
              $(target).siblings(".popover").on("mouseleave", () => {
                $(target).popover("hide");
              });
            }).on("mouseleave", e => {
              var target = e.target;
              setTimeout(() => {
                if (!$(".popover:hover").length) {
                  $(target).popover("hide");
                }
              }, 100);
            });
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

      script$1.__file = "src/Engagement/AchievementAttemptDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'achievementAttemptDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var achievementAttemptViewBag = ref(config.entity);
          var achievementAttemptEditBag = ref({});
          var entityTypeGuid = EntityType.AchievementAttempt;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "achievementAttemptEndDateTime", "achievementAttemptStartDateTime", "achievementType", "achieverEntityId", "isClosed", "isSuccessful", "progress"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(achievementAttemptEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _achievementAttemptVi, _achievementAttemptVi2, _achievementAttemptVi3;
            return (_achievementAttemptVi = (_achievementAttemptVi2 = achievementAttemptViewBag.value) === null || _achievementAttemptVi2 === void 0 ? void 0 : (_achievementAttemptVi3 = _achievementAttemptVi2.achievementType) === null || _achievementAttemptVi3 === void 0 ? void 0 : _achievementAttemptVi3.text) !== null && _achievementAttemptVi !== void 0 ? _achievementAttemptVi : "";
          });
          var entityKey = computed(() => {
            var _achievementAttemptVi4, _achievementAttemptVi5;
            return (_achievementAttemptVi4 = (_achievementAttemptVi5 = achievementAttemptViewBag.value) === null || _achievementAttemptVi5 === void 0 ? void 0 : _achievementAttemptVi5.idKey) !== null && _achievementAttemptVi4 !== void 0 ? _achievementAttemptVi4 : "";
          });
          var blockLabels = computed(() => {
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            return labels;
          });
          var headerActions = computed(() => {
            var _achievementAttemptVi6;
            var actions = [];
            if (!((_achievementAttemptVi6 = achievementAttemptViewBag.value) !== null && _achievementAttemptVi6 !== void 0 && _achievementAttemptVi6.achievementPageUrl)) {
              return undefined;
            }
            actions.push({
              title: "Achievement Type",
              iconCssClass: "fa fa-medal",
              type: "link",
              handler: onAchievementTypeClick
            });
            return actions;
          });
          var isEditable = computed(() => {
            return config.isEditable === true;
          });
          var options = computed(() => {
            var _config$options;
            return (_config$options = config.options) !== null && _config$options !== void 0 ? _config$options : {};
          });
          function onAchievementTypeClick() {
            var _achievementAttemptVi7;
            if ((_achievementAttemptVi7 = achievementAttemptViewBag.value) !== null && _achievementAttemptVi7 !== void 0 && _achievementAttemptVi7.achievementPageUrl) {
              var _achievementAttemptVi8;
              window.location.href = makeUrlRedirectSafe((_achievementAttemptVi8 = achievementAttemptViewBag.value) === null || _achievementAttemptVi8 === void 0 ? void 0 : _achievementAttemptVi8.achievementPageUrl);
            }
          }
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _achievementAttemptEd;
              if (!((_achievementAttemptEd = achievementAttemptEditBag.value) !== null && _achievementAttemptEd !== void 0 && _achievementAttemptEd.idKey)) {
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
              var _achievementAttemptVi9;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_achievementAttemptVi9 = achievementAttemptViewBag.value) === null || _achievementAttemptVi9 === void 0 ? void 0 : _achievementAttemptVi9.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete achievement attempt.";
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
              var _achievementAttemptVi10;
              var result = yield invokeBlockAction("Edit", {
                key: (_achievementAttemptVi10 = achievementAttemptViewBag.value) === null || _achievementAttemptVi10 === void 0 ? void 0 : _achievementAttemptVi10.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                achievementAttemptEditBag.value = result.data.entity;
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
                entity: achievementAttemptEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  achievementAttemptViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to save achievement attempt.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified achievement attempt could not be viewed.";
          } else if (!config.entity.idKey) {
            achievementAttemptEditBag.value = config.entity;
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
              headerActions: unref(headerActions),
              entityKey: unref(entityKey),
              entityTypeGuid: unref(entityTypeGuid),
              entityTypeName: "AchievementAttempt",
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
                modelValue: achievementAttemptViewBag.value,
                options: unref(options)
              }, null, 8, ["modelValue", "options"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: achievementAttemptEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => achievementAttemptEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "headerActions", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/achievementAttemptDetail.obs";

    })
  };
}));
//# sourceMappingURL=achievementAttemptDetail.obs.js.map
