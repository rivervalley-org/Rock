System.register(['axios', 'vue', '@Obsidian/Libs/pluralize', 'luxon', '@Obsidian/Enums/Controls/dayOfWeek', 'mitt', '@Obsidian/Enums/Controls/controlLazyMode', '@Obsidian/Enums/Controls/pickerDisplayStyle', '@Obsidian/Libs/liquidjs', '@Obsidian/Enums/Controls/slidingDateRangeType', '@Obsidian/Enums/Controls/timeUnitType', '@Obsidian/Enums/Controls/mergeTemplateOwnership'], (function (exports) {
  'use strict';
  var axios, provide, getCurrentInstance, inject, ref, watch, nextTick, defineAsyncComponent$1, reactive, createVNode, render, Pluralize, FixedOffsetZone, DateTime, DayOfWeek, mitt, ControlLazyMode, PickerDisplayStyle, Liquid, SlidingDateRangeType, TimeUnitType, MergeTemplateOwnership;
  return {
    setters: [function (module) {
      axios = module["default"];
    }, function (module) {
      provide = module.provide;
      getCurrentInstance = module.getCurrentInstance;
      inject = module.inject;
      ref = module.ref;
      watch = module.watch;
      nextTick = module.nextTick;
      defineAsyncComponent$1 = module.defineAsyncComponent;
      reactive = module.reactive;
      createVNode = module.createVNode;
      render = module.render;
    }, function (module) {
      Pluralize = module.Pluralize;
    }, function (module) {
      FixedOffsetZone = module.FixedOffsetZone;
      DateTime = module.DateTime;
    }, function (module) {
      DayOfWeek = module.DayOfWeek;
    }, function (module) {
      mitt = module["default"];
    }, function (module) {
      ControlLazyMode = module.ControlLazyMode;
    }, function (module) {
      PickerDisplayStyle = module.PickerDisplayStyle;
    }, function (module) {
      Liquid = module.Liquid;
    }, function (module) {
      SlidingDateRangeType = module.SlidingDateRangeType;
    }, function (module) {
      TimeUnitType = module.TimeUnitType;
    }, function (module) {
      MergeTemplateOwnership = module.MergeTemplateOwnership;
    }],
    execute: (function () {

      function _iterableToArrayLimit(arr, i) {
        var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;
          try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
              if (Object(_i) !== _i) return;
              _n = !1;
            } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
          } catch (err) {
            _d = !0, _e = err;
          } finally {
            try {
              if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
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
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
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
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

      function doApiCallRaw(_x, _x2, _x3, _x4) {
        return _doApiCallRaw.apply(this, arguments);
      }
      function _doApiCallRaw() {
        _doApiCallRaw = _asyncToGenerator(function* (method, url, params, data) {
          return yield axios({
            method,
            url,
            params,
            data
          });
        });
        return _doApiCallRaw.apply(this, arguments);
      }
      function doApiCall(_x5, _x6) {
        return _doApiCall.apply(this, arguments);
      }
      function _doApiCall() {
        _doApiCall = _asyncToGenerator(function* (method, url) {
          var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
          var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
          try {
            var result = yield doApiCallRaw(method, url, params, data);
            return {
              data: result.data,
              isError: false,
              isSuccess: true,
              statusCode: result.status,
              errorMessage: null
            };
          } catch (e) {
            if (axios.isAxiosError(e)) {
              var _e$response, _e$response$data, _e$response2, _e$response2$data, _e$response$status, _e$response4;
              if ((_e$response = e.response) !== null && _e$response !== void 0 && (_e$response$data = _e$response.data) !== null && _e$response$data !== void 0 && _e$response$data.Message || e !== null && e !== void 0 && (_e$response2 = e.response) !== null && _e$response2 !== void 0 && (_e$response2$data = _e$response2.data) !== null && _e$response2$data !== void 0 && _e$response2$data.message) {
                var _e$response$data$Mess, _e$response3, _e$response3$data;
                return {
                  data: null,
                  isError: true,
                  isSuccess: false,
                  statusCode: e.response.status,
                  errorMessage: (_e$response$data$Mess = e === null || e === void 0 ? void 0 : (_e$response3 = e.response) === null || _e$response3 === void 0 ? void 0 : (_e$response3$data = _e$response3.data) === null || _e$response3$data === void 0 ? void 0 : _e$response3$data.Message) !== null && _e$response$data$Mess !== void 0 ? _e$response$data$Mess : e.response.data.message
                };
              }
              return {
                data: null,
                isError: true,
                isSuccess: false,
                statusCode: (_e$response$status = (_e$response4 = e.response) === null || _e$response4 === void 0 ? void 0 : _e$response4.status) !== null && _e$response$status !== void 0 ? _e$response$status : 0,
                errorMessage: null
              };
            } else {
              return {
                data: null,
                isError: true,
                isSuccess: false,
                statusCode: 0,
                errorMessage: null
              };
            }
          }
        });
        return _doApiCall.apply(this, arguments);
      }
      function get$1(_x7) {
        return _get.apply(this, arguments);
      }
      function _get() {
        _get = _asyncToGenerator(function* (url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          return yield doApiCall("GET", url, params, undefined);
        });
        return _get.apply(this, arguments);
      }
      function post(_x8) {
        return _post.apply(this, arguments);
      }
      function _post() {
        _post = _asyncToGenerator(function* (url) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
          return yield doApiCall("POST", url, params, data);
        });
        return _post.apply(this, arguments);
      }
      var httpFunctionsSymbol = Symbol("http-functions");
      function provideHttp(functions) {
        provide(httpFunctionsSymbol, functions);
      }
      function useHttp() {
        var http;
        if (getCurrentInstance()) {
          http = inject(httpFunctionsSymbol);
        }
        return http || {
          doApiCall: doApiCall,
          get: get$1,
          post: post
        };
      }
      function uploadFile(_x9, _x10, _x11) {
        return _uploadFile.apply(this, arguments);
      }
      function _uploadFile() {
        _uploadFile = _asyncToGenerator(function* (url, data, progress) {
          var result = yield axios.post(url, data, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
            onUploadProgress: event => {
              if (progress) {
                progress(event.loaded, event.total, Math.floor(event.loaded * 100 / event.total));
              }
            }
          });
          if (result.status === 200 && typeof result.data === "object") {
            return result.data;
          }
          if (result.status === 406) {
            throw "File type is not allowed.";
          }
          if (typeof result.data === "string") {
            throw result.data;
          }
          throw "Upload failed.";
        });
        return _uploadFile.apply(this, arguments);
      }
      function uploadContentFile(_x12, _x13, _x14, _x15) {
        return _uploadContentFile.apply(this, arguments);
      }
      function _uploadContentFile() {
        _uploadContentFile = _asyncToGenerator(function* (file, encryptedRootFolder, folderPath, options) {
          var _options$baseUrl;
          var url = "".concat((_options$baseUrl = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _options$baseUrl !== void 0 ? _options$baseUrl : "/FileUploader.ashx", "?rootFolder=").concat(encryptedRootFolder);
          var formData = new FormData();
          formData.append("file", file);
          if (folderPath) {
            formData.append("folderPath", folderPath);
          }
          var result = yield uploadFile(url, formData, options === null || options === void 0 ? void 0 : options.progress);
          return {
            value: "",
            text: result.FileName
          };
        });
        return _uploadContentFile.apply(this, arguments);
      }
      function uploadBinaryFile(_x16, _x17, _x18) {
        return _uploadBinaryFile.apply(this, arguments);
      }
      function _uploadBinaryFile() {
        _uploadBinaryFile = _asyncToGenerator(function* (file, binaryFileTypeGuid, options) {
          var _options$baseUrl2;
          var url = "".concat((_options$baseUrl2 = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _options$baseUrl2 !== void 0 ? _options$baseUrl2 : "/FileUploader.ashx", "?isBinaryFile=True&fileTypeGuid=").concat(binaryFileTypeGuid);
          if ((options === null || options === void 0 ? void 0 : options.isTemporary) === false) {
            url += "&isTemporary=False";
          } else {
            url += "&isTemporary=True";
          }
          var formData = new FormData();
          formData.append("file", file);
          var result = yield uploadFile(url, formData, options === null || options === void 0 ? void 0 : options.progress);
          return {
            value: result.Guid,
            text: result.FileName
          };
        });
        return _uploadBinaryFile.apply(this, arguments);
      }
      var http$2 = {
        doApiCall,
        post,
        get: get$1
      };

      var http$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        doApiCall: doApiCall,
        get: get$1,
        post: post,
        provideHttp: provideHttp,
        useHttp: useHttp,
        uploadContentFile: uploadContentFile,
        uploadBinaryFile: uploadBinaryFile,
        'default': http$2
      });
      exports('http', http$3);

      function getDefaultAddressControlModel() {
        return {
          state: "AZ",
          country: "US"
        };
      }
      function validateAddress(address) {
        return post("/api/v2/Controls/AddressControlValidateAddress", undefined, address);
      }
      function getAddressString(address) {
        return post("/api/v2/Controls/AddressControlGetStreetAddressString", undefined, address);
      }

      var address = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getDefaultAddressControlModel: getDefaultAddressControlModel,
        validateAddress: validateAddress,
        getAddressString: getAddressString
      });
      exports('address', address);

      var flatten = function flatten(arr) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var result = [];
        var forEach = result.forEach;
        var flatDeep = function flatDeep(arr, depth) {
          forEach.call(arr, function (val) {
            if (depth > 0 && Array.isArray(val)) {
              flatDeep(val, depth - 1);
            } else {
              result.push(val);
            }
          });
        };
        flatDeep(arr, depth);
        return result;
      };

      var arrayUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        flatten: flatten
      });
      exports('arrayUtils', arrayUtils);

      var moreThanOneElement = "More than one element was found in collection.";
      var noElementsFound = "No element was found in collection.";
      function valueComparer(keySelector, descending) {
        return (a, b) => {
          var valueA = keySelector(a);
          var valueB = keySelector(b);
          if (valueA === undefined || valueA === null) {
            if (valueB === undefined || valueB === null) {
              return 0;
            }
            return !descending ? -1 : 1;
          }
          if (valueB === undefined || valueB === null) {
            return !descending ? 1 : -1;
          }
          if (valueA > valueB) {
            return !descending ? 1 : -1;
          } else if (valueA < valueB) {
            return !descending ? -1 : 1;
          } else {
            return 0;
          }
        };
      }
      class List {
        constructor(elements) {
          if (elements === undefined) {
            this.elements = [];
          } else {
            this.elements = [...elements];
          }
        }
        static fromArrayNoCopy(elements) {
          var list = new List();
          list.elements = elements;
          return list;
        }
        any(predicate) {
          var elements = this.elements;
          if (predicate !== undefined) {
            elements = elements.filter(predicate);
          }
          return elements.length > 0;
        }
        first(predicate) {
          var elements = this.elements;
          if (predicate !== undefined) {
            elements = elements.filter(predicate);
          }
          if (elements.length >= 1) {
            return elements[0];
          } else {
            throw noElementsFound;
          }
        }
        firstOrUndefined(predicate) {
          var elements = this.elements;
          if (predicate !== undefined) {
            elements = elements.filter(predicate);
          }
          if (elements.length === 1) {
            return elements[0];
          } else {
            return undefined;
          }
        }
        single(predicate) {
          var elements = this.elements;
          if (predicate !== undefined) {
            elements = elements.filter(predicate);
          }
          if (elements.length === 1) {
            return elements[0];
          } else {
            throw moreThanOneElement;
          }
        }
        singleOrUndefined(predicate) {
          var elements = this.elements;
          if (predicate !== undefined) {
            elements = elements.filter(predicate);
          }
          if (elements.length === 0) {
            return undefined;
          } else if (elements.length === 1) {
            return elements[0];
          } else {
            throw moreThanOneElement;
          }
        }
        orderBy(keySelector) {
          var comparer = valueComparer(keySelector, false);
          return new OrderedList(this.elements, comparer);
        }
        orderByDescending(keySelector) {
          var comparer = valueComparer(keySelector, true);
          return new OrderedList(this.elements, comparer);
        }
        where(predicate) {
          return new List(this.elements.filter(predicate));
        }
        toArray() {
          return [...this.elements];
        }
      }
      class OrderedList extends List {
        constructor(elements, baseComparer) {
          super(elements);
          this.baseComparer = baseComparer;
          this.elements.sort(this.baseComparer);
        }
        thenBy(keySelector) {
          var comparer = valueComparer(keySelector, false);
          return new OrderedList(this.elements, (a, b) => this.baseComparer(a, b) || comparer(a, b));
        }
        thenByDescending(keySelector) {
          var comparer = valueComparer(keySelector, true);
          return new OrderedList(this.elements, (a, b) => this.baseComparer(a, b) || comparer(a, b));
        }
      }

      var linq = /*#__PURE__*/Object.freeze({
        __proto__: null,
        List: List
      });
      exports('linq', linq);

      var emptyGuid = "00000000-0000-0000-0000-000000000000";
      function newGuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
          var r = Math.random() * 16 | 0;
          var v = c === "x" ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }
      function normalize(a) {
        if (!a) {
          return null;
        }
        return a.toLowerCase();
      }
      function isValidGuid(guid) {
        return /^[0-9A-Fa-f]{8}-(?:[0-9A-Fa-f]{4}-){3}[0-9A-Fa-f]{12}$/.test(guid);
      }
      function toGuidOrNull(value) {
        if (value === null || value === undefined) {
          return null;
        }
        if (!isValidGuid(value)) {
          return null;
        }
        return value;
      }
      function areEqual(a, b) {
        return normalize(a) === normalize(b);
      }
      var guid = {
        newGuid,
        normalize,
        areEqual
      };

      var guid$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        emptyGuid: emptyGuid,
        newGuid: newGuid,
        normalize: normalize,
        isValidGuid: isValidGuid,
        toGuidOrNull: toGuidOrNull,
        areEqual: areEqual,
        'default': guid
      });
      exports('guid', guid$1);

      function isEmpty(val) {
        if (typeof val === "string") {
          return val.length === 0;
        }
        return false;
      }
      function isWhiteSpace(val) {
        if (typeof val === "string") {
          return val.trim().length === 0;
        }
        return false;
      }
      function isNullOrWhiteSpace(val) {
        return isWhiteSpace(val) || val === undefined || val === null;
      }
      function splitCase(val) {
        val = val.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
        return val.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
      }
      function asCommaAnd(strs) {
        if (strs.length === 0) {
          return "";
        }
        if (strs.length === 1) {
          return strs[0];
        }
        if (strs.length === 2) {
          return "".concat(strs[0], " and ").concat(strs[1]);
        }
        var last = strs.pop();
        return "".concat(strs.join(", "), ", and ").concat(last);
      }
      function toTitleCase(str) {
        if (!str) {
          return "";
        }
        return str.replace(/\w\S*/g, word => {
          return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        });
      }
      function upperCaseFirstCharacter(str) {
        if (!str) {
          return "";
        }
        return str.charAt(0).toUpperCase() + str.substring(1);
      }
      function pluralize(word, count) {
        return Pluralize(word, count);
      }
      function pluralConditional(num, singular, plural) {
        return num === 1 ? singular : plural;
      }
      function padLeft(str, length) {
        var padCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
        if (padCharacter == "") {
          padCharacter = " ";
        } else if (padCharacter.length > 1) {
          padCharacter = padCharacter.substring(0, 1);
        }
        if (!str) {
          return Array(length + 1).join(padCharacter);
        }
        if (str.length >= length) {
          return str;
        }
        return Array(length - str.length + 1).join(padCharacter) + str;
      }
      function padRight(str, length) {
        var padCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : " ";
        if (padCharacter == "") {
          padCharacter = " ";
        } else if (padCharacter.length > 1) {
          padCharacter = padCharacter.substring(0, 1);
        }
        if (!str) {
          return Array(length).join(padCharacter);
        }
        if (str.length >= length) {
          return str;
        }
        return str + Array(length - str.length + 1).join(padCharacter);
      }
      function truncate(str, limit, options) {
        if (str.length <= limit) {
          return str;
        }
        var trimmable = "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF";
        var reg = new RegExp("(?=[".concat(trimmable, "])"));
        var words = str.split(reg);
        var count = 0;
        if (options && options.ellipsis === true) {
          limit -= 3;
        }
        var visibleWords = words.filter(function (word) {
          count += word.length;
          return count <= limit;
        });
        return "".concat(visibleWords.join(""), "...");
      }
      var escapeHtmlRegExp = /["'&<>]/g;
      var escapeHtmlMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;"
      };
      function escapeHtml(str) {
        return str.replace(escapeHtmlRegExp, ch => {
          return escapeHtmlMap[ch];
        });
      }
      function defaultControlCompareValue(value, itemValue) {
        var guidValue = toGuidOrNull(value);
        var guidItemValue = toGuidOrNull(itemValue);
        if (guidValue !== null && guidItemValue !== null) {
          return areEqual(guidValue, guidItemValue);
        }
        return value === itemValue;
      }
      function containsHtmlTag(value) {
        return /<[/0-9a-zA-Z]/.test(value);
      }
      var stringUtils = {
        asCommaAnd,
        containsHtmlTag,
        escapeHtml,
        splitCase,
        isNullOrWhiteSpace,
        isWhiteSpace,
        isEmpty,
        toTitleCase,
        pluralConditional,
        padLeft,
        padRight,
        truncate
      };

      var stringUtils$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isEmpty: isEmpty,
        isWhiteSpace: isWhiteSpace,
        isNullOrWhiteSpace: isNullOrWhiteSpace,
        splitCase: splitCase,
        asCommaAnd: asCommaAnd,
        toTitleCase: toTitleCase,
        upperCaseFirstCharacter: upperCaseFirstCharacter,
        pluralize: pluralize,
        pluralConditional: pluralConditional,
        padLeft: padLeft,
        padRight: padRight,
        truncate: truncate,
        escapeHtml: escapeHtml,
        defaultControlCompareValue: defaultControlCompareValue,
        containsHtmlTag: containsHtmlTag,
        'default': stringUtils
      });
      exports('stringUtils', stringUtils$1);

      function blankIfZero(value) {
        return parseInt(value) === 0 ? "" : value;
      }
      function get12HourValue(hour) {
        if (hour == 0) {
          return 12;
        } else if (hour < 13) {
          return hour;
        } else {
          return hour - 12;
        }
      }
      var englishDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var englishMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var dateFormatters = {
        "yyyyy": date => padLeft(date.year.toString(), 5, "0"),
        "yyyy": date => padLeft(date.year.toString(), 4, "0"),
        "yyy": date => padLeft(date.year.toString(), 3, "0"),
        "yy": date => padLeft((date.year % 100).toString(), 2, "0"),
        "y": date => (date.year % 100).toString(),
        "MMMM": date => englishMonthNames[date.month - 1],
        "MMM": date => englishMonthNames[date.month - 1].substr(0, 3),
        "MM": date => padLeft(date.month.toString(), 2, "0"),
        "M": date => date.month.toString(),
        "dddd": date => englishDayNames[date.dayOfWeek],
        "ddd": date => englishDayNames[date.dayOfWeek].substr(0, 3),
        "dd": date => padLeft(date.day.toString(), 2, "0"),
        "d": date => date.day.toString(),
        "fffffff": date => padRight((date.millisecond * 10000).toString(), 7, "0"),
        "ffffff": date => padRight((date.millisecond * 1000).toString(), 6, "0"),
        "fffff": date => padRight((date.millisecond * 100).toString(), 5, "0"),
        "ffff": date => padRight((date.millisecond * 10).toString(), 4, "0"),
        "fff": date => padRight(date.millisecond.toString(), 3, "0"),
        "ff": date => padRight(Math.floor(date.millisecond / 10).toString(), 2, "0"),
        "f": date => padRight(Math.floor(date.millisecond / 100).toString(), 1, "0"),
        "FFFFFFF": date => blankIfZero(padRight((date.millisecond * 10000).toString(), 7, "0")),
        "FFFFFF": date => blankIfZero(padRight((date.millisecond * 1000).toString(), 6, "0")),
        "FFFFF": date => blankIfZero(padRight((date.millisecond * 100).toString(), 5, "0")),
        "FFFF": date => blankIfZero(padRight((date.millisecond * 10).toString(), 4, "0")),
        "FFF": date => blankIfZero(padRight(date.millisecond.toString(), 3, "0")),
        "FF": date => blankIfZero(padRight(Math.floor(date.millisecond / 10).toString(), 2, "0")),
        "F": date => blankIfZero(padRight(Math.floor(date.millisecond / 100).toString(), 1, "0")),
        "g": date => date.year < 0 ? "B.C." : "A.D.",
        "gg": date => date.year < 0 ? "B.C." : "A.D.",
        "hh": date => padLeft(get12HourValue(date.hour).toString(), 2, "0"),
        "h": date => get12HourValue(date.hour).toString(),
        "HH": date => padLeft(date.hour.toString(), 2, "0"),
        "H": date => date.hour.toString(),
        "mm": date => padLeft(date.minute.toString(), 2, "0"),
        "m": date => date.minute.toString(),
        "ss": date => padLeft(date.second.toString(), 2, "0"),
        "s": date => date.second.toString(),
        "K": date => {
          var offset = date.offset;
          var offsetHour = Math.abs(Math.floor(offset / 60));
          var offsetMinute = Math.abs(offset % 60);
          return "".concat(offset >= 0 ? "+" : "-").concat(padLeft(offsetHour.toString(), 2, "0"), ":").concat(padLeft(offsetMinute.toString(), 2, "0"));
        },
        "tt": date => date.hour >= 12 ? "PM" : "AM",
        "t": date => date.hour >= 12 ? "P" : "A",
        "zzz": date => {
          var offset = date.offset;
          var offsetHour = Math.abs(Math.floor(offset / 60));
          var offsetMinute = Math.abs(offset % 60);
          return "".concat(offset >= 0 ? "+" : "-").concat(padLeft(offsetHour.toString(), 2, "0"), ":").concat(padLeft(offsetMinute.toString(), 2, "0"));
        },
        "zz": date => {
          var offset = date.offset;
          var offsetHour = Math.abs(Math.floor(offset / 60));
          return "".concat(offset >= 0 ? "+" : "-").concat(padLeft(offsetHour.toString(), 2, "0"));
        },
        "z": date => {
          var offset = date.offset;
          var offsetHour = Math.abs(Math.floor(offset / 60));
          return "".concat(offset >= 0 ? "+" : "-").concat(offsetHour);
        },
        ":": () => ":",
        "/": () => "/"
      };
      var dateFormatterKeys = new List(Object.keys(dateFormatters)).orderByDescending(k => k.length).toArray();
      var standardDateFormats = {
        "d": date => formatAspDate(date, "M/d/yyyy"),
        "D": date => formatAspDate(date, "dddd, MMMM dd, yyyy"),
        "t": date => formatAspDate(date, "h:mm tt"),
        "T": date => formatAspDate(date, "h:mm:ss tt"),
        "M": date => formatAspDate(date, "MMMM dd"),
        "m": date => formatAspDate(date, "MMMM dd"),
        "Y": date => formatAspDate(date, "yyyy MMMM"),
        "y": date => formatAspDate(date, "yyyy MMMM"),
        "f": date => "".concat(formatAspDate(date, "D"), " ").concat(formatAspDate(date, "t")),
        "F": date => "".concat(formatAspDate(date, "D"), " ").concat(formatAspDate(date, "T")),
        "g": date => "".concat(formatAspDate(date, "d"), " ").concat(formatAspDate(date, "t")),
        "G": date => "".concat(formatAspDate(date, "d"), " ").concat(formatAspDate(date, "T")),
        "o": date => formatAspDate(date, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffzzz"),
        "O": date => formatAspDate(date, "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffzzz"),
        "r": date => formatAspDate(date, "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'"),
        "R": date => formatAspDate(date, "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'"),
        "s": date => formatAspDate(date, "yyyy'-'MM'-'dd'T'HH':'mm':'ss"),
        "u": date => formatAspDate(date, "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"),
        "U": date => {
          return formatAspDate(date.universalDateTime, "F");
        }
      };
      function formatAspCustomDate(date, format) {
        var result = "";
        for (var i = 0; i < format.length;) {
          var matchFound = false;
          var _iterator = _createForOfIteratorHelper(dateFormatterKeys),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var k = _step.value;
              if (format.substr(i, k.length) === k) {
                result += dateFormatters[k](date);
                matchFound = true;
                i += k.length;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (matchFound) {
            continue;
          }
          if (format[i] === "\\") {
            i++;
            if (i < format.length) {
              result += format[i++];
            }
          } else if (format[i] === "'") {
            i++;
            for (; i < format.length && format[i] !== "'"; i++) {
              result += format[i];
            }
            i++;
          } else if (format[i] === '"') {
            i++;
            for (; i < format.length && format[i] !== '"'; i++) {
              result += format[i];
            }
            i++;
          } else {
            result += format[i++];
          }
        }
        return result;
      }
      function formatAspStandardDate(date, format) {
        if (standardDateFormats[format] !== undefined) {
          return standardDateFormats[format](date);
        }
        return format;
      }
      function formatAspDate(date, format) {
        if (format.length === 1) {
          return formatAspStandardDate(date, format);
        } else if (format.length === 2 && format[0] === "%") {
          return formatAspCustomDate(date, format[1]);
        } else {
          return formatAspCustomDate(date, format);
        }
      }

      var aspDateFormat = /*#__PURE__*/Object.freeze({
        __proto__: null,
        formatAspDate: formatAspDate
      });
      exports('aspDateFormat', aspDateFormat);

      var DateTimeFormat = {
        DateFull: {
          year: "numeric",
          month: "long",
          day: "numeric"
        },
        DateMedium: {
          year: "numeric",
          month: "short",
          day: "numeric"
        },
        DateShort: {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        },
        TimeShort: {
          hour: "numeric",
          minute: "numeric"
        },
        TimeWithSeconds: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        DateTimeShort: {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        },
        DateTimeShortWithSeconds: {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        DateTimeMedium: {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        },
        DateTimeMediumWithSeconds: {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        DateTimeFull: {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        },
        DateTimeFullWithSeconds: {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        }
      };
      class RockDateTime {
        constructor(dateTime) {
          this.dateTime = dateTime;
        }
        static fromParts(year, month, day, hour, minute, second, millisecond, zone) {
          var luxonZone;
          if (zone !== undefined) {
            if (typeof zone === "number") {
              luxonZone = FixedOffsetZone.instance(zone);
            } else {
              luxonZone = zone;
            }
          }
          var dateTime = DateTime.fromObject({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, {
            zone: luxonZone
          });
          if (!dateTime.isValid) {
            return null;
          }
          return new RockDateTime(dateTime);
        }
        static fromMilliseconds(milliseconds) {
          var dateTime = DateTime.fromMillis(milliseconds);
          if (!dateTime.isValid) {
            return null;
          }
          return new RockDateTime(dateTime);
        }
        static fromJSDate(date) {
          var dateTime = DateTime.fromJSDate(date);
          if (!dateTime.isValid) {
            return null;
          }
          return new RockDateTime(dateTime);
        }
        static parseISO(dateString) {
          var dateTime = DateTime.fromISO(dateString, {
            setZone: true
          });
          if (!dateTime.isValid) {
            return null;
          }
          return new RockDateTime(dateTime);
        }
        static parseHTTP(dateString) {
          var dateTime = DateTime.fromHTTP(dateString, {
            setZone: true
          });
          if (!dateTime.isValid) {
            return null;
          }
          return new RockDateTime(dateTime);
        }
        static now() {
          return new RockDateTime(DateTime.now());
        }
        static utcNow() {
          return new RockDateTime(DateTime.now().toUTC());
        }
        get date() {
          var date = RockDateTime.fromParts(this.year, this.month, this.day, 0, 0, 0, 0, this.offset);
          if (date === null) {
            throw "Could not convert to date instance.";
          }
          return date;
        }
        get day() {
          return this.dateTime.day;
        }
        get dayOfWeek() {
          switch (this.dateTime.weekday) {
            case 1:
              return DayOfWeek.Monday;
            case 2:
              return DayOfWeek.Tuesday;
            case 3:
              return DayOfWeek.Wednesday;
            case 4:
              return DayOfWeek.Thursday;
            case 5:
              return DayOfWeek.Friday;
            case 6:
              return DayOfWeek.Saturday;
            case 7:
              return DayOfWeek.Sunday;
          }
          throw "Could not determine day of week.";
        }
        get dayOfYear() {
          return this.dateTime.ordinal;
        }
        get hour() {
          return this.dateTime.hour;
        }
        get millisecond() {
          return this.dateTime.millisecond;
        }
        get minute() {
          return this.dateTime.minute;
        }
        get month() {
          return this.dateTime.month;
        }
        get offset() {
          return this.dateTime.offset;
        }
        get second() {
          return this.dateTime.second;
        }
        get year() {
          return this.dateTime.year;
        }
        get localDateTime() {
          return new RockDateTime(this.dateTime.toLocal());
        }
        get organizationDateTime() {
          throw "Not Implemented";
        }
        get universalDateTime() {
          return new RockDateTime(this.dateTime.toUTC());
        }
        addDays(days) {
          var dateTime = this.dateTime.plus({
            days: days
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addHours(hours) {
          var dateTime = this.dateTime.plus({
            hours: hours
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addMilliseconds(milliseconds) {
          var dateTime = this.dateTime.plus({
            milliseconds: milliseconds
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addMinutes(minutes) {
          var dateTime = this.dateTime.plus({
            minutes: minutes
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addMonths(months) {
          var dateTime = this.dateTime.plus({
            months: months
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addSeconds(seconds) {
          var dateTime = this.dateTime.plus({
            seconds: seconds
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        addYears(years) {
          var dateTime = this.dateTime.plus({
            years: years
          });
          if (!dateTime.isValid) {
            throw "Operation produced an invalid date.";
          }
          return new RockDateTime(dateTime);
        }
        toMilliseconds() {
          return this.dateTime.toMillis();
        }
        toOffset(zone) {
          var dateTime;
          if (typeof zone === "number") {
            dateTime = this.dateTime.setZone(FixedOffsetZone.instance(zone));
          } else {
            dateTime = this.dateTime.setZone(zone);
          }
          if (!dateTime.isValid) {
            throw "Invalid time zone specified.";
          }
          return new RockDateTime(dateTime);
        }
        toASPString(format) {
          return formatAspDate(this, format);
        }
        toISOString() {
          return this.dateTime.toISO();
        }
        toLocaleString(format) {
          return this.dateTime.toLocaleString(format);
        }
        toElapsedString() {
          var now = RockDateTime.now();
          var msPerHour = 1000 * 60 * 60;
          var hoursPerDay = 24;
          var daysPerMonth = 30.4167;
          var daysPerYear = 365.25;
          var totalMs = Math.abs(now.toMilliseconds() - this.toMilliseconds());
          var totalHours = totalMs / msPerHour;
          var totalDays = totalHours / hoursPerDay;
          if (totalDays < 2) {
            return "1day";
          }
          if (totalDays < 31) {
            return "".concat(Math.floor(totalDays), "days");
          }
          var totalMonths = totalDays / daysPerMonth;
          if (totalMonths <= 1) {
            return "1mon";
          }
          if (totalMonths <= 18) {
            return "".concat(Math.round(totalMonths), "mon");
          }
          var totalYears = totalDays / daysPerYear;
          if (totalYears <= 1) {
            return "1yr";
          }
          return "".concat(Math.round(totalYears), "yrs");
        }
        toHTTPString() {
          return this.dateTime.toHTTP();
        }
        valueOf() {
          return this.dateTime.valueOf();
        }
        toString() {
          return this.toLocaleString(DateTimeFormat.DateTimeFull);
        }
        isEqualTo(otherDateTime) {
          return this.dateTime.toMillis() === otherDateTime.dateTime.toMillis();
        }
        isLaterThan(otherDateTime) {
          return this.dateTime.toMillis() > otherDateTime.dateTime.toMillis();
        }
        isEarlierThan(otherDateTime) {
          return this.dateTime.toMillis() < otherDateTime.dateTime.toMillis();
        }
        humanizeElapsed(otherDateTime) {
          var _otherDateTime;
          otherDateTime = (_otherDateTime = otherDateTime) !== null && _otherDateTime !== void 0 ? _otherDateTime : RockDateTime.now();
          var totalSeconds = Math.floor((otherDateTime.dateTime.toMillis() - this.dateTime.toMillis()) / 1000);
          if (totalSeconds <= 1) {
            return "right now";
          } else if (totalSeconds < 60) {
            return "".concat(totalSeconds, " seconds ago");
          } else if (totalSeconds < 3600) {
            return "".concat(Math.floor(totalSeconds / 60), " minutes ago");
          } else if (totalSeconds < 86400) {
            return "".concat(Math.floor(totalSeconds / 3600), " hours ago");
          } else if (totalSeconds < 31536000) {
            return "".concat(Math.floor(totalSeconds / 86400), " days ago");
          } else {
            return "".concat(Math.floor(totalSeconds / 31536000), " years ago");
          }
        }
      }

      var rockDateTime = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DateTimeFormat: DateTimeFormat,
        RockDateTime: RockDateTime,
        DayOfWeek: DayOfWeek
      });
      exports('rockDateTime', rockDateTime);

      function deepEqual(a, b, strict) {
        if (strict && a === b) {
          return true;
        } else if (!strict && a == b) {
          return true;
        }
        if (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b)) {
          return true;
        }
        if (a && b && typeof a === "object" && typeof b === "object") {
          if (Array.isArray(a) !== Array.isArray(b)) {
            return false;
          }
          if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) {
              return false;
            }
            for (var i = 0; i < a.length; i++) {
              if (!deepEqual(a[i], b[i], strict)) {
                return false;
              }
            }
            return true;
          } else {
            if (a.constructor !== b.constructor) {
              return false;
            }
            var aEntries = Object.entries(a).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
            var bEntries = Object.entries(b).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
            if (aEntries.length !== bEntries.length) {
              return false;
            }
            for (var _i = 0; _i < aEntries.length; _i++) {
              var aEntry = aEntries[_i];
              var bEntry = bEntries[_i];
              if (!deepEqual(aEntry[0], bEntry[0], true)) {
                return false;
              }
              if (!deepEqual(aEntry[1], bEntry[1], strict)) {
                return false;
              }
            }
            return true;
          }
        }
        return false;
      }
      function debounce(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
        var eager = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var timeout = null;
        return () => {
          if (timeout) {
            clearTimeout(timeout);
          } else if (eager) {
            fn();
            timeout = setTimeout(() => timeout = null, delay);
            return;
          }
          timeout = setTimeout(() => {
            timeout = null;
            fn();
          }, delay);
        };
      }

      var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        deepEqual: deepEqual,
        debounce: debounce
      });
      exports('util', util);

      var blockReloadSymbol = Symbol();
      var configurationValuesChangedSymbol = Symbol();
      var staticContentSymbol = Symbol();
      function useConfigurationValues() {
        var result = inject("configurationValues");
        if (result === undefined) {
          throw "Attempted to access block configuration outside of a RockBlock.";
        }
        return result.value;
      }
      function useInvokeBlockAction() {
        var result = inject("invokeBlockAction");
        if (result === undefined) {
          throw "Attempted to access block action invocation outside of a RockBlock.";
        }
        return result;
      }
      function createInvokeBlockAction(post, pageGuid, blockGuid, pageParameters) {
        function invokeBlockAction(_x) {
          return _invokeBlockAction.apply(this, arguments);
        }
        function _invokeBlockAction() {
          _invokeBlockAction = _asyncToGenerator(function* (actionName) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var actionContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
            var context = {};
            if (actionContext) {
              context = _objectSpread2({}, actionContext);
            }
            context.pageParameters = pageParameters;
            return yield post("/api/v2/BlockActions/".concat(pageGuid, "/").concat(blockGuid, "/").concat(actionName), undefined, _objectSpread2({
              __context: context
            }, data));
          });
          return _invokeBlockAction.apply(this, arguments);
        }
        return invokeBlockAction;
      }
      function provideReloadBlock(callback) {
        provide(blockReloadSymbol, callback);
      }
      function useReloadBlock() {
        return inject(blockReloadSymbol, () => {});
      }
      function provideConfigurationValuesChanged() {
        var callbacks = [];
        provide(configurationValuesChangedSymbol, callbacks);
        return {
          invoke: () => {
            for (var _i = 0, _callbacks = callbacks; _i < _callbacks.length; _i++) {
              var c = _callbacks[_i];
              c();
            }
          },
          reset: () => {
            callbacks.splice(0, callbacks.length);
          }
        };
      }
      function onConfigurationValuesChanged(callback) {
        var callbacks = inject(configurationValuesChangedSymbol);
        if (callbacks !== undefined) {
          callbacks.push(callback);
        }
      }
      function provideStaticContent(content) {
        provide(staticContentSymbol, content);
      }
      function useStaticContent() {
        return inject(staticContentSymbol);
      }
      function setCustomSettingsBoxValue(box, propertyName, value) {
        if (!box.settings) {
          box.settings = {};
        }
        box.settings[propertyName] = value;
        if (!box.validProperties) {
          box.validProperties = [];
        }
        if (!box.validProperties.includes(propertyName)) {
          box.validProperties.push(propertyName);
        }
      }
      function setPropertiesBoxValue(box, propertyName, value) {
        if (!box.bag) {
          box.bag = {};
        }
        box.bag[propertyName] = value;
        if (!box.validProperties) {
          box.validProperties = [];
        }
        if (!box.validProperties.some(p => p.toLowerCase() === propertyName.toLowerCase())) {
          box.validProperties.push(propertyName);
        }
      }
      function dispatchBlockEvent(eventName, blockGuid, eventData) {
        var ev = new CustomEvent(eventName, {
          cancelable: true,
          detail: {
            guid: blockGuid,
            data: eventData
          }
        });
        return document.dispatchEvent(ev);
      }
      function isBlockEvent(event) {
        return "guid" in event && "data" in event;
      }
      var entityTypeNameSymbol = Symbol("EntityTypeName");
      var entityTypeGuidSymbol = Symbol("EntityTypeGuid");
      function useEntityDetailBlock(options) {
        var securityGrant = getSecurityGrant(options.blockConfig.securityGrantToken);
        provideSecurityGrant(securityGrant);
        if (options.blockConfig.entityTypeName) {
          provideEntityTypeName(options.blockConfig.entityTypeName);
        }
        if (options.blockConfig.entityTypeGuid) {
          provideEntityTypeGuid(options.blockConfig.entityTypeGuid);
        }
        var entity = options.entity;
        var result = {};
        if (entity) {
          var invokeBlockAction = useInvokeBlockAction();
          var refreshAttributesDebounce = debounce(() => refreshEntityDetailAttributes(entity, invokeBlockAction), undefined, true);
          result.onPropertyChanged = propertyName => {
            if (!options.blockConfig.qualifiedAttributeProperties || !options.blockConfig.qualifiedAttributeProperties.some(n => n.toLowerCase() === propertyName.toLowerCase())) {
              return;
            }
            refreshAttributesDebounce();
          };
        }
        return result;
      }
      function provideEntityTypeName(name) {
        provide(entityTypeNameSymbol, name);
      }
      function useEntityTypeName() {
        return inject(entityTypeNameSymbol, undefined);
      }
      function provideEntityTypeGuid(guid) {
        provide(entityTypeGuidSymbol, guid);
      }
      function useEntityTypeGuid() {
        return inject(entityTypeGuidSymbol, undefined);
      }
      var securityGrantSymbol = Symbol();
      function getSecurityGrant(token) {
        var tokenRef = ref(token || null);
        var invokeBlockAction = useInvokeBlockAction();
        var renewalTimeout = null;
        var renewToken = function () {
          var _ref = _asyncToGenerator(function* () {
            var result = yield invokeBlockAction("RenewSecurityGrantToken");
            if (result.isSuccess && result.data) {
              tokenRef.value = result.data;
              scheduleRenewal();
            }
          });
          return function renewToken() {
            return _ref.apply(this, arguments);
          };
        }();
        var scheduleRenewal = () => {
          var _tokenRef$value;
          if (renewalTimeout !== null) {
            clearTimeout(renewalTimeout);
            renewalTimeout = null;
          }
          if (tokenRef.value === null) {
            return;
          }
          var segments = (_tokenRef$value = tokenRef.value) === null || _tokenRef$value === void 0 ? void 0 : _tokenRef$value.split(";");
          if (segments.length !== 3 || segments[0] !== "1") {
            return;
          }
          var expiresDateTime = RockDateTime.parseISO(segments[1]);
          if (expiresDateTime === null) {
            return;
          }
          var renewTimeout = expiresDateTime.addMinutes(-15).toMilliseconds() - RockDateTime.now().toMilliseconds();
          if (renewTimeout < 0) {
            return;
          }
          renewalTimeout = setTimeout(renewToken, renewTimeout);
        };
        scheduleRenewal();
        return {
          token: tokenRef,
          updateToken(newToken) {
            tokenRef.value = newToken || null;
            scheduleRenewal();
          }
        };
      }
      function provideSecurityGrant(grant) {
        provide(securityGrantSymbol, grant);
      }
      function useSecurityGrantToken() {
        var grant = inject(securityGrantSymbol);
        return grant ? grant.token : ref(null);
      }
      function watchPropertyChanges(propertyRefs, emit) {
        var _iterator = _createForOfIteratorHelper(propertyRefs),
          _step;
        try {
          var _loop = function _loop() {
            var propRef = _step.value;
            watch(propRef, () => {
              if (propRef.context.propertyName) {
                emit("propertyChanged", propRef.context.propertyName);
              }
            });
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      function refreshEntityDetailAttributes(_x2, _x3) {
        return _refreshEntityDetailAttributes.apply(this, arguments);
      }
      function _refreshEntityDetailAttributes() {
        _refreshEntityDetailAttributes = _asyncToGenerator(function* (box, invokeBlockAction) {
          var result = yield invokeBlockAction("RefreshAttributes", {
            box: box.value
          });
          if (result.isSuccess) {
            if (result.statusCode === 200 && result.data && box.value) {
              var _result$data$bag, _result$data$bag2;
              var newBox = _objectSpread2(_objectSpread2({}, box.value), {}, {
                bag: _objectSpread2(_objectSpread2({}, box.value.bag), {}, {
                  attributes: (_result$data$bag = result.data.bag) === null || _result$data$bag === void 0 ? void 0 : _result$data$bag.attributes,
                  attributeValues: (_result$data$bag2 = result.data.bag) === null || _result$data$bag2 === void 0 ? void 0 : _result$data$bag2.attributeValues
                })
              });
              box.value = newBox;
            }
          }
        });
        return _refreshEntityDetailAttributes.apply(this, arguments);
      }
      function refreshDetailAttributes(_x4, _x5, _x6) {
        return _refreshDetailAttributes.apply(this, arguments);
      }
      function _refreshDetailAttributes() {
        _refreshDetailAttributes = _asyncToGenerator(function* (bag, validProperties, invokeBlockAction) {
          var data = {
            entity: bag.value,
            isEditable: true,
            validProperties: validProperties
          };
          var result = yield invokeBlockAction("RefreshAttributes", {
            box: data
          });
          if (result.isSuccess) {
            if (result.statusCode === 200 && result.data && bag.value) {
              var _result$data$entity, _result$data$entity2;
              var newBag = _objectSpread2(_objectSpread2({}, bag.value), {}, {
                attributes: (_result$data$entity = result.data.entity) === null || _result$data$entity === void 0 ? void 0 : _result$data$entity.attributes,
                attributeValues: (_result$data$entity2 = result.data.entity) === null || _result$data$entity2 === void 0 ? void 0 : _result$data$entity2.attributeValues
              });
              bag.value = newBag;
            }
          }
        });
        return _refreshDetailAttributes.apply(this, arguments);
      }
      var blockGuidSymbol = Symbol("block-guid");
      function provideBlockGuid(blockGuid) {
        provide(blockGuidSymbol, blockGuid);
      }
      function useBlockGuid() {
        return inject(blockGuidSymbol);
      }
      var blockPreferenceProviderSymbol = Symbol();
      var emptyPreferences = {
        getValue() {
          return "";
        },
        setValue() {},
        getKeys() {
          return [];
        },
        containsKey() {
          return false;
        },
        save() {
          return Promise.resolve();
        },
        withPrefix() {
          return emptyPreferences;
        },
        on() {},
        off() {}
      };
      var emptyPreferenceProvider = {
        blockPreferences: emptyPreferences,
        getGlobalPreferences() {
          return Promise.resolve(emptyPreferences);
        },
        getEntityPreferences() {
          return Promise.resolve(emptyPreferences);
        }
      };
      function providePersonPreferences(provider) {
        provide(blockPreferenceProviderSymbol, provider);
      }
      function usePersonPreferences() {
        var _inject;
        return (_inject = inject(blockPreferenceProviderSymbol)) !== null && _inject !== void 0 ? _inject : emptyPreferenceProvider;
      }

      var block = /*#__PURE__*/Object.freeze({
        __proto__: null,
        useConfigurationValues: useConfigurationValues,
        useInvokeBlockAction: useInvokeBlockAction,
        createInvokeBlockAction: createInvokeBlockAction,
        provideReloadBlock: provideReloadBlock,
        useReloadBlock: useReloadBlock,
        provideConfigurationValuesChanged: provideConfigurationValuesChanged,
        onConfigurationValuesChanged: onConfigurationValuesChanged,
        provideStaticContent: provideStaticContent,
        useStaticContent: useStaticContent,
        setCustomSettingsBoxValue: setCustomSettingsBoxValue,
        setPropertiesBoxValue: setPropertiesBoxValue,
        dispatchBlockEvent: dispatchBlockEvent,
        isBlockEvent: isBlockEvent,
        useEntityDetailBlock: useEntityDetailBlock,
        provideEntityTypeName: provideEntityTypeName,
        useEntityTypeName: useEntityTypeName,
        provideEntityTypeGuid: provideEntityTypeGuid,
        useEntityTypeGuid: useEntityTypeGuid,
        getSecurityGrant: getSecurityGrant,
        provideSecurityGrant: provideSecurityGrant,
        useSecurityGrantToken: useSecurityGrantToken,
        watchPropertyChanges: watchPropertyChanges,
        refreshDetailAttributes: refreshDetailAttributes,
        provideBlockGuid: provideBlockGuid,
        useBlockGuid: useBlockGuid,
        providePersonPreferences: providePersonPreferences,
        usePersonPreferences: usePersonPreferences
      });
      exports('block', block);

      function asBooleanOrNull(val) {
        if (val === undefined || val === null) {
          return null;
        }
        if (typeof val === "boolean") {
          return val;
        }
        if (typeof val === "string") {
          var asString = (val || "").trim().toLowerCase();
          if (!asString) {
            return null;
          }
          return ["true", "yes", "t", "y", "1"].indexOf(asString) !== -1;
        }
        if (typeof val === "number") {
          return !!val;
        }
        return null;
      }
      function asBoolean(val) {
        return !!asBooleanOrNull(val);
      }
      function asYesNoOrNull(val) {
        var boolOrNull = asBooleanOrNull(val);
        if (boolOrNull === null) {
          return null;
        }
        return boolOrNull ? "Yes" : "No";
      }
      function asTrueFalseOrNull(val) {
        var boolOrNull = asBooleanOrNull(val);
        if (boolOrNull === null) {
          return null;
        }
        return boolOrNull ? "True" : "False";
      }
      function asTrueOrFalseString(val) {
        var boolOrNull = asBooleanOrNull(val);
        return boolOrNull ? "True" : "False";
      }

      var booleanUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        asBooleanOrNull: asBooleanOrNull,
        asBoolean: asBoolean,
        asYesNoOrNull: asYesNoOrNull,
        asTrueFalseOrNull: asTrueFalseOrNull,
        asTrueOrFalseString: asTrueOrFalseString
      });
      exports('booleanUtils', booleanUtils);

      var bus = mitt();
      var log = [];
      var writeLog = msg => {
        log.push({
          date: RockDateTime.now(),
          message: msg
        });
      };
      function publish(eventName, payload) {
        writeLog("Published ".concat(eventName));
        bus.emit(eventName, payload);
      }
      function subscribe(eventName, callback) {
        writeLog("Subscribed to ".concat(eventName));
        bus.on(eventName, payload => {
          if (payload) {
            callback(payload);
          }
        });
      }
      var bus$1 = {
        publish,
        subscribe,
        log
      };

      var bus$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': bus$1
      });
      exports('bus', bus$2);

      function set(key, value) {
        var expirationDT = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var expiration;
        if (expirationDT) {
          expiration = expirationDT.toMilliseconds();
        } else {
          expiration = RockDateTime.now().addMinutes(1).toMilliseconds();
        }
        var cache = {
          expiration,
          value
        };
        var cacheJson = JSON.stringify(cache);
        sessionStorage.setItem(key, cacheJson);
      }
      function get(key) {
        var cacheJson = sessionStorage.getItem(key);
        if (!cacheJson) {
          return null;
        }
        var cache = JSON.parse(cacheJson);
        if (!cache || !cache.expiration) {
          return null;
        }
        if (cache.expiration < RockDateTime.now().toMilliseconds()) {
          return null;
        }
        return cache.value;
      }
      var promiseCache = {};
      function cachePromiseFactory(key, fn) {
        var expiration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return _asyncToGenerator(function* () {
          var _promiseCache$key;
          var cachedResult = get(key);
          if (cachedResult) {
            return cachedResult;
          }
          if (promiseCache[key]) {
            return promiseCache[key];
          }
          promiseCache[key] = fn();
          (_promiseCache$key = promiseCache[key]) === null || _promiseCache$key === void 0 ? void 0 : _promiseCache$key.then(result => {
            set(key, result, expiration);
            delete promiseCache[key];
            return result;
          }).catch(e => {
            delete promiseCache[key];
            throw e;
          });
          return promiseCache[key];
        });
      }
      var Cache = {
        set,
        get,
        cachePromiseFactory: cachePromiseFactory
      };

      var cache = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': Cache
      });
      exports('cache', cache);

      function shortcutCancelledEvent(listener) {
        window.setTimeout(listener, 0);
      }
      function isCancellationToken(thing) {
        if (thing === CancellationTokenNone || thing === CancellationTokenCancelled) {
          return true;
        }
        if (thing instanceof MutableToken) {
          return true;
        }
        if (!thing || typeof thing !== "object") {
          return false;
        }
        return typeof thing.isCancellationRequested === "boolean" && typeof thing.onCancellationRequested === "function";
      }
      var CancellationTokenNone = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested() {}
      });
      var CancellationTokenCancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutCancelledEvent
      });
      class MutableToken {
        constructor() {
          _defineProperty(this, "isCancelled", false);
          _defineProperty(this, "emitter", null);
        }
        cancel() {
          if (!this.isCancelled) {
            this.isCancelled = true;
            if (this.emitter) {
              this.emitter.emit("cancel", undefined);
              this.emitter = null;
            }
          }
        }
        get isCancellationRequested() {
          return this.isCancelled;
        }
        onCancellationRequested(listener) {
          if (this.isCancelled) {
            return shortcutCancelledEvent(listener);
          }
          if (!this.emitter) {
            this.emitter = mitt();
          }
          this.emitter.on("cancel", listener);
        }
      }
      class CancellationTokenSource {
        constructor(parent) {
          _defineProperty(this, "internalToken", undefined);
          if (parent) {
            parent.onCancellationRequested(() => this.cancel());
          }
        }
        get token() {
          if (!this.internalToken) {
            this.internalToken = new MutableToken();
          }
          return this.internalToken;
        }
        cancel() {
          if (!this.internalToken) {
            this.internalToken = CancellationTokenCancelled;
          } else if (this.internalToken instanceof MutableToken) {
            this.internalToken.cancel();
          }
        }
      }

      var cancellation = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isCancellationToken: isCancellationToken,
        CancellationTokenNone: CancellationTokenNone,
        CancellationTokenCancelled: CancellationTokenCancelled,
        CancellationTokenSource: CancellationTokenSource
      });
      exports('cancellation', cancellation);

      var suspenseSymbol = Symbol("RockSuspense");
      class BasicSuspenseProvider {
        constructor(parentProvider) {
          this.operationKey = newGuid();
          this.parentProvider = parentProvider;
          this.pendingOperations = [];
          this.finishedHandlers = [];
        }
        allOperationsComplete() {
          nextTick(() => {
            if (this.pendingOperations.length !== 0) {
              return;
            }
            var _iterator = _createForOfIteratorHelper(this.finishedHandlers),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var handler = _step.value;
                handler();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.finishedHandlers = [];
            if (this.parentProvider) {
              this.parentProvider.completeAsyncOperation(this.operationKey);
            }
          });
        }
        addOperation(operation) {
          var operationKey = newGuid();
          this.startAsyncOperation(operationKey);
          operation.then(() => this.completeAsyncOperation(operationKey)).catch(() => this.completeAsyncOperation(operationKey));
        }
        startAsyncOperation(key) {
          this.pendingOperations.push(key);
          if (this.pendingOperations.length === 1 && this.parentProvider) {
            this.parentProvider.startAsyncOperation(this.operationKey);
          }
        }
        completeAsyncOperation(key) {
          var index = this.pendingOperations.indexOf(key);
          if (index !== -1) {
            this.pendingOperations.splice(index, 1);
          }
          if (this.pendingOperations.length === 0) {
            this.allOperationsComplete();
          }
        }
        hasPendingOperations() {
          return this.pendingOperations.length > 0;
        }
        addFinishedHandler(callback) {
          this.finishedHandlers.push(callback);
        }
      }
      function provideSuspense(provider) {
        provide(suspenseSymbol, provider);
      }
      function useSuspense() {
        return inject(suspenseSymbol);
      }

      var suspense = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BasicSuspenseProvider: BasicSuspenseProvider,
        provideSuspense: provideSuspense,
        useSuspense: useSuspense
      });
      exports('suspense', suspense);

      function asFormattedString(num, digits) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (num === null) {
          return "";
        }
        return num.toLocaleString("en-US", _objectSpread2({
          minimumFractionDigits: digits,
          maximumFractionDigits: digits !== null && digits !== void 0 ? digits : 9
        }, options));
      }
      function toNumber(str) {
        return toNumberOrNull(str) || 0;
      }
      function toNumberOrNull(str) {
        if (str === null || str === undefined || str === "") {
          return null;
        }
        if (typeof str === "number") {
          return str;
        }
        var replaced = str.replace(/[$,]/g, "");
        var num = Number(replaced);
        return !isNaN(num) ? num : null;
      }
      function toCurrencyOrNull(value) {
        var _currencyInfo$symbol, _currencyInfo$decimal;
        var currencyInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (typeof value === "string") {
          value = toNumberOrNull(value);
        }
        if (value === null || value === undefined) {
          return null;
        }
        var currencySymbol = (_currencyInfo$symbol = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.symbol) !== null && _currencyInfo$symbol !== void 0 ? _currencyInfo$symbol : "$";
        var currencyDecimalPlaces = (_currencyInfo$decimal = currencyInfo === null || currencyInfo === void 0 ? void 0 : currencyInfo.decimalPlaces) !== null && _currencyInfo$decimal !== void 0 ? _currencyInfo$decimal : 2;
        return "".concat(currencySymbol).concat(asFormattedString(value, currencyDecimalPlaces));
      }
      function toOrdinalSuffix(num) {
        if (!num) {
          return "";
        }
        var j = num % 10;
        var k = num % 100;
        if (j == 1 && k != 11) {
          return num + "st";
        }
        if (j == 2 && k != 12) {
          return num + "nd";
        }
        if (j == 3 && k != 13) {
          return num + "rd";
        }
        return num + "th";
      }
      function toOrdinal(num) {
        if (!num) {
          return "";
        }
        switch (num) {
          case 1:
            return "first";
          case 2:
            return "second";
          case 3:
            return "third";
          case 4:
            return "fourth";
          case 5:
            return "fifth";
          case 6:
            return "sixth";
          case 7:
            return "seventh";
          case 8:
            return "eighth";
          case 9:
            return "ninth";
          case 10:
            return "tenth";
          default:
            return toOrdinalSuffix(num);
        }
      }
      function toWord(num) {
        if (num === null || num === undefined) {
          return "";
        }
        switch (num) {
          case 1:
            return "one";
          case 2:
            return "two";
          case 3:
            return "three";
          case 4:
            return "four";
          case 5:
            return "five";
          case 6:
            return "six";
          case 7:
            return "seven";
          case 8:
            return "eight";
          case 9:
            return "nine";
          case 10:
            return "ten";
          default:
            return "".concat(num);
        }
      }
      function zeroPad(num, length) {
        var str = num.toString();
        while (str.length < length) {
          str = "0" + str;
        }
        return str;
      }
      function toDecimalPlaces(num, decimalPlaces) {
        decimalPlaces = Math.floor(decimalPlaces);
        return Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
      }
      var numberUtils = {
        toOrdinal,
        toOrdinalSuffix,
        toNumberOrNull,
        asFormattedString
      };

      var numberUtils$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        asFormattedString: asFormattedString,
        toNumber: toNumber,
        toNumberOrNull: toNumberOrNull,
        toCurrencyOrNull: toCurrencyOrNull,
        toOrdinalSuffix: toOrdinalSuffix,
        toOrdinal: toOrdinal,
        toWord: toWord,
        zeroPad: zeroPad,
        toDecimalPlaces: toDecimalPlaces,
        'default': numberUtils
      });
      exports('numberUtils', numberUtils$1);

      function useVModelPassthrough(props, modelName, emit, options) {
        var internalValue = ref(props[modelName]);
        watch(() => props[modelName], val => updateRefValue(internalValue, val), options);
        watch(internalValue, val => {
          if (val !== props[modelName]) {
            emit("update:".concat(modelName), val);
          }
        }, options);
        return internalValue;
      }
      function useVModelPassthroughWithPropUpdateCheck(props, modelName, emit, options) {
        var internalValue = ref(props[modelName]);
        var listeners = [];
        watch(() => props[modelName], val => {
          if (updateRefValue(internalValue, val)) {
            onPropUpdate();
          }
        }, options);
        watch(internalValue, val => emit("update:".concat(modelName), val), options);
        function onPropUpdate() {
          listeners.forEach(fn => fn());
        }
        function addPropUpdateListener(fn) {
          listeners.push(fn);
        }
        return [internalValue, addPropUpdateListener];
      }
      function updateRefValue(target, value) {
        if (deepEqual(target.value, value, true)) {
          return false;
        }
        target.value = value;
        return true;
      }
      function defineAsyncComponent(source) {
        return defineAsyncComponent$1(_asyncToGenerator(function* () {
          var suspense = useSuspense();
          var operationKey = newGuid();
          suspense === null || suspense === void 0 ? void 0 : suspense.startAsyncOperation(operationKey);
          var component = yield source();
          suspense === null || suspense === void 0 ? void 0 : suspense.completeAsyncOperation(operationKey);
          return component;
        }));
      }
      var standardRockFormFieldProps = {
        label: {
          type: String,
          default: ""
        },
        help: {
          type: String,
          default: ""
        },
        rules: {
          type: [Array, Object, String],
          default: ""
        },
        formGroupClasses: {
          type: String,
          default: ""
        },
        validationTitle: {
          type: String,
          default: ""
        },
        isRequiredIndicatorHidden: {
          type: Boolean,
          default: false
        }
      };
      function copyStandardRockFormFieldProps(source, destination) {
        destination.formGroupClasses = source.formGroupClasses;
        destination.help = source.help;
        destination.label = source.label;
        destination.rules = source.rules;
        destination.validationTitle = source.validationTitle;
      }
      function useStandardRockFormFieldProps(props) {
        var propValues = reactive({
          label: props.label,
          help: props.help,
          rules: props.rules,
          formGroupClasses: props.formGroupClasses,
          validationTitle: props.validationTitle,
          isRequiredIndicatorHidden: props.isRequiredIndicatorHidden
        });
        watch([() => props.formGroupClasses, () => props.help, () => props.label, () => props.rules, () => props.validationTitle], () => {
          copyStandardRockFormFieldProps(props, propValues);
        });
        return propValues;
      }
      var standardAsyncPickerProps = _objectSpread2(_objectSpread2({}, standardRockFormFieldProps), {}, {
        enhanceForLongLists: {
          type: Boolean,
          default: false
        },
        lazyMode: {
          type: String,
          default: ControlLazyMode.OnDemand
        },
        multiple: {
          type: Boolean,
          default: false
        },
        showBlankItem: {
          type: Boolean,
          default: false
        },
        blankValue: {
          type: String,
          default: ""
        },
        displayStyle: {
          type: String,
          default: PickerDisplayStyle.Auto
        },
        columnCount: {
          type: Number,
          default: 0
        }
      });
      function copyStandardAsyncPickerProps(source, destination) {
        copyStandardRockFormFieldProps(source, destination);
        destination.enhanceForLongLists = source.enhanceForLongLists;
        destination.lazyMode = source.lazyMode;
        destination.multiple = source.multiple;
        destination.showBlankItem = source.showBlankItem;
        destination.blankValue = source.blankValue;
        destination.displayStyle = source.displayStyle;
        destination.columnCount = source.columnCount;
      }
      function useStandardAsyncPickerProps(props) {
        var standardFieldProps = useStandardRockFormFieldProps(props);
        var propValues = reactive(_objectSpread2(_objectSpread2({}, standardFieldProps), {}, {
          enhanceForLongLists: props.enhanceForLongLists,
          lazyMode: props.lazyMode,
          multiple: props.multiple,
          showBlankItem: props.showBlankItem,
          blankValue: props.blankValue,
          displayStyle: props.displayStyle,
          columnCount: props.columnCount
        }));
        watch(() => standardFieldProps, () => {
          copyStandardRockFormFieldProps(props, propValues);
        }, {
          deep: true
        });
        watch([() => props.enhanceForLongLists, () => props.lazyMode, () => props.multiple, () => props.showBlankItem, () => props.displayStyle, () => props.columnCount], () => {
          copyStandardAsyncPickerProps(props, propValues);
        });
        return propValues;
      }
      function extendedRef(value, context) {
        var refValue = ref(value);
        refValue.context = context;
        return refValue;
      }
      function propertyRef(value, propertyName) {
        return extendedRef(value, {
          propertyName
        });
      }
      function getVNodeProp(node, propName) {
        if (node.props && node.props[propName] !== undefined) {
          return node.props[propName];
        }
        if (typeof node.type === "object" && typeof node.type["props"] === "object") {
          var defaultProps = node.type["props"];
          var defaultProp = defaultProps[propName];
          if (defaultProp && typeof defaultProp === "object" && defaultProp["default"] !== undefined) {
            return defaultProp["default"];
          }
        }
        return undefined;
      }
      function getVNodeProps(node) {
        var props = {};
        if (typeof node.type === "object" && typeof node.type["props"] === "object") {
          var defaultProps = node.type["props"];
          for (var p in defaultProps) {
            var defaultProp = defaultProps[p];
            if (defaultProp && typeof defaultProp === "object" && defaultProp["default"] !== undefined) {
              props[p] = defaultProp["default"];
            }
          }
        }
        if (node.props) {
          for (var _p in node.props) {
            if (typeof node.type === "object" && typeof node.type["props"] === "object") {
              var _node$type$props$_p;
              var propType = (_node$type$props$_p = node.type["props"][_p]) === null || _node$type$props$_p === void 0 ? void 0 : _node$type$props$_p.type;
              if (propType === Boolean) {
                props[_p] = node.props[_p] === true || node.props[_p] === "";
              } else if (propType === Number) {
                var _toNumberOrNull;
                props[_p] = (_toNumberOrNull = toNumberOrNull(node.props[_p])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : undefined;
              } else {
                props[_p] = node.props[_p];
              }
            } else {
              props[_p] = node.props[_p];
            }
          }
        }
        return props;
      }
      function extractText(node, props) {
        var el = document.createElement("div");
        var vnode = createVNode(node, props);
        render(vnode, el);
        var text = el.innerText;
        render(null, el);
        return text.trim();
      }
      function extractHtml(node, props) {
        var el = document.createElement("div");
        var vnode = createVNode(node, props);
        render(vnode, el);
        var html = el.innerHTML;
        render(null, el);
        return html;
      }

      var component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        useVModelPassthrough: useVModelPassthrough,
        useVModelPassthroughWithPropUpdateCheck: useVModelPassthroughWithPropUpdateCheck,
        updateRefValue: updateRefValue,
        defineAsyncComponent: defineAsyncComponent,
        standardRockFormFieldProps: standardRockFormFieldProps,
        useStandardRockFormFieldProps: useStandardRockFormFieldProps,
        standardAsyncPickerProps: standardAsyncPickerProps,
        useStandardAsyncPickerProps: useStandardAsyncPickerProps,
        extendedRef: extendedRef,
        propertyRef: propertyRef,
        getVNodeProp: getVNodeProp,
        getVNodeProps: getVNodeProps,
        extractText: extractText,
        extractHtml: extractHtml
      });
      exports('component', component);

      var dateKeyLength = "YYYYMMDD".length;
      var dateKeyNoYearLength = "MMDD".length;
      function getYear(dateKey) {
        var defaultValue = 0;
        if (!dateKey || dateKey.length !== dateKeyLength) {
          return defaultValue;
        }
        var asString = dateKey.substring(0, 4);
        var year = toNumberOrNull(asString) || defaultValue;
        return year;
      }
      function getMonth(dateKey) {
        var defaultValue = 0;
        if (!dateKey) {
          return defaultValue;
        }
        if (dateKey.length === dateKeyLength) {
          var asString = dateKey.substring(4, 6);
          return toNumberOrNull(asString) || defaultValue;
        }
        if (dateKey.length === dateKeyNoYearLength) {
          var _asString = dateKey.substring(0, 2);
          return toNumberOrNull(_asString) || defaultValue;
        }
        return defaultValue;
      }
      function getDay(dateKey) {
        var defaultValue = 0;
        if (!dateKey) {
          return defaultValue;
        }
        if (dateKey.length === dateKeyLength) {
          var asString = dateKey.substring(6, 8);
          return toNumberOrNull(asString) || defaultValue;
        }
        if (dateKey.length === dateKeyNoYearLength) {
          var _asString2 = dateKey.substring(2, 4);
          return toNumberOrNull(_asString2) || defaultValue;
        }
        return defaultValue;
      }
      function toDateKey(year, month, day) {
        if (!year || year > 9999 || year < 0) {
          year = 0;
        }
        if (!month || month > 12 || month < 0) {
          month = 0;
        }
        if (!day || day > 31 || day < 0) {
          day = 0;
        }
        var yearStr = zeroPad(year, 4);
        var monthStr = zeroPad(month, 2);
        var dayStr = zeroPad(day, 2);
        return "".concat(yearStr).concat(monthStr).concat(dayStr);
      }
      function toNoYearDateKey(month, day) {
        if (!month || month > 12 || month < 0) {
          month = 0;
        }
        if (!day || day > 31 || day < 0) {
          day = 0;
        }
        var monthStr = zeroPad(month, 2);
        var dayStr = zeroPad(day, 2);
        return "".concat(monthStr).concat(dayStr);
      }
      var dateKey = {
        getYear,
        getMonth,
        getDay,
        toDateKey,
        toNoYearDateKey
      };

      var dateKey$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getYear: getYear,
        getMonth: getMonth,
        getDay: getDay,
        toDateKey: toDateKey,
        toNoYearDateKey: toNoYearDateKey,
        'default': dateKey
      });
      exports('dateKey', dateKey$1);

      function smoothScrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      var page = {
        smoothScrollToTop
      };
      var currentModalCount = 0;
      function trackModalState(state) {
        var body = document.body;
        var cssClasses = ["modal-open"];
        if (state) {
          currentModalCount++;
        } else {
          currentModalCount = currentModalCount > 0 ? currentModalCount - 1 : 0;
        }
        if (currentModalCount > 0) {
          var _iterator = _createForOfIteratorHelper(cssClasses),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var cssClass = _step.value;
              body.classList.add(cssClass);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(cssClasses),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _cssClass = _step2.value;
              body.classList.remove(_cssClass);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      function loadJavaScriptAsync(_x, _x2, _x3, _x4) {
        return _loadJavaScriptAsync.apply(this, arguments);
      }
      function _loadJavaScriptAsync() {
        _loadJavaScriptAsync = _asyncToGenerator(function* (source, isScriptLoaded, attributes, fingerprint) {
          var _Obsidian, _Obsidian$options;
          var src = source;
          if (fingerprint !== false && typeof Obsidian !== "undefined" && (_Obsidian = Obsidian) !== null && _Obsidian !== void 0 && (_Obsidian$options = _Obsidian.options) !== null && _Obsidian$options !== void 0 && _Obsidian$options.fingerprint) {
            if (src.indexOf("?") === -1) {
              src += "?".concat(Obsidian.options.fingerprint);
            } else {
              src += "&".concat(Obsidian.options.fingerprint);
            }
          }
          if (isScriptLoaded) {
            if (isScriptLoaded()) {
              return true;
            }
          }
          var scripts = Array.from(document.getElementsByTagName("script"));
          var thisScript = scripts.filter(s => s.src === src);
          if (thisScript.length > 0) {
            var _promise = scriptLoadedPromise(thisScript[0]);
            return _promise;
          }
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = src;
          if (attributes) {
            for (var key in attributes) {
              script.setAttribute(key, attributes[key]);
            }
          }
          var promise = scriptLoadedPromise(script);
          document.getElementsByTagName("head")[0].appendChild(script);
          return promise;
          function scriptLoadedPromise(_x5) {
            return _scriptLoadedPromise.apply(this, arguments);
          }
          function _scriptLoadedPromise() {
            _scriptLoadedPromise = _asyncToGenerator(function* (scriptElement) {
              try {
                yield new Promise((resolve, reject) => {
                  scriptElement.addEventListener("load", () => resolve());
                  scriptElement.addEventListener("error", () => {
                    reject();
                  });
                });
                if (isScriptLoaded) {
                  return isScriptLoaded();
                }
                return true;
              } catch (_unused) {
                return false;
              }
            });
            return _scriptLoadedPromise.apply(this, arguments);
          }
        });
        return _loadJavaScriptAsync.apply(this, arguments);
      }
      function addQuickReturn(title, section, sectionOrder) {
        window["Rock"].personalLinks.addQuickReturn(section, sectionOrder !== null && sectionOrder !== void 0 ? sectionOrder : 0, title);
      }

      var page$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        smoothScrollToTop: smoothScrollToTop,
        'default': page,
        trackModalState: trackModalState,
        loadJavaScriptAsync: loadJavaScriptAsync,
        addQuickReturn: addQuickReturn
      });
      exports('page', page$1);

      function createDialog(body, footer) {
        var scrollable = document.createElement("div");
        scrollable.classList.add("modal-scrollable");
        scrollable.style.zIndex = "1060";
        var modal = document.createElement("div");
        scrollable.appendChild(modal);
        modal.classList.add("modal", "fade");
        modal.tabIndex = -1;
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-hidden", "false");
        modal.style.display = "block";
        var modalDialog = document.createElement("div");
        modal.appendChild(modalDialog);
        modalDialog.classList.add("modal-dialog");
        var modalContent = document.createElement("div");
        modalDialog.appendChild(modalContent);
        modalContent.classList.add("modal-content");
        var modalBody = document.createElement("div");
        modalContent.appendChild(modalBody);
        modalBody.classList.add("modal-body");
        if (Array.isArray(body)) {
          var _iterator = _createForOfIteratorHelper(body),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var el = _step.value;
              modalBody.appendChild(el);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          modalBody.appendChild(body);
        }
        if (footer && (!Array.isArray(footer) || footer.length > 0)) {
          var modalFooter = document.createElement("div");
          modalContent.appendChild(modalFooter);
          modalFooter.classList.add("modal-footer");
          if (Array.isArray(footer)) {
            var _iterator2 = _createForOfIteratorHelper(footer),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _el = _step2.value;
                modalFooter.appendChild(_el);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            modalFooter.appendChild(footer);
          }
        }
        scrollable.addEventListener("click", () => {
          modal.classList.remove("animated", "shake");
          setTimeout(() => {
            modal.classList.add("animated", "shake");
          }, 0);
        });
        return scrollable;
      }
      function createCloseButton() {
        var closeButton = document.createElement("button");
        closeButton.classList.add("close");
        closeButton.type = "button";
        closeButton.style.marginTop = "-10px";
        closeButton.innerHTML = "&times;";
        return closeButton;
      }
      function createBackdrop() {
        var backdrop = document.createElement("div");
        backdrop.classList.add("modal-backdrop");
        backdrop.style.zIndex = "1050";
        return backdrop;
      }
      function showDialog(options) {
        return new Promise(resolve => {
          var timer = null;
          var container = document.fullscreenElement || document.body;
          var body = document.createElement("div");
          body.innerText = options.message;
          var buttons = [];
          function clearDialog(result) {
            if (timer !== null) {
              return;
            }
            timer = setTimeout(() => {
              backdrop.remove();
              dialog.remove();
              trackModalState(false);
              resolve(result);
            }, 1000);
            modal.addEventListener("transitionend", () => {
              if (timer) {
                clearTimeout(timer);
              }
              backdrop.remove();
              dialog.remove();
              trackModalState(false);
              resolve(result);
            });
            modal.classList.remove("in");
            backdrop.classList.remove("in");
          }
          var _iterator3 = _createForOfIteratorHelper(options.buttons),
            _step3;
          try {
            var _loop = function _loop() {
              var button = _step3.value;
              var btn = document.createElement("button");
              btn.classList.value = button.className;
              btn.type = "button";
              btn.innerText = button.label;
              btn.addEventListener("click", () => {
                clearDialog(button.key);
              });
              buttons.push(btn);
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          var closeButton = createCloseButton();
          closeButton.addEventListener("click", () => {
            clearDialog("cancel");
          });
          var dialog = createDialog([closeButton, body], buttons);
          var backdrop = createBackdrop();
          var modal = dialog.querySelector(".modal");
          trackModalState(true);
          container.appendChild(dialog);
          container.appendChild(backdrop);
          modal.style.marginTop = "-".concat(modal.offsetHeight / 2.0, "px");
          backdrop.classList.add("in");
          modal.classList.add("in");
        });
      }
      function alert(_x) {
        return _alert.apply(this, arguments);
      }
      function _alert() {
        _alert = _asyncToGenerator(function* (message) {
          yield showDialog({
            message,
            buttons: [{
              key: "ok",
              label: "OK",
              className: "btn btn-primary"
            }]
          });
        });
        return _alert.apply(this, arguments);
      }
      function confirm(_x2) {
        return _confirm.apply(this, arguments);
      }
      function _confirm() {
        _confirm = _asyncToGenerator(function* (message) {
          var result = yield showDialog({
            message,
            buttons: [{
              key: "ok",
              label: "OK",
              className: "btn btn-primary"
            }, {
              key: "cancel",
              label: "Cancel",
              className: "btn btn-default"
            }]
          });
          return result === "ok";
        });
        return _confirm.apply(this, arguments);
      }
      function confirmDelete(typeName, additionalMessage) {
        var message = "Are you sure you want to delete this ".concat(typeName, "?");
        if (additionalMessage) {
          message += " ".concat(additionalMessage);
        }
        return confirm(message);
      }
      function showSecurity(entityTypeIdKey, entityIdKey) {
        var entityTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Item";
        Rock.controls.modal.show(undefined, "/Secure/".concat(entityTypeIdKey, "/").concat(entityIdKey, "?t=Secure ").concat(entityTitle, "&pb=&sb=Done"));
      }

      var dialogs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        alert: alert,
        confirm: confirm,
        confirmDelete: confirmDelete,
        showSecurity: showSecurity
      });
      exports('dialogs', dialogs);

      function isEmail(val) {
        if (typeof val === "string") {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(val.toLowerCase());
        }
        return false;
      }

      var email = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isEmail: isEmail
      });
      exports('email', email);

      function enumToListItemBag(description) {
        var listItemBagList = [];
        for (var property in description) {
          listItemBagList.push({
            text: description[property].toString(),
            value: property.toString()
          });
        }
        return listItemBagList;
      }

      var enumUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        enumToListItemBag: enumToListItemBag
      });
      exports('enumUtils', enumUtils);

      var fieldTypeTable = {};
      function registerFieldType(fieldTypeGuid, fieldType) {
        var normalizedGuid = normalize(fieldTypeGuid);
        if (!isValidGuid(fieldTypeGuid) || normalizedGuid === null) {
          throw "Invalid guid specified when registering field type.";
        }
        if (fieldTypeTable[normalizedGuid] !== undefined) {
          throw "Invalid attempt to replace existing field type.";
        }
        fieldTypeTable[normalizedGuid] = fieldType;
      }
      function getFieldType(fieldTypeGuid) {
        var normalizedGuid = normalize(fieldTypeGuid);
        if (normalizedGuid !== null) {
          var field = fieldTypeTable[normalizedGuid];
          if (field) {
            return field;
          }
        }
        console.warn("Field type \"".concat(fieldTypeGuid, "\" was not found"));
        return null;
      }

      var fieldTypes = /*#__PURE__*/Object.freeze({
        __proto__: null,
        registerFieldType: registerFieldType,
        getFieldType: getFieldType
      });
      exports('fieldTypes', fieldTypes);

      var formStateSymbol = Symbol();
      function provideFormState(state) {
        provide(formStateSymbol, state);
      }
      function useFormState() {
        return inject(formStateSymbol, undefined);
      }

      var form = /*#__PURE__*/Object.freeze({
        __proto__: null,
        provideFormState: provideFormState,
        useFormState: useFormState
      });
      exports('form', form);

      function enterFullscreen(_x, _x2) {
        return _enterFullscreen.apply(this, arguments);
      }
      function _enterFullscreen() {
        _enterFullscreen = _asyncToGenerator(function* (element, exitCallback) {
          try {
            if (element.requestFullscreen) {
              yield element.requestFullscreen();
            } else if (element.mozRequestFullscreen) {
              yield element.mozRequestFullscreen();
            } else if (element.webkitRequestFullscreen) {
              yield element.webkitRequestFullscreen();
            } else {
              return false;
            }
            element.classList.add("is-fullscreen");
            var onFullscreenChange = () => {
              element.classList.remove("is-fullscreen");
              document.removeEventListener("fullscreenchange", onFullscreenChange);
              document.removeEventListener("mozfullscreenchange", onFullscreenChange);
              document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
              if (exitCallback) {
                exitCallback();
              }
            };
            document.addEventListener("fullscreenchange", onFullscreenChange);
            document.addEventListener("mozfullscreenchange", onFullscreenChange);
            document.addEventListener("webkitfullscreenchange", onFullscreenChange);
            return true;
          } catch (ex) {
            console.error(ex);
            return false;
          }
        });
        return _enterFullscreen.apply(this, arguments);
      }
      function isFullscreen() {
        return !!document.fullscreenElement || !!document.mozFullScreenElement || !!document.webkitFullscreenElement;
      }
      function exitFullscreen() {
        return _exitFullscreen.apply(this, arguments);
      }
      function _exitFullscreen() {
        _exitFullscreen = _asyncToGenerator(function* () {
          try {
            if (document.exitFullscreen) {
              yield document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
              yield document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            } else {
              return false;
            }
            return true;
          } catch (ex) {
            console.error(ex);
            return false;
          }
        });
        return _exitFullscreen.apply(this, arguments);
      }

      var fullscreen = /*#__PURE__*/Object.freeze({
        __proto__: null,
        enterFullscreen: enterFullscreen,
        isFullscreen: isFullscreen,
        exitFullscreen: exitFullscreen
      });
      exports('fullscreen', fullscreen);

      function toCoordinate(coord) {
        var isWellKnown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (typeof coord == "string") {
          if (isWellKnown) {
            return coord.split(" ").reverse().map(val => parseFloat(val));
          } else {
            return coord.split(",").map(val => parseFloat(val));
          }
        } else {
          return [coord.lat(), coord.lng()];
        }
      }
      function wellKnownToCoordinates(wellKnownText, type) {
        if (wellKnownText == "") {
          return [];
        }
        if (type == "Point") {
          return [toCoordinate(wellKnownText.replace(/(POINT *\( *)|( *\) *)/ig, ""), true)];
        } else {
          return wellKnownText.replace(/(POLYGON *\(+ *)|( *\)+ *)/ig, "").split(/ *, */).map(coord => toCoordinate(coord, true));
        }
      }
      function coordinatesToWellKnown(coordinates, type) {
        if (coordinates.length == 0) {
          return "";
        } else if (type == "Point") {
          return "POINT(".concat(coordinates[0].reverse().join(" "), ")");
        } else {
          if (isClockwisePolygon(coordinates)) {
            coordinates.reverse();
          }
          var coordinateString = coordinates.map(coords => coords.reverse().join(" ")).join(", ");
          return "POLYGON((".concat(coordinateString, "))");
        }
      }
      function nearAddressForCoordinate(coordinate) {
        return new Promise(resolve => {
          if (window.google) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              location: new google.maps.LatLng(...coordinate)
            }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK && results !== null && results !== void 0 && results[0]) {
                resolve("near " + results[0].formatted_address);
              } else {
                console.log("Geocoder failed due to: " + status);
                resolve("");
              }
            });
          } else {
            resolve("");
          }
        });
      }
      function nearAddressForCoordinates(coordinates) {
        if (!coordinates || coordinates.length == 0) {
          return Promise.resolve("");
        }
        return nearAddressForCoordinate(coordinates[0]);
      }
      function isClockwisePolygon(polygon) {
        var sum = 0;
        for (var i = 0; i < polygon.length - 1; i++) {
          sum += (Math.abs(polygon[i + 1][0]) - Math.abs(polygon[i][0])) * (Math.abs(polygon[i + 1][1]) + Math.abs(polygon[i][1]));
        }
        return sum > 0;
      }
      function loadMapResources() {
        return _loadMapResources.apply(this, arguments);
      }
      function _loadMapResources() {
        _loadMapResources = _asyncToGenerator(function* () {
          var _response$data;
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            mapStyleValueGuid: emptyGuid
          };
          var response = yield post("/api/v2/Controls/GeoPickerGetGoogleMapSettings", undefined, options);
          var googleMapSettings = (_response$data = response.data) !== null && _response$data !== void 0 ? _response$data : {};
          var keyParam = "";
          if (googleMapSettings.googleApiKey) {
            keyParam = "key=".concat(googleMapSettings.googleApiKey, "&");
          }
          yield loadJavaScriptAsync("https://maps.googleapis.com/maps/api/js?".concat(keyParam, "libraries=drawing,visualization,geometry"), () => typeof google != "undefined" && typeof google.maps != "undefined", {}, false);
          return googleMapSettings;
        });
        return _loadMapResources.apply(this, arguments);
      }
      function createLatLng(latOrLatLngOrLatLngLiteral, lngOrNoClampNoWrap, noClampNoWrap) {
        return new google.maps.LatLng(latOrLatLngOrLatLngLiteral, lngOrNoClampNoWrap, noClampNoWrap);
      }

      var geo = /*#__PURE__*/Object.freeze({
        __proto__: null,
        toCoordinate: toCoordinate,
        wellKnownToCoordinates: wellKnownToCoordinates,
        coordinatesToWellKnown: coordinatesToWellKnown,
        nearAddressForCoordinate: nearAddressForCoordinate,
        nearAddressForCoordinates: nearAddressForCoordinates,
        isClockwisePolygon: isClockwisePolygon,
        loadMapResources: loadMapResources,
        createLatLng: createLatLng
      });
      exports('geo', geo);

      var nthNamesAbbreviated = [[1, "1st"], [2, "2nd"], [3, "3rd"], [4, "4th"], [-1, "last"]];
      function padZeroLeft(value, length) {
        var str = value.toString();
        return "0".repeat(length - str.length) + str;
      }
      function getDateString(date) {
        var year = date.year;
        var month = date.month;
        var day = date.day;
        return "".concat(year).concat(padZeroLeft(month, 2)).concat(padZeroLeft(day, 2));
      }
      function getTimeString(date) {
        var hour = date.hour;
        var minute = date.minute;
        var second = date.second;
        return "".concat(padZeroLeft(hour, 2)).concat(padZeroLeft(minute, 2)).concat(padZeroLeft(second, 2));
      }
      function getDateTimeString(date) {
        return "".concat(getDateString(date), "T").concat(getTimeString(date));
      }
      function getDatesFromRangeOrPeriod(value) {
        var segments = value.split("/");
        if (segments.length === 0) {
          return [];
        }
        var startDate = getDateFromString(segments[0]);
        if (!startDate) {
          return [];
        }
        if (segments.length !== 2) {
          return [startDate];
        }
        var dates = [];
        if (segments[1].startsWith("P")) {
          var days = getPeriodDurationInDays(segments[1]);
          for (var day = 0; day < days; day++) {
            var date = startDate.addDays(day);
            if (date) {
              dates.push(date);
            }
          }
        } else {
          var endDate = getDateFromString(segments[1]);
          if (endDate !== null) {
            var _date = startDate;
            while (_date <= endDate) {
              dates.push(_date);
              _date = _date.addDays(1);
            }
          }
        }
        return dates;
      }
      function getDateFromString(value) {
        if (value.length < 8) {
          return null;
        }
        var year = parseInt(value.substring(0, 4));
        var month = parseInt(value.substring(4, 6));
        var day = parseInt(value.substring(6, 8));
        return RockDateTime.fromParts(year, month, day);
      }
      function getDateTimeFromString(value) {
        if (value.length < 15 || value[8] !== "T") {
          return null;
        }
        var year = parseInt(value.substring(0, 4));
        var month = parseInt(value.substring(4, 6));
        var day = parseInt(value.substring(6, 8));
        var hour = parseInt(value.substring(9, 11));
        var minute = parseInt(value.substring(11, 13));
        var second = parseInt(value.substring(13, 15));
        return RockDateTime.fromParts(year, month, day, hour, minute, second);
      }
      function getPeriodDurationInDays(period) {
        if (!period.startsWith("P")) {
          return 0;
        }
        if (period.endsWith("D")) {
          return parseInt(period.substring(1, period.length - 1));
        } else if (period.endsWith("W")) {
          return parseInt(period.substring(1, period.length - 1)) * 7;
        }
        return 0;
      }
      function getRecurrenceDates(attributes, value) {
        var recurrenceDates = [];
        var valueParts = value.split(",");
        var valueType = attributes["VALUE"];
        var _iterator = _createForOfIteratorHelper(valueParts),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var valuePart = _step.value;
            if (!valueType) {
              var length = valuePart.length;
              if (length === 8) {
                valueType = "DATE";
              } else if ((length === 15 || length === 16) && valuePart[8] === "T") {
                valueType = "DATE-TIME";
              } else {
                valueType = "PERIOD";
              }
            }
            if (valueType === "PERIOD") {
              recurrenceDates.push(...getDatesFromRangeOrPeriod(valuePart));
            } else if (valueType === "DATE") {
              var date = getDateFromString(valuePart);
              if (date) {
                recurrenceDates.push(date);
              }
            } else if (valueType === "DATE-TIME") {
              var _date2 = getDateTimeFromString(valuePart);
              if (_date2) {
                recurrenceDates.push(_date2);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return recurrenceDates;
      }
      function getWeekdayName(day) {
        if (day === DayOfWeek.Sunday) {
          return "Sunday";
        } else if (day === DayOfWeek.Monday) {
          return "Monday";
        } else if (day === DayOfWeek.Tuesday) {
          return "Tuesday";
        } else if (day === DayOfWeek.Wednesday) {
          return "Wednesday";
        } else if (day === DayOfWeek.Thursday) {
          return "Thursday";
        } else if (day === DayOfWeek.Friday) {
          return "Friday";
        } else if (day === DayOfWeek.Saturday) {
          return "Saturday";
        } else {
          return "Unknown";
        }
      }
      function dateMatchesDays(rockDate, days) {
        var _iterator2 = _createForOfIteratorHelper(days),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var day = _step2.value;
            if (rockDate.dayOfWeek === day) {
              return true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return false;
      }
      function dateMatchesOffsetDayOfWeeks(rockDate, dayOfWeek, offsets) {
        if (!dateMatchesDays(rockDate, [dayOfWeek])) {
          return false;
        }
        var dayOfMonth = rockDate.day;
        var _iterator3 = _createForOfIteratorHelper(offsets),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var offset = _step3.value;
            if (offset === 1 && dayOfMonth >= 1 && dayOfMonth <= 7) {
              return true;
            } else if (offset === 2 && dayOfMonth >= 8 && dayOfMonth <= 14) {
              return true;
            } else if (offset === 3 && dayOfMonth >= 15 && dayOfMonth <= 21) {
              return true;
            } else if (offset === 4 && dayOfMonth >= 22 && dayOfMonth <= 28) {
              return true;
            } else if (offset === -1) {
              var lastDayOfMonth = rockDate.addDays(-(rockDate.day - 1)).addMonths(1).addDays(-1).day;
              if (dayOfMonth >= lastDayOfMonth - 7 && dayOfMonth <= lastDayOfMonth) {
                return true;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return false;
      }
      function getDayOfWeekFromIcalDay(day) {
        switch (day) {
          case "SU":
            return DayOfWeek.Sunday;
          case "MO":
            return DayOfWeek.Monday;
          case "TU":
            return DayOfWeek.Tuesday;
          case "WE":
            return DayOfWeek.Wednesday;
          case "TH":
            return DayOfWeek.Thursday;
          case "FR":
            return DayOfWeek.Friday;
          case "SA":
            return DayOfWeek.Saturday;
        }
      }
      function getiCalDay(day) {
        switch (day) {
          case DayOfWeek.Sunday:
            return "SU";
          case DayOfWeek.Monday:
            return "MO";
          case DayOfWeek.Tuesday:
            return "TU";
          case DayOfWeek.Wednesday:
            return "WE";
          case DayOfWeek.Thursday:
            return "TH";
          case DayOfWeek.Friday:
            return "FR";
          case DayOfWeek.Saturday:
            return "SA";
        }
      }
      function normalizeLineLength(lines) {
        var newLines = [...lines];
        for (var lineNumber = 0; lineNumber < newLines.length; lineNumber++) {
          if (newLines[lineNumber].length > 75) {
            var currentLine = newLines[lineNumber].substring(0, 75);
            var newLine = " " + newLines[lineNumber].substring(75);
            newLines.splice(lineNumber, 1, currentLine, newLine);
          }
        }
        return newLines;
      }
      function denormalizeLineLength(lines) {
        var newLines = [...lines];
        for (var lineNumber = 1; lineNumber < newLines.length;) {
          if (newLines[lineNumber][0] === " ") {
            newLines[lineNumber - 1] += newLines[lineNumber].substring(1);
            newLines.splice(lineNumber, 1);
          } else {
            lineNumber++;
          }
        }
        return newLines;
      }
      class LineFeeder {
        constructor(content) {
          var lines = content.split(/\r\n|\n|\r/);
          this.lines = denormalizeLineLength(lines);
        }
        peek() {
          if (this.lines.length === 0) {
            return null;
          }
          return this.lines[0];
        }
        pop() {
          if (this.lines.length === 0) {
            return null;
          }
          return this.lines.splice(0, 1)[0];
        }
      }
      class RecurrenceRule {
        constructor() {
          var _values$UNTIL, _values$UNTIL2;
          var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          _defineProperty(this, "interval", 1);
          _defineProperty(this, "byMonthDay", []);
          _defineProperty(this, "byDay", []);
          if (!rule) {
            return;
          }
          var values = {};
          var _iterator4 = _createForOfIteratorHelper(rule.split(";")),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var attr = _step4.value;
              var attrParts = attr.split("=");
              if (attrParts.length === 2) {
                values[attrParts[0]] = attrParts[1];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          if (values["UNTIL"] !== undefined && values["COUNT"] !== undefined) {
            throw new Error("Recurrence rule '".concat(rule, "' cannot specify both UNTIL and COUNT."));
          }
          if (values["FREQ"] !== "DAILY" && values["FREQ"] !== "WEEKLY" && values["FREQ"] !== "MONTHLY") {
            throw new Error("Invalid frequence for recurrence rule '".concat(rule, "'."));
          }
          this.frequency = values["FREQ"];
          if (((_values$UNTIL = values["UNTIL"]) === null || _values$UNTIL === void 0 ? void 0 : _values$UNTIL.length) === 8) {
            var _getDateFromString;
            this.endDate = (_getDateFromString = getDateFromString(values["UNTIL"])) !== null && _getDateFromString !== void 0 ? _getDateFromString : undefined;
          } else if (((_values$UNTIL2 = values["UNTIL"]) === null || _values$UNTIL2 === void 0 ? void 0 : _values$UNTIL2.length) >= 15) {
            var _getDateTimeFromStrin;
            this.endDate = (_getDateTimeFromStrin = getDateTimeFromString(values["UNTIL"])) !== null && _getDateTimeFromStrin !== void 0 ? _getDateTimeFromStrin : undefined;
          }
          if (values["COUNT"] !== undefined) {
            var _toNumberOrNull;
            this.count = (_toNumberOrNull = toNumberOrNull(values["COUNT"])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : undefined;
          }
          if (values["INTERVAL"] !== undefined) {
            var _toNumberOrNull2;
            this.interval = (_toNumberOrNull2 = toNumberOrNull(values["INTERVAL"])) !== null && _toNumberOrNull2 !== void 0 ? _toNumberOrNull2 : 1;
          }
          if (values["BYMONTHDAY"] !== undefined && values["BYMONTHDAY"].length > 0) {
            this.byMonthDay = [];
            var _iterator5 = _createForOfIteratorHelper(values["BYMONTHDAY"].split(",")),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var v = _step5.value;
                var num = toNumberOrNull(v);
                if (num !== null) {
                  this.byMonthDay.push(num);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          if (values["BYDAY"] !== undefined && values["BYDAY"].length > 0) {
            this.byDay = [];
            var _iterator6 = _createForOfIteratorHelper(values["BYDAY"].split(",")),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _v = _step6.value;
                if (_v.length < 2) {
                  continue;
                }
                var _num = _v.length > 2 ? toNumberOrNull(_v.substring(0, _v.length - 2)) : 1;
                var day = _v.substring(_v.length - 2);
                if (_num === null) {
                  continue;
                }
                if (day === "SU" || day === "MO" || day === "TU" || day == "WE" || day == "TH" || day == "FR" || day == "SA") {
                  this.byDay.push({
                    value: _num,
                    day: getDayOfWeekFromIcalDay(day)
                  });
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
        build() {
          var attributes = [];
          attributes.push("FREQ=".concat(this.frequency));
          if (this.count !== undefined) {
            attributes.push("COUNT=".concat(this.count));
          } else if (this.endDate) {
            attributes.push("UNTIL=".concat(getDateTimeString(this.endDate)));
          }
          if (this.interval > 1) {
            attributes.push("INTERVAL=".concat(this.interval));
          }
          if (this.byMonthDay.length > 0) {
            var monthDayValues = this.byMonthDay.map(md => md.toString()).join(",");
            attributes.push("BYMONTHDAY=".concat(monthDayValues));
          }
          if (this.byDay.length > 0) {
            var dayValues = this.byDay.map(d => d.value !== 1 ? "".concat(d.value).concat(getiCalDay(d.day)) : getiCalDay(d.day));
            attributes.push("BYDAY=".concat(dayValues));
          }
          return attributes.join(";");
        }
        getDates(eventStartDateTime, startDateTime, endDateTime) {
          var dates = [];
          var rockDate = eventStartDateTime;
          var dateCount = 0;
          if (!rockDate) {
            return [];
          }
          if (this.endDate && this.endDate < endDateTime) {
            endDateTime = this.endDate;
          }
          while (rockDate < endDateTime && dateCount < 100000) {
            if (this.count && dateCount >= this.count) {
              break;
            }
            dateCount++;
            if (rockDate >= startDateTime) {
              dates.push(rockDate);
            }
            var nextDate = this.nextDateAfter(rockDate);
            if (nextDate === null) {
              break;
            } else {
              rockDate = nextDate;
            }
          }
          return dates;
        }
        nextDateAfter(rockDate) {
          if (this.frequency === "DAILY") {
            return rockDate.addDays(this.interval);
          } else if (this.frequency === "WEEKLY" && this.byDay.length > 0) {
            var nextDate = rockDate;
            if (nextDate.dayOfWeek === DayOfWeek.Saturday) {
              nextDate = nextDate.addDays(1 + (this.interval - 1) * 7);
            } else {
              nextDate = nextDate.addDays(1);
            }
            while (!dateMatchesDays(nextDate, this.byDay.map(d => d.day))) {
              if (nextDate.dayOfWeek === DayOfWeek.Saturday) {
                nextDate = nextDate.addDays(1 + (this.interval - 1) * 7);
              } else {
                nextDate = nextDate.addDays(1);
              }
            }
            return nextDate;
          } else if (this.frequency === "MONTHLY") {
            if (this.byMonthDay.length > 0) {
              var _nextDate = rockDate.addDays(-(rockDate.day - 1));
              if (rockDate.day >= this.byMonthDay[0]) {
                _nextDate = _nextDate.addMonths(this.interval);
              }
              var lastDayOfMonth = _nextDate.addMonths(1).addDays(-1).day;
              var loopCount = 0;
              while (lastDayOfMonth < this.byMonthDay[0]) {
                _nextDate = _nextDate.addMonths(this.interval);
                lastDayOfMonth = _nextDate.addMonths(1).addDays(-1).day;
                if (loopCount++ >= 100) {
                  return null;
                }
              }
              _nextDate = _nextDate.addDays(this.byMonthDay[0] - 1);
              return _nextDate;
            } else if (this.byDay.length > 0) {
              var dayOfWeek = this.byDay[0].day;
              var offsets = this.byDay.map(d => d.value);
              var _nextDate2 = rockDate.addDays(1);
              while (!dateMatchesOffsetDayOfWeeks(_nextDate2, dayOfWeek, offsets)) {
                _nextDate2 = _nextDate2.addDays(1);
              }
              return _nextDate2;
            }
          }
          return null;
        }
      }
      class Event {
        constructor() {
          var icsContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          _defineProperty(this, "excludedDates", []);
          _defineProperty(this, "recurrenceDates", []);
          _defineProperty(this, "recurrenceRules", []);
          if (icsContent === undefined) {
            this.uid = newGuid();
            return;
          }
          var feeder;
          if (typeof icsContent === "string") {
            feeder = new LineFeeder(icsContent);
          } else {
            feeder = icsContent;
          }
          this.parse(feeder);
        }
        buildLines() {
          if (!this.startDateTime || !this.endDateTime) {
            return [];
          }
          var lines = [];
          lines.push("BEGIN:VEVENT");
          lines.push("DTEND:".concat(getDateTimeString(this.endDateTime)));
          lines.push("DTSTAMP:".concat(getDateTimeString(RockDateTime.now())));
          lines.push("DTSTART:".concat(getDateTimeString(this.startDateTime)));
          if (this.excludedDates.length > 0) {
            lines.push("EXDATE:".concat(this.excludedDates.map(d => getDateString(d) + "/P1D").join(",")));
          }
          if (this.recurrenceDates.length > 0) {
            var recurrenceDates = [];
            var _iterator7 = _createForOfIteratorHelper(this.recurrenceDates),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var date = _step7.value;
                var rDate = RockDateTime.fromParts(date.year, date.month, date.day, this.startDateTime.hour, this.startDateTime.minute, this.startDateTime.second);
                if (rDate) {
                  recurrenceDates.push(getDateTimeString(rDate));
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            lines.push("RDATE:".concat(recurrenceDates.join(",")));
          } else if (this.recurrenceRules.length > 0) {
            var _iterator8 = _createForOfIteratorHelper(this.recurrenceRules),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var rrule = _step8.value;
                lines.push("RRULE:".concat(rrule.build()));
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
          lines.push("SEQUENCE:0");
          lines.push("UID:".concat(this.uid));
          lines.push("END:VEVENT");
          return lines;
        }
        build() {
          var lines = this.buildLines();
          if (lines.length === 0) {
            return null;
          }
          return normalizeLineLength(lines).join("\r\n");
        }
        parse(feeder) {
          var line;
          if (feeder.peek() !== "BEGIN:VEVENT") {
            throw new Error("Invalid event.");
          }
          feeder.pop();
          while ((line = feeder.pop()) !== null) {
            if (line === "END:VEVENT") {
              break;
            }
            var splitAt = line.indexOf(":");
            if (splitAt < 0) {
              continue;
            }
            var key = line.substring(0, splitAt);
            var value = line.substring(splitAt + 1);
            var keyAttributes = {};
            var keySegments = key.split(";");
            if (keySegments.length > 1) {
              key = keySegments[0];
              keySegments.splice(0, 1);
              var _iterator9 = _createForOfIteratorHelper(keySegments),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var attr = _step9.value;
                  var attrSegments = attr.split("=");
                  if (attr.length === 2) {
                    keyAttributes[attrSegments[0]] = attrSegments[1];
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
            if (key === "DTSTART") {
              var _getDateTimeFromStrin2;
              this.startDateTime = (_getDateTimeFromStrin2 = getDateTimeFromString(value)) !== null && _getDateTimeFromStrin2 !== void 0 ? _getDateTimeFromStrin2 : undefined;
            } else if (key === "DTEND") {
              var _getDateTimeFromStrin3;
              this.endDateTime = (_getDateTimeFromStrin3 = getDateTimeFromString(value)) !== null && _getDateTimeFromStrin3 !== void 0 ? _getDateTimeFromStrin3 : undefined;
            } else if (key === "RRULE") {
              this.recurrenceRules.push(new RecurrenceRule(value));
            } else if (key === "RDATE") {
              this.recurrenceDates = getRecurrenceDates(keyAttributes, value);
            } else if (key === "UID") {
              this.uid = value;
            } else if (key === "DURATION") ; else if (key === "EXDATE") {
              var dateValues = value.split(",");
              var _iterator10 = _createForOfIteratorHelper(dateValues),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var dateValue = _step10.value;
                  var dates = getDatesFromRangeOrPeriod(dateValue);
                  this.excludedDates.push(...dates);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        }
        isDateExcluded(rockDate) {
          var rockDateOnly = rockDate.date;
          var _iterator11 = _createForOfIteratorHelper(this.excludedDates),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var excludedDate = _step11.value;
              if (excludedDate.date.isEqualTo(rockDateOnly)) {
                return true;
              }
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          return false;
        }
        getDates(startDateTime, endDateTime) {
          if (!this.startDateTime) {
            return [];
          }
          if (this.startDateTime > startDateTime) {
            startDateTime = this.startDateTime;
          }
          if (this.recurrenceDates.length > 0) {
            var dates = [];
            var recurrenceDates = [this.startDateTime, ...this.recurrenceDates];
            for (var _i = 0, _recurrenceDates = recurrenceDates; _i < _recurrenceDates.length; _i++) {
              var date = _recurrenceDates[_i];
              if (date >= startDateTime && date < endDateTime) {
                dates.push(date);
              }
            }
            return dates;
          } else if (this.recurrenceRules.length > 0) {
            var rrule = this.recurrenceRules[0];
            return rrule.getDates(this.startDateTime, startDateTime, endDateTime).filter(d => !this.isDateExcluded(d));
          } else {
            if (this.startDateTime >= startDateTime && this.startDateTime < endDateTime) {
              return [this.startDateTime];
            }
            return [];
          }
        }
        toFriendlyText() {
          return this.toFriendlyString(false);
        }
        toFriendlyHtml() {
          return this.toFriendlyString(true);
        }
        toFriendlyString(html) {
          if (!this.startDateTime) {
            return "";
          }
          var startTimeText = this.startDateTime.toLocaleString({
            hour: "numeric",
            minute: "2-digit",
            hour12: true
          });
          if (this.recurrenceRules.length > 0) {
            var rrule = this.recurrenceRules[0];
            if (rrule.frequency === "DAILY") {
              var result = "Daily";
              if (rrule.interval > 1) {
                result += " every ".concat(rrule.interval, " ").concat(pluralConditional(rrule.interval, "day", "days"));
              }
              result += " at ".concat(startTimeText);
              return result;
            } else if (rrule.frequency === "WEEKLY") {
              if (rrule.byDay.length === 0) {
                return "No Scheduled Days";
              }
              var _result = rrule.byDay.map(d => getWeekdayName(d.day) + "s").join(",");
              if (rrule.interval > 1) {
                _result = "Every ".concat(rrule.interval, " weeks: ").concat(_result);
              } else {
                _result = "Weekly: ".concat(_result);
              }
              return "".concat(_result, " at ").concat(startTimeText);
            } else if (rrule.frequency === "MONTHLY") {
              if (rrule.byMonthDay.length > 0) {
                var _result2 = "Day ".concat(rrule.byMonthDay[0], " of every ");
                if (rrule.interval > 1) {
                  _result2 += "".concat(rrule.interval, " months");
                } else {
                  _result2 += "month";
                }
                return "".concat(_result2, " at ").concat(startTimeText);
              } else if (rrule.byDay.length > 0) {
                var byDay = rrule.byDay[0];
                var offsetNames = nthNamesAbbreviated.filter(n => rrule.byDay.some(d => d.value == n[0])).map(n => n[1]);
                var _result3 = "";
                if (offsetNames.length > 0) {
                  var nameText;
                  if (offsetNames.length > 2) {
                    nameText = "".concat(offsetNames.slice(0, offsetNames.length - 1).join(", "), " and ").concat(offsetNames[offsetNames.length - 1]);
                  } else {
                    nameText = offsetNames.join(" and ");
                  }
                  _result3 = "The ".concat(nameText, " ").concat(getWeekdayName(byDay.day), " of every month");
                } else {
                  return "";
                }
                return "".concat(_result3, " at ").concat(startTimeText);
              } else {
                return "";
              }
            } else {
              return "";
            }
          } else {
            var dates = [this.startDateTime, ...this.recurrenceDates];
            if (dates.length === 1) {
              return "Once at ".concat(this.startDateTime.toASPString("g"));
            } else if (!html || dates.length > 99) {
              var firstDate = dates[0];
              var lastDate = dates[dates.length - 1];
              if (firstDate && lastDate) {
                return "Multiple dates between ".concat(firstDate.toASPString("g"), " and ").concat(lastDate.toASPString("g"));
              } else {
                return "";
              }
            } else if (dates.length > 1) {
              var listHtml = "<ul class=\"list-unstyled\">";
              var _iterator12 = _createForOfIteratorHelper(dates),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var date = _step12.value;
                  listHtml += "<li>".concat(date.toASPString("g"), "</li>");
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
              listHtml += "</li>";
              return listHtml;
            } else {
              return "No Schedule";
            }
          }
        }
      }
      class Calendar {
        constructor() {
          var icsContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          _defineProperty(this, "events", []);
          if (icsContent === undefined) {
            return;
          }
          var feeder = new LineFeeder(icsContent);
          this.parse(feeder);
        }
        build() {
          var lines = [];
          lines.push("BEGIN:VCALENDAR");
          lines.push("PRODID:-//github.com/SparkDevNetwork/Rock//NONSGML Rock//EN");
          lines.push("VERSION:2.0");
          var _iterator13 = _createForOfIteratorHelper(this.events),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var event = _step13.value;
              lines.push(...event.buildLines());
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
          lines.push("END:VCALENDAR");
          return denormalizeLineLength(lines).join("\r\n");
        }
        parse(feeder) {
          var line;
          while ((line = feeder.peek()) !== null) {
            if (line === "BEGIN:VEVENT") {
              var event = new Event(feeder);
              this.events.push(event);
            } else {
              feeder.pop();
            }
          }
        }
      }

      var internetCalendar = /*#__PURE__*/Object.freeze({
        __proto__: null,
        RecurrenceRule: RecurrenceRule,
        Event: Event,
        Calendar: Calendar
      });
      exports('internetCalendar', internetCalendar);

      var engine = new Liquid({
        cache: true
      });
      function resolveMergeFields(template, mergeFields) {
        var tpl = engine.parse(template);
        return engine.renderSync(tpl, mergeFields);
      }

      var lava = /*#__PURE__*/Object.freeze({
        __proto__: null,
        resolveMergeFields: resolveMergeFields
      });
      exports('lava', lava);

      function asListItemBagOrNull(bagJson) {
        try {
          var val = JSON.parse(bagJson);
          if ("value" in val || "text" in val) {
            return val;
          }
          return null;
        } catch (e) {
          return null;
        }
      }

      var listItemBag = /*#__PURE__*/Object.freeze({
        __proto__: null,
        asListItemBagOrNull: asListItemBagOrNull
      });
      exports('listItemBag', listItemBag);

      function formatValue(_x) {
        return _formatValue.apply(this, arguments);
      }
      function _formatValue() {
        _formatValue = _asyncToGenerator(function* (value) {
          var http = useHttp();
          var options = {
            selectedValue: value
          };
          var response = yield http.post("/api/v2/Controls/MergeFieldPickerFormatSelectedValue", {}, options);
          if (response.isSuccess && response.data) {
            return response.data;
          } else {
            console.error("Error", response.errorMessage || "Error formatting '".concat(value, "'."));
            return "";
          }
        });
        return _formatValue.apply(this, arguments);
      }

      var mergeField = /*#__PURE__*/Object.freeze({
        __proto__: null,
        formatValue: formatValue
      });
      exports('mergeField', mergeField);

      function fromEntries(entries) {
        var res = {};
        var _iterator = _createForOfIteratorHelper(entries),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            res[entry[0]] = entry[1];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return res;
      }

      var objectUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        fromEntries: fromEntries
      });
      exports('objectUtils', objectUtils);

      var http$1 = useHttp();
      function fetchPhoneNumberConfiguration() {
        return _fetchPhoneNumberConfiguration.apply(this, arguments);
      }
      function _fetchPhoneNumberConfiguration() {
        _fetchPhoneNumberConfiguration = _asyncToGenerator(function* () {
          var _result$errorMessage;
          var result = yield http$1.post("/api/v2/Controls/PhoneNumberBoxGetConfiguration", undefined, null);
          if (result.isSuccess && result.data) {
            return result.data;
          }
          throw new Error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Error fetching phone number configuration");
        });
        return _fetchPhoneNumberConfiguration.apply(this, arguments);
      }
      function fetchPhoneNumberAndSmsConfiguration() {
        return _fetchPhoneNumberAndSmsConfiguration.apply(this, arguments);
      }
      function _fetchPhoneNumberAndSmsConfiguration() {
        _fetchPhoneNumberAndSmsConfiguration = _asyncToGenerator(function* () {
          var _result$errorMessage2;
          var options = {
            showSmsOptIn: true
          };
          var result = yield http$1.post("/api/v2/Controls/PhoneNumberBoxGetConfiguration", undefined, options);
          if (result.isSuccess && result.data) {
            return result.data;
          }
          throw new Error((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Error fetching phone number configuration");
        });
        return _fetchPhoneNumberAndSmsConfiguration.apply(this, arguments);
      }
      var getPhoneNumberConfiguration = Cache.cachePromiseFactory("phoneNumberConfiguration", fetchPhoneNumberConfiguration);
      var getPhoneNumberAndSmsConfiguration = Cache.cachePromiseFactory("phoneNumberAndSmsConfiguration", fetchPhoneNumberAndSmsConfiguration);
      var defaultRulesConfig = [{
        "match": "^(\\d{3})(\\d{4})$",
        "format": "$1-$2"
      }, {
        "match": "^(\\d{3})(\\d{3})(\\d{4})$",
        "format": "($1) $2-$3"
      }, {
        "match": "^1(\\d{3})(\\d{3})(\\d{4})$",
        "format": "($1) $2-$3"
      }];
      function formatPhoneNumber(value) {
        var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRulesConfig;
        value = stripPhoneNumber(value);
        if (!value || rules.length == 0) {
          return value;
        }
        var _iterator = _createForOfIteratorHelper(rules),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _rule$match;
            var rule = _step.value;
            var regex = new RegExp((_rule$match = rule.match) !== null && _rule$match !== void 0 ? _rule$match : "");
            if (regex.test(value)) {
              var _rule$format;
              return value.replace(regex, (_rule$format = rule.format) !== null && _rule$format !== void 0 ? _rule$format : "") || value;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return value;
      }
      function stripPhoneNumber(str) {
        if (!str) {
          return "";
        }
        return str.replace(/\D/g, "");
      }
      var phone = {
        getPhoneNumberConfiguration,
        formatPhoneNumber,
        stripPhoneNumber
      };
      window.formatPhoneNumber = formatPhoneNumber;

      var phone$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getPhoneNumberConfiguration: getPhoneNumberConfiguration,
        getPhoneNumberAndSmsConfiguration: getPhoneNumberAndSmsConfiguration,
        formatPhoneNumber: formatPhoneNumber,
        stripPhoneNumber: stripPhoneNumber,
        'default': phone
      });
      exports('phone', phone$1);

      function popover(node, options) {
        var _options$sanitize;
        if (Array.isArray(node)) {
          var _iterator = _createForOfIteratorHelper(node),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var n = _step.value;
              popover(n, options);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return;
        }
        $(node).popover({
          html: options === null || options === void 0 ? void 0 : options.html,
          sanitize: (_options$sanitize = options === null || options === void 0 ? void 0 : options.sanitize) !== null && _options$sanitize !== void 0 ? _options$sanitize : true
        });
      }

      var popover$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        popover: popover
      });
      exports('popover', popover$1);

      function sleep(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }
      function isPromise(obj) {
        return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
      }
      class PromiseCompletionSource {
        constructor() {
          _defineProperty(this, "internalResolve", () => {});
          _defineProperty(this, "internalReject", () => {});
          this.internalPromise = new Promise((resolve, reject) => {
            this.internalResolve = resolve;
            this.internalReject = reject;
          });
        }
        get promise() {
          return this.internalPromise;
        }
        resolve(value) {
          this.internalResolve(value);
        }
        reject(reason) {
          this.internalReject(reason);
        }
      }

      var promiseUtils = /*#__PURE__*/Object.freeze({
        __proto__: null,
        sleep: sleep,
        isPromise: isPromise,
        PromiseCompletionSource: PromiseCompletionSource
      });
      exports('promiseUtils', promiseUtils);

      var libraryObject = null;
      var libraryPromise = null;
      function getRealTimeObject() {
        return _getRealTimeObject.apply(this, arguments);
      }
      function _getRealTimeObject() {
        _getRealTimeObject = _asyncToGenerator(function* () {
          var _window$Rock2;
          if (libraryObject) {
            return libraryObject;
          }
          if (!libraryPromise) {
            libraryPromise = loadJavaScriptAsync("/Scripts/Rock/realtime.js", () => {
              var _window$Rock;
              return !!((_window$Rock = window["Rock"]) !== null && _window$Rock !== void 0 && _window$Rock["RealTime"]);
            });
          }
          if (!(yield libraryPromise)) {
            throw new Error("Unable to load RealTime library.");
          }
          libraryObject = (_window$Rock2 = window["Rock"]) === null || _window$Rock2 === void 0 ? void 0 : _window$Rock2["RealTime"];
          return libraryObject;
        });
        return _getRealTimeObject.apply(this, arguments);
      }
      function getTopic(_x) {
        return _getTopic.apply(this, arguments);
      }
      function _getTopic() {
        _getTopic = _asyncToGenerator(function* (identifier) {
          var realTime = yield getRealTimeObject();
          return realTime.getTopic(identifier);
        });
        return _getTopic.apply(this, arguments);
      }

      var realTime = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getTopic: getTopic
      });
      exports('realTime', realTime);

      var rangeTypeOptions = [{
        value: SlidingDateRangeType.Current.toString(),
        text: "Current"
      }, {
        value: SlidingDateRangeType.Previous.toString(),
        text: "Previous"
      }, {
        value: SlidingDateRangeType.Last.toString(),
        text: "Last"
      }, {
        value: SlidingDateRangeType.Next.toString(),
        text: "Next"
      }, {
        value: SlidingDateRangeType.Upcoming.toString(),
        text: "Upcoming"
      }, {
        value: SlidingDateRangeType.DateRange.toString(),
        text: "Date Range"
      }];
      var timeUnitOptions = [{
        value: TimeUnitType.Hour.toString(),
        text: "Hour"
      }, {
        value: TimeUnitType.Day.toString(),
        text: "Day"
      }, {
        value: TimeUnitType.Week.toString(),
        text: "Week"
      }, {
        value: TimeUnitType.Month.toString(),
        text: "Month"
      }, {
        value: TimeUnitType.Year.toString(),
        text: "Year"
      }];
      function getTextForValue(value, options) {
        var _matches$0$text;
        var matches = options.filter(v => v.value === value);
        return matches.length > 0 ? (_matches$0$text = matches[0].text) !== null && _matches$0$text !== void 0 ? _matches$0$text : "" : "";
      }
      function getRangeTypeText(rangeType) {
        var _rangeTypes$0$text;
        var rangeTypes = rangeTypeOptions.filter(o => o.value === rangeType.toString());
        return rangeTypes.length > 0 ? (_rangeTypes$0$text = rangeTypes[0].text) !== null && _rangeTypes$0$text !== void 0 ? _rangeTypes$0$text : "" : "";
      }
      function getTimeUnitText(timeUnit) {
        var _timeUnits$0$text;
        var timeUnits = timeUnitOptions.filter(o => o.value === timeUnit.toString());
        return timeUnits.length > 0 ? (_timeUnits$0$text = timeUnits[0].text) !== null && _timeUnits$0$text !== void 0 ? _timeUnits$0$text : "" : "";
      }
      function parseSlidingDateRangeString(value) {
        var segments = value.split("|");
        if (segments.length < 3) {
          return null;
        }
        var rangeTypes = rangeTypeOptions.filter(o => {
          var _o$text;
          return ((_o$text = o.text) !== null && _o$text !== void 0 ? _o$text : "").replace(" ", "").toLowerCase() === segments[0].toLowerCase() || o.value === segments[0];
        });
        var timeUnits = timeUnitOptions.filter(o => {
          var _o$text2;
          return ((_o$text2 = o.text) !== null && _o$text2 !== void 0 ? _o$text2 : "").toLowerCase() === segments[2].toLowerCase() || o.value === segments[2];
        });
        if (rangeTypes.length === 0) {
          return null;
        }
        var range = {
          rangeType: toNumber(rangeTypes[0].value)
        };
        if ([SlidingDateRangeType.Current, SlidingDateRangeType.Last, SlidingDateRangeType.Next, SlidingDateRangeType.Previous, SlidingDateRangeType.Upcoming].includes(range.rangeType)) {
          range.timeUnit = timeUnits.length > 0 ? toNumber(timeUnits[0].value) : TimeUnitType.Hour;
          if ([SlidingDateRangeType.Last, SlidingDateRangeType.Next, SlidingDateRangeType.Previous, SlidingDateRangeType.Upcoming].includes(range.rangeType)) {
            var _toNumberOrNull;
            range.timeValue = (_toNumberOrNull = toNumberOrNull(segments[1])) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 1;
          }
        }
        if (range.rangeType === SlidingDateRangeType.DateRange) {
          if (segments.length > 3) {
            range.lowerDate = segments[3];
          }
          if (segments.length > 4) {
            range.upperDate = segments[4];
          }
        }
        return range;
      }
      function slidingDateRangeToString(value) {
        var _value$timeUnit$toStr, _value$timeUnit, _value$lowerDate, _value$upperDate, _value$timeValue, _value$timeUnit$toStr2, _value$timeUnit2;
        switch (value.rangeType) {
          case SlidingDateRangeType.Current:
            return "Current||".concat(getTextForValue((_value$timeUnit$toStr = (_value$timeUnit = value.timeUnit) === null || _value$timeUnit === void 0 ? void 0 : _value$timeUnit.toString()) !== null && _value$timeUnit$toStr !== void 0 ? _value$timeUnit$toStr : "", timeUnitOptions), "||");
          case SlidingDateRangeType.DateRange:
            return "DateRange|||".concat((_value$lowerDate = value.lowerDate) !== null && _value$lowerDate !== void 0 ? _value$lowerDate : "", "|").concat((_value$upperDate = value.upperDate) !== null && _value$upperDate !== void 0 ? _value$upperDate : "");
          default:
            return "".concat(getTextForValue(value.rangeType.toString(), rangeTypeOptions), "|").concat((_value$timeValue = value.timeValue) !== null && _value$timeValue !== void 0 ? _value$timeValue : "", "|").concat(getTextForValue((_value$timeUnit$toStr2 = (_value$timeUnit2 = value.timeUnit) === null || _value$timeUnit2 === void 0 ? void 0 : _value$timeUnit2.toString()) !== null && _value$timeUnit$toStr2 !== void 0 ? _value$timeUnit$toStr2 : "", timeUnitOptions), "||");
        }
      }
      function calculateSlidingDateRange(value) {
        var currentDateTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var result = {
          start: null,
          end: null
        };
        if (!currentDateTime) {
          currentDateTime = RockDateTime.now();
        }
        if (value.rangeType === SlidingDateRangeType.Current) {
          if (value.timeUnit === TimeUnitType.Hour) {
            var _result$start$addHour, _result$start;
            result.start = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0);
            result.end = (_result$start$addHour = (_result$start = result.start) === null || _result$start === void 0 ? void 0 : _result$start.addHours(1)) !== null && _result$start$addHour !== void 0 ? _result$start$addHour : null;
          } else if (value.timeUnit === TimeUnitType.Day) {
            result.start = currentDateTime.date;
            result.end = result.start.addDays(1);
          } else if (value.timeUnit === TimeUnitType.Week) {
            var diff = currentDateTime.dayOfWeek - DayOfWeek.Monday;
            if (diff < 0) {
              diff += 7;
            }
            result.start = currentDateTime.addDays(-1 * diff).date;
            result.end = result.start.addDays(7);
          } else if (value.timeUnit === TimeUnitType.Month) {
            var _result$start$addMont, _result$start2;
            result.start = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1);
            result.end = (_result$start$addMont = (_result$start2 = result.start) === null || _result$start2 === void 0 ? void 0 : _result$start2.addMonths(1)) !== null && _result$start$addMont !== void 0 ? _result$start$addMont : null;
          } else if (value.timeUnit === TimeUnitType.Year) {
            result.start = RockDateTime.fromParts(currentDateTime.year, 1, 1);
            result.end = RockDateTime.fromParts(currentDateTime.year + 1, 1, 1);
          }
        } else if (value.rangeType === SlidingDateRangeType.Last || value.rangeType === SlidingDateRangeType.Previous) {
          var _value$timeValue2;
          var count = (_value$timeValue2 = value.timeValue) !== null && _value$timeValue2 !== void 0 ? _value$timeValue2 : 1;
          var roundUpCount = value.rangeType === SlidingDateRangeType.Last ? 1 : 0;
          if (value.timeUnit === TimeUnitType.Hour) {
            var _RockDateTime$fromPar, _RockDateTime$fromPar2, _result$end$addHours, _result$end;
            result.end = (_RockDateTime$fromPar = (_RockDateTime$fromPar2 = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0)) === null || _RockDateTime$fromPar2 === void 0 ? void 0 : _RockDateTime$fromPar2.addHours(roundUpCount)) !== null && _RockDateTime$fromPar !== void 0 ? _RockDateTime$fromPar : null;
            result.start = (_result$end$addHours = (_result$end = result.end) === null || _result$end === void 0 ? void 0 : _result$end.addHours(-count)) !== null && _result$end$addHours !== void 0 ? _result$end$addHours : null;
          } else if (value.timeUnit === TimeUnitType.Day) {
            var _result$end$addDays, _result$end2;
            result.end = currentDateTime.date.addDays(roundUpCount);
            result.start = (_result$end$addDays = (_result$end2 = result.end) === null || _result$end2 === void 0 ? void 0 : _result$end2.addDays(-count)) !== null && _result$end$addDays !== void 0 ? _result$end$addDays : null;
          } else if (value.timeUnit === TimeUnitType.Week) {
            var _diff = currentDateTime.dayOfWeek - DayOfWeek.Monday;
            if (_diff < 0) {
              _diff += 7;
            }
            result.end = currentDateTime.addDays(-1 * _diff).date.addDays(7 * roundUpCount);
            result.start = result.end.addDays(-count * 7);
          } else if (value.timeUnit === TimeUnitType.Month) {
            var _RockDateTime$fromPar3, _RockDateTime$fromPar4, _result$end$addMonths, _result$end3;
            result.end = (_RockDateTime$fromPar3 = (_RockDateTime$fromPar4 = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1)) === null || _RockDateTime$fromPar4 === void 0 ? void 0 : _RockDateTime$fromPar4.addMonths(roundUpCount)) !== null && _RockDateTime$fromPar3 !== void 0 ? _RockDateTime$fromPar3 : null;
            result.start = (_result$end$addMonths = (_result$end3 = result.end) === null || _result$end3 === void 0 ? void 0 : _result$end3.addMonths(-count)) !== null && _result$end$addMonths !== void 0 ? _result$end$addMonths : null;
          } else if (value.timeUnit === TimeUnitType.Year) {
            var _RockDateTime$fromPar5, _RockDateTime$fromPar6, _result$end$addYears, _result$end4;
            result.end = (_RockDateTime$fromPar5 = (_RockDateTime$fromPar6 = RockDateTime.fromParts(currentDateTime.year, 1, 1)) === null || _RockDateTime$fromPar6 === void 0 ? void 0 : _RockDateTime$fromPar6.addYears(roundUpCount)) !== null && _RockDateTime$fromPar5 !== void 0 ? _RockDateTime$fromPar5 : null;
            result.start = (_result$end$addYears = (_result$end4 = result.end) === null || _result$end4 === void 0 ? void 0 : _result$end4.addYears(-count)) !== null && _result$end$addYears !== void 0 ? _result$end$addYears : null;
          }
          var cutoffDate = currentDateTime.date.addDays(1);
          if (result.end && result.end.date > cutoffDate) {
            result.end = cutoffDate;
          }
        } else if (value.rangeType === SlidingDateRangeType.Next || value.rangeType === SlidingDateRangeType.Upcoming) {
          var _value$timeValue3;
          var _count = (_value$timeValue3 = value.timeValue) !== null && _value$timeValue3 !== void 0 ? _value$timeValue3 : 1;
          var _roundUpCount = value.rangeType === SlidingDateRangeType.Upcoming ? 1 : 0;
          if (value.timeUnit === TimeUnitType.Hour) {
            var _RockDateTime$fromPar7, _RockDateTime$fromPar8, _result$start$addHour2, _result$start3;
            result.start = (_RockDateTime$fromPar7 = (_RockDateTime$fromPar8 = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0)) === null || _RockDateTime$fromPar8 === void 0 ? void 0 : _RockDateTime$fromPar8.addHours(_roundUpCount)) !== null && _RockDateTime$fromPar7 !== void 0 ? _RockDateTime$fromPar7 : null;
            result.end = (_result$start$addHour2 = (_result$start3 = result.start) === null || _result$start3 === void 0 ? void 0 : _result$start3.addHours(_count)) !== null && _result$start$addHour2 !== void 0 ? _result$start$addHour2 : null;
          } else if (value.timeUnit === TimeUnitType.Day) {
            result.start = currentDateTime.date.addDays(_roundUpCount);
            result.end = result.start.addDays(_count);
          } else if (value.timeUnit === TimeUnitType.Week) {
            var _diff2 = currentDateTime.dayOfWeek - DayOfWeek.Monday;
            if (_diff2 < 0) {
              _diff2 += 7;
            }
            result.start = currentDateTime.addDays(-1 * _diff2).date.addDays(7 * _roundUpCount);
            result.end = result.start.addDays(_count * 7);
          } else if (value.timeUnit === TimeUnitType.Month) {
            var _RockDateTime$fromPar9, _RockDateTime$fromPar10, _result$start$addMont2, _result$start4;
            result.start = (_RockDateTime$fromPar9 = (_RockDateTime$fromPar10 = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1)) === null || _RockDateTime$fromPar10 === void 0 ? void 0 : _RockDateTime$fromPar10.addMonths(_roundUpCount)) !== null && _RockDateTime$fromPar9 !== void 0 ? _RockDateTime$fromPar9 : null;
            result.end = (_result$start$addMont2 = (_result$start4 = result.start) === null || _result$start4 === void 0 ? void 0 : _result$start4.addMonths(_count)) !== null && _result$start$addMont2 !== void 0 ? _result$start$addMont2 : null;
          } else if (value.timeUnit === TimeUnitType.Year) {
            var _RockDateTime$fromPar11, _RockDateTime$fromPar12, _result$start$addYear, _result$start5;
            result.start = (_RockDateTime$fromPar11 = (_RockDateTime$fromPar12 = RockDateTime.fromParts(currentDateTime.year, 1, 1)) === null || _RockDateTime$fromPar12 === void 0 ? void 0 : _RockDateTime$fromPar12.addYears(_roundUpCount)) !== null && _RockDateTime$fromPar11 !== void 0 ? _RockDateTime$fromPar11 : null;
            result.end = (_result$start$addYear = (_result$start5 = result.start) === null || _result$start5 === void 0 ? void 0 : _result$start5.addYears(_count)) !== null && _result$start$addYear !== void 0 ? _result$start$addYear : null;
          }
          if (result.start && result.start.date < currentDateTime.date) {
            result.start = currentDateTime.date;
          }
        } else if (value.rangeType === SlidingDateRangeType.DateRange) {
          var _value$lowerDate2, _value$upperDate2;
          result.start = RockDateTime.parseISO((_value$lowerDate2 = value.lowerDate) !== null && _value$lowerDate2 !== void 0 ? _value$lowerDate2 : "");
          result.end = RockDateTime.parseISO((_value$upperDate2 = value.upperDate) !== null && _value$upperDate2 !== void 0 ? _value$upperDate2 : "");
          if (!result.start && value.lowerDate) {
            result.start = RockDateTime.fromJSDate(new Date(value.lowerDate));
          }
          if (!result.end && value.upperDate) {
            result.end = RockDateTime.fromJSDate(new Date(value.upperDate));
          }
          if (result.end) {
            result.end = result.end.addDays(1);
          }
        }
        if (result.end && value.timeUnit != TimeUnitType.Hour) {
          result.end = result.end.addMilliseconds(-1);
        }
        return result;
      }

      var slidingDateRange = /*#__PURE__*/Object.freeze({
        __proto__: null,
        rangeTypeOptions: rangeTypeOptions,
        timeUnitOptions: timeUnitOptions,
        getRangeTypeText: getRangeTypeText,
        getTimeUnitText: getTimeUnitText,
        parseSlidingDateRangeString: parseSlidingDateRangeString,
        slidingDateRangeToString: slidingDateRangeToString,
        calculateSlidingDateRange: calculateSlidingDateRange,
        RangeType: SlidingDateRangeType,
        TimeUnit: TimeUnitType
      });
      exports('slidingDateRange', slidingDateRange);

      var http = useHttp();
      function getStructuredContentEditorConfiguration(_x) {
        return _getStructuredContentEditorConfiguration.apply(this, arguments);
      }
      function _getStructuredContentEditorConfiguration() {
        _getStructuredContentEditorConfiguration = _asyncToGenerator(function* (options) {
          var result = yield http.post("/api/v2/Controls/StructuredContentEditorGetConfiguration", undefined, options);
          if (result.isSuccess && result.data) {
            return result.data;
          }
          throw new Error(result.errorMessage || "Error fetching structured content editor configuration");
        });
        return _getStructuredContentEditorConfiguration.apply(this, arguments);
      }
      var structuredContentEditor = {
        getStructuredContentEditorConfiguration
      };

      var structuredContentEditor$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getStructuredContentEditorConfiguration: getStructuredContentEditorConfiguration,
        'default': structuredContentEditor
      });
      exports('structuredContentEditor', structuredContentEditor$1);

      function tooltip(node, options) {
        var _options$sanitize;
        if (Array.isArray(node)) {
          var _iterator = _createForOfIteratorHelper(node),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var n = _step.value;
              tooltip(n, options);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return;
        }
        $(node).tooltip({
          html: options === null || options === void 0 ? void 0 : options.html,
          sanitize: (_options$sanitize = options === null || options === void 0 ? void 0 : options.sanitize) !== null && _options$sanitize !== void 0 ? _options$sanitize : true
        });
      }
      function showTooltip(node) {
        $(node).tooltip("show");
      }

      var tooltip$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        tooltip: tooltip,
        showTooltip: showTooltip
      });
      exports('tooltip', tooltip$1);

      class CategoryTreeItemProvider {
        getItems(parentGuid) {
          var _this = this;
          return _asyncToGenerator(function* () {
            var options = {
              parentGuid: parentGuid,
              entityTypeGuid: _this.entityTypeGuid,
              entityTypeQualifierColumn: _this.entityTypeQualifierColumn,
              entityTypeQualifierValue: _this.entityTypeQualifierValue,
              lazyLoad: false,
              securityGrantToken: _this.securityGrantToken,
              getCategorizedItems: false,
              includeCategoriesWithoutChildren: false,
              includeInactiveItems: false,
              includeUnnamedEntityItems: false
            };
            var response = yield post("/api/v2/Controls/CategoryPickerChildTreeItems", {}, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            return yield _this2.getItems(_this2.rootCategoryGuid);
          })();
        }
        getChildItems(item) {
          var _this3 = this;
          return _asyncToGenerator(function* () {
            return _this3.getItems(item.value);
          })();
        }
      }
      class LocationTreeItemProvider {
        getItems(parentGuid) {
          var _this4 = this;
          return _asyncToGenerator(function* () {
            var _toGuidOrNull;
            var options = {
              guid: (_toGuidOrNull = toGuidOrNull(parentGuid)) !== null && _toGuidOrNull !== void 0 ? _toGuidOrNull : emptyGuid,
              rootLocationGuid: emptyGuid,
              securityGrantToken: _this4.securityGrantToken
            };
            var url = "/api/v2/Controls/LocationItemPickerGetActiveChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this5 = this;
          return _asyncToGenerator(function* () {
            return yield _this5.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this6 = this;
          return _asyncToGenerator(function* () {
            return _this6.getItems(item.value);
          })();
        }
      }
      class DataViewTreeItemProvider {
        constructor() {
          _defineProperty(this, "displayPersistedOnly", false);
        }
        getItems(parentGuid) {
          var _this7 = this;
          return _asyncToGenerator(function* () {
            var options = {
              parentGuid,
              getCategorizedItems: true,
              includeCategoriesWithoutChildren: false,
              entityTypeGuidFilter: _this7.entityTypeGuid,
              lazyLoad: false,
              securityGrantToken: _this7.securityGrantToken,
              displayPersistedOnly: _this7.displayPersistedOnly,
              includeUnnamedEntityItems: false
            };
            var response = yield post("/api/v2/Controls/DataViewPickerGetDataViews", {}, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this8 = this;
          return _asyncToGenerator(function* () {
            return yield _this8.getItems();
          })();
        }
        getChildItems(item) {
          var _this9 = this;
          return _asyncToGenerator(function* () {
            return _this9.getItems(item.value);
          })();
        }
      }
      class WorkflowTypeTreeItemProvider {
        getItems(parentGuid) {
          var _this10 = this;
          return _asyncToGenerator(function* () {
            var _this10$includeInacti;
            var options = {
              parentGuid,
              includeInactiveItems: (_this10$includeInacti = _this10.includeInactiveItems) !== null && _this10$includeInacti !== void 0 ? _this10$includeInacti : false,
              securityGrantToken: _this10.securityGrantToken,
              getCategorizedItems: false,
              includeCategoriesWithoutChildren: false,
              includeUnnamedEntityItems: false,
              lazyLoad: false
            };
            var response = yield post("/api/v2/Controls/WorkflowTypePickerGetWorkflowTypes", {}, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this11 = this;
          return _asyncToGenerator(function* () {
            return yield _this11.getItems();
          })();
        }
        getChildItems(item) {
          var _this12 = this;
          return _asyncToGenerator(function* () {
            return _this12.getItems(item.value);
          })();
        }
      }
      class PageTreeItemProvider {
        getItems(parentGuid) {
          var _this13 = this;
          return _asyncToGenerator(function* () {
            var _toGuidOrNull2, _this13$hidePageGuids;
            var result;
            var options = {
              guid: (_toGuidOrNull2 = toGuidOrNull(parentGuid)) !== null && _toGuidOrNull2 !== void 0 ? _toGuidOrNull2 : emptyGuid,
              rootPageGuid: null,
              hidePageGuids: (_this13$hidePageGuids = _this13.hidePageGuids) !== null && _this13$hidePageGuids !== void 0 ? _this13$hidePageGuids : [],
              securityGrantToken: _this13.securityGrantToken
            };
            var url = "/api/v2/Controls/PagePickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              result = response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
            if (parentGuid || !_this13.selectedPageGuids) {
              return result;
            }
            return _this13.getHierarchyToSelectedPage(result);
          })();
        }
        getParentList() {
          var _this14 = this;
          return _asyncToGenerator(function* () {
            var options = {
              selectedPageGuids: _this14.selectedPageGuids,
              securityGrantToken: _this14.securityGrantToken
            };
            var url = "/api/v2/Controls/PagePickerGetSelectedPageHierarchy";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getHierarchyToSelectedPage(rootLayer) {
          var _this15 = this;
          return _asyncToGenerator(function* () {
            var parents = yield _this15.getParentList();
            if (!parents || parents.length == 0) {
              return rootLayer;
            }
            var childLists = yield Promise.all(parents.map(guid => _this15.getItems(guid)));
            var allPages = rootLayer.concat(flatten(childLists));
            parents.forEach((parentGuid, i) => {
              var parentPage = allPages.find(page => page.value == parentGuid);
              if (parentPage) {
                parentPage.children = childLists[i];
              }
            });
            return rootLayer;
          })();
        }
        getRootItems() {
          var _this16 = this;
          return _asyncToGenerator(function* () {
            return yield _this16.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this17 = this;
          return _asyncToGenerator(function* () {
            return _this17.getItems(item.value);
          })();
        }
      }
      class ConnectionRequestTreeItemProvider {
        getItems(parentGuid) {
          var _this18 = this;
          return _asyncToGenerator(function* () {
            var options = {
              parentGuid,
              securityGrantToken: _this18.securityGrantToken
            };
            var url = "/api/v2/Controls/ConnectionRequestPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this19 = this;
          return _asyncToGenerator(function* () {
            return yield _this19.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this20 = this;
          return _asyncToGenerator(function* () {
            return _this20.getItems(item.value);
          })();
        }
      }
      class GroupTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "rootGroupGuid", null);
          _defineProperty(this, "includedGroupTypeGuids", []);
          _defineProperty(this, "includeInactiveGroups", false);
          _defineProperty(this, "limitToSchedulingEnabled", false);
          _defineProperty(this, "limitToRSVPEnabled", false);
        }
        getItems() {
          var _arguments = arguments,
            _this21 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
            var options = {
              guid: parentGuid,
              rootGroupGuid: _this21.rootGroupGuid,
              includedGroupTypeGuids: _this21.includedGroupTypeGuids,
              includeInactiveGroups: _this21.includeInactiveGroups,
              limitToSchedulingEnabled: _this21.limitToSchedulingEnabled,
              limitToRSVPEnabled: _this21.limitToRSVPEnabled,
              securityGrantToken: _this21.securityGrantToken
            };
            var url = "/api/v2/Controls/GroupPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this22 = this;
          return _asyncToGenerator(function* () {
            return yield _this22.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this23 = this;
          return _asyncToGenerator(function* () {
            return _this23.getItems(item.value);
          })();
        }
      }
      class MergeTemplateTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "mergeTemplateOwnership", MergeTemplateOwnership.Global);
        }
        getItems() {
          var _arguments2 = arguments,
            _this24 = this;
          return _asyncToGenerator(function* () {
            var _toNumberOrNull;
            var parentGuid = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : null;
            var options = {
              parentGuid,
              mergeTemplateOwnership: (_toNumberOrNull = toNumberOrNull(_this24.mergeTemplateOwnership)) !== null && _toNumberOrNull !== void 0 ? _toNumberOrNull : 0,
              securityGrantToken: _this24.securityGrantToken
            };
            var url = "/api/v2/Controls/MergeTemplatePickerGetMergeTemplates";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this25 = this;
          return _asyncToGenerator(function* () {
            return yield _this25.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this26 = this;
          return _asyncToGenerator(function* () {
            return _this26.getItems(item.value);
          })();
        }
      }
      class MetricCategoryTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
        }
        getItems() {
          var _arguments3 = arguments,
            _this27 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : null;
            var options = {
              parentGuid,
              securityGrantToken: _this27.securityGrantToken
            };
            var url = "/api/v2/Controls/MetricCategoryPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this28 = this;
          return _asyncToGenerator(function* () {
            return yield _this28.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this29 = this;
          return _asyncToGenerator(function* () {
            return _this29.getItems(item.value);
          })();
        }
      }
      class MetricItemTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "includeCategoryGuids", null);
        }
        getItems() {
          var _arguments4 = arguments,
            _this30 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : null;
            var options = {
              parentGuid,
              includeCategoryGuids: _this30.includeCategoryGuids,
              securityGrantToken: _this30.securityGrantToken
            };
            var url = "/api/v2/Controls/MetricItemPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this31 = this;
          return _asyncToGenerator(function* () {
            return yield _this31.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this32 = this;
          return _asyncToGenerator(function* () {
            return _this32.getItems(item.value);
          })();
        }
      }
      class RegistrationTemplateTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
        }
        getItems() {
          var _arguments5 = arguments,
            _this33 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : null;
            var options = {
              parentGuid,
              securityGrantToken: _this33.securityGrantToken
            };
            var url = "/api/v2/Controls/RegistrationTemplatePickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this34 = this;
          return _asyncToGenerator(function* () {
            return yield _this34.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this35 = this;
          return _asyncToGenerator(function* () {
            return _this35.getItems(item.value);
          })();
        }
      }
      class ReportTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "includeCategoryGuids", null);
          _defineProperty(this, "entityTypeGuid", null);
        }
        getItems() {
          var _arguments6 = arguments,
            _this36 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : null;
            var options = {
              parentGuid,
              includeCategoryGuids: _this36.includeCategoryGuids,
              entityTypeGuid: _this36.entityTypeGuid,
              securityGrantToken: _this36.securityGrantToken
            };
            var url = "/api/v2/Controls/ReportPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this37 = this;
          return _asyncToGenerator(function* () {
            return yield _this37.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this38 = this;
          return _asyncToGenerator(function* () {
            return _this38.getItems(item.value);
          })();
        }
      }
      class ScheduleTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "includeInactive", false);
        }
        getItems() {
          var _arguments7 = arguments,
            _this39 = this;
          return _asyncToGenerator(function* () {
            var parentGuid = _arguments7.length > 0 && _arguments7[0] !== undefined ? _arguments7[0] : null;
            var options = {
              parentGuid,
              includeInactiveItems: _this39.includeInactive,
              securityGrantToken: _this39.securityGrantToken
            };
            var url = "/api/v2/Controls/SchedulePickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this40 = this;
          return _asyncToGenerator(function* () {
            return yield _this40.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this41 = this;
          return _asyncToGenerator(function* () {
            return _this41.getItems(item.value);
          })();
        }
      }
      class WorkflowActionTypeTreeItemProvider {
        constructor() {
          _defineProperty(this, "securityGrantToken", null);
          _defineProperty(this, "includeInactive", false);
        }
        getItems() {
          var _arguments8 = arguments,
            _this42 = this;
          return _asyncToGenerator(function* () {
            var _toNumberOrNull2;
            var parentId = _arguments8.length > 0 && _arguments8[0] !== undefined ? _arguments8[0] : null;
            var options = {
              parentId: (_toNumberOrNull2 = toNumberOrNull(parentId)) !== null && _toNumberOrNull2 !== void 0 ? _toNumberOrNull2 : 0,
              securityGrantToken: _this42.securityGrantToken
            };
            var url = "/api/v2/Controls/WorkflowActionTypePickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              return response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
          })();
        }
        getRootItems() {
          var _this43 = this;
          return _asyncToGenerator(function* () {
            return yield _this43.getItems(null);
          })();
        }
        getChildItems(item) {
          var _this44 = this;
          return _asyncToGenerator(function* () {
            return _this44.getItems(item.value);
          })();
        }
      }
      class MergeFieldTreeItemProvider {
        constructor() {
          _defineProperty(this, "additionalFields", "");
        }
        getItems(parentId) {
          var _this45 = this;
          return _asyncToGenerator(function* () {
            var result;
            var options = {
              id: parentId || "0",
              additionalFields: _this45.additionalFields
            };
            var url = "/api/v2/Controls/MergeFieldPickerGetChildren";
            var response = yield post(url, undefined, options);
            if (response.isSuccess && response.data) {
              result = response.data;
            } else {
              console.log("Error", response.errorMessage);
              return [];
            }
            if (parentId || !_this45.selectedIds || _this45.selectedIds.length == 0) {
              return result;
            }
            return _this45.getHierarchyToSelectedMergeField(result);
          })();
        }
        getHierarchyToSelectedMergeField(rootLayer) {
          var _this46 = this;
          return _asyncToGenerator(function* () {
            var parents = _this46.getParentList();
            if (!parents || parents.length == 0) {
              return rootLayer;
            }
            var childLists = yield Promise.all(parents.map(id => _this46.getItems(id)));
            var allMergeFields = rootLayer.concat(flatten(childLists));
            parents.forEach((parentGuid, i) => {
              var parentMergeField = allMergeFields.find(page => page.value == parentGuid);
              if (parentMergeField) {
                parentMergeField.children = childLists[i];
              }
            });
            return rootLayer;
          })();
        }
        getParentList() {
          if (!this.selectedIds || this.selectedIds.length == 0) {
            return null;
          }
          if (typeof this.selectedIds == "string") {
            return this.splitSelectionIntoParents(this.selectedIds);
          }
          return flatten(this.selectedIds.map(sel => this.splitSelectionIntoParents(sel)));
        }
        splitSelectionIntoParents(selection) {
          var parentIds = [];
          var splitList = selection.split("|");
          splitList.pop();
          while (splitList.length >= 1) {
            parentIds.unshift(splitList.join("|"));
            splitList.pop();
          }
          return parentIds;
        }
        getRootItems() {
          var _this47 = this;
          return _asyncToGenerator(function* () {
            return yield _this47.getItems();
          })();
        }
        getChildItems(item) {
          var _this48 = this;
          return _asyncToGenerator(function* () {
            return _this48.getItems(item.value);
          })();
        }
      }

      var treeItemProviders = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CategoryTreeItemProvider: CategoryTreeItemProvider,
        LocationTreeItemProvider: LocationTreeItemProvider,
        DataViewTreeItemProvider: DataViewTreeItemProvider,
        WorkflowTypeTreeItemProvider: WorkflowTypeTreeItemProvider,
        PageTreeItemProvider: PageTreeItemProvider,
        ConnectionRequestTreeItemProvider: ConnectionRequestTreeItemProvider,
        GroupTreeItemProvider: GroupTreeItemProvider,
        MergeTemplateTreeItemProvider: MergeTemplateTreeItemProvider,
        MetricCategoryTreeItemProvider: MetricCategoryTreeItemProvider,
        MetricItemTreeItemProvider: MetricItemTreeItemProvider,
        RegistrationTemplateTreeItemProvider: RegistrationTemplateTreeItemProvider,
        ReportTreeItemProvider: ReportTreeItemProvider,
        ScheduleTreeItemProvider: ScheduleTreeItemProvider,
        WorkflowActionTypeTreeItemProvider: WorkflowActionTypeTreeItemProvider,
        MergeFieldTreeItemProvider: MergeFieldTreeItemProvider
      });
      exports('treeItemProviders', treeItemProviders);

      function isUrl(val) {
        if (typeof val === "string") {
          var re = /^(http[s]?:\/\/)?[^\s(["<,>]*\.?[^\s[",><]*$/;
          return re.test(val);
        }
        return false;
      }
      function makeUrlRedirectSafe(url) {
        try {
          var u = new URL(url);
          if (u.protocol !== "http:" && u.protocol !== "https:") {
            return "/";
          }
          return makeUrlRedirectSafe("".concat(u.pathname).concat(u.search));
        } catch (_unused) {
          if (url.indexOf(":") !== -1) {
            return "/";
          }
          return url;
        }
      }
      function syncRefsWithQueryParams(refs) {
        var params = new URLSearchParams(window.location.search);
        Object.entries(refs).forEach(_ref => {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            ref = _ref2[1];
          var param = null;
          try {
            var _params$get;
            param = JSON.parse(decodeURI((_params$get = params.get(key)) !== null && _params$get !== void 0 ? _params$get : ""));
          } catch (e) {}
          if (param != null) {
            ref.value = param;
          }
          watch(ref, updater(key));
        });
        function updater(key) {
          return value => {
            params.set(key, encodeURI(JSON.stringify(value)));
            history.replaceState(null, "", "?" + params.toString());
          };
        }
      }
      function removeCurrentUrlQueryParams() {
        for (var _len = arguments.length, queryParamKeys = new Array(_len), _key = 0; _key < _len; _key++) {
          queryParamKeys[_key] = arguments[_key];
        }
        return removeUrlQueryParams(window.location.href, ...queryParamKeys);
      }
      function removeUrlQueryParams(url) {
        for (var _len2 = arguments.length, queryParamKeys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          queryParamKeys[_key2 - 1] = arguments[_key2];
        }
        if (!queryParamKeys || !queryParamKeys.length) {
          return [];
        }
        if (typeof url === "string") {
          url = new URL(url);
        }
        var queryParams = url.searchParams;
        var removedQueryParams = [];
        for (var i = 0; i < queryParamKeys.length; i++) {
          var queryParamKey = queryParamKeys[i];
          removedQueryParams.push(queryParams.get(queryParamKey));
          queryParams.delete(queryParamKey);
        }
        window.history.replaceState(null, "", url);
        return removedQueryParams;
      }

      var url = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isUrl: isUrl,
        makeUrlRedirectSafe: makeUrlRedirectSafe,
        syncRefsWithQueryParams: syncRefsWithQueryParams,
        removeCurrentUrlQueryParams: removeCurrentUrlQueryParams,
        removeUrlQueryParams: removeUrlQueryParams
      });
      exports('url', url);

      var definedRules = {};
      var rulesPropType = {
        type: [Array, Object, String],
        default: ""
      };
      function parseRule(rule) {
        var name = "";
        var params = [];
        var colonIndex = rule.indexOf(":");
        if (colonIndex === -1) {
          name = rule;
        } else {
          name = rule.substring(0, colonIndex);
          params = rule.substring(colonIndex + 1).split(",");
        }
        return {
          name,
          params
        };
      }
      function normalizeRules(rules) {
        if (typeof rules === "string") {
          if (rules.indexOf("|") !== -1) {
            return rules.split("|").filter(r => r.trim() !== "");
          } else if (rules.trim() !== "") {
            return [rules.trim()];
          }
        } else if (Array.isArray(rules)) {
          var normalizedRules = [];
          var _iterator = _createForOfIteratorHelper(rules),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var r = _step.value;
              normalizedRules.push(...normalizeRules(r));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return normalizedRules;
        } else if (typeof rules === "function") {
          return [rules];
        } else if (typeof rules === "object") {
          return [rules];
        }
        return [];
      }
      function containsRequiredRule(rules) {
        return normalizeRules(rules).some(r => r === "required");
      }
      function normalizeRulesToFunctions(rules) {
        var ruleFunctions = [];
        var _iterator2 = _createForOfIteratorHelper(rules),
          _step2;
        try {
          var _loop = function _loop() {
            var rule = _step2.value;
            if (typeof rule === "string") {
              var ruleRef = parseRule(rule);
              var fn = definedRules[ruleRef.name];
              if (fn) {
                ruleFunctions.push(value => fn(value, ruleRef.params));
              } else {
                console.warn("Attempt to validate with unknown rule ".concat(rule, "."));
              }
            } else if (typeof rule === "function") {
              ruleFunctions.push(rule);
            } else if (typeof rule === "object") {
              var _fn = definedRules[rule.name];
              if (_fn) {
                ruleFunctions.push(value => _fn(value, rule.params));
              } else {
                console.warn("Attempt to validate with unknown rule ".concat(rule.name, "."));
              }
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return ruleFunctions;
      }
      function normalizeRuleResult(result) {
        if (typeof result === "string") {
          return result;
        } else if (result === true) {
          return "";
        } else {
          return "failed validation";
        }
      }
      function validateValue(value, rule) {
        var fns = normalizeRulesToFunctions(normalizeRules(rule));
        var results = [];
        var _iterator3 = _createForOfIteratorHelper(fns),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var fn = _step3.value;
            var result = normalizeRuleResult(fn(value));
            if (result !== "") {
              results.push(result);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return results;
      }
      function defineRule(ruleName, validator) {
        if (definedRules[ruleName] !== undefined) {
          console.warn("Attempt to redefine validation rule ".concat(ruleName, "."));
        } else {
          definedRules[ruleName] = validator;
        }
      }

      var validationRules = /*#__PURE__*/Object.freeze({
        __proto__: null,
        rulesPropType: rulesPropType,
        parseRule: parseRule,
        normalizeRules: normalizeRules,
        containsRequiredRule: containsRequiredRule,
        validateValue: validateValue,
        defineRule: defineRule
      });
      exports('validationRules', validationRules);

    })
  };
}));
//# sourceMappingURL=Utility.js.map
