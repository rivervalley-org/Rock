System.register(["../Fields/index", "vue", "../Fields/textField"], function (exports_1, context_1) {
    "use strict";
    var index_1, vue_1, textField_1, textField;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (textField_1_1) {
                textField_1 = textField_1_1;
            }
        ],
        execute: function () {
            textField = new textField_1.TextFieldType();
            exports_1("default", vue_1.defineComponent({
                name: "RockField",
                props: {
                    modelValue: {
                        type: String,
                        required: false
                    },
                    attribute: {
                        type: Object,
                        required: true
                    },
                    showEmptyValue: {
                        type: Boolean,
                        default: false
                    },
                    isEditMode: {
                        type: Boolean,
                        default: false
                    },
                    showLabel: {
                        type: Boolean,
                        default: true
                    },
                    isCondensed: {
                        type: Boolean,
                        default: false
                    }
                },
                setup(props, { emit }) {
                    const field = vue_1.computed(() => {
                        const fieldType = index_1.getFieldType(props.attribute.fieldTypeGuid);
                        return fieldType !== null && fieldType !== void 0 ? fieldType : textField;
                    });
                    const showValue = vue_1.computed(() => { var _a, _b; return props.showEmptyValue || field.value.getTextValue((_a = props.modelValue) !== null && _a !== void 0 ? _a : "", (_b = props.attribute.configurationValues) !== null && _b !== void 0 ? _b : {}) !== ""; });
                    const isRequired = vue_1.computed(() => props.attribute.isRequired);
                    const rules = vue_1.computed(() => isRequired.value ? "required" : "");
                    const isEditMode = vue_1.computed(() => props.isEditMode);
                    const label = vue_1.computed(() => props.attribute.name);
                    const helpText = vue_1.computed(() => props.attribute.description);
                    const valueComponent = vue_1.computed(() => {
                        return props.isCondensed
                            ? field.value.getCondensedFormattedComponent()
                            : field.value.getFormattedComponent();
                    });
                    const editComponent = vue_1.computed(() => field.value.getEditComponent());
                    const value = vue_1.computed({
                        get: () => props.modelValue || "",
                        set(newValue) {
                            emit("update:modelValue", newValue);
                        }
                    });
                    const configurationValues = vue_1.computed(() => {
                        var _a;
                        return (_a = props.attribute.configurationValues) !== null && _a !== void 0 ? _a : {};
                    });
                    vue_1.provide("isRequired", isRequired);
                    return {
                        label,
                        showValue,
                        valueComponent,
                        rules,
                        isEditMode,
                        editComponent,
                        value,
                        helpText,
                        configurationValues
                    };
                },
                template: `
<div v-if="!isEditMode">
    <template v-if="showLabel">
        <div v-if="showValue" class="form-group static-control">
            <label class="control-label">
                {{ label }}
            </label>
            <div class="control-wrapper">
                <div class="form-control-static">
                    <component :is="valueComponent" :modelValue="value" :configurationValues="configurationValues" />
                </div>
            </div>
        </div>
    </template>
    <component v-else :is="valueComponent" :modelValue="value" :configurationValues="configurationValues" />
</div>
<div v-else>
    <component :is="editComponent"
        v-model="value"
        :label="label"
        :help="helpText"
        :configurationValues="configurationValues"
        :rules="rules" />
</div>`
            }));
        }
    };
});
//# sourceMappingURL=rockField.js.map