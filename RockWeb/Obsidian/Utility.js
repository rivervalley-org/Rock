System.register(['tslib', 'vue', 'luxon', 'mitt', 'axios'], (function (exports) {
    'use strict';
    var __awaiter, inject, provide, ref, watch, nextTick, defineAsyncComponent$1, reactive, FixedOffsetZone, DateTime, mitt, axios;
    return {
        setters: [function (module) {
            __awaiter = module.__awaiter;
        }, function (module) {
            inject = module.inject;
            provide = module.provide;
            ref = module.ref;
            watch = module.watch;
            nextTick = module.nextTick;
            defineAsyncComponent$1 = module.defineAsyncComponent;
            reactive = module.reactive;
        }, function (module) {
            FixedOffsetZone = module.FixedOffsetZone;
            DateTime = module.DateTime;
        }, function (module) {
            mitt = module["default"];
        }, function (module) {
            axios = module["default"];
        }],
        execute: (function () {

            const moreThanOneElement = "More than one element was found in collection.";
            const noElementsFound = "No element was found in collection.";
            function valueComparer(keySelector, descending) {
                return (a, b) => {
                    const valueA = keySelector(a);
                    const valueB = keySelector(b);
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
                    }
                    else if (valueA < valueB) {
                        return !descending ? -1 : 1;
                    }
                    else {
                        return 0;
                    }
                };
            }
            class List {
                constructor(elements) {
                    if (elements === undefined) {
                        this.elements = [];
                    }
                    else {
                        this.elements = [...elements];
                    }
                }
                static fromArrayNoCopy(elements) {
                    const list = new List();
                    list.elements = elements;
                    return list;
                }
                any(predicate) {
                    let elements = this.elements;
                    if (predicate !== undefined) {
                        elements = elements.filter(predicate);
                    }
                    return elements.length > 0;
                }
                first(predicate) {
                    let elements = this.elements;
                    if (predicate !== undefined) {
                        elements = elements.filter(predicate);
                    }
                    if (elements.length >= 1) {
                        return elements[0];
                    }
                    else {
                        throw noElementsFound;
                    }
                }
                firstOrUndefined(predicate) {
                    let elements = this.elements;
                    if (predicate !== undefined) {
                        elements = elements.filter(predicate);
                    }
                    if (elements.length === 1) {
                        return elements[0];
                    }
                    else {
                        return undefined;
                    }
                }
                single(predicate) {
                    let elements = this.elements;
                    if (predicate !== undefined) {
                        elements = elements.filter(predicate);
                    }
                    if (elements.length === 1) {
                        return elements[0];
                    }
                    else {
                        throw moreThanOneElement;
                    }
                }
                singleOrUndefined(predicate) {
                    let elements = this.elements;
                    if (predicate !== undefined) {
                        elements = elements.filter(predicate);
                    }
                    if (elements.length === 0) {
                        return undefined;
                    }
                    else if (elements.length === 1) {
                        return elements[0];
                    }
                    else {
                        throw moreThanOneElement;
                    }
                }
                orderBy(keySelector) {
                    const comparer = valueComparer(keySelector, false);
                    return new OrderedList(this.elements, comparer);
                }
                orderByDescending(keySelector) {
                    const comparer = valueComparer(keySelector, true);
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
                    const comparer = valueComparer(keySelector, false);
                    return new OrderedList(this.elements, (a, b) => this.baseComparer(a, b) || comparer(a, b));
                }
                thenByDescending(keySelector) {
                    const comparer = valueComparer(keySelector, true);
                    return new OrderedList(this.elements, (a, b) => this.baseComparer(a, b) || comparer(a, b));
                }
            }

            var linq = /*#__PURE__*/Object.freeze({
                __proto__: null,
                List: List
            });
            exports('Linq', linq);

            const emptyGuid = "00000000-0000-0000-0000-000000000000";
            function newGuid() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
                    const r = Math.random() * 16 | 0;
                    const v = c === "x" ? r : r & 0x3 | 0x8;
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
            exports('Guid', guid$1);

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
            function splitCamelCase(val) {
                return val.replace(/([a-z])([A-Z])/g, "$1 $2");
            }
            function asCommaAnd(strs) {
                if (strs.length === 0) {
                    return "";
                }
                if (strs.length === 1) {
                    return strs[0];
                }
                if (strs.length === 2) {
                    return `${strs[0]} and ${strs[1]}`;
                }
                const last = strs.pop();
                return `${strs.join(", ")}, and ${last}`;
            }
            function toTitleCase(str) {
                if (!str) {
                    return "";
                }
                return str.replace(/\w\S*/g, (word) => {
                    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                });
            }
            function upperCaseFirstCharacter(str) {
                if (!str) {
                    return "";
                }
                return str.charAt(0).toUpperCase() + str.substring(1);
            }
            function pluralConditional(num, singular, plural) {
                return num === 1 ? singular : plural;
            }
            function formatPhoneNumber(str) {
                str = stripPhoneNumber(str);
                if (str.length === 7) {
                    return `${str.substring(0, 3)}-${str.substring(3, 7)}`;
                }
                if (str.length === 10) {
                    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6, 10)}`;
                }
                return str;
            }
            function stripPhoneNumber(str) {
                if (!str) {
                    return "";
                }
                return str.replace(/\D/g, "");
            }
            function padLeft(str, length, padCharacter = " ") {
                if (padCharacter == "") {
                    padCharacter = " ";
                }
                else if (padCharacter.length > 1) {
                    padCharacter = padCharacter.substring(0, 1);
                }
                if (!str) {
                    return Array(length).join(padCharacter);
                }
                if (str.length >= length) {
                    return str;
                }
                return Array(length - str.length + 1).join(padCharacter) + str;
            }
            function padRight(str, length, padCharacter = " ") {
                if (padCharacter == "") {
                    padCharacter = " ";
                }
                else if (padCharacter.length > 1) {
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
                const trimmable = "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF";
                const reg = new RegExp(`(?=[${trimmable}])`);
                const words = str.split(reg);
                let count = 0;
                if (options && options.ellipsis === true) {
                    limit -= 3;
                }
                const visibleWords = words.filter(function (word) {
                    count += word.length;
                    return count <= limit;
                });
                return `${visibleWords.join("")}...`;
            }
            const escapeHtmlRegExp = /["'&<>]/g;
            const escapeHtmlMap = {
                '"': "&quot;",
                "&": "&amp;",
                "'": "&#39;",
                "<": "&lt;",
                ">": "&gt;"
            };
            function escapeHtml(str) {
                return str.replace(escapeHtmlRegExp, (ch) => {
                    return escapeHtmlMap[ch];
                });
            }
            function defaultControlCompareValue(value, itemValue) {
                const guidValue = toGuidOrNull(value);
                const guidItemValue = toGuidOrNull(itemValue);
                if (guidValue !== null && guidItemValue !== null) {
                    return areEqual(guidValue, guidItemValue);
                }
                return value === itemValue;
            }
            var stringUtils = {
                asCommaAnd,
                escapeHtml,
                splitCamelCase,
                isNullOrWhiteSpace,
                isWhiteSpace,
                isEmpty,
                toTitleCase,
                pluralConditional,
                formatPhoneNumber,
                stripPhoneNumber,
                padLeft,
                padRight,
                truncate
            };

            var stringUtils$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                isEmpty: isEmpty,
                isWhiteSpace: isWhiteSpace,
                isNullOrWhiteSpace: isNullOrWhiteSpace,
                splitCamelCase: splitCamelCase,
                asCommaAnd: asCommaAnd,
                toTitleCase: toTitleCase,
                upperCaseFirstCharacter: upperCaseFirstCharacter,
                pluralConditional: pluralConditional,
                formatPhoneNumber: formatPhoneNumber,
                stripPhoneNumber: stripPhoneNumber,
                padLeft: padLeft,
                padRight: padRight,
                truncate: truncate,
                escapeHtml: escapeHtml,
                defaultControlCompareValue: defaultControlCompareValue,
                'default': stringUtils
            });
            exports('StringUtils', stringUtils$1);

            function blankIfZero(value) {
                return parseInt(value) === 0 ? "" : value;
            }
            function get12HourValue(hour) {
                if (hour == 0) {
                    return 12;
                }
                else if (hour < 13) {
                    return hour;
                }
                else {
                    return hour - 12;
                }
            }
            const englishDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const englishMonthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dateFormatters = {
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
                    const offset = date.offset;
                    const offsetHour = Math.abs(Math.floor(offset / 60));
                    const offsetMinute = Math.abs(offset % 60);
                    return `${offset >= 0 ? "+" : "-"}${padLeft(offsetHour.toString(), 2, "0")}:${padLeft(offsetMinute.toString(), 2, "0")}`;
                },
                "tt": date => date.hour >= 12 ? "PM" : "AM",
                "t": date => date.hour >= 12 ? "P" : "A",
                "zzz": date => {
                    const offset = date.offset;
                    const offsetHour = Math.abs(Math.floor(offset / 60));
                    const offsetMinute = Math.abs(offset % 60);
                    return `${offset >= 0 ? "+" : "-"}${padLeft(offsetHour.toString(), 2, "0")}:${padLeft(offsetMinute.toString(), 2, "0")}`;
                },
                "zz": date => {
                    const offset = date.offset;
                    const offsetHour = Math.abs(Math.floor(offset / 60));
                    return `${offset >= 0 ? "+" : "-"}${padLeft(offsetHour.toString(), 2, "0")}`;
                },
                "z": date => {
                    const offset = date.offset;
                    const offsetHour = Math.abs(Math.floor(offset / 60));
                    return `${offset >= 0 ? "+" : "-"}${offsetHour}`;
                },
                ":": () => ":",
                "/": () => "/"
            };
            const dateFormatterKeys = new List(Object.keys(dateFormatters))
                .orderByDescending(k => k.length)
                .toArray();
            const standardDateFormats = {
                "d": date => formatAspDate(date, "M/d/yyyy"),
                "D": date => formatAspDate(date, "dddd, MMMM dd, yyyy"),
                "t": date => formatAspDate(date, "h:mm tt"),
                "T": date => formatAspDate(date, "h:mm:ss tt"),
                "M": date => formatAspDate(date, "MMMM dd"),
                "m": date => formatAspDate(date, "MMMM dd"),
                "Y": date => formatAspDate(date, "yyyy MMMM"),
                "y": date => formatAspDate(date, "yyyy MMMM"),
                "f": date => `${formatAspDate(date, "D")} ${formatAspDate(date, "t")}`,
                "F": date => `${formatAspDate(date, "D")} ${formatAspDate(date, "T")}`,
                "g": date => `${formatAspDate(date, "d")} ${formatAspDate(date, "t")}`,
                "G": date => `${formatAspDate(date, "d")} ${formatAspDate(date, "T")}`,
                "o": date => formatAspDate(date, `yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffzzz`),
                "O": date => formatAspDate(date, `yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffffffzzz`),
                "r": date => formatAspDate(date, `ddd, dd MMM yyyy HH':'mm':'ss 'GMT'`),
                "R": date => formatAspDate(date, `ddd, dd MMM yyyy HH':'mm':'ss 'GMT'`),
                "s": date => formatAspDate(date, `yyyy'-'MM'-'dd'T'HH':'mm':'ss`),
                "u": date => formatAspDate(date, `yyyy'-'MM'-'dd HH':'mm':'ss'Z'`),
                "U": date => {
                    return formatAspDate(date.universalDateTime, `F`);
                },
            };
            function formatAspCustomDate(date, format) {
                let result = "";
                for (let i = 0; i < format.length;) {
                    let matchFound = false;
                    for (const k of dateFormatterKeys) {
                        if (format.substr(i, k.length) === k) {
                            result += dateFormatters[k](date);
                            matchFound = true;
                            i += k.length;
                            break;
                        }
                    }
                    if (matchFound) {
                        continue;
                    }
                    if (format[i] === "\\") {
                        i++;
                        if (i < format.length) {
                            result += format[i++];
                        }
                    }
                    else if (format[i] === "'") {
                        i++;
                        for (; i < format.length && format[i] !== "'"; i++) {
                            result += format[i];
                        }
                        i++;
                    }
                    else if (format[i] === '"') {
                        i++;
                        for (; i < format.length && format[i] !== '"'; i++) {
                            result += format[i];
                        }
                        i++;
                    }
                    else {
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
                }
                else if (format.length === 2 && format[0] === "%") {
                    return formatAspCustomDate(date, format[1]);
                }
                else {
                    return formatAspCustomDate(date, format);
                }
            }

            var aspDateFormat = /*#__PURE__*/Object.freeze({
                __proto__: null,
                formatAspDate: formatAspDate
            });
            exports('AspDateFormat', aspDateFormat);

            const DateTimeFormat = {
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
                    minute: "numeric",
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
                    let luxonZone;
                    if (zone !== undefined) {
                        if (typeof zone === "number") {
                            luxonZone = FixedOffsetZone.instance(zone);
                        }
                        else {
                            luxonZone = zone;
                        }
                    }
                    const dateTime = DateTime.fromObject({
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
                    const dateTime = DateTime.fromMillis(milliseconds);
                    if (!dateTime.isValid) {
                        return null;
                    }
                    return new RockDateTime(dateTime);
                }
                static fromJSDate(date) {
                    const dateTime = DateTime.fromJSDate(date);
                    if (!dateTime.isValid) {
                        return null;
                    }
                    return new RockDateTime(dateTime);
                }
                static parseISO(dateString) {
                    const dateTime = DateTime.fromISO(dateString, { setZone: true });
                    if (!dateTime.isValid) {
                        return null;
                    }
                    return new RockDateTime(dateTime);
                }
                static parseHTTP(dateString) {
                    const dateTime = DateTime.fromHTTP(dateString, { setZone: true });
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
                    const date = RockDateTime.fromParts(this.year, this.month, this.day, 0, 0, 0, 0, this.offset);
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
                            return 1;
                        case 2:
                            return 2;
                        case 3:
                            return 3;
                        case 4:
                            return 4;
                        case 5:
                            return 5;
                        case 6:
                            return 6;
                        case 7:
                            return 0;
                    }
                    throw "Could not determine day of week.";
                }
                get dayOfYear() {
                    return this.dateTime.year;
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
                    const dateTime = this.dateTime.plus({ days: days });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addHours(hours) {
                    const dateTime = this.dateTime.plus({ hours: hours });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addMilliseconds(milliseconds) {
                    const dateTime = this.dateTime.plus({ milliseconds: milliseconds });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addMinutes(minutes) {
                    const dateTime = this.dateTime.plus({ minutes: minutes });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addMonths(months) {
                    const dateTime = this.dateTime.plus({ months: months });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addSeconds(seconds) {
                    const dateTime = this.dateTime.plus({ seconds: seconds });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                addYears(years) {
                    const dateTime = this.dateTime.plus({ years: years });
                    if (!dateTime.isValid) {
                        throw "Operation produced an invalid date.";
                    }
                    return new RockDateTime(dateTime);
                }
                toMilliseconds() {
                    return this.dateTime.toMillis();
                }
                toOffset(zone) {
                    let dateTime;
                    if (typeof zone === "number") {
                        dateTime = this.dateTime.setZone(FixedOffsetZone.instance(zone));
                    }
                    else {
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
                    const now = RockDateTime.now();
                    const msPerHour = 1000 * 60 * 60;
                    const hoursPerDay = 24;
                    const daysPerMonth = 30.4167;
                    const daysPerYear = 365.25;
                    const totalMs = Math.abs(now.toMilliseconds() - this.toMilliseconds());
                    const totalHours = totalMs / msPerHour;
                    const totalDays = totalHours / hoursPerDay;
                    if (totalDays < 2) {
                        return "1day";
                    }
                    if (totalDays < 31) {
                        return `${Math.floor(totalDays)}days`;
                    }
                    const totalMonths = totalDays / daysPerMonth;
                    if (totalMonths <= 1) {
                        return "1mon";
                    }
                    if (totalMonths <= 18) {
                        return `${Math.round(totalMonths)}mon`;
                    }
                    const totalYears = totalDays / daysPerYear;
                    if (totalYears <= 1) {
                        return "1yr";
                    }
                    return `${Math.round(totalYears)}yrs`;
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
            }

            var rockDateTime = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DateTimeFormat: DateTimeFormat,
                RockDateTime: RockDateTime
            });
            exports('RockDateTime', rockDateTime);

            const blockReloadSymbol = Symbol();
            const configurationValuesChangedSymbol = Symbol();
            function useConfigurationValues() {
                const result = inject("configurationValues");
                if (result === undefined) {
                    throw "Attempted to access block configuration outside of a RockBlock.";
                }
                return result.value;
            }
            function useInvokeBlockAction() {
                const result = inject("invokeBlockAction");
                if (result === undefined) {
                    throw "Attempted to access block action invocation outside of a RockBlock.";
                }
                return result;
            }
            function provideReloadBlock(callback) {
                provide(blockReloadSymbol, callback);
            }
            function useReloadBlock() {
                return inject(blockReloadSymbol, () => {
                });
            }
            function provideConfigurationValuesChanged() {
                const callbacks = [];
                provide(configurationValuesChangedSymbol, callbacks);
                return {
                    invoke: () => {
                        for (const c of callbacks) {
                            c();
                        }
                    },
                    reset: () => {
                        callbacks.splice(0, callbacks.length);
                    }
                };
            }
            function onConfigurationValuesChanged(callback) {
                const callbacks = inject(configurationValuesChangedSymbol);
                if (callbacks !== undefined) {
                    callbacks.push(callback);
                }
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
                if (!box.validProperties.includes(propertyName)) {
                    box.validProperties.push(propertyName);
                }
            }
            function dispatchBlockEvent(eventName, blockGuid, eventData) {
                const ev = new CustomEvent(eventName, {
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
            const securityGrantSymbol = Symbol();
            function getSecurityGrant(token) {
                const tokenRef = ref(token || null);
                const invokeBlockAction = useInvokeBlockAction();
                let renewalTimeout = null;
                const renewToken = () => __awaiter(this, void 0, void 0, function* () {
                    const result = yield invokeBlockAction("RenewSecurityGrantToken");
                    if (result.isSuccess && result.data) {
                        tokenRef.value = result.data;
                        scheduleRenewal();
                    }
                });
                const scheduleRenewal = () => {
                    var _a;
                    if (renewalTimeout !== null) {
                        clearTimeout(renewalTimeout);
                        renewalTimeout = null;
                    }
                    if (tokenRef.value === null) {
                        return;
                    }
                    const segments = (_a = tokenRef.value) === null || _a === void 0 ? void 0 : _a.split(";");
                    if (segments.length !== 3 || segments[0] !== "1") {
                        return;
                    }
                    const expiresDateTime = RockDateTime.parseISO(segments[1]);
                    if (expiresDateTime === null) {
                        return;
                    }
                    const renewTimeout = expiresDateTime.addMinutes(-15).toMilliseconds() - RockDateTime.now().toMilliseconds();
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
                const grant = inject(securityGrantSymbol);
                return grant ? grant.token : ref(null);
            }
            function watchPropertyChanges(propertyRefs, emit) {
                for (const propRef of propertyRefs) {
                    watch(propRef, () => {
                        if (propRef.context.propertyName) {
                            emit("propertyChanged", propRef.context.propertyName);
                        }
                    });
                }
            }
            function refreshDetailAttributes(bag, validProperties, invokeBlockAction) {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function* () {
                    const data = {
                        entity: bag.value,
                        isEditable: true,
                        validProperties: validProperties
                    };
                    const result = yield invokeBlockAction("RefreshAttributes", {
                        box: data
                    });
                    if (result.isSuccess) {
                        if (result.statusCode === 200 && result.data && bag.value) {
                            const newBag = Object.assign(Object.assign({}, bag.value), { attributes: (_a = result.data.entity) === null || _a === void 0 ? void 0 : _a.attributes, attributeValues: (_b = result.data.entity) === null || _b === void 0 ? void 0 : _b.attributeValues });
                            bag.value = newBag;
                        }
                    }
                });
            }
            const blockGuidSymbol = Symbol("block-guid");
            function provideBlockGuid(blockGuid) {
                provide(blockGuidSymbol, blockGuid);
            }
            function useBlockGuid() {
                return inject(blockGuidSymbol);
            }

            var block = /*#__PURE__*/Object.freeze({
                __proto__: null,
                useConfigurationValues: useConfigurationValues,
                useInvokeBlockAction: useInvokeBlockAction,
                provideReloadBlock: provideReloadBlock,
                useReloadBlock: useReloadBlock,
                provideConfigurationValuesChanged: provideConfigurationValuesChanged,
                onConfigurationValuesChanged: onConfigurationValuesChanged,
                setCustomSettingsBoxValue: setCustomSettingsBoxValue,
                setPropertiesBoxValue: setPropertiesBoxValue,
                dispatchBlockEvent: dispatchBlockEvent,
                isBlockEvent: isBlockEvent,
                getSecurityGrant: getSecurityGrant,
                provideSecurityGrant: provideSecurityGrant,
                useSecurityGrantToken: useSecurityGrantToken,
                watchPropertyChanges: watchPropertyChanges,
                refreshDetailAttributes: refreshDetailAttributes,
                provideBlockGuid: provideBlockGuid,
                useBlockGuid: useBlockGuid
            });
            exports('Block', block);

            function asBooleanOrNull(val) {
                if (val === undefined || val === null) {
                    return null;
                }
                if (typeof val === "boolean") {
                    return val;
                }
                if (typeof val === "string") {
                    const asString = (val || "").trim().toLowerCase();
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
                const boolOrNull = asBooleanOrNull(val);
                if (boolOrNull === null) {
                    return null;
                }
                return boolOrNull ? "Yes" : "No";
            }
            function asTrueFalseOrNull(val) {
                const boolOrNull = asBooleanOrNull(val);
                if (boolOrNull === null) {
                    return null;
                }
                return boolOrNull ? "True" : "False";
            }

            var booleanUtils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                asBooleanOrNull: asBooleanOrNull,
                asBoolean: asBoolean,
                asYesNoOrNull: asYesNoOrNull,
                asTrueFalseOrNull: asTrueFalseOrNull
            });
            exports('BooleanUtils', booleanUtils);

            const bus = mitt();
            const log = [];
            const writeLog = (msg) => {
                log.push({
                    date: RockDateTime.now(),
                    message: msg
                });
            };
            function publish(eventName, payload) {
                writeLog(`Published ${eventName}`);
                bus.emit(eventName, payload);
            }
            function subscribe(eventName, callback) {
                writeLog(`Subscribed to ${eventName}`);
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
            exports('Bus', bus$2);

            function set(key, value, expiration = null) {
                if (!expiration) {
                    expiration = RockDateTime.now().addMinutes(1);
                }
                const cache = { expiration, value };
                const cacheJson = JSON.stringify(cache);
                sessionStorage.setItem(key, cacheJson);
            }
            function get$1(key) {
                const cacheJson = sessionStorage.getItem(key);
                if (!cacheJson) {
                    return null;
                }
                const cache = JSON.parse(cacheJson);
                if (!cache || !cache.expiration) {
                    return null;
                }
                if (cache.expiration < RockDateTime.now()) {
                    return null;
                }
                return cache.value;
            }
            var cache = {
                set,
                get: get$1
            };

            var cache$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                'default': cache
            });
            exports('Cache', cache$1);

            function deepEqual(a, b, strict) {
                if (strict && a === b) {
                    return true;
                }
                else if (!strict && a == b) {
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
                        for (let i = 0; i < a.length; i++) {
                            if (!deepEqual(a[i], b[i], strict)) {
                                return false;
                            }
                        }
                        return true;
                    }
                    else {
                        if (a.constructor !== b.constructor) {
                            return false;
                        }
                        const aEntries = Object.entries(a).sort((a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
                        const bEntries = Object.entries(b).sort((a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
                        if (aEntries.length !== bEntries.length) {
                            return false;
                        }
                        for (let i = 0; i < aEntries.length; i++) {
                            const aEntry = aEntries[i];
                            const bEntry = bEntries[i];
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
            function debounce(fn, delay = 250, eager = false) {
                let timeout = null;
                return () => {
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    else if (eager) {
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
            exports('Util', util);

            const suspenseSymbol = Symbol("RockSuspense");
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
                        for (const handler of this.finishedHandlers) {
                            handler();
                        }
                        this.finishedHandlers = [];
                        if (this.parentProvider) {
                            this.parentProvider.completeAsyncOperation(this.operationKey);
                        }
                    });
                }
                addOperation(operation) {
                    const operationKey = newGuid();
                    this.startAsyncOperation(operationKey);
                    operation.then(() => this.completeAsyncOperation(operationKey))
                        .catch(() => this.completeAsyncOperation(operationKey));
                }
                startAsyncOperation(key) {
                    this.pendingOperations.push(key);
                    if (this.pendingOperations.length === 1 && this.parentProvider) {
                        this.parentProvider.startAsyncOperation(this.operationKey);
                    }
                }
                completeAsyncOperation(key) {
                    const index = this.pendingOperations.indexOf(key);
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
            exports('Suspense', suspense);

            function useVModelPassthrough(props, modelName, emit, options) {
                const internalValue = ref(props[modelName]);
                watch(() => props[modelName], val => internalValue.value = val, options);
                watch(internalValue, val => emit(`update:${modelName}`, val), options);
                return internalValue;
            }
            function updateRefValue(target, value) {
                if (deepEqual(target.value, value, true)) {
                    return false;
                }
                target.value = value;
                return true;
            }
            function defineAsyncComponent(source) {
                return defineAsyncComponent$1(() => __awaiter(this, void 0, void 0, function* () {
                    const suspense = useSuspense();
                    const operationKey = newGuid();
                    suspense === null || suspense === void 0 ? void 0 : suspense.startAsyncOperation(operationKey);
                    const component = yield source();
                    suspense === null || suspense === void 0 ? void 0 : suspense.completeAsyncOperation(operationKey);
                    return component;
                }));
            }
            const standardRockFormFieldProps = {
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
                const propValues = reactive({
                    label: props.label,
                    help: props.help,
                    rules: props.rules,
                    formGroupClasses: props.formGroupClasses,
                    validationTitle: props.validationTitle
                });
                watch([() => props.formGroupClasses, () => props.help, () => props.label, () => props.rules, () => props.validationTitle], () => {
                    copyStandardRockFormFieldProps(props, propValues);
                });
                return propValues;
            }
            const standardAsyncPickerProps = Object.assign(Object.assign({}, standardRockFormFieldProps), { enhanceForLongLists: {
                    type: Boolean,
                    default: false
                }, lazyMode: {
                    type: String,
                    default: "onDemand"
                }, multiple: {
                    type: Boolean,
                    default: false
                }, showBlankItem: {
                    type: Boolean,
                    default: false
                }, displayStyle: {
                    type: String,
                    default: "auto"
                }, columnCount: {
                    type: Number,
                    default: 0
                } });
            function copyStandardAsyncPickerProps(source, destination) {
                copyStandardRockFormFieldProps(source, destination);
                destination.enhanceForLongLists = source.enhanceForLongLists;
                destination.lazyMode = source.lazyMode;
                destination.multiple = source.multiple;
                destination.showBlankItem = source.showBlankItem;
                destination.displayStyle = source.displayStyle;
                destination.columnCount = source.columnCount;
            }
            function useStandardAsyncPickerProps(props) {
                const standardFieldProps = useStandardRockFormFieldProps(props);
                const propValues = reactive(Object.assign(Object.assign({}, standardFieldProps), { enhanceForLongLists: props.enhanceForLongLists, lazyMode: props.lazyMode, multiple: props.multiple, showBlankItem: props.showBlankItem, displayStyle: props.displayStyle, columnCount: props.columnCount }));
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
                const refValue = ref(value);
                refValue.context = context;
                return refValue;
            }
            function propertyRef(value, propertyName) {
                return extendedRef(value, {
                    propertyName
                });
            }

            var component = /*#__PURE__*/Object.freeze({
                __proto__: null,
                useVModelPassthrough: useVModelPassthrough,
                updateRefValue: updateRefValue,
                defineAsyncComponent: defineAsyncComponent,
                standardRockFormFieldProps: standardRockFormFieldProps,
                useStandardRockFormFieldProps: useStandardRockFormFieldProps,
                standardAsyncPickerProps: standardAsyncPickerProps,
                useStandardAsyncPickerProps: useStandardAsyncPickerProps,
                extendedRef: extendedRef,
                propertyRef: propertyRef
            });
            exports('Component', component);

            function asFormattedString(num, digits, options = {}) {
                if (num === null) {
                    return "";
                }
                return num.toLocaleString("en-US", Object.assign({ minimumFractionDigits: digits, maximumFractionDigits: digits !== null && digits !== void 0 ? digits : 9 }, options));
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
                const replaced = str.replace(/[$,]/g, "");
                const num = Number(replaced);
                return !isNaN(num) ? num : null;
            }
            function toCurrencyOrNull(value) {
                if (typeof value === "string") {
                    value = toNumberOrNull(value);
                }
                if (value === null || value === undefined) {
                    return null;
                }
                return "$" + asFormattedString(value, 2);
            }
            function toOrdinalSuffix(num) {
                if (!num) {
                    return "";
                }
                const j = num % 10;
                const k = num % 100;
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
                    case 1: return "first";
                    case 2: return "second";
                    case 3: return "third";
                    case 4: return "fourth";
                    case 5: return "fifth";
                    case 6: return "sixth";
                    case 7: return "seventh";
                    case 8: return "eighth";
                    case 9: return "ninth";
                    case 10: return "tenth";
                    default: return toOrdinalSuffix(num);
                }
            }
            function toWord(num) {
                if (num === null || num === undefined) {
                    return "";
                }
                switch (num) {
                    case 1: return "one";
                    case 2: return "two";
                    case 3: return "three";
                    case 4: return "four";
                    case 5: return "five";
                    case 6: return "six";
                    case 7: return "seven";
                    case 8: return "eight";
                    case 9: return "nine";
                    case 10: return "ten";
                    default: return `${num}`;
                }
            }
            function zeroPad(num, length) {
                let str = num.toString();
                while (str.length < length) {
                    str = "0" + str;
                }
                return str;
            }
            function toDecimalPlaces(num, decimalPlaces) {
                decimalPlaces = Math.floor(decimalPlaces);
                return Math.round(num * 10 ** decimalPlaces) / 10 ** decimalPlaces;
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
            exports('NumberUtils', numberUtils$1);

            const dateKeyLength = "YYYYMMDD".length;
            const dateKeyNoYearLength = "MMDD".length;
            function getYear(dateKey) {
                const defaultValue = 0;
                if (!dateKey || dateKey.length !== dateKeyLength) {
                    return defaultValue;
                }
                const asString = dateKey.substring(0, 4);
                const year = toNumberOrNull(asString) || defaultValue;
                return year;
            }
            function getMonth(dateKey) {
                const defaultValue = 0;
                if (!dateKey) {
                    return defaultValue;
                }
                if (dateKey.length === dateKeyLength) {
                    const asString = dateKey.substring(4, 6);
                    return toNumberOrNull(asString) || defaultValue;
                }
                if (dateKey.length === dateKeyNoYearLength) {
                    const asString = dateKey.substring(0, 2);
                    return toNumberOrNull(asString) || defaultValue;
                }
                return defaultValue;
            }
            function getDay(dateKey) {
                const defaultValue = 0;
                if (!dateKey) {
                    return defaultValue;
                }
                if (dateKey.length === dateKeyLength) {
                    const asString = dateKey.substring(6, 8);
                    return toNumberOrNull(asString) || defaultValue;
                }
                if (dateKey.length === dateKeyNoYearLength) {
                    const asString = dateKey.substring(2, 4);
                    return toNumberOrNull(asString) || defaultValue;
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
                const yearStr = zeroPad(year, 4);
                const monthStr = zeroPad(month, 2);
                const dayStr = zeroPad(day, 2);
                return `${yearStr}${monthStr}${dayStr}`;
            }
            function toNoYearDateKey(month, day) {
                if (!month || month > 12 || month < 0) {
                    month = 0;
                }
                if (!day || day > 31 || day < 0) {
                    day = 0;
                }
                const monthStr = zeroPad(month, 2);
                const dayStr = zeroPad(day, 2);
                return `${monthStr}${dayStr}`;
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
            exports('DateKey', dateKey$1);

            function smoothScrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            var page = {
                smoothScrollToTop
            };
            let currentModalCount = 0;
            function trackModalState(state) {
                const body = document.body;
                const cssClasses = ["modal-open"];
                if (state) {
                    currentModalCount++;
                }
                else {
                    currentModalCount = currentModalCount > 0 ? currentModalCount - 1 : 0;
                }
                if (currentModalCount > 0) {
                    for (const cssClass of cssClasses) {
                        body.classList.add(cssClass);
                    }
                }
                else {
                    for (const cssClass of cssClasses) {
                        body.classList.remove(cssClass);
                    }
                }
            }
            function loadJavaScriptAsync(source, isScriptLoaded, attributes, fingerprint) {
                return __awaiter(this, void 0, void 0, function* () {
                    let src = source;
                    if (fingerprint !== false && Obsidian.options.fingerprint) {
                        if (src.indexOf("?") === -1) {
                            src += `?${Obsidian.options.fingerprint}`;
                        }
                        else {
                            src += `&${Obsidian.options.fingerprint}`;
                        }
                    }
                    if (isScriptLoaded) {
                        if (isScriptLoaded()) {
                            return true;
                        }
                    }
                    else {
                        const scripts = Array.from(document.getElementsByTagName("script"));
                        if (scripts.filter(s => s.src === src).length > 0) {
                            return true;
                        }
                    }
                    const script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = src;
                    if (attributes) {
                        for (const key in attributes) {
                            script.setAttribute(key, attributes[key]);
                        }
                    }
                    try {
                        yield new Promise((resolve, reject) => {
                            script.addEventListener("load", () => resolve());
                            script.addEventListener("error", () => reject());
                            document.getElementsByTagName("head")[0].appendChild(script);
                        });
                        if (isScriptLoaded) {
                            return isScriptLoaded();
                        }
                        return true;
                    }
                    catch (_a) {
                        return false;
                    }
                });
            }

            var page$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                smoothScrollToTop: smoothScrollToTop,
                'default': page,
                trackModalState: trackModalState,
                loadJavaScriptAsync: loadJavaScriptAsync
            });
            exports('Page', page$1);

            function createDialog(body, footer) {
                const scrollable = document.createElement("div");
                scrollable.classList.add("modal-scrollable");
                scrollable.style.zIndex = "1060";
                const modal = document.createElement("div");
                scrollable.appendChild(modal);
                modal.classList.add("modal", "fade");
                modal.tabIndex = -1;
                modal.setAttribute("role", "dialog");
                modal.setAttribute("aria-hidden", "false");
                modal.style.display = "block";
                const modalDialog = document.createElement("div");
                modal.appendChild(modalDialog);
                modalDialog.classList.add("modal-dialog");
                const modalContent = document.createElement("div");
                modalDialog.appendChild(modalContent);
                modalContent.classList.add("modal-content");
                const modalBody = document.createElement("div");
                modalContent.appendChild(modalBody);
                modalBody.classList.add("modal-body");
                if (Array.isArray(body)) {
                    for (const el of body) {
                        modalBody.appendChild(el);
                    }
                }
                else {
                    modalBody.appendChild(body);
                }
                if (footer && (!Array.isArray(footer) || footer.length > 0)) {
                    const modalFooter = document.createElement("div");
                    modalContent.appendChild(modalFooter);
                    modalFooter.classList.add("modal-footer");
                    if (Array.isArray(footer)) {
                        for (const el of footer) {
                            modalFooter.appendChild(el);
                        }
                    }
                    else {
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
                const closeButton = document.createElement("button");
                closeButton.classList.add("close");
                closeButton.type = "button";
                closeButton.style.marginTop = "-10px";
                closeButton.innerHTML = "&times;";
                return closeButton;
            }
            function createBackdrop() {
                const backdrop = document.createElement("div");
                backdrop.classList.add("modal-backdrop");
                backdrop.style.zIndex = "1050";
                return backdrop;
            }
            function showDialog(options) {
                return new Promise(resolve => {
                    let timer = null;
                    const container = document.fullscreenElement || document.body;
                    const body = document.createElement("div");
                    body.innerText = options.message;
                    const buttons = [];
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
                    for (const button of options.buttons) {
                        const btn = document.createElement("button");
                        btn.classList.value = button.className;
                        btn.type = "button";
                        btn.innerText = button.label;
                        btn.addEventListener("click", () => {
                            clearDialog(button.key);
                        });
                        buttons.push(btn);
                    }
                    const closeButton = createCloseButton();
                    closeButton.addEventListener("click", () => {
                        clearDialog("cancel");
                    });
                    const dialog = createDialog([closeButton, body], buttons);
                    const backdrop = createBackdrop();
                    const modal = dialog.querySelector(".modal");
                    trackModalState(true);
                    container.appendChild(dialog);
                    container.appendChild(backdrop);
                    modal.style.marginTop = `-${modal.offsetHeight / 2.0}px`;
                    backdrop.classList.add("in");
                    modal.classList.add("in");
                });
            }
            function alert(message) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield showDialog({
                        message,
                        buttons: [
                            {
                                key: "ok",
                                label: "OK",
                                className: "btn btn-primary"
                            }
                        ]
                    });
                });
            }
            function confirm(message) {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = yield showDialog({
                        message,
                        buttons: [
                            {
                                key: "ok",
                                label: "OK",
                                className: "btn btn-primary"
                            },
                            {
                                key: "cancel",
                                label: "Cancel",
                                className: "btn btn-default"
                            }
                        ]
                    });
                    return result === "ok";
                });
            }
            function confirmDelete(typeName, additionalMessage) {
                let message = `Are you sure you want to delete this ${typeName}?`;
                if (additionalMessage) {
                    message += ` ${additionalMessage}`;
                }
                return confirm(message);
            }

            var dialogs = /*#__PURE__*/Object.freeze({
                __proto__: null,
                alert: alert,
                confirm: confirm,
                confirmDelete: confirmDelete
            });
            exports('Dialogs', dialogs);

            function isEmail(val) {
                if (typeof val === "string") {
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(val.toLowerCase());
                }
                return false;
            }

            var email = /*#__PURE__*/Object.freeze({
                __proto__: null,
                isEmail: isEmail
            });
            exports('Email', email);

            const fieldTypeTable = {};
            function registerFieldType(fieldTypeGuid, fieldType) {
                const normalizedGuid = normalize(fieldTypeGuid);
                if (!isValidGuid(fieldTypeGuid) || normalizedGuid === null) {
                    throw "Invalid guid specified when registering field type.";
                }
                if (fieldTypeTable[normalizedGuid] !== undefined) {
                    throw "Invalid attempt to replace existing field type.";
                }
                fieldTypeTable[normalizedGuid] = fieldType;
            }
            function getFieldType(fieldTypeGuid) {
                const normalizedGuid = normalize(fieldTypeGuid);
                if (normalizedGuid !== null) {
                    const field = fieldTypeTable[normalizedGuid];
                    if (field) {
                        return field;
                    }
                }
                console.warn(`Field type "${fieldTypeGuid}" was not found`);
                return null;
            }

            var fieldTypes = /*#__PURE__*/Object.freeze({
                __proto__: null,
                registerFieldType: registerFieldType,
                getFieldType: getFieldType
            });
            exports('FieldTypes', fieldTypes);

            const formStateSymbol = Symbol();
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
            exports('Form', form);

            function enterFullscreen(element, exitCallback) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (element.requestFullscreen) {
                            yield element.requestFullscreen();
                        }
                        else if (element.mozRequestFullscreen) {
                            yield element.mozRequestFullscreen();
                        }
                        else if (element.webkitRequestFullscreen) {
                            yield element.webkitRequestFullscreen();
                        }
                        else {
                            return false;
                        }
                        element.classList.add("is-fullscreen");
                        const onFullscreenChange = () => {
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
                    }
                    catch (ex) {
                        console.error(ex);
                        return false;
                    }
                });
            }
            function isFullscreen() {
                return !!document.fullscreenElement || !!document.mozFullScreenElement || !!document.webkitFullscreenElement;
            }
            function exitFullscreen() {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (document.exitFullscreen) {
                            yield document.exitFullscreen();
                        }
                        else if (document.mozCancelFullScreen) {
                            yield document.mozCancelFullScreen();
                        }
                        else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                        else {
                            return false;
                        }
                        return true;
                    }
                    catch (ex) {
                        console.error(ex);
                        return false;
                    }
                });
            }

            var fullscreen = /*#__PURE__*/Object.freeze({
                __proto__: null,
                enterFullscreen: enterFullscreen,
                isFullscreen: isFullscreen,
                exitFullscreen: exitFullscreen
            });
            exports('Fullscreen', fullscreen);

            function doApiCallRaw(method, url, params, data) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield axios({
                        method,
                        url,
                        params,
                        data
                    });
                });
            }
            function doApiCall(method, url, params = undefined, data = undefined) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const result = yield doApiCallRaw(method, url, params, data);
                        return {
                            data: result.data,
                            isError: false,
                            isSuccess: true,
                            statusCode: result.status,
                            errorMessage: null
                        };
                    }
                    catch (e) {
                        if (axios.isAxiosError(e)) {
                            if (((_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.Message) || ((_d = (_c = e === null || e === void 0 ? void 0 : e.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message)) {
                                return {
                                    data: null,
                                    isError: true,
                                    isSuccess: false,
                                    statusCode: e.response.status,
                                    errorMessage: (_g = (_f = (_e = e === null || e === void 0 ? void 0 : e.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.Message) !== null && _g !== void 0 ? _g : e.response.data.message
                                };
                            }
                            return {
                                data: null,
                                isError: true,
                                isSuccess: false,
                                statusCode: (_j = (_h = e.response) === null || _h === void 0 ? void 0 : _h.status) !== null && _j !== void 0 ? _j : 0,
                                errorMessage: null
                            };
                        }
                        else {
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
            }
            function get(url, params = undefined) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield doApiCall("GET", url, params, undefined);
                });
            }
            function post(url, params = undefined, data = undefined) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield doApiCall("POST", url, params, data);
                });
            }
            const httpFunctionsSymbol = Symbol("http-functions");
            function provideHttp(functions) {
                provide(httpFunctionsSymbol, functions);
            }
            function useHttp() {
                return inject(httpFunctionsSymbol) || {
                    doApiCall: doApiCall,
                    get: get,
                    post: post
                };
            }
            function uploadFile(url, data, progress) {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = yield axios.post(url, data, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        onUploadProgress: (event) => {
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
            }
            function uploadContentFile(file, encryptedRootFolder, folderPath, options) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const url = `${(_a = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _a !== void 0 ? _a : "/FileUploader.ashx"}?rootFolder=${encryptedRootFolder}`;
                    const formData = new FormData();
                    formData.append("file", file);
                    if (folderPath) {
                        formData.append("folderPath", folderPath);
                    }
                    const result = yield uploadFile(url, formData, options === null || options === void 0 ? void 0 : options.progress);
                    return {
                        value: "",
                        text: result.FileName
                    };
                });
            }
            function uploadBinaryFile(file, binaryFileTypeGuid, options) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    let url = `${(_a = options === null || options === void 0 ? void 0 : options.baseUrl) !== null && _a !== void 0 ? _a : "/FileUploader.ashx"}?isBinaryFile=True&fileTypeGuid=${binaryFileTypeGuid}`;
                    if ((options === null || options === void 0 ? void 0 : options.isTemporary) === false) {
                        url += "&isTemporary=False";
                    }
                    else {
                        url += "&isTemporary=True";
                    }
                    const formData = new FormData();
                    formData.append("file", file);
                    const result = yield uploadFile(url, formData, options === null || options === void 0 ? void 0 : options.progress);
                    return {
                        value: result.Guid,
                        text: result.FileName
                    };
                });
            }
            var http = {
                doApiCall,
                post,
                get
            };

            var http$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                doApiCall: doApiCall,
                get: get,
                post: post,
                provideHttp: provideHttp,
                useHttp: useHttp,
                uploadContentFile: uploadContentFile,
                uploadBinaryFile: uploadBinaryFile,
                'default': http
            });
            exports('Http', http$1);

            function fromEntries(entries) {
                const res = {};
                for (const entry of entries) {
                    res[entry[0]] = entry[1];
                }
                return res;
            }

            var objectUtils = /*#__PURE__*/Object.freeze({
                __proto__: null,
                fromEntries: fromEntries
            });
            exports('ObjectUtils', objectUtils);

            function popover(node, options) {
                var _a;
                if (Array.isArray(node)) {
                    for (const n of node) {
                        popover(n, options);
                    }
                    return;
                }
                $(node).popover({
                    html: options === null || options === void 0 ? void 0 : options.html,
                    sanitize: (_a = options === null || options === void 0 ? void 0 : options.sanitize) !== null && _a !== void 0 ? _a : true
                });
            }

            var popover$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                popover: popover
            });
            exports('Popover', popover$1);

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
                    this.internalResolve = () => { };
                    this.internalReject = () => { };
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
            exports('PromiseUtils', promiseUtils);

            let libraryObject = null;
            let libraryPromise = null;
            function getRealTimeObject() {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    if (libraryObject) {
                        return libraryObject;
                    }
                    if (!libraryPromise) {
                        libraryPromise = loadJavaScriptAsync("/Scripts/Rock/realtime.js", () => { var _a; return !!((_a = window["Rock"]) === null || _a === void 0 ? void 0 : _a["RealTime"]); });
                    }
                    if (!(yield libraryPromise)) {
                        throw new Error("Unable to load RealTime library.");
                    }
                    libraryObject = (_a = window["Rock"]) === null || _a === void 0 ? void 0 : _a["RealTime"];
                    return libraryObject;
                });
            }
            function getTopic(identifier) {
                return __awaiter(this, void 0, void 0, function* () {
                    const realTime = yield getRealTimeObject();
                    return realTime.getTopic(identifier);
                });
            }

            var realTime = /*#__PURE__*/Object.freeze({
                __proto__: null,
                getTopic: getTopic
            });
            exports('RealTime', realTime);

            const nthNamesAbbreviated = [
                [1, "1st"],
                [2, "2nd"],
                [3, "3rd"],
                [4, "4th"],
                [-1, "last"]
            ];
            function padZeroLeft(value, length) {
                const str = value.toString();
                return "0".repeat(length - str.length) + str;
            }
            function getDateString(date) {
                const year = date.year;
                const month = date.month;
                const day = date.day;
                return `${year}${padZeroLeft(month, 2)}${padZeroLeft(day, 2)}`;
            }
            function getTimeString(date) {
                const hour = date.hour;
                const minute = date.minute;
                const second = date.second;
                return `${padZeroLeft(hour, 2)}${padZeroLeft(minute, 2)}${padZeroLeft(second, 2)}`;
            }
            function getDateTimeString(date) {
                return `${getDateString(date)}T${getTimeString(date)}`;
            }
            function getDatesFromRangeOrPeriod(value) {
                const segments = value.split("/");
                if (segments.length === 0) {
                    return [];
                }
                const startDate = getDateFromString(segments[0]);
                if (!startDate) {
                    return [];
                }
                if (segments.length !== 2) {
                    return [startDate];
                }
                const dates = [];
                if (segments[1].startsWith("P")) {
                    const days = getPeriodDurationInDays(segments[1]);
                    for (let day = 0; day < days; day++) {
                        const date = startDate.addDays(day);
                        if (date) {
                            dates.push(date);
                        }
                    }
                }
                else {
                    const endDate = getDateFromString(segments[1]);
                    if (endDate !== null) {
                        let date = startDate;
                        while (date <= endDate) {
                            dates.push(date);
                            date = date.addDays(1);
                        }
                    }
                }
                return dates;
            }
            function getDateFromString(value) {
                if (value.length < 8) {
                    return null;
                }
                const year = parseInt(value.substring(0, 4));
                const month = parseInt(value.substring(4, 6));
                const day = parseInt(value.substring(6, 8));
                return RockDateTime.fromParts(year, month, day);
            }
            function getDateTimeFromString(value) {
                if (value.length < 15 || value[8] !== "T") {
                    return null;
                }
                const year = parseInt(value.substring(0, 4));
                const month = parseInt(value.substring(4, 6));
                const day = parseInt(value.substring(6, 8));
                const hour = parseInt(value.substring(9, 11));
                const minute = parseInt(value.substring(11, 13));
                const second = parseInt(value.substring(13, 15));
                return RockDateTime.fromParts(year, month, day, hour, minute, second);
            }
            function getPeriodDurationInDays(period) {
                if (!period.startsWith("P")) {
                    return 0;
                }
                if (period.endsWith("D")) {
                    return parseInt(period.substring(1, period.length - 1));
                }
                else if (period.endsWith("W")) {
                    return parseInt(period.substring(1, period.length - 1)) * 7;
                }
                return 0;
            }
            function getRecurrenceDates(attributes, value) {
                const recurrenceDates = [];
                const valueParts = value.split(",");
                const valueType = attributes["VALUE"];
                for (const valuePart of valueParts) {
                    if (valueType === "PERIOD") {
                        recurrenceDates.push(...getDatesFromRangeOrPeriod(valuePart));
                    }
                    else if (valueType === "DATE") {
                        const date = getDateFromString(valuePart);
                        if (date) {
                            recurrenceDates.push(date);
                        }
                    }
                    else {
                        const date = getDateTimeFromString(valuePart);
                        if (date) {
                            recurrenceDates.push(date);
                        }
                    }
                }
                return recurrenceDates;
            }
            function getWeekdayName(day) {
                if (day === 0) {
                    return "Sunday";
                }
                else if (day === 1) {
                    return "Monday";
                }
                else if (day === 2) {
                    return "Tuesday";
                }
                else if (day === 3) {
                    return "Wednesday";
                }
                else if (day === 4) {
                    return "Thursday";
                }
                else if (day === 5) {
                    return "Friday";
                }
                else if (day === 6) {
                    return "Saturday";
                }
                else {
                    return "Unknown";
                }
            }
            function dateMatchesDays(rockDate, days) {
                for (const day of days) {
                    if (rockDate.dayOfWeek === day) {
                        return true;
                    }
                }
                return false;
            }
            function dateMatchesOffsetDayOfWeeks(rockDate, dayOfWeek, offsets) {
                if (!dateMatchesDays(rockDate, [dayOfWeek])) {
                    return false;
                }
                const dayOfMonth = rockDate.day;
                for (const offset of offsets) {
                    if (offset === 1 && dayOfMonth >= 1 && dayOfMonth <= 7) {
                        return true;
                    }
                    else if (offset === 2 && dayOfMonth >= 8 && dayOfMonth <= 14) {
                        return true;
                    }
                    else if (offset === 3 && dayOfMonth >= 15 && dayOfMonth <= 21) {
                        return true;
                    }
                    else if (offset === 4 && dayOfMonth >= 22 && dayOfMonth <= 28) {
                        return true;
                    }
                    else if (offset === -1) {
                        const lastDayOfMonth = rockDate.addDays(-(rockDate.day - 1)).addMonths(1).addDays(-1).day;
                        if (dayOfMonth >= (lastDayOfMonth - 7) && dayOfMonth <= lastDayOfMonth) {
                            return true;
                        }
                    }
                }
                return false;
            }
            function getDayOfWeekFromIcalDay(day) {
                switch (day) {
                    case "SU":
                        return 0;
                    case "MO":
                        return 1;
                    case "TU":
                        return 2;
                    case "WE":
                        return 3;
                    case "TH":
                        return 4;
                    case "FR":
                        return 5;
                    case "SA":
                        return 6;
                }
            }
            function getiCalDay(day) {
                switch (day) {
                    case 0:
                        return "SU";
                    case 1:
                        return "MO";
                    case 2:
                        return "TU";
                    case 3:
                        return "WE";
                    case 4:
                        return "TH";
                    case 5:
                        return "FR";
                    case 6:
                        return "SA";
                }
            }
            function normalizeLineLength(lines) {
                const newLines = [...lines];
                for (let lineNumber = 0; lineNumber < newLines.length; lineNumber++) {
                    if (newLines[lineNumber].length > 75) {
                        const currentLine = newLines[lineNumber].substring(0, 75);
                        const newLine = " " + newLines[lineNumber].substring(75);
                        newLines.splice(lineNumber, 1, currentLine, newLine);
                    }
                }
                return newLines;
            }
            function denormalizeLineLength(lines) {
                const newLines = [...lines];
                for (let lineNumber = 1; lineNumber < newLines.length;) {
                    if (newLines[lineNumber][0] === " ") {
                        newLines[lineNumber - 1] += newLines[lineNumber].substring(1);
                        newLines.splice(lineNumber, 1);
                    }
                    else {
                        lineNumber++;
                    }
                }
                return newLines;
            }
            class LineFeeder {
                constructor(content) {
                    const lines = content.split(/\r\n|\n|\r/);
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
                constructor(rule = undefined) {
                    var _a, _b, _c, _d, _e, _f;
                    this.interval = 1;
                    this.byMonthDay = [];
                    this.byDay = [];
                    if (!rule) {
                        return;
                    }
                    const values = {};
                    for (const attr of rule.split(";")) {
                        const attrParts = attr.split("=");
                        if (attrParts.length === 2) {
                            values[attrParts[0]] = attrParts[1];
                        }
                    }
                    if (values["UNTIL"] !== undefined && values["COUNT"] !== undefined) {
                        throw new Error(`Recurrence rule '${rule}' cannot specify both UNTIL and COUNT.`);
                    }
                    if (values["FREQ"] !== "DAILY" && values["FREQ"] !== "WEEKLY" && values["FREQ"] !== "MONTHLY") {
                        throw new Error(`Invalid frequence for recurrence rule '${rule}'.`);
                    }
                    this.frequency = values["FREQ"];
                    if (((_a = values["UNTIL"]) === null || _a === void 0 ? void 0 : _a.length) === 8) {
                        this.endDate = (_b = getDateFromString(values["UNTIL"])) !== null && _b !== void 0 ? _b : undefined;
                    }
                    else if (((_c = values["UNTIL"]) === null || _c === void 0 ? void 0 : _c.length) >= 15) {
                        this.endDate = (_d = getDateTimeFromString(values["UNTIL"])) !== null && _d !== void 0 ? _d : undefined;
                    }
                    if (values["COUNT"] !== undefined) {
                        this.count = (_e = toNumberOrNull(values["COUNT"])) !== null && _e !== void 0 ? _e : undefined;
                    }
                    if (values["INTERVAL"] !== undefined) {
                        this.interval = (_f = toNumberOrNull(values["INTERVAL"])) !== null && _f !== void 0 ? _f : 1;
                    }
                    if (values["BYMONTHDAY"] !== undefined && values["BYMONTHDAY"].length > 0) {
                        this.byMonthDay = [];
                        for (const v of values["BYMONTHDAY"].split(",")) {
                            const num = toNumberOrNull(v);
                            if (num !== null) {
                                this.byMonthDay.push(num);
                            }
                        }
                    }
                    if (values["BYDAY"] !== undefined && values["BYDAY"].length > 0) {
                        this.byDay = [];
                        for (const v of values["BYDAY"].split(",")) {
                            if (v.length < 2) {
                                continue;
                            }
                            const num = v.length > 2 ? toNumberOrNull(v.substring(0, v.length - 2)) : 1;
                            const day = v.substring(v.length - 2);
                            if (num === null) {
                                continue;
                            }
                            if (day === "SU" || day === "MO" || day === "TU" || day == "WE" || day == "TH" || day == "FR" || day == "SA") {
                                this.byDay.push({
                                    value: num,
                                    day: getDayOfWeekFromIcalDay(day)
                                });
                            }
                        }
                    }
                }
                build() {
                    const attributes = [];
                    attributes.push(`FREQ=${this.frequency}`);
                    if (this.count !== undefined) {
                        attributes.push(`COUNT=${this.count}`);
                    }
                    else if (this.endDate) {
                        attributes.push(`UNTIL=${getDateTimeString(this.endDate)}`);
                    }
                    if (this.interval > 1) {
                        attributes.push(`INTERVAL=${this.interval}`);
                    }
                    if (this.byMonthDay.length > 0) {
                        const monthDayValues = this.byMonthDay.map(md => md.toString()).join(",");
                        attributes.push(`BYMONTHDAY=${monthDayValues}`);
                    }
                    if (this.byDay.length > 0) {
                        const dayValues = this.byDay.map(d => d.value !== 1 ? `${d.value}${getiCalDay(d.day)}` : getiCalDay(d.day));
                        attributes.push(`BYDAY=${dayValues}`);
                    }
                    return attributes.join(";");
                }
                getDates(eventStartDateTime, startDateTime, endDateTime) {
                    const dates = [];
                    let rockDate = eventStartDateTime;
                    let dateCount = 0;
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
                        const nextDate = this.nextDateAfter(rockDate);
                        if (nextDate === null) {
                            break;
                        }
                        else {
                            rockDate = nextDate;
                        }
                    }
                    return dates;
                }
                nextDateAfter(rockDate) {
                    if (this.frequency === "DAILY") {
                        return rockDate.addDays(this.interval);
                    }
                    else if (this.frequency === "WEEKLY" && this.byDay.length > 0) {
                        let nextDate = rockDate;
                        if (nextDate.dayOfWeek === 6) {
                            nextDate = nextDate.addDays(1 + ((this.interval - 1) * 7));
                        }
                        else {
                            nextDate = nextDate.addDays(1);
                        }
                        while (!dateMatchesDays(nextDate, this.byDay.map(d => d.day))) {
                            if (nextDate.dayOfWeek === 6) {
                                nextDate = nextDate.addDays(1 + ((this.interval - 1) * 7));
                            }
                            else {
                                nextDate = nextDate.addDays(1);
                            }
                        }
                        return nextDate;
                    }
                    else if (this.frequency === "MONTHLY") {
                        if (this.byMonthDay.length > 0) {
                            let nextDate = rockDate.addDays(-(rockDate.day - 1));
                            if (rockDate.day >= this.byMonthDay[0]) {
                                nextDate = nextDate.addMonths(this.interval);
                            }
                            let lastDayOfMonth = nextDate.addMonths(1).addDays(-1).day;
                            let loopCount = 0;
                            while (lastDayOfMonth < this.byMonthDay[0]) {
                                nextDate = nextDate.addMonths(this.interval);
                                lastDayOfMonth = nextDate.addMonths(1).addDays(-1).day;
                                if (loopCount++ >= 100) {
                                    return null;
                                }
                            }
                            nextDate = nextDate.addDays(this.byMonthDay[0] - 1);
                            return nextDate;
                        }
                        else if (this.byDay.length > 0) {
                            const dayOfWeek = this.byDay[0].day;
                            const offsets = this.byDay.map(d => d.value);
                            let nextDate = rockDate.addDays(1);
                            while (!dateMatchesOffsetDayOfWeeks(nextDate, dayOfWeek, offsets)) {
                                nextDate = nextDate.addDays(1);
                            }
                            return nextDate;
                        }
                    }
                    return null;
                }
            }
            class Event {
                constructor(icsContent = undefined) {
                    this.excludedDates = [];
                    this.recurrenceDates = [];
                    this.recurrenceRules = [];
                    if (icsContent === undefined) {
                        this.uid = newGuid();
                        return;
                    }
                    let feeder;
                    if (typeof icsContent === "string") {
                        feeder = new LineFeeder(icsContent);
                    }
                    else {
                        feeder = icsContent;
                    }
                    this.parse(feeder);
                }
                buildLines() {
                    if (!this.startDateTime || !this.endDateTime) {
                        return [];
                    }
                    const lines = [];
                    lines.push("BEGIN:VEVENT");
                    lines.push(`DTEND:${getDateTimeString(this.endDateTime)}`);
                    lines.push(`DTSTAMP:${getDateTimeString(RockDateTime.now())}`);
                    lines.push(`DTSTART:${getDateTimeString(this.startDateTime)}`);
                    if (this.excludedDates.length > 0) {
                        lines.push(`EXDATE:${this.excludedDates.map(d => getDateString(d) + "/P1D").join(",")}`);
                    }
                    if (this.recurrenceDates.length > 0) {
                        const recurrenceDates = [];
                        for (const date of this.recurrenceDates) {
                            const rDate = RockDateTime.fromParts(date.year, date.month, date.day, this.startDateTime.hour, this.startDateTime.minute, this.startDateTime.second);
                            if (rDate) {
                                recurrenceDates.push(getDateTimeString(rDate));
                            }
                        }
                        lines.push(`RDATE:${recurrenceDates.join(",")}`);
                    }
                    else if (this.recurrenceRules.length > 0) {
                        for (const rrule of this.recurrenceRules) {
                            lines.push(`RRULE:${rrule.build()}`);
                        }
                    }
                    lines.push("SEQUENCE:0");
                    lines.push(`UID:${this.uid}`);
                    lines.push("END:VEVENT");
                    return lines;
                }
                build() {
                    const lines = this.buildLines();
                    if (lines.length === 0) {
                        return null;
                    }
                    return normalizeLineLength(lines).join("\r\n");
                }
                parse(feeder) {
                    var _a, _b;
                    let line;
                    if (feeder.peek() !== "BEGIN:VEVENT") {
                        throw new Error("Invalid event.");
                    }
                    feeder.pop();
                    while ((line = feeder.pop()) !== null) {
                        if (line === "END:VEVENT") {
                            break;
                        }
                        const splitAt = line.indexOf(":");
                        if (splitAt < 0) {
                            continue;
                        }
                        let key = line.substring(0, splitAt);
                        const value = line.substring(splitAt + 1);
                        const keyAttributes = {};
                        const keySegments = key.split(";");
                        if (keySegments.length > 1) {
                            key = keySegments[0];
                            keySegments.splice(0, 1);
                            for (const attr of keySegments) {
                                const attrSegments = attr.split("=");
                                if (attr.length === 2) {
                                    keyAttributes[attrSegments[0]] = attrSegments[1];
                                }
                            }
                        }
                        if (key === "DTSTART") {
                            this.startDateTime = (_a = getDateTimeFromString(value)) !== null && _a !== void 0 ? _a : undefined;
                        }
                        else if (key === "DTEND") {
                            this.endDateTime = (_b = getDateTimeFromString(value)) !== null && _b !== void 0 ? _b : undefined;
                        }
                        else if (key === "RRULE") {
                            this.recurrenceRules.push(new RecurrenceRule(value));
                        }
                        else if (key === "RDATE") {
                            this.recurrenceDates = getRecurrenceDates(keyAttributes, value);
                        }
                        else if (key === "UID") {
                            this.uid = value;
                        }
                        else if (key === "DURATION") ;
                        else if (key === "EXDATE") {
                            const dateValues = value.split(",");
                            for (const dateValue of dateValues) {
                                const dates = getDatesFromRangeOrPeriod(dateValue);
                                this.excludedDates.push(...dates);
                            }
                        }
                    }
                }
                isDateExcluded(rockDate) {
                    const rockDateOnly = rockDate.date;
                    for (const excludedDate of this.excludedDates) {
                        if (excludedDate.date.isEqualTo(rockDateOnly)) {
                            return true;
                        }
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
                        const dates = [];
                        const recurrenceDates = [this.startDateTime, ...this.recurrenceDates];
                        for (const date of recurrenceDates) {
                            if (date >= startDateTime && date < endDateTime) {
                                dates.push(date);
                            }
                        }
                        return dates;
                    }
                    else if (this.recurrenceRules.length > 0) {
                        const rrule = this.recurrenceRules[0];
                        return rrule.getDates(this.startDateTime, startDateTime, endDateTime)
                            .filter(d => !this.isDateExcluded(d));
                    }
                    else {
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
                    const startTimeText = this.startDateTime.toLocaleString({ hour: "numeric", minute: "2-digit", hour12: true });
                    if (this.recurrenceRules.length > 0) {
                        const rrule = this.recurrenceRules[0];
                        if (rrule.frequency === "DAILY") {
                            let result = "Daily";
                            if (rrule.interval > 1) {
                                result += ` every ${rrule.interval} ${pluralConditional(rrule.interval, "day", "days")}`;
                            }
                            result += ` at ${startTimeText}`;
                            return result;
                        }
                        else if (rrule.frequency === "WEEKLY") {
                            if (rrule.byDay.length === 0) {
                                return "No Scheduled Days";
                            }
                            let result = rrule.byDay.map(d => getWeekdayName(d.day) + "s").join(",");
                            if (rrule.interval > 1) {
                                result = `Every ${rrule.interval} weeks: ${result}`;
                            }
                            else {
                                result = `Weekly: ${result}`;
                            }
                            return `${result} at ${startTimeText}`;
                        }
                        else if (rrule.frequency === "MONTHLY") {
                            if (rrule.byMonthDay.length > 0) {
                                let result = `Day ${rrule.byMonthDay[0]} of every `;
                                if (rrule.interval > 1) {
                                    result += `${rrule.interval} months`;
                                }
                                else {
                                    result += "month";
                                }
                                return `${result} at ${startTimeText}`;
                            }
                            else if (rrule.byDay.length > 0) {
                                const byDay = rrule.byDay[0];
                                const offsetNames = nthNamesAbbreviated.filter(n => rrule.byDay.some(d => d.value == n[0])).map(n => n[1]);
                                let result = "";
                                if (offsetNames.length > 0) {
                                    let nameText;
                                    if (offsetNames.length > 2) {
                                        nameText = `${offsetNames.slice(0, offsetNames.length - 1).join(", ")} and ${offsetNames[offsetNames.length - 1]}`;
                                    }
                                    else {
                                        nameText = offsetNames.join(" and ");
                                    }
                                    result = `The ${nameText} ${getWeekdayName(byDay.day)} of every month`;
                                }
                                else {
                                    return "";
                                }
                                return `${result} at ${startTimeText}`;
                            }
                            else {
                                return "";
                            }
                        }
                        else {
                            return "";
                        }
                    }
                    else {
                        const dates = [this.startDateTime, ...this.recurrenceDates];
                        if (dates.length === 1) {
                            return `Once at ${this.startDateTime.toASPString("g")}`;
                        }
                        else if (!html || dates.length > 99) {
                            const firstDate = dates[0];
                            const lastDate = dates[dates.length - 1];
                            if (firstDate && lastDate) {
                                return `Multiple dates between ${firstDate.toASPString("g")} and ${lastDate.toASPString("g")}`;
                            }
                            else {
                                return "";
                            }
                        }
                        else if (dates.length > 1) {
                            let listHtml = `<ul class="list-unstyled">`;
                            for (const date of dates) {
                                listHtml += `<li>${date.toASPString("g")}</li>`;
                            }
                            listHtml += "</li>";
                            return listHtml;
                        }
                        else {
                            return "No Schedule";
                        }
                    }
                }
            }
            class Calendar {
                constructor(icsContent = undefined) {
                    this.events = [];
                    if (icsContent === undefined) {
                        return;
                    }
                    const feeder = new LineFeeder(icsContent);
                    this.parse(feeder);
                }
                build() {
                    const lines = [];
                    lines.push("BEGIN:VCALENDAR");
                    lines.push("PRODID:-//github.com/SparkDevNetwork/Rock//NONSGML Rock//EN");
                    lines.push("VERSION:2.0");
                    for (const event of this.events) {
                        lines.push(...event.buildLines());
                    }
                    lines.push("END:VCALENDAR");
                    return denormalizeLineLength(lines).join("\r\n");
                }
                parse(feeder) {
                    let line;
                    while ((line = feeder.peek()) !== null) {
                        if (line === "BEGIN:VEVENT") {
                            const event = new Event(feeder);
                            this.events.push(event);
                        }
                        else {
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
            exports('InternetCalendar', internetCalendar);

            const rangeTypeOptions = [
                {
                    value: 1..toString(),
                    text: "Current"
                },
                {
                    value: 4..toString(),
                    text: "Previous"
                },
                {
                    value: 0..toString(),
                    text: "Last"
                },
                {
                    value: 8..toString(),
                    text: "Next"
                },
                {
                    value: 16..toString(),
                    text: "Upcoming"
                },
                {
                    value: 2..toString(),
                    text: "Date Range"
                }
            ];
            const timeUnitOptions = [
                {
                    value: 0..toString(),
                    text: "Hour"
                },
                {
                    value: 1..toString(),
                    text: "Day"
                },
                {
                    value: 2..toString(),
                    text: "Week"
                },
                {
                    value: 3..toString(),
                    text: "Month"
                },
                {
                    value: 4..toString(),
                    text: "Year"
                },
            ];
            function getTextForValue(value, options) {
                var _a;
                const matches = options.filter(v => v.value === value);
                return matches.length > 0 ? (_a = matches[0].text) !== null && _a !== void 0 ? _a : "" : "";
            }
            function getRangeTypeText(rangeType) {
                var _a;
                const rangeTypes = rangeTypeOptions.filter(o => o.value === rangeType.toString());
                return rangeTypes.length > 0 ? (_a = rangeTypes[0].text) !== null && _a !== void 0 ? _a : "" : "";
            }
            function getTimeUnitText(timeUnit) {
                var _a;
                const timeUnits = timeUnitOptions.filter(o => o.value === timeUnit.toString());
                return timeUnits.length > 0 ? (_a = timeUnits[0].text) !== null && _a !== void 0 ? _a : "" : "";
            }
            function parseSlidingDateRangeString(value) {
                var _a;
                const segments = value.split("|");
                if (segments.length < 3) {
                    return null;
                }
                const rangeTypes = rangeTypeOptions.filter(o => { var _a; return ((_a = o.text) !== null && _a !== void 0 ? _a : "").replace(" ", "").toLowerCase() === segments[0].toLowerCase() || o.value === segments[0]; });
                const timeUnits = timeUnitOptions.filter(o => { var _a; return ((_a = o.text) !== null && _a !== void 0 ? _a : "").toLowerCase() === segments[2].toLowerCase() || o.value === segments[2]; });
                if (rangeTypes.length === 0) {
                    return null;
                }
                const range = {
                    rangeType: toNumber(rangeTypes[0].value)
                };
                if ([1, 0, 8, 4, 16].includes(range.rangeType)) {
                    range.timeUnit = timeUnits.length > 0 ? toNumber(timeUnits[0].value) : 0;
                    if ([0, 8, 4, 16].includes(range.rangeType)) {
                        range.timeValue = (_a = toNumberOrNull(segments[1])) !== null && _a !== void 0 ? _a : 1;
                    }
                }
                if (range.rangeType === 2) {
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
                var _a, _b, _c, _d, _e, _f, _g;
                switch (value.rangeType) {
                    case 1:
                        return `Current||${getTextForValue((_b = (_a = value.timeUnit) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "", timeUnitOptions)}||`;
                    case 2:
                        return `DateRange|||${(_c = value.lowerDate) !== null && _c !== void 0 ? _c : ""}|${(_d = value.upperDate) !== null && _d !== void 0 ? _d : ""}`;
                    default:
                        return `${getTextForValue(value.rangeType.toString(), rangeTypeOptions)}|${(_e = value.timeValue) !== null && _e !== void 0 ? _e : ""}|${getTextForValue((_g = (_f = value.timeUnit) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : "", timeUnitOptions)}||`;
                }
            }
            function calculateSlidingDateRange(value, currentDateTime = undefined) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
                const result = {
                    start: null,
                    end: null
                };
                if (!currentDateTime) {
                    currentDateTime = RockDateTime.now();
                }
                if (value.rangeType === 1) {
                    if (value.timeUnit === 0) {
                        result.start = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0);
                        result.end = (_b = (_a = result.start) === null || _a === void 0 ? void 0 : _a.addHours(1)) !== null && _b !== void 0 ? _b : null;
                    }
                    else if (value.timeUnit === 1) {
                        result.start = currentDateTime.date;
                        result.end = result.start.addDays(1);
                    }
                    else if (value.timeUnit === 2) {
                        let diff = currentDateTime.dayOfWeek - 1;
                        if (diff < 0) {
                            diff += 7;
                        }
                        result.start = currentDateTime.addDays(-1 * diff).date;
                        result.end = result.start.addDays(7);
                    }
                    else if (value.timeUnit === 3) {
                        result.start = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1);
                        result.end = (_d = (_c = result.start) === null || _c === void 0 ? void 0 : _c.addMonths(1)) !== null && _d !== void 0 ? _d : null;
                    }
                    else if (value.timeUnit === 4) {
                        result.start = RockDateTime.fromParts(currentDateTime.year, 1, 1);
                        result.end = RockDateTime.fromParts(currentDateTime.year + 1, 1, 1);
                    }
                }
                else if (value.rangeType === 0 || value.rangeType === 4) {
                    const count = (_e = value.timeValue) !== null && _e !== void 0 ? _e : 1;
                    const roundUpCount = value.rangeType === 0 ? 1 : 0;
                    if (value.timeUnit === 0) {
                        result.end = (_g = (_f = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0)) === null || _f === void 0 ? void 0 : _f.addHours(roundUpCount)) !== null && _g !== void 0 ? _g : null;
                        result.start = (_j = (_h = result.end) === null || _h === void 0 ? void 0 : _h.addHours(-count)) !== null && _j !== void 0 ? _j : null;
                    }
                    else if (value.timeUnit === 1) {
                        result.end = currentDateTime.date.addDays(roundUpCount);
                        result.start = (_l = (_k = result.end) === null || _k === void 0 ? void 0 : _k.addDays(-count)) !== null && _l !== void 0 ? _l : null;
                    }
                    else if (value.timeUnit === 2) {
                        let diff = currentDateTime.dayOfWeek - 1;
                        if (diff < 0) {
                            diff += 7;
                        }
                        result.end = currentDateTime.addDays(-1 * diff).date.addDays(7 * roundUpCount);
                        result.start = result.end.addDays(-count * 7);
                    }
                    else if (value.timeUnit === 3) {
                        result.end = (_o = (_m = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1)) === null || _m === void 0 ? void 0 : _m.addMonths(roundUpCount)) !== null && _o !== void 0 ? _o : null;
                        result.start = (_q = (_p = result.end) === null || _p === void 0 ? void 0 : _p.addMonths(-count)) !== null && _q !== void 0 ? _q : null;
                    }
                    else if (value.timeUnit === 4) {
                        result.end = (_s = (_r = RockDateTime.fromParts(currentDateTime.year, 1, 1)) === null || _r === void 0 ? void 0 : _r.addYears(roundUpCount)) !== null && _s !== void 0 ? _s : null;
                        result.start = (_u = (_t = result.end) === null || _t === void 0 ? void 0 : _t.addYears(-count)) !== null && _u !== void 0 ? _u : null;
                    }
                    const cutoffDate = currentDateTime.date.addDays(1);
                    if (result.end && result.end.date > cutoffDate) {
                        result.end = cutoffDate;
                    }
                }
                else if (value.rangeType === 8 || value.rangeType === 16) {
                    const count = (_v = value.timeValue) !== null && _v !== void 0 ? _v : 1;
                    const roundUpCount = value.rangeType === 16 ? 1 : 0;
                    if (value.timeUnit === 0) {
                        result.start = (_x = (_w = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, currentDateTime.day, currentDateTime.hour, 0, 0)) === null || _w === void 0 ? void 0 : _w.addHours(roundUpCount)) !== null && _x !== void 0 ? _x : null;
                        result.end = (_z = (_y = result.start) === null || _y === void 0 ? void 0 : _y.addHours(count)) !== null && _z !== void 0 ? _z : null;
                    }
                    else if (value.timeUnit === 1) {
                        result.start = currentDateTime.date.addDays(roundUpCount);
                        result.end = result.start.addDays(count);
                    }
                    else if (value.timeUnit === 2) {
                        let diff = currentDateTime.dayOfWeek - 1;
                        if (diff < 0) {
                            diff += 7;
                        }
                        result.start = currentDateTime.addDays(-1 * diff)
                            .date.addDays(7 * roundUpCount);
                        result.end = result.start.addDays(count * 7);
                    }
                    else if (value.timeUnit === 3) {
                        result.start = (_1 = (_0 = RockDateTime.fromParts(currentDateTime.year, currentDateTime.month, 1)) === null || _0 === void 0 ? void 0 : _0.addMonths(roundUpCount)) !== null && _1 !== void 0 ? _1 : null;
                        result.end = (_3 = (_2 = result.start) === null || _2 === void 0 ? void 0 : _2.addMonths(count)) !== null && _3 !== void 0 ? _3 : null;
                    }
                    else if (value.timeUnit === 4) {
                        result.start = (_5 = (_4 = RockDateTime.fromParts(currentDateTime.year, 1, 1)) === null || _4 === void 0 ? void 0 : _4.addYears(roundUpCount)) !== null && _5 !== void 0 ? _5 : null;
                        result.end = (_7 = (_6 = result.start) === null || _6 === void 0 ? void 0 : _6.addYears(count)) !== null && _7 !== void 0 ? _7 : null;
                    }
                    if (result.start && result.start.date < currentDateTime.date) {
                        result.start = currentDateTime.date;
                    }
                }
                else if (value.rangeType === 2) {
                    result.start = RockDateTime.parseISO((_8 = value.lowerDate) !== null && _8 !== void 0 ? _8 : "");
                    result.end = RockDateTime.parseISO((_9 = value.upperDate) !== null && _9 !== void 0 ? _9 : "");
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
                if (result.end && value.timeUnit != 0) {
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
                calculateSlidingDateRange: calculateSlidingDateRange
            });
            exports('SlidingDateRange', slidingDateRange);

            function tooltip(node, options) {
                var _a;
                if (Array.isArray(node)) {
                    for (const n of node) {
                        tooltip(n, options);
                    }
                    return;
                }
                $(node).tooltip({
                    html: options === null || options === void 0 ? void 0 : options.html,
                    sanitize: (_a = options === null || options === void 0 ? void 0 : options.sanitize) !== null && _a !== void 0 ? _a : true
                });
            }

            var tooltip$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                tooltip: tooltip
            });
            exports('Tooltip', tooltip$1);

            class CategoryTreeItemProvider {
                getItems(parentGuid) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const options = {
                            parentGuid: parentGuid,
                            entityTypeGuid: this.entityTypeGuid,
                            entityTypeQualifierColumn: this.entityTypeQualifierColumn,
                            entityTypeQualifierValue: this.entityTypeQualifierValue,
                            lazyLoad: false,
                            securityGrantToken: this.securityGrantToken
                        };
                        const response = yield post("/api/v2/Controls/CategoryPickerChildTreeItems", {}, options);
                        if (response.isSuccess && response.data) {
                            return response.data;
                        }
                        else {
                            console.log("Error", response.errorMessage);
                            return [];
                        }
                    });
                }
                getRootItems() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield this.getItems(this.rootCategoryGuid);
                    });
                }
                getChildItems(item) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return this.getItems(item.value);
                    });
                }
            }
            class LocationTreeItemProvider {
                getItems(parentGuid) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const options = {
                            guid: parentGuid !== null && parentGuid !== void 0 ? parentGuid : emptyGuid,
                            rootLocationGuid: emptyGuid,
                            securityGrantToken: this.securityGrantToken
                        };
                        const url = "/api/v2/Controls/LocationPickerGetActiveChildren";
                        const response = yield post(url, undefined, options);
                        if (response.isSuccess && response.data) {
                            return response.data;
                        }
                        else {
                            console.log("Error", response.errorMessage);
                            return [];
                        }
                    });
                }
                getRootItems() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield this.getItems(null);
                    });
                }
                getChildItems(item) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return this.getItems(item.value);
                    });
                }
            }
            class DataViewTreeItemProvider {
                getItems(parentGuid) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const options = {
                            parentGuid,
                            getCategorizedItems: true,
                            includeCategoriesWithoutChildren: false,
                            entityTypeGuidFilter: this.entityTypeGuid,
                            lazyLoad: false,
                            securityGrantToken: this.securityGrantToken,
                        };
                        const response = yield post("/api/v2/Controls/DataViewPickerGetDataViews", {}, options);
                        if (response.isSuccess && response.data) {
                            return response.data;
                        }
                        else {
                            console.log("Error", response.errorMessage);
                            return [];
                        }
                    });
                }
                getRootItems() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield this.getItems();
                    });
                }
                getChildItems(item) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return this.getItems(item.value);
                    });
                }
            }
            class WorkflowTypeTreeItemProvider {
                getItems(parentGuid) {
                    var _a;
                    return __awaiter(this, void 0, void 0, function* () {
                        const options = {
                            parentGuid,
                            includeInactiveItems: (_a = this.includeInactiveItems) !== null && _a !== void 0 ? _a : false,
                            securityGrantToken: this.securityGrantToken,
                        };
                        const response = yield post("/api/v2/Controls/WorkflowTypePickerGetWorkflowTypes", {}, options);
                        if (response.isSuccess && response.data) {
                            return response.data;
                        }
                        else {
                            console.log("Error", response.errorMessage);
                            return [];
                        }
                    });
                }
                getRootItems() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield this.getItems();
                    });
                }
                getChildItems(item) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return this.getItems(item.value);
                    });
                }
            }
            class GroupTreeItemProvider {
                constructor() {
                    this.securityGrantToken = null;
                    this.rootGroupGuid = null;
                    this.includedGroupTypeGuids = [];
                    this.includeInactiveGroups = false;
                    this.limitToSchedulingEnabled = false;
                    this.limitToRSVPEnabled = false;
                }
                getItems(parentGuid = null) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const options = {
                            guid: parentGuid,
                            rootGroupGuid: this.rootGroupGuid,
                            includedGroupTypeGuids: this.includedGroupTypeGuids,
                            includeInactiveGroups: this.includeInactiveGroups,
                            limitToSchedulingEnabled: this.limitToSchedulingEnabled,
                            limitToRSVPEnabled: this.limitToRSVPEnabled,
                            securityGrantToken: this.securityGrantToken
                        };
                        const url = "/api/v2/Controls/GroupPickerGetChildren";
                        const response = yield post(url, undefined, options);
                        if (response.isSuccess && response.data) {
                            return response.data;
                        }
                        else {
                            console.log("Error", response.errorMessage);
                            return [];
                        }
                    });
                }
                getRootItems() {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield this.getItems(null);
                    });
                }
                getChildItems(item) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return this.getItems(item.value);
                    });
                }
            }

            var treeItemProviders = /*#__PURE__*/Object.freeze({
                __proto__: null,
                CategoryTreeItemProvider: CategoryTreeItemProvider,
                LocationTreeItemProvider: LocationTreeItemProvider,
                DataViewTreeItemProvider: DataViewTreeItemProvider,
                WorkflowTypeTreeItemProvider: WorkflowTypeTreeItemProvider,
                GroupTreeItemProvider: GroupTreeItemProvider
            });
            exports('TreeItemProviders', treeItemProviders);

            function isUrl(val) {
                if (typeof val === "string") {
                    const re = /^(http[s]?:\/\/)?[^\s(["<,>]*\.?[^\s[",><]*$/;
                    return re.test(val);
                }
                return false;
            }
            function makeUrlRedirectSafe(url) {
                try {
                    const u = new URL(url);
                    if (u.protocol !== "http:" && u.protocol !== "https:") {
                        return "/";
                    }
                    return makeUrlRedirectSafe(`${u.pathname}${u.search}`);
                }
                catch (_a) {
                    if (url.indexOf(":") !== -1) {
                        return "/";
                    }
                    return url;
                }
            }
            function syncRefsWithQueryParams(refs) {
                const params = new URLSearchParams(window.location.search);
                Object.entries(refs).forEach(([key, ref]) => {
                    var _a;
                    let param = null;
                    try {
                        param = JSON.parse(decodeURI((_a = params.get(key)) !== null && _a !== void 0 ? _a : ""));
                    }
                    catch (e) { }
                    if (param != null) {
                        ref.value = param;
                    }
                    watch(ref, updater(key));
                });
                function updater(key) {
                    return (value) => {
                        params.set(key, encodeURI(JSON.stringify(value)));
                        history.replaceState(null, "", "?" + params.toString());
                    };
                }
            }

            var url = /*#__PURE__*/Object.freeze({
                __proto__: null,
                isUrl: isUrl,
                makeUrlRedirectSafe: makeUrlRedirectSafe,
                syncRefsWithQueryParams: syncRefsWithQueryParams
            });
            exports('Url', url);

            const definedRules = {};
            const rulesPropType = {
                type: [Array, Object, String],
                default: ""
            };
            function parseRule(rule) {
                let name = "";
                let params = [];
                const colonIndex = rule.indexOf(":");
                if (colonIndex === -1) {
                    name = rule;
                }
                else {
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
                        return rules.split("|").filter(r => r !== "");
                    }
                    else if (rules !== "") {
                        return [rules];
                    }
                }
                else if (Array.isArray(rules)) {
                    const normalizedRules = [];
                    for (const r of rules) {
                        normalizedRules.push(...normalizeRules(r));
                    }
                    return normalizedRules;
                }
                else if (typeof rules === "function") {
                    return [rules];
                }
                else if (typeof rules === "object") {
                    return [rules];
                }
                return [];
            }
            function containsRequiredRule(rules) {
                return normalizeRules(rules).some(r => r === "required");
            }
            function normalizeRulesToFunctions(rules) {
                const ruleFunctions = [];
                for (const rule of rules) {
                    if (typeof rule === "string") {
                        const ruleRef = parseRule(rule);
                        const fn = definedRules[ruleRef.name];
                        if (fn) {
                            ruleFunctions.push((value) => fn(value, ruleRef.params));
                        }
                        else {
                            console.warn(`Attempt to validate with unknown rule ${rule}.`);
                        }
                    }
                    else if (typeof rule === "function") {
                        ruleFunctions.push(rule);
                    }
                    else if (typeof rule === "object") {
                        const fn = definedRules[rule.name];
                        if (fn) {
                            ruleFunctions.push((value) => fn(value, rule.params));
                        }
                        else {
                            console.warn(`Attempt to validate with unknown rule ${rule.name}.`);
                        }
                    }
                }
                return ruleFunctions;
            }
            function normalizeRuleResult(result) {
                if (typeof result === "string") {
                    return result;
                }
                else if (result === true) {
                    return "";
                }
                else {
                    return "failed validation";
                }
            }
            function validateValue(value, rule) {
                const fns = normalizeRulesToFunctions(normalizeRules(rule));
                const results = [];
                for (const fn of fns) {
                    const result = normalizeRuleResult(fn(value));
                    if (result !== "") {
                        results.push(result);
                    }
                }
                return results;
            }
            function defineRule(ruleName, validator) {
                if (definedRules[ruleName] !== undefined) {
                    console.warn(`Attempt to redefine validation rule ${ruleName}.`);
                }
                else {
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
            exports('ValidationRules', validationRules);

        })
    };
}));
