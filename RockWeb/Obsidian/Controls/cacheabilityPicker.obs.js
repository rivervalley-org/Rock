System.register(['vue', '@Obsidian/Controls/radioButtonList', './timeIntervalPicker.obs', '@Obsidian/Utility/numberUtils', '@Obsidian/Enums/Controls/rockCacheabilityType', '@Obsidian/Enums/Core/timeIntervalUnit'], (function (exports) {
  'use strict';
  var defineComponent, computed, openBlock, createElementBlock, Fragment, createVNode, unref, isRef, createBlock, createCommentVNode, RadioButtonList, TimeIntervalPicker, toNumber, RockCacheabilityType, TimeIntervalUnit;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      isRef = module.isRef;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      RadioButtonList = module["default"];
    }, function (module) {
      TimeIntervalPicker = module["default"];
    }, function (module) {
      toNumber = module.toNumber;
    }, function (module) {
      RockCacheabilityType = module.RockCacheabilityType;
    }, function (module) {
      TimeIntervalUnit = module.TimeIntervalUnit;
    }],
    execute: (function () {

      var _hoisted_1 = {
        key: 0,
        class: "row"
      };
      var script = exports('default', defineComponent({
        name: 'cacheabilityPicker',
        props: {
          modelValue: {
            type: Object,
            required: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          function defaultValue() {
            return {
              rockCacheabilityType: 0,
              maxAge: {
                unit: TimeIntervalUnit.Minutes,
                value: null
              },
              sharedMaxAge: {
                unit: TimeIntervalUnit.Minutes,
                value: null
              }
            };
          }
          var internalValue = computed({
            get() {
              var _props$modelValue;
              return (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : defaultValue();
            },
            set(newValue) {
              emit("update:modelValue", newValue);
            }
          });
          var cacheTypeOptions = [{
            text: "Public",
            value: RockCacheabilityType.Public.toString()
          }, {
            text: "Private",
            value: RockCacheabilityType.Private.toString()
          }, {
            text: "No-Cache",
            value: RockCacheabilityType.NoCache.toString()
          }, {
            text: "No-Store",
            value: RockCacheabilityType.NoStore.toString()
          }];
          var cacheType = computed({
            get() {
              return internalValue.value.rockCacheabilityType.toString();
            },
            set(newValue) {
              internalValue.value = {
                rockCacheabilityType: toNumber(newValue),
                maxAge: internalValue.value.maxAge,
                sharedMaxAge: internalValue.value.sharedMaxAge
              };
            }
          });
          var maxAge = computed({
            get() {
              return internalValue.value.maxAge;
            },
            set(newValue) {
              internalValue.value = {
                rockCacheabilityType: internalValue.value.rockCacheabilityType,
                maxAge: newValue,
                sharedMaxAge: internalValue.value.sharedMaxAge
              };
            }
          });
          var sharedMaxAge = computed({
            get() {
              return internalValue.value.sharedMaxAge;
            },
            set(newValue) {
              internalValue.value = {
                rockCacheabilityType: internalValue.value.rockCacheabilityType,
                maxAge: internalValue.value.maxAge,
                sharedMaxAge: newValue
              };
            }
          });
          var shouldAskForMaxAge = computed(() => {
            var cacheType = internalValue.value.rockCacheabilityType;
            return cacheType == RockCacheabilityType.Public || cacheType == RockCacheabilityType.Private;
          });
          var shouldAskForSharedMaxAge = computed(() => internalValue.value.rockCacheabilityType == RockCacheabilityType.Public);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(RadioButtonList), {
              modelValue: unref(cacheType),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(cacheType) ? cacheType.value = $event : null),
              items: cacheTypeOptions,
              horizontal: "",
              label: "Cacheability Type",
              help: "This determines how the item will be treated in cache.<br /><br>Public - This item can be cached on the browser or any other shared network cache like a CDN.<br /><br>Private - This item can only be cached in the browser.<br /><br>No-Cache - The item will be checked on every load, but if it is deemed to not have changed since the last load it will use a local copy.<br /><br>No-Store - This item will never be stored by the local browser.This is used for sensitive files like check images."
            }, null, 8, ["modelValue"]), unref(shouldAskForMaxAge) || unref(shouldAskForSharedMaxAge) ? (openBlock(), createElementBlock("div", _hoisted_1, [unref(shouldAskForMaxAge) ? (openBlock(), createBlock(unref(TimeIntervalPicker), {
              key: 0,
              formGroupClasses: "col-md-6",
              modelValue: unref(maxAge),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(maxAge) ? maxAge.value = $event : null),
              label: "Max Age",
              help: "The maximum amount of time that the item will be cached."
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), unref(shouldAskForSharedMaxAge) ? (openBlock(), createBlock(unref(TimeIntervalPicker), {
              key: 1,
              formGroupClasses: "col-md-6",
              modelValue: unref(sharedMaxAge),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => isRef(sharedMaxAge) ? sharedMaxAge.value = $event : null),
              label: "Max Age",
              help: "The maximum amount of time the item will be cached in a shared cache (e.g. CDN). If not provided then the Max Age is typically used."
            }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/cacheabilityPicker.obs";

    })
  };
}));
//# sourceMappingURL=cacheabilityPicker.obs.js.map
