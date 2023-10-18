System.register(['vue'], (function (exports) {
  'use strict';
  var defineComponent, h;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      h = module.h;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

      var itemsWithPreAndPostHtml = exports('default', defineComponent({
        props: {
          items: {
            type: Array,
            default: []
          }
        },
        setup: (props, _ref) => {
          var slots = _ref.slots;
          var renderCt;
          function childrenToVNodes(node, slots) {
            return Array.from(node.childNodes).map(node => domToVNodes(node, slots));
          }
          function domToVNodes(domNode, slots) {
            var attributes = {};
            var children;
            var text;
            var el;
            var textNode;
            switch (domNode.nodeType) {
              case 1:
                el = domNode;
                var _iterator = _createForOfIteratorHelper(el.attributes),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _step$value = _step.value,
                      name = _step$value.name,
                      value = _step$value.value;
                    attributes["^".concat(name)] = value;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                children = childrenToVNodes(el, slots);
                return h(el.tagName.toLowerCase(), attributes, children);
              case 3:
                textNode = domNode;
                text = textNode.data;
                if (/%%%:::[a-zA-Z0-9-_]+:::%%%/.test(text)) {
                  var parts = text.split("%%%");
                  return parts.map(txt => {
                    if (/:::[a-zA-Z0-9-_]+:::/.test(txt)) {
                      var matches = txt.match(/[a-zA-Z0-9-_]+/);
                      if (matches && matches.length > 0) {
                        var _slots$slotName, _slots$slotName2;
                        var _matches = _slicedToArray(matches, 1),
                          slotName = _matches[0];
                        return (_slots$slotName = (_slots$slotName2 = slots[slotName]) === null || _slots$slotName2 === void 0 ? void 0 : _slots$slotName2.call(slots)) !== null && _slots$slotName !== void 0 ? _slots$slotName : slotName;
                      }
                      return txt;
                    }
                    return txt;
                  });
                }
                return textNode.data;
            }
            return "";
          }
          return () => {
            var html = props.items.map(_ref2 => {
              var slotName = _ref2.slotName,
                preHtml = _ref2.preHtml,
                postHtml = _ref2.postHtml;
              return "".concat(preHtml, "%%%:::").concat(slotName, ":::%%%").concat(postHtml);
            }).join("");
            if (!renderCt) {
              renderCt = document.createElement("div");
            }
            renderCt.innerHTML = html;
            return childrenToVNodes(renderCt, slots);
          };
        }
      }));

    })
  };
}));
//# sourceMappingURL=itemsWithPreAndPostHtml.js.map
