System.register(['vue', './rockButton'], (function (exports) {
    'use strict';
    var defineComponent, ref, onMounted, RockButton;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            ref = module.ref;
            onMounted = module.onMounted;
        }, function (module) {
            RockButton = module["default"];
        }],
        execute: (function () {

            var copyButton = exports('default', defineComponent({
              name: "CopyButton",
              components: {
                RockButton
              },
              props: {
                value: {
                  type: String,
                  required: true
                },
                tooltip: {
                  type: String,
                  default: "Copy"
                },
                tooltipPlacement: {
                  type: String,
                  default: "auto"
                }
              },
              setup(props) {
                var el = ref(null);
                var jEl;
                function copy(e) {
                  e.preventDefault();
                  navigator.clipboard.writeText(props.value);
                  jEl.attr("data-original-title", "Copied").tooltip("show").attr("data-original-title", props.tooltip);
                }
                onMounted(() => {
                  var _el$value;
                  if (!el.value) {
                    return;
                  }
                  var jquery = window["$"];
                  jEl = jquery((_el$value = el.value) === null || _el$value === void 0 ? void 0 : _el$value.$el).tooltip();
                });
                return {
                  el,
                  copy
                };
              },
              template: "\n<RockButton\n    class=\"btn-copy-to-clipboard\"\n    :onClick=\"copy\"\n    data-toggle=\"tooltip\"\n    :data-placement=\"tooltipPlacement\"\n    data-container=\"body\"\n    :data-original-title=\"tooltip\"\n    ref=\"el\"\n><i class=\"fa fa-clipboard\"></i></RockButton>\n"
            }));

        })
    };
}));
//# sourceMappingURL=copyButton.js.map
