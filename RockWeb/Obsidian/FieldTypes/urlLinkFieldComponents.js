System.register(['vue', './utils', '@Obsidian/Utility/component', '@Obsidian/Controls/urlLinkBox', '@Obsidian/Utility/booleanUtils'], (function (exports) {
    'use strict';
    var defineComponent, computed, getFieldEditorProps, useVModelPassthrough, UrlLinkBox, asBooleanOrNull;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
            computed = module.computed;
        }, function (module) {
            getFieldEditorProps = module.getFieldEditorProps;
        }, function (module) {
            useVModelPassthrough = module.useVModelPassthrough;
        }, function (module) {
            UrlLinkBox = module["default"];
        }, function (module) {
            asBooleanOrNull = module.asBooleanOrNull;
        }],
        execute: (function () {

            var EditComponent = exports('EditComponent', defineComponent({
              name: "UrlLinkField.Edit",
              components: {
                UrlLinkBox
              },
              props: getFieldEditorProps(),
              emits: ["update:modelValue"],
              setup(props, _ref) {
                var emit = _ref.emit;
                var value = useVModelPassthrough(props, "modelValue", emit);
                var requiresTrailingSlash = computed(() => {
                  var _asBooleanOrNull;
                  return (_asBooleanOrNull = asBooleanOrNull(props.configurationValues.ShouldRequireTrailingForwardSlash)) !== null && _asBooleanOrNull !== void 0 ? _asBooleanOrNull : false;
                });
                return {
                  value,
                  requiresTrailingSlash
                };
              },
              template: "\n<UrlLinkBox v-model=\"value\" :requires-trailing-slash=\"requiresTrailingSlash\" />\n"
            }));

        })
    };
}));
//# sourceMappingURL=urlLinkFieldComponents.js.map
