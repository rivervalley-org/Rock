System.register(['@Obsidian/Utility/bus', '@Obsidian/Templates/block', '@Obsidian/Controls/secondaryBlock', '@Obsidian/Controls/rockButton', '@Obsidian/Controls/textBox', 'vue', '@Obsidian/PageState'], (function (exports) {
    'use strict';
    var bus, Block, SecondaryBlock, RockButton, TextBox, defineComponent, useStore;
    return {
        setters: [function (module) {
            bus = module["default"];
        }, function (module) {
            Block = module["default"];
        }, function (module) {
            SecondaryBlock = module["default"];
        }, function (module) {
            RockButton = module["default"];
        }, function (module) {
            TextBox = module["default"];
        }, function (module) {
            defineComponent = module.defineComponent;
        }, function (module) {
            useStore = module.useStore;
        }],
        execute: (function () {

            var store = useStore();
            var personSecondary = exports('default', defineComponent({
              name: "Example.PersonSecondary",
              components: {
                Block,
                SecondaryBlock,
                TextBox,
                RockButton
              },
              data() {
                return {
                  messageToPublish: "",
                  receivedMessage: ""
                };
              },
              methods: {
                receiveMessage(message) {
                  this.receivedMessage = message;
                },
                doPublish() {
                  bus.publish("PersonSecondary:Message", this.messageToPublish);
                  this.messageToPublish = "";
                },
                doThrowError() {
                  throw new Error("This is an uncaught error");
                }
              },
              computed: {
                currentPerson() {
                  return store.state.currentPerson;
                },
                currentPersonName() {
                  var _this$currentPerson;
                  return ((_this$currentPerson = this.currentPerson) === null || _this$currentPerson === void 0 ? void 0 : _this$currentPerson.fullName) || "anonymous";
                },
                imageUrl() {
                  var _this$currentPerson2;
                  return ((_this$currentPerson2 = this.currentPerson) === null || _this$currentPerson2 === void 0 ? void 0 : _this$currentPerson2.photoUrl) || "/Assets/Images/person-no-photo-unknown.svg";
                },
                photoElementStyle() {
                  return "background-image: url(\"".concat(this.imageUrl, "\"); background-size: cover; background-repeat: no-repeat;");
                }
              },
              created() {
                bus.subscribe("PersonDetail:Message", this.receiveMessage);
              },
              template: "<SecondaryBlock>\n    <Block title=\"Secondary Block\">\n        <template #default>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <p>\n                        Hi, {{currentPersonName}}!\n                        <div class=\"photo-icon photo-round photo-round-sm\" :style=\"photoElementStyle\"></div>\n                    </p>\n                    <p>This is a secondary block. It respects the store's value indicating if secondary blocks are visible.</p>\n                    <RockButton btnType=\"danger\" btnSize=\"sm\" @click=\"doThrowError\">Throw Error</RockButton>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"well\">\n                        <TextBox label=\"Message\" v-model=\"messageToPublish\" />\n                        <RockButton btnType=\"primary\" btnSize=\"sm\" @click=\"doPublish\">Publish</RockButton>\n                    </div>\n                    <p>\n                        <strong>Detail block says:</strong>\n                        {{receivedMessage}}\n                    </p>\n                </div>\n            </div>\n        </template>\n    </Block>\n</SecondaryBlock>"
            }));

        })
    };
}));
//# sourceMappingURL=personSecondary.js.map
