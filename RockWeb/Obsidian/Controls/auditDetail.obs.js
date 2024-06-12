System.register(['vue', '@Obsidian/Utility/http', '@Obsidian/Utility/block', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, watch, openBlock, createElementBlock, unref, toDisplayString, createCommentVNode, withModifiers, useHttp, useSecurityGrantToken, toGuidOrNull, areEqual, emptyGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      unref = module.unref;
      toDisplayString = module.toDisplayString;
      createCommentVNode = module.createCommentVNode;
      withModifiers = module.withModifiers;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
    }, function (module) {
      toGuidOrNull = module.toGuidOrNull;
      areEqual = module.areEqual;
      emptyGuid = module.emptyGuid;
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
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-4"
      };
      var _hoisted_3 = createElementVNode("dt", null, "Created By", -1);
      var _hoisted_4 = ["href"];
      var _hoisted_5 = {
        key: 1
      };
      var _hoisted_6 = {
        key: 2
      };
      var _hoisted_7 = {
        class: "col-md-4"
      };
      var _hoisted_8 = createElementVNode("dt", null, "Modified By", -1);
      var _hoisted_9 = ["href"];
      var _hoisted_10 = {
        key: 1
      };
      var _hoisted_11 = {
        key: 2
      };
      var _hoisted_12 = {
        class: "col-md-4"
      };
      var _hoisted_13 = {
        key: 0
      };
      var _hoisted_14 = ["onClick"];
      var _hoisted_15 = {
        key: 1
      };
      var _hoisted_16 = ["onClick"];
      var _hoisted_17 = {
        key: 2
      };
      var _hoisted_18 = ["onClick"];
      var script = exports('default', defineComponent({
        name: 'auditDetail',
        props: {
          entityTypeGuid: {
            type: String,
            required: false
          },
          entityKey: {
            type: String,
            required: false
          }
        },
        setup(__props) {
          var props = __props;
          var securityGrantToken = useSecurityGrantToken();
          var http = useHttp();
          var auditBag = ref(null);
          var id = computed(() => {
            var _auditBag$value$id$to, _auditBag$value, _auditBag$value$id;
            return (_auditBag$value$id$to = (_auditBag$value = auditBag.value) === null || _auditBag$value === void 0 ? void 0 : (_auditBag$value$id = _auditBag$value.id) === null || _auditBag$value$id === void 0 ? void 0 : _auditBag$value$id.toString()) !== null && _auditBag$value$id$to !== void 0 ? _auditBag$value$id$to : "";
          });
          var idKey = computed(() => {
            var _auditBag$value$idKey, _auditBag$value2;
            return (_auditBag$value$idKey = (_auditBag$value2 = auditBag.value) === null || _auditBag$value2 === void 0 ? void 0 : _auditBag$value2.idKey) !== null && _auditBag$value$idKey !== void 0 ? _auditBag$value$idKey : "";
          });
          var guidText = computed(() => {
            var _auditBag$value$guid, _auditBag$value3;
            return (_auditBag$value$guid = (_auditBag$value3 = auditBag.value) === null || _auditBag$value3 === void 0 ? void 0 : _auditBag$value3.guid) !== null && _auditBag$value$guid !== void 0 ? _auditBag$value$guid : "";
          });
          var createdByPersonId = computed(() => {
            var _auditBag$value4;
            return (_auditBag$value4 = auditBag.value) === null || _auditBag$value4 === void 0 ? void 0 : _auditBag$value4.createdByPersonId;
          });
          var createdByName = computed(() => {
            var _auditBag$value$creat, _auditBag$value5;
            return (_auditBag$value$creat = (_auditBag$value5 = auditBag.value) === null || _auditBag$value5 === void 0 ? void 0 : _auditBag$value5.createdByName) !== null && _auditBag$value$creat !== void 0 ? _auditBag$value$creat : "";
          });
          var createdRelativeTime = computed(() => {
            var _auditBag$value6;
            return (_auditBag$value6 = auditBag.value) === null || _auditBag$value6 === void 0 ? void 0 : _auditBag$value6.createdRelativeTime;
          });
          var modifiedByPersonId = computed(() => {
            var _auditBag$value7;
            return (_auditBag$value7 = auditBag.value) === null || _auditBag$value7 === void 0 ? void 0 : _auditBag$value7.modifiedByPersonId;
          });
          var modifiedByName = computed(() => {
            var _auditBag$value$modif, _auditBag$value8;
            return (_auditBag$value$modif = (_auditBag$value8 = auditBag.value) === null || _auditBag$value8 === void 0 ? void 0 : _auditBag$value8.modifiedByName) !== null && _auditBag$value$modif !== void 0 ? _auditBag$value$modif : "";
          });
          var modifiedRelativeTime = computed(() => {
            var _auditBag$value9;
            return (_auditBag$value9 = auditBag.value) === null || _auditBag$value9 === void 0 ? void 0 : _auditBag$value9.modifiedRelativeTime;
          });
          var showId = ref(true);
          var showGuid = ref(false);
          function getPersonLink(personId) {
            return "/Person/".concat(personId);
          }
          function loadAuditBag() {
            return _loadAuditBag.apply(this, arguments);
          }
          function _loadAuditBag() {
            _loadAuditBag = _asyncToGenerator(function* () {
              var entityTypeGuid = toGuidOrNull(props.entityTypeGuid);
              if (!entityTypeGuid || areEqual(entityTypeGuid, emptyGuid) || !props.entityKey) {
                auditBag.value = null;
                return;
              }
              var data = {
                entityTypeGuid,
                entityKey: props.entityKey,
                securityGrantToken: securityGrantToken.value
              };
              var result = yield http.post("/api/v2/Controls/AuditDetailGetAuditDetails", undefined, data);
              auditBag.value = result.isSuccess && result.data ? result.data : null;
            });
            return _loadAuditBag.apply(this, arguments);
          }
          function onIdClick() {
            if (showId.value) {
              showId.value = false;
              showGuid.value = true;
            } else if (showGuid.value) {
              showId.value = false;
              showGuid.value = false;
            } else {
              showId.value = true;
              showGuid.value = false;
            }
          }
          watch([() => props.entityTypeGuid, () => props.entityKey], () => {
            loadAuditBag();
          });
          loadAuditBag();
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("dl", null, [_hoisted_3, createElementVNode("dd", null, [unref(createdByPersonId) ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: getPersonLink(unref(createdByPersonId))
            }, toDisplayString(unref(createdByName)), 9, _hoisted_4)) : unref(createdByName) ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(createdByName)), 1)) : createCommentVNode("v-if", true), unref(createdRelativeTime) ? (openBlock(), createElementBlock("small", _hoisted_6, " (" + toDisplayString(unref(createdRelativeTime)) + ")", 1)) : createCommentVNode("v-if", true)])])]), createElementVNode("div", _hoisted_7, [createElementVNode("dl", null, [_hoisted_8, createElementVNode("dd", null, [unref(modifiedByPersonId) ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: getPersonLink(unref(modifiedByPersonId))
            }, toDisplayString(unref(modifiedByName)), 9, _hoisted_9)) : unref(createdByName) ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(unref(modifiedByName)), 1)) : createCommentVNode("v-if", true), unref(modifiedRelativeTime) ? (openBlock(), createElementBlock("small", _hoisted_11, " (" + toDisplayString(unref(modifiedRelativeTime)) + ")", 1)) : createCommentVNode("v-if", true)])])]), createElementVNode("div", _hoisted_12, [showId.value ? (openBlock(), createElementBlock("dl", _hoisted_13, [createElementVNode("dt", {
              onClick: withModifiers(onIdClick, ["stop"]),
              class: "clickable"
            }, "Id", 8, _hoisted_14), createElementVNode("dd", null, toDisplayString(unref(id)), 1)])) : showGuid.value ? (openBlock(), createElementBlock("dl", _hoisted_15, [createElementVNode("dt", {
              onClick: withModifiers(onIdClick, ["stop"]),
              class: "clickable"
            }, "Guid", 8, _hoisted_16), createElementVNode("dd", null, toDisplayString(unref(guidText)), 1)])) : (openBlock(), createElementBlock("dl", _hoisted_17, [createElementVNode("dt", {
              onClick: withModifiers(onIdClick, ["stop"]),
              class: "clickable"
            }, "Id Key", 8, _hoisted_18), createElementVNode("dd", null, toDisplayString(unref(idKey)), 1)]))])]);
          };
        }
      }));

      script.__file = "Framework/Controls/auditDetail.obs";

    })
  };
}));
//# sourceMappingURL=auditDetail.obs.js.map
