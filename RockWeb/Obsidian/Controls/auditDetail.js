System.register(['vue', '@Obsidian/Utility/http', '@Obsidian/Utility/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, watch, useHttp, useSecurityGrantToken;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      watch = module.watch;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      useSecurityGrantToken = module.useSecurityGrantToken;
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

      var auditDetail = exports('default', defineComponent({
        name: "AuditDetail",
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
        setup(props) {
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
          var guid = computed(() => {
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
          var getPersonLink = personId => {
            return "/Person/".concat(personId);
          };
          var loadAuditBag = function () {
            var _ref = _asyncToGenerator(function* () {
              if (!props.entityTypeGuid || !props.entityKey) {
                auditBag.value = null;
                return;
              }
              var data = {
                entityTypeGuid: props.entityTypeGuid,
                entityKey: props.entityKey,
                securityGrantToken: securityGrantToken.value
              };
              var result = yield http.post("/api/v2/Controls/AuditDetailGetAuditDetails", undefined, data);
              auditBag.value = result.isSuccess && result.data ? result.data : null;
            });
            return function loadAuditBag() {
              return _ref.apply(this, arguments);
            };
          }();
          var onIdClick = () => {
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
          };
          watch([() => props.entityTypeGuid, () => props.entityKey], () => {
            loadAuditBag();
          });
          loadAuditBag();
          return {
            createdByName,
            createdByPersonId,
            createdRelativeTime,
            getPersonLink,
            guid,
            id,
            idKey,
            modifiedByName,
            modifiedByPersonId,
            modifiedRelativeTime,
            onIdClick,
            showGuid,
            showId
          };
        },
        template: "\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <dl>\n            <dt>Created By</dt>\n            <dd>\n                <a v-if=\"createdByPersonId\" :href=\"getPersonLink(createdByPersonId)\">{{ createdByName }}</a>\n                <span v-else-if=\"createdByName\">{{ createdByName }}</span>\n                <small v-if=\"createdRelativeTime\">&nbsp;({{ createdRelativeTime }})</small>\n            </dd>\n        </dl>\n    </div>\n\n    <div class=\"col-md-4\">\n        <dl>\n            <dt>Modified By</dt>\n            <dd>\n                <a v-if=\"modifiedByPersonId\" :href=\"getPersonLink(modifiedByPersonId)\">{{ modifiedByName }}</a>\n                <span v-else-if=\"createdByName\">{{ modifiedByName }}</span>\n                <small v-if=\"modifiedRelativeTime\">&nbsp;({{ modifiedRelativeTime }})</small>\n            </dd>\n        </dl>\n    </div>\n\n    <div class=\"col-md-4\">\n        <dl v-if=\"showId\">\n            <dt @click.stop=\"onIdClick\" class=\"clickable\">Id</dt>\n            <dd>{{ id }}</dd>\n        </dl>\n        <dl v-else-if=\"showGuid\">\n            <dt @click.stop=\"onIdClick\" class=\"clickable\">Guid</dt>\n            <dd>{{ guid }}</dd>\n        </dl>\n        <dl v-else>\n            <dt @click.stop=\"onIdClick\" class=\"clickable\">Id Key</dt>\n            <dd>{{ idKey }}</dd>\n        </dl>\n    </div>\n</div>\n"
      }));

    })
  };
}));
//# sourceMappingURL=auditDetail.js.map
