System.register(['vue', '@Obsidian/Utility/rockDateTime'], (function (exports) {
    'use strict';
    var reactive, shallowReadonly, RockDateTime;
    return {
        setters: [function (module) {
            reactive = module.reactive;
            shallowReadonly = module.shallowReadonly;
        }, function (module) {
            RockDateTime = module.RockDateTime;
        }],
        execute: (function () {

            exports('useStore', useStore);

            var state = reactive({
              areSecondaryBlocksShown: true,
              currentPerson: null,
              isAnonymousVisitor: false,
              pageParameters: {},
              contextEntities: {},
              pageId: 0,
              pageGuid: "",
              executionStartTime: RockDateTime.now().toMilliseconds(),
              debugTimings: [],
              loginUrlWithReturnUrl: ""
            });
            class Store {
              constructor() {
                this.state = shallowReadonly(state);
              }
              setAreSecondaryBlocksShown(areSecondaryBlocksShown) {
                state.areSecondaryBlocksShown = areSecondaryBlocksShown;
              }
              initialize(pageConfig) {
                state.currentPerson = pageConfig.currentPerson || null;
                state.isAnonymousVisitor = pageConfig.isAnonymousVisitor;
                state.pageParameters = pageConfig.pageParameters || {};
                state.pageId = pageConfig.pageId || 0;
                state.pageGuid = pageConfig.pageGuid || "";
                state.executionStartTime = pageConfig.executionStartTime;
                state.loginUrlWithReturnUrl = pageConfig.loginUrlWithReturnUrl;
              }
              addPageDebugTiming(timing) {
                var pageStartTime = state.executionStartTime;
                var timestampMs = timing.startTimeMs - pageStartTime;
                var durationMs = timing.finishTimeMs - timing.startTimeMs;
                state.debugTimings.push({
                  timestampMs: timestampMs,
                  durationMs: durationMs,
                  indentLevel: 1,
                  isTitleBold: false,
                  subTitle: timing.subtitle,
                  title: timing.title
                });
              }
              redirectToLogin() {
                if (state.loginUrlWithReturnUrl) {
                  window.location.href = state.loginUrlWithReturnUrl;
                }
              }
              get isAuthenticated() {
                return !!state.currentPerson;
              }
              getPageParameter(key) {
                return state.pageParameters[key];
              }
            } exports('Store', Store);
            var store = new Store();
            function useStore() {
              return store;
            }

        })
    };
}));
//# sourceMappingURL=PageState.js.map
