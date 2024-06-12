System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/Utility/treeItemProviders', '@Obsidian/Utility/component', './treeItemPicker.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, withDirectives, vModelCheckbox, useSecurityGrantToken, GroupTreeItemProvider, updateRefValue, TreeItemPicker;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      normalizeClass = module.normalizeClass;
      withDirectives = module.withDirectives;
      vModelCheckbox = module.vModelCheckbox;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      GroupTreeItemProvider = module.GroupTreeItemProvider;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      TreeItemPicker = module["default"];
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "rock-checkbox-icon"
      };
      var _hoisted_2 = createTextVNode(" Show Inactive ");
      var _hoisted_3 = {
        style: {
          "display": "none"
        }
      };
      var script = exports('default', defineComponent({
        name: 'groupPicker',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          multiple: {
            type: Boolean,
            default: false
          },
          rootGroupGuid: {
            type: String,
            default: null
          },
          includedGroupTypeGuids: {
            type: Object,
            default: []
          },
          limitToSchedulingEnabled: {
            type: Object,
            default: false
          },
          limitToRSVPEnabled: {
            type: Object,
            default: false
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : null);
          var securityGrantToken = useSecurityGrantToken();
          var includeInactiveGroups = ref(false);
          var itemProvider = ref();
          function refreshItemProvider() {
            var provider = new GroupTreeItemProvider();
            provider.rootGroupGuid = props.rootGroupGuid;
            provider.includedGroupTypeGuids = props.includedGroupTypeGuids;
            provider.includeInactiveGroups = includeInactiveGroups.value;
            provider.limitToSchedulingEnabled = props.limitToSchedulingEnabled;
            provider.limitToRSVPEnabled = props.limitToRSVPEnabled;
            provider.securityGrantToken = securityGrantToken.value;
            itemProvider.value = provider;
          }
          refreshItemProvider();
          watch(() => [props.rootGroupGuid, includeInactiveGroups.value, props.includedGroupTypeGuids, props.limitToRSVPEnabled, props.limitToSchedulingEnabled], refreshItemProvider);
          watch(securityGrantToken, () => {
            if (itemProvider.value) {
              itemProvider.value.securityGrantToken = securityGrantToken.value;
            }
          });
          watch(internalValue, () => {
            emit("update:modelValue", internalValue.value);
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue2;
            updateRefValue(internalValue, (_props$modelValue2 = props.modelValue) !== null && _props$modelValue2 !== void 0 ? _props$modelValue2 : null);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(TreeItemPicker), {
              modelValue: internalValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => internalValue.value = $event),
              formGroupClasses: "group-item-picker",
              iconCssClass: "fa fa-users",
              provider: itemProvider.value,
              multiple: __props.multiple
            }, {
              customPickerActions: withCtx(() => [createElementVNode("label", _hoisted_1, [createElementVNode("i", {
                class: normalizeClass(['fa', includeInactiveGroups.value ? 'fa-check-square-o' : 'fa-square-o'])
              }, null, 2), _hoisted_2, createElementVNode("span", _hoisted_3, [withDirectives(createElementVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => includeInactiveGroups.value = $event)
              }, null, 512), [[vModelCheckbox, includeInactiveGroups.value]])])])]),
              _: 1
            }, 8, ["modelValue", "provider", "multiple"]);
          };
        }
      }));

      script.__file = "Framework/Controls/groupPicker.obs";

    })
  };
}));
//# sourceMappingURL=groupPicker.obs.js.map
