System.register(['@Obsidian/Utility/rockDateTime', '@Obsidian/Utility/http', 'mitt'], (function (exports) {
  'use strict';
  var RockDateTime, useHttp, mitt;
  return {
    setters: [function (module) {
      RockDateTime = module.RockDateTime;
    }, function (module) {
      useHttp = module.useHttp;
    }, function (module) {
      mitt = module["default"];
    }],
    execute: (function () {

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

      class PersonPreferenceCollection {
        constructor(entityTypeKey, entityKey) {
          var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          var anonymous = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var preferences = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          _defineProperty(this, "preferences", {});
          _defineProperty(this, "updatedKeys", []);
          _defineProperty(this, "accessedKeys", []);
          _defineProperty(this, "emitter", mitt());
          this.entityTypeKey = entityTypeKey;
          this.entityKey = entityKey;
          this.prefix = prefix !== null && prefix !== void 0 ? prefix : "";
          this.anonymous = anonymous;
          var _iterator = _createForOfIteratorHelper(preferences),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var bag = _step.value;
              if (bag.key && bag.value && bag.lastAccessedDateTime) {
                this.preferences[bag.key] = _objectSpread2({}, bag);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        getValue(key) {
          var _preference$lastAcces, _preference$value;
          var now = RockDateTime.now();
          var preference = this.preferences[key];
          if (!preference) {
            return "";
          }
          var preferenceDate = RockDateTime.parseISO((_preference$lastAcces = preference.lastAccessedDateTime) !== null && _preference$lastAcces !== void 0 ? _preference$lastAcces : "");
          if (!preferenceDate || preferenceDate.date.toMilliseconds() < now.date.toMilliseconds()) {
            preference.lastAccessedDateTime = now.toISOString();
            this.accessedKeys.push(key);
            if (!this.updateAccessedTimer) {
              this.updateAccessedTimer = window.setTimeout(() => this.updateAccessedKeys(), 2500);
            }
          }
          return (_preference$value = preference.value) !== null && _preference$value !== void 0 ? _preference$value : "";
        }
        setValue(key, value) {
          this.preferences[key] = {
            key,
            value,
            lastAccessedDateTime: RockDateTime.now().toISOString()
          };
          this.updatedKeys.push(key);
        }
        getKeys() {
          return Object.keys(this.preferences).filter(k => k);
        }
        containsKey(key) {
          return !!this.preferences[key] && !!this.preferences[key].value;
        }
        save() {
          var _this = this;
          return _asyncToGenerator(function* () {
            var keys = _this.updatedKeys;
            _this.updatedKeys = [];
            if (!_this.anonymous && keys.length > 0) {
              yield _this.saveUpdatedKeys(keys);
            }
            var preferenceToBeEmitted = Object.values(_this.preferences).map(p => {
              var _p$key;
              return _objectSpread2(_objectSpread2({}, p), {}, {
                key: _this.getPrefixedKey((_p$key = p.key) !== null && _p$key !== void 0 ? _p$key : "")
              });
            });
            _this.emitter.emit("preferenceSaved", preferenceToBeEmitted);
          })();
        }
        withPrefix(prefix) {
          var prefixedPreferences = [];
          for (var _i = 0, _Object$keys = Object.keys(this.preferences); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            if (!key.startsWith(prefix) || key.length == prefix.length) {
              continue;
            }
            var subkey = key.substring(prefix.length);
            prefixedPreferences.push({
              key: subkey,
              value: this.preferences[key].value,
              lastAccessedDateTime: this.preferences[key].lastAccessedDateTime
            });
          }
          var prefixedPreferenceCollection = new PersonPreferenceCollection(this.entityTypeKey, this.entityKey, "".concat(this.prefix).concat(prefix), this.anonymous, prefixedPreferences);
          prefixedPreferenceCollection.setEmitter(this.emitter);
          return prefixedPreferenceCollection;
        }
        getPrefixedKey(key) {
          return "".concat(this.prefix).concat(key);
        }
        saveUpdatedKeys(updatedKeys) {
          var _this2 = this;
          return _asyncToGenerator(function* () {
            var updatedPreferences = {};
            var _iterator2 = _createForOfIteratorHelper(updatedKeys),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _this2$preferences$ke;
                var key = _step2.value;
                updatedPreferences[_this2.getPrefixedKey(key)] = (_this2$preferences$ke = _this2.preferences[key].value) !== null && _this2$preferences$ke !== void 0 ? _this2$preferences$ke : "";
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            var args = {
              preferences: updatedPreferences
            };
            var http = useHttp();
            var url;
            if (_this2.entityTypeKey && _this2.entityKey) {
              url = "/api/v2/Utilities/PersonPreferences/".concat(_this2.entityTypeKey, "/").concat(_this2.entityKey);
            } else {
              url = "/api/v2/Utilities/PersonPreferences";
            }
            try {
              var response = yield http.post(url, undefined, args);
              if (!response.isSuccess) {
                console.error(response.errorMessage || "Unable to save person preferences.");
              }
            } catch (error) {
              console.error(error);
            }
          })();
        }
        updateAccessedKeys() {
          var keys = this.accessedKeys;
          this.accessedKeys = [];
          this.updateAccessedTimer = undefined;
          if (!this.anonymous && keys.length > 0) {
            this.postAccessedKeys(keys);
          }
        }
        on(event, callback) {
          this.emitter.on(event, callback);
        }
        off(event, callback) {
          this.emitter.off(event, callback);
        }
        setEmitter(emitter) {
          this.emitter = emitter;
        }
        postAccessedKeys(accessedKeys) {
          var _this3 = this;
          return _asyncToGenerator(function* () {
            var prefixedKeys = [];
            var _iterator3 = _createForOfIteratorHelper(accessedKeys),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var key = _step3.value;
                if (!prefixedKeys.includes(_this3.getPrefixedKey(key))) {
                  prefixedKeys.push(_this3.getPrefixedKey(key));
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            var args = {
              keys: prefixedKeys
            };
            var http = useHttp();
            var url;
            if (_this3.entityTypeKey && _this3.entityKey) {
              url = "/api/v2/Utilities/PersonPreferencesAccessed/".concat(_this3.entityTypeKey, "/").concat(_this3.entityKey);
            } else {
              url = "/api/v2/Utilities/PersonPreferencesAccessed";
            }
            try {
              var response = yield http.post(url, undefined, args);
              if (!response.isSuccess) {
                console.error(response.errorMessage || "Unable to save person preference accessed timestamps.");
              }
            } catch (error) {
              console.error(error);
            }
          })();
        }
      } exports('PersonPreferenceCollection', PersonPreferenceCollection);

    })
  };
}));
//# sourceMappingURL=personPreferences.js.map
