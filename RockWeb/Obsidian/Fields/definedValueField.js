System.register(["vue", "../Reporting/comparisonType", "../Services/boolean", "./fieldType", "./utils"], function (exports_1, context_1) {
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
    var vue_1, comparisonType_1, boolean_1, fieldType_1, utils_1, editComponent, configurationComponent, filterComponent, DefinedValueFieldType;
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
            function (fieldType_1_1) {
                fieldType_1 = fieldType_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            editComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./definedValueFieldComponents")).EditComponent;
            }));
            configurationComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./definedValueFieldComponents")).ConfigurationComponent;
            }));
            filterComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./definedValueFieldComponents")).FilterComponent;
            }));
            DefinedValueFieldType = class DefinedValueFieldType extends fieldType_1.FieldTypeBase {
                getTextValue(value, configurationValues) {
                    var _a;
                    try {
                        const clientValue = JSON.parse(value !== null && value !== void 0 ? value : "");
                        try {
                            const values = JSON.parse((_a = configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                            const displayDescription = boolean_1.asBoolean(configurationValues["displaydescription"]);
                            const rawValues = clientValue.value.split(",");
                            return values.filter(v => rawValues.includes(v.value))
                                .map(v => displayDescription ? v.description : v.text)
                                .join(", ");
                        }
                        catch (_b) {
                            return clientValue.value;
                        }
                    }
                    catch (_c) {
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
                    return comparisonType_1.containsComparisonTypes;
                }
                getFilterValueText(value, configurationValues) {
                    var _a, _b;
                    try {
                        const clientValue = JSON.parse((_a = value.value) !== null && _a !== void 0 ? _a : "");
                        const values = JSON.parse((_b = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues["values"]) !== null && _b !== void 0 ? _b : "[]");
                        const useDescription = boolean_1.asBoolean(configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues["displaydescription"]);
                        const rawValues = clientValue.value.split(",");
                        const text = values.filter(v => rawValues.includes(v.value))
                            .map(v => useDescription ? v.description : v.text)
                            .join("' OR '");
                        return text ? `'${text}'` : "";
                    }
                    catch (_c) {
                        return "";
                    }
                }
                getFilterComponent() {
                    return utils_1.getStandardFilterComponent(this.getSupportedComparisonTypes(), filterComponent);
                }
            };
            exports_1("DefinedValueFieldType", DefinedValueFieldType);
        }
    };
});
//# sourceMappingURL=definedValueField.js.map