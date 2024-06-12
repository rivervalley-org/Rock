System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var ChatMessageRole = {
              User: 0,
              System: 1,
              Assistant: 2
            };
            var ChatMessageRoleDescription = {
              0: "User",
              1: "System",
              2: "Assistant"
            };

            var chatMessageRole = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ChatMessageRole: ChatMessageRole,
                ChatMessageRoleDescription: ChatMessageRoleDescription
            });
            exports('chatMessageRole', chatMessageRole);

            var ModerationFlags = {
              None: 0,
              Hate: 1,
              Threat: 2,
              SelfHarm: 4,
              Sexual: 8,
              SexualMinor: 16,
              Violent: 32
            };
            var ModerationFlagsDescription = {
              0: "None",
              1: "Hate",
              2: "Threat",
              4: "Self Harm",
              8: "Sexual",
              16: "Sexual Minor",
              32: "Violent"
            };

            var moderationFlags = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ModerationFlags: ModerationFlags,
                ModerationFlagsDescription: ModerationFlagsDescription
            });
            exports('moderationFlags', moderationFlags);

        })
    };
}));
//# sourceMappingURL=AI.js.map
