System.register(['vue', '@Obsidian/Utility/form', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, onBeforeUnmount, useFormState, newGuid;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      onBeforeUnmount = module.onBeforeUnmount;
    }, function (module) {
      useFormState = module.useFormState;
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      var script = exports('default', defineComponent({
        name: 'rockFormFieldError',
        props: {
          label: {
            type: String,
            required: true
          },
          error: {
            type: String,
            required: false
          }
        },
        setup(__props) {
          var props = __props;
          var formState = useFormState();
          var uniqueId = "rock-error-".concat(newGuid());
          var currentError = ref(props.error);
          watch(() => props.error, () => {
            currentError.value = props.error;
            if (currentError.value) {
              formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, props.label, currentError.value);
            } else {
              formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, props.label, "");
            }
          }, {
            immediate: true
          });
          onBeforeUnmount(() => {
            currentError.value = "";
            formState === null || formState === void 0 ? void 0 : formState.setError(uniqueId, props.label, "");
          });
          return (_ctx, _cache) => {
            return null;
          };
        }
      }));

      script.__file = "Framework/Controls/rockFormFieldError.obs";

    })
  };
}));
//# sourceMappingURL=rockFormFieldError.obs.js.map
