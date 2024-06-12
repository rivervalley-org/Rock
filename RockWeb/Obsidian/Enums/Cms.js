System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var BlockLocation = {
              Layout: 0,
              Page: 1,
              Site: 2,
              None: 3
            };
            var BlockLocationDescription = {
              0: "Layout",
              1: "Page",
              2: "Site",
              3: "None"
            };

            var blockLocation = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BlockLocation: BlockLocation,
                BlockLocationDescription: BlockLocationDescription
            });
            exports('blockLocation', blockLocation);

            var BotGuardianLevel = {
              Inherit: -1,
              Disable: 0,
              Enable: 1
            };
            var BotGuardianLevelDescription = {
              [-1]: "Inherit",
              0: "Disable",
              1: "Enable"
            };

            var botGuardianLevel = /*#__PURE__*/Object.freeze({
                __proto__: null,
                BotGuardianLevel: BotGuardianLevel,
                BotGuardianLevelDescription: BotGuardianLevelDescription
            });
            exports('botGuardianLevel', botGuardianLevel);

            var ContentChannelDateType = {
              SingleDate: 1,
              DateRange: 2,
              NoDates: 3
            };
            var ContentChannelDateTypeDescription = {
              1: "Single Date",
              2: "Date Range",
              3: "No Dates"
            };

            var contentChannelDateType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentChannelDateType: ContentChannelDateType,
                ContentChannelDateTypeDescription: ContentChannelDateTypeDescription
            });
            exports('contentChannelDateType', contentChannelDateType);

            var ContentChannelItemStatus = {
              PendingApproval: 1,
              Approved: 2,
              Denied: 3
            };
            var ContentChannelItemStatusDescription = {
              1: "Pending Approval",
              2: "Approved",
              3: "Denied"
            };

            var contentChannelItemStatus = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentChannelItemStatus: ContentChannelItemStatus,
                ContentChannelItemStatusDescription: ContentChannelItemStatusDescription
            });
            exports('contentChannelItemStatus', contentChannelItemStatus);

            var ContentCollectionFilterControl = {
              Pills: 0,
              Dropdown: 1,
              Boolean: 2
            };
            var ContentCollectionFilterControlDescription = {
              0: "Pills",
              1: "Dropdown",
              2: "Boolean"
            };

            var contentCollectionFilterControl = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentCollectionFilterControl: ContentCollectionFilterControl,
                ContentCollectionFilterControlDescription: ContentCollectionFilterControlDescription
            });
            exports('contentCollectionFilterControl', contentCollectionFilterControl);

            var ContentControlType = {
              CodeEditor: 0,
              HtmlEditor: 1
            };
            var ContentControlTypeDescription = {
              0: "Code Editor",
              1: "Html Editor"
            };

            var contentControlType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentControlType: ContentControlType,
                ContentControlTypeDescription: ContentControlTypeDescription
            });
            exports('contentControlType', contentControlType);

            var ContentLibraryItemExperienceLevel = {
              Foundational: 1,
              Intermediate: 2,
              Advanced: 3
            };
            var ContentLibraryItemExperienceLevelDescription = {
              1: "Foundational",
              2: "Intermediate",
              3: "Advanced"
            };

            var contentLibraryItemExperienceLevel = /*#__PURE__*/Object.freeze({
                __proto__: null,
                ContentLibraryItemExperienceLevel: ContentLibraryItemExperienceLevel,
                ContentLibraryItemExperienceLevelDescription: ContentLibraryItemExperienceLevelDescription
            });
            exports('contentLibraryItemExperienceLevel', contentLibraryItemExperienceLevel);

            var DisplayInNavWhen = {
              WhenAllowed: 0,
              Always: 1,
              Never: 2
            };
            var DisplayInNavWhenDescription = {
              0: "When Allowed",
              1: "Always",
              2: "Never"
            };

            var displayInNavWhen = /*#__PURE__*/Object.freeze({
                __proto__: null,
                DisplayInNavWhen: DisplayInNavWhen,
                DisplayInNavWhenDescription: DisplayInNavWhenDescription
            });
            exports('displayInNavWhen', displayInNavWhen);

            var PersistedDatasetDataFormat = {
              JSON: 0
            };
            var PersistedDatasetDataFormatDescription = {
              0: "JSON"
            };

            var persistedDatasetDataFormat = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PersistedDatasetDataFormat: PersistedDatasetDataFormat,
                PersistedDatasetDataFormatDescription: PersistedDatasetDataFormatDescription
            });
            exports('persistedDatasetDataFormat', persistedDatasetDataFormat);

            var PersistedDatasetScriptType = {
              Lava: 0
            };
            var PersistedDatasetScriptTypeDescription = {
              0: "Lava"
            };

            var persistedDatasetScriptType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                PersistedDatasetScriptType: PersistedDatasetScriptType,
                PersistedDatasetScriptTypeDescription: PersistedDatasetScriptTypeDescription
            });
            exports('persistedDatasetScriptType', persistedDatasetScriptType);

            var SiteType = {
              Web: 0,
              Mobile: 1,
              Tv: 2
            };
            var SiteTypeDescription = {
              0: "Web",
              1: "Mobile",
              2: "Tv"
            };

            var siteType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SiteType: SiteType,
                SiteTypeDescription: SiteTypeDescription
            });
            exports('siteType', siteType);

            var TagType = {
              Inline: 1,
              Block: 2
            };
            var TagTypeDescription = {
              1: "Inline",
              2: "Block"
            };

            var tagType = /*#__PURE__*/Object.freeze({
                __proto__: null,
                TagType: TagType,
                TagTypeDescription: TagTypeDescription
            });
            exports('tagType', tagType);

        })
    };
}));
//# sourceMappingURL=Cms.js.map
