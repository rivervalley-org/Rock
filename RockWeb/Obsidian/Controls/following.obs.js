System.register(['vue', '@Obsidian/Utility/dialogs', '@Obsidian/Utility/guid', '@Obsidian/Utility/http'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, unref, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, alert, toGuidOrNull, areEqual, emptyGuid, useHttp;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      unref = module.unref;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      normalizeClass = module.normalizeClass;
      createElementVNode = module.createElementVNode;
      createCommentVNode = module.createCommentVNode;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
    }, function (module) {
      useHttp = module.useHttp;
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

      var _hoisted_1 = ["title"];
      var script = exports('default', defineComponent({
        name: 'following',
        props: {
          entityTypeGuid: {
            type: String,
            required: false
          },
          entityKey: {
            type: String,
            required: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        },
        setup(__props) {
          var props = __props;
          var http = useHttp();
          var isEntityFollowed = ref(null);
          var isVisible = computed(() => {
            return !!props.entityTypeGuid && !!props.entityKey;
          });
          var followingClass = computed(() => {
            if (props.disabled) {
              return isEntityFollowed ? "text-primary" : "";
            }
            return isEntityFollowed.value ? "clickable text-primary" : "clickable";
          });
          var iconClass = computed(() => {
            return isEntityFollowed.value ? "fa fa-star" : "fa fa-star-o";
          });
          var tooltip = computed(() => {
            if (props.disabled) {
              return undefined;
            }
            return isEntityFollowed.value ? "Click to stop following." : "Click to follow.";
          });
          function getEntityFollowedState() {
            return _getEntityFollowedState.apply(this, arguments);
          }
          function _getEntityFollowedState() {
            _getEntityFollowedState = _asyncToGenerator(function* () {
              var entityTypeGuid = toGuidOrNull(props.entityTypeGuid);
              if (!entityTypeGuid || areEqual(entityTypeGuid, emptyGuid) || !props.entityKey) {
                isEntityFollowed.value = null;
                return;
              }
              var data = {
                entityTypeGuid,
                entityKey: props.entityKey
              };
              var response = yield http.post("/api/v2/Controls/FollowingGetFollowing", undefined, data);
              isEntityFollowed.value = response.isSuccess && response.data && response.data.isFollowing;
            });
            return _getEntityFollowedState.apply(this, arguments);
          }
          function onFollowClick() {
            return _onFollowClick.apply(this, arguments);
          }
          function _onFollowClick() {
            _onFollowClick = _asyncToGenerator(function* () {
              if (props.disabled) {
                return;
              }
              var entityTypeGuid = toGuidOrNull(props.entityTypeGuid);
              if (isEntityFollowed.value === null || !entityTypeGuid || areEqual(entityTypeGuid, emptyGuid) || !props.entityKey) {
                return;
              }
              var data = {
                entityTypeGuid,
                entityKey: props.entityKey,
                isFollowing: !isEntityFollowed.value
              };
              var response = yield http.post("/api/v2/Controls/FollowingSetFollowing", undefined, data);
              if (response.isSuccess) {
                isEntityFollowed.value = !isEntityFollowed.value;
              } else {
                yield alert("Unable to update followed state.");
              }
            });
            return _onFollowClick.apply(this, arguments);
          }
          watch([() => props.entityTypeGuid, () => props.entityKey], () => {
            getEntityFollowedState();
          });
          getEntityFollowedState();
          return (_ctx, _cache) => {
            return unref(isVisible) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(followingClass)),
              title: unref(tooltip),
              onClick: onFollowClick
            }, [createElementVNode("i", {
              class: normalizeClass(unref(iconClass))
            }, null, 2)], 10, _hoisted_1)) : createCommentVNode("v-if", true);
          };
        }
      }));

      script.__file = "Framework/Controls/following.obs";

    })
  };
}));
//# sourceMappingURL=following.obs.js.map
