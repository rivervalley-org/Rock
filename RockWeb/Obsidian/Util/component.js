System.register(["vue"], function (exports_1, context_1) {
    "use strict";
    var vue_1;
    var __moduleName = context_1 && context_1.id;
    function useVModelPassthrough(props, modelName, emit, options) {
        const internalValue = vue_1.ref(props[modelName]);
        vue_1.watch(() => props[modelName], val => internalValue.value = val, options);
        vue_1.watch(internalValue, val => emit(`update:${modelName}`, val), options);
        return internalValue;
    }
    exports_1("useVModelPassthrough", useVModelPassthrough);
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=component.js.map