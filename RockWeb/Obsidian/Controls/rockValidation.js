System.register(['./alert.vue.js', 'vue'], (function (exports) {
    'use strict';
    var exportHelper, defineComponent, computed;
    return {
        setters: [function (module) {
            exportHelper = module["default"];
        }, function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }],
        execute: (function () {

            var RockValidation = exports('default', defineComponent({
                name: "RockValidation",
                components: {
                    Alert: exportHelper
                },
                props: {
                    errors: {
                        type: Array,
                        required: true
                    }
                },
                setup(props) {
                    const hasErrors = computed(() => props.errors.length > 0);
                    return {
                        hasErrors
                    };
                },
                template: `
<Alert v-show="hasErrors" alertType="validation">
    Please correct the following:
    <ul>
        <li v-for="error of errors">
            <strong>{{error.name}}</strong>
            {{error.text}}
        </li>
    </ul>
</Alert>
`
            }));

        })
    };
}));
