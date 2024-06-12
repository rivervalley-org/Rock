System.register(['vue', '@Obsidian/Controls/tagList.obs', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/tooltip', '@Obsidian/Utility/popover'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, nextTick, openBlock, createElementBlock, createElementVNode, unref, createVNode, EntityTagList, EntityType, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, ControlLazyMode, tooltip, popover;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      nextTick = module.nextTick;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      createElementVNode = module.createElementVNode;
      unref = module.unref;
      createVNode = module.createVNode;
    }, function (module) {
      EntityTagList = module["default"];
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      onConfigurationValuesChanged = module.onConfigurationValuesChanged;
      useReloadBlock = module.useReloadBlock;
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      tooltip = module.tooltip;
    }, function (module) {
      popover = module.popover;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "card-badge-top"
      };
      var _hoisted_2 = ["innerHTML"];
      var _hoisted_3 = ["innerHTML"];
      var _hoisted_4 = ["innerHTML"];
      var _hoisted_5 = {
        class: "card-badge-bottom"
      };
      var _hoisted_6 = ["innerHTML"];
      var _hoisted_7 = {
        class: "rockbadge-container rockbadge-container-xs"
      };
      var _hoisted_8 = ["innerHTML"];
      var script = exports('default', defineComponent({
        name: 'badges',
        setup(__props) {
          var _config$personKey, _config$topLeftBadges3, _config$topMiddleBadg3, _config$topRightBadge3, _config$bottomLeftBad3, _config$bottomRightBa3;
          var config = useConfigurationValues();
          var containerRef = ref(null);
          var entityKey = (_config$personKey = config.personKey) !== null && _config$personKey !== void 0 ? _config$personKey : undefined;
          var topLeftBadges = computed(() => {
            var _config$topLeftBadges, _config$topLeftBadges2;
            return (_config$topLeftBadges = (_config$topLeftBadges2 = config.topLeftBadges) === null || _config$topLeftBadges2 === void 0 ? void 0 : _config$topLeftBadges2.map(b => {
              var _b$html;
              return (_b$html = b.html) !== null && _b$html !== void 0 ? _b$html : "";
            }).join("")) !== null && _config$topLeftBadges !== void 0 ? _config$topLeftBadges : "";
          });
          var topMiddleBadges = computed(() => {
            var _config$topMiddleBadg, _config$topMiddleBadg2;
            return (_config$topMiddleBadg = (_config$topMiddleBadg2 = config.topMiddleBadges) === null || _config$topMiddleBadg2 === void 0 ? void 0 : _config$topMiddleBadg2.map(b => {
              var _b$html2;
              return (_b$html2 = b.html) !== null && _b$html2 !== void 0 ? _b$html2 : "";
            }).join("")) !== null && _config$topMiddleBadg !== void 0 ? _config$topMiddleBadg : "";
          });
          var topRightBadges = computed(() => {
            var _config$topRightBadge, _config$topRightBadge2;
            return (_config$topRightBadge = (_config$topRightBadge2 = config.topRightBadges) === null || _config$topRightBadge2 === void 0 ? void 0 : _config$topRightBadge2.map(b => {
              var _b$html3;
              return (_b$html3 = b.html) !== null && _b$html3 !== void 0 ? _b$html3 : "";
            }).join("")) !== null && _config$topRightBadge !== void 0 ? _config$topRightBadge : "";
          });
          var bottomLeftBadges = computed(() => {
            var _config$bottomLeftBad, _config$bottomLeftBad2;
            return (_config$bottomLeftBad = (_config$bottomLeftBad2 = config.bottomLeftBadges) === null || _config$bottomLeftBad2 === void 0 ? void 0 : _config$bottomLeftBad2.map(b => {
              var _b$html4;
              return (_b$html4 = b.html) !== null && _b$html4 !== void 0 ? _b$html4 : "";
            }).join("")) !== null && _config$bottomLeftBad !== void 0 ? _config$bottomLeftBad : "";
          });
          var bottomRightBadges = computed(() => {
            var _config$bottomRightBa, _config$bottomRightBa2;
            return (_config$bottomRightBa = (_config$bottomRightBa2 = config.bottomRightBadges) === null || _config$bottomRightBa2 === void 0 ? void 0 : _config$bottomRightBa2.map(b => {
              var _b$html5;
              return (_b$html5 = b.html) !== null && _b$html5 !== void 0 ? _b$html5 : "";
            }).join("")) !== null && _config$bottomRightBa !== void 0 ? _config$bottomRightBa : "";
          });
          var script = [...((_config$topLeftBadges3 = config.topLeftBadges) !== null && _config$topLeftBadges3 !== void 0 ? _config$topLeftBadges3 : []), ...((_config$topMiddleBadg3 = config.topMiddleBadges) !== null && _config$topMiddleBadg3 !== void 0 ? _config$topMiddleBadg3 : []), ...((_config$topRightBadge3 = config.topRightBadges) !== null && _config$topRightBadge3 !== void 0 ? _config$topRightBadge3 : []), ...((_config$bottomLeftBad3 = config.bottomLeftBadges) !== null && _config$bottomLeftBad3 !== void 0 ? _config$bottomLeftBad3 : []), ...((_config$bottomRightBa3 = config.bottomRightBadges) !== null && _config$bottomRightBa3 !== void 0 ? _config$bottomRightBa3 : [])].map(b => {
            var _b$javaScript;
            return (_b$javaScript = b.javaScript) !== null && _b$javaScript !== void 0 ? _b$javaScript : "";
          }).join("");
          if (script !== "") {
            nextTick(() => {
              var scriptNode = document.createElement("script");
              scriptNode.type = "text/javascript";
              scriptNode.appendChild(document.createTextNode(script));
              document.body.appendChild(scriptNode);
            });
          }
          nextTick(() => {
            if (!containerRef.value) {
              return;
            }
            tooltip(Array.from(containerRef.value.querySelectorAll(".rockbadge[data-toggle=\"tooltip\"]")), {
              html: true,
              sanitize: false
            });
            popover(Array.from(containerRef.value.querySelectorAll(".rockbadge[data-toggle=\"popover\"]")));
          });
          onConfigurationValuesChanged(useReloadBlock());
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock("div", {
              ref_key: "containerRef",
              ref: containerRef,
              class: "card card-badges"
            }, [createElementVNode("div", _hoisted_1, [createElementVNode("div", {
              class: "rockbadge-container",
              innerHTML: unref(topLeftBadges)
            }, null, 8, _hoisted_2), createElementVNode("div", {
              class: "rockbadge-container",
              innerHTML: unref(topMiddleBadges)
            }, null, 8, _hoisted_3), createElementVNode("div", {
              class: "rockbadge-container",
              innerHTML: unref(topRightBadges)
            }, null, 8, _hoisted_4)]), createElementVNode("div", _hoisted_5, [createElementVNode("div", {
              class: "rockbadge-container rockbadge-container-xs",
              innerHTML: unref(bottomLeftBadges)
            }, null, 8, _hoisted_6), createElementVNode("div", _hoisted_7, [createVNode(unref(EntityTagList), {
              entityTypeGuid: unref(EntityType).Person,
              entityKey: unref(entityKey),
              lazyMode: unref(ControlLazyMode).Eager
            }, null, 8, ["entityTypeGuid", "entityKey", "lazyMode"])]), createElementVNode("div", {
              class: "rockbadge-container rockbadge-container-xs",
              innerHTML: unref(bottomRightBadges)
            }, null, 8, _hoisted_8)])], 512);
          };
        }
      }));

      script.__file = "src/Crm/PersonDetail/badges.obs";

    })
  };
}));
//# sourceMappingURL=badges.obs.js.map
