System.register(['vue', './checkBoxList.js', './datePickerBase.obs.js', './datePicker.obs.js', './dateRangePicker.js', './dateTimePicker.js', './dropDownList.js', './modal.js', './numberBox.js', './radioButtonList.js', './rockFormField.js', './transitionVerticalCollapse.js', '@Obsidian/Utility/internetCalendar', '@Obsidian/ValidationRules', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/component', '@Obsidian/Utility/guid', '@Obsidian/Utility/stringUtils', '@Obsidian/Utility/form', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js', '@Obsidian/Utility/numberUtils', './textBox.js', './basicTimePicker.js', 'ant-design-vue', '@Obsidian/Utility/util', './rockForm.js', './rockValidation.js', './alert.obs.js', '@Obsidian/Enums/Controls/alertType', './rockButton.js', 'tslib', '@Obsidian/Utility/promiseUtils', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Enums/Controls/btnSize', '@Obsidian/Utility/page'], (function (exports) {
    'use strict';
    var defineComponent, ref, shallowRef, computed, watch, pushScopeId, popScopeId, createTextVNode, createElementVNode, openBlock, createElementBlock, Fragment, createVNode, mergeProps, withCtx, withModifiers, renderList, toDisplayString, createCommentVNode, withDirectives, vModelRadio, CheckBoxList, exportHelper$1, exportHelper$2, DateRangePicker, DateTimePicker, DropDownList, Modal, NumberBox, RadioButtonList, RockFormField, TransitionVerticalCollapse, Calendar, Event, RecurrenceRule, containsRequiredRule, DayOfWeek, RockDateTime, standardRockFormFieldProps, useStandardRockFormFieldProps, updateRefValue, newGuid;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            shallowRef = module.shallowRef;
            computed = module.computed;
            watch = module.watch;
            pushScopeId = module.pushScopeId;
            popScopeId = module.popScopeId;
            createTextVNode = module.createTextVNode;
            createElementVNode = module.createElementVNode;
            openBlock = module.openBlock;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            createVNode = module.createVNode;
            mergeProps = module.mergeProps;
            withCtx = module.withCtx;
            withModifiers = module.withModifiers;
            renderList = module.renderList;
            toDisplayString = module.toDisplayString;
            createCommentVNode = module.createCommentVNode;
            withDirectives = module.withDirectives;
            vModelRadio = module.vModelRadio;
        }, function (module) {
            CheckBoxList = module["default"];
        }, function (module) {
            exportHelper$1 = module["default"];
        }, function (module) {
            exportHelper$2 = module["default"];
        }, function (module) {
            DateRangePicker = module["default"];
        }, function (module) {
            DateTimePicker = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            Modal = module["default"];
        }, function (module) {
            NumberBox = module["default"];
        }, function (module) {
            RadioButtonList = module["default"];
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            TransitionVerticalCollapse = module["default"];
        }, function (module) {
            Calendar = module.Calendar;
            Event = module.Event;
            RecurrenceRule = module.RecurrenceRule;
        }, function (module) {
            containsRequiredRule = module.containsRequiredRule;
        }, function (module) {
            DayOfWeek = module.DayOfWeek;
            RockDateTime = module.RockDateTime;
        }, function (module) {
            standardRockFormFieldProps = module.standardRockFormFieldProps;
            useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
            updateRefValue = module.updateRefValue;
        }, function (module) {
            newGuid = module.newGuid;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('render', render);

            const _sfc_main = defineComponent({
                name: 'scheduleBuilder',
                props: Object.assign({ modelValue: {
                        type: String,
                        default: ""
                    } }, standardRockFormFieldProps),
                emits: ["update:modelValue"],
                setup(__props, { expose, emit }) {
                    expose();
                    const props = __props;
                    const internalValue = ref(props.modelValue);
                    const dailyRadioId = newGuid().toString();
                    const monthlyRadioId = newGuid().toString();
                    const continueUntilRadioId = newGuid().toString();
                    const standardProps = useStandardRockFormFieldProps(props);
                    const scheduleSummary = ref("");
                    const isModalVisible = ref(false);
                    const startDateTime = ref(null);
                    const duration = ref(null);
                    const scheduleType = ref("oneTime");
                    const occurrencePattern = ref("specificDates");
                    const specificDates = shallowRef([]);
                    const isAddSpecificDateVisible = ref(false);
                    const addSpecificDateValue = ref("");
                    const recurringDailyType = ref("everyDay");
                    const recurringDailyDays = ref(1);
                    const recurringWeeklyWeeks = ref(null);
                    const recurringWeeklyDays = ref([]);
                    const recurringMonthlyType = ref("day");
                    const recurringMonthlyDayOfMonth = ref(null);
                    const recurringMonthlyMonths = ref(null);
                    const recurringMonthlyRate = ref([]);
                    const recurringMonthlyWeekday = ref("");
                    const recurringContinueUntilType = ref("noEnd");
                    const recurringContinueUntilDate = ref("");
                    const recurringContinueUntilCount = ref(null);
                    const recurringExclusionDates = shallowRef([]);
                    const isAddExclusionDateRangeVisible = ref(false);
                    const addExclusionDateRangeValue = ref(undefined);
                    const scheduleTypeItems = [
                        {
                            value: "oneTime",
                            text: "One Time"
                        },
                        {
                            value: "recurring",
                            text: "Recurring"
                        }
                    ];
                    const occurrencePatternItems = [
                        {
                            value: "specificDates",
                            text: "Specific Dates"
                        },
                        {
                            value: "daily",
                            text: "Daily"
                        },
                        {
                            value: "weekly",
                            text: "Weekly"
                        },
                        {
                            value: "monthly",
                            text: "Monthly"
                        }
                    ];
                    const recurringWeeklyDaysItems = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(d => ({
                        value: d,
                        text: d.substring(0, 3)
                    }));
                    const recurringMonthlyRateItems = ["First", "Second", "Third", "Fourth", "Last"].map(i => ({
                        value: i,
                        text: i
                    }));
                    const recurringMonthlyWeekdayItems = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(d => ({
                        value: d,
                        text: d
                    }));
                    const requiredRules = computed(() => {
                        if (containsRequiredRule(props.rules)) {
                            return ["required"];
                        }
                        else {
                            return [];
                        }
                    });
                    const durationInHours = computed({
                        get() {
                            return duration.value ? Math.floor(duration.value / 60) : null;
                        },
                        set(value) {
                            var _a;
                            const newDuration = ((value !== null && value !== void 0 ? value : 0) * 60) + ((_a = durationInMinutes.value) !== null && _a !== void 0 ? _a : 0);
                            if (newDuration <= 0) {
                                duration.value = null;
                            }
                            else {
                                duration.value = newDuration;
                            }
                        }
                    });
                    const durationInMinutes = computed({
                        get() {
                            return duration.value ? Math.floor(duration.value % 60) : null;
                        },
                        set(value) {
                            var _a;
                            const newDuration = (((_a = durationInHours.value) !== null && _a !== void 0 ? _a : 0) * 60) + (value !== null && value !== void 0 ? value : 0);
                            if (newDuration <= 0) {
                                duration.value = null;
                            }
                            else {
                                duration.value = newDuration;
                            }
                        }
                    });
                    const isRecurringSchedule = computed(() => {
                        return scheduleType.value == "recurring";
                    });
                    const isRecurringSpecificDates = computed(() => {
                        return occurrencePattern.value === "specificDates";
                    });
                    const isRecurringDaily = computed(() => {
                        return occurrencePattern.value === "daily";
                    });
                    const isRecurringWeekly = computed(() => {
                        return occurrencePattern.value === "weekly";
                    });
                    const isRecurringMonthly = computed(() => {
                        return occurrencePattern.value === "monthly";
                    });
                    const isRecurringUntil = computed(() => {
                        return isRecurringDaily.value || isRecurringWeekly.value || isRecurringMonthly.value;
                    });
                    const isRecurringExclusions = computed(() => {
                        return isRecurringDaily.value || isRecurringWeekly.value || isRecurringMonthly.value;
                    });
                    const exclusionDateRanges = computed(() => {
                        const dates = [...recurringExclusionDates.value];
                        dates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
                        const ranges = [];
                        const range = {};
                        for (const date of dates) {
                            if (!range.lower || !range.upper) {
                                range.lower = date.date;
                                range.upper = date.date;
                            }
                            else if (range.upper.addDays(1).toMilliseconds() === date.date.toMilliseconds()) {
                                range.upper = date.date;
                            }
                            else {
                                ranges.push({
                                    lowerValue: range.lower.toISOString(),
                                    upperValue: range.upper.toISOString()
                                });
                                range.lower = date.date;
                                range.upper = date.date;
                            }
                        }
                        if (range.lower && range.upper) {
                            ranges.push({
                                lowerValue: range.lower.toISOString(),
                                upperValue: range.upper.toISOString()
                            });
                        }
                        return ranges;
                    });
                    function updateValuesFromModel() {
                        var _a, _b, _c;
                        const calendar = getCalendarFromString(props.modelValue);
                        const event = (calendar === null || calendar === void 0 ? void 0 : calendar.events) && calendar.events.length > 0 ? calendar.events[0] : null;
                        const rrule = (event === null || event === void 0 ? void 0 : event.recurrenceRules) && event.recurrenceRules.length > 0 ? event.recurrenceRules[0] : null;
                        scheduleSummary.value = (_a = event === null || event === void 0 ? void 0 : event.toFriendlyText()) !== null && _a !== void 0 ? _a : "No Schedule";
                        startDateTime.value = (_c = (_b = event === null || event === void 0 ? void 0 : event.startDateTime) === null || _b === void 0 ? void 0 : _b.toISOString()) !== null && _c !== void 0 ? _c : null;
                        duration.value = getEventDuration(event);
                        scheduleType.value = rrule ? "recurring" : "oneTime";
                        occurrencePattern.value = getEventOccurrencePattern(event);
                        recurringDailyType.value = "everyDay";
                        recurringDailyDays.value = 1;
                        recurringWeeklyWeeks.value = null;
                        recurringWeeklyDays.value = [];
                        recurringMonthlyType.value = "day";
                        recurringMonthlyDayOfMonth.value = null;
                        recurringMonthlyMonths.value = null;
                        recurringMonthlyRate.value = [];
                        recurringMonthlyWeekday.value = "";
                        recurringContinueUntilType.value = "noEnd";
                        recurringContinueUntilDate.value = "";
                        recurringContinueUntilCount.value = null;
                        recurringExclusionDates.value = [];
                        isAddSpecificDateVisible.value = false;
                        isAddExclusionDateRangeVisible.value = false;
                        if ((event === null || event === void 0 ? void 0 : event.recurrenceDates) && event.recurrenceDates.length > 0) {
                            scheduleType.value = "recurring";
                            occurrencePattern.value = "specificDates";
                            specificDates.value = event.recurrenceDates;
                        }
                        else if (rrule) {
                            const isDailyWeekday = rrule.frequency === "WEEKLY"
                                && rrule.byDay.length === 5
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Monday)
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Tuesday)
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Wednesday)
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Thursday)
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Friday)
                                && rrule.interval === 1;
                            const isDailyWeekend = rrule.frequency === "WEEKLY"
                                && rrule.byDay.length === 2
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Sunday)
                                && rrule.byDay.some(bd => bd.day === DayOfWeek.Saturday)
                                && rrule.interval === 1;
                            if (isDailyWeekday) {
                                occurrencePattern.value = "daily";
                                recurringDailyType.value = "everyWeekday";
                            }
                            else if (isDailyWeekend) {
                                occurrencePattern.value = "daily";
                                recurringDailyType.value = "everyWeekend";
                            }
                            else if (rrule.frequency === "DAILY") {
                                occurrencePattern.value = "daily";
                                recurringDailyType.value = "everyDay";
                                recurringDailyDays.value = rrule.interval;
                            }
                            else if (rrule.frequency === "WEEKLY") {
                                occurrencePattern.value = "weekly";
                                recurringWeeklyWeeks.value = rrule.interval;
                                recurringWeeklyDays.value = rrule.byDay.map(bd => getDayNameFromDayOfWeek(bd.day));
                            }
                            else if (rrule.frequency === "MONTHLY") {
                                if (rrule.byMonthDay.length > 0) {
                                    occurrencePattern.value = "monthly";
                                    recurringMonthlyType.value = "day";
                                    recurringMonthlyDayOfMonth.value = rrule.byMonthDay[0];
                                    recurringMonthlyMonths.value = rrule.interval;
                                }
                                else if (rrule.byDay.length > 0) {
                                    occurrencePattern.value = "monthly";
                                    recurringMonthlyType.value = "nth";
                                    recurringMonthlyRate.value = getMonthlyRates(rrule.byDay.map(bd => bd.value));
                                    recurringMonthlyWeekday.value = getDayNameFromDayOfWeek(rrule.byDay[0].day);
                                }
                            }
                            if (rrule.count !== undefined) {
                                recurringContinueUntilType.value = "endAfter";
                                recurringContinueUntilCount.value = rrule.count;
                            }
                            else if (rrule.endDate) {
                                recurringContinueUntilType.value = "endBy";
                                recurringContinueUntilDate.value = rrule.endDate.toISOString();
                            }
                        }
                    }
                    function getCalendarString() {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        const event = new Event();
                        event.startDateTime = (_b = RockDateTime.parseISO((_a = startDateTime.value) !== null && _a !== void 0 ? _a : "")) !== null && _b !== void 0 ? _b : undefined;
                        event.endDateTime = (_c = event.startDateTime) === null || _c === void 0 ? void 0 : _c.addMinutes((_d = duration.value) !== null && _d !== void 0 ? _d : 0);
                        if (scheduleType.value === "recurring") {
                            if (occurrencePattern.value === "specificDates") {
                                event.recurrenceDates = specificDates.value;
                            }
                            else {
                                const rrule = new RecurrenceRule();
                                event.excludedDates = recurringExclusionDates.value;
                                if (recurringContinueUntilType.value === "endBy" && recurringContinueUntilDate.value) {
                                    rrule.endDate = (_e = RockDateTime.parseISO(recurringContinueUntilDate.value)) !== null && _e !== void 0 ? _e : undefined;
                                }
                                else if (recurringContinueUntilType.value === "endAfter" && recurringContinueUntilCount.value) {
                                    rrule.count = recurringContinueUntilCount.value;
                                }
                                if (occurrencePattern.value === "daily") {
                                    if (recurringDailyType.value === "everyDay") {
                                        rrule.frequency = "DAILY";
                                        rrule.interval = recurringDailyDays.value || 1;
                                    }
                                    else if (recurringDailyType.value === "everyWeekday") {
                                        rrule.frequency = "WEEKLY";
                                        rrule.byDay = [
                                            {
                                                value: 1,
                                                day: DayOfWeek.Monday
                                            },
                                            {
                                                value: 1,
                                                day: DayOfWeek.Tuesday
                                            },
                                            {
                                                value: 1,
                                                day: DayOfWeek.Wednesday
                                            },
                                            {
                                                value: 1,
                                                day: DayOfWeek.Thursday
                                            },
                                            {
                                                value: 1,
                                                day: DayOfWeek.Friday
                                            },
                                        ];
                                    }
                                    else if (recurringDailyType.value === "everyWeekend") {
                                        rrule.frequency = "WEEKLY";
                                        rrule.byDay = [
                                            {
                                                value: 1,
                                                day: DayOfWeek.Sunday
                                            },
                                            {
                                                value: 1,
                                                day: DayOfWeek.Saturday
                                            }
                                        ];
                                    }
                                    event.recurrenceRules.push(rrule);
                                }
                                else if (occurrencePattern.value === "weekly") {
                                    rrule.frequency = "WEEKLY";
                                    rrule.interval = (_f = recurringWeeklyWeeks.value) !== null && _f !== void 0 ? _f : 1;
                                    rrule.byDay = recurringWeeklyDays.value.map(d => ({
                                        value: 1,
                                        day: getDayOfWeekFromDayName(d)
                                    }));
                                    event.recurrenceRules.push(rrule);
                                }
                                else if (occurrencePattern.value === "monthly") {
                                    rrule.frequency = "MONTHLY";
                                    if (recurringMonthlyType.value === "day") {
                                        rrule.interval = (_g = recurringMonthlyMonths.value) !== null && _g !== void 0 ? _g : 1;
                                        rrule.byMonthDay = [recurringMonthlyDayOfMonth.value || 1];
                                        event.recurrenceRules.push(rrule);
                                    }
                                    else if (recurringMonthlyType.value === "nth") {
                                        const weekday = recurringMonthlyWeekday.value || "Sunday";
                                        rrule.interval = 1;
                                        rrule.byDay = recurringMonthlyRate.value.map(r => ({
                                            value: getMonthlyIndexFromRate(r),
                                            day: getDayOfWeekFromDayName(weekday)
                                        }));
                                        event.recurrenceRules.push(rrule);
                                    }
                                }
                            }
                        }
                        if (event.startDateTime && event.endDateTime && duration.value !== null && duration.value > 0) {
                            const calendar = new Calendar();
                            calendar.events.push(event);
                            return (_h = calendar.build()) !== null && _h !== void 0 ? _h : "";
                        }
                        else {
                            return "";
                        }
                    }
                    function getCalendarFromString(ical) {
                        if (!ical) {
                            return null;
                        }
                        try {
                            return new Calendar(ical);
                        }
                        catch (_a) {
                            return null;
                        }
                    }
                    function getEventDuration(event) {
                        if (!event || !event.startDateTime || !event.endDateTime) {
                            return null;
                        }
                        const totalDurationInMinutes = (event.endDateTime.toMilliseconds() - event.startDateTime.toMilliseconds()) / 1000 / 60;
                        if (totalDurationInMinutes <= 0) {
                            return null;
                        }
                        return Math.floor(totalDurationInMinutes);
                    }
                    function getEventOccurrencePattern(event) {
                        if (!event || !event.recurrenceRules.length) {
                            return "specificDates";
                        }
                        const rrule = event.recurrenceRules[0];
                        if (rrule.frequency === "DAILY") {
                            return "daily";
                        }
                        else if (rrule.frequency === "WEEKLY") {
                            return "weekly";
                        }
                        else if (rrule.frequency === "MONTHLY") {
                            return "monthly";
                        }
                        else {
                            return "specificDates";
                        }
                    }
                    function getShortDateText(date) {
                        return date.toLocaleString({
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        });
                    }
                    function getShortDateRangeText(range) {
                        if (!range.lowerValue || !range.upperValue) {
                            return "";
                        }
                        const lowerDate = RockDateTime.parseISO(range.lowerValue);
                        const upperDate = RockDateTime.parseISO(range.upperValue);
                        if (!lowerDate || !upperDate) {
                            return "";
                        }
                        const lowerDateText = lowerDate.toLocaleString({
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        });
                        const upperDateText = upperDate.toLocaleString({
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        });
                        return `${lowerDateText} - ${upperDateText}`;
                    }
                    function getDayNameFromDayOfWeek(day) {
                        if (day === DayOfWeek.Sunday) {
                            return "Sunday";
                        }
                        else if (day === DayOfWeek.Monday) {
                            return "Monday";
                        }
                        else if (day === DayOfWeek.Tuesday) {
                            return "Tuesday";
                        }
                        else if (day === DayOfWeek.Wednesday) {
                            return "Wednesday";
                        }
                        else if (day === DayOfWeek.Thursday) {
                            return "Thursday";
                        }
                        else if (day === DayOfWeek.Friday) {
                            return "Friday";
                        }
                        else if (day === DayOfWeek.Saturday) {
                            return "Saturday";
                        }
                        return "Sunday";
                    }
                    function getDayOfWeekFromDayName(day) {
                        if (day === "Sunday") {
                            return DayOfWeek.Sunday;
                        }
                        else if (day === "Monday") {
                            return DayOfWeek.Monday;
                        }
                        else if (day === "Tuesday") {
                            return DayOfWeek.Tuesday;
                        }
                        else if (day === "Wednesday") {
                            return DayOfWeek.Wednesday;
                        }
                        else if (day === "Thursday") {
                            return DayOfWeek.Thursday;
                        }
                        else if (day === "Friday") {
                            return DayOfWeek.Friday;
                        }
                        else if (day === "Saturday") {
                            return DayOfWeek.Saturday;
                        }
                        return DayOfWeek.Sunday;
                    }
                    function getMonthlyRates(indexes) {
                        const rateMap = {
                            [1]: "First",
                            [2]: "Second",
                            [3]: "Third",
                            [4]: "Fourth",
                            [-1]: "Last"
                        };
                        const rates = [];
                        for (const index of indexes) {
                            const rate = rateMap[index];
                            if (rate !== undefined && !rates.includes(rate)) {
                                rates.push(rate);
                            }
                        }
                        return rates;
                    }
                    function getMonthlyIndexFromRate(rate) {
                        if (rate === "Last") {
                            return -1;
                        }
                        else if (rate === "Fourth") {
                            return 4;
                        }
                        else if (rate === "Third") {
                            return 3;
                        }
                        else if (rate === "Second") {
                            return 2;
                        }
                        else {
                            return 1;
                        }
                    }
                    function onEditSchedule() {
                        isModalVisible.value = true;
                    }
                    function onSaveSchedule() {
                        internalValue.value = getCalendarString();
                        emit("update:modelValue", internalValue.value);
                        isModalVisible.value = false;
                    }
                    function onAddSpecificDate() {
                        addSpecificDateValue.value = "";
                        isAddSpecificDateVisible.value = true;
                    }
                    function onRemoveSpecificDate(date) {
                        var newSpecificDates = specificDates.value.filter(d => d.toMilliseconds() !== date.toMilliseconds());
                        updateRefValue(specificDates, newSpecificDates);
                    }
                    function onAddSpecificDateOk() {
                        const date = RockDateTime.parseISO(addSpecificDateValue.value);
                        if (date !== null && !specificDates.value.some(d => d.toMilliseconds() === date.toMilliseconds())) {
                            const newSpecificDates = [date, ...specificDates.value];
                            newSpecificDates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
                            updateRefValue(specificDates, newSpecificDates);
                        }
                        isAddSpecificDateVisible.value = false;
                    }
                    function onAddSpecificDateCancel() {
                        isAddSpecificDateVisible.value = false;
                    }
                    function onAddExclusionDateRange() {
                        addExclusionDateRangeValue.value = {};
                        isAddExclusionDateRangeVisible.value = true;
                    }
                    function onRemoveExclusionDateRange(range) {
                        var _a, _b;
                        const lowerDate = RockDateTime.parseISO((_a = range.lowerValue) !== null && _a !== void 0 ? _a : "");
                        const upperDate = RockDateTime.parseISO((_b = range.upperValue) !== null && _b !== void 0 ? _b : "");
                        if (!lowerDate || !upperDate) {
                            return;
                        }
                        let newExclusionDates = [...recurringExclusionDates.value];
                        for (let date = lowerDate; date.toMilliseconds() <= upperDate.toMilliseconds(); date = date.addDays(1)) {
                            newExclusionDates = newExclusionDates.filter(d => d.toMilliseconds() !== date.toMilliseconds());
                        }
                        updateRefValue(recurringExclusionDates, newExclusionDates);
                    }
                    function onAddExclusionDateRangeOk() {
                        var _a, _b, _c, _d;
                        let lowerDate = RockDateTime.parseISO((_b = (_a = addExclusionDateRangeValue.value) === null || _a === void 0 ? void 0 : _a.lowerValue) !== null && _b !== void 0 ? _b : "");
                        let upperDate = RockDateTime.parseISO((_d = (_c = addExclusionDateRangeValue.value) === null || _c === void 0 ? void 0 : _c.upperValue) !== null && _d !== void 0 ? _d : "");
                        if (lowerDate && upperDate) {
                            if (upperDate.toMilliseconds() < lowerDate.toMilliseconds()) {
                                const swapDate = lowerDate;
                                lowerDate = upperDate;
                                upperDate = swapDate;
                            }
                            const newExclusionDates = [...recurringExclusionDates.value];
                            for (let date = lowerDate; date.toMilliseconds() <= upperDate.toMilliseconds(); date = date.addDays(1)) {
                                if (!newExclusionDates.some(d => d.toMilliseconds() === date.toMilliseconds())) {
                                    newExclusionDates.push(date);
                                }
                            }
                            newExclusionDates.sort((a, b) => a.toMilliseconds() - b.toMilliseconds());
                            updateRefValue(recurringExclusionDates, newExclusionDates);
                        }
                        isAddExclusionDateRangeVisible.value = false;
                    }
                    function onAddExclusionDateRangeCancel() {
                        isAddExclusionDateRangeVisible.value = false;
                    }
                    watch(() => props.modelValue, () => {
                        internalValue.value = props.modelValue;
                        updateValuesFromModel();
                    });
                    updateValuesFromModel();
                    const __returned__ = { props, emit, internalValue, dailyRadioId, monthlyRadioId, continueUntilRadioId, standardProps, scheduleSummary, isModalVisible, startDateTime, duration, scheduleType, occurrencePattern, specificDates, isAddSpecificDateVisible, addSpecificDateValue, recurringDailyType, recurringDailyDays, recurringWeeklyWeeks, recurringWeeklyDays, recurringMonthlyType, recurringMonthlyDayOfMonth, recurringMonthlyMonths, recurringMonthlyRate, recurringMonthlyWeekday, recurringContinueUntilType, recurringContinueUntilDate, recurringContinueUntilCount, recurringExclusionDates, isAddExclusionDateRangeVisible, addExclusionDateRangeValue, scheduleTypeItems, occurrencePatternItems, recurringWeeklyDaysItems, recurringMonthlyRateItems, recurringMonthlyWeekdayItems, requiredRules, durationInHours, durationInMinutes, isRecurringSchedule, isRecurringSpecificDates, isRecurringDaily, isRecurringWeekly, isRecurringMonthly, isRecurringUntil, isRecurringExclusions, exclusionDateRanges, updateValuesFromModel, getCalendarString, getCalendarFromString, getEventDuration, getEventOccurrencePattern, getShortDateText, getShortDateRangeText, getDayNameFromDayOfWeek, getDayOfWeekFromDayName, getMonthlyRates, getMonthlyIndexFromRate, onEditSchedule, onSaveSchedule, onAddSpecificDate, onRemoveSpecificDate, onAddSpecificDateOk, onAddSpecificDateCancel, onAddExclusionDateRange, onRemoveExclusionDateRange, onAddExclusionDateRangeOk, onAddExclusionDateRangeCancel, CheckBoxList, DatePickerBase: exportHelper$1, DatePicker: exportHelper$2, DateRangePicker, DateTimePicker, DropDownList, Modal, NumberBox, RadioButtonList, RockFormField, TransitionVerticalCollapse };
                    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
                    return __returned__;
                }
            });
            const _withScopeId = n => (pushScopeId("data-v-0iycin67avwgx3jfjy1w1f66"), n = n(), popScopeId(), n);
            const _hoisted_1 = { class: "control-wrapper" };
            const _hoisted_2 = { class: "picker" };
            const _hoisted_3 = ["title", "onClick"];
            const _hoisted_4 = _withScopeId(() => createElementVNode("i", { class: "fa fa-calendar" }, null, -1));
            const _hoisted_5 = createTextVNode(" Edit Schedule ");
            const _hoisted_6 = [
                _hoisted_4,
                _hoisted_5
            ];
            const _hoisted_7 = { class: "form-control-group" };
            const _hoisted_8 = _withScopeId(() => createElementVNode("span", { class: "input-group-addon" }, "hrs", -1));
            const _hoisted_9 = _withScopeId(() => createElementVNode("span", { class: "input-group-addon" }, "mins", -1));
            const _hoisted_10 = {
                key: 0,
                class: "mt-3"
            };
            const _hoisted_11 = _withScopeId(() => createElementVNode("legend", { class: "legend-small" }, "Recurrence", -1));
            const _hoisted_12 = {
                key: 0,
                class: "recurrence-pattern-type control-group controls recurrence-pattern-specific-date"
            };
            const _hoisted_13 = createTextVNode("  ");
            const _hoisted_14 = ["onClick"];
            const _hoisted_15 = _withScopeId(() => createElementVNode("i", { class: "fa fa-times" }, null, -1));
            const _hoisted_16 = [
                _hoisted_15
            ];
            const _hoisted_17 = { key: 0 };
            const _hoisted_18 = ["onClick"];
            const _hoisted_19 = _withScopeId(() => createElementVNode("span", null, "OK", -1));
            const _hoisted_20 = [
                _hoisted_19
            ];
            const _hoisted_21 = ["onClick"];
            const _hoisted_22 = _withScopeId(() => createElementVNode("span", null, "Cancel", -1));
            const _hoisted_23 = [
                _hoisted_22
            ];
            const _hoisted_24 = ["onClick"];
            const _hoisted_25 = _withScopeId(() => createElementVNode("i", { class: "fa fa-plus" }, null, -1));
            const _hoisted_26 = _withScopeId(() => createElementVNode("span", null, " Add Date", -1));
            const _hoisted_27 = [
                _hoisted_25,
                _hoisted_26
            ];
            const _hoisted_28 = {
                key: 1,
                class: "recurrence-pattern-type recurrence-pattern-daily"
            };
            const _hoisted_29 = { class: "form-control-group" };
            const _hoisted_30 = { class: "radio-inline" };
            const _hoisted_31 = ["id", "name"];
            const _hoisted_32 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "Every", -1));
            const _hoisted_33 = _withScopeId(() => createElementVNode("span", { class: "input-group-addon" }, "days", -1));
            const _hoisted_34 = { class: "form-control-group" };
            const _hoisted_35 = { class: "radio-inline" };
            const _hoisted_36 = ["id", "name"];
            const _hoisted_37 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "Every weekday", -1));
            const _hoisted_38 = { class: "form-control-group" };
            const _hoisted_39 = { class: "radio-inline" };
            const _hoisted_40 = ["id", "name"];
            const _hoisted_41 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "Every weekend", -1));
            const _hoisted_42 = {
                key: 2,
                class: "recurrence-pattern-type recurrence-pattern-weekly"
            };
            const _hoisted_43 = { class: "form-control-group" };
            const _hoisted_44 = _withScopeId(() => createElementVNode("span", null, "Every ", -1));
            const _hoisted_45 = _withScopeId(() => createElementVNode("span", { class: "input-group-addon" }, "week(s)", -1));
            const _hoisted_46 = _withScopeId(() => createElementVNode("span", null, " on", -1));
            const _hoisted_47 = { class: "week-days" };
            const _hoisted_48 = {
                key: 3,
                class: "recurrence-pattern-type recurrence-pattern-monthly"
            };
            const _hoisted_49 = { class: "form-group controls" };
            const _hoisted_50 = { class: "form-control-group" };
            const _hoisted_51 = { class: "radio-inline" };
            const _hoisted_52 = ["id", "name"];
            const _hoisted_53 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "Day", -1));
            const _hoisted_54 = _withScopeId(() => createElementVNode("span", null, " of every ", -1));
            const _hoisted_55 = _withScopeId(() => createElementVNode("span", null, " months ", -1));
            const _hoisted_56 = { class: "form-control-group" };
            const _hoisted_57 = { class: "radio-inline" };
            const _hoisted_58 = ["id", "name"];
            const _hoisted_59 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "The", -1));
            const _hoisted_60 = { class: "input-group input-width-xl" };
            const _hoisted_61 = { class: "input-group input-width-xl" };
            const _hoisted_62 = {
                key: 4,
                class: "continue-until"
            };
            const _hoisted_63 = _withScopeId(() => createElementVNode("div", { class: "controls" }, [
                createElementVNode("hr")
            ], -1));
            const _hoisted_64 = _withScopeId(() => createElementVNode("label", { class: "control-label" }, "Continue Until", -1));
            const _hoisted_65 = { class: "controls" };
            const _hoisted_66 = { class: "form-control-group" };
            const _hoisted_67 = { class: "radio-inline" };
            const _hoisted_68 = ["id", "name"];
            const _hoisted_69 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "No end", -1));
            const _hoisted_70 = { class: "form-control-group" };
            const _hoisted_71 = { class: "radio-inline" };
            const _hoisted_72 = ["id", "name"];
            const _hoisted_73 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "End by", -1));
            const _hoisted_74 = { class: "form-control-group" };
            const _hoisted_75 = { class: "radio-inline" };
            const _hoisted_76 = ["id", "name"];
            const _hoisted_77 = _withScopeId(() => createElementVNode("span", { class: "label-text" }, "End after", -1));
            const _hoisted_78 = _withScopeId(() => createElementVNode("span", { class: "input-group-addon" }, "occurrences", -1));
            const _hoisted_79 = {
                key: 5,
                class: "exclusions"
            };
            const _hoisted_80 = _withScopeId(() => createElementVNode("hr", null, null, -1));
            const _hoisted_81 = _withScopeId(() => createElementVNode("label", { class: "control-labe" }, "Exclusions", -1));
            const _hoisted_82 = { class: "form-group controls" };
            const _hoisted_83 = createTextVNode("  ");
            const _hoisted_84 = ["onClick"];
            const _hoisted_85 = _withScopeId(() => createElementVNode("i", { class: "fa fa-times" }, null, -1));
            const _hoisted_86 = [
                _hoisted_85
            ];
            const _hoisted_87 = { key: 0 };
            const _hoisted_88 = ["onClick"];
            const _hoisted_89 = _withScopeId(() => createElementVNode("span", null, "OK", -1));
            const _hoisted_90 = [
                _hoisted_89
            ];
            const _hoisted_91 = ["onClick"];
            const _hoisted_92 = _withScopeId(() => createElementVNode("span", null, "Cancel", -1));
            const _hoisted_93 = [
                _hoisted_92
            ];
            const _hoisted_94 = ["onClick"];
            const _hoisted_95 = _withScopeId(() => createElementVNode("i", { class: "fa fa-plus" }, null, -1));
            const _hoisted_96 = _withScopeId(() => createElementVNode("span", null, " Add Date Range", -1));
            const _hoisted_97 = [
                _hoisted_95,
                _hoisted_96
            ];
            function render(_ctx, _cache, $props, $setup, $data, $options) {
                return (openBlock(), createElementBlock(Fragment, null, [
                    createVNode($setup["RockFormField"], mergeProps({ modelValue: $setup.internalValue }, $setup.standardProps, { name: "schedule-builder" }), {
                        default: withCtx(() => [
                            createElementVNode("div", _hoisted_1, [
                                createElementVNode("div", _hoisted_2, [
                                    createElementVNode("a", {
                                        class: "picker-label",
                                        href: "#",
                                        title: $setup.scheduleSummary,
                                        onClick: withModifiers($setup.onEditSchedule, ["prevent"])
                                    }, _hoisted_6, 8, _hoisted_3)
                                ])
                            ])
                        ]),
                        _: 1
                    }, 16, ["modelValue"]),
                    createVNode($setup["Modal"], {
                        modelValue: $setup.isModalVisible,
                        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => (($setup.isModalVisible) = $event)),
                        title: "Schedule Builder",
                        saveText: "OK",
                        onSave: $setup.onSaveSchedule
                    }, {
                        default: withCtx(() => [
                            createVNode($setup["DateTimePicker"], {
                                modelValue: $setup.startDateTime,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.startDateTime) = $event)),
                                label: "Start Date / Time",
                                help: "",
                                rules: $setup.requiredRules
                            }, null, 8, ["modelValue", "rules"]),
                            createVNode($setup["RockFormField"], {
                                modelValue: $setup.duration,
                                label: "Duration",
                                name: "duration",
                                rules: $setup.requiredRules
                            }, {
                                default: withCtx(() => [
                                    createElementVNode("div", _hoisted_7, [
                                        createVNode($setup["NumberBox"], {
                                            modelValue: $setup.durationInHours,
                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.durationInHours) = $event)),
                                            inputGroupClasses: "input-width-md"
                                        }, {
                                            append: withCtx(() => [
                                                _hoisted_8
                                            ]),
                                            _: 1
                                        }, 8, ["modelValue"]),
                                        createVNode($setup["NumberBox"], {
                                            modelValue: $setup.durationInMinutes,
                                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.durationInMinutes) = $event)),
                                            inputGroupClasses: "input-width-md"
                                        }, {
                                            append: withCtx(() => [
                                                _hoisted_9
                                            ]),
                                            _: 1
                                        }, 8, ["modelValue"])
                                    ])
                                ]),
                                _: 1
                            }, 8, ["modelValue", "rules"]),
                            createVNode($setup["RadioButtonList"], {
                                modelValue: $setup.scheduleType,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.scheduleType) = $event)),
                                items: $setup.scheduleTypeItems,
                                horizontal: ""
                            }, null, 8, ["modelValue"]),
                            createVNode($setup["TransitionVerticalCollapse"], null, {
                                default: withCtx(() => [
                                    ($setup.isRecurringSchedule)
                                        ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                            _hoisted_11,
                                            createVNode($setup["RadioButtonList"], {
                                                modelValue: $setup.occurrencePattern,
                                                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.occurrencePattern) = $event)),
                                                label: "Occurrence Pattern",
                                                items: $setup.occurrencePatternItems,
                                                horizontal: ""
                                            }, null, 8, ["modelValue"]),
                                            ($setup.isRecurringSpecificDates)
                                                ? (openBlock(), createElementBlock("div", _hoisted_12, [
                                                    createElementVNode("ul", null, [
                                                        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.specificDates, (date) => {
                                                            return (openBlock(), createElementBlock("li", null, [
                                                                createElementVNode("span", null, toDisplayString($setup.getShortDateText(date)), 1),
                                                                _hoisted_13,
                                                                createElementVNode("a", {
                                                                    href: "#",
                                                                    class: "text-danger",
                                                                    onClick: withModifiers($event => ($setup.onRemoveSpecificDate(date)), ["prevent"])
                                                                }, _hoisted_16, 8, _hoisted_14)
                                                            ]));
                                                        }), 256))
                                                    ]),
                                                    ($setup.isAddSpecificDateVisible)
                                                        ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                                            createElementVNode("table", null, [
                                                                createElementVNode("tr", null, [
                                                                    createElementVNode("td", null, [
                                                                        createVNode($setup["DatePicker"], {
                                                                            modelValue: $setup.addSpecificDateValue,
                                                                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.addSpecificDateValue) = $event))
                                                                        }, null, 8, ["modelValue"])
                                                                    ]),
                                                                    createElementVNode("td", null, [
                                                                        createElementVNode("a", {
                                                                            class: "btn btn-primary btn-xs add-specific-date-ok ml-3",
                                                                            onClick: withModifiers($setup.onAddSpecificDateOk, ["prevent"])
                                                                        }, _hoisted_20, 8, _hoisted_18),
                                                                        createElementVNode("a", {
                                                                            class: "btn btn-link btn-xs add-specific-date-cancel",
                                                                            onClick: withModifiers($setup.onAddSpecificDateCancel, ["prevent"])
                                                                        }, _hoisted_23, 8, _hoisted_21)
                                                                    ])
                                                                ])
                                                            ])
                                                        ]))
                                                        : (openBlock(), createElementBlock("a", {
                                                            key: 1,
                                                            class: "btn btn-action btn-sm add-specific-date",
                                                            onClick: withModifiers($setup.onAddSpecificDate, ["prevent"])
                                                        }, _hoisted_27, 8, _hoisted_24))
                                                ]))
                                                : createCommentVNode("v-if", true),
                                            ($setup.isRecurringDaily)
                                                ? (openBlock(), createElementBlock("div", _hoisted_28, [
                                                    createElementVNode("div", _hoisted_29, [
                                                        createElementVNode("label", _hoisted_30, [
                                                            withDirectives(createElementVNode("input", {
                                                                id: $setup.dailyRadioId,
                                                                name: $setup.dailyRadioId,
                                                                type: "radio",
                                                                value: "everyDay",
                                                                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($setup.recurringDailyType) = $event))
                                                            }, null, 8, _hoisted_31), [
                                                                [vModelRadio, $setup.recurringDailyType]
                                                            ]),
                                                            _hoisted_32
                                                        ]),
                                                        createVNode($setup["NumberBox"], {
                                                            modelValue: $setup.recurringDailyDays,
                                                            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($setup.recurringDailyDays) = $event)),
                                                            inputGroupClasses: "input-width-md"
                                                        }, {
                                                            append: withCtx(() => [
                                                                _hoisted_33
                                                            ]),
                                                            _: 1
                                                        }, 8, ["modelValue"])
                                                    ]),
                                                    createElementVNode("div", _hoisted_34, [
                                                        createElementVNode("label", _hoisted_35, [
                                                            withDirectives(createElementVNode("input", {
                                                                id: $setup.dailyRadioId,
                                                                name: $setup.dailyRadioId,
                                                                type: "radio",
                                                                value: "everyWeekday",
                                                                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (($setup.recurringDailyType) = $event))
                                                            }, null, 8, _hoisted_36), [
                                                                [vModelRadio, $setup.recurringDailyType]
                                                            ]),
                                                            _hoisted_37
                                                        ])
                                                    ]),
                                                    createElementVNode("div", _hoisted_38, [
                                                        createElementVNode("label", _hoisted_39, [
                                                            withDirectives(createElementVNode("input", {
                                                                id: $setup.dailyRadioId,
                                                                name: $setup.dailyRadioId,
                                                                type: "radio",
                                                                value: "everyWeekend",
                                                                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($setup.recurringDailyType) = $event))
                                                            }, null, 8, _hoisted_40), [
                                                                [vModelRadio, $setup.recurringDailyType]
                                                            ]),
                                                            _hoisted_41
                                                        ])
                                                    ])
                                                ]))
                                                : createCommentVNode("v-if", true),
                                            ($setup.isRecurringWeekly)
                                                ? (openBlock(), createElementBlock("div", _hoisted_42, [
                                                    createElementVNode("div", _hoisted_43, [
                                                        _hoisted_44,
                                                        createVNode($setup["NumberBox"], {
                                                            modelValue: $setup.recurringWeeklyWeeks,
                                                            "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => (($setup.recurringWeeklyWeeks) = $event)),
                                                            inputGroupClasses: "input-width-md"
                                                        }, {
                                                            append: withCtx(() => [
                                                                _hoisted_45
                                                            ]),
                                                            _: 1
                                                        }, 8, ["modelValue"]),
                                                        _hoisted_46
                                                    ]),
                                                    createElementVNode("div", _hoisted_47, [
                                                        createVNode($setup["CheckBoxList"], {
                                                            modelValue: $setup.recurringWeeklyDays,
                                                            "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => (($setup.recurringWeeklyDays) = $event)),
                                                            items: $setup.recurringWeeklyDaysItems,
                                                            horizontal: ""
                                                        }, null, 8, ["modelValue", "items"])
                                                    ])
                                                ]))
                                                : createCommentVNode("v-if", true),
                                            ($setup.isRecurringMonthly)
                                                ? (openBlock(), createElementBlock("div", _hoisted_48, [
                                                    createElementVNode("div", _hoisted_49, [
                                                        createElementVNode("div", _hoisted_50, [
                                                            createElementVNode("label", _hoisted_51, [
                                                                withDirectives(createElementVNode("input", {
                                                                    id: $setup.monthlyRadioId,
                                                                    name: $setup.monthlyRadioId,
                                                                    type: "radio",
                                                                    value: "day",
                                                                    "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => (($setup.recurringMonthlyType) = $event))
                                                                }, null, 8, _hoisted_52), [
                                                                    [vModelRadio, $setup.recurringMonthlyType]
                                                                ]),
                                                                _hoisted_53
                                                            ]),
                                                            createVNode($setup["NumberBox"], {
                                                                modelValue: $setup.recurringMonthlyDayOfMonth,
                                                                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($setup.recurringMonthlyDayOfMonth) = $event)),
                                                                class: "input-width-sm",
                                                                minimumValue: 1,
                                                                maximumValue: 31
                                                            }, null, 8, ["modelValue"]),
                                                            _hoisted_54,
                                                            createVNode($setup["NumberBox"], {
                                                                modelValue: $setup.recurringMonthlyMonths,
                                                                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => (($setup.recurringMonthlyMonths) = $event)),
                                                                class: "input-width-sm"
                                                            }, null, 8, ["modelValue"]),
                                                            _hoisted_55
                                                        ]),
                                                        createElementVNode("div", _hoisted_56, [
                                                            createElementVNode("label", _hoisted_57, [
                                                                withDirectives(createElementVNode("input", {
                                                                    id: $setup.monthlyRadioId,
                                                                    name: $setup.monthlyRadioId,
                                                                    type: "radio",
                                                                    value: "nth",
                                                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($setup.recurringMonthlyType) = $event))
                                                                }, null, 8, _hoisted_58), [
                                                                    [vModelRadio, $setup.recurringMonthlyType]
                                                                ]),
                                                                _hoisted_59
                                                            ]),
                                                            createElementVNode("div", _hoisted_60, [
                                                                createVNode($setup["DropDownList"], {
                                                                    modelValue: $setup.recurringMonthlyRate,
                                                                    "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($setup.recurringMonthlyRate) = $event)),
                                                                    items: $setup.recurringMonthlyRateItems,
                                                                    multiple: ""
                                                                }, null, 8, ["modelValue", "items"])
                                                            ]),
                                                            createElementVNode("div", _hoisted_61, [
                                                                createVNode($setup["DropDownList"], {
                                                                    modelValue: $setup.recurringMonthlyWeekday,
                                                                    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($setup.recurringMonthlyWeekday) = $event)),
                                                                    items: $setup.recurringMonthlyWeekdayItems
                                                                }, null, 8, ["modelValue", "items"])
                                                            ])
                                                        ])
                                                    ])
                                                ]))
                                                : createCommentVNode("v-if", true),
                                            ($setup.isRecurringUntil)
                                                ? (openBlock(), createElementBlock("div", _hoisted_62, [
                                                    _hoisted_63,
                                                    _hoisted_64,
                                                    createElementVNode("div", _hoisted_65, [
                                                        createElementVNode("div", _hoisted_66, [
                                                            createElementVNode("label", _hoisted_67, [
                                                                withDirectives(createElementVNode("input", {
                                                                    id: $setup.continueUntilRadioId,
                                                                    name: $setup.continueUntilRadioId,
                                                                    type: "radio",
                                                                    value: "noEnd",
                                                                    "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => (($setup.recurringContinueUntilType) = $event))
                                                                }, null, 8, _hoisted_68), [
                                                                    [vModelRadio, $setup.recurringContinueUntilType]
                                                                ]),
                                                                _hoisted_69
                                                            ])
                                                        ]),
                                                        createElementVNode("div", _hoisted_70, [
                                                            createElementVNode("label", _hoisted_71, [
                                                                withDirectives(createElementVNode("input", {
                                                                    id: $setup.continueUntilRadioId,
                                                                    name: $setup.continueUntilRadioId,
                                                                    type: "radio",
                                                                    value: "endBy",
                                                                    "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($setup.recurringContinueUntilType) = $event))
                                                                }, null, 8, _hoisted_72), [
                                                                    [vModelRadio, $setup.recurringContinueUntilType]
                                                                ]),
                                                                _hoisted_73
                                                            ]),
                                                            createVNode($setup["DatePickerBase"], {
                                                                modelValue: $setup.recurringContinueUntilDate,
                                                                "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => (($setup.recurringContinueUntilDate) = $event))
                                                            }, null, 8, ["modelValue"])
                                                        ]),
                                                        createElementVNode("div", _hoisted_74, [
                                                            createElementVNode("label", _hoisted_75, [
                                                                withDirectives(createElementVNode("input", {
                                                                    id: $setup.continueUntilRadioId,
                                                                    name: $setup.continueUntilRadioId,
                                                                    type: "radio",
                                                                    value: "endAfter",
                                                                    "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($setup.recurringContinueUntilType) = $event))
                                                                }, null, 8, _hoisted_76), [
                                                                    [vModelRadio, $setup.recurringContinueUntilType]
                                                                ]),
                                                                _hoisted_77
                                                            ]),
                                                            createVNode($setup["NumberBox"], {
                                                                modelValue: $setup.recurringContinueUntilCount,
                                                                "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => (($setup.recurringContinueUntilCount) = $event)),
                                                                inputGroupClasses: "input-width-lg"
                                                            }, {
                                                                append: withCtx(() => [
                                                                    _hoisted_78
                                                                ]),
                                                                _: 1
                                                            }, 8, ["modelValue"])
                                                        ])
                                                    ])
                                                ]))
                                                : createCommentVNode("v-if", true),
                                            ($setup.isRecurringExclusions)
                                                ? (openBlock(), createElementBlock("div", _hoisted_79, [
                                                    _hoisted_80,
                                                    _hoisted_81,
                                                    createElementVNode("div", _hoisted_82, [
                                                        createElementVNode("ul", null, [
                                                            (openBlock(true), createElementBlock(Fragment, null, renderList($setup.exclusionDateRanges, (range) => {
                                                                return (openBlock(), createElementBlock("li", null, [
                                                                    createElementVNode("span", null, toDisplayString($setup.getShortDateRangeText(range)), 1),
                                                                    _hoisted_83,
                                                                    createElementVNode("a", {
                                                                        href: "#",
                                                                        class: "text-danger",
                                                                        onClick: withModifiers($event => ($setup.onRemoveExclusionDateRange(range)), ["prevent"])
                                                                    }, _hoisted_86, 8, _hoisted_84)
                                                                ]));
                                                            }), 256))
                                                        ]),
                                                        ($setup.isAddExclusionDateRangeVisible)
                                                            ? (openBlock(), createElementBlock("div", _hoisted_87, [
                                                                createElementVNode("table", null, [
                                                                    createElementVNode("tr", null, [
                                                                        createElementVNode("td", null, [
                                                                            createVNode($setup["DateRangePicker"], {
                                                                                modelValue: $setup.addExclusionDateRangeValue,
                                                                                "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($setup.addExclusionDateRangeValue) = $event))
                                                                            }, null, 8, ["modelValue"])
                                                                        ]),
                                                                        createElementVNode("td", null, [
                                                                            createElementVNode("a", {
                                                                                class: "btn btn-primary btn-xs add-exclusion-daterange-ok ml-3",
                                                                                onClick: withModifiers($setup.onAddExclusionDateRangeOk, ["prevent"])
                                                                            }, _hoisted_90, 8, _hoisted_88),
                                                                            createElementVNode("a", {
                                                                                class: "btn btn-link btn-xs add-exclusion-daterange-cancel",
                                                                                onClick: withModifiers($setup.onAddExclusionDateRangeCancel, ["prevent"])
                                                                            }, _hoisted_93, 8, _hoisted_91)
                                                                        ])
                                                                    ])
                                                                ])
                                                            ]))
                                                            : (openBlock(), createElementBlock("a", {
                                                                key: 1,
                                                                class: "btn btn-action btn-sm add-exclusion-daterange",
                                                                onClick: withModifiers($setup.onAddExclusionDateRange, ["prevent"])
                                                            }, _hoisted_97, 8, _hoisted_94))
                                                    ])
                                                ]))
                                                : createCommentVNode("v-if", true)
                                        ]))
                                        : createCommentVNode("v-if", true)
                                ]),
                                _: 1
                            })
                        ]),
                        _: 1
                    }, 8, ["modelValue"])
                ], 64));
            }
            const __sfc_style = document.createElement("style");
            __sfc_style.textContent = `.recurrence-pattern-specific-date > ul > li > a[data-v-0iycin67avwgx3jfjy1w1f66] {
    display: none;
}
.recurrence-pattern-specific-date > ul:hover > li > a[data-v-0iycin67avwgx3jfjy1w1f66] {
    display: initial;
}`;
            document.head.appendChild(__sfc_style);
            const exportHelper = exports('default', _sfc_main);
            for (const [key, val] of [["render", render], ["__scopeId", "data-v-0iycin67avwgx3jfjy1w1f66"]]) {
                exportHelper[key] = val;
            }

        })
    };
}));
