System.register(['vue', '@Obsidian/Controls/dropDownMenu.obs', '@Obsidian/Controls/transitionVerticalCollapse.obs', '@Obsidian/Utility/guid', '@Obsidian/Utility/block', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/noteTextEditor.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/dateTimePicker.obs', '@Obsidian/Controls/inlineCheckBox.obs', '@Obsidian/Controls/rockButton.obs', '@Obsidian/Controls/rockForm.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/util', '@Obsidian/Utility/component', '@Obsidian/Core/Utilities/rockColor', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/stringUtils'], (function (exports) {
  'use strict';
  var inject, provide, defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, createBlock, resolveDynamicComponent, pushScopeId, popScopeId, createTextVNode, ref, onMounted, onBeforeUnmount, watch, createElementVNode, createCommentVNode, createVNode, withCtx, withDirectives, toDisplayString, vModelSelect, withModifiers, resolveComponent, normalizeStyle, vShow, reactive, DropDownMenu, TransitionVerticalCollapse, newGuid, useInvokeBlockAction, useReloadBlock, setPropertiesBoxValue, useConfigurationValues, onConfigurationValuesChanged, confirmDelete, alert, showSecurity, NoteTextEditor, AttributeValuesContainer, DateTimePicker, InlineCheckBox, RockButton, RockForm, EntityType, deepEqual, updateRefValue, RockColor, RockDateTime, pluralize;
  return {
    setters: [function (module) {
      inject = module.inject;
      provide = module.provide;
      defineComponent = module.defineComponent;
      computed = module.computed;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      unref = module.unref;
      Fragment = module.Fragment;
      renderList = module.renderList;
      createBlock = module.createBlock;
      resolveDynamicComponent = module.resolveDynamicComponent;
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createTextVNode = module.createTextVNode;
      ref = module.ref;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      watch = module.watch;
      createElementVNode = module.createElementVNode;
      createCommentVNode = module.createCommentVNode;
      createVNode = module.createVNode;
      withCtx = module.withCtx;
      withDirectives = module.withDirectives;
      toDisplayString = module.toDisplayString;
      vModelSelect = module.vModelSelect;
      withModifiers = module.withModifiers;
      resolveComponent = module.resolveComponent;
      normalizeStyle = module.normalizeStyle;
      vShow = module.vShow;
      reactive = module.reactive;
    }, function (module) {
      DropDownMenu = module["default"];
    }, function (module) {
      TransitionVerticalCollapse = module["default"];
    }, function (module) {
      newGuid = module.newGuid;
    }, function (module) {
      useInvokeBlockAction = module.useInvokeBlockAction;
      useReloadBlock = module.useReloadBlock;
      setPropertiesBoxValue = module.setPropertiesBoxValue;
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
    }, function (module) {
      confirmDelete = module.confirmDelete;
      alert = module.alert;
      showSecurity = module.showSecurity;
    }, function (module) {
      NoteTextEditor = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      DateTimePicker = module["default"];
    }, function (module) {
      InlineCheckBox = module["default"];
    }, function (module) {
      RockButton = module["default"];
    }, function (module) {
      RockForm = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      updateRefValue = module.updateRefValue;
    }, function (module) {
      RockColor = module.RockColor;
    }, function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      pluralize = module.pluralize;
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
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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

      var noteOptionsSymbol = Symbol();
      function toCssClass(input) {
        if (input.trim() === "") {
          return "";
        }
        input = input.toLowerCase();
        input = input.replace(/[^a-z_0-9]/g, "-");
        input = input.replace(/-+/g, "-");
        if (!input[0].match("^-?[_a-z]+[_a-z0-9-]*")) {
          input = "-x-".concat(input);
        }
        return input;
      }
      var noteEmitterSymbol = Symbol();
      function provideEmitter() {
        var emitter = new NoteEventEmitter();
        provide(noteEmitterSymbol, emitter);
        return emitter;
      }
      function useEmitter() {
        var _inject;
        return (_inject = inject(noteEmitterSymbol)) !== null && _inject !== void 0 ? _inject : new NoteEventEmitter();
      }
      class NoteEventEmitter {
        constructor() {
          _defineProperty(this, "events", {});
        }
        subscribe() {
          return newGuid();
        }
        unsubscribe(subscriberKey) {
          var keys = Object.keys(this.events);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            var targets = this.events[key];
            if (!targets) {
              continue;
            }
            for (var i = 0; i < targets.length;) {
              if (targets[i].id === subscriberKey) {
                targets.splice(i, 1);
              } else {
                i++;
              }
            }
          }
        }
        on(event, subscriberKey, handler) {
          if (!this.events[event]) {
            this.events[event] = [];
          }
          this.events[event].push({
            id: subscriberKey,
            handler
          });
        }
        off(event, subscriberKey) {
          var targets = this.events[event];
          if (!targets) {
            return;
          }
          for (var i = 0; i < targets.length;) {
            if (targets[i].id === subscriberKey) {
              targets.splice(i, 1);
            } else {
              i++;
            }
          }
        }
        emit(event, exceptSubscriberKey) {
          var targets = this.events[event];
          if (!targets) {
            return;
          }
          for (var i = 0; i < targets.length; i++) {
            if (targets[i].id !== exceptSubscriberKey) {
              targets[i].handler();
            }
          }
        }
      }

      var script$3 = defineComponent({
        name: 'notesContainer.partial',
        props: {
          notes: {
            type: Array,
            required: true
          },
          depth: {
            type: Number,
            default: 0
          }
        },
        setup(__props) {
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var noteOptions = inject(noteOptionsSymbol);
          var noteComponent = noteOptions.noteComponent;
          var additionalListClasses = computed(() => {
            return props.depth > 0 ? "note-list-nested" : "note-view-list";
          });
          function onDeleteNote(_x) {
            return _onDeleteNote.apply(this, arguments);
          }
          function _onDeleteNote() {
            _onDeleteNote = _asyncToGenerator(function* (note) {
              if (!(yield confirmDelete("Note"))) {
                return;
              }
              var request = {
                idKey: note.idKey
              };
              var result = yield invokeBlockAction("DeleteNote", {
                request
              });
              if (!result.isSuccess) {
                var _result$errorMessage;
                yield alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to delete note.");
                return;
              }
              var index = props.notes.findIndex(n => n.idKey === note.idKey);
              if (index >= 0) {
                props.notes.splice(index, 1);
              }
            });
            return _onDeleteNote.apply(this, arguments);
          }
          function onEditedNote(note) {
            var index = props.notes.findIndex(n => n.idKey === note.idKey);
            if (index >= 0) {
              props.notes.splice(index, 1, note);
            }
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("ul", {
              class: normalizeClass(["note-list list-unstyled", unref(additionalListClasses)])
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.notes, note => {
              return openBlock(), createBlock(resolveDynamicComponent(unref(noteComponent)), {
                key: note.idKey,
                note: note,
                depth: __props.depth,
                onDelete: onDeleteNote,
                onEdited: onEditedNote
              }, null, 40, ["note", "depth"]);
            }), 128))], 2);
          };
        }
      });

      script$3.__file = "src/Core/Notes/notesContainer.partial.obs";

      var _withScopeId = n => (pushScopeId("data-v-b462c0fe"), n = n(), popScopeId(), n);
      var _hoisted_1$2 = {
        key: 0,
        class: "meta-figure"
      };
      var _hoisted_2$2 = {
        class: "avatar avatar-lg"
      };
      var _hoisted_3$2 = ["src"];
      var _hoisted_4$2 = {
        class: "noteentry-control"
      };
      var _hoisted_5$2 = {
        key: 0,
        class: "noteentry-attributes"
      };
      var _hoisted_6$2 = {
        class: "settings clearfix"
      };
      var _hoisted_7$2 = {
        key: 0,
        class: "createDate"
      };
      var _hoisted_8$2 = ["value"];
      var _hoisted_9$2 = {
        class: "commands"
      };
      var _hoisted_10$2 = ["onClick"];
      var _hoisted_11$2 = _withScopeId(() => createElementVNode("i", {
        class: "fa fa-lock"
      }, null, -1));
      var _hoisted_12$2 = [_hoisted_11$2];
      var _hoisted_13$1 = ["onClick"];
      var _hoisted_14$1 = createTextVNode(" Save Note ");
      var script$2 = defineComponent({
        name: 'noteEditor.partial',
        props: {
          modelValue: {
            type: Object,
            required: false
          },
          hideCancel: {
            type: Boolean,
            default: false
          },
          noteTypes: {
            type: Array,
            required: true
          },
          avatarUrl: {
            type: String,
            required: false
          },
          showAlert: {
            type: Boolean,
            default: false
          },
          showDate: {
            type: Boolean,
            default: false
          },
          showPrivate: {
            type: Boolean,
            default: false
          },
          showSecurity: {
            type: Boolean,
            default: false
          },
          autoSize: {
            type: Boolean,
            default: false
          },
          autoFocus: {
            type: Boolean,
            default: false
          }
        },
        emits: ["update:modelValue", "save", "cancel"],
        setup(__props, _ref) {
          var _props$modelValue$not, _props$modelValue, _props$modelValue$tex, _props$modelValue2, _props$modelValue$isA, _props$modelValue3, _props$modelValue$isP, _props$modelValue4, _props$modelValue$isP2, _props$modelValue5, _props$modelValue$cre, _props$modelValue6, _props$modelValue$att, _props$modelValue7, _selectedNoteType$val2, _selectedNoteType$val3;
          var emit = _ref.emit;
          var props = __props;
          var metaBodyElement = ref();
          var noteTypeIdKey = ref((_props$modelValue$not = (_props$modelValue = props.modelValue) === null || _props$modelValue === void 0 ? void 0 : _props$modelValue.noteTypeIdKey) !== null && _props$modelValue$not !== void 0 ? _props$modelValue$not : "");
          var noteText = ref((_props$modelValue$tex = (_props$modelValue2 = props.modelValue) === null || _props$modelValue2 === void 0 ? void 0 : _props$modelValue2.text) !== null && _props$modelValue$tex !== void 0 ? _props$modelValue$tex : "");
          var isAlert = ref((_props$modelValue$isA = (_props$modelValue3 = props.modelValue) === null || _props$modelValue3 === void 0 ? void 0 : _props$modelValue3.isAlert) !== null && _props$modelValue$isA !== void 0 ? _props$modelValue$isA : false);
          var isPinned = ref((_props$modelValue$isP = (_props$modelValue4 = props.modelValue) === null || _props$modelValue4 === void 0 ? void 0 : _props$modelValue4.isPinned) !== null && _props$modelValue$isP !== void 0 ? _props$modelValue$isP : false);
          var isPrivate = ref((_props$modelValue$isP2 = (_props$modelValue5 = props.modelValue) === null || _props$modelValue5 === void 0 ? void 0 : _props$modelValue5.isPrivate) !== null && _props$modelValue$isP2 !== void 0 ? _props$modelValue$isP2 : false);
          var createdDateTime = ref((_props$modelValue$cre = (_props$modelValue6 = props.modelValue) === null || _props$modelValue6 === void 0 ? void 0 : _props$modelValue6.createdDateTime) !== null && _props$modelValue$cre !== void 0 ? _props$modelValue$cre : "");
          var attributes = ref({});
          var attributeValues = ref((_props$modelValue$att = (_props$modelValue7 = props.modelValue) === null || _props$modelValue7 === void 0 ? void 0 : _props$modelValue7.attributeValues) !== null && _props$modelValue$att !== void 0 ? _props$modelValue$att : {});
          var hasAttributes = computed(() => {
            return Object.keys(attributes.value).length > 0;
          });
          var additionalNoteEditorClasses = computed(() => {
            var _props$modelValue8;
            var classes = "";
            if (props.autoSize) {
              classes += " auto-size";
            }
            if (hasAttributes) {
              classes += " note-editor-attributes";
            } else {
              classes += " note-editor-standard";
            }
            if (!((_props$modelValue8 = props.modelValue) !== null && _props$modelValue8 !== void 0 && _props$modelValue8.idKey)) {
              classes += " note-new";
            }
            return classes.trim();
          });
          var noteTextEditorFormGroupClasses = computed(() => {
            return Object.keys(attributes.value).length > 0 ? "note-editor-text" : "";
          });
          var selectableNoteTypes = computed(() => {
            return props.noteTypes.filter(nt => nt.userSelectable);
          });
          var noteTypeItems = computed(() => {
            return selectableNoteTypes.value.map(nt => {
              return {
                value: nt.idKey,
                text: nt.name
              };
            });
          });
          var selectedNoteType = computed(() => {
            return selectableNoteTypes.value.find(nt => nt.idKey === noteTypeIdKey.value);
          });
          var isMentionEnabled = computed(() => {
            var _selectedNoteType$val;
            return ((_selectedNoteType$val = selectedNoteType.value) === null || _selectedNoteType$val === void 0 ? void 0 : _selectedNoteType$val.isMentionEnabled) === true;
          });
          var defaultNoteTypeIdKey = computed(() => {
            var _selectableNoteTypes$;
            return selectableNoteTypes.value.length > 0 ? (_selectableNoteTypes$ = selectableNoteTypes.value[0].idKey) !== null && _selectableNoteTypes$ !== void 0 ? _selectableNoteTypes$ : "" : "";
          });
          function onSecurityClick() {
            var _props$modelValue9;
            if ((_props$modelValue9 = props.modelValue) !== null && _props$modelValue9 !== void 0 && _props$modelValue9.idKey) {
              showSecurity(EntityType.Note, props.modelValue.idKey, "Note");
            }
          }
          function onCancelClick() {
            emit("cancel");
          }
          function onFormSubmit() {
            emit("save");
          }
          function onMetaBodyTransitionEnd(event) {
            var _metaBodyElement$valu;
            if (!props.autoSize || event.target !== metaBodyElement.value || event.propertyName !== "height") {
              return;
            }
            if ((_metaBodyElement$valu = metaBodyElement.value) !== null && _metaBodyElement$valu !== void 0 && _metaBodyElement$valu.classList.contains("focus-within")) {
              metaBodyElement.value.classList.add("overflow-visible");
              metaBodyElement.value.style.height = "auto";
            } else if (metaBodyElement.value) {
              metaBodyElement.value.style.height = "";
            }
          }
          function onMetaBodyFocusIn(ev) {
            if (!props.autoSize || !(ev.target instanceof HTMLElement) || !metaBodyElement.value) {
              return;
            }
            if (metaBodyElement.value.contains(ev.target)) {
              if (!metaBodyElement.value.classList.contains("focus-within")) {
                metaBodyElement.value.classList.add("focus-within");
                metaBodyElement.value.style.height = "".concat(metaBodyElement.value.scrollHeight, "px");
                setTimeout(() => document.addEventListener("click", onDocumentClick), 0);
              }
            }
          }
          function onDocumentClick(ev) {
            if (!(ev.target instanceof Node) || !metaBodyElement.value) {
              return;
            }
            if (!metaBodyElement.value.contains(ev.target)) {
              document.removeEventListener("click", onDocumentClick);
              metaBodyElement.value.classList.remove("focus-within", "overflow-visible");
              metaBodyElement.value.style.height = "".concat(metaBodyElement.value.scrollHeight, "px");
              metaBodyElement.value.getBoundingClientRect();
              metaBodyElement.value.style.height = "36px";
            }
          }
          onMounted(() => {
            if (metaBodyElement.value) {
              metaBodyElement.value.addEventListener("focusin", onMetaBodyFocusIn);
              metaBodyElement.value.addEventListener("transitionend", onMetaBodyTransitionEnd);
              if (props.autoFocus) {
                metaBodyElement.value.classList.add("focus-within");
                metaBodyElement.value.style.height = "".concat(metaBodyElement.value.scrollHeight, "px");
                var textEditor = metaBodyElement.value.querySelector(".note-text");
                if (textEditor && textEditor instanceof HTMLElement) {
                  textEditor.focus();
                }
                setTimeout(() => document.addEventListener("click", onDocumentClick), 0);
              }
            }
          });
          onBeforeUnmount(() => {
            if (metaBodyElement.value) {
              metaBodyElement.value.removeEventListener("focusin", onMetaBodyFocusIn);
              metaBodyElement.value.removeEventListener("transitionend", onMetaBodyTransitionEnd);
            }
            document.removeEventListener("click", onDocumentClick);
          });
          if (!noteTypeIdKey.value) {
            noteTypeIdKey.value = defaultNoteTypeIdKey.value;
          }
          attributes.value = (_selectedNoteType$val2 = (_selectedNoteType$val3 = selectedNoteType.value) === null || _selectedNoteType$val3 === void 0 ? void 0 : _selectedNoteType$val3.attributes) !== null && _selectedNoteType$val2 !== void 0 ? _selectedNoteType$val2 : {};
          watch(selectedNoteType, () => {
            var _selectedNoteType$val4, _selectedNoteType$val5;
            attributes.value = (_selectedNoteType$val4 = (_selectedNoteType$val5 = selectedNoteType.value) === null || _selectedNoteType$val5 === void 0 ? void 0 : _selectedNoteType$val5.attributes) !== null && _selectedNoteType$val4 !== void 0 ? _selectedNoteType$val4 : {};
            attributeValues.value = {};
          });
          watch(() => props.modelValue, () => {
            var _ref2, _props$modelValue$not2, _props$modelValue10, _props$modelValue$tex2, _props$modelValue11, _props$modelValue$isA2, _props$modelValue12, _props$modelValue$isP3, _props$modelValue13, _props$modelValue$isP4, _props$modelValue14, _props$modelValue$cre2, _props$modelValue15, _props$modelValue$att2, _props$modelValue16;
            updateRefValue(noteTypeIdKey, (_ref2 = (_props$modelValue$not2 = (_props$modelValue10 = props.modelValue) === null || _props$modelValue10 === void 0 ? void 0 : _props$modelValue10.noteTypeIdKey) !== null && _props$modelValue$not2 !== void 0 ? _props$modelValue$not2 : noteTypeIdKey.value) !== null && _ref2 !== void 0 ? _ref2 : defaultNoteTypeIdKey.value);
            updateRefValue(noteText, (_props$modelValue$tex2 = (_props$modelValue11 = props.modelValue) === null || _props$modelValue11 === void 0 ? void 0 : _props$modelValue11.text) !== null && _props$modelValue$tex2 !== void 0 ? _props$modelValue$tex2 : "");
            updateRefValue(isAlert, (_props$modelValue$isA2 = (_props$modelValue12 = props.modelValue) === null || _props$modelValue12 === void 0 ? void 0 : _props$modelValue12.isAlert) !== null && _props$modelValue$isA2 !== void 0 ? _props$modelValue$isA2 : false);
            updateRefValue(isPinned, (_props$modelValue$isP3 = (_props$modelValue13 = props.modelValue) === null || _props$modelValue13 === void 0 ? void 0 : _props$modelValue13.isPinned) !== null && _props$modelValue$isP3 !== void 0 ? _props$modelValue$isP3 : false);
            updateRefValue(isPrivate, (_props$modelValue$isP4 = (_props$modelValue14 = props.modelValue) === null || _props$modelValue14 === void 0 ? void 0 : _props$modelValue14.isPrivate) !== null && _props$modelValue$isP4 !== void 0 ? _props$modelValue$isP4 : false);
            updateRefValue(createdDateTime, (_props$modelValue$cre2 = (_props$modelValue15 = props.modelValue) === null || _props$modelValue15 === void 0 ? void 0 : _props$modelValue15.createdDateTime) !== null && _props$modelValue$cre2 !== void 0 ? _props$modelValue$cre2 : "");
            updateRefValue(attributeValues, (_props$modelValue$att2 = (_props$modelValue16 = props.modelValue) === null || _props$modelValue16 === void 0 ? void 0 : _props$modelValue16.attributeValues) !== null && _props$modelValue$att2 !== void 0 ? _props$modelValue$att2 : {});
          });
          watch([noteTypeIdKey, noteText, isAlert, isPinned, isPrivate, createdDateTime, attributeValues], () => {
            var _props$modelValue17;
            var newBag = _objectSpread2(_objectSpread2({}, (_props$modelValue17 = props.modelValue) !== null && _props$modelValue17 !== void 0 ? _props$modelValue17 : {}), {}, {
              noteTypeIdKey: noteTypeIdKey.value,
              text: noteText.value,
              isAlert: isAlert.value,
              isPinned: isPinned.value,
              isPrivate: isPrivate.value,
              createdDateTime: createdDateTime.value || null,
              attributeValues: attributeValues.value
            });
            if (!deepEqual(props.modelValue, newBag, true)) {
              emit("update:modelValue", newBag);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["note-editor meta", unref(additionalNoteEditorClasses)])
            }, [__props.avatarUrl ? (openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("div", _hoisted_2$2, [createElementVNode("img", {
              src: __props.avatarUrl
            }, null, 8, _hoisted_3$2)])])) : createCommentVNode("v-if", true), createElementVNode("div", {
              ref_key: "metaBodyElement",
              ref: metaBodyElement,
              class: "meta-body"
            }, [createVNode(unref(RockForm), {
              onSubmit: onFormSubmit
            }, {
              default: withCtx(() => {
                var _props$modelValue18;
                return [createElementVNode("div", _hoisted_4$2, [createVNode(unref(NoteTextEditor), {
                  modelValue: noteText.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => noteText.value = $event),
                  validationTitle: "Note",
                  rules: "required",
                  formGroupClasses: unref(noteTextEditorFormGroupClasses),
                  placeholder: "Write a note...",
                  mentionEnabled: unref(isMentionEnabled)
                }, null, 8, ["modelValue", "formGroupClasses", "mentionEnabled"]), unref(hasAttributes) ? (openBlock(), createElementBlock("div", _hoisted_5$2, [createVNode(unref(AttributeValuesContainer), {
                  modelValue: attributeValues.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => attributeValues.value = $event),
                  attributes: attributes.value,
                  showCategoryLabel: false,
                  isEditMode: ""
                }, null, 8, ["modelValue", "attributes"])])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_6$2, [__props.showDate ? (openBlock(), createElementBlock("div", _hoisted_7$2, [createVNode(unref(DateTimePicker), {
                  modelValue: createdDateTime.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => createdDateTime.value = $event),
                  label: "Note Created Date"
                }, null, 8, ["modelValue"])])) : createCommentVNode("v-if", true), unref(noteTypeItems).length > 1 ? withDirectives((openBlock(), createElementBlock("select", {
                  key: 1,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => noteTypeIdKey.value = $event),
                  class: "form-control input-sm input-width-lg noteentry-notetype"
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(noteTypeItems), item => {
                  return openBlock(), createElementBlock("option", {
                    value: item.value
                  }, toDisplayString(item.text), 9, _hoisted_8$2);
                }), 256))], 512)), [[vModelSelect, noteTypeIdKey.value]]) : createCommentVNode("v-if", true), __props.showAlert ? (openBlock(), createBlock(unref(InlineCheckBox), {
                  key: 2,
                  modelValue: isAlert.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => isAlert.value = $event),
                  label: "Alert"
                }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), __props.showPrivate ? (openBlock(), createBlock(unref(InlineCheckBox), {
                  key: 3,
                  modelValue: isPrivate.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => isPrivate.value = $event),
                  label: "Private"
                }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true), createVNode(unref(InlineCheckBox), {
                  modelValue: isPinned.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => isPinned.value = $event),
                  label: "Pin to Top"
                }, null, 8, ["modelValue"]), createElementVNode("div", _hoisted_9$2, [__props.showSecurity && (_props$modelValue18 = __props.modelValue) !== null && _props$modelValue18 !== void 0 && _props$modelValue18.idKey ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "btn btn-security btn-xs btn-square security",
                  onClick: withModifiers(onSecurityClick, ["prevent"])
                }, _hoisted_12$2, 8, _hoisted_10$2)) : createCommentVNode("v-if", true), !__props.hideCancel ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  class: "edit-note-cancel btn btn-link btn-xs",
                  onClick: withModifiers(onCancelClick, ["prevent"])
                }, " Cancel ", 8, _hoisted_13$1)) : createCommentVNode("v-if", true), createVNode(unref(RockButton), {
                  class: "btn btn-primary btn-xs",
                  type: "submit"
                }, {
                  default: withCtx(() => [_hoisted_14$1]),
                  _: 1
                })])])];
              }),
              _: 1
            })], 512)], 2);
          };
        }
      });

      function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === 'undefined') {
          return;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (insertAt === 'top') {
          if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
          } else {
            head.appendChild(style);
          }
        } else {
          head.appendChild(style);
        }
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }

      var css_248z$1 = ".note-editor.auto-size .meta-body[data-v-b462c0fe]{height:36px;overflow-y:hidden;transition:height .25s ease}.note-editor .meta-body.focus-within[data-v-b462c0fe]{border:var(--focus-state-border);box-shadow:var(--focus-state-shadow)}.note-editor .noteentry-control[data-v-b462c0fe] .note-text,.note-editor .noteentry-control[data-v-b462c0fe] .note-text:focus{border:none;border-bottom:1px solid #d2d2d2;border-bottom-left-radius:0;border-bottom-right-radius:0;box-shadow:none}.note-editor.auto-size .noteentry-control[data-v-b462c0fe] .note-text{background-color:#f8f9fa;transition:background-color .25s ease}.note-editor.auto-size .meta-body.focus-within[data-v-b462c0fe] .note-text,.note-editor.auto-size .meta-body[data-v-b462c0fe]:hover .note-text{background-color:transparent}.noteentry-attributes[data-v-b462c0fe]{padding:6px 24px}.note-editor-attributes .noteentry-control[data-v-b462c0fe]{padding:0}";
      styleInject(css_248z$1);

      script$2.__scopeId = "data-v-b462c0fe";
      script$2.__file = "src/Core/Notes/noteEditor.partial.obs";

      var _hoisted_1$1 = {
        class: "note"
      };
      var _hoisted_2$1 = ["id"];
      var _hoisted_3$1 = {
        class: "meta"
      };
      var _hoisted_4$1 = {
        class: "meta-figure"
      };
      var _hoisted_5$1 = ["href"];
      var _hoisted_6$1 = ["src", "alt"];
      var _hoisted_7$1 = {
        key: 1,
        class: "avatar avatar-lg avatar-icon"
      };
      var _hoisted_8$1 = {
        class: "meta-body"
      };
      var _hoisted_9$1 = {
        class: "note-caption"
      };
      var _hoisted_10$1 = {
        key: 0,
        class: "note-type-heading mr-1"
      };
      var _hoisted_11$1 = {
        key: 1,
        class: "mr-1"
      };
      var _hoisted_12$1 = ["href"];
      var _hoisted_13 = {
        key: 1
      };
      var _hoisted_14 = {
        class: "note-details"
      };
      var _hoisted_15 = {
        key: 0,
        class: "tag-flair"
      };
      var _hoisted_16 = {
        key: 0,
        class: "fa fa-eye mr-1 note-watching-icon",
        title: "You are watching this note."
      };
      var _hoisted_17 = createTextVNode("  ·  ");
      var _hoisted_18 = ["href"];
      var _hoisted_19 = ["datetime", "title"];
      var _hoisted_20 = ["datetime", "title"];
      var _hoisted_21 = {
        class: "note-details text-muted"
      };
      var _hoisted_22 = {
        key: 0,
        class: "label label-warning mr-3"
      };
      var _hoisted_23 = {
        class: "note-content"
      };
      var _hoisted_24 = ["innerHTML"];
      var _hoisted_25 = {
        key: 0,
        class: "note-attributes"
      };
      var _hoisted_26 = {
        class: "row"
      };
      var _hoisted_27 = {
        class: "col-lg-4 col-md-6"
      };
      var _hoisted_28 = {
        class: "note-attribute"
      };
      var _hoisted_29 = {
        key: 1,
        class: "note-footer"
      };
      var _hoisted_30 = {
        class: "note-footer-meta-list list-horizontal"
      };
      var _hoisted_31 = {
        key: 0
      };
      var _hoisted_32 = {
        key: 0
      };
      var _hoisted_33 = {
        class: "note-comments"
      };
      var script$1 = defineComponent({
        name: 'note.partial',
        props: {
          note: {
            type: Object,
            required: true
          },
          depth: {
            type: Number,
            default: 1
          }
        },
        emits: ["delete", "edited", "beginEditNote", "endEditNote"],
        setup(__props, _ref) {
          var emit = _ref.emit;
          var props = __props;
          var invokeBlockAction = useInvokeBlockAction();
          var reloadBlock = useReloadBlock();
          var noteOptions = inject(noteOptionsSymbol);
          var noteTypes = ref(noteOptions.noteTypes);
          var isChildNotesVisible = ref(noteOptions.autoExpandReplies);
          var isAddNoteVisible = ref(false);
          var isEditingNote = ref(false);
          var editNoteBag = ref({
            isAlert: false,
            isPrivate: false,
            isPinned: false
          });
          var isSavingNote = ref(false);
          var emitter = useEmitter();
          var subscriberKey = emitter.subscribe();
          var showPersonPhoto = computed(() => {
            return noteOptions.isLightMode || noteOptions.showAvatar && !!props.note.createdByIdKey;
          });
          var personLinkUrl = computed(() => {
            return props.note.createdByIdKey ? "/Person/".concat(props.note.createdByIdKey) : "";
          });
          var noteTypeIconClass = computed(() => {
            return props.note.noteType.iconCssClass || "fa fa-comment";
          });
          var noteTypeName = computed(() => {
            var _props$note$noteType$;
            return (_props$note$noteType$ = props.note.noteType.name) !== null && _props$note$noteType$ !== void 0 ? _props$note$noteType$ : "";
          });
          var additionalNoteClasses = computed(() => {
            var _props$note$noteType$2;
            var classes = "";
            if (props.note.isAlert) {
              classes = "is-alert";
            } else if (props.note.isPrivate) {
              classes = "is-personal";
            }
            classes += " note-type-".concat(toCssClass((_props$note$noteType$2 = props.note.noteType.name) !== null && _props$note$noteType$2 !== void 0 ? _props$note$noteType$2 : ""));
            return classes.trim();
          });
          var noteItemStyles = computed(() => {
            var styles = {};
            if (colorPair.value) {
              styles["--note-dark-color"] = colorPair.value.foregroundColor.toHex();
              styles["--note-light-color"] = colorPair.value.backgroundColor.toHex();
            }
            return styles;
          });
          var colorPair = computed(() => {
            if (!props.note.noteType.color) {
              return null;
            }
            var color = new RockColor(props.note.noteType.color);
            return RockColor.calculateColorPair(color);
          });
          var noteDateTimeText = computed(() => {
            var _props$note$createdDa;
            var text = "";
            var createdDateTime = RockDateTime.parseISO((_props$note$createdDa = props.note.createdDateTime) !== null && _props$note$createdDa !== void 0 ? _props$note$createdDa : "");
            if (createdDateTime) {
              text = createdDateTime.localDateTime.humanizeElapsed();
            }
            return text;
          });
          var noteEditedDateTimeText = computed(() => {
            var _props$note$createdDa2, _props$note$editedDat;
            var text = "";
            var createdDateTime = RockDateTime.parseISO((_props$note$createdDa2 = props.note.createdDateTime) !== null && _props$note$createdDa2 !== void 0 ? _props$note$createdDa2 : "");
            var editedDateTime = RockDateTime.parseISO((_props$note$editedDat = props.note.editedDateTime) !== null && _props$note$editedDat !== void 0 ? _props$note$editedDat : "");
            if (editedDateTime && (!createdDateTime || editedDateTime.isLaterThan(createdDateTime))) {
              var editedText = editedDateTime.localDateTime.humanizeElapsed();
              if (props.note.editedByName && props.note.editedByName !== props.note.createdByName) {
                editedText += " by ".concat(props.note.editedByName);
              }
              text += "(edited ".concat(editedText, ")");
            }
            return text;
          });
          var replyCountText = computed(() => {
            return "".concat(props.note.childNotes.length, " ").concat(pluralize("Reply", props.note.childNotes.length));
          });
          var noteAnchorId = computed(() => {
            return "#".concat(props.note.anchorId);
          });
          var dropDownActions = computed(() => {
            var actions = [];
            if (props.note.noteType.allowsReplies && noteOptions.showAdd) {
              if (props.note.noteType.maxReplyDepth === -1 || props.depth < props.note.noteType.maxReplyDepth) {
                actions.push({
                  title: "Reply",
                  type: "default",
                  iconCssClass: "fa fa-reply",
                  handler: onReplyNote
                });
              }
            }
            if (props.note.isEditable) {
              actions.push({
                title: "Edit",
                type: "default",
                iconCssClass: "fa fa-pencil",
                handler: onEditNote
              });
            }
            if (props.note.noteType.allowsWatching) {
              actions.push({
                title: props.note.isWatching ? "Unwatch" : "Watch",
                type: "default",
                iconCssClass: props.note.isWatching ? "fa fa-eye-slash" : "fa fa-eye",
                actionCssClass: props.note.isWatching ? "unwatch-note" : "watch-note",
                handler: onWatchNote
              });
            }
            if (props.note.isDeletable) {
              actions.push({
                title: "Delete",
                type: "danger",
                iconCssClass: "fa fa-trash",
                actionCssClass: "remove-note",
                handler: onDeleteNote
              });
            }
            return actions;
          });
          function formatTimestampDate(str) {
            var datetime = RockDateTime.parseISO(str !== null && str !== void 0 ? str : "");
            return datetime === null || datetime === void 0 ? void 0 : datetime.toASPString("yyyy-MM-ddTHH:mm:sszzz");
          }
          function formatLongDateTime(str) {
            var datetime = RockDateTime.parseISO(str !== null && str !== void 0 ? str : "");
            return datetime === null || datetime === void 0 ? void 0 : datetime.toASPString("MMMM d, yyyy, h:mm tt");
          }
          function getNoteTypeForCurrentNote(parentNoteTypeIdKey) {
            var noteTypeIdKey = parentNoteTypeIdKey !== null && parentNoteTypeIdKey !== void 0 ? parentNoteTypeIdKey : noteOptions.selectableNoteTypes[0].idKey;
            return noteTypeIdKey;
          }
          function configureAvailableNoteTypes(requiredNoteTypeIdKey) {
            if (requiredNoteTypeIdKey === null) {
              return;
            }
            noteTypes.value = noteOptions.selectableNoteTypes.filter(t => t.idKey === requiredNoteTypeIdKey);
          }
          function onEditNote() {
            return _onEditNote.apply(this, arguments);
          }
          function _onEditNote() {
            _onEditNote = _asyncToGenerator(function* () {
              var _props$note$idKey;
              var request = {
                idKey: (_props$note$idKey = props.note.idKey) !== null && _props$note$idKey !== void 0 ? _props$note$idKey : ""
              };
              var result = yield invokeBlockAction("EditNote", {
                request
              });
              if (!result.isSuccess || !result.data) {
                var _result$errorMessage;
                yield alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to edit note.");
                return;
              }
              emitter.emit("beginEdit", subscriberKey);
              var noteTypeIdKey = props.note.parentNoteIdKey === null ? null : props.note.noteTypeIdKey;
              configureAvailableNoteTypes(noteTypeIdKey);
              editNoteBag.value = result.data;
              isAddNoteVisible.value = false;
              isEditingNote.value = true;
            });
            return _onEditNote.apply(this, arguments);
          }
          function onDeleteNote() {
            emit("delete", props.note);
          }
          function onWatchNote() {
            return _onWatchNote.apply(this, arguments);
          }
          function _onWatchNote() {
            _onWatchNote = _asyncToGenerator(function* () {
              var request = {
                idKey: props.note.idKey,
                isWatching: !props.note.isWatching
              };
              var result = yield invokeBlockAction("WatchNote", {
                request
              });
              if (!result.isSuccess) {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unable to update note.");
                return;
              }
              props.note.isWatching = !props.note.isWatching;
            });
            return _onWatchNote.apply(this, arguments);
          }
          function onToggleChildNotes() {
            isChildNotesVisible.value = !isChildNotesVisible.value;
          }
          function onReplyNote() {
            emitter.emit("beginEdit", subscriberKey);
            var noteTypeIdKey = getNoteTypeForCurrentNote(props.note.noteTypeIdKey);
            configureAvailableNoteTypes(noteTypeIdKey);
            editNoteBag.value = {
              noteTypeIdKey: noteTypeIdKey,
              text: "",
              isAlert: false,
              isPrivate: false,
              isPinned: false,
              attributeValues: {}
            };
            isAddNoteVisible.value = true;
          }
          function onNoteEditCancel() {
            emitter.emit("endEdit", subscriberKey);
            isAddNoteVisible.value = false;
            isEditingNote.value = false;
          }
          function onNoteSave() {
            return _onNoteSave.apply(this, arguments);
          }
          function _onNoteSave() {
            _onNoteSave = _asyncToGenerator(function* () {
              if (isSavingNote.value) {
                return;
              }
              isSavingNote.value = true;
              try {
                var _noteTypes$value;
                var request = {};
                setPropertiesBoxValue(request, "idKey", editNoteBag.value.idKey);
                setPropertiesBoxValue(request, "parentNoteIdKey", isEditingNote.value ? props.note.parentNoteIdKey : props.note.idKey);
                setPropertiesBoxValue(request, "noteTypeIdKey", editNoteBag.value.noteTypeIdKey);
                setPropertiesBoxValue(request, "text", editNoteBag.value.text);
                setPropertiesBoxValue(request, "isAlert", editNoteBag.value.isAlert);
                setPropertiesBoxValue(request, "isPrivate", editNoteBag.value.isPrivate);
                setPropertiesBoxValue(request, "isPinned", editNoteBag.value.isPinned);
                setPropertiesBoxValue(request, "attributeValues", editNoteBag.value.attributeValues);
                if (editNoteBag.value.createdDateTime) {
                  setPropertiesBoxValue(request, "createdDateTime", editNoteBag.value.createdDateTime);
                }
                var result = yield invokeBlockAction("SaveNote", {
                  request
                });
                var type = (_noteTypes$value = noteTypes.value) === null || _noteTypes$value === void 0 ? void 0 : _noteTypes$value.find(nt => {
                  var _result$data;
                  return nt.idKey === ((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.noteTypeIdKey);
                });
                if (!result.isSuccess || !result.data || !type) {
                  var _result$errorMessage3;
                  yield alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unable to save the note.");
                  return;
                }
                var expandedNote = _objectSpread2(_objectSpread2({}, result.data), {}, {
                  noteType: type,
                  childNotes: []
                });
                if (isEditingNote.value) {
                  emit("edited", expandedNote);
                } else {
                  var notes = props.note.childNotes;
                  if (noteOptions.isDescending) {
                    var index = 0;
                    if (!expandedNote.isAlert) {
                      while (index < notes.length && notes[index].isAlert) {
                        index++;
                      }
                    }
                    if (!expandedNote.isPinned) {
                      while (index < notes.length && notes[index].isPinned) {
                        index++;
                      }
                    }
                    notes.splice(index, 0, expandedNote);
                  } else {
                    var _index = 0;
                    if (expandedNote.isAlert && expandedNote.isPinned) {
                      while (_index < notes.length && notes[_index].isAlert && notes[_index].isPinned) {
                        _index++;
                      }
                    } else if (expandedNote.isAlert && !expandedNote.isPinned) {
                      while (_index < notes.length && notes[_index].isAlert) {
                        _index++;
                      }
                    } else if (!expandedNote.isAlert && expandedNote.isPinned) {
                      while (_index < notes.length && (notes[_index].isAlert || notes[_index].isPinned)) {
                        _index++;
                      }
                    } else {
                      _index = notes.length;
                    }
                    notes.splice(_index, 0, expandedNote);
                  }
                }
                isAddNoteVisible.value = false;
                isEditingNote.value = false;
              } finally {
                isSavingNote.value = false;
                emitter.emit("endEdit", subscriberKey);
                reloadBlock();
              }
            });
            return _onNoteSave.apply(this, arguments);
          }
          function onBeginEditNote() {
            isAddNoteVisible.value = false;
            isEditingNote.value = false;
          }
          onMounted(() => {
            var url = new URL(window.location.href);
            if (noteAnchorId.value === url.hash && props.note.anchorId) {
              var noteElement = document.getElementById(props.note.anchorId);
              noteElement === null || noteElement === void 0 ? void 0 : noteElement.scrollIntoView({
                block: "nearest",
                inline: "nearest",
                behavior: "smooth"
              });
            }
          });
          onBeforeUnmount(() => {
            emitter.unsubscribe(subscriberKey);
          });
          emitter.on("beginEdit", subscriberKey, onBeginEditNote);
          return (_ctx, _cache) => {
            var _component_hgroup = resolveComponent("hgroup");
            return openBlock(), createElementBlock("li", _hoisted_1$1, [createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => {
                var _props$note$anchorId, _props$note$createdB, _props$note$createdB2;
                return [withDirectives(createElementVNode("article", {
                  id: (_props$note$anchorId = __props.note.anchorId) !== null && _props$note$anchorId !== void 0 ? _props$note$anchorId : undefined,
                  class: normalizeClass(["note-view-item", unref(additionalNoteClasses)]),
                  style: normalizeStyle(unref(noteItemStyles))
                }, [props.note.isAlert ? (openBlock(), createBlock(_component_hgroup, {
                  key: 0,
                  class: "flag"
                }, {
                  default: withCtx(() => [createTextVNode(" Alert: " + toDisplayString(unref(noteTypeName)), 1)]),
                  _: 1
                })) : createCommentVNode("v-if", true), createElementVNode("header", _hoisted_3$1, [createElementVNode("div", _hoisted_4$1, [unref(showPersonPhoto) ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: unref(personLinkUrl),
                  class: "avatar avatar-lg"
                }, [createElementVNode("img", {
                  src: (_props$note$createdB = __props.note.createdByPhotoUrl) !== null && _props$note$createdB !== void 0 ? _props$note$createdB : '',
                  alt: (_props$note$createdB2 = __props.note.createdByName) !== null && _props$note$createdB2 !== void 0 ? _props$note$createdB2 : ''
                }, null, 8, _hoisted_6$1)], 8, _hoisted_5$1)) : (openBlock(), createElementBlock("div", _hoisted_7$1, [createElementVNode("i", {
                  class: normalizeClass(unref(noteTypeIconClass))
                }, null, 2)]))]), createElementVNode("div", _hoisted_8$1, [createElementVNode("span", _hoisted_9$1, [unref(noteOptions).showNoteTypeHeading ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(__props.note.noteType.name), 1)) : createCommentVNode("v-if", true), __props.note.isPrivate || !__props.note.caption ? (openBlock(), createElementBlock("span", _hoisted_11$1, [unref(personLinkUrl) ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: unref(personLinkUrl)
                }, toDisplayString(__props.note.createdByName), 9, _hoisted_12$1)) : !unref(noteOptions).showNoteTypeHeading ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(__props.note.noteType.name), 1)) : createCommentVNode("v-if", true)])) : (openBlock(), createElementBlock(Fragment, {
                  key: 2
                }, [createTextVNode(toDisplayString(__props.note.caption), 1)], 64))]), createElementVNode("span", _hoisted_14, [!unref(noteOptions).isLightMode ? (openBlock(), createElementBlock("span", _hoisted_15, [__props.note.isWatching ? (openBlock(), createElementBlock("i", _hoisted_16)) : createCommentVNode("v-if", true), createElementVNode("span", {
                  class: normalizeClass(["tag-label", {
                    'has-color': !!unref(colorPair)
                  }])
                }, toDisplayString(__props.note.noteType.name), 3), _hoisted_17])) : createCommentVNode("v-if", true), createElementVNode("a", {
                  href: unref(noteAnchorId),
                  class: "timestamp"
                }, [createElementVNode("time", {
                  datetime: formatTimestampDate(__props.note.createdDateTime),
                  title: formatLongDateTime(__props.note.createdDateTime)
                }, toDisplayString(unref(noteDateTimeText)), 9, _hoisted_19), unref(noteEditedDateTimeText) ? (openBlock(), createElementBlock("time", {
                  key: 0,
                  class: "ml-1",
                  datetime: formatTimestampDate(__props.note.editedDateTime),
                  title: formatLongDateTime(__props.note.editedDateTime)
                }, toDisplayString(unref(noteEditedDateTimeText)), 9, _hoisted_20)) : createCommentVNode("v-if", true)], 8, _hoisted_18)]), createElementVNode("div", _hoisted_21, toDisplayString(__props.note.isPinned ? "Pinned to Top" : ""), 1)]), __props.note.isPrivate ? (openBlock(), createElementBlock("span", _hoisted_22, "Private")) : createCommentVNode("v-if", true), unref(dropDownActions).length ? (openBlock(), createBlock(unref(DropDownMenu), {
                  key: 1,
                  items: unref(dropDownActions),
                  align: "right"
                }, null, 8, ["items"])) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_23, [createElementVNode("div", {
                  class: "note-text",
                  innerHTML: __props.note.text
                }, null, 8, _hoisted_24), __props.note.attributeValues && Object.keys(__props.note.attributeValues).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [createElementVNode("div", _hoisted_26, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(__props.note.attributeValues), attr => {
                  return openBlock(), createElementBlock("div", _hoisted_27, [createElementVNode("dl", _hoisted_28, [createElementVNode("dt", null, toDisplayString(attr), 1), createElementVNode("dd", null, toDisplayString(__props.note.attributeValues[attr]), 1)])]);
                }), 256))])])) : createCommentVNode("v-if", true)]), __props.note.childNotes.length ? (openBlock(), createElementBlock("footer", _hoisted_29, [createElementVNode("ul", _hoisted_30, [createElementVNode("li", null, [createElementVNode("button", {
                  type: "button",
                  class: "btn btn-link",
                  onClick: onToggleChildNotes
                }, toDisplayString(unref(replyCountText)), 1)])])])) : createCommentVNode("v-if", true), createVNode(unref(TransitionVerticalCollapse), null, {
                  default: withCtx(() => [isAddNoteVisible.value ? (openBlock(), createElementBlock("div", _hoisted_31, [createVNode(unref(script$2), {
                    modelValue: editNoteBag.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editNoteBag.value = $event),
                    noteTypes: noteTypes.value,
                    showAlert: unref(noteOptions).showAlert,
                    showDate: unref(noteOptions).showCreateDate,
                    showPrivate: unref(noteOptions).showPrivate,
                    showSecurity: unref(noteOptions).showSecurity,
                    autoSize: "",
                    autoFocus: "",
                    onCancel: onNoteEditCancel,
                    onSave: onNoteSave
                  }, null, 8, ["modelValue", "noteTypes", "showAlert", "showDate", "showPrivate", "showSecurity"])])) : createCommentVNode("v-if", true)]),
                  _: 1
                })], 14, _hoisted_2$1), [[vShow, !isEditingNote.value]])];
              }),
              _: 1
            }), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [isEditingNote.value ? (openBlock(), createElementBlock("div", _hoisted_32, [createVNode(unref(script$2), {
                modelValue: editNoteBag.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => editNoteBag.value = $event),
                noteTypes: noteTypes.value,
                showAlert: unref(noteOptions).showAlert,
                showDate: unref(noteOptions).showCreateDate,
                showPrivate: unref(noteOptions).showPrivate,
                showSecurity: unref(noteOptions).showSecurity,
                autoSize: "",
                autoFocus: "",
                onCancel: onNoteEditCancel,
                onSave: onNoteSave
              }, null, 8, ["modelValue", "noteTypes", "showAlert", "showDate", "showPrivate", "showSecurity"])])) : createCommentVNode("v-if", true)]),
              _: 1
            }), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => [withDirectives(createElementVNode("div", _hoisted_33, [createVNode(unref(script$3), {
                notes: __props.note.childNotes,
                depth: __props.depth + 1
              }, null, 8, ["notes", "depth"])], 512), [[vShow, isChildNotesVisible.value]])]),
              _: 1
            })]);
          };
        }
      });

      var css_248z = ".note-view-item[data-v-f8983698]{scroll-margin-top:var(--top-header-height,0)}.note-view-item.is-alert .avatar-icon[data-v-f8983698]{color:var(--state-danger-text,#fcf2f1)}.tag-label[data-v-f8983698]{background-color:var(--note-light-color,inherit);color:var(--note-dark-color,inherit)}.tag-label.has-color[data-v-f8983698]{border-radius:4px;padding:4px 16px}.meta>.label-warning[data-v-f8983698]{align-self:flex-start;margin-top:4px}.note-text[data-v-f8983698] .mention{color:#006dcc}.note-text[data-v-f8983698]{white-space:pre-wrap}";
      styleInject(css_248z);

      script$1.__scopeId = "data-v-f8983698";
      script$1.__file = "src/Core/Notes/note.partial.obs";

      var _hoisted_1 = {
        key: 0,
        class: "panel panel-note"
      };
      var _hoisted_2 = {
        key: 0,
        class: "panel-heading clearfix"
      };
      var _hoisted_3 = {
        class: "panel-title"
      };
      var _hoisted_4 = ["onClick"];
      var _hoisted_5 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_6 = [_hoisted_5];
      var _hoisted_7 = {
        class: "panel-body"
      };
      var _hoisted_8 = {
        key: 0
      };
      var _hoisted_9 = {
        key: 0
      };
      var _hoisted_10 = ["onClick"];
      var _hoisted_11 = createElementVNode("i", {
        class: "fa fa-plus"
      }, null, -1);
      var _hoisted_12 = [_hoisted_11];
      var script = exports('default', defineComponent({
        name: 'notes',
        setup(__props) {
          var _config$noteTypes$fil, _config$noteTypes, _config$noteTypes2;
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var isBlockVisible = !!config.entityIdKey;
          var notes = reactive(getExpandedNotes().filter(n => !n.parentNoteIdKey));
          var isAddNoteVisible = ref(config.showAdd && config.addAlwaysVisible);
          var selectableNoteTypes = (_config$noteTypes$fil = (_config$noteTypes = config.noteTypes) === null || _config$noteTypes === void 0 ? void 0 : _config$noteTypes.filter(nt => nt.userSelectable)) !== null && _config$noteTypes$fil !== void 0 ? _config$noteTypes$fil : [];
          var showAddNote = selectableNoteTypes.length > 0 && !config.addAlwaysVisible && config.showAdd;
          var addNoteBag = ref({
            isAlert: false,
            isPrivate: false,
            isPinned: false
          });
          var isSavingNote = ref(false);
          var noteOptions = {
            autoExpandReplies: config.expandReplies,
            avatarUrl: config.usePersonIcon ? config.personAvatarUrl : undefined,
            isLightMode: config.isLightMode,
            noteComponent: script$1,
            noteTypes: (_config$noteTypes2 = config.noteTypes) !== null && _config$noteTypes2 !== void 0 ? _config$noteTypes2 : [],
            selectableNoteTypes: selectableNoteTypes,
            isDescending: config.isDescending,
            showAdd: config.showAdd,
            showAlert: config.showAlertCheckBox,
            showAvatar: config.usePersonIcon,
            showCreateDate: config.showCreateDateInput,
            showNoteTypeHeading: config.displayNoteTypeHeading,
            showPrivate: config.showPrivateCheckBox,
            showSecurity: config.showSecurityButton
          };
          var emitter = provideEmitter();
          var subscriberKey = emitter.subscribe();
          function getExpandedNotes() {
            var expandedNotes = [];
            if (!config.notes || !config.noteTypes) {
              return expandedNotes;
            }
            var _iterator = _createForOfIteratorHelper(config.notes),
              _step;
            try {
              var _loop2 = function _loop2() {
                var note = _step.value;
                var type = config.noteTypes.find(nt => nt.idKey === note.noteTypeIdKey);
                if (type) {
                  expandedNotes.push(_objectSpread2({
                    noteType: type,
                    childNotes: []
                  }, note));
                }
              };
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var _loop = function _loop() {
              var note = _expandedNotes[_i];
              if (note.parentNoteIdKey) {
                var parentNote = expandedNotes.find(n => n.idKey === note.parentNoteIdKey);
                if (parentNote) {
                  parentNote.childNotes.push(note);
                }
              }
            };
            for (var _i = 0, _expandedNotes = expandedNotes; _i < _expandedNotes.length; _i++) {
              _loop();
            }
            return expandedNotes;
          }
          function onAddNoteClick() {
            addNoteBag.value = {
              noteTypeIdKey: selectableNoteTypes[0].idKey,
              text: "",
              isAlert: false,
              isPrivate: false,
              isPinned: false,
              attributeValues: {}
            };
            isAddNoteVisible.value = true;
          }
          function onNoteAddCancel() {
            isAddNoteVisible.value = false;
          }
          function onNoteAddSave() {
            return _onNoteAddSave.apply(this, arguments);
          }
          function _onNoteAddSave() {
            _onNoteAddSave = _asyncToGenerator(function* () {
              if (isSavingNote.value) {
                return;
              }
              isSavingNote.value = true;
              try {
                var _config$noteTypes3;
                var request = {};
                setPropertiesBoxValue(request, "idKey", addNoteBag.value.idKey);
                setPropertiesBoxValue(request, "parentNoteIdKey", undefined);
                setPropertiesBoxValue(request, "noteTypeIdKey", addNoteBag.value.noteTypeIdKey);
                setPropertiesBoxValue(request, "text", addNoteBag.value.text);
                setPropertiesBoxValue(request, "isAlert", addNoteBag.value.isAlert);
                setPropertiesBoxValue(request, "isPrivate", addNoteBag.value.isPrivate);
                setPropertiesBoxValue(request, "isPinned", addNoteBag.value.isPinned);
                setPropertiesBoxValue(request, "attributeValues", addNoteBag.value.attributeValues);
                if (addNoteBag.value.createdDateTime) {
                  setPropertiesBoxValue(request, "createdDateTime", addNoteBag.value.createdDateTime);
                }
                var result = yield invokeBlockAction("SaveNote", {
                  request
                });
                var type = (_config$noteTypes3 = config.noteTypes) === null || _config$noteTypes3 === void 0 ? void 0 : _config$noteTypes3.find(nt => {
                  var _result$data;
                  return nt.idKey === ((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.noteTypeIdKey);
                });
                if (!result.isSuccess || !result.data || !type) {
                  var _result$errorMessage;
                  yield alert((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unable to save the note.");
                  return;
                }
                var expandedNote = _objectSpread2(_objectSpread2({}, result.data), {}, {
                  noteType: type,
                  childNotes: []
                });
                if (config.isDescending) {
                  var index = 0;
                  if (!expandedNote.isAlert) {
                    while (index < notes.length && notes[index].isAlert) {
                      index++;
                    }
                  }
                  if (!expandedNote.isPinned) {
                    while (index < notes.length && notes[index].isPinned) {
                      index++;
                    }
                  }
                  notes.splice(index, 0, expandedNote);
                } else {
                  var _index = 0;
                  if (expandedNote.isAlert && expandedNote.isPinned) {
                    while (_index < notes.length && notes[_index].isAlert && notes[_index].isPinned) {
                      _index++;
                    }
                  } else if (expandedNote.isAlert && !expandedNote.isPinned) {
                    while (_index < notes.length && notes[_index].isAlert) {
                      _index++;
                    }
                  } else if (!expandedNote.isAlert && expandedNote.isPinned) {
                    while (_index < notes.length && (notes[_index].isAlert || notes[_index].isPinned)) {
                      _index++;
                    }
                  } else {
                    _index = notes.length;
                  }
                  notes.splice(_index, 0, expandedNote);
                }
                addNoteBag.value = {
                  isAlert: false,
                  isPrivate: false,
                  isPinned: false
                };
                isAddNoteVisible.value = config.addAlwaysVisible;
              } finally {
                isSavingNote.value = false;
              }
            });
            return _onNoteAddSave.apply(this, arguments);
          }
          function onBeginEditNote() {
            addNoteBag.value = {
              isAlert: false,
              isPrivate: false,
              isPinned: false
            };
            isAddNoteVisible.value = false;
          }
          function onEndEditNote() {
            isAddNoteVisible.value = config.addAlwaysVisible;
          }
          onBeforeUnmount(() => {
            emitter.unsubscribe(subscriberKey);
          });
          provide(noteOptionsSymbol, noteOptions);
          emitter.on("beginEdit", subscriberKey, onBeginEditNote);
          emitter.on("endEdit", subscriberKey, onEndEditNote);
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return isBlockVisible ? (openBlock(), createElementBlock("div", _hoisted_1, [unref(config).title || unref(config).titleIconCssClass || unref(showAddNote) ? (openBlock(), createElementBlock("div", _hoisted_2, [createElementVNode("h3", _hoisted_3, [unref(config).titleIconCssClass ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(unref(config).titleIconCssClass)
            }, null, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(unref(config).title), 1)]), unref(showAddNote) && unref(config).isDescending ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "add-note btn btn-xs btn-action btn-square",
              onClick: withModifiers(onAddNoteClick, ["prevent"])
            }, _hoisted_6, 8, _hoisted_4)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_7, [createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => {
                var _unref$noteTypes;
                return [unref(config).isDescending && isAddNoteVisible.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(unref(script$2), {
                  modelValue: addNoteBag.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => addNoteBag.value = $event),
                  noteTypes: (_unref$noteTypes = unref(config).noteTypes) !== null && _unref$noteTypes !== void 0 ? _unref$noteTypes : [],
                  showAlert: noteOptions.showAlert,
                  showDate: noteOptions.showCreateDate,
                  showPrivate: noteOptions.showPrivate,
                  showSecurity: noteOptions.showSecurity,
                  hideCancel: unref(config).addAlwaysVisible,
                  autoSize: "",
                  autoFocus: !unref(config).addAlwaysVisible,
                  onCancel: onNoteAddCancel,
                  onSave: onNoteAddSave
                }, null, 8, ["modelValue", "noteTypes", "showAlert", "showDate", "showPrivate", "showSecurity", "hideCancel", "autoFocus"])])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }), createVNode(unref(script$3), {
              notes: notes,
              onBeginEditNote: onBeginEditNote,
              onEndEditNote: onEndEditNote
            }, null, 8, ["notes"]), createVNode(unref(TransitionVerticalCollapse), null, {
              default: withCtx(() => {
                var _unref$noteTypes2;
                return [!unref(config).isDescending && isAddNoteVisible.value ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(unref(script$2), {
                  modelValue: addNoteBag.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => addNoteBag.value = $event),
                  noteTypes: (_unref$noteTypes2 = unref(config).noteTypes) !== null && _unref$noteTypes2 !== void 0 ? _unref$noteTypes2 : [],
                  showAlert: noteOptions.showAlert,
                  showDate: noteOptions.showCreateDate,
                  showPrivate: noteOptions.showPrivate,
                  showSecurity: noteOptions.showSecurity,
                  hideCancel: unref(config).addAlwaysVisible,
                  autoSize: "",
                  autoFocus: !unref(config).addAlwaysVisible,
                  onCancel: onNoteAddCancel,
                  onSave: onNoteAddSave
                }, null, 8, ["modelValue", "noteTypes", "showAlert", "showDate", "showPrivate", "showSecurity", "hideCancel", "autoFocus"])])) : createCommentVNode("v-if", true)];
              }),
              _: 1
            }), unref(showAddNote) && !unref(config).isDescending ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "add-note btn btn-xs btn-action btn-square",
              onClick: withModifiers(onAddNoteClick, ["prevent"])
            }, _hoisted_12, 8, _hoisted_10)) : createCommentVNode("v-if", true)])])) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "src/Core/notes.obs";

    })
  };
}));
//# sourceMappingURL=notes.obs.js.map
