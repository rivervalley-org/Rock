System.register(['vue', './rockFormField.js', './dropDownList.js', './rockLabel.js', './textBox.js', '@Obsidian/Utility/validationRules', '@Obsidian/Utility/component', '@Obsidian/Utility/form', '@Obsidian/Utility/guid', '@Obsidian/ValidationRules', './helpBlock.js', './javaScriptAnchor.js', 'ant-design-vue', '@Obsidian/Utility/util', '@Obsidian/Utility/stringUtils'], (function (exports) {
    'use strict';
    var defineComponent, ref, watch, computed, RockFormField, DropDownList, RockLabel, TextBox, rulesPropType, normalizeRules, updateRefValue;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            watch = module.watch;
            computed = module.computed;
        }, function (module) {
            RockFormField = module["default"];
        }, function (module) {
            DropDownList = module["default"];
        }, function (module) {
            RockLabel = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            rulesPropType = module.rulesPropType;
            normalizeRules = module.normalizeRules;
        }, function (module) {
            updateRefValue = module.updateRefValue;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            exports('getDefaultAddressControlModel', getDefaultAddressControlModel);

            function getDefaultAddressControlModel() {
                return {
                    state: "AZ",
                    country: "US"
                };
            }
            const stateOptions = [
                "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM",
                "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
                "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV",
                "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW",
                "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA",
                "WA", "WV", "WI", "WY"
            ]
                .map(o => ({ value: o, text: o }));
            var addressControl = exports('default', defineComponent({
                name: "AddressControl",
                components: {
                    RockFormField,
                    TextBox,
                    RockLabel,
                    DropDownList
                },
                props: {
                    modelValue: {
                        type: Object,
                        default: {}
                    },
                    rules: rulesPropType
                },
                emits: {
                    "update:modelValue": (_v) => true
                },
                setup(props, { emit }) {
                    const internalValue = ref(props.modelValue);
                    watch(() => props.modelValue, () => {
                        updateRefValue(internalValue, props.modelValue);
                    }, { deep: true });
                    watch(internalValue, () => {
                        emit("update:modelValue", internalValue.value);
                    }, { deep: true });
                    const fieldRules = computed(() => {
                        const rules = normalizeRules(props.rules);
                        if (rules.includes("required")) {
                            const index = rules.indexOf("required");
                            rules[index] = (value) => {
                                try {
                                    const val = JSON.parse(value);
                                    if (!val || !val.street1 || !val.city || !val.postalCode) {
                                        return "is required";
                                    }
                                    if (!/^\d{5}(-\d{4})?$/.test(val.postalCode)) {
                                        return "needs a valid Zip code";
                                    }
                                }
                                catch (e) {
                                    return "is required";
                                }
                                return true;
                            };
                        }
                        else {
                            rules.push((value) => {
                                try {
                                    const val = JSON.parse(value);
                                    if (!val || !val.street1) {
                                        return true;
                                    }
                                    if (!val.city || !val.postalCode) {
                                        const missing = [];
                                        if (!val.city) {
                                            missing.push("City");
                                        }
                                        if (!val.postalCode) {
                                            missing.push("Zip");
                                        }
                                        return "must include " + missing.join(", ");
                                    }
                                    if (!/^\d{5}(-\d{4})?$/.test(val.postalCode)) {
                                        return "needs a valid Zip code";
                                    }
                                }
                                catch (e) {
                                    return "must be filled out correctly.";
                                }
                                return true;
                            });
                        }
                        return rules;
                    });
                    const fieldValue = computed(() => {
                        return JSON.stringify(internalValue.value);
                    });
                    return {
                        internalValue,
                        stateOptions,
                        fieldRules,
                        fieldValue
                    };
                },
                template: `
<RockFormField formGroupClasses="address-control" name="addresscontrol" :modelValue="fieldValue" :rules="fieldRules" >
    <div class="control-wrapper">
        <div>
            <div class="form-group">
                <TextBox placeholder="Address Line 1" v-model="internalValue.street1" validationTitle="Address Line 1" />
            </div>
            <div class="form-group">
                <TextBox placeholder="Address Line 2" v-model="internalValue.street2" validationTitle="Address Line 2" />
            </div>
            <div class="form-row">
                <div class="form-group col-sm-6">
                    <TextBox placeholder="City" v-model="internalValue.city" validationTitle="City" />
                </div>
                <div class="form-group col-sm-3">
                    <DropDownList :showBlankItem="false" v-model="internalValue.state" :items="stateOptions" validationTitle="State" />
                </div>
                <div class="form-group col-sm-3">
                    <TextBox placeholder="Zip" v-model="internalValue.postalCode" validationTitle="Zip" />
                </div>
            </div>
        </div>
    </div>
</RockFormField>
`
            }));

        })
    };
}));
