System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var CookieSameSiteMode = {
              Unspecified: -1,
              None: 0,
              Lax: 1,
              Strict: 2
            };
            var CookieSameSiteModeDescription = {
              [-1]: "Unspecified",
              0: "None",
              1: "Lax",
              2: "Strict"
            };

            var cookieSameSiteMode = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CookieSameSiteMode: CookieSameSiteMode,
                CookieSameSiteModeDescription: CookieSameSiteModeDescription
            });
            exports('cookieSameSiteMode', cookieSameSiteMode);

            var ResponseElementLocation = {
              Header: 0,
              Footer: 1
            };
            var ResponseElementLocationDescription = {
              0: "Header",
              1: "Footer"
            };

            var responseElementLocation = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ResponseElementLocation: ResponseElementLocation,
                ResponseElementLocationDescription: ResponseElementLocationDescription
            });
            exports('responseElementLocation', responseElementLocation);

        })
    };
}));
//# sourceMappingURL=Net.js.map
