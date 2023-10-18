System.register(['@Obsidian/Utility/http', 'vue'], (function (exports) {
  'use strict';
  var useHttp, defineComponent, ref, computed, watch;
  return {
    setters: [function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
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

      var following = exports('default', defineComponent({
        name: "Following",
        components: {},
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
        setup(props) {
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
              return null;
            }
            return isEntityFollowed.value ? "Click to stop following." : "Click to follow.";
          });
          var getEntityFollowedState = function () {
            var _ref = _asyncToGenerator(function* () {
              if (!props.entityTypeGuid || !props.entityKey) {
                isEntityFollowed.value = null;
                return;
              }
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey
              };
              var response = yield http.post("/api/v2/Controls/FollowingGetFollowing", undefined, data);
              isEntityFollowed.value = response.isSuccess && response.data && response.data.isFollowing;
            });
            return function getEntityFollowedState() {
              return _ref.apply(this, arguments);
            };
          }();
          var onFollowClick = function () {
            var _ref2 = _asyncToGenerator(function* () {
              if (props.disabled) {
                return;
              }
              if (isEntityFollowed.value === null || !props.entityTypeGuid || !props.entityKey) {
                return;
              }
              var data = {
                entityTypeGuid: props.entityTypeGuid,
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
            return function onFollowClick() {
              return _ref2.apply(this, arguments);
            };
          }();
          watch([() => props.entityTypeGuid, () => props.entityKey], () => {
            getEntityFollowedState();
          });
          getEntityFollowedState();
          return {
            followingClass,
            iconClass,
            isVisible,
            onFollowClick,
            tooltip
          };
        },
        template: "\n<span v-if=\"isVisible\" :class=\"followingClass\" :title=\"tooltip\" @click=\"onFollowClick\">\n    <i :class=\"iconClass\"></i>\n</span>\n"
      }));

    })
  };
}));
//# sourceMappingURL=following.js.map
