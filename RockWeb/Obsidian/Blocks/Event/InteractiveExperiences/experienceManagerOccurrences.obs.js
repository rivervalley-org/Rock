System.register(['vue', '@Obsidian/Controls/notificationBox.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Controls/sectionHeader.obs', '@Obsidian/Utility/block'], (function (exports) {
    'use strict';
    var createElementVNode, defineComponent, ref, computed, unref, openBlock, createBlock, withCtx, createTextVNode, toDisplayString, createVNode, createElementBlock, Fragment, renderList, createCommentVNode, NotificationBox, Panel, SectionHeader, useConfigurationValues, onConfigurationValuesChanged, useReloadBlock;
    return {
        setters: [function (module) {
            createElementVNode = module.createElementVNode;
            defineComponent = module.defineComponent;
            ref = module.ref;
            computed = module.computed;
            unref = module.unref;
            openBlock = module.openBlock;
            createBlock = module.createBlock;
            withCtx = module.withCtx;
            createTextVNode = module.createTextVNode;
            toDisplayString = module.toDisplayString;
            createVNode = module.createVNode;
            createElementBlock = module.createElementBlock;
            Fragment = module.Fragment;
            renderList = module.renderList;
            createCommentVNode = module.createCommentVNode;
        }, function (module) {
            NotificationBox = module["default"];
        }, function (module) {
            Panel = module["default"];
        }, function (module) {
            SectionHeader = module["default"];
        }, function (module) {
            useConfigurationValues = module.useConfigurationValues;
            onConfigurationValuesChanged = module.onConfigurationValuesChanged;
            useReloadBlock = module.useReloadBlock;
        }],
        execute: (function () {

            var NavigationUrlKey = function (NavigationUrlKey) {
              NavigationUrlKey["ExperienceManagerPage"] = "ExperienceManagerPage";
              return NavigationUrlKey;
            }({});

            var _hoisted_1 = ["href"];
            var _hoisted_2 = createElementVNode("div", {
              class: "p-2 d-flex align-items-center align-self-stretch bg-info text-white"
            }, [createElementVNode("span", null, [createElementVNode("i", {
              class: "fa fa-calendar-alt"
            })])], -1);
            var _hoisted_3 = {
              class: "p-2 d-flex align-items-center align-self-stretch flex-grow-1 text-body"
            };
            var _hoisted_4 = createElementVNode("div", {
              class: "p-2 mr-2 d-flex align-items-center align-self-stretch text-info"
            }, [createElementVNode("span", null, [createElementVNode("i", {
              class: "fa fa-arrow-circle-right"
            })])], -1);
            var script = exports('default', defineComponent({
              name: 'experienceManagerOccurrences',
              setup(__props) {
                var config = useConfigurationValues();
                var isPanelVisible = ref(true);
                var blockErrorMessage = computed(() => {
                  return config.errorMessage;
                });
                var occurrences = computed(() => {
                  var _config$occurrences;
                  return (_config$occurrences = config.occurrences) !== null && _config$occurrences !== void 0 ? _config$occurrences : [];
                });
                var experienceName = computed(() => {
                  var _config$experienceNam;
                  return (_config$experienceNam = config.experienceName) !== null && _config$experienceNam !== void 0 ? _config$experienceNam : "Experience";
                });
                function getOccurrenceLink(occurrence) {
                  var _config$navigationUrl;
                  var urlTemplate = (_config$navigationUrl = config.navigationUrls) === null || _config$navigationUrl === void 0 ? void 0 : _config$navigationUrl[NavigationUrlKey.ExperienceManagerPage];
                  if (!urlTemplate || !occurrence.value) {
                    return "#";
                  }
                  return urlTemplate.replace("((Id))", occurrence.value);
                }
                if (occurrences.value.length === 1) {
                  isPanelVisible.value = false;
                  window.location.href = getOccurrenceLink(occurrences.value[0]);
                }
                onConfigurationValuesChanged(useReloadBlock());
                return (_ctx, _cache) => {
                  return unref(blockErrorMessage) ? (openBlock(), createBlock(unref(NotificationBox), {
                    key: 0,
                    alertType: "warning"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(blockErrorMessage)), 1)]),
                    _: 1
                  })) : isPanelVisible.value ? (openBlock(), createBlock(unref(Panel), {
                    key: 1,
                    type: "block",
                    title: unref(experienceName)
                  }, {
                    default: withCtx(() => [createVNode(unref(SectionHeader), {
                      description: "There are multiple experience occurrences happening right now. Please select the one you would like to manage."
                    }), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(occurrences), occurrence => {
                      return openBlock(), createElementBlock("a", {
                        class: "d-flex rounded overflow-hidden mb-2 align-items-stretch border border-gray-400",
                        href: getOccurrenceLink(occurrence)
                      }, [_hoisted_2, createElementVNode("div", _hoisted_3, toDisplayString(occurrence.text), 1), _hoisted_4], 8, _hoisted_1);
                    }), 256))]),
                    _: 1
                  }, 8, ["title"])) : createCommentVNode("v-if", true);
                };
              }
            }));

            script.__file = "src/Event/InteractiveExperiences/experienceManagerOccurrences.obs";

        })
    };
}));
//# sourceMappingURL=experienceManagerOccurrences.obs.js.map
