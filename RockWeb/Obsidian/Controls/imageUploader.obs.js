System.register(['vue', './notificationBox.obs', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Utility/http', './rockFormField.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, createTextVNode, defineComponent, ref, computed, watch, openBlock, createBlock, unref, withCtx, toDisplayString, createCommentVNode, normalizeStyle, createElementBlock, withModifiers, NotificationBox, BinaryFiletype, uploadBinaryFile, RockFormField, toGuidOrNull;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      normalizeStyle = module.normalizeStyle;
      createElementBlock = module.createElementBlock;
      withModifiers = module.withModifiers;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      uploadBinaryFile = module.uploadBinaryFile;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
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
        class: "control-wrapper"
      };
      var _hoisted_2 = createElementVNode("strong", null, [createElementVNode("i", {
        class: "fa fa-exclamation-triangle"
      }), createTextVNode(" Warning ")], -1);
      var _hoisted_3 = ["id"];
      var _hoisted_4 = {
        class: "imageupload-thumbnail",
        style: {
          "width": "100px",
          "height": "100px"
        }
      };
      var _hoisted_5 = ["href"];
      var _hoisted_6 = {
        key: 2,
        class: "imageupload-remove"
      };
      var _hoisted_7 = ["onClick"];
      var _hoisted_8 = createElementVNode("i", {
        class: "fa fa-times"
      }, null, -1);
      var _hoisted_9 = [_hoisted_8];
      var _hoisted_10 = {
        key: 0,
        class: "upload-progress"
      };
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-refresh fa-spin fa-3x"
      }, null, -1);
      var _hoisted_12 = {
        class: "imageupload-dropzone"
      };
      var script = exports('default', defineComponent({
        name: 'imageUploader',
        props: {
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
          uploadAsTemporary: {
            type: Boolean,
            default: true
          },
          uploadButtonText: {
            type: String,
            default: "Upload"
          },
          showDeleteButton: {
            type: Boolean,
            default: true
          }
        },
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue, _props$modelValue$tex, _props$modelValue2;
          var emit = _ref.emit;
          var props = __props;
          var fileGuid = ref(toGuidOrNull((_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value));
          var fileName = ref((_props$modelValue$tex = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "");
          var isUploading = ref(false);
          var uploadProgressText = ref("");
          var uploadErrorMessage = ref("");
          var fileInputElement = ref(null);
          var dropZoneElement = ref(null);
          var fileUrl = computed(() => {
            if (fileGuid.value) {
              return "/GetFile.ashx?guid=".concat(fileGuid.value);
            }
            return null;
          });
          var thumbnailStyle = computed(() => {
            var imageUrl = fileGuid.value ? "/GetImage.ashx?guid=".concat(fileGuid.value, "&width=500") : "/Assets/Images/no-picture.svg";
            return {
              backgroundImage: "url('".concat(imageUrl, "')"),
              backgroundSize: "cover",
              backgroundPosition: "50%"
            };
          });
          var isDeleteVisible = computed(() => {
            return props.showDeleteButton && !!fileGuid.value;
          });
          function uploadFile(_x) {
            return _uploadFile.apply(this, arguments);
          }
          function _uploadFile() {
            _uploadFile = _asyncToGenerator(function* (file) {
              isUploading.value = true;
              uploadProgressText.value = "0%";
              uploadErrorMessage.value = "";
              try {
                var _result$text;
                var result = yield uploadBinaryFile(file, props.binaryFileTypeGuid || BinaryFiletype.Default, {
                  baseUrl: "/ImageUploader.ashx",
                  isTemporary: props.uploadAsTemporary,
                  progress: (_progress, total, percent) => {
                    uploadProgressText.value = "".concat(percent, "%");
                  }
                });
                fileGuid.value = toGuidOrNull(result.value);
                fileName.value = (_result$text = result.text) !== null && _result$text !== void 0 ? _result$text : "";
              } catch (e) {
                uploadErrorMessage.value = String(e);
              } finally {
                isUploading.value = false;
              }
            });
            return _uploadFile.apply(this, arguments);
          }
          function onSelectFileClick() {
            if (!isUploading.value) {
              var _fileInputElement$val;
              (_fileInputElement$val = fileInputElement.value) === null || _fileInputElement$val === void 0 ? void 0 : _fileInputElement$val.click();
            }
          }
          function onRemoveFileClick() {
            fileGuid.value = null;
            fileName.value = "";
          }
          function onFileChange() {
            if (isUploading.value) {
              return;
            }
            if (fileInputElement.value && fileInputElement.value.files && fileInputElement.value.files.length > 0) {
              uploadFile(fileInputElement.value.files[0]);
            }
          }
          function onFileRemove() {
            if (isUploading.value) {
              return;
            }
            fileGuid.value = null;
            fileName.value = "";
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
                  uploadFile(event.dataTransfer.files[0]);
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
            var newValue = undefined;
            if (fileGuid.value) {
              newValue = {
                value: fileGuid.value,
                text: fileName.value
              };
            }
            emit("update:modelValue", newValue);
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), {
              modelValue: fileGuid.value,
              formGroupClasses: "image-uploader",
              name: "imageuploader"
            }, {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                  _ref2.field;
                return [createElementVNode("div", _hoisted_1, [uploadErrorMessage.value ? (openBlock(), createBlock(unref(NotificationBox), {
                  key: 0,
                  alertType: "warning"
                }, {
                  default: withCtx(() => [_hoisted_2, createElementVNode("span", null, toDisplayString(uploadErrorMessage.value), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), createElementVNode("div", {
                  ref_key: "dropZoneElement",
                  ref: dropZoneElement,
                  id: uniqueId,
                  class: "imageupload-group",
                  style: normalizeStyle({
                    pointerEvents: __props.disabled ? 'none' : undefined
                  }),
                  onClick: onSelectFileClick
                }, [createElementVNode("div", _hoisted_4, [unref(fileUrl) ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: unref(fileUrl),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                }, [createElementVNode("div", {
                  class: "imageupload-thumbnail-image",
                  style: normalizeStyle(unref(thumbnailStyle))
                }, null, 4)], 8, _hoisted_5)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "imageupload-thumbnail-image",
                  style: normalizeStyle(unref(thumbnailStyle))
                }, null, 4)), unref(isDeleteVisible) ? (openBlock(), createElementBlock("div", _hoisted_6, [fileGuid.value ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: "#",
                  class: "remove-file",
                  title: "Remove File",
                  onClick: withModifiers(onRemoveFileClick, ["prevent", "stop"])
                }, _hoisted_9, 8, _hoisted_7)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true)]), isUploading.value ? (openBlock(), createElementBlock("div", _hoisted_10, [_hoisted_11, createElementVNode("div", null, toDisplayString(uploadProgressText.value), 1)])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_12, [createElementVNode("span", null, toDisplayString(__props.uploadButtonText), 1), createElementVNode("input", {
                  ref_key: "fileInputElement",
                  ref: fileInputElement,
                  type: "file",
                  style: {
                    "display": "none"
                  },
                  onChange: onFileChange,
                  onRemove: onFileRemove
                }, null, 544)])], 12, _hoisted_3)])];
              }),
              _: 1
            }, 8, ["modelValue"]);
          };
        }
      }));

      script.__file = "Framework/Controls/imageUploader.obs";

    })
  };
}));
//# sourceMappingURL=imageUploader.obs.js.map
