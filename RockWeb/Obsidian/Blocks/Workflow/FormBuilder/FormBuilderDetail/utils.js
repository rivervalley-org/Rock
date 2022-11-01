System.register(["vue", "../../../../Fields/utils", "../../../../Util/guid"], function (exports_1, context_1) {
    "use strict";
    var vue_1, utils_1, guid_1, sourcesKey;
    var __moduleName = context_1 && context_1.id;
    function provideFormSources(options) {
        vue_1.provide(sourcesKey, options);
    }
    exports_1("provideFormSources", provideFormSources);
    function useFormSources() {
        var _a;
        return (_a = vue_1.inject(sourcesKey)) !== null && _a !== void 0 ? _a : {};
    }
    exports_1("useFormSources", useFormSources);
    function getFilterGroupTitle(group) {
        switch (group.expressionType) {
            case 1:
                return "<strong>Show</strong> when <strong>all</strong> of the following match:";
            case 2:
                return "<strong>Show</strong> when <strong>any</strong> of the following match:";
            case 3:
                return "<strong>Hide</strong> when <strong>all</strong> of the following match:";
            case 4:
                return "<strong>Hide</strong> when <strong>any</strong> of the following match:";
            default:
                return "";
        }
    }
    exports_1("getFilterGroupTitle", getFilterGroupTitle);
    function getFilterRuleDescription(rule, sources, fields) {
        var _a;
        const ruleField = fields.filter(f => guid_1.areEqual(f.guid, rule.attributeGuid));
        const ruleSource = sources.filter(s => guid_1.areEqual(s.guid, rule.attributeGuid));
        if (ruleField.length === 1 && ruleSource.length === 1 && ruleSource[0].attribute) {
            const fieldType = utils_1.getFieldType(ruleField[0].fieldTypeGuid);
            if (fieldType) {
                const descr = fieldType.getFilterValueDescription({
                    comparisonType: rule.comparisonType,
                    value: rule.value
                }, (_a = ruleSource[0].attribute.configurationValues) !== null && _a !== void 0 ? _a : {});
                return `${ruleSource[0].attribute.name} ${descr}`;
            }
        }
        return "";
    }
    exports_1("getFilterRuleDescription", getFilterRuleDescription);
    function timeoutAsync(ms) {
        return new Promise((_resolve, reject) => {
            setTimeout(reject, ms);
        });
    }
    exports_1("timeoutAsync", timeoutAsync);
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            }
        ],
        execute: function () {
            sourcesKey = Symbol();
        }
    };
});
//# sourceMappingURL=utils.js.map