System.register(['vue', '@Obsidian/SystemGuids/fieldType', '@Obsidian/Templates/block', '@Obsidian/Controls/fieldTypeEditor.obs', '@Obsidian/Controls/attributeValuesContainer.obs', '@Obsidian/Controls/panel.obs', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var createElementVNode, defineComponent, ref, computed, openBlock, createBlock, unref, withCtx, renderSlot, createVNode, toDisplayString, reactive, createElementBlock, Fragment, renderList, FieldType, Block, FieldTypeEditor, AttributeValuesContainer, Panel, newGuid;
  return {
    setters: [function (module) {
      createElementVNode = module.createElementVNode;
      defineComponent = module.defineComponent;
      ref = module.ref;
      computed = module.computed;
      openBlock = module.openBlock;
      createBlock = module.createBlock;
      unref = module.unref;
      withCtx = module.withCtx;
      renderSlot = module.renderSlot;
      createVNode = module.createVNode;
      toDisplayString = module.toDisplayString;
      reactive = module.reactive;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      renderList = module.renderList;
    }, function (module) {
      FieldType = module.FieldType;
    }, function (module) {
      Block = module["default"];
    }, function (module) {
      FieldTypeEditor = module["default"];
    }, function (module) {
      AttributeValuesContainer = module["default"];
    }, function (module) {
      Panel = module["default"];
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      var _hoisted_1 = {
        class: "row"
      };
      var _hoisted_2 = {
        class: "col-md-6"
      };
      var _hoisted_3 = createElementVNode("h4", null, "Qualifier Values", -1);
      var _hoisted_4 = createElementVNode("hr", null, null, -1);
      var _hoisted_5 = createElementVNode("h4", null, "Attribute Values Container (edit)", -1);
      var _hoisted_6 = {
        class: "col-md-6"
      };
      var _hoisted_7 = createElementVNode("h4", null, "Attribute Values Container (view)", -1);
      var _hoisted_8 = createElementVNode("hr", null, null, -1);
      var _hoisted_9 = createElementVNode("h4", null, "Values", -1);
      var _hoisted_10 = createElementVNode("strong", null, "Value 1", -1);
      var _hoisted_11 = createElementVNode("strong", null, "Value 2", -1);
      var script$2 = defineComponent({
        name: 'galleryAndResult.partial',
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
        setup(__props) {
          var props = __props;
          var values = ref(props.values);
          var value1Json = computed(() => values.value["value1"]);
          var value2Json = computed(() => values.value["value2"]);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Panel), {
              title: __props.title,
              hasCollapse: ""
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [_hoisted_3, renderSlot(_ctx.$slots, "default"), _hoisted_4, _hoisted_5, createVNode(unref(AttributeValuesContainer), {
                modelValue: values.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => values.value = $event),
                attributes: __props.attributes,
                isEditMode: true,
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"])]), createElementVNode("div", _hoisted_6, [_hoisted_7, createVNode(unref(AttributeValuesContainer), {
                modelValue: values.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => values.value = $event),
                attributes: __props.attributes,
                isEditMode: false,
                showCategoryLabel: false
              }, null, 8, ["modelValue", "attributes"]), _hoisted_8, _hoisted_9, createElementVNode("p", null, [_hoisted_10, createElementVNode("pre", null, toDisplayString(unref(value1Json)), 1)]), createElementVNode("p", null, [_hoisted_11, createElementVNode("pre", null, toDisplayString(unref(value2Json)), 1)])])])]),
              _: 3
            }, 8, ["title"]);
          };
        }
      });

      script$2.__file = "src/Example/FieldTypeGallery/galleryAndResult.partial.obs";

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
            attributeGuid: newGuid(),
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
            attributeGuid: newGuid(),
            order: 0,
            categories: []
          })
        };
      };

      var script$1 = defineComponent({
        name: 'fieldTypeGalleryComponent.partial',
        props: {
          field: {
            type: Object,
            required: true
          }
        },
        setup(__props) {
          var props = __props;
          var editorValue = ref({
            configurationValues: props.field.initialConfigValues,
            fieldTypeGuid: props.field.fieldTypeGuid
          });
          var values = {
            "value1": "",
            "value2": props.field.initialValue
          };
          var attributes = getAttributeData(props.field.name, props.field.fieldTypeGuid, props.field.initialConfigValues);
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(script$2), {
              title: __props.field.name,
              values: values,
              attributes: unref(attributes),
              fieldTypeEditor: ""
            }, {
              default: withCtx(() => [createVNode(unref(FieldTypeEditor), {
                modelValue: editorValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editorValue.value = $event),
                showConfigOnly: ""
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["title", "attributes"]);
          };
        }
      });

      script$1.__file = "src/Example/FieldTypeGallery/fieldTypeGalleryComponent.partial.obs";

      var script = exports('default', defineComponent({
        name: 'fieldTypeGallery',
        setup(__props) {
          var getFieldTypeGalleryComponent = (name, initialValue, fieldTypeGuid, initialConfigValues) => {
            return {
              name,
              initialValue,
              fieldTypeGuid,
              initialConfigValues
            };
          };
          var galleries = [getFieldTypeGalleryComponent("Address", '{"street1": "3120 W Cholla St", "city": "Phoenix", "state": "AZ", "postalCode": "85029-4113", "country": "US"}', FieldType.Address, {}), getFieldTypeGalleryComponent("Boolean", "True", FieldType.Boolean, {
            truetext: "This is true",
            falsetext: "This is false",
            BooleanControlType: "2"
          }), getFieldTypeGalleryComponent("Campus", "", FieldType.Campus, {
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
          }), getFieldTypeGalleryComponent("Campuses", "", FieldType.Campuses, {
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
          }), getFieldTypeGalleryComponent("Category", "", FieldType.Category, {
            qualifierColumn: "GroupId",
            qualifierValue: "5",
            entityTypeName: JSON.stringify({
              value: "9bbfda11-0d22-40d5-902f-60adfbc88987",
              text: "Group"
            })
          }), getFieldTypeGalleryComponent("Categories", "", FieldType.Categories, {
            qualifierColumn: "GroupId",
            qualifierValue: "5",
            entityTypeName: JSON.stringify({
              value: "9bbfda11-0d22-40d5-902f-60adfbc88987",
              text: "Group"
            })
          }), getFieldTypeGalleryComponent("Color", "#ee7725", FieldType.Color, {
            selectiontype: "Color Picker"
          }), getFieldTypeGalleryComponent("ColorSelector", "#1D6E9C", FieldType.ColorSelector, {
            colors: "#1D6E9C|#38B6D2|#F05F78|#2E2E2E|#16C98D|#F70C0C"
          }), getFieldTypeGalleryComponent("CommunicationPreference", "1", FieldType.CommunicationPreferenceType, {
            options: JSON.stringify([{
              value: "",
              text: "None"
            }, {
              value: "1",
              text: "Email"
            }, {
              value: "2",
              text: "SMS"
            }]),
            repeatColumns: "2"
          }), getFieldTypeGalleryComponent("Currency", "4.70", FieldType.Currency, {}), getFieldTypeGalleryComponent("Date", "2009-02-11", FieldType.Date, {
            format: "MMM yyyy",
            displayDiff: "true",
            displayCurrentOption: "true",
            datePickerControlType: "Date Parts Picker",
            futureYearCount: "2"
          }), getFieldTypeGalleryComponent("DateRange", "2021-07-25T00:00:00.0000000,2021-07-29T00:00:00.0000000", FieldType.DateRange, {}), getFieldTypeGalleryComponent("DateTime", "2009-02-11T14:23:00", FieldType.DateTime, {
            format: "MMM dd, yyyy h:mm tt",
            displayDiff: "false",
            displayCurrentOption: "true"
          }), getFieldTypeGalleryComponent("DayOfWeek", "2", FieldType.DayOfWeek, {}), getFieldTypeGalleryComponent("DaysOfWeek", "2,5", FieldType.DaysOfWeek, {}), getFieldTypeGalleryComponent("Decimal", "18.283", FieldType.Decimal, {}), getFieldTypeGalleryComponent("DecimalRange", "18.283,100", FieldType.DecimalRange, {}), getFieldTypeGalleryComponent("DefinedValue", '{ "value": "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D", "text": "Single", "description": "Used when the individual is single." }', FieldType.DefinedValue, {
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
          }), getFieldTypeGalleryComponent("DefinedValueRange", '{ "value": "F19FC180-FE8F-4B72-A59C-8013E3B0EB0D,3B689240-24C2-434B-A7B9-A4A6CBA7928C", "text": "Single to Divorced", "description": "Used when the individual is single. to Used when the individual is divorced." }', FieldType.DefinedValueRange, {
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
          }), getFieldTypeGalleryComponent("Email", "ted@rocksolidchurchdemo.com", FieldType.Email, {}), getFieldTypeGalleryComponent("Gender", "2", FieldType.Gender, {}), getFieldTypeGalleryComponent("Group", "2", FieldType.Group, {}), getFieldTypeGalleryComponent("GroupLocationType", "2", FieldType.GroupLocationType, {
            groupTypeGuid: JSON.stringify({
              value: "790E3215-3B10-442B-AF69-616C0DCB998E",
              text: "Family"
            }),
            groupTypeLocations: "{\"790E3215-3B10-442B-AF69-616C0DCB998E\": ".concat(JSON.stringify('[{"value":"8c52e53c-2a66-435a-ae6e-5ee307d9a0dc","text":"Home","category":null},{"value":"e071472a-f805-4fc4-917a-d5e3c095c35c","text":"Work","category":null},{"value":"853d98f1-6e08-4321-861b-520b4106cfe0","text":"Previous","category":null}]'), " }")
          }), getFieldTypeGalleryComponent("GroupMember", "2", FieldType.GroupMember, {
            allowmultiple: "false",
            enhancedselection: "false",
            group: JSON.stringify({
              value: "0BA93D66-21B1-4229-979D-F76CEB57666D",
              text: "A/V Team"
            })
          }), getFieldTypeGalleryComponent("GroupRole", "2", FieldType.GroupRole, {}), getFieldTypeGalleryComponent("Integer", "20", FieldType.Integer, {}), getFieldTypeGalleryComponent("IntegerRange", "0,100", FieldType.IntegerRange, {}), getFieldTypeGalleryComponent("KeyValueList", "[{\"key\":\"One\",\"value\":\"Two\"},{\"key\":\"Three\",\"value\":\"Four\"}]", FieldType.KeyValueList, {
            keyprompt: "Enter Key",
            valueprompt: "Enter Value",
            displayvaluefirst: "false",
            allowhtml: "false",
            values: JSON.stringify([])
          }), getFieldTypeGalleryComponent("Memo", "This is a memo", FieldType.Memo, {
            numberofrows: "10",
            maxcharacters: "100",
            showcountdown: "true",
            allowhtml: "true"
          }), getFieldTypeGalleryComponent("MonthDay", "7/4", FieldType.MonthDay, {}), getFieldTypeGalleryComponent("MultiSelect", "pizza", FieldType.MultiSelect, {
            repeatColumns: "4",
            repeatDirection: "Horizontal",
            enhancedselection: "false",
            values: '[{"value": "pizza", "text": "Pizza"}, {"value": "sub", "text": "Sub"}, {"value": "bagel", "text": "Bagel"}]'
          }), getFieldTypeGalleryComponent("Person", '{ "value": "996c8b72-c255-40e6-bb98-b1d5cf345f3b", "text": "Admin Admin" }', FieldType.Person, {
            includeBusinesses: "false",
            EnableSelfSelection: "True"
          }), getFieldTypeGalleryComponent("PhoneNumber", "(321) 456-7890", FieldType.PhoneNumber, {}), getFieldTypeGalleryComponent("Rating", '{"value":3,"maxValue":5}', FieldType.Rating, {
            max: "5"
          }), getFieldTypeGalleryComponent("Schedule", "2", FieldType.Schedule, {}), getFieldTypeGalleryComponent("Schedules", "2", FieldType.Schedules, {}), getFieldTypeGalleryComponent("SingleSelect", "pizza", FieldType.SingleSelect, {
            repeatColumns: "4",
            fieldtype: "rb",
            values: '[{"value": "pizza", "text": "Pizza"}, {"value": "sub", "text": "Sub"}, {"value": "bagel", "text": "Bagel"}]'
          }), getFieldTypeGalleryComponent("SSN", "123456789", FieldType.Ssn, {}), getFieldTypeGalleryComponent("Text", "Hello", FieldType.Text, {
            ispassword: "false",
            maxcharacters: "10",
            showcountdown: "true"
          }), getFieldTypeGalleryComponent("Time", "13:15:00", FieldType.Time, {}), getFieldTypeGalleryComponent("URL Link", "https://rockrms.com", FieldType.UrlLink, {
            ShouldRequireTrailingForwardSlash: "false",
            ShouldAlwaysShowCondensed: "false"
          })];
          galleries.sort((a, b) => {
            if (a < b) {
              return -1;
            } else if (a > b) {
              return 1;
            } else {
              return 0;
            }
          });
          return (_ctx, _cache) => {
            return openBlock(), createBlock(unref(Block), {
              title: "Obsidian Field Type Gallery"
            }, {
              default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(galleries, gallery => {
                return createElementVNode("div", null, [createVNode(unref(script$1), {
                  field: gallery
                }, null, 8, ["field"])]);
              }), 64))]),
              _: 1
            });
          };
        }
      }));

      script.__file = "src/Example/fieldTypeGallery.obs";

    })
  };
}));
//# sourceMappingURL=fieldTypeGallery.obs.js.map
