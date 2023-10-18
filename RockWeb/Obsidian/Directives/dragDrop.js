System.register(['@Obsidian/Utility/page', '@Obsidian/Utility/guid'], (function (exports) {
  'use strict';
  var loadJavaScriptAsync, newGuid;
  return {
    setters: [function (module) {
      loadJavaScriptAsync = module.loadJavaScriptAsync;
    }, function (module) {
      newGuid = module.newGuid;
    }],
    execute: (function () {

      exports('useDragReorder', useDragReorder);

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

      var dragulaScriptPromise = loadJavaScriptAsync("/Scripts/dragula.min.js", () => window.dragula !== undefined);
      class DragDropService {
        constructor(identifier) {
          _defineProperty(this, "sourceContainers", []);
          _defineProperty(this, "targetContainers", []);
          this.id = identifier;
          this.options = {
            accepts: this.drakeAccepts.bind(this),
            copy: this.drakeCopy.bind(this),
            moves: this.drakeMoves.bind(this),
            revertOnSpill: true
          };
          this.drake = window.dragula([], this.options);
          this.drake.on("drag", this.drakeEventDrag.bind(this));
          this.drake.on("drop", this.drakeEventDrop.bind(this));
          this.drake.on("over", this.drakeEventOver.bind(this));
          this.drake.on("out", this.drakeEventOut.bind(this));
          this.drake.on("cancel", this.drakeEventCancel.bind(this));
          this.drake.on("dragend", this.drakeEventEnd.bind(this));
          this.drake.on("shadow", this.drakeEventShadow.bind(this));
        }
        isFinished() {
          return this.sourceContainers.length === 0 && this.targetContainers.length === 0;
        }
        destroy() {
          this.drake.destroy();
        }
        addSourceContainer(container, options) {
          var containerIndex = this.sourceContainers.findIndex(c => c.element === container);
          if (containerIndex === -1) {
            this.sourceContainers.push({
              element: container,
              options: options
            });
          }
          this.updateDrakeContainers();
        }
        addTargetContainer(container, options) {
          var containerIndex = this.targetContainers.findIndex(c => c.element === container);
          if (containerIndex === -1) {
            this.targetContainers.push({
              element: container,
              options: options
            });
          }
          this.updateDrakeContainers();
        }
        removeSourceContainer(container) {
          var containerIndex = this.sourceContainers.findIndex(c => c.element === container);
          if (containerIndex !== -1) {
            this.sourceContainers.splice(containerIndex, 1);
          }
          this.updateDrakeContainers();
        }
        removeTargetContainer(container) {
          var containerIndex = this.targetContainers.findIndex(c => c.element === container);
          if (containerIndex !== -1) {
            this.targetContainers.splice(containerIndex, 1);
          }
          this.updateDrakeContainers();
        }
        updateDrakeContainers() {
          this.drake.containers = this.sourceContainers.map(c => c.element).concat(...this.targetContainers.map(c => c.element));
        }
        drakeCopy(el, container) {
          var elementOptions = this.sourceContainers.find(c => c.element === container);
          if ((elementOptions === null || elementOptions === void 0 ? void 0 : elementOptions.options.copyElement) !== undefined) {
            if (typeof elementOptions.options.copyElement === "function") {
              var _el$nextElementSiblin;
              var sourceIndex = Array.from(container.children).indexOf(el);
              return elementOptions.options.copyElement({
                element: el,
                sourceContainer: container,
                sourceIndex: sourceIndex,
                sourceSibling: (_el$nextElementSiblin = el.nextElementSibling) !== null && _el$nextElementSiblin !== void 0 ? _el$nextElementSiblin : undefined
              });
            } else {
              return elementOptions.options.copyElement;
            }
          }
          return false;
        }
        drakeMoves(el, container, handle, sibling) {
          if (!el || !container || !handle) {
            return false;
          }
          var elementOptions = this.sourceContainers.find(c => c.element === container);
          if (!elementOptions) {
            return false;
          }
          this.options.mirrorContainer = elementOptions.options.mirrorContainer || container;
          if (elementOptions.options.startDrag) {
            var sourceIndex = Array.from(container.children).indexOf(el);
            return elementOptions.options.startDrag({
              element: el,
              sourceContainer: container,
              sourceIndex,
              sourceSibling: sibling !== null && sibling !== void 0 ? sibling : undefined
            }, handle);
          }
          if (elementOptions.options.handleSelector) {
            return Array.from(container.querySelectorAll(elementOptions.options.handleSelector)).some(n => n.contains(handle));
          }
          return true;
        }
        drakeAccepts(el, target, source, sibling) {
          if (!el || !source || !target) {
            return false;
          }
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          var targetOptions = this.targetContainers.find(c => c.element === target);
          if (!sourceOptions || !targetOptions || !this.internalOperation) {
            return false;
          }
          var realSibling = sibling && sibling.classList.contains("gu-transit") ? sibling.nextElementSibling : sibling;
          var targetIndex = realSibling ? Array.from(target.children).indexOf(realSibling) - 1 : target.children.length - 1;
          if (sourceOptions.options.acceptDrop !== undefined) {
            return sourceOptions.options.acceptDrop(_objectSpread2(_objectSpread2({}, this.internalOperation), {}, {
              targetContainer: target,
              targetIndex,
              targetSibling: realSibling !== null && realSibling !== void 0 ? realSibling : undefined
            }));
          }
          return true;
        }
        drakeEventDrag(el, source) {
          var _el$nextElementSiblin2;
          var sourceIndex = Array.from(source.children).indexOf(el);
          this.internalOperation = {
            element: el,
            sourceContainer: source,
            sourceIndex,
            sourceSibling: (_el$nextElementSiblin2 = el.nextElementSibling) !== null && _el$nextElementSiblin2 !== void 0 ? _el$nextElementSiblin2 : undefined
          };
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          if (!sourceOptions) {
            return;
          }
          if (sourceOptions.options.dragBegin) {
            sourceOptions.options.dragBegin(_objectSpread2({}, this.internalOperation));
          }
        }
        drakeEventDrop(el, target, source, sibling) {
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          var targetOptions = this.targetContainers.find(c => c.element === target);
          if (!sourceOptions || !targetOptions || !this.internalOperation) {
            return;
          }
          var targetIndex = Array.from(target.children).indexOf(el);
          if (sourceOptions.options.dragDrop) {
            sourceOptions.options.dragDrop(_objectSpread2(_objectSpread2({}, this.internalOperation), {}, {
              element: el,
              targetContainer: target,
              targetIndex,
              targetSibling: sibling !== null && sibling !== void 0 ? sibling : undefined
            }));
          }
        }
        drakeEventCancel(el, lastContainer, source) {
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          if (!sourceOptions || !this.internalOperation) {
            return;
          }
          if (sourceOptions.options.dragCancel) {
            sourceOptions.options.dragCancel(_objectSpread2({}, this.internalOperation));
          }
        }
        drakeEventOver(el, target, source) {
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          var targetOptions = this.targetContainers.find(c => c.element === target);
          if (!sourceOptions || !targetOptions || !this.internalOperation) {
            return;
          }
          if (sourceOptions.options.dragOver) {
            sourceOptions.options.dragOver(_objectSpread2(_objectSpread2({}, this.internalOperation), {}, {
              targetContainer: target
            }));
          }
        }
        drakeEventOut(el, target, source) {
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          var targetOptions = this.targetContainers.find(c => c.element === target);
          if (!sourceOptions || !targetOptions || !this.internalOperation) {
            return;
          }
          if (sourceOptions.options.dragOut) {
            sourceOptions.options.dragOut(_objectSpread2(_objectSpread2({}, this.internalOperation), {}, {
              targetContainer: target
            }));
          }
        }
        drakeEventEnd(el) {
          var sourceOptions = this.sourceContainers.find(c => {
            var _this$internalOperati;
            return c.element === ((_this$internalOperati = this.internalOperation) === null || _this$internalOperati === void 0 ? void 0 : _this$internalOperati.sourceContainer);
          });
          if (!sourceOptions || !this.internalOperation || this.internalOperation.element !== el) {
            return;
          }
          if (sourceOptions.options.dragEnd) {
            sourceOptions.options.dragEnd(_objectSpread2({}, this.internalOperation));
          }
        }
        drakeEventShadow(el, target, source) {
          var sourceOptions = this.sourceContainers.find(c => c.element === source);
          var targetOptions = this.targetContainers.find(c => c.element === target);
          if (!sourceOptions || !targetOptions || !this.internalOperation) {
            return;
          }
          if (sourceOptions.options.dragShadow) {
            sourceOptions.options.dragShadow(_objectSpread2(_objectSpread2({}, this.internalOperation), {}, {
              shadow: el
            }));
          }
        }
      }
      var knownServices = {};
      function getExistingDragDropService(identifier) {
        return knownServices[identifier];
      }
      function getDragDropService(identifier) {
        if (knownServices[identifier]) {
          return knownServices[identifier];
        }
        var service = new DragDropService(identifier);
        knownServices[identifier] = service;
        return service;
      }
      function destroyService(service) {
        service.destroy();
        delete knownServices[service.id];
      }
      function getTargetOptions(value) {
        if (!value) {
          return null;
        }
        if (typeof value === "string") {
          return {
            id: value
          };
        } else if (typeof value === "object" && value.id) {
          return value;
        } else {
          return null;
        }
      }
      var DragSource = exports('DragSource', {
        mounted(element, binding) {
          if (!binding.value || !binding.value.id) {
            console.error("DragSource must have a valid identifier.");
            return;
          }
          dragulaScriptPromise.then(() => {
            var service = getDragDropService(binding.value.id);
            service.addSourceContainer(element, binding.value);
          });
        },
        unmounted(element, binding) {
          if (!binding.value || !binding.value.id) {
            return;
          }
          var service = getExistingDragDropService(binding.value.id);
          if (service) {
            service.removeSourceContainer(element);
            if (service.isFinished()) {
              destroyService(service);
            }
          }
        }
      });
      var DragTarget = exports('DragTarget', {
        mounted(element, binding) {
          var options = getTargetOptions(binding.value);
          if (!options) {
            console.error("DragTarget must have a valid identifier.");
            return;
          }
          dragulaScriptPromise.then(() => {
            if (options) {
              var service = getDragDropService(options.id);
              service.addTargetContainer(element, options);
            }
          });
        },
        unmounted(element, binding) {
          var options = getTargetOptions(binding.value);
          if (!options) {
            return;
          }
          var service = getExistingDragDropService(options.id);
          if (service) {
            service.removeTargetContainer(element);
            if (service.isFinished()) {
              destroyService(service);
            }
          }
        }
      });
      var DragReorder = exports('DragReorder', {
        mounted(element, binding) {
          if (!binding.value || !binding.value.id) {
            console.error("DragReorder must have a valid identifier.");
            return;
          }
          dragulaScriptPromise.then(() => {
            var service = getDragDropService(binding.value.id);
            service.addSourceContainer(element, binding.value);
            service.addTargetContainer(element, binding.value);
          });
        },
        unmounted(element, binding) {
          if (!binding.value || !binding.value.id) {
            return;
          }
          var service = getExistingDragDropService(binding.value.id);
          if (service) {
            service.removeTargetContainer(element);
            service.removeSourceContainer(element);
            if (service.isFinished()) {
              destroyService(service);
            }
          }
        }
      });
      function useDragReorder(values, reorder) {
        return {
          id: newGuid(),
          copyElement: false,
          handleSelector: ".reorder-handle",
          dragDrop(operation) {
            if (operation.targetIndex === undefined || operation.sourceIndex === operation.targetIndex) {
              return;
            }
            if (!values.value || operation.sourceIndex >= values.value.length) {
              return;
            }
            var targetIndex = operation.sourceIndex > operation.targetIndex ? operation.targetIndex : operation.targetIndex + 1;
            var value = values.value[operation.sourceIndex];
            var beforeValue = targetIndex < values.value.length ? values.value[targetIndex] : null;
            values.value.splice(operation.sourceIndex, 1);
            values.value.splice(operation.targetIndex, 0, value);
            if (reorder) {
              reorder(value, beforeValue);
            }
          }
        };
      }

    })
  };
}));
//# sourceMappingURL=dragDrop.js.map
