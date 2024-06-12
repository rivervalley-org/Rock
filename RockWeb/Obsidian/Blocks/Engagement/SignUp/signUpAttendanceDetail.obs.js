System.register(['vue', '@Obsidian/Controls/checkBoxList.obs', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/Enums/Controls/alertType', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, computed, onMounted, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, toDisplayString, createCommentVNode, createElementVNode, createVNode, CheckboxList, NotificationBox, RockButton, RockForm, AlertType, BtnType, useConfigurationValues, useInvokeBlockAction, useReloadBlock, onConfigurationValuesChanged;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      onMounted = module.onMounted;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      unref = module.unref;
      createBlock = module.createBlock;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      createElementVNode = module.createElementVNode;
      createVNode = module.createVNode;
    }, function (module) {
      CheckboxList = module["default"];
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      AlertType = module.AlertType;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
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

      var _hoisted_1 = {
        key: 3
      };
      var _hoisted_2 = {
        class: "actions"
      };
      var _hoisted_3 = createTextVNode("Save");
      var script = exports('default', defineComponent({
        name: 'signUpAttendanceDetail',
        setup(__props) {
          var _config$attendees3;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var headerElement = ref(null);
          var selectedAttendees = ref([]);
          var errorMessage = ref("");
          var successMessage = ref("");
          var isSaving = ref(false);
          var blockErrorMessage = computed(() => {
            return config.errorMessage;
          });
          var attendees = computed(() => {
            var _config$attendees$map, _config$attendees;
            var listItemBag = (_config$attendees$map = (_config$attendees = config.attendees) === null || _config$attendees === void 0 ? void 0 : _config$attendees.map(a => ({
              text: a.name,
              value: a.personAliasId.toString()
            }))) !== null && _config$attendees$map !== void 0 ? _config$attendees$map : [];
            return listItemBag;
          });
          var shouldShowAttendanceForm = computed(() => {
            if (blockErrorMessage.value) {
              return false;
            }
            return !successMessage.value;
          });
          function onAttendeesUpdated() {
            var _config$attendees2;
            if (!((_config$attendees2 = config.attendees) !== null && _config$attendees2 !== void 0 && _config$attendees2.length)) {
              return;
            }
            config.attendees.forEach(a => a.didAttend = selectedAttendees.value.includes(a.personAliasId.toString()));
          }
          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }
          function _onSubmit() {
            _onSubmit = _asyncToGenerator(function* () {
              isSaving.value = true;
              errorMessage.value = "";
              successMessage.value = "";
              var bag = {
                attendees: config.attendees
              };
              var result = yield invokeBlockAction("SaveAttendance", {
                bag
              });
              isSaving.value = false;
              if (!result.isSuccess) {
                var _result$errorMessage;
                errorMessage.value = (_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error when trying to enter attendance.";
                return;
              }
              successMessage.value = "Successfully entered attendance.";
            });
            return _onSubmit.apply(this, arguments);
          }
          onConfigurationValuesChanged(reloadBlock);
          if ((_config$attendees3 = config.attendees) !== null && _config$attendees3 !== void 0 && _config$attendees3.length) {
            config.attendees.filter(a => a.didAttend).forEach(a => selectedAttendees.value.push(a.personAliasId.toString()));
          }
          onMounted(() => {
            if (headerElement.value && config.headerHtml) {
              headerElement.value.innerHTML = config.headerHtml;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 0,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 1,
              alertType: unref(AlertType).Warning
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), successMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
              key: 2,
              alertType: unref(AlertType).Success
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(successMessage.value), 1)]),
              _: 1
            }, 8, ["alertType"])) : createCommentVNode("v-if", true), unref(shouldShowAttendanceForm) ? (openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", {
              ref_key: "headerElement",
              ref: headerElement
            }, null, 512), createVNode(unref(RockForm), {
              onSubmit: onSubmit
            }, {
              default: withCtx(() => [createVNode(unref(CheckboxList), {
                modelValue: selectedAttendees.value,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => selectedAttendees.value = $event), onAttendeesUpdated],
                label: "Attendees",
                items: unref(attendees)
              }, null, 8, ["modelValue", "items"]), createElementVNode("div", _hoisted_2, [createVNode(unref(RockButton), {
                type: "submit",
                btnType: unref(BtnType).Primary,
                disabled: isSaving.value
              }, {
                default: withCtx(() => [_hoisted_3]),
                _: 1
              }, 8, ["btnType", "disabled"])])]),
              _: 1
            })])) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "src/Engagement/SignUp/signUpAttendanceDetail.obs";

    })
  };
}));
//# sourceMappingURL=signUpAttendanceDetail.obs.js.map
