System.register(['vue', './notificationBox.obs', '@Obsidian/SystemGuids/binaryFiletype', '@Obsidian/Utility/http', './rockFormField'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, NotificationBox, BinaryFiletype, uploadBinaryFile, RockFormField;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      NotificationBox = module["default"];
    }, function (module) {
      BinaryFiletype = module.BinaryFiletype;
    }, function (module) {
      uploadBinaryFile = module.uploadBinaryFile;
    }, function (module) {
      RockFormField = module["default"];
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

      var imageUploader = exports('default', defineComponent({
        name: "ImageUploader",
        components: {
          NotificationBox,
          RockFormField
        },
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
        setup(props, _ref) {
          var _props$modelValue$val, _props$modelValue, _props$modelValue$tex, _props$modelValue2;
          var emit = _ref.emit;
          var fileGuid = ref((_props$modelValue$val = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.value) !== null && _props$modelValue$val !== void 0 ? _props$modelValue$val : "");
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
          var uploadFile = function () {
            var _ref2 = _asyncToGenerator(function* (file) {
              isUploading.value = true;
              uploadProgressText.value = "0%";
              uploadErrorMessage.value = "";
              try {
                var _result$value, _result$text;
                var result = yield uploadBinaryFile(file, props.binaryFileTypeGuid || BinaryFiletype.Default, {
                  baseUrl: "/ImageUploader.ashx",
                  isTemporary: props.uploadAsTemporary,
                  progress: (_progress, total, percent) => {
                    uploadProgressText.value = "".concat(percent, "%");
                  }
                });
                fileGuid.value = (_result$value = result.value) !== null && _result$value !== void 0 ? _result$value : "";
                fileName.value = (_result$text = result.text) !== null && _result$text !== void 0 ? _result$text : "";
              } catch (e) {
                uploadErrorMessage.value = String(e);
              } finally {
                isUploading.value = false;
              }
            });
            return function uploadFile(_x) {
              return _ref2.apply(this, arguments);
            };
          }();
          var onSelectFileClick = () => {
            if (!isUploading.value) {
              var _fileInputElement$val;
              (_fileInputElement$val = fileInputElement.value) === null || _fileInputElement$val === void 0 ? void 0 : _fileInputElement$val.click();
            }
          };
          var onRemoveFileClick = () => {
            fileGuid.value = "";
            fileName.value = "";
          };
          var onFileChange = () => {
            if (isUploading.value) {
              return;
            }
            if (fileInputElement.value && fileInputElement.value.files && fileInputElement.value.files.length > 0) {
              uploadFile(fileInputElement.value.files[0]);
            }
          };
          var onFileRemove = () => {
            if (isUploading.value) {
              return;
            }
            fileGuid.value = "";
            fileName.value = "";
          };
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
            var _props$modelValue$val2, _props$modelValue3, _props$modelValue$tex2, _props$modelValue4;
            fileGuid.value = (_props$modelValue$val2 = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.value) !== null && _props$modelValue$val2 !== void 0 ? _props$modelValue$val2 : "";
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
          return {
            dropZoneElement,
            fileGuid,
            fileInputElement,
            fileName,
            fileUrl,
            isDeleteVisible,
            isUploading,
            onFileChange,
            onFileRemove,
            onRemoveFileClick,
            onSelectFileClick,
            thumbnailStyle,
            uploadErrorMessage,
            uploadProgressText
          };
        },
        template: "\n<RockFormField\n    :modelValue=\"fileGuid\"\n    formGroupClasses=\"image-uploader\"\n    name=\"imageuploader\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <NotificationBox v-if=\"uploadErrorMessage\" alertType=\"warning\">\n                <strong><i class=\"fa fa-exclamation-triangle\"></i> Warning </strong>\n                <span>{{ uploadErrorMessage }}</span>\n            </NotificationBox>\n\n            <div ref=\"dropZoneElement\" :id=\"uniqueId\" class=\"imageupload-group\" :style=\"{pointerEvents: disabled ? 'none' : null}\" @click=\"onSelectFileClick\">\n                <div class=\"imageupload-thumbnail\" style=\"width: 100px; height: 100px;\">\n                    <a v-if=\"fileUrl\" :class=\"thumbnailClass\" :href=\"fileUrl\" target=\"_blank\" rel=\"noopener noreferrer\" @click.stop>\n                        <div class=\"imageupload-thumbnail-image\" :style=\"thumbnailStyle\"></div>\n                    </a>\n                    <div v-else class=\"imageupload-thumbnail-image\" :style=\"thumbnailStyle\"></div>\n\n                    <div v-if=\"isDeleteVisible\" class=\"imageupload-remove\">\n                        <a v-if=\"fileGuid\" href=\"#\" class=\"remove-file\" title=\"Remove File\" @click.prevent.stop=\"onRemoveFileClick\">\n                            <i class=\"fa fa-times\"></i>\n                        </a>\n                    </div>\n                </div>\n\n                <div v-if=\"isUploading\" class=\"upload-progress\">\n                    <i class=\"fa fa-refresh fa-spin fa-3x\"></i>\n                    <div>{{ uploadProgressText }}</div>\n                </div>\n\n                <div class=\"imageupload-dropzone\">\n                    <span>{{ uploadButtonText }}</span>\n                    <input ref=\"fileInputElement\" type=\"file\" style=\"display: none;\" @change=\"onFileChange\" @remove=\"OnFileRemove\" />\n                </div>\n            </div>\n        </div>\n    </template>\n</RockFormField>\n"
      }));

    })
  };
}));
//# sourceMappingURL=imageUploader.js.map
