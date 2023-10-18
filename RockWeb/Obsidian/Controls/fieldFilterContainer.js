System.register(['vue'], (function (exports) {
    'use strict';
    var defineComponent, computed;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }],
        execute: (function () {

            var fieldFilterContainer = exports('default', defineComponent({
              name: "FieldFilterContainer",
              props: {
                compareLabel: {
                  type: String
                }
              },
              setup(props, ctx) {
                var hasCompareColumn = computed(() => !!ctx.slots.compare || !!props.compareLabel);
                var hasCompareLabel = computed(() => !!props.compareLabel);
                var compareColumnClass = computed(() => {
                  if (ctx.slots.compare) {
                    return "col-xs-12 col-md-4";
                  } else if (props.compareLabel) {
                    return "col-xs-12 col-md-2";
                  } else {
                    return "";
                  }
                });
                var valueColumnClass = computed(() => {
                  if (ctx.slots.compare) {
                    return "col-xs-12 col-md-8";
                  } else if (props.compareLabel) {
                    return "col-xs-12 col-md-10";
                  } else {
                    return "col-xs-12 col-md-12";
                  }
                });
                return {
                  compareColumnClass,
                  hasCompareColumn,
                  hasCompareLabel,
                  valueColumnClass
                };
              },
              template: "\n<div class=\"row form-row field-criteria\">\n    <div v-if=\"hasCompareColumn\" :class=\"compareColumnClass\">\n        <span v-if=\"hasCompareLabel\" class=\"data-view-filter-label\">{{ compareLabel }}</span>\n        <slot v-else name=\"compare\" />\n    </div>\n\n    <div :class=\"valueColumnClass\">\n        <slot />\n    </div>\n</div>\n"
            }));

        })
    };
}));
//# sourceMappingURL=fieldFilterContainer.js.map
