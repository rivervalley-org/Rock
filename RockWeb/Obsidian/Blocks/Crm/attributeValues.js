System.register(['vue', '@Obsidian/Templates/block', '@Obsidian/Controls/loading', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/PageState', '@Obsidian/Utility/block', '@Obsidian/Controls/javaScriptAnchor', '@Obsidian/Controls/rockForm', '@Obsidian/Controls/textBox', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Utility/linq'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, Block, Loading, NotificationBox, useStore, useConfigurationValues, useInvokeBlockAction, JavaScriptAnchor, RockForm, TextBox, RockButton, AttributeValuesContainer;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
    }, function (module) {
      Block = module["default"];
    }, function (module) {
      Loading = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      useStore = module.useStore;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      JavaScriptAnchor = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function () {}],
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

      var store = useStore();
      var attributeValues = exports('default', defineComponent({
        name: "Crm.AttributeValues",
        components: {
          NotificationBox,
          Block,
          Loading,
          JavaScriptAnchor,
          RockForm,
          TextBox,
          RockButton,
          AttributeValuesContainer
        },
        setup() {
          var configurationValues = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var attributes = ref(configurationValues.attributes);
          var attributeValues = ref(configurationValues.values);
          computed(() => {
            var _store$personContext;
            return ((_store$personContext = store.personContext) === null || _store$personContext === void 0 ? void 0 : _store$personContext.idKey) || null;
          });
          var isLoading = ref(false);
          var isEditMode = ref(false);
          var errorMessage = ref("");
          var goToViewMode = () => {
            isEditMode.value = false;
          };
          var goToEditMode = function () {
            var _ref = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetAttributeValuesForEdit");
              if (result.isSuccess) {
                isEditMode.value = true;
              }
            });
            return function goToEditMode() {
              return _ref.apply(this, arguments);
            };
          }();
          var doSave = function () {
            var _ref2 = _asyncToGenerator(function* () {
              isLoading.value = true;
              isLoading.value = false;
            });
            return function doSave() {
              return _ref2.apply(this, arguments);
            };
          }();
          return {
            blockTitle: computed(() => configurationValues.blockTitle),
            blockIconCssClass: computed(() => configurationValues.blockIconCssClass),
            isLoading,
            isEditMode,
            errorMessage,
            goToViewMode,
            goToEditMode,
            doSave,
            useAbbreviatedNames: configurationValues.useAbbreviatedNames,
            attributes,
            attributeValues
          };
        },
        template: "\n<Block :title=\"blockTitle\">\n    <template #headerActions>\n        <JavaScriptAnchor title=\"Order Attributes\" class=\"action btn-link edit\">\n            <i class=\"fa fa-bars\"></i>\n        </JavaScriptAnchor>\n        <JavaScriptAnchor title=\"Edit Attributes\" class=\"action btn-link edit\" @click=\"goToEditMode\">\n            <i class=\"fa fa-pencil\"></i>\n        </JavaScriptAnchor>\n    </template>\n\n    <template #default>\n        <Loading :isLoading=\"isLoading\">\n            <NotificationBox v-if=\"errorMessage\" alertType=\"warning\">{{ errorMessage }}</NotificationBox>\n            <AttributeValuesContainer v-if=\"!isEditMode\" :attributeValues=\"attributeValues\" :showEmptyValues=\"false\" :showCategoryLabel=\"false\" />\n            <RockForm v-else @submit=\"doSave\">\n                <AttributeValuesContainer v-model=\"attributeValues\" :attributes=\"attributes\" isEditMode :showAbbreviatedName=\"useAbbreviatedNames\" :showCategoryLabel=\"false\" />\n                <div class=\"actions\">\n                    <RockButton btnType=\"primary\" btnSize=\"xs\" type=\"submit\">Save</RockButton>\n                    <RockButton btnType=\"link\" btnSize=\"xs\" @click=\"goToViewMode\">Cancel</RockButton>\n                </div>\n            </RockForm>\n        </Loading>\n    </template>\n</Block>"
      }));

    })
  };
}));
//# sourceMappingURL=attributeValues.js.map
