System.register(['./filterMode', '@Obsidian/Enums/Reporting/comparisonType'], (function (exports) {
    'use strict';
    var FilterMode, ComparisonType;
    return {
        setters: [function (module) {
            FilterMode = module.FilterMode;
        }, function (module) {
            ComparisonType = module.ComparisonType;
        }],
        execute: (function () {

            exports({
                getComparisonName: getComparisonName,
                isCompareVisibleForComparisonFilter: isCompareVisibleForComparisonFilter,
                isSingleComparisonType: isSingleComparisonType
            });

            var binaryComparisonTypes = exports('binaryComparisonTypes', ComparisonType.EqualTo | ComparisonType.NotEqualTo);
            var stringComparisonTypes = exports('stringComparisonTypes', ComparisonType.Contains | ComparisonType.DoesNotContain | ComparisonType.EqualTo | ComparisonType.NotEqualTo | ComparisonType.IsBlank | ComparisonType.IsNotBlank | ComparisonType.StartsWith | ComparisonType.EndsWith);
            var containsComparisonTypes = exports('containsComparisonTypes', ComparisonType.Contains | ComparisonType.DoesNotContain | ComparisonType.IsBlank);
            var numericComparisonTypes = exports('numericComparisonTypes', ComparisonType.EqualTo | ComparisonType.IsBlank | ComparisonType.IsNotBlank | ComparisonType.NotEqualTo | ComparisonType.GreaterThan | ComparisonType.GreaterThanOrEqualTo | ComparisonType.LessThan | ComparisonType.LessThanOrEqualTo);
            var dateComparisonTypes = exports('dateComparisonTypes', ComparisonType.EqualTo | ComparisonType.IsBlank | ComparisonType.IsNotBlank | ComparisonType.GreaterThan | ComparisonType.GreaterThanOrEqualTo | ComparisonType.LessThan | ComparisonType.LessThanOrEqualTo | ComparisonType.Between);
            function getComparisonName(type) {
              switch (type) {
                case ComparisonType.EqualTo:
                  return "Equal To";
                case ComparisonType.NotEqualTo:
                  return "Not Equal To";
                case ComparisonType.StartsWith:
                  return "Starts With";
                case ComparisonType.Contains:
                  return "Contains";
                case ComparisonType.DoesNotContain:
                  return "Does Not Contain";
                case ComparisonType.IsBlank:
                  return "Is Blank";
                case ComparisonType.IsNotBlank:
                  return "Is Not Blank";
                case ComparisonType.GreaterThan:
                  return "Greater Than";
                case ComparisonType.GreaterThanOrEqualTo:
                  return "Greater Than Or Equal To";
                case ComparisonType.LessThan:
                  return "Less Than";
                case ComparisonType.LessThanOrEqualTo:
                  return "Less Than Or Equal To";
                case ComparisonType.EndsWith:
                  return "Ends With";
                case ComparisonType.Between:
                  return "Between";
                case ComparisonType.RegularExpression:
                  return "Regular Expression";
                default:
                  return "";
              }
            }
            function isCompareVisibleForComparisonFilter(comparisonType, filterMode) {
              if (filterMode !== FilterMode.Simple) {
                return true;
              }
              var isHideable = comparisonType === binaryComparisonTypes || comparisonType === stringComparisonTypes || comparisonType === containsComparisonTypes;
              return !isHideable;
            }
            function isSingleComparisonType(comparisionType) {
              return comparisionType === ComparisonType.EqualTo || comparisionType === ComparisonType.NotEqualTo || comparisionType === ComparisonType.StartsWith || comparisionType === ComparisonType.Contains || comparisionType === ComparisonType.DoesNotContain || comparisionType === ComparisonType.IsBlank || comparisionType === ComparisonType.IsNotBlank || comparisionType === ComparisonType.GreaterThan || comparisionType === ComparisonType.GreaterThanOrEqualTo || comparisionType === ComparisonType.LessThan || comparisionType === ComparisonType.LessThanOrEqualTo || comparisionType === ComparisonType.EndsWith || comparisionType === ComparisonType.Between || comparisionType === ComparisonType.RegularExpression;
            }

        })
    };
}));
//# sourceMappingURL=comparisonType.js.map
