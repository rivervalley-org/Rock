System.register(['vue', './workflowTypePicker.obs', './workflowBasePicker.obs', './rockFormField.obs', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Utility/http', '@Obsidian/Utility/block', '@Obsidian/Utility/guid', '@Obsidian/Utility/util'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, createCommentVNode, createVNode, nextTick, WorkflowTypePicker, WorkflowBasePicker, RockFormField, PickerDisplayStyle, useHttp, useSecurityGrantToken, toGuidOrNull, emptyGuid, deepEqual;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      nextTick = module.nextTick;
    }, function (module) {
      WorkflowTypePicker = module["default"];
    }, function (module) {
      WorkflowBasePicker = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      deepEqual = module.deepEqual;
    }],
    execute: (function () {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }

      var script = exports('default', defineComponent({
        name: 'workflowPicker',
        props: {
          modelValue: {
            type: Object,
            required: true
          },
          workflowTypeGuid: {
            type: Object,
            default: null
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref(props.modelValue);
          var internalWorkflowType = ref(null);
          var securityGrantToken = useSecurityGrantToken();
          var http = useHttp();
          var internalTypeGuid = computed(() => {
            var _toGuidOrNull, _internalWorkflowType;
            return (_toGuidOrNull = toGuidOrNull(props.workflowTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : toGuidOrNull((_internalWorkflowType = internalWorkflowType.value) === null || _internalWorkflowType === void 0 ? void 0 : _internalWorkflowType.value);
          });
          var skipWatcher = false;
          watch(() => props.modelValue, () => {
            if (!deepEqual(internalValue.value, props.modelValue, false)) {
              internalValue.value = props.modelValue;
              getChannelFromComponent();
            }
          });
          watch(internalValue, val => {
            if (!deepEqual(val, props.modelValue, false)) {
              emit("update:modelValue", val);
            }
          });
          watch(() => props.workflowTypeGuid, newVal => {
            if (newVal) {
              internalWorkflowType.value = null;
            }
          });
          watch(internalWorkflowType, () => {
            if (!skipWatcher) {
              internalValue.value = null;
            }
          });
          function getChannelFromComponent() {
            return _getChannelFromComponent.apply(this, arguments);
          }
          function _getChannelFromComponent() {
            _getChannelFromComponent = _asyncToGenerator(function* () {
              var _toGuidOrNull2, _props$modelValue;
              var options = {
                workflowGuid: (_toGuidOrNull2 = toGuidOrNull((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
                securityGrantToken: securityGrantToken.value
              };
              var result = yield http.post("/api/v2/Controls/WorkflowPickerGetWorkflowTypeForWorkflow", null, options);
              if (result.isSuccess && result.data) {
                skipWatcher = true;
                internalWorkflowType.value = result.data;
                yield nextTick();
                skipWatcher = false;
              } else {
                var _result$errorMessage;
                console.error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while loading data.");
              }
            });
            return _getChannelFromComponent.apply(this, arguments);
          }
          if (props.modelValue && !internalTypeGuid.value) {
            getChannelFromComponent();
          }
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: internalValue.value,
              name: "step-program-step-type-picker"
            }, {
              default: withCtx(() => [!__props.workflowTypeGuid ? (openBlock(), createBlock(unref(WorkflowTypePicker), {
                key: 0,
                modelValue: internalWorkflowType.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => internalWorkflowType.value = $event),
                label: "Workflow Type",
                multiple: false,
                disabled: __props.disabled,
                showBlankItem: "",
                autoExpand: "",
                formGroupClasses: "mt-0",
                displayStyle: unref(PickerDisplayStyle).Condensed
              }, null, 8, ["modelValue", "disabled", "displayStyle"])) : createCommentVNode("v-if", true), createVNode(unref(WorkflowBasePicker), {
                modelValue: internalValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value = $event),
                label: "Workflow",
                workflowTypeGuid: unref(internalTypeGuid),
                multiple: false,
                disabled: __props.disabled,
                showBlankItem: "",
                displayStyle: unref(PickerDisplayStyle).Condensed
              }, null, 8, ["modelValue", "workflowTypeGuid", "disabled", "displayStyle"])]),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/workflowPicker.obs";

    })
  };
}));
//# sourceMappingURL=workflowPicker.obs.js.map
