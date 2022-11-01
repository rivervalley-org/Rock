System.register(["vue", "../Util/guid", "./fieldType", "./utils"], function (exports_1, context_1) {
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
    var vue_1, guid_1, fieldType_1, utils_1, editComponent, filterComponent, configurationComponent, CampusFieldType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
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
                return (yield context_1.import("./campusFieldComponents")).EditComponent;
            }));
            filterComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./campusFieldComponents")).FilterComponent;
            }));
            configurationComponent = vue_1.defineAsyncComponent(() => __awaiter(void 0, void 0, void 0, function* () {
                return (yield context_1.import("./campusFieldComponents")).ConfigurationComponent;
            }));
            CampusFieldType = class CampusFieldType extends fieldType_1.FieldTypeBase {
                getTextValue(value, configurationValues) {
                    var _a;
                    if (value === undefined || value === null || value === "") {
                        return "";
                    }
                    try {
                        const values = JSON.parse((_a = configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        const selectedValues = values.filter(o => o.value === value);
                        return selectedValues.map(o => o.text).join(", ");
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
                    return 0;
                }
                getFilterValueText(value, configurationValues) {
                    var _a;
                    if (!value.value) {
                        return "";
                    }
                    try {
                        const rawValues = value.value.split(",");
                        const values = JSON.parse((_a = configurationValues === null || configurationValues === void 0 ? void 0 : configurationValues["values"]) !== null && _a !== void 0 ? _a : "[]");
                        const selectedValues = values.filter(o => rawValues.filter(v => guid_1.areEqual(v, o.value)).length > 0);
                        return `'${selectedValues.map(o => o.text).join("' OR '")}'`;
                    }
                    catch (_b) {
                        return `'${value.value}'`;
                    }
                }
                getFilterComponent() {
                    return utils_1.getStandardFilterComponent("Is", filterComponent);
                }
            };
            exports_1("CampusFieldType", CampusFieldType);
        }
    };
});
//# sourceMappingURL=campusField.js.map