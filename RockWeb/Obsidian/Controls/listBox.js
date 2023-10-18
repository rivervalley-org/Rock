System.register(['vue', '@Obsidian/Utility/guid', './rockFormField'], (function (exports) {
    'use strict';
    var defineComponent, newGuid, RockFormField;
    return {
        setters: [function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            newGuid = module.newGuid;
        }, function (module) {
            RockFormField = module["default"];
        }],
        execute: (function () {

            var listBox = exports('default', defineComponent({
              name: "ListBox",
              components: {
                RockFormField
              },
              props: {
                modelValue: {
                  type: Array,
                  default: []
                },
                items: {
                  type: Array,
                  default: []
                },
                formControlClasses: {
                  type: String,
                  default: ""
                },
                enhanceForLongLists: {
                  type: Boolean,
                  default: false
                }
              },
              data: function data() {
                return {
                  uniqueId: "rock-listbox-".concat(newGuid()),
                  internalValue: [],
                  isMounted: false
                };
              },
              computed: {
                compiledFormControlClasses() {
                  if (this.enhanceForLongLists) {
                    return this.formControlClasses + " chosen-select";
                  }
                  return this.formControlClasses;
                }
              },
              methods: {
                getChosenJqueryEl() {
                  var jquery = window["$"];
                  var $chosenDropDown = jquery(this.$refs["theSelect"]);
                  if (!$chosenDropDown || !$chosenDropDown.length) {
                    $chosenDropDown = jquery("#".concat(this.uniqueId));
                  }
                  return $chosenDropDown;
                },
                createOrDestroyChosen() {
                  if (!this.isMounted) {
                    return;
                  }
                  var $chosenDropDown = this.getChosenJqueryEl();
                  if (this.enhanceForLongLists) {
                    $chosenDropDown.chosen({
                      width: "100%",
                      placeholder_text_multiple: " ",
                      placeholder_text_single: " "
                    }).change(() => {
                      this.internalValue = $chosenDropDown.val();
                    });
                  } else {
                    $chosenDropDown.chosen("destroy");
                  }
                },
                syncValue() {
                  if (this.internalValue.length === this.modelValue.length && this.internalValue.every((v, i) => v === this.modelValue[i])) {
                    return;
                  }
                  this.internalValue = this.modelValue;
                  if (this.enhanceForLongLists) {
                    this.$nextTick(() => {
                      var $chosenDropDown = this.getChosenJqueryEl();
                      $chosenDropDown.trigger("chosen:updated");
                    });
                  }
                }
              },
              watch: {
                modelValue: {
                  immediate: true,
                  handler() {
                    this.syncValue();
                  }
                },
                items: {
                  immediate: true,
                  handler() {
                    this.syncValue();
                  }
                },
                internalValue() {
                  this.$emit("update:modelValue", this.internalValue);
                },
                enhanceForLongLists() {
                  this.createOrDestroyChosen();
                }
              },
              mounted() {
                this.isMounted = true;
                this.createOrDestroyChosen();
              },
              template: "\n<RockFormField\n    :modelValue=\"internalValue\"\n    formGroupClasses=\"rock-drop-down-list\"\n    name=\"dropdownlist\">\n    <template #default=\"{uniqueId, field}\">\n        <div class=\"control-wrapper\">\n            <select :id=\"uniqueId\" class=\"form-control\" :class=\"compiledFormControlClasses\" v-bind=\"field\" v-model=\"internalValue\" ref=\"theSelect\" multiple>\n                <option v-if=\"showBlankItem\" :value=\"blankValue\"></option>\n                <option v-for=\"item in items\" :key=\"item.value\" :value=\"item.value\">{{item.text}}</option>\n            </select>\n        </div>\n    </template>\n</RockFormField>\n"
            }));

        })
    };
}));
//# sourceMappingURL=listBox.js.map
