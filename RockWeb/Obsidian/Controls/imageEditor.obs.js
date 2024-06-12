System.register(['vue', './notificationBox.obs', './modal.obs', './rockButton.obs', './rockFormField.obs', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Utility/http', '@Obsidian/Enums/Controls/btnType', '@Obsidian/Utility/component', '@Obsidian/Libs/cropper', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, Fragment, createVNode, unref, mergeProps, withCtx, createBlock, toDisplayString, createCommentVNode, withModifiers, withKeys, normalizeStyle, NotificationBox, Modal, RockButton, RockFormField, BinaryFiletype, uploadBinaryFile, BtnType, useStandardRockFormFieldProps, standardRockFormFieldProps, Cropper, toGuidOrNull;
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
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withModifiers = module.withModifiers;
      withKeys = module.withKeys;
      normalizeStyle = module.normalizeStyle;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      uploadBinaryFile = module.uploadBinaryFile;
    }, function (module) {
      BtnType = module.BtnType;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      Cropper = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
    }],
    execute: (function () {

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
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
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var _hoisted_1 = {
        class: "control-wrapper"
      };
      var _hoisted_2 = createElementVNode("strong", null, [createElementVNode("i", {
        class: "fa fa-exclamation-triangle"
      }), createTextVNode(" Warning ")], -1);
      var _hoisted_3 = ["id", "onClick", "onKeypress", "tabindex"];
      var _hoisted_4 = {
        class: "image-editor-photo"
      };
      var _hoisted_5 = {
        key: 0,
        class: "text-bold text-center p-3",
        style: {
          "position": "absolute",
          "top": "0",
          "right": "0",
          "bottom": "0",
          "left": "0",
          "background": "rgba(255, 255, 255, .75)"
        }
      };
      var _hoisted_6 = createElementVNode("div", {
        class: "js-upload-progress"
      }, [createElementVNode("i", {
        class: "fa fa-refresh fa-3x fa-spin"
      })], -1);
      var _hoisted_7 = createElementVNode("span", {
        style: {
          "opacity": "0.75"
        }
      }, "Uploading...", -1);
      var _hoisted_8 = [_hoisted_6, _hoisted_7];
      var _hoisted_9 = {
        class: "options"
      };
      var _hoisted_10 = ["onClick"];
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-pencil",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_12 = [_hoisted_11];
      var _hoisted_13 = ["onClick"];
      var _hoisted_14 = createElementVNode("i", {
        class: "fa fa-times",
        "aria-hidden": ""
      }, null, -1);
      var _hoisted_15 = [_hoisted_14];
      var _hoisted_16 = {
        class: "image-editor-fileinput"
      };
      var _hoisted_17 = {
        style: {
          "max-width": "480px",
          "max-height": "480px",
          "margin": "auto",
          "aspect-ratio": "1"
        }
      };
      var _hoisted_18 = ["src"];
      var _hoisted_19 = createTextVNode("Crop");
      var script = exports('default', defineComponent({
        name: 'imageEditor',
        props: _objectSpread2({
          modelValue: {
            type: Object,
            required: false
          },
          binaryFileTypeGuid: {
            type: String,
            default: BinaryFiletype.Default
          },
          disabled: {
            type: Boolean,
            default: false
          },
          maxImageHeight: {
            type: Number,
            default: 0
          },
          maxImageWidth: {
            type: Number,
            default: 0
          },
          aspectRatio: {
            type: Number,
            default: 1
          },
          noPictureUrl: {
            type: String,
            default: "/Assets/Images/person-no-photo-unknown.svg"
          },
          hideDeleteButton: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue", "cropped"],
        setup(__props, _ref) {
          var _props$modelValue, _props$modelValue$tex, _props$modelValue2;
          var emit = _ref.emit;
          var props = __props;
          var imgRef = ref(null);
          var cropper;
          var fileGuid = ref(toGuidOrNull((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value));
          var fileName = ref((_props$modelValue$tex = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "");
          var isUploading = ref(false);
          var uploadProgressText = ref("");
          var errorMessage = ref("");
          var fileInputElement = ref(null);
          var dropZoneElement = ref(null);
          var standardFieldProps = useStandardRockFormFieldProps(props);
          var showModal = ref(false);
          var selectedImageFileName = ref("");
          var selectedImageUrl = ref(null);
          var croppedImageUrl = ref(null);
          var thumbnailUrl = computed(() => {
            if (fileGuid.value) {
              return "/GetImage.ashx?guid=".concat(fileGuid.value, "&width=150");
            }
            if (croppedImageUrl.value) {
              return croppedImageUrl.value;
            }
            return props.noPictureUrl;
          });
          var thumbnailStyle = computed(() => {
            return {
              backgroundImage: "url('".concat(thumbnailUrl.value, "')"),
              backgroundSize: "cover",
              backgroundPosition: "50%"
            };
          });
          var isDeleteVisible = computed(() => {
            return !props.hideDeleteButton && !!(fileGuid.value || selectedImageUrl.value);
          });
          function showCropperForSelectedFile(_x) {
            return _showCropperForSelectedFile.apply(this, arguments);
          }
          function _showCropperForSelectedFile() {
            _showCropperForSelectedFile = _asyncToGenerator(function* (file) {
              errorMessage.value = "";
              selectedImageUrl.value = "";
              var url = yield getUrlForFile(file);
              if (!url) {
                errorMessage.value = "Error processing the file. File type may not be supported.";
              }
              selectedImageUrl.value = url;
              selectedImageFileName.value = file.name;
              showModal.value = true;
            });
            return _showCropperForSelectedFile.apply(this, arguments);
          }
          function getUrlForFile(_x2) {
            return _getUrlForFile.apply(this, arguments);
          }
          function _getUrlForFile() {
            _getUrlForFile = _asyncToGenerator(function* (file) {
              return new Promise(res => {
                if (URL) {
                  res(URL.createObjectURL(file));
                } else if (FileReader) {
                  var reader = new FileReader();
                  reader.onload = () => {
                    var _reader$result$toStri, _reader$result;
                    return res((_reader$result$toStri = (_reader$result = reader.result) === null || _reader$result === void 0 ? void 0 : _reader$result.toString()) !== null && _reader$result$toStri !== void 0 ? _reader$result$toStri : "");
                  };
                  reader.onerror = () => res("");
                  reader.readAsDataURL(file);
                }
              });
            });
            return _getUrlForFile.apply(this, arguments);
          }
          function uploadFile(_x3) {
            return _uploadFile.apply(this, arguments);
          }
          function _uploadFile() {
            _uploadFile = _asyncToGenerator(function* (file) {
              isUploading.value = true;
              uploadProgressText.value = "0%";
              errorMessage.value = "";
              var fileToUpload = new File([file], selectedImageFileName.value, {
                type: file.type
              });
              try {
                var _result$text;
                var result = yield uploadBinaryFile(fileToUpload, props.binaryFileTypeGuid || BinaryFiletype.Default, {
                  baseUrl: "/ImageUploader.ashx",
                  isTemporary: false,
                  progress: (_progress, total, percent) => {
                    uploadProgressText.value = "".concat(percent, "%");
                  }
                });
                fileGuid.value = toGuidOrNull(result.value);
                fileName.value = (_result$text = result.text) !== null && _result$text !== void 0 ? _result$text : "";
              } catch (e) {
                errorMessage.value = String(e);
              } finally {
                isUploading.value = false;
              }
            });
            return _uploadFile.apply(this, arguments);
          }
          function onSelectFileClick(e) {
            if (!isUploading.value) {
              var _fileInputElement$val;
              (_fileInputElement$val = fileInputElement.value) === null || _fileInputElement$val === void 0 ? void 0 : _fileInputElement$val.click();
            }
          }
          function onRemoveFileClick() {
            selectedImageUrl.value = "";
            errorMessage.value = "";
            fileGuid.value = null;
            fileName.value = "";
          }
          function onFileChange() {
            if (isUploading.value) {
              return;
            }
            if (fileInputElement.value && fileInputElement.value.files && fileInputElement.value.files.length > 0) {
              showCropperForSelectedFile(fileInputElement.value.files[0]);
              fileInputElement.value.value = "";
            }
          }
          function onFileRemove() {
            if (isUploading.value) {
              return;
            }
            fileGuid.value = null;
            fileName.value = "";
          }
          function cropAndUpload() {
            var _cropper$getData, _cropper, _cropper2;
            var _ref2 = (_cropper$getData = (_cropper = cropper) === null || _cropper === void 0 ? void 0 : _cropper.getData(true)) !== null && _cropper$getData !== void 0 ? _cropper$getData : {
                width: 150,
                height: 150
              },
              width = _ref2.width,
              height = _ref2.height;
            if (props.maxImageWidth && width > props.maxImageWidth) {
              var ratio = props.maxImageWidth / width;
              width = width * ratio;
              height = height * ratio;
            }
            if (props.maxImageHeight && height > props.maxImageHeight) {
              var _ratio = props.maxImageHeight / height;
              width = width * _ratio;
              height = height * _ratio;
            }
            var canvas = (_cropper2 = cropper) === null || _cropper2 === void 0 ? void 0 : _cropper2.getCroppedCanvas({
              width,
              height
            });
            canvas === null || canvas === void 0 ? void 0 : canvas.toBlob(function () {
              var _ref3 = _asyncToGenerator(function* (blob) {
                if (blob) {
                  croppedImageUrl.value = URL.createObjectURL(blob);
                  emit("cropped", croppedImageUrl.value);
                  showModal.value = false;
                  yield uploadFile(blob);
                  croppedImageUrl.value = "";
                  URL.revokeObjectURL(croppedImageUrl.value);
                  selectedImageUrl.value = "";
                  selectedImageFileName.value = "";
                }
              });
              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());
          }
          function cancelCrop() {
            selectedImageUrl.value = "";
            selectedImageFileName.value = "";
          }
          watch(dropZoneElement, () => {
            if (dropZoneElement.value) {
              dropZoneElement.value.addEventListener("dragover", event => {
                if (!isUploading.value && event.dataTransfer) {
                  event.stopPropagation();
                  event.preventDefault();
                  if (event.dataTransfer.items.length === 1 && event.dataTransfer.items[0].kind === "file") {
                    event.dataTransfer.dropEffect = "copy";
                  } else {
                    event.dataTransfer.dropEffect = "none";
                  }
                }
              });
              dropZoneElement.value.addEventListener("drop", event => {
                if (!isUploading.value && event.dataTransfer && event.dataTransfer.files.length > 0) {
                  event.stopPropagation();
                  event.preventDefault();
                  showCropperForSelectedFile(event.dataTransfer.files[0]);
                }
              });
            }
          });
          watch(() => props.modelValue, () => {
            var _props$modelValue3, _props$modelValue$tex2, _props$modelValue4;
            fileGuid.value = toGuidOrNull((_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.value);
            fileName.value = (_props$modelValue$tex2 = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.text) !== null && _props$modelValue$tex2 !== void 0 ? _props$modelValue$tex2 : "";
          });
          watch([fileGuid, fileName], () => {
            var newValue = null;
            if (fileGuid.value) {
              newValue = {
                value: fileGuid.value,
                text: fileName.value
              };
            }
            emit("update:modelValue", newValue);
          });
          watch(imgRef, () => {
            if (imgRef.value) {
              cropper = new Cropper(imgRef.value, {
                aspectRatio: props.aspectRatio,
                viewMode: 1
              });
            } else {
              var _cropper3;
              (_cropper3 = cropper) === null || _cropper3 === void 0 ? void 0 : _cropper3.destroy();
              cropper = null;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(RockFormField), mergeProps(unref(standardFieldProps), {
              modelValue: fileGuid.value,
              formGroupClasses: "image-uploader",
              name: "imageuploader"
            }), {
              default: withCtx(_ref4 => {
                var uniqueId = _ref4.uniqueId,
                  field = _ref4.field;
                return [createElementVNode("div", _hoisted_1, [errorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "warning"
                }, {
                  default: withCtx(() => [_hoisted_2, createElementVNode("span", null, toDisplayString(errorMessage.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), createElementVNode("div", mergeProps({
                  ref_key: "dropZoneElement",
                  ref: dropZoneElement,
                  id: uniqueId,
                  class: "image-editor-group imageupload-group",
                  onClick: withModifiers(onSelectFileClick, ["prevent"]),
                  onKeypress: [withKeys(withModifiers(onSelectFileClick, ["prevent", "stop"]), ["enter"]), withKeys(withModifiers(onSelectFileClick, ["prevent", "stop"]), ["space"])],
                  role: "button",
                  tabindex: __props.disabled ? -1 : 0,
                  "aria-label": "Select an Image File",
                  style: {
                    pointerEvents: __props.disabled ? 'none' : undefined
                  }
                }, field), [createElementVNode("div", _hoisted_4, [isUploading.value ? (openBlock(), createElementBlock("div", _hoisted_5, _hoisted_8)) : createCommentVNode("v-if", true), createElementVNode("div", {
                  class: "image-container",
                  style: normalizeStyle(unref(thumbnailStyle))
                }, null, 4), createElementVNode("div", _hoisted_9, [createElementVNode("a", {
                  onClick: withModifiers(onSelectFileClick, ["prevent", "stop"]),
                  "aria-label": "Select an Image File",
                  title: "Select an Image File"
                }, _hoisted_12, 8, _hoisted_10), unref(isDeleteVisible) ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  onClick: withModifiers(onRemoveFileClick, ["prevent", "stop"]),
                  "aria-label": "Clear Image",
                  title: "Clear Image"
                }, _hoisted_15, 8, _hoisted_13)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_16, [createElementVNode("input", {
                  ref_key: "fileInputElement",
                  ref: fileInputElement,
                  type: "file",
                  style: {
                    "display": "none"
                  },
                  onChange: onFileChange,
                  onRemove: onFileRemove,
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, null, 544)])])], 16, _hoisted_3)])];
              }),
              _: 1
            }, 16, ["modelValue"]), createVNode(unref(Modal), {
              modelValue: showModal.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => showModal.value = $event),
              title: "Crop Image",
              onClose: cancelCrop
            }, {
              customButtons: withCtx(() => [createVNode(unref(RockButton), {
                type: "button",
                btnType: unref(BtnType).Primary,
                onClick: withModifiers(cropAndUpload, ["prevent"])
              }, {
                default: withCtx(() => [_hoisted_19]),
                _: 1
              }, 8, ["btnType", "onClick"])]),
              default: withCtx(() => {
                var _selectedImageUrl$val;
                return [createElementVNode("div", _hoisted_17, [createElementVNode("img", {
                  src: (_selectedImageUrl$val = selectedImageUrl.value) !== null && _selectedImageUrl$val !== void 0 ? _selectedImageUrl$val : '',
                  ref_key: "imgRef",
                  ref: imgRef,
                  style: {
                    "display": "block",
                    "max-width": "100%"
                  }
                }, null, 8, _hoisted_18)])];
              }),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/imageEditor.obs";

    })
  };
}));
//# sourceMappingURL=imageEditor.obs.js.map
