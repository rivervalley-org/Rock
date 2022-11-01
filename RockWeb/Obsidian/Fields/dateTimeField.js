System.register(["vue", "../Reporting/comparisonType", "../Services/boolean", "../Services/number", "../Services/slidingDateRange", "../Util/rockDateTime", "./fieldType", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var vue_1, comparisonType_1, boolean_1, number_1, slidingDateRange_1, rockDateTime_1, fieldType_1, utils_1, editComponent, configurationComponent, filterComponent, DateTimeFieldType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (comparisonType_1_1) {
                comparisonType_1 = comparisonType_1_1;
            },
            function (boolean_1_1) {
                boolean_1 = boolean_1_1;
            },
            function (number_1_1) {
                number_1 = number_1_1;
            },
            function (slidingDateRange_1_1) {
                slidingDateRange_1 = slidingDateRange_1_1;
            },
            function (rockDateTime_1_1) {
                rockDateTime_1 = rockDateTime_1_1;
            },
            function (fieldType_1_1) {
                fieldType_1 = fieldType_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            editComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./dateTimeFieldComponents")).EditComponent;
            }));
            configurationComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./dateTimeFieldComponents")).ConfigurationComponent;
            }));
            filterComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./dateTimeFieldComponents")).FilterComponent;
            }));
            DateTimeFieldType = class DateTimeFieldType extends fieldType_1.FieldTypeBase {
                getTextValue(value, configurationValues) {
                    if (this.isCurrentDateValue(value)) {
                        return this.getCurrentDateText(value);
                    }
                    else if (value) {
                        const dateValue = rockDateTime_1.RockDateTime.parseISO(value);
                        const dateFormatTemplate = configurationValues["format"] || "MM/dd/yyy";
                        if (dateValue !== null) {
                            let textValue = dateValue.toASPString(dateFormatTemplate);
                            const displayDiff = boolean_1.asBoolean(configurationValues["displayDiff"]);
                            if (displayDiff === true) {
                                textValue = `${textValue} ${dateValue.toElapsedString()}`;
                            }
                            return textValue;
                        }
                        else {
                            return "";
                        }
                    }
                    else {
                        return "";
                    }
                }
                getEditComponent() {
                    return editComponent;
                }
                getConfigurationComponent() {
                    return configurationComponent;
                }
                getSupportedComparisonTypes() {
                    return comparisonType_1.dateComparisonTypes;
                }
                getFilterComponent() {
                    return utils_1.getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent, {
                        updateComparisonTypeNames: (options) => {
                            options.filter(o => o.value === 4096..toString())
                                .forEach(o => o.text = "Range");
                        }
                    });
                }
                getFilterValueDescription(value, configurationValues) {
                    if (value.comparisonType === 4096) {
                        return `During '${this.getFilterValueText(value, configurationValues)}'`;
                    }
                    return super.getFilterValueDescription(value, configurationValues);
                }
                getFilterValueText(value, _configurationValues) {
                    var _a, _b;
                    const filterValues = value.value.split("\t");
                    if (value.comparisonType === 4096 && filterValues.length > 1) {
                        const range = slidingDateRange_1.parseSlidingDateRangeString(filterValues[1]);
                        if (range === null) {
                            return filterValues[1];
                        }
                        const rangeTypeText = slidingDateRange_1.getRangeTypeText(range.rangeType);
                        const timeUnitValue = (_a = range.timeValue) !== null && _a !== void 0 ? _a : 1;
                        const timeUnitText = slidingDateRange_1.getTimeUnitText((_b = range.timeUnit) !== null && _b !== void 0 ? _b : 0) + (timeUnitValue !== 1 ? "s" : "");
                        if (range.rangeType === 1) {
                            return `${rangeTypeText} ${timeUnitText}`;
                        }
                        else if ([0, 4, 8, 16].includes(range.rangeType)) {
                            return `${rangeTypeText} ${timeUnitValue} ${timeUnitText}`;
                        }
                        else {
                            if (range.lowerDate && range.upperDate) {
                                return `${range.lowerDate} to ${range.upperDate}`;
                            }
                            else if (range.lowerDate) {
                                return `from ${range.lowerDate}`;
                            }
                            else if (range.upperDate) {
                                return `through ${range.upperDate}`;
                            }
                            else {
                                return "";
                            }
                        }
                    }
                    else {
                        if (this.isCurrentDateValue(filterValues[0])) {
                            return `'${this.getCurrentDateText(filterValues[0])}'`;
                        }
                        return filterValues[0] ? `'${filterValues[0]}'` : "";
                    }
                }
                isCurrentDateValue(value) {
                    return value.indexOf("CURRENT") === 0;
                }
                getCurrentDateText(value) {
                    const parts = value.split(":");
                    const diff = parts.length === 2 ? number_1.toNumber(parts[1]) : 0;
                    if (diff === 1) {
                        return "Current Time plus 1 minute";
                    }
                    else if (diff > 0) {
                        return `Current Time plus ${diff} minutes`;
                    }
                    else if (diff === -1) {
                        return "Current Time minus 1 minute";
                    }
                    else if (diff < 0) {
                        return `Current Time minus ${Math.abs(diff)} minutes`;
                    }
                    else {
                        return "Current Time";
                    }
                }
            };
            exports_1("DateTimeFieldType", DateTimeFieldType);
        }
    };
});
//# sourceMappingURL=dateTimeField.js.map