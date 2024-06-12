System.register(['vue', '@Obsidian/Utility/http', './popOver.obs', '@Obsidian/Utility/block', './loading.obs'], (function (exports) {
  'use strict';
  var createTextVNode, defineComponent, ref, watch, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createElementVNode, mergeProps, createCommentVNode, toDisplayString, nextTick, useHttp, PopOver, useSecurityGrantToken, Loading;
  return {
    setters: [function (module) {
      createTextVNode = module.createTextVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createElementVNode = module.createElementVNode;
      mergeProps = module.mergeProps;
      createCommentVNode = module.createCommentVNode;
      toDisplayString = module.toDisplayString;
      nextTick = module.nextTick;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      PopOver = module["default"];
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      Loading = module["default"];
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

      var _hoisted_1 = ["href"];
      var _hoisted_2 = {
        key: 0,
        class: "fa fa-circle"
      };
      var _hoisted_3 = createTextVNode();
      var _hoisted_4 = ["innerHTML"];
      var _hoisted_5 = {
        key: 0
      };
      var script = exports('default', defineComponent({
        name: 'personLink',
        props: {
          personId: {
            type: Number,
            required: true
          },
          personName: {
            type: String,
            default: ""
          },
          role: {
            type: String,
            default: ""
          },
          photoId: {
            type: Number,
            default: 0
          },
          popOverPlacement: {
            type: String,
            default: "right"
          }
        },
        setup(__props) {
          var props = __props;
          var http = useHttp();
          var isVisible = ref(false);
          var popOverContent = ref("");
          var triggerUpdate = ref(false);
          var securityGrantToken = useSecurityGrantToken();
          watch(isVisible, () => {
            if (isVisible.value && !popOverContent.value) {
              getPopOverContent();
            }
          });
          watch(popOverContent, _asyncToGenerator(function* () {
            if (isVisible.value) {
              yield nextTick();
              triggerUpdate.value = true;
            }
          }));
          watch(() => props.personId, () => {
            popOverContent.value = "";
          });
          function getPopOverContent() {
            return _getPopOverContent.apply(this, arguments);
          }
          function _getPopOverContent() {
            _getPopOverContent = _asyncToGenerator(function* () {
              var options = {
                personId: props.personId,
                securityGrantToken: securityGrantToken.value
              };
              var result = yield http.post("/api/v2/Controls/PersonLinkGetPopupHtml", undefined, options);
              if (result.isSuccess && result.data) {
                popOverContent.value = result.data;
              } else {
                popOverContent.value = "Unknown error while loading this person's data.";
              }
            });
            return _getPopOverContent.apply(this, arguments);
          }
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(PopOver), {
              isVisible: isVisible.value,
              "onUpdate:isVisible": _cache[0] || (_cache[0] = $event => isVisible.value = $event),
              placement: __props.popOverPlacement,
              triggerUpdate: triggerUpdate.value,
              "onUpdate:triggerUpdate": _cache[1] || (_cache[1] = $event => triggerUpdate.value = $event)
            }, {
              activator: withCtx(props => [createElementVNode("a", mergeProps(props, {
                href: '/Person/' + __props.personId
              }), [__props.photoId != 0 ? (openBlock(), createElementBlock("i", _hoisted_2)) : createCommentVNode("v-if", true), _hoisted_3, createElementVNode("strong", null, toDisplayString(__props.personName), 1)], 16, _hoisted_1)]),
              default: withCtx(() => [createVNode(unref(Loading), {
                isLoading: !popOverContent.value,
                isSmall: ""
              }, {
                default: withCtx(() => [createElementVNode("div", {
                  innerHTML: popOverContent.value
                }, null, 8, _hoisted_4)]),
                _: 1
              }, 8, ["isLoading"])]),
              _: 1
            }, 8, ["isVisible", "placement", "triggerUpdate"]), __props.role ? (openBlock(), createElementBlock("small", _hoisted_5, " (" + toDisplayString(__props.role) + ")", 1)) : createCommentVNode("v-if", true)], 64);
          };
        }
      }));

      script.__file = "Framework/Controls/personLink.obs";

    })
  };
}));
//# sourceMappingURL=personLink.obs.js.map
