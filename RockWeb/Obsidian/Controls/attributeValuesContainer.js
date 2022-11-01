System.register(["vue", "./tabbedContent", "./rockField", "../Elements/loadingIndicator", "../Util/linq", "../Util/guid"], function (exports_1, context_1) {
    "use strict";
    var vue_1, tabbedContent_1, rockField_1, loadingIndicator_1, linq_1, guid_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (tabbedContent_1_1) {
                tabbedContent_1 = tabbedContent_1_1;
            },
            function (rockField_1_1) {
                rockField_1 = rockField_1_1;
            },
            function (loadingIndicator_1_1) {
                loadingIndicator_1 = loadingIndicator_1_1;
            },
            function (linq_1_1) {
                linq_1 = linq_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            }
        ],
        execute: function () {
            exports_1("default", vue_1.defineComponent({
                name: "AttributeValuesContainer",
                components: {
                    RockField: rockField_1.default,
                    LoadingIndicator: loadingIndicator_1.default,
                    TabbedContent: tabbedContent_1.default,
                },
                props: {
                    modelValue: {
                        type: Object,
                        required: true
                    },
                    isEditMode: {
                        type: Boolean,
                        default: false
                    },
                    attributes: {
                        type: Object,
                        required: true
                    },
                    showEmptyValues: {
                        type: Boolean,
                        default: true
                    },
                    showAbbreviatedName: {
                        type: Boolean,
                        default: false
                    },
                    displayAsTabs: {
                        type: Boolean,
                        default: false
                    },
                    showCategoryLabel: {
                        type: Boolean,
                        default: true
                    },
                    numberOfColumns: {
                        type: Number,
                        default: 1
                    },
                    entityTypeName: {
                        type: String,
                        default: ""
                    }
                },
                setup(props, { emit }) {
                    const validAttributes = vue_1.computed(() => {
                        return new linq_1.List(Object.values(props.attributes))
                            .orderBy(a => a.order)
                            .toArray();
                    });
                    const values = vue_1.ref(Object.assign({}, props.modelValue));
                    const attributeCategories = vue_1.computed(() => {
                        const categoryList = [{
                                guid: guid_1.emptyGuid,
                                name: "Attributes",
                                order: 0,
                                attributes: []
                            }];
                        validAttributes.value.forEach(attr => {
                            var _a;
                            if (!props.showEmptyValues && !props.isEditMode && ((_a = props.modelValue[attr.key]) !== null && _a !== void 0 ? _a : "") == "") {
                                return;
                            }
                            if (attr.categories && attr.categories.length > 0) {
                                const categories = [...attr.categories];
                                categories.sort((a, b) => a.order - b.order).forEach((cat, i) => {
                                    var _a;
                                    const newCat = Object.assign({ attributes: [] }, cat);
                                    if (!categoryList.some(oldCat => oldCat.guid == newCat.guid)) {
                                        categoryList.push(newCat);
                                    }
                                    if (i == 0) {
                                        (_a = categoryList.find(cat => cat.guid == newCat.guid)) === null || _a === void 0 ? void 0 : _a.attributes.push(attr);
                                    }
                                });
                            }
                            else {
                                categoryList[0].attributes.push(attr);
                            }
                        });
                        return categoryList.filter(cat => cat.attributes.length > 0).sort((a, b) => a.order - b.order);
                    });
                    const actuallyDisplayAsTabs = vue_1.computed(() => {
                        if (attributeCategories.value.length === 0) {
                            return false;
                        }
                        const hasCategories = attributeCategories.value.length > 1 || attributeCategories.value[0].guid !== guid_1.emptyGuid;
                        return hasCategories && props.displayAsTabs && !props.isEditMode;
                    });
                    const defaultCategoryHeading = vue_1.computed(() => {
                        if (actuallyDisplayAsTabs.value || !props.entityTypeName) {
                            return "Attributes";
                        }
                        return `${props.entityTypeName} Attributes`;
                    });
                    const columnClass = vue_1.computed(() => {
                        let numColumns = props.numberOfColumns;
                        if (numColumns < 1) {
                            numColumns = 1;
                        }
                        else if (numColumns == 5) {
                            numColumns = 4;
                        }
                        else if (numColumns > 6 && numColumns < 12) {
                            numColumns = 6;
                        }
                        else if (numColumns > 12) {
                            numColumns = 12;
                        }
                        return `col-md-${12 / numColumns}`;
                    });
                    const onUpdateValue = (key, value) => {
                        values.value[key] = value;
                        emit("update:modelValue", values.value);
                    };
                    vue_1.watch(() => props.modelValue, () => {
                        values.value = Object.assign({}, props.modelValue);
                    });
                    return {
                        onUpdateValue,
                        validAttributes,
                        values,
                        attributeCategories,
                        actuallyDisplayAsTabs,
                        defaultCategoryHeading,
                        columnClass
                    };
                },
                template: `
<Suspense>
    <template #default>
        <TabbedContent v-if="actuallyDisplayAsTabs" :tabList="attributeCategories">
            <template #tab="{item}">
                {{ item.name }}
            </template>
            <template #tabpane="{item}">
                <div v-for="a in item.attributes" :key="a.attributeGuid">
                    <RockField
                        :isEditMode="isEditMode"
                        :attribute="a"
                        :modelValue="values[a.key]"
                        @update:modelValue="onUpdateValue(a.key, $event)"
                        :showEmptyValue="showEmptyValues"
                        :showAbbreviatedName="showAbbreviatedName"
                    />
                </div>
            </template>
        </TabbedContent>

        <template v-else>
            <div v-for="cat in attributeCategories" key="cat.guid">
                <h4 v-if="showCategoryLabel && cat.guid == '0' && !isEditMode">{{defaultCategoryHeading}}</h4>
                <h4 v-else-if="showCategoryLabel && cat.guid != '0'">{{cat.name}}</h4>

                <div class="attribute-value-container-display row">
                    <div :class="columnClass" v-for="a in cat.attributes" :key="a.attributeGuid">
                        <RockField
                            :isEditMode="isEditMode"
                            :attribute="a"
                            :modelValue="values[a.key]"
                            @update:modelValue="onUpdateValue(a.key, $event)"
                            :showEmptyValue="showEmptyValues"
                            :showAbbreviatedName="showAbbreviatedName"
                        />
                    </div>
                </div>
            </div>
        </template>
    </template>
    <template #fallback>
        <LoadingIndicator />
    </template>
</Suspense>
`
            }));
        }
    };
});
//# sourceMappingURL=attributeValuesContainer.js.map