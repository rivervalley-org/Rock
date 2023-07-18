System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            const ComparisonType = {
                None: 0x0,
                EqualTo: 0x1,
                NotEqualTo: 0x2,
                StartsWith: 0x4,
                Contains: 0x8,
                DoesNotContain: 0x10,
                IsBlank: 0x20,
                IsNotBlank: 0x40,
                GreaterThan: 0x80,
                GreaterThanOrEqualTo: 0x100,
                LessThan: 0x200,
                LessThanOrEqualTo: 0x400,
                EndsWith: 0x800,
                Between: 0x1000,
                RegularExpression: 0x2000
            };

            var comparisonType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ComparisonType: ComparisonType
            });
            exports('comparisonType', comparisonType);

            const FieldFilterSourceType = {
                Attribute: 0
            };
            const FieldFilterSourceTypeDescription = {
                0: "Attribute"
            };

            var fieldFilterSourceType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FieldFilterSourceType: FieldFilterSourceType,
                FieldFilterSourceTypeDescription: FieldFilterSourceTypeDescription
            });
            exports('fieldFilterSourceType', fieldFilterSourceType);

            const FilterExpressionType = {
                Filter: 0,
                GroupAll: 1,
                GroupAny: 2,
                GroupAllFalse: 3,
                GroupAnyFalse: 4
            };
            const FilterExpressionTypeDescription = {
                0: "Filter",
                1: "Group All",
                2: "Group Any",
                3: "Group All False",
                4: "Group Any False"
            };

            var filterExpressionType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                FilterExpressionType: FilterExpressionType,
                FilterExpressionTypeDescription: FilterExpressionTypeDescription
            });
            exports('filterExpressionType', filterExpressionType);

            const MetricNumericDataType = {
                Integer: 0,
                Decimal: 1,
                Currency: 2
            };
            const MetricNumericDataTypeDescription = {
                0: "Integer",
                1: "Decimal",
                2: "Currency"
            };

            var metricNumericDataType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MetricNumericDataType: MetricNumericDataType,
                MetricNumericDataTypeDescription: MetricNumericDataTypeDescription
            });
            exports('metricNumericDataType', metricNumericDataType);

            const MetricValueType = {
                Measure: 0,
                Goal: 1
            };
            const MetricValueTypeDescription = {
                0: "Measure",
                1: "Goal"
            };

            var metricValueType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                MetricValueType: MetricValueType,
                MetricValueTypeDescription: MetricValueTypeDescription
            });
            exports('metricValueType', metricValueType);

            const ReportFieldType = {
                Property: 0,
                Attribute: 1,
                DataSelectComponent: 2
            };
            const ReportFieldTypeDescription = {
                0: "Property",
                1: "Attribute",
                2: "Data Select Component"
            };

            var reportFieldType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ReportFieldType: ReportFieldType,
                ReportFieldTypeDescription: ReportFieldTypeDescription
            });
            exports('reportFieldType', reportFieldType);

            const UnitType = {
                Numeric: 0,
                Currency: 1,
                Percentage: 2
            };
            const UnitTypeDescription = {
                0: "Numeric",
                1: "Currency",
                2: "Percentage"
            };

            var unitType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                UnitType: UnitType,
                UnitTypeDescription: UnitTypeDescription
            });
            exports('unitType', unitType);

        })
    };
}));
