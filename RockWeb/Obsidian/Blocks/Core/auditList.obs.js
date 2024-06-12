System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/numberUtils', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/component', '@Obsidian/Utility/util', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/personPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, computed, resolveComponent, createElementBlock, Fragment, reactive, useConfigurationValues, useInvokeBlockAction, usePersonPreferences, EntityType, Grid, textValueFilter, numberValueFilter, PersonColumn, toNumber, Modal, SectionHeader, propertyRef, useVModelPassthrough, updateRefValue, deepEqual, DropDownList, NumberBox, PersonPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      isRef = module.isRef;
      withCtx = module.withCtx;
      createVNode = module.createVNode;
      createElementVNode = module.createElementVNode;
      computed = module.computed;
      resolveComponent = module.resolveComponent;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      textValueFilter = module.textValueFilter;
      numberValueFilter = module.numberValueFilter;
      PersonColumn = module.PersonColumn;
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      propertyRef = module.propertyRef;
      useVModelPassthrough = module.useVModelPassthrough;
      updateRefValue = module.updateRefValue;
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }],
    execute: (function () {

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

      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterEntityType"] = "filter-entity-type";
        PreferenceKey["FilterEntityId"] = "filter-entity-id";
        PreferenceKey["FilterWho"] = "filter-who";
        return PreferenceKey;
      }({});

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-4"
      };
      var _hoisted_3 = {
        class: "col-md-4"
      };
      var _hoisted_4 = {
        class: "col-md-4"
      };
      var script$2 = defineComponent({
        name: 'gridSettingsModal.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          visible: {
            type: Boolean,
            required: true
          },
          entityTypeItems: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "update:visible", "close"],
        setup(__props, _ref) {
          var _props$modelValue$ent, _props$modelValue$ent2, _props$modelValue$who;
          var emit = _ref.emit;
          var props = __props;
          var entityType = ref((_props$modelValue$ent = props.modelValue.entityType) !== null && _props$modelValue$ent !== void 0 ? _props$modelValue$ent : "");
          var entityId = ref((_props$modelValue$ent2 = props.modelValue.entityId) !== null && _props$modelValue$ent2 !== void 0 ? _props$modelValue$ent2 : 0);
          var who = propertyRef((_props$modelValue$who = props.modelValue.who) !== null && _props$modelValue$who !== void 0 ? _props$modelValue$who : undefined, "who");
          var isVisible = useVModelPassthrough(props, "visible", emit);
          function onSave() {
            var value = {
              entityType: entityType.value,
              entityId: toNumber(entityId.value),
              who: who.value
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          watch(() => props.modelValue, () => {
            var _props$modelValue$who2, _props$modelValue$ent3, _props$modelValue$ent4;
            updateRefValue(who, (_props$modelValue$who2 = props.modelValue.who) !== null && _props$modelValue$who2 !== void 0 ? _props$modelValue$who2 : undefined), entityType.value = (_props$modelValue$ent3 = props.modelValue.entityType) !== null && _props$modelValue$ent3 !== void 0 ? _props$modelValue$ent3 : "";
            entityId.value = (_props$modelValue$ent4 = props.modelValue.entityId) !== null && _props$modelValue$ent4 !== void 0 ? _props$modelValue$ent4 : 0;
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: unref(isVisible),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => isRef(isVisible) ? isVisible.value = $event : null),
              title: "Settings",
              saveText: "Save",
              onSave: onSave
            }, {
              default: withCtx(() => [createVNode(unref(SectionHeader), {
                title: "Filters"
              }), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(DropDownList), {
                modelValue: entityType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => entityType.value = $event),
                items: __props.entityTypeItems,
                label: "Entity Type"
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(NumberBox), {
                modelValue: entityId.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => entityId.value = $event),
                label: "Entity Id"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(PersonPicker), {
                modelValue: unref(who),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(who) ? who.value = $event : null),
                enableSelfSelection: "",
                formGroupClasses: "person-picker-container",
                label: "Who"
              }, null, 8, ["modelValue"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$2.__file = "src/Core/AuditList/gridSettingsModal.partial.obs";

      var script$1 = defineComponent({
        name: 'auditDetailsModal.partial',
        props: {
          modelValue: {
            type: Object,
            required: true,
            default: []
          }
        },
        emits: {
          "update:modelValue": _ => true
        },
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var isVisible = ref(false);
          watch(() => props.modelValue, newValue => {
            if (newValue) {
              isVisible.value = true;
            } else {
              isVisible.value = false;
            }
          });
          var gridData = computed(() => ({
            rows: props.modelValue.map(auditDetail => ({
              property: auditDetail.property,
              originalValue: auditDetail.originalValue,
              currentValue: auditDetail.currentValue
            }))
          }));
          function onClose() {
            isVisible.value = false;
            emit("update:modelValue", []);
          }
          return (_ctx, _cache) => {
            var _component_TextColumn = resolveComponent("TextColumn");
            return openBlock(), createBlock(unref(Modal), {
              modelValue: isVisible.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isVisible.value = $event),
              title: "Properties Updated",
              cancelText: 'OK',
              onClose: onClose
            }, {
              default: withCtx(() => [createVNode(unref(Grid), {
                itemTerm: "Property",
                data: unref(gridData)
              }, {
                default: withCtx(() => [createVNode(_component_TextColumn, {
                  name: "property",
                  field: "property",
                  title: "Property",
                  visiblePriority: "xs"
                }), createVNode(_component_TextColumn, {
                  name: "originalValue",
                  field: "originalValue",
                  title: "Original Value",
                  visiblePriority: "xs"
                }), createVNode(_component_TextColumn, {
                  name: "currentValue",
                  field: "currentValue",
                  title: "New Value",
                  visiblePriority: "xs"
                })]),
                _: 1
              }, 8, ["data"])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Core/AuditList/auditDetailsModal.partial.obs";

      var script = exports('default', defineComponent({
        name: 'auditList',
        setup(__props) {
          var _preferences$getValue;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridDataSource = ref();
          var gridData;
          var isGridSettingsVisible = ref(false);
          var auditDetails = ref([]);
          var gridSettings = ref({
            entityType: preferences.getValue(PreferenceKey.FilterEntityType),
            entityId: toNumber(preferences.getValue(PreferenceKey.FilterEntityId)),
            who: ((_preferences$getValue = preferences.getValue(PreferenceKey.FilterWho)) === null || _preferences$getValue === void 0 ? void 0 : _preferences$getValue.length) > 0 ? JSON.parse(preferences.getValue(PreferenceKey.FilterWho)) : undefined
          });
          var hasSettingsFilters = computed(() => {
            return !!gridSettings.value.entityType || !!gridSettings.value.entityId || !!gridSettings.value.who;
          });
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$e, _gridSettings$value$w;
            var entityType = (_gridSettings$value$e = gridSettings.value.entityType) !== null && _gridSettings$value$e !== void 0 ? _gridSettings$value$e : "";
            var entityId = toNumber(gridSettings.value.entityId);
            var who = JSON.stringify((_gridSettings$value$w = gridSettings.value.who) !== null && _gridSettings$value$w !== void 0 ? _gridSettings$value$w : "");
            preferences.setValue(PreferenceKey.FilterEntityType, entityType);
            preferences.setValue(PreferenceKey.FilterEntityId, entityId.toString());
            preferences.setValue(PreferenceKey.FilterWho, who);
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          function loadGridData() {
            return _loadGridData.apply(this, arguments);
          }
          function _loadGridData() {
            _loadGridData = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetGridData");
              if (result.isSuccess && result.data) {
                gridData = reactive(result.data);
                return gridData;
              } else {
                var _result$errorMessage;
                throw new Error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to load grid data.");
              }
            });
            return _loadGridData.apply(this, arguments);
          }
          function onShowAuditDetails(_x) {
            return _onShowAuditDetails.apply(this, arguments);
          }
          function _onShowAuditDetails() {
            _onShowAuditDetails = _asyncToGenerator(function* (key) {
              var result = yield invokeBlockAction("GetAuditDetails", {
                idKey: key
              });
              if (result.isSuccess && result.data) {
                var responseData = result.data;
                var details = [];
                for (var i = 0; i < responseData.length; i++) {
                  details.push(responseData[i]);
                }
                auditDetails.value = details;
              } else {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error occurred while getting audit details.");
              }
            });
            return _onShowAuditDetails.apply(this, arguments);
          }
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$options$entity, _unref$options;
            var _component_TextColumn = resolveComponent("TextColumn");
            var _component_NumberColumn = resolveComponent("NumberColumn");
            var _component_DateTimeColumn = resolveComponent("DateTimeColumn");
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Audit",
              entityTypeGuid: unref(EntityType).Audit,
              stickyHeader: "",
              liveUpdates: "",
              gridSettings: "",
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: _cache[0] || (_cache[0] = $event => isGridSettingsVisible.value = true),
              onSelectItem: onShowAuditDetails
            }, {
              default: withCtx(() => [createVNode(_component_TextColumn, {
                name: "auditType",
                title: "Action",
                field: "auditType",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "5%"
              }, null, 8, ["filter"]), createVNode(_component_TextColumn, {
                name: "entityType",
                title: "Entity Type",
                field: "entityType",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "5%"
              }, null, 8, ["filter"]), createVNode(_component_NumberColumn, {
                name: "entityId",
                title: "Entity Id",
                field: "entityId",
                filter: unref(numberValueFilter),
                visiblePriority: "xs",
                width: "2%"
              }, null, 8, ["filter"]), createVNode(_component_TextColumn, {
                name: "title",
                title: "Entity Description",
                field: "title",
                filter: unref(textValueFilter),
                visiblePriority: "xs",
                width: "5%"
              }, null, 8, ["filter"]), createVNode(_component_NumberColumn, {
                name: "properties",
                title: "Properties Updated",
                field: "properties",
                filter: unref(numberValueFilter),
                visiblePriority: "xs",
                width: "2%"
              }, null, 8, ["filter"]), createVNode(_component_DateTimeColumn, {
                name: "dateTime",
                title: "When",
                field: "dateTime",
                visiblePriority: "xs",
                width: "10%"
              }), createVNode(unref(PersonColumn), {
                name: "person",
                title: "Who",
                field: "person",
                showAsLink: ""
              })]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "gridSettingsActive"]), createVNode(unref(script$2), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[2] || (_cache[2] = $event => isGridSettingsVisible.value = $event),
              entityTypeItems: (_unref$options$entity = (_unref$options = unref(config).options) === null || _unref$options === void 0 ? void 0 : _unref$options.entityTypeItems) !== null && _unref$options$entity !== void 0 ? _unref$options$entity : []
            }, null, 8, ["modelValue", "visible", "entityTypeItems"]), createVNode(unref(script$1), {
              modelValue: auditDetails.value
            }, null, 8, ["modelValue"])], 64);
          };
        }
      }));

      script.__file = "src/Core/auditList.obs";

    })
  };
}));
//# sourceMappingURL=auditList.obs.js.map
