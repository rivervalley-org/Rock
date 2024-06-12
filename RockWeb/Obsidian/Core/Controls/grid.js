System.register(['vue', '@Obsidian/Enums/Core/Grid/numberFilterMethod', '@Obsidian/Enums/Core/Grid/dateFilterMethod', '@Obsidian/Enums/Core/Grid/pickExistingFilterMethod', '@Obsidian/Enums/Core/Grid/textFilterMethod', '@Obsidian/Utility/component', '@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/lava', '@Obsidian/Utility/util', 'mitt', '@Obsidian/Enums/Core/Grid/columnPositionAnchor', '@Obsidian/Enums/Core/Grid/booleanFilterMethod'], (function (exports) {
  'use strict';
  var defineComponent, createElementVNode, unref, toRaw, reactive, watch, NumberFilterMethod, DateFilterMethod, PickExistingFilterMethod, TextFilterMethod, getVNodeProp, getVNodeProps, extractText, RockDateTime, DayOfWeek, resolveMergeFields, deepEqual, mitt, ColumnPositionAnchor, BooleanFilterMethod;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      createElementVNode = module.createElementVNode;
      unref = module.unref;
      toRaw = module.toRaw;
      reactive = module.reactive;
      watch = module.watch;
    }, function (module) {
      NumberFilterMethod = module.NumberFilterMethod;
    }, function (module) {
      DateFilterMethod = module.DateFilterMethod;
    }, function (module) {
      PickExistingFilterMethod = module.PickExistingFilterMethod;
    }, function (module) {
      TextFilterMethod = module.TextFilterMethod;
    }, function (module) {
      getVNodeProp = module.getVNodeProp;
      getVNodeProps = module.getVNodeProps;
      extractText = module.extractText;
    }, function (module) {
      RockDateTime = module.RockDateTime;
      DayOfWeek = module.DayOfWeek;
    }, function (module) {
      resolveMergeFields = module.resolveMergeFields;
    }, function (module) {
      deepEqual = module.deepEqual;
    }, function (module) {
      mitt = module["default"];
    }, function (module) {
      ColumnPositionAnchor = module.ColumnPositionAnchor;
    }, function (module) {
      BooleanFilterMethod = module.BooleanFilterMethod;
    }],
    execute: (function () {

      exports({
        booleanFilterMatches: booleanFilterMatches,
        calculateColumnAverageValue: calculateColumnAverageValue,
        calculateColumnTopNRowValue: calculateColumnTopNRowValue,
        dateFilterMatches: dateFilterMatches,
        getColumnDefinitions: getColumnDefinitions,
        getColumnStyles: getColumnStyles,
        getEntitySetBag: getEntitySetBag,
        getRowKey: getRowKey,
        numberFilterMatches: numberFilterMatches,
        pickExistingFilterMatches: pickExistingFilterMatches,
        textFilterMatches: textFilterMatches
      });

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
          });
        };
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function () {};
            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      var GridActionUrlKey = exports('GridActionUrlKey', {
        Communicate: "communicate",
        MergePerson: "mergePerson",
        MergeBusiness: "mergeBusiness",
        BulkUpdate: "bulkUpdate",
        LaunchWorkflow: "launchWorkflow",
        MergeTemplate: "mergeTemplate"
      });
      var standardColumnProps = exports('standardColumnProps', {
        name: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          required: false
        },
        field: {
          type: String,
          required: false
        },
        quickFilterValue: {
          type: Object,
          required: false
        },
        sortField: {
          type: String,
          required: false
        },
        sortValue: {
          type: Object,
          required: false
        },
        filter: {
          type: Object,
          required: false
        },
        filterValue: {
          type: Object,
          required: false
        },
        exportValue: {
          type: Function,
          required: false
        },
        headerClass: {
          type: String,
          required: false
        },
        itemClass: {
          type: String,
          required: false
        },
        formatComponent: {
          type: Object,
          required: false
        },
        headerComponent: {
          type: Object,
          required: false
        },
        skeletonComponent: {
          type: Object,
          required: false
        },
        hideOnScreen: {
          type: Boolean,
          required: false
        },
        excludeFromExport: {
          type: Boolean,
          required: false
        },
        visiblePriority: {
          type: String,
          default: "xs"
        },
        width: {
          type: String,
          required: false
        }
      });
      var standardHeaderCellProps = exports('standardHeaderCellProps', {
        column: {
          type: Object,
          required: true
        },
        grid: {
          type: Object,
          required: true
        }
      });
      var standardCellProps = exports('standardCellProps', {
        column: {
          type: Object,
          required: true
        },
        row: {
          type: Object,
          required: true
        },
        grid: {
          type: Object,
          required: true
        }
      });
      var standardSkeletonCellProps = exports('standardSkeletonCellProps', {
        column: {
          type: Object,
          required: true
        },
        grid: {
          type: Object,
          required: true
        }
      });
      var standardFilterProps = exports('standardFilterProps', {
        modelValue: {
          type: Object,
          required: false
        },
        column: {
          type: Object,
          required: true
        },
        grid: {
          type: Object,
          required: true
        }
      });
      function textFilterMatches(needle, haystack) {
        var _haystack$toLowerCase;
        if (!needle || typeof needle !== "object" || typeof needle["method"] !== "number" || typeof needle["value"] !== "string") {
          return false;
        }
        if (haystack !== undefined && typeof haystack !== "string") {
          return false;
        }
        var haystackValue = (_haystack$toLowerCase = haystack === null || haystack === void 0 ? void 0 : haystack.toLowerCase()) !== null && _haystack$toLowerCase !== void 0 ? _haystack$toLowerCase : "";
        var needleValue = needle["value"].toLowerCase();
        if (needle["method"] === TextFilterMethod.Equals) {
          return haystackValue === needleValue;
        } else if (needle["method"] === TextFilterMethod.DoesNotEqual) {
          return haystackValue !== needleValue;
        } else if (needle["method"] === TextFilterMethod.Contains) {
          return haystackValue.includes(needleValue);
        } else if (needle["method"] === TextFilterMethod.DoesNotContain) {
          return !haystackValue.includes(needleValue);
        } else if (needle["method"] === TextFilterMethod.StartsWith) {
          return haystackValue.indexOf(needleValue) === 0;
        } else if (needle["method"] === TextFilterMethod.EndsWith) {
          return haystackValue.lastIndexOf(needleValue) === haystackValue.length - needleValue.length;
        } else {
          return false;
        }
      }
      function booleanFilterMatches(needle, haystack) {
        if (!needle || typeof needle !== "object" || typeof needle["method"] !== "number") {
          return false;
        }
        var needleBag = needle;
        if (needleBag.method === BooleanFilterMethod.Yes && haystack === true) {
          return true;
        }
        return false;
      }
      function pickExistingFilterMatches(needle, haystack) {
        if (!needle || typeof needle !== "object" || typeof needle["method"] !== "number" || !Array.isArray(needle["value"])) {
          return false;
        }
        if (needle["value"].length === 0) {
          return true;
        }
        if (needle["method"] === PickExistingFilterMethod.Any) {
          return needle["value"].some(n => deepEqual(n, haystack, true));
        } else if (needle["method"] === PickExistingFilterMethod.Exclude) {
          return !needle["value"].some(n => deepEqual(n, haystack, true));
        } else {
          return false;
        }
      }
      function numberFilterMatches(needle, haystack, column, grid) {
        if (!needle || typeof needle !== "object") {
          return false;
        }
        if (haystack !== undefined && typeof haystack !== "number") {
          return false;
        }
        if (needle["method"] === NumberFilterMethod.Equals) {
          return haystack === needle["value"];
        } else if (needle["method"] === NumberFilterMethod.DoesNotEqual) {
          return haystack !== needle["value"];
        }
        if (haystack === undefined) {
          return false;
        }
        if (needle["method"] === NumberFilterMethod.GreaterThan) {
          return haystack > needle["value"];
        } else if (needle["method"] === NumberFilterMethod.GreaterThanOrEqual) {
          return haystack >= needle["value"];
        } else if (needle["method"] === NumberFilterMethod.LessThan) {
          return haystack < needle["value"];
        } else if (needle["method"] === NumberFilterMethod.LessThanOrEqual) {
          return haystack <= needle["value"];
        } else if (needle["method"] === NumberFilterMethod.Between) {
          if (typeof needle["value"] !== "number" || typeof needle["secondValue"] !== "number") {
            return false;
          }
          return haystack >= needle["value"] && haystack <= needle["secondValue"];
        } else if (needle["method"] === NumberFilterMethod.TopN) {
          var nCount = needle["value"];
          if (typeof nCount !== "number" || nCount <= 0) {
            return false;
          }
          var cacheKey = grid.getColumnCacheKey(column, "number-filter", "top-".concat(nCount));
          var topn = grid.cache.getOrAdd(cacheKey, () => {
            return calculateColumnTopNRowValue(nCount, column, grid);
          });
          return haystack >= topn;
        } else if (needle["method"] === NumberFilterMethod.AboveAverage) {
          var _cacheKey = grid.getColumnCacheKey(column, "number-filter", "average");
          var average = grid.cache.getOrAdd(_cacheKey, () => {
            return calculateColumnAverageValue(column, grid);
          });
          return haystack > average;
        } else if (needle["method"] === NumberFilterMethod.BelowAverage) {
          var _cacheKey2 = grid.getColumnCacheKey(column, "number-filter", "average");
          var _average = grid.cache.getOrAdd(_cacheKey2, () => {
            return calculateColumnAverageValue(column, grid);
          });
          return haystack < _average;
        } else {
          return false;
        }
      }
      function dateFilterMatches(needle, haystack) {
        var _RockDateTime$parseIS, _RockDateTime$parseIS2, _needle$value, _RockDateTime$parseIS3, _RockDateTime$parseIS4, _needle$secondValue, _RockDateTime$parseIS5, _RockDateTime$parseIS6;
        if (!needle || typeof needle !== "object") {
          return false;
        }
        if (haystack !== undefined && typeof haystack !== "string") {
          return false;
        }
        var needleFirstDate = (_RockDateTime$parseIS = (_RockDateTime$parseIS2 = RockDateTime.parseISO((_needle$value = needle["value"]) !== null && _needle$value !== void 0 ? _needle$value : "")) === null || _RockDateTime$parseIS2 === void 0 ? void 0 : _RockDateTime$parseIS2.date.toMilliseconds()) !== null && _RockDateTime$parseIS !== void 0 ? _RockDateTime$parseIS : 0;
        var needleSecondDate = (_RockDateTime$parseIS3 = (_RockDateTime$parseIS4 = RockDateTime.parseISO((_needle$secondValue = needle["secondValue"]) !== null && _needle$secondValue !== void 0 ? _needle$secondValue : "")) === null || _RockDateTime$parseIS4 === void 0 ? void 0 : _RockDateTime$parseIS4.date.toMilliseconds()) !== null && _RockDateTime$parseIS3 !== void 0 ? _RockDateTime$parseIS3 : 0;
        var haystackDate = (_RockDateTime$parseIS5 = (_RockDateTime$parseIS6 = RockDateTime.parseISO(haystack !== null && haystack !== void 0 ? haystack : "")) === null || _RockDateTime$parseIS6 === void 0 ? void 0 : _RockDateTime$parseIS6.date.toMilliseconds()) !== null && _RockDateTime$parseIS5 !== void 0 ? _RockDateTime$parseIS5 : 0;
        var today = RockDateTime.now().date;
        if (needle["method"] === DateFilterMethod.Equals) {
          return haystackDate === needleFirstDate;
        } else if (needle["method"] === DateFilterMethod.DoesNotEqual) {
          return haystackDate !== needleFirstDate;
        }
        if (haystackDate === 0) {
          return false;
        }
        if (needle["method"] === DateFilterMethod.Before) {
          return haystackDate < needleFirstDate;
        } else if (needle["method"] === DateFilterMethod.After) {
          return haystackDate > needleFirstDate;
        } else if (needle["method"] === DateFilterMethod.Between) {
          return haystackDate >= needleFirstDate && haystackDate <= needleSecondDate;
        } else if (needle["method"] === DateFilterMethod.ThisWeek) {
          var firstDayOfWeek = getStartOfWeek(today);
          var lastDayOfWeek = firstDayOfWeek.addDays(6);
          return haystackDate >= firstDayOfWeek.toMilliseconds() && haystackDate <= lastDayOfWeek.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.LastWeek) {
          var _firstDayOfWeek = getStartOfWeek(today).addDays(-7);
          var _lastDayOfWeek = _firstDayOfWeek.addDays(6);
          return haystackDate >= _firstDayOfWeek.toMilliseconds() && haystackDate <= _lastDayOfWeek.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.NextWeek) {
          var _firstDayOfWeek2 = getStartOfWeek(today).addDays(7);
          var _lastDayOfWeek2 = _firstDayOfWeek2.addDays(6);
          return haystackDate >= _firstDayOfWeek2.toMilliseconds() && haystackDate <= _lastDayOfWeek2.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.ThisMonth) {
          var firstDayOfMonth = today.addDays(-(today.day - 1));
          var lastDayOfMonth = firstDayOfMonth.addMonths(1).addDays(-1);
          return haystackDate >= firstDayOfMonth.toMilliseconds() && haystackDate <= lastDayOfMonth.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.LastMonth) {
          var _firstDayOfMonth = today.addDays(-(today.day - 1)).addMonths(-1);
          var _lastDayOfMonth = _firstDayOfMonth.addMonths(1).addDays(-1);
          return haystackDate >= _firstDayOfMonth.toMilliseconds() && haystackDate <= _lastDayOfMonth.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.NextMonth) {
          var _firstDayOfMonth2 = today.addDays(-(today.day - 1)).addMonths(1);
          var _lastDayOfMonth2 = _firstDayOfMonth2.addMonths(1).addDays(-1);
          return haystackDate >= _firstDayOfMonth2.toMilliseconds() && haystackDate <= _lastDayOfMonth2.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.ThisYear) {
          var firstDayOfYear = today.addDays(-(today.dayOfYear - 1));
          var lastDayOfYear = firstDayOfYear.addYears(1).addDays(-1);
          return haystackDate >= firstDayOfYear.toMilliseconds() && haystackDate <= lastDayOfYear.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.LastYear) {
          var _firstDayOfYear = today.addDays(-(today.dayOfYear - 1)).addYears(-1);
          var _lastDayOfYear = _firstDayOfYear.addYears(1).addDays(-1);
          return haystackDate >= _firstDayOfYear.toMilliseconds() && haystackDate <= _lastDayOfYear.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.NextYear) {
          var _firstDayOfYear2 = today.addDays(-(today.dayOfYear - 1)).addYears(1);
          var _lastDayOfYear2 = _firstDayOfYear2.addYears(1).addDays(-1);
          return haystackDate >= _firstDayOfYear2.toMilliseconds() && haystackDate <= _lastDayOfYear2.toMilliseconds();
        } else if (needle["method"] === DateFilterMethod.YearToDate) {
          var _firstDayOfYear3 = today.addDays(-(today.dayOfYear - 1));
          return haystackDate >= _firstDayOfYear3.toMilliseconds() && haystackDate <= today.toMilliseconds();
        } else {
          return false;
        }
      }
      function getEntitySetBag(_x, _x2, _x3) {
        return _getEntitySetBag.apply(this, arguments);
      }
      function _getEntitySetBag() {
        _getEntitySetBag = _asyncToGenerator(function* (grid, keyFields, options) {
          var _options$entityTypeGu;
          var selectedKeys = grid.selectedKeys;
          var entitySetItemLookup = {};
          var itemOrder = 0;
          var entitySetBag = {
            entityTypeKey: (_options$entityTypeGu = options === null || options === void 0 ? void 0 : options.entityTypeGuid) !== null && _options$entityTypeGu !== void 0 ? _options$entityTypeGu : grid.entityTypeGuid,
            items: []
          };
          function processRow(row) {
            var rowKey = grid.getRowKey(row);
            if (selectedKeys.length > 0) {
              if (!rowKey || !selectedKeys.includes(rowKey)) {
                return;
              }
            }
            var entityKeyValues = [];
            var mergeValues = {};
            var _iterator8 = _createForOfIteratorHelper(keyFields),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _key4 = _step8.value;
                var keyValue = row[_key4];
                if (typeof keyValue === "number" && keyValue !== 0) {
                  entityKeyValues.push(keyValue.toString());
                } else if (typeof keyValue === "string" && keyValue !== "") {
                  var keyValues = keyValue.replace(/[\s|,;]+/, ",").split(",");
                  var _iterator9 = _createForOfIteratorHelper(keyValues),
                    _step9;
                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var kv = _step9.value;
                      if (kv !== "" && !entityKeyValues.includes(kv)) {
                        entityKeyValues.push(kv);
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
            if (keyFields.length === 0) {
              entityKeyValues.push(undefined);
            }
            if (options !== null && options !== void 0 && options.mergeFields) {
              for (var _i2 = 0, _Object$keys = Object.keys(options.mergeFields); _i2 < _Object$keys.length; _i2++) {
                var mergeKey = _Object$keys[_i2];
                mergeValues[options.mergeFields[mergeKey]] = toRaw(row[mergeKey]);
              }
            }
            if (options !== null && options !== void 0 && options.mergeColumns) {
              var _loop = function _loop() {
                var mergeKey = _Object$keys2[_i3];
                var column = grid.columns.find(c => c.name === mergeKey);
                if (column) {
                  if ((options === null || options === void 0 ? void 0 : options.purpose) === "export") {
                    mergeValues[options.mergeColumns[mergeKey]] = column.exportValue(row, column, grid);
                  } else {
                    var cellProps = {
                      column,
                      row,
                      grid
                    };
                    mergeValues[options.mergeColumns[mergeKey]] = extractText(column.formatComponent, cellProps);
                  }
                }
              };
              for (var _i3 = 0, _Object$keys2 = Object.keys(options.mergeColumns); _i3 < _Object$keys2.length; _i3++) {
                _loop();
              }
            }
            if (options !== null && options !== void 0 && options.additionalMergeFieldsFactory) {
              var additionalValues = options.additionalMergeFieldsFactory(row, grid);
              for (var _i4 = 0, _Object$keys3 = Object.keys(additionalValues); _i4 < _Object$keys3.length; _i4++) {
                var _key3 = _Object$keys3[_i4];
                mergeValues[_key3] = additionalValues[_key3];
              }
            }
            for (var _i5 = 0, _entityKeyValues = entityKeyValues; _i5 < _entityKeyValues.length; _i5++) {
              var entityKey = _entityKeyValues[_i5];
              var _item2 = entityKey ? entitySetItemLookup[entityKey] : undefined;
              if (!_item2) {
                var _entitySetBag$items;
                _item2 = {
                  entityKey: entityKey,
                  order: itemOrder++,
                  additionalMergeValues: _objectSpread2({}, mergeValues)
                };
                (_entitySetBag$items = entitySetBag.items) === null || _entitySetBag$items === void 0 ? void 0 : _entitySetBag$items.push(_item2);
                if (entityKey) {
                  entitySetItemLookup[entityKey] = _item2;
                }
              }
              if ((options === null || options === void 0 ? void 0 : options.purpose) === "communication") {
                if (!_item2.additionalMergeValues) {
                  _item2.additionalMergeValues = {};
                }
                var rows = _item2.additionalMergeValues["AdditionalFields"];
                if (!rows) {
                  rows = _item2.additionalMergeValues["AdditionalFields"] = [];
                }
                rows.push(_objectSpread2({}, mergeValues));
              }
            }
          }
          var worker = new BackgroundItemsFunctionWorker(grid.getSortedRows(), processRow);
          yield worker.run();
          return entitySetBag;
        });
        return _getEntitySetBag.apply(this, arguments);
      }
      function getStartOfWeek(date) {
        var weekStartsOn = DayOfWeek.Monday;
        var targetDate = date;
        while (targetDate.dayOfWeek !== weekStartsOn) {
          targetDate = targetDate.addDays(-1);
        }
        return targetDate;
      }
      function calculateColumnAverageValue(column, grid) {
        var count = 0;
        var total = 0;
        var _iterator = _createForOfIteratorHelper(grid.rows),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _row = _step.value;
            var rowValue = column.filterValue(_row, column, grid);
            if (typeof rowValue === "number") {
              total += rowValue;
              count++;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return count === 0 ? 0 : total / count;
      }
      function calculateColumnTopNRowValue(rowCount, column, grid) {
        var values = [];
        var _iterator2 = _createForOfIteratorHelper(grid.rows),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _row2 = _step2.value;
            var rowValue = column.filterValue(_row2, column, grid);
            if (typeof rowValue === "number") {
              values.push(rowValue);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (values.length === 0) {
          return 0;
        }
        values.sort((a, b) => b - a);
        if (rowCount <= values.length) {
          return values[rowCount - 1];
        } else {
          return values[values.length - 1];
        }
      }
      function getOrAddRowCacheValue(row, column, key, grid, factory) {
        var finalKey = grid.getColumnCacheKey(column, "grid", key);
        return grid.rowCache.getOrAdd(row, finalKey, () => factory());
      }
      function buildAttributeColumns(columns, node) {
        var attributes = getVNodeProp(node, "attributes");
        var filter = getVNodeProp(node, "filter");
        var skeletonComponent = getVNodeProp(node, "skeletonComponent");
        if (!attributes) {
          return;
        }
        var _iterator3 = _createForOfIteratorHelper(attributes),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _attribute$title;
            var attribute = _step3.value;
            if (!attribute.name) {
              continue;
            }
            columns.push({
              name: attribute.name,
              title: (_attribute$title = attribute.title) !== null && _attribute$title !== void 0 ? _attribute$title : undefined,
              field: attribute.name,
              sortValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              quickFilterValue: (r, c, g) => getOrAddRowCacheValue(r, c, "quickFilterValue", g, () => c.field ? String(r[c.field]) : undefined),
              filter,
              filterValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              exportValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              formatComponent: defaultCell,
              condensedComponent: defaultCell,
              skeletonComponent,
              hideOnScreen: false,
              excludeFromExport: false,
              visiblePriority: "md",
              width: {
                value: 10,
                unitType: "%"
              },
              props: {},
              data: {}
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      function insertCustomColumns(columns, customColumns) {
        var _iterator4 = _createForOfIteratorHelper(customColumns),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _customColumn$headerT, _customColumn$headerC, _customColumn$itemCla;
            var customColumn = _step4.value;
            if (!customColumn.fieldName) {
              continue;
            }
            var columnDefinition = {
              name: customColumn.fieldName,
              title: (_customColumn$headerT = customColumn.headerText) !== null && _customColumn$headerT !== void 0 ? _customColumn$headerT : undefined,
              field: customColumn.fieldName,
              sortValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              quickFilterValue: (r, c, g) => getOrAddRowCacheValue(r, c, "quickFilterValue", g, () => c.field ? String(r[c.field]) : undefined),
              filter: undefined,
              filterValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              exportValue: (r, c) => c.field ? String(r[c.field]) : undefined,
              formatComponent: htmlCell,
              condensedComponent: htmlCell,
              headerClass: (_customColumn$headerC = customColumn.headerClass) !== null && _customColumn$headerC !== void 0 ? _customColumn$headerC : undefined,
              itemClass: (_customColumn$itemCla = customColumn.itemClass) !== null && _customColumn$itemCla !== void 0 ? _customColumn$itemCla : undefined,
              hideOnScreen: false,
              excludeFromExport: false,
              visiblePriority: "md",
              width: {
                value: 10,
                unitType: "%"
              },
              props: {},
              data: {}
            };
            var offset = Math.max(0, customColumn.positionOffset);
            offset = Math.min(columns.length, offset);
            if (customColumn.anchor === ColumnPositionAnchor.FirstColumn) {
              columns.splice(offset, 0, columnDefinition);
            } else if (customColumn.anchor === ColumnPositionAnchor.LastColumn) {
              columns.splice(columns.length - offset, 0, columnDefinition);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      function buildColumn(name, node) {
        var _node$children, _ref, _node$children2, _ref2, _node$children3, _node$children4, _node$children5, _node$children6;
        var field = getVNodeProp(node, "field");
        var title = getVNodeProp(node, "title");
        var formatTemplate = (_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children["format"];
        var formatComponent = (_ref = formatTemplate !== null && formatTemplate !== void 0 ? formatTemplate : getVNodeProp(node, "formatComponent")) !== null && _ref !== void 0 ? _ref : defaultCell;
        var condensedTemplate = (_node$children2 = node.children) === null || _node$children2 === void 0 ? void 0 : _node$children2["condensed"];
        var condensedComponent = (_ref2 = condensedTemplate !== null && condensedTemplate !== void 0 ? condensedTemplate : getVNodeProp(node, "condensedComponent")) !== null && _ref2 !== void 0 ? _ref2 : formatComponent;
        var headerTemplate = (_node$children3 = node.children) === null || _node$children3 === void 0 ? void 0 : _node$children3["header"];
        var headerComponent = headerTemplate !== null && headerTemplate !== void 0 ? headerTemplate : getVNodeProp(node, "headerComponent");
        var skeletonTemplate = (_node$children4 = node.children) === null || _node$children4 === void 0 ? void 0 : _node$children4["skeleton"];
        var skeletonComponent = skeletonTemplate !== null && skeletonTemplate !== void 0 ? skeletonTemplate : getVNodeProp(node, "skeletonComponent");
        var exportTemplate = (_node$children5 = node.children) === null || _node$children5 === void 0 ? void 0 : _node$children5["export"];
        var filter = getVNodeProp(node, "filter");
        var headerClass = getVNodeProp(node, "headerClass");
        var itemClass = getVNodeProp(node, "itemClass");
        var hideOnScreen = getVNodeProp(node, "hideOnScreen") === true || getVNodeProp(node, "hideOnScreen") === "";
        var excludeFromExport = getVNodeProp(node, "excludeFromExport") === true || getVNodeProp(node, "excludeFromExport") === "";
        var visiblePriority = getVNodeProp(node, "visiblePriority") || "xs";
        var width = getVNodeProp(node, "width");
        var filterPrependComponent = (_node$children6 = node.children) === null || _node$children6 === void 0 ? void 0 : _node$children6["filterPrepend"];
        var sortValue = getVNodeProp(node, "sortValue");
        if (!sortValue) {
          var sortField = getVNodeProp(node, "sortField") || field;
          if (sortField) {
            sortValue = r => {
              var v = r[sortField];
              if (typeof v === "string" || typeof v === "number") {
                return v;
              } else {
                return String(r[sortField]);
              }
            };
          } else {
            sortValue = undefined;
          }
        } else if (typeof sortValue === "string") {
          var template = sortValue;
          sortValue = row => {
            return resolveMergeFields(template, {
              row
            });
          };
        }
        var quickFilterValue = getVNodeProp(node, "quickFilterValue");
        if (!quickFilterValue) {
          quickFilterValue = (r, c) => {
            if (!c.field) {
              return undefined;
            }
            var v = r[c.field];
            if (typeof v === "string") {
              return v;
            } else if (typeof v === "number") {
              return v.toString();
            } else {
              return undefined;
            }
          };
        } else if (typeof quickFilterValue === "string") {
          var _template = quickFilterValue;
          quickFilterValue = row => {
            return resolveMergeFields(_template, {
              row
            });
          };
        }
        var filterValue = getVNodeProp(node, "filterValue");
        if (filterValue === undefined) {
          filterValue = (r, c) => {
            if (!c.field) {
              return undefined;
            }
            var v = r[c.field];
            if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
              return v;
            } else {
              return undefined;
            }
          };
        } else if (typeof filterValue === "string") {
          var _template2 = filterValue;
          filterValue = row => {
            return resolveMergeFields(_template2, {
              row
            });
          };
        }
        var exportValue = getVNodeProp(node, "exportValue");
        if (!exportValue) {
          var component = exportTemplate !== null && exportTemplate !== void 0 ? exportTemplate : formatComponent;
          var fn = (r, c, g) => {
            var cellProps = {
              column: c,
              row: r,
              grid: g
            };
            return extractText(component, cellProps);
          };
          exportValue = fn;
        }
        var sortValueFactory = sortValue;
        sortValue = (r, c, g) => {
          return sortValueFactory !== undefined ? getOrAddRowCacheValue(r, c, "sortValue", g, () => sortValueFactory(r, c, g)) : undefined;
        };
        var filterValueFactory = filterValue;
        filterValue = (r, c, g) => {
          return getOrAddRowCacheValue(r, c, "filterValue", g, () => filterValueFactory(r, c, g));
        };
        var quickFilterValueFactory = quickFilterValue;
        quickFilterValue = (r, c, g) => {
          return getOrAddRowCacheValue(r, c, "quickFilterValue", g, () => quickFilterValueFactory(r, c, g));
        };
        var column = {
          name,
          title,
          field,
          formatComponent,
          condensedComponent,
          headerComponent,
          skeletonComponent,
          filterPrependComponent,
          filter,
          sortValue,
          filterValue,
          quickFilterValue,
          exportValue,
          hideOnScreen,
          excludeFromExport,
          visiblePriority,
          width: parseGridLength(width),
          headerClass,
          itemClass,
          props: getVNodeProps(node),
          data: {}
        };
        return column;
      }
      function getColumnDefinitions(columnNodes) {
        var columns = [];
        var _iterator5 = _createForOfIteratorHelper(columnNodes),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var node = _step5.value;
            var name = getVNodeProp(node, "name");
            if (!name) {
              if (getVNodeProp(node, "__attributeColumns") !== true) {
                continue;
              }
              buildAttributeColumns(columns, node);
              continue;
            }
            var column = buildColumn(name, node);
            columns.push(column);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return columns;
      }
      function getRowKey(row, itemIdKey) {
        if (!itemIdKey) {
          return undefined;
        }
        var rowKey = row[itemIdKey];
        if (typeof rowKey === "string") {
          return rowKey;
        } else if (typeof rowKey === "number") {
          return "".concat(rowKey);
        } else {
          return undefined;
        }
      }
      function parseGridLength(width) {
        if (!width) {
          return {
            value: 10,
            unitType: "%"
          };
        }
        var value = parseInt(width);
        if (width.endsWith("%")) {
          return {
            value: isNaN(value) ? 10 : value,
            unitType: "%"
          };
        }
        return {
          value: isNaN(value) ? 10 : value,
          unitType: "px"
        };
      }
      function getColumnStyles(column) {
        var styles = {};
        if (column.width.unitType === "px") {
          styles.flex = "0 0 ".concat(column.width.value, "px");
        } else {
          styles.flex = "1 1 ".concat(column.width.value, "%");
        }
        return styles;
      }
      class GridCache {
        constructor() {
          _defineProperty(this, "cacheData", {});
        }
        clear() {
          this.cacheData = {};
        }
        remove(key) {
          if (key in this.cacheData) {
            delete this.cacheData[key];
          }
        }
        get(key) {
          if (key in this.cacheData) {
            return this.cacheData[key];
          } else {
            return undefined;
          }
        }
        getOrAdd(key, factory) {
          if (key in this.cacheData) {
            return this.cacheData[key];
          } else {
            var value = factory();
            if (value !== undefined) {
              this.cacheData[key] = value;
            }
            return value;
          }
        }
        addOrReplace(key, value) {
          this.cacheData[key] = value;
          return value;
        }
      } exports('GridCache', GridCache);
      class GridRowCache {
        constructor(itemIdKey) {
          _defineProperty(this, "cache", new GridCache());
          this.rowItemKey = itemIdKey;
        }
        getRowKey(row) {
          return getRowKey(row, this.rowItemKey);
        }
        setRowItemKey(itemKey) {
          if (this.rowItemKey !== itemKey) {
            this.rowItemKey = itemKey;
            this.clear();
          }
        }
        removeByRowKey(rowKey, key) {
          var cacheRow = this.cache.get(rowKey);
          if (!cacheRow) {
            return;
          }
          if (!key) {
            cacheRow.clear();
          } else {
            cacheRow.remove(key);
          }
        }
        clear() {
          this.cache.clear();
        }
        remove(row, key) {
          var rowKey = this.getRowKey(row);
          if (!rowKey) {
            return;
          }
          this.removeByRowKey(rowKey, key);
        }
        get(row, key) {
          var rowKey = this.getRowKey(row);
          if (!rowKey) {
            return undefined;
          }
          return this.cache.getOrAdd(rowKey, () => new GridCache()).get(key);
        }
        getOrAdd(row, key, factory) {
          var rowKey = this.getRowKey(row);
          if (!rowKey) {
            return factory();
          }
          return this.cache.getOrAdd(rowKey, () => new GridCache()).getOrAdd(key, factory);
        }
        addOrReplace(row, key, value) {
          var rowKey = this.getRowKey(row);
          if (!rowKey) {
            return value;
          }
          return this.cache.getOrAdd(rowKey, () => new GridCache()).addOrReplace(key, value);
        }
      } exports('GridRowCache', GridRowCache);
      class BackgroundWorker {
        constructor(cancellationToken) {
          _defineProperty(this, "interval", 50);
          _defineProperty(this, "intervalRunDuration", 50);
          _defineProperty(this, "started", false);
          _defineProperty(this, "cancelled", false);
          if (cancellationToken) {
            cancellationToken.onCancellationRequested(() => this.cancel());
          }
        }
        run() {
          if (this.started) {
            throw new Error("Can't start background worker that is already started.");
          }
          this.started = true;
          this.queueNext();
          return new Promise((resolve, reject) => {
            this.resolvePromise = resolve;
            this.rejectPromise = reject;
          });
        }
        cancel() {
          this.cancelled = true;
        }
        queueNext() {
          if (window.requestIdleCallback !== undefined) {
            window.requestIdleCallback(deadline => this.processInternal(deadline), {
              timeout: this.interval
            });
          } else {
            setTimeout(() => this.processInternal(undefined), this.interval);
          }
        }
        processInternal(deadline) {
          if (this.cancelled) {
            return this.rejectPromise(new Error("Cancellation requested."));
          }
          try {
            var hasMore;
            if (deadline && !deadline.didTimeout) {
              hasMore = this.process(() => {
                return deadline.timeRemaining() <= 0;
              });
            } else {
              var timeoutAt = window.performance.now() + this.intervalRunDuration;
              hasMore = this.process(() => window.performance.now() >= timeoutAt);
            }
            if (hasMore) {
              this.queueNext();
            } else {
              this.resolvePromise();
            }
          } catch (error) {
            this.rejectPromise(error instanceof Error ? error : new Error(String(error)));
          }
        }
      }
      class BackgroundItemsFunctionWorker extends BackgroundWorker {
        constructor(items, workerFunction) {
          super();
          _defineProperty(this, "itemIndex", 0);
          this.workerFunction = workerFunction;
          this.items = items;
        }
        process(didTimeout) {
          while (this.itemIndex < this.items.length && !didTimeout()) {
            this.workerFunction(this.items[this.itemIndex++]);
          }
          return this.itemIndex < this.items.length;
        }
      }
      class BackgroundGridRowCacheWorker extends BackgroundWorker {
        constructor(grid) {
          super();
          _defineProperty(this, "rowIndex", 0);
          this.grid = grid;
        }
        process(didTimeout) {
          while (this.rowIndex < this.grid.rows.length && !didTimeout()) {
            var _row3 = this.grid.rows[this.rowIndex++];
            var _iterator6 = _createForOfIteratorHelper(this.grid.columns),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _column$sortValue;
                var column = _step6.value;
                if (column.name.startsWith("__")) {
                  continue;
                }
                (_column$sortValue = column.sortValue) === null || _column$sortValue === void 0 ? void 0 : _column$sortValue.call(column, _row3, column, this.grid);
                column.filterValue(_row3, column, this.grid);
                column.quickFilterValue(_row3, column, this.grid);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          return this.rowIndex < this.grid.rows.length;
        }
      }
      class GridState {
        constructor(columns, gridDefinition, liveUpdates, itemTerm, entityTypeGuid) {
          _defineProperty(this, "internalColumns", []);
          _defineProperty(this, "internalRows", []);
          _defineProperty(this, "internalFilteredRows", []);
          _defineProperty(this, "internalSortedRows", []);
          _defineProperty(this, "internalSelectedKeys", []);
          _defineProperty(this, "internalIsFiltered", false);
          _defineProperty(this, "internalIsSorted", false);
          _defineProperty(this, "rowReactiveTracker", {});
          _defineProperty(this, "quickFilter", "");
          _defineProperty(this, "columnFilters", {});
          _defineProperty(this, "emitter", mitt());
          _defineProperty(this, "populateRowCacheWorker", null);
          _defineProperty(this, "cache", new GridCache());
          this.gridDefinition = gridDefinition;
          this.rowCache = new GridRowCache(undefined);
          this.liveUpdates = liveUpdates;
          this.itemTerm = itemTerm;
          this.entityTypeGuid = entityTypeGuid;
          if (gridDefinition !== null && gridDefinition !== void 0 && gridDefinition.customColumns && gridDefinition.customColumns.length > 0) {
            var tempColumns = [...columns];
            insertCustomColumns(tempColumns, gridDefinition.customColumns);
            this.internalColumns = tempColumns;
          } else {
            this.internalColumns = [...columns];
          }
          this.internalVisibleColumns = this.columns.filter(c => !c.hideOnScreen);
        }
        dispose() {
          if (this.internalRowsWatcher) {
            this.internalRowsWatcher();
            this.internalRowsWatcher = undefined;
          }
        }
        get rows() {
          return this.internalRows;
        }
        get filteredRows() {
          return this.internalFilteredRows;
        }
        set filteredRows(value) {
          this.internalFilteredRows = value;
          this.emitter.emit("filteredRowsChanged", this);
        }
        get sortedRows() {
          return this.internalSortedRows;
        }
        set sortedRows(value) {
          this.internalSortedRows = value;
          this.emitter.emit("sortedRowsChanged", this);
        }
        get columns() {
          return [...this.internalColumns];
        }
        get visibleColumns() {
          return this.internalVisibleColumns;
        }
        set visibleColumns(value) {
          this.internalVisibleColumns = value;
          this.emitter.emit("visibleColumnsChanged", this);
        }
        get selectedKeys() {
          return this.internalSelectedKeys;
        }
        set selectedKeys(value) {
          this.internalSelectedKeys = value;
          this.emitter.emit("selectedKeysChanged", this);
        }
        get isFiltered() {
          return this.internalIsFiltered;
        }
        set isFiltered(value) {
          this.internalIsFiltered = value;
          this.emitter.emit("isFilteredChanged", this);
        }
        get isSorted() {
          return this.internalIsSorted;
        }
        set isSorted(value) {
          this.internalIsSorted = value;
          this.emitter.emit("isSortedChanged", this);
        }
        getColumnCacheKey(column, component, key) {
          return "column-".concat(column.name, "-").concat(component, "-").concat(key);
        }
        getRowKey(row) {
          return getRowKey(row, this.itemKey);
        }
        getSortedRows() {
          return this.sortRows(this.internalRows);
        }
        on(event, callback) {
          this.emitter.on(event, callback);
        }
        off(event, callback) {
          this.emitter.off(event, callback);
        }
        initializeReactiveTracker() {
          var rows = unref(this.internalRows);
          this.rowReactiveTracker = {};
          for (var i = 0; i < rows.length; i++) {
            var _key = getRowKey(rows[i], this.itemKey);
            if (_key) {
              this.rowReactiveTracker[_key] = JSON.stringify(rows[i]);
            }
          }
        }
        detectRowChanges() {
          var rows = unref(this.internalRows);
          var knownKeys = new Map();
          var hasChanged = false;
          for (var i = 0; i < rows.length; i++) {
            var _key2 = getRowKey(rows[i], this.itemKey);
            if (!_key2) {
              continue;
            }
            knownKeys.set(_key2, true);
            if (!this.rowReactiveTracker[_key2]) {
              hasChanged = true;
            } else if (this.rowReactiveTracker[_key2] !== JSON.stringify(rows[i])) {
              this.rowReactiveTracker[_key2] = JSON.stringify(rows[i]);
              this.rowCache.remove(rows[i]);
            }
          }
          var oldKeys = Object.keys(this.rowReactiveTracker);
          for (var _i = 0; _i < oldKeys.length; _i++) {
            if (!knownKeys.has(oldKeys[_i])) {
              this.rowCache.removeByRowKey(oldKeys[_i], undefined);
              delete this.rowReactiveTracker[oldKeys[_i]];
              hasChanged = true;
            }
          }
          if (hasChanged) {
            this.emitter.emit("rowsChanged", this);
          }
        }
        updateFilteredRows() {
          if (this.visibleColumns.length === 0) {
            this.filteredRows = [];
            this.updateSortedRows();
            return;
          }
          var columns = this.visibleColumns;
          var quickFilterRawValue = this.quickFilter.toLowerCase();
          var result = toRaw(this.rows).filter(row => {
            var quickFilterMatch = !quickFilterRawValue || columns.some(column => {
              var value = column.quickFilterValue(row, column, this);
              if (value === undefined) {
                return false;
              }
              return value.toLowerCase().includes(quickFilterRawValue);
            });
            if (!quickFilterMatch) {
              return false;
            }
            return columns.every(column => {
              if (!column.filter) {
                return true;
              }
              var columnFilterValue = this.columnFilters[column.name];
              if (columnFilterValue === undefined) {
                return true;
              }
              var value = column.filterValue(row, column, this);
              return column.filter.matches(columnFilterValue, value, column, this);
            });
          });
          this.filteredRows = result;
          this.updateSortedRows();
        }
        sortRows(rows) {
          var columnSort = this.columnSort;
          if (!columnSort) {
            return [...rows];
          }
          var column = this.visibleColumns.find(c => c.name === columnSort.column);
          var order = columnSort.isDescending ? -1 : 1;
          if (!column) {
            console.warn("Ignoring invalid sort definition.", toRaw(this.columnSort));
            return [...rows];
          }
          var sortValue = column.sortValue;
          var rowsToSort = rows.map(r => {
            var value;
            if (sortValue) {
              value = sortValue(r, column, this);
            } else {
              value = undefined;
            }
            return {
              row: r,
              value
            };
          });
          rowsToSort.sort((a, b) => {
            if (a.value === undefined) {
              return -order;
            } else if (b.value === undefined) {
              return order;
            } else if (a.value < b.value) {
              return -order;
            } else if (a.value > b.value) {
              return order;
            } else {
              return 0;
            }
          });
          return rowsToSort.map(r => r.row);
        }
        updateSortedRows() {
          this.sortedRows = this.sortRows(this.filteredRows);
        }
        getRowKeyAndIndex(keyOrIndex) {
          var key = undefined;
          var index = -1;
          if (typeof keyOrIndex === "string") {
            key = keyOrIndex;
            index = this.rows.findIndex(r => getRowKey(r, this.itemKey) === key);
          } else if (keyOrIndex < this.rows.length) {
            index = keyOrIndex;
            key = getRowKey(this.rows[index], this.itemKey);
          }
          if (!key || index === -1) {
            return undefined;
          }
          return {
            key,
            index
          };
        }
        setItemKey(value) {
          this.itemKey = value;
          this.rowCache.setRowItemKey(value);
        }
        setColumns(columns) {
          var _this$gridDefinition;
          if (this.populateRowCacheWorker) {
            this.populateRowCacheWorker.cancel();
            this.populateRowCacheWorker = null;
          }
          this.cache.clear();
          this.rowCache.clear();
          if ((_this$gridDefinition = this.gridDefinition) !== null && _this$gridDefinition !== void 0 && _this$gridDefinition.customColumns && this.gridDefinition.customColumns.length > 0) {
            var tempColumns = [...columns];
            insertCustomColumns(tempColumns, this.gridDefinition.customColumns);
            this.internalColumns = tempColumns;
          } else {
            this.internalColumns = [...columns];
          }
          this.visibleColumns = this.columns.filter(c => !c.hideOnScreen);
          this.populateRowCacheWorker = new BackgroundGridRowCacheWorker(this);
          this.populateRowCacheWorker.run().catch(err => {
            if (!(err instanceof Error) || err.message !== "Cancellation requested.") {
              console.error(err);
            }
          });
        }
        setDataRows(rows) {
          if (this.populateRowCacheWorker) {
            this.populateRowCacheWorker.cancel();
            this.populateRowCacheWorker = null;
          }
          if (this.internalRowsWatcher) {
            this.internalRowsWatcher();
            this.internalRowsWatcher = undefined;
          }
          this.internalRows = this.liveUpdates ? rows : reactive(rows);
          this.cache.clear();
          this.rowCache.clear();
          if (this.liveUpdates) {
            this.initializeReactiveTracker();
            this.internalRowsWatcher = watch(() => rows, () => {
              this.detectRowChanges();
              this.updateFilteredRows();
            }, {
              deep: true
            });
          }
          this.populateRowCacheWorker = new BackgroundGridRowCacheWorker(this);
          this.populateRowCacheWorker.run().catch(err => {
            if (!(err instanceof Error) || err.message !== "Cancellation requested.") {
              console.error(err);
            }
          });
          this.emitter.emit("rowsChanged", this);
          this.updateFilteredRows();
        }
        setFilters(quickFilter, columnFilters) {
          this.quickFilter = quickFilter !== null && quickFilter !== void 0 ? quickFilter : "";
          this.columnFilters = columnFilters !== null && columnFilters !== void 0 ? columnFilters : {};
          this.updateFilteredRows();
          var hasColumnFilter = Object.values(this.columnFilters).some(v => v !== undefined);
          this.isFiltered = this.quickFilter !== "" || hasColumnFilter;
        }
        setSort(columnSort) {
          this.columnSort = columnSort;
          this.updateSortedRows();
          this.isSorted = this.columnSort !== undefined;
        }
        deleteRow(keyOrIndex) {
          var item = this.getRowKeyAndIndex(keyOrIndex);
          if (!item) {
            throw new Error("Row '".concat(keyOrIndex, "' was not found in grid."));
          }
          this.internalRows.splice(item.index, 1);
          this.rowCache.removeByRowKey(item.key, undefined);
          if (this.liveUpdates) {
            delete this.rowReactiveTracker[item.key];
          }
          this.updateFilteredRows();
          this.emitter.emit("rowsChanged", this);
        }
        rowUpdated(keyOrIndex) {
          var item = this.getRowKeyAndIndex(keyOrIndex);
          if (!item) {
            throw new Error("Row '".concat(keyOrIndex, "' was not found in grid."));
          }
          this.rowCache.remove(this.rows[item.index]);
          if (this.liveUpdates) {
            this.rowReactiveTracker[item.key] = JSON.stringify(this.rows[item.index]);
          }
          this.updateFilteredRows();
        }
        rowsUpdated(keysOrIndexes) {
          var _iterator7 = _createForOfIteratorHelper(keysOrIndexes),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var keyOrIndex = _step7.value;
              var _item = this.getRowKeyAndIndex(keyOrIndex);
              if (!_item) {
                throw new Error("Row '".concat(keyOrIndex, "' was not found in grid."));
              }
              this.rowCache.remove(this.rows[_item.index]);
              if (this.liveUpdates) {
                this.rowReactiveTracker[_item.key] = JSON.stringify(this.rows[_item.index]);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          this.updateFilteredRows();
        }
      } exports('GridState', GridState);
      var defaultCell = defineComponent({
        props: standardCellProps,
        setup(props) {
          return () => props.column.field ? props.row[props.column.field] : "";
        }
      });
      var htmlCell = defineComponent({
        props: standardCellProps,
        setup(props) {
          return () => {
            var html = props.column.field ? props.row[props.column.field] : "";
            if (typeof html !== "string") {
              html = "";
            }
            return createElementVNode("div", {
              innerHTML: html
            });
          };
        }
      });

    })
  };
}));
//# sourceMappingURL=grid.js.map
