System.register(['vue', '@Obsidian/Controls/attributeValuesContainer', '@Obsidian/Controls/panelWidget', '@Obsidian/Controls/textBox', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Templates/block'], (function (exports) {
  'use strict';
  var defineComponent, ref, computed, reactive, AttributeValuesContainer, PanelWidget, TextBox, FieldType, Block;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      reactive = module.reactive;
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      PanelWidget = module["default"];
    }, function (module) {
      TextBox = module["default"];
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      Block = module["default"];
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

      var getAttributeData = (name, fieldTypeGuid, configValues) => {
        var configurationValues = configValues;
        return {
          "value1": reactive({
            fieldTypeGuid: fieldTypeGuid,
            name: "".concat(name, " 1"),
            key: "value1",
            description: "This is the description of the ".concat(name, " without an initial value"),
            configurationValues,
            isRequired: false,
            attributeGuid: "",
            order: 0,
            categories: []
          }),
          "value2": reactive({
            fieldTypeGuid: fieldTypeGuid,
            name: "".concat(name, " 2"),
            key: "value2",
            description: "This is the description of the ".concat(name, " with an initial value"),
            configurationValues,
            isRequired: false,
            attributeGuid: "",
            order: 0,
            categories: []
          })
        };
      };
      var galleryAndResult = defineComponent({
        name: "GalleryAndResult",
        components: {
          PanelWidget,
          AttributeValuesContainer
        },
        props: {
          values: {
            type: Object,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          attributes: {
            type: Object,
            required: true
          }
        },
        setup(props) {
          var values = ref(props.values);
          var value1Json = computed(() => values.value["value1"]);
          var value2Json = computed(() => values.value["value2"]);
          return {
            value1Json,
            value2Json,
            values
          };
        },
        template: "\n<PanelWidget>\n    <template #header>{{title}}</template>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h4>Qualifier Values</h4>\n            <slot />\n            <hr />\n            <h4>Attribute Values Container (edit)</h4>\n            <AttributeValuesContainer v-model=\"values\" :attributes=\"attributes\" :isEditMode=\"true\" :showCategoryLabel=\"false\" />\n        </div>\n        <div class=\"col-md-6\">\n            <h4>Attribute Values Container (view)</h4>\n            <AttributeValuesContainer v-model=\"values\" :attributes=\"attributes\" :isEditMode=\"false\" :showCategoryLabel=\"false\" />\n            <hr />\n            <h4>Values</h4>\n            <p>\n                <strong>Value 1</strong>\n                <pre>{{value1Json}}</pre>\n            </p>\n            <p>\n                <strong>Value 2</strong>\n                <pre>{{value2Json}}</pre>\n            </p>\n        </div>\n    </div>\n</PanelWidget>"
      });
      var getFieldTypeGalleryComponent = (name, initialValue, fieldTypeGuid, initialConfigValues) => {
        return defineComponent({
          name: "".concat(name, "Gallery"),
          components: {
            GalleryAndResult: galleryAndResult,
            TextBox
          },
          data() {
            return {
              name,
              values: {
                "value1": "",
                "value2": initialValue
              },
              configValues: _objectSpread2({}, initialConfigValues),
              attributes: getAttributeData(name, fieldTypeGuid, initialConfigValues)
            };
          },
          computed: {
            configKeys() {
              var keys = [];
              for (var attributeKey in this.attributes) {
                var attribute = this.attributes[attributeKey];
                for (var key in attribute.configurationValues) {
                  if (keys.indexOf(key) === -1) {
                    keys.push(key);
                  }
                }
              }
              return keys;
            }
          },
          watch: {
            configValues: {
              deep: true,
              handler() {
                for (var attributeKey in this.attributes) {
                  var attribute = this.attributes[attributeKey];
                  for (var key in attribute.configurationValues) {
                    var value = this.configValues[key] || "";
                    attribute.configurationValues[key] = value;
                  }
                }
              }
            }
          },
          template: "\n<GalleryAndResult :title=\"name\" :values=\"values\" :attributes=\"attributes\">\n    <TextBox v-for=\"configKey in configKeys\" :key=\"configKey\" :label=\"configKey\" v-model=\"configValues[configKey]\" />\n</GalleryAndResult>"
        });
      };
      var galleryComponents = {
        AddressGallery: getFieldTypeGalleryComponent("Address", '{"street1": "3120 W Cholla St", "city": "Phoenix", "state": "AZ", "postalCode": "85029-4113", "country": "US"}', FieldType.Address, {}),
        BooleanGallery: getFieldTypeGalleryComponent("Boolean", "t", FieldType.Boolean, {
          truetext: "This is true",
          falsetext: "This is false",
          BooleanControlType: "2"
        }),
        CampusGallery: getFieldTypeGalleryComponent("Campus", "", FieldType.Campus, {
          values: JSON.stringify([{
            value: "069D4509-398A-4E08-8225-A0658E8A51E8",
            text: "Main Campus"
          }, {
            value: "0D8B2F85-5DC2-406E-8A7D-D435F3153C58",
            text: "Secondary Campus"
          }, {
            value: "8C99160C-D0FC-49E4-AA9D-87EAE7297AF1",
            text: "Tertiary Campus"
          }])
        }),
        CampusesGallery: getFieldTypeGalleryComponent("Campuses", "", FieldType.Campuses, {
          repeatColumns: "4",
          values: JSON.stringify([{
            value: "069D4509-398A-4E08-8225-A0658E8A51E8",
            text: "Main Campus"
          }, {
            value: "0D8B2F85-5DC2-406E-8A7D-D435F3153C58",
            text: "Secondary Campus"
          }, {
            value: "8C99160C-D0FC-49E4-AA9D-87EAE7297AF1",
            text: "Tertiary Campus"
          }])
        }),
        ColorGallery: getFieldTypeGalleryComponent("Color", "#ee7725", FieldType.Color, {
          selectiontype: "Color Picker"
        }),
        CurrencyGallery: getFieldTypeGalleryComponent("Currency", "4.70", FieldType.Currency, {}),
        DateGallery: getFieldTypeGalleryComponent("Date", "2009-02-11", FieldType.Date, {
          format: "MMM yyyy",
          displayDiff: "true",
          displayCurrentOption: "true",
          datePickerControlType: "Date Parts Picker",
          futureYearCount: "2"
        }),
        DateRangeGallery: getFieldTypeGalleryComponent("DateRange", "2021-07-25T00:00:00.0000000,2021-07-29T00:00:00.0000000", FieldType.DateRange, {}),
        DateTimeGallery: getFieldTypeGalleryComponent("DateTime", "2009-02-11T14:23:00", FieldType.DateTime, {
          format: "MMM dd, yyyy h:mm tt",
          displayDiff: "false",
          displayCurrentOption: "true"
        }),
        DayOfWeekGallery: getFieldTypeGalleryComponent("DayOfWeek", "2", FieldType.DayOfWeek, {}),
        DaysOfWeekGallery: getFieldTypeGalleryComponent("DaysOfWeek", "2,5", FieldType.DaysOfWeek, {}),
        DecimalGallery: getFieldTypeGalleryComponent("Decimal", "18.283", FieldType.Decimal, {}),
        DecimalRangeGallery: getFieldTypeGalleryComponent("DecimalRange", "18.283,100", FieldType.DecimalRange, {}),
        DefinedValueGallery: getFieldTypeGalleryComponent("DefinedValue", '{ "value": "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D", "text": "Single", "description": "Used when the individual is single." }', FieldType.DefinedValue, {
          selectableValues: JSON.stringify([{
            value: "5FE5A540-7D9F-433E-B47E-4229D1472248",
            text: "Married",
            description: "Used when an individual is married."
          }, {
            value: "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D",
            text: "Single",
            description: "Used when the individual is single."
          }, {
            value: "3B689240-24C2-434B-A7B9-A4A6CBA7928C",
            text: "Divorced",
            description: "Used when the individual is divorced."
          }, {
            value: "AE5A0228-9910-4505-B3C6-E6C98BEE2E7F",
            text: "Unknown",
            description: ""
          }]),
          allowmultiple: "",
          displaydescription: "true",
          enhancedselection: "",
          includeInactive: "",
          AllowAddingNewValues: "",
          RepeatColumns: ""
        }),
        DefinedValueRangeGallery: getFieldTypeGalleryComponent("DefinedValueRange", '{ "value": "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D,3B689240-24C2-434B-A7B9-A4A6CBA7928C", "text": "Single to Divorced", "description": "Used when the individual is single. to Used when the individual is divorced." }', FieldType.DefinedValueRange, {
          values: JSON.stringify([{
            value: "5FE5A540-7D9F-433E-B47E-4229D1472248",
            text: "Married",
            description: "Used when an individual is married."
          }, {
            value: "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D",
            text: "Single",
            description: "Used when the individual is single."
          }, {
            value: "3B689240-24C2-434B-A7B9-A4A6CBA7928C",
            text: "Divorced",
            description: "Used when the individual is divorced."
          }, {
            value: "AE5A0228-9910-4505-B3C6-E6C98BEE2E7F",
            text: "Unknown",
            description: ""
          }]),
          displaydescription: "false"
        }),
        EmailGallery: getFieldTypeGalleryComponent("Email", "ted@rocksolidchurchdemo.com", FieldType.Email, {}),
        GenderGallery: getFieldTypeGalleryComponent("Gender", "2", FieldType.Gender, {}),
        IntegerGallery: getFieldTypeGalleryComponent("Integer", "20", FieldType.Integer, {}),
        IntegerRangeGallery: getFieldTypeGalleryComponent("IntegerRange", "0,100", FieldType.IntegerRange, {}),
        KeyValueListGallery: getFieldTypeGalleryComponent("KeyValueList", "[{\"key\":\"One\",\"value\":\"Two\"},{\"key\":\"Three\",\"value\":\"Four\"}]", FieldType.KeyValueList, {
          keyprompt: "Enter Key",
          valueprompt: "Enter Value",
          displayvaluefirst: "false",
          allowhtml: "false",
          values: JSON.stringify([])
        }),
        MemoGallery: getFieldTypeGalleryComponent("Memo", "This is a memo", FieldType.Memo, {
          numberofrows: "10",
          maxcharacters: "100",
          showcountdown: "true",
          allowhtml: "true"
        }),
        MonthDayGallery: getFieldTypeGalleryComponent("MonthDay", "7/4", FieldType.MonthDay, {}),
        MultiSelectGallery: getFieldTypeGalleryComponent("MultiSelect", "pizza", FieldType.MultiSelect, {
          repeatColumns: "4",
          repeatDirection: "Horizontal",
          enhancedselection: "false",
          values: '[{"value": "pizza", "text": "Pizza"}, {"value": "sub", "text": "Sub"}, {"value": "bagel", "text": "Bagel"}]'
        }),
        PhoneNumberGallery: getFieldTypeGalleryComponent("PhoneNumber", "(321) 456-7890", FieldType.PhoneNumber, {}),
        RatingGallery: getFieldTypeGalleryComponent("Rating", '{"value":3,"maxValue":5}', FieldType.Rating, {
          max: "5"
        }),
        SingleSelectGallery: getFieldTypeGalleryComponent("SingleSelect", "pizza", FieldType.SingleSelect, {
          repeatColumns: "4",
          fieldtype: "rb",
          values: '[{"value": "pizza", "text": "Pizza"}, {"value": "sub", "text": "Sub"}, {"value": "bagel", "text": "Bagel"}]'
        }),
        SSNGallery: getFieldTypeGalleryComponent("SSN", "123456789", FieldType.Ssn, {}),
        TextGallery: getFieldTypeGalleryComponent("Text", "Hello", FieldType.Text, {
          ispassword: "false",
          maxcharacters: "10",
          showcountdown: "true"
        }),
        TimeGallery: getFieldTypeGalleryComponent("Time", "13:15:00", FieldType.Time, {}),
        UrlLinkGallery: getFieldTypeGalleryComponent("URL Link", "https://rockrms.com", FieldType.UrlLink, {
          ShouldRequireTrailingForwardSlash: "false",
          ShouldAlwaysShowCondensed: "false"
        })
      };
      var galleryTemplate = Object.keys(galleryComponents).sort().map(g => "<".concat(g, " />")).join("");
      var fieldTypeGallery = exports('default', defineComponent({
        name: "Example.FieldTypeGallery",
        components: _objectSpread2({
          Block
        }, galleryComponents),
        setup() {
          return {};
        },
        template: "\n<Block title=\"Obsidian Field Type Gallery\">\n    <template #default>\n        ".concat(galleryTemplate, "\n    </template>\n</Block>\n")
      }));

    })
  };
}));
//# sourceMappingURL=fieldTypeGallery.js.map
