System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var FilterMode; exports('FilterMode', FilterMode);
            (function (FilterMode) {
                FilterMode[FilterMode["Simple"] = 0] = "Simple";
                FilterMode[FilterMode["Advanced"] = 1] = "Advanced";
            })(FilterMode || (exports('FilterMode', FilterMode = {})));

        })
    };
}));
