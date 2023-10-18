System.register(['vue', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/dropDownList', '@Obsidian/Utility/component', '@Obsidian/Controls/dateRangePicker', '@Obsidian/Controls/inputGroupDropDown.obs', '@Obsidian/Controls/loading', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/rockAttributeFilter', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/textBox', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, Fragment, unref, createBlock, createCommentVNode, createElementVNode, createTextVNode, ref, withCtx, toDisplayString, normalizeClass, createVNode, renderList, nextTick, CheckBoxList, DropLownList, useVModelPassthrough, DateRangePicker, InputGroupDropDown, Loading, NotificationBox, NumberBox, RockAttributeFilter, RockButton, RockLabel, RockForm, TextBox, AlertType, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      ref = module.ref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      normalizeClass = module.normalizeClass;
      createVNode = module.createVNode;
      renderList = module.renderList;
      nextTick = module.nextTick;
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      DropLownList = module["default"];
    }, function (module) {
      useVModelPassthrough = module.useVModelPassthrough;
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      InputGroupDropDown = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }, function (module) {
      RockAttributeFilter = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
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

      var SignUpFilterType = {
        Checkboxes: "Checkboxes",
        MultiSelectDropDown: "MultiSelectDropDown"
      };

      var script$1 = defineComponent({
        name: 'signUpFilter.partial',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          items: {
            type: Array,
            required: true
          },
          label: {
            type: String,
            required: true
          },
          displayAs: {
            type: String,
            default: SignUpFilterType.Checkboxes
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          useVModelPassthrough(props, "modelValue", emit);
          var displayAsDropDown = computed(() => {
            return props.displayAs === SignUpFilterType.MultiSelectDropDown;
          });
          return (_ctx, _cache) => {
            var _props$label;
            return openBlock(), createElementBlock(Fragment, null, [!unref(displayAsDropDown) ? (openBlock(), createBlock(unref(CheckBoxList), {
              key: 0,
              modelValue: props.modelValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => props.modelValue = $event),
              label: props.label,
              items: props.items,
              horizontal: true,
              repeatColumns: 4
            }, null, 8, ["modelValue", "label", "items"])) : createCommentVNode("v-if", true), unref(displayAsDropDown) ? (openBlock(), createBlock(unref(DropLownList), {
              key: 1,
              modelValue: props.modelValue,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => props.modelValue = $event),
              label: (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : '',
              items: props.items,
              multiple: true
            }, null, 8, ["modelValue", "label", "items"])) : createCommentVNode("v-if", true)], 64);
          };
        }
      });

      script$1.__file = "src/Engagement/SignUp/SignUpFinder/signUpFilter.partial.obs";

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = {
        class: "row d-flex flex-wrap"
      };
      var _hoisted_3 = {
        class: "form-group"
      };
      var _hoisted_4 = createElementVNode("span", {
        class: "input-group-addon"
      }, "Miles", -1);
      var _hoisted_5 = {
        class: "actions"
      };
      var _hoisted_6 = createTextVNode("Search");
      var _hoisted_7 = createTextVNode("Clear");
      var script = exports('default', defineComponent({
        name: 'signUpFinder',
        setup(__props) {
          var _config$projectTypes, _config$campuses, _config$namedSchedule, _config$attributesByP, _config$pageCampusCon;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var slotsAvailableComparisonTypes = [{
            value: "AtLeast",
            text: "At Least"
          }, {
            value: "NoMoreThan",
            text: "No More Than"
          }];
          var errorMessage = ref("");
          var isSearching = ref(config.loadResultsOnInitialPageLoad);
          var projectTypes = ref((_config$projectTypes = config.projectTypes) !== null && _config$projectTypes !== void 0 ? _config$projectTypes : []);
          var campuses = ref((_config$campuses = config.campuses) !== null && _config$campuses !== void 0 ? _config$campuses : []);
          var namedSchedules = ref((_config$namedSchedule = config.namedSchedules) !== null && _config$namedSchedule !== void 0 ? _config$namedSchedule : []);
          var attributesByProjectType = ref((_config$attributesByP = config.attributesByProjectType) !== null && _config$attributesByP !== void 0 ? _config$attributesByP : {});
          var attributeGuidsByProjectType = {};
          var comparisonValuesByAttributeGuid = {};
          var selectedProjectTypes = ref([]);
          var selectedCampuses = ref((_config$pageCampusCon = config.pageCampusContext) !== null && _config$pageCampusCon !== void 0 && _config$pageCampusCon.value ? [config.pageCampusContext.value] : []);
          var selectedNamedSchedules = ref([]);
          var selectedDateRange = ref({});
          var selectedLocationSort = ref("");
          var selectedLocationRange = ref(null);
          var selectedSlotsAvailableComparisonType = ref("AtLeast");
          var selectedSlotsAvailable = ref(null);
          var resultsHeaderElement = ref(null);
          var resultsElement = ref(null);
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          var columnClass = computed(() => {
            var colWidth;
            switch (config.filterColumns) {
              case 4:
                colWidth = 3;
                break;
              case 3:
                colWidth = 4;
                break;
              case 2:
                colWidth = 6;
                break;
              default:
                colWidth = 12;
            }
            return "col-xs-12 col-md-".concat(colWidth);
          });
          var displayAs = computed(() => {
            return config.displayProjectFiltersAs === SignUpFilterType.MultiSelectDropDown ? SignUpFilterType.MultiSelectDropDown : SignUpFilterType.Checkboxes;
          });
          var attributeFilters = computed(() => {
            var filters = [];
            Object.keys(attributesByProjectType.value).forEach(projectTypeGuid => {
              var attributes = attributesByProjectType.value[projectTypeGuid];
              if (!attributes) {
                return;
              }
              var projectTypeAttributeGuids = attributeGuidsByProjectType[projectTypeGuid];
              if (!projectTypeAttributeGuids) {
                projectTypeAttributeGuids = [];
                attributeGuidsByProjectType[projectTypeGuid] = projectTypeAttributeGuids;
              }
              Object.keys(attributes).forEach(attributeKey => {
                var attribute = attributes[attributeKey];
                var attributeGuid = attribute === null || attribute === void 0 ? void 0 : attribute.attributeGuid;
                if (!attributeGuid) {
                  return;
                }
                if (!projectTypeAttributeGuids.includes(attributeGuid)) {
                  projectTypeAttributeGuids.push(attributeGuid);
                }
                var comparisonValue = comparisonValuesByAttributeGuid[attributeGuid];
                if (!comparisonValue) {
                  comparisonValue = {
                    value: ""
                  };
                  comparisonValuesByAttributeGuid[attributeGuid] = comparisonValue;
                }
                filters.push({
                  key: attributeGuid,
                  attribute,
                  comparisonValue
                });
              });
            });
            return filters;
          });
          var isSearchFormVisible = computed(() => {
            return !!(projectTypes.value.length || campuses.value.length || namedSchedules.value.length || attributeFilters.value.length || config.displayDateRange || config.displayLocationSort || config.displayLocationRangeFilter || config.displaySlotsAvailableFilter);
          });
          function tryLoadResultsOnInitialPageLoad() {
            return _tryLoadResultsOnInitialPageLoad.apply(this, arguments);
          }
          function _tryLoadResultsOnInitialPageLoad() {
            _tryLoadResultsOnInitialPageLoad = _asyncToGenerator(function* () {
              if (config.loadResultsOnInitialPageLoad) {
                yield onSearch();
              }
            });
            return _tryLoadResultsOnInitialPageLoad.apply(this, arguments);
          }
          function getActiveAttributeFiltersByProjectType() {
            var active = {};
            Object.keys(attributeGuidsByProjectType).forEach(projectTypeGuid => {
              if (selectedProjectTypes.value.length && !selectedProjectTypes.value.includes(projectTypeGuid)) {
                return;
              }
              var comparisonValues = {};
              attributeGuidsByProjectType[projectTypeGuid].forEach(attributeGuid => {
                comparisonValues[attributeGuid] = comparisonValuesByAttributeGuid[attributeGuid];
              });
              active[projectTypeGuid] = comparisonValues;
            });
            return active;
          }
          function onProjectTypesUpdated() {
            return _onProjectTypesUpdated.apply(this, arguments);
          }
          function _onProjectTypesUpdated() {
            _onProjectTypesUpdated = _asyncToGenerator(function* () {
              var _result$data;
              errorMessage.value = "";
              var selectedProjectTypeGuidStrings = selectedProjectTypes.value;
              var result = yield invokeBlockAction("GetUpdatedAttributes", {
                selectedProjectTypeGuidStrings
              });
              if (!result.isSuccess) {
                errorMessage.value = result.errorMessage || "Unknown error when trying to load updated filters.";
                return;
              }
              attributesByProjectType.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : {};
            });
            return _onProjectTypesUpdated.apply(this, arguments);
          }
          function onSearch() {
            return _onSearch.apply(this, arguments);
          }
          function _onSearch() {
            _onSearch = _asyncToGenerator(function* () {
              isSearching.value = true;
              errorMessage.value = "";
              var bag = {
                projectTypes: selectedProjectTypes.value,
                campuses: selectedCampuses.value,
                namedSchedules: selectedNamedSchedules.value,
                attributeFiltersByProjectType: getActiveAttributeFiltersByProjectType(),
                startDate: selectedDateRange.value.lowerValue,
                endDate: selectedDateRange.value.upperValue,
                locationSort: selectedLocationSort.value,
                locationRange: selectedLocationRange.value,
                slotsAvailableComparisonType: selectedSlotsAvailableComparisonType.value,
                slotsAvailable: selectedSlotsAvailable.value
              };
              var result = yield invokeBlockAction("GetFilteredProjects", {
                bag
              });
              isSearching.value = false;
              if (!result.isSuccess) {
                errorMessage.value = result.errorMessage || "Unknown error while trying to load projects.";
                return;
              }
              nextTick(() => {
                var _result$data2, _result$data3;
                if (resultsHeaderElement.value && (_result$data2 = result.data) !== null && _result$data2 !== void 0 && _result$data2.resultsHeaderHtml) {
                  resultsHeaderElement.value.innerHTML = result.data.resultsHeaderHtml;
                }
                if (resultsElement.value && (_result$data3 = result.data) !== null && _result$data3 !== void 0 && _result$data3.resultsHtml) {
                  resultsElement.value.innerHTML = result.data.resultsHtml;
                }
              });
            });
            return _onSearch.apply(this, arguments);
          }
          function onClearBtnClick() {
            selectedProjectTypes.value = [];
            selectedCampuses.value = [];
            selectedNamedSchedules.value = [];
            selectedDateRange.value = {};
            selectedLocationSort.value = "";
            selectedLocationRange.value = null;
            selectedSlotsAvailableComparisonType.value = "AtLeast";
            selectedSlotsAvailable.value = null;
            Object.keys(comparisonValuesByAttributeGuid).forEach(key => {
              comparisonValuesByAttributeGuid[key] = {
                value: ""
              };
            });
            onSearch();
          }
          onConfigurationValuesChanged(reloadBlock);
          tryLoadResultsOnInitialPageLoad();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), !unref(blockErrorMessage) ? (openBlock(), createElementBlock("div", _hoisted_1, [unref(isSearchFormVisible) ? (openBlock(), createBlock(unref(RockForm), {
              key: 0,
              onSubmit: onSearch
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_2, [projectTypes.value.length ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(script$1), {
                modelValue: selectedProjectTypes.value,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedProjectTypes.value = $event), onProjectTypesUpdated],
                label: unref(config).projectTypeFilterLabel,
                items: projectTypes.value,
                displayAs: unref(displayAs)
              }, null, 8, ["modelValue", "label", "items", "displayAs"])], 2)) : createCommentVNode("v-if", true), campuses.value.length ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(script$1), {
                modelValue: selectedCampuses.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => selectedCampuses.value = $event),
                label: "Campus",
                items: campuses.value,
                displayAs: unref(displayAs)
              }, null, 8, ["modelValue", "items", "displayAs"])], 2)) : createCommentVNode("v-if", true), namedSchedules.value.length ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(script$1), {
                modelValue: selectedNamedSchedules.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => selectedNamedSchedules.value = $event),
                label: unref(config).namedScheduleFilterLabel,
                items: namedSchedules.value,
                displayAs: unref(displayAs)
              }, null, 8, ["modelValue", "label", "items", "displayAs"])], 2)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(attributeFilters), a => {
                return openBlock(), createElementBlock("div", {
                  key: a.key,
                  class: normalizeClass(unref(columnClass))
                }, [createElementVNode("div", _hoisted_3, [createVNode(unref(RockLabel), null, {
                  default: withCtx(() => [createTextVNode(toDisplayString(a.attribute.name), 1)]),
                  _: 2
                }, 1024), createVNode(unref(RockAttributeFilter), {
                  modelValue: comparisonValuesByAttributeGuid[a.key],
                  "onUpdate:modelValue": $event => comparisonValuesByAttributeGuid[a.key] = $event,
                  attribute: a.attribute
                }, null, 8, ["modelValue", "onUpdate:modelValue", "attribute"])])], 2);
              }), 128)), unref(config).displayDateRange ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(DateRangePicker), {
                modelValue: selectedDateRange.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => selectedDateRange.value = $event),
                label: "Date Range",
                disallowPastDateSelection: true
              }, null, 8, ["modelValue"])], 2)) : createCommentVNode("v-if", true), unref(config).displayLocationSort ? (openBlock(), createElementBlock("div", {
                key: 4,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(TextBox), {
                modelValue: selectedLocationSort.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => selectedLocationSort.value = $event),
                label: unref(config).locationSortLabel,
                class: "input-max-w-xl"
              }, null, 8, ["modelValue", "label"])], 2)) : createCommentVNode("v-if", true), unref(config).displayLocationRangeFilter ? (openBlock(), createElementBlock("div", {
                key: 5,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(NumberBox), {
                modelValue: selectedLocationRange.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => selectedLocationRange.value = $event),
                label: "Within",
                formGroupClasses: "input-max-w-md"
              }, {
                inputGroupAppend: withCtx(() => [_hoisted_4]),
                _: 1
              }, 8, ["modelValue"])], 2)) : createCommentVNode("v-if", true), unref(config).displaySlotsAvailableFilter ? (openBlock(), createElementBlock("div", {
                key: 6,
                class: normalizeClass(unref(columnClass))
              }, [createVNode(unref(NumberBox), {
                modelValue: selectedSlotsAvailable.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => selectedSlotsAvailable.value = $event),
                class: "input-max-w-md",
                label: "Spots Available"
              }, {
                inputGroupPrepend: withCtx(() => [createVNode(unref(InputGroupDropDown), {
                  items: slotsAvailableComparisonTypes,
                  modelValue: selectedSlotsAvailableComparisonType.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => selectedSlotsAvailableComparisonType.value = $event)
                }, null, 8, ["modelValue"])]),
                _: 1
              }, 8, ["modelValue"])], 2)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_5, [createVNode(unref(RockButton), {
                type: "submit",
                btnType: unref(BtnType).Primary,
                disabled: isSearching.value
              }, {
                default: withCtx(() => [_hoisted_6]),
                _: 1
              }, 8, ["btnType", "disabled"]), createVNode(unref(RockButton), {
                type: "button",
                btnType: unref(BtnType).Link,
                disabled: isSearching.value,
                onClick: onClearBtnClick
              }, {
                default: withCtx(() => [_hoisted_7]),
                _: 1
              }, 8, ["btnType", "disabled"])])]),
              _: 1
            })) : createCommentVNode("v-if", true), createVNode(unref(Loading), {
              isLoading: isSearching.value
            }, {
              default: withCtx(() => [createElementVNode("div", {
                ref_key: "resultsHeaderElement",
                ref: resultsHeaderElement
              }, null, 512), createElementVNode("div", {
                ref_key: "resultsElement",
                ref: resultsElement
              }, null, 512)]),
              _: 1
            }, 8, ["isLoading"])])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/SignUp/signUpFinder.obs";

    })
  };
}));
//# sourceMappingURL=signUpFinder.obs.js.map
