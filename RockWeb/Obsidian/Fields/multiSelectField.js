System.register(["vue", "../Reporting/comparisonType", "./fieldType", "./utils"], function (exports_1, context_1) {
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
    var vue_1, comparisonType_1, fieldType_1, utils_1, editComponent, filterComponent, configurationComponent, MultiSelectFieldType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (comparisonType_1_1) {
                comparisonType_1 = comparisonType_1_1;
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
                return (yield context_1.import("./multiSelectFieldComponents")).EditComponent;
            }));
            filterComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./multiSelectFieldComponents")).FilterComponent;
            }));
            configurationComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./multiSelectFieldComponents")).ConfigurationComponent;
            }));
            MultiSelectFieldType = class MultiSelectFieldType extends fieldType_1.FieldTypeBase {
                getTextValue(value, configurationValues) {
                    var _a;
                    if (value === "") {
                        return "";
                    }
                    try {
                        const values = JSON.parse((_a = configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        const userValues = value.split(",");
                        const selectedValues = values.filter(v => userValues.includes(v.value));
                        return selectedValues.map(v => v.text).join(", ");
                    }
                    catch (_b) {
                        return value;
                    }
                }
                getEditComponent() {
                    return editComponent;
                }
                getConfigurationComponent() {
                    return configurationComponent;
                }
                getSupportedComparisonTypes() {
                    return comparisonType_1.containsComparisonTypes;
                }
                getFilterComponent() {
                    return utils_1.getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent);
                }
                getFilterValueText(value, configurationValues) {
                    var _a;
                    if (value.value === "") {
                        return "";
                    }
                    try {
                        const rawValues = value.value.split(",");
                        const values = JSON.parse((_a = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        const selectedValues = values.filter(v => rawValues.includes(v.value));
                        if (selectedValues.length >= 1) {
                            return `'${selectedValues.map(v => v.value).join("' OR '")}'`;
                        }
                        else {
                            return "";
                        }
                    }
                    catch (_b) {
                        return value.value;
                    }
                }
            };
            exports_1("MultiSelectFieldType", MultiSelectFieldType);
        }
    };
});
//# sourceMappingURL=multiSelectField.js.map