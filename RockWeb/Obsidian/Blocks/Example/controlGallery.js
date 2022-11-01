System.register(["vue", "../../Controls/fieldFilterEditor", "../../Controls/attributeValuesContainer", "../../Elements/textBox", "../../Elements/emailBox", "../../Elements/currencyBox", "../../Elements/datePicker", "../../Elements/dateRangePicker", "../../Elements/dateTimePicker", "../../Elements/listBox", "../../Elements/birthdayPicker", "../../Elements/numberUpDown", "../../Controls/addressControl", "../../Elements/inlineSwitch", "../../Elements/switch", "../../Elements/toggle", "../../Elements/itemsWithPreAndPostHtml", "../../Elements/staticFormControl", "../../Elements/progressTracker", "../../Controls/rockForm", "../../Elements/rockButton", "../../Elements/radioButtonList", "../../Elements/dropDownList", "../../Controls/dialog", "../../Elements/inlineCheckBox", "../../Elements/checkBox", "../../Elements/phoneNumberBox", "../../Elements/helpBlock", "../../Elements/datePartsPicker", "../../Elements/colorPicker", "../../Elements/numberBox", "../../Elements/numberRangeBox", "../../Elements/genderDropDownList", "../../Elements/socialSecurityNumberBox", "../../Elements/timePicker", "../../Elements/checkBoxList", "../../Elements/rating", "../../Elements/fullscreen", "../../Controls/panel", "../../Controls/personPicker", "../../Elements/fileUploader", "../../Elements/imageUploader", "../../Controls/slidingDateRangePicker", "../../Services/number", "../../Fields/index", "../../Util/guid", "../../Services/slidingDateRange", "../../Controls/flowNodeDiagram"], function (exports_1, context_1) {
    "use strict";
    var vue_1, fieldFilterEditor_1, attributeValuesContainer_1, textBox_1, emailBox_1, currencyBox_1, datePicker_1, dateRangePicker_1, dateTimePicker_1, listBox_1, birthdayPicker_1, numberUpDown_1, addressControl_1, inlineSwitch_1, switch_1, toggle_1, itemsWithPreAndPostHtml_1, staticFormControl_1, progressTracker_1, rockForm_1, rockButton_1, radioButtonList_1, dropDownList_1, dialog_1, inlineCheckBox_1, checkBox_1, phoneNumberBox_1, helpBlock_1, datePartsPicker_1, colorPicker_1, numberBox_1, numberRangeBox_1, genderDropDownList_1, socialSecurityNumberBox_1, timePicker_1, checkBoxList_1, rating_1, fullscreen_1, panel_1, personPicker_1, fileUploader_1, imageUploader_1, slidingDateRangePicker_1, number_1, guid_1, slidingDateRange_1, flowNodeDiagram_1, GalleryAndResult, attributeValuesContainerGallery, filterRules, phoneNumberBoxGallery, helpBlockGallery, dropDownListGallery, radioButtonListGallery, checkBoxGallery, inlineCheckBoxGallery, dialogGallery, formRulesGallery, checkBoxListGallery, listBoxGallery, datePickerGallery, dateRangePickerGallery, dateTimePickerGallery, datePartsPickerGallery, textBoxGallery, colorPickerGallery, numberBoxGallery, numberRangeBoxGallery, genderDropDownListGallery, socialSecurityNumberBoxGallery, timePickerGallery, ratingGallery, switchGallery, inlineSwitchGallery, currencyBoxGallery, emailBoxGallery, numberUpDownGallery, staticFormControlGallery, addressControlGallery, toggleGallery, progressTrackerGallery, itemsWithPreAndPostHtmlGallery, fullscreenGallery, panelGallery, personPickerGallery, fileUploaderGallery, imageUploaderGallery, slidingDateRangePickerGallery, flowNodeDiagram, galleryComponents, galleryTemplate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (fieldFilterEditor_1_1) {
                fieldFilterEditor_1 = fieldFilterEditor_1_1;
            },
            function (attributeValuesContainer_1_1) {
                attributeValuesContainer_1 = attributeValuesContainer_1_1;
            },
            function (textBox_1_1) {
                textBox_1 = textBox_1_1;
            },
            function (emailBox_1_1) {
                emailBox_1 = emailBox_1_1;
            },
            function (currencyBox_1_1) {
                currencyBox_1 = currencyBox_1_1;
            },
            function (datePicker_1_1) {
                datePicker_1 = datePicker_1_1;
            },
            function (dateRangePicker_1_1) {
                dateRangePicker_1 = dateRangePicker_1_1;
            },
            function (dateTimePicker_1_1) {
                dateTimePicker_1 = dateTimePicker_1_1;
            },
            function (listBox_1_1) {
                listBox_1 = listBox_1_1;
            },
            function (birthdayPicker_1_1) {
                birthdayPicker_1 = birthdayPicker_1_1;
            },
            function (numberUpDown_1_1) {
                numberUpDown_1 = numberUpDown_1_1;
            },
            function (addressControl_1_1) {
                addressControl_1 = addressControl_1_1;
            },
            function (inlineSwitch_1_1) {
                inlineSwitch_1 = inlineSwitch_1_1;
            },
            function (switch_1_1) {
                switch_1 = switch_1_1;
            },
            function (toggle_1_1) {
                toggle_1 = toggle_1_1;
            },
            function (itemsWithPreAndPostHtml_1_1) {
                itemsWithPreAndPostHtml_1 = itemsWithPreAndPostHtml_1_1;
            },
            function (staticFormControl_1_1) {
                staticFormControl_1 = staticFormControl_1_1;
            },
            function (progressTracker_1_1) {
                progressTracker_1 = progressTracker_1_1;
            },
            function (rockForm_1_1) {
                rockForm_1 = rockForm_1_1;
            },
            function (rockButton_1_1) {
                rockButton_1 = rockButton_1_1;
            },
            function (radioButtonList_1_1) {
                radioButtonList_1 = radioButtonList_1_1;
            },
            function (dropDownList_1_1) {
                dropDownList_1 = dropDownList_1_1;
            },
            function (dialog_1_1) {
                dialog_1 = dialog_1_1;
            },
            function (inlineCheckBox_1_1) {
                inlineCheckBox_1 = inlineCheckBox_1_1;
            },
            function (checkBox_1_1) {
                checkBox_1 = checkBox_1_1;
            },
            function (phoneNumberBox_1_1) {
                phoneNumberBox_1 = phoneNumberBox_1_1;
            },
            function (helpBlock_1_1) {
                helpBlock_1 = helpBlock_1_1;
            },
            function (datePartsPicker_1_1) {
                datePartsPicker_1 = datePartsPicker_1_1;
            },
            function (colorPicker_1_1) {
                colorPicker_1 = colorPicker_1_1;
            },
            function (numberBox_1_1) {
                numberBox_1 = numberBox_1_1;
            },
            function (numberRangeBox_1_1) {
                numberRangeBox_1 = numberRangeBox_1_1;
            },
            function (genderDropDownList_1_1) {
                genderDropDownList_1 = genderDropDownList_1_1;
            },
            function (socialSecurityNumberBox_1_1) {
                socialSecurityNumberBox_1 = socialSecurityNumberBox_1_1;
            },
            function (timePicker_1_1) {
                timePicker_1 = timePicker_1_1;
            },
            function (checkBoxList_1_1) {
                checkBoxList_1 = checkBoxList_1_1;
            },
            function (rating_1_1) {
                rating_1 = rating_1_1;
            },
            function (fullscreen_1_1) {
                fullscreen_1 = fullscreen_1_1;
            },
            function (panel_1_1) {
                panel_1 = panel_1_1;
            },
            function (personPicker_1_1) {
                personPicker_1 = personPicker_1_1;
            },
            function (fileUploader_1_1) {
                fileUploader_1 = fileUploader_1_1;
            },
            function (imageUploader_1_1) {
                imageUploader_1 = imageUploader_1_1;
            },
            function (slidingDateRangePicker_1_1) {
                slidingDateRangePicker_1 = slidingDateRangePicker_1_1;
            },
            function (number_1_1) {
                number_1 = number_1_1;
            },
            function (_1) {
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (slidingDateRange_1_1) {
                slidingDateRange_1 = slidingDateRange_1_1;
            },
            function (flowNodeDiagram_1_1) {
                flowNodeDiagram_1 = flowNodeDiagram_1_1;
            }
        ],
        execute: function () {
            GalleryAndResult = vue_1.defineComponent({
                name: "GalleryAndResult",
                components: {
                    Panel: panel_1.default
                },
                props: {
                    splitWidth: {
                        type: Boolean,
                        default: true
                    }
                },
                template: `
<Panel :hasCollapse="true">
    <template #title><slot name="header" /></template>
    <div v-if="splitWidth" class="row">
        <div class="col-md-6">
            <slot name="gallery" />
        </div>
        <div class="col-md-6">
            <slot name="result" />
        </div>
    </div>
    <template v-else>
        <div>
            <slot name="gallery" />
        </div>
        <div>
            <slot name="result" />
        </div>
    </template>
</Panel>`
            });
            attributeValuesContainerGallery = vue_1.defineComponent({
                name: "AttributeValuesContainerGallery",
                components: {
                    GalleryAndResult,
                    AttributeValuesContainer: attributeValuesContainer_1.default,
                    CheckBox: checkBox_1.default,
                    NumberBox: numberBox_1.default,
                    TextBox: textBox_1.default
                },
                setup() {
                    const isEditMode = vue_1.ref(false);
                    const showEmptyValues = vue_1.ref(true);
                    const showAbbreviatedName = vue_1.ref(false);
                    const displayAsTabs = vue_1.ref(false);
                    const showCategoryLabel = vue_1.ref(true);
                    const numberOfColumns = vue_1.ref(2);
                    const entityName = vue_1.ref("Foo Entity");
                    const categories = [{
                            guid: guid_1.newGuid(),
                            name: "Cat A",
                            order: 1
                        },
                        {
                            guid: guid_1.newGuid(),
                            name: "Cat B",
                            order: 2
                        },
                        {
                            guid: guid_1.newGuid(),
                            name: "Cat C",
                            order: 3
                        }];
                    const attributes = vue_1.ref({
                        text: {
                            attributeGuid: guid_1.newGuid(),
                            categories: [categories[0]],
                            description: "A text attribute.",
                            fieldTypeGuid: "9C204CD0-1233-41C5-818A-C5DA439445AA",
                            isRequired: false,
                            key: "text",
                            name: "Text Attribute",
                            order: 2,
                            configurationValues: {}
                        },
                        color: {
                            attributeGuid: guid_1.newGuid(),
                            categories: [categories[0], categories[2]],
                            description: "Favorite color? Or just a good one?",
                            fieldTypeGuid: "D747E6AE-C383-4E22-8846-71518E3DD06F",
                            isRequired: false,
                            key: "color",
                            name: "Random Color",
                            order: 4,
                            configurationValues: {}
                        },
                        bool: {
                            attributeGuid: guid_1.newGuid(),
                            categories: [categories[2]],
                            description: "Are you foo?",
                            fieldTypeGuid: "1EDAFDED-DFE6-4334-B019-6EECBA89E05A",
                            isRequired: false,
                            key: "bool",
                            name: "Boolean Attribute",
                            order: 3,
                            configurationValues: {}
                        },
                        textagain: {
                            attributeGuid: guid_1.newGuid(),
                            categories: [categories[1]],
                            description: "Another text attribute.",
                            fieldTypeGuid: "9C204CD0-1233-41C5-818A-C5DA439445AA",
                            isRequired: false,
                            key: "textAgain",
                            name: "Some Text",
                            order: 5,
                            configurationValues: {}
                        },
                        single: {
                            attributeGuid: guid_1.newGuid(),
                            categories: [],
                            description: "A single select attribute.",
                            fieldTypeGuid: "7525C4CB-EE6B-41D4-9B64-A08048D5A5C0",
                            isRequired: false,
                            key: "single",
                            name: "Single Select",
                            order: 1,
                            configurationValues: {
                                values: JSON.stringify([{ value: "1", text: "One" }, { value: "2", text: "Two" }, { value: "3", text: "Three" }])
                            }
                        }
                    });
                    const attributeValues = vue_1.ref({
                        "text": "Default text value",
                        "color": "#336699",
                        "bool": "N",
                        "textAgain": "",
                        single: "1"
                    });
                    return {
                        attributes,
                        attributeValues,
                        isEditMode,
                        showAbbreviatedName,
                        showEmptyValues,
                        displayAsTabs,
                        showCategoryLabel,
                        numberOfColumns,
                        entityName
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        AttributeValuesContainer
    </template>
    <template #gallery>
        <div class="row">
            <CheckBox formGroupClasses="col-sm-6" v-model="isEditMode" label="Edit Mode" text="Enable" help="Default: false" />
            <CheckBox formGroupClasses="col-sm-6" v-model="showAbbreviatedName" label="Abbreviated Name" text="Show" help="Default: false" />
        </div>
        <div class="row">
            <CheckBox formGroupClasses="col-sm-6" v-model="showEmptyValues" label="Empty Values" text="Show" help="Default: true; Only applies if not in edit mode" />
            <CheckBox formGroupClasses="col-sm-6" v-model="displayAsTabs" label="Category Tabs" text="Show" help="Default: false; If any attributes are in a category, display each category as a tab. Not applicable while editing." />
        </div>
        <CheckBox v-model="showCategoryLabel" label="Category Labels" text="Show" help="Default: false; Only applies when not displaying tabs." />
        <div class="row">
            <NumberBox formGroupClasses="col-sm-6" v-model="numberOfColumns" label="Number of Columns" help="Default: 1; Only applies when not displaying tabs." />
            <TextBox formGroupClasses="col-sm-6" v-model="entityName" label="Entity Type" help="Default: ''; Appears in the heading when category labels are showing." />
        </div>
    </template>
    <template #result>
        <AttributeValuesContainer
            v-model="attributeValues"
            :attributes="attributes"
            :isEditMode="isEditMode"
            :showAbbreviatedName="showAbbreviatedName"
            :showEmptyValues="showEmptyValues"
            :displayAsTabs="displayAsTabs"
            :showCategoryLabel="showCategoryLabel"
            :numberOfColumns="numberOfColumns"
            :entityTypeName="entityName"
        />
    </template>
</GalleryAndResult>`
            });
            filterRules = vue_1.defineComponent({
                name: "FilterRules",
                components: {
                    Panel: panel_1.default,
                    FieldVisibilityRulesEditor: fieldFilterEditor_1.default,
                    CheckBox: checkBox_1.default,
                    TextBox: textBox_1.default
                },
                setup() {
                    const sourcesText = vue_1.ref(`[
            {
                "guid": "2a50d342-3a0b-4da3-83c1-25839c75615c",
                "type": 0,
                "attribute": {
                    "attributeGuid": "4eb1eb34-988b-4212-8c93-844fae61b43c",
                    "fieldTypeGuid": "9C204CD0-1233-41C5-818A-C5DA439445AA",
                    "name": "Text Field",
                    "description": "",
                    "configurationValues": {
                        "maxcharacters": "10"
                    }
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c0",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b0",
                    "fieldTypeGuid": "A75DFC58-7A1B-4799-BF31-451B2BBE38FF",
                    "name": "Integer Field",
                    "description": "",
                    "configurationValues": {}
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c1",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b1",
                    "fieldTypeGuid": "D747E6AE-C383-4E22-8846-71518E3DD06F",
                    "name": "Color",
                    "description": "",
                    "configurationValues": {
                        "selectiontype": "Color Picker"
                }
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c2",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b2",
                    "fieldTypeGuid": "3EE69CBC-35CE-4496-88CC-8327A447603F",
                    "name": "Currency",
                    "description": "",
                    "configurationValues": {}
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c3",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b3",
                    "fieldTypeGuid": "9C7D431C-875C-4792-9E76-93F3A32BB850",
                    "name": "Date Range",
                    "description": "",
                    "configurationValues": {}
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c4",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b4",
                    "fieldTypeGuid": "7EDFA2DE-FDD3-4AC1-B356-1F5BFC231DAE",
                    "name": "Day of Week",
                    "description": "",
                    "configurationValues": {}
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c5",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b5",
                    "fieldTypeGuid": "3D045CAE-EA72-4A04-B7BE-7FD1D6214217",
                    "name": "Email",
                    "description": "",
                    "configurationValues": {}
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c6",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b6",
                    "fieldTypeGuid": "2E28779B-4C76-4142-AE8D-49EA31DDB503",
                    "name": "Gender",
                    "description": "",
                    "configurationValues": {
                        "hideUnknownGender": "True"
                    }
                }
            },
            {
                "guid": "6dbb47c4-5816-4110-8a52-92880d4d05c7",
                "type": 0,
                "attribute": {
                    "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b7",
                    "fieldTypeGuid": "C28C7BF3-A552-4D77-9408-DEDCF760CED0",
                    "name": "Memo",
                    "description": "",
                    "configurationValues": {
                        "numberofrows": "4",
                        "allowhtml": "True",
                        "maxcharacters": "5",
                        "showcountdown": "True"
                    }
                }
            }
        ]`);
                    const sources = vue_1.computed(() => {
                        return JSON.parse(sourcesText.value);
                    });
                    const prefilled = () => ({
                        guid: guid_1.newGuid(),
                        expressionType: 4,
                        "rules": [
                            {
                                "guid": "a81c3ef9-72a9-476b-8b88-b52f513d92e6",
                                "comparisonType": 128,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b0",
                                "value": "50"
                            },
                            {
                                "guid": "74d34117-4cc6-4cea-92c5-8297aa693ba5",
                                "comparisonType": 2,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b1",
                                "value": "BlanchedAlmond"
                            },
                            {
                                "guid": "0fa2b6ea-bc86-4fae-b0da-02e48fed8d96",
                                "comparisonType": 8,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b5",
                                "value": "@gmail.com"
                            },
                            {
                                "guid": "434107e6-6c0c-4698-90ef-d615b1c2de4b",
                                "comparisonType": 2,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b6",
                                "value": "2"
                            },
                            {
                                "guid": "706179b9-7518-4a74-8e0f-8a48016aec04",
                                "comparisonType": 16,
                                sourceType: 0,
                                "attributeGuid": "4eb1eb34-988b-4212-8c93-844fae61b43c",
                                "value": "text"
                            },
                            {
                                "guid": "4564eac2-15d9-48d9-b618-563523285af0",
                                "comparisonType": 512,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b2",
                                "value": "999"
                            },
                            {
                                "guid": "e6c56d4c-7f63-44f9-8f07-1ea0860b605d",
                                "comparisonType": 1,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b3",
                                "value": "2022-02-01,2022-02-28"
                            },
                            {
                                "guid": "0c27507f-9fb7-4f37-8026-70933bbf1398",
                                "comparisonType": 0,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b4",
                                "value": "3"
                            },
                            {
                                "guid": "4f68fa2c-0942-4084-bb4d-3c045cef4551",
                                "comparisonType": 8,
                                sourceType: 0,
                                "attributeGuid": "c41817d8-be26-460c-9f89-a7059ae6a9b7",
                                "value": "more text than I want to deal with...."
                            }
                        ]
                    });
                    const clean = () => ({
                        guid: guid_1.newGuid(),
                        expressionType: 1,
                        rules: []
                    });
                    const usePrefilled = vue_1.ref(false);
                    const value = vue_1.ref(clean());
                    vue_1.watch(usePrefilled, () => {
                        value.value = usePrefilled.value ? prefilled() : clean();
                    });
                    const title = vue_1.ref("TEST PROPERTY");
                    const json = vue_1.computed(() => {
                        return JSON.stringify(value.value, null, 4);
                    });
                    return { json, sourcesText, sources, value, title, usePrefilled };
                },
                template: `
<Panel :has-collapse="true" title="Form Field Filter">
    <template #drawer>
        <TextBox v-model="title" label="Attribute Name" />
        <TextBox v-model="sourcesText" label="Sources JSON" text-mode="multiline" :rows="15" />
        <CheckBox v-model="usePrefilled" text="Use prefilled data" />
    </template>
    <div>
        <FieldVisibilityRulesEditor :sources="sources" v-model="value" :title="title" />
    </div>
    <pre class="mt-3">{{json}}</pre>
</Panel>`
            });
            phoneNumberBoxGallery = vue_1.defineComponent({
                name: "PhoneNumberBoxGallery",
                components: {
                    GalleryAndResult,
                    PhoneNumberBox: phoneNumberBox_1.default
                },
                data() {
                    return {
                        phoneNumber: "8005551234"
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        PhoneNumberBox
    </template>
    <template #gallery>
        <PhoneNumberBox label="Phone 1" v-model="phoneNumber" />
        <PhoneNumberBox label="Phone 2" v-model="phoneNumber" />
    </template>
    <template #result>
        {{phoneNumber}}
    </template>
</GalleryAndResult>`
            });
            helpBlockGallery = vue_1.defineComponent({
                name: "HelpBlockGallery",
                components: {
                    GalleryAndResult,
                    HelpBlock: helpBlock_1.default
                },
                template: `
<GalleryAndResult>
    <template #header>
        HelpBlock
    </template>
    <template #gallery>
        <HelpBlock text="This is some helpful text that explains something." />
    </template>
</GalleryAndResult>`
            });
            dropDownListGallery = vue_1.defineComponent({
                name: "DropDownListGallery",
                components: {
                    GalleryAndResult,
                    DropDownList: dropDownList_1.default
                },
                data() {
                    return {
                        value: "a",
                        options: [
                            { text: "A Text", value: "a" },
                            { text: "B Text", value: "b" },
                            { text: "C Text", value: "c" },
                            { text: "D Text", value: "d" }
                        ]
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        DropDownList
    </template>
    <template #gallery>
        <DropDownList label="Select 1" v-model="value" :options="options" />
        <DropDownList label="Select 2" v-model="value" :options="options" />
        <DropDownList label="Enhanced Select 1" v-model="value" :options="options" enhanceForLongLists />
        <DropDownList label="Enhanced Select 2" v-model="value" :options="options" enhanceForLongLists />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            radioButtonListGallery = vue_1.defineComponent({
                name: "RadioButtonListGallery",
                components: {
                    GalleryAndResult,
                    RadioButtonList: radioButtonList_1.default,
                    Toggle: toggle_1.default,
                    NumberUpDown: numberUpDown_1.default
                },
                data() {
                    return {
                        value: "a",
                        isHorizontal: true,
                        repeatColumns: 0,
                        options: [
                            { text: "A Text", value: "a" },
                            { text: "B Text", value: "b" },
                            { text: "C Text", value: "c" },
                            { text: "D Text", value: "d" },
                            { text: "E Text", value: "e" },
                            { text: "F Text", value: "f" },
                            { text: "G Text", value: "g" }
                        ]
                    };
                },
                template: `
<GalleryAndResult :splitWidth="false">
    <template #header>
        RadioButtonList
    </template>
    <template #gallery>
        <NumberUpDown label="Horizontal Columns" v-model="repeatColumns" :min="0" />
        <Toggle label="Horizontal" v-model="isHorizontal" />
        <RadioButtonList label="Radio List 1" v-model="value" :options="options" :horizontal="isHorizontal" :repeatColumns="repeatColumns" />
        <RadioButtonList label="Radio List 2" v-model="value" :options="options" />
    </template>
    <template #result>
        Value: {{value}}
    </template>
</GalleryAndResult>`
            });
            checkBoxGallery = vue_1.defineComponent({
                name: "CheckBoxGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    Toggle: toggle_1.default
                },
                data() {
                    return {
                        isChecked: false,
                        inline: true
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        CheckBox
    </template>
    <template #gallery>
        <CheckBox label="Check 1" v-model="isChecked" />
        <CheckBox label="Check 2" v-model="isChecked" />
    </template>
    <template #result>
        {{isChecked}}
    </template>
</GalleryAndResult>`
            });
            inlineCheckBoxGallery = vue_1.defineComponent({
                name: "InlineCheckBoxGallery",
                components: {
                    GalleryAndResult,
                    InlineCheckBox: inlineCheckBox_1.default
                },
                data() {
                    return {
                        isChecked: false,
                        inline: true
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        InlineCheckBox
    </template>
    <template #gallery>
        <InlineCheckBox label="Check 1" v-model="isChecked" />
        <InlineCheckBox label="Check 2" v-model="isChecked" />
    </template>
    <template #result>
        {{isChecked}}
    </template>
</GalleryAndResult>`
            });
            dialogGallery = vue_1.defineComponent({
                name: "DialogGallery",
                components: {
                    GalleryAndResult,
                    RockButton: rockButton_1.default,
                    Dialog: dialog_1.default,
                    CheckBox: checkBox_1.default
                },
                data() {
                    return {
                        isDialogVisible: false,
                        isDismissible: false
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Dialog
    </template>
    <template #gallery>
        <RockButton @click="isDialogVisible = true">Show</RockButton>
        <CheckBox label="Dismissible" v-model="isDismissible" />
    </template>
    <template #result>
        <Dialog v-model="isDialogVisible" :dismissible="isDismissible">
            <template #header>
                <h4>Romans 11:33-36</h4>
            </template>
            <template #default>
                <p>
                    Oh, the depth of the riches<br />
                    and the wisdom and the knowledge of God!<br />
                    How unsearchable his judgments<br />
                    and untraceable his ways!<br />
                    For who has known the mind of the Lord?<br />
                    Or who has been his counselor?<br />
                    And who has ever given to God,<br />
                    that he should be repaid?<br />
                    For from him and through him<br />
                    and to him are all things.<br />
                    To him be the glory forever. Amen.
                </p>
            </template>
            <template #footer>
                <RockButton @click="isDialogVisible = false" btnType="primary">OK</RockButton>
                <RockButton @click="isDialogVisible = false" btnType="default">Cancel</RockButton>
            </template>
        </Dialog>
    </template>
</GalleryAndResult>`
            });
            formRulesGallery = vue_1.defineComponent({
                name: "FormRulesGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    TextBox: textBox_1.default,
                    CurrencyBox: currencyBox_1.default,
                    RockButton: rockButton_1.default
                },
                data() {
                    return {
                        ruleTestCurrency: 1,
                        ruleTestText: "",
                        rules: "required"
                    };
                },
                template: `
<GalleryAndResult :splitWidth="false">
    <template #header>
        Form Rules
    </template>
    <template #gallery>
        <TextBox label="Rules" v-model="rules" help="Try 'required', 'gte:1', 'lt:2', and others. Combine rules like this: 'required|lt:7|gt:6'" />
        <hr />
        <RockForm>
            <TextBox label="Text" v-model="ruleTestText" :rules="rules" />
            <CurrencyBox label="Currency" v-model="ruleTestCurrency" :rules="rules" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
</GalleryAndResult>`
            });
            checkBoxListGallery = vue_1.defineComponent({
                name: "CheckBoxListGallery",
                components: {
                    GalleryAndResult,
                    CheckBoxList: checkBoxList_1.default
                },
                data() {
                    return {
                        options: [
                            { value: "red", text: "Red" },
                            { value: "green", text: "Green" },
                            { value: "blue", text: "Blue" }
                        ],
                        items: ["green"]
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        CheckBoxList
    </template>
    <template #gallery>
        <CheckBoxList label="CheckBoxList 1" v-model="items" :options="options" />
        <CheckBoxList label="CheckBoxList 2" v-model="items" :options="options" />
    </template>
    <template #result>
        Items: {{JSON.stringify(items, null, 2)}}
    </template>
</GalleryAndResult>`
            });
            listBoxGallery = vue_1.defineComponent({
                name: "ListBoxGallery",
                components: {
                    GalleryAndResult,
                    ListBox: listBox_1.default
                },
                data() {
                    return {
                        value: ["a"],
                        options: [
                            { text: "A Text", value: "a" },
                            { text: "B Text", value: "b" },
                            { text: "C Text", value: "c" },
                            { text: "D Text", value: "d" }
                        ]
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        ListBox
    </template>
    <template #gallery>
        <ListBox label="Select 1" v-model="value" :options="options" />
        <ListBox label="Select 2" v-model="value" :options="options" />
        <ListBox label="Enhanced Select 1" v-model="value" :options="options" enhanceForLongLists />
        <ListBox label="Enhanced Select 2" v-model="value" :options="options" enhanceForLongLists />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            datePickerGallery = vue_1.defineComponent({
                name: "DatePickerGallery",
                components: {
                    GalleryAndResult,
                    DatePicker: datePicker_1.default
                },
                data() {
                    return {
                        date: null,
                        currentDate: "CURRENT:1"
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        DatePicker
    </template>
    <template #gallery>
        <DatePicker label="Date 1" v-model="date" />
        <DatePicker label="Date 2" v-model="date" />
        <DatePicker label="Current Date 1" v-model="currentDate" displayCurrentOption isCurrentDateOffset />
        <DatePicker label="Current Date 2" v-model="currentDate" displayCurrentOption isCurrentDateOffset />
    </template>
    <template #result>
        Date: {{JSON.stringify(date, null, 2)}}
        <br />
        Current Date: {{JSON.stringify(currentDate, null, 2)}}
    </template>
</GalleryAndResult>`
            });
            dateRangePickerGallery = vue_1.defineComponent({
                name: "DateRangePickerGallery",
                components: {
                    GalleryAndResult,
                    DateRangePicker: dateRangePicker_1.default
                },
                data() {
                    return {
                        date: {}
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        DateRangePicker
    </template>
    <template #gallery>
        <DateRangePicker label="Date Range 1" v-model="date" />
        <DateRangePicker label="Date Range 2" v-model="date" />
    </template>
    <template #result>
        Date: {{JSON.stringify(date, null, 2)}}
    </template>
</GalleryAndResult>`
            });
            dateTimePickerGallery = vue_1.defineComponent({
                name: "DatePickerGallery",
                components: {
                    GalleryAndResult,
                    DateTimePicker: dateTimePicker_1.default
                },
                data() {
                    return {
                        date: null
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        DateTimePicker
    </template>
    <template #gallery>
        <DateTimePicker label="Date 1" v-model="date" />
        <DateTimePicker label="Date 2" v-model="date" />
    </template>
    <template #result>
        Date: {{JSON.stringify(date, null, 2)}}
    </template>
</GalleryAndResult>`
            });
            datePartsPickerGallery = vue_1.defineComponent({
                name: "DatePartsPickerGallery",
                components: {
                    GalleryAndResult,
                    Toggle: toggle_1.default,
                    BirthdayPicker: birthdayPicker_1.default,
                    DatePartsPicker: datePartsPicker_1.default
                },
                data() {
                    return {
                        showYear: true,
                        datePartsModel: {
                            month: 1,
                            day: 1,
                            year: 2020
                        }
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        DatePartsPicker
    </template>
    <template #gallery>
        <Toggle label="Show Year" v-model="showYear" />
        <DatePartsPicker label="DatePartsPicker 1" v-model="datePartsModel" :showYear="showYear" />
        <DatePartsPicker label="DatePartsPicker 2" v-model="datePartsModel" :showYear="showYear" />
    </template>
    <template #result>
        <span>{{datePartsModel.month}} / {{datePartsModel.day}}</span><span v-if="showYear"> / {{datePartsModel.year}}</span>
    </template>
</GalleryAndResult>`
            });
            textBoxGallery = vue_1.defineComponent({
                name: "TextBoxGallery",
                components: {
                    GalleryAndResult,
                    TextBox: textBox_1.default
                },
                data() {
                    return {
                        text: "Some two-way bound text",
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        TextBox
    </template>
    <template #gallery>
        <TextBox label="Text 1" v-model="text" :maxLength="10" showCountDown />
        <TextBox label="Text 2" v-model="text" />
        <TextBox label="Memo" v-model="text" textMode="MultiLine" :rows="10" :maxLength="100" showCountDown />
    </template>
    <template #result>
        {{text}}
    </template>
</GalleryAndResult>`
            });
            colorPickerGallery = vue_1.defineComponent({
                name: "ColorPickerGallery",
                components: {
                    GalleryAndResult,
                    ColorPicker: colorPicker_1.default
                },
                data() {
                    return {
                        value: "#ee7725",
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        ColorPicker
    </template>
    <template #gallery>
        <ColorPicker label="Color" v-model="value" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            numberBoxGallery = vue_1.defineComponent({
                name: "NumberBoxGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    RockButton: rockButton_1.default,
                    TextBox: textBox_1.default,
                    NumberBox: numberBox_1.default
                },
                data() {
                    return {
                        minimumValue: "0",
                        maximumValue: "100",
                        value: 42,
                    };
                },
                computed: {
                    numericMinimumValue() {
                        return number_1.toNumber(this.minimumValue);
                    },
                    numericMaximumValue() {
                        return number_1.toNumber(this.maximumValue);
                    }
                },
                template: `
<GalleryAndResult>
    <template #header>
        NumberBox
    </template>
    <template #gallery>
        <TextBox label="Minimum Value" v-model="minimumValue" />
        <TextBox label="Maximum Value" v-model="maximumValue" />
        <RockForm>
            <NumberBox label="Number" v-model="value" :minimumValue="numericMinimumValue" :maximumValue="numericMaximumValue" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            numberRangeBoxGallery = vue_1.defineComponent({
                name: "NumberRangeBoxGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    RockButton: rockButton_1.default,
                    TextBox: textBox_1.default,
                    NumberRangeBox: numberRangeBox_1.default
                },
                data() {
                    return {
                        value: { lower: 0, upper: 100 },
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        NumberRangeBox
    </template>
    <template #gallery>
        <RockForm>
            <NumberRangeBox label="Number Range" v-model="value" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
    <template #result>
        {{value.lower}} to {{value.upper}}
    </template>
</GalleryAndResult>`
            });
            genderDropDownListGallery = vue_1.defineComponent({
                name: "GenderDropDownListGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    RockButton: rockButton_1.default,
                    TextBox: textBox_1.default,
                    GenderDropDownList: genderDropDownList_1.default
                },
                data() {
                    return {
                        value: "1",
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        GenderDropDownList
    </template>
    <template #gallery>
        <RockForm>
            <GenderDropDownList label="Your Gender" v-model="value" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            socialSecurityNumberBoxGallery = vue_1.defineComponent({
                name: "SocialSecurityNumberBoxGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    RockButton: rockButton_1.default,
                    TextBox: textBox_1.default,
                    SocialSecurityNumberBox: socialSecurityNumberBox_1.default
                },
                data() {
                    return {
                        value: "123-45-6789",
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        SocialSecurityNumberBox
    </template>
    <template #gallery>
        <RockForm>
            <SocialSecurityNumberBox label="SSN" v-model="value" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            timePickerGallery = vue_1.defineComponent({
                name: "TimePickerGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    RockButton: rockButton_1.default,
                    TextBox: textBox_1.default,
                    TimePicker: timePicker_1.default
                },
                data() {
                    return {
                        value: { hour: 14, minute: 15 },
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        TimePicker
    </template>
    <template #gallery>
        <RockForm>
            <TimePicker label="Time" v-model="value" />
            <RockButton btnType="primary" type="submit">Test</RockButton>
        </RockForm>
    </template>
    <template #result>
        {{value.hour}}:{{value.minute}}
    </template>
</GalleryAndResult>`
            });
            ratingGallery = vue_1.defineComponent({
                name: "RatingGallery",
                components: {
                    GalleryAndResult,
                    RockForm: rockForm_1.default,
                    NumberBox: numberBox_1.default,
                    Rating: rating_1.default
                },
                data() {
                    return {
                        value: 3,
                        maximumValue: 5
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Rating
    </template>
    <template #gallery>
        <NumberBox label="Maximum Rating" v-model="maximumValue" />
        <RockForm>
            <Rating label="Time" v-model="value" :maxRating="maximumValue || 5" />
        </RockForm>
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            switchGallery = vue_1.defineComponent({
                name: "SwitchGallery",
                components: {
                    GalleryAndResult,
                    TextBox: textBox_1.default,
                    Switch: switch_1.default
                },
                data() {
                    return {
                        text: "",
                        isChecked: false
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Switch
    </template>
    <template #gallery>
        <TextBox label="Text" v-model="text" />

        <Switch label="Switch 1" v-model="isChecked" :text="text" />
        <Switch label="Switch 2" v-model="isChecked" :text="text" />
    </template>
    <template #result>
        {{isChecked}}
    </template>
</GalleryAndResult>`
            });
            inlineSwitchGallery = vue_1.defineComponent({
                name: "InlineSwitchGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    InlineSwitch: inlineSwitch_1.default
                },
                data() {
                    return {
                        isBold: false,
                        isChecked: false
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        InlineSwitch
    </template>
    <template #gallery>
        <CheckBox label="Is Bold" v-model="isBold" />

        <InlineSwitch label="Inline Switch 1" v-model="isChecked" :isBold="isBold" />
        <InlineSwitch label="Inline Switch 2" v-model="isChecked" :isBold="isBold" />
    </template>
    <template #result>
        {{isChecked}}
    </template>
</GalleryAndResult>`
            });
            currencyBoxGallery = vue_1.defineComponent({
                name: "CurrencyBoxGallery",
                components: {
                    GalleryAndResult,
                    CurrencyBox: currencyBox_1.default
                },
                data() {
                    return {
                        value: 1.23
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        CurrencyBox
    </template>
    <template #gallery>
        <CurrencyBox label="Currency 1" v-model="value" />
        <CurrencyBox label="Currency 2" v-model="value" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            emailBoxGallery = vue_1.defineComponent({
                name: "EmailBoxGallery",
                components: {
                    GalleryAndResult,
                    EmailBox: emailBox_1.default
                },
                data() {
                    return {
                        value: "ted@rocksolidchurchdemo.com"
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        EmailBox
    </template>
    <template #gallery>
        <EmailBox label="EmailBox 1" v-model="value" />
        <EmailBox label="EmailBox 2" v-model="value" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            numberUpDownGallery = vue_1.defineComponent({
                name: "NumberUpDownGallery",
                components: {
                    GalleryAndResult,
                    NumberUpDown: numberUpDown_1.default
                },
                data() {
                    return {
                        value: 1
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        NumberUpDown
    </template>
    <template #gallery>
        <NumberUpDown label="NumberUpDown 1" v-model="value" />
        <NumberUpDown label="NumberUpDown 2" v-model="value" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            staticFormControlGallery = vue_1.defineComponent({
                name: "StaticFormControlGallery",
                components: {
                    GalleryAndResult,
                    StaticFormControl: staticFormControl_1.default
                },
                data() {
                    return {
                        value: "This is some text"
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        StaticFormControl
    </template>
    <template #gallery>
        <StaticFormControl label="StaticFormControl 1" v-model="value" />
        <StaticFormControl label="StaticFormControl 2" v-model="value" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            addressControlGallery = vue_1.defineComponent({
                name: "AddressControlGallery",
                components: {
                    GalleryAndResult,
                    AddressControl: addressControl_1.default
                },
                data() {
                    return {
                        value: addressControl_1.getDefaultAddressControlModel()
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        AddressControl
    </template>
    <template #gallery>
        <AddressControl label="Address 1" v-model="value" />
        <AddressControl label="Address 2" v-model="value" />
    </template>
    <template #result>
        <pre>{{JSON.stringify(value, null, 2)}}</pre>
    </template>
</GalleryAndResult>`
            });
            toggleGallery = vue_1.defineComponent({
                name: "ToggleGallery",
                components: {
                    GalleryAndResult,
                    TextBox: textBox_1.default,
                    DropDownList: dropDownList_1.default,
                    Toggle: toggle_1.default
                },
                data() {
                    return {
                        trueText: "On",
                        falseText: "Off",
                        btnSize: "",
                        sizeOptions: [
                            { value: "lg", text: "Large" },
                            { value: "md", text: "Medium" },
                            { value: "sm", text: "Small" },
                            { value: "xs", text: "Extra Small" },
                        ],
                        value: false
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Toggle
    </template>
    <template #gallery>
        <TextBox label="True Text" v-model="trueText" />
        <TextBox label="False Text" v-model="falseText" />
        <DropDownList label="Button Size" v-model="btnSize" :options="sizeOptions" />

       <Toggle label="Toggle 1" v-model="value" :trueText="trueText" :falseText="falseText" :btnSize="btnSize" />
       <Toggle label="Toggle 2" v-model="value" :trueText="trueText" :falseText="falseText" :btnSize="btnSize" />
    </template>
    <template #result>
        {{value}}
    </template>
</GalleryAndResult>`
            });
            progressTrackerGallery = vue_1.defineComponent({
                name: "ProgressTrackerGallery",
                components: {
                    GalleryAndResult,
                    NumberUpDown: numberUpDown_1.default,
                    ProgressTracker: progressTracker_1.default
                },
                data() {
                    return {
                        value: 0,
                        items: [
                            { key: "S", title: "Start", subtitle: "The beginning" },
                            { key: "1", title: "Step 1", subtitle: "The first step" },
                            { key: "2", title: "Step 2", subtitle: "The second step" },
                            { key: "3", title: "Step 3", subtitle: "The third step" },
                            { key: "4", title: "Step 4", subtitle: "The fourth step" },
                            { key: "5", title: "Step 5", subtitle: "The fifth step" },
                            { key: "6", title: "Step 6", subtitle: "The sixth step" },
                            { key: "7", title: "Step 7", subtitle: "The seventh step" },
                            { key: "8", title: "Step 8", subtitle: "The eighth step" },
                            { key: "F", title: "Finish", subtitle: "The finish" }
                        ]
                    };
                },
                template: `
<GalleryAndResult :splitWidth="false">
    <template #header>
        ProgressTracker
    </template>
    <template #gallery>
        <NumberUpDown label="Index" v-model="value" :min="0" :max="100" />
    </template>
    <template #result>
        <ProgressTracker :items="items" :currentIndex="value" />
    </template>
</GalleryAndResult>`
            });
            itemsWithPreAndPostHtmlGallery = vue_1.defineComponent({
                name: "ItemsWithPreAndPostHtmlGallery",
                components: {
                    GalleryAndResult,
                    TextBox: textBox_1.default,
                    ItemsWithPreAndPostHtml: itemsWithPreAndPostHtml_1.default
                },
                data() {
                    return {
                        value: [
                            { preHtml: '<div class="row"><div class="col-sm-6">', postHtml: "</div>", slotName: "item1" },
                            { preHtml: '<div class="col-sm-6">', postHtml: "</div></div>", slotName: "item2" }
                        ],
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        ItemsWithPreAndPostHtml
    </template>
    <template #gallery>
        <TextBox label="Item 1 - Pre Html" v-model="value[0].preHtml" />
        <TextBox label="Item 1 - Post Html" v-model="value[0].postHtml" />
        <TextBox label="Item 2 - Pre Html" v-model="value[1].preHtml" />
        <TextBox label="Item 2 - Post Html" v-model="value[1].postHtml" />
    </template>
    <template #result>
        <ItemsWithPreAndPostHtml :items="value">
            <template #item1>
                <div style="background-color: #fcc; padding: 5px;">This is item 1</div>
            </template>
            <template #item2>
                <div style="background-color: #ccf; padding: 5px;">This is item 2</div>
            </template>
        </ItemsWithPreAndPostHtml>
    </template>
</GalleryAndResult>`
            });
            fullscreenGallery = vue_1.defineComponent({
                name: "FullscreenGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    Fullscreen: fullscreen_1.default
                },
                data() {
                    return {
                        colors: Array.apply(0, Array(256)).map((_, index) => `rgb(${index}, ${index}, ${index})`),
                        pageOnly: true,
                        value: false
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Fullscreen
    </template>
    <template #gallery>
        <CheckBox v-model="pageOnly" label="Is Page Only" />

        <Fullscreen v-model="value" :isPageOnly="pageOnly">
            <CheckBox v-model="value" label="Fullscreen" />
            <div v-for="c in colors" :style="{ background: c, height: '5px' }"></div>
        </Fullscreen>
    </template>
    <template #result>
    </template>
</GalleryAndResult>`
            });
            panelGallery = vue_1.defineComponent({
                name: "PanelGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    Panel: panel_1.default
                },
                data() {
                    return {
                        colors: Array.apply(0, Array(256)).map((_, index) => `rgb(${index}, ${index}, ${index})`),
                        collapsableValue: true,
                        drawerValue: false,
                        hasAside: false,
                        hasDrawer: true,
                        hasFullscreen: false,
                        isFullscreenPageOnly: true,
                        value: true
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Panel
    </template>
    <template #gallery>
        <CheckBox v-model="collapsableValue" label="Collapsable" />
        <CheckBox v-model="value" label="Panel Open" />
        <CheckBox v-model="hasDrawer" label="Has Drawer" />
        <CheckBox v-model="hasAside" label="Has Aside" />
        <CheckBox v-model="hasFullscreen" label="Has Fullscreen" />
        <CheckBox v-model="isFullscreenPageOnly" label="Page Only Fullscreen" />

        <Panel v-model="value" v-model:isDrawerOpen="drawerValue" :hasCollapse="collapsableValue" :hasFullscreen="hasFullscreen" :isFullscreenPageOnly="isFullscreenPageOnly" title="Panel Title">
            <template v-if="hasDrawer" #drawer>
                <div style="text-align: center;">Drawer Content</div>
            </template>

            <template v-if="hasAside" #titleAside>
                <span class="label label-warning">Warning</span>
            </template>

            <template v-if="hasAside" #actionAside>
                <span class="panel-action">
                    <i class="fa fa-star-o"></i>
                </span>
            </template>

            <div v-for="c in colors" :style="{ background: c, height: '5px' }"></div>
        </Panel>
    </template>
    <template #result>
    </template>
</GalleryAndResult>`
            });
            personPickerGallery = vue_1.defineComponent({
                name: "PersonPickerGallery",
                components: {
                    GalleryAndResult,
                    PersonPicker: personPicker_1.default
                },
                data() {
                    return {
                        value: undefined
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        PersonPicker
    </template>
    <template #gallery>
        <PersonPicker v-model="value" label="Person" />
    </template>
    <template #result>
        <span v-if="value">{{ JSON.stringify(value) }}</span>
    </template>
</GalleryAndResult>`
            });
            fileUploaderGallery = vue_1.defineComponent({
                name: "FileUploaderGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    FileUploader: fileUploader_1.default,
                    TextBox: textBox_1.default
                },
                data() {
                    return {
                        binaryFileTypeGuid: "C1142570-8CD6-4A20-83B1-ACB47C1CD377",
                        showDeleteButton: true,
                        uploadAsTemporary: true,
                        uploadButtonText: "Upload",
                        value: null
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        File Uploader
    </template>
    <template #gallery>
        <CheckBox v-model="uploadAsTemporary" label="Upload As Temporary" />
        <CheckBox v-model="showDeleteButton" label="Show Delete Button" />
        <TextBox v-model="binaryFileTypeGuid" label="Binary File Type Guid" />
        <TextBox v-model="uploadButtonText" label="Upload Button Text" />

        <FileUploader v-model="value"
            label="File Uploader"
            :uploadAsTemporary="uploadAsTemporary"
            :binaryFileTypeGuid="binaryFileTypeGuid"
            :uploadButtonText="uploadButtonText"
            :showDeleteButton="showDeleteButton" />
    </template>
    <template #result>
        {{ JSON.stringify(value) }}
    </template>
</GalleryAndResult>`
            });
            imageUploaderGallery = vue_1.defineComponent({
                name: "ImageUploaderGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    ImageUploader: imageUploader_1.default,
                    TextBox: textBox_1.default
                },
                data() {
                    return {
                        binaryFileTypeGuid: "C1142570-8CD6-4A20-83B1-ACB47C1CD377",
                        showDeleteButton: true,
                        uploadAsTemporary: true,
                        uploadButtonText: "Upload",
                        value: null
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        Image Uploader
    </template>
    <template #gallery>
        <CheckBox v-model="uploadAsTemporary" label="Upload As Temporary" />
        <CheckBox v-model="showDeleteButton" label="Show Delete Button" />
        <TextBox v-model="binaryFileTypeGuid" label="Binary File Type Guid" />
        <TextBox v-model="uploadButtonText" label="Upload Button Text" />

        <ImageUploader v-model="value"
            label="Image Uploader"
            :uploadAsTemporary="uploadAsTemporary"
            :binaryFileTypeGuid="binaryFileTypeGuid"
            :uploadButtonText="uploadButtonText"
            :showDeleteButton="showDeleteButton" />
    </template>
    <template #result>
        {{ JSON.stringify(value) }}
    </template>
</GalleryAndResult>`
            });
            slidingDateRangePickerGallery = vue_1.defineComponent({
                name: "SlidingDateRangePickerGallery",
                components: {
                    GalleryAndResult,
                    SlidingDateRangePicker: slidingDateRangePicker_1.default
                },
                setup() {
                    const value = vue_1.ref(null);
                    const valueText = vue_1.computed(() => value.value ? slidingDateRange_1.slidingDateRangeToString(value.value) : "");
                    return {
                        value,
                        valueText
                    };
                },
                template: `
<GalleryAndResult>
    <template #header>
        SlidingDateRangePicker
    </template>
    <template #gallery>
        <SlidingDateRangePicker v-model="value" label="Sliding Date Range" />
    </template>
    <template #result>
        <div v-if="value">
            <div>{{ value }}</div>
            <div>{{ valueText }}</div>
        </div>
    </template>
</GalleryAndResult>`
            });
            flowNodeDiagram = vue_1.defineComponent({
                name: "FlowNodeDiagramGallery",
                components: {
                    GalleryAndResult,
                    CheckBox: checkBox_1.default,
                    FlowNodeDiagram: flowNodeDiagram_1.default
                },
                setup() {
                    const flowNodes = [
                        {
                            "id": 10,
                            "name": "First-time Guest",
                            "color": "#BCE17C",
                            "order": 1
                        },
                        {
                            "id": 14,
                            "name": "Renewal",
                            "color": "#F89487",
                            "order": 2
                        },
                        {
                            "id": 12,
                            "name": "Baptism",
                            "color": "#7EB0D5",
                            "order": 3
                        },
                        {
                            "id": 13,
                            "name": "Salvation",
                            "color": "#C593C6",
                            "order": 4
                        }
                    ];
                    const flowEdges = [
                        {
                            targetId: 10,
                            sourceId: null,
                            level: 1,
                            units: 154320,
                            tooltip: "Avg days between tasks: <br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: null,
                            level: 1,
                            units: 44422,
                            tooltip: "Avg days between tasks: <br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: null,
                            level: 1,
                            units: 37326,
                            tooltip: "Avg days between tasks: <br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: null,
                            level: 1,
                            units: 21100,
                            tooltip: "Avg days between tasks: <br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 12,
                            level: 2,
                            units: 2791,
                            tooltip: "Avg days between tasks: 828<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 12,
                            level: 2,
                            units: 474,
                            tooltip: "Avg days between tasks: 679<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 12,
                            level: 2,
                            units: 2307,
                            tooltip: "Avg days between tasks: 785<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 14,
                            level: 2,
                            units: 3112,
                            tooltip: "Avg days between tasks: 420<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 10,
                            level: 2,
                            units: 34452,
                            tooltip: "Avg days between tasks: 282<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 10,
                            level: 2,
                            units: 34184,
                            tooltip: "Avg days between tasks: 182<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 14,
                            level: 2,
                            units: 8282,
                            tooltip: "Avg days between tasks: 67<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 13,
                            level: 2,
                            units: 936,
                            tooltip: "Avg days between tasks: 867<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 14,
                            level: 2,
                            units: 3178,
                            tooltip: "Avg days between tasks: 753<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 10,
                            level: 2,
                            units: 4186,
                            tooltip: "Avg days between tasks: 504<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 13,
                            level: 2,
                            units: 3062,
                            tooltip: "Avg days between tasks: 385<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 13,
                            level: 2,
                            units: 7400,
                            tooltip: "Avg days between tasks: 64<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 10,
                            level: 2,
                            units: 1738,
                            tooltip: "Avg days between tasks: 746<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 12,
                            level: 2,
                            units: 278,
                            tooltip: "Avg days between tasks: 1200<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 14,
                            level: 2,
                            units: 3207,
                            tooltip: "Avg days between tasks: 876<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 13,
                            level: 2,
                            units: 5877,
                            tooltip: "Avg days between tasks: 829<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 12,
                            level: 3,
                            units: 145,
                            tooltip: "Avg days between tasks: 613<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 14,
                            level: 3,
                            units: 709,
                            tooltip: "Avg days between tasks: 382<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 10,
                            level: 3,
                            units: 1302,
                            tooltip: "Avg days between tasks: 306<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 13,
                            level: 3,
                            units: 3664,
                            tooltip: "Avg days between tasks: 345<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 12,
                            level: 3,
                            units: 2563,
                            tooltip: "Avg days between tasks: 675<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 14,
                            level: 3,
                            units: 3272,
                            tooltip: "Avg days between tasks: 583<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 10,
                            level: 3,
                            units: 175,
                            tooltip: "Avg days between tasks: 594<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 14,
                            level: 3,
                            units: 4964,
                            tooltip: "Avg days between tasks: 773<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 13,
                            level: 3,
                            units: 624,
                            tooltip: "Avg days between tasks: 485<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 10,
                            level: 3,
                            units: 2629,
                            tooltip: "Avg days between tasks: 610<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 13,
                            level: 3,
                            units: 1093,
                            tooltip: "Avg days between tasks: 891<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 14,
                            level: 3,
                            units: 3153,
                            tooltip: "Avg days between tasks: 317<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 12,
                            level: 3,
                            units: 1213,
                            tooltip: "Avg days between tasks: 600<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 12,
                            level: 3,
                            units: 58,
                            tooltip: "Avg days between tasks: 972<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 13,
                            level: 3,
                            units: 8238,
                            tooltip: "Avg days between tasks: 789<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 10,
                            level: 3,
                            units: 1142,
                            tooltip: "Avg days between tasks: 442<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 14,
                            level: 4,
                            units: 865,
                            tooltip: "Avg days between tasks: 614<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 12,
                            level: 4,
                            units: 44,
                            tooltip: "Avg days between tasks: 942<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 14,
                            level: 4,
                            units: 2745,
                            tooltip: "Avg days between tasks: 691<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 10,
                            level: 4,
                            units: 486,
                            tooltip: "Avg days between tasks: 427<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 13,
                            level: 4,
                            units: 1492,
                            tooltip: "Avg days between tasks: 837<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 10,
                            level: 4,
                            units: 103,
                            tooltip: "Avg days between tasks: 461<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 14,
                            level: 4,
                            units: 323,
                            tooltip: "Avg days between tasks: 251<br>Here's another line of text"
                        },
                        {
                            targetId: 14,
                            sourceId: 12,
                            level: 4,
                            units: 2234,
                            tooltip: "Avg days between tasks: 733<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 13,
                            level: 4,
                            units: 695,
                            tooltip: "Avg days between tasks: 383<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 12,
                            level: 4,
                            units: 541,
                            tooltip: "Avg days between tasks: 627<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 14,
                            level: 4,
                            units: 1407,
                            tooltip: "Avg days between tasks: 292<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 10,
                            level: 4,
                            units: 25,
                            tooltip: "Avg days between tasks: 460<br>Here's another line of text"
                        },
                        {
                            targetId: 10,
                            sourceId: 13,
                            level: 4,
                            units: 187,
                            tooltip: "Avg days between tasks: 305<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 13,
                            level: 4,
                            units: 304,
                            tooltip: "Avg days between tasks: 818<br>Here's another line of text"
                        },
                        {
                            targetId: 12,
                            sourceId: 12,
                            level: 4,
                            units: 46,
                            tooltip: "Avg days between tasks: 901<br>Here's another line of text"
                        },
                        {
                            targetId: 13,
                            sourceId: 10,
                            level: 4,
                            units: 222,
                            tooltip: "Avg days between tasks: 173<br>Here's another line of text"
                        }
                    ];
                    const isLoading = vue_1.ref(false);
                    return {
                        flowNodes,
                        flowEdges,
                        isLoading
                    };
                },
                template: `
<GalleryAndResult :splitWidth="false">
    <template #header>
        Flow Node Diagram
    </template>
    <template #gallery>
        <CheckBox v-model="isLoading" label="" text="Show Loading State" />
    </template>
    <template #result>
        <FlowNodeDiagram :flowNodes="flowNodes" :flowEdges="flowEdges" :isLoading="isLoading" />
    </template>
</GalleryAndResult>`
            });
            galleryComponents = {
                attributeValuesContainerGallery,
                filterRules,
                textBoxGallery,
                datePickerGallery,
                dateRangePickerGallery,
                dateTimePickerGallery,
                datePartsPickerGallery,
                radioButtonListGallery,
                dialogGallery,
                checkBoxGallery,
                inlineCheckBoxGallery,
                switchGallery,
                inlineSwitchGallery,
                checkBoxListGallery,
                listBoxGallery,
                phoneNumberBoxGallery,
                dropDownListGallery,
                helpBlockGallery,
                formRulesGallery,
                colorPickerGallery,
                numberBoxGallery,
                numberRangeBoxGallery,
                genderDropDownListGallery,
                socialSecurityNumberBoxGallery,
                timePickerGallery,
                ratingGallery,
                currencyBoxGallery,
                emailBoxGallery,
                numberUpDownGallery,
                staticFormControlGallery,
                addressControlGallery,
                toggleGallery,
                progressTrackerGallery,
                itemsWithPreAndPostHtmlGallery,
                fullscreenGallery,
                panelGallery,
                personPickerGallery,
                fileUploaderGallery,
                imageUploaderGallery,
                slidingDateRangePickerGallery,
                flowNodeDiagram,
            };
            galleryTemplate = Object.keys(galleryComponents).sort().map(g => `<${g} />`).join("");
            exports_1("default", vue_1.defineComponent({
                name: "Example.ControlGallery",
                components: Object.assign({ Panel: panel_1.default }, galleryComponents),
                template: `
<Panel type="block" hasFullscreen>
    <template v-slot:title>
        <i class="fa fa-flask"></i>
        Obsidian Control Gallery
    </template>
    <template v-slot:default>
        ${galleryTemplate}
    </template>
</Panel>`
            }));
        }
    };
});
//# sourceMappingURL=controlGallery.js.map