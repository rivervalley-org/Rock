System.register(["../Elements/alert", "vue", "../Util/rockDateTime"], function (exports_1, context_1) {
    "use strict";
    var alert_1, vue_1, rockDateTime_1, vue_2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
            function (vue_1_1) {
                vue_1 = vue_1_1;
                vue_2 = vue_1_1;
            },
            function (rockDateTime_1_1) {
                rockDateTime_1 = rockDateTime_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "RockValidation",
                components: {
                    Alert: alert_1.default
                },
                props: {
                    errors: {
                        type: Object,
                        required: true
                    },
                    submitCount: {
                        type: Number,
                        default: -1
                    }
                },
                setup(props) {
                    const errorsToShow = vue_1.ref({});
                    const lastSubmitCount = vue_1.ref(0);
                    const lastErrorChangeMs = vue_1.ref(0);
                    const hasErrors = vue_2.computed(() => Object.keys(errorsToShow.value).length > 0);
                    vue_1.watch(() => props.submitCount, () => {
                        const wasSubmitted = lastSubmitCount.value < props.submitCount;
                        if (wasSubmitted) {
                            const now = rockDateTime_1.RockDateTime.now().toMilliseconds();
                            errorsToShow.value = Object.assign({}, props.errors);
                            lastErrorChangeMs.value = now;
                            lastSubmitCount.value = props.submitCount;
                        }
                    });
                    vue_1.watch(() => props.errors, () => {
                        if (props.submitCount === -1) {
                            errorsToShow.value = Object.assign({}, props.errors);
                            return;
                        }
                        const now = rockDateTime_1.RockDateTime.now().toMilliseconds();
                        const msSinceLastChange = now - lastErrorChangeMs.value;
                        if (msSinceLastChange < 500) {
                            errorsToShow.value = Object.assign({}, props.errors);
                            lastErrorChangeMs.value = now;
                        }
                    }, {
                        immediate: true
                    });
                    return {
                        errorsToShow,
                        hasErrors,
                        lastSubmitCount,
                        lastErrorChangeMs
                    };
                },
                template: `
<Alert v-show="hasErrors" alertType="validation">
    Please correct the following:
    <ul>
        <li v-for="(error) of errorsToShow">
            <strong>{{error.name}}</strong>
            {{error.text}}
        </li>
    </ul>
</Alert>
`
            }));
        }
    };
});
//# sourceMappingURL=rockValidation.js.map