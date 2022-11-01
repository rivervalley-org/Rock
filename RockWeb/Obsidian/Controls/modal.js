System.register(["vue", "../Controls/rockForm", "../Elements/rockButton", "../Util/page"], function (exports_1, context_1) {
    "use strict";
    var vue_1, rockForm_1, rockButton_1, page_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            },
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "Modal",
                components: {
                    RockButton: rockButton_1.default,
                    RockForm: rockForm_1.default
                },
                props: {
                    modelValue: {
                        type: Boolean,
                        required: true
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    subtitle: {
                        type: String,
                        default: ""
                    },
                    cancelText: {
                        type: String,
                        default: "Cancel"
                    },
                    saveText: {
                        type: String,
                        default: ""
                    }
                },
                emits: {
                    "update:modelValue": (_value) => true,
                    save: () => true
                },
                setup(props, { emit }) {
                    const isShaking = vue_1.ref(false);
                    const onClose = () => {
                        emit("update:modelValue", false);
                    };
                    const onScrollableClick = () => {
                        if (!isShaking.value) {
                            isShaking.value = true;
                            setTimeout(() => isShaking.value = false, 1000);
                        }
                    };
                    const onSubmit = () => {
                        emit("save");
                    };
                    if (props.modelValue) {
                        page_1.trackModalState(true);
                    }
                    vue_1.watch(() => props.modelValue, () => page_1.trackModalState(props.modelValue));
                    return {
                        isShaking,
                        onClose,
                        onScrollableClick,
                        onSubmit
                    };
                },
                template: `
<teleport to="body" v-if="modelValue">
    <div>
        <div class="modal-backdrop" style="z-index: 1060;"></div>

        <div @click.stop="onScrollableClick" class="modal-scrollable" style="z-index: 1060;">
            <div @click.stop
                class="modal container modal-content rock-modal rock-modal-frame modal-overflow"
                :class="{'animated shake': isShaking}"
                aria-hidden="false"
                tabindex="-1"
                role="dialog"
                style="display: block; margin-top: 0px;">
                <div class="modal-header">
                    <button @click="onClose" class="close" aria-hidden="true" type="button">&times;</button>
                    <template v-if="title">
                        <h3 class="modal-title">{{ title }}</h3>
                        <small v-if="subtitle">{{ subtitle }}</small>
                    </template>
                    <slot v-else name="header" />
                </div>

                <RockForm @submit="onSubmit">
                    <div class="modal-body">
                        <slot />
                    </div>

                    <div class="modal-footer">
                        <RockButton @click="onClose" btnType="link">{{ cancelText }}</RockButton>
                        <RockButton v-if="saveText" type="submit" btnType="primary">{{ saveText }}</RockButton>
                        <slot name="customButtons" />
                    </div>
                </RockForm>
            </div>
        </div>
    </div>
</teleport>
`
            }));
        }
    };
});
//# sourceMappingURL=modal.js.map