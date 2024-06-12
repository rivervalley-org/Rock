System.register(['vue', '@Obsidian/Utility/stringUtils', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Controls/copyButton.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Controls/switch.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Libs/highlightJs', '@Obsidian/Utility/objectUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Controls/fieldFilterEditor.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/textBox.obs', '@Obsidian/Controls/emailBox.obs', '@Obsidian/Controls/codeEditor.obs', '@Obsidian/Controls/datePicker.obs', '@Obsidian/Controls/dateRangePicker.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/Controls/listItems.obs', '@Obsidian/Controls/listBox.obs', '@Obsidian/Controls/birthdayPicker.obs', '@Obsidian/Controls/numberUpDown.obs', '@Obsidian/Controls/addressControl.obs', '@Obsidian/Controls/inlineSwitch.obs', '@Obsidian/Controls/toggle.obs', '@Obsidian/Controls/itemsWithPreAndPostHtml.obs', '@Obsidian/Controls/staticFormControl.obs', '@Obsidian/Controls/progressTracker.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/radioButtonList.obs', '@Obsidian/Controls/dropDownList.obs', '@Obsidian/Controls/dialog.obs', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/checkBox.obs', '@Obsidian/Controls/phoneNumberBox.obs', '@Obsidian/Controls/helpBlock.obs', '@Obsidian/Controls/datePartsPicker.obs', '@Obsidian/Controls/colorPicker.obs', '@Obsidian/Controls/numberBox.obs', '@Obsidian/Controls/numberRangeBox.obs', '@Obsidian/Controls/genderDropDownList.obs', '@Obsidian/Controls/socialSecurityNumberBox.obs', '@Obsidian/Controls/timePicker.obs', '@Obsidian/Controls/urlLinkBox.obs', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/rating.obs', '@Obsidian/Controls/fullscreen.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/fileUploader.obs', '@Obsidian/Controls/imageUploader.obs', '@Obsidian/Controls/entityTypePicker.obs', '@Obsidian/Controls/achievementTypePicker.obs', '@Obsidian/Controls/assessmentTypePicker.obs', '@Obsidian/Controls/assetStorageProviderPicker.obs', '@Obsidian/Controls/binaryFileTypePicker.obs', '@Obsidian/Controls/binaryFilePicker.obs', '@Obsidian/Controls/slidingDateRangePicker.obs', '@Obsidian/Controls/definedValuePicker.obs', '@Obsidian/Controls/categoryPicker.obs', '@Obsidian/Controls/locationItemPicker.obs', '@Obsidian/Controls/connectionRequestPicker.obs', '@Obsidian/Controls/tagList.obs', '@Obsidian/Controls/following.obs', '@Obsidian/Controls/auditDetail.obs', '@Obsidian/Controls/campusPicker.obs', '@Obsidian/Templates/detailBlock', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/guid', '@Obsidian/SystemGuids/assessmentType', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/SystemGuids/definedType', '@Obsidian/SystemGuids/definedValue', '@Obsidian/SystemGuids/entityType', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Utility/slidingDateRange', '@Obsidian/Utility/promiseUtils', '@Obsidian/Controls/sectionContainer.obs', '@Obsidian/PageState', '@Obsidian/Controls/badgeComponentPicker.obs', '@Obsidian/Controls/componentPicker.obs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/eventItemPicker.obs', '@Obsidian/Controls/dataViewPicker.obs', '@Obsidian/Controls/workflowTypePicker.obs', '@Obsidian/Controls/financialGatewayPicker.obs', '@Obsidian/Controls/financialStatementTemplatePicker.obs', '@Obsidian/Controls/fieldTypePicker.obs', '@Obsidian/Controls/gradePicker.obs', '@Obsidian/Controls/scheduleBuilder.obs', '@Obsidian/Controls/groupMemberPicker.obs', '@Obsidian/Controls/interactionChannelPicker.obs', '@Obsidian/Controls/interactionComponentPicker.obs', '@Obsidian/Controls/lavaCommandPicker.obs', '@Obsidian/Controls/remoteAuthsPicker.obs', '@Obsidian/Controls/stepProgramPicker.obs', '@Obsidian/Controls/stepProgramStepTypePicker.obs', '@Obsidian/Controls/stepProgramStepStatusPicker.obs', '@Obsidian/Controls/stepStatusPicker.obs', '@Obsidian/Controls/stepTypePicker.obs', '@Obsidian/Controls/streakTypePicker.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Controls/badgeList.obs', '@Obsidian/Controls/badgePicker.obs', '@Obsidian/Controls/basicTimePicker.obs', '@Obsidian/Controls/countdownTimer.obs', '@Obsidian/Controls/mediaSelector.obs', '@Obsidian/Controls/electronicSignature.obs', '@Obsidian/Controls/fieldTypeEditor.obs', '@Obsidian/Controls/inlineRangeSlider.obs', '@Obsidian/Controls/rangeSlider.obs', '@Obsidian/Controls/javaScriptAnchor.obs', '@Obsidian/Controls/keyValueList.obs', '@Obsidian/Controls/loading.obs', '@Obsidian/Controls/loadingIndicator.obs', '@Obsidian/Controls/numberUpDownGroup.obs', '@Obsidian/Controls/progressBar.obs', '@Obsidian/Controls/rockLabel.obs', '@Obsidian/Controls/rockValidation.obs', '@Obsidian/Controls/tabbedBar.obs', '@Obsidian/Controls/tabbedContent.obs', '@Obsidian/Controls/valueDetailList.obs', '@Obsidian/Controls/pagePicker.obs', '@Obsidian/Controls/groupPicker.obs', '@Obsidian/Controls/mergeTemplatePicker.obs', '@Obsidian/Enums/Controls/mergeTemplateOwnership', '@Obsidian/Controls/metricCategoryPicker.obs', '@Obsidian/Controls/metricItemPicker.obs', '@Obsidian/Controls/registrationTemplatePicker.obs', '@Obsidian/Controls/reportPicker.obs', '@Obsidian/Controls/schedulePicker.obs', '@Obsidian/Controls/workflowActionTypePicker.obs', '@Obsidian/Controls/dayOfWeekPicker.obs', '@Obsidian/Controls/monthDayPicker.obs', '@Obsidian/Controls/monthYearPicker.obs', '@Obsidian/Controls/cacheabilityPicker.obs', '@Obsidian/Controls/buttonGroup.obs', '@Obsidian/Controls/intervalPicker.obs', '@Obsidian/Controls/geoPicker.obs', '@Obsidian/Controls/contentDropDownPicker.obs', '@Obsidian/Controls/wordCloud.obs', '@Obsidian/Controls/eventCalendarPicker.obs', '@Obsidian/Controls/groupTypePicker.obs', '@Obsidian/Controls/locationAddressPicker.obs', '@Obsidian/Controls/locationPicker.obs', '@Obsidian/Controls/locationList.obs', '@Obsidian/Controls/ethnicityPicker.obs', '@Obsidian/Controls/racePicker.obs', '@Obsidian/Controls/mediaElementPicker.obs', '@Obsidian/Controls/mergeFieldPicker.obs', '@Obsidian/Controls/categorizedValuePicker.obs', '@Obsidian/Controls/reminderTypePicker.obs', '@Obsidian/Controls/groupRolePicker.obs', '@Obsidian/Controls/modalAlert.obs', '@Obsidian/Enums/Controls/modalAlertType', '@Obsidian/Controls/contentChannelItemPicker.obs', '@Obsidian/Controls/personLink.obs', '@Obsidian/Controls/popOver.obs', '@Obsidian/Controls/rockLiteral.obs', '@Obsidian/Controls/registryEntry.obs', '@Obsidian/Controls/groupTypeGroupPicker.obs', '@Obsidian/Controls/groupAndRolePicker.obs', '@Obsidian/Controls/accountPicker.obs', '@Obsidian/Controls/noteTextEditor.obs', '@Obsidian/Controls/structuredContentEditor.obs', '@Obsidian/Controls/registrationInstancePicker.obs', '@Obsidian/Controls/interactionChannelInteractionComponentPicker.obs', '@Obsidian/Controls/workflowPicker.obs', '@Obsidian/Controls/valueList.obs', '@Obsidian/Controls/blockTemplatePicker.obs', '@Obsidian/Controls/buttonDropDownList.obs', '@Obsidian/Controls/dropDownMenu.obs', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/dropDownContent.obs', '@Obsidian/Controls/campusAccountAmountPicker.obs', '@Obsidian/Controls/personPicker.obs', '@Obsidian/Controls/imageEditor.obs', '@Obsidian/Enums/Controls/mediaSelectorMode', '@Obsidian/Controls/grid', '@Obsidian/Utility/rockDateTime', '@Obsidian/Controls/currencyBox.obs'], (function (exports) {
  'use strict';
  var isRef, pushScopeId, popScopeId, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, computed, ref, openBlock, createElementBlock, Fragment, createVNode, unref, normalizeClass, renderSlot, withCtx, createCommentVNode, renderList, toDisplayString, createBlock, reactive, watch, nextTick, onMounted, onUnmounted, upperCaseFirstCharacter, PickerDisplayStyle, CopyButton, SectionHeader, Switch, TransitionVerticalCollapse, HighlightJs, ObjectUtils, BtnType, BtnSize, FieldFilterEditor, AttributeValuesContainer, TextBox, EmailBox, CodeEditor, DatePicker, DateRangePicker, DateTimePicker, ListItems, ListBox, BirthdayPicker, NumberUpDown, AddressControl, InlineSwitch, Toggle, ItemsWithPreAndPostHtml, StaticFormControl, ProgressTracker, RockForm, RockButton, RadioButtonList, DropDownList, Dialog, InlineCheckBox, CheckBox, PhoneNumberBox, HelpBlock, DatePartsPicker, ColorPicker, NumberBox, NumberRangeBox, GenderDropDownList, SocialSecurityNumberBox, TimePicker, UrlLinkBox, CheckBoxList, Rating, Fullscreen, Panel, FileUploader, ImageUploader, EntityTypePicker, AchievementTypePicker, AssessmentTypePicker, AssetStorageProviderPicker, BinaryFileTypePicker, BinaryFilePicker, SlidingDateRangePicker, DefinedValuePicker, CategoryPicker, LocationItemPicker, ConnectionRequestPicker, TagList, Following, AuditDetail, CampusPicker, DetailBlock, toNumberOrNull, toNumber, toGuidOrNull, newGuid, AssessmentType, BinaryFiletype, DefinedType, DefinedValue, EntityType, FieldType, rangeTypeOptions, sleep, SectionContainer, useStore, BadgeComponentPicker, ComponentPicker, Modal, EventItemPicker, DataViewPicker, WorkflowTypePicker, FinancialGatewayPicker, FinancialStatementTemplatePicker, FieldTypePicker, GradePicker, ScheduleBuilder, GroupMemberPicker, InteractionChannelPicker, InteractionComponentPicker, LavaCommandPicker, RemoteAuthsPicker, StepProgramPicker, StepProgramStepTypePicker, StepProgramStepStatusPicker, StepStatusPicker, StepTypePicker, StreakTypePicker, NotificationBox, AlertType, BadgeList, BadgePicker, BasicTimePicker, CountdownTimer, MediaSelector, ElectronicSignature, FieldTypeEditor, InlineRangeSlider, RangeSlider, JavaScriptAnchor, KeyValueList, Loading, LoadingIndicator, NumberUpDownGroup, ProgressBar, RockLabel, RockValidation, TabbedBar, TabbedContent, ValueDetailList, PagePicker, GroupPicker, MergeTemplatePicker, MergeTemplateOwnership, MetricCategoryPicker, MetricItemPicker, RegistrationTemplatePicker, ReportPicker, SchedulePicker, WorkflowActionTypePicker, DayOfWeekPicker, MonthDayPicker, MonthYearPicker, CacheabilityPicker, ButtonGroup, IntervalPicker, GeoPicker, ContentDropDownPicker, WordCloud, EventCalendarPicker, GroupTypePicker, LocationAddressPicker, LocationPicker, LocationList, EthnicityPicker, RacePicker, MediaElementPicker, MergeFieldPicker, CategorizedValuePicker, ReminderTypePicker, GroupRolePicker, ModalAlert, ModalAlertType, ContentChannelItemPicker, PersonLink, PopOver, RockLiteral, RegistryEntry, GroupTypeGroupPicker, GroupAndRolePicker, AccountPicker, NoteTextEditor, StructuredContentEditor, RegistrationInstancePicker, InteractionChannelInteractionComponentPicker, WorkflowPicker, ValueList, BlockTemplatePicker, ButtonDropDownList, DropDownMenu, alert$1, DropDownContent, CampusAccountAmountPicker, PersonPicker, ImageEditor, MediaSelectorMode, Grid, TextColumn, DateColumn, NumberColumn, BooleanColumn, EditColumn, DeleteColumn, RockDateTime, CurrencyBox;
  return {
    setters: [function (module) {
      isRef = module.isRef;
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
      reactive = module.reactive;
      watch = module.watch;
      nextTick = module.nextTick;
      onMounted = module.onMounted;
      onUnmounted = module.onUnmounted;
    }, function (module) {
      upperCaseFirstCharacter = module.upperCaseFirstCharacter;
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      CopyButton = module["default"];
    }, function (module) {
      SectionHeader = module["default"];
    }, function (module) {
      Switch = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      HighlightJs = module["default"];
    }, function (module) {
      ObjectUtils = module;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      BtnSize = module.BtnSize;
    }, function (module) {
      FieldFilterEditor = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      CodeEditor = module["default"];
    }, function (module) {
      DatePicker = module["default"];
    }, function (module) {
      DateRangePicker = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      ListItems = module["default"];
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
      CheckBox = module["default"];
    }, function (module) {
      PhoneNumberBox = module["default"];
    }, function (module) {
      HelpBlock = module["default"];
    }, function (module) {
      DatePartsPicker = module["default"];
    }, function (module) {
      ColorPicker = module["default"];
    }, function (module) {
      NumberBox = module["default"];
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
      TagList = module["default"];
    }, function (module) {
      Following = module["default"];
    }, function (module) {
      AuditDetail = module["default"];
    }, function (module) {
      CampusPicker = module["default"];
    }, function (module) {
      DetailBlock = module["default"];
    }, function (module) {
      toNumberOrNull = module.toNumberOrNull;
      toNumber = module.toNumber;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      newGuid = module.newGuid;
    }, function (module) {
      AssessmentType = module.AssessmentType;
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      DefinedType = module.DefinedType;
    }, function (module) {
      DefinedValue = module.DefinedValue;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      rangeTypeOptions = module.rangeTypeOptions;
    }, function (module) {
      sleep = module.sleep;
    }, function (module) {
      SectionContainer = module["default"];
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
      StepProgramStepTypePicker = module["default"];
    }, function (module) {
      StepProgramStepStatusPicker = module["default"];
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
      MediaSelector = module["default"];
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
      ProgressBar = module["default"];
    }, function (module) {
      RockLabel = module["default"];
    }, function (module) {
      RockValidation = module["default"];
    }, function (module) {
      TabbedBar = module["default"];
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
      GroupAndRolePicker = module["default"];
    }, function (module) {
      AccountPicker = module["default"];
    }, function (module) {
      NoteTextEditor = module["default"];
    }, function (module) {
      StructuredContentEditor = module["default"];
    }, function (module) {
      RegistrationInstancePicker = module["default"];
    }, function (module) {
      InteractionChannelInteractionComponentPicker = module["default"];
    }, function (module) {
      WorkflowPicker = module["default"];
    }, function (module) {
      ValueList = module["default"];
    }, function (module) {
      BlockTemplatePicker = module["default"];
    }, function (module) {
      ButtonDropDownList = module["default"];
    }, function (module) {
      DropDownMenu = module["default"];
    }, function (module) {
      alert$1 = module.alert;
    }, function (module) {
      DropDownContent = module["default"];
    }, function (module) {
      CampusAccountAmountPicker = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }, function (module) {
      ImageEditor = module["default"];
    }, function (module) {
      MediaSelectorMode = module.MediaSelectorMode;
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      DateColumn = module.DateColumn;
      NumberColumn = module.NumberColumn;
      BooleanColumn = module.BooleanColumn;
      EditColumn = module.EditColumn;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      CurrencyBox = module["default"];
    }],
    execute: (function () {

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

      function getControlImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Controls/").concat(fileName, "\";");
      }
      function getSfcControlImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Controls/").concat(fileName, ".obs\";");
      }
      function getTemplateImportPath(fileName) {
        return "import ".concat(upperCaseFirstCharacter(fileName), " from \"@Obsidian/Templates/").concat(fileName, "\";");
      }
      function convertComponentName(name) {
        if (!name) {
          return "Unknown Component";
        }
        return name.replace(/[A-Z]/g, " $&").replace(/^[a-z]/, m => m.toUpperCase()).replace(/\.partial$/, "").replace(/Gallery$/, "").trim();
      }
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

      var _withScopeId = n => (pushScopeId("data-v-5e8aca9b"), n = n(), popScopeId(), n);
      var _hoisted_1$8 = {
        class: "galleryContent-mainRow mb-5 row"
      };
      var _hoisted_2$8 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0"
      }, "Test Control", -1));
      var _hoisted_3$8 = {
        key: 0,
        class: "mt-3"
      };
      var _hoisted_4$5 = {
        class: "mb-3 galleryContent-reflectionToggle"
      };
      var _hoisted_5$5 = {
        key: 0
      };
      var _hoisted_6$4 = _withScopeId(() => createElementVNode("h4", {
        class: "mt-0"
      }, "Control Reflection", -1));
      var _hoisted_7$3 = {
        key: 1,
        class: "col-sm-6"
      };
      var _hoisted_8$1 = {
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
      var script$8 = defineComponent({
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
            }, null, 8, ["title", "description"]), createElementVNode("div", _hoisted_1$8, [_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(__props.value === void 0 ? 'col-sm-12' : 'col-sm-6')
            }, [_hoisted_2$8, renderSlot(_ctx.$slots, "default"), __props.enableReflection ? (openBlock(), createElementBlock("div", _hoisted_3$8, [createElementVNode("div", _hoisted_4$5, [createVNode(unref(Switch), {
              modelValue: showReflection.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => showReflection.value = $event),
              text: "Show Reflection"
            }, null, 8, ["modelValue"])]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [showReflection.value ? (openBlock(), createElementBlock("div", _hoisted_5$5, [_hoisted_6$4, renderSlot(_ctx.$slots, "default")])) : createCommentVNode("v-if", true)]),
              _: 3
            })])) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), __props.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_7$3, [createElementVNode("div", _hoisted_8$1, [createElementVNode("h4", null, [_hoisted_9, __props.hasMultipleValues ? (openBlock(), createElementBlock(Fragment, {
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

      script$8.__scopeId = "data-v-5e8aca9b";
      script$8.__file = "src/Example/ControlGallery/galleryAndResult.partial.obs";

      var _hoisted_1$7 = {
        style: {
          "padding-left": "calc(50% - 18px)",
          "display": "flex",
          "background-color": "#f3f3f3"
        }
      };
      var _hoisted_2$7 = {
        class: "row"
      };
      var _hoisted_3$7 = {
        class: "col-md-3"
      };
      var script$7 = defineComponent({
        name: 'dropDownMenuGallery.partial',
        setup(__props) {
          var align = ref("left");
          var alignItems = [{
            value: "left",
            text: "Left"
          }, {
            value: "right",
            text: "Right"
          }];
          var menuItems = [{
            title: "Default",
            type: "default",
            handler: function () {
              var _handler = _asyncToGenerator(function* () {
                return yield alert$1("Default action clicked.");
              });
              function handler() {
                return _handler.apply(this, arguments);
              }
              return handler;
            }()
          }, {
            iconCssClass: "fa fa-refresh",
            title: "Refresh",
            type: "default",
            handler: function () {
              var _handler2 = _asyncToGenerator(function* () {
                return yield alert$1("Refresh action clicked.");
              });
              function handler() {
                return _handler2.apply(this, arguments);
              }
              return handler;
            }()
          }, {
            iconCssClass: "fa fa-trash",
            title: "Delete",
            type: "danger",
            handler: function () {
              var _handler3 = _asyncToGenerator(function* () {
                return yield alert$1("Delete action clicked.");
              });
              function handler() {
                return _handler3.apply(this, arguments);
              }
              return handler;
            }()
          }, {
            title: "Disabled",
            type: "default",
            disabled: true
          }];
          var importCode = getSfcControlImportPath("dropDownMenu");
          var exampleCode = computed(() => {
            return "<DropDownMenu :items=\"menuItems\" align=\"".concat(align.value, "\">\n    <!-- Optional content -->\n    <i class=\"fa fa-ellipsis-v\"></i>\n</DropDownMenu>");
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              importCode: unref(importCode),
              exampleCode: unref(exampleCode)
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_2$7, [createElementVNode("div", _hoisted_3$7, [createVNode(unref(DropDownList), {
                label: "Align",
                modelValue: align.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => align.value = $event),
                items: alignItems,
                showBlankItem: false
              }, null, 8, ["modelValue"])])])]),
              default: withCtx(() => [createElementVNode("div", _hoisted_1$7, [createVNode(unref(DropDownMenu), {
                items: menuItems,
                align: align.value
              }, null, 8, ["align"])])]),
              _: 1
            }, 8, ["importCode", "exampleCode"]);
          };
        }
      });

      script$7.__file = "src/Example/ControlGallery/dropDownMenuGallery.partial.obs";

      var _hoisted_1$6 = {
        style: {
          "padding-left": "calc(50% - 18px)",
          "display": "flex",
          "background-color": "#f3f3f3"
        }
      };
      var _hoisted_2$6 = {
        class: "p-2 clickable"
      };
      var _hoisted_3$6 = createElementVNode("div", {
        class: "p-3"
      }, " This is the inner content. ", -1);
      var _hoisted_4$4 = {
        class: "mt-4"
      };
      var _hoisted_5$4 = createTextVNode("Open");
      var _hoisted_6$3 = {
        class: "row"
      };
      var _hoisted_7$2 = {
        class: "col-md-3"
      };
      var script$6 = defineComponent({
        name: 'dropDownContentGallery.partial',
        setup(__props) {
          var isOpen = ref(false);
          var showArrow = ref(false);
          var importCode = getSfcControlImportPath("dropDownContent");
          var exampleCode = "<DropDownContent>\n    <div class=\"p-3\">This is the inner content.</div>\n</DropDownMenu>";
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              importCode: unref(importCode),
              exampleCode: exampleCode
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_6$3, [createElementVNode("div", _hoisted_7$2, [createVNode(unref(CheckBox), {
                label: "Show Arrow",
                modelValue: showArrow.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => showArrow.value = $event)
              }, null, 8, ["modelValue"])])])]),
              default: withCtx(() => [createElementVNode("div", _hoisted_1$6, [createElementVNode("span", _hoisted_2$6, [createVNode(unref(DropDownContent), {
                modelValue: isOpen.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isOpen.value = $event),
                showArrow: showArrow.value
              }, {
                default: withCtx(() => [_hoisted_3$6]),
                _: 1
              }, 8, ["modelValue", "showArrow"])])]), createElementVNode("div", _hoisted_4$4, [createVNode(unref(RockButton), {
                btnType: "primary",
                onClick: _cache[1] || (_cache[1] = $event => isOpen.value = true)
              }, {
                default: withCtx(() => [_hoisted_5$4]),
                _: 1
              })])]),
              _: 1
            }, 8, ["importCode"]);
          };
        }
      });

      script$6.__file = "src/Example/ControlGallery/dropDownContentGallery.partial.obs";

      var _hoisted_1$5 = {
        class: "row"
      };
      var _hoisted_2$5 = {
        class: "col-md-4"
      };
      var _hoisted_3$5 = {
        key: 0,
        class: "col-md-4"
      };
      var script$5 = defineComponent({
        name: 'buttonDropDownListGallery.partial',
        setup(__props) {
          var items = [{
            text: "Top",
            value: "top"
          }, {
            text: "Right",
            value: "right"
          }, {
            text: "Bottom",
            value: "bottom"
          }, {
            text: "Left",
            value: "left"
          }, {
            text: "Center",
            value: "center"
          }];
          var value = ref("center");
          var useCheckmarks = ref(false);
          var title = ref("Choose");
          var selectionStyle = computed(() => useCheckmarks.value ? "checkmark" : "title");
          var importCode = getSfcControlImportPath("buttonDropDownList");
          var exampleCode = computed(() => {
            return "<ButtonDropDownList v-model=\"value\" :items=\"items\" selectionStyle=\"".concat(selectionStyle.value, "\" ").concat(useCheckmarks.value ? "title=\"".concat(title.value, "\" ") : "", "label=\"Select a placement\" />");
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              value: {
                value: value.value,
                items: items
              },
              hasMultipleValues: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$5, [createVNode(unref(CheckBox), {
                label: "Use Checkmark Selection Style",
                modelValue: useCheckmarks.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => useCheckmarks.value = $event),
                help: "When this is active, the <code>selectionStyle</code> prop is set to 'checkmark'. This means there's a checkmark next to the selected value, and the label inside the button is determined by the <code>title</code> prop rather than the selected value. "
              }, null, 8, ["modelValue"])]), useCheckmarks.value ? (openBlock(), createElementBlock("div", _hoisted_3$5, [createVNode(unref(TextBox), {
                label: "Title",
                modelValue: title.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => title.value = $event),
                help: "This is used as the text on the button when the selection style is 'checkmark'."
              }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true)])]),
              default: withCtx(() => [createVNode(unref(ButtonDropDownList), {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                items: items,
                selectionStyle: unref(selectionStyle),
                title: title.value,
                label: "Select a placement"
              }, null, 8, ["modelValue", "selectionStyle", "title"])]),
              _: 1
            }, 8, ["importCode", "exampleCode", "value"]);
          };
        }
      });

      script$5.__file = "src/Example/ControlGallery/buttonDropDownListGallery.partial.obs";

      var _hoisted_1$4 = {
        class: "row"
      };
      var _hoisted_2$4 = {
        class: "col-md-3"
      };
      var _hoisted_3$4 = {
        class: "col-md-3"
      };
      var _hoisted_4$3 = {
        class: "col-md-3"
      };
      var _hoisted_5$3 = {
        class: "col-md-3"
      };
      var _hoisted_6$2 = {
        class: "row"
      };
      var _hoisted_7$1 = {
        class: "col-md-3"
      };
      var _hoisted_8 = {
        class: "col-md-3"
      };
      var script$4 = defineComponent({
        name: 'campusAccountAmountPickerGallery.partial',
        setup(__props) {
          var multiple = ref(false);
          var value = ref([]);
          var campusGuid = ref(null);
          var hideCampusIfKnown = ref(false);
          var orderBySelectableAccountsIndex = ref(false);
          var includeInactiveCampuses = ref(false);
          var disableAccountCampusMappingLogic = ref(false);
          var accountHeaderTemplate = ref("{{ Account.PublicName }}");
          var selectableAccountGuids = ["bab250ee-cae6-4a41-9756-ad9327408be0", "67c6181c-1d8c-44d7-b262-b81e746f06d8", "4410306f-3fb5-4a57-9a80-09a3f9d40d0c"];
          var importCode = getSfcControlImportPath("campusAccountAmountPicker");
          var exampleCode = computed(() => "<CampusAccountAmountPicker v-model=\"value\" v-model:campusGuid=\"campusGuid\"\n    :selectableAccountGuids=\"['".concat(selectableAccountGuids.join("','"), "']\"\n    accountAmountEntryMode=\"").concat(multiple.value ? "multipleAccounts" : "singleAccount", "\"").concat(hideCampusIfKnown.value ? "\n    hideCampusIfKnown" : "").concat(orderBySelectableAccountsIndex.value ? "\n    orderBySelectableAccountsIndex" : "").concat(includeInactiveCampuses.value ? "\n    includeInactiveCampuses" : "").concat(accountHeaderTemplate.value != "{{ Account.PublicName }}" ? "\n    accountHeaderTemplate=\"".concat(accountHeaderTemplate.value, "\"") : "").concat(disableAccountCampusMappingLogic.value ? "\n    disableAccountCampusMappingLogic" : "", " />"));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              value: {
                value: value.value,
                campusGuid: campusGuid.value
              },
              hasMultipleValues: "",
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              enableReflection: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$4, [createVNode(unref(CheckBox), {
                label: "Use Multiple Account Entry",
                modelValue: multiple.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => multiple.value = $event),
                help: "If this is checked, we set <code>accountAmountEntryMode</code> prop to 'multipleAccounts' instead of the default 'singleAccount'. This allows you to enter amounts for every given account instead of having one amount that is entered for the chosen account."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$4, [createVNode(unref(CheckBox), {
                label: "Hide Campus Picker if Known",
                modelValue: hideCampusIfKnown.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => hideCampusIfKnown.value = $event),
                help: "If this option is set and we pass in a campusGuid, then that campus will be used and the picker will be hidden."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4$3, [createVNode(unref(CheckBox), {
                label: "Order Accounts as Passed In",
                modelValue: orderBySelectableAccountsIndex.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => orderBySelectableAccountsIndex.value = $event),
                help: "By default the accounts are in an order as determined by the database, but if this option is passed, the accounts will appear in the same order as they were passed in"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$3, [createVNode(unref(CheckBox), {
                label: "Include Inactive Campuses",
                modelValue: includeInactiveCampuses.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => includeInactiveCampuses.value = $event)
              }, null, 8, ["modelValue"])])]), createElementVNode("div", _hoisted_6$2, [createElementVNode("div", _hoisted_7$1, [createVNode(unref(CheckBox), {
                label: "Disable Account-Campus Mapping Logic",
                modelValue: disableAccountCampusMappingLogic.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => disableAccountCampusMappingLogic.value = $event)
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_8, [createVNode(unref(TextBox), {
                label: "Account Label Template",
                modelValue: accountHeaderTemplate.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => accountHeaderTemplate.value = $event),
                help: "Use Lava to specify how the account names should appear above the currency boxes (multi-account mode) or in the dropdown (single account mode). <code>{{ Account.PublicName }}</code> is the default"
              }, null, 8, ["modelValue"])])])]),
              default: withCtx(() => [createVNode(unref(CampusAccountAmountPicker), {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                campusGuid: campusGuid.value,
                "onUpdate:campusGuid": _cache[1] || (_cache[1] = $event => campusGuid.value = $event),
                selectableAccountGuids: selectableAccountGuids,
                accountAmountEntryMode: multiple.value ? 'multipleAccounts' : 'singleAccount',
                hideCampusIfKnown: hideCampusIfKnown.value,
                orderBySelectableAccountsIndex: orderBySelectableAccountsIndex.value,
                includeInactiveCampuses: includeInactiveCampuses.value,
                accountHeaderTemplate: accountHeaderTemplate.value,
                disableAccountCampusMappingLogic: disableAccountCampusMappingLogic.value
              }, null, 8, ["modelValue", "campusGuid", "accountAmountEntryMode", "hideCampusIfKnown", "orderBySelectableAccountsIndex", "includeInactiveCampuses", "accountHeaderTemplate", "disableAccountCampusMappingLogic"])]),
              _: 1
            }, 8, ["value", "importCode", "exampleCode"]);
          };
        }
      });

      script$4.__file = "src/Example/ControlGallery/campusAccountAmountPickerGallery.partial.obs";

      var _hoisted_1$3 = {
        class: "row"
      };
      var _hoisted_2$3 = {
        class: "col-md-3"
      };
      var _hoisted_3$3 = {
        class: "col-md-3"
      };
      var _hoisted_4$2 = {
        class: "col-md-3"
      };
      var _hoisted_5$2 = {
        class: "col-md-3"
      };
      var _hoisted_6$1 = createElementVNode("p", {
        class: "text-semibold font-italic"
      }, "Not all settings are demonstrated in this gallery.", -1);
      var _hoisted_7 = createElementVNode("p", null, [createTextVNode("Additional props extend and are passed to the underlying "), createElementVNode("code", null, "Rock Form Field"), createTextVNode(".")], -1);
      var script$3 = defineComponent({
        name: 'personPickerGallery.partial',
        setup(__props) {
          var value = ref({});
          var includeBusinesses = ref(false);
          var excludeDeceased = ref(false);
          var enableSelfSelection = ref(false);
          var expandSearchOptions = ref(false);
          var importCode = getSfcControlImportPath("personPicker");
          var exampleCode = computed(() => {
            return "<PersonPicker v-model=\"value\" label=\"Select a Person\"".concat(includeBusinesses.value ? " includeBusinesses" : "").concat(excludeDeceased.value ? " excludeDeceased" : "").concat(enableSelfSelection.value ? " enableSelfSelection" : "").concat(expandSearchOptions.value ? " expandSearchOptions" : "", " />");
          });
          return (_ctx, _cache) => {
            var _value$value;
            return openBlock(), createBlock(unref(script$8), {
              value: (_value$value = value.value) !== null && _value$value !== void 0 ? _value$value : null,
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              enableReflection: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1$3, [createElementVNode("div", _hoisted_2$3, [createVNode(unref(CheckBox), {
                label: "Include Businesses",
                modelValue: includeBusinesses.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => includeBusinesses.value = $event),
                help: "Include businesses in the search results"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3$3, [createVNode(unref(CheckBox), {
                label: "Exclude Deceased",
                modelValue: excludeDeceased.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => excludeDeceased.value = $event),
                help: "Exclude deceased people from the search results"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4$2, [createVNode(unref(CheckBox), {
                label: "Enable Self Selection",
                modelValue: enableSelfSelection.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => enableSelfSelection.value = $event),
                help: "Add a button that can select the current person"
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$2, [createVNode(unref(CheckBox), {
                label: "Expand Search Options",
                modelValue: expandSearchOptions.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => expandSearchOptions.value = $event),
                help: "Show the extra (address, phone, and email) search fields immediately rather than needing to press the magnifying glass button first."
              }, null, 8, ["modelValue"])])]), _hoisted_6$1, _hoisted_7]),
              default: withCtx(() => [createVNode(unref(PersonPicker), {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                label: "Select a Person",
                includeBusinesses: includeBusinesses.value,
                enableSelfSelection: enableSelfSelection.value,
                expandSearchOptions: expandSearchOptions.value
              }, null, 8, ["modelValue", "includeBusinesses", "enableSelfSelection", "expandSearchOptions"])]),
              _: 1
            }, 8, ["value", "importCode", "exampleCode"]);
          };
        }
      });

      script$3.__file = "src/Example/ControlGallery/personPickerGallery.partial.obs";

      var _hoisted_1$2 = {
        class: "row"
      };
      var _hoisted_2$2 = {
        class: "row"
      };
      var _hoisted_3$2 = createElementVNode("p", null, [createTextVNode("Additional props extend and are passed to the underlying "), createElementVNode("code", null, "Rock Form Field"), createTextVNode(".")], -1);
      var script$2 = defineComponent({
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
            return openBlock(), createBlock(unref(script$8), {
              value: value.value,
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              enableReflection: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1$2, [createVNode(unref(CheckBox), {
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
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_2$2, [createVNode(unref(NumberBox), {
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
              }, null, 8, ["modelValue"])]), _hoisted_3$2]),
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

      script$2.__file = "src/Example/ControlGallery/imageEditorGallery.partial.obs";

      var _hoisted_1$1 = {
        class: "row"
      };
      var _hoisted_2$1 = {
        class: "col-md-6"
      };
      var _hoisted_3$1 = {
        class: "row"
      };
      var _hoisted_4$1 = {
        class: "col-md-3"
      };
      var _hoisted_5$1 = {
        class: "col-md-3"
      };
      var script$1 = defineComponent({
        name: 'lightGridGallery.partial',
        setup(__props) {
          var isVisible = ref(true);
          var useColumnTitles = ref(false);
          var showExport = ref(false);
          var nameTitle = ref("");
          var dateTitle = ref("");
          var numberTitle = ref("");
          var activeTitle = ref("");
          var gridData = reactive({
            rows: [1, 2, 3, 4, 5].map(idx => generateItem(idx))
          });
          var importCode = getControlImportPath("grid");
          var exampleCode = computed(() => {
            return "<Grid :data=\"gridData\" light>\n    <TextColumn name=\"name\" field=\"name\" />\n    <DateColumn name=\"date\" field=\"date\" visiblePriority=\"md\" />\n    <NumberColumn name=\"index\" field=\"index\" visiblePriority=\"lg\" />\n    <BooleanColumn name=\"isActive\" field=\"isActive\" visiblePriority=\"sm\" />\n    <EditColumn />\n    <DeleteColumn disableConfirmation />\n</Grid>\n";
          });
          function generateItem(index) {
            return {
              key: "".concat(index),
              name: "Item ".concat(index),
              date: RockDateTime.now().date.addDays(-index).toISOString(),
              index: index,
              isActive: index % 3 === 0
            };
          }
          function onAddItem() {
            if (gridData.rows) {
              gridData.rows.splice(gridData.rows.length, 0, generateItem(gridData.rows.length + 1));
            }
          }
          function onDelete(key) {
            if (gridData.rows) {
              var index = gridData.rows.findIndex(r => r.key === key);
              if (index !== -1) {
                gridData.rows.splice(index, 1);
              }
            }
          }
          watch(useColumnTitles, _asyncToGenerator(function* () {
            isVisible.value = false;
            yield nextTick();
            nameTitle.value = useColumnTitles.value ? "Name" : "";
            dateTitle.value = useColumnTitles.value ? "Date" : "";
            numberTitle.value = useColumnTitles.value ? "Number" : "";
            activeTitle.value = useColumnTitles.value ? "Active" : "";
            isVisible.value = true;
          }));
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              importCode: unref(importCode),
              exampleCode: unref(exampleCode)
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [createVNode(unref(CheckBox), {
                label: "Use Column Titles",
                modelValue: useColumnTitles.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => useColumnTitles.value = $event)
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_5$1, [createVNode(unref(CheckBox), {
                label: "Show Export",
                modelValue: showExport.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showExport.value = $event)
              }, null, 8, ["modelValue"])])])]),
              default: withCtx(() => [createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, [isVisible.value ? (openBlock(), createBlock(unref(Grid), {
                key: 0,
                data: gridData,
                keyField: "key",
                liveUpdates: "",
                light: "",
                onAddItem: onAddItem,
                showExport: showExport.value
              }, {
                default: withCtx(() => [createVNode(unref(TextColumn), {
                  name: "name",
                  title: nameTitle.value,
                  field: "name"
                }, null, 8, ["title"]), createVNode(unref(DateColumn), {
                  name: "date",
                  title: dateTitle.value,
                  field: "date",
                  visiblePriority: "md"
                }, null, 8, ["title"]), createVNode(unref(NumberColumn), {
                  name: "index",
                  title: numberTitle.value,
                  field: "index",
                  visiblePriority: "lg"
                }, null, 8, ["title"]), createVNode(unref(BooleanColumn), {
                  name: "isActive",
                  title: activeTitle.value,
                  field: "isActive",
                  visiblePriority: "sm"
                }, null, 8, ["title"]), createVNode(unref(EditColumn)), createVNode(unref(DeleteColumn), {
                  onClick: onDelete,
                  disableConfirmation: ""
                })]),
                _: 1
              }, 8, ["data", "showExport"])) : createCommentVNode("v-if", true)])])]),
              _: 1
            }, 8, ["importCode", "exampleCode"]);
          };
        }
      });

      script$1.__file = "src/Example/ControlGallery/lightGridGallery.partial.obs";

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-3"
      };
      var _hoisted_3 = {
        class: "col-md-3"
      };
      var _hoisted_4 = {
        class: "col-md-3"
      };
      var _hoisted_5 = createElementVNode("p", {
        class: "text-semibold font-italic"
      }, "Not all settings are demonstrated in this gallery.", -1);
      var _hoisted_6 = createElementVNode("p", null, [createTextVNode("Additional props extend and are passed to the underlying "), createElementVNode("code", null, "Rock Form Field"), createTextVNode(" and "), createElementVNode("code", null, "Number Box"), createTextVNode(".")], -1);
      var script = defineComponent({
        name: 'currencyBoxGallery.partial',
        setup(__props) {
          var value = ref(1.23);
          var currency = ref({
            text: "USD",
            value: "0BD42A7E-9C7E-417C-AFFE-51102B1E4B43"
          });
          var minimumValue = ref("");
          var maximumValue = ref("");
          var numericMinimumValue = computed(() => toNumberOrNull(minimumValue.value));
          var numericMaximumValue = computed(() => toNumberOrNull(maximumValue.value));
          var importCode = getSfcControlImportPath("currencyBox");
          var exampleCode = computed(() => {
            var currencyProp = " currencyCodeDefinedValueGuid=\"".concat(currency.value.value, "\"");
            var minValProp = numericMinimumValue.value != null ? " :minimumValue=\"".concat(numericMinimumValue.value, "\"") : "";
            var maxValProp = numericMaximumValue.value != null ? " :maximumValue=\"".concat(numericMaximumValue.value, "\"") : "";
            return "<CurrencyBox label=\"Currency\" v-model=\"value\"".concat(currencyProp).concat(minValProp).concat(maxValProp, " />");
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$8), {
              value: value.value,
              importCode: unref(importCode),
              exampleCode: unref(exampleCode),
              enableReflection: ""
            }, {
              settings: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createVNode(unref(DefinedValuePicker), {
                definedTypeGuid: "B9F3D359-4365-4594-BCEE-D23FA824FB81",
                label: "Currency",
                modelValue: currency.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => currency.value = $event)
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_3, [createVNode(unref(TextBox), {
                label: "Minimum Value",
                modelValue: minimumValue.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => minimumValue.value = $event),
                help: "The effect of this is no noticeable in this gallery, but it affects validation."
              }, null, 8, ["modelValue"])]), createElementVNode("div", _hoisted_4, [createVNode(unref(TextBox), {
                label: "Maximum Value",
                modelValue: maximumValue.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => maximumValue.value = $event),
                help: "The effect of this is no noticeable in this gallery, but it affects validation."
              }, null, 8, ["modelValue"])])]), _hoisted_5, _hoisted_6]),
              default: withCtx(() => [createVNode(unref(CurrencyBox), {
                label: "Currency",
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => value.value = $event),
                currencyCodeDefinedValueGuid: unref(toGuidOrNull)(currency.value.value),
                minimumValue: unref(numericMinimumValue),
                maximumValue: unref(numericMaximumValue)
              }, null, 8, ["modelValue", "currencyCodeDefinedValueGuid", "minimumValue", "maximumValue"])]),
              _: 1
            }, 8, ["value", "importCode", "exampleCode"]);
          };
        }
      });

      script.__file = "src/Example/ControlGallery/currencyBoxGallery.partial.obs";

      var attributeValuesContainerGallery = defineComponent({
        name: "AttributeValuesContainerGallery",
        components: {
          GalleryAndResult: script$8,
          AttributeValuesContainer,
          CheckBox,
          NumberBox,
          TextBox
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
          GalleryAndResult: script$8,
          FieldFilterEditor,
          CheckBox,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          HelpBlock,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
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
            var _ref = _asyncToGenerator(function* () {
              yield sleep(5000);
              return options;
            });
            return function loadOptionsAsync() {
              return _ref.apply(this, arguments);
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          CheckBox,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          RockButton,
          Dialog,
          CheckBox
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
          GalleryAndResult: script$8,
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
      var mediaSelectorGallery = defineComponent({
        name: "mediaSelectorGallery",
        components: {
          GalleryAndResult: script$8,
          MediaSelector,
          KeyValueList,
          DropDownList
        },
        setup() {
          return {
            items: ref([""]),
            mediaItems: [],
            modeOptions: [{
              text: "Image",
              value: "0"
            }, {
              text: "Audio",
              value: "1"
            }],
            mode: ref(MediaSelectorMode.Image),
            itemWidth: "100px",
            importCode: getControlImportPath("mediaSelector"),
            exampleCode: "<MediaSelector label=\"MediaSelector\" v-model=\"value\" :mediaItems=\"mediaItems\" :itemWidth=\"itemWidth\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': items, 'input:items': mediaItems}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <MediaSelector label=\"MediaSelector\" v-model=\"items\" :mediaItems=\"mediaItems\" :mode=\"mode\"/>\n\n    <template #settings>\n        <div class=\"row\">\n            <KeyValueList label=\"Media Items\" v-model=\"mediaItems\" />\n            <DropDownList label=\"Mode\" v-model=\"mode\" :items=\"modeOptions\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var listItemsGallery = defineComponent({
        name: "ListItemsGallery",
        components: {
          GalleryAndResult: script$8,
          ListItems,
          TextBox
        },
        setup() {
          return {
            value: ref([]),
            valuePrompt: ref(""),
            importCode: getControlImportPath("listItems"),
            exampleCode: "<ListItems label=\"List Items\" v-model=\"value\" :valuePrompt=\"valuePrompt\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{'output:modelValue': value, 'input:items': options}\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <ListItems label=\"List Items\" v-model=\"value\" :valuePrompt=\"valuePrompt\" />\n\n    <template #settings>\n        <TextBox label=\"Value Prompt\" v-model=\"valuePrompt\" />\n    </template>\n</GalleryAndResult>"
      });
      var listBoxGallery = defineComponent({
        name: "ListBoxGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          DateTimePicker,
          InlineCheckBox
        },
        setup() {
          return {
            date: ref(null),
            displayCurrentOption: ref(false),
            isCurrentDateOffset: ref(false),
            disabled: ref(false),
            importCode: getControlImportPath("dateTimePicker"),
            exampleCode: "<DateTimePicker label=\"Date and Time\" v-model=\"date\" :displayCurrentOption=\"false\" :isCurrentDateOffset=\"false\" :disabled=\"disabled\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"date\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <DateTimePicker label=\"Date and Time\" v-model=\"date\" :displayCurrentOption=\"displayCurrentOption\" :isCurrentDateOffset=\"isCurrentDateOffset\" :disabled=\"disabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"displayCurrentOption\" label=\"Display Current Option\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"isCurrentDateOffset\" label=\"Is Current Date Offset\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <InlineCheckBox v-model=\"disabled\" label=\"Is Disabled\" />\n            </div>\n        </div>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var datePartsPickerGallery = defineComponent({
        name: "DatePartsPickerGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          RockForm,
          RockButton,
          TextBox,
          NumberBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          TimePicker,
          CheckBox
        },
        setup() {
          return {
            value: ref({
              hour: 14,
              minute: 15
            }),
            disabled: ref(false),
            importCode: getSfcControlImportPath("timePicker"),
            exampleCode: "<TimePicker label=\"Time\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <TimePicker label=\"Time\" v-model=\"value\" :disabled=\"disabled\" />\n\n    <template #settings>\n        <div>\n            <CheckBox v-model=\"disabled\" label=\"Disabled\" />\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var ratingGallery = defineComponent({
        name: "RatingGallery",
        components: {
          GalleryAndResult: script$8,
          NumberBox,
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
          GalleryAndResult: script$8,
          Switch
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
          GalleryAndResult: script$8,
          CheckBox,
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
      var emailBoxGallery = defineComponent({
        name: "EmailBoxGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          RockForm,
          RockButton,
          CheckBox,
          AddressControl,
          ButtonDropDownList
        },
        setup() {
          var showCountrySelected = ref("default");
          var showCountry = computed(() => {
            return showCountrySelected.value == "true" ? true : showCountrySelected.value == "false" ? false : null;
          });
          return {
            value: ref({}),
            submit: ref(false),
            required: ref(false),
            partial: ref(false),
            showCountry,
            showCountrySelected,
            showCountryOptions: [{
              text: "Default",
              value: "default"
            }, {
              text: "Yes",
              value: "true"
            }, {
              text: "No",
              value: "false"
            }],
            importCode: getSfcControlImportPath("addressControl"),
            exampleCode: "<AddressControl label=\"Address\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockForm v-model:submit=\"submit\">\n    <AddressControl label=\"Address\" v-model=\"value\" :rules=\"required ? 'required' : ''\" :partialAddressIsAllowed=\"partial\" :showCountry=\"showCountry\" />\n\n    <RockButton @click=\"submit=true\">Validate</RockButton>\n    </RockForm>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <CheckBox label=\"Allow Partial Addresses\" v-model=\"partial\" />\n            </div>\n            <div class=\"col-sm-4\">\n                <ButtonDropDownList label=\"Show Country\" v-model=\"showCountrySelected\" :items=\"showCountryOptions\" help=\"If no value is passed in, the visibility of the Country field will depend on the 'Support International Addresses' Global Attribute setting.\" />\n            </div>\n        </div>\n        <p>All props match that of a <code>Rock Form Field</code></p>\n    </template>\n</GalleryAndResult>"
      });
      var toggleGallery = defineComponent({
        name: "ToggleGallery",
        components: {
          GalleryAndResult: script$8,
          TextBox,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          TextBox,
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
          GalleryAndResult: script$8
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
          GalleryAndResult: script$8,
          InlineSwitch,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
              value: "sidebar",
              text: "Sidebar"
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
            simulateSidebar: computed(() => simulateValues.value.includes("sidebar")),
            simulateHeaderActions: computed(() => simulateValues.value.includes("headerActions")),
            simulateSubheaderLeft: computed(() => simulateValues.value.includes("subheaderLeft")),
            simulateSubheaderRight: computed(() => simulateValues.value.includes("subheaderRight")),
            simulateFooterActions: computed(() => simulateValues.value.includes("footerActions")),
            simulateFooterSecondaryActions: computed(() => simulateValues.value.includes("footerSecondaryActions")),
            simulateLargeBody: computed(() => simulateValues.value.includes("largeBody")),
            simulateHelp: computed(() => simulateValues.value.includes("helpContent")),
            isFullscreenPageOnly: ref(true),
            value: ref(true),
            importCode: getSfcControlImportPath("panel"),
            exampleCode: "<Panel v-model=\"isExanded\" v-model:isDrawerOpen=\"false\" title=\"Panel Title\" :hasCollapse=\"true\" :hasFullscreen=\"false\" :isFullscreenPageOnly=\"true\" :headerSecondaryActions=\"false\">\n    <template #helpContent>Help Content</template>\n    <template #sidebar>Sidebar Content</template>\n    <template #drawer>Drawer Content</template>\n    <template #headerActions>Header Actions</template>\n    <template #subheaderLeft>Sub Header Left</template>\n    <template #subheaderRight>Sub Header Right</template>\n    <template #footerActions>Footer Actions</template>\n    <template #footerSecondaryActions>Footer Secondary Actions</template>\n\n    Main Panel Content\n</Panel>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n    <Panel v-model=\"value\" v-model:isDrawerOpen=\"drawerValue\" :hasCollapse=\"collapsibleValue\" :hasZoom=\"hasZoom\" :hasFullscreen=\"hasFullscreen\" :isFullscreenPageOnly=\"isFullscreenPageOnly\" title=\"Panel Title\" :headerSecondaryActions=\"headerSecondaryActions\">\n        <template v-if=\"simulateHelp\" #helpContent>\n            This is some help text.\n        </template>\n\n        <template v-if=\"simulateDrawer\" #drawer>\n            <div style=\"text-align: center;\">Drawer Content</div>\n        </template>\n\n        <template v-if=\"simulateSidebar\" #sidebar>\n            <div style=\"text-align: center;\"><img src=\"https://placehold.co/280x158\" /></div>\n        </template>\n\n        <template v-if=\"simulateHeaderActions\" #headerActions>\n            <span class=\"action\">\n                <i class=\"fa fa-star-o\"></i>\n            </span>\n\n            <span class=\"action\">\n                <i class=\"fa fa-user\"></i>\n            </span>\n        </template>\n\n        <template v-if=\"simulateSubheaderLeft\" #subheaderLeft>\n            <span class=\"label label-warning\">Warning</span>&nbsp;\n            <span class=\"label label-default\">Default</span>\n        </template>\n\n        <template v-if=\"simulateSubheaderRight\" #subheaderRight>\n            <span class=\"label label-info\">Info</span>&nbsp;\n            <span class=\"label label-default\">Default</span>\n        </template>\n\n        <template v-if=\"simulateFooterActions\" #footerActions>\n            <RockButton btnType=\"primary\">Action 1</RockButton>\n            <RockButton btnType=\"primary\">Action 2</RockButton>\n        </template>\n\n        <template v-if=\"simulateFooterSecondaryActions\" #footerSecondaryActions>\n            <RockButton btnType=\"default\"><i class=\"fa fa-lock\"></i></RockButton>\n            <RockButton btnType=\"default\"><i class=\"fa fa-unlock\"></i></RockButton>\n        </template>\n\n\n        <h4>Romans 11:33-36</h4>\n        <p>\n            Oh, the depth of the riches<br />\n            and the wisdom and the knowledge of God!<br />\n            How unsearchable his judgments<br />\n            and untraceable his ways!<br />\n            For who has known the mind of the Lord?<br />\n            Or who has been his counselor?<br />\n            And who has ever given to God,<br />\n            that he should be repaid?<br />\n            For from him and through him<br />\n            and to him are all things.<br />\n            To him be the glory forever. Amen.\n        </p>\n    </Panel>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"collapsibleValue\" label=\"Collapsible\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"value\" label=\"Panel Open\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"hasFullscreen\" label=\"Has Fullscreen\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"isFullscreenPageOnly\" label=\"Page Only Fullscreen\" />\n            <CheckBox formGroupClasses=\"col-sm-3\" v-model=\"hasZoom\" label=\"Has Zoom\" />\n        </div>\n        <CheckBoxList v-model=\"simulateValues\" label=\"Simulate\" :items=\"simulateOptions\" horizontal :repeatColumns=\"4\" />\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var fileUploaderGallery = defineComponent({
        name: "FileUploaderGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          FileUploader,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          ImageUploader,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          CheckBox,
          DefinedValuePicker,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          SectionHeader,
          CheckBox
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
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <SectionHeader\n        title=\"This is a SectionHeader\"\n        :description=\"description\"\n        :isSeparatorHidden=\"!showSeparator\" >\n        <template v-if=\"showActionBar\" #actions>\n            <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-lock\"></i></a>\n            <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-pencil\"></i></a>\n            <a class=\"btn btn-danger btn-xs btn-square\"><i class=\"fa fa-trash-alt\"></i></a>\n        </template>\n    </SectionHeader>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showSeparator\" label=\"Show Separator\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showDescription\" label=\"Show Description\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showActionBar\" label=\"Show Action Bar\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var sectionContainerGallery = defineComponent({
        name: "SectionContainerGallery",
        components: {
          GalleryAndResult: script$8,
          SectionContainer,
          CheckBox
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
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <SectionContainer\n        title=\"This is a Section Container\"\n        :description=\"description\"\n        v-model=\"showContent\"\n        :toggleText=\"showContentToggle ? 'Show' : ''\" >\n        <template v-if=\"showActionBar\" #actions>\n            <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-lock\"></i></a>\n            <a class=\"btn btn-default btn-xs btn-square\"><i class=\"fa fa-pencil\"></i></a>\n            <a class=\"btn btn-danger btn-xs btn-square\"><i class=\"fa fa-trash-alt\"></i></a>\n        </template>\n        Here's some content to put in here.\n    </SectionContainer>\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showDescription\" label=\"Show Description\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showActionBar\" label=\"Show Action Bar\" />\n            <CheckBox formGroupClasses=\"col-xs-4\" v-model=\"showContentToggle\" label=\"Show Content Toggle\" />\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var categoryPickerGallery = defineComponent({
        name: "CategoryPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          CategoryPicker,
          TextBox,
          EntityTypePicker
        },
        setup() {
          var entityType = ref(null);
          var entityTypeGuid = computed(() => {
            var _toGuidOrNull, _entityType$value;
            return (_toGuidOrNull = toGuidOrNull(entityType === null || entityType === void 0 ? void 0 : (_entityType$value = entityType.value) === null || _entityType$value === void 0 ? void 0 : _entityType$value.value)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : undefined;
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          TextBox,
          DropDownList,
          CopyButton
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
      var tagListGallery = defineComponent({
        name: "TagListGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          RockButton,
          TagList
        },
        setup() {
          var _store$state$currentP, _store$state$currentP2;
          var store = useStore();
          return {
            control: ref(null),
            disabled: ref(false),
            delaySave: ref(false),
            showInactive: ref(false),
            disallowNewTags: ref(false),
            entityTypeGuid: EntityType.Person,
            entityKey: (_store$state$currentP = (_store$state$currentP2 = store.state.currentPerson) === null || _store$state$currentP2 === void 0 ? void 0 : _store$state$currentP2.idKey) !== null && _store$state$currentP !== void 0 ? _store$state$currentP : "",
            btnType: BtnType.Primary,
            importCode: getSfcControlImportPath("tagList"),
            exampleCode: "<TagList :entityTypeGuid=\"entityTypeGuid\" :entityKey=\"entityKey\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n\n    <TagList\n        :entityTypeGuid=\"entityTypeGuid\"\n        :entityKey=\"entityKey\"\n        :disabled=\"disabled\"\n        :showInactiveTags=\"showInactive\"\n        :disallowNewTags=\"disallowNewTags\"\n        :delaySave=\"delaySave\"\n        ref=\"control\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" help=\"Makes it read-only. You can't add or remove tags if it's disabled.\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Delay Saving Value\" v-model=\"delaySave\" help=\"If checked, creating new tags, adding tags and removing tags is not saved to the server until the component's <code>saveTagValues</code> method is called.\" />\n                <RockButton v-if=\"delaySave\" :btnType=\"btnType\" type=\"button\" @click=\"control.saveTagValues()\"><i class=\"fa fa-save\" /> Save Values</RockButton>\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Disallow New Tags\" v-model=\"disallowNewTags\" help=\"If checked, no new tags can be created, though you can still add existing tags\" />\n            </div>\n            <div class=\"col-md-3\">\n                <CheckBox label=\"Show Inactive Tags\" v-model=\"showInactive\" />\n            </div>\n        </div>\n        <p>\n            This control takes multiple props for filtering the tags to show and giving specifiers about what it tags. Below is a list of those props:\n        </p>\n        <table class=\"table\" style=\"max-width:450px;\">\n            <tr>\n                <th scope=\"col\">Prop</th>\n                <th scope=\"col\">Type</th>\n                <th scope=\"col\" class=\"text-center\">Required</th>\n            </tr>\n            <tr>\n                <th scope=\"row\"><code>entityTypeGuid</code></th>\n                <td>GUID String</td>\n                <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n            </tr>\n            <tr>\n                <th scope=\"row\"><code>entityKey</code></th>\n                <td>String</td>\n                <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n            </tr>\n            <tr>\n                <th scope=\"row\"><code>categoryGuid</code></th>\n                <td>GUID String</td>\n                <td class=\"text-center\"><i class=\"fa fa-ban text-danger\"></i></td>\n            </tr>\n            <tr>\n                <th scope=\"row\"><code>entityQualifierColumn</code></th>\n                <td>String</td>\n                <td class=\"text-center\"><i class=\"fa fa-ban text-danger\"></i></td>\n            </tr>\n            <tr>\n                <th scope=\"row\"><code>entityQualifierValue</code></th>\n                <td>String</td>\n                <td class=\"text-center\"><i class=\"fa fa-ban text-danger\"></i></td>\n            </tr>\n        </table>\n    </template>\n</GalleryAndResult>"
      });
      var followingGallery = defineComponent({
        name: "FollowingGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          Following,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CampusPicker,
          CheckBox,
          DefinedValuePicker,
          DropDownList,
          NumberUpDown,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
            displayPersistedOnly: ref(false),
            importCode: getControlImportPath("dataViewPicker"),
            exampleCode: "<DataViewPicker label=\"Data View\" v-model=\"value\" :displayOnlyPersisted=\"true\"/>"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <DataViewPicker label=\"Data Views\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :displayPersistedOnly=\"displayPersistedOnly\"\n        :showBlankItem=\"showBlankItem\"\n        :entityTypeGuid=\"entityTypeGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityTypeGuid\" enhanceForLongLists showBlankItem />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Display Only Persisted\" v-model=\"displayPersistedOnly\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var workflowTypePickerGallery = defineComponent({
        name: "WorkflowTypePickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
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
            importCode: getSfcControlImportPath("workflowTypePicker"),
            exampleCode: "<WorkflowTypePicker label=\"Data View\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <WorkflowTypePicker label=\"Data Views\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :showBlankItem=\"showBlankItem\"\n        :includeInactiveItems=\"includeInactiveItems\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Include Inactive Items\" v-model=\"includeInactiveItems\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var financialGatewayPickerGallery = defineComponent({
        name: "FinancialGatewayPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          AuditDetail,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          Modal,
          TextBox
        },
        setup() {
          return {
            isOpen: ref(false),
            saveText: ref("Save"),
            cancelText: ref("Cancel"),
            isFooterHidden: ref(false),
            isSaveButtonDisabled: ref(false),
            isCloseButtonHidden: ref(false),
            clickBackdropToClose: ref(false),
            value: "",
            importCode: getControlImportPath("modal"),
            exampleCode: "<Modal v-model=\"isOpen\" title=\"Modal Dialog Title\" saveText=\"Save\" @save=\"isOpen = false\">\n    <TextBox label=\"Required Value\" v-model=\"value\" rules=\"required\" />\n</Modal>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\">\n    <CheckBox label=\"Is Open\" v-model=\"isOpen\" />\n\n    <Modal v-model=\"isOpen\"\n           title=\"Modal Dialog Title\"\n           :saveText=\"saveText\"\n           :cancelText=\"cancelText\"\n           :isFooterHidden=\"isFooterHidden\"\n           :isSaveButtonDisabled=\"isSaveButtonDisabled\"\n           :isCloseButtonHidden=\"isCloseButtonHidden\"\n           :clickBackdropToClose=\"clickBackdropToClose\"\n           @save=\"isOpen = false\">\n        <TextBox label=\"Required Value\" v-model=\"value\" rules=\"required\" />\n    </Modal>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox label=\"Save Text\" v-model=\"saveText\" help=\"If an empty string is provided, the Save button will be hidden.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox label=\"Cancel Text\" v-model=\"cancelText\" help=\"If an empty string is provided, the Cancel button will be hidden.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Is Footer Hidden\" v-model=\"isFooterHidden\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Is Save Button Disabled\" v-model=\"isSaveButtonDisabled\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Is Close Button Hidden\" v-model=\"isCloseButtonHidden\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Click Backdrop to Close\" v-model=\"clickBackdropToClose\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var componentPickerGallery = defineComponent({
        name: "ComponentPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          ComponentPicker,
          NumberUpDown,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          GradePicker,
          NumberUpDown,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          GroupMemberPicker,
          NumberUpDown,
          TextBox
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
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <GroupMemberPicker label=\"Group Member\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :groupGuid=\"groupGuid\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <TextBox label=\"Group GUID\" v-model=\"groupGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var interactionChannelPickerGallery = defineComponent({
        name: "InteractionChannelPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          InteractionChannelPicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
            importCode: getSfcControlImportPath("interactionChannelPicker"),
            exampleCode: "<InteractionChannelPicker label=\"Interaction Channel\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <InteractionChannelPicker label=\"Interaction Channel\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var interactionComponentPickerGallery = defineComponent({
        name: "InteractionComponentPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          InteractionComponentPicker,
          InteractionChannelPicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
            importCode: getSfcControlImportPath("interactionComponentPicker"),
            exampleCode: "<InteractionComponentPicker label=\"Interaction Component\" v-model=\"value\" :interactionChannelGuid=\"interactionChannelGuid\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <InteractionComponentPicker label=\"Interaction Component\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :interactionChannelGuid=\"interactionChannelGuid?.value\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <InteractionChannelPicker label=\"Interaction Channel\" v-model=\"interactionChannelGuid\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var lavaCommandPickerGallery = defineComponent({
        name: "LavaCommandPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          LavaCommandPicker,
          NumberUpDown,
          TextBox,
          NumberBox
        },
        setup() {
          return {
            columnCount: ref(3),
            displayStyle: ref(PickerDisplayStyle.List),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(true),
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
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          RemoteAuthsPicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          StepProgramPicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
            importCode: getSfcControlImportPath("stepProgramPicker"),
            exampleCode: "<StepProgramPicker label=\"Step Program\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepProgramPicker label=\"Step Program\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepProgramStepTypePickerGallery = defineComponent({
        name: "StepProgramStepTypePickerGallery",
        components: {
          GalleryAndResult: script$8,
          StepProgramPicker,
          StepProgramStepTypePicker,
          CheckBox
        },
        setup() {
          var defaultProgram = ref({});
          var defaultProgramGuid = computed(() => {
            var _defaultProgram$value;
            return toGuidOrNull((_defaultProgram$value = defaultProgram.value) === null || _defaultProgram$value === void 0 ? void 0 : _defaultProgram$value.value);
          });
          return {
            value: ref({}),
            stepProgram: ref({}),
            defaultProgram,
            defaultProgramGuid,
            required: ref(false),
            disabled: ref(false),
            importCode: getSfcControlImportPath("stepProgramStepTypePicker"),
            exampleCode: "<StepProgramStepTypePicker label=\"Step Program > Step Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value,stepProgram}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <StepProgramStepTypePicker label=\"Step Program > Step Type\"\n        v-model=\"value\"\n        v-model:stepProgram=\"stepProgram\"\n        :defaultStepProgramGuid=\"defaultProgramGuid\"\n        :rules=\"required ? 'required' : ''\"\n        :disabled=\"disabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Default Step Program\" v-model=\"defaultProgram\" showBlankItem help=\"If this defaultStepProgramGuid prop is set, the Step Program selector will not be shown and the Step Types will be based on that Program.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepProgramStepStatusPickerGallery = defineComponent({
        name: "StepProgramStepStatusPickerGallery",
        components: {
          GalleryAndResult: script$8,
          StepProgramPicker,
          StepProgramStepStatusPicker,
          CheckBox
        },
        setup() {
          var defaultProgram = ref({});
          var defaultProgramGuid = computed(() => {
            var _defaultProgram$value2;
            return toGuidOrNull((_defaultProgram$value2 = defaultProgram.value) === null || _defaultProgram$value2 === void 0 ? void 0 : _defaultProgram$value2.value);
          });
          return {
            value: ref({}),
            stepProgram: ref({}),
            defaultProgram,
            defaultProgramGuid,
            required: ref(false),
            disabled: ref(false),
            importCode: getSfcControlImportPath("stepProgramStepStatusPicker"),
            exampleCode: "<StepProgramStepStatusPicker label=\"Step Program > Step Status\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value,stepProgram}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <StepProgramStepStatusPicker label=\"Step Program > Step Status\"\n        v-model=\"value\"\n        v-model:stepProgram=\"stepProgram\"\n        :defaultStepProgramGuid=\"defaultProgramGuid\"\n        :rules=\"required ? 'required' : ''\"\n        :disabled=\"disabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Default Step Program\" v-model=\"defaultProgram\" showBlankItem help=\"If this defaultStepProgramGuid prop is set, the Step Program selector will not be shown and the Step Types will be based on that Program.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepStatusPickerGallery = defineComponent({
        name: "StepStatusPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          StepStatusPicker,
          StepProgramPicker,
          NumberUpDown,
          TextBox,
          NumberBox
        },
        setup() {
          var stepProgram = ref({});
          var stepProgramGuid = computed(() => {
            var _stepProgram$value;
            return toGuidOrNull((_stepProgram$value = stepProgram.value) === null || _stepProgram$value === void 0 ? void 0 : _stepProgram$value.value);
          });
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            stepProgram,
            stepProgramGuid,
            value: ref({}),
            importCode: getSfcControlImportPath("stepStatusPicker"),
            exampleCode: "<StepStatusPicker label=\"Step Status\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepStatusPicker label=\"Step Status\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :stepProgramGuid=\"stepProgramGuid\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Step Program\" v-model=\"stepProgram\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var stepTypePickerGallery = defineComponent({
        name: "StepTypePickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          StepTypePicker,
          StepProgramPicker,
          NumberUpDown,
          TextBox,
          NumberBox
        },
        setup() {
          var stepProgram = ref({});
          var stepProgramGuid = computed(() => {
            var _stepProgram$value2;
            return toGuidOrNull((_stepProgram$value2 = stepProgram.value) === null || _stepProgram$value2 === void 0 ? void 0 : _stepProgram$value2.value);
          });
          return {
            columnCount: ref(0),
            displayStyle: ref(PickerDisplayStyle.Auto),
            displayStyleItems,
            enhanceForLongLists: ref(false),
            multiple: ref(false),
            showBlankItem: ref(false),
            stepProgram,
            stepProgramGuid,
            value: ref({}),
            importCode: getSfcControlImportPath("stepTypePicker"),
            exampleCode: "<StepTypePicker label=\"Step Type\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <StepTypePicker label=\"Step Type\"\n        v-model=\"value\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\"\n        :stepProgramGuid=\"stepProgramGuid\" />\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <StepProgramPicker label=\"Step Program\" v-model=\"stepProgram\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var streakTypePickerGallery = defineComponent({
        name: "StreakTypePickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          StreakTypePicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
          GalleryAndResult: script$8,
          CheckBox,
          DropDownList,
          BadgePicker,
          NumberUpDown,
          TextBox,
          NumberBox
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
          GalleryAndResult: script$8,
          NotificationBox,
          DropDownList,
          CheckBox,
          TextBox
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
          GalleryAndResult: script$8,
          BadgeList,
          EntityTypePicker,
          TextBox,
          CheckBox,
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
          GalleryAndResult: script$8,
          BasicTimePicker,
          CheckBox
        },
        setup() {
          return {
            value: ref({}),
            disabled: ref(false),
            importCode: getControlImportPath("basicTimePicker"),
            exampleCode: "<BasicTimePicker label=\"Time\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n    <BasicTimePicker label=\"Time\" v-model=\"value\" :disabled=\"disabled\" />\n\n    <template #settings>\n        <div>\n            <CheckBox v-model=\"disabled\" label=\"Disabled\" />\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code> and <code>Drop Down List</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var birthdayPickerGallery = defineComponent({
        name: "BirthdayPickerGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          CountdownTimer,
          TextBox,
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
          GalleryAndResult: script$8,
          ElectronicSignature,
          Toggle,
          TextBox
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
          GalleryAndResult: script$8,
          FieldTypeEditor,
          CheckBox,
          TextBox
        },
        setup() {
          return {
            value: ref({
              configurationValues: {
                truetext: "Yup",
                falsetext: "Nah",
                BooleanControlType: "2"
              },
              defaultValue: "True",
              fieldTypeGuid: FieldType.Boolean
            }),
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
          GalleryAndResult: script$8,
          InlineRangeSlider,
          CheckBox,
          NumberBox
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
          GalleryAndResult: script$8,
          JavaScriptAnchor,
          CheckBox,
          NumberBox
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
          GalleryAndResult: script$8,
          KeyValueList,
          CheckBox,
          TextBox
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
            fullWidth: ref(false),
            keyPlaceholder: ref("Key"),
            valuePlaceholder: ref("Value"),
            importCode: getControlImportPath("keyValueList"),
            exampleCode: "<KeyValueList label=\"Keys and Values\" v-model=\"value\" :valueOptions=\"valueOptions\" :displayValueFirst=\"displayValueFirst\" :keyPlaceholder=\"keyPlaceholder\" :valuePlaceholder=\"valuePlaceholder\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{ 'output:modelValue':value, 'input:valueOptions':valueOptions }\"\n    hasMultipleValues\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <KeyValueList label=\"Keys and Values\" v-model=\"value\" :valueOptions=\"valueOptions\" :displayValueFirst=\"displayValueFirst\" :keyPlaceholder=\"keyPlaceholder\" :valuePlaceholder=\"valuePlaceholder\" :fullWidth=\"fullWidth\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-4\" label=\"Limit Possible Values\" v-model=\"limitValues\" />\n            <CheckBox formGroupClasses=\"col-md-4\" label=\"Show Value First\" v-model=\"displayValueFirst\" />\n            <CheckBox formGroupClasses=\"col-md-4\" label=\"Full Width\" v-model=\"fullWidth\" />\n        </div>\n        <div class=\"row\">\n            <TextBox formGroupClasses=\"col-md-4\" label=\"Placeholder for Key Field\" v-model=\"keyPlaceholder\" />\n            <TextBox formGroupClasses=\"col-md-4\" label=\"Placeholder for Value Field\" v-model=\"valuePlaceholder\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var loadingGallery = defineComponent({
        name: "LoadingGallery",
        components: {
          GalleryAndResult: script$8,
          Loading,
          CheckBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          NumberUpDownGroup,
          CheckBox,
          NumberBox
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
      var progressBarGallery = defineComponent({
        name: "ProgressBarGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          RockButton,
          DropDownList,
          CheckBox,
          TextBox
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
            importCode: "import RockButton, { BtnType, BtnSize } from \"@Obsidian/Controls/rockButton.obs\";",
            exampleCode: "<RockButton\n    :btnSize=\"BtnSize.Default\"\n    :btnType=\"BtnType.Default\"\n    @click=\"onClick\"\n    :isLoading=\"isLoading\"\n    :autoLoading=\"autoLoading\"\n    :autoDisable=\"autoDisable\"\n    :loadingText=\"loadingText\">\n    Button Text\n</RockButton>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RockButton :btnSize=\"btnSize\" :btnType=\"btnType\" @click=\"onClick\" :isLoading=\"isLoading\" :autoLoading=\"autoLoading\" :autoDisable=\"autoDisable\" :loadingText=\"loadingText\" :isSquare=\"isSquare\">\n        <i class=\"fa fa-cross\" v-if=\"isSquare\"></i>\n        <template v-else>Click Here to Fire Async Operation</template>\n    </RockButton>\n\n    <template #settings>\n        <div class=\"row\">\n            <DropDownList formGroupClasses=\"col-md-3\" label=\"Button Size\" v-model=\"btnSize\" :items=\"sizeOptions\" :showBlankItem=\"false\" />\n            <DropDownList formGroupClasses=\"col-md-3\" label=\"Button Type\" v-model=\"btnType\" :items=\"typeOptions\" :showBlankItem=\"false\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Auto Loading Indicator\" v-model=\"autoLoading\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Auto Disable\" v-model=\"autoDisable\" />\n        </div>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Force Loading\" v-model=\"isLoading\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Square\" v-model=\"isSquare\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Loading Text\" v-model=\"loadingText\" />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var rockLabelGallery = defineComponent({
        name: "RockLabelGallery",
        components: {
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          RangeSlider,
          CheckBox,
          NumberBox
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
      var tabbedBarGallery = defineComponent({
        name: "TabbedBarGallery",
        components: {
          GalleryAndResult: script$8,
          TabbedBar,
          DropDownList
        },
        setup() {
          return {
            list: ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians"],
            selectedTab: ref(""),
            type: ref("tabs"),
            typeItems: [{
              value: "tabs",
              text: "Tabs"
            }, {
              value: "pills",
              text: "Pills"
            }],
            importCode: getSfcControlImportPath("tabbedBar"),
            exampleCode: "<TabbedBar v-model=\"selectedTab\" :tabs=\"arrayOfItems\" :type=\"type\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <TabbedBar v-model=\"selectedTab\" :tabs=\"list\" :type=\"type\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Type\" v-model=\"type\" :items=\"typeItems\" :showBlankItem=\"false\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var tabbedContentGallery = defineComponent({
        name: "TabbedContentGallery",
        components: {
          GalleryAndResult: script$8,
          TabbedContent,
          CheckBox,
          NumberBox
        },
        setup() {
          return {
            list: ["Matthew", "Mark", "Luke", "John"],
            importCode: getSfcControlImportPath("tabbedContent"),
            exampleCode: "<TabbedContent :tabs=\"arrayOfItems\">\n    <template #tabpane=\"{item}\">\n        This is the content for {{item}}.\n    </template>\n</TabbedContent>"
          };
        },
        template: "\n<GalleryAndResult\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <TabbedContent :tabs=\"list\">\n        <template #tabpane=\"{item}\">\n            This is the content for {{item}}.\n        </template>\n    </TabbedContent>\n</GalleryAndResult>"
      });
      var transitionVerticalCollapseGallery = defineComponent({
        name: "TransitionVerticalCollapseGallery",
        components: {
          GalleryAndResult: script$8,
          TransitionVerticalCollapse,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          CodeEditor,
          DropDownList,
          NumberBox
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          DropDownList,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          ButtonGroup,
          DropDownList,
          CheckBox,
          TextBox
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
          GalleryAndResult: script$8,
          IntervalPicker,
          DropDownList,
          CheckBox,
          TextBox
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          ContentDropDownPicker,
          InlineCheckBox,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          NumberBox,
          TextBox,
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
          GalleryAndResult: script$8,
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
          GalleryAndResult: script$8,
          GroupTypePicker,
          CheckBox
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
          GalleryAndResult: script$8,
          LocationAddressPicker,
          DropDownList,
          CheckBox,
          TextBox,
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
          GalleryAndResult: script$8,
          CheckBox,
          LocationPicker,
          CheckBoxList
        },
        setup() {
          var options = [{
            text: "Location",
            value: "2"
          }, {
            text: "Address",
            value: "1"
          }, {
            text: "Point",
            value: "4"
          }, {
            text: "Geo-fence",
            value: "8"
          }];
          var selectedOptions = ref(["1", "2", "4", "8"]);
          var selectedAsNumber = computed(() => {
            if (selectedOptions.value.length === 0) {
              return undefined;
            }
            return selectedOptions.value.reduce((total, option) => {
              return total + parseInt(option, 10);
            }, 0);
          });
          return {
            value: ref(undefined),
            currentPickerMode: ref(2),
            options,
            selectedOptions,
            selectedAsNumber,
            importCode: getSfcControlImportPath("locationPicker"),
            exampleCode: "<LocationPicker label=\"Location\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value, currentPickerMode}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <LocationPicker label=\"Location\" v-model=\"value\" v-model:currentPickerMode=\"currentPickerMode\" :allowedPickerModes=\"selectedAsNumber\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <CheckBoxList v-model=\"selectedOptions\" :items=\"options\" label=\"Allowed Modes\" horizontal />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var locationListGallery = defineComponent({
        name: "LocationListGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          TextBox,
          DefinedValuePicker,
          LocationList
        },
        setup() {
          return {
            value: ref(null),
            locationType: ref(null),
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
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
          GalleryAndResult: script$8,
          CheckBox,
          TextBox,
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
          GalleryAndResult: script$8,
          CheckBox,
          MergeFieldPicker,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          CategorizedValuePicker,
          TextBox
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
          GalleryAndResult: script$8,
          CheckBox,
          ReminderTypePicker,
          DropDownList,
          EntityTypePicker,
          TextBox,
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
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ReminderTypePicker\n        label=\"Reminder Type\"\n        v-model=\"value\"\n        :entityTypeGuid=\"entityTypeGuid\"\n        :multiple=\"multiple\"\n        :columnCount=\"columnCount\"\n        :enhanceForLongLists=\"enhanceForLongLists\"\n        :displayStyle=\"displayStyle\"\n        :showBlankItem=\"showBlankItem\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhanceForLongLists\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Show Blank Item\" v-model=\"showBlankItem\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DropDownList label=\"Display Style\" :showBlankItem=\"false\" v-model=\"displayStyle\" :items=\"displayStyleItems\" />\n            </div>\n            <div class=\"col-md-4\">\n                <NumberUpDown label=\"Column Count\" v-model=\"columnCount\" :min=\"0\" />\n            </div>\n            <div class=\"col-md-4\">\n                <EntityTypePicker label=\"For Entity Type\" v-model=\"entityTypeGuid\" enhanceForLongLists showBlankItem />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupRolePickerGallery = defineComponent({
        name: "GroupRolePickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          GroupRolePicker,
          TextBox
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
          GalleryAndResult: script$8,
          RockButton,
          ModalAlert,
          TextBox,
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
          GalleryAndResult: script$8,
          CheckBox,
          ContentChannelItemPicker,
          TextBox
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
          GalleryAndResult: script$8,
          PersonLink,
          DropDownList,
          TextBox
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
          GalleryAndResult: script$8,
          PopOver,
          DropDownList,
          CheckBox
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
          GalleryAndResult: script$8,
          RockLiteral,
          TextBox,
          CheckBox
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
          GalleryAndResult: script$8,
          RegistryEntry,
          RockForm,
          RockButton,
          CheckBox
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
          GalleryAndResult: script$8,
          CheckBox,
          GroupTypeGroupPicker,
          TextBox,
          RockButton
        },
        setup() {
          return {
            value: ref(null),
            groupType: ref(null),
            required: ref(false),
            glabel: ref("Group"),
            importCode: getSfcControlImportPath("groupTypeGroupPicker"),
            exampleCode: "<GroupTypeGroupPicker label=\"Group Type and Group\" groupLabel=\"Group\" v-model=\"value\" v-model:groupType=\"groupType\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value, groupType}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <GroupTypeGroupPicker label=\"Group Type and Group\" :groupLabel=\"glabel\" v-model=\"value\" v-model:groupType=\"groupType\" :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox label=\"Group Label\" v-model=\"glabel\" help=\"The label for the 2nd dropdown. The label for the first dropdown is not customizable\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var groupAndRolePickerGallery = defineComponent({
        name: "GroupAndRolePickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          GroupAndRolePicker,
          TextBox,
          RockButton,
          RockForm
        },
        setup() {
          return {
            value: ref(null),
            groupType: ref(null),
            group: ref(null),
            required: ref(false),
            disabled: ref(false),
            glabel: ref("Group"),
            submit: ref(false),
            importCode: getSfcControlImportPath("groupAndRolePicker"),
            exampleCode: "<GroupAndRolePicker label=\"Group and Role\" groupLabel=\"Group\" v-model=\"value\" v-model:groupType=\"groupType\" v-model:group=\"group\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{groupType, group, value}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n<RockForm v-model:submit=\"submit\">\n    <GroupAndRolePicker label=\"Group and Role\" :groupLabel=\"glabel\" v-model=\"value\" v-model:groupType=\"groupType\" v-model:group=\"group\" :rules=\"required ? 'required' : ''\" :disabled=\"disabled\" />\n    <RockButton @click=\"submit = true\">Submit</RockButton>\n</RockForm>\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <TextBox label=\"Group Label\" v-model=\"glabel\" help=\"The label for the 2nd dropdown. The main label is also customizable, but the group type and role labels are not.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var accountPickerGallery = defineComponent({
        name: "AccountPickerGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          AccountPicker,
          https: TextBox,
          RockButton
        },
        setup() {
          return {
            value: ref(null),
            activeOnly: ref(false),
            displayPublic: ref(false),
            multiple: ref(false),
            enhance: ref(false),
            displayChildItemCountLabel: ref(false),
            importCode: getSfcControlImportPath("accountPicker"),
            exampleCode: "<AccountPicker label=\"Financial Account\" v-model=\"value\" enhanceForLongLists activeOnly displayPublicName multiple displayChildItemCountLabel />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <AccountPicker label=\"Financial Account\" v-model=\"value\" :enhanceForLongLists=\"enhance\" :activeOnly=\"activeOnly\" :displayPublicName=\"displayPublic\" :multiple=\"multiple\" :displayChildItemCountLabel=\"displayChildItemCountLabel\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Enhance For Long Lists\" v-model=\"enhance\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Active Only\" v-model=\"activeOnly\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Display Public Names\" v-model=\"displayPublic\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Select Multiple\" v-model=\"multiple\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Display Child Count\" v-model=\"displayChildItemCountLabel\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var noteTextEditorGallery = defineComponent({
        name: "NoteTextEditorGallery",
        components: {
          GalleryAndResult: script$8,
          NoteTextEditor,
          CheckBox
        },
        setup() {
          return {
            value: ref(""),
            importCode: getSfcControlImportPath("noteTextEditor"),
            exampleCode: "<NoteTextEditor v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection>\n\n    <NoteTextEditor v-model=\"value\" :avatar=\"avatar\" label=\"Leave a Note\" />\n\n    <template #settings>\n    </template>\n</GalleryAndResult>"
      });
      var structuredContentEditorGallery = defineComponent({
        name: "StructuredContentEditorGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
          DefinedValuePicker,
          StructuredContentEditor
        },
        setup() {
          var required = ref(false);
          var toolsItemBag = ref({
            value: DefinedValue.StructureContentEditorDefault
          });
          var toolsGuid = computed(() => {
            var _toolsItemBag$value;
            return toGuidOrNull((_toolsItemBag$value = toolsItemBag.value) === null || _toolsItemBag$value === void 0 ? void 0 : _toolsItemBag$value.value);
          });
          var toolsTypeGuid = DefinedType.StructuredContentEditorTools;
          return {
            value: ref("{}"),
            required,
            importCode: getSfcControlImportPath("structuredContentEditor"),
            exampleCode: computed(() => "<StructuredContentEditor v-model=\"value\" label=\"StructuredContent Editor\" :toolsGuid=\"".concat(toolsGuid.value, "\" ").concat(required.value ? 'rules="required" ' : "", "/>")),
            toolsGuid,
            toolsItemBag,
            toolsTypeGuid
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\" >\n\n    <StructuredContentEditor\n        v-model=\"value\"\n        label=\"Structured Content Editor\"\n        :toolsGuid=\"toolsGuid\"\n        :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <DefinedValuePicker v-model=\"toolsItemBag\" :definedTypeGuid=\"toolsTypeGuid\" label=\"Structured Content Editor Tools Value\" lazyMode=\"eager\" :multiple=\"false\" />\n            </div>\n        </div>\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n    </template>\n</GalleryAndResult>"
      });
      var registrationInstancePickerGallery = defineComponent({
        name: "RegistrationInstancePickerGallery",
        components: {
          GalleryAndResult: script$8,
          RegistrationInstancePicker,
          RegistrationTemplatePicker,
          CheckBox
        },
        setup() {
          return {
            registrationTemplateGuid: ref(null),
            value: ref({
              "value": "eefe4ad9-bfa9-405c-b732-ccb4d857ab73",
              "text": "Joe's Test Registration",
              "category": null
            }),
            required: ref(false),
            disabled: ref(false),
            importCode: getSfcControlImportPath("registrationInstancePicker"),
            exampleCode: "<RegistrationInstancePicker label=\"Registration Instance\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <RegistrationInstancePicker\n        v-model=\"value\"\n        label=\"Registration Instance\"\n        :registrationTemplateGuid=\"registrationTemplateGuid\"\n        :disabled=\"disabled\"\n        :rules=\"required ? 'required' : ''\" />\n\n    <template #settings>\n        <div class=\"row mb-3\">\n            <div class=\"col-md-3\">\n                <RegistrationTemplatePicker label=\"Default Registration Template\" v-model=\"registrationTemplateGuid\" showBlankItem />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var interactionChannelInteractionComponentPickerGallery = defineComponent({
        name: "InteractionChannelInteractionComponentPickerGallery",
        components: {
          GalleryAndResult: script$8,
          InteractionChannelInteractionComponentPicker,
          InteractionChannelPicker,
          DropDownList,
          NumberUpDown
        },
        setup() {
          return {
            interactionChannelGuid: ref(null),
            value: ref({
              "value": "1d6d3e3c-131c-4ed9-befe-b34f3c3da7d3",
              "text": "Calendar",
              "category": null
            }),
            importCode: getSfcControlImportPath("interactionChannelInteractionComponentPicker"),
            exampleCode: "<InteractionChannelInteractionComponentPicker label=\"Interaction Channel > Interaction Component\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <InteractionChannelInteractionComponentPicker\n        v-model=\"value\"\n        label=\"Interaction Channel > Interaction Component\"\n        :defaultInteractionChannelGuid=\"interactionChannelGuid?.value\" />\n\n    <template #settings>\n        <div class=\"row mb-3\">\n            <div class=\"col-md-3\">\n                <InteractionChannelPicker label=\"Default Interaction Channel\" v-model=\"interactionChannelGuid\" showBlankItem />\n            </div>\n        </div>\n\n        <p class=\"text-semibold font-italic\">Not all settings are demonstrated in this gallery.</p>\n        <p>Additional props extend and are passed to the underlying <code>Rock Form Field</code>.</p>\n    </template>\n</GalleryAndResult>"
      });
      var workflowPickerGallery = defineComponent({
        name: "WorkflowPickerGallery",
        components: {
          GalleryAndResult: script$8,
          WorkflowTypePicker,
          WorkflowPicker,
          CheckBox
        },
        setup() {
          return {
            value: ref({
              "value": "969b09e5-d830-46b7-86ab-2f0fbd12cf51",
              "text": "New Request",
              "category": null
            }),
            workflowType: ref({}),
            workflowTypeGuid: ref(null),
            required: ref(false),
            disabled: ref(false),
            importCode: getSfcControlImportPath("workflowPicker"),
            exampleCode: "<WorkflowPicker label=\"Choose a Workflow\" v-model=\"value\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <WorkflowPicker label=\"Choose a Workflow\"\n        v-model=\"value\"\n        :workflowTypeGuid=\"workflowTypeGuid\"\n        :rules=\"required ? 'required' : ''\"\n        :disabled=\"disabled\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <WorkflowTypePicker label=\"Workflow Type\" v-model=\"workflowTypeGuid\" showBlankItem help=\"If this workflowTypeGuid prop is set, the Workflow Type selector will not be shown and the Workflows will be based on that type.\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Required\" v-model=\"required\" />\n            </div>\n            <div class=\"col-md-4\">\n                <CheckBox label=\"Disabled\" v-model=\"disabled\" />\n            </div>\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var valueListGallery = defineComponent({
        name: "ValueListGallery",
        components: {
          GalleryAndResult: script$8,
          ValueList,
          CheckBox,
          TextBox
        },
        setup() {
          var usePredefinedValues = ref(false);
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
          var customValues = computed(() => usePredefinedValues.value ? options : null);
          return {
            usePredefinedValues: usePredefinedValues,
            displayValueFirst,
            customValues,
            fullWidth: ref(false),
            useDefinedType: ref(false),
            value: ref(null),
            definedTypeGuid: DefinedType.PersonConnectionStatus,
            valuePrompt: ref("Value"),
            importCode: getSfcControlImportPath("valueList"),
            exampleCode: "<ValueList label=\"List of Values\" v-model=\"value\" :customValues=\"customValues\" :valuePrompt=\"valuePrompt\" :definedTypeGuid=\"definedTypeGuid\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"value\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    enableReflection >\n\n    <ValueList label=\"List of Values\" v-model=\"value\" :customValues=\"customValues\" :valuePrompt=\"valuePrompt\" :fullWidth=\"fullWidth\" :definedTypeGuid=\"useDefinedType ? definedTypeGuid : null\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Use Predefined Values\" v-model=\"usePredefinedValues\" help=\"Enabling this will pass a pre-made <code>ListItemBag[]</code> of options to the ValueList component via the <code>customValues</code> prop.\" :disabled=\"useDefinedType\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Use Defined Type\" v-model=\"useDefinedType\" help=\"Enabling this will pass the Connection Status Defined Type's GUID to the ValueList component via the <code>definedTypeGuid</code> prop.\" :disabled=\"usePredefinedValues\" />\n            <CheckBox formGroupClasses=\"col-md-3\" label=\"Full Width\" v-model=\"fullWidth\" />\n            <TextBox formGroupClasses=\"col-md-3\" label=\"Placeholder for Value Field\" v-model=\"valuePrompt\" />\n        </div>\n        <p>\n            There are 2 different props that control what options users can choose/enter.\n            The <code>definedTypeGuid</code> prop takes a GUID string and will limit users to choosing values from a list of defined values of that type.\n            The <code>customValues</code> option allows you to pass a <code>ListItemBag</code> array in as a list of options that the user can choose from a dropdown.\n            If both of those props are specified, the <code>definedTypeGuid</code> prop will take precedence.\n            If neither option is used, a text box is shown, allowing users to manually type in any values.\n        </p>\n    </template>\n</GalleryAndResult>"
      });
      var blockTemplatePickerGallery = defineComponent({
        name: "BlockTemplatePickerGallery",
        components: {
          GalleryAndResult: script$8,
          BlockTemplatePicker,
          DefinedValuePicker
        },
        setup() {
          return {
            value: ref(null),
            templateKey: ref(null),
            definedTypeGuid: DefinedType.TemplateBlock,
            templateBlockGuid: ref(null),
            importCode: getSfcControlImportPath("blockTemplatePicker"),
            exampleCode: "<BlockTemplatePicker label=\"Select a Template\" v-model=\"value\" :templateBlockValueGuid=\"templateBlockValueGuid\" />"
          };
        },
        template: "\n<GalleryAndResult\n    :value=\"{value, templateKey}\"\n    :importCode=\"importCode\"\n    :exampleCode=\"exampleCode\"\n    hasMultipleValues\n    enableReflection >\n\n    <BlockTemplatePicker label=\"Select a Template\" v-model=\"value\" v-model:templateKey=\"templateKey\" :templateBlockValueGuid=\"templateBlockGuid?.value\" />\n\n    <template #settings>\n        <div class=\"row\">\n            <DefinedValuePicker label=\"Template Block\" formGroupClasses=\"col-md-4\" v-model=\"templateBlockGuid\" :definedTypeGuid=\"definedTypeGuid\" showBlankItem />\n        </div>\n    </template>\n</GalleryAndResult>"
      });
      var controlGalleryComponents = [notificationBoxGallery, attributeValuesContainerGallery, badgeListGallery, fieldFilterEditorGallery, textBoxGallery, datePickerGallery, dateRangePickerGallery, dateTimePickerGallery, datePartsPickerGallery, radioButtonListGallery, dialogGallery, checkBoxGallery, inlineCheckBoxGallery, switchGallery, inlineSwitchGallery, checkBoxListGallery, mediaSelectorGallery, listItemsGallery, listBoxGallery, phoneNumberBoxGallery, dropDownListGallery, helpBlockGallery, colorPickerGallery, numberBoxGallery, numberRangeBoxGallery, genderDropDownListGallery, socialSecurityNumberBoxGallery, timePickerGallery, ratingGallery, script, emailBoxGallery, numberUpDownGallery, staticFormControlGallery, addressControlGallery, toggleGallery, progressTrackerGallery, itemsWithPreAndPostHtmlGallery, urlLinkBoxGallery, fullscreenGallery, panelGallery, script$3, fileUploaderGallery, imageUploaderGallery, slidingDateRangePickerGallery, definedValuePickerGallery, campusPickerGallery, entityTypePickerGallery, sectionHeaderGallery, sectionContainerGallery, categoryPickerGallery, locationItemPickerGallery, copyButtonGallery, tagListGallery, followingGallery, achievementTypePickerGallery, badgeComponentPickerGallery, assessmentTypePickerGallery, assetStorageProviderPickerGallery, auditDetailGallery, binaryFileTypePickerGallery, binaryFilePickerGallery, codeEditorGallery, modalGallery, eventItemPickerGallery, dataViewPickerGallery, workflowTypePickerGallery, componentPickerGallery, financialGatewayPickerGallery, financialStatementTemplatePickerGallery, fieldTypePickerGallery, gradePickerGallery, groupMemberPickerGallery, interactionChannelPickerGallery, interactionComponentPickerGallery, lavaCommandPickerGallery, remoteAuthsPickerGallery, stepProgramPickerGallery, stepProgramStepTypePickerGallery, stepProgramStepStatusPickerGallery, stepStatusPickerGallery, stepTypePickerGallery, streakTypePickerGallery, badgePickerGallery, basicTimePickerGallery, birthdayPickerGallery, countdownTimerGallery, electronicSignatureGallery, fieldTypeEditorGallery, inlineRangeSliderGallery, javaScriptAnchorGallery, keyValueListGallery, loadingGallery, loadingIndicatorGallery, numberUpDownGroupGallery, progressBarGallery, rockButtonGallery, rockLabelGallery, rockValidationGallery, rangeSliderGallery, tabbedBarGallery, tabbedContentGallery, transitionVerticalCollapseGallery, valueDetailListGallery, pagePickerGallery, connectionRequestPickerGallery, groupPickerGallery, mergeTemplatePickerGallery, metricCategoryPickerGallery, metricItemPickerGallery, registrationTemplatePickerGallery, reportPickerGallery, schedulePickerGallery, workflowActionTypePickerGallery, dayOfWeekPickerGallery, monthDayPickerGallery, monthYearPickerGallery, cacheabilityPickerGallery, buttonGroupGallery, intervalPickerGallery, geoPickerGallery, contentDropDownPickerGallery, scheduleBuilderGallery, wordCloudGallery, eventCalendarPickerGallery, groupTypePickerGallery, locationAddressPickerGallery, locationPickerGallery, locationListGallery, ethnicityPickerGallery, racePickerGallery, mediaElementPickerGallery, mergeFieldPickerGallery, categorizedValuePickerGallery, reminderTypePickerGallery, groupRolePickerGallery, modalAlertGallery, contentChannelItemPickerGallery, personLinkGallery, popOverGallery, rockLiteralGallery, registryEntryGallery, groupTypeGroupPickerGallery, groupAndRolePickerGallery, accountPickerGallery, noteTextEditorGallery, structuredContentEditorGallery, registrationInstancePickerGallery, interactionChannelInteractionComponentPickerGallery, workflowPickerGallery, valueListGallery, blockTemplatePickerGallery, script$7, script$6, script$5, script$4, script$1, script$2].sort((a, b) => a.name.localeCompare(b.name)).reduce((newList, comp) => {
        newList[comp.name] = comp;
        return newList;
      }, {});
      var detailBlockGallery = defineComponent({
        name: "DetailBlockGallery",
        components: {
          GalleryAndResult: script$8,
          CheckBox,
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
          SectionHeader
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
        template: "\n<v-style>\n.gallerySidebar {\n    border-radius: 0;\n    margin: -1px 0 -1px -1px;\n    overflow-y: auto;\n    flex-shrink: 0;\n}\n\n.gallerySidebar li.current {\n    font-weight: 700;\n}\n\n.galleryContent {\n    flex-grow: 1;\n    overflow-x: clip;\n    overflow-y: auto;\n    padding: 20px;\n}\n\n.galleryContent > .rock-header hr {\n    margin-left: -20px;\n    margin-right: -20px;\n}\n</v-style>\n<Panel type=\"block\">\n    <template #title>\n        Obsidian Control Gallery\n    </template>\n    <template #default>\n        <div class=\"panel-flex-fill-body flex-row\">\n\n            <div class=\"gallerySidebar well\">\n                <h4>Components</h4>\n\n                <ul class=\"list-unstyled mb-0\">\n                    <li v-for=\"(component, key) in controlGalleryComponents\" :key=\"key\" :class=\"{current: currentComponent.name === component.name}\">\n                        <a :href=\"'#' + key\" @click=\"currentComponent = component\">{{ convertComponentName(component.name) }}</a>\n                    </li>\n                </ul>\n\n                <h4 class=\"mt-3\">Templates</h4>\n\n                <ul class=\"list-unstyled mb-0\">\n                    <li v-for=\"(component, key) in templateGalleryComponents\" :key=\"key\" :class=\"{current: currentComponent.name === component.name}\">\n                        <a :href=\"'#' + key\" @click=\"currentComponent = component\">{{ convertComponentName(component.name) }}</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"galleryContent\">\n                <component :is=\"currentComponent\" />\n            </div>\n\n        </div>\n    </template>\n</Panel>"
      }));

    })
  };
}));
//# sourceMappingURL=controlGallery.js.map
