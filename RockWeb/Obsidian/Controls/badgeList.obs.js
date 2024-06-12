System.register(['vue', '@Obsidian/Utility/guid', '@Obsidian/Utility/http', '@Obsidian/Utility/popover', '@Obsidian/Utility/tooltip'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, Fragment, renderList, nextTick, toGuidOrNull, emptyGuid, useHttp, popover, tooltip;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
      nextTick = module.nextTick;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      popover = module.popover;
    }, function (module) {
      tooltip = module.tooltip;
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

      var _hoisted_1 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'badgeList',
        props: {
          entityTypeGuid: {
            type: String,
            required: false
          },
          entityKey: {
            type: String,
            required: false
          },
          badgeTypeGuids: {
            type: Array,
            required: false
          }
        },
        setup(__props) {
          var props = __props;
          var http = useHttp();
          var badges = ref([]);
          var containerRef = ref(null);
          function loadBadges() {
            return _loadBadges.apply(this, arguments);
          }
          function _loadBadges() {
            _loadBadges = _asyncToGenerator(function* () {
              var _props$badgeTypeGuids, _toGuidOrNull;
              var data = {
                badgeTypeGuids: (_props$badgeTypeGuids = props.badgeTypeGuids) === null || _props$badgeTypeGuids === void 0 ? void 0 : _props$badgeTypeGuids.map(b => toGuidOrNull(b)).filter(g => g !== null).map(g => g),
                entityTypeGuid: (_toGuidOrNull = toGuidOrNull(props.entityTypeGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
                entityKey: props.entityKey
              };
              var result = yield http.post("/api/v2/Controls/BadgeListGetBadges", undefined, data);
              if (result.isSuccess && result.data) {
                badges.value = result.data.map(b => {
                  var _b$html;
                  return (_b$html = b.html) !== null && _b$html !== void 0 ? _b$html : "";
                });
                var script = "";
                var _iterator = _createForOfIteratorHelper(result.data),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var badge = _step.value;
                    if (badge.javaScript) {
                      script += badge.javaScript;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                if (script !== "") {
                  nextTick(() => {
                    var scriptNode = document.createElement("script");
                    scriptNode.type = "text/javascript";
                    scriptNode.innerText = script;
                    document.body.appendChild(scriptNode);
                  });
                }
                nextTick(() => {
                  if (!containerRef.value) {
                    return;
                  }
                  tooltip(Array.from(containerRef.value.querySelectorAll(".rockbadge[data-toggle=\"tooltip\"]")));
                  popover(Array.from(containerRef.value.querySelectorAll(".rockbadge[data-toggle=\"popover\"]")));
                });
              } else {
                console.error("Error loading badges: ".concat(result.errorMessage || "Unknown error"));
                badges.value = [];
              }
            });
            return _loadBadges.apply(this, arguments);
          }
          watch([() => props.badgeTypeGuids, () => props.entityKey, () => props.entityTypeGuid], () => {
            loadBadges();
          });
          loadBadges();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "containerRef",
              ref: containerRef,
              style: {
                "display": "flex"
              }
            }, [(openBlock(true), createElementBlock(Fragment, null, renderList(badges.value, badge => {
              return openBlock(), createElementBlock("div", {
                innerHTML: badge
              }, null, 8, _hoisted_1);
            }), 256))], 512);
          };
        }
      }));

      script.__file = "Framework/Controls/badgeList.obs";

    })
  };
}));
//# sourceMappingURL=badgeList.obs.js.map
