System.register(['vue', '@Obsidian/Utility/objectUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Libs/highlightJs', '@Obsidian/Controls/fieldFilterEditor', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/textBox', '@Obsidian/Controls/emailBox', '@Obsidian/Controls/codeEditor', '@Obsidian/Controls/currencyBox', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/dateRangePicker', '@Obsidian/Controls/dateTimePicker', '@Obsidian/Controls/listBox', '@Obsidian/Controls/birthdayPicker', '@Obsidian/Controls/numberUpDown', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/inlineSwitch', '@Obsidian/Controls/switch', '@Obsidian/Controls/toggle', '@Obsidian/Controls/itemsWithPreAndPostHtml', '@Obsidian/Controls/staticFormControl', '@Obsidian/Controls/progressTracker', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/radioButtonList', '@Obsidian/Controls/dropDownList', '@Obsidian/Controls/dialog', '@Obsidian/Controls/inlineCheckBox', '@Obsidian/Controls/checkBox', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/helpBlock', '@Obsidian/Controls/datePartsPicker', '@Obsidian/Controls/colorPicker', '@Obsidian/Controls/numberBox', '@Obsidian/Controls/numberRangeBox', '@Obsidian/Controls/genderDropDownList', '@Obsidian/Controls/socialSecurityNumberBox', '@Obsidian/Controls/timePicker', '@Obsidian/Controls/urlLinkBox', '@Obsidian/Controls/checkBoxList', '@Obsidian/Controls/rating', '@Obsidian/Controls/fullscreen', '@Obsidian/Controls/panel', '@Obsidian/Controls/personPicker', '@Obsidian/Controls/fileUploader', '@Obsidian/Controls/imageUploader', '@Obsidian/Controls/entityTypePicker', '@Obsidian/Controls/achievementTypePicker', '@Obsidian/Controls/assessmentTypePicker', '@Obsidian/Controls/assetStorageProviderPicker', '@Obsidian/Controls/binaryFileTypePicker', '@Obsidian/Controls/binaryFilePicker', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/categoryPicker', '@Obsidian/Controls/locationItemPicker', '@Obsidian/Controls/connectionRequestPicker', '@Obsidian/Controls/copyButton', '@Obsidian/Controls/entityTagList', '@Obsidian/Controls/following', '@Obsidian/Controls/auditDetail', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Templates/detailBlock', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid', '@Obsidian/SystemGuids/assessmentType', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/SystemGuids/definedType', '@Obsidian/SystemGuids/entityType', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/promiseUtils', '@Obsidian/Utility/stringUtils', '@Obsidian/Controls/transitionVerticalCollapse', '@Obsidian/Controls/sectionContainer', '@Obsidian/Controls/sectionHeader', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/PageState', '@Obsidian/Controls/badgeComponentPicker', '@Obsidian/Controls/componentPicker', '@Obsidian/Controls/modal', '@Obsidian/Controls/eventItemPicker', '@Obsidian/Controls/dataViewPicker', '@Obsidian/Controls/workflowTypePicker', '@Obsidian/Controls/financialGatewayPicker', '@Obsidian/Controls/financialStatementTemplatePicker', '@Obsidian/Controls/fieldTypePicker', '@Obsidian/Controls/gradePicker', '@Obsidian/Controls/scheduleBuilder.obs', '@Obsidian/Controls/groupMemberPicker', '@Obsidian/Controls/interactionChannelPicker', '@Obsidian/Controls/interactionComponentPicker', '@Obsidian/Controls/lavaCommandPicker', '@Obsidian/Controls/remoteAuthsPicker', '@Obsidian/Controls/stepProgramPicker', '@Obsidian/Controls/stepStatusPicker', '@Obsidian/Controls/stepTypePicker', '@Obsidian/Controls/streakTypePicker', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Controls/badgeList', '@Obsidian/Controls/badgePicker', '@Obsidian/Controls/basicTimePicker', '@Obsidian/Controls/countdownTimer', '@Obsidian/Controls/electronicSignature', '@Obsidian/Controls/fieldTypeEditor', '@Obsidian/Controls/inlineRangeSlider.obs', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/javaScriptAnchor', '@Obsidian/Controls/keyValueList', '@Obsidian/Controls/loading', '@Obsidian/Controls/loadingIndicator', '@Obsidian/Controls/numberUpDownGroup', '@Obsidian/Controls/panelWidget', '@Obsidian/Controls/progressBar', '@Obsidian/Controls/rockLabel', '@Obsidian/Controls/rockValidation', '@Obsidian/Controls/tabbedContent', '@Obsidian/Controls/valueDetailList', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/groupPicker', '@Obsidian/Controls/mergeTemplatePicker', '@Obsidian/Enums/Controls/mergeTemplateOwnership', '@Obsidian/Controls/metricCategoryPicker', '@Obsidian/Controls/metricItemPicker', '@Obsidian/Controls/registrationTemplatePicker', '@Obsidian/Controls/reportPicker', '@Obsidian/Controls/schedulePicker', '@Obsidian/Controls/workflowActionTypePicker.obs', '@Obsidian/Controls/dayOfWeekPicker.obs', '@Obsidian/Controls/monthDayPicker.obs', '@Obsidian/Controls/monthYearPicker.obs', '@Obsidian/Controls/cacheabilityPicker.obs', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Controls/intervalPicker.obs', '@Obsidian/Controls/geoPicker.obs', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/wordCloud.obs', '@Obsidian/Controls/eventCalendarPicker.obs', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/locationAddressPicker.obs', '@Obsidian/Controls/locationPicker.obs', '@Obsidian/Controls/locationList.obs', '@Obsidian/Controls/ethnicityPicker.obs', '@Obsidian/Controls/racePicker.obs', '@Obsidian/Controls/mediaElementPicker.obs', '@Obsidian/Controls/mergeFieldPicker.obs', '@Obsidian/Controls/categorizedValuePicker.obs', '@Obsidian/Controls/reminderTypePicker.obs', '@Obsidian/Controls/groupRolePicker.obs', '@Obsidian/Controls/modalAlert.obs', '@Obsidian/Enums/Controls/modalAlertType', '@Obsidian/Controls/contentChannelItemPicker.obs', '@Obsidian/Controls/personLink.obs', '@Obsidian/Controls/popOver.obs', '@Obsidian/Controls/rockLiteral.obs', '@Obsidian/Controls/registryEntry.obs', '@Obsidian/Controls/groupTypeGroupPicker.obs', '@Obsidian/Controls/imageEditor.obs', '@Obsidian/Controls/copyButton.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Controls/switch.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/numberBox.obs'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, computed, ref, openBlock, createElementBlock, Fragment, createVNode, unref, normalizeClass, renderSlot, withCtx, createCommentVNode, renderList, toDisplayString, createBlock, watch, onMounted, onUnmounted, isRef, ObjectUtils, BtnType, BtnSize, HighlightJs, FieldFilterEditor, AttributeValuesContainer, TextBox$1, EmailBox, CodeEditor, CurrencyBox, DatePicker, DateRangePicker, DateTimePicker, ListBox, BirthdayPicker, NumberUpDown, AddressControl, InlineSwitch, Switch$1, Toggle, ItemsWithPreAndPostHtml, StaticFormControl, ProgressTracker, RockForm, RockButton, RadioButtonList, DropDownList, Dialog, InlineCheckBox, CheckBox$1, PhoneNumberBox, HelpBlock, DatePartsPicker, ColorPicker, NumberBox$1, NumberRangeBox, GenderDropDownList, SocialSecurityNumberBox, TimePicker, UrlLinkBox, CheckBoxList, Rating, Fullscreen, Panel, PersonPicker, FileUploader, ImageUploader, EntityTypePicker, AchievementTypePicker, AssessmentTypePicker, AssetStorageProviderPicker, BinaryFileTypePicker, BinaryFilePicker, SlidingDateRangePicker, DefinedValuePicker, CategoryPicker, LocationItemPicker, ConnectionRequestPicker, CopyButton$1, EntityTagList, Following, AuditDetail, CampusPicker, DetailBlock, toNumber, newGuid, AssessmentType, BinaryFiletype, DefinedType, EntityType, FieldType, rangeTypeOptions, sleep, upperCaseFirstCharacter, TransitionVerticalCollapse$1, SectionContainer, SectionHeader$1, PickerDisplayStyle, useStore, BadgeComponentPicker, ComponentPicker, Modal, EventItemPicker, DataViewPicker, WorkflowTypePicker, FinancialGatewayPicker, FinancialStatementTemplatePicker, FieldTypePicker, GradePicker, ScheduleBuilder, GroupMemberPicker, InteractionChannelPicker, InteractionComponentPicker, LavaCommandPicker, RemoteAuthsPicker, StepProgramPicker, StepStatusPicker, StepTypePicker, StreakTypePicker, NotificationBox, AlertType, BadgeList, BadgePicker, BasicTimePicker, CountdownTimer, ElectronicSignature, FieldTypeEditor, InlineRangeSlider, RangeSlider, JavaScriptAnchor, KeyValueList, Loading, LoadingIndicator, NumberUpDownGroup, PanelWidget, ProgressBar, RockLabel, RockValidation, TabbedContent, ValueDetailList, PagePicker, GroupPicker, MergeTemplatePicker, MergeTemplateOwnership, MetricCategoryPicker, MetricItemPicker, RegistrationTemplatePicker, ReportPicker, SchedulePicker, WorkflowActionTypePicker, DayOfWeekPicker, MonthDayPicker, MonthYearPicker, CacheabilityPicker, ButtonGroup, IntervalPicker, GeoPicker, ContentDropDownPicker, WordCloud, EventCalendarPicker, GroupTypePicker, LocationAddressPicker, LocationPicker, LocationList, EthnicityPicker, RacePicker, MediaElementPicker, MergeFieldPicker, CategorizedValuePicker, ReminderTypePicker, GroupRolePicker, ModalAlert, ModalAlertType, ContentChannelItemPicker, PersonLink, PopOver, RockLiteral, RegistryEntry, GroupTypeGroupPicker, ImageEditor, CopyButton, SectionHeader, Switch, TransitionVerticalCollapse, CheckBox, TextBox, NumberBox;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      getCurrentInstance = module.getCurrentInstance;
      computed = module.computed;
      ref = module.ref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      normalizeClass = module.normalizeClass;
      renderSlot = module.renderSlot;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      renderList = module.renderList;
      toDisplayString = module.toDisplayString;
      createBlock = module.createBlock;
      watch = module.watch;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
      isRef = module.isRef;
    }, function (module) {
      ObjectUtils = module;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      HighlightJs = module["default"];
    }, function (module) {
      FieldFilterEditor = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      TextBox$1 = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      CurrencyBox = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      ListBox = module["default"];
    }, function (module) {
      BirthdayPicker = module["default"];
    }, function (module) {
      NumberUpDown = module["default"];
    }, function (module) {
      AddressControl = module["default"];
    }, function (module) {
      InlineSwitch = module["default"];
    }, function (module) {
      Switch$1 = module["default"];
    }, function (module) {
      Toggle = module["default"];
    }, function (module) {
      ItemsWithPreAndPostHtml = module["default"];
    }, function (module) {
      StaticFormControl = module["default"];
    }, function (module) {
      ProgressTracker = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      DropDownList = module["default"];
    }, function (module) {
      Dialog = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      CheckBox$1 = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      HelpBlock = module["default"];
    }, function (module) {
      DatePartsPicker = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      NumberBox$1 = module["default"];
    }, function (module) {
      NumberRangeBox = module["default"];
    }, function (module) {
      GenderDropDownList = module["default"];
    }, function (module) {
      SocialSecurityNumberBox = module["default"];
    }, function (module) {
      TimePicker = module["default"];
    }, function (module) {
      UrlLinkBox = module["default"];
    }, function (module) {
      CheckBoxList = module["default"];
    }, function (module) {
      Rating = module["default"];
    }, function (module) {
      Fullscreen = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      FileUploader = module["default"];
    }, function (module) {
      ImageUploader = module["default"];
    }, function (module) {
      EntityTypePicker = module["default"];
    }, function (module) {
      AchievementTypePicker = module["default"];
    }, function (module) {
      AssessmentTypePicker = module["default"];
    }, function (module) {
      AssetStorageProviderPicker = module["default"];
    }, function (module) {
      BinaryFileTypePicker = module["default"];
    }, function (module) {
      BinaryFilePicker = module["default"];
    }, function (module) {
      SlidingDateRangePicker = module["default"];
    }, function (module) {
      DefinedValuePicker = module["default"];
    }, function (module) {
      CategoryPicker = module["default"];
    }, function (module) {
      LocationItemPicker = module["default"];
    }, function (module) {
      ConnectionRequestPicker = module["default"];
    }, function (module) {
      CopyButton$1 = module["default"];
    }, function (module) {
      EntityTagList = module["default"];
    }, function (module) {
      Following = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      AssessmentType = module.AssessmentType;
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      rangeTypeOptions = module.rangeTypeOptions;
    }, function (module) {
      sleep = module.sleep;
    }, function (module) {
      upperCaseFirstCharacter = module.upperCaseFirstCharacter;
    }, function (module) {
      TransitionVerticalCollapse$1 = module["default"];
    }, function (module) {
      SectionContainer = module["default"];
    }, function (module) {
      SectionHeader$1 = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      BadgeComponentPicker = module["default"];
    }, function (module) {
      ComponentPicker = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      EventItemPicker = module["default"];
    }, function (module) {
      DataViewPicker = module["default"];
    }, function (module) {
      WorkflowTypePicker = module["default"];
    }, function (module) {
      FinancialGatewayPicker = module["default"];
    }, function (module) {
      FinancialStatementTemplatePicker = module["default"];
    }, function (module) {
      FieldTypePicker = module["default"];
    }, function (module) {
      GradePicker = module["default"];
    }, function (module) {
      ScheduleBuilder = module["default"];
    }, function (module) {
      GroupMemberPicker = module["default"];
    }, function (module) {
      InteractionChannelPicker = module["default"];
    }, function (module) {
      InteractionComponentPicker = module["default"];
    }, function (module) {
      LavaCommandPicker = module["default"];
    }, function (module) {
      RemoteAuthsPicker = module["default"];
    }, function (module) {
      StepProgramPicker = module["default"];
    }, function (module) {
      StepStatusPicker = module["default"];
    }, function (module) {
      StepTypePicker = module["default"];
    }, function (module) {
      StreakTypePicker = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      BadgeList = module["default"];
    }, function (module) {
      BadgePicker = module["default"];
    }, function (module) {
      BasicTimePicker = module["default"];
    }, function (module) {
      CountdownTimer = module["default"];
    }, function (module) {
      ElectronicSignature = module["default"];
    }, function (module) {
      FieldTypeEditor = module["default"];
    }, function (module) {
      InlineRangeSlider = module["default"];
    }, function (module) {
      RangeSlider = module["default"];
    }, function (module) {
      JavaScriptAnchor = module["default"];
    }, function (module) {
      KeyValueList = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      LoadingIndicator = module["default"];
    }, function (module) {
      NumberUpDownGroup = module["default"];
    }, function (module) {
      PanelWidget = module["default"];
    }, function (module) {
      ProgressBar = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      TabbedContent = module["default"];
    }, function (module) {
      ValueDetailList = module["default"];
    }, function (module) {
      PagePicker = module["default"];
    }, function (module) {
      GroupPicker = module["default"];
    }, function (module) {
      MergeTemplatePicker = module["default"];
    }, function (module) {
      MergeTemplateOwnership = module.MergeTemplateOwnership;
    }, function (module) {
      MetricCategoryPicker = module["default"];
    }, function (module) {
      MetricItemPicker = module["default"];
    }, function (module) {
      RegistrationTemplatePicker = module["default"];
    }, function (module) {
      ReportPicker = module["default"];
    }, function (module) {
      SchedulePicker = module["default"];
    }, function (module) {
      WorkflowActionTypePicker = module["default"];
    }, function (module) {
      DayOfWeekPicker = module["default"];
    }, function (module) {
      MonthDayPicker = module["default"];
    }, function (module) {
      MonthYearPicker = module["default"];
    }, function (module) {
      CacheabilityPicker = module["default"];
    }, function (module) {
      ButtonGroup = module["default"];
    }, function (module) {
      IntervalPicker = module["default"];
    }, function (module) {
      GeoPicker = module["default"];
    }, function (module) {
      ContentDropDownPicker = module["default"];
    }, function (module) {
      WordCloud = module["default"];
    }, function (module) {
      EventCalendarPicker = module["default"];
    }, function (module) {
      GroupTypePicker = module["default"];
    }, function (module) {
      LocationAddressPicker = module["default"];
    }, function (module) {
      LocationPicker = module["default"];
    }, function (module) {
      LocationList = module["default"];
    }, function (module) {
      EthnicityPicker = module["default"];
    }, function (module) {
      RacePicker = module["default"];
    }, function (module) {
      MediaElementPicker = module["default"];
    }, function (module) {
      MergeFieldPicker = module["default"];
    }, function (module) {
      CategorizedValuePicker = module["default"];
    }, function (module) {
      ReminderTypePicker = module["default"];
    }, function (module) {
      GroupRolePicker = module["default"];
    }, function (module) {
      ModalAlert = module["default"];
    }, function (module) {
      ModalAlertType = module.ModalAlertType;
    }, function (module) {
      ContentChannelItemPicker = module["default"];
    }, function (module) {
      PersonLink = module["default"];
    }, function (module) {
      PopOver = module["default"];
    }, function (module) {
      RockLiteral = module["default"];
    }, function (module) {
      RegistryEntry = module["default"];
    }, function (module) {
      GroupTypeGroupPicker = module["default"];
    }, function (module) {
      ImageEditor = module["default"];
    }, function (module) {
      CopyButton = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      Switch = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      CheckBox = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      NumberBox = module["default"];
    }],
    execute: (function () {

      exports({
        getControlImportPath: getControlImportPath,
        getTemplateImportPath: getTemplateImportPath
      });

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

      function convertComponentName(name) {
        if (!name) {
          return "Unknown Component";
        }
        return name.replace(/[A-Z]/g, " $&").replace(/Gallery$/, "").trim();
      }
      function getSfcControlImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Controls/").concat(fileName, ".obs\";");
      }

      var _withScopeId = n => (pushScopeId("data-v-5e8aca9b"), n = n(), popScopeId(), n);
      var _hoisted_1$1 = {
        class: "galleryContent-mainRow mb-5 row"
      };
      var _hoisted_2$1 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0"
      }, "Test Control", -1));
      var _hoisted_3$1 = {
        key: 0,
        class: "mt-3"
      };
      var _hoisted_4 = {
        class: "mb-3 galleryContent-reflectionToggle"
      };
      var _hoisted_5 = {
        key: 0
      };
      var _hoisted_6 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0"
      }, "Control Reflection", -1));
      var _hoisted_7 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_8 = {
        class: "well"
      };
      var _hoisted_9 = createTextVNode("Current Value");
      var _hoisted_10 = createTextVNode("s");
      var _hoisted_11 = {
        class: "m-0 p-0 border-0 galleryContent-valueBox"
      };
      var _hoisted_12 = {
        key: 1,
        class: "m-0 p-0 border-0 galleryContent-valueBox"
      };
      var _hoisted_13 = {
        key: 0,
        class: "mb-5"
      };
      var _hoisted_14 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0"
      }, "Settings", -1));
      var _hoisted_15 = {
        key: 1,
        class: "mb-5"
      };
      var _hoisted_16 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0 mb-3"
      }, "Usage Notes", -1));
      var _hoisted_17 = {
        key: 0,
        class: "mt-3 mb-2"
      };
      var _hoisted_18 = {
        key: 1,
        class: "galleryContent-codeSampleWrapper"
      };
      var _hoisted_19 = {
        class: "galleryContent-codeSample"
      };
      var _hoisted_20 = ["innerHTML"];
      var _hoisted_21 = {
        key: 2,
        class: "mt-3 mb-2"
      };
      var _hoisted_22 = {
        key: 3,
        class: "galleryContent-codeSampleWrapper"
      };
      var _hoisted_23 = {
        class: "galleryContent-codeSample"
      };
      var _hoisted_24 = ["innerHTML"];
      var _hoisted_25 = {
        key: 2
      };
      var _hoisted_26 = _withScopeId(() => createElementVNode("p", {
        class: "text-semibold font-italic"
      }, [createTextVNode("The "), createElementVNode("code", null, "header"), createTextVNode(" slot is no longer supported.")], -1));
      var _hoisted_27 = [_hoisted_26];
      var _hoisted_28 = {
        key: 3
      };
      var _hoisted_29 = _withScopeId(() => createElementVNode("p", {
        class: "text-semibold font-italic"
      }, [createTextVNode("The "), createElementVNode("code", null, "splitWidth"), createTextVNode(" prop is no longer supported.")], -1));
      var _hoisted_30 = [_hoisted_29];
      var _hoisted_31 = {
        key: 4
      };
      var _hoisted_32 = _withScopeId(() => createElementVNode("p", {
        class: "text-semibold font-italic"
      }, [createTextVNode("The "), createElementVNode("code", null, "gallery"), createTextVNode(" slot is deprecated. Please update to the newest Control Gallery template.")], -1));
      var _hoisted_33 = {
        key: 5
      };
      var _hoisted_34 = _withScopeId(() => createElementVNode("p", {
        class: "text-semibold font-italic"
      }, [createTextVNode("The "), createElementVNode("code", null, "result"), createTextVNode(" slot is deprecated. Please update to the newest Control Gallery template.")], -1));
      var script$1 = defineComponent({
        name: 'galleryAndResult.partial',
        props: {
          value: {
            required: false
          },
          hasMultipleValues: {
            type: Boolean,
            default: false
          },
          enableReflection: {
            type: Boolean,
            default: false
          },
          importCode: {
            type: String
          },
          exampleCode: {
            type: String
          },
          description: {
            type: String,
            default: ""
          },
          displayAsRaw: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var _getCurrentInstance, _getCurrentInstance$p, _getCurrentInstance$p2;
          var props = __props;
          var componentName = convertComponentName((_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : (_getCurrentInstance$p = _getCurrentInstance.parent) === null || _getCurrentInstance$p === void 0 ? void 0 : (_getCurrentInstance$p2 = _getCurrentInstance$p.type) === null || _getCurrentInstance$p2 === void 0 ? void 0 : _getCurrentInstance$p2.name);
          var formattedValue = computed(() => {
            if (props.displayAsRaw) {
              return props.value;
            } else if (!props.hasMultipleValues) {
              return JSON.stringify(props.value, null, 4);
            } else {
              return ObjectUtils.fromEntries(Object.entries(props.value).map(_ref => {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];
                return [key, JSON.stringify(val, null, 4)];
              }));
            }
          });
          var styledImportCode = computed(() => {
            var _HighlightJs$highligh;
            if (!props.importCode) {
              return undefined;
            }
            return (_HighlightJs$highligh = HighlightJs.highlight(props.importCode, {
              language: "typescript"
            })) === null || _HighlightJs$highligh === void 0 ? void 0 : _HighlightJs$highligh.value;
          });
          var styledExampleCode = computed(() => {
            var _HighlightJs$highligh2;
            if (!props.exampleCode) {
              return undefined;
            }
            return (_HighlightJs$highligh2 = HighlightJs.highlight(props.exampleCode, {
              language: "html"
            })) === null || _HighlightJs$highligh2 === void 0 ? void 0 : _HighlightJs$highligh2.value;
          });
          var showReflection = ref(false);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(SectionHeader), {
              title: unref(componentName),
              description: __props.description
            }, null, 8, ["title", "description"]), createElementVNode("div", _hoisted_1$1, [_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(__props.value === void 0 ? 'col-sm-12' : 'col-sm-6')
            }, [_hoisted_2$1, renderSlot(_ctx.$slots, "default"), __props.enableReflection ? (openBlock(), createElementBlock("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4, [createVNode(unref(Switch), {
              modelValue: showReflection.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => showReflection.value = $event),
              text: "Show Reflection"
            }, null, 8, ["modelValue"])]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [showReflection.value ? (openBlock(), createElementBlock("div", _hoisted_5, [_hoisted_6, renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)]),
              _: 3
            })])) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), __props.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [createElementVNode("div", _hoisted_8, [createElementVNode("h4", null, [_hoisted_9, __props.hasMultipleValues ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [_hoisted_10], 64)) : createCommentVNode("v-if", true)]), __props.hasMultipleValues ? (openBlock(true), createElementBlock(Fragment, {
              key: 0
            }, renderList(unref(formattedValue), (value, key) => {
              return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h5", null, [createElementVNode("code", null, toDisplayString(key), 1)]), createElementVNode("pre", _hoisted_11, toDisplayString(value), 1)], 64);
            }), 256)) : (openBlock(), createElementBlock("pre", _hoisted_12, toDisplayString(unref(formattedValue)), 1))])])) : createCommentVNode("v-if", true)]), _ctx.$slots.settings ? (openBlock(), createElementBlock("div", _hoisted_13, [_hoisted_14, renderSlot(_ctx.$slots, "settings")])) : createCommentVNode("v-if", true), __props.importCode || __props.exampleCode || _ctx.$slots.usage ? (openBlock(), createElementBlock("div", _hoisted_15, [_hoisted_16, renderSlot(_ctx.$slots, "usage", {}, () => [__props.importCode ? (openBlock(), createElementBlock("h5", _hoisted_17, "Import")) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "importNotes"), __props.importCode ? (openBlock(), createElementBlock("div", _hoisted_18, [createElementVNode("pre", _hoisted_19, [createElementVNode("code", {
              innerHTML: unref(styledImportCode)
            }, null, 8, _hoisted_20)]), createVNode(unref(CopyButton), {
              value: __props.importCode,
              class: "galleryContent-codeCopyButton",
              btnSize: "sm",
              btnType: "link"
            }, null, 8, ["value"])])) : createCommentVNode("v-if", true), __props.exampleCode ? (openBlock(), createElementBlock("h5", _hoisted_21, "Template Syntax")) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "syntaxNotes"), __props.exampleCode ? (openBlock(), createElementBlock("div", _hoisted_22, [createElementVNode("pre", _hoisted_23, [createElementVNode("code", {
              innerHTML: unref(styledExampleCode)
            }, null, 8, _hoisted_24)]), createVNode(unref(CopyButton), {
              value: __props.exampleCode,
              class: "galleryContent-codeCopyButton",
              btnSize: "sm",
              btnType: "link"
            }, null, 8, ["value"])])) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true), _ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_25, _hoisted_27)) : createCommentVNode("v-if", true), _ctx.$attrs.splitWidth !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_28, _hoisted_30)) : createCommentVNode("v-if", true), _ctx.$slots.gallery ? (openBlock(), createElementBlock("div", _hoisted_31, [_hoisted_32, renderSlot(_ctx.$slots, "gallery")])) : createCommentVNode("v-if", true), _ctx.$slots.result ? (openBlock(), createElementBlock("div", _hoisted_33, [_hoisted_34, renderSlot(_ctx.$slots, "result")])) : createCommentVNode("v-if", true)], 64);
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

      var css_248z = ".galleryContent-mainRow>div.well[data-v-5e8aca9b]{overflow-x:auto}.galleryContent-reflectionToggle[data-v-5e8aca9b]{display:flex;justify-content:flex-end}.galleryContent-valueBox[data-v-5e8aca9b]{max-height:300px;overflow:auto}.galleryContent-codeSampleWrapper[data-v-5e8aca9b]{position:relative}.galleryContent-codeSample[data-v-5e8aca9b]{overflow-x:auto;padding-right:3rem}.galleryContent-codeCopyButton[data-v-5e8aca9b]{position:absolute;right:.5rem;top:1.4rem;transform:translateY(-50%);z-index:1}.galleryContent-codeCopyButton[data-v-5e8aca9b]:before{background:linear-gradient(270deg,#f5f5f4,#f5f5f4 80%,#f5f5f500);bottom:-.3rem;content:\"\";left:-.5rem;position:absolute;right:-.5rem;top:-.3rem;z-index:-1}";
      styleInject(css_248z);

      script$1.__scopeId = "data-v-5e8aca9b";
      script$1.__file = "src/Example/ControlGallery/galleryAndResult.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "row"
      };
      var _hoisted_3 = createElementVNode("p", null, [createTextVNode("Additional props extend and are passed to the underlying "), createElementVNode("code", null, "Rock Form Field"), createTextVNode(".")], -1);
      var script = defineComponent({
        name: 'imageEditorGallery.partial',
        setup(__props) {
          var binaryFileTypeGuid = ref(BinaryFiletype.Default);
          var disabled = ref(false);
          var hideDeleteButton = ref(false);
          var value = ref(null);
          var aspectRatio = ref(1);
          var maxImageWidth = ref(0);
          var maxImageHeight = ref(0);
          var noPictureUrl = ref("/Assets/Images/person-no-photo-unknown.svg");
          var importCode = getSfcControlImportPath("imageEditor");
          var exampleCode = computed(() => {
            return "<ImageEditor v-model=\"value\" label=\"Profile Picture\"".concat(disabled.value ? " disabled" : "").concat(hideDeleteButton.value ? " hideDeleteButton" : "").concat(binaryFileTypeGuid.value !== BinaryFiletype.Default ? " :binaryFileTypeGuid=\"".concat(binaryFileTypeGuid.value, "\"") : "").concat(noPictureUrl.value !== "/Assets/Images/person-no-photo-unknown.svg" ? " :noPictureUrl=\"".concat(noPictureUrl.value, "\"") : "").concat(maxImageHeight.value !== 0 ? " :maxImageHeight=\"".concat(maxImageHeight.value, "\"") : "").concat(maxImageWidth.value !== 0 ? " :maxImageWidth=\"".concat(maxImageWidth.value, "\"") : "", " />");
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$1), {
              value: value.value,
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              enableReflection: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1, [createVNode(unref(CheckBox), {
                formGroupClasses: "col-sm-3",
                modelValue: disabled.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => disabled.value = $event),
                label: "Disabled"
              }, null, 8, ["modelValue"]), createVNode(unref(CheckBox), {
                formGroupClasses: "col-sm-3",
                modelValue: hideDeleteButton.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => hideDeleteButton.value = $event),
                label: "Hide Delete Button",
                help: "When there is an image value, by default there is a delete button that resets this control's value to null. Check this to prevent that button from appearing."
              }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
                formGroupClasses: "col-sm-3",
                modelValue: maxImageWidth.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => maxImageWidth.value = $event),
                label: "Max Image Width",
                help: "The maximum pixel width of the image to be uploaded to the server. If the cropped image is bigger than this, it will be scaled down to this width. Default is 0, which means there is no limit"
              }, null, 8, ["modelValue"]), createVNode(unref(NumberBox), {
                formGroupClasses: "col-sm-3",
                modelValue: maxImageHeight.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => maxImageHeight.value = $event),
                label: "Max Image Height",
                help: "The maximum pixel height of the image to be uploaded to the server. If the cropped image is bigger than this, it will be scaled down to this height. Default is 0, which means there is no limit"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_2, [createVNode(unref(NumberBox), {
                formGroupClasses: "col-sm-4",
                modelValue: aspectRatio.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => aspectRatio.value = $event),
                label: "Aspect Ratio",
                help: "A number that represents the width divided by the height. For example, to do a 16:9 ratio, divide 16 by 9 -> <u>1.77777</u>."
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                formGroupClasses: "col-sm-4",
                modelValue: binaryFileTypeGuid.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => binaryFileTypeGuid.value = $event),
                label: "Binary File Type Guid"
              }, null, 8, ["modelValue"]), createVNode(unref(TextBox), {
                formGroupClasses: "col-sm-4",
                modelValue: noPictureUrl.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => noPictureUrl.value = $event),
                label: "Placeholder Image",
                help: "The URL of the image that is shown if there is no cropped image chosen/provided. The URL in this box on page load is the default"
              }, null, 8, ["modelValue"])]), _hoisted_3]),
              default: withCtx(() => [createVNode(unref(ImageEditor), {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                label: "Profile Picture",
                disabled: disabled.value,
                hideDeleteButton: hideDeleteButton.value,
                binaryFileTypeGuid: binaryFileTypeGuid.value,
                noPictureUrl: noPictureUrl.value,
                maxImageWidth: maxImageWidth.value,
                maxImageHeight: maxImageHeight.value,
                aspectRatio: aspectRatio.value
              }, null, 8, ["modelValue", "disabled", "hideDeleteButton", "binaryFileTypeGuid", "noPictureUrl", "maxImageWidth", "maxImageHeight", "aspectRatio"])]),
              _: 1
            }, 8, ["value", "importCode", "exampleCode"]);
          };
        }
      });

      script.__file = "src/Example/ControlGallery/imageEditorGallery.partial.obs";

      var displayStyleItems = [{
        value: PickerDisplayStyle.Auto,
        text: "Auto"
      }, {
        value: PickerDisplayStyle.List,
        text: "List"
      }, {
        value: PickerDisplayStyle.Condensed,
        text: "Condensed"
      }];
      function buildExampleCode(elementName, attributes) {
        var attrs = [];
        for (var attr in attributes) {
          var value = attributes[attr];
          console.log("attributes", attr, value);
          if (isRef(value)) {
            value = value.value;
          }
          if (typeof value === "string") {
            attrs.push("".concat(attr, "=\"").concat(value, "\""));
          } else if (typeof value === "number") {
            attrs.push(":".concat(attr, "=\"").concat(value, "\""));
          } else if (typeof value === "boolean") {
            attrs.push(":".concat(attr, "=\"").concat(value ? "true" : "false", "\""));
          } else ;
        }
        console.log(attrs);
        return "<".concat(elementName, " ").concat(attrs.join(" "), " />");
      }
      var GalleryAndResult = exports('GalleryAndResult', defineComponent({
        name: "GalleryAndResult",
        inheritAttrs: false,
        components: {
          Switch: Switch$1,
          SectionHeader: SectionHeader$1,
          TransitionVerticalCollapse: TransitionVerticalCollapse$1,
          CopyButton: CopyButton$1
        },
        props: {
          value: {
            required: false
          },
          hasMultipleValues: {
            type: Boolean,
            default: false
          },
          enableReflection: {
            type: Boolean,
            default: false
          },
          importCode: {
            type: String
          },
          exampleCode: {
            type: String
          },
          description: {
            type: String,
            default: ""
          },
          displayAsRaw: {
            type: Boolean,
            default: false
          }
        },
        setup(props) {
          var _getCurrentInstance, _getCurrentInstance$p, _getCurrentInstance$p2;
          var componentName = convertComponentName((_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : (_getCurrentInstance$p = _getCurrentInstance.parent) === null || _getCurrentInstance$p === void 0 ? void 0 : (_getCurrentInstance$p2 = _getCurrentInstance$p.type) === null || _getCurrentInstance$p2 === void 0 ? void 0 : _getCurrentInstance$p2.name);
          var formattedValue = computed(() => {
            if (props.displayAsRaw) {
              return props.value;
            } else if (!props.hasMultipleValues) {
              return JSON.stringify(props.value, null, 4);
            } else {
              return ObjectUtils.fromEntries(Object.entries(props.value).map(_ref => {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];
                return [key, JSON.stringify(val, null, 4)];
              }));
            }
          });
          var styledImportCode = computed(() => {
            var _HighlightJs$highligh;
            if (!props.importCode) {
              return undefined;
            }
            return (_HighlightJs$highligh = HighlightJs.highlight(props.importCode, {
              language: "typescript"
            })) === null || _HighlightJs$highligh === void 0 ? void 0 : _HighlightJs$highligh.value;
          });
          var styledExampleCode = computed(() => {
            var _HighlightJs$highligh2;
            if (!props.exampleCode) {
              return undefined;
            }
            return (_HighlightJs$highligh2 = HighlightJs.highlight(props.exampleCode, {
              language: "html"
            })) === null || _HighlightJs$highligh2 === void 0 ? void 0 : _HighlightJs$highligh2.value;
          });
          var showReflection = ref(false);
          return {
            componentName,
            formattedValue,
            showReflection,
            styledExampleCode,
            styledImportCode
          };
        },
        template: "\n<v-style>\n.galleryContent-mainRow > div.well {\n    overflow-x: auto;\n}\n\n.galleryContent-reflectionToggle {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.galleryContent-valueBox {\n    max-height: 300px;\n    overflow: auto;\n}\n\n.galleryContent-codeSampleWrapper {\n    position: relative;\n}\n\n.galleryContent-codeSample {\n    padding-right: 3rem;\n    overflow-x: auto;\n}\n\n.galleryContent-codeCopyButton {\n    position: absolute;\n    top: 1.4rem;\n    transform: translateY(-50%);\n    right: .5rem;\n    z-index: 1;\n}\n\n.galleryContent-codeCopyButton::before {\n    content: \"\";\n    position: absolute;\n    top: -0.3rem;\n    right: -0.5rem;\n    bottom: -0.3rem;\n    left: -0.5rem;\n    background: linear-gradient(to left, #f5f5f4, #f5f5f4 80%, #f5f5f500);\n    z-index: -1;\n}\n</v-style>\n\n<SectionHeader :title=\"componentName\" :description=\"description\" />\n<div class=\"galleryContent-mainRow mb-5 row\">\n    <div v-if=\"$slots.default\" :class=\"value === void 0 ? 'col-sm-12' : 'col-sm-6'\">\n        <h4 class=\"mt-0\">Test Control</h4>\n        <slot name=\"default\" />\n\n        <div v-if=\"enableReflection\" class=\"mt-3\">\n            <div class=\"mb-3 galleryContent-reflectionToggle\">\n                <Switch v-model=\"showReflection\" text=\"Show Reflection\" />\n            </div>\n            <TransitionVerticalCollapse>\n                <div v-if=\"showReflection\">\n                    <h4 class=\"mt-0\">Control Reflection</h4>\n                    <slot name=\"default\" />\n                </div>\n            </TransitionVerticalCollapse>\n        </div>\n    </div>\n    <div v-if=\"value !== void 0\" class=\"col-sm-6\">\n        <div class=\"well\">\n            <h4>Current Value<template v-if=\"hasMultipleValues\">s</template></h4>\n            <template v-if=\"hasMultipleValues\" v-for=\"value, key in formattedValue\">\n                <h5><code>{{ key }}</code></h5>\n                <pre class=\"m-0 p-0 border-0 galleryContent-valueBox\">{{ value }}</pre>\n            </template>\n            <pre v-else class=\"m-0 p-0 border-0 galleryContent-valueBox\">{{ formattedValue }}</pre>\n        </div>\n    </div>\n</div>\n<div v-if=\"$slots.settings\" class=\"mb-5\">\n    <h4 class=\"mt-0\">Settings</h4>\n    <slot name=\"settings\" />\n</div>\n<div v-if=\"importCode || exampleCode || $slots.usage\" class=\"mb-5\">\n    <h4 class=\"mt-0 mb-3\">Usage Notes</h4>\n    <slot name=\"usage\">\n        <h5 v-if=\"importCode\" class=\"mt-3 mb-2\">Import</h5>\n        <slot name=\"importNotes\" />\n        <div v-if=\"importCode\" class=\"galleryContent-codeSampleWrapper\">\n            <pre class=\"galleryContent-codeSample\"><code v-html=\"styledImportCode\"></code></pre>\n            <CopyButton :value=\"importCode\" class=\"galleryContent-codeCopyButton\" btnSize=\"sm\" btnType=\"link\" />\n        </div>\n        <h5 v-if=\"exampleCode\" class=\"mt-3 mb-2\">Template Syntax</h5>\n        <slot name=\"syntaxNotes\" />\n        <div v-if=\"exampleCode\" class=\"galleryContent-codeSampleWrapper\">\n            <pre class=\"galleryContent-codeSample\"><code v-html=\"styledExampleCode\"></code></pre>\n            <CopyButton :value=\"exampleCode\" class=\"galleryContent-codeCopyButton\" btnSize=\"sm\" btnType=\"link\" />\n        </div>\n    </slot>\n</div>\n\n<div v-if=\"$slots.header\">\n    <p class=\"text-semibold font-italic\">The <code>header</code> slot is no longer supported.</p>\n</div>\n\n<div v-if=\"$attrs.splitWidth !== void 0\">\n    <p class=\"text-semibold font-italic\">The <code>splitWidth</code> prop is no longer supported.</p>\n</div>\n\n<div v-if=\"$slots.gallery\">\n    <p class=\"text-semibold font-italic\">The <code>gallery</code> slot is deprecated. Please update to the newest Control Gallery template.</p>\n    <slot name=\"gallery\" />\n</div>\n<div v-if=\"$slots.result\">\n    <p class=\"text-semibold font-italic\">The <code>result</code> slot is deprecated. Please update to the newest Control Gallery template.</p>\n    <slot name=\"result\" />\n</div>\n"
      }));
      function getControlImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Controls/").concat(fileName, "\";");
      }
      function getTemplateImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Templates/").concat(fileName, "\";");
      }
      var attributeValuesContainerGallery = defineComponent({
        name: "AttributeValuesContainerGallery",
        components: {
          GalleryAndResult,
          AttributeValuesContainer,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var isEditMode = ref(false);
          var showAbbreviatedName = ref(false);
          var showEmptyValues = ref(true);
          var displayAsTabs = ref(false);
          var showCategoryLabel = ref(true);
          var numberOfColumns = ref(2);
          var entityName = ref("Foo Entity");
          var categories = [{
            guid: newGuid(),
            name: "Cat A",
            order: 1
          }, {
            guid: newGuid(),
            name: "Cat B",
            order: 2
          }, {
            guid: newGuid(),
            name: "Cat C",
            order: 3
          }];
          var attributes = ref({
            text: {
              attributeGuid: newGuid(),
              categories: [categories[0]],
              description: "A text attribute.",
              fieldTypeGuid: FieldType.Text,
              isRequired: false,
              key: "text",
              name: "Text Attribute",
              order: 2,
              configurationValues: {},
              preHtml: "<div class='bg-primary p-3'>"
            },
            color: {
              attributeGuid: newGuid(),
              categories: [categories[0], categories[2]],
              description: "Favorite color? Or just a good one?",
              fieldTypeGuid: FieldType.Color,
              isRequired: true,
              key: "color",
              name: "Random Color",
              order: 4,
              configurationValues: {},
              postHtml: "</div>"
            },
            bool: {
              attributeGuid: newGuid(),
              categories: [categories[2]],
              description: "Are you foo?",
              fieldTypeGuid: FieldType.Boolean,
              isRequired: false,
              key: "bool",
              name: "Boolean Attribute",
              order: 3,
              configurationValues: {}
            },
            textagain: {
              attributeGuid: newGuid(),
              categories: [categories[1]],
              description: "Another text attribute.",
              fieldTypeGuid: FieldType.Text,
              isRequired: false,
              key: "textAgain",
              name: "Some Text",
              order: 5,
              configurationValues: {},
              preHtml: "<h5>PRE HTML!</h5>"
            },
            single: {
              attributeGuid: newGuid(),
              categories: [],
              description: "A single select attribute.",
              fieldTypeGuid: FieldType.SingleSelect,
              isRequired: false,
              key: "single",
              name: "Single Select",
              order: 1,
              configurationValues: {
                values: JSON.stringify([{
                  value: "1",
                  text: "One"
                }, {
                  value: "2",
                  text: "Two"
                }, {
                  value: "3",
                  text: "Three"
                }])
              }
            }
          });
          var attributeValues = ref({
            "text": "Default text value",
            "color": "#336699",
            "bool": "N",
            "textAgain": "",
            single: "1"
          });
          return {
            attributes,
            attributeValues,
            isEditMode,
            showAbbreviatedName,
            showEmptyValues,
            displayAsTabs,
            showCategoryLabel,
            numberOfColumns,
            entityName,
            showPrePost: ref(false),
            importCode: getControlImportPath("attributeValuesContainer"),
            exampleCode: "<AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" :isEditMode=\"false\" :showAbbreviatedName=\"false\" :showEmptyValues=\"true\" :displayAsTabs=\"false\" :showCategoryLabel=\"true\" :numberOfColumns=\"1\" :entityTypeName=\"entityName\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{ attributes, modelValue: attributeValues }\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <AttributeValuesContainer\n        v-model=\"attributeValues\"\n        :attributes=\"attributes\"\n        :isEditMode=\"isEditMode\"\n        :showAbbreviatedName=\"showAbbreviatedName\"\n        :showEmptyValues=\"showEmptyValues\"\n        :displayAsTabs=\"displayAsTabs\"\n        :showCategoryLabel=\"showCategoryLabel\"\n        :numberOfColumns=\"numberOfColumns\"\n        :entityTypeName=\"entityName\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"isEditMode\" label=\"Edit Mode\" text=\"Enable\" help=\"Default: false\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showAbbreviatedName\" label=\"Abbreviated Name\" text=\"Show\" help=\"Default: false\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showEmptyValues\" label=\"Empty Values\" text=\"Show\" help=\"Default: true; Only applies if not in edit mode\" />\n        </div>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"displayAsTabs\" label=\"Category Tabs\" text=\"Show\" help=\"Default: false; If any attributes are in a category, display each category as a tab. Not applicable while editing.\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showCategoryLabel\" label=\"Category Labels\" text=\"Show\" help=\"Default: false; Only applies when not displaying tabs.\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showPrePost\" label=\"Render Pre/Post HTML\" text=\"Show\" help=\"Default: true\" />\n        </div>\n        <div class=\"row\">\n            <NumberBox formGroupClasses=\"col-sm-6\" v-model=\"numberOfColumns\" label=\"Number of Columns\" help=\"Default: 1; Only applies when not displaying tabs.\" />\n            <TextBox formGroupClasses=\"col-sm-6\" v-model=\"entityName\" label=\"Entity Type\" help=\"Default: ''; Appears in the heading when category labels are showing.\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var fieldFilterEditorGallery = defineComponent({
        name: "FieldFilterEditorGallery",
        components: {
          GalleryAndResult,
          FieldFilterEditor,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var sources = [{
            guid: "2a50d342-3a0b-4da3-83c1-25839c75615c",
            type: 0,
            attribute: {
              attributeGuid: "4eb1eb34-988b-4212-8c93-844fae61b43c",
              fieldTypeGuid: "9C204CD0-1233-41C5-818A-C5DA439445AA",
              name: "Text Field",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {
                maxcharacters: "10"
              }
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c0",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b0",
              fieldTypeGuid: "A75DFC58-7A1B-4799-BF31-451B2BBE38FF",
              name: "Integer Field",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {}
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c1",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b1",
              fieldTypeGuid: "D747E6AE-C383-4E22-8846-71518E3DD06F",
              name: "Color",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {
                selectiontype: "Color Picker"
              }
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c2",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b2",
              fieldTypeGuid: "3EE69CBC-35CE-4496-88CC-8327A447603F",
              name: "Currency",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {}
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c3",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b3",
              fieldTypeGuid: "9C7D431C-875C-4792-9E76-93F3A32BB850",
              name: "Date Range",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {}
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c4",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b4",
              fieldTypeGuid: "7EDFA2DE-FDD3-4AC1-B356-1F5BFC231DAE",
              name: "Day of Week",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {}
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c5",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b5",
              fieldTypeGuid: "3D045CAE-EA72-4A04-B7BE-7FD1D6214217",
              name: "Email",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {}
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c6",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b6",
              fieldTypeGuid: "2E28779B-4C76-4142-AE8D-49EA31DDB503",
              name: "Gender",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {
                hideUnknownGender: "True"
              }
            }
          }, {
            guid: "6dbb47c4-5816-4110-8a52-92880d4d05c7",
            type: 0,
            attribute: {
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b7",
              fieldTypeGuid: "C28C7BF3-A552-4D77-9408-DEDCF760CED0",
              name: "Memo",
              description: "",
              order: 0,
              isRequired: false,
              configurationValues: {
                numberofrows: "4",
                allowhtml: "True",
                maxcharacters: "5",
                showcountdown: "True"
              }
            }
          }];
          var prefilled = () => ({
            guid: newGuid(),
            expressionType: 4,
            rules: [{
              guid: "a81c3ef9-72a9-476b-8b88-b52f513d92e6",
              comparisonType: 128,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b0",
              value: "50"
            }, {
              guid: "74d34117-4cc6-4cea-92c5-8297aa693ba5",
              comparisonType: 2,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b1",
              value: "BlanchedAlmond"
            }, {
              guid: "0fa2b6ea-bc86-4fae-b0da-02e48fed8d96",
              comparisonType: 8,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b5",
              value: "@gmail.com"
            }, {
              guid: "434107e6-6c0c-4698-90ef-d615b1c2de4b",
              comparisonType: 2,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b6",
              value: "2"
            }, {
              guid: "706179b9-7518-4a74-8e0f-8a48016aec04",
              comparisonType: 16,
              sourceType: 0,
              attributeGuid: "4eb1eb34-988b-4212-8c93-844fae61b43c",
              value: "text"
            }, {
              guid: "4564eac2-15d9-48d9-b618-563523285af0",
              comparisonType: 512,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b2",
              value: "999"
            }, {
              guid: "e6c56d4c-7f63-44f9-8f07-1ea0860b605d",
              comparisonType: 1,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b3",
              value: "2022-02-01,2022-02-28"
            }, {
              guid: "0c27507f-9fb7-4f37-8026-70933bbf1398",
              comparisonType: 0,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b4",
              value: "3"
            }, {
              guid: "4f68fa2c-0942-4084-bb4d-3c045cef4551",
              comparisonType: 8,
              sourceType: 0,
              attributeGuid: "c41817d8-be26-460c-9f89-a7059ae6a9b7",
              value: "more text than I want to deal with...."
            }]
          });
          var clean = () => ({
            guid: newGuid(),
            expressionType: 1,
            rules: []
          });
          var usePrefilled = ref(false);
          var value = ref(clean());
          watch(usePrefilled, () => {
            value.value = usePrefilled.value ? prefilled() : clean();
          });
          var title = ref("TEST PROPERTY");
          return {
            sources,
            value,
            title,
            usePrefilled,
            importCode: getControlImportPath("fieldFilterEditor"),
            exampleCode: "<FieldFilterEditor :sources=\"sources\" v-model=\"value\" :title=\"title\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{ 'output:modelValue':value, 'input:sources':sources }\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <FieldFilterEditor :sources=\"sources\" v-model=\"value\" :title=\"title\" />\n\n    <template #settings>\n        <TextBox v-model=\"title\" label=\"Attribute Name\" />\n        <CheckBox v-model=\"usePrefilled\" text=\"Use prefilled data\" />\n    </template>\n</GalleryAndResult>"
      });
      var phoneNumberBoxGallery = defineComponent({
        name: "PhoneNumberBoxGallery",
        components: {
          GalleryAndResult,
          PhoneNumberBox,
          RockForm,
          RockButton
        },
        setup() {
          return {
            phoneNumber: ref(null),
            submit: ref(false),
            importCode: getSfcControlImportPath("phoneNumberBox"),
            exampleCode: "<PhoneNumberBox label=\"Phone Number\" v-model=\"phoneNumber\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"phoneNumber\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockForm v-model:submit=\"submit\">\n        <PhoneNumberBox label=\"Phone Number\" v-model=\"phoneNumber\" />\n        <RockButton @click=\"submit=true\">Validate</RockButton>\n    </RockForm>\n\n    <template #settings>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var helpBlockGallery = defineComponent({
        name: "HelpBlockGallery",
        components: {
          GalleryAndResult,
          HelpBlock,
          TextBox: TextBox$1
        },
        setup() {
          return {
            text: ref("This is some helpful text that explains something."),
            importCode: getControlImportPath("helpBlock"),
            exampleCode: "<HelpBlock text=\"text\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <HelpBlock :text=\"text\" />\n    Hover over the symbol to the left to view HelpBlock in action\n\n    <template #settings>\n        <TextBox label=\"Text\" v-model=\"text\" help=\"The text for the help tooltip to display\" rules=\"required\" />\n    </template>\n</GalleryAndResult>"
      });
      var dropDownListGallery = defineComponent({
        name: "DropDownListGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList
        },
        setup() {
          var options = [{
            text: "A Text",
            value: "a",
            category: "First"
          }, {
            text: "B Text",
            value: "b",
            category: "First"
          }, {
            text: "C Text",
            value: "c",
            category: "Second"
          }, {
            text: "D Text",
            value: "d",
            category: "Second",
            disabled: true
          }];
          var loadOptionsAsync = function () {
            var _ref3 = _asyncToGenerator(function* () {
              yield sleep(5000);
              return options;
            });
            return function loadOptionsAsync() {
              return _ref3.apply(this, arguments);
            };
          }();
          return {
            enhanceForLongLists: ref(false),
            loadOptionsAsync,
            showBlankItem: ref(true),
            grouped: ref(false),
            multiple: ref(false),
            value: ref(null),
            options,
            importCode: getControlImportPath("dropDownList"),
            exampleCode: "<DropDownList label=\"Select\" v-model=\"value\" :items=\"options\" :showBlankItem=\"true\" :enhanceForLongLists=\"false\" :grouped=\"false\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': value, 'input:items': options}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <DropDownList label=\"Select\" v-model=\"value\" :items=\"options\" :showBlankItem=\"showBlankItem\" :enhanceForLongLists=\"enhanceForLongLists\" :grouped=\"grouped\" :multiple=\"multiple\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Grouped\" v-model=\"grouped\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Multiple\" v-model=\"multiple\" />\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var radioButtonListGallery = defineComponent({
        name: "RadioButtonListGallery",
        components: {
          GalleryAndResult,
          RadioButtonList,
          Toggle,
          NumberUpDown
        },
        setup() {
          return {
            value: ref("a"),
            isHorizontal: ref(false),
            repeatColumns: ref(0),
            options: [{
              text: "A Text",
              value: "a"
            }, {
              text: "B Text",
              value: "b"
            }, {
              text: "C Text",
              value: "c"
            }, {
              text: "D Text",
              value: "d"
            }, {
              text: "E Text",
              value: "e"
            }, {
              text: "F Text",
              value: "f"
            }, {
              text: "G Text",
              value: "g"
            }],
            importCode: getControlImportPath("radioButtonList"),
            exampleCode: "<RadioButtonList label=\"Radio List\" v-model=\"value\" :items=\"options\" :horizontal=\"false\" :repeatColumns=\"0\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': value, 'input:items': options}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <RadioButtonList label=\"Radio List\" v-model=\"value\" :items=\"options\" :horizontal=\"isHorizontal\" :repeatColumns=\"repeatColumns\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <NumberUpDown formGroupClasses=\"col-sm-6\" label=\"Horizontal Columns\" v-model=\"repeatColumns\" :min=\"0\" />\n            <Toggle formGroupClasses=\"col-sm-6\" label=\"Horizontal\" v-model=\"isHorizontal\" />\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var checkBoxGallery = defineComponent({
        name: "CheckBoxGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          return {
            isChecked: ref(false),
            importCode: getControlImportPath("checkBox"),
            exampleCode: "<CheckBox label=\"Check Box\" text=\"Enable\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"isChecked\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CheckBox label=\"Check Box\" text=\"Enable\" v-model=\"isChecked\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var inlineCheckBoxGallery = defineComponent({
        name: "InlineCheckBoxGallery",
        components: {
          GalleryAndResult,
          InlineCheckBox
        },
        data() {
          return {
            isChecked: false,
            inline: true,
            importCode: getControlImportPath("checkBox"),
            exampleCode: "<CheckBox label=\"Check Box\" text=\"Enable\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"isChecked\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    description=\"Check Box with label that is displayed beside it instead of above it\"\n    enableReflection >\n    <InlineCheckBox label=\"Inline Label\" v-model=\"isChecked\" />\n</GalleryAndResult>"
      });
      var dialogGallery = defineComponent({
        name: "DialogGallery",
        components: {
          GalleryAndResult,
          RockButton,
          Dialog,
          CheckBox: CheckBox$1
        },
        setup() {
          return {
            isDialogVisible: ref(false),
            isDismissible: ref(true),
            importCode: getControlImportPath("dialog"),
            exampleCode: "<Dialog v-model=\"isDialogVisible\" :dismissible=\"true\">\n    <template #header>\n        <h4>Dialog Header</h4>\n    </template>\n    <template #default>\n        <p>Dialog Main Content</p>\n    </template>\n    <template #footer>\n        <p>Dialog Footer (usually for buttons)</p>\n    </template>\n</Dialog>"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"isDialogVisible\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <RockButton @click=\"isDialogVisible = true\">Show</RockButton>\n\n    <Dialog v-model=\"isDialogVisible\" :dismissible=\"isDismissible\">\n        <template #header>\n            <h4>Romans 11:33-36</h4>\n        </template>\n        <template #default>\n            <p>\n                Oh, the depth of the riches<br />\n                and the wisdom and the knowledge of God!<br />\n                How unsearchable his judgments<br />\n                and untraceable his ways!<br />\n                For who has known the mind of the Lord?<br />\n                Or who has been his counselor?<br />\n                And who has ever given to God,<br />\n                that he should be repaid?<br />\n                For from him and through him<br />\n                and to him are all things.<br />\n                To him be the glory forever. Amen.\n            </p>\n        </template>\n        <template #footer>\n            <RockButton @click=\"isDialogVisible = false\" btnType=\"primary\">OK</RockButton>\n            <RockButton @click=\"isDialogVisible = false\" btnType=\"default\">Cancel</RockButton>\n        </template>\n    </Dialog>\n\n    <template #settings>\n        <CheckBox label=\"Dismissible\" text=\"Show the close button\" v-model=\"isDismissible\" />\n    </template>\n</GalleryAndResult>"
      });
      var checkBoxListGallery = defineComponent({
        name: "CheckBoxListGallery",
        components: {
          GalleryAndResult,
          CheckBoxList,
          NumberUpDown,
          Toggle
        },
        setup() {
          return {
            items: ref(["green"]),
            options: [{
              value: "red",
              text: "Red"
            }, {
              value: "green",
              text: "Green"
            }, {
              value: "blue",
              text: "Blue"
            }],
            isHorizontal: ref(false),
            repeatColumns: ref(0),
            importCode: getControlImportPath("checkBoxList"),
            exampleCode: "<CheckBoxList label=\"CheckBoxList\" v-model=\"value\" :items=\"options\" :horizontal=\"false\" :repeatColumns=\"0\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': items, 'input:items': options}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CheckBoxList label=\"CheckBoxList\" v-model=\"items\" :items=\"options\" :horizontal=\"isHorizontal\" :repeatColumns=\"repeatColumns\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <NumberUpDown formGroupClasses=\"col-sm-6\" label=\"Horizontal Columns\" v-model=\"repeatColumns\" :min=\"0\" />\n            <Toggle formGroupClasses=\"col-sm-6\" label=\"Horizontal\" v-model=\"isHorizontal\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var listBoxGallery = defineComponent({
        name: "ListBoxGallery",
        components: {
          GalleryAndResult,
          ListBox,
          InlineCheckBox
        },
        setup() {
          return {
            value: ref(["a"]),
            options: [{
              text: "A Text",
              value: "a"
            }, {
              text: "B Text",
              value: "b"
            }, {
              text: "C Text",
              value: "c"
            }, {
              text: "D Text",
              value: "d"
            }],
            enhanced: ref(false),
            importCode: getControlImportPath("listBox"),
            exampleCode: "<ListBox label=\"Select\" v-model=\"value\" :items=\"options\" :enhanceForLongLists=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': value, 'input:items': options}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <ListBox label=\"Select\" v-model=\"value\" :items=\"options\" :enhanceForLongLists=\"enhanced\" />\n\n    <template #settings>\n        <InlineCheckBox v-model=\"enhanced\" label=\"Use Enhanced Functionality\" />\n    </template>\n</GalleryAndResult>"
      });
      var datePickerGallery = defineComponent({
        name: "DatePickerGallery",
        components: {
          GalleryAndResult,
          DatePicker,
          InlineCheckBox
        },
        setup() {
          return {
            date: ref(null),
            displayCurrentOption: ref(false),
            isCurrentDateOffset: ref(false),
            disableForceParse: ref(false),
            disableShowOnFocus: ref(false),
            disableHighlightToday: ref(false),
            disallowFutureDateSelection: ref(false),
            disallowPastDateSelection: ref(false),
            isDisabled: ref(false),
            startView: ref(0),
            viewOptions: [{
              value: 0,
              text: "Month"
            }, {
              value: 1,
              text: "Year"
            }, {
              value: 2,
              text: "Decade"
            }],
            importCode: getControlImportPath("datePicker"),
            exampleCode: "<DatePicker label=\"Date\" v-model=\"date\"\n    :displayCurrentOption=\"false\"\n    :isCurrentDateOffset=\"false\"\n    :disableForceParse=\"false\"\n    :disableShowOnFocus=\"false\"\n    :disableHighlightToday=\"false\"\n    :disallowFutureDateSelection=\"false\"\n    :disallowPastDateSelection=\"false\"\n    :startView=\"startView\"\n/>"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"date\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DatePicker label=\"Date\" v-model=\"date\" :displayCurrentOption=\"displayCurrentOption\" :isCurrentDateOffset=\"isCurrentDateOffset\" :disabled=\"isDisabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"displayCurrentOption\" label=\"Display Current Option\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"isCurrentDateOffset\" label=\"Is Current Date Offset\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"isDisabled\" label=\"Disable\" />\n            </div>\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var dateRangePickerGallery = defineComponent({
        name: "DateRangePickerGallery",
        components: {
          GalleryAndResult,
          DateRangePicker
        },
        setup() {
          return {
            date: ref({}),
            disallowPastDateSelection: ref(false),
            importCode: getControlImportPath("dateRangePicker"),
            exampleCode: "<DateRangePicker label=\"Date Range\" v-model=\"date\"\n    :disallowPastDateSelection=\"false\"\n/>"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"date\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DateRangePicker label=\"Date Range\" v-model=\"date\" />\n\n    <template #settings>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var dateTimePickerGallery = defineComponent({
        name: "DateTimePickerGallery",
        components: {
          GalleryAndResult,
          DateTimePicker,
          InlineCheckBox
        },
        setup() {
          return {
            date: ref(null),
            displayCurrentOption: ref(false),
            isCurrentDateOffset: ref(false),
            importCode: getControlImportPath("dateTimePicker"),
            exampleCode: "<DateTimePicker label=\"Date and Time\" v-model=\"date\" :displayCurrentOption=\"false\" :isCurrentDateOffset=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"date\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <DateTimePicker label=\"Date and Time\" v-model=\"date\" :displayCurrentOption=\"displayCurrentOption\" :isCurrentDateOffset=\"isCurrentDateOffset\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"displayCurrentOption\" label=\"Display Current Option\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"isCurrentDateOffset\" label=\"Is Current Date Offset\" />\n            </div>\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var datePartsPickerGallery = defineComponent({
        name: "DatePartsPickerGallery",
        components: {
          GalleryAndResult,
          Toggle,
          DatePartsPicker
        },
        setup() {
          return {
            showYear: ref(true),
            datePartsModel: ref({
              month: 1,
              day: 1,
              year: 2020
            }),
            importCode: getControlImportPath("datePartsPicker"),
            exampleCode: "<DatePartsPicker label=\"Date\" v-model=\"date\" :requireYear=\"true\" :showYear=\"true\" :allowFutureDates=\"true\" :futureYearCount=\"50\" :startYear=\"1900\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"datePartsModel\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DatePartsPicker label=\"Date\" v-model=\"datePartsModel\" :showYear=\"showYear\" />\n\n    <template #settings>\n        <Toggle label=\"Show Year\" v-model=\"showYear\" />\n        <p class=\"mt-4 mb-4\">The <a href=\"#BirthdayPickerGallery\">Birthday Picker</a> simply wraps this control and sets <code>allowFutureDates</code> and <code>requireYear</code> to <code>false</code>.</p>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var textBoxGallery = defineComponent({
        name: "TextBoxGallery",
        components: {
          GalleryAndResult,
          TextBox: TextBox$1
        },
        data() {
          return {
            text: "Some two-way bound text",
            importCode: getControlImportPath("textBox"),
            exampleCode: "<TextBox label=\"Text 1\" v-model=\"text\" :maxLength=\"50\" showCountDown />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"text\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <TextBox label=\"Text 1\" v-model=\"text\" :maxLength=\"50\" showCountDown />\n    <TextBox label=\"Text 2\" v-model=\"text\" />\n    <TextBox label=\"Memo\" v-model=\"text\" textMode=\"MultiLine\" :rows=\"10\" :maxLength=\"100\" showCountDown />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var colorPickerGallery = defineComponent({
        name: "ColorPickerGallery",
        components: {
          GalleryAndResult,
          ColorPicker
        },
        setup() {
          return {
            value: ref("#ee7725"),
            importCode: getControlImportPath("colorPicker"),
            exampleCode: "<ColorPicker label=\"Color\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <ColorPicker label=\"Color\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var numberBoxGallery = defineComponent({
        name: "NumberBoxGallery",
        components: {
          GalleryAndResult,
          RockForm,
          RockButton,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          var minimumValue = ref("0");
          var maximumValue = ref("1");
          var value = ref(42);
          var numericMinimumValue = computed(() => toNumber(minimumValue.value));
          var numericMaximumValue = computed(() => toNumber(maximumValue.value));
          return {
            minimumValue,
            maximumValue,
            numericMinimumValue,
            numericMaximumValue,
            value,
            importCode: getControlImportPath("numberBox"),
            exampleCode: "<NumberBox label=\"Number\" v-model=\"value\" :minimumValue=\"minimumValue\" :maximumValue=\"maximumValue\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <RockForm>\n        <NumberBox label=\"Number\" v-model=\"value\" :minimumValue=\"numericMinimumValue\" :maximumValue=\"numericMaximumValue\" />\n        <RockButton btnType=\"primary\" type=\"submit\">Test Validation</RockButton>\n    </RockForm>\n\n    <template #settings>\n        <TextBox label=\"Minimum Value\" v-model=\"minimumValue\" />\n        <TextBox label=\"Maximum Value\" v-model=\"maximumValue\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var numberRangeBoxGallery = defineComponent({
        name: "NumberRangeBoxGallery",
        components: {
          GalleryAndResult,
          NumberRangeBox
        },
        setup() {
          return {
            value: ref({
              lower: 0,
              upper: 100
            }),
            importCode: getControlImportPath("numberRangeBox"),
            exampleCode: "<NumberRangeBox label=\"Number Range\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <NumberRangeBox label=\"Number Range\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var genderDropDownListGallery = defineComponent({
        name: "GenderDropDownListGallery",
        components: {
          GalleryAndResult,
          GenderDropDownList
        },
        setup() {
          return {
            value: ref("1"),
            importCode: getControlImportPath("genderDropDownList"),
            exampleCode: "<GenderDropDownList label=\"Your Gender\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <GenderDropDownList label=\"Your Gender\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var socialSecurityNumberBoxGallery = defineComponent({
        name: "SocialSecurityNumberBoxGallery",
        components: {
          GalleryAndResult,
          SocialSecurityNumberBox
        },
        setup() {
          return {
            value: ref("123456789"),
            importCode: getControlImportPath("socialSecurityNumberBox"),
            exampleCode: "<SocialSecurityNumberBox label=\"SSN\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <SocialSecurityNumberBox label=\"SSN\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var timePickerGallery = defineComponent({
        name: "TimePickerGallery",
        components: {
          GalleryAndResult,
          TimePicker
        },
        setup() {
          return {
            value: ref({
              hour: 14,
              minute: 15
            }),
            importCode: getControlImportPath("timePicker"),
            exampleCode: "<TimePicker label=\"Time\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <TimePicker label=\"Time\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var ratingGallery = defineComponent({
        name: "RatingGallery",
        components: {
          GalleryAndResult,
          NumberBox: NumberBox$1,
          Rating
        },
        setup() {
          return {
            value: ref(3),
            maximumValue: ref(5),
            importCode: getControlImportPath("rating"),
            exampleCode: "<Rating label=\"Rating\" v-model=\"value\" :maxRating=\"5\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <Rating label=\"How Would You Rate God?\" v-model=\"value\" :maxRating=\"maximumValue || 5\" />\n\n    <template #settings>\n        <NumberBox label=\"Maximum Rating\" v-model=\"maximumValue\" />\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var switchGallery = defineComponent({
        name: "SwitchGallery",
        components: {
          GalleryAndResult,
          Switch: Switch$1
        },
        setup() {
          return {
            isChecked: ref(false),
            importCode: getControlImportPath("switch"),
            exampleCode: "<Switch text=\"Switch\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"isChecked\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <Switch text=\"Switch\" v-model=\"isChecked\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var inlineSwitchGallery = defineComponent({
        name: "InlineSwitchGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          InlineSwitch
        },
        setup() {
          return {
            isBold: ref(false),
            isChecked: ref(false),
            importCode: getControlImportPath("inlineSwitch"),
            exampleCode: "<InlineSwitch label=\"Inline Switch\" v-model=\"value\" :isBold=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"isChecked\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <InlineSwitch label=\"Inline Switch\" v-model=\"isChecked\" :isBold=\"isBold\" />\n\n    <template #settings>\n        <CheckBox label=\"Is Bold\" v-model=\"isBold\" />\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var currencyBoxGallery = defineComponent({
        name: "CurrencyBoxGallery",
        components: {
          GalleryAndResult,
          CurrencyBox
        },
        setup() {
          return {
            value: ref(1.23),
            importCode: getControlImportPath("currencyBox"),
            exampleCode: "<CurrencyBox label=\"Currency\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CurrencyBox label=\"Currency\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Number Box</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var emailBoxGallery = defineComponent({
        name: "EmailBoxGallery",
        components: {
          GalleryAndResult,
          EmailBox
        },
        setup() {
          return {
            value: ref("ted@rocksolidchurchdemo.com"),
            importCode: getControlImportPath("emailBox"),
            exampleCode: "<EmailBox label=\"Email\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <EmailBox label=\"Email\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var numberUpDownGallery = defineComponent({
        name: "NumberUpDownGallery",
        components: {
          GalleryAndResult,
          NumberUpDown
        },
        setup() {
          return {
            value: ref(1),
            importCode: getControlImportPath("numberUpDown"),
            exampleCode: "<NumberUpDown label=\"Number\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <NumberUpDown label=\"Number\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var staticFormControlGallery = defineComponent({
        name: "StaticFormControlGallery",
        components: {
          GalleryAndResult,
          StaticFormControl
        },
        setup() {
          return {
            value: ref("This is a static value"),
            importCode: getControlImportPath("staticFormControl"),
            exampleCode: "<StaticFormControl label=\"Static Value\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <StaticFormControl label=\"Static Value\" v-model=\"value\" />\n</GalleryAndResult>"
      });
      var addressControlGallery = defineComponent({
        name: "AddressControlGallery",
        components: {
          GalleryAndResult,
          RockForm,
          RockButton,
          CheckBox: CheckBox$1,
          AddressControl
        },
        setup() {
          return {
            value: ref({}),
            submit: ref(false),
            required: ref(false),
            importCode: getSfcControlImportPath("addressControl"),
            exampleCode: "<AddressControl label=\"Address\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockForm v-model:submit=\"submit\">\n    <AddressControl label=\"Address\" v-model=\"value\" :rules=\"required ? 'required' : ''\" />\n\n    <RockButton @click=\"submit=true\">Validate</RockButton>\n    </RockForm>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p>All props match that of a <code>Rock Form Field</code></p>\n    </template>\n</GalleryAndResult>"
      });
      var toggleGallery = defineComponent({
        name: "ToggleGallery",
        components: {
          GalleryAndResult,
          TextBox: TextBox$1,
          DropDownList,
          Toggle
        },
        setup() {
          return {
            trueText: ref("On"),
            falseText: ref("Off"),
            btnSize: ref("sm"),
            sizeOptions: [{
              value: "lg",
              text: "Large"
            }, {
              value: "md",
              text: "Medium"
            }, {
              value: "sm",
              text: "Small"
            }, {
              value: "xs",
              text: "Extra Small"
            }],
            value: ref(false),
            importCode: getControlImportPath("toggle"),
            exampleCode: "<Toggle label=\"Toggle\" v-model=\"value\" trueText=\"On\" falseText=\"Off\" :btnSize=\"btnSize\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <Toggle label=\"Toggle\" v-model=\"value\" :trueText=\"trueText\" :falseText=\"falseText\" :btnSize=\"btnSize\" />\n\n    <template #settings>\n        <TextBox label=\"True Text\" v-model=\"trueText\" />\n        <TextBox label=\"False Text\" v-model=\"falseText\" />\n        <DropDownList label=\"Button Size\" v-model=\"btnSize\" :items=\"sizeOptions\" />\n\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var progressTrackerGallery = defineComponent({
        name: "ProgressTrackerGallery",
        components: {
          GalleryAndResult,
          NumberUpDown,
          ProgressTracker
        },
        setup() {
          return {
            value: ref(0),
            items: [{
              key: "S",
              title: "Start",
              subtitle: "The beginning"
            }, {
              key: "1",
              title: "Step 1",
              subtitle: "The first step"
            }, {
              key: "2",
              title: "Step 2",
              subtitle: "The second step"
            }, {
              key: "3",
              title: "Step 3",
              subtitle: "The third step"
            }, {
              key: "4",
              title: "Step 4",
              subtitle: "The fourth step"
            }, {
              key: "5",
              title: "Step 5",
              subtitle: "The fifth step"
            }, {
              key: "6",
              title: "Step 6",
              subtitle: "The sixth step"
            }, {
              key: "7",
              title: "Step 7",
              subtitle: "The seventh step"
            }, {
              key: "8",
              title: "Step 8",
              subtitle: "The eighth step"
            }, {
              key: "F",
              title: "Finish",
              subtitle: "The finish"
            }],
            importCode: getControlImportPath("progressTracker"),
            exampleCode: "<ProgressTracker :items=\"items\" :currentIndex=\"0\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <ProgressTracker :items=\"items\" :currentIndex=\"value\" />\n\n    <template #settings>\n        <NumberUpDown label=\"Index\" v-model=\"value\" :min=\"0\" :max=\"10\" />\n    </template>\n</GalleryAndResult>"
      });
      var itemsWithPreAndPostHtmlGallery = defineComponent({
        name: "ItemsWithPreAndPostHtmlGallery",
        components: {
          GalleryAndResult,
          TextBox: TextBox$1,
          ItemsWithPreAndPostHtml
        },
        setup() {
          return {
            value: ref([{
              preHtml: '<div class="row"><div class="col-sm-6">',
              postHtml: "</div>",
              slotName: "item1"
            }, {
              preHtml: '<div class="col-sm-6">',
              postHtml: "</div></div>",
              slotName: "item2"
            }]),
            importCode: getControlImportPath("itemsWithPreAndPostHtml"),
            exampleCode: "<ItemsWithPreAndPostHtml :items=\"value\">\n    <template #item1>\n        <div>This is item 1</div>\n    </template>\n    <template #item2>\n        <div>This is item 2</div>\n    </template>\n</ItemsWithPreAndPostHtml>"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <ItemsWithPreAndPostHtml :items=\"value\">\n        <template #item1>\n            <div class=\"padding-all-sm text-center bg-primary\">This is item 1</div>\n        </template>\n        <template #item2>\n            <div class=\"padding-all-sm text-center bg-primary\">This is item 2</div>\n        </template>\n    </ItemsWithPreAndPostHtml>\n\n    <template #settings>\n        <TextBox label=\"Item 1 - Pre Html\" v-model=\"value[0].preHtml\" />\n        <TextBox label=\"Item 1 - Post Html\" v-model=\"value[0].postHtml\" />\n        <TextBox label=\"Item 2 - Pre Html\" v-model=\"value[1].preHtml\" />\n        <TextBox label=\"Item 2 - Post Html\" v-model=\"value[1].postHtml\" />\n    </template>\n</GalleryAndResult>"
      });
      var urlLinkBoxGallery = defineComponent({
        name: "UrlLinkBoxGallery",
        components: {
          UrlLinkBox,
          GalleryAndResult
        },
        setup() {
          return {
            value: ref("/home/"),
            importCode: getControlImportPath("urlLinkBox"),
            exampleCode: "<UrlLinkBox label=\"URL\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <UrlLinkBox label=\"URL\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var fullscreenGallery = defineComponent({
        name: "FullscreenGallery",
        components: {
          GalleryAndResult,
          InlineSwitch,
          CheckBox: CheckBox$1,
          Fullscreen
        },
        setup() {
          return {
            pageOnly: ref(true),
            value: ref(false),
            importCode: getControlImportPath("fullscreen"),
            exampleCode: "<Fullscreen v-model=\"value\" :isPageOnly=\"true\">\n    <p>Content to make full screen</p>\n</Fullscreen>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <Fullscreen v-model=\"value\" :isPageOnly=\"pageOnly\">\n        <div class=\"bg-info padding-all-md\" style=\"width:100%; height: 100%; min-height: 300px; display: grid; place-content: center;\">\n            <InlineSwitch v-model=\"value\" label=\"Fullscreen\" :isBold=\"true\" />\n        </div>\n    </Fullscreen>\n\n    <template #settings>\n        <CheckBox v-model=\"pageOnly\" label=\"Is Page Only\" help=\"If true, fills content window. If false, hides the browser chrome and fills entire screen.\" />\n    </template>\n</GalleryAndResult>"
      });
      var panelGallery = defineComponent({
        name: "PanelGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          CheckBoxList,
          Panel,
          RockButton
        },
        setup() {
          var simulateValues = ref([]);
          var headerSecondaryActions = computed(() => {
            if (!simulateValues.value.includes("headerSecondaryActions")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "default",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "default",
              handler: () => alert("Action 2 selected.")
            }];
          });
          return {
            colors: Array.apply(0, Array(256)).map((_, index) => "rgb(".concat(index, ", ").concat(index, ", ").concat(index, ")")),
            collapsibleValue: ref(true),
            drawerValue: ref(false),
            hasFullscreen: ref(false),
            hasZoom: ref(false),
            headerSecondaryActions,
            simulateValues,
            simulateOptions: [{
              value: "drawer",
              text: "Drawer"
            }, {
              value: "headerActions",
              text: "Header Actions"
            }, {
              value: "headerSecondaryActions",
              text: "Header Secondary Actions"
            }, {
              value: "subheaderLeft",
              text: "Subheader Left"
            }, {
              value: "subheaderRight",
              text: "Subheader Right"
            }, {
              value: "footerActions",
              text: "Footer Actions"
            }, {
              value: "footerSecondaryActions",
              text: "Footer Secondary Actions"
            }, {
              value: "helpContent",
              text: "Help Content"
            }, {
              value: "largeBody",
              text: "Large Body"
            }],
            simulateDrawer: computed(() => simulateValues.value.includes("drawer")),
            simulateHeaderActions: computed(() => simulateValues.value.includes("headerActions")),
            simulateSubheaderLeft: computed(() => simulateValues.value.includes("subheaderLeft")),
            simulateSubheaderRight: computed(() => simulateValues.value.includes("subheaderRight")),
            simulateFooterActions: computed(() => simulateValues.value.includes("footerActions")),
            simulateFooterSecondaryActions: computed(() => simulateValues.value.includes("footerSecondaryActions")),
            simulateLargeBody: computed(() => simulateValues.value.includes("largeBody")),
            simulateHelp: computed(() => simulateValues.value.includes("helpContent")),
            isFullscreenPageOnly: ref(true),
            value: ref(true),
            importCode: getControlImportPath("panel"),
            exampleCode: "<Panel v-model=\"isExanded\" v-model:isDrawerOpen=\"false\" title=\"Panel Title\" :hasCollapse=\"true\" :hasFullscreen=\"false\" :isFullscreenPageOnly=\"true\" :headerSecondaryActions=\"false\">\n    <template #helpContent>Help Content</template>\n    <template #drawer>Drawer Content</template>\n    <template #headerActions>Header Actions</template>\n    <template #subheaderLeft>Sub Header Left</template>\n    <template #subheaderRight>Sub Header Right</template>\n    <template #footerActions>Footer Actions</template>\n    <template #footerSecondaryActions>Footer Secondary Actions</template>\n\n    Main Panel Content\n</Panel>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <Panel v-model=\"value\" v-model:isDrawerOpen=\"drawerValue\" :hasCollapse=\"collapsibleValue\" :hasZoom=\"hasZoom\" :hasFullscreen=\"hasFullscreen\" :isFullscreenPageOnly=\"isFullscreenPageOnly\" title=\"Panel Title\" :headerSecondaryActions=\"headerSecondaryActions\">\n        <template v-if=\"simulateHelp\" #helpContent>\n            This is some help text.\n        </template>\n\n        <template v-if=\"simulateDrawer\" #drawer>\n            <div style=\"text-align: center;\">Drawer Content</div>\n        </template>\n\n        <template v-if=\"simulateHeaderActions\" #headerActions>\n            <span class=\"action\">\n                <i class=\"fa fa-star-o\"></i>\n            </span>\n\n            <span class=\"action\">\n                <i class=\"fa fa-user\"></i>\n            </span>\n        </template>\n\n        <template v-if=\"simulateSubheaderLeft\" #subheaderLeft>\n            <span class=\"label label-warning\">Warning</span>&nbsp;\n            <span class=\"label label-default\">Default</span>\n        </template>\n\n        <template v-if=\"simulateSubheaderRight\" #subheaderRight>\n            <span class=\"label label-info\">Info</span>&nbsp;\n            <span class=\"label label-default\">Default</span>\n        </template>\n\n        <template v-if=\"simulateFooterActions\" #footerActions>\n            <RockButton btnType=\"primary\">Action 1</RockButton>\n            <RockButton btnType=\"primary\">Action 2</RockButton>\n        </template>\n\n        <template v-if=\"simulateFooterSecondaryActions\" #footerSecondaryActions>\n            <RockButton btnType=\"default\"><i class=\"fa fa-lock\"></i></RockButton>\n            <RockButton btnType=\"default\"><i class=\"fa fa-unlock\"></i></RockButton>\n        </template>\n\n\n        <h4>Romans 11:33-36</h4>\n        <p>\n            Oh, the depth of the riches<br />\n            and the wisdom and the knowledge of God!<br />\n            How unsearchable his judgments<br />\n            and untraceable his ways!<br />\n            For who has known the mind of the Lord?<br />\n            Or who has been his counselor?<br />\n            And who has ever given to God,<br />\n            that he should be repaid?<br />\n            For from him and through him<br />\n            and to him are all things.<br />\n            To him be the glory forever. Amen.\n        </p>\n    </Panel>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"collapsibleValue\" label=\"Collapsible\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"value\" label=\"Panel Open\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"hasFullscreen\" label=\"Has Fullscreen\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"isFullscreenPageOnly\" label=\"Page Only Fullscreen\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"hasZoom\" label=\"Has Zoom\" />\n        </div>\n        <CheckBoxList v-model=\"simulateValues\" label=\"Simulate\" :items=\"simulateOptions\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var personPickerGallery = defineComponent({
        name: "PersonPickerGallery",
        components: {
          GalleryAndResult,
          PersonPicker
        },
        setup() {
          return {
            value: ref(null),
            importCode: getControlImportPath("personPicker"),
            exampleCode: "<PersonPicker v-model=\"value\" label=\"Person\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value ?? null\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <PersonPicker v-model=\"value\" label=\"Person\" />\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var fileUploaderGallery = defineComponent({
        name: "FileUploaderGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          FileUploader,
          TextBox: TextBox$1
        },
        setup() {
          return {
            binaryFileTypeGuid: ref(BinaryFiletype.Default),
            showDeleteButton: ref(true),
            uploadAsTemporary: ref(true),
            uploadButtonText: ref("Upload"),
            value: ref(null),
            importCode: getControlImportPath("fileUploader"),
            exampleCode: "<FileUploader v-model=\"value\" label=\"File Uploader\" :uploadAsTemporary=\"true\" :binaryFileTypeGuid=\"BinaryFiletype.Default\" uploadButtonText=\"Upload\" :showDeleteButton=\"true\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <FileUploader v-model=\"value\"\n        label=\"File Uploader\"\n        :uploadAsTemporary=\"uploadAsTemporary\"\n        :binaryFileTypeGuid=\"binaryFileTypeGuid\"\n        :uploadButtonText=\"uploadButtonText\"\n        :showDeleteButton=\"showDeleteButton\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"uploadAsTemporary\" label=\"Upload As Temporary\" />\n            <TextBox formGroupClasses=\"col-sm-8\" v-model=\"binaryFileTypeGuid\" label=\"Binary File Type Guid\" />\n        </div>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showDeleteButton\" label=\"Show Delete Button\" />\n            <TextBox formGroupClasses=\"col-sm-8\" v-model=\"uploadButtonText\" label=\"Upload Button Text\" />\n        </div>\n\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var imageUploaderGallery = defineComponent({
        name: "ImageUploaderGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          ImageUploader,
          TextBox: TextBox$1
        },
        setup() {
          return {
            binaryFileTypeGuid: ref(BinaryFiletype.Default),
            showDeleteButton: ref(true),
            uploadAsTemporary: ref(true),
            uploadButtonText: ref("Upload"),
            value: ref(null),
            importCode: getControlImportPath("imageUploader"),
            exampleCode: "<ImageUploader v-model=\"value\" label=\"Image Uploader\" :uploadAsTemporary=\"true\" :binaryFileTypeGuid=\"BinaryFiletype.Default\" uploadButtonText=\"Upload\" :showDeleteButton=\"true\" />"
          };
        },
        template: "\n    <GalleryAndResult\n        :value=\"value\"\n        :importCode=\"importCode\"\n        :exampleCode=\"exampleCode\"\n        enableReflection >\n        <ImageUploader v-model=\"value\"\n            label=\"Image Uploader\"\n            :uploadAsTemporary=\"uploadAsTemporary\"\n            :binaryFileTypeGuid=\"binaryFileTypeGuid\"\n            :uploadButtonText=\"uploadButtonText\"\n            :showDeleteButton=\"showDeleteButton\" />\n\n        <template #settings>\n            <div class=\"row\">\n                <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"uploadAsTemporary\" label=\"Upload As Temporary\" />\n                <TextBox formGroupClasses=\"col-sm-8\" v-model=\"binaryFileTypeGuid\" label=\"Binary File Type Guid\" />\n            </div>\n            <div class=\"row\">\n                <CheckBox formGroupClasses=\"col-sm-4\" v-model=\"showDeleteButton\" label=\"Show Delete Button\" />\n                <TextBox formGroupClasses=\"col-sm-8\" v-model=\"uploadButtonText\" label=\"Upload Button Text\" />\n            </div>\n\n            <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n        </template>\n    </GalleryAndResult>"
      });
      var slidingDateRangePickerGallery = defineComponent({
        name: "SlidingDateRangePickerGallery",
        components: {
          GalleryAndResult,
          SlidingDateRangePicker,
          DropDownList
        },
        setup() {
          var value = ref(null);
          return {
            value,
            rangeTypeOptions: rangeTypeOptions,
            rangeTypes: ref(null),
            previewLocation: ref("Right"),
            previewLocationOptions: [{
              text: "Right (Default)",
              value: "Right"
            }, {
              text: "Top",
              value: "Top"
            }, {
              text: "None",
              value: "None"
            }],
            importCode: getSfcControlImportPath("slidingDateRangePicker") + "\n// If Customizing Date Range Types" + "\nimport { RangeType } from \"@Obsidian/Utility/slidingDateRange\";",
            exampleCode: "<SlidingDateRangePicker v-model=\"value\" label=\"Sliding Date Range\" :enabledSlidingDateRangeUnits=\"[RangeType.Current, RangeType.Previous, RangeType.Next]\" previewLocation=\"Right\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <SlidingDateRangePicker\n        v-model=\"value\"\n        label=\"Sliding Date Range\"\n        :enabledSlidingDateRangeUnits=\"rangeTypes\"\n        :previewLocation=\"previewLocation\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"rangeTypes\" :items=\"rangeTypeOptions\" multiple showBlankItem label=\"Available Range Types\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"previewLocation\" :items=\"previewLocationOptions\" showBlankItem label=\"Date Preview Location\" />\n            </div>\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var definedValuePickerGallery = defineComponent({
        name: "DefinedValuePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DefinedValuePicker,
          TextBox: TextBox$1
        },
        setup() {
          function onsubmit() {
            alert("control gallery form submitted");
          }
          var multiple = ref(false);
          var enhanceForLongLists = ref(false);
          var displayStyle = computed(() => multiple.value && !enhanceForLongLists.value ? PickerDisplayStyle.List : PickerDisplayStyle.Auto);
          return {
            onsubmit,
            allowAdd: ref(false),
            definedTypeGuid: ref(DefinedType.PersonConnectionStatus),
            enhanceForLongLists,
            multiple,
            displayStyle,
            value: ref(null),
            importCode: getControlImportPath("definedValuePicker"),
            exampleCode: "<DefinedValuePicker label=\"Defined Value\" v-model=\"value\" :definedTypeGuid=\"definedTypeGuid\" :multiple=\"false\" :enhanceForLongLists=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <DefinedValuePicker label=\"Defined Value\" v-model=\"value\" :definedTypeGuid=\"definedTypeGuid\" :multiple=\"multiple\" :enhanceForLongLists=\"enhanceForLongLists\" :allowAdd=\"allowAdd\" :displayStyle=\"displayStyle\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <TextBox formGroupClasses=\"col-md-4\" label=\"Defined Type\" v-model=\"definedTypeGuid\" />\n            <CheckBox formGroupClasses=\"col-md-2\" label=\"Multiple\" v-model=\"multiple\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Allow Adding Values\" v-model=\"allowAdd\" />\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var entityTypePickerGallery = defineComponent({
        name: "EntityTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          EntityTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            includeGlobalOption: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({
              value: EntityType.Person,
              text: "Default Person"
            }),
            importCode: getControlImportPath("entityTypePicker"),
            exampleCode: "<EntityTypePicker label=\"Entity Type\" v-model=\"value\" :multiple=\"false\" :includeGlobalOption=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <EntityTypePicker label=\"Entity Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :includeGlobalOption=\"includeGlobalOption\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Include Global Option\" v-model=\"includeGlobalOption\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Button</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var achievementTypePickerGallery = defineComponent({
        name: "AchievementTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          AchievementTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("achievementTypePicker"),
            exampleCode: "<AchievementTypePicker label=\"Achievement Type\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <AchievementTypePicker label=\"Achievement Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var badgeComponentPickerGallery = defineComponent({
        name: "BadgeComponentPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          BadgeComponentPicker,
          NumberUpDown,
          EntityTypePicker
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            entityTypeGuid: ref(null),
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("badgeComponentPicker"),
            exampleCode: "<BadgeComponentPicker label=\"Badge Component\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BadgeComponentPicker label=\"Badge Component\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :entityTypeGuid=\"entityTypeGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityTypeGuid\" enhanceForLongLists showBlankItem />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var sectionHeaderGallery = defineComponent({
        name: "SectionHeaderGallery",
        components: {
          GalleryAndResult,
          SectionHeader: SectionHeader$1,
          CheckBox: CheckBox$1
        },
        setup() {
          var showSeparator = ref(true);
          var showDescription = ref(true);
          var showActionBar = ref(true);
          var showContent = ref(true);
          var description = computed(() => {
            return showDescription.value ? "You can use a Section Header to put a title and description above some content." : "";
          });
          return {
            showSeparator,
            showDescription,
            showActionBar,
            showContent,
            description,
            importCode: getControlImportPath("sectionHeader"),
            exampleCode: "<SectionHeader title=\"This is a SectionHeader\" description=\"A Description\" :isSeparatorHidden=\"false\">\n    <template #actions>Action Buttons</template>\n</SectionHeader>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <SectionHeader\n        title=\"This is a SectionHeader\"\n        :description=\"description\"\n        :isSeparatorHidden=\"!showSeparator\" >\n        <template v-if=\"showActionBar\" #actions>\n            <div>\n                <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-lock\"></i></a>\n                <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-pencil\"></i></a>\n                <a class=\"btn btn-danger btn-xs btn-square\"><i class=\"fa fa-trash-alt\"></i></a>\n            </div>\n        </template>\n    </SectionHeader>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showSeparator\" label=\"Show Separator\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showDescription\" label=\"Show Description\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showActionBar\" label=\"Show Action Bar\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var sectionContainerGallery = defineComponent({
        name: "SectionContainerGallery",
        components: {
          GalleryAndResult,
          SectionContainer,
          CheckBox: CheckBox$1
        },
        setup() {
          var showDescription = ref(true);
          var showActionBar = ref(true);
          var showContentToggle = ref(false);
          var showContent = ref(true);
          var description = computed(() => {
            return showDescription.value ? "The Section Container has a Section Header and a collapsible content section below it." : "";
          });
          return {
            showDescription,
            showActionBar,
            showContentToggle,
            showContent,
            description,
            importCode: getControlImportPath("sectionContainer"),
            exampleCode: "<SectionContainer title=\"This is a Section Container\" description=\"A Description\" v-model=\"showContent\" toggleText=\"Show\">\n    <template #actions>Action Buttons</template>\n    Main Content\n</SectionContainer>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <SectionContainer\n        title=\"This is a Section Container\"\n        :description=\"description\"\n        v-model=\"showContent\"\n        :toggleText=\"showContentToggle ? 'Show' : ''\" >\n        <template v-if=\"showActionBar\" #actions>\n            <div>\n                <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-lock\"></i></a>\n                <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-pencil\"></i></a>\n                <a class=\"btn btn-danger btn-xs btn-square\"><i class=\"fa fa-trash-alt\"></i></a>\n            </div>\n        </template>\n        Here's some content to put in here.\n    </SectionContainer>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showDescription\" label=\"Show Description\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showActionBar\" label=\"Show Action Bar\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showContentToggle\" label=\"Show Content Toggle\" />\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var categoryPickerGallery = defineComponent({
        name: "CategoryPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          CategoryPicker,
          TextBox: TextBox$1,
          EntityTypePicker
        },
        setup() {
          var entityType = ref(null);
          var entityTypeGuid = computed(() => {
            var _entityType$value;
            if (entityType !== null && entityType !== void 0 && (_entityType$value = entityType.value) !== null && _entityType$value !== void 0 && _entityType$value.value) {
              return entityType.value.value;
            }
            return null;
          });
          return {
            entityType,
            entityTypeGuid,
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("categoryPicker"),
            exampleCode: "<CategoryPicker label=\"Category Picker\" v-model=\"value\" :multiple=\"false\" :entityTypeGuid=\"entityTypeGuid\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CategoryPicker label=\"Category Picker\" v-model=\"value\" :multiple=\"multiple\" :entityTypeGuid=\"entityTypeGuid\" />\n\n    <template #settings>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-6\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityType\" enhanceForLongLists showBlankItem />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var locationItemPickerGallery = defineComponent({
        name: "LocationItemPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          LocationItemPicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("locationItemPicker"),
            exampleCode: "<LocationItemPicker label=\"Location\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <LocationItemPicker label=\"Location\" v-model=\"value\" :multiple=\"multiple\" />\n\n    <template #settings>\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var connectionRequestPickerGallery = defineComponent({
        name: "ConnectionRequestPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          ConnectionRequestPicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("connectionRequestPicker"),
            exampleCode: "<ConnectionRequestPicker label=\"ConnectionRequest\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <ConnectionRequestPicker label=\"ConnectionRequest\" v-model=\"value\" :multiple=\"multiple\" />\n\n    <template #settings>\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var copyButtonGallery = defineComponent({
        name: "CopyButtonGallery",
        components: {
          GalleryAndResult,
          TextBox: TextBox$1,
          DropDownList,
          CopyButton: CopyButton$1
        },
        setup() {
          return {
            tooltip: ref("Copy"),
            value: ref("To God Be The Glory"),
            buttonSize: ref("md"),
            sizeOptions: [{
              value: "lg",
              text: "Large"
            }, {
              value: "md",
              text: "Medium"
            }, {
              value: "sm",
              text: "Small"
            }, {
              value: "xs",
              text: "Extra Small"
            }],
            importCode: getControlImportPath("copyButton"),
            exampleCode: "<CopyButton :value=\"value\" tooltip=\"Copy\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <CopyButton :value=\"value\" :tooltip=\"tooltip\" :btnSize=\"buttonSize\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <TextBox formGroupClasses=\"col-sm-4\" v-model=\"value\" label=\"Value to Copy to Clipboard\" />\n            <TextBox formGroupClasses=\"col-sm-4\" v-model=\"tooltip\" label=\"Tooltip\" />\n            <DropDownList formGroupClasses=\"col-sm-4\" label=\"Button Size\" v-model=\"buttonSize\" :items=\"sizeOptions\" />\n        </div>\n\n        <p>Additional props extend and are passed to the underlying <code>Rock Button</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var entityTagListGallery = defineComponent({
        name: "EntityTagListGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          EntityTagList
        },
        setup() {
          var _store$state$currentP, _store$state$currentP2;
          var store = useStore();
          return {
            disabled: ref(false),
            entityTypeGuid: EntityType.Person,
            entityKey: (_store$state$currentP = (_store$state$currentP2 = store.state.currentPerson) === null || _store$state$currentP2 === void 0 ? void 0 : _store$state$currentP2.idKey) !== null && _store$state$currentP !== void 0 ? _store$state$currentP : "",
            importCode: getControlImportPath("entityTagList"),
            exampleCode: "<EntityTagList :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <EntityTagList :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" :disabled=\"disabled\" />\n\n    <template #settings>\n        <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n    </template>\n</GalleryAndResult>"
      });
      var followingGallery = defineComponent({
        name: "FollowingGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          Following,
          TextBox: TextBox$1
        },
        setup() {
          var _store$state$currentP3, _store$state$currentP4;
          var store = useStore();
          return {
            disabled: ref(false),
            entityTypeGuid: ref(EntityType.Person),
            entityKey: ref((_store$state$currentP3 = (_store$state$currentP4 = store.state.currentPerson) === null || _store$state$currentP4 === void 0 ? void 0 : _store$state$currentP4.idKey) !== null && _store$state$currentP3 !== void 0 ? _store$state$currentP3 : ""),
            importCode: getControlImportPath("following"),
            exampleCode: "<Following :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <Following :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" :disabled=\"disabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <TextBox label=\"Entity Type Guid\" v-model=\"entityTypeGuid\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <TextBox label=\"Entity Key\" v-model=\"entityKey\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var assessmentTypePickerGallery = defineComponent({
        name: "AssessmentTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          AssessmentTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            isInactiveIncluded: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({
              value: AssessmentType.Disc,
              text: "DISC"
            }),
            importCode: getControlImportPath("assessmentTypePicker"),
            exampleCode: "<AssessmentTypePicker label=\"Assessment Type\" v-model=\"value\" :isInactiveIncluded=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <AssessmentTypePicker label=\"Assessment Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :isInactiveIncluded=\"isInactiveIncluded\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Include Inactive\" v-model=\"isInactiveIncluded\" help=\"When set, inactive assessments will be included in the list.\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Button</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var assetStorageProviderPickerGallery = defineComponent({
        name: "AssetStorageProviderPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          AssetStorageProviderPicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref(null),
            importCode: getControlImportPath("assetStorageProviderPicker"),
            exampleCode: "<AssetStorageProviderPicker label=\"Asset Storage Provider\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <AssetStorageProviderPicker label=\"Asset Storage Provider\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var binaryFileTypePickerGallery = defineComponent({
        name: "BinaryFileTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          BinaryFileTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("binaryFileTypePicker"),
            exampleCode: "<BinaryFileTypePicker label=\"Binary File Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BinaryFileTypePicker label=\"Binary File Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var campusPickerGallery = defineComponent({
        name: "CampusPickerGallery",
        components: {
          GalleryAndResult,
          CampusPicker,
          CheckBox: CheckBox$1,
          DefinedValuePicker,
          DropDownList,
          NumberUpDown,
          TextBox: TextBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(true),
            value: ref({}),
            forceVisible: ref(false),
            includeInactive: ref(false),
            campusStatusFilter: ref(null),
            campusTypeFilter: ref(null),
            campusStatusDefinedTypeGuid: DefinedType.CampusStatus,
            campusTypeDefinedTypeGuid: DefinedType.CampusType,
            importCode: getControlImportPath("campusPicker"),
            exampleCode: "<CampusPicker label=\"Campus\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CampusPicker label=\"Campus\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :forceVisible=\"forceVisible\"\n        :includeInactive=\"includeInactive\"\n        :campusStatusFilter=\"campusStatusFilter?.value\"\n        :campusTypeFilter=\"campusTypeFilter?.value\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Force Visible\" v-model=\"forceVisible\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Include Inactive\" v-model=\"includeInactive\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <DefinedValuePicker label=\"Campus Type Filter\" v-model=\"campusTypeFilter\" :definedTypeGuid=\"campusTypeDefinedTypeGuid\" showBlankItem />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DefinedValuePicker label=\"Campus Status Filter\" v-model=\"campusStatusFilter\" :definedTypeGuid=\"campusStatusDefinedTypeGuid\" showBlankItem />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var scheduleBuilderGallery = defineComponent({
        name: "ScheduleBuilderGallery",
        components: {
          GalleryAndResult,
          ScheduleBuilder
        },
        setup() {
          return {
            value: ref(""),
            importCode: getControlImportPath("scheduleBuilder"),
            exampleCode: "<ScheduleBuilder label=\"Schedule Builder\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection\n    displayAsRaw>\n    <ScheduleBuilder label=\"Schedule Builder\"\n        v-model=\"value\" />\n\n    <template #settings>\n    </template>\n</GalleryAndResult>"
      });
      var binaryFilePickerGallery = defineComponent({
        name: "BinaryFilePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          BinaryFilePicker,
          BinaryFileTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            binaryFileType: ref({
              "value": BinaryFiletype.Default
            }),
            value: ref({}),
            importCode: getControlImportPath("binaryFilePicker"),
            exampleCode: "<BinaryFilePicker label=\"Binary File\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BinaryFilePicker label=\"Binary File\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :binaryFileTypeGuid=\"binaryFileType.value\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <BinaryFileTypePicker label=\"Binary File Type\" v-model=\"binaryFileType\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var eventItemPickerGallery = defineComponent({
        name: "EventItemPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          EventItemPicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            includeInactive: ref(false),
            value: ref({}),
            importCode: getControlImportPath("eventItemPicker"),
            exampleCode: "<EventItemPicker label=\"Event Item\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <EventItemPicker label=\"Event Item\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :includeInactive=\"includeInactive\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Include Inactive Items\" v-model=\"includeInactive\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var dataViewPickerGallery = defineComponent({
        name: "DataViewPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          DataViewPicker,
          NumberUpDown,
          EntityTypePicker
        },
        setup() {
          return {
            entityTypeGuid: ref(null),
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("dataViewPicker"),
            exampleCode: "<DataViewPicker label=\"Data View\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DataViewPicker label=\"Data Views\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :showBlankItem=\"showBlankItem\"\n        :entityTypeGuid=\"entityTypeGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityTypeGuid\" enhanceForLongLists showBlankItem />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var workflowTypePickerGallery = defineComponent({
        name: "WorkflowTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          WorkflowTypePicker,
          NumberUpDown,
          EntityTypePicker
        },
        setup() {
          return {
            includeInactiveItems: ref(false),
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("workflowTypePicker"),
            exampleCode: "<WorkflowTypePicker label=\"Data View\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <WorkflowTypePicker label=\"Data Views\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :showBlankItem=\"showBlankItem\"\n        :includeInactiveItems=\"includeInactiveItems\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Include Inactive Items\" v-model=\"includeInactiveItems\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var financialGatewayPickerGallery = defineComponent({
        name: "FinancialGatewayPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          FinancialGatewayPicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            includeInactive: ref(false),
            showAllGatewayComponents: ref(false),
            value: ref({}),
            importCode: getControlImportPath("financialGatewayPicker"),
            exampleCode: "<FinancialGatewayPicker label=\"Financial Gateway\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <FinancialGatewayPicker label=\"Financial Gateway\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :includeInactive=\"includeInactive\"\n        :showAllGatewayComponents=\"showAllGatewayComponents\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n\n            <div class=\"col-md-2\">\n                <CheckBox label=\"Show Inactive Gateways\" v-model=\"includeInactive\" />\n            </div>\n\n            <div class=\"col-md-2\">\n                <CheckBox label=\"Show All Gateway Components\" v-model=\"showAllGatewayComponents\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var financialStatementTemplatePickerGallery = defineComponent({
        name: "FinancialStatementTemplatePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          FinancialStatementTemplatePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("financialStatementTemplatePicker"),
            exampleCode: "<FinancialStatementTemplatePicker label=\"Financial Statement Template\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <FinancialStatementTemplatePicker label=\"Financial Statement Template\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var fieldTypePickerGallery = defineComponent({
        name: "FieldTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          FieldTypePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("fieldTypePicker"),
            exampleCode: "<FieldTypePicker label=\"Field Type\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <FieldTypePicker label=\"Field Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var auditDetailGallery = defineComponent({
        name: "AuditDetailGallery",
        components: {
          GalleryAndResult,
          AuditDetail,
          TextBox: TextBox$1
        },
        setup() {
          var _store$state$currentP5, _store$state$currentP6;
          var store = useStore();
          return {
            entityTypeGuid: ref(EntityType.Person),
            entityKey: ref((_store$state$currentP5 = (_store$state$currentP6 = store.state.currentPerson) === null || _store$state$currentP6 === void 0 ? void 0 : _store$state$currentP6.idKey) !== null && _store$state$currentP5 !== void 0 ? _store$state$currentP5 : ""),
            importCode: getControlImportPath("auditDetail"),
            exampleCode: "<AuditDetail :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <AuditDetail :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox label=\"Entity Type Guid\" v-model=\"entityTypeGuid\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <TextBox label=\"Entity Key\" v-model=\"entityKey\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var modalGallery = defineComponent({
        name: "ModalGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          Modal,
          TextBox: TextBox$1
        },
        setup() {
          return {
            isOpen: ref(false),
            value: "",
            importCode: getControlImportPath("modal"),
            exampleCode: "<Modal v-model=\"isOpen\" title=\"Modal Dialog Title\" saveText=\"Save\" @save=\"isOpen = false\">\n    <TextBox label=\"Required Value\" v-model=\"value\" rules=\"required\" />\n</Modal>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <CheckBox label=\"Is Open\" v-model=\"isOpen\" />\n\n    <Modal v-model=\"isOpen\" title=\"Modal Dialog Title\" saveText=\"Save\" @save=\"isOpen = false\">\n        <TextBox label=\"Required Value\" v-model=\"value\" rules=\"required\" />\n    </Modal>\n\n    <template #settings>\n    </template>\n</GalleryAndResult>"
      });
      var componentPickerGallery = defineComponent({
        name: "ComponentPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          ComponentPicker,
          NumberUpDown,
          TextBox: TextBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            containerType: ref("Rock.Badge.BadgeContainer"),
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("componentPicker"),
            exampleCode: "<ComponentPicker label=\"Component\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <ComponentPicker label=\"Component\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :containerType=\"containerType\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-5\">\n                <TextBox label=\"Container Assembly Name\" v-model=\"containerType\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var gradePickerGallery = defineComponent({
        name: "GradePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          GradePicker,
          NumberUpDown,
          TextBox: TextBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            useAbbreviation: ref(false),
            useGuidAsValue: ref(false),
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("gradePicker"),
            exampleCode: "<GradePicker label=\"Grade\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <GradePicker label=\"Grade\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :useAbbreviation=\"useAbbreviation\"\n        :useGuidAsValue=\"useGuidAsValue\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-3\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Use Abbreviations\" v-model=\"useAbbreviation\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Use GUID Value\" v-model=\"useGuidAsValue\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var groupMemberPickerGallery = defineComponent({
        name: "GroupMemberPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          GroupMemberPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            groupGuid: ref("62DC3753-01D5-48B5-B22D-D2825D92900B"),
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("groupMemberPicker"),
            exampleCode: "<GroupMemberPicker label=\"Group Member\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <GroupMemberPicker label=\"Group Member\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :groupGuid=\"groupGuid\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberBox label=\"Group ID\" v-model=\"groupGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var interactionChannelPickerGallery = defineComponent({
        name: "InteractionChannelPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          InteractionChannelPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("interactionChannelPicker"),
            exampleCode: "<InteractionChannelPicker label=\"Interaction Channel\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <InteractionChannelPicker label=\"Interaction Channel\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var interactionComponentPickerGallery = defineComponent({
        name: "InteractionComponentPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          InteractionComponentPicker,
          InteractionChannelPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            interactionChannelGuid: ref(null),
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("interactionComponentPicker"),
            exampleCode: "<InteractionComponentPicker label=\"Interaction Component\" v-model=\"value\" :interactionChannelGuid=\"interactionChannelGuid\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <InteractionComponentPicker label=\"Interaction Component\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :interactionChannelGuid=\"interactionChannelGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <InteractionChannelPicker label=\"Interaction Channel\" v-model=\"interactionChannelGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var lavaCommandPickerGallery = defineComponent({
        name: "LavaCommandPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          LavaCommandPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("lavaCommandPicker"),
            exampleCode: "<LavaCommandPicker label=\"Lava Command\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <LavaCommandPicker label=\"Lava Command\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var remoteAuthsPickerGallery = defineComponent({
        name: "RemoteAuthsPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          RemoteAuthsPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("remoteAuthsPicker"),
            exampleCode: "<RemoteAuthsPicker label=\"Remote Auths\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <RemoteAuthsPicker label=\"Remote Auths\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepProgramPickerGallery = defineComponent({
        name: "StepProgramPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          StepProgramPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("stepProgramPicker"),
            exampleCode: "<StepProgramPicker label=\"Step Program\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepProgramPicker label=\"Step Program\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepStatusPickerGallery = defineComponent({
        name: "StepStatusPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          StepStatusPicker,
          StepProgramPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            stepProgramGuid: ref(null),
            value: ref({}),
            importCode: getControlImportPath("stepStatusPicker"),
            exampleCode: "<StepStatusPicker label=\"Step Status\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepStatusPicker label=\"Step Status\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :stepProgramGuid=\"stepProgramGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Step Program\" v-model=\"stepProgramGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepTypePickerGallery = defineComponent({
        name: "StepTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          StepTypePicker,
          StepProgramPicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            stepProgramGuid: ref(null),
            value: ref({}),
            importCode: getControlImportPath("stepTypePicker"),
            exampleCode: "<StepTypePicker label=\"Step Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepTypePicker label=\"Step Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :stepProgramGuid=\"stepProgramGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Step Program\" v-model=\"stepProgramGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var streakTypePickerGallery = defineComponent({
        name: "StreakTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          StreakTypePicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("streakTypePicker"),
            exampleCode: "<StreakTypePicker label=\"Streak Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StreakTypePicker label=\"Streak Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var badgePickerGallery = defineComponent({
        name: "BadgePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          BadgePicker,
          NumberUpDown,
          TextBox: TextBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("badgePicker"),
            exampleCode: "<BadgePicker label=\"Badge\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BadgePicker label=\"Badge\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var notificationBoxGallery = defineComponent({
        name: "NotificationBoxGallery",
        components: {
          GalleryAndResult,
          NotificationBox,
          DropDownList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var options = ["default", "success", "info", "danger", "warning", "primary", "validation"].map(key => ({
            text: upperCaseFirstCharacter(key),
            value: key
          }));
          return {
            isDismissible: ref(false),
            heading: ref(""),
            details: ref("Here's a place where you can place details that show up when you click \"Show Details\"."),
            onDismiss: () => alert('"dismiss" event fired. Parents are responsible for hiding the component.'),
            options,
            alertType: ref(AlertType.Default),
            importCode: getSfcControlImportPath("notificationBox"),
            exampleCode: "<NotificationBox dismissable alertType=\"AlertType.Info\" @dismiss=\"onDismiss\" heading=\"Heading Text\">\n    This is an alert!\n    <template #details>\n        Here's a place where you can place details that show up when you click \"Show Details\".\n    </template>\n</NotificationBox>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <NotificationBox :dismissible=\"isDismissible\" :alertType=\"alertType\" @dismiss=\"onDismiss\" :heading=\"heading\">\n        This is an alert!\n        <template #details v-if=\"details\">\n            {{details}}\n        </template>\n    </NotificationBox>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Alert Type\" v-model=\"alertType\" :items=\"options\" :showBlankItem=\"false\" />\n            </div>\n            <div class=\"col-md-3\">\n                <TextBox v-model=\"heading\" label=\"Heading Text\" />\n            </div>\n            <div class=\"col-md-3\">\n                <TextBox v-model=\"details\" label=\"Details Text\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Dismissable\" v-model=\"isDismissible\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var badgeListGallery = defineComponent({
        name: "BadgeListGallery",
        components: {
          GalleryAndResult,
          BadgeList,
          EntityTypePicker,
          TextBox: TextBox$1,
          CheckBox: CheckBox$1,
          BadgePicker
        },
        setup() {
          var _store$state$currentP7, _store$state$currentP8;
          var entityType = ref({
            text: "Person",
            value: EntityType.Person
          });
          var entityTypeGuid = computed(() => entityType === null || entityType === void 0 ? void 0 : entityType.value);
          var badgeTypes = ref([]);
          var badgeTypeGuids = computed(() => badgeTypes.value.map(b => b.value));
          var store = useStore();
          return {
            entityType,
            entityTypeGuid,
            badgeTypes,
            badgeTypeGuids,
            entityKey: ref((_store$state$currentP7 = (_store$state$currentP8 = store.state.currentPerson) === null || _store$state$currentP8 === void 0 ? void 0 : _store$state$currentP8.idKey) !== null && _store$state$currentP7 !== void 0 ? _store$state$currentP7 : ""),
            importCode: getControlImportPath("badgeList"),
            exampleCode: "<BadgeList :entityTypeGuid=\"entityTypeGuid?.value\" :entityKey=\"entityKey\" :badgeTypeGuids=\"badgeTypeGuids\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <BadgeList :entityTypeGuid=\"entityTypeGuid?.value\" :entityKey=\"entityKey\" :badgeTypeGuids=\"badgeTypeGuids\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <EntityTypePicker formGroupClasses=\"col-md-4\" label=\"Entity Type\" v-model=\"entityType\" enhanceForLongLists />\n            <TextBox formGroupClasses=\"col-md-4\" label=\"Entity Key\" v-model=\"entityKey\" />\n            <BadgePicker formGroupClasses=\"col-md-4\" label=\"Badge Type\" v-model=\"badgeTypes\" showBlankItem multiple />\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var basicTimePickerGallery = defineComponent({
        name: "BasicTimePickerGallery",
        components: {
          GalleryAndResult,
          BasicTimePicker
        },
        setup() {
          return {
            value: ref({}),
            importCode: getControlImportPath("basicTimePicker"),
            exampleCode: "<BasicTimePicker label=\"Time\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BasicTimePicker label=\"Time\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var birthdayPickerGallery = defineComponent({
        name: "BirthdayPickerGallery",
        components: {
          GalleryAndResult,
          Toggle,
          BirthdayPicker
        },
        setup() {
          return {
            showYear: ref(true),
            datePartsModel: ref({
              month: 1,
              day: 1,
              year: 1970
            }),
            importCode: getControlImportPath("birthdayPicker"),
            exampleCode: "<BirthdayPicker label=\"Birthday\" v-model=\"date\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"datePartsModel\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection>\n\n    <BirthdayPicker label=\"Birthday\" v-model=\"datePartsModel\" :showYear=\"showYear\" />\n\n    <template #settings>\n        <Toggle label=\"Show Year\" v-model=\"showYear\" />\n        <p class=\"mt-4 mb-4\">This simply wraps the <a href=\"#DatePartsPickerGallery\">Date Parts Picker</a> and sets <code>allowFutureDates</code> and <code>requireYear</code> to <code>false</code>.</p>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var countdownTimerGallery = defineComponent({
        name: "CountdownTimerGallery",
        components: {
          GalleryAndResult,
          CountdownTimer,
          TextBox: TextBox$1,
          RockButton
        },
        setup() {
          var seconds = ref(300);
          var setToSeconds = ref(300);
          return {
            reset: () => seconds.value = setToSeconds.value,
            setToSeconds,
            seconds,
            importCode: getControlImportPath("countdownTimer"),
            exampleCode: "<CountdownTimer v-model=\"seconds\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"seconds\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n\n    Counting down:\n    <CountdownTimer v-model=\"seconds\" />\n\n    <template #settings>\n        <form class=\"form-inline\" @submit.prevent=\"reset\">\n            <TextBox label=\"Reset Timer to (seconds)\" v-model=\"setToSeconds\" />\n            <RockButton type=\"submit\">Set Timer</RockButton>\n        </form>\n    </template>\n</GalleryAndResult>"
      });
      var electronicSignatureGallery = defineComponent({
        name: "ElectronicSignatureGallery",
        components: {
          GalleryAndResult,
          ElectronicSignature,
          Toggle,
          TextBox: TextBox$1
        },
        setup() {
          return {
            signature: ref(null),
            isDrawn: ref(false),
            term: ref("document"),
            importCode: getControlImportPath("electronicSignature"),
            exampleCode: "<ElectronicSignature v-model=\"signature\" :isDrawn=\"isDrawn\" documentTerm=\"document\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"signature\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n\n    <ElectronicSignature v-model=\"signature\" :isDrawn=\"isDrawn\" :documentTerm=\"term\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <Toggle formGroupClasses=\"col-md-4\" label=\"Signature Type\" trueText=\"Drawn\" falseText=\"Typed\" v-model=\"isDrawn\" />\n            <TextBox formGroupClasses=\"col-md-4\" label=\"Document Type Term\" v-model=\"term\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var fieldTypeEditorGallery = defineComponent({
        name: "FieldTypeEditorGallery",
        components: {
          GalleryAndResult,
          FieldTypeEditor,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          return {
            value: ref({}),
            readOnly: ref(false),
            importCode: getControlImportPath("fieldTypeEditor"),
            exampleCode: "<FieldTypeEditor v-model=\"value\" :isFieldTypeReadOnly=\"readOnly\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <FieldTypeEditor v-model=\"value\" :isFieldTypeReadOnly=\"readOnly\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-4\" label=\"Read Only Field Type\" v-model=\"readOnly\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var inlineRangeSliderGallery = defineComponent({
        name: "InlineRangeSliderGallery",
        components: {
          GalleryAndResult,
          InlineRangeSlider,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            value: ref(10),
            step: ref(0),
            min: ref(0),
            max: ref(100),
            showValue: ref(false),
            importCode: getSfcControlImportPath("inlineRangeSlider"),
            exampleCode: "<InlineRangeSlider v-model=\"value\" :step=\"1\" :min=\"min\" :max=\"max\" :showValueBar=\"showValue\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <InlineRangeSlider v-model=\"value\" :step=\"step\" :min=\"min\" :max=\"max\" :showValueBar=\"showValue\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Show Value\" v-model=\"showValue\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Step Value\" v-model=\"step\" help=\"Leave blank or set to zero to have no step\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Minimum Value\" v-model=\"min\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Maximum Value\" v-model=\"max\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var javaScriptAnchorGallery = defineComponent({
        name: "JavascriptAnchorGallery",
        components: {
          GalleryAndResult,
          JavaScriptAnchor,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            onClick: () => alert("Link Clicked"),
            importCode: getControlImportPath("javaScriptAnchor"),
            exampleCode: "<JavaScriptAnchor @click=\"onClick\">Link Text</JavaScriptAnchor>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <JavaScriptAnchor @click=\"onClick\">This link can run code, but does not link to a page.</JavaScriptAnchor>\n</GalleryAndResult>"
      });
      var keyValueListGallery = defineComponent({
        name: "KeyValueListGallery",
        components: {
          GalleryAndResult,
          KeyValueList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var limitValues = ref(false);
          var displayValueFirst = ref(false);
          var options = [{
            text: "Option 1",
            value: "1"
          }, {
            text: "Option 2",
            value: "2"
          }, {
            text: "Option 3",
            value: "3"
          }];
          var valueOptions = computed(() => limitValues.value ? options : null);
          return {
            limitValues,
            displayValueFirst,
            valueOptions,
            value: ref(null),
            keyPlaceholder: ref("Key"),
            valuePlaceholder: ref("Value"),
            importCode: getControlImportPath("keyValueList"),
            exampleCode: "<KeyValueList label=\"Keys and Values\" v-model=\"value\" :valueOptions=\"valueOptions\" :displayValueFirst=\"displayValueFirst\" :keyPlaceholder=\"keyPlaceholder\" :valuePlaceholder=\"valuePlaceholder\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{ 'output:modelValue':value, 'input:valueOptions':valueOptions }\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <KeyValueList label=\"Keys and Values\" v-model=\"value\" :valueOptions=\"valueOptions\" :displayValueFirst=\"displayValueFirst\" :keyPlaceholder=\"keyPlaceholder\" :valuePlaceholder=\"valuePlaceholder\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Limit Possible Values\" v-model=\"limitValues\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Show Value First\" v-model=\"displayValueFirst\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Placeholder for Key Field\" v-model=\"keyPlaceholder\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Placeholder for Value Field\" v-model=\"valuePlaceholder\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var loadingGallery = defineComponent({
        name: "LoadingGallery",
        components: {
          GalleryAndResult,
          Loading,
          CheckBox: CheckBox$1
        },
        setup() {
          return {
            isLoading: ref(false),
            importCode: getControlImportPath("loading"),
            exampleCode: "<Loading :isLoading=\"isLoading\">Content to show when not loading</Loading>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <Loading :isLoading=\"isLoading\">Check the box below to start loading</Loading>\n\n    <template #settings>\n        <div class=\"row mb-3\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Is Loading\" v-model=\"isLoading\" />\n        </div>\n        <p>Internally, this uses the <a href=\"#LoadingIndicatorGallery\">LoadingIndicator</a> component.</p>\n    </template>\n</GalleryAndResult>"
      });
      var loadingIndicatorGallery = defineComponent({
        name: "LoadingIndicatorGallery",
        components: {
          GalleryAndResult,
          LoadingIndicator
        },
        setup() {
          return {
            importCode: getControlImportPath("loadingIndicator"),
            exampleCode: "<LoadingIndicator />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <LoadingIndicator />\n\n    <template #settings>\n        <p>It's best to use the <a href=\"#LoadingGallery\">Loading</a> component instead of using this one directly.</p>\n    </template>\n</GalleryAndResult>"
      });
      var numberUpDownGroupGallery = defineComponent({
        name: "NumberUpDownGroupGallery",
        components: {
          GalleryAndResult,
          NumberUpDownGroup,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            value: ref({
              prop1: 30,
              prop2: 30,
              prop3: 30
            }),
            options: [{
              key: "prop1",
              label: "Prop 1",
              min: 0,
              max: 50
            }, {
              key: "prop2",
              label: "Prop 2",
              min: 10,
              max: 60
            }, {
              key: "prop3",
              label: "Prop 3",
              min: 20,
              max: 70
            }],
            importCode: getControlImportPath("numberUpDownGroup"),
            exampleCode: "<NumberUpDownGroup v-model=\"value\" :options=\"options\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{ 'output:modelValue':value, 'input:options':options }\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <NumberUpDownGroup v-model=\"value\" :options=\"options\" />\n</GalleryAndResult>"
      });
      var panelWidgetGallery = defineComponent({
        name: "PanelWidgetGallery",
        components: {
          GalleryAndResult,
          PanelWidget
        },
        setup() {
          return {
            importCode: getControlImportPath("panelWidget"),
            exampleCode: "<PanelWidget :isDefaultOpen=\"false\">\n    <template #header>Header</template>\n    Main Content...\n</PanelWidget>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <PanelWidget :isDefaultOpen=\"false\">\n        <template #header>Panel Widget Header</template>\n        <h4>Romans 11:33-36</h4>\n        <p>\n            Oh, the depth of the riches<br />\n            and the wisdom and the knowledge of God!<br />\n            How unsearchable his judgments<br />\n            and untraceable his ways!<br />\n            For who has known the mind of the Lord?<br />\n            Or who has been his counselor?<br />\n            And who has ever given to God,<br />\n            that he should be repaid?<br />\n            For from him and through him<br />\n            and to him are all things.<br />\n            To him be the glory forever. Amen.\n        </p>\n    </PanelWidget>\n</GalleryAndResult>"
      });
      var progressBarGallery = defineComponent({
        name: "ProgressBarGallery",
        components: {
          GalleryAndResult,
          ProgressBar,
          RangeSlider
        },
        setup() {
          return {
            value: ref(10),
            importCode: getControlImportPath("progressBar"),
            exampleCode: "<ProgressBar :percent=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ProgressBar :percent=\"value\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <RangeSlider label=\"Percent Done\" v-model=\"value\" showValueBar :step=\"1\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var rockButtonGallery = defineComponent({
        name: "RockButtonGallery",
        components: {
          GalleryAndResult,
          RockButton,
          DropDownList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var sizeOptions = [{
            text: "Default",
            value: BtnSize.Default
          }, {
            text: "ExtraSmall",
            value: BtnSize.ExtraSmall
          }, {
            text: "Small",
            value: BtnSize.Small
          }, {
            text: "Large",
            value: BtnSize.Large
          }];
          var typeOptions = [{
            text: "Default",
            value: BtnType.Default
          }, {
            text: "Primary",
            value: BtnType.Primary
          }, {
            text: "Danger",
            value: BtnType.Danger
          }, {
            text: "Warning",
            value: BtnType.Warning
          }, {
            text: "Success",
            value: BtnType.Success
          }, {
            text: "Info",
            value: BtnType.Info
          }, {
            text: "Link",
            value: BtnType.Link
          }];
          return {
            sizeOptions,
            typeOptions,
            btnSize: ref(BtnSize.Default),
            btnType: ref(BtnType.Default),
            onClick: () => new Promise(res => setTimeout(() => {
              res(true);
              alert("done");
            }, 3000)),
            autoLoading: ref(false),
            autoDisable: ref(false),
            isLoading: ref(false),
            isSquare: ref(false),
            loadingText: ref("Loading..."),
            importCode: "import RockButton, { BtnType, BtnSize } from \"@Obsidian/Controls/rockButton\";",
            exampleCode: "<RockButton\n    :btnSize=\"BtnSize.Default\"\n    :btnType=\"BtnType.Default\"\n    @click=\"onClick\"\n    :isLoading=\"isLoading\"\n    :autoLoading=\"autoLoading\"\n    :autoDisable=\"autoDisable\"\n    :loadingText=\"loadingText\">\n    Button Text\n</RockButton>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockButton :btnSize=\"btnSize\" :btnType=\"btnType\" @click=\"onClick\" :isLoading=\"isLoading\" :autoLoading=\"autoLoading\" :autoDisable=\"autoDisable\" :loadingText=\"loadingText\" :isSquare=\"isSquare\">\n        <i class=\"fa fa-cross\" v-if=\"isSquare\"></i>\n        <template v-else>Click Here to Fire Async Operation</template>\n    </RockButton>\n\n    <template #settings>\n        <div class=\"row\">\n            <DropDownList formGroupClasses=\"col-md-3\" label=\"Button Size\" v-model=\"btnSize\" :items=\"sizeOptions\" :showBlankItem=\"false\" />\n            <DropDownList formGroupClasses=\"col-md-3\" label=\"Button Type\" v-model=\"btnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Auto Loading Indicator\" v-model=\"autoLoading\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Auto Disable\" v-model=\"autoDisable\" />\n        </div>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Force Loading\" v-model=\"isLoading\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Square\" v-model=\"isSquare\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Loading Text\" v-model=\"loadingText\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var rockLabelGallery = defineComponent({
        name: "RockLabelGallery",
        components: {
          GalleryAndResult,
          RockLabel
        },
        setup() {
          return {
            importCode: getControlImportPath("rockLabel"),
            exampleCode: "<RockLabel help=\"More Info\">A Label</RockLabel>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <RockLabel help=\"This is the help message\">This is a Rock Label. Hover icon for help.</RockLabel>\n</GalleryAndResult>"
      });
      var rockValidationGallery = defineComponent({
        name: "RockValidationGallery",
        components: {
          GalleryAndResult,
          RockValidation
        },
        setup() {
          return {
            errors: [{
              name: "Error Name",
              text: "Error text describing the validation error."
            }, {
              name: "Not Good",
              text: "This is invalid because it is sinful."
            }, {
              name: "Trust God",
              text: "Didn't trust God. Turn to Him."
            }],
            importCode: getControlImportPath("rockValidation"),
            exampleCode: "<RockValidation :errors=\"[{ name:'Error Name', text:'Error Description' }]\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <RockValidation :errors=\"errors\" />\n\n    <template #settings>\n        <p>The <code>errors</code> parameter takes an array of <code>FormError</code> objects. <code>FormError</code> type is defined in <code>@Obsidian/Utility/form</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var rangeSliderGallery = defineComponent({
        name: "RangeSliderGallery",
        components: {
          GalleryAndResult,
          RangeSlider,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            value: ref(10),
            step: ref(1),
            min: ref(0),
            max: ref(100),
            showValue: ref(false),
            importCode: getSfcControlImportPath("slider"),
            exampleCode: "<RangeSlider label=\"Range Slider\" v-model=\"value\" :step=\"1\" :min=\"min\" :max=\"max\" :showValueBar=\"showValue\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RangeSlider v-model=\"value\" label=\"Range Slider Value\" :step=\"step\" :min=\"min\" :max=\"max\" :showValueBar=\"showValue\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Show Value\" v-model=\"showValue\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Step Value\" v-model=\"step\" help=\"Set to zero to have no step\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Minimum Value\" v-model=\"min\" />\n            <NumberBox formGroupClasses=\"col-md-3\" label=\"Maximum Value\" v-model=\"max\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var tabbedContentGallery = defineComponent({
        name: "TabbedContentGallery",
        components: {
          GalleryAndResult,
          TabbedContent,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1
        },
        setup() {
          return {
            list: ["Matthew", "Mark", "Luke", "John"],
            importCode: getControlImportPath("tabbedContent"),
            exampleCode: "<TabbedContent :tabList=\"arrayOfItems\">\n    <template #tab=\"{item}\">\n        {{ item }}\n    </template>\n    <template #tabpane=\"{item}\">\n        This is the content for {{item}}.\n    </template>\n</TabbedContent>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n\n    <TabbedContent :tabList=\"list\">\n        <template #tab=\"{item}\">\n            {{ item }}\n        </template>\n        <template #tabpane=\"{item}\">\n            This is the content for {{item}}.\n        </template>\n    </TabbedContent>\n</GalleryAndResult>"
      });
      var transitionVerticalCollapseGallery = defineComponent({
        name: "TransitionVerticalCollapseGallery",
        components: {
          GalleryAndResult,
          TransitionVerticalCollapse: TransitionVerticalCollapse$1,
          RockButton
        },
        setup() {
          return {
            showContent: ref(false),
            importCode: getControlImportPath("transitionVerticalCollapse"),
            exampleCode: "<TransitionVerticalCollapse>\n    <div v-if=\"showContent\">Content to transition in</div>\n</TransitionVerticalCollapse>"
          };
        },
        template: "\n<GalleryAndResult :importCode=\"importCode\" :exampleCode=\"exampleCode\">\n    <RockButton btnType=\"primary\" class=\"mb-3\" @click=\"showContent = !showContent\">Show Content</RockButton>\n    <TransitionVerticalCollapse>\n        <div v-if=\"showContent\">God so loved the world...</div>\n    </TransitionVerticalCollapse>\n</GalleryAndResult>"
      });
      var valueDetailListGallery = defineComponent({
        name: "ValueDetailListGallery",
        components: {
          GalleryAndResult,
          ValueDetailList
        },
        setup() {
          return {
            modelValue: [{
              title: "Title",
              textValue: "A text description of this item."
            }, {
              title: "Something",
              htmlValue: "This description has <i>some</i> <code>HTML</code> mixed in."
            }],
            importCode: getControlImportPath("valueDetailList"),
            exampleCode: "<ValueDetailList :modelValue=\"[{ name:'Error Name', text:'Error Description' }]\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <ValueDetailList :modelValue=\"modelValue\" />\n\n    <template #settings>\n        <p>The <code>modelValue</code> parameter takes an array of <code>ValueDetailListItem</code> objects. <code>ValueDetailListItem</code> type is defined in <code>@Obsidian/Types/Controls/valueDetailListItem</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var codeEditorGallery = defineComponent({
        name: "CodeEditorGallery",
        components: {
          GalleryAndResult,
          CodeEditor,
          DropDownList,
          NumberBox: NumberBox$1
        },
        setup() {
          var themeItems = [{
            value: "rock",
            text: "rock"
          }, {
            value: "chrome",
            text: "chrome"
          }, {
            value: "crimson_editor",
            text: "crimson_editor"
          }, {
            value: "dawn",
            text: "dawn"
          }, {
            value: "dreamweaver",
            text: "dreamweaver"
          }, {
            value: "eclipse",
            text: "eclipse"
          }, {
            value: "solarized_light",
            text: "solarized_light"
          }, {
            value: "textmate",
            text: "textmate"
          }, {
            value: "tomorrow",
            text: "tomorrow"
          }, {
            value: "xcode",
            text: "xcode"
          }, {
            value: "github",
            text: "github"
          }, {
            value: "ambiance",
            text: "ambiance"
          }, {
            value: "chaos",
            text: "chaos"
          }, {
            value: "clouds_midnight",
            text: "clouds_midnight"
          }, {
            value: "cobalt",
            text: "cobalt"
          }, {
            value: "idle_fingers",
            text: "idle_fingers"
          }, {
            value: "kr_theme",
            text: "kr_theme"
          }, {
            value: "merbivore",
            text: "merbivore"
          }, {
            value: "merbivore_soft",
            text: "merbivore_soft"
          }, {
            value: "mono_industrial",
            text: "mono_industrial"
          }, {
            value: "monokai",
            text: "monokai"
          }, {
            value: "pastel_on_dark",
            text: "pastel_on_dark"
          }, {
            value: "solarized_dark",
            text: "solarized_dark"
          }, {
            value: "terminal",
            text: "terminal"
          }, {
            value: "tomorrow_night",
            text: "tomorrow_night"
          }, {
            value: "tomorrow_night_blue",
            text: "tomorrow_night_blue"
          }, {
            value: "tomorrow_night_bright",
            text: "tomorrow_night_bright"
          }, {
            value: "tomorrow_night_eighties",
            text: "tomorrow_night_eighties"
          }, {
            value: "twilight",
            text: "twilight"
          }, {
            value: "vibrant_ink",
            text: "vibrant_ink"
          }].sort((a, b) => a.text.localeCompare(b.text));
          var modeItems = [{
            value: "text",
            text: "text"
          }, {
            value: "css",
            text: "css"
          }, {
            value: "html",
            text: "html"
          }, {
            value: "lava",
            text: "lava"
          }, {
            value: "javascript",
            text: "javascript"
          }, {
            value: "less",
            text: "less"
          }, {
            value: "powershell",
            text: "powershell"
          }, {
            value: "sql",
            text: "sql"
          }, {
            value: "typescript",
            text: "typescript"
          }, {
            value: "csharp",
            text: "csharp"
          }, {
            value: "markdown",
            text: "markdown"
          }, {
            value: "xml",
            text: "xml"
          }].sort((a, b) => a.text.localeCompare(b.text));
          var theme = ref("rock");
          var mode = ref("text");
          var editorHeight = ref(200);
          var exampleCode = computed(() => {
            return buildExampleCode("CodeEditor", {
              theme,
              mode,
              editorHeight
            });
          });
          return {
            theme,
            themeItems,
            mode,
            modeItems,
            editorHeight,
            importCode: getControlImportPath("codeEditor"),
            exampleCode
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <CodeEditor :theme=\"theme\" :mode=\"mode\" :editorHeight=\"editorHeight\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Theme\" v-model=\"theme\" :items=\"themeItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Mode\" v-model=\"mode\" :items=\"modeItems\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox label=\"Editor Height\" v-model=\"editorHeight\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var pagePickerGallery = defineComponent({
        name: "PagePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          PagePicker
        },
        setup() {
          return {
            multiple: ref(false),
            showSelectCurrentPage: ref(false),
            promptForPageRoute: ref(false),
            value: ref({
              "page": {
                value: "b07f30b3-95c4-40a5-9cf6-455399bef67a",
                text: "Universal Search"
              }
            }),
            importCode: getSfcControlImportPath("pagePicker"),
            exampleCode: "<PagePicker label=\"Page\" v-model=\"value\" :multiple=\"false\" promptForPageRoute showSelectCurrentPage />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <PagePicker label=\"Page\" v-model=\"value\" :multiple=\"multiple\" :promptForPageRoute=\"promptForPageRoute\" :showSelectCurrentPage=\"showSelectCurrentPage\" />\n\n    <template #settings>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show 'Select Current Page' Button\" v-model=\"showSelectCurrentPage\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Prompt for Route\" v-model=\"promptForPageRoute\" help=\"Only works if not selecting multiple values\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupPickerGallery = defineComponent({
        name: "GroupPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          GroupPicker
        },
        setup() {
          return {
            multiple: ref(false),
            limitToSchedulingEnabled: ref(false),
            limitToRSVPEnabled: ref(false),
            value: ref(null),
            importCode: getControlImportPath("groupPicker"),
            exampleCode: "<GroupPicker label=\"Group\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <GroupPicker label=\"Group\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :limitToSchedulingEnabled=\"limitToSchedulingEnabled\"\n        :limitToRSVPEnabled=\"limitToRSVPEnabled\" />\n\n    <template #settings>\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n        </div>\n        <div class=\"col-md-4\">\n            <CheckBox label=\"Limit to Scheduling Enabled\" v-model=\"limitToSchedulingEnabled\" />\n        </div>\n        <div class=\"col-md-4\">\n            <CheckBox label=\"Limit to RSVP Enabled\" v-model=\"limitToRSVPEnabled\" />\n        </div>\n    </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var mergeTemplatePickerGallery = defineComponent({
        name: "MergeTemplatePickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          MergeTemplatePicker
        },
        setup() {
          var ownershipOptions = [{
            text: "Global",
            value: MergeTemplateOwnership.Global
          }, {
            text: "Personal",
            value: MergeTemplateOwnership.Personal
          }, {
            text: "Both",
            value: MergeTemplateOwnership.PersonalAndGlobal
          }];
          return {
            ownershipOptions,
            ownership: ref(MergeTemplateOwnership.Global),
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("mergeTemplatePicker"),
            exampleCode: "<MergeTemplatePicker label=\"Merge Template\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <MergeTemplatePicker label=\"Merge Template\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :mergeTemplateOwnership=\"ownership\" />\n\n    <template #settings>\n\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n        </div>\n        <div class=\"col-md-4\">\n            <DropDownList label=\"Ownership\" v-model=\"ownership\" :items=\"ownershipOptions\" />\n        </div>\n    </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var metricCategoryPickerGallery = defineComponent({
        name: "MetricCategoryPickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          MetricCategoryPicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("metricCategoryPicker"),
            exampleCode: "<MetricCategoryPicker label=\"Metric Category\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <MetricCategoryPicker label=\"Metric Category\"\n        v-model=\"value\"\n        :multiple=\"multiple\" />\n\n    <template #settings>\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var metricItemPickerGallery = defineComponent({
        name: "MetricItemPickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          MetricItemPicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("metricItemPicker"),
            exampleCode: "<MetricItemPicker label=\"Metric Item\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <MetricItemPicker label=\"Metric Item\"\n        v-model=\"value\"\n        :multiple=\"multiple\" />\n\n    <template #settings>\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var registrationTemplatePickerGallery = defineComponent({
        name: "RegistrationTemplatePickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          RegistrationTemplatePicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("registrationTemplatePicker"),
            exampleCode: "<RegistrationTemplatePicker label=\"Registration Template\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RegistrationTemplatePicker label=\"Registration Template\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :mergeTemplateOwnership=\"ownership\" />\n\n    <template #settings>\n\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var reportPickerGallery = defineComponent({
        name: "ReportPickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          ReportPicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("reportPicker"),
            exampleCode: "<ReportPicker label=\"Report\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ReportPicker label=\"Report\"\n        v-model=\"value\"\n        :multiple=\"multiple\" />\n\n    <template #settings>\n\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var schedulePickerGallery = defineComponent({
        name: "SchedulePickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          SchedulePicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getControlImportPath("schedulePicker"),
            exampleCode: "<SchedulePicker label=\"Schedule\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <SchedulePicker label=\"Schedule\"\n        v-model=\"value\"\n        :multiple=\"multiple\" />\n\n    <template #settings>\n\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var workflowActionTypePickerGallery = defineComponent({
        name: "WorkflowActionTypePickerGallery",
        components: {
          GalleryAndResult,
          DropDownList,
          CheckBox: CheckBox$1,
          WorkflowActionTypePicker
        },
        setup() {
          return {
            multiple: ref(false),
            value: ref(null),
            importCode: getSfcControlImportPath("workflowActionTypePicker"),
            exampleCode: "<WorkflowActionTypePicker label=\"Workflow Action Type\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <WorkflowActionTypePicker label=\"Workflow Action Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\" />\n\n    <template #settings>\n\n        <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var dayOfWeekPickerGallery = defineComponent({
        name: "DayOfWeekPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          NumberUpDown,
          DayOfWeekPicker
        },
        setup() {
          return {
            showBlankItem: ref(false),
            multiple: ref(false),
            columns: ref(1),
            value: ref(null),
            importCode: getSfcControlImportPath("dayOfWeekPicker"),
            exampleCode: "<DayOfWeekPicker label=\"Day of the Week\" v-model=\"value\" :showBlankItem=\"false\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DayOfWeekPicker label=\"Day of the Week\" v-model=\"value\" :showBlankItem=\"showBlankItem\" :multiple=\"multiple\" :repeatColumns=\"columns\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            <CheckBox formGroupClasses=\"col-sm-4\" label=\"Multiple\" v-model=\"multiple\" />\n            <NumberUpDown v-if=\"multiple\" formGroupClasses=\"col-sm-4\" label=\"Columns\" v-model=\"columns\" />\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var monthDayPickerGallery = defineComponent({
        name: "MonthDayPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          NumberUpDown,
          MonthDayPicker
        },
        setup() {
          return {
            value: ref({
              month: 0,
              day: 0
            }),
            importCode: getSfcControlImportPath("monthDayPicker"),
            exampleCode: "<MonthDayPicker label=\"Month and Day\" v-model=\"value\" :showBlankItem=\"false\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <MonthDayPicker label=\"Month and Day\" v-model=\"value\" :showBlankItem=\"showBlankItem\" :multiple=\"multiple\" :repeatColumns=\"columns\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var monthYearPickerGallery = defineComponent({
        name: "MonthYearPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          NumberUpDown,
          MonthYearPicker
        },
        setup() {
          return {
            value: ref({
              month: 0,
              year: 0
            }),
            importCode: getSfcControlImportPath("monthYearPicker"),
            exampleCode: "<MonthYearPicker label=\"Month and Year\" v-model=\"value\" :showBlankItem=\"false\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <MonthYearPicker label=\"Month and Year\" v-model=\"value\" :showBlankItem=\"showBlankItem\" :multiple=\"multiple\" :repeatColumns=\"columns\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var cacheabilityPickerGallery = defineComponent({
        name: "CacheabilityPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          NumberUpDown,
          CacheabilityPicker
        },
        setup() {
          return {
            value: ref(null),
            importCode: getSfcControlImportPath("cacheabilityPicker"),
            exampleCode: "<CacheabilityPicker v-model=\"value\" :showBlankItem=\"false\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CacheabilityPicker label=\"Cacheability\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var buttonGroupGallery = defineComponent({
        name: "ButtonGroupGallery",
        components: {
          GalleryAndResult,
          ButtonGroup,
          DropDownList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var sizeOptions = [{
            text: "Default",
            value: BtnSize.Default
          }, {
            text: "ExtraSmall",
            value: BtnSize.ExtraSmall
          }, {
            text: "Small",
            value: BtnSize.Small
          }, {
            text: "Large",
            value: BtnSize.Large
          }];
          var typeOptions = [{
            text: "Default",
            value: BtnType.Default
          }, {
            text: "Primary",
            value: BtnType.Primary
          }, {
            text: "Danger",
            value: BtnType.Danger
          }, {
            text: "Warning",
            value: BtnType.Warning
          }, {
            text: "Success",
            value: BtnType.Success
          }, {
            text: "Info",
            value: BtnType.Info
          }, {
            text: "Link",
            value: BtnType.Link
          }];
          var buttonOptions = [{
            text: "Mins",
            value: "1"
          }, {
            text: "Hours",
            value: "2"
          }, {
            text: "Days",
            value: "3"
          }];
          return {
            sizeOptions,
            typeOptions,
            buttonOptions,
            btnSize: ref(BtnSize.Default),
            sbtnType: ref(BtnType.Primary),
            ubtnType: ref(BtnType.Default),
            value: ref("1"),
            importCode: getSfcControlImportPath("buttonGroup"),
            exampleCode: "<ButtonGroup :btnSize=\"BtnSize.Default\" :btnType=\"BtnType.Default\" :items=\"items\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ButtonGroup v-model=\"value\" :btnSize=\"btnSize\" :selectedBtnType=\"sbtnType\" :unselectedBtnType=\"ubtnType\" :items=\"buttonOptions\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <DropDownList formGroupClasses=\"col-md-4\" label=\"Button Size\" v-model=\"btnSize\" :items=\"sizeOptions\" :showBlankItem=\"false\" />\n            <DropDownList formGroupClasses=\"col-md-4\" label=\"Selected Button Type\" v-model=\"sbtnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n            <DropDownList formGroupClasses=\"col-md-4\" label=\"Unselected Button Type\" v-model=\"ubtnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var intervalPickerGallery = defineComponent({
        name: "IntervalPickerGallery",
        components: {
          GalleryAndResult,
          IntervalPicker,
          DropDownList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1
        },
        setup() {
          var typeOptions = [{
            text: "Default",
            value: BtnType.Default
          }, {
            text: "Primary",
            value: BtnType.Primary
          }, {
            text: "Danger",
            value: BtnType.Danger
          }, {
            text: "Warning",
            value: BtnType.Warning
          }, {
            text: "Success",
            value: BtnType.Success
          }, {
            text: "Info",
            value: BtnType.Info
          }, {
            text: "Link",
            value: BtnType.Link
          }];
          return {
            typeOptions,
            sbtnType: ref(BtnType.Primary),
            ubtnType: ref(BtnType.Default),
            value: ref(null),
            importCode: getSfcControlImportPath("intervalPicker"),
            exampleCode: "<IntervalPicker v-model=\"value\" label=\"Interval\" :selectedBtnType=\"sbtnType\" :unselectedBtnType=\"ubtnType\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <IntervalPicker v-model=\"value\" label=\"Interval\" :selectedBtnType=\"sbtnType\" :unselectedBtnType=\"ubtnType\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <DropDownList formGroupClasses=\"col-md-4\" label=\"Selected Button Type\" v-model=\"sbtnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n            <DropDownList formGroupClasses=\"col-md-4\" label=\"Unselected Button Type\" v-model=\"ubtnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var geoPickerGallery = defineComponent({
        name: "GeoPickerGallery",
        components: {
          GalleryAndResult,
          GeoPicker,
          Toggle
        },
        setup() {
          var toggleValue = ref(false);
          var drawingMode = computed(() => toggleValue.value ? "Point" : "Polygon");
          return {
            value: ref("POLYGON((35.1945 31.813, 35.2345 31.813, 35.2345 31.783, 35.2745 31.783, 35.2745 31.753, 35.2345 31.753, 35.2345 31.693, 35.1945 31.693, 35.1945 31.753, 35.1545 31.753, 35.1545 31.783, 35.1945 31.783, 35.1945 31.813))"),
            toggleValue,
            drawingMode,
            importCode: getSfcControlImportPath("geoPicker"),
            exampleCode: "<GeoPicker :drawingMode=\"drawingMode\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <GeoPicker label=\"Geo Picker\" :drawingMode=\"drawingMode\" v-model=\"value\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <Toggle formGroupClasses=\"col-md-3\" v-model=\"toggleValue\" label=\"Drawing Mode\" trueText=\"Point\" falseText=\"Polygon\" help=\"This will not update while the picker is open. Re-open picker to see change. You may also need to clear the value\" />\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var contentDropDownPickerGallery = defineComponent({
        name: "ContentDropDownPickerGallery",
        components: {
          GalleryAndResult,
          ContentDropDownPicker,
          InlineCheckBox,
          TextBox: TextBox$1
        },
        setup() {
          var value = ref("");
          var innerLabel = computed(() => value.value || "No Value Selected");
          var showPopup = ref(false);
          var isFullscreen = ref(false);
          function onSelect() {
            value.value = "A Value";
          }
          function onClear() {
            value.value = "";
          }
          return {
            value,
            innerLabel,
            onSelect,
            onClear,
            primaryButtonLabel: ref("<i class='fa fa-save'></i> Save"),
            secondaryButtonLabel: ref("Close"),
            showPopup,
            isFullscreen,
            showClearButton: ref(false),
            importCode: getSfcControlImportPath("contentDropDownPicker"),
            exampleCode: "<ContentDropDownPicker\n    label=\"Your Custom Picker\"\n    @primaryButtonClicked=\"selectValue\"\n    @clearButtonClicked=\"clear\"S\n    :innerLabel=\"innerLabel\"\n    :showClear=\"!!value\"\n    iconCssClass=\"fa fa-cross\" >\n    You can place anything you want in here. Click the Save button to select a value or Cancel to close this box.\n</ContentDropDownPicker>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <ContentDropDownPicker\n        label=\"Your Custom Picker\"\n        @primaryButtonClicked=\"onSelect\"\n        @clearButtonClicked=\"onClear\"\n        v-model:showPopup=\"showPopup\"\n        v-model:isFullscreen=\"isFullscreen\"\n        :innerLabel=\"innerLabel\"\n        :showClear=\"showClearButton\"\n        pickerContentBoxHeight=\"auto\"\n        disablePickerContentBoxScroll\n        iconCssClass=\"fa fa-cross\"\n        rules=\"required\"\n         >\n\n        <p>You can place anything you want in here. Click the Save button to select a value or Cancel to close this box.\n        The actions are completely customizable via event handlers (though they always close the popup), or you can\n        completely override them via the <code>mainPickerActions</code> slot. You can also add additional custom buttons\n        to the right via the <code>customPickerActions</code> slot.</p>\n\n        <p><strong>Note</strong>: you are in control of:</p>\n\n        <ul>\n            <li>Selecting a value when the primary button is clicked. This control does not touch actual values at all\n            except to pass them to <code>&lt;RockFormField&gt;</code> for validation.</li>\n            <li>Determining the text inside the select box via the <code>innerLabel</code> prop, since this control does\n            not look at the values or know how to format them</li>\n            <li>Determining when the clear button should show up via the <code>showClear</code> prop, once again because\n            this control doesn't mess with selected values.</li>\n        </ul>\n\n        <template #primaryButtonLabel><span v-html=\"primaryButtonLabel\"></span></template>\n\n        <template #secondaryButtonLabel><span v-html=\"secondaryButtonLabel\"></span></template>\n\n\n        <template #customPickerActions>\n            Custom Actions Here\n        </template>\n    </ContentDropDownPicker>\n\n    <template #settings>\n        <div class=\"row\">\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Primary Button Label\" v-model=\"primaryButtonLabel\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Secondary Button Label\" v-model=\"secondaryButtonLabel\" />\n            <div class=\"col-md-3\"><InlineCheckBox label=\"Show Popup\" v-model=\"showPopup\" /></div>\n            <div class=\"col-md-3\"><InlineCheckBox label=\"Show Clear Button\" v-model=\"showClearButton\" /></div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var wordCloudGallery = defineComponent({
        name: "WordCloudGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          NumberBox: NumberBox$1,
          TextBox: TextBox$1,
          WordCloud
        },
        setup() {
          var wordsText = ref("Hello, Hello, Hello, from, from, Chip");
          var colorsText = ref("#0193B9, #F2C852, #1DB82B, #2B515D, #ED3223");
          var words = computed(() => {
            return wordsText.value.split(",").map(v => v.trim()).filter(v => v.length > 0);
          });
          var colors = computed(() => {
            return colorsText.value.split(",").map(v => v.trim()).filter(v => v.length > 0);
          });
          return {
            animationDuration: ref(350),
            angleCount: ref(5),
            autoClear: ref(false),
            colors,
            colorsText,
            fontName: ref("Impact"),
            minimumAngle: ref(-90),
            minimumFontSize: ref(10),
            maximumAngle: ref(90),
            maximumFontSize: ref(96),
            wordPadding: ref(5),
            words,
            wordsText,
            importCode: getControlImportPath("wordCloud"),
            exampleCode: "<WordCloud :words=\"['Hello', 'Hello', 'Goodbye']\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <WordCloud width=\"100%\"\n        :words=\"words\"\n        :animationDuration=\"animationDuration\"\n        :angleCount=\"angleCount\"\n        :autoClear=\"autoClear\"\n        :colors=\"colors\"\n        :fontName=\"fontName\"\n        :minimumAngle=\"minimumAngle\"\n        :minimumFontSize=\"minimumFontSize\"\n        :maximumAngle=\"maximumAngle\"\n        :maximumFontSize=\"maximumFontSize\"\n        :wordPadding=\"wordPadding\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"wordsText\" label=\"Words\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"colorsText\" label=\"Colors\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"wordPadding\" label=\"Word Padding\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"fontName\" label=\"Font Name\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"minimumFontSize\" label=\"Minimum Font Size\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"maximumFontSize\" label=\"Maximum Font Size\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"angleCount\" label=\"Angle Count\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"minimumAngle\" label=\"Minimum Angle\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"maximumAngle\" label=\"Maximum Angle\" />\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"autoClear\" label=\"Auto Clear\" />\n            </div>\n\n            <div class=\"col-md-4\">\n                <NumberBox v-model=\"animationDuration\" label=\"Animation Duration\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var eventCalendarPickerGallery = defineComponent({
        name: "EventCalendarPickerGallery",
        components: {
          GalleryAndResult,
          EventCalendarPicker
        },
        setup() {
          return {
            value: ref(null),
            importCode: getSfcControlImportPath("eventCalendarPicker"),
            exampleCode: "<EventCalendarPicker label=\"Event Calendar\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <EventCalendarPicker label=\"Event Calendar\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupTypePickerGallery = defineComponent({
        name: "GroupTypePickerGallery",
        components: {
          GalleryAndResult,
          GroupTypePicker,
          CheckBox: CheckBox$1
        },
        setup() {
          return {
            value: ref(null),
            isSortedByName: ref(false),
            multiple: ref(false),
            importCode: getSfcControlImportPath("groupTypePicker"),
            exampleCode: "<GroupTypePicker label=\"Group Type\" v-model=\"value\" :groupTypes=\"[...groupTypeGuids]\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <GroupTypePicker label=\"Group Type\" v-model=\"value\" :isSortedByName=\"isSortedByName\" :multiple=\"multiple\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"isSortedByName\" label=\"Sort by Name\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"multiple\" label=\"Multiple\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var locationAddressPickerGallery = defineComponent({
        name: "LocationAddressPickerGallery",
        components: {
          GalleryAndResult,
          LocationAddressPicker,
          DropDownList,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1,
          Toggle
        },
        setup() {
          return {
            value: ref({}),
            importCode: getSfcControlImportPath("locationAddressPicker"),
            exampleCode: "<LocationAddressPicker v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <LocationAddressPicker label=\"Location Address Picker\" v-model=\"value\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var locationPickerGallery = defineComponent({
        name: "LocationPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          LocationPicker
        },
        setup() {
          return {
            value: ref(null),
            importCode: getSfcControlImportPath("locationPicker"),
            exampleCode: "<LocationPicker label=\"Location\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <LocationPicker label=\"Location\" v-model=\"value\" :multiple=\"multiple\" />\n\n    <template #settings>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var locationListGallery = defineComponent({
        name: "LocationListGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1,
          DefinedValuePicker,
          LocationList
        },
        setup() {
          return {
            value: ref(null),
            locationType: ref(""),
            parentLocation: ref(""),
            showCityState: ref(false),
            multiple: ref(false),
            allowAdd: ref(false),
            showBlankItem: ref(false),
            isAddressRequired: ref(false),
            parentLocationGuid: ref("e0545b4d-4f97-43b0-971f-94b593ae2134"),
            importCode: getSfcControlImportPath("locationList"),
            exampleCode: "<LocationList label=\"Location\" v-model=\"value\" :multiple=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <LocationList label=\"Location\" v-model=\"value\" :multiple=\"multiple\" :locationTypeValueGuid=\"locationType?.value\" :allowAdd=\"allowAdd\" :showCityState=\"showCityState\" :showBlankItem=\"showBlankItem\" :isAddressRequired=\"isAddressRequired\" :parentLocationGuid=\"parentLocationGuid\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"showCityState\" label=\"Show City/State\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"multiple\" label=\"Multiple\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"allowAdd\" label=\"Allow Adding Values\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"showBlankItem\" label=\"Show Blank Item\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isAddressRequired\" label=\"Require Address\" help=\"Only applies when adding a new location.\" />\n            </div>\n            <div class=\"col-md-3\">\n                <TextBox v-model=\"parentLocationGuid\" label=\"Parent Location Guid\" />\n            </div>\n            <div class=\"col-md-3\">\n                <DefinedValuePicker v-model=\"locationType\" label=\"Location Type\" definedTypeGuid=\"3285DCEF-FAA4-43B9-9338-983F4A384ABA\" showBlankItem />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var ethnicityPickerGallery = defineComponent({
        name: "EthnicityPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          EthnicityPicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("ethnicityPicker"),
            exampleCode: "<EthnicityPicker v-model=\"value\" :multiple=\"false\" :showBlankItem=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <EthnicityPicker\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row mb-3\">\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var racePickerGallery = defineComponent({
        name: "RacePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          DropDownList,
          RacePicker,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref({}),
            importCode: getControlImportPath("racePicker"),
            exampleCode: "<RacePicker v-model=\"value\" :multiple=\"false\" :showBlankItem=\"false\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RacePicker\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row mb-3\">\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n            <div class=\"col-md-3\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n\n            <div class=\"col-md-3\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var mediaElementPickerGallery = defineComponent({
        name: "MediaElementPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          TextBox: TextBox$1,
          DropDownList,
          MediaElementPicker
        },
        setup() {
          return {
            value: ref(null),
            account: ref(null),
            folder: ref(null),
            multiple: ref(false),
            showBlankItem: ref(false),
            hideRefresh: ref(false),
            required: ref(false),
            hideAccountPicker: ref(false),
            hideFolderPicker: ref(false),
            hideMediaPicker: ref(false),
            importCode: getSfcControlImportPath("mediaElementPicker"),
            exampleCode: "<MediaElementPicker label=\"Media\" v-model=\"value\" :isRefreshDisallowed=\"false\" :hideAccountPicker=\"hideAccountPicker\" :hideFolderPicker=\"hideFolderPicker\" :hideMediaPicker=\"hideMediaPicker\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{account, folder, modelValue: value}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <MediaElementPicker label=\"Media Element\"\n        v-model=\"value\"\n        v-model:account=\"account\"\n        v-model:folder=\"folder\"\n        :multiple=\"multiple\"\n        :showBlankItem=\"showBlankItem\"\n        :hideRefreshButtons=\"hideRefresh\"\n        :rules=\"required ? 'required' : ''\"\n        :hideAccountPicker=\"hideAccountPicker\"\n        :hideFolderPicker=\"hideFolderPicker\"\n        :hideMediaPicker=\"hideMediaPicker\"\n    />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"multiple\" label=\"Multiple\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"hideRefresh\" label=\"Hide Refresh Buttons\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"required\" label=\"Required\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"hideAccountPicker\" label=\"Hide Account Picker\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"hideFolderPicker\" label=\"Hide Folder Picker\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"hideMediaPicker\" label=\"Hide Media Picker\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var mergeFieldPickerGallery = defineComponent({
        name: "MergeFieldPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          MergeFieldPicker,
          TextBox: TextBox$1
        },
        setup() {
          var value = ref([{
            "value": "Rock.Model.Group|ArchivedByPersonAlias|Person|Aliases|AliasedDateTime",
            "text": "Aliased Date Time"
          }, {
            "value": "Rock.Model.Person|ConnectionStatusValue|Category|CreatedByPersonAliasId",
            "text": "Created By Person Alias Id"
          }]);
          return {
            multiple: ref(true),
            value,
            additionalFields: ref("GlobalAttribute,Rock.Model.Person,Rock.Model.Group"),
            importCode: getSfcControlImportPath("mergeFieldPicker"),
            exampleCode: "<MergeFieldPicker label=\"Merge Field\" v-model=\"value\" :multiple=\"false\" additionalFields=\"GlobalAttribute,Rock.Model.Person,Rock.Model.Group\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <MergeFieldPicker label=\"Merge Field\" v-model=\"value\" :multiple=\"multiple\" :additionalFields=\"additionalFields\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox label=\"Root Merge Fields\" v-model=\"additionalFields\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var categorizedValuePickerGallery = defineComponent({
        name: "CategorizedValuePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          CategorizedValuePicker,
          TextBox: TextBox$1
        },
        setup() {
          return {
            multiple: ref(true),
            value: ref(null),
            required: ref(false),
            definedType: ref(DefinedType.PowerbiAccounts),
            importCode: getSfcControlImportPath("categorizedValuePicker"),
            exampleCode: "<CategorizedValuePicker label=\"Categorized Defined Value\" v-model=\"value\" :definedTypeGuid=\"DefinedType.PowerbiAccounts\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <CategorizedValuePicker label=\"Categorized Defined Value\" v-model=\"value\" :definedTypeGuid=\"definedType\" :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p class=\"my-4\">\n            <strong>NOTE:</strong> This picker will be empty unless you specify a defined type that has\n            categorized values. By default, there aren't any, so you may need to configure a defined type to\n            have categories and add values to those categories in order to see what this control can do.\n        </p>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var reminderTypePickerGallery = defineComponent({
        name: "ReminderTypePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          ReminderTypePicker,
          DropDownList,
          EntityTypePicker,
          TextBox: TextBox$1,
          NumberUpDown
        },
        setup() {
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            value: ref(null),
            required: ref(false),
            entityTypeGuid: ref(null),
            importCode: getSfcControlImportPath("reminderTypePicker"),
            exampleCode: "<ReminderTypePicker label=\"Reminder Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ReminderTypePicker\n        label=\"Reminder Type\"\n        v-model=\"value\"\n        :entityTypeGuid=\"entityTypeGuid?.value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityTypeGuid\" enhanceForLongLists showBlankItem />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupRolePickerGallery = defineComponent({
        name: "GroupRolePickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          GroupRolePicker,
          TextBox: TextBox$1
        },
        setup() {
          return {
            value: ref(null),
            required: ref(false),
            importCode: getSfcControlImportPath("groupRolePicker"),
            exampleCode: "<GroupRolePicker label=\"Group Type and Role\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <GroupRolePicker label=\"Group Type and Role\" v-model=\"value\" :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var modalAlertGallery = defineComponent({
        name: "ModalAlertGallery",
        components: {
          GalleryAndResult,
          RockButton,
          ModalAlert,
          TextBox: TextBox$1,
          DropDownList
        },
        setup() {
          var types = [{
            text: ModalAlertType.Alert,
            value: ModalAlertType.Alert
          }, {
            text: ModalAlertType.Information,
            value: ModalAlertType.Information
          }, {
            text: ModalAlertType.Warning,
            value: ModalAlertType.Warning
          }, {
            text: ModalAlertType.None,
            value: ModalAlertType.None
          }];
          return {
            types,
            type: ref("Alert"),
            isShowing: ref(false),
            message: ref("Message I want to alert you to."),
            importCode: getSfcControlImportPath("modalAlert"),
            exampleCode: "<ModalAlert v-model=\"isShowing\" type=\"ModalAlertType.Alert\">Message I want to alert you to.</ModalAlert>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <ModalAlert v-model=\"isShowing\" :type=\"type\">{{message}}</ModalAlert>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <RockButton @click=\"isShowing = true\">Show</RockButton>\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox label=\"Message\" v-model=\"message\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Alert Type\" v-model=\"type\" :items=\"types\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var contentChannelItemPickerGallery = defineComponent({
        name: "ContentChannelItemPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          ContentChannelItemPicker,
          TextBox: TextBox$1
        },
        setup() {
          return {
            value: ref({
              "value": "d6d4a292-f794-4d0c-bd29-420631a858b3",
              "text": "Miracles in Luke",
              "category": null
            }),
            required: ref(false),
            importCode: getSfcControlImportPath("contentChannelItemPicker"),
            exampleCode: "<ContentChannelItemPicker label=\"Content Channel Item\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <ContentChannelItemPicker label=\"Choose A Content Channel Item\" v-model=\"value\" :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var personLinkGallery = defineComponent({
        name: "PersonLinkGallery",
        components: {
          GalleryAndResult,
          PersonLink,
          DropDownList,
          TextBox: TextBox$1
        },
        setup() {
          var placement = ref("right");
          var textAlign = computed(() => {
            if (placement.value == "right") {
              return "left";
            }
            if (placement.value == "left") {
              return "right";
            }
            return "center";
          });
          return {
            placementOptions: [{
              text: "Top",
              value: "top"
            }, {
              text: "Right (Default)",
              value: "right"
            }, {
              text: "Bottom",
              value: "bottom"
            }, {
              text: "Left",
              value: "left"
            }],
            placement,
            textAlign,
            personName: ref("Ted Decker"),
            role: ref("Member"),
            photoId: ref(""),
            personId: ref("1"),
            importCode: getSfcControlImportPath("personLink"),
            exampleCode: "<PersonLink :personId=\"56\" personName=\"Ted Decker\" role=\"Member\" popOverPlacement=\"right\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <div :style=\"{textAlign, 'margin-top': placement == 'top' ? '150px' : '0'}\">\n        <PersonLink :personId=\"personId\" :personName=\"personName\" :photoId=\"photoId\" :role=\"role\" :popOverPlacement=\"placement\" />\n    </div>\n    <div class=\"mt-5 text-center\" v-if=\"textAlign != 'left'\"><strong>Note:</strong> The link has been moved to demonstrate the placement position of the pop over better. Changing the pop over placement does not normally move PersonLink around, just the position of the pop over.</div>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"personName\" label=\"Person Name\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"role\" label=\"Role\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"photoId\" label=\"Photo ID\" help=\"NOTE: Providing a photo ID only adds a dot. Currently, this does nothing else and the value does not matter, as long as a value is provided.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"personId\" label=\"Person ID\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"placement\" :items=\"placementOptions\" label=\"Pop Over Placement\" :showBlankItem=\"false\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var popOverGallery = defineComponent({
        name: "PopOverGallery",
        components: {
          GalleryAndResult,
          PopOver,
          DropDownList,
          CheckBox: CheckBox$1
        },
        setup() {
          var placement = ref("right");
          var triggerUpdate = ref(false);
          watch(placement, () => {
            triggerUpdate.value = true;
          });
          return {
            placementOptions: [{
              text: "Top",
              value: "top"
            }, {
              text: "Right (Default)",
              value: "right"
            }, {
              text: "Bottom",
              value: "bottom"
            }, {
              text: "Left",
              value: "left"
            }],
            placement,
            triggerUpdate,
            show: ref(false),
            importCode: getSfcControlImportPath("popOver"),
            exampleCode: "<PopOver v-model:isVisible=\"isVisible\" placement=\"right\">\n    <template #activator=\"props\">\n        <strong v-bind=\"props\">Hover Me</strong>\n    </template>\n    <template #popOverContent>\n        This is the content that shows up in the popOver\n    </template>\n</PopOver>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <div class=\"text-center\">\n        <PopOver v-model:isVisible=\"show\" :placement=\"placement\" v-model:triggerUpdate=\"triggerUpdate\">\n            <template #activator=\"props\">\n                <strong v-bind=\"props\">Hover Me</strong>\n            </template>\n            <template #popOverContent>\n                This is the content that shows up in the popOver\n            </template>\n        </PopOver>\n    </div>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"show\" label=\"Show PopOver\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList v-model=\"placement\" :items=\"placementOptions\" label=\"Pop Over Placement\" :showBlankItem=\"false\" />\n            </div>\n        </div>\n    </template>\n\n    <template #syntaxNotes>\n        <p class=\"font-italic\"><strong>Important Notes:</strong> The <code>activator</code> slot's contents must be an HTML element. Putting a component there will not work. Also,\n        you must bind the activator slot's props to that element. This allows the popOver to attach the event listeners so it can detect if\n        it is being hovered.</p>\n    </template>\n</GalleryAndResult>"
      });
      var rockLiteralGallery = defineComponent({
        name: "RockLiteralGallery",
        components: {
          GalleryAndResult,
          RockLiteral,
          TextBox: TextBox$1,
          CheckBox: CheckBox$1
        },
        setup() {
          return {
            label: ref("Romans 11:33"),
            labelClass: ref(""),
            content: ref("<p>Oh, the depth of the riches and the wisdom and the knowledge of God!<br> How unsearchable his judgments and untraceable his ways!"),
            useLabelSlot: ref(false),
            importCode: getSfcControlImportPath("rockLiteral"),
            exampleCode: "// Simple Label\n<RockLiteral label=\"Label Text\" labelCssClass=\"text-primary\">\n    My content beneath the label.\n</RockLiteral>\n\n// Advanced Label with Slot\n<RockLiteral labelCssClass=\"text-primary\">\n    <template #label><i class=\"fa fa-cross\"></i> <strong>My Custom Label</strong></template>\n    My content beneath the label.\n</RockLiteral>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <RockLiteral :labelCssClass=\"labelClass\" :label=\"label\">\n        <template #label v-if=\"useLabelSlot\"><span v-html=\"label\"></span></template>\n        <div v-html=\"content\"></div>\n    </RockLiteral>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"label\" label=\"Label Text\" textMode=\"multiline\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"useLabelSlot\" label=\"Use Label Slot\" help=\"Instead of using the prop. This allows you to pass in HTML or a component for the label instead of plain text.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"labelClass\" label=\"Label Class\" help=\"Try something like <code>text-primary</code> to change the color\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox v-model=\"content\" label=\"Content HTML\" textMode=\"multiline\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var registryEntryGallery = defineComponent({
        name: "RegistryEntryGallery",
        components: {
          GalleryAndResult,
          RegistryEntry,
          RockForm,
          RockButton,
          CheckBox: CheckBox$1
        },
        setup() {
          return {
            entry: ref(null),
            submit: ref(false),
            isRequired: ref(false),
            importCode: getSfcControlImportPath("registryEntry"),
            exampleCode: "<RegistryEntry label=\"Registry Entry\" v-model=\"phoneNumber\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"entry\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockForm v-model:submit=\"submit\">\n        <RegistryEntry label=\"Registry Entry\" v-model=\"entry\" :rules=\"isRequired ? 'required' : ''\" class=\"text-primary\" />\n        <RockButton @click=\"submit=true\">Validate</RockButton>\n    </RockForm>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox v-model=\"isRequired\" label=\"Required\" />\n            </div>\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupTypeGroupPickerGallery = defineComponent({
        name: "GroupTypeGroupPickerGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          GroupTypeGroupPicker,
          TextBox: TextBox$1,
          RockButton
        },
        setup() {
          return {
            value: ref(null),
            groupType: ref(null),
            required: ref(false),
            glabel: ref("Group"),
            importCode: getSfcControlImportPath("groupTypeGroupPicker"),
            exampleCode: "<GroupTypeGroupPicker label=\"Group Type and TypeGroup\" groupLabel=\"Group\" v-model=\"value\"v-model:groupType=\"groupType\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value, groupType}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <GroupTypeGroupPicker label=\"Group Type and TypeGroup\" :groupLabel=\"glabel\" v-model=\"value\" v-model:groupType=\"groupType\" :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox label=\"Group Label\" v-model=\"glabel\" help=\"The label for the 2nd dropdown. The label for the first dropdown is not customizable\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var controlGalleryComponents = [notificationBoxGallery, attributeValuesContainerGallery, badgeListGallery, fieldFilterEditorGallery, textBoxGallery, datePickerGallery, dateRangePickerGallery, dateTimePickerGallery, datePartsPickerGallery, radioButtonListGallery, dialogGallery, checkBoxGallery, inlineCheckBoxGallery, switchGallery, inlineSwitchGallery, checkBoxListGallery, listBoxGallery, phoneNumberBoxGallery, dropDownListGallery, helpBlockGallery, colorPickerGallery, numberBoxGallery, numberRangeBoxGallery, genderDropDownListGallery, socialSecurityNumberBoxGallery, timePickerGallery, ratingGallery, currencyBoxGallery, emailBoxGallery, numberUpDownGallery, staticFormControlGallery, addressControlGallery, toggleGallery, progressTrackerGallery, itemsWithPreAndPostHtmlGallery, urlLinkBoxGallery, fullscreenGallery, panelGallery, personPickerGallery, fileUploaderGallery, imageUploaderGallery, slidingDateRangePickerGallery, definedValuePickerGallery, campusPickerGallery, entityTypePickerGallery, sectionHeaderGallery, sectionContainerGallery, categoryPickerGallery, locationItemPickerGallery, copyButtonGallery, entityTagListGallery, followingGallery, achievementTypePickerGallery, badgeComponentPickerGallery, assessmentTypePickerGallery, assetStorageProviderPickerGallery, auditDetailGallery, binaryFileTypePickerGallery, binaryFilePickerGallery, codeEditorGallery, modalGallery, eventItemPickerGallery, dataViewPickerGallery, workflowTypePickerGallery, componentPickerGallery, financialGatewayPickerGallery, financialStatementTemplatePickerGallery, fieldTypePickerGallery, gradePickerGallery, groupMemberPickerGallery, interactionChannelPickerGallery, interactionComponentPickerGallery, lavaCommandPickerGallery, remoteAuthsPickerGallery, stepProgramPickerGallery, stepStatusPickerGallery, stepTypePickerGallery, streakTypePickerGallery, badgePickerGallery, basicTimePickerGallery, birthdayPickerGallery, countdownTimerGallery, electronicSignatureGallery, fieldTypeEditorGallery, inlineRangeSliderGallery, javaScriptAnchorGallery, keyValueListGallery, loadingGallery, loadingIndicatorGallery, numberUpDownGroupGallery, panelWidgetGallery, progressBarGallery, rockButtonGallery, rockLabelGallery, rockValidationGallery, rangeSliderGallery, tabbedContentGallery, transitionVerticalCollapseGallery, valueDetailListGallery, pagePickerGallery, connectionRequestPickerGallery, groupPickerGallery, mergeTemplatePickerGallery, metricCategoryPickerGallery, metricItemPickerGallery, registrationTemplatePickerGallery, reportPickerGallery, schedulePickerGallery, workflowActionTypePickerGallery, dayOfWeekPickerGallery, monthDayPickerGallery, monthYearPickerGallery, cacheabilityPickerGallery, buttonGroupGallery, intervalPickerGallery, geoPickerGallery, contentDropDownPickerGallery, scheduleBuilderGallery, wordCloudGallery, eventCalendarPickerGallery, groupTypePickerGallery, locationAddressPickerGallery, locationPickerGallery, locationListGallery, ethnicityPickerGallery, racePickerGallery, mediaElementPickerGallery, mergeFieldPickerGallery, categorizedValuePickerGallery, reminderTypePickerGallery, groupRolePickerGallery, modalAlertGallery, contentChannelItemPickerGallery, personLinkGallery, popOverGallery, rockLiteralGallery, registryEntryGallery, groupTypeGroupPickerGallery, script].sort((a, b) => a.name.localeCompare(b.name)).reduce((newList, comp) => {
        newList[comp.name] = comp;
        return newList;
      }, {});
      var detailBlockGallery = defineComponent({
        name: "DetailBlockGallery",
        components: {
          GalleryAndResult,
          CheckBox: CheckBox$1,
          CheckBoxList,
          DetailBlock
        },
        setup() {
          var simulateValues = ref([]);
          var headerActions = computed(() => {
            if (!simulateValues.value.includes("headerActions")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "default",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "success",
              handler: () => alert("Action 2 selected.")
            }];
          });
          var labels = computed(() => {
            if (!simulateValues.value.includes("labels")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "info",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "success",
              handler: () => alert("Action 2 selected.")
            }];
          });
          var headerSecondaryActions = computed(() => {
            if (!simulateValues.value.includes("headerSecondaryActions")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "default",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "success",
              handler: () => alert("Action 2 selected.")
            }];
          });
          var footerActions = computed(() => {
            if (!simulateValues.value.includes("footerActions")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "default",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "success",
              handler: () => alert("Action 2 selected.")
            }];
          });
          var footerSecondaryActions = computed(() => {
            if (!simulateValues.value.includes("footerSecondaryActions")) {
              return [];
            }
            return [{
              iconCssClass: "fa fa-user",
              title: "Action 1",
              type: "default",
              handler: () => alert("Action 1 selected.")
            }, {
              iconCssClass: "fa fa-group",
              title: "Action 2",
              type: "success",
              handler: () => alert("Action 2 selected.")
            }];
          });
          return {
            colors: Array.apply(0, Array(256)).map((_, index) => "rgb(".concat(index, ", ").concat(index, ", ").concat(index, ")")),
            entityTypeGuid: EntityType.Group,
            footerActions,
            footerSecondaryActions,
            headerActions,
            headerSecondaryActions,
            isAuditHidden: ref(false),
            isBadgesVisible: ref(true),
            isDeleteVisible: ref(true),
            isEditVisible: ref(true),
            isFollowVisible: ref(true),
            isSecurityHidden: ref(false),
            isTagsVisible: ref(false),
            labels,
            simulateValues,
            simulateOptions: [{
              value: "headerActions",
              text: "Header Actions"
            }, {
              value: "headerSecondaryActions",
              text: "Header Secondary Actions"
            }, {
              value: "labels",
              text: "Labels"
            }, {
              value: "footerActions",
              text: "Footer Actions"
            }, {
              value: "footerSecondaryActions",
              text: "Footer Secondary Actions"
            }, {
              value: "helpContent",
              text: "Help Content"
            }],
            simulateHelp: computed(() => simulateValues.value.includes("helpContent")),
            importCode: getTemplateImportPath("detailBlock"),
            exampleCode: "<DetailBlock name=\"Sample Entity\" :entityTypeGuid=\"entityTypeGuid\" entityTypeName=\"Entity Type\" entityKey=\"57dc00a3-ff88-4d4c-9878-30ae309117e2\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <DetailBlock name=\"Sample Entity\"\n        :entityTypeGuid=\"entityTypeGuid\"\n        entityTypeName=\"Entity Type\"\n        entityKey=\"57dc00a3-ff88-4d4c-9878-30ae309117e2\"\n        :headerActions=\"headerActions\"\n        :headerSecondaryActions=\"headerSecondaryActions\"\n        :labels=\"labels\"\n        :footerActions=\"footerActions\"\n        :footerSecondaryActions=\"footerSecondaryActions\"\n        :isAuditHidden=\"isAuditHidden\"\n        :isEditVisible=\"isEditVisible\"\n        :isDeleteVisible=\"isDeleteVisible\"\n        :isFollowVisible=\"isFollowVisible\"\n        :isBadgesVisible=\"isBadgesVisible\"\n        :isSecurityHidden=\"isSecurityHidden\"\n        :isTagsVisible=\"isTagsVisible\">\n        <template v-if=\"simulateHelp\" #helpContent>\n            This is some help text.\n        </template>\n        <div v-for=\"c in colors\" :style=\"{ background: c, height: '1px' }\"></div>\n    </DetailBlock>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isAuditHidden\" label=\"Is Audit Hidden\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isBadgesVisible\" label=\"Is Badges Visible\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isDeleteVisible\" label=\"Is Delete Visible\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isEditVisible\" label=\"Is Edit Visible\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isFollowVisible\" label=\"Is Follow Visible\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isSecurityHidden\" label=\"Is Security Hidden\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox v-model=\"isTagsVisible\" label=\"Is Tags Visible\" />\n            </div>\n        </div>\n\n        <CheckBoxList v-model=\"simulateValues\" label=\"Simulate\" :items=\"simulateOptions\" horizontal />\n    </template>\n</GalleryAndResult>"
      });
      var templateGalleryComponents = [detailBlockGallery].sort((a, b) => a.name.localeCompare(b.name)).reduce((newList, comp) => {
        newList[comp.name] = comp;
        return newList;
      }, {});
      var controlGallery = exports('default', defineComponent({
        name: "Example.ControlGallery",
        components: _objectSpread2(_objectSpread2({
          Panel,
          SectionHeader: SectionHeader$1
        }, controlGalleryComponents), templateGalleryComponents),
        setup() {
          var currentComponent = ref(Object.values(controlGalleryComponents)[0]);
          function getComponentFromHash() {
            var _controlGalleryCompon;
            var hashComponent = new URL(document.URL).hash.replace("#", "");
            var component = (_controlGalleryCompon = controlGalleryComponents[hashComponent]) !== null && _controlGalleryCompon !== void 0 ? _controlGalleryCompon : templateGalleryComponents[hashComponent];
            if (component) {
              currentComponent.value = component;
            }
          }
          onMounted(() => {
            getComponentFromHash();
            window.addEventListener("hashchange", getComponentFromHash);
          });
          onUnmounted(() => {
            window.removeEventListener("hashchange", getComponentFromHash);
          });
          return {
            currentComponent,
            convertComponentName,
            controlGalleryComponents,
            templateGalleryComponents
          };
        },
        template: "\n<v-style>\n.gallerySidebar {\n    border-radius: 0;\n    margin: -1px 0 -1px -1px;\n    overflow-y: auto;\n}\n\n.gallerySidebar li.current {\n    font-weight: 700;\n}\n\n.galleryContent {\n    flex-grow: 1;\n    overflow-x: clip;\n    overflow-y: auto;\n    padding: 20px;\n}\n\n.galleryContent .rock-header {\n    margin: 0 -20px;\n}\n\n.galleryContent .rock-header .title {\n    margin-left: 20px;\n}\n</v-style>\n<Panel type=\"block\">\n    <template #title>\n        Obsidian Control Gallery\n    </template>\n    <template #default>\n        <div class=\"panel-flex-fill-body flex-row\">\n\n            <div class=\"gallerySidebar well\">\n                <h4>Components</h4>\n\n                <ul class=\"list-unstyled mb-0\">\n                    <li v-for=\"(component, key) in controlGalleryComponents\" :key=\"key\" :class=\"{current: currentComponent.name === component.name}\">\n                        <a :href=\"'#' + key\" @click=\"currentComponent = component\">{{ convertComponentName(component.name) }}</a>\n                    </li>\n                </ul>\n\n                <h4 class=\"mt-3\">Templates</h4>\n\n                <ul class=\"list-unstyled mb-0\">\n                    <li v-for=\"(component, key) in templateGalleryComponents\" :key=\"key\" :class=\"{current: currentComponent.name === component.name}\">\n                        <a :href=\"'#' + key\" @click=\"currentComponent = component\">{{ convertComponentName(component.name) }}</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"galleryContent\">\n                <component :is=\"currentComponent\" />\n            </div>\n\n        </div>\n    </template>\n</Panel>"
      }));

    })
  };
}));
//# sourceMappingURL=controlGallery.js.map
