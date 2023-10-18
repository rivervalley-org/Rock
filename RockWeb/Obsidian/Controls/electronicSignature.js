System.register(['vue', './rockButton', './textBox', './emailBox', '@Obsidian/Utility/page', '@Obsidian/Utility/component', './rockForm', '@Obsidian/PageState'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, RockButton, TextBox, EmailBox, loadJavaScriptAsync, updateRefValue, RockForm, useStore;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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

      var signaturePadPromise = loadJavaScriptAsync("/Scripts/signature_pad/signature_pad.umd.min.js", () => !!window.SignaturePad);
      var electronicSignature = exports('default', defineComponent({
        name: "ElectronicSignature",
        components: {
          RockButton,
          RockForm,
          TextBox,
          EmailBox
        },
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
        emits: {
          "update:modelValue": _data => true,
          "signed": () => true
        },
        setup(props, _ref) {
          var _props$modelValue$sig, _props$modelValue, _props$modelValue$sig2, _props$modelValue2, _ref2, _props$modelValue$sig3, _props$modelValue3, _store$state$currentP;
          var emit = _ref.emit;
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
          return {
            isSigning,
            onClearClick,
            onSubmit,
            signatureCanvas,
            signatureCanvasContainer,
            signedByEmail,
            signedByEmailLabel,
            signedByName,
            signatureData
          };
        },
        template: "\n<div>\n    <div v-if=\"isSigning\" class=\"signature-entry\">\n        <RockForm @submit=\"onSubmit\">\n            <div v-if=\"isDrawn\" class=\"signature-entry-drawn\">\n                <div v-show=\"false\">\n                    <TextBox :modelValue=\"signatureData\" label=\"Signature\" rules=\"required\" />\n                </div>\n\n                <span class=\"signature-entry-instructions text-muted small\">Use mouse or finger to sign below.</span>\n\n                <div ref=\"signatureCanvasContainer\" class=\"signature-entry-drawn-container position-relative d-flex align-items-end\">\n                    <div class=\"signature-entry-canvas-col\">\n                        <canvas ref=\"signatureCanvas\" class=\"e-signature-pad\" style=\"border-bottom: 1px solid #c4c4c4;\"></canvas>\n                    </div>\n\n                    <div class=\"signature-entry-clear-col\">\n                        <a class=\"btn btn-link p-1 p-md-2 text-color\" title=\"Clear Signature\" @click.prevent=\"onClearClick\"><i class=\"fa fa-2x fa-undo\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div v-else class=\"signature-entry-typed\">\n                <TextBox v-model=\"signedByName\"\n                    label=\"Type Name\"\n                    rules=\"required\" />\n            </div>\n\n            <div class=\"signature-entry-agreement\">\n                By clicking the sign button below, I agree to the above document and understand this is a legal representation of my signature.\n            </div>\n\n            <div class=\"text-right\">\n                <RockButton type=\"submit\" btnType=\"primary\" btnSize=\"xs\">Sign</RockButton>\n            </div>\n        </RockForm>\n    </div>\n\n    <div v-else class=\"signature-entry-complete\">\n        <RockForm @submit=\"onSubmit\">\n            <TextBox v-if=\"isDrawn\"\n                v-model=\"signedByName\"\n                label=\"Please enter your legal name\"\n                rules=\"required\" />\n\n            <EmailBox v-model=\"signedByEmail\"\n                :label=\"signedByEmailLabel\"\n                rules=\"required\" />\n\n            <div class=\"text-right\">\n                <RockButton type=\"submit\" btnType=\"primary\" btnSize=\"xs\">Complete</RockButton>\n            </div>\n        </RockForm>\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=electronicSignature.js.map
