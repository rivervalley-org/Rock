System.register(['vue', '@Obsidian/Controls/rockFormField.obs', '@Obsidian/Utility/http', '@Obsidian/Utility/util', '@Obsidian/Utility/component', '@Obsidian/Libs/floating-ui', '@Obsidian/ValidationRules'], (function (exports) {
  'use strict';
  var pushScopeId, popScopeId, createTextVNode, defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, openBlock, createBlock, unref, mergeProps, withCtx, createElementVNode, renderSlot, createElementBlock, normalizeStyle, Fragment, renderList, normalizeClass, createCommentVNode, toDisplayString, RockFormField, useHttp, debounce, useStandardRockFormFieldProps, standardRockFormFieldProps, useFloating, shift, arrow, normalizeRules;
  return {
    setters: [function (module) {
      pushScopeId = module.pushScopeId;
      popScopeId = module.popScopeId;
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      onMounted = module.onMounted;
      onBeforeUnmount = module.onBeforeUnmount;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      mergeProps = module.mergeProps;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      renderSlot = module.renderSlot;
      createElementBlock = module.createElementBlock;
      normalizeStyle = module.normalizeStyle;
      Fragment = module.Fragment;
      renderList = module.renderList;
      normalizeClass = module.normalizeClass;
      createCommentVNode = module.createCommentVNode;
      toDisplayString = module.toDisplayString;
    }, function (module) {
      RockFormField = module["default"];
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      debounce = module.debounce;
    }, function (module) {
      useStandardRockFormFieldProps = module.useStandardRockFormFieldProps;
      standardRockFormFieldProps = module.standardRockFormFieldProps;
    }, function (module) {
      useFloating = module.useFloating;
      shift = module.shift;
      arrow = module.arrow;
    }, function (module) {
      normalizeRules = module.normalizeRules;
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

      var _withScopeId = n => (pushScopeId("data-v-699950e0"), n = n(), popScopeId(), n);
      var _hoisted_1 = ["id"];
      var _hoisted_2 = ["placeholder"];
      var _hoisted_3 = _withScopeId(() => createElementVNode("path", {
        d: "M0,7L5,0L10,7"
      }, null, -1));
      var _hoisted_4 = [_hoisted_3];
      var _hoisted_5 = {
        class: "body"
      };
      var _hoisted_6 = ["data-identifier", "onClick", "onMousemove"];
      var _hoisted_7 = ["src"];
      var _hoisted_8 = {
        class: "mention-search-item-text"
      };
      var _hoisted_9 = {
        class: "mention-search-item-title"
      };
      var _hoisted_10 = {
        class: "mention-search-item-name"
      };
      var _hoisted_11 = {
        key: 0,
        class: "mention-search-item-campus"
      };
      var _hoisted_12 = {
        class: "mention-search-item-subtitle text-muted"
      };
      var _hoisted_13 = createTextVNode(" ");
      var script = exports('default', defineComponent({
        name: 'noteTextEditor',
        props: _objectSpread2({
          modelValue: {
            type: String,
            default: ""
          },
          placeholder: {
            type: String,
            required: false
          },
          mentionEnabled: {
            type: Boolean,
            default: false
          },
          allowHtml: {
            type: Boolean,
            default: false
          }
        }, standardRockFormFieldProps),
        emits: ["update:modelValue"],
        setup(__props, _ref) {
          var _props$modelValue;
          var emit = _ref.emit;
          var props = __props;
          var standardProps = useStandardRockFormFieldProps(props);
          var http = useHttp();
          var contentElement = ref();
          var relativeElement = ref();
          var mentionSearchContainerElement = ref();
          var mentionPickerElement = ref();
          var mentionPickerArrowElement = ref();
          var floatingReference = ref();
          var internalValue = ref((_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : "");
          var inMentionMode = ref(false);
          var mentionSearchResults = ref([]);
          var currentSearchItem = ref();
          var mentionStart = ref(0);
          var performSearch = debounce(() => searchForMentions(), 350, false);
          var searchCancellationToken = null;
          var _useFloating = useFloating(floatingReference, mentionPickerElement, {
              middleware: [shift(), arrow({
                element: mentionPickerArrowElement
              })]
            }),
            floatingStyles = _useFloating.floatingStyles,
            middlewareData = _useFloating.middlewareData;
          var mentionPickerVisible = computed(() => {
            return inMentionMode.value && mentionSearchResults.value.length > 0;
          });
          var augmentedRules = computed(() => {
            var rules = normalizeRules(props.rules);
            if (!props.allowHtml) {
              rules.push("nohtml");
            }
            return rules;
          });
          function updateContent(content) {
            if (contentElement.value) {
              contentElement.value.innerHTML = content;
              var mentionSpans = contentElement.value.querySelectorAll("span.mention");
              var _iterator = _createForOfIteratorHelper(mentionSpans),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;
                  if (element instanceof HTMLElement) {
                    element.contentEditable = "false";
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
          function updateModelValue() {
            var newValue = getCurrentContent();
            internalValue.value = newValue;
            if (newValue !== props.modelValue) {
              emit("update:modelValue", newValue);
            }
          }
          function getCurrentContent() {
            if (!contentElement.value) {
              return "";
            }
            var clone = contentElement.value.cloneNode(true);
            var _iterator2 = _createForOfIteratorHelper(clone.children),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var child = _step2.value;
                if (child instanceof HTMLElement && child.hasAttribute("contentEditable")) {
                  child.removeAttribute("contentEditable");
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var value = clone.innerHTML;
            if (value.endsWith("<br>")) {
              value = value.substring(0, value.length - 4);
            }
            return value;
          }
          function moveSelectionAfter(afterNode) {
            var selection = window.getSelection();
            if (!selection) {
              return;
            }
            var newRange = document.createRange();
            if (afterNode.nextSibling instanceof Text) {
              newRange.setStart(afterNode.nextSibling, 0);
              newRange.setEnd(afterNode.nextSibling, 0);
            } else {
              newRange.setStartAfter(afterNode);
            }
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
          function getCaretPixelPosition() {
            var selection = window.getSelection();
            if (!selection || selection.rangeCount <= 0) {
              return undefined;
            }
            var range = selection.getRangeAt(0);
            var rect;
            if (range.startContainer instanceof Text) {
              rect = range.getBoundingClientRect();
            } else if (range.startOffset < range.startContainer.childNodes.length) {
              var childNode = range.startContainer.childNodes[range.startOffset];
              if (childNode instanceof HTMLElement) {
                rect = childNode.getBoundingClientRect();
              }
            }
            if (!rect) {
              return {
                x: 0,
                y: 0
              };
            }
            return {
              x: rect.left,
              y: rect.bottom
            };
          }
          function updatePopoverPosition() {
            var caretPos = getCaretPixelPosition();
            if (caretPos) {
              floatingReference.value = {
                getBoundingClientRect() {
                  return {
                    width: 0,
                    height: 0,
                    x: caretPos.x,
                    y: caretPos.y,
                    left: caretPos.x,
                    top: caretPos.y,
                    right: caretPos.x,
                    bottom: caretPos.y
                  };
                }
              };
            }
          }
          function getCurrentMentionText() {
            var _selection$anchorNode;
            var selection = document.getSelection();
            if (!selection || !(selection.anchorNode instanceof Text)) {
              return "";
            }
            var anchorText = (_selection$anchorNode = selection.anchorNode.textContent) !== null && _selection$anchorNode !== void 0 ? _selection$anchorNode : "";
            var text = "";
            for (var i = selection.anchorOffset - 1; i >= 0; i--) {
              if (anchorText[i] === "@") {
                break;
              }
              text = "".concat(anchorText[i]).concat(text);
            }
            return text;
          }
          function searchForMentions() {
            return _searchForMentions.apply(this, arguments);
          }
          function _searchForMentions() {
            _searchForMentions = _asyncToGenerator(function* () {
              var _response$data$items;
              if (!inMentionMode.value) {
                return;
              }
              var cancellationToken = ref(false);
              if (searchCancellationToken) {
                searchCancellationToken.value = true;
              }
              searchCancellationToken = cancellationToken;
              var options = {
                name: getCurrentMentionText()
              };
              var response = yield http.post("/api/v2/Controls/NoteEditorMentionSearch", undefined, options);
              if (!response.isSuccess || !response.data) {
                return;
              }
              if (cancellationToken.value) {
                return;
              }
              mentionSearchResults.value = (_response$data$items = response.data.items) !== null && _response$data$items !== void 0 ? _response$data$items : [];
              currentSearchItem.value = mentionSearchResults.value.find(r => {
                var _currentSearchItem$va3;
                return r.identifier === ((_currentSearchItem$va3 = currentSearchItem.value) === null || _currentSearchItem$va3 === void 0 ? void 0 : _currentSearchItem$va3.identifier);
              });
              if (!currentSearchItem.value && mentionSearchResults.value.length > 0) {
                currentSearchItem.value = mentionSearchResults.value[0];
              }
            });
            return _searchForMentions.apply(this, arguments);
          }
          function handlePopoverKeydown(selection, event) {
            if (event.key === "@") {
              mentionStart.value = getAnchorPositionInText(selection);
              inMentionMode.value = true;
              mentionSearchResults.value = [];
              currentSearchItem.value = undefined;
              return;
            }
            if (event.key === "," || event.key === "." || event.key === "Escape") {
              mentionStart.value = getAnchorPositionInText(selection);
              inMentionMode.value = true;
              mentionSearchResults.value = [];
              currentSearchItem.value = undefined;
              return;
            }
            if (event.key === "Shift" || event.key === "Control" || event.key === "Alt" || event.key === "OS" || event.key === "Meta") {
              return;
            }
            if (event.key === "Backspace") {
              return;
            }
            if (event.key === "ArrowUp" || event.key === "ArrowDown") {
              event.preventDefault();
              if (mentionSearchResults.value.length === 0) {
                return;
              }
              var index = mentionSearchResults.value.findIndex(r => {
                var _currentSearchItem$va;
                return r.identifier === ((_currentSearchItem$va = currentSearchItem.value) === null || _currentSearchItem$va === void 0 ? void 0 : _currentSearchItem$va.identifier);
              });
              if (index === -1) {
                currentSearchItem.value = mentionSearchResults.value.length > 0 ? mentionSearchResults.value[0] : undefined;
              } else if (event.key === "ArrowDown" && index + 1 < mentionSearchResults.value.length) {
                currentSearchItem.value = mentionSearchResults.value[index + 1];
              } else if (event.key === "ArrowUp" && index - 1 >= 0) {
                currentSearchItem.value = mentionSearchResults.value[index - 1];
              }
              if (currentSearchItem.value && mentionSearchContainerElement.value) {
                var el = mentionSearchContainerElement.value.querySelector("[data-identifier='".concat(currentSearchItem.value.identifier, "']"));
                if (el) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                  });
                }
              }
              return;
            }
            if (event.key === "Enter") {
              event.preventDefault();
              if (!(selection.anchorNode instanceof Text) || !currentSearchItem.value) {
                inMentionMode.value = false;
                return;
              }
              insertMention(selection, currentSearchItem.value);
              inMentionMode.value = false;
              return;
            }
            if (event.key.length > 1) {
              console.log("Aborting mention on '".concat(event.key, "'."));
              inMentionMode.value = false;
            }
          }
          function insertMention(selection, mentionItem) {
            var mentionText = getCurrentMentionText();
            var range = selection.getRangeAt(0);
            var newRange = document.createRange();
            newRange.setStart(range.startContainer, range.startOffset - mentionText.length - 1);
            newRange.setEnd(range.endContainer, range.endOffset);
            selection.removeAllRanges();
            selection.addRange(newRange);
            newRange.deleteContents();
            if (mentionItem.displayName && mentionItem.identifier) {
              var mention = document.createElement("span");
              mention.innerText = "@".concat(mentionItem.displayName);
              mention.classList.add("mention");
              mention.contentEditable = "false";
              mention.dataset["identifier"] = mentionItem.identifier;
              newRange.insertNode(mention);
              moveSelectionAfter(mention);
            }
            updateModelValue();
          }
          function getAnchorPositionInText(selection) {
            if (!selection.anchorNode || !contentElement.value || !contentElement.value.contains(selection.anchorNode)) {
              return 0;
            }
            if (selection.rangeCount === 0) {
              return 0;
            }
            var position = selection.anchorOffset;
            var realRange = selection.getRangeAt(0);
            var range = realRange.cloneRange();
            range.selectNodeContents(contentElement.value);
            range.setEnd(realRange.endContainer, realRange.endOffset);
            position = range.toString().length;
            return position;
          }
          function onInput() {
            updateModelValue();
            if (!inMentionMode.value) {
              return;
            }
            onDocumentSelectionChange();
            if (!inMentionMode.value) {
              return;
            }
            performSearch();
            updatePopoverPosition();
          }
          function onBlur() {
            updateModelValue();
          }
          function onPaste(event) {
            var _event$clipboardData;
            event.preventDefault();
            if (inMentionMode.value) {
              inMentionMode.value = false;
            }
            var text = (_event$clipboardData = event.clipboardData) === null || _event$clipboardData === void 0 ? void 0 : _event$clipboardData.getData("text/plain");
            if (!text) {
              return;
            }
            var sel = window.getSelection();
            if (sel) {
              var range = sel.getRangeAt(0);
              var textNode = document.createTextNode(text);
              range.deleteContents();
              range.insertNode(textNode);
              moveSelectionAfter(textNode);
              updateModelValue();
            }
          }
          function onKeydown(event) {
            var sel = window.getSelection();
            if (!sel) {
              return;
            }
            if (inMentionMode.value) {
              handlePopoverKeydown(sel, event);
              return;
            }
            if (event.key === "Enter") {
              event.preventDefault();
              var range = sel.getRangeAt(0);
              var textNode = document.createTextNode("\n");
              range.deleteContents();
              range.insertNode(textNode);
              moveSelectionAfter(textNode);
              updateModelValue();
            } else if (event.key === "@" && props.mentionEnabled) {
              mentionStart.value = getAnchorPositionInText(sel);
              inMentionMode.value = true;
              mentionSearchResults.value = [];
              currentSearchItem.value = undefined;
            } else if (event.key === "Backspace" && sel.anchorNode) {
              var targetNode = null;
              if (sel.anchorNode.parentElement instanceof HTMLElement && sel.anchorNode.parentElement.classList.contains("mention")) {
                targetNode = sel.anchorNode.parentElement;
              } else if (sel.anchorNode instanceof Text) {
                if (sel.anchorOffset > 0) {
                  return;
                }
                targetNode = sel.anchorNode.previousSibling;
              } else if (sel.anchorNode instanceof HTMLElement) {
                targetNode = sel.anchorNode.childNodes[sel.anchorOffset - 1];
              }
              if (targetNode instanceof HTMLElement && targetNode.classList.contains("mention")) {
                event.preventDefault();
                targetNode.remove();
                updateModelValue();
              }
            }
          }
          function onDocumentSelectionChange() {
            var selection = document.getSelection();
            if (!selection) {
              return;
            }
            for (var i = 0; i < selection.rangeCount; i++) {
              var range = selection.getRangeAt(i);
              if (inMentionMode.value) {
                var position = getAnchorPositionInText(selection);
                if (range.startContainer !== range.endContainer || range.startOffset !== range.endOffset) {
                  inMentionMode.value = false;
                }
                if (position <= mentionStart.value || position > mentionStart.value + 15) {
                  inMentionMode.value = false;
                }
              }
            }
          }
          function onMentionSelect(mention, event) {
            event.stopPropagation();
            var sel = window.getSelection();
            if (sel) {
              insertMention(sel, mention);
            }
            inMentionMode.value = false;
          }
          function onMentionHover(mention) {
            currentSearchItem.value = mention;
          }
          watch(() => props.modelValue, () => {
            if (props.modelValue !== getCurrentContent()) {
              updateContent(props.modelValue);
            }
          });
          watch(middlewareData, () => {
            if (middlewareData.value.arrow && mentionPickerArrowElement.value) {
              var _middlewareData$value;
              mentionPickerArrowElement.value.style.left = "".concat((_middlewareData$value = middlewareData.value.arrow.x) !== null && _middlewareData$value !== void 0 ? _middlewareData$value : 0, "px");
            }
          });
          onMounted(() => {
            updateContent(props.modelValue);
            document.addEventListener("selectionchange", onDocumentSelectionChange);
          });
          onBeforeUnmount(() => {
            document.removeEventListener("selectionchange", onDocumentSelectionChange);
          });
          watch(contentElement, () => {
            if (contentElement.value && internalValue.value) {
              updateContent(internalValue.value);
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(RockFormField), mergeProps({
              modelValue: internalValue.value
            }, unref(standardProps), {
              formGroupClasses: 'rock-note-text-editor ' + _ctx.formGroupClasses,
              rules: unref(augmentedRules),
              name: "note-text-editor"
            }), {
              default: withCtx(_ref2 => {
                var uniqueId = _ref2.uniqueId;
                return [createElementVNode("div", {
                  ref_key: "relativeElement",
                  ref: relativeElement,
                  class: "control-wrapper rock-text-container",
                  style: {
                    "position": "relative"
                  }
                }, [renderSlot(_ctx.$slots, "prepend", {
                  isInputGroupSupported: false
                }), createElementVNode("div", {
                  id: uniqueId
                }, [createElementVNode("div", {
                  ref_key: "contentElement",
                  ref: contentElement,
                  class: "note-text form-control",
                  contenteditable: "true",
                  spellcheck: "false",
                  placeholder: __props.placeholder,
                  onInput: onInput,
                  onBlur: onBlur,
                  onPaste: onPaste,
                  onKeydown: onKeydown
                }, null, 40, _hoisted_2)], 8, _hoisted_1), unref(mentionPickerVisible) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  ref_key: "mentionPickerElement",
                  ref: mentionPickerElement,
                  style: normalizeStyle(unref(floatingStyles)),
                  class: "mention-picker styled-scroll"
                }, [(openBlock(), createElementBlock("svg", {
                  ref_key: "mentionPickerArrowElement",
                  ref: mentionPickerArrowElement,
                  class: "arrow"
                }, _hoisted_4, 512)), createElementVNode("div", _hoisted_5, [createElementVNode("div", {
                  ref_key: "mentionSearchContainerElement",
                  ref: mentionSearchContainerElement,
                  class: "mention-search-container"
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(mentionSearchResults.value, item => {
                  var _currentSearchItem$va2;
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(["mention-search-item", {
                      'active': item.identifier === ((_currentSearchItem$va2 = currentSearchItem.value) === null || _currentSearchItem$va2 === void 0 ? void 0 : _currentSearchItem$va2.identifier)
                    }]),
                    role: "option",
                    ariaSelected: "{ item.identifier === currentSearchItem?.identifier }",
                    "data-identifier": item.identifier,
                    onClick: $event => onMentionSelect(item, $event),
                    onMousedown: _cache[0] || (_cache[0] = $event => $event.preventDefault()),
                    onMousemove: $event => onMentionHover(item)
                  }, [item.imageUrl ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: item.imageUrl,
                    class: "mention-search-item-image",
                    loading: "lazy",
                    width: "24",
                    height: "24"
                  }, null, 8, _hoisted_7)) : createCommentVNode("v-if", true), createElementVNode("div", _hoisted_8, [createElementVNode("div", _hoisted_9, [createElementVNode("div", _hoisted_10, toDisplayString(item.displayName), 1), item.campusName ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(item.campusName), 1)) : createCommentVNode("v-if", true)]), createElementVNode("div", _hoisted_12, [item.email ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [createTextVNode(toDisplayString(item.email), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [_hoisted_13], 64))])])], 42, _hoisted_6);
                }), 256))], 512)])], 4)) : createCommentVNode("v-if", true), renderSlot(_ctx.$slots, "append", {
                  isInputGroupSupported: false
                })], 512)];
              }),
              _: 3
            }, 16, ["modelValue", "formGroupClasses", "rules"]);
          };
        }
      }));

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

      var css_248z = ".rock-text-container[data-v-699950e0] .popover{padding:0}.rock-text-container[data-v-699950e0] .popover-content{border-radius:6px;padding:0}.note-text[data-v-699950e0]{border:1px solid #d2d2d2;border-radius:var(--input-border-radius,0);max-height:300px;min-height:88px;outline:0;overflow-y:auto;padding:6px 12px;resize:vertical;white-space:pre-wrap}.note-text[data-v-699950e0]:focus{border:var(--focus-state-border)}.note-text[data-v-699950e0]:empty:before{color:#90949c;content:attr(placeholder);pointer-events:none}.note-text[data-v-699950e0]:focus:empty:before{color:#bec3c9}.note-text[data-v-699950e0]:focus:before{color:initial;content:normal;pointer-events:auto}.note-text[data-v-699950e0] .mention{color:#006dcc}.mention-picker[data-v-699950e0]{contain:layout paint;filter:drop-shadow(rgba(51,51,51,.533) 0 0 2px);z-index:1010}.mention-picker>.body[data-v-699950e0]{background-color:#fff;border-radius:4px;margin-top:6px;overflow:hidden}.mention-picker>.arrow[data-v-699950e0]{fill:#fff;height:7px;position:absolute;width:10px}.mention-search-container[data-v-699950e0]{max-height:216px;max-width:100%;overflow-x:clip;overflow-y:auto;width:315px}.mention-search-item[data-v-699950e0]{align-items:center;cursor:pointer;display:flex;font-size:14px;height:48px;line-height:115%;padding:0 16px}.mention-search-item.active[data-v-699950e0]{background-color:#f5f5f5}.mention-search-item-image[data-v-699950e0]{align-self:center;border-radius:12px;height:24px;margin-right:8px;width:24px}.mention-search-item-text[data-v-699950e0]{display:flex;flex:1;flex-direction:column;min-width:0}.mention-search-item-title[data-v-699950e0]{display:flex}.mention-search-item-name[data-v-699950e0]{flex:1;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mention-search-item-campus[data-v-699950e0]{background-color:#eee;border-radius:4px;color:#343a40;font-size:10px;line-height:1;margin-left:4px;padding:2px 4px}.mention-search-item-subtitle[data-v-699950e0]{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
      styleInject(css_248z);

      script.__scopeId = "data-v-699950e0";
      script.__file = "Framework/Controls/noteTextEditor.obs";

    })
  };
}));
//# sourceMappingURL=noteTextEditor.obs.js.map
