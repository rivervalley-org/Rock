System.register(['vue', '@Obsidian/ValidationRules', '@Obsidian/Utility/dateKey', '@Obsidian/Utility/numberUtils', '@Obsidian/Utility/rockDateTime', './rockFormField.js', '@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', './rockLabel.js', './helpBlock.js', './javaScriptAnchor.js'], (function (exports) {
    'use strict';
    var defineComponent, rulesPropType, normalizeRules, DateKey, toNumber, toNumberOrNull, RockDateTime, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            DateKey = module["default"];
        }, function (module) {
            toNumber = module.toNumber;
            toNumberOrNull = module.toNumberOrNull;
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }, function (module) {
            RockFormField = module["default"];
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('getDefaultDatePartsPickerModel', getDefaultDatePartsPickerModel);

            function getDefaultDatePartsPickerModel() {
                return {
                    year: 0,
                    month: 0,
                    day: 0
                };
            }
            var DatePartsPicker = exports('default', defineComponent({
                name: "DatePartsPicker",
                components: {
                    RockFormField
                },
                props: {
                    rules: rulesPropType,
                    modelValue: {
                        type: Object,
                        required: false
                    },
                    requireYear: {
                        type: Boolean,
                        default: true
                    },
                    showYear: {
                        type: Boolean,
                        default: true
                    },
                    allowFutureDates: {
                        type: Boolean,
                        default: true
                    },
                    futureYearCount: {
                        type: Number,
                        default: 50
                    },
                    startYear: {
                        type: Number,
                        default: 1900
                    },
                    disabled: {
                        type: String
                    }
                },
                data() {
                    return {
                        internalDay: "0",
                        internalMonth: "0",
                        internalYear: "0",
                        days: []
                    };
                },
                methods: {
                    getValue() {
                        return {
                            day: toNumber(this.internalDay),
                            month: toNumber(this.internalMonth),
                            year: toNumber(this.internalYear)
                        };
                    },
                    updateDays() {
                        var _a, _b, _c, _d;
                        let dayCount = 31;
                        const year = toNumber(this.internalYear);
                        const month = toNumber(this.internalMonth);
                        if (this.showYear && year > 0 && month > 0) {
                            dayCount = (_d = (_c = (_b = (_a = RockDateTime.fromParts(year, month, 1)) === null || _a === void 0 ? void 0 : _a.addMonths(1)) === null || _b === void 0 ? void 0 : _b.addDays(-1)) === null || _c === void 0 ? void 0 : _c.day) !== null && _d !== void 0 ? _d : 31;
                        }
                        else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
                            dayCount = 31;
                        }
                        else if ([4, 6, 9, 11].indexOf(month) !== -1) {
                            dayCount = 30;
                        }
                        else if (month === 2) {
                            dayCount = 29;
                        }
                        const days = [];
                        for (let day = 1; day <= dayCount; day++) {
                            days.push(day.toString());
                        }
                        this.days = days;
                    }
                },
                computed: {
                    computedRequireYear() {
                        return this.showYear && this.requireYear;
                    },
                    internalDateKey() {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                        if (((_b = !((_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.year)) !== null && _b !== void 0 ? _b : 0) && !this.computedRequireYear) {
                            const dateKey = DateKey.toNoYearDateKey((_d = (_c = this.modelValue) === null || _c === void 0 ? void 0 : _c.month) !== null && _d !== void 0 ? _d : 0, (_f = (_e = this.modelValue) === null || _e === void 0 ? void 0 : _e.day) !== null && _f !== void 0 ? _f : 0);
                            return dateKey;
                        }
                        const dateKey = DateKey.toDateKey((_h = (_g = this.modelValue) === null || _g === void 0 ? void 0 : _g.year) !== null && _h !== void 0 ? _h : 0, (_k = (_j = this.modelValue) === null || _j === void 0 ? void 0 : _j.month) !== null && _k !== void 0 ? _k : 0, (_m = (_l = this.modelValue) === null || _l === void 0 ? void 0 : _l.day) !== null && _m !== void 0 ? _m : 0);
                        return dateKey;
                    },
                    computedRules() {
                        const rules = normalizeRules(this.rules);
                        if (rules.indexOf("required") !== -1 && rules.indexOf("datekey") === -1) {
                            rules.push("datekey");
                        }
                        return rules;
                    },
                    years() {
                        const years = [];
                        let year = RockDateTime.now().year;
                        if (this.futureYearCount > 0 && this.allowFutureDates) {
                            year += this.futureYearCount;
                        }
                        while (year >= 1900) {
                            years.push(year.toString());
                            year--;
                        }
                        return years;
                    },
                },
                watch: {
                    modelValue: {
                        immediate: true,
                        handler() {
                            var _a, _b, _c, _d, _e, _f;
                            this.internalDay = (_b = (_a = this.modelValue) === null || _a === void 0 ? void 0 : _a.day.toString()) !== null && _b !== void 0 ? _b : "0";
                            this.internalMonth = (_d = (_c = this.modelValue) === null || _c === void 0 ? void 0 : _c.month.toString()) !== null && _d !== void 0 ? _d : "0";
                            this.internalYear = (_f = (_e = this.modelValue) === null || _e === void 0 ? void 0 : _e.year.toString()) !== null && _f !== void 0 ? _f : "0";
                            this.updateDays();
                        }
                    },
                    showYear: {
                        immediate: true,
                        handler() {
                            this.updateDays();
                        }
                    },
                    internalDay() {
                        this.$emit("update:modelValue", this.getValue());
                    },
                    internalMonth() {
                        const day = toNumberOrNull(this.internalDay);
                        this.updateDays();
                        if (day != null && day >= this.days.length + 1) {
                            this.internalDay = this.days.length.toString();
                        }
                        else {
                            this.$emit("update:modelValue", this.getValue());
                        }
                    },
                    internalYear() {
                        const day = toNumberOrNull(this.internalDay);
                        this.updateDays();
                        if (day != null && day >= this.days.length + 1) {
                            this.internalDay = this.days.length.toString();
                        }
                        else {
                            this.$emit("update:modelValue", this.getValue());
                        }
                    },
                },
                template: `
<RockFormField
    :modelValue="internalDateKey"
    formGroupClasses="birthday-picker"
    name="birthday"
    :rules="computedRules">
    <template #default="{uniqueId, field}">
        <div class="control-wrapper">
            <div class="form-control-group">
                <select :id="uniqueId + '-month'" class="form-control input-width-sm" :disabled="disabled" v-model="internalMonth">
                    <option value="0"></option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
                <span class="separator">/</span>
                <select :id="uniqueId + '-day'" class="form-control input-width-sm" v-model="internalDay">
                    <option value="0"></option>
                    <option v-for="day in days" :key="day" :value="day">{{day}}</option>
                </select>
                <span v-if="showYear" class="separator">/</span>
                <select v-if="showYear" :id="uniqueId + '-year'" class="form-control input-width-sm" v-model="internalYear">
                    <option value="0"></option>
                    <option v-for="year in years" :value="year">{{year}}</option>
                </select>
            </div>
        </div>
    </template>
</RockFormField>`
            }));

        })
    };
}));
