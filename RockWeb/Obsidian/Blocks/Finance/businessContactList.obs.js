System.register(['vue', '@Obsidian/Utility/block', '@Obsidian/SystemGuids/entityType', '@Obsidian/Controls/grid', '@Obsidian/Utility/dialogs', '@Obsidian/Controls/modal.obs', '@Obsidian/Controls/personPicker.obs'], (function (exports) {
  'use strict';
  var defineComponent, ref, watch, openBlock, createElementBlock, Fragment, createVNode, unref, withCtx, createBlock, createCommentVNode, reactive, useConfigurationValues, useInvokeBlockAction, EntityType, Grid, TextColumn, textValueFilter, DeleteColumn, alert, Modal, PersonPicker;
  return {
    setters: [function (module) {
      defineComponent = module.defineComponent;
      ref = module.ref;
      watch = module.watch;
      openBlock = module.openBlock;
      createElementBlock = module.createElementBlock;
      Fragment = module.Fragment;
      createVNode = module.createVNode;
      unref = module.unref;
      withCtx = module.withCtx;
      createBlock = module.createBlock;
      createCommentVNode = module.createCommentVNode;
      reactive = module.reactive;
    }, function (module) {
      useConfigurationValues = module.useConfigurationValues;
      useInvokeBlockAction = module.useInvokeBlockAction;
    }, function (module) {
      EntityType = module.EntityType;
    }, function (module) {
      Grid = module["default"];
      TextColumn = module.TextColumn;
      textValueFilter = module.textValueFilter;
      DeleteColumn = module.DeleteColumn;
    }, function (module) {
      alert = module.alert;
    }, function (module) {
      Modal = module["default"];
    }, function (module) {
      PersonPicker = module["default"];
    }],
    execute: (function () {

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

      var NavigationUrlKey = function (NavigationUrlKey) {
        NavigationUrlKey["PersonProfilePage"] = "PersonProfilePage";
        return NavigationUrlKey;
      }({});

      var script = exports('default', defineComponent({
        name: 'businessContactList',
        setup(__props) {
          var config = useConfigurationValues();
          var invokeBlockAction = useInvokeBlockAction();
          var gridDataSource = ref();
          var gridData;
          var isModalOpen = ref(false);
          var contact = ref();
          function loadGridData() {
            return _loadGridData.apply(this, arguments);
          }
          function _loadGridData() {
            _loadGridData = _asyncToGenerator(function* () {
              var result = yield invokeBlockAction("GetGridData");
              if (result.isSuccess && result.data) {
                gridData = reactive(result.data);
                return gridData;
              } else {
                var _result$errorMessage;
                throw new Error((_result$errorMessage = result.errorMessage) !== null && _result$errorMessage !== void 0 ? _result$errorMessage : "Unknown error while trying to load grid data.");
              }
            });
            return _loadGridData.apply(this, arguments);
          }
          function onSelectItem(key) {
            var _config$navigationUrl;
            if ((_config$navigationUrl = config.navigationUrls) !== null && _config$navigationUrl !== void 0 && _config$navigationUrl[NavigationUrlKey.PersonProfilePage]) {
              window.location.href = config.navigationUrls[NavigationUrlKey.PersonProfilePage].replace("((Key))", key);
            }
          }
          function onDeleteClick(_x) {
            return _onDeleteClick.apply(this, arguments);
          }
          function _onDeleteClick() {
            _onDeleteClick = _asyncToGenerator(function* (key) {
              var result = yield invokeBlockAction("Delete", {
                key
              });
              if (result.isSuccess) {
                if (gridData && gridData.rows) {
                  var index = gridData.rows.findIndex(r => r["idKey"] === key);
                  if (index !== -1) {
                    var _gridData$rows;
                    (_gridData$rows = gridData.rows) === null || _gridData$rows === void 0 ? void 0 : _gridData$rows.splice(index, 1);
                  }
                }
              } else {
                var _result$errorMessage2;
                yield alert((_result$errorMessage2 = result.errorMessage) !== null && _result$errorMessage2 !== void 0 ? _result$errorMessage2 : "Unknown error while trying to delete business contact.");
              }
            });
            return _onDeleteClick.apply(this, arguments);
          }
          function onAddItem() {
            isModalOpen.value = true;
          }
          function onSaveContact() {
            return _onSaveContact.apply(this, arguments);
          }
          function _onSaveContact() {
            _onSaveContact = _asyncToGenerator(function* () {
              var bag = {
                contact: contact.value
              };
              var result = yield invokeBlockAction("Save", {
                bag
              });
              if (result.isSuccess) {
                gridDataSource.value = loadGridData();
                isModalOpen.value = false;
              } else {
                var _result$errorMessage3;
                yield alert((_result$errorMessage3 = result.errorMessage) !== null && _result$errorMessage3 !== void 0 ? _result$errorMessage3 : "Unknown error while trying to save Contact.");
              }
            });
            return _onSaveContact.apply(this, arguments);
          }
          watch(isModalOpen, () => {
            if (!isModalOpen) {
              contact.value = undefined;
            }
          });
          gridDataSource.value = loadGridData();
          return (_ctx, _cache) => {
            var _unref$gridDefinition;
            return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Grid), {
              definition: (_unref$gridDefinition = unref(config).gridDefinition) !== null && _unref$gridDefinition !== void 0 ? _unref$gridDefinition : undefined,
              data: gridDataSource.value,
              keyField: "idKey",
              itemTerm: "Business Contacts",
              entityTypeGuid: unref(EntityType).Person,
              stickyHeader: "",
              liveUpdates: "",
              showLaunchWorkflow: false,
              onAddItem: unref(config).isAddEnabled ? onAddItem : undefined,
              onSelectItem: onSelectItem
            }, {
              default: withCtx(() => [createVNode(unref(TextColumn), {
                name: "name",
                title: "Contact Name",
                field: "name",
                filter: unref(textValueFilter),
                visiblePriority: "xs"
              }, null, 8, ["filter"]), unref(config).isDeleteEnabled ? (openBlock(), createBlock(unref(DeleteColumn), {
                key: 0,
                onClick: onDeleteClick,
                disableConfirmation: true
              })) : createCommentVNode("v-if", true)]),
              _: 1
            }, 8, ["definition", "data", "entityTypeGuid", "onAddItem"]), createVNode(unref(Modal), {
              modelValue: isModalOpen.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isModalOpen.value = $event),
              title: "Add Contact",
              saveText: "Save",
              onSave: onSaveContact
            }, {
              default: withCtx(() => [createVNode(unref(PersonPicker), {
                modelValue: contact.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => contact.value = $event),
                label: "Contact",
                rules: "required"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["modelValue"])], 64);
          };
        }
      }));

      script.__file = "src/Finance/businessContactList.obs";

    })
  };
}));
//# sourceMappingURL=businessContactList.obs.js.map
