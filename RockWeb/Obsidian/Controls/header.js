System.register([], (function () {
    'use strict';
    return {
        execute: (function () {

            System.register(["vue"], function (exports_1, context_1) {
                var vue_1;
                context_1 && context_1.id;
                return {
                    setters: [
                        function (vue_1_1) {
                            vue_1 = vue_1_1;
                        }
                    ],
                    execute: function () {
                        exports_1("default", vue_1.defineComponent({
                            name: "Header",
                            props: {
                                title: {
                                    type: String,
                                    default: ""
                                },
                                description: {
                                    type: String,
                                    default: ""
                                }
                            },
                            emits: [
                                "update:modelValue"
                            ],
                            setup() {
                                return {};
                            },
                            template: `
<div class="rock-header">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <p v-if="description" class="description">{{ description }}</p>
</div>
`
                        }));
                    }
                };
            });

        })
    };
}));
