System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Utility/dialogs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Templates/detailBlock', '@Obsidian/Enums/Controls/detailPanelMode', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Utility/block', '@Obsidian/Utility/component', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/locationItemPicker.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Core/Controls/valueDetailListItemBuilder', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, watch, openBlock, createElementBlock, createBlock, unref, withCtx, createCommentVNode, isRef, Fragment, createVNode, toDisplayString, computed, onMounted, NotificationBox, confirm, EntityType, DetailBlock, DetailPanelMode, AttributeValuesContainer, watchPropertyChanges, useConfigurationValues, useInvokeBlockAction, getSecurityGrant, refreshDetailAttributes, provideSecurityGrant, propertyRef, updateRefValue, PersonPicker, LocationPicker, DatePicker, RockLabel, ValueDetailList, ValueDetailListItemBuilder, RockDateTime, debounce;
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
      isRef = module.isRef;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      computed = module.computed;
      onMounted = module.onMounted;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      confirm = module.confirm;
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
      PersonPicker = module["default"];
    }, function (module) {
      LocationPicker = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      ValueDetailListItemBuilder = module.ValueDetailListItemBuilder;
    }, function (module) {
      RockDateTime = module.RockDateTime;
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
        class: "col-md-12"
      };
      var _hoisted_3$1 = createTextVNode("A streak type is required.");
      var _hoisted_4$1 = {
        class: "row"
      };
      var _hoisted_5$1 = {
        class: "col-sm-6 col-md-4"
      };
      var _hoisted_6$1 = createTextVNode("Person");
      var _hoisted_7$1 = createTextVNode();
      var _hoisted_8$1 = createElementVNode("br", null, null, -1);
      var _hoisted_9 = {
        class: "col-sm-6 col-md-4"
      };
      var _hoisted_10 = {
        class: "col-sm-6 col-md-4"
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
          var _props$modelValue$att, _props$modelValue$att2, _props$modelValue$per, _props$modelValue$loc, _props$modelValue$enr, _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var attributes = ref((_props$modelValue$att = props.modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = props.modelValue.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var personAlias = propertyRef((_props$modelValue$per = props.modelValue.personAlias) !== null && _props$modelValue$per !== void 0 ? _props$modelValue$per : undefined, "PersonAliasId");
          var location = propertyRef((_props$modelValue$loc = props.modelValue.location) !== null && _props$modelValue$loc !== void 0 ? _props$modelValue$loc : undefined, "LocationId");
          var enrollmentDate = propertyRef((_props$modelValue$enr = props.modelValue.enrollmentDate) !== null && _props$modelValue$enr !== void 0 ? _props$modelValue$enr : undefined, "EnrollmentDate");
          var isCreatingStreak = ((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.personAlias) == null;
          var propRefs = [personAlias, location, enrollmentDate];
          watch(() => props.modelValue, () => {
            var _props$modelValue$att3, _props$modelValue$att4, _props$modelValue$per2, _props$modelValue$loc2, _props$modelValue$enr2;
            updateRefValue(attributes, (_props$modelValue$att3 = props.modelValue.attributes) !== null && _props$modelValue$att3 !== void 0 ? _props$modelValue$att3 : {});
            updateRefValue(attributeValues, (_props$modelValue$att4 = props.modelValue.attributeValues) !== null && _props$modelValue$att4 !== void 0 ? _props$modelValue$att4 : {});
            updateRefValue(personAlias, (_props$modelValue$per2 = props.modelValue.personAlias) !== null && _props$modelValue$per2 !== void 0 ? _props$modelValue$per2 : undefined);
            updateRefValue(location, (_props$modelValue$loc2 = props.modelValue.location) !== null && _props$modelValue$loc2 !== void 0 ? _props$modelValue$loc2 : undefined);
            updateRefValue(enrollmentDate, (_props$modelValue$enr2 = props.modelValue.enrollmentDate) !== null && _props$modelValue$enr2 !== void 0 ? _props$modelValue$enr2 : undefined);
          });
          watch([attributeValues, ...propRefs], () => {
            var newValue = _objectSpread2(_objectSpread2({}, props.modelValue), {}, {
              attributeValues: attributeValues.value,
              personAlias: personAlias.value,
              location: location.value,
              enrollmentDate: enrollmentDate.value
            });
            emit("update:modelValue", newValue);
          });
          watchPropertyChanges(propRefs, emit);
          return (_ctx, _cache) => {
            var _props$modelValue2, _unref2;
            return openBlock(), createElementBlock("fieldset", null, [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [!((_props$modelValue2 = __props.modelValue) !== null && _props$modelValue2 !== void 0 && _props$modelValue2.streakType) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: "info"
            }, {
              default: withCtx(() => [_hoisted_3$1]),
              _: 1
            })) : createCommentVNode("v-if", true)])]), createElementVNode("div", _hoisted_4$1, [createElementVNode("div", _hoisted_5$1, [isCreatingStreak ? (openBlock(), createBlock(unref(PersonPicker), {
              key: 0,
              modelValue: unref(personAlias),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(personAlias) ? personAlias.value = $event : null),
              label: "Person",
              rules: "required"
            }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [createVNode(unref(RockLabel), null, {
              default: withCtx(() => [_hoisted_6$1]),
              _: 1
            }), _hoisted_7$1, _hoisted_8$1, createTextVNode(" " + toDisplayString((_unref2 = unref(personAlias)) === null || _unref2 === void 0 ? void 0 : _unref2.text), 1)], 64))]), createElementVNode("div", _hoisted_9, [createVNode(unref(LocationPicker), {
              modelValue: unref(location),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(location) ? location.value = $event : null),
              label: "Location"
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_10, [createVNode(unref(DatePicker), {
              modelValue: unref(enrollmentDate),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(enrollmentDate) ? enrollmentDate.value = $event : null),
              label: "Enrollment Date",
              rules: "required"
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => attributeValues.value = $event),
              attributes: attributes.value,
              isEditMode: "",
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$2.__file = "src/Engagement/StreakDetail/editPanel.partial.obs";

      var _hoisted_1 = {
        key: 0,
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-12"
      };
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-12"
      };
      var _hoisted_5 = ["innerHTML"];
      var _hoisted_6 = {
        class: "row"
      };
      var _hoisted_7 = {
        class: "col-md-6"
      };
      var _hoisted_8 = {
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
          },
          rebuildActionSuccessMessage: String
        },
        setup(__props) {
          var _props$modelValue$att, _props$modelValue, _props$modelValue$att2, _props$modelValue2;
          var props = __props;
          var attributes = ref((_props$modelValue$att = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.attributes) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var attributeValues = ref((_props$modelValue$att2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          var topValues = computed(() => {
            var _props$options$person, _props$options;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addHtmlValue("", (_props$options$person = (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.personHTML) !== null && _props$options$person !== void 0 ? _props$options$person : "");
            return valueBuilder.build();
          });
          var leftSideValues = computed(() => {
            var _props$modelValue$str, _props$modelValue3, _props$modelValue3$st, _RockDateTime$parseIS, _RockDateTime$parseIS2, _props$modelValue$enr, _props$modelValue4, _props$modelValue4$lo;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addHtmlValue("Streak Type", (_props$modelValue$str = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : (_props$modelValue3$st = _props$modelValue3.streakType) === null || _props$modelValue3$st === void 0 ? void 0 : _props$modelValue3$st.text) !== null && _props$modelValue$str !== void 0 ? _props$modelValue$str : "");
            valueBuilder.addTextValue("Enrollment Date", "".concat((_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO((_props$modelValue$enr = props.modelValue.enrollmentDate) !== null && _props$modelValue$enr !== void 0 ? _props$modelValue$enr : "")) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.toASPString("d")) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : ""));
            if ((_props$modelValue4 = props.modelValue) !== null && _props$modelValue4 !== void 0 && (_props$modelValue4$lo = _props$modelValue4.location) !== null && _props$modelValue4$lo !== void 0 && _props$modelValue4$lo.text) {
              valueBuilder.addTextValue("Location", props.modelValue.location.text);
            }
            return valueBuilder.build();
          });
          var rightSideValues = computed(() => {
            var _props$options$curren, _props$options$longes;
            var valueBuilder = new ValueDetailListItemBuilder();
            if (!props.modelValue) {
              return valueBuilder.build();
            }
            valueBuilder.addHtmlValue("Current Streak", (_props$options$curren = props.options.currentStreak) !== null && _props$options$curren !== void 0 ? _props$options$curren : "");
            valueBuilder.addHtmlValue("Longest Streak", (_props$options$longes = props.options.longestStreak) !== null && _props$options$longes !== void 0 ? _props$options$longes : "");
            return valueBuilder.build();
          });
          return (_ctx, _cache) => {
            var _props$options2;
            return openBlock(), createElementBlock("fieldset", null, [__props.rebuildActionSuccessMessage ? (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(NotificationBox), {
              alertType: "success"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.rebuildActionSuccessMessage), 1)]),
              _: 1
            })])])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createElementVNode("ul", {
              innerHTML: (_props$options2 = __props.options) === null || _props$options2 === void 0 ? void 0 : _props$options2.chartHTML,
              class: "streak-chart margin-b-md"
            }, null, 8, _hoisted_5)])]), createVNode(unref(ValueDetailList), {
              modelValue: unref(topValues)
            }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_6, [createElementVNode("div", _hoisted_7, [createVNode(unref(ValueDetailList), {
              modelValue: unref(leftSideValues)
            }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_8, [createVNode(unref(ValueDetailList), {
              modelValue: unref(rightSideValues)
            }, null, 8, ["modelValue"])])]), createVNode(unref(AttributeValuesContainer), {
              modelValue: attributeValues.value,
              attributes: attributes.value,
              numberOfColumns: 2
            }, null, 8, ["modelValue", "attributes"])]);
          };
        }
      });

      script$1.__file = "src/Engagement/StreakDetail/viewPanel.partial.obs";

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["ParentPage"] = "ParentPage";
        NavigationUrlKey["CancelLink"] = "CancelLink";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'streakDetail',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(config.securityGrantToken);
          var blockError = ref("");
          var errorMessage = ref("");
          var rebuildActionSuccessMessage = ref("");
          var streakViewBag = ref(config.entity);
          var streakEditBag = ref({});
          var entityTypeGuid = EntityType.Streak;
          var panelMode = ref(DetailPanelMode.View);
          var validProperties = ["attributeValues", "enrollmentDate", "location", "personAlias", "streakType"];
          var refreshAttributesDebounce = debounce(() => refreshDetailAttributes(streakEditBag, validProperties, invokeBlockAction), undefined, true);
          var panelName = computed(() => {
            var _streakViewBag$value$, _streakViewBag$value, _streakViewBag$value$2;
            return (_streakViewBag$value$ = (_streakViewBag$value = streakViewBag.value) === null || _streakViewBag$value === void 0 ? void 0 : (_streakViewBag$value$2 = _streakViewBag$value.streakType) === null || _streakViewBag$value$2 === void 0 ? void 0 : _streakViewBag$value$2.text) !== null && _streakViewBag$value$ !== void 0 ? _streakViewBag$value$ : "";
          });
          var entityKey = computed(() => {
            var _streakViewBag$value$3, _streakViewBag$value2;
            return (_streakViewBag$value$3 = (_streakViewBag$value2 = streakViewBag.value) === null || _streakViewBag$value2 === void 0 ? void 0 : _streakViewBag$value2.idKey) !== null && _streakViewBag$value$3 !== void 0 ? _streakViewBag$value$3 : "";
          });
          var blockLabels = computed(() => {
            var _streakViewBag$value3;
            var labels = [];
            if (panelMode.value !== DetailPanelMode.View) {
              return undefined;
            }
            if (((_streakViewBag$value3 = streakViewBag.value) === null || _streakViewBag$value3 === void 0 ? void 0 : _streakViewBag$value3.isActive) === true) {
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
          var footerActions = computed(() => {
            return [{
              iconCssClass: "fa fa-refresh",
              title: "Rebuild",
              type: "danger",
              handler: () => {
                onRebuild();
              }
            }];
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
          function onCancelEdit() {
            return _onCancelEdit.apply(this, arguments);
          }
          function _onCancelEdit() {
            _onCancelEdit = _asyncToGenerator(function* () {
              var _streakEditBag$value;
              if (!((_streakEditBag$value = streakEditBag.value) !== null && _streakEditBag$value !== void 0 && _streakEditBag$value.idKey)) {
                var _config$navigationUrl;
                if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.CancelLink]) {
                  return config.navigationUrls[NavigationUrlKey.CancelLink];
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
              var _streakViewBag$value4;
              errorMessage.value = "";
              var result = yield invokeBlockAction("Delete", {
                key: (_streakViewBag$value4 = streakViewBag.value) === null || _streakViewBag$value4 === void 0 ? void 0 : _streakViewBag$value4.idKey
              });
              if (result.isSuccess && result.data) {
                return result.data;
              } else {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to delete streak.";
                return false;
              }
            });
            return _onDelete.apply(this, arguments);
          }
          function onRebuild() {
            return _onRebuild.apply(this, arguments);
          }
          function _onRebuild() {
            _onRebuild = _asyncToGenerator(function* () {
              var _streakViewBag$value5;
              errorMessage.value = "";
              rebuildActionSuccessMessage.value = "";
              if (!(yield confirm("Are you sure you want to delete this data? Enrollment map data belonging to this person for this streak type will be deleted and rebuilt from attendance records! This process occurs real-time (not in a job)."))) {
                return false;
              }
              var result = yield invokeBlockAction("Rebuild", {
                key: (_streakViewBag$value5 = streakViewBag.value) === null || _streakViewBag$value5 === void 0 ? void 0 : _streakViewBag$value5.idKey
              });
              if (result.isSuccess && result.data) {
                rebuildActionSuccessMessage.value = result.data;
                return true;
              } else {
                var _result$errorMessage2;
                errorMessage.value = (_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to rebuild streak.";
                return false;
              }
            });
            return _onRebuild.apply(this, arguments);
          }
          function onEdit() {
            return _onEdit.apply(this, arguments);
          }
          function _onEdit() {
            _onEdit = _asyncToGenerator(function* () {
              var _streakViewBag$value6;
              var result = yield invokeBlockAction("Edit", {
                key: (_streakViewBag$value6 = streakViewBag.value) === null || _streakViewBag$value6 === void 0 ? void 0 : _streakViewBag$value6.idKey
              });
              if (result.isSuccess && result.data && result.data.entity) {
                streakEditBag.value = result.data.entity;
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
              var _result$errorMessage3;
              errorMessage.value = "";
              var data = {
                entity: streakEditBag.value,
                isEditable: true,
                validProperties: validProperties
              };
              if (!streakEditBag.value.streakType) {
                return "";
              }
              var result = yield invokeBlockAction("Save", {
                box: data
              });
              if (result.isSuccess && result.data) {
                if (result.statusCode === 200 && typeof result.data === "object") {
                  streakViewBag.value = result.data;
                  return true;
                } else if (result.statusCode === 201 && typeof result.data === "string") {
                  return result.data;
                }
              }
              errorMessage.value = (_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to save streak.";
              return false;
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          if (config.errorMessage) {
            blockError.value = config.errorMessage;
          } else if (!config.entity) {
            blockError.value = "The specified streak could not be viewed.";
          } else if (!config.entity.idKey) {
            streakEditBag.value = config.entity;
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
              entityTypeName: "Streak",
              isAuditHidden: false,
              isBadgesVisible: true,
              isDeleteVisible: unref(isEditable),
              isEditVisible: unref(isEditable),
              isSecurityHidden: true,
              footerSecondaryActions: unref(footerActions),
              onCancelEdit: onCancelEdit,
              onDelete: onDelete,
              onEdit: onEdit,
              onSave: onSave
            }, {
              view: withCtx(() => [createVNode(unref(script$1), {
                modelValue: streakViewBag.value,
                options: unref(options),
                rebuildActionSuccessMessage: rebuildActionSuccessMessage.value
              }, null, 8, ["modelValue", "options", "rebuildActionSuccessMessage"])]),
              edit: withCtx(() => [createVNode(unref(script$2), {
                modelValue: streakEditBag.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => streakEditBag.value = $event),
                options: unref(options),
                onPropertyChanged: onPropertyChanged
              }, null, 8, ["modelValue", "options"])]),
              _: 1
            }, 8, ["mode", "name", "labels", "entityKey", "entityTypeGuid", "isDeleteVisible", "isEditVisible", "footerSecondaryActions"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/streakDetail.obs";

    })
  };
}));
//# sourceMappingURL=streakDetail.obs.js.map
