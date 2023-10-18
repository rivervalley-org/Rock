System.register(['@Obsidian/Utility/numberUtils', './comparisonType', '@Obsidian/Enums/Reporting/comparisonType'], (function (exports) {
    'use strict';
    var toNumber, getComparisonName, ComparisonType;
    return {
        setters: [function (module) {
            toNumber = module.toNumber;
        }, function (module) {
            getComparisonName = module.getComparisonName;
        }, function (module) {
            ComparisonType = module.ComparisonType;
        }],
        execute: (function () {

            exports('getFilteredComparisonTypeOptions', getFilteredComparisonTypeOptions);

            var comparisonTypeOptions = exports('comparisonTypeOptions', [{
              value: ComparisonType.EqualTo.toString(),
              text: getComparisonName(ComparisonType.EqualTo)
            }, {
              value: ComparisonType.NotEqualTo.toString(),
              text: getComparisonName(ComparisonType.NotEqualTo)
            }, {
              value: ComparisonType.Contains.toString(),
              text: getComparisonName(ComparisonType.Contains)
            }, {
              value: ComparisonType.DoesNotContain.toString(),
              text: getComparisonName(ComparisonType.DoesNotContain)
            }, {
              value: ComparisonType.IsBlank.toString(),
              text: getComparisonName(ComparisonType.IsBlank)
            }, {
              value: ComparisonType.IsNotBlank.toString(),
              text: getComparisonName(ComparisonType.IsNotBlank)
            }, {
              value: ComparisonType.GreaterThan.toString(),
              text: getComparisonName(ComparisonType.GreaterThan)
            }, {
              value: ComparisonType.GreaterThanOrEqualTo.toString(),
              text: getComparisonName(ComparisonType.GreaterThanOrEqualTo)
            }, {
              value: ComparisonType.LessThan.toString(),
              text: getComparisonName(ComparisonType.LessThan)
            }, {
              value: ComparisonType.LessThanOrEqualTo.toString(),
              text: getComparisonName(ComparisonType.LessThanOrEqualTo)
            }, {
              value: ComparisonType.StartsWith.toString(),
              text: getComparisonName(ComparisonType.StartsWith)
            }, {
              value: ComparisonType.EndsWith.toString(),
              text: getComparisonName(ComparisonType.EndsWith)
            }, {
              value: ComparisonType.Between.toString(),
              text: getComparisonName(ComparisonType.Between)
            }, {
              value: ComparisonType.RegularExpression.toString(),
              text: getComparisonName(ComparisonType.RegularExpression)
            }]);
            function getFilteredComparisonTypeOptions() {
              var realComparisonTypes = 0;
              for (var _len = arguments.length, comparisonTypes = new Array(_len), _key = 0; _key < _len; _key++) {
                comparisonTypes[_key] = arguments[_key];
              }
              for (var _i = 0, _comparisonTypes = comparisonTypes; _i < _comparisonTypes.length; _i++) {
                var comparisonType = _comparisonTypes[_i];
                realComparisonTypes |= comparisonType;
              }
              return comparisonTypeOptions.filter(c => {
                return (realComparisonTypes & toNumber(c.value)) !== 0;
              });
            }

        })
    };
}));
//# sourceMappingURL=comparisonTypeOptions.js.map
