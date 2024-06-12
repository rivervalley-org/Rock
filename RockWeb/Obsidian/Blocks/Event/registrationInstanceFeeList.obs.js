System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/component', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createBlock, unref, isRef, withCtx, createVNode, createElementVNode, computed, createElementBlock, Fragment, reactive, useInvokeBlockAction, useConfigurationValues, usePersonPreferences, EntityType, Grid, TextColumn, textValueFilter, DateColumn, dateValueFilter, NumberColumn, numberValueFilter, CurrencyColumn, DropDownList, Modal, SectionHeader, SlidingDateRangePicker, CheckBoxList, parseSlidingDateRangeString, RangeType, TimeUnit, slidingDateRangeToString, useVModelPassthrough, deepEqual;
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
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      reactive = module.reactive;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useConfigurationValues = module.useConfigurationValues;
      usePersonPreferences = module.usePersonPreferences;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      DateColumn = module.DateColumn;
      dateValueFilter = module.dateValueFilter;
      NumberColumn = module.NumberColumn;
      numberValueFilter = module.numberValueFilter;
      CurrencyColumn = module.CurrencyColumn;
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      parseSlidingDateRangeString = module.parseSlidingDateRangeString;
      RangeType = module.RangeType;
      TimeUnit = module.TimeUnit;
      slidingDateRangeToString = module.slidingDateRangeToString;
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      deepEqual = module.deepEqual;
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

      (function (NavigationUrlKey) {
        NavigationUrlKey["DetailPage"] = "DetailPage";
        return NavigationUrlKey;
      })({});
      var PreferenceKey = function (PreferenceKey) {
        PreferenceKey["FilterDateRange"] = "filter-date-range";
        PreferenceKey["FilterFeeName"] = "filter-fee-name";
        PreferenceKey["FilterFeeOptions"] = "filter-fee-options";
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
      var script$1 = defineComponent({
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
          feeNameItems: {
            type: Array,
            required: true
          },
          feeOptionsItems: {
            type: Array,
            required: true
          }
        },
        emits: ["update:modelValue", "update:visible", "close"],
        setup(__props, _ref) {
          var _props$modelValue$dat, _props$modelValue$fee;
          var emit = _ref.emit;
          var props = __props;
          var dateRange = ref(parseSlidingDateRangeString((_props$modelValue$dat = props.modelValue.dateRange) !== null && _props$modelValue$dat !== void 0 ? _props$modelValue$dat : ""));
          var feeName = ref((_props$modelValue$fee = props.modelValue.feeName) !== null && _props$modelValue$fee !== void 0 ? _props$modelValue$fee : "");
          var feeOptions = ref(props.modelValue.feeOptions);
          var feeOptionsItems = ref(props.feeOptionsItems);
          var isVisible = useVModelPassthrough(props, "visible", emit);
          var invokeBlockAction = useInvokeBlockAction();
          function onSave() {
            var value = {
              dateRange: dateRange.value ? slidingDateRangeToString(dateRange.value) : "",
              feeName: feeName.value,
              feeOptions: feeOptions.value
            };
            if (!deepEqual(value, props.modelValue, true)) {
              emit("update:modelValue", value);
            }
            isVisible.value = false;
          }
          function fetchFeeOptions() {
            return _fetchFeeOptions.apply(this, arguments);
          }
          function _fetchFeeOptions() {
            _fetchFeeOptions = _asyncToGenerator(function* () {
              if (feeName.value || feeOptions.value.length === 0) {
                var result = yield invokeBlockAction("FeeItems", {
                  templateFeeGuid: feeName.value
                });
                if (result.isSuccess && result.data) {
                  feeOptionsItems.value = result.data;
                } else {
                  feeOptionsItems.value = [];
                }
              }
            });
            return _fetchFeeOptions.apply(this, arguments);
          }
          watch(() => feeName.value, fetchFeeOptions);
          watch(() => props.modelValue, () => {
            var _props$modelValue$dat2, _props$modelValue$fee2;
            dateRange.value = parseSlidingDateRangeString((_props$modelValue$dat2 = props.modelValue.dateRange) !== null && _props$modelValue$dat2 !== void 0 ? _props$modelValue$dat2 : "");
            feeName.value = (_props$modelValue$fee2 = props.modelValue.feeName) !== null && _props$modelValue$fee2 !== void 0 ? _props$modelValue$fee2 : "";
            feeOptions.value = props.modelValue.feeOptions;
          });
          watch(isVisible, () => {
            if (!isVisible.value) {
              emit("close");
            }
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
              }), createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(SlidingDateRangePicker), {
                modelValue: dateRange.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => dateRange.value = $event),
                label: "Fee Date Range",
                enabledSlidingDateRangeUnits: [unref(RangeType).Previous, unref(RangeType).Last, unref(RangeType).Current, unref(RangeType).DateRange],
                enabledTimeUnits: [unref(TimeUnit).Hour, unref(TimeUnit).Day, unref(TimeUnit).Week, unref(TimeUnit).Month, unref(TimeUnit).Year],
                previewLocation: "None"
              }, null, 8, ["modelValue", "enabledSlidingDateRangeUnits", "enabledTimeUnits"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(DropDownList), {
                modelValue: feeName.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => feeName.value = $event),
                label: "Fee Name",
                items: __props.feeNameItems
              }, null, 8, ["modelValue", "items"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(CheckBoxList), {
                modelValue: feeOptions.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => feeOptions.value = $event),
                label: "Fee Options",
                items: feeOptionsItems.value
              }, null, 8, ["modelValue", "items"])])])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      });

      script$1.__file = "src/Event/RegistrationInstanceFeeList/gridSettingsModal.partial.obs";

      var script = exports('default', defineComponent({
        name: 'registrationInstanceFeeList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var preferences = usePersonPreferences().blockPreferences;
          var gridDataSource = ref();
          var gridData;
          var isGridSettingsVisible = ref(false);
          var gridSettings = ref({
            dateRange: preferences.getValue(PreferenceKey.FilterDateRange),
            feeOptions: JSON.parse(preferences.getValue(PreferenceKey.FilterFeeOptions) || "[]"),
            feeName: preferences.getValue(PreferenceKey.FilterFeeName)
          });
          var hasSettingsFilters = computed(() => {
            return !!gridSettings.value.dateRange || !!gridSettings.value.feeName || gridSettings.value.feeOptions.length > 0;
          });
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
          watch(gridSettings, _asyncToGenerator(function* () {
            var _gridSettings$value$d, _gridSettings$value$f;
            preferences.setValue(PreferenceKey.FilterDateRange, (_gridSettings$value$d = gridSettings.value.dateRange) !== null && _gridSettings$value$d !== void 0 ? _gridSettings$value$d : "");
            preferences.setValue(PreferenceKey.FilterFeeName, (_gridSettings$value$f = gridSettings.value.feeName) !== null && _gridSettings$value$f !== void 0 ? _gridSettings$value$f : "");
            preferences.setValue(PreferenceKey.FilterFeeOptions, JSON.stringify(gridSettings.value.feeOptions));
            yield preferences.save();
            gridDataSource.value = loadGridData();
          }));
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition, _unref$options$export, _unref$options, _unref$options$feeNam, _unref$options2, _unref$options$feeOpt, _unref$options3;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Fee",
              entityTypeGuid: unref(EntityType).RegistrationRegistrantFee,
              stickyHeader: "",
              liveUpdates: "",
              gridSettings: "",
              exportTitle: (_unref$options$export = (_unref$options = unref(config).options) === null || _unref$options === void 0 ? void 0 : _unref$options.exportTitleName) !== null && _unref$options$export !== void 0 ? _unref$options$export : '',
              gridSettingsActive: unref(hasSettingsFilters),
              onGridSettingsClick: _cache[0] || (_cache[0] = $event => isGridSettingsVisible.value = true)
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "registrationId",
                title: "Registration Id",
                field: "registrationId",
                hideOnScreen: true,
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(DateColumn), {
                name: "registrationDate",
                title: "Registration Date",
                field: "registrationDate",
                filter: unref(dateValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "registeredBy",
                title: "Registered By",
                field: "registeredBy",
                filter: unref(textValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "registrant",
                title: "Registrant",
                field: "registrant",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "registrantId",
                title: "Registrant Id",
                field: "registrantId",
                hideOnScreen: true,
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "feeName",
                title: "Fee Name",
                field: "feeName",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), createVNode(unref(TextColumn), {
                name: "feeItemName",
                title: "Option",
                field: "feeItemName",
                filter: unref(textValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(NumberColumn), {
                name: "quantity",
                title: "Quantity",
                field: "quantity",
                filter: unref(numberValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(CurrencyColumn), {
                name: "cost",
                title: "Cost",
                field: "cost",
                filter: unref(numberValueFilter),
                visiblePriority: "md"
              }, null, 8, ["filter"]), createVNode(unref(CurrencyColumn), {
                name: "feeTotal",
                title: "Fee Total",
                field: "feeTotal",
                filter: unref(numberValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"])]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "exportTitle", "gridSettingsActive"]), createVNode(unref(script$1), {
              modelValue: gridSettings.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => gridSettings.value = $event),
              visible: isGridSettingsVisible.value,
              "onUpdate:visible": _cache[2] || (_cache[2] = $event => isGridSettingsVisible.value = $event),
              feeNameItems: (_unref$options$feeNam = (_unref$options2 = unref(config).options) === null || _unref$options2 === void 0 ? void 0 : _unref$options2.feeNameItems) !== null && _unref$options$feeNam !== void 0 ? _unref$options$feeNam : [],
              feeOptionsItems: (_unref$options$feeOpt = (_unref$options3 = unref(config).options) === null || _unref$options3 === void 0 ? void 0 : _unref$options3.feeOptionsItems) !== null && _unref$options$feeOpt !== void 0 ? _unref$options$feeOpt : []
            }, null, 8, ["modelValue", "visible", "feeNameItems", "feeOptionsItems"])], 64);
          };
        }
      }));

      script.__file = "src/Event/registrationInstanceFeeList.obs";

    })
  };
}));
//# sourceMappingURL=registrationInstanceFeeList.obs.js.map
