System.register(['vue', '@Obsidian/Controls/categoryPicker', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/modal', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/panelWidget', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/textBox', '@Obsidian/Enums/Controls/alertType', '@Obsidian/SystemGuids/definedType', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createTextVNode, createElementVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, toDisplayString, createElementBlock, createVNode, createCommentVNode, CategoryPicker, CheckBox, CheckBoxList, CodeEditor, DefinedValuePicker, DropDownList, GroupTypePicker, LoadingIndicator, Modal, NotificationBox, PagePicker, PanelWidget, RadioButtonList, TextBox, AlertType, DefinedType, EntityType, useInvokeBlockAction, getSecurityGrant, useReloadBlock, provideSecurityGrant, setCustomSettingsBoxValue;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      GroupTypePicker = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      PagePicker = module["default"];
    }, function (module) {
      PanelWidget = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      getSecurityGrant = module.getSecurityGrant;
      useReloadBlock = module.useReloadBlock;
      provideSecurityGrant = module.provideSecurityGrant;
      setCustomSettingsBoxValue = module.setCustomSettingsBoxValue;
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

      var _hoisted_1 = {
        key: 2
      };
      var _hoisted_2 = createTextVNode("Layout / Initial Page Load");
      var _hoisted_3 = {
        class: "row"
      };
      var _hoisted_4 = {
        class: "col-md-6"
      };
      var _hoisted_5 = {
        class: "col-md-6"
      };
      var _hoisted_6 = createTextVNode("Project Filters");
      var _hoisted_7 = {
        class: "row"
      };
      var _hoisted_8 = {
        class: "col-md-6"
      };
      var _hoisted_9 = {
        class: "col-md-6"
      };
      var _hoisted_10 = createTextVNode("Campus Filters");
      var _hoisted_11 = {
        class: "row"
      };
      var _hoisted_12 = {
        class: "col-md-6"
      };
      var _hoisted_13 = {
        class: "col-md-6"
      };
      var _hoisted_14 = createTextVNode("Schedule Filters");
      var _hoisted_15 = {
        class: "row"
      };
      var _hoisted_16 = {
        class: "col-md-6"
      };
      var _hoisted_17 = {
        class: "col-md-6"
      };
      var _hoisted_18 = {
        class: "row"
      };
      var _hoisted_19 = createElementVNode("div", {
        class: "col-md-6"
      }, "   ", -1);
      var _hoisted_20 = {
        class: "col-md-6"
      };
      var _hoisted_21 = createTextVNode("Location Filters");
      var _hoisted_22 = {
        class: "row"
      };
      var _hoisted_23 = {
        class: "col-md-6"
      };
      var _hoisted_24 = {
        class: "col-md-6"
      };
      var _hoisted_25 = {
        class: "row"
      };
      var _hoisted_26 = {
        class: "col-md-6"
      };
      var _hoisted_27 = createElementVNode("div", {
        class: "col-md-6"
      }, "   ", -1);
      var _hoisted_28 = createTextVNode("Additional Filters");
      var _hoisted_29 = {
        class: "row"
      };
      var _hoisted_30 = {
        class: "col-md-6"
      };
      var _hoisted_31 = {
        class: "col-md-6"
      };
      var _hoisted_32 = createTextVNode("Lava");
      var _hoisted_33 = createTextVNode("Linked Pages");
      var _hoisted_34 = {
        class: "row"
      };
      var _hoisted_35 = {
        class: "col-md-6"
      };
      var _hoisted_36 = {
        class: "col-md-6"
      };
      var script = exports('default', defineComponent({
        name: 'signUpFinderCustomSettings',
        emits: ["close"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var invokeBlockAction = useInvokeBlockAction();
          var securityGrant = getSecurityGrant(null);
          var reloadBlock = useReloadBlock();
          var displayProjectFiltersAsItems = [{
            value: "Checkboxes",
            text: "Checkboxes"
          }, {
            value: "MultiSelectDropDown",
            text: "Multi-Select Dropdown"
          }];
          var filterColumnsItems = [{
            value: "1",
            text: "1"
          }, {
            value: "2",
            text: "2"
          }, {
            value: "3",
            text: "3"
          }, {
            value: "4",
            text: "4"
          }];
          var errorMessage = ref("");
          var isLoading = ref(true);
          var isModalOpen = ref(true);
          var hideOvercapacityProjects = ref(false);
          var loadResultsOnInitialPageLoad = ref(false);
          var displayProjectFiltersAs = ref("");
          var filterColumns = ref("");
          var projectTypes = ref([]);
          var projectTypeFilterLabel = ref("");
          var displayAttributeFilters = ref([]);
          var displayCampusFilterSettings = ref(false);
          var displayCampusFilter = ref(false);
          var enableCampusContext = ref(false);
          var campusTypes = ref([]);
          var campusStatuses = ref([]);
          var displayNamedScheduleFilter = ref(false);
          var namedScheduleFilterLabel = ref("");
          var rootScheduleCategory = ref(null);
          var displayLocationSort = ref(false);
          var locationSortLabel = ref("");
          var displayLocationRangeFilter = ref(false);
          var displayDateRange = ref(false);
          var displaySlotsAvailableFilter = ref(false);
          var resultsLavaTemplate = ref("");
          var resultsHeaderLavaTemplate = ref("");
          var projectDetailPage = ref(null);
          var registrationPage = ref(null);
          var availableProjectTypeGuids = ref([]);
          var availableDisplayAttributeFilters = ref([]);
          var saveButtonText = computed(() => {
            return errorMessage.value || !isLoading.value ? "Save" : "";
          });
          var securityGrantToken = computed(() => {
            return securityGrant.token.value;
          });
          function startLoading() {
            return _startLoading.apply(this, arguments);
          }
          function _startLoading() {
            _startLoading = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetCustomSettings");
              if (result.isSuccess && result.data && result.data.settings && result.data.options) {
                var _result$data$settings, _result$data$settings2, _result$data$settings3, _result$data$settings4, _result$data$settings5, _result$data$settings6, _result$data$settings7, _result$data$settings8, _result$data$settings9, _result$data$settings10, _result$data$settings11, _result$data$settings12, _result$data$settings13, _result$data$options$, _result$data$options$2;
                hideOvercapacityProjects.value = result.data.settings.hideOvercapacityProjects;
                loadResultsOnInitialPageLoad.value = result.data.settings.loadResultsOnInitialPageLoad;
                displayProjectFiltersAs.value = (_result$data$settings = result.data.settings.displayProjectFiltersAs) !== null && _result$data$settings !== void 0 ? _result$data$settings : "";
                filterColumns.value = result.data.settings.filterColumns.toString();
                projectTypes.value = (_result$data$settings2 = result.data.settings.projectTypes) !== null && _result$data$settings2 !== void 0 ? _result$data$settings2 : [];
                projectTypeFilterLabel.value = (_result$data$settings3 = result.data.settings.projectTypeFilterLabel) !== null && _result$data$settings3 !== void 0 ? _result$data$settings3 : "";
                displayAttributeFilters.value = (_result$data$settings4 = result.data.settings.displayAttributeFilters) !== null && _result$data$settings4 !== void 0 ? _result$data$settings4 : [];
                displayCampusFilterSettings.value = result.data.settings.displayCampusFilterSettings;
                displayCampusFilter.value = result.data.settings.displayCampusFilter;
                enableCampusContext.value = result.data.settings.enableCampusContext;
                campusTypes.value = (_result$data$settings5 = result.data.settings.campusTypes) !== null && _result$data$settings5 !== void 0 ? _result$data$settings5 : [];
                campusStatuses.value = (_result$data$settings6 = result.data.settings.campusStatuses) !== null && _result$data$settings6 !== void 0 ? _result$data$settings6 : [];
                displayNamedScheduleFilter.value = result.data.settings.displayNamedScheduleFilter;
                namedScheduleFilterLabel.value = (_result$data$settings7 = result.data.settings.namedScheduleFilterLabel) !== null && _result$data$settings7 !== void 0 ? _result$data$settings7 : "";
                rootScheduleCategory.value = (_result$data$settings8 = result.data.settings.rootScheduleCategory) !== null && _result$data$settings8 !== void 0 ? _result$data$settings8 : null;
                displayLocationSort.value = result.data.settings.displayLocationSort;
                locationSortLabel.value = (_result$data$settings9 = result.data.settings.locationSortLabel) !== null && _result$data$settings9 !== void 0 ? _result$data$settings9 : "";
                displayLocationRangeFilter.value = result.data.settings.displayLocationRangeFilter;
                displayDateRange.value = result.data.settings.displayDateRange;
                displaySlotsAvailableFilter.value = result.data.settings.displaySlotsAvailableFilter;
                resultsLavaTemplate.value = (_result$data$settings10 = result.data.settings.resultsLavaTemplate) !== null && _result$data$settings10 !== void 0 ? _result$data$settings10 : "";
                resultsHeaderLavaTemplate.value = (_result$data$settings11 = result.data.settings.resultsHeaderLavaTemplate) !== null && _result$data$settings11 !== void 0 ? _result$data$settings11 : "";
                projectDetailPage.value = (_result$data$settings12 = result.data.settings.projectDetailPage) !== null && _result$data$settings12 !== void 0 ? _result$data$settings12 : null;
                registrationPage.value = (_result$data$settings13 = result.data.settings.registrationPage) !== null && _result$data$settings13 !== void 0 ? _result$data$settings13 : null;
                securityGrant.updateToken(result.data.securityGrantToken);
                availableProjectTypeGuids.value = (_result$data$options$ = result.data.options.availableProjectTypeGuids) !== null && _result$data$options$ !== void 0 ? _result$data$options$ : [];
                availableDisplayAttributeFilters.value = (_result$data$options$2 = result.data.options.availableDisplayAttributeFilters) !== null && _result$data$options$2 !== void 0 ? _result$data$options$2 : [];
              } else {
                errorMessage.value = result.errorMessage || "Unknown error while loading custom settings.";
              }
              isLoading.value = false;
            });
            return _startLoading.apply(this, arguments);
          }
          function onProjectTypesUpdated() {
            return _onProjectTypesUpdated.apply(this, arguments);
          }
          function _onProjectTypesUpdated() {
            _onProjectTypesUpdated = _asyncToGenerator(function* () {
              var _projectTypes$value$m, _result$data;
              var selectedProjectTypeGuidStrings = (_projectTypes$value$m = projectTypes.value.map(pt => pt.value)) !== null && _projectTypes$value$m !== void 0 ? _projectTypes$value$m : [];
              var result = yield invokeBlockAction("GetUpdatedDisplayAttributeFilters", {
                selectedProjectTypeGuidStrings
              });
              if (!result.isSuccess) {
                errorMessage.value = result.errorMessage || "Unknown error when trying to load updated display attribute filters.";
                return;
              }
              availableDisplayAttributeFilters.value = (_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : [];
              displayAttributeFilters.value = [...displayAttributeFilters.value.filter(selected => availableDisplayAttributeFilters.value.some(available => available.value === selected))];
            });
            return _onProjectTypesUpdated.apply(this, arguments);
          }
          function onSave() {
            return _onSave.apply(this, arguments);
          }
          function _onSave() {
            _onSave = _asyncToGenerator(function* () {
              var box = {};
              setCustomSettingsBoxValue(box, "hideOvercapacityProjects", hideOvercapacityProjects.value);
              setCustomSettingsBoxValue(box, "loadResultsOnInitialPageLoad", loadResultsOnInitialPageLoad.value);
              setCustomSettingsBoxValue(box, "displayProjectFiltersAs", displayProjectFiltersAs.value);
              setCustomSettingsBoxValue(box, "filterColumns", +filterColumns.value);
              setCustomSettingsBoxValue(box, "projectTypes", projectTypes.value);
              setCustomSettingsBoxValue(box, "projectTypeFilterLabel", projectTypeFilterLabel.value);
              setCustomSettingsBoxValue(box, "displayAttributeFilters", displayAttributeFilters.value);
              setCustomSettingsBoxValue(box, "displayCampusFilter", displayCampusFilter.value);
              setCustomSettingsBoxValue(box, "enableCampusContext", enableCampusContext.value);
              setCustomSettingsBoxValue(box, "campusTypes", campusTypes.value);
              setCustomSettingsBoxValue(box, "campusStatuses", campusStatuses.value);
              setCustomSettingsBoxValue(box, "displayNamedScheduleFilter", displayNamedScheduleFilter.value);
              setCustomSettingsBoxValue(box, "namedScheduleFilterLabel", namedScheduleFilterLabel.value);
              setCustomSettingsBoxValue(box, "rootScheduleCategory", rootScheduleCategory.value);
              setCustomSettingsBoxValue(box, "displayLocationSort", displayLocationSort.value);
              setCustomSettingsBoxValue(box, "locationSortLabel", locationSortLabel.value);
              setCustomSettingsBoxValue(box, "displayLocationRangeFilter", displayLocationRangeFilter.value);
              setCustomSettingsBoxValue(box, "displayDateRange", displayDateRange.value);
              setCustomSettingsBoxValue(box, "displaySlotsAvailableFilter", displaySlotsAvailableFilter.value);
              setCustomSettingsBoxValue(box, "resultsLavaTemplate", resultsLavaTemplate.value);
              setCustomSettingsBoxValue(box, "resultsHeaderLavaTemplate", resultsHeaderLavaTemplate.value);
              setCustomSettingsBoxValue(box, "projectDetailPage", projectDetailPage.value);
              setCustomSettingsBoxValue(box, "registrationPage", registrationPage.value);
              var data = {
                box
              };
              var result = yield invokeBlockAction("SaveCustomSettings", data);
              if (result.isSuccess) {
                isModalOpen.value = false;
                reloadBlock();
              } else {
                alert(result.errorMessage || "Unable to save block settings.");
              }
            });
            return _onSave.apply(this, arguments);
          }
          provideSecurityGrant(securityGrant);
          watch(isModalOpen, () => {
            if (!isModalOpen.value) {
              emit("close");
            }
          });
          startLoading();
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => isModalOpen.value = $event),
              title: "Sign-Up Finder Settings",
              saveText: unref(saveButtonText),
              onSave: onSave
            }, {
              default: withCtx(() => [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                key: 0,
                alertType: unref(AlertType).Warning
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
                _: 1
              }, 8, ["alertType"])) : isLoading.value ? (openBlock(), createBlock(unref(LoadingIndicator), {
                key: 1,
                delay: 500
              })) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_2]),
                default: withCtx(() => [createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(unref(CheckBox), {
                  modelValue: hideOvercapacityProjects.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => hideOvercapacityProjects.value = $event),
                  label: "Hide Overcapacity Projects",
                  help: "Determines if projects that are full should be shown."
                }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                  modelValue: loadResultsOnInitialPageLoad.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => loadResultsOnInitialPageLoad.value = $event),
                  label: "Load Results on Initial Page Load",
                  help: "When enabled the group finder will load with all configured groups (no filters enabled)."
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5, [createVNode(unref(RadioButtonList), {
                  modelValue: displayProjectFiltersAs.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => displayProjectFiltersAs.value = $event),
                  label: "Display Project Filters As",
                  help: "Determines if the \"Project Types\", \"Campus\", and \"Named Schedule\" project filters should be shown as checkboxes or multi-select dropdowns.",
                  items: displayProjectFiltersAsItems,
                  horizontal: true,
                  rules: "required"
                }, null, 8, ["modelValue"]), createVNode(unref(DropDownList), {
                  modelValue: filterColumns.value,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => filterColumns.value = $event),
                  label: "Filter Columns",
                  help: "The number of columns the filters should be displayed as.",
                  items: filterColumnsItems,
                  showBlankItem: false,
                  rules: "required"
                }, null, 8, ["modelValue"])])])]),
                _: 1
              }), createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_6]),
                default: withCtx(() => [createElementVNode("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createVNode(unref(GroupTypePicker), {
                  modelValue: projectTypes.value,
                  "onUpdate:modelValue": [_cache[4] || (_cache[4] = $event => projectTypes.value = $event), onProjectTypesUpdated],
                  label: "Project Types",
                  help: "Select the sign-up project group types that should be considered for the search.",
                  groupTypes: [...availableProjectTypeGuids.value],
                  multiple: true,
                  rules: "required"
                }, null, 8, ["modelValue", "groupTypes"]), createVNode(unref(TextBox), {
                  modelValue: projectTypeFilterLabel.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => projectTypeFilterLabel.value = $event),
                  label: "Project Type Filter Label",
                  help: "The label to use for the project type filter.",
                  rules: "required"
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_9, [createVNode(unref(CheckBoxList), {
                  modelValue: displayAttributeFilters.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => displayAttributeFilters.value = $event),
                  label: "Display Attribute Filters",
                  help: "The group attributes that should be available for an individual to filter the results by.",
                  items: availableDisplayAttributeFilters.value
                }, null, 8, ["modelValue", "items"])])])]),
                _: 1
              }), displayCampusFilterSettings.value ? (openBlock(), createBlock(unref(PanelWidget), {
                key: 0,
                isDefaultOpen: false
              }, {
                header: withCtx(() => [_hoisted_10]),
                default: withCtx(() => [createElementVNode("div", _hoisted_11, [createElementVNode("div", _hoisted_12, [createVNode(unref(CheckBox), {
                  modelValue: displayCampusFilter.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => displayCampusFilter.value = $event),
                  label: "Display Campus Filter",
                  help: "Determines if the campus filter should be shown."
                }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                  modelValue: enableCampusContext.value,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => enableCampusContext.value = $event),
                  label: "Enable Campus Context",
                  help: "If the page has a campus context, its value will be used as a filter."
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_13, [createVNode(unref(DefinedValuePicker), {
                  modelValue: campusTypes.value,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => campusTypes.value = $event),
                  label: "Campus Types",
                  help: "The types of campuses to include in the campus list.",
                  definedTypeGuid: unref(DefinedType).CampusType,
                  multiple: true
                }, null, 8, ["modelValue", "definedTypeGuid"]), createVNode(unref(DefinedValuePicker), {
                  modelValue: campusStatuses.value,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => campusStatuses.value = $event),
                  label: "Campus Statuses",
                  help: "The statuses of the campuses to include in the campus list.",
                  definedTypeGuid: unref(DefinedType).CampusStatus,
                  multiple: true
                }, null, 8, ["modelValue", "definedTypeGuid"])])])]),
                _: 1
              })) : createCommentVNode("v-if", true), createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_14]),
                default: withCtx(() => [createElementVNode("div", _hoisted_15, [createElementVNode("div", _hoisted_16, [createVNode(unref(CheckBox), {
                  modelValue: displayNamedScheduleFilter.value,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => displayNamedScheduleFilter.value = $event),
                  label: "Display Named Schedule Filter",
                  help: "When enabled a list of named schedules will be show as a filter."
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_17, [createVNode(unref(TextBox), {
                  modelValue: namedScheduleFilterLabel.value,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => namedScheduleFilterLabel.value = $event),
                  label: "Named Schedule Filter Label",
                  help: "The label to use for the named schedule filter.",
                  rules: "required"
                }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_18, [_hoisted_19, createElementVNode("div", _hoisted_20, [createVNode(unref(CategoryPicker), {
                  modelValue: rootScheduleCategory.value,
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => rootScheduleCategory.value = $event),
                  label: "Root Schedule Category",
                  help: "When displaying the named schedule filter this will serve to filter which named schedules to show. Only direct descendants of this root schedule category will be displayed.",
                  entityTypeGuid: unref(EntityType).Schedule,
                  securityGrantToken: unref(securityGrantToken)
                }, null, 8, ["modelValue", "entityTypeGuid", "securityGrantToken"])])])]),
                _: 1
              }), createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_21]),
                default: withCtx(() => [createElementVNode("div", _hoisted_22, [createElementVNode("div", _hoisted_23, [createVNode(unref(CheckBox), {
                  modelValue: displayLocationSort.value,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => displayLocationSort.value = $event),
                  label: "Display Location Sort",
                  help: "Determines if the location sort field should be shown."
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_24, [createVNode(unref(TextBox), {
                  modelValue: locationSortLabel.value,
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => locationSortLabel.value = $event),
                  label: "Location Sort Label",
                  help: "The label to use for the location sort filter.",
                  rules: "required"
                }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_25, [createElementVNode("div", _hoisted_26, [createVNode(unref(CheckBox), {
                  modelValue: displayLocationRangeFilter.value,
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => displayLocationRangeFilter.value = $event),
                  label: "Display Location Range Filter",
                  help: "When enabled a filter will be shown to limit results to a specified number of miles from the location selected or their mailing address if logged in. If the Location Sort entry is not enabled to be shown and the individual is not logged in then this filter will not be shown, even if enabled, as we will not be able to honor the filter."
                }, null, 8, ["modelValue"])]), _hoisted_27])]),
                _: 1
              }), createVNode(unref(PanelWidget), {
                isDefaultOpen: false
              }, {
                header: withCtx(() => [_hoisted_28]),
                default: withCtx(() => [createElementVNode("div", _hoisted_29, [createElementVNode("div", _hoisted_30, [createVNode(unref(CheckBox), {
                  modelValue: displayDateRange.value,
                  "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => displayDateRange.value = $event),
                  label: "Display Date Range",
                  help: "When enabled, individuals would be able to filter the results by projects occurring inside the provided date range."
                }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_31, [createVNode(unref(CheckBox), {
                  modelValue: displaySlotsAvailableFilter.value,
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => displaySlotsAvailableFilter.value = $event),
                  label: "Display Slots Available Filter",
                  help: "When enabled allows the individual to find projects with \"at least\" or \"no more than\" the provided spots available."
                }, null, 8, ["modelValue"])])])]),
                _: 1
              }), createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_32]),
                default: withCtx(() => [createVNode(unref(CodeEditor), {
                  modelValue: resultsLavaTemplate.value,
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => resultsLavaTemplate.value = $event),
                  label: "Results Lava Template",
                  help: "The Lava template to show with the results of the search.",
                  mode: "lava",
                  rules: "required"
                }, null, 8, ["modelValue"]), createVNode(unref(CodeEditor), {
                  modelValue: resultsHeaderLavaTemplate.value,
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => resultsHeaderLavaTemplate.value = $event),
                  label: "Results Header Lava Template",
                  help: "The Lava Template to use to show the results header.",
                  mode: "lava"
                }, null, 8, ["modelValue"])]),
                _: 1
              }), createVNode(unref(PanelWidget), {
                isDefaultOpen: true
              }, {
                header: withCtx(() => [_hoisted_33]),
                default: withCtx(() => [createElementVNode("div", _hoisted_34, [createElementVNode("div", _hoisted_35, [createVNode(unref(PagePicker), {
                  modelValue: projectDetailPage.value,
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => projectDetailPage.value = $event),
                  label: "Project Detail Page",
                  help: "The page reference to pass to the Lava template for the details of the project.",
                  rules: "required",
                  promptForPageRoute: true,
                  securityGrantToken: unref(securityGrantToken)
                }, null, 8, ["modelValue", "securityGrantToken"])]), createElementVNode("div", _hoisted_36, [createVNode(unref(PagePicker), {
                  modelValue: registrationPage.value,
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => registrationPage.value = $event),
                  label: "Registration Page",
                  help: "The page reference to pass to the Lava template for the registration page.",
                  rules: "required",
                  promptForPageRoute: true,
                  securityGrantToken: unref(securityGrantToken)
                }, null, 8, ["modelValue", "securityGrantToken"])])])]),
                _: 1
              })]))]),
              _: 1
            }, 8, ["modelValue", "saveText"]);
          };
        }
      }));

      script.__file = "src/Engagement/SignUp/signUpFinderCustomSettings.obs";

    })
  };
}));
//# sourceMappingURL=signUpFinderCustomSettings.obs.js.map
