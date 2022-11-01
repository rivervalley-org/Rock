System.register(["vue"], function (exports_1, context_1) {
    "use strict";
    var vue_1, vue_2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
                vue_2 = vue_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_2.defineComponent({
                name: "Workflow.FormBuilderDetail.ConfigurableZone",
                components: {},
                props: {
                    modelValue: {
                        type: Boolean,
                        default: false
                    },
                    iconCssClass: {
                        type: String,
                        default: "fa fa-gear"
                    },
                    clickBodyToConfigure: {
                        type: Boolean,
                        default: false
                    }
                },
                emits: [
                    "configure"
                ],
                setup(props, { emit }) {
                    const zoneClasses = vue_1.computed(() => {
                        const classes = ["configurable-zone"];
                        if (props.modelValue) {
                            classes.push("active");
                        }
                        return classes;
                    });
                    const onActionClick = () => {
                        emit("configure");
                    };
                    const onBodyActionClick = () => {
                        if (props.clickBodyToConfigure) {
                            emit("configure");
                        }
                    };
                    return {
                        onActionClick,
                        onBodyActionClick,
                        zoneClasses
                    };
                },
                template: `
<div :class="zoneClasses">
    <div class="zone-content-container" @click.stop="onBodyActionClick">
        <div class="zone-content">
            <slot />
        </div>
    </div>

    <div class="zone-actions">
        <slot name="preActions" />
        <div v-if="iconCssClass" class="zone-action" @click.stop="onActionClick"><i :class="iconCssClass + ' fa-fw'"></i></div>
        <slot name="postActions" />
    </div>
</div>
`
            }));
        }
    };
});
//# sourceMappingURL=configurableZone.js.map