System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var FilterExpressionType = exports('FilterExpressionType', function (FilterExpressionType) {
              FilterExpressionType[FilterExpressionType["Filter"] = 0] = "Filter";
              FilterExpressionType[FilterExpressionType["GroupAll"] = 1] = "GroupAll";
              FilterExpressionType[FilterExpressionType["GroupAny"] = 2] = "GroupAny";
              FilterExpressionType[FilterExpressionType["GroupAllFalse"] = 3] = "GroupAllFalse";
              FilterExpressionType[FilterExpressionType["GroupAnyFalse"] = 4] = "GroupAnyFalse";
              return FilterExpressionType;
            }({}));

        })
    };
}));
//# sourceMappingURL=filterExpressionType.js.map
