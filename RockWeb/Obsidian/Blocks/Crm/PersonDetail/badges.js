System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/entityTagList', '@Obsidian/SystemGuids/entityType', '@Obsidian/Utility/block', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Utility/tooltip', '@Obsidian/Utility/popover'], (function (exports) {
   'use strict';
   var defineComponent, ref, computed, nextTick, NotificationBox, EntityTagList, EntityType, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock, ControlLazyMode, tooltip, popover;
   return {
      setters: [function (module) {
         defineComponent = module.defineComponent;
         ref = module.ref;
         computed = module.computed;
         nextTick = module.nextTick;
      }, function (module) {
         NotificationBox = module["default"];
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

         var badges = exports('default', defineComponent({
           name: "Crm.PersonDetail.Badges",
           components: {
             NotificationBox,
             EntityTagList
           },
           setup() {
             var _config$topLeftBadges3, _config$topMiddleBadg3, _config$topRightBadge3, _config$bottomLeftBad3, _config$bottomRightBa3;
             var config = useConfigurationValues();
             var containerRef = ref(null);
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
             return {
               bottomLeftBadges,
               bottomRightBadges,
               containerRef,
               entityKey: config.personKey,
               entityTypeGuid: EntityType.Person,
               lazyMode: ControlLazyMode.Eager,
               topLeftBadges,
               topMiddleBadges,
               topRightBadges
             };
           },
           template: "\n<div ref=\"containerRef\" class=\"card card-badges\">\n    <div class=\"card-badge-top\">\n        <div class=\"rockbadge-container\" v-html=\"topLeftBadges\"></div>\n\n        <div class=\"rockbadge-container\" v-html=\"topMiddleBadges\"></div>\n\n        <div class=\"rockbadge-container\" v-html=\"topRightBadges\"></div>\n    </div>\n\n    <div class=\"card-badge-bottom\">\n        <div class=\"rockbadge-container rockbadge-container-xs\" v-html=\"bottomLeftBadges\"></div>\n\n        <div class=\"rockbadge-container rockbadge-container-xs\">\n            <EntityTagList :entityTypeGuid=\"entityTypeGuid\"\n                :entityKey=\"entityKey\"\n                :lazyMode=\"lazyMode\" />\n         </div>\n\n        <div class=\"rockbadge-container rockbadge-container-xs\" v-html=\"bottomRightBadges\"></div>\n   </div>\n</div>\n"
         }));

      })
   };
}));
//# sourceMappingURL=badges.js.map
