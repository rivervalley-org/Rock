System.register(['vue', './rockButton.obs', './textBox.obs', './emailBox.obs', '@Obsidian/Utility/page', '@Obsidian/Utility/component', './rockForm.obs', '@Obsidian/PageState'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, createVNode, unref, withCtx, withDirectives, vShow, withModifiers, createBlock, createCommentVNode, RockButton, TextBox, EmailBox, loadJavaScriptAsync, updateRefValue, RockForm, useStore;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      vShow = module.vShow;
      withModifiers = module.withModifiers;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      EmailBox = module["default"];
    }, function (module) {
      loadJavaScriptAsync = module.loadJavaScriptAsync;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      useStore = module.useStore;
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
        key: 0,
        class: "signature-entry"
      };
      var _hoisted_2 = {
        key: 0,
        class: "signature-entry-drawn"
      };
      var _hoisted_3 = createElementVNode("span", {
        class: "signature-entry-instructions text-muted small"
      }, "Use mouse or finger to sign below.", -1);
      var _hoisted_4 = {
        class: "signature-entry-canvas-col"
      };
      var _hoisted_5 = {
        class: "signature-entry-clear-col"
      };
      var _hoisted_6 = ["onClick"];
      var _hoisted_7 = createElementVNode("i", {
        class: "fa fa-2x fa-undo"
      }, null, -1);
      var _hoisted_8 = [_hoisted_7];
      var _hoisted_9 = {
        key: 1,
        class: "signature-entry-typed"
      };
      var _hoisted_10 = createElementVNode("div", {
        class: "signature-entry-agreement"
      }, " By clicking the sign button below, I agree to the above document and understand this is a legal representation of my signature. ", -1);
      var _hoisted_11 = {
        class: "text-right"
      };
      var _hoisted_12 = createTextVNode("Sign");
      var _hoisted_13 = {
        key: 1,
        class: "signature-entry-complete"
      };
      var _hoisted_14 = {
        class: "text-right"
      };
      var _hoisted_15 = createTextVNode("Complete");
      var signaturePadPromise = loadJavaScriptAsync("/Scripts/signature_pad/signature_pad.umd.min.js", () => !!window.SignaturePad);
      var script = exports('default', defineComponent({
        name: 'electronicSignature',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          isDrawn: {
            type: Boolean,
            default: false
          },
          documentTerm: {
            type: String,
            default: "document"
          }
        },
        emits: ["update:modelValue", "signed"],
        setup(__props, _ref) {
          var _props$modelValue$sig, _props$modelValue, _props$modelValue$sig2, _props$modelValue2, _ref2, _props$modelValue$sig3, _props$modelValue3, _store$state$currentP;
          var emit = _ref.emit;
          var props = __props;
          var store = useStore();
          var signatureData = ref((_props$modelValue$sig = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.signatureData) !== null && _props$modelValue$sig !== void 0 ? _props$modelValue$sig : "");
          var signedByName = ref((_props$modelValue$sig2 = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.signedByName) !== null && _props$modelValue$sig2 !== void 0 ? _props$modelValue$sig2 : "");
          var signedByEmail = ref((_ref2 = (_props$modelValue$sig3 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.signedByEmail) !== null && _props$modelValue$sig3 !== void 0 ? _props$modelValue$sig3 : (_store$state$currentP = store.state.currentPerson) === null || _store$state$currentP === void 0 ? void 0 : _store$state$currentP.email) !== null && _ref2 !== void 0 ? _ref2 : "");
          var signatureCanvas = ref(null);
          var signatureCanvasContainer = ref(null);
          var isSigning = ref(true);
          var signaturePad = null;
          var signedByEmailLabel = computed(() => {
            return "Please enter an email address below where we can send a copy of the ".concat(props.documentTerm.toLowerCase(), " to.");
          });
          var resizeSignatureCanvas = () => {
            var _signatureCanvas$valu;
            if (signaturePad === null || signatureCanvas.value === null || signatureCanvasContainer.value === null) {
              return;
            }
            var containerWidth = signatureCanvasContainer.value.clientWidth;
            if (containerWidth === 0) {
              containerWidth = 400;
            }
            var ratio = 1;
            signatureCanvas.value.width = containerWidth * ratio;
            signatureCanvas.value.height = 100 * ratio;
            (_signatureCanvas$valu = signatureCanvas.value.getContext("2d")) === null || _signatureCanvas$valu === void 0 ? void 0 : _signatureCanvas$valu.scale(ratio, ratio);
            signaturePad.clear();
          };
          var onClearClick = () => {
            var _signaturePad;
            signatureData.value = "";
            (_signaturePad = signaturePad) === null || _signaturePad === void 0 ? void 0 : _signaturePad.clear();
          };
          var onSubmit = () => {
            if (isSigning.value) {
              isSigning.value = false;
              if (!signedByName.value && store.state.currentPerson) {
                var _store$state$currentP2;
                signedByName.value = (_store$state$currentP2 = store.state.currentPerson.fullName) !== null && _store$state$currentP2 !== void 0 ? _store$state$currentP2 : "";
              }
            } else {
              var newValue = {
                signatureData: signatureData.value,
                signedByName: signedByName.value,
                signedByEmail: signedByEmail.value
              };
              emit("update:modelValue", newValue);
              emit("signed");
            }
          };
          watch(() => props.modelValue, () => {
            var _props$modelValue4, _props$modelValue5, _props$modelValue6, _props$modelValue$sig4, _props$modelValue7, _props$modelValue$sig5, _props$modelValue8, _props$modelValue$sig6, _props$modelValue9;
            var isChanged = false;
            if (((_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.signatureData) === signatureData.value && ((_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.signedByName) === signedByName.value && ((_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.signedByEmail) === signedByName.value) {
              return;
            }
            isChanged || (isChanged = updateRefValue(signatureData, (_props$modelValue$sig4 = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.signatureData) !== null && _props$modelValue$sig4 !== void 0 ? _props$modelValue$sig4 : ""));
            isChanged || (isChanged = updateRefValue(signedByName, (_props$modelValue$sig5 = (_props$modelValue8 = props.modelValue) === null || _props$modelValue8 === void 0 ? void 0 : _props$modelValue8.signedByName) !== null && _props$modelValue$sig5 !== void 0 ? _props$modelValue$sig5 : ""));
            isChanged || (isChanged = updateRefValue(signedByEmail, (_props$modelValue$sig6 = (_props$modelValue9 = props.modelValue) === null || _props$modelValue9 === void 0 ? void 0 : _props$modelValue9.signedByEmail) !== null && _props$modelValue$sig6 !== void 0 ? _props$modelValue$sig6 : ""));
            if (isChanged) {
              isSigning.value = true;
              if (signaturePad !== null) {
                signaturePad.clear();
              }
            }
          });
          watch(signatureCanvas, _asyncToGenerator(function* () {
            if (signatureCanvas.value !== null) {
              yield signaturePadPromise;
              signaturePad = new SignaturePad(signatureCanvas.value, {
                backgroundColor: "white",
                penColor: "black"
              });
              signaturePad.addEventListener("endStroke", () => {
                var _signaturePad$toDataU, _signaturePad2;
                signatureData.value = (_signaturePad$toDataU = (_signaturePad2 = signaturePad) === null || _signaturePad2 === void 0 ? void 0 : _signaturePad2.toDataURL("image/png")) !== null && _signaturePad$toDataU !== void 0 ? _signaturePad$toDataU : "";
              });
              resizeSignatureCanvas();
            } else {
              var _signaturePad3;
              (_signaturePad3 = signaturePad) === null || _signaturePad3 === void 0 ? void 0 : _signaturePad3.off();
              signaturePad = null;
            }
          }));
          window.addEventListener("resize", () => resizeSignatureCanvas());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", null, [isSigning.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(RockForm), {
              onSubmit: onSubmit
            }, {
              default: withCtx(() => [__props.isDrawn ? (openBlock(), createElementBlock("div", _hoisted_2, [withDirectives(createElementVNode("div", null, [createVNode(unref(TextBox), {
                modelValue: signatureData.value,
                label: "Signature",
                rules: "required"
              }, null, 8, ["modelValue"])], 512), [[vShow, false]]), _hoisted_3, createElementVNode("div", {
                ref_key: "signatureCanvasContainer",
                ref: signatureCanvasContainer,
                class: "signature-entry-drawn-container position-relative d-flex align-items-end"
              }, [createElementVNode("div", _hoisted_4, [createElementVNode("canvas", {
                ref_key: "signatureCanvas",
                ref: signatureCanvas,
                class: "e-signature-pad",
                style: {
                  "border-bottom": "1px solid #c4c4c4"
                }
              }, null, 512)]), createElementVNode("div", _hoisted_5, [createElementVNode("a", {
                class: "btn btn-link p-1 p-md-2 text-color",
                title: "Clear Signature",
                onClick: withModifiers(onClearClick, ["prevent"])
              }, _hoisted_8, 8, _hoisted_6)])], 512)])) : (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(unref(TextBox), {
                modelValue: signedByName.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => signedByName.value = $event),
                label: "Type Name",
                rules: "required"
              }, null, 8, ["modelValue"])])), _hoisted_10, createElementVNode("div", _hoisted_11, [createVNode(unref(RockButton), {
                type: "submit",
                btnType: "primary",
                btnSize: "xs"
              }, {
                default: withCtx(() => [_hoisted_12]),
                _: 1
              })])]),
              _: 1
            })])) : (openBlock(), createElementBlock("div", _hoisted_13, [createVNode(unref(RockForm), {
              onSubmit: onSubmit
            }, {
              default: withCtx(() => [__props.isDrawn ? (openBlock(), createBlock(unref(TextBox), {
                key: 0,
                modelValue: signedByName.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => signedByName.value = $event),
                label: "Please enter your legal name",
                rules: "required"
              }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(EmailBox), {
                modelValue: signedByEmail.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => signedByEmail.value = $event),
                label: unref(signedByEmailLabel),
                rules: "required"
              }, null, 8, ["modelValue", "label"]), createElementVNode("div", _hoisted_14, [createVNode(unref(RockButton), {
                type: "submit",
                btnType: "primary",
                btnSize: "xs"
              }, {
                default: withCtx(() => [_hoisted_15]),
                _: 1
              })])]),
              _: 1
            })]))]);
          };
        }
      }));

      script.__file = "Framework/Controls/electronicSignature.obs";

    })
  };
}));
//# sourceMappingURL=electronicSignature.obs.js.map
