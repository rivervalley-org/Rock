System.register(["vue", "../../../Controls/attributeValuesContainer", "../../../Controls/rockForm", "../../../Elements/rockButton"], function (exports_1, context_1) {
    "use strict";
    var vue_1, attributeValuesContainer_1, rockForm_1, rockButton_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (attributeValuesContainer_1_1) {
                attributeValuesContainer_1 = attributeValuesContainer_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "Event.RegistrationEntry.RegistrationStart",
                components: {
                    RockButton: rockButton_1.default,
                    AttributeValuesContainer: attributeValuesContainer_1.default,
                    RockForm: rockForm_1.default
                },
                setup(props, { emit }) {
                    const registrationEntryState = vue_1.inject("registrationEntryState");
                    const attributeValues = vue_1.ref({});
                    for (const a of registrationEntryState.viewModel.registrationAttributesStart) {
                        attributeValues.value[a.key] = registrationEntryState.registrationFieldValues[a.attributeGuid] || "";
                    }
                    const showPrevious = vue_1.computed(() => {
                        return registrationEntryState.firstStep === registrationEntryState.steps.intro;
                    });
                    const attributes = vue_1.computed(() => {
                        const attrs = {};
                        for (const a of registrationEntryState.viewModel.registrationAttributesStart) {
                            attrs[a.key] = a;
                        }
                        return attrs;
                    });
                    const onPrevious = () => {
                        emit("previous");
                    };
                    const onNext = () => {
                        emit("next");
                    };
                    vue_1.watch(attributeValues, () => {
                        for (const a of registrationEntryState.viewModel.registrationAttributesStart) {
                            registrationEntryState.registrationFieldValues[a.attributeGuid] = attributeValues.value[a.key];
                        }
                    });
                    return {
                        attributes,
                        attributeValues,
                        onNext,
                        onPrevious,
                        showPrevious
                    };
                },
                template: `
<div class="registrationentry-registration-attributes">
    <RockForm @submit="onNext">
        <AttributeValuesContainer v-model="attributeValues" :attributes="attributes" isEditMode :showCategoryLabel="false" />

        <div class="actions row">
            <div class="col-xs-6">
                <RockButton v-if="showPrevious" btnType="default" @click="onPrevious">
                    Previous
                </RockButton>
            </div>
            <div class="col-xs-6 text-right">
                <RockButton btnType="primary" type="submit">
                    Next
                </RockButton>
            </div>
        </div>
    </RockForm>
</div>`
            }));
        }
    };
});
//# sourceMappingURL=registrationStart.js.map